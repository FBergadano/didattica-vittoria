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
Tutta la teoria che vedremo in questo capitolo fu formulata nel 1687 dal pazzo più geniale della storia della Fisica: Newton. 
Fu solo dopo più di un secolo, nel 1798, che Cavendish riuscì a dimostrare **sperimentialmente**, in un laboratorio, la legge trovata da Newton.  
Noi faremo il processo contrario, guarderemo prima l'esperimento di Cavendish e alla luce di quello interpreteremo la legge di Newton.

## L'esperimento di Cavendish

Cavendish costruì il seguente apparato sperimentale, la cosiddetta <definizione>bilancia a torsione</definizione>:

- un'asta rigida orizzontale (il "bilancere"), sospesa al centro a un filo sottilissimo, molto sensibile alla torsione;
- una piccola sfera, di massa $m$, fissata a un estremo del bilancere; all'altro estremo, un piattino che indica la posizione sulla scala;
- una sfera grande, di massa $M$, appesa al tappo dell'apparato, vicino alla parete di vetro;
- una scala graduata, attorno al bilancere, per leggerne la rotazione;
- un involucro di vetro che racchiude il tutto, per proteggere l'apparato dalle correnti d'aria, capaci da sole di disturbare una misura così delicata.

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
- nello scenario "Dipendenza da r", i pulsanti spostano davvero il bilancere alla nuova distanza (indicata dalla linea tratteggiata $r$): raddoppiando $r$ l'intensità della forza non si dimezza, ma diventa un quarto; triplicando $r$ diventa un nono; quadruplicando $r$ diventa un sedicesimo — <u>proprio l'andamento di $1/r^2$</u>, verificabile confrontando il valore di $F$ prima e dopo ogni cambio.

Cavendish dedusse così che il modulo della forza gravitazionale fra due corpi è **direttamente proporzionale al prodotto delle loro masse** e **inversamente proporzionale al quadrato della distanza**. Cioè, la forza gravitazionale tra due masse $m_1$ ed $m_2$ è descritta dalla seguente equazione

<div id="fga1" class="fga-wrap">
  <div class="fga-row fga-row-top">
    <div class="fga-label" data-target="fga-FG">modulo della forza gravitazionale</div>
    <div class="fga-label" data-target="fga-mm">prodotto delle masse</div>
  </div>
  <div class="fga-formula-box">

$$ \cssId{fga-FG}{F_G} \;=\; \cssId{fga-G}{G} \, \dfrac{\cssId{fga-mm}{m_1 \cdot m_2}}{\cssId{fga-r2}{r^2}} $$

  </div>
  <div class="fga-row fga-row-bottom">
    <div class="fga-label" data-target="fga-G">costante di gravitazione universale</div>
    <div class="fga-label" data-target="fga-r2">quadrato della distanza</div>
  </div>
  <svg class="fga-svg"></svg>
</div>

<style>
.fga-wrap { position: relative; margin: 2rem 0 2.4rem; padding: 0 .5rem; }
.fga-row { display: flex; justify-content: space-around; gap: 1rem; }
.fga-row-top { margin-bottom: 2.4rem; }
.fga-row-bottom { margin-top: 2.4rem; }
.fga-label {
  max-width: 160px; text-align: center; font-size: .85rem; font-style: italic;
  line-height: 1.3; color: var(--accent, #0f766e); position: relative; z-index: 1;
}
.fga-formula-box { text-align: center; font-size: 1.15rem; position: relative; z-index: 1; }
.fga-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible; }
@media print { .fga-svg, .fga-label { display: none; } }
</style>

<script>
(function () {
  var wrap = document.getElementById('fga1');
  if (!wrap) return;
  var svg = wrap.querySelector('.fga-svg');
  var labels = wrap.querySelectorAll('.fga-label');
  function ready() {
    return document.getElementById('fga-FG') && document.getElementById('fga-G') &&
           document.getElementById('fga-mm') && document.getElementById('fga-r2');
  }
  function waitReady(cb, tries) {
    tries = tries || 0;
    if (ready()) { cb(); }
    else if (tries < 300) { requestAnimationFrame(function () { waitReady(cb, tries + 1); }); }
  }

  function drawArrows() {
    var wrapRect = wrap.getBoundingClientRect();
    svg.setAttribute('width', wrapRect.width);
    svg.setAttribute('height', wrapRect.height);
    var accentRaw = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    var accent = (accentRaw && accentRaw.trim()) || '#0f766e';
    svg.innerHTML = '';
    labels.forEach(function (label) {
      var target = document.getElementById(label.getAttribute('data-target'));
      if (!target) return;
      var tRect = target.getBoundingClientRect();
      var lRect = label.getBoundingClientRect();
      var isTop = label.closest('.fga-row-top') != null;
      var tx = tRect.left + tRect.width / 2 - wrapRect.left;
      var ty = (isTop ? tRect.top : tRect.bottom) - wrapRect.top;
      var lx = lRect.left + lRect.width / 2 - wrapRect.left;
      var ly = (isTop ? lRect.bottom : lRect.top) - wrapRect.top;
      var midY = (ly + ty) / 2;
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M ' + lx + ',' + ly + ' C ' + lx + ',' + midY + ' ' + tx + ',' + midY + ' ' + tx + ',' + ty);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', accent);
      path.setAttribute('stroke-width', '1.5');
      svg.appendChild(path);
    });
  }

  waitReady(function () {
    requestAnimationFrame(function () { requestAnimationFrame(drawArrows); });
  });
  window.addEventListener('resize', drawArrows);
})();
</script>

dove $G$ <u>è una costante dal valore universale ed immutabile</u>, detta <definizione>costante di gravitazione universale</definizione>. 

Grazie alle sue misure straordinariamente precise, Cavendish riuscì anche a calcolare per la prima volta il valore della costante di gravitazione universale, che corrisponde a

$$
G = 6{,}67 \times 10^{-11} \ \frac{\text N \cdot \text m^2}{\text{kg}^2}.
$$

È proprio a causa di un valore così piccolo di $G$ che la forza gravitazionale risulta la più debole fra tutte le forze della Natura.




