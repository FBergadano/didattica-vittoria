// ═══════════════════════════════════════════════════════════════════════
//  Consegne e dubbi — Cloudflare Worker con database D1.
//  Istruzioni per pubblicarla: LEGGIMI.md in questa cartella.
//
//  Impostazioni della Worker (Settings → Variables and Secrets / Bindings):
//    DB               — binding al database D1
//    DOCENTE_PASSWORD — Secret: la password della pagina del docente
//    ORIGINE          — Variable: indirizzo del sito, es. https://fbergadano.github.io
//                       (più indirizzi separati da virgole)
//    TELEGRAM_TOKEN   — Secret facoltativo: il token del bot Telegram che avvisa il
//                       docente (dubbi, foto, schemi, risposte). Vedi LEGGIMI.md.
//    DOCENTE_URL      — Variable facoltativa: indirizzo della pagina del docente,
//                       aggiunto in fondo a ogni notifica.
//    RESEND_KEY       — Secret facoltativo: chiave di resend.com, per mandare al docente
//                       un'email con il testo di ogni dubbio e di ogni osservazione.
//    EMAIL_DOCENTE    — Secret: l'indirizzo a cui arrivano quelle email.
//
//  Nel database non ci sono nomi: solo codici (es. GIUR) scelti dal docente.
//  I PIN sono salvati solo come impronta (HMAC), mai in chiaro.
//  La Worker non registra indirizzi IP.
// ═══════════════════════════════════════════════════════════════════════

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS conf (k TEXT PRIMARY KEY, v TEXT)`,
  `CREATE TABLE IF NOT EXISTS studenti (
     classe TEXT NOT NULL, codice TEXT NOT NULL,
     pin TEXT, sale TEXT, ver INTEGER NOT NULL DEFAULT 0,
     errori INTEGER NOT NULL DEFAULT 0, blocco INTEGER NOT NULL DEFAULT 0,
     PRIMARY KEY (classe, codice))`,
  `CREATE TABLE IF NOT EXISTS risposte (
     classe TEXT NOT NULL, codice TEXT NOT NULL, pagina TEXT NOT NULL, chiave TEXT NOT NULL,
     sezione TEXT, etichetta TEXT, dati TEXT,
     ok REAL, primo_ok REAL, primo_ts INTEGER, ultimo_ts INTEGER,
     verifiche INTEGER NOT NULL DEFAULT 0, ricevuto INTEGER, esercizio TEXT,
     PRIMARY KEY (classe, codice, pagina, chiave))`,
  `CREATE TABLE IF NOT EXISTS dubbi (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     classe TEXT NOT NULL, codice TEXT NOT NULL, pagina TEXT, sezione TEXT, ancora TEXT,
     testo TEXT NOT NULL, ts INTEGER NOT NULL,
     risposta TEXT, risposta_ts INTEGER, risolto INTEGER NOT NULL DEFAULT 0)`,
  `CREATE INDEX IF NOT EXISTS dubbi_classe ON dubbi (classe, ts)`,
  // foto dei compiti su carta: l'immagine (già ridotta dal telefono) è salvata come testo base64
  `CREATE TABLE IF NOT EXISTS foto (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     classe TEXT NOT NULL, codice TEXT NOT NULL, compito TEXT, ts INTEGER NOT NULL,
     tipo TEXT NOT NULL, dim INTEGER NOT NULL, dati TEXT NOT NULL)`,
  `CREATE INDEX IF NOT EXISTS foto_classe ON foto (classe, compito)`,
  // schemi per l'interrogazione: uno schema costruito sul sito (tipo "mappa", dati JSON)
  // oppure un file (PDF o foto, in base64)
  `CREATE TABLE IF NOT EXISTS schemi (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     classe TEXT NOT NULL, codice TEXT NOT NULL, pagina TEXT, titolo TEXT, ts INTEGER NOT NULL,
     tipo TEXT NOT NULL, dim INTEGER NOT NULL, dati TEXT NOT NULL)`,
  `CREATE INDEX IF NOT EXISTS schemi_classe ON schemi (classe, ts)`,
  // osservazioni (critiche, proposte…): se lo studente le nasconde, codice e/o classe
  // NON vengono salvati (restano NULL), e per le anonime l'orario è solo il giorno
  `CREATE TABLE IF NOT EXISTS osservazioni (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     classe TEXT, codice TEXT, testo TEXT NOT NULL, ts INTEGER NOT NULL,
     letta INTEGER NOT NULL DEFAULT 0)`,
  // quante osservazioni ha mandato oggi ogni studente (contro gli abusi): la chiave è
  // un'impronta (HMAC) del giorno, della classe e del codice, senza legame con i messaggi
  `CREATE TABLE IF NOT EXISTS limiti (k TEXT PRIMARY KEY, n INTEGER NOT NULL)`,
  // appunti presi a lezione (bonus alla verifica): per ogni lezione (giorno e materia) e
  // studente, stato = 'ok' (appunti adeguati), 'no' (non adeguati), 'ass' (assente: non conta)
  `CREATE TABLE IF NOT EXISTS appunti (
     classe TEXT NOT NULL, data TEXT NOT NULL, materia TEXT NOT NULL, codice TEXT NOT NULL, stato TEXT NOT NULL,
     PRIMARY KEY (classe, data, materia, codice))`,
  // questionari anonimi (vedi «Questionari anonimi» in LEGGIMI.md): nessun codice, nessun
  // orario. Le risposte hanno come chiave un numero a caso (WITHOUT ROWID: nemmeno l'ordine
  // in cui sono salvate dice chi ha risposto per primo) e si cancellano dopo l'email.
  `CREATE TABLE IF NOT EXISTS q_sessioni (
     id TEXT PRIMARY KEY, titolo TEXT, classe TEXT NOT NULL, domande TEXT NOT NULL,
     aperto INTEGER NOT NULL DEFAULT 0, scadenza INTEGER NOT NULL, inviato INTEGER NOT NULL DEFAULT 0)`,
  // chi ha già consegnato (per non rispondere due volte), in una tabella SEPARATA dalle
  // risposte e senza nulla che le colleghi: niente orario, ordine alfabetico
  `CREATE TABLE IF NOT EXISTS q_partecipanti (
     qid TEXT NOT NULL, classe TEXT NOT NULL, codice TEXT NOT NULL, PRIMARY KEY (qid, classe, codice)) WITHOUT ROWID`,
  // rid = impronta (HMAC) di una chiave a caso che sta solo sul telefono dello studente:
  // serve a sostituire la risposta se la corregge, senza sapere di chi è
  `CREATE TABLE IF NOT EXISTS q_risposte (
     qid TEXT NOT NULL, rid TEXT NOT NULL, dati TEXT NOT NULL, PRIMARY KEY (qid, rid)) WITHOUT ROWID`,
];

const MAX_ERRORI_PIN = 8, BLOCCO_MS = 15 * 60 * 1000;
const MAX_DUBBI_GIORNO = 20, MAX_OSS_GIORNO = 10;
const MAX_FOTO_GIORNO = 40, MAX_FOTO_B64 = 1400000; // ~1 MB per foto (il telefono le riduce a ~300 KB)
const MAX_SCHEMI_GIORNO = 30, MAX_MAPPA = 400000;
const RE_CLASSE = /^[A-Za-z0-9][A-Za-z0-9 _-]{0,15}$/, RE_CODICE = /^[A-Z]{2,12}$/;

let pronto = null; // le tabelle si creano una volta sola per istanza

async function preparaDB(env) {
  const DB = env.DB;
  // tabella dei questionari creata da una prima versione (con il codice alla lavagna e le
  // risposte attese, senza classe e scadenza): si rifà da capo, dentro c'erano solo prove
  const col = (await DB.prepare('PRAGMA table_info(q_sessioni)').all()).results.map((r) => r.name);
  if (col.length && !(col.includes('classe') && col.includes('scadenza')))
    await DB.batch(['q_sessioni', 'q_risposte', 'q_partecipanti'].map((t) => DB.prepare('DROP TABLE IF EXISTS ' + t)));
  // tabella degli appunti di una prima versione, senza la materia (mai usata): si rifà
  const ca = (await DB.prepare('PRAGMA table_info(appunti)').all()).results.map((r) => r.name);
  if (ca.length && !ca.includes('materia')) await DB.prepare('DROP TABLE appunti').run();
  await DB.batch(SCHEMA.map((s) => DB.prepare(s)));
  // database creati prima che esistesse la colonna "esercizio" (numero del Verifica Subito!/Prova tu!)
  await DB.prepare('ALTER TABLE risposte ADD COLUMN esercizio TEXT').run().catch(() => {});
}

export default {
  // ogni ora (cron in wrangler.toml): chiude i questionari scaduti e manda l'email
  async scheduled(ev, env, ctx) {
    if (!env.DB) return;
    await preparaDB(env);
    const r = await env.DB.prepare('SELECT id FROM q_sessioni WHERE aperto = 1 AND scadenza <= ?').bind(Date.now()).all();
    for (const { id } of r.results) await qChiudi(id, env).catch(() => {});
    // un invio fallito si riprova all'ora successiva
    const f = await env.DB.prepare('SELECT id FROM q_sessioni WHERE aperto = 0 AND inviato = 0').all();
    for (const { id } of f.results) await qChiudi(id, env).catch(() => {});
  },
  async fetch(req, env, ctx) {
    const cors = corsHeaders(req, env);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    try {
      if (!env.DB) return json({ errore: 'manca il database (binding DB)' }, 500, cors);
      if (!pronto) pronto = preparaDB(env).catch((e) => { pronto = null; throw e; });
      await pronto;
      const url = new URL(req.url);
      const p = url.pathname.replace(/\/+$/, '') || '/';
      const corpo = req.method === 'POST' ? await req.json().catch(() => ({})) : {};

      if (p.startsWith('/docente/')) {
        const ok = await docenteAutorizzato(req, env);
        if (ok !== true) return json({ errore: ok }, 401, cors);
        return await docente(p, url, corpo, env, cors, ctx);
      }
      switch (p) {
        case '/':            return json({ ok: true, servizio: 'consegne' }, 200, cors);
        case '/classi':      return json({ classi: (await env.DB.prepare('SELECT DISTINCT classe FROM studenti ORDER BY classe').all()).results.map((r) => r.classe) }, 200, cors);
        case '/accedi':      return await accedi(corpo, env, cors);
        case '/risposte':    return await risposte(corpo, env, cors, ctx);
        case '/dubbi':       return await nuovoDubbio(corpo, env, cors, ctx);
        case '/miei-dubbi':  return await mieiDubbi(corpo, env, cors);
        case '/osservazione': return await nuovaOsservazione(corpo, env, cors, ctx);
        case '/foto':        return await nuovaFoto(corpo, env, cors, ctx);
        case '/mie-foto':    return await mieFoto(corpo, env, cors);
        case '/miei-appunti': return await mieiAppunti(corpo, env, cors);
        case '/foto-elimina': return await eliminaFoto(corpo, env, cors);
        case '/schema':      return await nuovoSchema(corpo, env, cors, ctx);
        case '/miei-schemi': return await mieiSchemi(corpo, env, cors);
        case '/schema-elimina': return await eliminaSchema(corpo, env, cors);
        case '/questionario/stato': return await qStato(corpo, env, cors);
        case '/questionario/invia': return await qInvia(corpo, env, cors);
      }
      return json({ errore: 'percorso sconosciuto' }, 404, cors);
    } catch (e) {
      return json({ errore: 'errore interno', dettaglio: String(e && e.message || e) }, 500, cors);
    }
  },
};

// ───────── utilità ─────────
function corsHeaders(req, env) {
  const ammessi = String(env.ORIGINE || '').split(',').map((s) => s.trim().replace(/\/+$/, '')).filter(Boolean);
  const o = req.headers.get('Origin') || '';
  return {
    'Access-Control-Allow-Origin': ammessi.includes(o) ? o : (ammessi[0] || ''),
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Docente',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}
function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), { status, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
}
const enc = new TextEncoder();
function b64u(buf) { return btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
function stessa(a, b) { // confronto a tempo costante
  a = String(a); b = String(b);
  let d = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) d |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return d === 0;
}
async function segreto(env) {
  let r = await env.DB.prepare("SELECT v FROM conf WHERE k = 'segreto'").first();
  if (r) return r.v;
  const s = b64u(crypto.getRandomValues(new Uint8Array(32)));
  await env.DB.prepare("INSERT OR IGNORE INTO conf (k, v) VALUES ('segreto', ?)").bind(s).run();
  r = await env.DB.prepare("SELECT v FROM conf WHERE k = 'segreto'").first();
  return r.v;
}
async function hmac(env, testo) {
  const key = await crypto.subtle.importKey('raw', enc.encode(await segreto(env)), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64u(await crypto.subtle.sign('HMAC', key, enc.encode(testo)));
}
function str(x, max) { return x == null ? null : String(x).slice(0, max); }
function num01(x) { const n = Number(x); return x == null || !isFinite(n) ? null : Math.max(0, Math.min(1, n)); }
function orario(ts, ora) {  // orario mandato dal telefono: accetto solo valori plausibili
  const n = Number(ts);
  if (!ts || !isFinite(n)) return null;
  if (n > ora + 5 * 60 * 1000) return ora;
  if (n < ora - 400 * 24 * 3600 * 1000) return null;
  return Math.round(n);
}

// ───────── studenti ─────────
async function accedi(c, env, cors) {
  const classe = str(c.classe, 16), codice = str(c.codice, 12), pin = str(c.pin, 4);
  if (!RE_CLASSE.test(classe || '') || !RE_CODICE.test(codice || '') || !/^\d{4}$/.test(pin || '')) return json({ errore: 'dati' }, 400, cors);
  const s = await env.DB.prepare('SELECT * FROM studenti WHERE classe = ? AND codice = ?').bind(classe, codice).first();
  if (!s) return json({ errore: 'codice' }, 404, cors);
  const ora = Date.now();
  if (s.blocco > ora) return json({ errore: 'bloccato' }, 429, cors);
  let nuovo = false;
  if (!s.pin) {
    const sale = b64u(crypto.getRandomValues(new Uint8Array(12)));
    const imp = await hmac(env, `pin|${classe}|${codice}|${sale}|${pin}`);
    const r = await env.DB.prepare('UPDATE studenti SET pin = ?, sale = ?, errori = 0, blocco = 0 WHERE classe = ? AND codice = ? AND pin IS NULL')
      .bind(imp, sale, classe, codice).run();
    if (!r.meta.changes) return json({ errore: 'pin' }, 403, cors); // qualcun altro l'ha appena impostato
    nuovo = true;
  } else {
    const imp = await hmac(env, `pin|${classe}|${codice}|${s.sale}|${pin}`);
    if (!stessa(imp, s.pin)) {
      const err = s.errori + 1;
      await env.DB.prepare('UPDATE studenti SET errori = ?, blocco = ? WHERE classe = ? AND codice = ?')
        .bind(err >= MAX_ERRORI_PIN ? 0 : err, err >= MAX_ERRORI_PIN ? ora + BLOCCO_MS : 0, classe, codice).run();
      return json({ errore: err >= MAX_ERRORI_PIN ? 'bloccato' : 'pin' }, 403, cors);
    }
    if (s.errori) await env.DB.prepare('UPDATE studenti SET errori = 0 WHERE classe = ? AND codice = ?').bind(classe, codice).run();
  }
  const base = `${classe}|${codice}|${s.ver}`;
  const token = b64u(enc.encode(base)) + '.' + (await hmac(env, 'tok|' + base));
  return json({ token, nuovo }, 200, cors);
}

async function studenteDa(token, env) {
  const [b, firma] = String(token || '').split('.');
  if (!b || !firma) return null;
  let base;
  try { base = new TextDecoder().decode(Uint8Array.from(atob(b.replace(/-/g, '+').replace(/_/g, '/')), (ch) => ch.charCodeAt(0))); } catch (e) { return null; }
  if (!stessa(firma, await hmac(env, 'tok|' + base))) return null;
  const [classe, codice, ver] = base.split('|');
  const s = await env.DB.prepare('SELECT ver FROM studenti WHERE classe = ? AND codice = ?').bind(classe, codice).first();
  if (!s || String(s.ver) !== ver) return null; // studente tolto o PIN azzerato
  return { classe, codice };
}

async function risposte(c, env, cors, ctx) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const items = Array.isArray(c.items) ? c.items.slice(0, 100) : [];
  const ora = Date.now();
  const sql = env.DB.prepare(`
    INSERT INTO risposte (classe, codice, pagina, chiave, sezione, etichetta, dati, ok, primo_ok, primo_ts, ultimo_ts, verifiche, ricevuto, esercizio)
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14)
    ON CONFLICT (classe, codice, pagina, chiave) DO UPDATE SET
      sezione   = COALESCE(excluded.sezione, sezione),
      etichetta = COALESCE(excluded.etichetta, etichetta),
      dati      = COALESCE(excluded.dati, dati),
      ok        = COALESCE(excluded.ok, ok),
      primo_ok  = COALESCE(primo_ok, excluded.primo_ok),
      primo_ts  = CASE WHEN primo_ts IS NULL THEN excluded.primo_ts
                       WHEN excluded.primo_ts IS NULL THEN primo_ts
                       ELSE MIN(primo_ts, excluded.primo_ts) END,
      ultimo_ts = CASE WHEN ultimo_ts IS NULL THEN excluded.ultimo_ts
                       WHEN excluded.ultimo_ts IS NULL THEN ultimo_ts
                       ELSE MAX(ultimo_ts, excluded.ultimo_ts) END,
      verifiche = verifiche + excluded.verifiche,
      ricevuto  = excluded.ricevuto,
      esercizio = COALESCE(excluded.esercizio, esercizio)`);
  const righe = [];
  for (const it of items) {
    const pagina = str(it.pagina, 200), ns = str(it.ns, 30), id = str(it.id, 120);
    if (!pagina || !ns || id == null) continue;
    let dati = it.dati === undefined ? null : JSON.stringify(it.dati);
    if (dati && dati.length > 6000) dati = JSON.stringify({ troppo_lungo: true });
    const ts0 = orario(it.ts0, ora), ts = orario(it.ts, ora);
    righe.push(sql.bind(st.classe, st.codice, pagina, ns + ':' + id, str(it.sezione, 120), str(it.etichetta, 200), dati,
      num01(it.ok), num01(it.ok0 !== undefined ? it.ok0 : it.ok), ts0 ?? ts, ts ?? ts0,
      Math.max(0, Math.min(50, Number(it.n) || 0)), ora, str(it.esercizio, 10)));
  }
  if (righe.length) await env.DB.batch(righe);
  // una notifica al giorno per studente e pagina: «ha cominciato a consegnare»
  const oggi = new Date(ora + 2 * 3600 * 1000).toISOString().slice(0, 10);
  for (const pg of new Set(items.map((it) => str(it.pagina, 200)).filter(Boolean)))
    notifica(env, ctx, `✏️ ${st.codice} (${st.classe}) ha cominciato a consegnare: ${nomePagina(pg)}`, `r|${st.classe}|${st.codice}|${pg}|${oggi}`, 36 * 3600 * 1000);
  return json({ ok: righe.length }, 200, cors);
}

async function nuovoDubbio(c, env, cors, ctx) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const testo = str(c.testo, 2000);
  if (!testo || !testo.trim()) return json({ errore: 'vuoto' }, 400, cors);
  const ora = Date.now();
  const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM dubbi WHERE classe = ? AND codice = ? AND ts > ?').bind(st.classe, st.codice, ora - 24 * 3600 * 1000).first();
  if (n.n >= MAX_DUBBI_GIORNO) return json({ errore: 'troppi' }, 429, cors);
  await env.DB.prepare('INSERT INTO dubbi (classe, codice, pagina, sezione, ancora, testo, ts) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .bind(st.classe, st.codice, str(c.pagina, 200), str(c.sezione, 120), str(c.ancora, 120), testo.trim(), ora).run();
  const t = testo.trim();
  const dove = (c.pagina ? ` — ${nomePagina(str(c.pagina, 200))}` : '') + (c.sezione ? `, «${str(c.sezione, 120)}»` : '');
  notifica(env, ctx, `❓ Nuovo dubbio da ${st.codice} (${st.classe})` + dove + `\n\n${t.length > 400 ? t.slice(0, 400) + '…' : t}`);
  email(env, ctx, `Dubbio da ${st.codice} (${st.classe})`, `Dubbio da ${st.codice} (${st.classe})${dove}\n\n${t}`);
  return json({ ok: true }, 200, cors);
}

// Osservazione: critiche, proposte, commenti sulla didattica o sul rapporto con il prof.
// Con nascondi_codice / nascondi_classe il dato non arriva nemmeno nel database.
async function nuovaOsservazione(c, env, cors, ctx) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const testo = str(c.testo, 4000);
  if (!testo || !testo.trim()) return json({ errore: 'vuoto' }, 400, cors);
  const ora = Date.now(), oggi = new Date(ora + 2 * 3600 * 1000).toISOString().slice(0, 10);
  const k = oggi + '|' + await hmac(env, `oss|${oggi}|${st.classe}|${st.codice}`);
  const n = await env.DB.prepare('SELECT n FROM limiti WHERE k = ?').bind(k).first();
  if (n && n.n >= MAX_OSS_GIORNO) return json({ errore: 'troppi' }, 429, cors);
  const senzaCodice = !!c.nascondi_codice, senzaClasse = !!c.nascondi_classe;
  const classe = senzaClasse ? null : st.classe, codice = senzaCodice ? null : st.codice;
  // un'osservazione anonima porta solo il giorno, non l'ora: l'orario potrebbe dire chi era collegato
  const ts = senzaCodice ? Date.parse(oggi + 'T12:00:00Z') : ora;
  await env.DB.batch([
    env.DB.prepare('INSERT INTO osservazioni (classe, codice, testo, ts) VALUES (?, ?, ?, ?)').bind(classe, codice, testo.trim(), ts),
    env.DB.prepare('INSERT INTO limiti (k, n) VALUES (?, 1) ON CONFLICT(k) DO UPDATE SET n = n + 1').bind(k),
    env.DB.prepare('DELETE FROM limiti WHERE k < ?').bind(oggi),
  ]);
  const chi = (codice || 'anonimo') + (classe ? ` (${classe})` : codice ? '' : ', classe nascosta');
  const t = testo.trim();
  notifica(env, ctx, `💬 Nuova osservazione da ${chi}\n\n${t.length > 400 ? t.slice(0, 400) + '…' : t}`);
  email(env, ctx, `Osservazione da ${chi}`, `Osservazione da ${chi}\n\n${t}`);
  return json({ ok: true }, 200, cors);
}

async function mieiDubbi(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const r = await env.DB.prepare('SELECT id, pagina, sezione, testo, ts, risposta, risposta_ts, risolto FROM dubbi WHERE classe = ? AND codice = ? ORDER BY ts DESC LIMIT 30')
    .bind(st.classe, st.codice).all();
  return json({ dubbi: r.results }, 200, cors);
}

async function nuovaFoto(c, env, cors, ctx) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const m = /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(String(c.immagine || ''));
  if (!m) return json({ errore: 'formato' }, 400, cors);
  if (m[2].length > MAX_FOTO_B64) return json({ errore: 'grande' }, 413, cors);
  const ora = Date.now();
  const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM foto WHERE classe = ? AND codice = ? AND ts > ?').bind(st.classe, st.codice, ora - 24 * 3600 * 1000).first();
  if (n.n >= MAX_FOTO_GIORNO) return json({ errore: 'troppe' }, 429, cors);
  const r = await env.DB.prepare('INSERT INTO foto (classe, codice, compito, ts, tipo, dim, dati) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .bind(st.classe, st.codice, str(c.compito, 200) || '', ora, m[1], Math.round(m[2].length * 3 / 4), m[2]).run();
  // più foto inviate insieme: una sola notifica
  notifica(env, ctx, `📷 ${st.codice} (${st.classe}) ha consegnato delle foto` + (c.compito ? ` — compito per ${String(c.compito).slice(0, 10)}` : ''),
    `f|${st.classe}|${st.codice}|${str(c.compito, 200) || ''}`, 15 * 60 * 1000);
  return json({ ok: true, id: r.meta.last_row_id }, 200, cors);
}
async function mieFoto(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const r = await env.DB.prepare('SELECT id, compito, ts, dim FROM foto WHERE classe = ? AND codice = ? ORDER BY ts DESC LIMIT 100').bind(st.classe, st.codice).all();
  return json({ foto: r.results }, 200, cors);
}
async function eliminaFoto(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  await env.DB.prepare('DELETE FROM foto WHERE id = ? AND classe = ? AND codice = ?').bind(Number(c.id), st.classe, st.codice).run();
  return json({ ok: true }, 200, cors);
}

// ───────── notifiche per il docente (bot Telegram) ─────────
// Il token del bot è il secret TELEGRAM_TOKEN; la chat a cui scrivere si collega dalla pagina
// del docente (scheda Dati) e sta nella tabella conf. Le notifiche partono in background
// (ctx.waitUntil), senza rallentare lo studente. Nei messaggi ci sono solo codici, mai nomi.
// chiave/finestra: niente doppioni (la stessa chiave non notifica di nuovo entro la finestra).
function notifica(env, ctx, testo, chiave, finestra) {
  if (!env.TELEGRAM_TOKEN || !ctx) return;
  ctx.waitUntil((async () => {
    try {
      const chat = await env.DB.prepare("SELECT v FROM conf WHERE k = 'telegram_chat'").first();
      if (!chat) return;
      const ora = Date.now();
      if (chiave) {
        const k = 'n|' + chiave;
        const r = await env.DB.prepare('SELECT v FROM conf WHERE k = ?').bind(k).first();
        if (r && ora - Number(r.v) < finestra) return;
        await env.DB.batch([
          env.DB.prepare('INSERT OR REPLACE INTO conf (k, v) VALUES (?, ?)').bind(k, String(ora)),
          env.DB.prepare("DELETE FROM conf WHERE k LIKE 'n|%' AND CAST(v AS INTEGER) < ?").bind(ora - 3 * 24 * 3600 * 1000),
        ]);
      }
      await telegram(env, chat.v, testo + (env.DOCENTE_URL ? '\n\n' + env.DOCENTE_URL : ''));
    } catch (e) {}
  })());
}
// email al docente (resend.com): parte in background, solo se RESEND_KEY ed EMAIL_DOCENTE ci sono
function email(env, ctx, oggetto, testo) {
  if (!env.RESEND_KEY || !env.EMAIL_DOCENTE || !ctx) return;
  ctx.waitUntil(fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + env.RESEND_KEY },
    body: JSON.stringify({
      from: env.EMAIL_MITTENTE || 'Didattica Vittoria <onboarding@resend.dev>', to: [env.EMAIL_DOCENTE],
      subject: oggetto, text: testo + (env.DOCENTE_URL ? '\n\n— ' + env.DOCENTE_URL : ''),
    }),
  }).catch(() => {}));
}
function telegram(env, chat, testo) {
  return fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text: testo, disable_web_page_preview: true }),
  });
}
function nomePagina(p) { return String(p || '').replace(/^\/?corsi\//, '').replace(/\/+$/, '').replace(/^[^/]*\//, '').replace(/^\d+_/, '').replace(/_/g, ' ') || p; }

// ───────── schemi per l'interrogazione ─────────
async function nuovoSchema(c, env, cors, ctx) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const ora = Date.now();
  const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM schemi WHERE classe = ? AND codice = ? AND ts > ?').bind(st.classe, st.codice, ora - 24 * 3600 * 1000).first();
  if (n.n >= MAX_SCHEMI_GIORNO) return json({ errore: 'troppi' }, 429, cors);
  const pagina = str(c.pagina, 200) || '', titolo = str(c.titolo, 200) || '';
  let tipo, dati;
  if (c.tipo === 'mappa' || c.tipo === 'relazione') {
    // schema costruito sul sito, o relazione di laboratorio compilata sul sito (dati JSON)
    dati = String(c.dati || '');
    if (dati.length > MAX_MAPPA) return json({ errore: 'grande' }, 413, cors);
    try { JSON.parse(dati); } catch (e) { return json({ errore: 'formato' }, 400, cors); }
    tipo = c.tipo;
    // dello schema (o della relazione) di un capitolo tengo solo l'ultima versione inviata
    await env.DB.prepare('DELETE FROM schemi WHERE classe = ? AND codice = ? AND pagina = ? AND tipo = ?').bind(st.classe, st.codice, pagina, tipo).run();
  } else {
    const m = /^data:(application\/pdf|image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(String(c.file || ''));
    if (!m) return json({ errore: 'formato' }, 400, cors);
    if (m[2].length > MAX_FOTO_B64) return json({ errore: 'grande' }, 413, cors);
    tipo = m[1]; dati = m[2];
  }
  const r = await env.DB.prepare('INSERT INTO schemi (classe, codice, pagina, titolo, ts, tipo, dim, dati) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(st.classe, st.codice, pagina, titolo, ora, tipo, (tipo === 'mappa' || tipo === 'relazione') ? dati.length : Math.round(dati.length * 3 / 4), dati).run();
  notifica(env, ctx, tipo === 'relazione' ? `📝 ${st.codice} (${st.classe}) ha consegnato la relazione` + (titolo ? `: ${titolo.replace(/^Relazione:\s*/, '')}` : '')
    : `🗺 ${st.codice} (${st.classe}) ha inviato uno schema per l'interrogazione` + (titolo ? `: ${titolo}` : ''), `s|${st.classe}|${st.codice}|${pagina}|${titolo}`, 5 * 60 * 1000);
  return json({ ok: true, id: r.meta.last_row_id }, 200, cors);
}
async function mieiSchemi(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const r = await env.DB.prepare('SELECT id, pagina, titolo, ts, tipo, dim FROM schemi WHERE classe = ? AND codice = ? ORDER BY ts DESC LIMIT 100').bind(st.classe, st.codice).all();
  return json({ schemi: r.results }, 200, cors);
}
async function eliminaSchema(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  await env.DB.prepare('DELETE FROM schemi WHERE id = ? AND classe = ? AND codice = ?').bind(Number(c.id), st.classe, st.codice).run();
  return json({ ok: true }, 200, cors);
}

// ───────── appunti presi a lezione ─────────
const RE_DATA = /^\d{4}-\d{2}-\d{2}$/, RE_MATERIA = /^[A-Za-zÀ-ÿ' ]{1,24}$/, STATI_APPUNTI = ['ok', 'no', 'ass'];
async function appuntiDa(env, classe) { // per ogni materia, da quale lezione si conta (si cambia dopo ogni verifica)
  const r = await env.DB.prepare('SELECT k, v FROM conf WHERE k LIKE ?').bind('appunti_da|' + classe + '|%').all();
  const da = {}; r.results.forEach((x) => { if (x.v) da[x.k.split('|')[2]] = x.v; });
  return da;
}
async function mieiAppunti(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const r = await env.DB.prepare('SELECT data, materia, stato FROM appunti WHERE classe = ? AND codice = ? ORDER BY data DESC')
    .bind(st.classe, st.codice).all();
  return json({ da: await appuntiDa(env, st.classe), lezioni: r.results }, 200, cors);
}

// ───────── docente ─────────
async function docenteAutorizzato(req, env) {
  if (!env.DOCENTE_PASSWORD) return 'password non impostata';
  const ora = Date.now();
  const b = await env.DB.prepare("SELECT v FROM conf WHERE k = 'docente_blocco'").first();
  const [err, fino] = (b ? b.v : '0|0').split('|').map(Number);
  if (fino > ora) return 'bloccato';
  if (stessa(req.headers.get('X-Docente') || '', env.DOCENTE_PASSWORD)) {
    if (err) await env.DB.prepare("DELETE FROM conf WHERE k = 'docente_blocco'").run();
    return true;
  }
  const e2 = err + 1;
  await env.DB.prepare("INSERT OR REPLACE INTO conf (k, v) VALUES ('docente_blocco', ?)").bind(e2 >= 10 ? `0|${ora + BLOCCO_MS}` : `${e2}|0`).run();
  return e2 >= 10 ? 'bloccato' : 'password';
}

async function docente(p, url, c, env, cors, ctx) {
  const q = (k) => url.searchParams.get(k);
  const DB = env.DB;
  switch (p) {
    case '/docente/studenti': {
      if (c.classe === undefined) { // elenco
        const r = await DB.prepare('SELECT classe, codice, pin IS NOT NULL AS pin, blocco > ? AS bloccato FROM studenti ORDER BY classe, codice').bind(Date.now()).all();
        return json({ studenti: r.results }, 200, cors);
      }
      // imposta l'elenco dei codici di una classe
      const classe = str(c.classe, 16);
      if (!RE_CLASSE.test(classe || '')) return json({ errore: 'nome della classe non valido' }, 400, cors);
      const codici = [...new Set((c.codici || []).map((x) => String(x).trim().toUpperCase()).filter(Boolean))];
      const brutti = codici.filter((x) => !RE_CODICE.test(x));
      if (brutti.length) return json({ errore: 'codici non validi (solo lettere, da 2 a 12): ' + brutti.join(', ') }, 400, cors);
      const attuali = (await DB.prepare('SELECT codice FROM studenti WHERE classe = ?').bind(classe).all()).results.map((r) => r.codice);
      const via = attuali.filter((x) => !codici.includes(x));
      const ops = codici.map((x) => DB.prepare('INSERT OR IGNORE INTO studenti (classe, codice) VALUES (?, ?)').bind(classe, x));
      for (const x of via) {
        ops.push(DB.prepare('DELETE FROM studenti WHERE classe = ? AND codice = ?').bind(classe, x));
        ops.push(DB.prepare('DELETE FROM risposte WHERE classe = ? AND codice = ?').bind(classe, x));
        ops.push(DB.prepare('DELETE FROM dubbi WHERE classe = ? AND codice = ?').bind(classe, x));
        ops.push(DB.prepare('DELETE FROM foto WHERE classe = ? AND codice = ?').bind(classe, x));
        ops.push(DB.prepare('DELETE FROM schemi WHERE classe = ? AND codice = ?').bind(classe, x));
        ops.push(DB.prepare('DELETE FROM appunti WHERE classe = ? AND codice = ?').bind(classe, x));
      }
      if (ops.length) await DB.batch(ops);
      return json({ ok: true, aggiunti: codici.filter((x) => !attuali.includes(x)).length, tolti: via.length }, 200, cors);
    }
    case '/docente/azzera-pin': {
      await DB.prepare('UPDATE studenti SET pin = NULL, sale = NULL, ver = ver + 1, errori = 0, blocco = 0 WHERE classe = ? AND codice = ?')
        .bind(str(c.classe, 16), str(c.codice, 12)).run();
      return json({ ok: true }, 200, cors);
    }
    case '/docente/risposte': { // riassunto di tutta la classe (senza i dati delle risposte)
      const r = await DB.prepare('SELECT codice, pagina, chiave, sezione, etichetta, ok, primo_ok, primo_ts, ultimo_ts, verifiche, esercizio FROM risposte WHERE classe = ?')
        .bind(q('classe')).raw();
      return json({ colonne: ['codice', 'pagina', 'chiave', 'sezione', 'etichetta', 'ok', 'primo_ok', 'primo_ts', 'ultimo_ts', 'verifiche', 'esercizio'], righe: r }, 200, cors);
    }
    case '/docente/dettaglio': { // tutte le risposte di uno studente su alcune pagine, con i dati
      const pagine = String(q('pagine') || '').split(',').filter(Boolean).slice(0, 20);
      if (!pagine.length) return json({ risposte: [] }, 200, cors);
      const r = await DB.prepare(`SELECT pagina, chiave, sezione, etichetta, dati, ok, primo_ok, primo_ts, ultimo_ts, verifiche, esercizio FROM risposte
                                  WHERE classe = ? AND codice = ? AND pagina IN (${pagine.map(() => '?').join(',')})`)
        .bind(q('classe'), q('codice'), ...pagine).all();
      return json({ risposte: r.results }, 200, cors);
    }
    case '/docente/dubbi': {
      const r = await DB.prepare('SELECT * FROM dubbi WHERE (?1 IS NULL OR classe = ?1) ORDER BY risolto, ts DESC LIMIT 500').bind(q('classe')).all();
      return json({ dubbi: r.results }, 200, cors);
    }
    case '/docente/dubbio': {
      const id = Number(c.id);
      if (c.risposta !== undefined) {
        const t = str(c.risposta, 4000);
        await DB.prepare('UPDATE dubbi SET risposta = ?, risposta_ts = ?, risolto = 1 WHERE id = ?').bind(t && t.trim() ? t.trim() : null, t && t.trim() ? Date.now() : null, id).run();
      }
      if (c.risolto !== undefined) await DB.prepare('UPDATE dubbi SET risolto = ? WHERE id = ?').bind(c.risolto ? 1 : 0, id).run();
      if (c.elimina) await DB.prepare('DELETE FROM dubbi WHERE id = ?').bind(id).run();
      return json({ ok: true }, 200, cors);
    }
    case '/docente/osservazioni': { // tutte le classi: un'osservazione può non avere classe
      const r = await DB.prepare('SELECT * FROM osservazioni ORDER BY letta, ts DESC LIMIT 500').all();
      return json({ osservazioni: r.results }, 200, cors);
    }
    case '/docente/osservazione': {
      const id = Number(c.id);
      if (c.letta !== undefined) await DB.prepare('UPDATE osservazioni SET letta = ? WHERE id = ?').bind(c.letta ? 1 : 0, id).run();
      if (c.elimina) await DB.prepare('DELETE FROM osservazioni WHERE id = ?').bind(id).run();
      return json({ ok: true }, 200, cors);
    }
    case '/docente/email': { // prova dell'email
      if (!env.RESEND_KEY || !env.EMAIL_DOCENTE) return json({ errore: 'mancano i secret RESEND_KEY ed EMAIL_DOCENTE' }, 400, cors);
      if (c.azione !== 'prova') return json({ attiva: true }, 200, cors);
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + env.RESEND_KEY },
        body: JSON.stringify({ from: env.EMAIL_MITTENTE || 'Didattica Vittoria <onboarding@resend.dev>', to: [env.EMAIL_DOCENTE], subject: 'Prova: le email funzionano', text: 'Da ora ti scrivo qui quando arriva un dubbio o un\'osservazione.' }),
      });
      if (!r.ok) return json({ errore: 'resend.com ha risposto: ' + (await r.text()).slice(0, 300) }, 400, cors);
      return json({ ok: true }, 200, cors);
    }
    case '/docente/foto': { // elenco delle foto di una classe (senza le immagini)
      const r = await DB.prepare('SELECT id, codice, compito, ts, dim FROM foto WHERE classe = ? ORDER BY ts DESC').bind(q('classe')).all();
      return json({ foto: r.results }, 200, cors);
    }
    case '/docente/immagine': { // una foto, come data URL
      const f = await DB.prepare('SELECT tipo, dati FROM foto WHERE id = ?').bind(Number(q('id'))).first();
      if (!f) return json({ errore: 'non trovata' }, 404, cors);
      return json({ src: 'data:' + f.tipo + ';base64,' + f.dati }, 200, cors);
    }
    case '/docente/foto-elimina': {
      await DB.prepare('DELETE FROM foto WHERE id = ?').bind(Number(c.id)).run();
      return json({ ok: true }, 200, cors);
    }
    case '/docente/schemi': { // elenco degli schemi di una classe (senza i dati)
      const r = await DB.prepare('SELECT id, codice, pagina, titolo, ts, tipo, dim FROM schemi WHERE classe = ? ORDER BY ts DESC').bind(q('classe')).all();
      return json({ schemi: r.results }, 200, cors);
    }
    case '/docente/schema': { // uno schema, con i dati
      const f = await DB.prepare('SELECT id, codice, pagina, titolo, ts, tipo, dati FROM schemi WHERE id = ?').bind(Number(q('id'))).first();
      if (!f) return json({ errore: 'non trovato' }, 404, cors);
      return json((f.tipo === 'mappa' || f.tipo === 'relazione') ? f : { ...f, dati: undefined, src: 'data:' + f.tipo + ';base64,' + f.dati }, 200, cors);
    }
    case '/docente/schema-elimina': {
      await DB.prepare('DELETE FROM schemi WHERE id = ?').bind(Number(c.id)).run();
      return json({ ok: true }, 200, cors);
    }
    case '/docente/telegram': { // stato, collegamento e prova delle notifiche
      const chat = await DB.prepare("SELECT v FROM conf WHERE k = 'telegram_chat'").first();
      if (c.azione === 'collega') {
        if (!env.TELEGRAM_TOKEN) return json({ errore: 'manca il secret TELEGRAM_TOKEN' }, 400, cors);
        // prima controllo il token: a quale bot appartiene?
        const me = await (await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/getMe`)).json().catch(() => ({}));
        if (!me.ok) return json({ errore: 'Telegram non accetta il token salvato (' + (me.description || 'errore sconosciuto') + '): rifai «npx wrangler@4 secret put TELEGRAM_TOKEN» incollando il token intero, con i due punti, senza spazi' }, 400, cors);
        const bot = '@' + me.result.username;
        // l'ultima chat che ha scritto al bot (il docente gli ha appena mandato /start)
        const u = await (await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/getUpdates`)).json().catch(() => ({}));
        if (!u.ok) return json({ errore: `${bot}: Telegram non mi dà i messaggi (${u.description || 'errore sconosciuto'})` }, 400, cors);
        const msg = (u.result || []).map((x) => x.message || x.edited_message).filter(Boolean).pop();
        if (!msg) return json({ errore: `il token salvato è quello del bot ${bot}, che non ha ricevuto messaggi: su Telegram apri proprio ${bot}, scrivigli /start e riprova (se il tuo bot ha un altro nome, il token salvato è di un altro bot)` }, 400, cors);
        await DB.prepare("INSERT OR REPLACE INTO conf (k, v) VALUES ('telegram_chat', ?)").bind(String(msg.chat.id)).run();
        await telegram(env, msg.chat.id, '✅ Notifiche collegate: da ora ti scrivo qui quando arrivano dubbi, foto, schemi e consegne.');
        return json({ ok: true, nome: [msg.chat.first_name, msg.chat.last_name].filter(Boolean).join(' ') || msg.chat.username || '' }, 200, cors);
      }
      if (c.azione === 'prova') {
        if (!env.TELEGRAM_TOKEN || !chat) return json({ errore: 'notifiche non collegate' }, 400, cors);
        await telegram(env, chat.v, '🔔 Prova: le notifiche funzionano.');
        return json({ ok: true }, 200, cors);
      }
      if (c.azione === 'scollega') { await DB.prepare("DELETE FROM conf WHERE k = 'telegram_chat'").run(); return json({ ok: true }, 200, cors); }
      return json({ token: !!env.TELEGRAM_TOKEN, collegato: !!chat }, 200, cors);
    }
    case '/docente/novita': { // ciò che è arrivato dopo un certo istante (per gli avvisi nella pagina del docente)
      const da = Number(q('da')) || 0;
      const [d, f, s, r, o] = await DB.batch([
        DB.prepare('SELECT classe, codice, ts FROM dubbi WHERE ts > ? ORDER BY ts DESC LIMIT 50').bind(da),
        DB.prepare('SELECT classe, codice, ts FROM foto WHERE ts > ? ORDER BY ts DESC LIMIT 50').bind(da),
        DB.prepare('SELECT classe, codice, ts FROM schemi WHERE ts > ? ORDER BY ts DESC LIMIT 50').bind(da),
        DB.prepare('SELECT classe, codice, pagina, MAX(ricevuto) AS ts FROM risposte WHERE ricevuto > ? GROUP BY classe, codice, pagina ORDER BY ts DESC LIMIT 50').bind(da),
        DB.prepare('SELECT id, classe, codice FROM osservazioni WHERE id > ? ORDER BY id DESC LIMIT 50').bind(Number(q('oss')) || 0),
      ]);
      return json({ ora: Date.now(), dubbi: d.results, foto: f.results, schemi: s.results, risposte: r.results, osservazioni: o.results }, 200, cors);
    }
    case '/docente/questionario': return await qDocente(c, env, cors);
    case '/docente/appunti': { // tutte le lezioni segnate di una classe, più la data da cui si conta (per materia)
      const classe = str(c.classe, 16);
      const r = await DB.prepare('SELECT data, materia, codice, stato FROM appunti WHERE classe = ? ORDER BY data').bind(classe).raw();
      return json({ da: await appuntiDa(env, classe), righe: r }, 200, cors);
    }
    case '/docente/appunti-salva': { // una lezione: { classe, data, materia, stati: { GIUR: 'ok', … } } (stati vuoto = cancella la lezione)
      const classe = str(c.classe, 16), data = str(c.data, 10), materia = str(c.materia, 24);
      if (!RE_CLASSE.test(classe || '') || !RE_DATA.test(data || '') || !RE_MATERIA.test(materia || '')) return json({ errore: 'dati' }, 400, cors);
      const codici = (await DB.prepare('SELECT codice FROM studenti WHERE classe = ?').bind(classe).all()).results.map((x) => x.codice);
      const stati = c.stati && typeof c.stati === 'object' ? c.stati : {};
      const ops = [DB.prepare('DELETE FROM appunti WHERE classe = ? AND data = ? AND materia = ?').bind(classe, data, materia)];
      for (const k of Object.keys(stati)) {
        if (codici.includes(k) && STATI_APPUNTI.includes(stati[k]))
          ops.push(DB.prepare('INSERT INTO appunti (classe, data, materia, codice, stato) VALUES (?, ?, ?, ?, ?)').bind(classe, data, materia, k, stati[k]));
      }
      await DB.batch(ops);
      return json({ ok: true, salvati: ops.length - 1 }, 200, cors);
    }
    case '/docente/appunti-da': { // nuovo conteggio di una materia (dopo una verifica): '' = conta tutte le lezioni
      const classe = str(c.classe, 16), materia = str(c.materia, 24), da = str(c.da || '', 10);
      if (!RE_CLASSE.test(classe || '') || !RE_MATERIA.test(materia || '') || (da && !RE_DATA.test(da))) return json({ errore: 'dati' }, 400, cors);
      await DB.prepare('INSERT OR REPLACE INTO conf (k, v) VALUES (?, ?)').bind('appunti_da|' + classe + '|' + materia, da).run();
      return json({ ok: true }, 200, cors);
    }
    case '/docente/cancella': { // cancella risposte, dubbi e foto più vecchi di una data
      const prima = Number(c.prima_di);
      if (!isFinite(prima) || prima <= 0) return json({ errore: 'data non valida' }, 400, cors);
      const a = await DB.prepare('DELETE FROM risposte WHERE ricevuto < ?').bind(prima).run();
      const b = await DB.prepare('DELETE FROM dubbi WHERE ts < ?').bind(prima).run();
      const f = await DB.prepare('DELETE FROM foto WHERE ts < ?').bind(prima).run();
      const g = await DB.prepare('DELETE FROM schemi WHERE ts < ?').bind(prima).run();
      const o = await DB.prepare('DELETE FROM osservazioni WHERE ts < ?').bind(prima).run();
      // il giorno scelto dal docente (la data in millisecondi è la mezzanotte italiana, che in UTC è il giorno prima)
      const dPrima = RE_DATA.test(String(c.prima_data || '')) ? c.prima_data : new Date(prima + 12 * 3600 * 1000).toISOString().slice(0, 10);
      await DB.prepare('DELETE FROM appunti WHERE data < ?').bind(dPrima).run();
      return json({ ok: true, risposte: a.meta.changes, dubbi: b.meta.changes, foto: f.meta.changes, schemi: g.meta.changes, osservazioni: o.meta.changes }, 200, cors);
    }
  }
  return json({ errore: 'percorso sconosciuto' }, 404, cors);
}

// ═══════════════════════════════════════════════════════════════════════
//  Questionari anonimi (vedi «Questionari anonimi» in LEGGIMI.md).
//  Il docente apre il questionario dalla pagina stessa (?docente) e manda
//  l'elenco delle domande. Gli studenti entrano con codice e PIN (così
//  nessuno risponde due volte, da nessun dispositivo), ma la risposta è
//  salvata senza codice: il server sa CHI ha consegnato, non COSA. Si può
//  correggere fino a mezzanotte (ora italiana), dallo stesso telefono. A mezzanotte il questionario
//  si chiude, parte un'email con le risposte, domanda per domanda e in
//  ordine casuale, e le risposte si cancellano dal server.
// ═══════════════════════════════════════════════════════════════════════
const RE_QID = /^[a-z0-9][a-z0-9-]{0,40}$/;
function mescola(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// la prossima mezzanotte di Roma (ora legale compresa), in millisecondi
function mezzanotteRoma(ora) {
  const f = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit' });
  const [a, m, g] = f.format(new Date(ora)).split('-').map(Number);
  const utc = Date.UTC(a, m - 1, g + 1, 0, 0);             // mezzanotte "come se" fosse UTC
  const roma = new Date(new Date(utc).toLocaleString('en-US', { timeZone: 'Europe/Rome' }));
  const scarto = roma.getTime() - new Date(new Date(utc).toLocaleString('en-US', { timeZone: 'UTC' })).getTime();
  return utc - scarto;
}
// controlla le domande mandate dalla pagina del docente
function qDomande(lista) {
  if (!Array.isArray(lista) || !lista.length || lista.length > 80) return null;
  const visti = new Set(), out = [];
  for (const d of lista) {
    const id = str(d && d.id, 40), tipo = d && d.tipo;
    if (!id || visti.has(id) || !['scala', 'griglia', 'scelta', 'aperta'].includes(tipo)) return null;
    visti.add(id);
    const q = { id, tipo, testo: str(d.testo, 600) || id, sezione: str(d.sezione, 200) || '' };
    // domanda che compare solo se a un'altra domanda (a scelta, più in alto) si è scelta una di certe opzioni
    if (d.se && d.se.id != null) {
      const padre = out.find((x) => x.id === String(d.se.id) && x.tipo === 'scelta');
      const ks = [...new Set((Array.isArray(d.se.opzioni) ? d.se.opzioni : [d.se.opzione]).map(Number))];
      if (!padre || !ks.length || ks.some((k) => !Number.isInteger(k) || k < 0 || k >= padre.opzioni.length)) return null;
      q.se = { id: padre.id, opzioni: ks };
    }
    if (tipo === 'griglia') {
      q.righe = (Array.isArray(d.righe) ? d.righe : []).slice(0, 12).map((o) => str(o, 200));
      if (!q.righe.length) return null;
    }
    if (tipo === 'scala' || tipo === 'griglia') {
      q.n = Math.max(2, Math.min(11, Number(d.n) || 5)); q.da = Number(d.da) === 0 ? 0 : 1;
      q.sinistra = str(d.sinistra, 80) || ''; q.destra = str(d.destra, 80) || '';
    }
    if (tipo === 'scelta') {
      q.opzioni = (Array.isArray(d.opzioni) ? d.opzioni : []).slice(0, 20).map((o) => str(o, 200));
      if (!q.opzioni.length) return null;
      q.multipla = !!d.multipla; q.max = Math.max(0, Number(d.max) || 0); q.altro = !!d.altro;
    }
    out.push(q);
  }
  return out;
}
// tiene solo le risposte valide per le domande del questionario
function qCondizione(d, r) { const p = r[d.se.id]; return !!(p && p.scelte && p.scelte.some((k) => d.se.opzioni.includes(k))); }
function qPulisci(domande, r) {
  const out = {};
  if (!r || typeof r !== 'object') return out;
  const voto = (d, x) => { const n = Number(x); return Number.isInteger(n) && n >= d.da && n < d.da + d.n ? n : null; };
  for (const d of domande) {
    const v = r[d.id];
    if (v == null || v === '') continue;
    // domanda condizionata: vale solo se la condizione è soddisfatta (le domande condizionanti vengono prima)
    if (d.se && !qCondizione(d, out)) continue;
    if (d.tipo === 'scala') {
      const n = voto(d, v);
      if (n != null) out[d.id] = n;
    } else if (d.tipo === 'griglia') {
      const g = {};
      d.righe.forEach((_, i) => { const n = voto(d, v && v[i]); if (n != null) g[i] = n; });
      if (Object.keys(g).length) out[d.id] = g;
    } else if (d.tipo === 'aperta') {
      const t = String(v).trim().slice(0, 3000);
      if (t) out[d.id] = t;
    } else if (d.tipo === 'scelta') {
      let scelte = [...new Set((Array.isArray(v.scelte) ? v.scelte : []).map(Number))]
        .filter((i) => Number.isInteger(i) && i >= 0 && i < d.opzioni.length);
      if (!d.multipla) scelte = scelte.slice(0, 1);
      else if (d.max) scelte = scelte.slice(0, d.max);
      const altro = d.altro ? String(v.altro || '').trim().slice(0, 500) : '';
      if (scelte.length || altro) out[d.id] = altro ? { scelte, altro } : { scelte };
    }
  }
  return out;
}

async function qStato(c, env, cors) {
  const id = str(c.id, 41);
  const s = await env.DB.prepare('SELECT classe, aperto, scadenza FROM q_sessioni WHERE id = ?').bind(id).first();
  const aperto = !!(s && s.aperto && s.scadenza > Date.now());
  const out = { aperto, scadenza: aperto ? s.scadenza : null, classe: s ? s.classe : null };
  if (aperto && c.token) {
    const st = await studenteDa(c.token, env);
    if (!st) out.accesso = false;
    else {
      out.accesso = true; out.classe_ok = st.classe === s.classe;
      out.consegnato = !!(await env.DB.prepare('SELECT 1 FROM q_partecipanti WHERE qid = ? AND classe = ? AND codice = ?').bind(id, st.classe, st.codice).first());
    }
  }
  return json(out, 200, cors);
}

async function qInvia(c, env, cors) {
  const id = str(c.id, 41), DB = env.DB;
  const s = await DB.prepare('SELECT * FROM q_sessioni WHERE id = ?').bind(id).first();
  if (!s || !s.aperto || s.scadenza <= Date.now()) return json({ errore: 'chiuso' }, 409, cors);
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  if (st.classe !== s.classe) return json({ errore: 'classe' }, 403, cors);
  const chiave = str(c.chiave, 64);
  if (!chiave || chiave.length < 20) return json({ errore: 'chiave' }, 400, cors);
  const rid = await hmac(env, `q|${id}|${chiave}`);
  const [part, mia] = await DB.batch([
    DB.prepare('SELECT 1 FROM q_partecipanti WHERE qid = ? AND classe = ? AND codice = ?').bind(id, st.classe, st.codice),
    DB.prepare('SELECT 1 FROM q_risposte WHERE qid = ? AND rid = ?').bind(id, rid),
  ]);
  const haConsegnato = part.results.length > 0, correzione = haConsegnato && mia.results.length > 0;
  // ha già consegnato, ma questa chiave non è la sua risposta: un altro dispositivo
  if (haConsegnato && !correzione) return json({ errore: 'gia' }, 409, cors);
  // chiave già usata da un altro studente (non succede mai, ma una risposta altrui non si tocca)
  if (!haConsegnato && mia.results.length) return json({ errore: 'chiave' }, 409, cors);
  const risposte = qPulisci(JSON.parse(s.domande), c.risposte);
  if (!Object.keys(risposte).length) {  // tutto vuoto: la risposta si ritira (e si può rispondere di nuovo)
    if (correzione) await DB.batch([
      DB.prepare('DELETE FROM q_risposte WHERE qid = ? AND rid = ?').bind(id, rid),
      DB.prepare('DELETE FROM q_partecipanti WHERE qid = ? AND classe = ? AND codice = ?').bind(id, st.classe, st.codice),
    ]);
    return json({ ok: true, ritirata: true }, 200, cors);
  }
  const ops = [DB.prepare('INSERT OR REPLACE INTO q_risposte (qid, rid, dati) VALUES (?, ?, ?)').bind(id, rid, JSON.stringify(risposte))];
  if (!correzione) ops.push(DB.prepare('INSERT INTO q_partecipanti (qid, classe, codice) VALUES (?, ?, ?)').bind(id, st.classe, st.codice));
  await DB.batch(ops);
  return json({ ok: true, corretta: correzione }, 200, cors);
}

// chiude il questionario e manda l'email; se l'email parte, cancella le risposte
async function qChiudi(id, env) {
  const DB = env.DB;
  await DB.prepare('UPDATE q_sessioni SET aperto = 0 WHERE id = ?').bind(id).run();
  const s = await DB.prepare('SELECT * FROM q_sessioni WHERE id = ?').bind(id).first();
  if (!s || s.inviato) return { ok: true };
  const righe = (await DB.prepare('SELECT dati FROM q_risposte WHERE qid = ?').bind(id).all()).results.map((r) => JSON.parse(r.dati));
  if (!env.RESEND_KEY || !env.EMAIL_DOCENTE) return { errore: 'mancano i secret RESEND_KEY ed EMAIL_DOCENTE' };
  const e = righe.length ? qEmail(s, JSON.parse(s.domande), righe) : { testo: 'Non è arrivata nessuna risposta.' };
  const corpo = { subject: `Questionario anonimo: ${s.titolo || id} (${righe.length} risposte)`, text: e.testo, ...(e.html ? { html: e.html } : {}) };
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + env.RESEND_KEY },
    body: JSON.stringify({ from: env.EMAIL_MITTENTE || 'Didattica Vittoria <onboarding@resend.dev>', to: [env.EMAIL_DOCENTE], ...corpo }),
  });
  if (!r.ok) return { errore: 'resend.com ha risposto: ' + (await r.text()).slice(0, 300) };
  await DB.batch([
    DB.prepare('DELETE FROM q_risposte WHERE qid = ?').bind(id),
    DB.prepare('DELETE FROM q_partecipanti WHERE qid = ?').bind(id),
    DB.prepare('UPDATE q_sessioni SET inviato = 1 WHERE id = ?').bind(id),
  ]);
  return { ok: true, inviate: righe.length };
}

function qEmail(s, domande, righe) {
  const N = righe.length, h = (x) => String(x).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const virgola = (x) => x.toFixed(1).replace('.', ',');
  const nota = 'Le risposte di ogni domanda sono mescolate a caso, domanda per domanda: non si possono rimettere insieme le risposte di uno stesso studente. Dal server sono già state cancellate, insieme all\'elenco di chi ha risposto.';
  const T = [s.titolo || s.id, `${N} risposte.`, nota, ''];
  const H = [`<div style="font-family:Arial,sans-serif;max-width:720px;color:#1a202c">`,
    `<h1 style="font-size:20px;margin:0 0 4px">${h(s.titolo || s.id)}</h1>`,
    `<p style="color:#4a5568;margin:0 0 18px"><b>${N} risposte.</b> ${nota}</p>`];
  const grigio = (t) => `<p style="color:#4a5568;font-size:13px;margin:4px 0">${t}</p>`;
  let sez = null, num = 0;
  const numeri = {};
  for (const d of domande) {
    if (d.sezione && d.sezione !== sez) {
      sez = d.sezione;
      T.push('', '═══ ' + sez.toUpperCase() + ' ═══', '');
      H.push(`<h2 style="font-size:16px;color:#0f766e;border-bottom:2px solid #0f766e;padding-bottom:3px;margin:26px 0 10px">${h(sez)}</h2>`);
    }
    // le domande condizionate non hanno numero: valgono solo per chi ha dato una certa risposta
    let etich, cond = '', aventi = righe;
    if (d.se) {
      const padre = domande.find((x) => x.id === d.se.id);
      aventi = righe.filter((r) => qCondizione(d, r));
      etich = '↳';
      cond = `solo per chi ha risposto ${d.se.opzioni.map((k) => '«' + padre.opzioni[k] + '»').join(' o ')} alla domanda ${numeri[d.se.id]}: ${aventi.length}`;
    } else { num++; numeri[d.id] = num; etich = num + '.'; }
    const vals = aventi.map((r) => r[d.id]).filter((v) => v != null);
    const salt = aventi.length - vals.length, saltTxt = salt ? `non ha risposto: ${salt}` : '';
    T.push(`${etich} ${d.testo}`);
    H.push(`<p style="font-weight:bold;margin:18px 0 6px${d.se ? ';margin-left:18px' : ''}">${etich} ${h(d.testo)}</p>`);
    if (cond) { T.push('   (' + cond + ')'); H.push(grigio(cond)); }
    const barre = (conti, etichette) => {
      const max = Math.max(1, ...conti);
      H.push('<table style="border-collapse:collapse">');
      conti.forEach((n, i) => {
        T.push(`   ${etichette[i]}: ${'█'.repeat(Math.round(n / max * 20))} ${n}`);
        H.push(`<tr><td style="padding:2px 8px 2px 0;color:#4a5568;font-size:13px">${h(etichette[i])}</td><td style="padding:2px 0;width:240px"><div style="background:#0f766e;height:12px;border-radius:3px;width:${Math.round(n / max * 100)}%;min-width:${n ? 3 : 0}px"></div></td><td style="padding:2px 0 2px 8px;font-size:13px">${n}</td></tr>`);
      });
      H.push('</table>');
    };
    const elenco = (testi) => {
      T.push(...testi.map((t) => '   — ' + t.replace(/\n/g, '\n     ')));
      H.push(`<ul style="margin:0;padding-left:20px">${testi.map((t) => `<li style="margin:6px 0;white-space:pre-wrap">${h(t)}</li>`).join('')}</ul>`);
    };
    const scala = (vv) => {
      const conti = Array.from({ length: d.n }, (_, i) => vv.filter((v) => v === d.da + i).length);
      barre(conti, conti.map((_, i) => String(d.da + i) + (i === 0 && d.sinistra ? ' (' + d.sinistra + ')' : i === d.n - 1 && d.destra ? ' (' + d.destra + ')' : '')));
      return vv.length ? virgola(vv.reduce((a, b) => a + b, 0) / vv.length) : '–';
    };
    if (d.tipo === 'scala') {
      const riga = `media ${scala(vals)}` + (saltTxt ? ' · ' + saltTxt : '');
      T.push('   ' + riga); H.push(grigio(riga));
    } else if (d.tipo === 'griglia') {
      const medie = [];
      d.righe.forEach((nome, i) => {
        T.push('   ▸ ' + nome); H.push(`<p style="margin:10px 0 3px;font-size:14px"><b>${h(nome)}</b></p>`);
        const vv = vals.map((v) => v[i]).filter((x) => x != null), m = scala(vv);
        medie.push(`${nome}: ${m}`);
        const riga = `media ${m} · risposte ${vv.length}`;
        T.push('     ' + riga); H.push(grigio(riga));
      });
      const riga = 'In sintesi (medie): ' + medie.join(' · ') + (saltTxt ? ' · ' + saltTxt : '');
      T.push('   ' + riga); H.push(`<p style="font-size:13px;margin:6px 0;background:#f0fdfa;padding:4px 8px;border-radius:4px">${h(riga)}</p>`);
    } else if (d.tipo === 'scelta') {
      barre(d.opzioni.map((_, i) => vals.filter((v) => v.scelte.includes(i)).length), d.opzioni);
      if (d.multipla) { T.push('   (più risposte possibili)'); H.push(grigio('più risposte possibili')); }
      const altri = mescola(vals.map((v) => v.altro).filter(Boolean));
      if (altri.length) { T.push('   Altro:'); H.push(grigio('Altro:')); elenco(altri); }
      if (saltTxt) { T.push('   ' + saltTxt); H.push(grigio(saltTxt)); }
    } else {
      elenco(mescola(vals.slice()));
      if (saltTxt) { T.push('   ' + saltTxt); H.push(grigio(saltTxt)); }
    }
    T.push('');
  }
  H.push('</div>');
  return { testo: T.join('\n'), html: H.join('') };
}

async function qDocente(c, env, cors) {
  const id = str(c.id, 41), DB = env.DB;
  if (!RE_QID.test(id || '')) return json({ errore: 'nome del questionario non valido' }, 400, cors);
  const s = await DB.prepare('SELECT titolo, classe, aperto, scadenza, inviato FROM q_sessioni WHERE id = ?').bind(id).first();
  const ricevute = (await DB.prepare('SELECT COUNT(*) AS n FROM q_risposte WHERE qid = ?').bind(id).first()).n;
  if (c.azione === 'apri') {
    if (s && s.aperto) return json({ errore: 'è già aperto' }, 400, cors);
    if (ricevute) return json({ errore: `ci sono ${ricevute} risposte non ancora spedite: premi «Chiudi e mandami le risposte»` }, 400, cors);
    const domande = qDomande(c.domande);
    if (!domande) return json({ errore: 'domande non valide (due domande con lo stesso id?)' }, 400, cors);
    const classe = str(c.classe, 16);
    if (!RE_CLASSE.test(classe || '')) return json({ errore: 'manca la classe (campo «classe» in cima al file .md)' }, 400, cors);
    // scadenza: la mezzanotte alla fine del giorno scritto nel file (AAAA-MM-GG), altrimenti quella di oggi
    let scadenza = mezzanotteRoma(Date.now());
    if (c.scadenza) {
      const g = /^\d{4}-\d{2}-\d{2}$/.test(String(c.scadenza)) ? Date.parse(c.scadenza + 'T12:00:00Z') : NaN;
      if (!isFinite(g)) return json({ errore: 'scadenza non valida: scrivila come 2026-11-23' }, 400, cors);
      scadenza = mezzanotteRoma(g);
      if (scadenza <= Date.now()) return json({ errore: 'la scadenza è già passata' }, 400, cors);
      if (scadenza > Date.now() + 31 * 24 * 3600 * 1000) return json({ errore: 'scadenza troppo lontana (al massimo un mese)' }, 400, cors);
    }
    await DB.batch([
      DB.prepare('DELETE FROM q_partecipanti WHERE qid = ?').bind(id),
      DB.prepare('INSERT OR REPLACE INTO q_sessioni (id, titolo, classe, domande, aperto, scadenza, inviato) VALUES (?, ?, ?, ?, 1, ?, 0)')
        .bind(id, str(c.titolo, 200), classe, JSON.stringify(domande), scadenza),
    ]);
    return json({ ok: true, scadenza }, 200, cors);
  }
  if (c.azione === 'domande') { // sostituisce le domande di un questionario aperto (le risposte già date restano)
    if (!s || !s.aperto) return json({ errore: 'il questionario non è aperto' }, 400, cors);
    const domande = qDomande(c.domande);
    if (!domande) return json({ errore: 'domande non valide (due domande con lo stesso id?)' }, 400, cors);
    await DB.prepare('UPDATE q_sessioni SET domande = ?, titolo = ? WHERE id = ?').bind(JSON.stringify(domande), str(c.titolo, 200), id).run();
    return json({ ok: true, n: domande.length }, 200, cors);
  }
  if (c.azione === 'chiudi') { // chiude subito (prima di mezzanotte) e manda l'email
    if (!s) return json({ errore: 'non è mai stato aperto' }, 400, cors);
    const r = await qChiudi(id, env);
    return json(r, r.errore ? 400 : 200, cors);
  }
  if (c.azione === 'annulla') { // chiude e butta via tutto, senza email
    await DB.batch([DB.prepare('DELETE FROM q_risposte WHERE qid = ?').bind(id), DB.prepare('DELETE FROM q_partecipanti WHERE qid = ?').bind(id),
      DB.prepare('UPDATE q_sessioni SET aperto = 0, inviato = 1 WHERE id = ?').bind(id)]);
    return json({ ok: true }, 200, cors);
  }
  // stato: solo numeri, mai il contenuto delle risposte (la pagina può essere proiettata)
  return json(s ? { esiste: true, aperto: !!s.aperto, classe: s.classe, scadenza: s.scadenza, ricevute, inviato: !!s.inviato } : { esiste: false }, 200, cors);
}
