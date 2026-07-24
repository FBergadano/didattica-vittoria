---
layout: capitolo
title: "La Teoria della Gravitazione"
corso: fisica-5acd
corso_titolo: "Fisica 5ª ACD"
materia: fisica
classe: "5ACD"
numero: 1
---


<cit autore="Bertolt Brecht, Vita di Galileo, scena settima">
<em>CARDINAL BARBERINI</em> “Siete sicuro, amico Galileo, che voi astronomi non vogliate semplicemente rendere più comoda l'astronomia? Pensate in termini di cerchi ed ellissi, cioè di cose conformi ai vostri cervelli. Ma supponiamo che l'Onnipotente si sia fitto in capo di far muovere le stelle così <em>(traccia in aria col dito un'orbita complicatissima con un moto irregolare)</em>. Dove andrebbero a finire, allora, i vostri calcoli?” 
<em>GALILEO</em> “Allora, Eminenza, l'Onnipotente ci avrebbe forniti di cervelli fatti così <em>(traccia col dito lo stesso movimento)</em> perché potessimo credere che un movimento così <em>(ripete il tracciato immaginario)</em> fosse il più semplice possibile! Io ho fede nel cervello.”
</cit>


{% include margin-note.html testo="Tutto interagisce con tutto." %}
Tutti noi sappiamo che la forza gravitazionale è quella che ci attrae verso il centro della Terra e che attrae la Terra verso il Sole. Ciò che invece è meno comune è comprendere che **ogni oggetto dotato di massa** (cioè quasi qualsiasi cosa tranne la luce) **è attratto da qualsiasi altro oggetto dotato di massa**. Voi siete attratti dal tavolo che avete di fronte, e lo attraete a vostra volta, e lo stesso vale per ogni granello di sabbia in ogni spiaggia lontana o ogni molecola di aria. Ogni oggetto tende ad unirsi con ogni altro oggetto nell'Universo per via dell'interazione gravitazionale. 
{% include margin-note-end.html %}

{% include margin-note.html testo="La gravità è la forza più debole della Natura." %}
Ma, come ci dice l'esperienza quotidiana, questa attrazione è così debole che possiamo trascurarla praticamente sempre, tranne nel caso dei pianeti e delle stelle. Vale a dire, affinché gli effetti della forza gravitazionale siano realmente visibili, ci vogliono masse enormi.  
La <definizione>gravità</definizione> è la forza più debole presente in Natura.
{% include margin-note-end.html %}

# La legge di Gravitazione Universale
La teoria che vedremo in questo capitolo fu essenzialmente formulata nel 1687 dal pazzo più geniale della storia della Fisica: Newton. 
Fu solo dopo più di un secolo, nel 1798, che Cavendish riuscì a dimostrare **sperimentialmente**, in un laboratorio, la legge trovata da Newton.  
Noi faremo il processo contrario, guarderemo prima l'esperimento di Cavendish e alla luce di quello interpreteremo la legge di Newton.

{% include spoiler.html testo="Se sei curioso sulla follia di Newton, apri qui" %}

{% include figura.html id="ritratto-newton"
   src="/corsi/immagini/Portrait_of_Sir_Isaac_Newton,_1689_(brightened).jpg"
   didascalia="Isaac Newton in un ritratto del 1689, l'anno prima della pubblicazione dei Philosophiæ Naturalis Principia Mathematica."
   larghezza="220px" %}

Newton non era soltanto un genio: era anche, per larghi tratti della sua vita, un uomo profondamente strano. Viveva quasi da eremita, dormiva pochissimo, dimenticava spesso di mangiare quando era assorto in un problema, e passava più tempo a scrivere di alchimia e di teologia — migliaia di pagine, in gran parte mai pubblicate — che non di fisica o matematica.

Proprio l'alchimia gioca un ruolo chiave in questa storia. Per decenni Newton condusse esperimenti chimici clandestini nel suo laboratorio a Cambridge, manipolando e persino assaggiando sostanze come il mercurio — pratica non insolita all'epoca, ma che sappiamo oggi essere estremamente tossica. Analisi condotte nel Novecento su una ciocca dei suoi capelli hanno effettivamente rivelato concentrazioni di mercurio ben superiori alla norma.

Nel 1693 accadde qualcosa di preciso: Newton attraversò quello che oggi chiameremmo un esaurimento nervoso. Scrisse lettere sconnesse e accusatorie ad amici stretti, come il filosofo John Locke, arrivando ad accusarli di complottare contro di lui; smise quasi del tutto di dormire e si isolò per mesi. Poi si riprese, si scusò con gli amici, e tornò lucido come prima — ma l'episodio resta uno dei grandi misteri biografici della storia della scienza.

Gli storici discutono ancora oggi su cosa lo abbia causato. Le due ipotesi principali sono l'<definizione>avvelenamento cronico da mercurio</definizione>, dovuto ai suoi esperimenti alchemici, oppure un disturbo dell'umore — probabilmente <definizione>bipolare</definizione> — di cui l'episodio del 1693 sarebbe stata solo la manifestazione più evidente di una tendenza che Newton mostrò per tutta la vita, alternando periodi di produttività quasi ossessiva a periodi di isolamento totale. Nessuna delle due ipotesi è stata dimostrata con certezza: è anche possibile che abbiano contribuito entrambe.

Vale la pena ricordarlo: la mente che ha scritto l'equazione che state per studiare in questo capitolo — capace di descrivere con un'unica legge la caduta di una mela e il moto della Luna — apparteneva a una persona reale, fragile e complicata come chiunque altro.

{% include spoiler-end.html %}

## L'esperimento di Cavendish
{% include margin-note.html testo="Descrizione della bilancia a torsione"%}
Cavendish costruì il seguente apparato sperimentale, la cosiddetta <definizione>bilancia a torsione</definizione> (si veda la {% include fig-ref.html id="bilancia_a_torsione" %}):

- un'asta rigida orizzontale (il “bilancere”), sospesa al centro a un filo sottilissimo, molto sensibile alla torsione;
- una piccola sfera, di massa $m$, fissata a un estremo del bilancere; all'altro estremo, un piattino che indica la posizione sulla scala;
- una sfera grande, di massa $M$, appesa al tappo dell'apparato, vicino alla parete di vetro;
- una scala graduata, attorno al bilancere, per leggerne la rotazione;
- un involucro di vetro che racchiude il tutto, per proteggere l'apparato dalle correnti d'aria, capaci da sole di disturbare una misura così delicata.
{% include margin-note-end.html %}

{% include figura.html id="bilancia_a_torsione"
   src="/corsi/immagini/bilancia_a_torsione_cavendish.png"
   didascalia="La bilancia di torsione di Cavendish."
   larghezza="280px" %}

Nella realtà la rotazione era così minuscola che Cavendish dovette leggerla con uno specchietto fissato al filo, che rifletteva un fascio di luce su una scala lontana; nella nostra animazione, per semplicità, la scala è mostrata direttamente attorno al bilancere.

Puoi ripetere l'esperienza di Cavendish con l'animazione qui sotto.

<div id="cavx1" class="cavx-widget">

  <div class="cavx-head">
    <span class="cavx-badge">Londra · 1798</span>
    <h4 class="cavx-title">La Bilancia di Torsione di Cavendish</h4>
    <p class="cavx-sub">Una piccola sfera (<em>m</em>) all'estremità di un'asta sospesa a un filo, dentro un involucro di vetro con una scala graduata. All'altra estremità, un piattino indica la posizione sulla scala. Una sfera grande (<em>M</em>), appesa al tappo vicino alla parete di vetro, la attrae.</p>
  </div>

  <div class="cavx-scenario-tabs">
    <button class="cavx-tab active" data-scenario="mass">Dipendenza dalle masse</button>
    <button class="cavx-tab" data-scenario="r">Dipendenza da r</button>
  </div>
  <div class="cavx-stage">
    <div class="cavx-canvas-wrap">
      <canvas class="cavx-app" width="400" height="480"></canvas>
      <p class="cavx-canvas-cap">L'asta ruota verso la sfera grande (rotazione amplificata per essere visibile)</p>
    </div>
  </div>

  <p class="cavx-meter">Forza rilevata: <span class="cavx-fval">—</span> N</p>

  <div class="cavx-panel cavx-panel-mass">
    <div class="cavx-controls">
      <div class="cavx-control-group">
        <span class="cavx-control-label">Massa grande <em>M</em></span>
        <div class="cavx-choice-row">
          <button class="cavx-choice cavx-Mbtn active" data-val="20">20 kg</button>
          <button class="cavx-choice cavx-Mbtn" data-val="40">40 kg</button>
        </div>
      </div>

      <div class="cavx-centre-controls">
        <button class="cavx-btn-main cavx-play">▶ Avvia</button>
        <button class="cavx-btn-rev cavx-reset">↺ Allontana</button>
      </div>

      <div class="cavx-control-group">
        <span class="cavx-control-label">Massa piccola <em>m</em></span>
        <div class="cavx-choice-row">
          <button class="cavx-choice cavx-mbtn active" data-val="2">2 kg</button>
          <button class="cavx-choice cavx-mbtn" data-val="4">4 kg</button>
        </div>
      </div>
    </div>
  </div>

  <div class="cavx-panel cavx-panel-r" style="display:none">
    <p class="cavx-rstudy-info">
      Distanza attuale <em>r</em> = <span class="cavx-r-cur">—</span> cm &nbsp;·&nbsp;
      Forza prima del cambio: <span class="cavx-r-fbefore">—</span> N
    </p>
    <div class="cavx-rstudy-btns"></div>
    <p class="cavx-rstudy-ratio">&nbsp;</p>
  </div>

  <div class="cavx-legend">
    <div class="cavx-legend-item"><span class="cavx-legend-dot" style="background:#e8983a"></span> Sfera grande (M)</div>
    <div class="cavx-legend-item"><span class="cavx-legend-dot" style="background:#c7ccd4"></span> Sfera piccola (m)</div>
    <div class="cavx-legend-item"><span class="cavx-legend-dot" style="background:#d8d8d8"></span> Piattino indicatore</div>
  </div>

</div>

<style>
.cavx-widget {
  --cx-bg: #0a0c10;
  --cx-surface: #10141c;
  --cx-copper: #b87333;
  --cx-copper-bright: #e8983a;
  --cx-amber: #ff9a00;
  --cx-glow: rgba(184,115,51,0.4);
  --cx-text: #e8d5b0;
  --cx-text2: #9a8060;
  --cx-rline: #6fd3d9;
  font-family: 'Crimson Text', Georgia, serif;
  background: var(--cx-bg);
  color: var(--cx-text);
  border-radius: 10px;
  padding: 1.8rem 1.6rem 1.6rem;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.35);
}
.cavx-widget::before {
  content:'';
  position:absolute; inset:0;
  background: radial-gradient(ellipse at 50% 0%, rgba(184,115,51,0.08) 0%, transparent 60%);
  pointer-events:none;
}
.cavx-widget * { box-sizing: border-box; }
.cavx-head { text-align:center; margin-bottom:1.1rem; position:relative; z-index:1; }
.cavx-badge { font-size:.7rem; letter-spacing:.32em; color: var(--cx-copper); text-transform:uppercase; display:block; margin-bottom:.5rem; }
.cavx-title { font-family: Georgia, serif; font-size:1.4rem; font-weight:700; color: var(--cx-text); margin: 0 0 .5rem; }
.cavx-sub { font-size:.92rem; color: var(--cx-text2); font-style:italic; max-width:520px; margin:0 auto; line-height:1.6; }
.cavx-sub em { color: var(--cx-copper-bright); font-style:italic; }

.cavx-scenario-tabs {
  display:flex; justify-content:center; gap:.5rem; margin-bottom:1.2rem; position:relative; z-index:1;
}
.cavx-tab {
  padding:.5rem 1.1rem; border-radius:20px; cursor:pointer;
  background:transparent; border:1px solid rgba(184,115,51,.4); color: var(--cx-text2);
  font-family: Georgia, serif; font-size:.85rem; transition:all .2s;
}
.cavx-tab:hover { border-color: var(--cx-copper); color: var(--cx-copper-bright); }
.cavx-tab.active { background: var(--cx-copper); border-color: var(--cx-copper); color: var(--cx-bg); font-weight:700; }

.cavx-stage { display:flex; gap:1rem; justify-content:center; position:relative; z-index:1; }
.cavx-canvas-wrap {
  border:1px solid rgba(184,115,51,0.22); border-radius:6px;
  background: var(--cx-surface); overflow:hidden;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.5);
  width: 420px; max-width:100%;
}
.cavx-canvas-wrap canvas { display:block; width:100%; height:auto; }
.cavx-canvas-cap { font-size:.76rem; color: var(--cx-text2); text-align:center; padding:.5rem .6rem .7rem; font-style:italic; }

.cavx-meter {
  text-align:center; font-size:.85rem; color: var(--cx-text2);
  margin: .8rem 0 0; position:relative; z-index:1;
}
.cavx-fval { color: var(--cx-amber); font-weight:600; }

.cavx-panel { position:relative; z-index:1; margin-top:1.2rem; }

.cavx-controls {
  display:grid; grid-template-columns:1fr auto 1fr; gap:1.3rem; align-items:center;
}
.cavx-control-group { display:flex; flex-direction:column; gap:.45rem; align-items:center; }
.cavx-control-label { font-size:.74rem; letter-spacing:.1em; text-transform:uppercase; color: var(--cx-text2); text-align:center; }

.cavx-choice-row { display:flex; gap:.5rem; }
.cavx-choice {
  padding:.4rem .7rem; border-radius:3px; cursor:pointer;
  background:transparent; border:1px solid rgba(184,115,51,.4); color: var(--cx-text2);
  font-family: Georgia, serif; font-size:.85rem; transition:all .2s;
}
.cavx-choice:hover { border-color: var(--cx-copper); color: var(--cx-copper-bright); }
.cavx-choice.active { background: var(--cx-copper); border-color: var(--cx-copper); color: var(--cx-bg); font-weight:700; }

.cavx-centre-controls { display:flex; flex-direction:column; align-items:center; gap:.55rem; }
.cavx-btn-main, .cavx-btn-rev, .cavx-rbtn {
  padding:.55rem 1.15rem; border-radius:3px; cursor:pointer;
  font-family: Georgia, serif; font-size:.86rem; letter-spacing:.04em;
  white-space:nowrap; transition:all .25s;
}
.cavx-btn-main {
  background:transparent; border:1.4px solid var(--cx-copper); color: var(--cx-copper-bright);
}
.cavx-btn-main:hover { background: rgba(184,115,51,.18); }
.cavx-btn-main.active { background: var(--cx-copper); color: var(--cx-bg); }
.cavx-btn-rev, .cavx-rbtn {
  background:transparent; border:1px solid rgba(184,115,51,.4); color: var(--cx-text2);
}
.cavx-btn-rev:hover, .cavx-rbtn:hover { border-color: var(--cx-copper); color: var(--cx-copper-bright); background: rgba(184,115,51,.12); }

.cavx-panel-r { display:flex; flex-direction:column; align-items:center; gap:.7rem; }
.cavx-rstudy-info { font-size:.85rem; color: var(--cx-text2); text-align:center; margin:0; }
.cavx-r-cur, .cavx-r-fbefore { color: var(--cx-rline); font-weight:600; }
.cavx-rstudy-btns { display:flex; gap:.6rem; flex-wrap:wrap; justify-content:center; }
.cavx-rstudy-ratio { color: var(--cx-copper-bright); font-style:italic; font-size:.85rem; min-height:1.3em; text-align:center; margin:0; }

.cavx-legend {
  display:flex; gap:1.2rem; flex-wrap:wrap; justify-content:center;
  margin-top:1.3rem; font-size:.8rem; color: var(--cx-text2); position:relative; z-index:1;
}
.cavx-legend-item { display:flex; align-items:center; gap:.4rem; }
.cavx-legend-dot { width:10px; height:10px; border-radius:50%; display:inline-block; }

@media (max-width: 640px) {
  .cavx-controls { grid-template-columns: 1fr; }
}
@media print { .cavx-widget { display:none !important; } }
</style>

<script>
(function(){
  var root = document.getElementById('cavx1');
  if (!root) return;
  function $(s){ return root.querySelector(s); }

  var G = 6.674e-11;

  // Raggi delle sfere: fissi, non cambiano scegliendo un valore di massa diverso.
  var RM_VIS = 0.020;
  var Rm_VIS = 0.010;

  // Geometria dell'apparato (in metri): base, vetro e coperchio hanno lo stesso
  // raggio (un cilindro uniforme). L'anello graduato ha lo stesso diametro
  // della gabbia a quell'altezza. Il bilancere ha lunghezza totale
  // ℓ = 2(R - r_m): la sferetta, orbitando, sfiora la parete di vetro.
  // La massa grande tocca la parete dal lato opposto.
  var BASE_R = 0.17, BASE_H = 0.02;
  var GLASS_R = 0.17, GLASS_H = 0.32;
  var LID_R = 0.17, LID_H = 0.02;
  var TUBE_R = 0.022, TUBE_H = 0.06;
  var KNOB_R = 0.026;
  var LR = GLASS_R - Rm_VIS;   // raggio dell'orbita della massa piccola sul bilancere
  var D_M = GLASS_R - RM_VIS;  // la massa grande tocca la parete di vetro
  var ROD_Y = BASE_H + GLASS_H * 0.42;
  var RING_R = GLASS_R;
  var THETA_M = Math.PI; // la massa grande sta a sinistra

  var THETA_INITIAL = THETA_M - 45 * Math.PI / 180; // condizione iniziale: 45° da M

  // Con m e M così vicine alla parete, il bilancere non può avvicinarsi a M
  // oltre un certo angolo, altrimenti le sfere si toccherebbero: il vincolo è
  // sull'ANGOLO massimo raggiungibile (un fermo meccanico), non sulla
  // lunghezza dell'asta né sulla posizione di M, che restano quelle richieste.
  var THETA_SAFE_MARGIN = 22 * Math.PI / 180;
  var ANGLE_LIMIT = THETA_M - THETA_SAFE_MARGIN;

  // Partendo così vicino a M, la rigidità del filo va calibrata per ciascuna
  // coppia di masse: a parità di rigidità le combinazioni più pesanti
  // arriverebbero al fermo meccanico quasi subito. I valori sono scelti in
  // modo che nessuna combinazione tocchi il fermo, restando comunque
  // crescenti con la massa (M=20/m=2 leggermente più del semplice
  // proporzionale, come richiesto).
  var K_WIRE_TABLE = {
    '20,2': 3.43e-7,
    '40,2': 5.10e-7,
    '20,4': 5.10e-7,
    '40,4': 9.30e-7
  };
  var STEP = 2e5, CONV_EPS = 1e-5;
  function currentKWire() {
    return K_WIRE_TABLE[state.M + ',' + state.m];
  }

  // ─── Scenario "dipendenza da r" ─────────────────────────────────────────
  var R0 = 0.068; // distanza iniziale: 4×R0 resta comunque dentro la gabbia
  var TRANSITIONS = {
    1: [{ to: 2, label: 'Raddoppia r' }, { to: 3, label: 'Triplica r' }, { to: 4, label: 'Quadruplica r' }],
    2: [{ to: 1, label: 'Dividi per 2' }, { to: 4, label: 'Raddoppia ancora' }],
    3: [{ to: 1, label: 'Dividi per 3' }],
    4: [{ to: 1, label: 'Dividi per 4' }, { to: 2, label: 'Dividi per 2' }]
  };
  var rMultiplier = 1;

  var state = { M: 20, m: 2, angle: THETA_INITIAL, mode: 'manual' };
  var scenario = 'mass';

  var fValEl = $('.cavx-fval');
  var playBtn = $('.cavx-play'), resetBtn = $('.cavx-reset');
  var MBtns = root.querySelectorAll('.cavx-Mbtn');
  var mBtns = root.querySelectorAll('.cavx-mbtn');
  var tabs = root.querySelectorAll('.cavx-tab');
  var panelMass = $('.cavx-panel-mass'), panelR = $('.cavx-panel-r');
  var rBtnsContainer = $('.cavx-rstudy-btns');
  var rCurEl = $('.cavx-r-cur'), rFBeforeEl = $('.cavx-r-fbefore'), rRatioEl = $('.cavx-rstudy-ratio');

  var appCv = $('.cavx-app'), appCtx = appCv.getContext('2d');

  function rDist(angle) {
    return Math.sqrt(D_M * D_M + LR * LR - 2 * D_M * LR * Math.cos(angle - THETA_M));
  }
  function angleFromR(r) {
    var cosVal = (D_M * D_M + LR * LR - r * r) / (2 * D_M * LR);
    cosVal = Math.max(-1, Math.min(1, cosVal));
    return THETA_M - Math.acos(cosVal);
  }
  function force() {
    var r = rDist(state.angle);
    return G * state.M * state.m / (r * r);
  }
  function torqueGravity(angle) {
    var rr = rDist(angle);
    var f = G * state.M * state.m / (rr * rr);
    return -f * LR * D_M * Math.sin(angle - THETA_M) / rr;
  }
  function fmtSci(x) {
    if (x === 0) return '0';
    var e = Math.floor(Math.log10(Math.abs(x)));
    var mant = x / Math.pow(10, e);
    return mant.toFixed(2) + ' × 10<sup>' + e + '</sup>';
  }
  function updateReadouts() {
    fValEl.innerHTML = fmtSci(force());
    if (scenario === 'r') rCurEl.textContent = (rDist(state.angle) * 100).toFixed(1).replace('.', ',');
  }

  // ─── Pulsanti dello studio r (dipendono dallo stato corrente) ──────────
  function renderRButtons() {
    rBtnsContainer.innerHTML = '';
    TRANSITIONS[rMultiplier].forEach(function (tr) {
      var b = document.createElement('button');
      b.className = 'cavx-rbtn';
      b.textContent = tr.label;
      b.addEventListener('click', function () { goToMultiplier(tr.to); });
      rBtnsContainer.appendChild(b);
    });
  }
  var rAnimId = null;
  function goToMultiplier(newK) {
    var oldK = rMultiplier;
    var Fbefore = force();
    rFBeforeEl.innerHTML = fmtSci(Fbefore);
    rRatioEl.textContent = '';
    var targetAngle = angleFromR(R0 * newK);
    var startAngle = state.angle;
    if (rAnimId) cancelAnimationFrame(rAnimId);
    var t0 = performance.now(), DUR = 1400;
    function step(now) {
      var t = Math.min(1, (now - t0) / DUR);
      var eased = 1 - Math.pow(1 - t, 3);
      state.angle = startAngle + (targetAngle - startAngle) * eased;
      if (t < 1) {
        rAnimId = requestAnimationFrame(step);
      } else {
        state.angle = targetAngle;
        rMultiplier = newK;
        renderRButtons();
        var Fafter = force();
        var distRatio = newK / oldK;
        rRatioEl.textContent = 'distanza ×' + distRatio.toFixed(distRatio % 1 === 0 ? 0 : 2) +
          '  →  forza ×' + (Fafter / Fbefore).toFixed(4) +
          '  (cioè 1/' + Math.round(distRatio * distRatio) + ')';
      }
    }
    rAnimId = requestAnimationFrame(step);
  }

  // ─── Cambio di scenario ─────────────────────────────────────────────────
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { x.classList.remove('active'); });
      t.classList.add('active');
      scenario = t.dataset.scenario;
      if (rAnimId) { cancelAnimationFrame(rAnimId); rAnimId = null; }
      if (scenario === 'mass') {
        panelMass.style.display = '';
        panelR.style.display = 'none';
        state.mode = 'manual';
        state.angle = THETA_INITIAL;
        playBtn.textContent = '▶ Avvia';
        playBtn.classList.remove('active');
      } else {
        panelMass.style.display = 'none';
        panelR.style.display = 'flex';
        state.mode = 'manual';
        rMultiplier = 1;
        state.angle = angleFromR(R0);
        renderRButtons();
        rFBeforeEl.textContent = '—';
        rRatioEl.textContent = ' ';
      }
    });
  });

  // ─── Proiezione 3D ──────────────────────────────────────────────────────
  var AZIMUTH = 20 * Math.PI / 180;
  var TILT = 24 * Math.PI / 180;
  var FOCAL = 1.6;
  var PXM = 720;
  var CX = 200, CY = 400;

  function rotY(p) {
    var c = Math.cos(AZIMUTH), s = Math.sin(AZIMUTH);
    return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
  }
  function rotX(p) {
    var c = Math.cos(TILT), s = Math.sin(TILT);
    return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
  }
  function project(x, y, z) {
    var p = rotX(rotY({ x: x, y: y, z: z }));
    var persp = FOCAL / (FOCAL + p.z);
    return { sx: CX + p.x * persp * PXM, sy: CY - p.y * persp * PXM, scale: persp };
  }
  function circlePts(radius, y, n) {
    var pts = [];
    for (var i = 0; i <= n; i++) {
      var a = (i / n) * Math.PI * 2;
      pts.push(project(radius * Math.cos(a), y, radius * Math.sin(a)));
    }
    return pts;
  }
  function pathThrough(ctx, pts) {
    ctx.beginPath();
    pts.forEach(function (p, i) { i === 0 ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy); });
  }
  function sphereAt(ctx, proj, radiusM, colInner, colOuter) {
    var rpx = radiusM * PXM * proj.scale;
    var g = ctx.createRadialGradient(
      proj.sx - rpx * 0.35, proj.sy - rpx * 0.4, rpx * 0.1,
      proj.sx, proj.sy, rpx
    );
    g.addColorStop(0, colInner);
    g.addColorStop(1, colOuter);
    ctx.beginPath();
    ctx.arc(proj.sx, proj.sy, rpx, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    return rpx;
  }
  // Piattino: disco verticale (perpendicolare alla base), piantato all'estremità del bilancere.
  function verticalPlateAt(ctx, cx3, cy3, cz3, radialX, radialZ, radiusM, color) {
    var pts = [];
    for (var i = 0; i <= 24; i++) {
      var a = (i / 24) * Math.PI * 2;
      var px = cx3 + radialX * radiusM * Math.cos(a);
      var py = cy3 + radiusM * Math.sin(a);
      var pz = cz3 + radialZ * radiusM * Math.cos(a);
      pts.push(project(px, py, pz));
    }
    pathThrough(ctx, pts);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,.3)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Direzione della luce (nel piano orizzontale XZ), usata sia per le pareti
  // laterali del disco sia per il riflesso sulla faccia superiore.
  var LIGHT_X = -0.7, LIGHT_Z = 0.71;
  function lerpColor(c1, c2, t) {
    var r1 = parseInt(c1.slice(1, 3), 16), g1 = parseInt(c1.slice(3, 5), 16), b1 = parseInt(c1.slice(5, 7), 16);
    var r2 = parseInt(c2.slice(1, 3), 16), g2 = parseInt(c2.slice(3, 5), 16), b2 = parseInt(c2.slice(5, 7), 16);
    var r = Math.round(r1 + (r2 - r1) * t), g = Math.round(g1 + (g2 - g1) * t), b = Math.round(b1 + (b2 - b1) * t);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  function drawDisc(y0, y1, radius, colSideDark, colSideLight, colTopDark, colTopLight) {
    var n = 40;
    var top = circlePts(radius, y1, n);
    var bot = circlePts(radius, y0, n);
    ctx_strokeQuadStrip(bot, top, colSideDark, colSideLight, n);
    pathThrough(appCtx, bot); appCtx.closePath();
    appCtx.fillStyle = colSideDark; appCtx.fill();
    pathThrough(appCtx, top); appCtx.closePath();
    var cx = 0, cy = 0;
    top.forEach(function (p) { cx += p.sx; cy += p.sy; });
    cx /= top.length; cy /= top.length;
    var rpx = radius * PXM;
    var g = appCtx.createRadialGradient(
      cx + LIGHT_X * rpx * 0.35, cy - LIGHT_Z * rpx * 0.2, rpx * 0.08,
      cx, cy, rpx * 1.1
    );
    g.addColorStop(0, colTopLight);
    g.addColorStop(1, colTopDark);
    appCtx.fillStyle = g;
    appCtx.fill();
    appCtx.strokeStyle = 'rgba(0,0,0,.3)';
    appCtx.lineWidth = 1.5;
    appCtx.stroke();
  }
  function ctx_strokeQuadStrip(bot, top, colorDark, colorLight, n) {
    for (var i = 0; i < bot.length - 1; i++) {
      var midAngle = ((i + 0.5) / n) * Math.PI * 2;
      var nx = Math.cos(midAngle), nz = Math.sin(midAngle);
      var b = (nx * LIGHT_X + nz * LIGHT_Z + 1) / 2;
      appCtx.fillStyle = lerpColor(colorDark, colorLight, b);
      appCtx.beginPath();
      appCtx.moveTo(bot[i].sx, bot[i].sy);
      appCtx.lineTo(bot[i + 1].sx, bot[i + 1].sy);
      appCtx.lineTo(top[i + 1].sx, top[i + 1].sy);
      appCtx.lineTo(top[i].sx, top[i].sy);
      appCtx.closePath();
      appCtx.fill();
    }
  }
  function drawGlass(y0, y1, radius) {
    var top = circlePts(radius, y1, 32);
    var bot = circlePts(radius, y0, 32);
    appCtx.strokeStyle = 'rgba(200,225,235,.2)';
    appCtx.lineWidth = 1.3;
    for (var i = 0; i < top.length; i += 8) {
      appCtx.beginPath();
      appCtx.moveTo(bot[i].sx, bot[i].sy);
      appCtx.lineTo(top[i].sx, top[i].sy);
      appCtx.stroke();
    }
    pathThrough(appCtx, bot); appCtx.closePath(); appCtx.stroke();
    pathThrough(appCtx, top); appCtx.closePath(); appCtx.stroke();
  }

  function drawApparatus() {
    var W = appCv.width, H = appCv.height;
    appCtx.clearRect(0, 0, W, H);
    var bg = appCtx.createRadialGradient(W / 2, H * 0.35, 0, W / 2, H / 2, W * 1.1);
    bg.addColorStop(0, '#161210');
    bg.addColorStop(1, '#0a0c10');
    appCtx.fillStyle = bg;
    appCtx.fillRect(0, 0, W, H);

    drawDisc(0, BASE_H, BASE_R, '#3a2812', '#7a5530', '#6e4a28', '#c9a06a');
    drawGlass(BASE_H, BASE_H + GLASS_H, GLASS_R);

    // scala graduata, fissa, attorno al bilancere: stesso diametro della gabbia
    var ring = circlePts(RING_R, ROD_Y, 60);
    pathThrough(appCtx, ring);
    appCtx.strokeStyle = 'rgba(232,213,176,.55)';
    appCtx.lineWidth = 2;
    appCtx.stroke();
    for (var i = 0; i < 60; i++) {
      var a = (i / 60) * Math.PI * 2;
      var r1 = RING_R - (i % 5 === 0 ? 0.014 : 0.008);
      var p1 = project(r1 * Math.cos(a), ROD_Y, r1 * Math.sin(a));
      var p2 = project(RING_R * Math.cos(a), ROD_Y, RING_R * Math.sin(a));
      appCtx.beginPath();
      appCtx.moveTo(p1.sx, p1.sy);
      appCtx.lineTo(p2.sx, p2.sy);
      appCtx.stroke();
    }

    var lidTopY = BASE_H + GLASS_H + LID_H;
    var knobY = lidTopY + TUBE_H;
    var Mx = D_M * Math.cos(THETA_M), Mz = D_M * Math.sin(THETA_M);

    // filo di supporto della massa grande: dal perno sul tappo giù fino a M
    var pPegTop = project(Mx, lidTopY, Mz);
    var pMFix = project(Mx, ROD_Y, Mz);
    appCtx.strokeStyle = 'rgba(225,225,232,.9)';
    appCtx.lineWidth = 2.2;
    appCtx.beginPath();
    appCtx.moveTo(pPegTop.sx, pPegTop.sy);
    appCtx.lineTo(pMFix.sx, pMFix.sy);
    appCtx.stroke();

    // filo di sospensione del bilancere: dal tappo (vicino alla manopola) fino al centro
    var pivotTop = project(0, knobY, 0);
    var pivot = project(0, ROD_Y, 0);
    appCtx.beginPath();
    appCtx.moveTo(pivotTop.sx, pivotTop.sy);
    appCtx.lineTo(pivot.sx, pivot.sy);
    appCtx.stroke();

    // bilancere: massa piccola m su un lato, piattino verticale sull'altro
    var angle = state.angle;
    var mPos = { x: LR * Math.cos(angle), y: ROD_Y, z: LR * Math.sin(angle) };
    var platePos = { x: -mPos.x, y: ROD_Y, z: -mPos.z };
    var pm = project(mPos.x, mPos.y, mPos.z);
    var pPlateCenter = project(platePos.x, platePos.y, platePos.z);

    appCtx.strokeStyle = '#c87c3a';
    appCtx.lineWidth = 6;
    appCtx.lineCap = 'round';
    appCtx.beginPath();
    appCtx.moveTo(pPlateCenter.sx, pPlateCenter.sy);
    appCtx.lineTo(pm.sx, pm.sy);
    appCtx.stroke();

    appCtx.beginPath();
    appCtx.arc(pivot.sx, pivot.sy, 4.5, 0, Math.PI * 2);
    appCtx.fillStyle = '#e8d5b0';
    appCtx.fill();

    var radialLen = Math.sqrt(platePos.x * platePos.x + platePos.z * platePos.z) || 1;
    var radialX = platePos.x / radialLen, radialZ = platePos.z / radialLen;
    verticalPlateAt(appCtx, platePos.x, platePos.y, platePos.z, radialX, radialZ, Rm_VIS * 1.5, '#d8d8d8');

    sphereAt(appCtx, pm, Rm_VIS, '#dfe6ee', '#5b6672');
    sphereAt(appCtx, pMFix, RM_VIS, '#ffdca0', '#a9701e');

    appCtx.font = 'italic 16px Georgia, serif';
    appCtx.textAlign = 'center';
    appCtx.fillStyle = '#c7ccd4';
    appCtx.fillText('m', pm.sx, pm.sy - Rm_VIS * PXM * pm.scale - 10);
    appCtx.fillStyle = '#e8983a';
    appCtx.fillText('M', pMFix.sx, pMFix.sy - RM_VIS * PXM * pMFix.scale - 12);

    // linea tratteggiata "r", solo nello scenario di studio della distanza
    if (scenario === 'r') {
      appCtx.save();
      appCtx.setLineDash([7, 6]);
      appCtx.strokeStyle = '#6fd3d9';
      appCtx.lineWidth = 2;
      appCtx.beginPath();
      appCtx.moveTo(pMFix.sx, pMFix.sy);
      appCtx.lineTo(pm.sx, pm.sy);
      appCtx.stroke();
      appCtx.restore();
      appCtx.font = 'italic 16px Georgia, serif';
      appCtx.fillStyle = '#6fd3d9';
      appCtx.textAlign = 'center';
      appCtx.fillText('r', (pMFix.sx + pm.sx) / 2, (pMFix.sy + pm.sy) / 2 - 9);
    }

    var topRim = circlePts(GLASS_R, BASE_H + GLASS_H, 32);
    pathThrough(appCtx, topRim); appCtx.closePath();
    appCtx.strokeStyle = 'rgba(200,225,235,.4)'; appCtx.lineWidth = 1.3; appCtx.stroke();

    drawDisc(BASE_H + GLASS_H, lidTopY, LID_R, '#3a2812', '#7a5530', '#6e4a28', '#c9a06a');

    // perno sul tappo, dove è fissato il filo della massa grande (visibile dall'alto)
    var pPeg = project(Mx, lidTopY + 0.008, Mz);
    sphereAt(appCtx, pPeg, 0.012, '#d8dce0', '#6a6f75');

    drawGlass(lidTopY, knobY, TUBE_R);
    var pKnob = project(0, knobY + KNOB_R * 0.6, 0);
    sphereAt(appCtx, pKnob, KNOB_R, '#e8b060', '#8a5a20');
  }

  function loop() {
    if (state.mode === 'dynamic') {
      var net = torqueGravity(state.angle) - currentKWire() * (state.angle - THETA_INITIAL);
      var delta = net * STEP;
      var newAngle = state.angle + delta;
      if (newAngle >= ANGLE_LIMIT) {
        // fermo meccanico: il bilancere non può avvicinarsi oltre, per non
        // far toccare le sfere.
        state.angle = ANGLE_LIMIT;
        state.mode = 'manual';
        playBtn.textContent = '▶ Avvia';
        playBtn.classList.remove('active');
      } else if (Math.abs(delta) < CONV_EPS) {
        // convergenza raggiunta: la forza smette di cambiare esattamente
        // quando il bilancere smette di ruotare.
        state.mode = 'manual';
        playBtn.textContent = '▶ Avvia';
        playBtn.classList.remove('active');
      } else {
        state.angle = newAngle;
      }
    }
    updateReadouts();
    drawApparatus();
    requestAnimationFrame(loop);
  }

  function selectChoice(btns, val, prop) {
    btns.forEach(function (b) { b.classList.toggle('active', +b.dataset.val === val); });
    state[prop] = val;
  }
  MBtns.forEach(function (b) {
    b.addEventListener('click', function () { selectChoice(MBtns, +b.dataset.val, 'M'); });
  });
  mBtns.forEach(function (b) {
    b.addEventListener('click', function () { selectChoice(mBtns, +b.dataset.val, 'm'); });
  });

  playBtn.addEventListener('click', function () {
    if (state.mode === 'dynamic') {
      state.mode = 'manual';
      playBtn.textContent = '▶ Avvia';
      playBtn.classList.remove('active');
    } else {
      state.mode = 'dynamic';
      state.angle = THETA_INITIAL;
      playBtn.textContent = '⏸ Ferma';
      playBtn.classList.add('active');
    }
  });
  resetBtn.addEventListener('click', function () {
    state.mode = 'manual';
    state.angle = THETA_INITIAL;
    playBtn.textContent = '▶ Avvia';
    playBtn.classList.remove('active');
  });

  updateReadouts();
  loop();
})();
</script>

Verifica con l'animazione che:

- nello scenario "Dipendenza dalle masse", premendo "Avvia" il bilancere ruota lentamente verso la sfera grande e si ferma in una posizione di equilibrio (o al più contro il fermo meccanico): aumentando la massa $M$ oppure la massa $m$, l'angolo finale raggiunto (e quindi l'intensità della forza) è più grande;
- nello scenario "Dipendenza da r", i pulsanti spostano davvero il bilancere alla nuova distanza (indicata dalla linea tratteggiata $r$): raddoppiando $r$ l'intensità della forza non si dimezza, ma diventa un quarto; triplicando $r$ diventa un nono; quadruplicando $r$ diventa un sedicesimo — <u markdown="span">proprio quello che significa dire che $F$ è inversamente proporzionale al **quadrato** della distanza</u>, verificabile confrontando il valore di $F$ prima e dopo ogni cambio.

{% include margin-note.html testo="Dall'esperimento alla formula di Newton" %}
Cavendish dedusse così che il modulo della forza gravitazionale fra due corpi è **direttamente proporzionale al prodotto delle loro masse** e **inversamente proporzionale al quadrato della distanza**. Cioè, la forza gravitazionale tra due masse $m_1$ ed $m_2$ è descritta dalla seguente equazione

{% include eq-annotated.html
   id="fga1"
   formula="F = G \dfrac{m_1 \cdot m_2}{r^2}"
   frammenti="F|G|m_1 \cdot m_2|r^2"
   etichette="modulo della forza gravitazionale|costante di gravitazione universale|prodotto delle masse|quadrato della distanza"
   posizioni="alto|basso|alto|basso"
%}

dove $G$ <u markdown="span">è una costante dal valore universale ed immutabile</u>, detta <definizione>costante di gravitazione universale</definizione>. 
{% include margin-note-end.html %}

{% include margin-note.html testo="Determinazione sperimentale del valore di G" %}
Grazie alle sue misure straordinariamente precise, Cavendish riuscì anche a calcolare per la prima volta il valore della costante di gravitazione universale, che corrisponde a

$$
G = 6{,}67 \times 10^{-11} \ \frac{\text N \cdot \text m^2}{\text{kg}^2}.
$$

È proprio a causa di un valore così piccolo della costante moltiplicativa $G$ che la forza gravitazionale risulta la più debole fra tutte le forze della Natura.
{% include margin-note-end.html %}


<div class="iex-widget" id="iexG">
<p class="iex-lbl">Verifica Subito!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexGprev" onclick="iexGnav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexGdots"></div>
<button class="iex-navbtn" id="iexGnext" onclick="iexGnav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexGrow0">
<div class="calc-flow">
{% include calc-margin.html id="calcG" %}
<div class="calc-flow-body">
<p class="iex-qt">Calcola il modulo della forza gravitazionale fra la Terra e il Sole, sapendo che la massa della Terra è $M_\oplus = 5{,}97 \times 10^{24}\ \text{kg}$, la massa del Sole è $M_\odot = 1{,}99 \times 10^{30}\ \text{kg}$ e che la distanza Terra-Sole è $r = 1{,}496 \times 10^{11}\ \text{m}$. Esprimi il risultato in notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="iexGm0" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')iexGcheck0()">
<span>&times;&thinsp;10<sup><input class="iex-e" id="iexGe0" type="text" placeholder="n" onkeydown="if(event.key==='Enter')iexGcheck0()"></sup></span>
<select class="iex-unit" id="iexGu0">
<option value="">unità</option>
<option value="N">N</option>
<option value="kg">kg</option>
<option value="m">m</option>
<option value="kg/m">kg/m</option>
<option value="N/m">N/m</option>
</select>
<button class="iex-vbtn" onclick="iexGcheck0()">Verifica</button>
</div>
<div class="iex-fb" id="iexGfb0"></div>
<div class="iex-sol" id="iexGsol0">Soluzione: <strong>3,54 &times; 10<sup>22</sup> N</strong> — una forza enorme (35 mila miliardi di miliardi di Newton!): eppure è proprio questa forza a tenere la Terra in orbita.</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexGrow1" style="display:none">
<p class="iex-qt">Se la distanza Terra-Sole <strong>quintuplicasse</strong>, come cambierebbe l'intensità della forza gravitazionale fra i due corpi?</p>
<div class="iex-choices" id="iexGchoices1">
<button class="iex-choice-btn" data-v="a">quintuplicherebbe</button>
<button class="iex-choice-btn" data-v="b">diventerebbe un quinto del valore iniziale</button>
<button class="iex-choice-btn" data-v="c">diventerebbe un decimo del valore iniziale</button>
<button class="iex-choice-btn" data-v="d">diventerebbe un venticinquesimo del valore iniziale</button>
</div>
<div class="iex-fb" id="iexGfb1"></div>
</div>

<div class="iex-q" id="iexGrow2" style="display:none">
<p class="iex-qt">Prima di poter verificare il tuo risultato, isola $G$ nella formula.</p>
<div class="iex-nested">
{% include invert.html id="inv-G" variabili="Fg|G|Ma|Mb|r"
   sinistra="Fg" destra="G*Ma*Mb/r/r" obiettivo="G"
   etichette="F|G|m_1|m_2|r" %}
</div>
</div>

<div class="iex-q" id="iexGrow3" style="display:none">
<p class="iex-qt">Isola ora $r$ nella stessa formula.</p>
<div class="iex-nested">
{% include invert.html id="inv-G-r" variabili="Fg|G|Ma|Mb|r"
   sinistra="Fg" destra="G*Ma*Mb/r/r" obiettivo="r"
   etichette="F|G|m_1|m_2|r" radice="1" %}
</div>
</div>

<div class="iex-q" id="iexGrow4" style="display:none">
<p class="iex-qt">Ora che hai isolato $G = \dfrac{F \cdot r^2}{m_1 \cdot m_2}$, sostituisci ogni grandezza con la propria unità di misura.</p>
<div class="iex-nested">
{% include unit-derive.html id="ud-G" titolo="Trova l'unità di misura di G"
   variabile="G"
   numeratore_simboli="F|r^2" numeratore_corrette="N|m²"
   denominatore_simboli="m_1 \cdot m_2" denominatore_corrette="kg²"
   opzioni="N|kg|kg²|m|m²" %}
</div>
</div>

</div>

<script>
(function(){
  var N=5, cur=0, ok=[false,false,false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexGdots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexG .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexGrow'+i).style.display='block';
    cur=i;
    document.getElementById('iexGprev').disabled=(i===0);
    document.getElementById('iexGnext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexGdots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Passo '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexGnav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

  function parseMant(s){ var c=s.trim(); if(c.indexOf(',')!==-1)c=c.replace(',','.'); return parseFloat(c); }
  function parseExp(s){ return parseInt(s.trim().replace('−','-'),10); }

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  window.showSol = window.showSol || function(id){ document.getElementById(id).style.display='block'; };

  window.iexGcheck0=function(){
    var mv=parseMant(document.getElementById('iexGm0').value);
    var ev=parseExp(document.getElementById('iexGe0').value);
    var uv=document.getElementById('iexGu0').value;
    var fb=document.getElementById('iexGfb0');
    var vb=document.querySelector('#iexGrow0 .iex-vbtn');
    // Il controllo è sul VALORE combinato (coefficiente × 10^esponente), non
    // sulle due cifre separatamente: 35,4×10^21 ed 3,54×10^22 sono lo stesso
    // numero, anche se solo la seconda è nella forma "canonica".
    var userVal = (!isNaN(mv) && !isNaN(ev)) ? mv*Math.pow(10,ev) : NaN;
    var targetVal = 3.54*Math.pow(10,22);
    var valOk = !isNaN(userVal) && Math.abs(userVal-targetVal)/Math.abs(targetVal) <= 0.02;
    var uOk = uv==='N';
    if(valOk && uOk){
      ok[0]=true; fb.className='iex-fb ok';
      fb.innerHTML='&#10003; Esatto! <button class="iex-nextbtn" onclick="iexGnav(1)">Passo successivo &rarr;</button>';
      shootConf(vb); updateDots();
    } else {
      fb.className='iex-fb err';
      var parts=[];
      if(!valOk)parts.push('il valore (coefficiente &times; 10 elevato all\'esponente)');
      if(!uOk)parts.push('l\'unità di misura');
      fb.innerHTML='Non è esatto. Controlla: '+parts.join(', ')+'. Oppure <button class="iex-lbtn" onclick="showSol(\'iexGsol0\')">vedi la soluzione</button>.';
    }
  };

  (function initChoices1(){
    var btns = document.querySelectorAll('#iexGchoices1 .iex-choice-btn');
    var fb = document.getElementById('iexGfb1');
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        if(btn.disabled) return;
        btns.forEach(function(b){ b.disabled = true; });
        var correct = btn.dataset.v === 'd';
        fb.style.display = 'block';
        if(correct){
          btn.className = 'iex-choice-btn correct';
          ok[1] = true; fb.className = 'iex-fb ok';
          fb.innerHTML = '&#10003; Esatto! Poiché $F$ è inversamente proporzionale al quadrato di $r$, se $r$ diventa $5r$ la forza diventa $F/5^2 = F/25$: un venticinquesimo del valore iniziale. <button class="iex-nextbtn" onclick="iexGnav(1)">Passo successivo &rarr;</button>';
          shootConf(btn); updateDots();
        } else {
          btn.className = 'iex-choice-btn wrong';
          var correctBtn = document.querySelector('#iexGchoices1 .iex-choice-btn[data-v="d"]');
          correctBtn.className = 'iex-choice-btn correct';
          fb.className = 'iex-fb err';
          fb.innerHTML = 'Non è esatto: poiché $F$ è inversamente proporzionale al quadrato di $r$, se $r$ diventa $5r$ la forza diventa $F/5^2 = F/25$, cioè un venticinquesimo del valore iniziale.';
        }
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
      });
    });
  })();
})();
</script>

### Direzione e verso della Forza Gravitazionale

Il modulo $F = G\,\dfrac{m_1 \cdot m_2}{r^2}$ ci dice *quanto* vale la forza gravitazionale, ma una forza è un vettore: per descriverla completamente dobbiamo specificare anche **direzione** e **verso**.

- **Direzione:** la retta congiungente i centri delle due masse.
- **Verso:** attrattivo — ciascuna massa è "tirata" verso l'altra.


Questo significa che i vettori si disegnano nel seguente modo.

<div class="fig-block">
<svg viewBox="0 0 400 320" width="100%" style="max-width:340px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Vettori della forza gravitazionale fra due masse, disposte con un'inclinazione di 35 gradi">
  <defs>
    <radialGradient id="sphAzzurra" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#f0f9ff"/>
      <stop offset="55%" stop-color="#7dd3fc"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </radialGradient>
    <radialGradient id="sphRosa" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="55%" stop-color="#fde68a"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </radialGradient>
    <marker id="dvArrowRed" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
      <path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#dc2626"/>
    </marker>
    <marker id="dvArrowPurple" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
      <path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#7c3aed"/>
    </marker>
  </defs>

  <line x1="174.4" y1="122.8" x2="207.2" y2="145.7" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4"/>

  <circle cx="67.9" cy="48.2" r="28" fill="url(#sphAzzurra)"/>
  <ellipse cx="65.5" cy="34.3" rx="9" ry="6" fill="#ffffff" opacity=".55"/>
  <text x="40.4" y="87.5" text-anchor="middle" font-size="15" font-weight="600" fill="#0369a1">m&#8321;</text>

  <circle cx="313.7" cy="220.3" r="60" fill="url(#sphRosa)"/>
  <ellipse cx="308.3" cy="189.7" rx="18" ry="12" fill="#ffffff" opacity=".5"/>
  <text x="267.8" y="285.8" text-anchor="middle" font-size="17" font-weight="600" fill="#92400e">m&#8322;</text>

  <line x1="67.9" y1="48.2" x2="167.9" y2="118.2" stroke="#dc2626" stroke-width="3.5" marker-end="url(#dvArrowRed)"/>
  <foreignObject x="106.8" y="24.1" width="100" height="26">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:14px;color:#dc2626;">$\vec F_{2\to1}$</div>
  </foreignObject>

  <line x1="313.7" y1="220.3" x2="213.7" y2="150.3" stroke="#7c3aed" stroke-width="3.5" marker-end="url(#dvArrowPurple)"/>
  <foreignObject x="195.2" y="86.1" width="100" height="26">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:14px;color:#7c3aed;">$\vec F_{1\to2}$</div>
  </foreignObject>
</svg>
<figcaption><span class="fig-num" data-fig-id="dir-verso-gravita">Figura</span> — I due vettori hanno origine nel centro della rispettiva massa: sono <strong>uguali in modulo</strong> ma di <strong>verso opposto</strong>, anche se le due masse sono molto diverse fra loro.</figcaption>
</div>

{% include margin-note.html testo="Forze centrali" %}
Le forze che, come quella gravitazionale, hanno come direzione la retta che passa per i centri dei corpi si chiamano <definizione>forze centrali</definizione>. Queste forze hanno delle proprietà molto importanti, come cominceremo a vedere nella <a href="#energia-potenziale-gravitazionale">sezione sull'energia potenziale</a>, più sotto.
{% include margin-note-end.html %}

{% include margin-note.html testo="Il terzo principio della dinamica" %}
**Attenzione.** Nota che, anche se la massa a destra è molto più grande della massa a sinsitra, i due vettori sono lunghi uguali. Ricorda infatti che, per il <definizione>terzo principio della dinamica</definizione> (principio di azione e reazione), se un corpo esercita una forza su un secondo corpo, quest'ultimo esercita sempre sul primo una forza <u markdown="span">**di uguale modulo**, **stessa direzione** e **verso opposto**</u>. In formule,

$$\vec F_{2\to1} = -\vec F_{1\to2}.$$

Quindi, la massa grande attrae la massa piccola tanto quanto la massa piccola attrae la massa grande. Ad esempio, il Sole attrae la Terra tanto quanto essa attrae il Sole; la Terra ti attrae verso di sé tanto quanto tu attrai lei.
{% include margin-note-end.html %}


{% include box-imp.html titolo="La forza gravitazionale" %}
- **Che cos'è:** una forza <u markdown="span">centrale</u> e <u markdown="span">attrattiva</u> fra due masse qualsiasi $m_1$ ed $m_2$.
- **Modulo:** $F = G\,\dfrac{m_1 \cdot m_2}{r^2}$.
- **Direzione e verso:** si disegna così:

<div style="text-align:center;margin:.4rem 0 .2rem;">
<svg viewBox="0 0 240 100" width="220" height="92" style="display:block;margin:0 auto;" role="img" aria-label="Miniatura del disegno dei vettori, orizzontale">
<defs>
  <radialGradient id="sphAzzurraMini" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#f0f9ff"/><stop offset="55%" stop-color="#7dd3fc"/><stop offset="100%" stop-color="#38bdf8"/>
  </radialGradient>
  <radialGradient id="sphRosaMini" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/>
  </radialGradient>
  <marker id="dvArrowRedMini" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#dc2626"/></marker>
  <marker id="dvArrowPurpleMini" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#7c3aed"/></marker>
</defs>
<g transform="translate(128,50) scale(0.5) translate(-266,-100)">
  <circle cx="100" cy="100" r="28" fill="url(#sphAzzurraMini)"/>
  <circle cx="400" cy="100" r="60" fill="url(#sphRosaMini)"/>
  <line x1="100" y1="100" x2="222" y2="100" stroke="#dc2626" stroke-width="3.5" marker-end="url(#dvArrowRedMini)"/>
  <line x1="400" y1="100" x2="278" y2="100" stroke="#7c3aed" stroke-width="3.5" marker-end="url(#dvArrowPurpleMini)"/>
</g>
</svg>
</div>

sempre con i vettori di lunghezza uguale, anche se le masse sono diverse.

{% include box-end.html %}

Utilizza questa simulazione per sperimentare con la forza gravitazionale!

{% include phet-sim.html id="gravity-force-lab"
   src="https://phet.colorado.edu/sims/html/gravity-force-lab/latest/gravity-force-lab_all.html"
   didascalia="Simulazione PhET: modifica le due masse e la distanza fra loro, e osserva come cambiano forza e vettori."
   altezza="550px" %}

## In presenza di più masse

Finora abbiamo considerato solo due masse. Ma cosa succede se su una massa $m$ agiscono contemporaneamente **più** masse, ciascuna con la propria forza gravitazionale?

{% include box-imp.html titolo="Principio di sovrapposizione degli effetti" %}
In presenza di più masse, vale il <definizione>principio di sovrapposizione degli effetti</definizione>: ogni massa esercita su $m$ la propria forza gravitazionale <u markdown="span">**esattamente come se le altre non ci fossero**</u>. La forza totale su $m$ è la somma *vettoriale* di tutte queste forze:

$$\vec F_{tot} = \vec F_1 + \vec F_2 + \dots$$

{% include box-end.html %}

Poiché le forze sono vettori, per sommarle non basta sommarne i moduli: vanno sommate **come vettori**, con la stessa regola del parallelogramma già vista per la somma di due vettori qualsiasi.

<div class="fig-block">
<svg viewBox="0 0 360 220" width="100%" style="max-width:320px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Animazione: le due forze e la loro somma vettoriale">
  <defs>
    <radialGradient id="pmM1" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/>
    </radialGradient>
    <radialGradient id="pmM2" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#f0fdfa"/><stop offset="55%" stop-color="#99f6e4"/><stop offset="100%" stop-color="#5eead4"/>
    </radialGradient>
    <radialGradient id="pmMm" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#e2e8f0"/><stop offset="100%" stop-color="#cbd5e1"/>
    </radialGradient>
    <marker id="pmArrowRed" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#dc2626"/></marker>
    <marker id="pmArrowPurple" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#7c3aed"/></marker>
    <marker id="pmArrowGreen" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#16a34a"/></marker>
    <style>
      #pmAnim .pm-s1 { animation: pmFade1 7s ease-in-out infinite; }
      #pmAnim .pm-s2 { animation: pmFade2 7s ease-in-out infinite; }
      #pmAnim .pm-s3 { animation: pmFade3 7s ease-in-out infinite; }
      @keyframes pmFade1 { 0%,4%{opacity:0} 10%,86%{opacity:1} 94%,100%{opacity:0} }
      @keyframes pmFade2 { 0%,34%{opacity:0} 40%,86%{opacity:1} 94%,100%{opacity:0} }
      @keyframes pmFade3 { 0%,64%{opacity:0} 70%,86%{opacity:1} 94%,100%{opacity:0} }
    </style>
  </defs>
  <g id="pmAnim">
    <circle cx="60" cy="50" r="30" fill="url(#pmM1)"/>
    <ellipse cx="50" cy="40" rx="9" ry="6" fill="#fff" opacity=".5"/>
    <text x="60" y="55" text-anchor="middle" font-size="13" font-weight="600" fill="#92400e">M&#8321;</text>

    <circle cx="320" cy="140" r="38" fill="url(#pmM2)"/>
    <ellipse cx="306" cy="126" rx="11" ry="7" fill="#fff" opacity=".5"/>
    <text x="320" y="146" text-anchor="middle" font-size="14" font-weight="600" fill="#0f766e">M&#8322;</text>

    <circle cx="180" cy="170" r="16" fill="url(#pmMm)"/>
    <ellipse cx="175" cy="165" rx="5" ry="3" fill="#fff" opacity=".6"/>
    <text x="180" y="175" text-anchor="middle" font-size="12" font-weight="600" fill="#475569">m</text>

    <g class="pm-s1">
      <line x1="180" y1="170" x2="116" y2="106" stroke="#dc2626" stroke-width="3" marker-end="url(#pmArrowRed)"/>
      <text x="82" y="84" font-size="14" fill="#dc2626">F&#8321;</text>
      <line x1="180" y1="170" x2="268" y2="151" stroke="#7c3aed" stroke-width="3" marker-end="url(#pmArrowPurple)"/>
      <text x="280" y="150" font-size="14" fill="#7c3aed">F&#8322;</text>
    </g>

    <g class="pm-s2">
      <line x1="116" y1="106" x2="204" y2="88" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5 4"/>
      <line x1="268" y1="151" x2="204" y2="88" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>
    </g>

    <g class="pm-s3">
      <line x1="180" y1="170" x2="204" y2="88" stroke="#16a34a" stroke-width="3.5" marker-end="url(#pmArrowGreen)"/>
      <text x="206" y="72" font-size="15" font-weight="600" fill="#16a34a">F&#8348;&#8340;&#8348;</text>
    </g>
  </g>
</svg>
<figcaption><span class="fig-num" data-fig-id="somma-forze">Figura</span> — Animazione in loop: prima compaiono le singole forze $\vec F_1$ e $\vec F_2$, poi le linee tratteggiate che completano il parallelogramma, infine la forza totale $\vec F_{tot}$.</figcaption>
</div>

# Il Campo Gravitazionale

{% include margin-note.html testo="Introduzione del concetto di Campo" %}
È  fondamentale osservare che la legge di gravitazione universale **descrive** il fatto che una massa attragga a sé un'altra massa <u markdown="span">ma non dice *perché* né *come* due masse si attraggano</u>. Il *perché* è un mistero: nessuno lo sa. Sul *come* possiamo lavorarci un pochino. Risponderemo quindi alla seguente domanda: **come fa una massa a *sentire* la presenza di un'altra massa?**
{% include margin-note-end.html %}

{% include margin-note.html testo="Analogia del telo" %}
Per rispondere a questa domanda prendiamo un'analogia. Immaginate un telo di pellicola trasparente, inizialmente piatto, su cui posate una sfera metallica piuttosto pesante. Il telo si curva. Dopodiché inserite una pallina piccola e leggera. La pallina piccola comincerà a muoversi verso la sfera grande: semplicemente perché risente della curvatura del telo.
{% include margin-note-end.html %}

Quello che succede a livello gravitazionale è estremamente simile. La Terra modifica lo spazio attorno a sé in un modo per cui la Luna comincia ad orbitarle attorno. Certamente anche la Luna modifica lo spazio attorno a sé ma così poco in confronto alla Terra che questa deformazione è del tutto trascurabile. È per questo che diciamo che la Terra è praticamente ferma e la Luna le orbita attorno e non il contrario, come rappresentato nella seguente animazione.

{% include video-loop.html id="telo-analogia"
   src="/corsi/video/campo_gravitazionale_analogia_telo.mp4"
   didascalia="La Terra deforma lo spazio attorno a sé; la Luna orbita seguendo questa deformazione."
   larghezza="420px" %}

{% include margin-note.html testo="Definizione di campo gravitazionale" %}
Questa modificazione dello spazio attuata da una massa è ciò che chiameremo <definizione>campo gravitazionale</definizione>.
{% include margin-note-end.html %}

{% include box-imp.html titolo="Il campo gravitazionale" %}
Il campo gravitazionale corrisponde a una mappa che associa <u markdown="span">a ogni punto dello spazio</u> un vettore che misura intensità, direzione e verso <u markdown="span">della deformazione dello spazio **in quel punto**</u> dovuta alla massa.
{% include box-end.html %}

{% include spoiler.html testo="Curiosità: Perché si chiama “campo”?" %}
Il motivo per cui si parla di “campo” è che proprio come in un campo di grano in ogni punto dello spazio c'è una spiga, così allo stesso modo in un campo vettoriale in ogni punto dello spazio c'è un vettore.

{% include figura.html id="campo-grano-vettoriale"
   src="/corsi/immagini/similitudine_campo_di_grano.png"
   didascalia="In ogni punto del campo di grano c'è una spiga; in ogni punto del campo vettoriale c'è un vettore."
   larghezza="380px" %}
{% include spoiler-end.html %}

{% include spoiler.html testo="Un altro esempio di campo vettoriale, per chiarire" %}
Anche il **vento** definisce un campo vettoriale: in ogni punto dell'atmosfera possiamo misurare un vettore velocità del vento, con la sua intensità (quanto è forte), direzione e verso — esattamente come per il campo gravitazionale, ma qui il vettore lo si può letteralmente sentire sulla pelle.

{% include figura.html id="campo-vento"
   src="/corsi/immagini/India_southwest_summer_monsoon_onset_map_en.svg"
   didascalia="Le frecce indicano il vettore velocità del vento monsonico punto per punto: un classico esempio di campo vettoriale."
   larghezza="300px" %}

Puoi esplorare il campo vettoriale del vento in tempo reale su una mappa interattiva: <a href="https://it.windfinder.com/#12/45.0690/7.7040/spot" target="_blank" rel="noopener">Windfinder — mappa del vento dal vivo</a>.
{% include spoiler-end.html %}

## Il vettore campo gravitazionale

Vogliamo adesso trovare una formula per calcolare il campo gravitazionale generato da una certa massa $M$ in un punto $\vec r$. Indicheremo questa quantità con $\vec g$ (come al solito, $\vec g$ indica il vettore campo gravitazionale mentre $g$ indicherà il modulo del vettore). Per trovare tale formula, sfruttiamo l'analogia con il telo.  

{% include margin-note.html testo="Costruzione della formula" %}
Abbiamo detto che il campo corrisponde alla curvatura di un telo su cui mettiamo una massa grande $M$. Per vedere bene questa curvatura dobbiamo quindi fare in modo che non ci siano altre masse che curvano il telo. Prendiamo quindi la formula 

$$
F = G \frac{M\cdot m}{r^2}
$$

(che rappresenta la situazione in cui ci sono sul telo sia la massa $M$ sia la massa $m$) e <u markdown="span">togliamo la massa $m$</u>, ottenendo:

{% include eq-annotated.html
   id="fga1"
   formula="g = G \dfrac{M}{r^2}"
   frammenti="g|G|M|r^2"
   etichette="modulo del campo gravitazionale|costante di gravitazione universale|massa che genera il campo|quadrato della distanza"
   posizioni="alto|basso|alto|basso"
%}

Osserviamo quindi che
- il campo nel punto $\vec r$ dipende <u markdown="span">solo</u> dalla massa $M$ che lo genera e dal punto $\vec r$ ($G$ è una costante, quindi non può cambiare)
- il campo è <u markdown="span">direttamente proporzionale alla massa $M$</u> e <u markdown="span">inversamente proporzionale al **quadrato** della distanza da essa</u>.

Chiaramente, da un punto di vista matematico, “togliere la $m$” come abbiamo fatto prima significa in realtà dividere per $m$. Quindi la formula per il campo gravitazionale può essere scritta in modo del tutto equivalente come

{% include eq-annotated.html
   id="fga1"
   formula="g = \dfrac{F}{m}"
   frammenti="g|F|m"
   etichette="modulo del campo gravitazionale (N/kg)|modulo della forza gravitazionale tra $M$ ed $m$ (N)|massa che si trova nel campo ma che non genera il campo (kg)"
   posizioni="alto|alto|basso"
%}

{% include margin-note-end.html %}

{% include box-imp.html titolo="Il campo generato da una massa M" %}
Il campo gravitazionale generato da una massa $M$, a distanza $r$ da essa, ha modulo
$$g = G\,\dfrac{M}{r^2} = \dfrac{F}{m}.$$
Il campo **non dipende** dalla massa esploratrice $m$: dipende solo da $M$ (che lo genera) e da $r$ (il punto in cui lo si misura).
{% include box-end.html %}

{% include margin-note.html testo="L'unità di misura del campo gravitazionale è il N/kg" %}
Osserviamo quindi anche che <u markdown="span">l'unità di misura del campo gravitazionale corrisponde all'unità di misura di $F$ (il newton N) diviso l'unità della massa (kg), cioè corrisponde a N/kg.</u> 
{% include margin-note-end.html %}
{% include margin-note.html testo="Massa esploratrice"%}
Inoltre, nonostante nella formula compaia la massa $m$, ricordiamo che il campo $g$ **non** dipende da essa (come visto prima, si semplifica con la $m$ contenuta in $F$). Spesso però ci capiterà di introdurre, all'interno di un certo campo generato da una massa $M$ una seconda massa $m$, di modo da misurare la forza di attrazione, da cui poi si ottiene il campo secondo la formula appena data. Pertanto, questa massa è chiamata <definizione>massa esploratrice</definizione> (nel senso che “esplora” il campo).
{% include margin-note-end.html %}

<div class="iex-widget" id="invCarCampo">
<p class="iex-lbl">Isola le altre grandezze</p>
<p class="iex-hint">Per ciascuna grandezza, cerca la sequenza più breve di mosse, poi appuntala sul quaderno in un punto facile da ritrovare: ti servirà spesso.</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="invCarCampoprev" onclick="invCarCamponav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="invCarCampodots"></div>
<button class="iex-navbtn" id="invCarCamponext" onclick="invCarCamponav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="invCarCamporow0">
<div class="iex-nested">
{% include invert.html id="inv-campo-G" variabili="g|G|M|r" sinistra="g" destra="G*M/r/r" obiettivo="G" %}
</div>
</div>

<div class="iex-q" id="invCarCamporow1" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-campo-M" variabili="g|G|M|r" sinistra="g" destra="G*M/r/r" obiettivo="M" %}
</div>
</div>

<div class="iex-q" id="invCarCamporow2" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-campo-r" variabili="g|G|M|r" sinistra="g" destra="G*M/r/r" obiettivo="r" radice="1" %}
</div>
</div>

<div class="iex-q" id="invCarCamporow3" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-campo-F" variabili="g|F|m" sinistra="g" destra="F/m" obiettivo="F" %}
</div>
</div>

<div class="iex-q" id="invCarCamporow4" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-campo-m" variabili="g|F|m" sinistra="g" destra="F/m" obiettivo="m" %}
</div>
</div>

</div>

<script>
window.setupInvCarousel=function(ID,N){
  var cur=0;
  function updateDots(){
    var dots=document.querySelectorAll('#'+ID+'dots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'');
  }
  function show(i){
    document.querySelectorAll('#'+ID+' .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById(ID+'row'+i).style.display='block';
    cur=i;
    document.getElementById(ID+'prev').disabled=(i===0);
    document.getElementById(ID+'next').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById(ID+'dots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Passo '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window[ID+'nav']=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };
};
setupInvCarousel('invCarCampo',5);
</script>

### Direzione e verso del vettore campo gravitazionale

Si sceglie di dare, per convenzione, al vettore campo gravitazionale $\vec g$ lo stesso verso del vettore forza $\vec F$. Quindi, il campo generato dalla massa $M$ in punto $P$ a distanza $r$ si disegna così:

<div class="fig-block">
<svg viewBox="0 0 380 180" width="100%" style="max-width:340px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Vettore campo gravitazionale in un punto a distanza r dalla massa M">
  <defs>
    <radialGradient id="gvecM" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/>
    </radialGradient>
    <marker id="gvecArrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#0891b2"/></marker>
  </defs>
  <line x1="70" y1="90" x2="280" y2="90" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="175" y="80" text-anchor="middle" font-size="14" fill="#64748b">r</text>

  <circle cx="70" cy="90" r="40" fill="url(#gvecM)"/>
  <ellipse cx="58" cy="76" rx="12" ry="8" fill="#fff" opacity=".5"/>
  <text x="70" y="96" text-anchor="middle" font-size="16" font-weight="600" fill="#92400e">M</text>

  <circle cx="280" cy="90" r="5" fill="#475569"/>
  <text x="280" y="112" text-anchor="middle" font-size="13" fill="#475569">P</text>

  <line x1="280" y1="90" x2="216" y2="90" stroke="#0891b2" stroke-width="3.5" marker-end="url(#gvecArrow)"/>
  <foreignObject x="222" y="52" width="50" height="26">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:15px;font-weight:600;color:#0891b2;">$\vec g$</div>
  </foreignObject>
</svg>
<figcaption><span class="fig-num" data-fig-id="vettore-campo-g">Figura</span> — Il vettore campo gravitazionale $\vec g$ nel punto $P$, a distanza $r$ dalla massa $M$: punta sempre verso il centro di $M$.</figcaption>
</div>

Cioè, così come nel caso del vettore forza gravitazionale, <u markdown="span">il vettore punta sempre verso il centro della massa che genera il campo</u>.  
{% include margin-note.html testo="La formula più completa che lega campo e forza" %}
Inoltre, poiché campo e forza hanno la stessa direzione e lo stesso verso, allora la precedente relazione $g= F /m$ tra **i moduli** di campo gravitazionale e forza può essere estesa all'intero vettore, cioè può essere riscritta come

{% include eq-annotated.html
   id="fga1"
   formula="\vec g = \dfrac{\vec F}{m}"
   frammenti="\vec g|\vec F|m"
   etichette="vettore campo gravitazionale| vettore forza gravitazionale tra $M$ ed $m$|massa esploratrice"
   posizioni="alto|alto|basso"
%}

Questa espressione è insomma molto più completa della precedente $g = F/m$, perché oltre a darci una relazione tra i moduli dei vettori $\vec g$ e $\vec F$ ci dà anche una relazione tra le direzioni e i versi.
{% include margin-note-end.html %}

{% include margin-note.html testo="g è (quasi) costante sulla superficie di un pianeta" %}
Sulla superficie di un pianeta (o di una stella), $\vec g$ è un vettore che <u markdown="span">punta sempre verso il centro</u> del pianeta — cioè, localmente, "verso il basso". Inoltre, poiché tutti i punti della superficie si trovano, con ottima approssimazione, alla <u markdown="span">stessa distanza dal centro</u> (il raggio del pianeta), <u markdown="span">anche il modulo di $\vec g$ è praticamente costante</u> su tutta la superficie. Per la Terra, questo valore vale circa $g \approx 9{,}81\ \text{m/s}^2$.
{% include margin-note-end.html %}

## Le linee di campo

Abbiamo detto che il campo gravitazionale associa a ogni punto dello spazio un vettore. Ma chiaramente per disegnare il campo gravitazionale non potremmo certamente disegnare un vettore per ogni punto: sarebbero un'infinità di vettori tutti sovrapposti l'uno all'altro. Possiamo però trovare una soluzione molto intuitiva.  
Considera il seguente esempio di campo vettoriale, che associa ad ogni punto del mare italiano la direzione e il verso della corrente in quel punto:

{% include figura.html id="campo-correnti"
   src="/corsi/immagini/campo_correnti_mare.png"
   didascalia="Le frecce indicano il vettore velocità della corrente marina punto per punto."
   larghezza="300px" %}

Come puoi vedere, i vettori si dispongono secondo delle linee. È quindi possibile, invece di disegnare ogni vettore, sostituirli con delle linee che si chiamano <definizione>linee di campo</definizione>. Nel caso di una singola massa sferica che genera il campo le linee si disegnano così:

<div class="fig-block">
<svg viewBox="0 0 320 320" width="100%" style="max-width:280px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Linee di campo gravitazionale radiali entranti nella massa M">
  <defs>
    <radialGradient id="flinesM" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/>
    </radialGradient>
    <marker id="flinesArrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#0891b2"/></marker>
  </defs>
  <line x1="300" y1="160" x2="206" y2="160" stroke="#0891b2" stroke-width="2" marker-end="url(#flinesArrow)"/>
  <line x1="259" y1="259" x2="192.5" y2="192.5" stroke="#0891b2" stroke-width="2" marker-end="url(#flinesArrow)"/>
  <line x1="160" y1="300" x2="160" y2="206" stroke="#0891b2" stroke-width="2" marker-end="url(#flinesArrow)"/>
  <line x1="61" y1="259" x2="127.5" y2="192.5" stroke="#0891b2" stroke-width="2" marker-end="url(#flinesArrow)"/>
  <line x1="20" y1="160" x2="114" y2="160" stroke="#0891b2" stroke-width="2" marker-end="url(#flinesArrow)"/>
  <line x1="61" y1="61" x2="127.5" y2="127.5" stroke="#0891b2" stroke-width="2" marker-end="url(#flinesArrow)"/>
  <line x1="160" y1="20" x2="160" y2="114" stroke="#0891b2" stroke-width="2" marker-end="url(#flinesArrow)"/>
  <line x1="259" y1="61" x2="192.5" y2="127.5" stroke="#0891b2" stroke-width="2" marker-end="url(#flinesArrow)"/>
  <circle cx="160" cy="160" r="38" fill="url(#flinesM)"/>
  <ellipse cx="146" cy="146" rx="11" ry="8" fill="#fff" opacity=".5"/>
  <text x="160" y="166" text-anchor="middle" font-size="15" font-weight="600" fill="#92400e">M</text>
</svg>
<figcaption><span class="fig-num" data-fig-id="linee-di-campo">Figura</span> — Le linee di campo sono radiali e sempre entranti nella massa $M$: più vicine (e quindi più concentrate) accanto a $M$, più diradate lontano da essa.</figcaption>
</div>

Da questa immagine notiamo alcune proprietà importanti delle linee di campo.

{% include box-imp.html titolo="Le linee di campo" %}
1. Le linee sono radiali alla massa (cioè sono come i raggi del Sole).
2. Le linee sono più concentrate vicino alla massa e sono più rarefatte lontano da essa. Infatti <u markdown="span">la concentrazione di linee di campo misura l'intensità del campo in quel punto</u>.
3. Le linee di campo hanno sempre verso **entrante** nella massa che genera il campo.
{% include box-end.html %}

Le linee di campo hanno anche un altro significato molto intuitivo: sono le traiettorie che seguirebbe una <definizione>massa esploratrice</definizione> lasciata cadere, da ferma, in un punto qualsiasi del campo. Provalo tu stesso: trascina la massa esploratrice (pallina grigia) in un punto qualsiasi attorno alla massa $M$ e lasciala andare — osserva come "cade" muovendosi sempre più velocemente (proprio come ci si aspetta, avvicinandosi a $M$), seguendo esattamente una linea di campo.

<div class="vdrag-widget" id="fline1">
<p class="vdrag-hint">Trascina la pallina grigia in un punto qualsiasi e lasciala andare: osserva la traiettoria che percorre cadendo verso $M$. Ripeti in più punti per "disegnare" più linee di campo.</p>
<svg id="fline1-svg" viewBox="0 0 320 320" width="100%" style="max-width:300px;height:auto;display:block;margin:0 auto;touch-action:none;" role="img" aria-label="Simulazione: traiettoria di una massa esploratrice che cade verso M">
<defs>
  <radialGradient id="flsimM" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/>
  </radialGradient>
  <radialGradient id="flsimMass" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#94a3b8"/>
  </radialGradient>
</defs>
<line x1="300" y1="160" x2="206" y2="160" stroke="#0891b2" stroke-width="1" opacity=".15"/>
<line x1="259" y1="259" x2="192.5" y2="192.5" stroke="#0891b2" stroke-width="1" opacity=".15"/>
<line x1="160" y1="300" x2="160" y2="206" stroke="#0891b2" stroke-width="1" opacity=".15"/>
<line x1="61" y1="259" x2="127.5" y2="192.5" stroke="#0891b2" stroke-width="1" opacity=".15"/>
<line x1="20" y1="160" x2="114" y2="160" stroke="#0891b2" stroke-width="1" opacity=".15"/>
<line x1="61" y1="61" x2="127.5" y2="127.5" stroke="#0891b2" stroke-width="1" opacity=".15"/>
<line x1="160" y1="20" x2="160" y2="114" stroke="#0891b2" stroke-width="1" opacity=".15"/>
<line x1="259" y1="61" x2="192.5" y2="127.5" stroke="#0891b2" stroke-width="1" opacity=".15"/>

<g id="fline1-trails"></g>

<circle cx="160" cy="160" r="38" fill="url(#flsimM)"/>
<ellipse cx="146" cy="146" rx="11" ry="8" fill="#fff" opacity=".5"/>
<text x="160" y="166" text-anchor="middle" font-size="15" font-weight="600" fill="#92400e">M</text>

<circle id="fline1-mass" cx="270" cy="270" r="10" fill="url(#flsimMass)" stroke="#475569" stroke-width="1.5" style="cursor:grab;touch-action:none;"/>
</svg>
<div class="vdrag-actions">
<button class="vdrag-reset" id="fline1-clear">&#8635; Cancella tracce</button>
</div>
</div>

<script>
(function(){
  var ID='fline1';
  var svg=document.getElementById(ID+'-svg');
  var mass=document.getElementById(ID+'-mass');
  var trails=document.getElementById(ID+'-trails');
  var clearBtn=document.getElementById(ID+'-clear');
  var CENTER={x:160,y:160}, M_R=38, GAP=10, MIN_DIST=M_R+GAP, BOUND=18;
  var START={x:270,y:270};
  var falling=false;

  function toSvgPoint(clientX,clientY){
    var pt=svg.createSVGPoint();
    pt.x=clientX; pt.y=clientY;
    var m=svg.getScreenCTM().inverse();
    return pt.matrixTransform(m);
  }

  function clampPoint(x,y){
    x=Math.max(BOUND,Math.min(320-BOUND,x));
    y=Math.max(BOUND,Math.min(320-BOUND,y));
    var dx=x-CENTER.x, dy=y-CENTER.y, dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<MIN_DIST){
      if(dist<1e-6){ dx=1; dy=0; dist=1; }
      var k=MIN_DIST/dist;
      x=CENTER.x+dx*k; y=CENTER.y+dy*k;
    }
    return {x:x,y:y};
  }

  function setMass(x,y){ mass.setAttribute('cx',x); mass.setAttribute('cy',y); }

  function onMove(e){
    e.preventDefault();
    var p=toSvgPoint(e.clientX,e.clientY);
    var c=clampPoint(p.x,p.y);
    setMass(c.x,c.y);
  }
  function onUp(e){
    mass.removeEventListener('pointermove',onMove);
    mass.removeEventListener('pointerup',onUp);
    startFall(parseFloat(mass.getAttribute('cx')),parseFloat(mass.getAttribute('cy')));
  }
  mass.addEventListener('pointerdown',function(e){
    if(falling) return;
    e.preventDefault();
    mass.setPointerCapture(e.pointerId);
    mass.addEventListener('pointermove',onMove);
    mass.addEventListener('pointerup',onUp);
  });

  function startFall(x0,y0){
    var dx=x0-CENTER.x, dy=y0-CENTER.y, dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<1e-6){ dx=1; dy=0; dist=1; }
    var ux=dx/dist, uy=dy/dist;
    var tx=CENTER.x+ux*MIN_DIST, ty=CENTER.y+uy*MIN_DIST;

    var line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x0); line.setAttribute('y1',y0);
    line.setAttribute('x2',tx); line.setAttribute('y2',ty);
    line.setAttribute('stroke','#0891b2'); line.setAttribute('stroke-width','2');
    line.setAttribute('opacity','.4');
    trails.appendChild(line);

    falling=true; mass.style.cursor='default';
    var DUR=900, t0=performance.now();
    function step(now){
      var t=Math.min(1,(now-t0)/DUR);
      var e=t*t;
      setMass(x0+(tx-x0)*e, y0+(ty-y0)*e);
      if(t<1){ requestAnimationFrame(step); }
      else {
        falling=false; mass.style.cursor='grab';
        setTimeout(function(){ setMass(START.x,START.y); },250);
      }
    }
    requestAnimationFrame(step);
  }

  clearBtn.addEventListener('click',function(){
    trails.innerHTML='';
    falling=false; mass.style.cursor='grab';
    setMass(START.x,START.y);
  });
})();
</script>

### Sovrapposizione degli effetti per il campo gravitazionale

Anche per il campo gravitazionale vale lo stesso <definizione>principio di sovrapposizione degli effetti</definizione> già visto per le forze: se in un certo punto dello spazio sono presenti più masse $M_1, M_2, \dots$, ciascuna genera lì il proprio campo <u markdown="span">esattamente come se le altre non ci fossero</u>. Il campo totale in quel punto è la somma **vettoriale** di tutti questi campi:

$$\vec g_{tot} = \vec g_1 + \vec g_2 + \dots$$

<div class="fig-block">
<svg viewBox="0 0 360 220" width="100%" style="max-width:320px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Somma vettoriale dei campi generati da due masse in uno stesso punto">
  <defs>
    <radialGradient id="gsM1" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/>
    </radialGradient>
    <radialGradient id="gsM2" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#f0fdfa"/><stop offset="55%" stop-color="#99f6e4"/><stop offset="100%" stop-color="#5eead4"/>
    </radialGradient>
    <marker id="gsArrow1" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#0891b2"/></marker>
    <marker id="gsArrow2" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#6366f1"/></marker>
    <marker id="gsArrowTot" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#16a34a"/></marker>
  </defs>
  <circle cx="60" cy="50" r="30" fill="url(#gsM1)"/>
  <ellipse cx="50" cy="40" rx="9" ry="6" fill="#fff" opacity=".5"/>
  <text x="60" y="55" text-anchor="middle" font-size="13" font-weight="600" fill="#92400e">M&#8321;</text>
  <circle cx="320" cy="140" r="38" fill="url(#gsM2)"/>
  <ellipse cx="306" cy="126" rx="11" ry="7" fill="#fff" opacity=".5"/>
  <text x="320" y="146" text-anchor="middle" font-size="14" font-weight="600" fill="#0f766e">M&#8322;</text>

  <circle cx="180" cy="170" r="5" fill="#475569"/>
  <text x="180" y="188" text-anchor="middle" font-size="12" fill="#475569">P</text>

  <line x1="116" y1="106" x2="204" y2="88" stroke="#6366f1" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="268" y1="151" x2="204" y2="88" stroke="#0891b2" stroke-width="2" stroke-dasharray="5 4"/>

  <line x1="180" y1="170" x2="116" y2="106" stroke="#0891b2" stroke-width="3" marker-end="url(#gsArrow1)"/>
  <text x="98" y="98" font-size="14" fill="#0891b2">g&#8321;</text>
  <line x1="180" y1="170" x2="268" y2="151" stroke="#6366f1" stroke-width="3" marker-end="url(#gsArrow2)"/>
  <text x="272" y="150" font-size="14" fill="#6366f1">g&#8322;</text>
  <line x1="180" y1="170" x2="204" y2="88" stroke="#16a34a" stroke-width="3.5" marker-end="url(#gsArrowTot)"/>
  <foreignObject x="205" y="52" width="60" height="26">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:14px;font-weight:600;color:#16a34a;">$\vec g_{tot}$</div>
  </foreignObject>
</svg>
<figcaption><span class="fig-num" data-fig-id="somma-campi">Figura</span> — Nel punto $P$, i campi $\vec g_1$ e $\vec g_2$ generati da $M_1$ e $M_2$ si sommano vettorialmente (regola del parallelogramma) nel campo totale $\vec g_{tot}$.</figcaption>
</div>

{% include box-imp.html titolo="Sovrapposizione degli effetti (campo)" %}
Se più masse generano un campo nello stesso punto, il campo totale in quel punto è la somma vettoriale (con la regola del parallelogramma) dei singoli campi generati da ciascuna massa — esattamente come accade per le forze:

$$\vec g_{tot} = \vec g_1 + \vec g_2 + \cdots.$$

{% include box-end.html %}

### Linee di campo in presenza di più masse

Cosa succede se il campo è generato da **più masse insieme**, come ad esempio nel sistema Terra-Luna? Come abbiamo appena visto, il campo totale in ogni punto è la somma vettoriale dei campi generati da ciascuna massa. Le linee di campo, però, non sono più delle semplici rette radiali: si incurvano, perché in ogni punto risentono dell'attrazione di **entrambe** le masse, come si vede in questa immagine:

{% include figura.html id="earth-moon-field"
   src="/corsi/immagini/earth-moon-field.png"
   didascalia="Le linee di campo del sistema Terra-Luna: non più rette, ma curve che risentono dell'attrazione di entrambe le masse."
   larghezza="420px" %}

Anche in questo caso possiamo pensare alle linee di campo come alle traiettorie di una massa esploratrice lasciata cadere, da ferma, in un punto qualsiasi. Prova tu stesso, questa volta con due masse (una grande, come la Terra, e una piccola, come la Luna): la pallina non cadrà più lungo una semplice retta, ma seguirà un percorso curvo, deciso dall'attrazione combinata delle due masse.

<div class="vdrag-widget" id="fline2">
<p class="vdrag-hint">Trascina la pallina rosa in un punto qualsiasi e lasciala andare: osserva il percorso curvo che segue, tirata da entrambe le masse.</p>
<svg id="fline2-svg" viewBox="0 0 320 320" width="100%" style="max-width:300px;height:auto;display:block;margin:0 auto;touch-action:none;" role="img" aria-label="Simulazione: traiettoria di una massa esploratrice nel campo di due masse">
<defs>
  <radialGradient id="fl2Earth" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#ecfeff"/><stop offset="55%" stop-color="#67e8f9"/><stop offset="100%" stop-color="#0891b2"/>
  </radialGradient>
  <radialGradient id="fl2Moon" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#e2e8f0"/><stop offset="100%" stop-color="#94a3b8"/>
  </radialGradient>
  <radialGradient id="fl2Mass" cx="35%" cy="30%" r="70%">
    <stop offset="0%" stop-color="#fdf2f8"/><stop offset="55%" stop-color="#f9a8d4"/><stop offset="100%" stop-color="#ec4899"/>
  </radialGradient>
</defs>

<g id="fline2-trails"></g>

<circle cx="110" cy="170" r="34" fill="url(#fl2Earth)"/>
<ellipse cx="98" cy="157" rx="10" ry="7" fill="#fff" opacity=".5"/>
<text x="110" y="176" text-anchor="middle" font-size="13" font-weight="600" fill="#0e7490">T</text>

<circle cx="225" cy="110" r="15" fill="url(#fl2Moon)"/>
<ellipse cx="220" cy="105" rx="4.5" ry="3" fill="#fff" opacity=".6"/>
<text x="225" y="114" text-anchor="middle" font-size="10" font-weight="600" fill="#475569">L</text>

<circle id="fline2-mass" cx="270" cy="280" r="9" fill="url(#fl2Mass)" stroke="#be185d" stroke-width="1.5" style="cursor:grab;touch-action:none;"/>
</svg>
<div class="vdrag-actions">
<button class="vdrag-reset" id="fline2-clear">&#8635; Cancella tracce</button>
</div>
</div>

<script>
(function(){
  var ID='fline2';
  var svg=document.getElementById(ID+'-svg');
  var mass=document.getElementById(ID+'-mass');
  var trails=document.getElementById(ID+'-trails');
  var clearBtn=document.getElementById(ID+'-clear');
  var EARTH={x:110,y:170,r:34}, MOON={x:225,y:110,r:15};
  var K1=2200, K2=260, SOFTEN=12, GAP=6, BOUND=14, MAXSTEPS=500;
  var KMOVE=6, MAXSTEP=7, MINSTEP=0.8;
  var START={x:270,y:280};
  var falling=false;

  function toSvgPoint(clientX,clientY){
    var pt=svg.createSVGPoint();
    pt.x=clientX; pt.y=clientY;
    var m=svg.getScreenCTM().inverse();
    return pt.matrixTransform(m);
  }

  function clampDrag(x,y){
    x=Math.max(BOUND,Math.min(320-BOUND,x));
    y=Math.max(BOUND,Math.min(320-BOUND,y));
    [EARTH,MOON].forEach(function(b){
      var dx=x-b.x, dy=y-b.y, dist=Math.sqrt(dx*dx+dy*dy), minD=b.r+GAP+6;
      if(dist<minD){
        if(dist<1e-6){ dx=1; dy=0; dist=1; }
        var k=minD/dist; x=b.x+dx*k; y=b.y+dy*k;
      }
    });
    return {x:x,y:y};
  }

  function setMass(x,y){ mass.setAttribute('cx',x); mass.setAttribute('cy',y); }

  function onMove(e){
    e.preventDefault();
    var p=toSvgPoint(e.clientX,e.clientY);
    var c=clampDrag(p.x,p.y);
    setMass(c.x,c.y);
  }
  function onUp(e){
    mass.removeEventListener('pointermove',onMove);
    mass.removeEventListener('pointerup',onUp);
    simulateFall(parseFloat(mass.getAttribute('cx')),parseFloat(mass.getAttribute('cy')));
  }
  mass.addEventListener('pointerdown',function(e){
    if(falling) return;
    e.preventDefault();
    mass.setPointerCapture(e.pointerId);
    mass.addEventListener('pointermove',onMove);
    mass.addEventListener('pointerup',onUp);
  });

  function accel(x,y,body,k){
    var dx=body.x-x, dy=body.y-y, r=Math.max(Math.sqrt(dx*dx+dy*dy),SOFTEN);
    var a=k/(r*r);
    return {ax:a*dx/r, ay:a*dy/r};
  }

  function simulateFall(x0,y0){
    falling=true; mass.style.cursor='default';
    var x=x0,y=y0,step=0;
    var pts=[x+','+y];
    function frame(){
      step++;
      // Nessuna inerzia: lo spostamento ad ogni istante è preso nella
      // direzione del campo *in quel punto* (non dipende dal moto precedente),
      // così la pallina segue esattamente la linea di campo, non una traiettoria "reale".
      var a1=accel(x,y,EARTH,K1), a2=accel(x,y,MOON,K2);
      var fx=a1.ax+a2.ax, fy=a1.ay+a2.ay;
      var dx=fx*KMOVE, dy=fy*KMOVE, dlen=Math.hypot(dx,dy);
      if(dlen>MAXSTEP){ dx*=MAXSTEP/dlen; dy*=MAXSTEP/dlen; }
      else if(dlen>0 && dlen<MINSTEP){ dx*=MINSTEP/dlen; dy*=MINSTEP/dlen; }
      x+=dx; y+=dy;
      pts.push(x.toFixed(1)+','+y.toFixed(1));
      setMass(x,y);
      var distE=Math.hypot(x-EARTH.x,y-EARTH.y), distM=Math.hypot(x-MOON.x,y-MOON.y);
      var landed=(distE<EARTH.r+GAP)||(distM<MOON.r+GAP);
      var escaped=(x<0||x>320||y<0||y>320);
      if(!landed && !escaped && step<MAXSTEPS){
        requestAnimationFrame(frame);
      } else {
        var poly=document.createElementNS('http://www.w3.org/2000/svg','polyline');
        poly.setAttribute('points',pts.join(' '));
        poly.setAttribute('fill','none');
        poly.setAttribute('stroke','#ec4899');
        poly.setAttribute('stroke-width','2');
        poly.setAttribute('opacity','.45');
        trails.appendChild(poly);
        falling=false; mass.style.cursor='grab';
        setTimeout(function(){ setMass(START.x,START.y); },250);
      }
    }
    requestAnimationFrame(frame);
  }

  clearBtn.addEventListener('click',function(){
    trails.innerHTML='';
    falling=false; mass.style.cursor='grab';
    setMass(START.x,START.y);
  });
})();
</script>

# Energia Gravitazionale

Finora abbiamo descritto la gravità nel linguaggio delle forze e dei campi. Esiste però un modo alternativo di raccontare la stessa fisica, quello dell'<definizione>energia</definizione>: è una descrizione molto ricca ed elegante, che ci permetterà di collegare in modo naturale grandezze apparentemente lontane fra loro, come la velocità di un corpo e la sua distanza da un altro.

## Energia potenziale gravitazionale
{% include margin-note.html testo="Perché possiamo parlare di energia potenziale?"%}
La proprietà accennata sopra che caratterizza **tutte** le forze centrali (cioè che hanno come direzione la retta che congiunge i centri dei corpi), quale quella gravitazionale, è quella di <u markdown="span">poter definire un'energia potenziale</u> (cosa che non vale per tutte le forze in generale).
{% include margin-note-end.html %}

{% include margin-note.html testo="Comprendere cos'è l'energia potenziale" %}
Quando due masse si trovano a una certa distanza, c'è dell'energia "immagazzinata" tra loro, come se fossero connesse da una molla in tensione: se lasciamo che si avvicinino spontaneamente, attratte dalla gravità, questa energia si sprigiona sotto forma di <definizione>energia cinetica</definizione>. L'energia immagazzinata da due masse per effetti della forza di gravità si chiama <definizione>energia potenziale gravitazionale</definizione>.
{% include margin-note-end.html %}

<div class="vdrag-widget" id="springOsc">
<p class="vdrag-hint">Trascina la massa azzurra per allontanarla dalla massa gialla (fissa), poi lasciala andare: osserva come accelera tornando indietro. Con il pulsante puoi mostrare la molla al posto dei vettori forza.</p>
<svg id="springOsc-svg" viewBox="0 0 390 180" width="100%" style="max-width:360px;height:auto;display:block;margin:0 auto;touch-action:none;" role="img" aria-label="Animazione interattiva: trascina la massa azzurra e rilasciala per vederla accelerare verso la massa gialla, fissa">
<defs>
  <radialGradient id="springOscM" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/></radialGradient>
  <radialGradient id="springOscm" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#f0f9ff"/><stop offset="55%" stop-color="#7dd3fc"/><stop offset="100%" stop-color="#38bdf8"/></radialGradient>
  <marker id="springOscArrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#dc2626"/></marker>
</defs>
<g id="springOsc-spring" style="display:none;">
<path id="springOsc-body" d="" fill="none" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round"/>
<path id="springOsc-shine" d="" fill="none" stroke="#f1f5f9" stroke-width="1.4" stroke-linecap="round" opacity=".85"/>
</g>
<g id="springOsc-vectors">
<line id="springOsc-arrowM" x1="0" y1="0" x2="0" y2="0" stroke="#dc2626" stroke-width="2.5" marker-end="url(#springOscArrow)"/>
<line id="springOsc-arrowm" x1="0" y1="0" x2="0" y2="0" stroke="#dc2626" stroke-width="2.5" marker-end="url(#springOscArrow)"/>
</g>

<g id="springOsc-gauge" opacity="0">
  <text x="350" y="18" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">Energia</text>
  <text x="350" y="29" text-anchor="middle" font-size="10" font-weight="600" fill="#334155">immagazzinata</text>
  <rect x="340" y="35" width="20" height="110" rx="4" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect id="springOsc-gaugeFill" x="340" y="145" width="20" height="0" rx="4" fill="#16a34a"/>
</g>

<circle id="springOsc-M" cx="90" cy="90" r="26" fill="url(#springOscM)"/>
<circle id="springOsc-m" cx="136" cy="90" r="20" fill="url(#springOscm)" style="cursor:grab;touch-action:none;"/>
</svg>
<div class="vdrag-actions">
<button class="vdrag-reset" id="springOsc-toggle">Mostra molla</button>
</div>
</div>

<script>
(function(){
  var svg=document.getElementById('springOsc-svg');
  var m=document.getElementById('springOsc-m'), M=document.getElementById('springOsc-M');
  var body=document.getElementById('springOsc-body'), shine=document.getElementById('springOsc-shine');
  var springGroup=document.getElementById('springOsc-spring'), vectorsGroup=document.getElementById('springOsc-vectors');
  var arrowM=document.getElementById('springOsc-arrowM'), arrowm=document.getElementById('springOsc-arrowm');
  var gauge=document.getElementById('springOsc-gauge'), gaugeFill=document.getElementById('springOsc-gaugeFill');
  var toggleBtn=document.getElementById('springOsc-toggle');
  var springVisible=false;
  toggleBtn.addEventListener('click',function(){
    springVisible=!springVisible;
    springGroup.style.display=springVisible?'':'none';
    vectorsGroup.style.display=springVisible?'none':'';
    toggleBtn.textContent=springVisible?'Mostra vettori forza':'Mostra molla';
  });
  var Rm=20, RM=26;
  var MIN_DIST=RM+Rm, STRETCH_REF=150;
  var AMP_MAX=13, AMP_MIN=3.5;
  var GAUGE_H=110, GAUGE_BOTTOM=145;
  var X_MIN=20, X_MAX=270, Y_MIN=20, Y_MAX=160;
  var Mx=90, My=90;
  var xm=136, ym=90;
  var dragging=false, animId=null;

  function springPath(p0x,p0y,p1x,p1y,amp,n,lead){
    var dx=p1x-p0x, dy=p1y-p0y, dist=Math.hypot(dx,dy)||1;
    var ux=dx/dist, uy=dy/dist, px=-uy, py=ux;
    var lc=Math.min(lead, dist/2-1);
    var ax=p0x+ux*lc, ay=p0y+uy*lc, bx=p1x-ux*lc, by=p1y-uy*lc;
    var d='M'+p0x.toFixed(1)+','+p0y.toFixed(1)+' L'+ax.toFixed(1)+','+ay.toFixed(1);
    for(var i=0;i<n;i++){
      var t1=(i+1)/n, midT=(i+0.5)/n;
      var sx=ax+(bx-ax)*t1, sy=ay+(by-ay)*t1;
      var mx=ax+(bx-ax)*midT, my=ay+(by-ay)*midT;
      var dir=(i%2===0)?-1:1;
      var cx=mx+px*dir*amp, cy=my+py*dir*amp;
      d+=' Q'+cx.toFixed(1)+','+cy.toFixed(1)+' '+sx.toFixed(1)+','+sy.toFixed(1);
    }
    return d+' L'+p1x.toFixed(1)+','+p1y.toFixed(1);
  }

  function render(){
    m.setAttribute('cx',xm); m.setAttribute('cy',ym);

    var dist=Math.hypot(xm-Mx,ym-My);
    var stretchFrac=Math.max(0,Math.min(1,(dist-MIN_DIST)/STRETCH_REF));
    var amp=AMP_MAX-(AMP_MAX-AMP_MIN)*stretchFrac;

    var d=springPath(Mx,My,xm,ym,amp,7,12);
    body.setAttribute('d',d); shine.setAttribute('d',d);

    var ux=(dist>1e-6)?(Mx-xm)/dist:1, uy=(dist>1e-6)?(My-ym)/dist:0;
    var ARROW_LEN=22;
    arrowm.setAttribute('x1',xm+ux*(Rm+4)); arrowm.setAttribute('y1',ym+uy*(Rm+4));
    arrowm.setAttribute('x2',xm+ux*(Rm+4+ARROW_LEN)); arrowm.setAttribute('y2',ym+uy*(Rm+4+ARROW_LEN));
    arrowM.setAttribute('x1',Mx-ux*(RM+4)); arrowM.setAttribute('y1',My-uy*(RM+4));
    arrowM.setAttribute('x2',Mx-ux*(RM+4+ARROW_LEN)); arrowM.setAttribute('y2',My-uy*(RM+4+ARROW_LEN));

    var fillH=GAUGE_H*stretchFrac;
    gaugeFill.setAttribute('height',fillH);
    gaugeFill.setAttribute('y',GAUGE_BOTTOM-fillH);
    gauge.setAttribute('opacity',Math.min(1,stretchFrac*5));
  }
  render();

  function toSvgPoint(clientX,clientY){
    var pt=svg.createSVGPoint();
    pt.x=clientX; pt.y=clientY;
    var mtx=svg.getScreenCTM().inverse();
    return pt.matrixTransform(mtx);
  }

  function clampPoint(x,y){
    x=Math.max(X_MIN,Math.min(X_MAX,x));
    y=Math.max(Y_MIN,Math.min(Y_MAX,y));
    var dx=x-Mx, dy=y-My, dist=Math.sqrt(dx*dx+dy*dy);
    if(dist<MIN_DIST){
      if(dist<1e-6){ dx=1; dy=0; dist=1; }
      var k=MIN_DIST/dist;
      x=Mx+dx*k; y=My+dy*k;
    }
    return {x:x,y:y};
  }

  function onMove(e){
    e.preventDefault();
    var p=toSvgPoint(e.clientX,e.clientY);
    var c=clampPoint(p.x,p.y);
    xm=c.x; ym=c.y;
    render();
  }
  function onUp(e){
    m.removeEventListener('pointermove',onMove);
    m.removeEventListener('pointerup',onUp);
    dragging=false;
    m.style.cursor='grab';
    startReturn();
  }
  m.addEventListener('pointerdown',function(e){
    e.preventDefault();
    if(animId){ cancelAnimationFrame(animId); animId=null; }
    dragging=true;
    m.style.cursor='grabbing';
    m.setPointerCapture(e.pointerId);
    m.addEventListener('pointermove',onMove);
    m.addEventListener('pointerup',onUp);
  });

  function startReturn(){
    var x0=xm, y0=ym;
    var dx=x0-Mx, dy=y0-My, dist=Math.hypot(dx,dy)||1;
    var ux=dx/dist, uy=dy/dist;
    var tx=Mx+ux*MIN_DIST, ty=My+uy*MIN_DIST;
    var t0=performance.now(), DUR=900;
    function step(now){
      var t=Math.min(1,(now-t0)/DUR);
      var e=t*t;
      xm=x0+(tx-x0)*e; ym=y0+(ty-y0)*e;
      render();
      if(t<1){ animId=requestAnimationFrame(step); }
      else { animId=null; }
    }
    animId=requestAnimationFrame(step);
  }
})();
</script>

{% include margin-note.html testo="Calcolare l'energia potenziale" %}
Per calcolare quanta energia è immagazzinata tra due masse $M$ ed $m$ a distanza $r$, immaginiamo di partire da due masse inizialmente unite (a contatto) e di allontanarle fino alla distanza che ci interessa. Il lavoro che dobbiamo compiere per allontanarle, vincendo la loro attrazione reciproca, <u markdown="span">si trasforma interamente in **energia potenziale gravitazionale**</u>. Quindi per calcolare l'energia potenziale dobbiamo calcolare il lavoro compiuto.


Osserva l'animazione seguente: allontanando le due masse di un tratto $r$, la forza gravitazionale (attrattiva) si oppone sempre allo spostamento, come una molla in tensione.

<div class="vdrag-widget" id="springSep">
<div class="lift-flow">
<svg id="springSep-svg" viewBox="0 0 380 200" width="100%" style="max-width:340px;height:auto;display:block;" role="img" aria-label="Animazione: due masse vengono allontanate mentre i vettori della forza gravitazionale le tirano l'una verso l'altra">
<defs>
  <radialGradient id="sepM" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/></radialGradient>
  <radialGradient id="sepm" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#f0f9ff"/><stop offset="55%" stop-color="#7dd3fc"/><stop offset="100%" stop-color="#38bdf8"/></radialGradient>
  <marker id="sepArrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#dc2626"/></marker>
</defs>

<line id="springSep-rline" x1="160" y1="50" x2="220" y2="50" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
<line id="springSep-rtickL" x1="160" y1="44" x2="160" y2="56" stroke="#94a3b8" stroke-width="1.5"/>
<line id="springSep-rtickR" x1="220" y1="44" x2="220" y2="56" stroke="#94a3b8" stroke-width="1.5"/>
<text id="springSep-rlabel" x="190" y="38" text-anchor="middle" font-size="14" fill="#64748b">r</text>

<line id="springSep-arrowA" x1="0" y1="100" x2="0" y2="100" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sepArrow)"/>
<line id="springSep-arrowB" x1="0" y1="100" x2="0" y2="100" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sepArrow)"/>

<circle id="springSep-m" cx="160" cy="100" r="20" fill="url(#sepm)"/>
<text id="springSep-mlabel" x="160" y="105" text-anchor="middle" font-size="13" font-weight="600" fill="#0369a1">m</text>
<circle id="springSep-M" cx="220" cy="100" r="28" fill="url(#sepM)"/>
<text id="springSep-Mlabel" x="220" y="106" text-anchor="middle" font-size="15" font-weight="600" fill="#92400e">M</text>
</svg>

<p class="lift-eq">
<span class="lift-fixed" id="springSep-fixed">$L=$</span> <span class="lift-var" id="springSep-var"></span>
</p>
</div>

<div class="vdrag-actions">
<button class="vdrag-check" id="springSep-go">Separa le masse!</button>
<button class="vdrag-reset" id="springSep-reset" style="display:none;">&#8635; Ricomincia</button>
</div>
</div>

<script>
(function(){
  var ID='springSep';
  var m=document.getElementById(ID+'-m'), M=document.getElementById(ID+'-M');
  var mlabel=document.getElementById(ID+'-mlabel'), Mlabel=document.getElementById(ID+'-Mlabel');
  var arrowA=document.getElementById(ID+'-arrowA'), arrowB=document.getElementById(ID+'-arrowB');
  var rline=document.getElementById(ID+'-rline'), rtickL=document.getElementById(ID+'-rtickL'), rtickR=document.getElementById(ID+'-rtickR'), rlabel=document.getElementById(ID+'-rlabel');
  var goBtn=document.getElementById(ID+'-go'), resetBtn=document.getElementById(ID+'-reset');
  var fixedEl=document.getElementById(ID+'-fixed'), varEl=document.getElementById(ID+'-var');
  var STAGES=['-F \\times \\text{spostamento}','-G\\dfrac{Mm}{r^2} \\times r','-G\\dfrac{Mm}{r^{\\cancel{2}}} \\times \\cancel{r}','-G\\dfrac{Mm}{r}'];
  var FADE=300;

  function setStage(i){
    var tex='$'+STAGES[i]+'$';
    function apply(){
      varEl.innerHTML=tex;
      if(window.MathJax && MathJax.typesetPromise){
        MathJax.typesetPromise([varEl]).then(function(){ varEl.style.opacity=1; });
      } else {
        varEl.style.opacity=1;
      }
    }
    if(varEl.innerHTML===''){ apply(); }
    else { varEl.style.opacity=0; setTimeout(apply,FADE); }
  }

  var X_START_m=160, X_START_M=220, X_END_m=60, X_END_M=320, R_m=20, R_M=28, Y=100;
  var R_START=X_START_M-X_START_m;
  var ARROW_MAX=30, ARROW_MIN=6;

  function render(t){
    var xm = X_START_m + (X_END_m-X_START_m)*t;
    var xM = X_START_M + (X_END_M-X_START_M)*t;
    m.setAttribute('cx',xm); mlabel.setAttribute('x',xm);
    M.setAttribute('cx',xM); Mlabel.setAttribute('x',xM);

    var r=xM-xm;
    var alen=Math.max(ARROW_MIN, Math.min(ARROW_MAX, ARROW_MAX*(R_START/r)*(R_START/r)));
    arrowA.setAttribute('x1',xm+R_m+4); arrowA.setAttribute('y1',Y); arrowA.setAttribute('x2',xm+R_m+4+alen); arrowA.setAttribute('y2',Y);
    arrowB.setAttribute('x1',xM-R_M-4); arrowB.setAttribute('y1',Y); arrowB.setAttribute('x2',xM-R_M-4-alen); arrowB.setAttribute('y2',Y);

    rline.setAttribute('x1',xm); rline.setAttribute('x2',xM);
    rtickL.setAttribute('x1',xm); rtickL.setAttribute('x2',xm);
    rtickR.setAttribute('x1',xM); rtickR.setAttribute('x2',xM);
    rlabel.setAttribute('x',(xm+xM)/2);
  }
  render(0);

  function resetAll(){
    render(0);
    fixedEl.style.opacity=0;
    varEl.style.opacity=0; varEl.innerHTML='';
    goBtn.style.display='inline-block'; goBtn.disabled=false;
    resetBtn.style.display='none';
  }

  goBtn.addEventListener('click',function(){
    goBtn.disabled=true;
    var t0=performance.now(), DUR=1400;
    function step(now){
      var t=Math.min(1,(now-t0)/DUR);
      var e=t<0.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2;
      render(e);
      if(t<1){ requestAnimationFrame(step); }
      else {
        goBtn.style.display='none';
        resetBtn.style.display='inline-block';
        fixedEl.style.opacity=1;
        setTimeout(function(){ setStage(0); },250);
        setTimeout(function(){ setStage(1); },2100);
        setTimeout(function(){ setStage(2); },3950);
        setTimeout(function(){ setStage(3); },5800);
      }
    }
    requestAnimationFrame(step);
  });

  resetBtn.addEventListener('click',resetAll);
})();
</script>

Il lavoro fatto dalla forza gravitazionale mentre le due masse si allontanano di un tratto $r$ è 

$$L = -F \times \text{spostamento} = -G\frac{Mm}{r^2} \times r = -G\frac{Mm}{r^{\cancel{2}}} \times \cancel{r} = -G\frac{Mm}{r}.$$

- Nel primo passaggio scriviamo semplicemente lavoro = forza per spostamento, con il segno meno perché la forza si oppone al moto.
- Nel secondo passaggio sostituiamo il modulo della forza gravitazionale, $F = G\dfrac{Mm}{r^2}$.
- Nel terzo passaggio notiamo che una delle due $r$ si semplifica con una delle due potenze di $r$ al denominatore.
- Il risultato finale non dipende più separatamente da $F$ e dallo spostamento, ma solo dalla distanza $r$ raggiunta.

Questo lavoro <u>si trasforma interamente in energia potenziale gravitazionale</u>, che indichiamo con $U$:

$$U = -G\frac{Mm}{r}.$$
{% include margin-note-end.html %}

{% include margin-note.html testo="Perché, in generale, U è negativa" %}
Il segno meno ha un significato fisico preciso: indica che le due masse sono "legate" dalla reciproca attrazione. Più sono vicine, più $U$ è negativa (più energia servirebbe per separarle); allontanandosi, $U$ cresce, avvicinandosi a zero — che raggiunge solo a distanza infinita.
{% include margin-note-end.html %}

Possiamo riscrivere questa stessa formula usando direttamente il campo gravitazionale $g$, al posto della sua espressione $G\,M/r^2$:

$$U = -mgr = -G\frac{Mm}{r}.$$

Le due scritture sono **la stessa identica formula**: nella prima usiamo direttamente $g$ (il campo generato da $M$ alla distanza $r$), nella seconda sostituiamo $g = G\,M/r^2$.


{% include box-imp.html titolo="Energia potenziale gravitazionale" %}
- **Che cos'è:** è uno <u markdown="span">scalare</u> che esprime l'energia immagazzinata da una massa $m$ a causa della sua posizione nel campo gravitazionale generato da una massa $M$.
- **Formula:** $U = -mgr = -G\dfrac{Mm}{r}$.
- **Unità di misura:** essendo un'energia, si misura in joule (J).
{% include box-end.html %}

<div class="iex-widget" id="invCarEnergia">
<p class="iex-lbl">Isola le altre grandezze</p>
<p class="iex-hint">Come sopra: cerca la sequenza più breve, poi appuntala sul quaderno. Qui sotto lavoriamo con il <strong>modulo</strong> delle formule (senza il segno meno): il segno resta invariato durante tutti i passaggi, quindi puoi pensare tranquillamente alla versione con il meno davanti.</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="invCarEnergiaprev" onclick="invCarEnergianav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="invCarEnergiadots"></div>
<button class="iex-navbtn" id="invCarEnergianext" onclick="invCarEnergianav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="invCarEnergiarow0">
<div class="iex-nested">
{% include invert.html id="inv-en1-m" variabili="U|m|g|r" sinistra="U" destra="m*g*r" obiettivo="m" %}
</div>
</div>

<div class="iex-q" id="invCarEnergiarow1" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-en1-g" variabili="U|m|g|r" sinistra="U" destra="m*g*r" obiettivo="g" %}
</div>
</div>

<div class="iex-q" id="invCarEnergiarow2" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-en1-r" variabili="U|m|g|r" sinistra="U" destra="m*g*r" obiettivo="r" %}
</div>
</div>

<div class="iex-q" id="invCarEnergiarow3" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-en2-G" variabili="U|G|M|m|r" sinistra="U" destra="G*M*m/r" obiettivo="G" %}
</div>
</div>

<div class="iex-q" id="invCarEnergiarow4" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-en2-M" variabili="U|G|M|m|r" sinistra="U" destra="G*M*m/r" obiettivo="M" %}
</div>
</div>

<div class="iex-q" id="invCarEnergiarow5" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-en2-m" variabili="U|G|M|m|r" sinistra="U" destra="G*M*m/r" obiettivo="m" %}
</div>
</div>

<div class="iex-q" id="invCarEnergiarow6" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-en2-r" variabili="U|G|M|m|r" sinistra="U" destra="G*M*m/r" obiettivo="r" %}
</div>
</div>

</div>

<script>
setupInvCarousel('invCarEnergia',7);
</script>

## Potenziale gravitazionale

Ricordi come siamo passati dalla forza gravitazionale $\vec F$ al campo gravitazionale $\vec g$? Abbiamo semplicemente tolto la massa esploratrice $m$, dividendo per essa: $\vec g = \vec F / m$. Possiamo fare esattamente la stessa cosa con l'energia potenziale: togliendo la massa esploratrice $m$ dall'energia potenziale gravitazionale $U$ otteniamo una nuova grandezza, chiamata <definizione>potenziale gravitazionale</definizione> e indicata con $V$:

$$V = \frac{U}{m} = -gr = -G\frac{M}{r}.$$

Anche qui, le due scritture sono la stessa identica formula (sostituendo $g=G\,M/r^2$): $V=-gr$ è **sempre valida**, per qualunque distanza $r$.

{% include margin-note.html testo="Energia potenziale vs. potenziale" %}
Non confondere le due grandezze: l'<u markdown="span">energia potenziale $U$ **dipende** dalla massa esploratrice $m$</u> (quanta più massa esploratrice metti, tanta più energia immagazzini), mentre <u markdown="span">il potenziale $V$ **non dipende** da $m$</u> — proprio come il campo $\vec g$ non dipende da $m$, ma dipende solo dalla massa che genera il campo e dalla distanza da essa.
{% include margin-note-end.html %}

Analizziamo l'unità di misura di $V$: essendo il rapporto fra un'energia (J) e una massa (kg), il potenziale gravitazionale si misura in J/kg.

<div class="iex-nested">
{% include unit-derive.html id="ud-V" titolo="Trova l'unità di misura di V"
   variabile="V"
   numeratore_simboli="U" numeratore_corrette="J"
   denominatore_simboli="m" denominatore_corrette="kg"
   opzioni="J|kg|N|m" %}
</div>

{% include box-imp.html titolo="Potenziale gravitazionale" %}
- **Che cos'è:** l'energia potenziale gravitazionale "per unità di massa esploratrice" — non dipende da $m$, proprio come il campo $\vec g$ non dipende da $m$.
- **Formula:** $V = \dfrac{U}{m} = -gr = -G\dfrac{M}{r}$ — sempre valida, per qualunque distanza $r$.
- **Unità di misura:** J/kg.
{% include box-end.html %}

<div class="iex-widget" id="invCarPot">
<p class="iex-lbl">Isola le altre grandezze</p>
<p class="iex-hint">Come sempre: minor numero di mosse possibile, poi sul quaderno. Anche qui lavoriamo con il <strong>modulo</strong> (senza il segno meno), che resta invariato durante i passaggi.</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="invCarPotprev" onclick="invCarPotnav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="invCarPotdots"></div>
<button class="iex-navbtn" id="invCarPotnext" onclick="invCarPotnav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="invCarPotrow0">
<div class="iex-nested">
{% include invert.html id="inv-pot1-U" variabili="V|U|m" sinistra="V" destra="U/m" obiettivo="U" %}
</div>
</div>

<div class="iex-q" id="invCarPotrow1" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-pot1-m" variabili="V|U|m" sinistra="V" destra="U/m" obiettivo="m" %}
</div>
</div>

<div class="iex-q" id="invCarPotrow2" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-pot2-G" variabili="V|G|M|r" sinistra="V" destra="G*M/r" obiettivo="G" %}
</div>
</div>

<div class="iex-q" id="invCarPotrow3" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-pot2-M" variabili="V|G|M|r" sinistra="V" destra="G*M/r" obiettivo="M" %}
</div>
</div>

<div class="iex-q" id="invCarPotrow4" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-pot2-r" variabili="V|G|M|r" sinistra="V" destra="G*M/r" obiettivo="r" %}
</div>
</div>

</div>

<script>
setupInvCarousel('invCarPot',5);
</script>

### Confronto tra le formule

Richiamiamo le quattro formule trovate finora in questo capitolo:

<div style="text-align:center;margin:.8rem 0;">
<div style="color:#dc2626;">$$F = G\,\frac{m_1 m_2}{r^2} \qquad\qquad g = G\,\frac{M}{r^2}$$</div>
<div style="color:#6366f1;">$$U = -G\,\frac{Mm}{r} \qquad\qquad V = -G\,\frac{M}{r}$$</div>
</div>

{% include margin-note.html testo="Vettori o scalari?" %}
La forza $\vec F$ e il campo $\vec g$ sono grandezze <u markdown="span">**vettoriali**</u>: per descriverle servono modulo, direzione e verso. L'energia potenziale $U$ e il potenziale $V$, invece, sono grandezze <u markdown="span">**scalari**</u>: bastano un numero (con il proprio segno) e un'unità di misura, senza alcuna direzione. È uno dei motivi per cui il linguaggio dell'energia è così comodo da usare: sommare scalari è molto più semplice che sommare vettori.
{% include margin-note-end.html %}

C'è poi un'altra differenza importante, che riguarda **come** queste grandezze dipendono dalla distanza $r$: forza e campo (in rosso) sono inversamente proporzionali al **quadrato** della distanza, mentre energia potenziale e potenziale (in indaco) sono inversamente proporzionali alla distanza stessa.

{% include margin-note.html testo="Chi diminuisce più lentamente?" %}
Poiché, allontanandosi, $1/r$ diminuisce molto più lentamente di $1/r^2$, <u markdown="span">energia potenziale e potenziale diminuiscono molto più lentamente, all'aumentare della distanza, rispetto a forza e campo</u> — come si vede confrontando i due grafici:
{% include margin-note-end.html %}

<div class="fig-block">
<svg viewBox="0 0 320 220" width="100%" style="max-width:340px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Confronto fra come diminuiscono, all'aumentare della distanza, forza e campo (inversamente proporzionali al quadrato della distanza) ed energia potenziale e potenziale (inversamente proporzionali alla distanza)">
  <defs>
    <marker id="cmpArrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#475569"/></marker>
  </defs>
  <line x1="40" y1="195" x2="40" y2="18" stroke="#475569" stroke-width="1.5" marker-end="url(#cmpArrow)"/>
  <line x1="35" y1="190" x2="308" y2="190" stroke="#475569" stroke-width="1.5" marker-end="url(#cmpArrow)"/>
  <text x="312" y="194" font-size="13" fill="#475569">r</text>
  <text x="18" y="22" font-size="12" fill="#475569">valore</text>

  <polyline points="40.0,20.0 42.7,71.9 45.5,103.3 48.2,123.6 50.9,137.5 53.7,147.5 59.2,160.5 64.6,168.3 70.1,173.4 75.6,176.9 81.1,179.4 94.7,183.2 108.4,185.3 122.1,186.5 135.8,187.3 149.5,187.9 163.2,188.3 176.8,188.6 190.5,188.8 204.2,189.0 217.9,189.1 231.6,189.2 245.3,189.3 258.9,189.4 272.6,189.5 286.3,189.5 300.0,189.6" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <polyline points="40.0,20.0 42.7,48.3 45.5,68.6 48.2,83.8 50.9,95.6 53.7,105.0 59.2,119.2 64.6,129.3 70.1,136.9 75.6,142.8 81.1,147.5 94.7,156.0 108.4,161.7 122.1,165.7 135.8,168.8 149.5,171.1 163.2,173.0 176.8,174.5 190.5,175.8 204.2,176.9 217.9,177.9 231.6,178.7 245.3,179.4 258.9,180.0 272.6,180.6 286.3,181.1 300.0,181.5" fill="none" stroke="#6366f1" stroke-width="2.2"/>

  <line x1="150" y1="205" x2="170" y2="205" stroke="#dc2626" stroke-width="2.5"/>
  <text x="175" y="209" font-size="12" fill="#dc2626">F, g &prop; 1/r&sup2;</text>
  <line x1="230" y1="205" x2="250" y2="205" stroke="#6366f1" stroke-width="2.5"/>
  <text x="255" y="209" font-size="12" fill="#6366f1">U, V &prop; 1/r</text>
</svg>
<figcaption><span class="fig-num" data-fig-id="confronto-decadimento">Figura</span> — A parità di distanza iniziale, la curva di energia potenziale e potenziale (inversamente proporzionali alla distanza) resta molto più "alta" di quella di forza e campo (inversamente proporzionali al quadrato della distanza), man mano che $r$ cresce.</figcaption>
</div>

{% include box-imp.html titolo="Confronto tra le quattro grandezze" %}

| | Forza $\vec F$ | Campo $\vec g$ | Energia potenziale $U$ | Potenziale $V$ |
|---|:---:|:---:|:---:|:---:|
| **Natura** | vettore | vettore | scalare | scalare |
| **Dipendenza da $r$** | $1/r^2$ | $1/r^2$ | $1/r$ | $1/r$ |

{% include box-end.html %}

{% include box-ex.html titolo="Verifica Subito!" %}
{% capture _qenergia %}[
{"t":"L'energia potenziale gravitazionale si misura in joule (J).","ok":true,"s":"Sì, essendo un'energia."},
{"t":"L'energia potenziale gravitazionale $U$ dipende dalla massa esploratrice $m$.","ok":true,"s":"Sì: infatti $U = mgr$, e $m$ compare esplicitamente nella formula."},
{"t":"Il potenziale gravitazionale si misura in joule (J).","ok":false,"s":"No: si misura in J/kg, perché è un'energia potenziale divisa per una massa."},
{"t":"Il lavoro necessario per sollevare un oggetto di massa $m$ per un tratto $r$, vicino alla superficie terrestre, vale $mgr$.","ok":true,"s":"Sì, a patto che $r$ sia piccolo rispetto al raggio terrestre, così che $g$ sia costante."},
{"t":"Il potenziale gravitazionale $V$ dipende dalla massa esploratrice $m$.","ok":false,"s":"No: proprio come il campo $\\vec g$, il potenziale $V = U/m$ non dipende da $m$, ma solo dalla massa che genera il campo e dalla distanza."}
]{% endcapture %}
{% include quiz.html domande=_qenergia
   label_si="Una grandezza che, come U, dipende dalla massa esploratrice"
   label_no="Una grandezza che, come V, non dipende dalla massa esploratrice"
   id="q-energia" %}
{% include box-end.html %}

<div class="iex-widget" id="iexUV">
<p class="iex-lbl">Verifica Subito!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexUVprev" onclick="iexUVnav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexUVdots"></div>
<button class="iex-navbtn" id="iexUVnext" onclick="iexUVnav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexUVrow0">
<div class="calc-flow">
{% include calc-margin.html id="calcUV0" %}
<div class="calc-flow-body">
<p class="iex-qt">Due persone, di massa $m_1 = 80\ \text{kg}$ e $m_2 = 60\ \text{kg}$, si trovano a una distanza $r = 2\ \text{m}$ l'una dall'altra. Calcola l'energia potenziale gravitazionale $U$ del sistema. Esprimi il risultato in notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="iexUVm0" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')iexUVcheck0()">
<span>&times;&thinsp;10<sup><input class="iex-e" id="iexUVe0" type="text" placeholder="n" onkeydown="if(event.key==='Enter')iexUVcheck0()"></sup></span>
<select class="iex-unit" id="iexUVu0">
<option value="">unità</option>
<option value="J">J</option>
<option value="N">N</option>
<option value="kg">kg</option>
<option value="J/kg">J/kg</option>
</select>
<button class="iex-vbtn" onclick="iexUVcheck0()">Verifica</button>
</div>
<div class="iex-fb" id="iexUVfb0"></div>
<div class="iex-sol" id="iexUVsol0">Soluzione: <strong>-1,60 &times; 10<sup>-7</sup> J</strong> — infatti $U = -G\dfrac{m_1 m_2}{r} = -6{,}67\times10^{-11}\times\dfrac{80\times60}{2}$ (negativa: le due masse sono "legate" dalla reciproca attrazione).</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexUVrow1" style="display:none">
<div class="calc-flow">
{% include calc-margin.html id="calcUV1" %}
<div class="calc-flow-body">
<p class="iex-qt">Calcola ora il potenziale gravitazionale $V$ generato dalla sola massa $m_1 = 80\ \text{kg}$ (la prima persona) a una distanza $r = 4\ \text{m}$ da essa. Esprimi il risultato in notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="iexUVm1" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')iexUVcheck1()">
<span>&times;&thinsp;10<sup><input class="iex-e" id="iexUVe1" type="text" placeholder="n" onkeydown="if(event.key==='Enter')iexUVcheck1()"></sup></span>
<select class="iex-unit" id="iexUVu1">
<option value="">unità</option>
<option value="J/kg">J/kg</option>
<option value="J">J</option>
<option value="N">N</option>
<option value="kg">kg</option>
</select>
<button class="iex-vbtn" onclick="iexUVcheck1()">Verifica</button>
</div>
<div class="iex-fb" id="iexUVfb1"></div>
<div class="iex-sol" id="iexUVsol1">Soluzione: <strong>-1,33 &times; 10<sup>-9</sup> J/kg</strong> — infatti $V = -G\dfrac{m_1}{r} = -6{,}67\times10^{-11}\times\dfrac{80}{4}$.</div>
</div>
<div style="clear:both"></div>
</div>
</div>
</div>

<script>
(function(){
  var N=2, cur=0, ok=[false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexUVdots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexUV .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexUVrow'+i).style.display='block';
    cur=i;
    document.getElementById('iexUVprev').disabled=(i===0);
    document.getElementById('iexUVnext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexUVdots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Passo '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexUVnav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

  function parseMant(s){ var c=s.trim(); if(c.indexOf(',')!==-1)c=c.replace(',','.'); return parseFloat(c); }
  function parseExp(s){ return parseInt(s.trim().replace('−','-'),10); }

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  window.showSol = window.showSol || function(id){ document.getElementById(id).style.display='block'; };

  function checkStage(idx, targetVal, targetUnit, solId){
    var mv=parseMant(document.getElementById('iexUVm'+idx).value);
    var ev=parseExp(document.getElementById('iexUVe'+idx).value);
    var uv=document.getElementById('iexUVu'+idx).value;
    var fb=document.getElementById('iexUVfb'+idx);
    var vb=document.querySelector('#iexUVrow'+idx+' .iex-vbtn');
    var userVal = (!isNaN(mv) && !isNaN(ev)) ? mv*Math.pow(10,ev) : NaN;
    var valOk = !isNaN(userVal) && Math.abs(userVal-targetVal)/Math.abs(targetVal) <= 0.02;
    var uOk = uv===targetUnit;
    if(valOk && uOk){
      ok[idx]=true; fb.className='iex-fb ok';
      fb.innerHTML='&#10003; Esatto!'+(idx<N-1?' <button class="iex-nextbtn" onclick="iexUVnav(1)">Passo successivo &rarr;</button>':'');
      shootConf(vb); updateDots();
    } else {
      fb.className='iex-fb err';
      var parts=[];
      if(!valOk)parts.push('il valore (coefficiente &times; 10 elevato all\'esponente)');
      if(!uOk)parts.push('l\'unità di misura');
      fb.innerHTML='Non è esatto. Controlla: '+parts.join(', ')+'. Oppure <button class="iex-lbtn" onclick="showSol(\''+solId+'\')">vedi la soluzione</button>.';
    }
  }

  window.iexUVcheck0=function(){ checkStage(0, -1.6008e-7, 'J', 'iexUVsol0'); };
  window.iexUVcheck1=function(){ checkStage(1, -1.334e-9, 'J/kg', 'iexUVsol1'); };
})();
</script>

## Superfici equipotenziali

Poiché il potenziale gravitazionale $V$ generato da una massa $M$ dipende solo dalla distanza $r$ da essa ($V = -G\dfrac{M}{r}$), tutti i punti a distanza $r$ da $M$ hanno lo stesso potenziale. L'insieme di questi punti forma una superficie, chiamata <definizione>superficie equipotenziale</definizione>: per una singola massa sferica, le superfici equipotenziali sono semplicemente sfere concentriche a $M$.

<div class="fig-block">
<svg viewBox="0 0 300 300" width="100%" style="max-width:280px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Superfici equipotenziali concentriche attorno a una massa sferica M">
  <defs>
    <radialGradient id="eqpM" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/>
    </radialGradient>
    <marker id="eqpArrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#0891b2"/></marker>
  </defs>

  <circle cx="150" cy="150" r="130" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
  <circle cx="150" cy="150" r="98" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
  <circle cx="150" cy="150" r="66" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>
  <circle cx="150" cy="150" r="38" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3"/>

  <line x1="150" y1="150" x2="228" y2="72" stroke="#0891b2" stroke-width="2" marker-end="url(#eqpArrow)"/>
  <foreignObject x="220" y="38" width="80" height="24">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px;font-weight:600;color:#0891b2;">$V$ cresce</div>
  </foreignObject>
  <text x="180" y="116" font-size="12" fill="#0891b2">V&#8321;</text>
  <text x="200" y="96" font-size="12" fill="#0891b2">V&#8322;</text>
  <text x="222" y="74" font-size="12" fill="#0891b2">V&#8323;</text>

  <circle cx="150" cy="150" r="18" fill="url(#eqpM)"/>
  <ellipse cx="144" cy="144" rx="5" ry="3.5" fill="#fff" opacity=".5"/>
  <text x="150" y="155" text-anchor="middle" font-size="13" font-weight="600" fill="#92400e">M</text>
</svg>
<figcaption><span class="fig-num" data-fig-id="equipotenziali-sfera">Figura</span> — Le superfici equipotenziali di una singola massa sferica sono sfere concentriche a $M$: $V_1 < V_2 < V_3 < 0$, poiché il potenziale (negativo) cresce, avvicinandosi a zero, man mano che ci si allontana da $M$.</figcaption>
</div>

{% include margin-note.html testo="Superfici equipotenziali e linee di campo" %}
Le superfici equipotenziali sono sempre **perpendicolari** alle linee di campo, in ogni punto. Infatti, muovendosi lungo una superficie equipotenziale il potenziale non cambia: non si compie quindi lavoro spostandosi in quella direzione. Il campo, invece, compie lavoro proprio quando ci si sposta lungo la sua direzione — le due direzioni devono perciò essere sempre perpendicolari.
{% include margin-note-end.html %}

Quando il campo è generato da più masse, come nel sistema Terra-Luna, le superfici equipotenziali non sono più sfere: si deformano, avvicinandosi maggiormente dove il campo è più intenso — esattamente come succede per le linee di campo.

{% include figura.html id="earth-moon-equipotential"
   src="/corsi/immagini/earth-moon-field-equipotential-surfaces.webp"
   didascalia="Sezione delle superfici equipotenziali del sistema Terra-Luna (in due dimensioni appaiono come linee): sono sempre perpendicolari alle linee di campo."
   larghezza="420px" %}

{% include box-imp.html titolo="Superfici equipotenziali" %}
- **Che cosa sono:** l'insieme dei punti dello spazio che hanno lo stesso potenziale gravitazionale.
- **Per una singola massa:** sono sfere concentriche alla massa che genera il campo.
- **Proprietà fondamentale:** sono sempre perpendicolari alle linee di campo.
{% include box-end.html %}

## Moto di una massa in un campo gravitazionale

Quando una massa $m$ si muove in un campo gravitazionale — ad esempio cadendo verso la massa $M$ che genera il campo, oppure allontanandosene — la sua energia meccanica totale, cioè la somma di energia cinetica ed energia potenziale, si conserva:

$$E = K + U = \frac{1}{2}mv^2 - G\frac{Mm}{r} = \text{costante}.$$

{% include margin-note.html testo="Perché l'energia si conserva" %}
La forza gravitazionale è una forza centrale — l'abbiamo osservato all'inizio del capitolo. Per questo tipo di forze si può sempre definire un'energia potenziale, e ciò garantisce che l'energia meccanica totale $E = K + U$ resti costante durante il moto, anche se $K$ e $U$ cambiano continuamente l'una a spese dell'altra.
{% include margin-note-end.html %}

Questo ci dice come cambia la velocità della massa $m$ durante il moto:

- avvicinandosi a $M$ (cioè diminuendo $r$), $U$ **diminuisce** (diventa più negativa): per mantenere $E$ costante, $K$ deve **aumentare** — la massa **accelera**;
- allontanandosi da $M$ (cioè aumentando $r$), $U$ **aumenta**: $K$ deve **diminuire** — la massa **rallenta**.

{% include box-imp.html titolo="Conservazione dell'energia meccanica" %}
- Durante il moto di una massa nel campo gravitazionale, $E = K + U$ resta sempre costante.
- Avvicinandosi alla massa che genera il campo: $U$ diminuisce, $K$ aumenta → la massa accelera.
- Allontanandosi: $U$ aumenta, $K$ diminuisce → la massa rallenta.
{% include box-end.html %}

# Esercizi di riepilogo

{% include ex.html diff=1 %}
Verifica che l'unità di misura del campo gravitazionale, il N/kg, coincide con quella di un'accelerazione. (Suggerimento: ricorda che $\text N = \text{kg}\cdot\text m/\text s^2$.)
{% include ex-sol.html %}
$$\frac{\text N}{\text{kg}} = \frac{\text{kg}\cdot\text m/\text s^2}{\text{kg}} = \frac{\text m}{\text s^2}.$$

È proprio l'unità di misura di un'accelerazione: coerente con il fatto che $g$ **è** un'accelerazione (quella che subirebbe una massa esploratrice lasciata libera in quel punto del campo).
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Su una massa $m$ agiscono contemporaneamente due forze gravitazionali, $\vec F_1$ (dovuta a $M_1$) e $\vec F_2$ (dovuta a $M_2$), come in figura.

<div class="vdrag-widget" id="vdrag1">
<p class="vdrag-hint">Trascina il pallino verde fino al nodo della griglia che rappresenta $\vec F_{tot} = \vec F_1 + \vec F_2$ (regola del parallelogramma).</p>
<svg id="vdrag1-svg" viewBox="0 0 320 320" width="100%" style="max-width:320px;height:auto;display:block;margin:0 auto;touch-action:none;" role="img" aria-label="Griglia interattiva per la somma vettoriale">
<defs>
  <radialGradient id="vdM1" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#fffbeb"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#fbbf24"/></radialGradient>
  <radialGradient id="vdM2" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#f0fdfa"/><stop offset="55%" stop-color="#99f6e4"/><stop offset="100%" stop-color="#5eead4"/></radialGradient>
  <radialGradient id="vdMm" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#e2e8f0"/><stop offset="100%" stop-color="#cbd5e1"/></radialGradient>
  <marker id="vdArrowRed" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#dc2626"/></marker>
  <marker id="vdArrowPurple" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#7c3aed"/></marker>
  <marker id="vdArrowGreen" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#16a34a"/></marker>
</defs>
{% for i in (0..9) %}<line x1="{{ i | times: 30 | plus: 20 }}" y1="20" x2="{{ i | times: 30 | plus: 20 }}" y2="290" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="{{ i | times: 30 | plus: 20 }}" x2="290" y2="{{ i | times: 30 | plus: 20 }}" stroke="#e2e8f0" stroke-width="1"/>{% endfor %}

<circle cx="140" cy="230" r="24" fill="url(#vdM1)"/>
<text x="140" y="234" text-anchor="middle" font-size="12" font-weight="600" fill="#92400e">M&#8321;</text>
<circle cx="80" cy="170" r="20" fill="url(#vdM2)"/>
<text x="80" y="174" text-anchor="middle" font-size="12" font-weight="600" fill="#0f766e">M&#8322;</text>
<circle cx="50" cy="260" r="13" fill="url(#vdMm)"/>
<text x="50" y="264" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">m</text>

<line x1="50" y1="260" x2="140" y2="230" stroke="#dc2626" stroke-width="3" marker-end="url(#vdArrowRed)"/>
<text x="150" y="222" font-size="13" fill="#dc2626">F&#8321;</text>
<line x1="50" y1="260" x2="80" y2="170" stroke="#7c3aed" stroke-width="3" marker-end="url(#vdArrowPurple)"/>
<text x="88" y="162" font-size="13" fill="#7c3aed">F&#8322;</text>

<line id="vdrag1-line" x1="50" y1="260" x2="230" y2="80" stroke="#16a34a" stroke-width="3" marker-end="url(#vdArrowGreen)"/>
<text id="vdrag1-label" x="238" y="76" font-size="13" font-weight="600" fill="#16a34a">F&#8348;&#8340;&#8348;</text>
<circle id="vdrag1-handle" cx="230" cy="80" r="11" fill="#16a34a" stroke="#fff" stroke-width="2" style="cursor:grab;touch-action:none;"/>
</svg>
<div class="vdrag-actions">
<button class="vdrag-check" id="vdrag1-check">Verifica</button>
<button class="vdrag-reset" id="vdrag1-reset">&#8635; Ricomincia</button>
</div>
<div class="vdrag-fb" id="vdrag1-fb"></div>
</div>

<script>
(function(){
  var ID='vdrag1';
  var svg=document.getElementById(ID+'-svg');
  var handle=document.getElementById(ID+'-handle');
  var line=document.getElementById(ID+'-line');
  var label=document.getElementById(ID+'-label');
  var fb=document.getElementById(ID+'-fb');
  var checkBtn=document.getElementById(ID+'-check');
  var resetBtn=document.getElementById(ID+'-reset');
  var START={x:230,y:80};
  var UNIT=30, MIN=20, MAX=290;
  var TARGET={x:170,y:140};
  var solved=false;

  function clamp(v){ return Math.max(MIN,Math.min(MAX,v)); }
  function snap(v){ return Math.round((clamp(v)-MIN)/UNIT)*UNIT+MIN; }

  function toSvgPoint(clientX,clientY){
    var pt=svg.createSVGPoint();
    pt.x=clientX; pt.y=clientY;
    var m=svg.getScreenCTM().inverse();
    return pt.matrixTransform(m);
  }

  function moveHandle(x,y){
    handle.setAttribute('cx',x); handle.setAttribute('cy',y);
    line.setAttribute('x2',x); line.setAttribute('y2',y);
    label.setAttribute('x',x+8); label.setAttribute('y',y-6);
  }

  function onMove(e){
    e.preventDefault();
    var p=toSvgPoint(e.clientX,e.clientY);
    moveHandle(clamp(p.x),clamp(p.y));
  }
  function onUp(e){
    handle.removeEventListener('pointermove',onMove);
    handle.removeEventListener('pointerup',onUp);
    var x=snap(parseFloat(handle.getAttribute('cx')));
    var y=snap(parseFloat(handle.getAttribute('cy')));
    moveHandle(x,y);
  }
  handle.addEventListener('pointerdown',function(e){
    if(solved) return;
    e.preventDefault();
    handle.setPointerCapture(e.pointerId);
    fb.style.display='none';
    handle.addEventListener('pointermove',onMove);
    handle.addEventListener('pointerup',onUp);
  });

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#16a34a','#0891b2','#7c3aed','#f59e0b','#dc2626','#ec4899'];
    for(var i=0;i<50;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){ vy+=.28; x+=vx; y+=vy; op-=.016; p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op; if(op>0)requestAnimationFrame(step); else p.remove(); }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  checkBtn.addEventListener('click',function(){
    var x=snap(parseFloat(handle.getAttribute('cx')));
    var y=snap(parseFloat(handle.getAttribute('cy')));
    fb.style.display='block';
    if(x===TARGET.x && y===TARGET.y){
      solved=true;
      fb.className='vdrag-fb ok';
      fb.innerHTML='&#10003; Esatto! Quello è il vertice del parallelogramma opposto a $m$: la diagonale da $m$ a quel punto è proprio $\\vec F_{tot}$.';
      handle.style.cursor='default';
      shootConf(checkBtn);
    } else {
      fb.className='vdrag-fb err';
      fb.innerHTML='Non ancora. Completa il parallelogramma che ha $\\vec F_1$ e $\\vec F_2$ come lati, e trascina il pallino sul suo vertice opposto a $m$.';
    }
    if(window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
  });

  resetBtn.addEventListener('click',function(){
    solved=false; handle.style.cursor='grab';
    moveHandle(START.x,START.y);
    fb.style.display='none';
  });
})();
</script>
{% include ex-end.html %}

{% include ex.html diff=3 %}
Giove ha una massa circa $318$ volte quella della Terra, ma orbita attorno al Sole a una distanza mediamente $5{,}2$ volte maggiore di quella Terra-Sole. Di quante volte l'attrazione gravitazionale che Giove esercita sul Sole è più intensa di quella esercitata dalla Terra sul Sole?
{% include ex-sol.html %}
La forza gravitazionale è $F = G\dfrac{Mm}{r^2}$: a parità di $G$ e della massa del Sole, il rapporto tra le due forze è

$$\frac{F_{\text{Giove}}}{F_{\text{Terra}}} = \frac{M_{\text{Giove}}/r_{\text{Giove}}^2}{M_{\text{Terra}}/r_{\text{Terra}}^2} = \frac{M_{\text{Giove}}}{M_{\text{Terra}}} \cdot \left(\frac{r_{\text{Terra}}}{r_{\text{Giove}}}\right)^2 = \frac{318}{5{,}2^2} \approx \frac{318}{27} \approx 11{,}8.$$

Nonostante Giove sia molto più lontano dal Sole, la sua massa enorme prevale: attira il Sole con una forza quasi $12$ volte più intensa di quella della Terra.
{% include ex-sol-end.html %}