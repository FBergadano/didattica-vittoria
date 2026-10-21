// ═══════════════════════════════════════════════════════════════════════
//  Consegne e dubbi — Cloudflare Worker con database D1.
//  Istruzioni per pubblicarla: LEGGIMI.md in questa cartella.
//
//  Impostazioni della Worker (Settings → Variables and Secrets / Bindings):
//    DB               — binding al database D1
//    DOCENTE_PASSWORD — Secret: la password della pagina del docente
//    ORIGINE          — Variable: indirizzo del sito, es. https://fbergadano.github.io
//                       (più indirizzi separati da virgole)
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
];

const MAX_ERRORI_PIN = 8, BLOCCO_MS = 15 * 60 * 1000;
const MAX_DUBBI_GIORNO = 20;
const MAX_FOTO_GIORNO = 40, MAX_FOTO_B64 = 1400000; // ~1 MB per foto (il telefono le riduce a ~300 KB)
const MAX_SCHEMI_GIORNO = 30, MAX_MAPPA = 400000;
const RE_CLASSE = /^[A-Za-z0-9][A-Za-z0-9 _-]{0,15}$/, RE_CODICE = /^[A-Z]{2,12}$/;

let pronto = null; // le tabelle si creano una volta sola per istanza

export default {
  async fetch(req, env) {
    const cors = corsHeaders(req, env);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    try {
      if (!env.DB) return json({ errore: 'manca il database (binding DB)' }, 500, cors);
      if (!pronto) pronto = env.DB.batch(SCHEMA.map((s) => env.DB.prepare(s)))
        // database creati prima che esistesse la colonna "esercizio" (numero del Verifica Subito!/Prova tu!)
        .then(() => env.DB.prepare('ALTER TABLE risposte ADD COLUMN esercizio TEXT').run().catch(() => {}))
        .catch((e) => { pronto = null; throw e; });
      await pronto;
      const url = new URL(req.url);
      const p = url.pathname.replace(/\/+$/, '') || '/';
      const corpo = req.method === 'POST' ? await req.json().catch(() => ({})) : {};

      if (p.startsWith('/docente/')) {
        const ok = await docenteAutorizzato(req, env);
        if (ok !== true) return json({ errore: ok }, 401, cors);
        return await docente(p, url, corpo, env, cors);
      }
      switch (p) {
        case '/':            return json({ ok: true, servizio: 'consegne' }, 200, cors);
        case '/classi':      return json({ classi: (await env.DB.prepare('SELECT DISTINCT classe FROM studenti ORDER BY classe').all()).results.map((r) => r.classe) }, 200, cors);
        case '/accedi':      return await accedi(corpo, env, cors);
        case '/risposte':    return await risposte(corpo, env, cors);
        case '/dubbi':       return await nuovoDubbio(corpo, env, cors);
        case '/miei-dubbi':  return await mieiDubbi(corpo, env, cors);
        case '/foto':        return await nuovaFoto(corpo, env, cors);
        case '/mie-foto':    return await mieFoto(corpo, env, cors);
        case '/foto-elimina': return await eliminaFoto(corpo, env, cors);
        case '/schema':      return await nuovoSchema(corpo, env, cors);
        case '/miei-schemi': return await mieiSchemi(corpo, env, cors);
        case '/schema-elimina': return await eliminaSchema(corpo, env, cors);
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

async function risposte(c, env, cors) {
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
  return json({ ok: righe.length }, 200, cors);
}

async function nuovoDubbio(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const testo = str(c.testo, 2000);
  if (!testo || !testo.trim()) return json({ errore: 'vuoto' }, 400, cors);
  const ora = Date.now();
  const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM dubbi WHERE classe = ? AND codice = ? AND ts > ?').bind(st.classe, st.codice, ora - 24 * 3600 * 1000).first();
  if (n.n >= MAX_DUBBI_GIORNO) return json({ errore: 'troppi' }, 429, cors);
  await env.DB.prepare('INSERT INTO dubbi (classe, codice, pagina, sezione, ancora, testo, ts) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .bind(st.classe, st.codice, str(c.pagina, 200), str(c.sezione, 120), str(c.ancora, 120), testo.trim(), ora).run();
  return json({ ok: true }, 200, cors);
}

async function mieiDubbi(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const r = await env.DB.prepare('SELECT id, pagina, sezione, testo, ts, risposta, risposta_ts, risolto FROM dubbi WHERE classe = ? AND codice = ? ORDER BY ts DESC LIMIT 30')
    .bind(st.classe, st.codice).all();
  return json({ dubbi: r.results }, 200, cors);
}

async function nuovaFoto(c, env, cors) {
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

// ───────── schemi per l'interrogazione ─────────
async function nuovoSchema(c, env, cors) {
  const st = await studenteDa(c.token, env);
  if (!st) return json({ errore: 'accesso' }, 401, cors);
  const ora = Date.now();
  const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM schemi WHERE classe = ? AND codice = ? AND ts > ?').bind(st.classe, st.codice, ora - 24 * 3600 * 1000).first();
  if (n.n >= MAX_SCHEMI_GIORNO) return json({ errore: 'troppi' }, 429, cors);
  const pagina = str(c.pagina, 200) || '', titolo = str(c.titolo, 200) || '';
  let tipo, dati;
  if (c.tipo === 'mappa') {
    dati = String(c.dati || '');
    if (dati.length > MAX_MAPPA) return json({ errore: 'grande' }, 413, cors);
    try { JSON.parse(dati); } catch (e) { return json({ errore: 'formato' }, 400, cors); }
    tipo = 'mappa';
    // dello schema di un capitolo tengo solo l'ultima versione inviata
    await env.DB.prepare("DELETE FROM schemi WHERE classe = ? AND codice = ? AND pagina = ? AND tipo = 'mappa'").bind(st.classe, st.codice, pagina).run();
  } else {
    const m = /^data:(application\/pdf|image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(String(c.file || ''));
    if (!m) return json({ errore: 'formato' }, 400, cors);
    if (m[2].length > MAX_FOTO_B64) return json({ errore: 'grande' }, 413, cors);
    tipo = m[1]; dati = m[2];
  }
  const r = await env.DB.prepare('INSERT INTO schemi (classe, codice, pagina, titolo, ts, tipo, dim, dati) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(st.classe, st.codice, pagina, titolo, ora, tipo, tipo === 'mappa' ? dati.length : Math.round(dati.length * 3 / 4), dati).run();
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

async function docente(p, url, c, env, cors) {
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
      return json(f.tipo === 'mappa' ? f : { ...f, dati: undefined, src: 'data:' + f.tipo + ';base64,' + f.dati }, 200, cors);
    }
    case '/docente/schema-elimina': {
      await DB.prepare('DELETE FROM schemi WHERE id = ?').bind(Number(c.id)).run();
      return json({ ok: true }, 200, cors);
    }
    case '/docente/cancella': { // cancella risposte, dubbi e foto più vecchi di una data
      const prima = Number(c.prima_di);
      if (!isFinite(prima) || prima <= 0) return json({ errore: 'data non valida' }, 400, cors);
      const a = await DB.prepare('DELETE FROM risposte WHERE ricevuto < ?').bind(prima).run();
      const b = await DB.prepare('DELETE FROM dubbi WHERE ts < ?').bind(prima).run();
      const f = await DB.prepare('DELETE FROM foto WHERE ts < ?').bind(prima).run();
      const g = await DB.prepare('DELETE FROM schemi WHERE ts < ?').bind(prima).run();
      return json({ ok: true, risposte: a.meta.changes, dubbi: b.meta.changes, foto: f.meta.changes, schemi: g.meta.changes }, 200, cors);
    }
  }
  return json({ errore: 'percorso sconosciuto' }, 404, cors);
}
