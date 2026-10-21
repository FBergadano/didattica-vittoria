/* ═══════════════════════════════════════════════════════════════════════
   Schema riassuntivo ("mappa") — vista ed editor.
   Usato da _includes/mappa.html (in fondo a ogni capitolo) e dalla pagina
   del docente (consegna/docente.html), che mostra gli schemi inviati.

   Uno schema è un oggetto JSON:
     { nodi:   [{ id, x, y, w, h, testo, colore, stile } | { id, x, y, w, h, svg }],
       frecce: [{ id, da, a, tipo, colore, testo }],
       tratti: [{ colore, spessore, opacita, punti: [[x, y], ...] }] }
   su un foglio di 1000 × 707 (A4 orizzontale). Nel testo dei riquadri:
   **grassetto**, $formula$ (LaTeX, mostrata con MathJax), a capo con \n.
   Le formule si scrivono senza conoscere il LaTeX con MathLive (caricato
   solo quando serve).
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.Mappa) return;

  var W = 1000, H = 707;
  var COLORI = {
    azzurro: ['#e0f2fe', '#0284c7'], verde: ['#dcfce7', '#16a34a'], giallo: ['#fef9c3', '#ca8a04'],
    arancio: ['#ffedd5', '#ea580c'], rosa: ['#fce7f3', '#db2777'], viola: ['#ede9fe', '#7c3aed'],
    grigio: ['#f1f5f9', '#64748b'], bianco: ['#ffffff', '#94a3b8'], nero: ['#ffffff', '#1f2937']
  };
  var TIPI = { freccia: '→', doppia: '↔', linea: '—', tratteggiata: '⇢' };
  var SVGNS = 'http://www.w3.org/2000/svg';
  var ML_URL = 'https://cdn.jsdelivr.net/npm/mathlive@0.101.0/dist/mathlive.min.js';
  var ML_FONTS = 'https://cdn.jsdelivr.net/npm/mathlive@0.101.0/dist/fonts/';
  var progr = 0;

  // ───────── utilità ─────────
  function el(tag, cls, padre) { var e = document.createElement(tag); if (cls) e.className = cls; if (padre) padre.appendChild(e); return e; }
  function sv(tag, attr, padre) { var e = document.createElementNS(SVGNS, tag); for (var k in attr) e.setAttribute(k, attr[k]); if (padre) padre.appendChild(e); return e; }
  function copia(o) { return JSON.parse(JSON.stringify(o)); }
  function nuovoId(p) { return p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function col(n) { return COLORI[n] || COLORI.bianco; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function vuoto() { return { nodi: [], frecce: [], tratti: [] }; }
  function normalizza(d) {
    d = d && typeof d === 'object' ? d : {};
    return { nodi: Array.isArray(d.nodi) ? d.nodi : [], frecce: Array.isArray(d.frecce) ? d.frecce : [], tratti: Array.isArray(d.tratti) ? d.tratti : [] };
  }
  function trova(lista, id) { for (var i = 0; i < lista.length; i++) if (lista[i].id === id) return lista[i]; return null; }

  // MathJax arriva in modo asincrono: aspetto che sia pronto
  function conMathJax(fn) {
    var n = 0;
    (function prova() {
      if (window.MathJax && MathJax.typesetPromise) return fn();
      if (++n < 200) setTimeout(prova, 100);
    })();
  }

  // ───────── testo dei riquadri ↔ DOM ─────────
  var TEX_VIETATI = /\\(href|url|class|cssId|style|data|html|require|unicode|def|newcommand)\b/;
  function chip(tex) {
    var s = document.createElement('span');
    s.className = 'mp-f'; s.contentEditable = 'false'; s.dataset.tex = tex;
    s.textContent = TEX_VIETATI.test(tex) ? tex : '\\(\\displaystyle ' + tex + '\\)';
    return s;
  }
  function testoInDom(t, dest) {
    var cur = dest, i = 0, buf = '';
    function flush() { if (buf) { cur.appendChild(document.createTextNode(buf)); buf = ''; } }
    t = String(t || '');
    while (i < t.length) {
      var c = t[i];
      if (c === '\\' && t[i + 1] === '$') { buf += '$'; i += 2; continue; }
      if (c === '\n') { flush(); cur.appendChild(document.createElement('br')); i++; continue; }
      if (c === '*' && t[i + 1] === '*') {
        flush();
        if (cur === dest) { var b = document.createElement('b'); dest.appendChild(b); cur = b; } else cur = dest;
        i += 2; continue;
      }
      if (c === '$') {
        var j = t.indexOf('$', i + 1);
        if (j > i + 1) { flush(); cur.appendChild(chip(t.slice(i + 1, j))); i = j + 1; continue; }
      }
      buf += c; i++;
    }
    flush();
  }
  function domInTesto(n) {
    var s = '';
    n.childNodes.forEach(function (c) {
      if (c.nodeType === 3) s += c.data.replace(/ /g, ' ').replace(/\$/g, '\\$');
      else if (c.nodeType === 1) {
        if (c.classList.contains('mp-f')) s += '$' + c.dataset.tex + '$';
        else if (c.tagName === 'BR') s += '\n';
        else if (c.tagName === 'B' || c.tagName === 'STRONG') { var x = domInTesto(c); if (x.trim()) s += '**' + x + '**'; else s += x; }
        else if (c.tagName === 'DIV' || c.tagName === 'P') { if (s && !/\n$/.test(s)) s += '\n'; s += domInTesto(c); }
        else if (!/^(MJX-|SCRIPT|STYLE)/.test(c.tagName)) s += domInTesto(c);
      }
    });
    return s;
  }

  // disegni SVG dei riquadri del prof: tengo solo forme e testo (niente script, link, eventi)
  var SVG_TAG = /^(svg|g|defs|marker|circle|ellipse|line|path|polygon|polyline|rect|text|tspan|title)$/i;
  var SVG_ATTR = /^(viewBox|width|height|x|y|x1|x2|y1|y2|cx|cy|r|rx|ry|d|points|fill|stroke|stroke-width|stroke-dasharray|stroke-linecap|stroke-linejoin|opacity|fill-opacity|stroke-opacity|transform|font-size|font-style|font-weight|font-family|text-anchor|dominant-baseline|id|marker-end|marker-start|markerWidth|markerHeight|refX|refY|orient|preserveAspectRatio)$/;
  function svgPulito(testo) {
    var doc;
    try { doc = new DOMParser().parseFromString(testo, 'image/svg+xml'); } catch (e) { return null; }
    var r = doc.documentElement;
    if (!r || r.nodeName.toLowerCase() !== 'svg') return null;
    (function pulisci(n) {
      [].slice.call(n.childNodes).forEach(function (c) {
        if (c.nodeType === 1) { if (!SVG_TAG.test(c.nodeName)) { n.removeChild(c); return; } pulisci(c); }
        else if (c.nodeType !== 3) n.removeChild(c);
      });
      [].slice.call(n.attributes || []).forEach(function (a) {
        if (!SVG_ATTR.test(a.name) || /url\(\s*['"]?\s*(?!#)/i.test(a.value) || /javascript:/i.test(a.value)) n.removeAttribute(a.name);
      });
    })(r);
    r.setAttribute('width', '100%'); r.setAttribute('height', '100%');
    return document.importNode(r, true);
  }

  // ───────── vista: disegna lo schema dentro un contenitore ─────────
  function Vista(host, dati) {
    this.host = host; this.d = normalizza(dati); this.pref = 'mp' + (++progr);
    host.innerHTML = '';
    this.scala = el('div', 'mp-scala', host);
    this.tela = el('div', 'mp-tela', this.scala);
    this.svgF = sv('svg', { 'class': 'mp-frecce', viewBox: '0 0 ' + W + ' ' + H, width: W, height: H }, this.tela);
    this.defs = sv('defs', {}, this.svgF);
    this.gF = sv('g', {}, this.svgF);
    this.lNodi = el('div', 'mp-nodi', this.tela);
    this.svgT = sv('svg', { 'class': 'mp-tratti', viewBox: '0 0 ' + W + ' ' + H, width: W, height: H }, this.tela);
    this.cache = {};
    this.disegna();
    this.adatta();
  }
  Vista.prototype.adatta = function (s) {
    if (s == null) s = (this.host.clientWidth || W) / W;
    this.s = s;
    this.tela.style.transform = 'scale(' + s + ')';
    this.scala.style.width = (W * s) + 'px'; this.scala.style.height = (H * s) + 'px';
  };
  Vista.prototype.riempi = function (dest, testo) {
    var c = this.cache[testo];
    if (c) { dest.appendChild(c.cloneNode(true)); return; }
    var f = document.createDocumentFragment(), w = el('span', 'mp-fr');
    testoInDom(testo, w); f.appendChild(w);
    w.dataset.dacache = testo;
    dest.appendChild(f);
  };
  Vista.prototype.creaNodo = function (n) {
    var e = el('div', 'mp-nodo' + (n.svg ? ' mp-dis' : '') + (n.stile ? ' mp-' + n.stile : ''), this.lNodi);
    e.dataset.id = n.id;
    e.style.left = n.x + 'px'; e.style.top = n.y + 'px'; e.style.width = n.w + 'px'; e.style.minHeight = (n.h || 30) + 'px';
    if (n.svg) {
      e.style.height = (n.h || 60) + 'px';
      var s = svgPulito(n.svg); if (s) e.appendChild(s);
    } else {
      // stile: titolo / etichetta (solo testo colorato), cornice (bordo tratteggiato, niente sfondo),
      // gruppo (fascia che racchiude altri riquadri), testata, oppure un riquadro normale
      var c = col(n.colore), st = n.stile;
      if (st === 'titolo' || st === 'etichetta') e.style.color = c[1] === '#94a3b8' ? '' : c[1];
      else if (st === 'cornice') e.style.borderColor = c[1];
      else { e.style.background = c[0]; e.style.borderColor = c[1]; }
      this.riempi(el('div', 'mp-testo', e), n.testo || '');
    }
    return e;
  };
  Vista.prototype.marker = function (colore) {
    var id = this.pref + '-m-' + colore;
    if (!this.defs.querySelector('#' + id)) {
      var m = sv('marker', { id: id, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse', markerUnits: 'strokeWidth' }, this.defs);
      sv('path', { d: 'M0,0 L10,5 L0,10 z', fill: col(colore)[1] }, m);
    }
    return 'url(#' + id + ')';
  };
  Vista.prototype.disegna = function () {
    var self = this, d = this.d;
    this.lNodi.innerHTML = ''; this.gF.innerHTML = ''; this.svgT.innerHTML = ''; this.defs.innerHTML = '';
    this.elNodi = {}; this.elFrecce = {};
    d.nodi.forEach(function (n) { self.elNodi[n.id] = self.creaNodo(n); });
    d.frecce.forEach(function (f) {
      var g = sv('g', { 'class': 'mp-freccia' }, self.gF);
      g.dataset.id = f.id;
      var hit = sv('path', { 'class': 'mp-hit', d: '' }, g);
      var p = sv('path', { 'class': 'mp-linea', d: '', fill: 'none', stroke: col(f.colore || 'grigio')[1], 'stroke-width': 2 }, g);
      var tipo = f.tipo || 'freccia';
      if (tipo === 'tratteggiata') p.setAttribute('stroke-dasharray', '7 5');
      if (tipo !== 'linea') p.setAttribute('marker-end', self.marker(f.colore || 'grigio'));
      if (tipo === 'doppia') p.setAttribute('marker-start', self.marker(f.colore || 'grigio'));
      var et = el('div', 'mp-etich', self.lNodi);
      et.dataset.freccia = f.id;
      if (f.testo) self.riempi(et, f.testo); else et.classList.add('mp-vuota');
      self.elFrecce[f.id] = { g: g, hit: hit, p: p, et: et };
    });
    d.tratti.forEach(function (t, i) { self.tratto(t, i); });
    this.frecce();
    this.typeset();
  };
  Vista.prototype.tratto = function (t, i) {
    var p = sv('path', { 'class': 'mp-tratto', d: percorso(t.punti), fill: 'none', stroke: col(t.colore || 'nero')[1],
      'stroke-width': t.spessore || 2.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: t.opacita || 1 }, this.svgT);
    p.dataset.i = i;
    return p;
  };
  function percorso(pp) {
    if (!pp || !pp.length) return '';
    var s = 'M' + pp[0][0] + ' ' + pp[0][1];
    if (pp.length === 1) s += ' l0.1 0';
    for (var i = 1; i < pp.length; i++) s += ' L' + pp[i][0] + ' ' + pp[i][1];
    return s;
  }
  Vista.prototype.rett = function (id) {
    var n = trova(this.d.nodi, id), e = this.elNodi[id];
    if (!n) return null;
    return { x: n.x, y: n.y, w: (e && e.offsetWidth) || n.w, h: (e && e.offsetHeight) || n.h || 30 };
  };
  function bordo(r, px, py, gap) {
    var cx = r.x + r.w / 2, cy = r.y + r.h / 2, dx = px - cx, dy = py - cy;
    if (!dx && !dy) return { x: cx, y: cy };
    var k = Math.min(dx ? (r.w / 2 + gap) / Math.abs(dx) : Infinity, dy ? (r.h / 2 + gap) / Math.abs(dy) : Infinity);
    return { x: cx + dx * k, y: cy + dy * k };
  }
  Vista.prototype.frecce = function () {
    var self = this;
    this.d.frecce.forEach(function (f) {
      var e = self.elFrecce[f.id], a = self.rett(f.da), b = self.rett(f.a);
      if (!e) return;
      if (!a || !b) { e.g.style.display = 'none'; e.et.style.display = 'none'; return; }
      var pa = bordo(a, b.x + b.w / 2, b.y + b.h / 2, 3), pb = bordo(b, a.x + a.w / 2, a.y + a.h / 2, 4);
      var dd = 'M' + pa.x.toFixed(1) + ' ' + pa.y.toFixed(1) + ' L' + pb.x.toFixed(1) + ' ' + pb.y.toFixed(1);
      e.p.setAttribute('d', dd); e.hit.setAttribute('d', dd);
      e.et.style.left = ((pa.x + pb.x) / 2) + 'px'; e.et.style.top = ((pa.y + pb.y) / 2) + 'px';
    });
  };
  Vista.prototype.typeset = function () {
    var self = this, chips = [].slice.call(this.tela.querySelectorAll('.mp-f')).filter(function (c) { return !c.querySelector('mjx-container') && !TEX_VIETATI.test(c.dataset.tex); });
    if (!chips.length) { this.frecce(); return; }
    conMathJax(function () {
      MathJax.typesetPromise(chips).then(function () {
        [].slice.call(self.tela.querySelectorAll('[data-dacache]')).forEach(function (w) {
          var pronta = [].every.call(w.querySelectorAll('.mp-f'), function (c) { return c.querySelector('mjx-container') || TEX_VIETATI.test(c.dataset.tex); });
          if (pronta) { var k = w.dataset.dacache; delete w.dataset.dacache; self.cache[k] = w.cloneNode(true); }
        });
        self.frecce();
      }).catch(function () {});
    });
  };

  // ───────── stampa / PDF di uno schema ─────────
  function stampa(vista, titolo) {
    var box = el('div', 'mp-stampa', document.body);
    el('div', 'mp-stampa-tit', box).textContent = titolo || 'Schema';
    var host = el('div', 'mp-stampa-host', box);
    var c = vista.scala.cloneNode(true);
    host.appendChild(c);
    var t = c.querySelector('.mp-tela'); t.style.transform = 'scale(0.9)';
    c.style.width = (W * 0.9) + 'px'; c.style.height = (H * 0.9) + 'px';
    document.documentElement.classList.add('mp-stampa-on');
    function via() { document.documentElement.classList.remove('mp-stampa-on'); if (box.parentNode) box.parentNode.removeChild(box); window.removeEventListener('afterprint', via); }
    window.addEventListener('afterprint', via);
    setTimeout(function () { window.print(); setTimeout(function () { if (!window.matchMedia || !matchMedia('print').matches) via(); }, 1500); }, 60);
  }

  // ───────── finestra delle formule (MathLive) ─────────
  var ML = null;
  function caricaMathLive() {
    if (ML) return ML;
    ML = new Promise(function (ok, ko) {
      if (window.MathfieldElement) return ok();
      var s = document.createElement('script'); s.src = ML_URL; s.defer = true;
      s.onload = function () {
        try { MathfieldElement.fontsDirectory = ML_FONTS; MathfieldElement.soundsDirectory = null; } catch (e) {}
        ok();
      };
      s.onerror = function () { ML = null; ko(new Error('mathlive')); };
      document.head.appendChild(s);
    });
    return ML;
  }
  var STRUTTURE = [
    ['\\frac{#@}{#?}', '\\frac{a}{b}', 'frazione'], ['#@^{#?}', 'x^{n}', 'esponente'], ['#@_{#?}', 'x_{i}', 'pedice'],
    ['\\sqrt{#0}', '\\sqrt{x}', 'radice'], ['\\vec{#0}', '\\vec{v}', 'vettore'], ['\\left\\lvert #0\\right\\rvert', '|x|', 'valore assoluto'],
    ['\\left(#0\\right)', '(\\;)', 'parentesi'], ['\\times10^{#?}', '\\times10^{n}', 'notazione scientifica'], ['\\text{#0}', '\\text{abc}', 'testo normale']
  ];
  var SIMBOLI = ['=', '\\cdot', '\\times', '\\div', '\\pm', '\\approx', '\\neq', '<', '>', '\\le', '\\ge', '\\propto', '\\to', '\\Rightarrow', '\\infty',
    '\\Delta', '\\alpha', '\\beta', '\\gamma', '\\theta', '\\lambda', '\\mu', '\\pi', '\\rho', '\\sigma', '\\omega', '\\varepsilon', '\\perp', '^\\circ'];
  var UNITA = ['\\text{m}', '\\text{kg}', '\\text{s}', '\\text{K}', '\\text{N}', '\\text{J}', '\\text{W}', '\\text{C}', '\\text{V}'];
  function apriFormula(tex, opz, fatto) {
    var ov = el('div', 'mp-fdlg', document.body);
    var pan = el('div', 'mp-fpan', ov);
    el('h4', '', pan).textContent = tex ? 'Modifica la formula' : 'Inserisci una formula';
    var campo = el('div', 'mp-fcampo', pan);
    el('p', 'mp-fhint', pan).innerHTML = 'Scrivi come in Word: <b>/</b> fa la frazione, <b>^</b> l\'esponente, <b>_</b> il pedice. Oppure usa i pulsanti qui sotto.';
    function gruppo(nome, lista, comeTex) {
      if (!lista || !lista.length) return;
      el('div', 'mp-fgr', pan).textContent = nome;
      var r = el('div', 'mp-fbtn', pan);
      lista.forEach(function (x) {
        var ins = Array.isArray(x) ? x[0] : x, lab = Array.isArray(x) ? x[1] : x, b = el('button', '', r);
        b.type = 'button'; b.dataset.ins = ins; if (Array.isArray(x) && x[2]) b.title = x[2];
        b.textContent = '\\(' + lab + '\\)';
      });
    }
    gruppo('Struttura', STRUTTURE);
    gruppo('Simboli di questo capitolo', opz.simboli);
    gruppo('Simboli', SIMBOLI);
    gruppo('Unità di misura', (opz.unita && opz.unita.length ? opz.unita : UNITA).map(function (u) { return u.charAt(0) === '\\' ? u : '\\text{' + u + '}'; }));
    var az = el('div', 'mp-faz', pan);
    var no = el('button', 'mp-b', az); no.type = 'button'; no.textContent = 'Annulla';
    var si = el('button', 'mp-b mp-b-pri', az); si.type = 'button'; si.textContent = tex ? 'Aggiorna' : 'Inserisci';
    conMathJax(function () { MathJax.typesetPromise([pan]).catch(function () {}); });

    var mf = null, inp = null;
    caricaMathLive().then(function () {
      mf = new MathfieldElement();
      mf.className = 'mp-mf';
      try { mf.mathVirtualKeyboardPolicy = 'auto'; mf.smartMode = false; } catch (e) {}
      campo.appendChild(mf);
      mf.value = tex || '';
      setTimeout(function () { mf.focus(); }, 50);
    }).catch(function () {
      inp = el('input', 'mp-finput', campo); inp.type = 'text'; inp.value = tex || '';
      inp.placeholder = 'formula (es. F = G\\frac{Mm}{r^2})';
      el('p', 'mp-fhint', campo).textContent = 'L\'editor delle formule non si è caricato (manca la rete?): scrivi la formula in LaTeX o usa i pulsanti.';
      inp.focus();
    });
    pan.addEventListener('mousedown', function (e) { if (e.target.closest('.mp-fbtn button')) e.preventDefault(); });
    pan.addEventListener('click', function (e) {
      var b = e.target.closest('.mp-fbtn button'); if (!b) return;
      var t = b.dataset.ins;
      if (mf) { mf.insert(t, { insertionMode: 'replaceSelection', selectionMode: 'placeholder', focus: true }); }
      else if (inp) {
        var semplice = t.replace(/#@/g, '').replace(/#\?|#0/g, ''), a = inp.selectionStart || inp.value.length;
        inp.value = inp.value.slice(0, a) + semplice + inp.value.slice(inp.selectionEnd || a); inp.focus();
      }
    });
    function chiudi(v) { ov.remove(); fatto(v); }
    no.onclick = function () { chiudi(null); };
    si.onclick = function () {
      var v = mf ? mf.getValue('latex') : inp ? inp.value : '';
      v = String(v || '').replace(/\\placeholder\{\}/g, '').trim();
      chiudi(v || null);
    };
    ov.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); chiudi(null); } });
  }

  // ───────── editor (a tutto schermo) ─────────
  function Editor(dati, opz) {
    var self = this;
    this.opz = opz || {};
    this.d = normalizza(copia(dati));
    this.storia = [];
    this.modo = 'sposta'; this.colore = 'azzurro'; this.tipo = 'freccia';
    this.sel = null; this.inMod = null; this.primo = null;

    var ov = this.ov = el('div', 'mp-editor', document.body);
    document.documentElement.classList.add('mp-editor-aperto');
    var barra = el('div', 'mp-barra', ov);
    function btn(testo, titolo, fn, cls) { var b = el('button', 'mp-tb' + (cls ? ' ' + cls : ''), barra); b.type = 'button'; b.innerHTML = testo; b.title = titolo; b.onclick = fn; return b; }
    function sep() { el('span', 'mp-sep', barra); }
    this.bModi = {
      sposta: btn('↖', 'Seleziona e sposta (tocca due volte un riquadro per scriverci)', function () { self.imposta('sposta'); }),
      riquadro: btn('▭<small>+</small>', 'Nuovo riquadro: tocca il foglio dove vuoi metterlo', function () { self.imposta('riquadro'); }),
      collega: btn('➝', 'Collega due riquadri con una freccia: tocca il primo e poi il secondo', function () { self.imposta('collega'); }),
      penna: btn('✏️', 'Penna: scrivi o disegna sul foglio', function () { self.imposta('penna'); }),
      evidenzia: btn('🖍', 'Evidenziatore', function () { self.imposta('evidenzia'); }),
      gomma: btn('🧽', 'Gomma: cancella i tratti di penna', function () { self.imposta('gomma'); })
    };
    sep();
    this.bColori = {};
    Object.keys(COLORI).forEach(function (c) {
      var b = btn('', 'Colore: ' + c, function () { self.scegliColore(c); }, 'mp-col');
      b.style.background = c === 'nero' ? '#1f2937' : COLORI[c][0]; b.style.borderColor = COLORI[c][1];
      self.bColori[c] = b;
    });
    sep();
    this.bTipi = {};
    Object.keys(TIPI).forEach(function (t) { self.bTipi[t] = btn(TIPI[t], 'Freccia: ' + t, function () { self.scegliTipo(t); }, 'mp-tipo'); });
    sep();
    btn('<i>f</i>(x)', 'Inserisci una formula', function () { self.formula(); });
    btn('<b>B</b>', 'Grassetto', function () { if (self.inMod) document.execCommand('bold'); });
    btn('🗑', 'Elimina ciò che è selezionato', function () { self.elimina(); });
    btn('↶', 'Annulla l\'ultima modifica', function () { self.annulla(); });
    btn('⟲', 'Ricomincia: dal mio schema o da un foglio bianco', function () { self.ricomincia(); });
    el('span', 'mp-spazio', barra);
    if (opz.pdf) btn('⬇ PDF', 'Scarica lo schema in PDF', function () { self.chiudiModifica(); opz.pdf(self.d, self.vista); }, 'mp-tw');
    if (opz.invia) btn('📤 Invia', 'Mandami lo schema', function () { self.chiudiModifica(); opz.invia(self.d); }, 'mp-tw');
    btn('✓ Fine', 'Chiudi l\'editor (lo schema resta salvato)', function () { self.chiudi(); }, 'mp-tw mp-fine');

    this.aiuto = el('div', 'mp-aiuto', ov);
    var area = this.area = el('div', 'mp-area', ov);
    var host = el('div', 'mp-host', area);
    this.vista = new Vista(host, this.d);
    this.adatta();
    this.ridim = function () { self.adatta(); };
    window.addEventListener('resize', this.ridim);
    this.tasti = function (e) { self.tasto(e); };
    document.addEventListener('keydown', this.tasti);
    this.eventi();
    this.imposta('sposta'); this.scegliColore('azzurro'); this.scegliTipo('freccia');
  }
  Editor.prototype.adatta = function () {
    var r = this.area.getBoundingClientRect();
    var s = Math.min((r.width - 16) / W, (r.height - 16) / H);
    this.vista.adatta(Math.max(0.2, s));
  };
  Editor.prototype.imposta = function (m) {
    this.chiudiModifica();
    this.modo = m; this.primo = null;
    for (var k in this.bModi) this.bModi[k].classList.toggle('on', k === m);
    this.vista.tela.className = 'mp-tela mp-modo-' + m;
    var aiuti = {
      sposta: 'Trascina i riquadri per spostarli; l\'angolino in basso a destra cambia la misura. Tocca due volte un riquadro (o una freccia) per scriverci.',
      riquadro: 'Tocca il foglio nel punto in cui vuoi il nuovo riquadro.',
      collega: 'Tocca il riquadro di partenza e poi quello di arrivo.',
      penna: 'Scrivi o disegna con il dito o il mouse.',
      evidenzia: 'Passa sopra a ciò che vuoi evidenziare.',
      gomma: 'Passa sopra ai tratti di penna da cancellare.'
    };
    this.aiuto.textContent = aiuti[m];
    this.seleziona(null);
  };
  Editor.prototype.scegliColore = function (c) {
    this.colore = c;
    for (var k in this.bColori) this.bColori[k].classList.toggle('on', k === c);
    if (this.sel && !this.inMod) {
      this.salvaStoria();
      var o = this.sel.tipo === 'nodo' ? trova(this.d.nodi, this.sel.id) : trova(this.d.frecce, this.sel.id);
      if (o && !o.svg) { o.colore = c; this.ridisegna(); }
    }
  };
  Editor.prototype.scegliTipo = function (t) {
    this.tipo = t;
    for (var k in this.bTipi) this.bTipi[k].classList.toggle('on', k === t);
    if (this.sel && this.sel.tipo === 'freccia') { this.salvaStoria(); trova(this.d.frecce, this.sel.id).tipo = t; this.ridisegna(); }
  };
  Editor.prototype.salvaStoria = function () {
    this.storia.push(JSON.stringify(this.d));
    if (this.storia.length > 60) this.storia.shift();
  };
  Editor.prototype.cambiato = function () {
    var self = this;
    clearTimeout(this.tSalva);
    this.tSalva = setTimeout(function () { if (self.opz.salva) self.opz.salva(self.d); }, 300);
  };
  Editor.prototype.ridisegna = function () {
    var sel = this.sel;
    this.vista.d = this.d; this.vista.disegna();
    this.seleziona(sel && (trova(sel.tipo === 'nodo' ? this.d.nodi : this.d.frecce, sel.id) ? sel : null));
    this.cambiato();
  };
  Editor.prototype.seleziona = function (s) {
    var v = this.vista;
    [].forEach.call(v.tela.querySelectorAll('.mp-sel'), function (e) { e.classList.remove('mp-sel'); });
    [].forEach.call(v.tela.querySelectorAll('.mp-maniglia'), function (e) { e.remove(); });
    this.sel = s;
    if (!s) return;
    if (s.tipo === 'nodo') {
      var e = v.elNodi[s.id]; if (!e) return;
      e.classList.add('mp-sel'); el('div', 'mp-maniglia', e);
    } else {
      var f = v.elFrecce[s.id]; if (!f) return;
      f.g.classList.add('mp-sel'); f.et.classList.add('mp-sel');
    }
  };
  Editor.prototype.punto = function (e) {
    var r = this.vista.tela.getBoundingClientRect(), s = this.vista.s;
    return { x: Math.round((e.clientX - r.left) / s), y: Math.round((e.clientY - r.top) / s) };
  };
  Editor.prototype.eventi = function () {
    var self = this, tela = this.vista.tela, drag = null, tratto = null, ultimoTap = { id: null, t: 0 };
    tela.addEventListener('pointerdown', function (e) {
      if (e.button > 0) return;
      var p = self.punto(e), m = self.modo;
      var nodoEl = e.target.closest('.mp-nodo'), frEl = e.target.closest('.mp-freccia'), etEl = e.target.closest('.mp-etich');
      if (self.inMod && self.inMod.el.contains(e.target)) {
        var ch = e.target.closest('.mp-f');
        if (ch) { e.preventDefault(); self.formula(ch); }
        return; // si sta scrivendo dentro un riquadro
      }
      if (m === 'penna' || m === 'evidenzia') {
        e.preventDefault(); self.chiudiModifica();
        self.salvaStoria();
        var t = { colore: m === 'evidenzia' ? (self.colore === 'bianco' || self.colore === 'nero' ? 'giallo' : self.colore) : self.colore, spessore: m === 'evidenzia' ? 16 : 2.5, punti: [[p.x, p.y]] };
        if (m === 'evidenzia') t.opacita = 0.35;
        self.d.tratti.push(t);
        tratto = { t: t, el: self.vista.tratto(t, self.d.tratti.length - 1) };
        tela.setPointerCapture(e.pointerId); return;
      }
      if (m === 'gomma') { e.preventDefault(); self.gomma(e); tratto = { gomma: true }; tela.setPointerCapture(e.pointerId); return; }
      if (m === 'riquadro') {
        e.preventDefault(); self.chiudiModifica(); self.salvaStoria();
        var n = { id: nuovoId('n'), x: Math.max(0, Math.min(W - 200, p.x - 100)), y: Math.max(0, Math.min(H - 50, p.y - 25)), w: 200, h: 50, testo: '', colore: self.colore };
        self.d.nodi.push(n); self.ridisegna(); self.imposta('sposta');
        self.seleziona({ tipo: 'nodo', id: n.id }); self.modifica(n.id);
        return;
      }
      if (m === 'collega') {
        e.preventDefault();
        if (!nodoEl) return;
        var id = nodoEl.dataset.id;
        if (!self.primo) { self.primo = id; nodoEl.classList.add('mp-sel'); self.aiuto.textContent = 'Ora tocca il riquadro di arrivo.'; return; }
        if (self.primo === id) return;
        self.salvaStoria();
        var f = { id: nuovoId('f'), da: self.primo, a: id, tipo: self.tipo, colore: self.colore === 'bianco' ? 'grigio' : self.colore };
        self.d.frecce.push(f); self.primo = null; self.ridisegna();
        self.aiuto.textContent = 'Freccia aggiunta. Tocca un altro riquadro di partenza, oppure ↖ per tornare a spostare.';
        return;
      }
      // modo "sposta"
      if (e.target.classList.contains('mp-maniglia')) {
        e.preventDefault(); e.stopPropagation();
        var nn = trova(self.d.nodi, self.sel.id), en = self.vista.elNodi[nn.id];
        self.salvaStoria();
        drag = { tipo: 'misura', n: nn, el: en, p0: p, w0: nn.w, h0: en.offsetHeight, mosso: false };
        tela.setPointerCapture(e.pointerId); return;
      }
      if (nodoEl) {
        e.preventDefault(); self.chiudiModifica();
        var id2 = nodoEl.dataset.id, n2 = trova(self.d.nodi, id2), ora = Date.now();
        var giaSel = self.sel && self.sel.tipo === 'nodo' && self.sel.id === id2;
        var doppio = ultimoTap.id === id2 && ora - ultimoTap.t < 450;
        ultimoTap = { id: id2, t: ora };
        self.seleziona({ tipo: 'nodo', id: id2 });
        drag = { tipo: 'sposta', n: n2, el: nodoEl, p0: p, x0: n2.x, y0: n2.y, mosso: false, scrivi: (giaSel || doppio) && !n2.svg, storia: JSON.stringify(self.d) };
        tela.setPointerCapture(e.pointerId); return;
      }
      if (frEl || etEl) {
        e.preventDefault(); self.chiudiModifica();
        var fid = frEl ? frEl.dataset.id : etEl.dataset.freccia, ora2 = Date.now();
        var gia = (self.sel && self.sel.tipo === 'freccia' && self.sel.id === fid) || (ultimoTap.id === fid && ora2 - ultimoTap.t < 450);
        ultimoTap = { id: fid, t: ora2 };
        self.seleziona({ tipo: 'freccia', id: fid });
        if (gia) self.modificaEtichetta(fid);
        return;
      }
      self.chiudiModifica(); self.seleziona(null);
    });
    tela.addEventListener('pointermove', function (e) {
      if (tratto) {
        if (tratto.gomma) { self.gomma(e); return; }
        var p = self.punto(e), pp = tratto.t.punti, u = pp[pp.length - 1];
        if (Math.abs(p.x - u[0]) + Math.abs(p.y - u[1]) < 2) return;
        pp.push([p.x, p.y]); tratto.el.setAttribute('d', percorso(pp)); return;
      }
      if (!drag) return;
      var q = self.punto(e), dx = q.x - drag.p0.x, dy = q.y - drag.p0.y;
      if (!drag.mosso && Math.abs(dx) + Math.abs(dy) < 4) return;
      drag.mosso = true;
      if (drag.tipo === 'sposta') {
        drag.n.x = Math.max(-drag.n.w + 30, Math.min(W - 30, drag.x0 + dx)); drag.n.y = Math.max(0, Math.min(H - 20, drag.y0 + dy));
        drag.el.style.left = drag.n.x + 'px'; drag.el.style.top = drag.n.y + 'px';
      } else {
        drag.n.w = Math.max(50, drag.w0 + dx); drag.n.h = Math.max(24, drag.h0 + dy);
        drag.el.style.width = drag.n.w + 'px'; drag.el.style.minHeight = drag.n.h + 'px';
        if (drag.n.svg) drag.el.style.height = drag.n.h + 'px';
      }
      self.vista.frecce();
    });
    function fine() {
      if (tratto) { if (!tratto.gomma) self.cambiato(); tratto = null; return; }
      if (!drag) return;
      var d = drag; drag = null;
      if (d.mosso) { if (d.tipo === 'sposta') { self.storia.push(d.storia); } self.cambiato(); }
      else if (d.tipo === 'sposta' && d.scrivi) self.modifica(d.n.id);
      else if (d.tipo === 'misura') self.storia.pop();
    }
    tela.addEventListener('pointerup', fine);
    tela.addEventListener('pointercancel', fine);
    tela.addEventListener('dblclick', function (e) {
      if (self.modo !== 'sposta') return;
      var n = e.target.closest('.mp-nodo');
      if (n && !(self.inMod && self.inMod.el.contains(e.target))) { var o = trova(self.d.nodi, n.dataset.id); if (o && !o.svg) self.modifica(o.id); }
    });
  };
  Editor.prototype.gomma = function (e) {
    var t = document.elementFromPoint(e.clientX, e.clientY);
    if (t && t.classList && t.classList.contains('mp-tratto') && this.vista.svgT.contains(t)) {
      var i = +t.dataset.i;
      this.salvaStoria();
      this.d.tratti.splice(i, 1); this.ridisegna();
    }
  };
  Editor.prototype.modifica = function (id) {
    this.chiudiModifica();
    var e = this.vista.elNodi[id], t = e && e.querySelector('.mp-testo');
    if (!t) return;
    this.inMod = { tipo: 'nodo', id: id, el: e, t: t, prima: trova(this.d.nodi, id).testo || '' };
    e.classList.add('mp-in-mod');
    t.contentEditable = 'true'; t.focus();
    var r = document.createRange(); r.selectNodeContents(t); r.collapse(false);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    this.aiuto.textContent = 'Scrivi nel riquadro. Per una formula usa f(x). Tocca fuori dal riquadro quando hai finito.';
  };
  Editor.prototype.modificaEtichetta = function (fid) {
    this.chiudiModifica();
    var f = this.vista.elFrecce[fid]; if (!f) return;
    var t = f.et;
    t.classList.remove('mp-vuota');
    this.inMod = { tipo: 'freccia', id: fid, el: t, t: t, prima: trova(this.d.frecce, fid).testo || '' };
    t.classList.add('mp-in-mod');
    t.contentEditable = 'true'; t.focus();
    var r = document.createRange(); r.selectNodeContents(t); r.collapse(false);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    this.aiuto.textContent = 'Scrivi l\'etichetta della freccia. Tocca fuori quando hai finito.';
  };
  Editor.prototype.chiudiModifica = function () {
    var m = this.inMod; if (!m) return;
    this.inMod = null;
    m.t.contentEditable = 'false'; m.el.classList.remove('mp-in-mod');
    var nuovo = domInTesto(m.t).replace(/\s+$/, '').replace(/^\n+/, '');
    var o = m.tipo === 'nodo' ? trova(this.d.nodi, m.id) : trova(this.d.frecce, m.id);
    if (o && nuovo !== m.prima) { this.storia.push(JSON.stringify(this.d)); o.testo = nuovo; this.ridisegna(); }
    else if (m.tipo === 'freccia' && !nuovo) m.t.classList.add('mp-vuota');
  };
  Editor.prototype.formula = function (chipEsistente) {
    var self = this, rng = null;
    if (!this.inMod) {
      if (this.sel && this.sel.tipo === 'nodo' && !trova(this.d.nodi, this.sel.id).svg) this.modifica(this.sel.id);
      else if (this.sel && this.sel.tipo === 'freccia') this.modificaEtichetta(this.sel.id);
      else {
        this.salvaStoria();
        var n = { id: nuovoId('n'), x: W / 2 - 100, y: H / 2 - 25, w: 200, h: 50, testo: '', colore: this.colore };
        this.d.nodi.push(n); this.ridisegna(); this.seleziona({ tipo: 'nodo', id: n.id }); this.modifica(n.id);
      }
    }
    var m = this.inMod; if (!m) return;
    var s = window.getSelection();
    if (s.rangeCount && m.t.contains(s.getRangeAt(0).startContainer)) rng = s.getRangeAt(0).cloneRange();
    apriFormula(chipEsistente ? chipEsistente.dataset.tex : '', this.opz, function (tex) {
      if (!self.inMod) return;
      self.inMod.t.focus();
      if (tex == null) return;
      var c = chip(tex);
      if (chipEsistente) chipEsistente.parentNode.replaceChild(c, chipEsistente);
      else {
        if (!rng) { rng = document.createRange(); rng.selectNodeContents(self.inMod.t); rng.collapse(false); }
        rng.deleteContents(); rng.insertNode(c);
        var dopo = document.createTextNode(' '); c.parentNode.insertBefore(dopo, c.nextSibling);
        var r2 = document.createRange(); r2.setStart(dopo, 1); r2.collapse(true);
        var s2 = window.getSelection(); s2.removeAllRanges(); s2.addRange(r2);
      }
      conMathJax(function () { MathJax.typesetPromise([c]).then(function () { self.vista.frecce(); }).catch(function () {}); });
    });
  };
  Editor.prototype.elimina = function () {
    if (this.inMod || !this.sel) return;
    var s = this.sel; this.salvaStoria();
    if (s.tipo === 'nodo') {
      this.d.nodi = this.d.nodi.filter(function (n) { return n.id !== s.id; });
      this.d.frecce = this.d.frecce.filter(function (f) { return f.da !== s.id && f.a !== s.id; });
    } else this.d.frecce = this.d.frecce.filter(function (f) { return f.id !== s.id; });
    this.sel = null; this.ridisegna();
  };
  Editor.prototype.annulla = function () {
    this.chiudiModifica();
    if (!this.storia.length) return;
    this.d = JSON.parse(this.storia.pop()); this.sel = null; this.ridisegna();
  };
  Editor.prototype.ricomincia = function () {
    var self = this;
    this.chiudiModifica();
    var ov = el('div', 'mp-fdlg', document.body), p = el('div', 'mp-fpan mp-piccolo', ov);
    el('h4', '', p).textContent = 'Ricomincia';
    el('p', 'mp-fhint', p).textContent = 'Le modifiche fatte finora andranno perse (puoi comunque recuperarle con ↶ finché non chiudi l\'editor).';
    var az = el('div', 'mp-faz', p);
    function b(t, fn, cls) { var x = el('button', 'mp-b' + (cls ? ' ' + cls : ''), az); x.type = 'button'; x.textContent = t; x.onclick = function () { ov.remove(); if (fn) fn(); }; }
    b('Annulla');
    if (this.opz.modello) b('Dal mio schema', function () { self.salvaStoria(); self.d = normalizza(copia(self.opz.modello)); self.ridisegna(); });
    b('Da un foglio bianco', function () { self.salvaStoria(); self.d = vuoto(); self.ridisegna(); }, 'mp-b-pri');
  };
  Editor.prototype.tasto = function (e) {
    if (document.querySelector('.mp-fdlg')) return;
    if (e.key === 'Escape') { if (this.inMod) this.chiudiModifica(); else this.seleziona(null); return; }
    if (this.inMod) return;
    if ((e.key === 'Delete' || e.key === 'Backspace') && this.sel) { e.preventDefault(); this.elimina(); }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); this.annulla(); }
  };
  Editor.prototype.chiudi = function () {
    this.chiudiModifica();
    clearTimeout(this.tSalva); if (this.opz.salva) this.opz.salva(this.d);
    window.removeEventListener('resize', this.ridim);
    document.removeEventListener('keydown', this.tasti);
    this.ov.remove();
    document.documentElement.classList.remove('mp-editor-aperto');
    if (this.opz.chiudi) this.opz.chiudi(this.d);
  };

  // ───────── il riquadro nella pagina del capitolo (_includes/mappa.html) ─────────
  function quando(ts) { var d = new Date(ts); return d.getDate() + '/' + (d.getMonth() + 1) + ' alle ' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2); }
  function widget(w) {
    if (w._mappa) return; w._mappa = true;
    var mod = {};
    try { mod = JSON.parse(w.querySelector('.mp-modello').textContent) || {}; } catch (e) {}
    var modello = normalizza(mod), id = w.dataset.id || 'schema', titolo = w.dataset.titolo || 'Schema';
    var C = window.LVC, pagina = C ? C.pagina : location.pathname;
    var K = 'lv-mappa:' + pagina + ':' + id;
    function leggi() { try { var v = JSON.parse(localStorage.getItem(K) || 'null'); return v && v.nodi ? v : null; } catch (e) { return null; } }
    function scrivi(d) { try { var o = copia(d); o.ts = Date.now(); localStorage.setItem(K, JSON.stringify(o)); } catch (e) {} }
    var mio = leggi(), dati = mio || copia(modello);
    var ant = w.querySelector('.mp-anteprima'), stato = w.querySelector('.mp-stato');
    var vista = new Vista(ant, dati);
    function aggiornaStato(msg, cls) {
      var m = leggi();
      stato.className = 'mp-stato' + (cls ? ' ' + cls : '');
      stato.textContent = msg || (m ? 'Questa è la tua versione (salvata nel browser il ' + quando(m.ts) + ').' : 'Questo è il mio schema: con «Modifica» puoi costruire il tuo.');
    }
    aggiornaStato();
    var tR = null;
    window.addEventListener('resize', function () { clearTimeout(tR); tR = setTimeout(function () { vista.adatta(); vista.frecce(); }, 150); });
    function titoloStampa() { var a = C && C.accesso && C.accesso(); return titolo + (a ? ' — ' + a.codice + ' (' + a.classe + ')' : ''); }
    function pdf(d, v) { stampa(v || vista, titoloStampa()); }
    function invia(d) {
      if (!C || !C.chiama) { aggiornaStato('Le consegne non sono attive su questo sito.', 'mp-err'); return; }
      var a = C.accesso && C.accesso();
      if (!a) { alert('Per mandarmi lo schema, prima accedi con il pulsante 👤 in alto (codice e PIN).'); return; }
      aggiornaStato('Invio in corso…');
      var o = copia(d); delete o.ts;
      C.chiama('/schema', { token: a.token, pagina: pagina, titolo: titolo, tipo: 'mappa', dati: JSON.stringify(o) }).then(function () {
        aggiornaStato('😊 L\'ho ricevuto! (' + quando(Date.now()) + ') Se lo modifichi, ricordati di inviarmelo di nuovo.', 'mp-ok');
        if (C.notifica) C.notifica('😊 L\'ho ricevuto!');
      }).catch(function (err) {
        var t = { troppi: 'Hai già inviato molti schemi oggi: riprova domani.', grande: 'Lo schema è troppo grande per essere inviato.' }[err && err.codice];
        if (err && err.status === 404) t = 'Il server non accetta ancora gli schemi: avvisa il prof.';
        if (err && err.status === 401) t = 'Devi rientrare con codice e PIN (pulsante 👤).';
        aggiornaStato(t || 'Non riesco a inviarlo: controlla la connessione e riprova.', 'mp-err');
      });
    }
    w.addEventListener('click', function (e) {
      var b = e.target.closest('[data-mp]'); if (!b) return;
      var az = b.dataset.mp;
      if (az === 'modifica') {
        new Editor(leggi() || copia(modello), {
          modello: modello, simboli: mod.simboli, unita: mod.unita, titolo: titolo,
          salva: function (d) { scrivi(d); },
          pdf: pdf, invia: invia,
          chiudi: function (d) { vista.d = normalizza(d); vista.disegna(); vista.adatta(); aggiornaStato(); }
        });
      } else if (az === 'pdf') pdf(vista.d, vista);
      else if (az === 'invia') invia(vista.d);
    });
  }
  function montaTutti() { [].forEach.call(document.querySelectorAll('.mp-widget'), widget); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montaTutti); else montaTutti();

  window.Mappa = { Vista: Vista, Editor: Editor, stampa: stampa, widget: widget, normalizza: normalizza, W: W, H: H };
})();
