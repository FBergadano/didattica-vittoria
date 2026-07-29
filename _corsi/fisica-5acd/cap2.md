---
layout: capitolo
title: "L'Elettrostatica"
corso: fisica-5acd
corso_titolo: "Fisica 5ª ACD"
materia: fisica
classe: "5ACD"
numero: 2
---

<cit autore="Empedocle, Sulla Natura">
Sole fulgido, Terra, Cielo, Mare
sono una cosa sola con le loro parti che, disgiuntesi da essi,
si sono generati negli esseri mortali. Così, 
fatte simili da Afrodite, 
le cose più adatte alla mescolanza si amano tra loro.
Ma sono nemiche le cose che più si differenziano
per origine e mescolanza e immagini impresse,
del tutto inadatte a unirsi, e assai addolorate
per i decreti di Contesa, che diede loro origine.
</cit>

{% include margin-note.html testo="Comprendere l'esistenza di una nuova forza"%}
Abbiamo imparato a descrivere l'attrazione gravitazionale e a ricondurre ad essa moltissimi fenomeni. Ma ce ne sono alcuni che non possono essere spiegati attraverso l'attrazione gravitazionale e per cui si scopre una nuova origine: la <definizione>forza elettrica</definizione>.
{% include margin-note-end.html %}

# La Carica Elettrica

{% include figura.html id="bimbi-capelli"
   src="/corsi/gif/bimbi_capelli_elettrizzati.webp"
   didascalia="Quando ci strofiniamo su una poltrona di velluto (senza toccare per terra) diventiamo carichi elettricamente. I nostri capelli si dispongono radialmente per motivi che saranno chiari alla fine del capitolo."
   larghezza="290px" %}

Ecco un esperimento molto semplice, che sicuramente vi sarà capitato di provare nella vostra vita, che mette in luce l'esistenza e la natura della forza elettrica.
{% include phet-sim.html id="electrisation-lab"
   src="https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_all.html"
   didascalia="Simulazione PhET: strofina il palloncino di gomma sul maglione di lana, poi lascialo libero e osserva ciò che succede tra il palloncino e il maglione e tra il palloncino e il muro."
   altezza="550px" %}

La prima cosa da osservare è che <u markdown="span">**tutti** i corpi sono composti da particelle di <definizione>carica positiva</definizione> e da particelle di <definizione>carica negativa</definizione></u>. Le particelle di carica positiva si chiamano <definizione>protoni</definizione>; le particelle di carica negativa si chiamano <definizione>elettroni</definizione>.  
Osserviamo quindi le seguenti cose.
- Inizialmente, ogni corpo ha lo stesso numero di cariche negative e positive, e in tale condizione non c'è nessuna interazione: quando il palloncino viene lasciato libero di muoversi, esso rimane fermo.
- Quando strofiniamo il palloncino sul maglione di lana <u>alcuni elettroni passano dalla lana al palloncino</u>: di questo modo il maglione ha più cariche positive che negative, mentre il palloncino è a maggioranza di cariche negative. Diciamo quindi che la <definizione>carica globale</definizione> del maglione è positiva e che la carica globale del palloncino è negativa.  Questo processo si chiama  <definizione>elettrizzazione per strofinio</definizione>. Notiamo che <u>i protoni non si spostano mai</u>.
- Quando palloncino e maglione sono carichi di segno opposto, essi si attraggono. <u markdown="span">È quindi presente una forza, diversa da quella gravitazionale, che attira il palloncino verso il maglione</u>.
- Quando il palloncino carico negativamente è avvicinato al muro, gli elettroni nel muro vengono respinti, mentre i protoni rimangono fermi. Si viene quindi a creare una zona di carica positiva, da cui il palloncino (negativo) è attratto.

È essenziale notare che questo fenomeno non ha niente a che fare con la forza gravitazionale. È per questo che possiamo comprendere l'esistenza di una forza completamente nuova e diversa, come quella elettrica. In questo capitolo cercheremo di comprendere di cosa si tratti.

## La materia è piena di cariche elettriche
{% include margin-note.html testo="Ogni corpo è costituito da moltissime cariche elettriche" %}
Tutta la materia che ti circonda in questo momento è composta da un numero gigantesco di minuscole molecole, composte da ancor più minuscoli atomi, composti da ancor più minuscole particelle dotate di carica che si muovono freneticamente.


In un semplice bicchiere d'acqua è presente un numero di particelle cariche superiore al numero di stelle in tutto l'Universo.

Tutti i comportamenti comuni della materia sono comprensibili in termini del movimento di queste minuscole particelle elettricamente cariche, cioè in termini delle forze che studieremo in questo capitolo.


Nel 1955, per la prima volta nella Storia, un uomo **ha visto** gli atomi (Erwin Müller, con il microscopio a ioni di campo), confermando la teoria atomica nata nell'Antica Grecia con Leucippo e Democrito. È un evento tanto sensazionale quanto la prima volta in cui un uomo ha camminato su un pianeta extraterrestre (avvenuto 14 anni dopo).
{% include margin-note-end.html %}

{% include margin-note.html testo="La materia è costituita da atomi" %}
Gli atomi sono ciò di cui è costituita la materia, i piccoli mattoncini che si organizzano in molecole, le quali a loro volta costituiscono i solidi, i liquidi e i gas da cui siamo circondati e di cui siamo composti.
{% include margin-note-end.html %}


<div class="zm-widget">
<svg viewBox="0 0 400 280" role="img" aria-label="Animazione in loop: zoom da un bicchiere d'acqua a una molecola d'acqua, poi a un atomo di idrogeno">
<defs>
  <radialGradient id="zmWaterG" cx="35%" cy="20%" r="85%"><stop offset="0%" stop-color="#eff6ff"/><stop offset="55%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#93c5fd"/></radialGradient>
  <radialGradient id="zmOxyG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fff1f0"/><stop offset="55%" stop-color="#fecaca"/><stop offset="100%" stop-color="#f87171"/></radialGradient>
  <radialGradient id="zmHydroG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#ffffff"/><stop offset="55%" stop-color="#f8fafc"/><stop offset="100%" stop-color="#e2e8f0"/></radialGradient>
  <radialGradient id="zmProtonG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fff1f2"/><stop offset="55%" stop-color="#fecdd3"/><stop offset="100%" stop-color="#fda4af"/></radialGradient>
  <radialGradient id="zmElectronG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fafafa"/><stop offset="55%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#d1d5db"/></radialGradient>
</defs>

<g class="zm-stage zm-stage-block" transform="translate(200,140)">
  <path d="M -45,-8 L 45,-8 L 38,55 L -38,55 Z" fill="url(#zmWaterG)"/>
  <ellipse cx="0" cy="-8" rx="45" ry="5" fill="url(#zmWaterG)"/>
  <ellipse cx="-15" cy="-4" rx="16" ry="5" fill="#fff" opacity=".4"/>
  <path d="M -50,-55 L 50,-55 L 38,55 L -38,55 Z" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linejoin="round"/>
  <rect x="-44" y="-50" width="7" height="95" rx="3.5" fill="#fff" opacity=".25"/>
</g>

<g class="zm-stage zm-stage-molecule" transform="translate(200,140)">
  <line x1="0" y1="10" x2="-48" y2="-30" stroke="#94a3b8" stroke-width="4"/>
  <line x1="0" y1="10" x2="48" y2="-30" stroke="#94a3b8" stroke-width="4"/>
  <circle cx="0" cy="10" r="30" fill="url(#zmOxyG)"/>
  <ellipse cx="-10" cy="2" rx="10" ry="6" fill="#fff" opacity=".45"/>
  <text x="0" y="15" text-anchor="middle" font-size="13" font-weight="700" fill="#7f1d1d">O</text>
  <circle cx="-48" cy="-30" r="19" fill="url(#zmHydroG)"/>
  <ellipse cx="-54" cy="-35" rx="6" ry="4" fill="#fff" opacity=".6"/>
  <text x="-48" y="-25" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">H</text>
  <circle cx="48" cy="-30" r="19" fill="url(#zmHydroG)"/>
  <ellipse cx="42" cy="-35" rx="6" ry="4" fill="#fff" opacity=".6"/>
  <text x="48" y="-25" text-anchor="middle" font-size="12" font-weight="700" fill="#475569">H</text>
</g>

<g class="zm-stage zm-stage-atom" transform="translate(200,140)">
  <circle r="60" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/>
  <g class="zm-orbit zm-orbit1"><circle cx="60" cy="0" r="10" fill="url(#zmElectronG)"/><text x="60" y="3.5" text-anchor="middle" font-size="12" font-weight="700" fill="#4b5563">–</text></g>
  <circle cx="0" cy="0" r="17" fill="url(#zmProtonG)"/><text x="0" y="5" text-anchor="middle" font-size="17" font-weight="700" fill="#9f1239">+</text>
</g>
</svg>

<div class="zm-caption">
  <span class="zm-cap zm-cap-block">Un bicchiere d'acqua…</span>
  <span class="zm-cap zm-cap-molecule-fwd">…contiene tantissime molecole d'acqua (H&#8322;O)…</span>
  <span class="zm-cap zm-cap-atom">…formate da atomi: ecco un atomo di idrogeno, con il suo protone (rosso, +) e il suo elettrone (grigio, –) in orbita.</span>
  <span class="zm-cap zm-cap-molecule-bwd">…che fa parte di una molecola d'acqua, contenuta nel nostro bicchiere…</span>
</div>
</div>

<style>
.zm-widget { margin: 1.8rem auto; max-width: 380px; text-align: center; }
.zm-widget svg { width: 100%; height: auto; overflow: hidden; }
.zm-stage { animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
.zm-stage-block    { animation-name: zmBlock;    animation-duration: 16s; transform-origin: 0 0; }
.zm-stage-molecule { animation-name: zmMolecule; animation-duration: 16s; transform-origin: 0 0; }
.zm-stage-atom     { animation-name: zmAtom;     animation-duration: 16s; transform-origin: 0 0; }

@keyframes zmBlock {
  0%, 8%   { opacity: 1; transform: translate(200px,140px) scale(1); }
  16%, 82% { opacity: 0; transform: translate(200px,140px) scale(7); }
  94%, 100%{ opacity: 1; transform: translate(200px,140px) scale(1); }
}
@keyframes zmMolecule {
  0%, 8%    { opacity: 0; transform: translate(200px,140px) scale(0.1); }
  16%, 34%  { opacity: 1; transform: translate(200px,140px) scale(1); }
  42%, 74%  { opacity: 0; transform: translate(200px,140px) scale(6); }
  82%, 86%  { opacity: 1; transform: translate(200px,140px) scale(1); }
  94%, 100% { opacity: 0; transform: translate(200px,140px) scale(0.1); }
}
@keyframes zmAtom {
  0%, 34%, 86%, 100% { opacity: 0; transform: translate(200px,140px) scale(0.15); }
  42%, 74%           { opacity: 1; transform: translate(200px,140px) scale(1); }
}

.zm-orbit { animation-timing-function: linear; animation-iteration-count: infinite; transform-origin: 0 0; }
.zm-orbit1 { animation-name: zmSpin; animation-duration: 3s; }
@keyframes zmSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.zm-caption { position: relative; height: 1.6em; margin-top: .4rem; }
.zm-cap { position: absolute; left: 0; right: 0; font-size: .85rem; font-style: italic; color: #6b7280; opacity: 0; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-duration: 16s; }
.zm-cap-block         { animation-name: zmCapBlock; }
.zm-cap-molecule-fwd  { animation-name: zmCapMoleculeFwd; }
.zm-cap-atom          { animation-name: zmCapAtom; }
.zm-cap-molecule-bwd  { animation-name: zmCapMoleculeBwd; }
@keyframes zmCapBlock       { 0%, 8% { opacity: 1; } 16%, 82% { opacity: 0; } 94%, 100% { opacity: 1; } }
@keyframes zmCapMoleculeFwd { 0%, 8% { opacity: 0; } 16%, 34% { opacity: 1; } 42%, 100% { opacity: 0; } }
@keyframes zmCapAtom        { 0%, 34%, 86%, 100% { opacity: 0; } 42%, 74% { opacity: 1; } }
@keyframes zmCapMoleculeBwd { 0%, 74% { opacity: 0; } 82%, 86% { opacity: 1; } 94%, 100% { opacity: 0; } }

@media print { .zm-widget { display: none; } }
</style>

{% include margin-note.html testo="Gli atomi sono composti da particelle di carica elettrica" %}
Gli atomi sono a loro volta costituiti da tre tipi di particelle:
- l'<definizione>elettrone</definizione>, dotato di carica negativa e che si muove attorno al nucleo;
- il <definizione>protone</definizione>, dotato di carica positiva e che si trova nel nucleo;
- il <definizione>neutrone</definizione>, che non ha carica (è elettricamente neutro) e che si trova anch'esso nel nucleo, unito ai protoni da gigantesche *forze nucleari*.


Queste tre particelle hanno carica e massa molto diverse tra loro:

| Particella | Carica | Massa |
|---|---|---|
| Protone  | $+e = +1{,}602\times10^{-19}\ \text{C}$ | $1{,}673\times10^{-27}\ \text{kg}$ |
| Neutrone | $0$ | $1{,}675\times10^{-27}\ \text{kg}$ |
| Elettrone  | $-e = -1{,}602\times10^{-19}\ \text{C}$ | $9{,}109\times10^{-31}\ \text{kg}$ |

{% include margin-note-end.html %}
{% include box-imp.html titolo="Stessa carica, massa enormemente diversa" %}
Protone ed elettrone hanno <u markdown="span">esattamente **la stessa carica in valore assoluto**</u>, chiamata <definizione>carica elementare</definizione> e indicata con $e$, ma di segno opposto. La loro massa, invece, è profondamente diversa: <u markdown="span">un protone è **migliaia di volte più massiccio** di un elettrone</u>. 
{% include box-end.html %}
{% include margin-note.html testo="Perché si spostano solo gli elettroni"%}
È proprio il fatto che il protone sia così tanto più massivo dell'elettrone a determinare il fatto che siano sempre gli elettroni a spostarsi, mentre i protoni rimangono sostanzialmente ancorati al nucleo.
{% include margin-note-end.html %}


{% include margin-note.html testo="Da dove viene la varietà della materia" %}
Le diverse specie chimiche sono semplicemente atomi con un numero diverso di elettroni, protoni e neutroni. Questa piccola differenza determina la sorprendente varietà di tutti i materiali che ci circondano.
{% include margin-note-end.html %}

Ecco alcuni esempi di atomi di specie chimiche piuttosto comuni:
{% include figura.html id="atomi"
   src="/corsi/gif/atoms_rutherford_model.webp"
   didascalia="Alcuni degli atomi che ti circondano in questo momento: Carbonio (C), Fosforo (P), Titanio (Ti), Neodimio (Nd). Osserva come variano il numero di elettroni, protoni e neutroni in base alla specie chimica."
   larghezza="280px" %}

{% include margin-note.html testo="Gli atomi, normalmente, sono elettricamente neutri" %}
Nota che <u>il numero di protoni in ogni atomo</u>, in condizioni normali, <u>è sempre uguale al numero di elettroni</u>. Cioè, il numero di cariche positive è identico al numero di cariche negative, e pertanto <u>l'atomo è complessivamente neutro</u>.  
{% include margin-note-end.html %}
{% include margin-note.html testo="Atomi ionizzati" %}
È possibile estrarre o aggiungere un elettrone a un atomo. In queste condizioni, l'atomo si dice <definizione>ionizzato</definizione> (positivamente se un elettrone è stato sottratto, negativamente se è stato aggiunto).
{% include margin-note-end.html %}





{% include spoiler.html testo="Il modello che abbiamo usato è semplificato. Clicca qui se sei curiosa di conoscere un modello più avanzato." %}
Nelle animazioni di questo capitolo abbiamo disegnato gli elettroni come pallini che percorrono orbite circolari nette attorno al nucleo. In realtà gli elettroni non seguono traiettorie definite: si trovano piuttosto in una "nube" attorno al nucleo, più densa in alcune zone e più rarefatta in altre. Anche protoni e neutroni sono delle nubi dai contorni sfumati. Insomma queste particelle non hanno una posizione definita, e questo, in effetti, perché non sono particelle, bensì onde. Questo è uno dei principi della Fisica Quantistica, e si chiama <definizione>dualismo onda-particella</definizione>. Ogni particella è anche un'onda, sicché non si può parlare dei contorni precisi di un atomo, né di una molecola, né di un tavolo. Tutto è un'onda. 
{% include figura.html id="atomo-reale"
   src="/corsi/immagini/real-atom-wikipedia.jpeg"
   didascalia="Una rappresentazione più realistica (anche se sempre semplificata) della nube elettronica di un atomo, ben diversa dal modello 'planetario' usato finora."
   larghezza="200px" %}
{% include spoiler-end.html %}

<div class="iex-widget" id="iexAtomi">
<p class="iex-lbl">Verifica Subito!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexAtomiprev" onclick="iexAtominav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexAtomidots"></div>
<button class="iex-navbtn" id="iexAtominext" onclick="iexAtominav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexAtomirow0">
<p class="iex-qt">Uno di questi quattro atomi è <strong>ionizzato</strong>. Clicca su quello giusto (conta protoni ed elettroni).</p>
<div class="iex-choices iex-choices-imgrow" id="iexAtomichoices0">
<button class="iex-choice-btn atom-choice-btn" data-v="a" aria-label="Atomo A">
<svg viewBox="0 0 100 100" width="100" height="100">
<defs>
  <radialGradient id="atomPosG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fff1f2"/><stop offset="55%" stop-color="#fecdd3"/><stop offset="100%" stop-color="#fda4af"/></radialGradient>
  <radialGradient id="atomNegG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#eff6ff"/><stop offset="55%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#93c5fd"/></radialGradient>
</defs>
<circle cx="50" cy="18" r="9" fill="url(#atomNegG)"/><text x="50" y="21.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="77.7" cy="66" r="9" fill="url(#atomNegG)"/><text x="77.7" y="69.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="22.3" cy="66" r="9" fill="url(#atomNegG)"/><text x="22.3" y="69.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="50" cy="50" r="17" fill="url(#atomPosG)" stroke="#9f1239" stroke-width=".5"/><text x="50" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#9f1239">3+</text>
</svg>
</button>
<button class="iex-choice-btn atom-choice-btn" data-v="b" aria-label="Atomo B">
<svg viewBox="0 0 100 100" width="100" height="100">
<circle cx="50" cy="18" r="9" fill="url(#atomNegG)"/><text x="50" y="21.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="77.7" cy="66" r="9" fill="url(#atomNegG)"/><text x="77.7" y="69.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="22.3" cy="66" r="9" fill="url(#atomNegG)"/><text x="22.3" y="69.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="50" cy="50" r="17" fill="url(#atomPosG)" stroke="#9f1239" stroke-width=".5"/><text x="50" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#9f1239">4+</text>
</svg>
</button>
<button class="iex-choice-btn atom-choice-btn" data-v="c" aria-label="Atomo C">
<svg viewBox="0 0 100 100" width="100" height="100">
<circle cx="50" cy="18" r="9" fill="url(#atomNegG)"/><text x="50" y="21.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="82" cy="50" r="9" fill="url(#atomNegG)"/><text x="82" y="53.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="50" cy="82" r="9" fill="url(#atomNegG)"/><text x="50" y="85.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="18" cy="50" r="9" fill="url(#atomNegG)"/><text x="18" y="53.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="50" cy="50" r="17" fill="url(#atomPosG)" stroke="#9f1239" stroke-width=".5"/><text x="50" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#9f1239">4+</text>
</svg>
</button>
<button class="iex-choice-btn atom-choice-btn" data-v="d" aria-label="Atomo D">
<svg viewBox="0 0 100 100" width="100" height="100">
<circle cx="50" cy="18" r="9" fill="url(#atomNegG)"/><text x="50" y="21.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="80.4" cy="40.1" r="9" fill="url(#atomNegG)"/><text x="80.4" y="43.6" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="68.8" cy="75.9" r="9" fill="url(#atomNegG)"/><text x="68.8" y="79.4" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="31.2" cy="75.9" r="9" fill="url(#atomNegG)"/><text x="31.2" y="79.4" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="19.6" cy="40.1" r="9" fill="url(#atomNegG)"/><text x="19.6" y="43.6" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="50" cy="50" r="17" fill="url(#atomPosG)" stroke="#9f1239" stroke-width=".5"/><text x="50" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#9f1239">5+</text>
</svg>
</button>
</div>
<div class="iex-fb" id="iexAtomifb0"></div>
</div>

<div class="iex-q" id="iexAtomirow1" style="display:none">
<p class="iex-qt">Osserva questo atomo: è ionizzato. Con quale segno?</p>
<svg viewBox="0 0 100 100" width="110" height="110" style="display:block;margin:0 auto;">
<circle cx="50" cy="18" r="9" fill="url(#atomNegG)"/><text x="50" y="21.5" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="80.4" cy="40.1" r="9" fill="url(#atomNegG)"/><text x="80.4" y="43.6" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="68.8" cy="75.9" r="9" fill="url(#atomNegG)"/><text x="68.8" y="79.4" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="31.2" cy="75.9" r="9" fill="url(#atomNegG)"/><text x="31.2" y="79.4" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="19.6" cy="40.1" r="9" fill="url(#atomNegG)"/><text x="19.6" y="43.6" text-anchor="middle" font-size="10" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="50" cy="50" r="17" fill="url(#atomPosG)" stroke="#9f1239" stroke-width=".5"/><text x="50" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#9f1239">3+</text>
</svg>
<div class="iex-choices" id="iexAtomichoices1" style="max-width:320px;margin:.6rem auto 0;">
<button class="iex-choice-btn" data-v="pos">Ionizzato positivamente</button>
<button class="iex-choice-btn" data-v="neg">Ionizzato negativamente</button>
</div>
<div class="iex-fb" id="iexAtomifb1"></div>
</div>

<div class="iex-q" id="iexAtomirow2" style="display:none">
<p class="iex-qt">Guardando la tabella, calcola quante volte la massa dell'elettrone sta in quella del protone, cioè calcola il rapporto $m_p/m_e$, <strong>approssimando il risultato all'unità</strong>.</p>
<div class="iex-ir">
<input class="iex-m" id="iexAtomim2" type="text" placeholder="numero intero" onkeydown="if(event.key==='Enter')iexAtomicheck2()">
<button class="iex-vbtn" onclick="iexAtomicheck2()">Verifica</button>
</div>
<div class="iex-fb" id="iexAtomifb2"></div>
<div class="iex-sol" id="iexAtomisol2">Soluzione: $m_p/m_e = 1{,}673\times10^{-27} / 9{,}109\times10^{-31} \approx 1837$. Il protone è quasi duemila volte più massiccio dell'elettrone!</div>
</div>

<div class="iex-q" id="iexAtomirow3" style="display:none">
<p class="iex-qt">Un atomo neutro possiede 11 protoni. Quanti elettroni possiede?</p>
<div class="iex-choices" id="iexAtomichoices3">
<button class="iex-choice-btn" data-v="a">6</button>
<button class="iex-choice-btn" data-v="b">11</button>
<button class="iex-choice-btn" data-v="c">22</button>
<button class="iex-choice-btn" data-v="d">Dipende dall'elemento chimico</button>
</div>
<div class="iex-fb" id="iexAtomifb3"></div>
</div>

<div class="iex-q" id="iexAtomirow4" style="display:none">
<p class="iex-qt">Quale di queste affermazioni è corretta?</p>
<div class="iex-choices" id="iexAtomichoices4">
<button class="iex-choice-btn" data-v="a">Il neutrone ha carica negativa</button>
<button class="iex-choice-btn" data-v="b">Protone ed elettrone hanno circa la stessa massa</button>
<button class="iex-choice-btn" data-v="c">Il protone è migliaia di volte più massiccio dell'elettrone</button>
<button class="iex-choice-btn" data-v="d">L'elettrone è più massiccio del protone</button>
</div>
<div class="iex-fb" id="iexAtomifb4"></div>
</div>

</div>

<style>
.iex-choices-imgrow { display:flex; flex-direction:row; flex-wrap:wrap; justify-content:center; gap:.6rem; }
.atom-choice-btn { width:104px; height:104px; padding:.2rem; display:flex; align-items:center; justify-content:center; }
@media (max-width: 480px) {
  .atom-choice-btn { width:76px; height:76px; }
  .atom-choice-btn svg { width:68px; height:68px; }
}
@media print { #iexAtomi { display:none; } }
</style>

<script>
(function(){
  var N=5, cur=0, ok=[false,false,false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexAtomidots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexAtomi .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexAtomirow'+i).style.display='block';
    cur=i;
    document.getElementById('iexAtomiprev').disabled=(i===0);
    document.getElementById('iexAtominext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexAtomidots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexAtominav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

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

  function wireChoices(rowIdx, choicesId, fbId, correctV, msgOk, msgErr){
    var btns = document.querySelectorAll('#'+choicesId+' .iex-choice-btn');
    var fb = document.getElementById(fbId);
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        if(btn.disabled) return;
        btns.forEach(function(b){ b.disabled = true; });
        var correct = btn.dataset.v === correctV;
        fb.style.display = 'block';
        if(correct){
          btn.className = btn.className.replace(' wrong','') + ' correct';
          ok[rowIdx] = true; fb.className = 'iex-fb ok';
          fb.innerHTML = '&#10003; Esatto! '+msgOk+' <button class="iex-nextbtn" onclick="iexAtominav(1)">Passo successivo &rarr;</button>';
          shootConf(btn); updateDots();
        } else {
          btn.className = btn.className.replace(' correct','') + ' wrong';
          var correctBtn = document.querySelector('#'+choicesId+' .iex-choice-btn[data-v="'+correctV+'"]');
          correctBtn.className = correctBtn.className.replace(' wrong','') + ' correct';
          fb.className = 'iex-fb err';
          fb.innerHTML = msgErr;
        }
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
      });
    });
  }

  wireChoices(0, 'iexAtomichoices0', 'iexAtomifb0', 'b',
    'L\'atomo B ha 4 protoni ma solo 3 elettroni: un protone in eccesso, quindi carica netta $+1e$.',
    'Non è quello giusto: conta con calma protoni (nel nucleo) ed elettroni (attorno). Solo un atomo ha un numero diverso di protoni ed elettroni.');

  wireChoices(1, 'iexAtomichoices1', 'iexAtomifb1', 'neg',
    'Questo atomo ha 3 protoni ma 5 elettroni: due elettroni in eccesso, quindi carica netta $-2e$: è ionizzato negativamente.',
    'Non è corretto: questo atomo ha 3 protoni ma 5 elettroni. Più elettroni che protoni significa carica netta negativa.');

  wireChoices(3, 'iexAtomichoices3', 'iexAtomifb3', 'b',
    'In un atomo neutro il numero di elettroni è sempre uguale al numero di protoni.',
    'Non è corretto: in un atomo <em>neutro</em> il numero di elettroni è sempre uguale al numero di protoni, quindi 11.');

  wireChoices(4, 'iexAtomichoices4', 'iexAtomifb4', 'c',
    'Il protone è quasi 2000 volte più massiccio dell\'elettrone (li hai appena divisi nella domanda precedente!).',
    'Non è corretto: il neutrone è neutro (non negativo), ed è il protone — non l\'elettrone — a essere migliaia di volte più massiccio.');

  window.iexAtomicheck2 = function(){
    var raw = document.getElementById('iexAtomim2').value.trim().replace(',', '.');
    var v = parseFloat(raw);
    var fb = document.getElementById('iexAtomifb2');
    var vb = document.querySelector('#iexAtomirow2 .iex-vbtn');
    if(isNaN(v)){ fb.className='iex-fb err'; fb.textContent='Inserisci un numero.'; return; }
    var rounded = Math.round(v);
    if(rounded === 1837 || rounded === 1836){
      ok[2]=true; fb.className='iex-fb ok';
      fb.innerHTML='&#10003; Esatto! Il protone è circa 1837 volte più massiccio dell\'elettrone. <button class="iex-nextbtn" onclick="iexAtominav(1)">Passo successivo &rarr;</button>';
      shootConf(vb); updateDots();
    } else {
      fb.className='iex-fb err';
      fb.innerHTML='Non è esatto. Ricontrolla la divisione $m_p/m_e$ usando i valori della tabella. Oppure <button class="iex-lbtn" onclick="showSol(\'iexAtomisol2\')">vedi la soluzione</button>.';
    }
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
  };
})();
</script>



### Carica di un corpo e Quantizzazione della carica
{% include margin-note.html testo="Definizione di carica di un corpo" %}
Abbiamo visto che un corpo è costituito da un numero enorme di particelle cariche. Chiamiamo <definizione>carica elettrica</definizione> di un corpo, indicata con $Q$, la somma algebrica di tutte le cariche positive e negative in esso presenti:

{% include eq-annotated.html
   id="carica-totale"
   formula="Q = n_p\cdot e - n_e \cdot e"
   frammenti="Q|n_p|e|-|n_e|e"
   etichette="carica elettrica del corpo|numero di protoni|carica elementare|segno meno per gli elettroni|numero di elettroni|carica elementare"
   posizioni="alto|basso|alto|basso|alto|basso"
%}

Oppure, raccogliendo la carica elementare $e$,

$$Q = (n_p-n_e)\cdot e.$$

Se un corpo ha lo stesso numero di protoni ed elettroni, allora $Q = 0$. Il corpo si dice quindi neutro, come abbiamo visto sopra per gli atomi. Se invece un corpo cede o acquista elettroni, resta con un eccesso di carica positiva o negativa e si dice <definizione>elettrizzato</definizione>.
{% include margin-note-end.html %}

Osserva i quattro corpi seguenti e le loro rispettive cariche.

<div class="qc-widget">
<svg viewBox="0 0 620 200" style="max-width:560px;width:100%;height:auto;display:block;margin:0 auto;" role="img" aria-label="Quattro corpi con configurazioni di cariche diverse, tutte con carica netta multipla di e">
<defs>
  <radialGradient id="qcPosG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fff1f2"/><stop offset="55%" stop-color="#fecdd3"/><stop offset="100%" stop-color="#fda4af"/></radialGradient>
  <radialGradient id="qcNegG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#eff6ff"/><stop offset="55%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#93c5fd"/></radialGradient>
</defs>

<text x="70" y="55" text-anchor="middle" font-size="15" fill="#374151">Q = +1e</text>
<circle cx="70" cy="110" r="14" fill="url(#qcPosG)"/><text x="70" y="115" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>

<text x="230" y="55" text-anchor="middle" font-size="15" fill="#374151">Q = +3e</text>
<circle cx="230" cy="94" r="14" fill="url(#qcPosG)"/><text x="230" y="99" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>
<circle cx="216" cy="118" r="14" fill="url(#qcPosG)"/><text x="216" y="123" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>
<circle cx="244" cy="118" r="14" fill="url(#qcPosG)"/><text x="244" y="123" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>

<text x="390" y="55" text-anchor="middle" font-size="15" fill="#374151">Q = +1e</text>
<circle cx="390" cy="110" r="13" fill="url(#qcPosG)"/><text x="390" y="114.5" text-anchor="middle" font-size="15" font-weight="700" fill="#9f1239">+</text>
<circle cx="412" cy="110" r="13" fill="url(#qcNegG)"/><text x="412" y="114.5" text-anchor="middle" font-size="15" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="401" cy="91" r="13" fill="url(#qcPosG)"/><text x="401" y="95.5" text-anchor="middle" font-size="15" font-weight="700" fill="#9f1239">+</text>
<circle cx="379" cy="91" r="13" fill="url(#qcNegG)"/><text x="379" y="95.5" text-anchor="middle" font-size="15" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="368" cy="110" r="13" fill="url(#qcPosG)"/><text x="368" y="114.5" text-anchor="middle" font-size="15" font-weight="700" fill="#9f1239">+</text>
<circle cx="379" cy="129" r="13" fill="url(#qcNegG)"/><text x="379" y="133.5" text-anchor="middle" font-size="15" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="401" cy="129" r="13" fill="url(#qcPosG)"/><text x="401" y="133.5" text-anchor="middle" font-size="15" font-weight="700" fill="#9f1239">+</text>

<text x="550" y="55" text-anchor="middle" font-size="15" fill="#374151">Q = &#8722;4e</text>
<circle cx="576" cy="110" r="10" fill="url(#qcPosG)"/><text x="576" y="113.5" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">+</text>
<circle cx="571" cy="125.3" r="10" fill="url(#qcNegG)"/><text x="571" y="128.8" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="558" cy="134.7" r="10" fill="url(#qcNegG)"/><text x="558" y="138.2" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="542" cy="134.7" r="10" fill="url(#qcPosG)"/><text x="542" y="138.2" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">+</text>
<circle cx="529" cy="125.3" r="10" fill="url(#qcNegG)"/><text x="529" y="128.8" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="524" cy="110" r="10" fill="url(#qcNegG)"/><text x="524" y="113.5" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="529" cy="94.7" r="10" fill="url(#qcPosG)"/><text x="529" y="98.2" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">+</text>
<circle cx="542" cy="85.3" r="10" fill="url(#qcNegG)"/><text x="542" y="88.8" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="558" cy="85.3" r="10" fill="url(#qcNegG)"/><text x="558" y="88.8" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="571" cy="94.7" r="10" fill="url(#qcNegG)"/><text x="571" y="98.2" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">–</text>
</svg>
<p class="qc-caption">Quattro corpi con configurazioni di cariche diverse (1 sola carica positiva; 3 cariche positive; 4 cariche positive e 3 negative; 3 cariche positive e 7 negative): la carica netta $Q$ — la somma algebrica — vale comunque sempre un multiplo intero di $e$.</p>
</div>

<style>
.qc-widget { margin: 1.6rem auto; text-align: center; }
.qc-caption { font-size: .85rem; color: #6b7280; font-style: italic; margin-top: .5rem; max-width: 560px; margin-left: auto; margin-right: auto; }
@media print { .qc-widget { display: none; } }
</style>

{% include margin-note.html testo="La carica è quantizzata" %}
Notiamo quindi che la carica di un corpo <u markdown="span">deve sempre essere un multiplo intero della carica elementare $e$</u>. Infatti, possiamo scrivere la precedente equazione come

$$Q = n \cdot e, \qquad \text{con } n=n_p-n_e \in \mathbb{Z}$$

dove $n$ è un numero intero (positivo, negativo, o nullo): la differenza fra il numero di protoni e il numero di elettroni presenti nel corpo. Questo fatto sperimentale si chiama <definizione>quantizzazione della carica elettrica</definizione>: la carica non può assumere un valore qualsiasi, ma solo multipli interi di $e$.
{% include margin-note-end.html %}

{% include box-imp.html titolo="La carica di un corpo è quantizzata" %}
La carica elettrica di un corpo è sempre un **multiplo intero** della carica elementare $e = 1{,}602 \times 10^{-19}\ \text{C}$:

$$Q = n\cdot e, \quad n = 0, \pm1, \pm2, \pm3, \ldots, $$

dove $n=n_p-n_e$ è un <u>numero intero</u> che corrisponde alla differenza tra il numero di protoni e il numero di elettroni presenti nel corpo.  
Non esistono, in natura, corpi con carica pari a $-0{,}5\, e$ o a $2{,}5\,e$.
{% include box-end.html %}

<div class="iex-widget" id="iexCarica">
<p class="iex-lbl">Verifica Subito!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexCaricaprev" onclick="iexCaricanav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexCaricadots"></div>
<button class="iex-navbtn" id="iexCaricanext" onclick="iexCaricanav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexCaricarow0">
<p class="iex-qt">Osserva questo corpo. Qual è la sua carica $Q$, espressa come multiplo della carica elementare $e$?</p>
<svg viewBox="0 0 120 120" width="130" height="130" style="display:block;margin:0 auto;">
<defs>
  <radialGradient id="crgPosG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fff1f2"/><stop offset="55%" stop-color="#fecdd3"/><stop offset="100%" stop-color="#fda4af"/></radialGradient>
  <radialGradient id="crgNegG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#eff6ff"/><stop offset="55%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#93c5fd"/></radialGradient>
</defs>
<circle cx="60" cy="28" r="13" fill="url(#crgPosG)"/><text x="60" y="32.5" text-anchor="middle" font-size="14" font-weight="700" fill="#9f1239">+</text>
<circle cx="85" cy="40" r="13" fill="url(#crgNegG)"/><text x="85" y="44.5" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="91.2" cy="67.1" r="13" fill="url(#crgNegG)"/><text x="91.2" y="71.6" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="73.9" cy="88.8" r="13" fill="url(#crgPosG)"/><text x="73.9" y="93.3" text-anchor="middle" font-size="14" font-weight="700" fill="#9f1239">+</text>
<circle cx="46.1" cy="88.8" r="13" fill="url(#crgNegG)"/><text x="46.1" y="93.3" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="28.8" cy="67.1" r="13" fill="url(#crgNegG)"/><text x="28.8" y="71.6" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">–</text>
<circle cx="35" cy="40" r="13" fill="url(#crgNegG)"/><text x="35" y="44.5" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">–</text>
</svg>
<div class="iex-ir" style="justify-content:center;">
<span>Q =</span>
<input class="iex-m" id="iexCaricam0" type="text" placeholder="es. -2" style="width:5em" onkeydown="if(event.key==='Enter')iexCaricacheck0()">
<span>&times; e</span>
<button class="iex-vbtn" onclick="iexCaricacheck0()">Verifica</button>
</div>
<div class="iex-fb" id="iexCaricafb0"></div>
</div>

<div class="iex-q" id="iexCaricarow1" style="display:none">
<p class="iex-qt">Un corpo possiede 15 protoni e 11 elettroni. Qual è la sua carica $Q$, come multiplo di $e$?</p>
<div class="iex-ir" style="justify-content:center;">
<span>Q =</span>
<input class="iex-m" id="iexCaricam1" type="text" placeholder="es. -2" style="width:5em" onkeydown="if(event.key==='Enter')iexCaricacheck1()">
<span>&times; e</span>
<button class="iex-vbtn" onclick="iexCaricacheck1()">Verifica</button>
</div>
<div class="iex-fb" id="iexCaricafb1"></div>
</div>

<div class="iex-q" id="iexCaricarow2" style="display:none">
<div class="calc-flow">
{% include calc-margin.html id="calcCarica2" %}
<div class="calc-flow-body">
<p class="iex-qt">Un corpo ha 40 protoni ed è carico con $Q = +2{,}403\times10^{-18}\ \text{C}$. Quanti elettroni possiede?</p>
<div class="iex-ir" style="justify-content:center;">
<input class="iex-m" id="iexCaricam2" type="text" placeholder="numero di elettroni" onkeydown="if(event.key==='Enter')iexCaricacheck2()">
<button class="iex-vbtn" onclick="iexCaricacheck2()">Verifica</button>
</div>
<div class="iex-fb" id="iexCaricafb2"></div>
<div class="iex-sol" id="iexCaricasol2">Soluzione: $n = Q/e = 2{,}403\times10^{-18}/1{,}602\times10^{-19} = 15$, quindi $n_p - n_e = 15 \Rightarrow n_e = 40-15 = 25$.</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexCaricarow3" style="display:none">
<p class="iex-qt">Il professor Rossi ha appena pubblicato un articolo in cui afferma di aver misurato una carica pari a $75{,}5\, e$. Come fai a capire che si tratta sicuramente di un errore?</p>
<div class="iex-choices" id="iexCaricachoices3">
<button class="iex-choice-btn" data-v="a">Perché 75,5 è un numero troppo grande per essere una carica reale</button>
<button class="iex-choice-btn" data-v="b">Perché la carica di un corpo deve sempre essere negativa</button>
<button class="iex-choice-btn" data-v="c">Perché la carica è quantizzata: deve essere un multiplo <strong>intero</strong> di $e$, e 75,5 non lo è</button>
<button class="iex-choice-btn" data-v="d">Perché ci vorrebbero più cifre decimali per essere precisi</button>
</div>
<div class="iex-fb" id="iexCaricafb3"></div>
</div>

<div class="iex-q" id="iexCaricarow4" style="display:none">
<div class="calc-flow">
{% include calc-margin.html id="calcCarica4" %}
<div class="calc-flow-body">
<p class="iex-qt">Un corpo ha una carica $Q = -1{,}4418\times10^{-18}\ \text{C}$. Quanto vale $n_p - n_e$ per questo corpo?</p>
<div class="iex-ir" style="justify-content:center;">
<span>$n_p-n_e$ =</span>
<input class="iex-m" id="iexCaricam4" type="text" placeholder="es. -2" style="width:5em" onkeydown="if(event.key==='Enter')iexCaricacheck4()">
<button class="iex-vbtn" onclick="iexCaricacheck4()">Verifica</button>
</div>
<div class="iex-fb" id="iexCaricafb4"></div>
<div class="iex-sol" id="iexCaricasol4">Soluzione: $n_p - n_e = Q/e = -1{,}4418\times10^{-18}/1{,}602\times10^{-19} = -9$.</div>
</div>
<div style="clear:both"></div>
</div>
</div>

</div>

<style>
@media print { #iexCarica { display:none; } }
</style>

<script>
(function(){
  var N=5, cur=0, ok=[false,false,false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexCaricadots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexCarica .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexCaricarow'+i).style.display='block';
    cur=i;
    document.getElementById('iexCaricaprev').disabled=(i===0);
    document.getElementById('iexCaricanext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexCaricadots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexCaricanav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

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

  function parseInt2(raw){
    var s = raw.trim().replace(',', '.').replace(/e$/i,'').trim();
    return parseFloat(s);
  }

  function numCheck(rowIdx, inputId, fbId, target, msgOk, solId){
    var v = parseInt2(document.getElementById(inputId).value);
    var fb = document.getElementById(fbId);
    var vb = document.querySelector('#'+inputId).closest('.iex-ir').querySelector('.iex-vbtn');
    if(isNaN(v)){ fb.className='iex-fb err'; fb.textContent='Inserisci un numero.'; return; }
    if(Math.round(v) === target){
      ok[rowIdx]=true; fb.className='iex-fb ok';
      fb.innerHTML='&#10003; Esatto! '+msgOk+' <button class="iex-nextbtn" onclick="iexCaricanav(1)">Passo successivo &rarr;</button>';
      shootConf(vb); updateDots();
    } else {
      fb.className='iex-fb err';
      var extra = solId ? ' Oppure <button class="iex-lbtn" onclick="showSol(\''+solId+'\')">vedi la soluzione</button>.' : '';
      fb.innerHTML='Non è esatto. Riprova.'+extra;
    }
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
  }

  window.iexCaricacheck0 = function(){
    numCheck(0, 'iexCaricam0', 'iexCaricafb0', -3, 'Ci sono 2 protoni e 5 elettroni: $Q = (2-5)e = -3e$.', null);
  };
  window.iexCaricacheck1 = function(){
    numCheck(1, 'iexCaricam1', 'iexCaricafb1', 4, '$Q = (n_p-n_e)\\cdot e = (15-11)\\cdot e = 4e$.', null);
  };
  window.iexCaricacheck2 = function(){
    numCheck(2, 'iexCaricam2', 'iexCaricafb2', 25, 'Con $n=n_p-n_e=Q/e=15$ e $n_p=40$, si ottiene $n_e = 40-15 = 25$.', 'iexCaricasol2');
  };
  window.iexCaricacheck4 = function(){
    numCheck(4, 'iexCaricam4', 'iexCaricafb4', -9, '$n_p-n_e = Q/e = -9$.', 'iexCaricasol4');
  };

  (function initChoices3(){
    var btns = document.querySelectorAll('#iexCaricachoices3 .iex-choice-btn');
    var fb = document.getElementById('iexCaricafb3');
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        if(btn.disabled) return;
        btns.forEach(function(b){ b.disabled = true; });
        var correct = btn.dataset.v === 'c';
        fb.style.display = 'block';
        if(correct){
          btn.className = 'iex-choice-btn correct';
          ok[3] = true; fb.className = 'iex-fb ok';
          fb.innerHTML = '&#10003; Esatto! La carica di un corpo è sempre un multiplo intero di $e$: $75{,}5\\,e$ non è un intero, quindi non può esistere in natura. <button class="iex-nextbtn" onclick="iexCaricanav(1)">Passo successivo &rarr;</button>';
          shootConf(btn); updateDots();
        } else {
          btn.className = 'iex-choice-btn wrong';
          var correctBtn = document.querySelector('#iexCaricachoices3 .iex-choice-btn[data-v="c"]');
          correctBtn.className = 'iex-choice-btn correct';
          fb.className = 'iex-fb err';
          fb.innerHTML = 'Non è corretto: la carica di un corpo è sempre un multiplo <strong>intero</strong> della carica elementare $e$ (quantizzazione della carica). $75{,}5$ non è un numero intero, quindi quella misura non può essere corretta.';
        }
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
      });
    });
  })();
})();
</script>

### Conduttori e Isolanti
{% include margin-note.html testo="La differenza tra i conduttori e gli isolanti" %}
Quando molti atomi si uniscono per formare un corpo, le cariche si comportano in modo molto diverso a seconda della natura degli atomi in questione. In alcuni materiali, gli elettroni più esterni si staccano dai propri atomi e vagano liberamente all'interno del materiale, passando in continuazione da un atomo all'altro. In altri, invece, ogni elettrone resta legato per sempre al proprio nucleo. Chiamiamo <definizione>conduttori</definizione> i materiali del primo tipo (tipicamente i metalli) e <definizione>isolanti</definizione> quelli del secondo (legno, vetro, plastica...).
{% include margin-note-end.html %}

{% include margin-note.html testo="Esempi di conduttori e isolanti" %}
I metalli sono in genere ottimi conduttori (argento, rame e oro fra i migliori); vetro, gomma, plastica e aria secca sono invece buoni isolanti. È per questo che i fili elettrici sono fatti di rame e rivestiti di plastica.
{% include margin-note-end.html %}

Osserva l'animazione seguente: nel conduttore (ferro) gli elettroni migrano continuamente da un nucleo all'altro; nell'isolante (legno), invece, ogni elettrone orbita sempre e soltanto attorno al proprio nucleo.

<div class="ci-widget">
<svg viewBox="0 0 440 215" style="max-width:420px;width:100%;height:auto;display:block;margin:0 auto;" role="img" aria-label="Confronto animato: in un reticolo di atomi, nel conduttore gli elettroni migrano da un nucleo all'altro, nell'isolante ogni elettrone orbita sempre lo stesso nucleo">
<defs>
  <linearGradient id="ciMetalG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#94a3b8"/></linearGradient>
  <linearGradient id="ciWoodG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff7ed"/><stop offset="55%" stop-color="#fed7aa"/><stop offset="100%" stop-color="#fb923c"/></linearGradient>
  <radialGradient id="ciElecG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fafafa"/><stop offset="55%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#d1d5db"/></radialGradient>
  <radialGradient id="ciCoreG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fff1f2"/><stop offset="55%" stop-color="#fecdd3"/><stop offset="100%" stop-color="#fda4af"/></radialGradient>
</defs>

<rect x="15" y="20" width="150" height="140" rx="14" fill="url(#ciMetalG)" stroke="#94a3b8" stroke-width="1.5"/>
<g transform="translate(45,45)">
  <g transform="translate(0,0)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g transform="translate(45,0)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g transform="translate(90,0)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g transform="translate(0,45)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g transform="translate(45,45)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g transform="translate(90,45)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g transform="translate(0,90)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g transform="translate(45,90)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g transform="translate(90,90)"><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text></g>
  <g class="cnd-e cnd-e0"><circle r="6" fill="url(#ciElecG)"/><text text-anchor="middle" y="-9" font-size="9" font-weight="700" fill="#4b5563">–</text></g>
  <g class="cnd-e cnd-e1"><circle r="6" fill="url(#ciElecG)"/><text text-anchor="middle" y="-9" font-size="9" font-weight="700" fill="#4b5563">–</text></g>
  <g class="cnd-e cnd-e2"><circle r="6" fill="url(#ciElecG)"/><text text-anchor="middle" y="-9" font-size="9" font-weight="700" fill="#4b5563">–</text></g>
  <g class="cnd-e cnd-e3"><circle r="6" fill="url(#ciElecG)"/><text text-anchor="middle" y="-9" font-size="9" font-weight="700" fill="#4b5563">–</text></g>
  <g class="cnd-e cnd-e4"><circle r="6" fill="url(#ciElecG)"/><text text-anchor="middle" y="-9" font-size="9" font-weight="700" fill="#4b5563">–</text></g>
  <g class="cnd-e cnd-e5"><circle r="6" fill="url(#ciElecG)"/><text text-anchor="middle" y="-9" font-size="9" font-weight="700" fill="#4b5563">–</text></g>
</g>
<text x="90" y="178" text-anchor="middle" font-size="13" fill="#374151">Ferro (conduttore)</text>
<text x="90" y="196" text-anchor="middle" font-size="11" font-style="italic" fill="#6b7280">gli elettroni migrano fra i nuclei</text>

<rect x="245" y="20" width="150" height="140" rx="14" fill="url(#ciWoodG)" stroke="#c2733a" stroke-width="1.5"/>
<g transform="translate(275,45)">
  <g class="ins-atom"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-a"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
  <g class="ins-atom" transform="translate(45,0)"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-b"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
  <g class="ins-atom" transform="translate(90,0)"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-c"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
  <g class="ins-atom" transform="translate(0,45)"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-d"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
  <g class="ins-atom" transform="translate(45,45)"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-e"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
  <g class="ins-atom" transform="translate(90,45)"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-f"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
  <g class="ins-atom" transform="translate(0,90)"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-g"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
  <g class="ins-atom" transform="translate(45,90)"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-h"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
  <g class="ins-atom" transform="translate(90,90)"><circle r="14" fill="none" stroke="#c2733a" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/><circle r="8" fill="url(#ciCoreG)"/><text text-anchor="middle" dy="3" font-size="9" font-weight="700" fill="#9f1239">+</text><g class="ins-orbit ins-orbit-i"><circle cx="14" cy="0" r="6" fill="url(#ciElecG)"/><text x="14" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="#4b5563">–</text></g></g>
</g>
<text x="320" y="178" text-anchor="middle" font-size="13" fill="#374151">Legno (isolante)</text>
<text x="320" y="196" text-anchor="middle" font-size="11" font-style="italic" fill="#6b7280">ogni elettrone orbita il proprio nucleo</text>
</svg>
</div>

<style>
.ci-widget { margin: 1.6rem auto; text-align: center; }
.cnd-e { animation-name: condHop; animation-duration: 13.5s; animation-timing-function: linear; animation-iteration-count: infinite; }
.cnd-e0 { animation-delay: 0s; }
.cnd-e1 { animation-delay: -2.25s; }
.cnd-e2 { animation-delay: -4.5s; }
.cnd-e3 { animation-delay: -6.75s; }
.cnd-e4 { animation-delay: -9s; }
.cnd-e5 { animation-delay: -11.25s; }
@keyframes condHop {
  0%       { transform: translate(0,0); }
  11.111%  { transform: translate(45px,0); }
  22.222%  { transform: translate(90px,0); }
  33.333%  { transform: translate(90px,45px); }
  44.444%  { transform: translate(45px,45px); }
  55.556%  { transform: translate(0,45px); }
  66.667%  { transform: translate(0,90px); }
  77.778%  { transform: translate(45px,90px); }
  88.889%  { transform: translate(90px,90px); }
  100%     { transform: translate(0,0); }
}

.ins-orbit { animation-timing-function: linear; animation-iteration-count: infinite; transform-origin: 0 0; }
.ins-orbit-a { animation-name: ciSpin; animation-duration: 2.2s; }
.ins-orbit-b { animation-name: ciSpinRev; animation-duration: 2.6s; }
.ins-orbit-c { animation-name: ciSpin; animation-duration: 3s; }
.ins-orbit-d { animation-name: ciSpinRev; animation-duration: 2.4s; }
.ins-orbit-e { animation-name: ciSpin; animation-duration: 2.8s; }
.ins-orbit-f { animation-name: ciSpinRev; animation-duration: 3.2s; }
.ins-orbit-g { animation-name: ciSpin; animation-duration: 2.5s; }
.ins-orbit-h { animation-name: ciSpinRev; animation-duration: 2.9s; }
.ins-orbit-i { animation-name: ciSpin; animation-duration: 3.3s; }
@keyframes ciSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes ciSpinRev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

@media print { .ci-widget { display: none; } }
</style>

{% include box-imp.html titolo="Conduttori e Isolanti" %}
I conduttori sono quei materiali che presentano al loro interno cariche libere di muoversi. Gli isolanti sono quei materiali che non presentano cariche libere di muoversi.
{% include box-end.html %}

{% include margin-note.html testo="Il nostro corpo è un conduttore" %}
Il nostro corpo è un esempio di materiale conduttore, cioè le cariche possono fluire attraverso di noi. Questo è essenziale per il funzionamento del nostro organismo, ma ci espone al rischio delle correnti elettriche, che possono attraversarci provocandoci gravi danni.
{% include margin-note-end.html %}

{% include spoiler.html testo="Primo soccorso in caso di scarica elettrica" %}
Se assisti a un incidente di questo tipo:
- **Non toccare la persona a mani nude** se è ancora a contatto con la fonte elettrica: rischieresti di prendere la scossa anche tu.
- **Interrompi la corrente**, se possibile: stacca la spina o abbassa l'interruttore generale.
- Se non puoi interrompere la corrente, **allontana la persona usando un oggetto non conduttore e completamente asciutto** (legno, plastica, gomma) — mai con le mani, oggetti metallici o bagnati.
Dopodiché, quando l'assistito non è più attraversato da corrente elettrica,
- **Chiama subito il 112** (numero unico di emergenza).
- Controlla che la persona respiri; nel caso non respirasse si deve iniziare la rianimazione cardiopolmonare, cioè il massaggio cardiaco, possibilmente con una sequenza di 30 colpi al ritmo della canzone [Staying Alive](https://www.youtube.com/watch?v=I_izvAbhExY) alternati a due ventilazioni (respirazione bocca-bocca o bocca-naso).
- Copri eventuali ustioni con un panno pulito, o ancora meglio con uno strato di pellicola, senza applicare creme, ghiaccio o rimedi improvvisati.
- Anche se la persona sembra stare bene, va **sempre vista da un medico**: una scarica elettrica può causare danni interni (ad esempio al cuore) non immediatamente visibili.

Per approfondire, la Croce Rossa Italiana ha una pagina dedicata al primo soccorso in caso di ustioni (comprese quelle da elettricità): [Ustioni — Croce Rossa Italiana](https://cri.it/cosa-facciamo/salute/primo-soccorso/pillole-di-primo-soccorso/ustioni/).
{% include spoiler-end.html %}

{% include box-ex.html titolo="Verifica Subito!" %}
{% capture _qCond %}[
{"t":"I metalli sono generalmente buoni conduttori di elettricità.","ok":true,"s":"Vero: nei metalli molti elettroni sono liberi di muoversi da un atomo all'altro."},
{"t":"In un isolante gli elettroni sono liberi di spostarsi da un atomo all'altro.","ok":false,"s":"Falso: è il contrario — negli isolanti ogni elettrone resta legato per sempre al proprio nucleo."},
{"t":"Il nostro corpo si comporta come un conduttore.","ok":true,"s":"Vero, ed è per questo che le scariche elettriche sono pericolose: la corrente può attraversarci."},
{"t":"Vetro, gomma e plastica sono buoni conduttori.","ok":false,"s":"Falso: sono anzi tra i migliori isolanti."},
{"t":"I fili elettrici sono rivestiti di plastica perché la plastica conduce meglio del rame.","ok":false,"s":"Falso: la plastica è un isolante — serve a impedire che la corrente si disperda o dia la scossa a chi tocca il filo."},
{"t":"Se un materiale è isolante, le cariche al suo interno non sono libere di muoversi.","ok":true,"s":"Vero: è proprio questa la definizione di isolante."}
]{% endcapture %}
{% include quiz.html id="qgfCond" domande=_qCond label_si="Un esempio di buon conduttore" label_no="Un esempio di buon isolante" %}
{% include box-end.html %}

<div class="iex-widget" id="iexCond">
<p class="iex-lbl">Verifica Subito!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexCondprev" onclick="iexCondnav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexConddots"></div>
<button class="iex-navbtn" id="iexCondnext" onclick="iexCondnav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexCondrow0">
<p class="iex-qt">Perché i fili elettrici sono rivestiti di plastica?</p>
<div class="iex-choices" id="iexCondchoices0">
<button class="iex-choice-btn" data-v="a">Per renderli più leggeri</button>
<button class="iex-choice-btn" data-v="b">Perché la plastica è un isolante e impedisce alla carica di disperdersi (o di darci la scossa)</button>
<button class="iex-choice-btn" data-v="c">Per renderli conduttori migliori</button>
<button class="iex-choice-btn" data-v="d">Solo per estetica</button>
</div>
<div class="iex-fb" id="iexCondfb0"></div>
</div>

<div class="iex-q" id="iexCondrow1" style="display:none">
<p class="iex-qt">Se tocchi con le mani nude un oggetto metallico carico elettricamente, che cosa succede e perché?</p>
<div class="iex-choices" id="iexCondchoices1">
<button class="iex-choice-btn" data-v="a">Niente: il metallo è isolante e trattiene la carica</button>
<button class="iex-choice-btn" data-v="b">La carica passa attraverso il tuo corpo, perché anche tu sei un conduttore</button>
<button class="iex-choice-btn" data-v="c">La carica resta ferma nel metallo, perché sei un conduttore migliore del metallo</button>
<button class="iex-choice-btn" data-v="d">Il metallo si scarica solo se lo tocchi con un panno di lana</button>
</div>
<div class="iex-fb" id="iexCondfb1"></div>
</div>

</div>

<style>
@media print { #iexCond { display:none; } }
</style>

<script>
(function(){
  var N=2, cur=0, ok=[false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexConddots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexCond .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexCondrow'+i).style.display='block';
    cur=i;
    document.getElementById('iexCondprev').disabled=(i===0);
    document.getElementById('iexCondnext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexConddots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexCondnav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

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

  function wireChoices(rowIdx, choicesId, fbId, correctV, msgOk, msgErr){
    var btns = document.querySelectorAll('#'+choicesId+' .iex-choice-btn');
    var fb = document.getElementById(fbId);
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        if(btn.disabled) return;
        btns.forEach(function(b){ b.disabled = true; });
        var correct = btn.dataset.v === correctV;
        fb.style.display = 'block';
        if(correct){
          btn.className = 'iex-choice-btn correct';
          ok[rowIdx] = true; fb.className = 'iex-fb ok';
          fb.innerHTML = '&#10003; Esatto! '+msgOk+(rowIdx<N-1?' <button class="iex-nextbtn" onclick="iexCondnav(1)">Passo successivo &rarr;</button>':'');
          shootConf(btn); updateDots();
        } else {
          btn.className = 'iex-choice-btn wrong';
          var correctBtn = document.querySelector('#'+choicesId+' .iex-choice-btn[data-v="'+correctV+'"]');
          correctBtn.className = 'iex-choice-btn correct';
          fb.className = 'iex-fb err';
          fb.innerHTML = msgErr;
        }
      });
    });
  }

  wireChoices(0, 'iexCondchoices0', 'iexCondfb0', 'b',
    'La plastica è un isolante: impedisce alle cariche di fluire fuori dal filo (e a noi di prendere la scossa toccandolo).',
    'Non è corretto: il motivo è che la plastica è un isolante, e impedisce alla carica di disperdersi o di darci la scossa.');

  wireChoices(1, 'iexCondchoices1', 'iexCondfb1', 'b',
    'Anche il corpo umano è un conduttore: la carica può quindi fluire liberamente attraverso di te.',
    'Non è corretto: sia il metallo sia il tuo corpo sono conduttori, quindi la carica passa liberamente attraverso di te.');
})();
</script>

## L'Elettrizzazione

Ci sono diversi modi in cui un corpo può **cambiare** la sua carica. Questo consiste sostanzialmente nel trasferimento di particelle cariche da un corpo a un altro ed è un fenomeno che si chiama <definizione>elettrizzazione</definizione>.

È essenziale osservare che, per quanto la carica di un corpo cambi, <u>la carica dell'Universo rimane invariata</u>. Vale a dire, se un corpo acquista cariche negative significa che un altro corpo ne ha acquistate di positive.

{% include box-imp.html titolo="Conservazione della carica" %}
La carica non si crea e non si distrugge: semplicemente, può passare da un corpo a un altro.
{% include box-end.html %}

{% include spoiler.html titolo="Qual è la carica dell'Universo?" %}
Non lo sappiamo con certezza, ma è probabile che l'Universo sia sostanzialmente neutro elettricamente. Infatti, se ci fosse un eccesso di carica positiva o negativa, si dovrebbero osservare delle interazioni tra pianeti o galassie, che invece non osserviamo. A dominare la dinamica di questi corpi sembrerebbe essere solo la gravità. 
{% include spoiler-end.html %}

### Elettrizzazione per strofinio

Il fenomeno che abbiamo osservato all'inizio del capitolo, per cui un palloncino strofinato su un maglione di lana diventa elettricamente attivo, è noto come <definizione>elettrizzazione per strofinio</definizione>.
{% include box-imp.html titolo="Elettrizzazione per strofinio" %}
L'elettrizzazione per strofinio è il fenomeno per cui, strofinando un corpo inizialmente neutro su un altro corpo, si osserva passaggio di carica dal primo al secondo, per cui alla fine entrambi i corpi risultano carichi della stessa quantità ma di segno opposto.
{% include box-end.html %}
Alcuni materiali, come il vetro, quando vengono strofinati, **perdono** elettroni (li cedono al panno di lana), caricandosi positivamente. Altri materiali, invece, come la plastica, **acquisiscono** elettroni quando vengono strofinati, e perciò si caricano negativamente.

Il fenomeno è molto facile da osservare negli isolanti (un palloncino, una penna di plastica, una bacchetta di vetro, ecc.) ma è più difficile con i conduttori. Il motivo è che quando teniamo in mano un materiale conduttore e lo strofiniamo su un panno di lana, la carica acquisita dal conduttore si scarica molto velocemente attraverso il nostro corpo fino alla Terra, che rappresenta un enorme bacino di carica.  
Per elettrizzare con un panno di lana un metallo dobbiamo quindi indossare un guanto di gomma, di modo da impedire alla carica di passare attraverso di noi.

### Elettrizzazione per contatto (per conduttori)

Un conduttore può essere elettrizzato semplicemente venendo messo a contatto con un corpo carico. Questo processo si chiama <definizione>elettrizzazione per contatto</definizione>. Funziona come nella seguente animazione.

<div class="cw-widget" id="cwWidget">
<svg viewBox="0 0 400 170" style="max-width:380px;width:100%;height:auto;display:block;margin:0 auto;" role="img" aria-label="Animazione: elettrizzazione per contatto fra due sfere conduttrici">
<defs>
  <radialGradient id="cwMetalG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#94a3b8"/></radialGradient>
</defs>
<g class="cw-sphere cw-sphereA" transform="translate(110,85)">
  <circle r="34" fill="url(#cwMetalG)" stroke="#94a3b8" stroke-width="1.5"/>
  <text class="cw-sym" x="-12" y="-8" text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a">–</text>
  <text class="cw-sym" x="10" y="-11" text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a">–</text>
  <text class="cw-sym" x="-14" y="12" text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a">–</text>
  <text class="cw-sym" x="10" y="14" text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a">–</text>
  <text class="cw-sym cw-transferable" x="0" y="-22" text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a">–</text>
  <text class="cw-sym cw-transferable" x="0" y="24" text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a">–</text>
</g>
<g class="cw-sphere cw-sphereB" transform="translate(290,85)">
  <circle r="34" fill="url(#cwMetalG)" stroke="#94a3b8" stroke-width="1.5"/>
  <text class="cw-sym cw-transferred" x="0" y="-22" text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a">–</text>
  <text class="cw-sym cw-transferred" x="0" y="24" text-anchor="middle" font-size="17" font-weight="700" fill="#1e3a8a">–</text>
</g>
</svg>
<div class="cw-actions">
  <button class="cw-btn cw-play">Avvicina i corpi ▶</button>
  <button class="cw-btn cw-reset" style="display:none">↺ Ricomincia</button>
</div>
<p class="cw-caption"></p>
</div>

<style>
.cw-widget { margin: 1.6rem auto; max-width: 380px; text-align: center; }
.cw-sphere { transition: transform 1s ease; }
.cw-touching .cw-sphereA { transform: translate(166px,85px); }
.cw-touching .cw-sphereB { transform: translate(234px,85px); }
.cw-sym { transition: opacity .5s ease; opacity: 1; }
.cw-transferred { opacity: 0; }
.cw-charge-moved .cw-transferable { opacity: 0; }
.cw-charge-moved .cw-transferred { opacity: 1; }
.cw-actions { margin-top: .6rem; }
.cw-btn { padding: .5rem 1rem; border-radius: 6px; cursor: pointer; border: 1px solid #94a3b8; background: #f1f5f9; font-size: .88rem; }
.cw-btn:hover { background: #e2e8f0; }
.cw-caption { min-height: 1.4em; font-size: .85rem; font-style: italic; color: #6b7280; margin-top: .5rem; }
@media print { .cw-widget { display: none; } }
</style>

<script>
(function(){
  var root = document.getElementById('cwWidget');
  if(!root) return;
  var playBtn = root.querySelector('.cw-play');
  var resetBtn = root.querySelector('.cw-reset');
  var caption = root.querySelector('.cw-caption');
  playBtn.addEventListener('click', function(){
    playBtn.disabled = true;
    root.classList.add('cw-touching');
    setTimeout(function(){
      root.classList.add('cw-charge-moved');
      caption.textContent = 'Le cariche si ridistribuiscono al contatto…';
    }, 1000);
    setTimeout(function(){
      root.classList.remove('cw-touching');
    }, 1700);
    setTimeout(function(){
      caption.textContent = 'Ora entrambi i corpi sono carichi negativamente.';
      playBtn.style.display = 'none';
      resetBtn.style.display = 'inline-block';
    }, 2700);
  });
  resetBtn.addEventListener('click', function(){
    root.classList.remove('cw-touching','cw-charge-moved');
    caption.textContent = '';
    playBtn.style.display = 'inline-block'; playBtn.disabled = false;
    resetBtn.style.display = 'none';
  });
})();
</script>

È importante notare che, poiché il fenomeno coinvolge uno spostamento di carica interno ai materiali, <u>è necessario che entrambi i materiali che entrano a contatto siano conduttori</u>.

Inoltre, quanta carica finisce su ciascun corpo dipende dalla sua forma e dimensione: non è detto che si dividano esattamente a metà. Ciò che è garantito è che, alla fine, **entrambi i corpi restano carichi con lo stesso segno**.

### La Polarizzazione e l'Elettrizzazione per induzione

C'è però un modo ancora più sorprendente per cambiare la carica di un conduttore: senza nemmeno sfiorarlo. Se avviciniamo un corpo carico (isolante o conduttore) a un conduttore neutro, senza farlo toccare, guara che cosa succede alle cariche:

<div class="ind-widget" id="indWidget">
<svg viewBox="0 0 420 190" style="max-width:400px;width:100%;height:auto;display:block;margin:0 auto;" role="img" aria-label="Animazione: elettrizzazione per induzione, un bastoncino carico polarizza un conduttore vicino">
<defs>
  <linearGradient id="indRodG" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
  <radialGradient id="indMetalG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#94a3b8"/></radialGradient>
</defs>

<g id="indRod" transform="translate(45,95)">
  <rect x="0" y="-45" width="26" height="90" rx="8" fill="url(#indRodG)"/>
  <text x="13" y="-55" text-anchor="middle" font-size="12" fill="#1e3a8a" font-weight="700">bastoncino (−)</text>
  <text x="13" y="-18" text-anchor="middle" font-size="14" font-weight="700" fill="#eff6ff">–</text>
  <text x="13" y="8" text-anchor="middle" font-size="14" font-weight="700" fill="#eff6ff">–</text>
  <text x="13" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="#eff6ff">–</text>
</g>

<g transform="translate(300,95)">
  <circle r="40" fill="url(#indMetalG)" stroke="#94a3b8" stroke-width="1.5"/>
  <text class="ind-sym ind-p1" x="20" y="4" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>
  <text class="ind-sym ind-n1" x="10" y="21.3" text-anchor="middle" font-size="16" font-weight="700" fill="#1e3a8a">–</text>
  <text class="ind-sym ind-p2" x="-10" y="21.3" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>
  <text class="ind-sym ind-n2" x="-20" y="4" text-anchor="middle" font-size="16" font-weight="700" fill="#1e3a8a">–</text>
  <text class="ind-sym ind-p3" x="-10" y="-13.3" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>
  <text class="ind-sym ind-n3" x="10" y="-13.3" text-anchor="middle" font-size="16" font-weight="700" fill="#1e3a8a">–</text>
</g>
</svg>
<button class="ind-btn" id="indBtn">Avvicina il bastoncino ▶</button>
<p class="ind-caption">Il conduttore è neutro: cariche positive e negative sono distribuite uniformemente.</p>
</div>

<style>
.ind-widget { margin: 1.6rem auto; max-width: 400px; text-align: center; }
#indRod, .ind-sym { transition: transform .9s ease; }
.ind-active #indRod { transform: translate(209px,95px); }
.ind-active .ind-p1 { transform: translate(-46px,-14px); }
.ind-active .ind-p2 { transform: translate(-16px,-3.3px); }
.ind-active .ind-p3 { transform: translate(-22px,17.3px); }
.ind-active .ind-n1 { transform: translate(16px,-31.3px); }
.ind-active .ind-n2 { transform: translate(46px,14px); }
.ind-active .ind-n3 { transform: translate(22px,17.3px); }
.ind-btn { padding: .5rem 1rem; border-radius: 6px; cursor: pointer; border: 1px solid #94a3b8; background: #f1f5f9; font-size: .88rem; margin-top: .4rem; }
.ind-btn:hover { background: #e2e8f0; }
.ind-caption { min-height: 2.4em; font-size: .85rem; font-style: italic; color: #6b7280; margin-top: .5rem; max-width: 380px; margin-left: auto; margin-right: auto; }
@media print { .ind-widget { display: none; } }
</style>

<script>
(function(){
  var root = document.getElementById('indWidget');
  if(!root) return;
  var btn = root.querySelector('.ind-btn');
  var caption = root.querySelector('.ind-caption');
  var active = false;
  btn.addEventListener('click', function(){
    active = !active;
    root.classList.toggle('ind-active', active);
    if(active){
      btn.textContent = '◀ Allontana il bastoncino';
      caption.textContent = 'Il bastoncino carico negativamente respinge le cariche negative e attira quelle positive: il conduttore si polarizza, ma resta neutro nel complesso.';
    } else {
      btn.textContent = 'Avvicina il bastoncino ▶';
      caption.textContent = 'Il conduttore è neutro: cariche positive e negative sono distribuite uniformemente.';
    }
  });
})();
</script>

Si vede che <u>le cariche di segno opposto al corpo ne sono attratte</u>, mentre <u>quelle di segno uguale ne sono respinte</u>. Pertanto, quelle di segno opposto si avvicinano e le altre si allontanano, <u>creando due zone separate di carica</u>. Questo processo è chiamato <definizione>polarizzazione</definizione>.

{% include box-imp.html titolo="Polarizzazione" %}
La polarizzazione è la ridistribuzione delle cariche all'interno di un conduttore come conseguenza della presenza di un corpo carico esterno.
{% include box-end.html %}

È importante osservare che <u>il conduttore polarizzato resta neutro nel complesso</u>, cioè la sua carica globale è nulla. Infatti, a differenza del contatto, qui <u markdown="span">**nessuna carica passa da un corpo all'altro**</u>, e <u>la polarizzazione scompare non appena il corpo carico viene allontanato</u>. Per renderla permanente serve un passaggio in più, che puoi vedere nella seguente animazione.

<div class="indg-widget indg-stage-0" id="indgWidget">
<svg viewBox="0 0 420 230" style="max-width:400px;width:100%;height:auto;display:block;margin:0 auto;" role="img" aria-label="Animazione: come rendere permanente la carica indotta per induzione, collegando e scollegando la messa a terra">
<defs>
  <linearGradient id="indgRodG" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
  <radialGradient id="indgMetalG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#f8fafc"/><stop offset="55%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#94a3b8"/></radialGradient>
</defs>

<g id="indgRod" transform="translate(45,95)">
  <rect x="0" y="-45" width="26" height="90" rx="8" fill="url(#indgRodG)"/>
  <text x="13" y="-55" text-anchor="middle" font-size="12" fill="#1e3a8a" font-weight="700">bastoncino (−)</text>
  <text x="13" y="-18" text-anchor="middle" font-size="14" font-weight="700" fill="#eff6ff">–</text>
  <text x="13" y="8" text-anchor="middle" font-size="14" font-weight="700" fill="#eff6ff">–</text>
  <text x="13" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="#eff6ff">–</text>
</g>

<g transform="translate(300,95)">
  <circle r="40" fill="url(#indgMetalG)" stroke="#94a3b8" stroke-width="1.5"/>
  <text class="indg-sym indg-p1" x="20" y="4" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>
  <text class="indg-sym indg-n1" x="10" y="21.3" text-anchor="middle" font-size="16" font-weight="700" fill="#1e3a8a">–</text>
  <text class="indg-sym indg-p2" x="-10" y="21.3" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>
  <text class="indg-sym indg-n2" x="-20" y="4" text-anchor="middle" font-size="16" font-weight="700" fill="#1e3a8a">–</text>
  <text class="indg-sym indg-p3" x="-10" y="-13.3" text-anchor="middle" font-size="16" font-weight="700" fill="#9f1239">+</text>
  <text class="indg-sym indg-n3" x="10" y="-13.3" text-anchor="middle" font-size="16" font-weight="700" fill="#1e3a8a">–</text>
</g>

<g class="indg-ground" transform="translate(300,135)">
  <line class="indg-wire" x1="0" y1="0" x2="0" y2="52"/>
  <circle class="indg-plug" cx="0" cy="0" r="3.5"/>
  <g transform="translate(0,52)">
    <line class="indg-gline" x1="-17" y1="0" x2="17" y2="0"/>
    <line class="indg-gline" x1="-10" y1="7" x2="10" y2="7"/>
    <line class="indg-gline" x1="-4" y1="14" x2="4" y2="14"/>
  </g>
  <text x="24" y="60" font-size="11" fill="#6b7280" text-anchor="start">terra</text>
</g>
</svg>
<button class="indg-btn" id="indgBtn">Avvicina il bastoncino ▶</button>
<p class="indg-caption">Il conduttore è neutro: cariche positive e negative sono distribuite uniformemente.</p>
</div>

<style>
.indg-widget { margin: 1.6rem auto; max-width: 400px; text-align: center; }
#indgRod, .indg-sym { transition: transform .9s ease, opacity .7s ease; }
.indg-wire, .indg-gline { stroke:#94a3b8; stroke-width:3; stroke-dasharray:4 4; opacity:.55; transition: all .5s ease; }
.indg-plug { fill:#94a3b8; transition: fill .5s ease; }
.indg-stage-2 .indg-wire, .indg-stage-2 .indg-gline { stroke:#16a34a; stroke-dasharray:none; opacity:1; }
.indg-stage-2 .indg-plug { fill:#16a34a; }

.indg-stage-1 #indgRod, .indg-stage-2 #indgRod, .indg-stage-3 #indgRod { transform: translate(209px,95px); }
.indg-stage-0 #indgRod, .indg-stage-4 #indgRod { transform: translate(45px,95px); }

.indg-stage-1 .indg-p1, .indg-stage-2 .indg-p1, .indg-stage-3 .indg-p1 { transform: translate(-46px,-14px); }
.indg-stage-1 .indg-p2, .indg-stage-2 .indg-p2, .indg-stage-3 .indg-p2 { transform: translate(-16px,-3.3px); }
.indg-stage-1 .indg-p3, .indg-stage-2 .indg-p3, .indg-stage-3 .indg-p3 { transform: translate(-22px,17.3px); }
.indg-stage-1 .indg-n1 { transform: translate(16px,-31.3px); }
.indg-stage-1 .indg-n2 { transform: translate(46px,14px); }
.indg-stage-1 .indg-n3 { transform: translate(22px,17.3px); }

.indg-stage-2 .indg-n1, .indg-stage-3 .indg-n1, .indg-stage-4 .indg-n1 { transform: translate(10px,45px); opacity:0; }
.indg-stage-2 .indg-n2, .indg-stage-3 .indg-n2, .indg-stage-4 .indg-n2 { transform: translate(35px,55px); opacity:0; }
.indg-stage-2 .indg-n3, .indg-stage-3 .indg-n3, .indg-stage-4 .indg-n3 { transform: translate(18px,60px); opacity:0; }

.indg-stage-4 .indg-p1 { transform: translate(-20px,-27px); }
.indg-stage-4 .indg-p2 { transform: translate(-10px,-9.8px); }
.indg-stage-4 .indg-p3 { transform: translate(30px,24.8px); }

.indg-btn { padding: .5rem 1rem; border-radius: 6px; cursor: pointer; border: 1px solid #94a3b8; background: #f1f5f9; font-size: .88rem; margin-top: .4rem; }
.indg-btn:hover { background: #e2e8f0; }
.indg-caption { min-height: 3em; font-size: .85rem; font-style: italic; color: #6b7280; margin-top: .5rem; max-width: 380px; margin-left: auto; margin-right: auto; }
@media print { .indg-widget { display: none; } }
</style>

<script>
(function(){
  var root = document.getElementById('indgWidget');
  if(!root) return;
  var btn = root.querySelector('.indg-btn');
  var caption = root.querySelector('.indg-caption');
  var stage = 0;
  var STAGES = [
    { label: 'Avvicina il bastoncino ▶',
      caption: 'Il conduttore è neutro: cariche positive e negative sono distribuite uniformemente.' },
    { label: 'Collega la messa a terra ▶',
      caption: 'Il bastoncino carico negativamente polarizza il conduttore: le cariche positive si avvicinano, le negative si allontanano. Il conduttore resta comunque neutro nel complesso.' },
    { label: 'Scollega la messa a terra ▶',
      caption: 'Collegando un filo a terra, le cariche negative — respinte dal bastoncino — fluiscono via: il conduttore comincia a perdere elettroni.' },
    { label: 'Allontana il bastoncino ▶',
      caption: 'Scollegata la terra mentre il bastoncino è ancora vicino, gli elettroni persi non possono più tornare indietro: il conduttore ha ora un eccesso permanente di carica positiva.' },
    { label: '↺ Ricomincia da capo',
      caption: 'Allontanato il bastoncino, le cariche positive rimaste si distribuiscono uniformemente su tutto il conduttore: è rimasto carico positivamente, in modo permanente!' }
  ];
  function render(){
    root.className = 'indg-widget indg-stage-' + stage;
    btn.textContent = STAGES[stage].label;
    caption.textContent = STAGES[stage].caption;
  }
  btn.addEventListener('click', function(){
    stage = (stage + 1) % STAGES.length;
    render();
  });
  render();
})();
</script>

Osserviamo che se, mentre il corpo carico resta vicino, tocchiamo per un istante il conduttore con un filo collegato a terra, alcuni elettroni fluiscono verso terra (mentre i protoni rimangono fermi, come al solito). Se poi stacchiamo il collegamento a terra *prima* di allontanare il corpo carico, il conduttore resta con una carica netta permanente — di segno **positivo**. Questo fenomeno consiste nell'<definizione>elettrizzazione per induzione</definizione>.

{% include box-imp.html titolo="Elettrizzazione per induzione" %}
L'elettrizzazione per induzione è il fenomeno per cui, collegando a terra un corpo polarizzato, parte dei suoi elettroni si disperdono nel terreno, lasciando quindi il corpo carico positivamente.
{% include box-end.html %}



### Come misurare la carica: l'elettroscopio a foglie

Ogni grandezza fisica deve essere misurabile, e quindi deve esistere (almeno idealmente) uno strumento per misurarla. Per misurare la carica elettrica, il primo strumento che si utilizzò fu un <definizione>elettroscopio a foglie</definizione>: uno strumento formato da un'asta conduttrice che attraversa un tappo isolante, terminando in alto con una sferetta metallica e, in basso, con due sottilissime foglioline metalliche, racchiuse in un contenitore di vetro per proteggerle dalle correnti d'aria.

<div class="fig-row">
{% include figura.html id="elettroscopio-neutro"
   src="/corsi/immagini/elettroscopio_a_foglie.png"
   didascalia="Elettroscopio scarico: le due foglioline, neutre, restano chiuse."
   larghezza="240px" %}
{% include figura.html id="elettroscopio-attivo"
   src="/corsi/immagini/elettroscopio_a_foglie_attivo.png"
   didascalia="Elettroscopio carico: le foglioline, cariche dello stesso segno, si respingono e si aprono."
   larghezza="240px" %}
</div>

Finché lo strumento è scarico, le due foglioline restano chiuse. Se un corpo carico tocca la sferetta, parte della sua carica si trasferisce lungo l'asta conduttrice fino alle foglioline, che si caricano dello stesso segno e, respingendosi a vicenda, si aprono a ventaglio.

Sorprendentemente, l'elettroscopio funziona anche se il corpo carico si limita ad **avvicinarsi** alla sferetta, senza toccarla: come abbiamo appena visto, basta che le cariche libere dell'asta si ridistribuiscano per induzione, concentrando carica dello stesso segno sulle foglioline. In questo caso, però, le foglioline si richiudono non appena il corpo viene allontanato.

Più carica è presente, più le foglioline si respingono e più si allontanano tra loro: l'angolo di apertura è quindi legato alla quantità di carica. 


Prova tu stesso: trascina uno strumento dal menu fino all'elettroscopio e osserva le foglioline.

<div id="eosx1" class="eosx-widget">

  <div class="eosx-head">
    <span class="eosx-badge">Abraham Bennet · 1786</span>
    <h4 class="eosx-title">L'Elettroscopio a Foglie</h4>
    <p class="eosx-sub">Trascina uno strumento dal menu fino alla sferetta dell'elettroscopio e osserva le foglioline.</p>
  </div>

  <div class="eosx-body">
    <div class="eosx-menu">
      <div class="eosx-tool" data-tool="ballplus" title="Sfera carica positivamente">
        <span class="eosx-tool-icon eosx-icon-ballplus"></span>
        <span class="eosx-tool-label">Sfera +</span>
      </div>
      <div class="eosx-tool" data-tool="ballminus" title="Sfera carica negativamente">
        <span class="eosx-tool-icon eosx-icon-ballminus"></span>
        <span class="eosx-tool-label">Sfera −</span>
      </div>
      <div class="eosx-tool" data-tool="rodglass" title="Bacchetta di vetro">
        <span class="eosx-tool-icon eosx-icon-rodglass"></span>
        <span class="eosx-tool-label">Vetro<span class="eosx-tool-badge" data-badge="rodglass"></span></span>
      </div>
      <div class="eosx-tool" data-tool="rodplastic" title="Bacchetta di plastica">
        <span class="eosx-tool-icon eosx-icon-rodplastic"></span>
        <span class="eosx-tool-label">Plastica<span class="eosx-tool-badge" data-badge="rodplastic"></span></span>
      </div>
      <div class="eosx-tool" data-tool="finger" title="Dito, per scaricare">
        <span class="eosx-tool-icon eosx-icon-finger">☝</span>
        <span class="eosx-tool-label">Dito</span>
      </div>
    </div>

    <div class="eosx-canvas-wrap">
      <canvas class="eosx-app" width="340" height="250"></canvas>
    </div>
  </div>

  <p class="eosx-meter">Elettroscopio: <span class="eosx-state">neutro</span></p>
  <p class="eosx-caption">Trascina una sfera o una bacchetta (prima strofinala sulla lana) fino alla sferetta; trascina il dito per scaricare.</p>

  <div class="eosx-actions-row">
    <button class="eosx-btn-rev eosx-reset">↺ Ricomincia</button>
  </div>

  <div class="eosx-legend">
    <div class="eosx-legend-item"><span class="eosx-legend-dot" style="background:#e8983a"></span> Protone (+)</div>
    <div class="eosx-legend-item"><span class="eosx-legend-dot" style="background:#c7ccd4"></span> Elettrone (−)</div>
    <div class="eosx-legend-item"><span class="eosx-legend-dot" style="background:#d8b26a"></span> Foglioline d'oro</div>
  </div>

</div>

<style>
.eosx-widget {
  --ex-bg: #0a0c10;
  --ex-surface: #10141c;
  --ex-copper: #b87333;
  --ex-copper-bright: #e8983a;
  --ex-amber: #ff9a00;
  --ex-text: #e8d5b0;
  --ex-text2: #9a8060;
  font-family: 'Crimson Text', Georgia, serif;
  background: var(--ex-bg);
  color: var(--ex-text);
  border-radius: 10px;
  padding: 1.2rem 1.1rem 1.1rem;
  margin: 1.8rem 0;
  max-width: 500px;
  margin-left: auto; margin-right: auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.35);
}
.eosx-widget::before {
  content:''; position:absolute; inset:0;
  background: radial-gradient(ellipse at 50% 0%, rgba(184,115,51,0.08) 0%, transparent 60%);
  pointer-events:none;
}
.eosx-widget * { box-sizing: border-box; }
.eosx-head { text-align:center; margin-bottom:.7rem; position:relative; z-index:1; }
.eosx-badge { font-size:.62rem; letter-spacing:.28em; color: var(--ex-copper); text-transform:uppercase; display:block; margin-bottom:.4rem; }
.eosx-title { font-family: Georgia, serif; font-size:1.15rem; font-weight:700; color: var(--ex-text); margin: 0 0 .35rem; }
.eosx-sub { font-size:.8rem; color: var(--ex-text2); font-style:italic; max-width:400px; margin:0 auto; line-height:1.45; }

.eosx-body { display:flex; gap:.6rem; justify-content:center; align-items:flex-start; position:relative; z-index:1; }
.eosx-menu { display:flex; flex-direction:column; gap:.35rem; flex:0 0 auto; width:96px; }
.eosx-tool {
  display:flex; align-items:center; gap:.4rem; padding:.35rem .4rem;
  border:1px solid rgba(184,115,51,.35); border-radius:6px; cursor:grab;
  background: rgba(184,115,51,.06); touch-action:none; user-select:none;
}
.eosx-tool:hover { border-color: var(--ex-copper); background: rgba(184,115,51,.14); }
.eosx-tool:active { cursor:grabbing; }
.eosx-tool-icon { width:16px; height:16px; flex:0 0 auto; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; }
.eosx-icon-ballplus { background: radial-gradient(circle at 35% 30%, #ffd9c2, #e8983a 60%, #9a4a12); }
.eosx-icon-ballminus { background: radial-gradient(circle at 35% 30%, #eef1f4, #c7ccd4 60%, #8b93a1); }
.eosx-icon-rodglass { border-radius:3px; background: linear-gradient(#eaf7ff,#bae6fd 55%,#6fc4e8); }
.eosx-icon-rodplastic { border-radius:3px; background: linear-gradient(#5b6472,#333b46 55%,#181d24); }
.eosx-icon-finger { background:none; font-size:14px; }
.eosx-tool-label { font-size:.7rem; color: var(--ex-text2); line-height:1.1; position:relative; }
.eosx-tool-badge { display:inline-block; margin-left:.25rem; font-weight:700; font-size:.72rem; }
.eosx-tool-badge.pos { color: var(--ex-copper-bright); }
.eosx-tool-badge.neg { color: #c7ccd4; }

.eosx-canvas-wrap {
  border:1px solid rgba(184,115,51,0.22); border-radius:6px;
  background: var(--ex-surface); overflow:hidden;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.5);
  width: 340px; max-width: 66vw; flex: 0 0 auto;
}
.eosx-canvas-wrap canvas { display:block; width:100%; height:auto; touch-action:none; }

.eosx-meter { text-align:center; font-size:.78rem; color: var(--ex-text2); margin: .7rem 0 0; position:relative; z-index:1; }
.eosx-state { color: var(--ex-amber); font-weight:600; }
.eosx-caption { min-height: 2.2em; font-size:.78rem; color: var(--ex-text2); font-style:italic; text-align:center; max-width:400px; margin:.5rem auto 0; position:relative; z-index:1; }

.eosx-actions-row { display:flex; justify-content:center; margin-top: .7rem; position:relative; z-index:1; }
.eosx-btn-rev {
  padding:.4rem .9rem; border-radius:3px; cursor:pointer;
  font-family: Georgia, serif; font-size:.8rem; letter-spacing:.03em;
  background:transparent; border:1px solid rgba(184,115,51,.4); color: var(--ex-text2);
  transition:all .2s;
}
.eosx-btn-rev:hover { border-color: var(--ex-copper); color: var(--ex-copper-bright); background: rgba(184,115,51,.12); }

.eosx-legend { display:flex; gap:.9rem; flex-wrap:wrap; justify-content:center; margin-top:.9rem; font-size:.7rem; color: var(--ex-text2); position:relative; z-index:1; }
.eosx-legend-item { display:flex; align-items:center; gap:.3rem; }
.eosx-legend-dot { width:8px; height:8px; border-radius:50%; display:inline-block; }

@media (max-width: 560px) {
  .eosx-body { flex-direction:column; align-items:center; }
  .eosx-menu { flex-direction:row; flex-wrap:wrap; width:100%; justify-content:center; }
  .eosx-tool { width:auto; }
}
@media print { .eosx-widget { display:none !important; } }
</style>

<script>
(function(){
  var root = document.getElementById('eosx1');
  if (!root) return;
  function $(s){ return root.querySelector(s); }

  var cv = $('.eosx-app'), ctx = cv.getContext('2d');
  var W = cv.width, H = cv.height;
  var stateEl = $('.eosx-state'), caption = $('.eosx-caption');

  // ─── geometria dell'elettroscopio ──────────────────────────────────────
  var CX = 110;
  var STOPPER_TOP = 34, STOPPER_BOT = 50, STOPPER_W = 30;
  var KNOB_R = 11, KNOB_Y = STOPPER_TOP - KNOB_R + 3; // la sfera "esce" appena dal tappo
  var JAR_TOP = 44, JAR_BOT = 192, JAR_L = 58, JAR_R = 162;
  var ROD_W = 8;
  var PIVOT_Y = 56, LEAF_LEN = 108;
  var MAX_ANGLE_PARTIAL = 15*Math.PI/180, MAX_ANGLE_FULL = 31*Math.PI/180;

  var WOOL_X = 270, WOOL_Y = 55, WOOL_R = 48;

  function lerp(a,b,t){ return a+(b-a)*t; }
  function clamp01(v){ return v<0?0:(v>1?1:v); }

  // ─── stato dell'elettroscopio ───────────────────────────────────────────
  // permanent=true appena un oggetto carico tocca la sferetta: resta tale
  // (eBias non torna più a 0 da solo) finché il dito non lo scarica.
  var eBias = 0, eBiasTarget = 0;
  var permanent = false, permSign = null;

  // ─── strumenti disponibili (sempre tutti presenti nel menu) ────────────
  var ROD_HALF = 65, TIP_R = 4, BALL_R = 13, FINGER_R = 8;
  var tools = {
    ballplus:   { type:'ball', sign:'+', r:BALL_R },
    ballminus:  { type:'ball', sign:'-', r:BALL_R },
    rodglass:   { type:'rod', material:'glass', charged:false, sign:null,
                  slots:[{n:1},{n:1},{n:1}] },
    rodplastic: { type:'rod', material:'plastic', charged:false, sign:null,
                  slots:[{n:1},{n:1},{n:1}] },
    finger:     { type:'finger', r:FINGER_R }
  };
  // la lana ha 3 "siti attivi" (che partecipano allo scambio con la bacchetta)
  // più alcuni atomi puramente decorativi, sempre neutri
  var woolSlots = [{n:1},{n:1},{n:1},{n:1},{n:1},{n:1},{n:1}];

  var drag = null; // { id, x, y } in coordinate canvas (x,y = posizione del puntatore)
  // una volta che l'oggetto trascinato ha toccato la sferetta durante QUESTO
  // trascinamento, il contatto resta valido anche se lo si allontana prima
  // di rilasciare il mouse: l'elettrizzazione per contatto è irreversibile
  // (a meno del dito) e non deve dipendere dal punto esatto del rilascio.
  // Le foglioline restano quindi spalancate per tutto il resto del
  // trascinamento, non solo dopo il rilascio.
  var dragTouchedKnob = false;
  var dragTouchedSign = null; // segno dell'oggetto carico che ha toccato in questo trascinamento

  // ─── elettroni mobili del conduttore: vivono SEMPRE su un percorso che ──
  // segue il metallo (sferetta → asta → perno → una delle due foglioline).
  // Ogni "sito" ha un protone fisso (il reticolo) e un elettrone mobile:
  // a riposo sono appaiati e distribuiti in modo uniforme; una carica
  // vicina fa scivolare gli elettroni verso un estremo, lasciando scoperti
  // i protoni, senza mai lasciare il metallo.
  var ROD_LEN = PIVOT_Y - KNOB_Y;
  var ROD_FRAC = ROD_LEN / (ROD_LEN + LEAF_LEN);
  var SITES = [];
  (function(){
    var counts = { left:5, right:4 }; // 9 siti in tutto (circa metà dei 18 precedenti)
    Object.keys(counts).forEach(function(arm){
      var n = counts[arm];
      for(var i=0;i<n;i++){
        SITES.push({ arm:arm, s0:(i+0.5)/n, phase:Math.random()*10 });
      }
    });
  })();
  function armPoint(arm, s, leafAngle){
    if(s <= ROD_FRAC){
      var t = s/ROD_FRAC;
      return { x:CX, y:lerp(KNOB_Y,PIVOT_Y,t), rot:0 };
    }
    var side = arm==='left' ? -1 : 1;
    var t = (s-ROD_FRAC)/(1-ROD_FRAC);
    var rot = side*leafAngle;
    var lx = side*0.5*t, ly = LEAF_LEN*t;
    return {
      x: CX + lx*Math.cos(rot) - ly*Math.sin(rot),
      y: PIVOT_Y + lx*Math.sin(rot) + ly*Math.cos(rot),
      rot: rot
    };
  }
  function biasedS(s0, bias){
    var compress = 0.8;
    if(bias>=0) return s0*(1-bias*compress);
    return s0 + (1-s0)*compress*(-bias);
  }

  // ─── funzioni di disegno ────────────────────────────────────────────────
  function sphere(x,y,r,c1,c2,c3){
    var g = ctx.createRadialGradient(x-r*0.35,y-r*0.35,r*0.1,x,y,r);
    g.addColorStop(0,c1); g.addColorStop(.55,c2); g.addColorStop(1,c3);
    ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
  }
  function sign(x,y,ch,color,size){
    ctx.fillStyle = color; ctx.font = '700 '+(size||11)+'px Georgia, serif';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(ch,x,y);
  }
  function roundRect(x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
  }
  // un piccolo "atomo": nucleo (+) con n elettroni orbitanti (sempre in movimento) — usato per lana/bacchette
  function drawAtom(x,y,n,baseAngle,t){
    sphere(x,y,5,'#ffd9c2','#e8983a','#9a4a12');
    sign(x,y,'+','#5a2f08',7);
    for(var k=0;k<n;k++){
      var ang = baseAngle + t*1.1 + k*(Math.PI*1.15);
      var orbR = 10 + k*4.5;
      var ex = x+Math.cos(ang)*orbR, ey = y+Math.sin(ang)*orbR*0.6;
      ctx.save(); ctx.globalAlpha=.35; ctx.beginPath(); ctx.ellipse(x,y,orbR,orbR*0.6,0,0,Math.PI*2);
      ctx.strokeStyle='#6b7280'; ctx.lineWidth=.6; ctx.stroke(); ctx.restore();
      sphere(ex,ey,4,'#eef1f4','#c7ccd4','#8b93a1');
      sign(ex,ey,'–','#3b4250',6);
    }
  }
  function drawWool(x,y,t){
    var puffs = [
      [0,0,30],[-26,8,22],[26,8,22],[-14,-22,20],[14,-22,20],
      [0,20,20],[-30,-6,16],[30,-6,16],[0,-32,16]
    ];
    ctx.save();
    puffs.forEach(function(p){
      var g = ctx.createRadialGradient(x+p[0]-5,y+p[1]-5,2,x+p[0],y+p[1],p[2]);
      g.addColorStop(0,'#fbf3e2'); g.addColorStop(.6,'#ecd9ae'); g.addColorStop(1,'#d8b26a');
      ctx.beginPath(); ctx.arc(x+p[0],y+p[1],p[2],0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
    });
    ctx.restore();
    sign(x,y+58,'lana','#9a8060',10);
    var slotPos = [[-22,-10],[22,-10],[0,4],[-16,22],[16,22],[0,-24],[0,26]];
    woolSlots.forEach(function(s,i){ drawAtom(x+slotPos[i][0], y+slotPos[i][1], s.n, i*2.1, t); });
  }
  function drawRod(x,y,angleDeg,material,tool,t){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angleDeg*Math.PI/180);
    var rg = ctx.createLinearGradient(0,-7,0,7);
    if(material==='glass'){ rg.addColorStop(0,'#eaf7ff'); rg.addColorStop(.5,'#bae6fd'); rg.addColorStop(1,'#6fc4e8'); }
    else { rg.addColorStop(0,'#5b6472'); rg.addColorStop(.5,'#333b46'); rg.addColorStop(1,'#181d24'); }
    roundRect(-ROD_HALF,-7,ROD_HALF*2,14,6); ctx.fillStyle=rg; ctx.fill();
    var slotX = [-ROD_HALF+25,0,ROD_HALF-25];
    tool.slots.forEach(function(s,i){ drawAtom(slotX[i], 0, s.n, i*2.6, t); });
    // quando è carica, alcuni segni +/− tutt'attorno la rendono immediatamente riconoscibile
    if(tool.charged){
      var markX = [-ROD_HALF+8, -22, 22, ROD_HALF-8];
      var markCol = tool.sign==='+' ? '#e8983a' : '#c7ccd4';
      markX.forEach(function(mx,i){
        sign(mx, (i%2===0)?-13:13, tool.sign, markCol, 12);
      });
    }
    ctx.restore();
  }
  function drawFinger(x,y){
    ctx.save();
    ctx.font = '30px "Segoe UI Emoji","Apple Color Emoji",sans-serif';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText('☝️', x, y+6);
    ctx.restore();
  }

  // ─── contatto: geometria di avvicinamento/tocco per ogni tipo di strumento ──
  // Tutte le distanze di "tocco" usano la posizione GREZZA del puntatore
  // (non un'estremità calcolata), cosicché il rilevamento non dipenda mai
  // dall'orientamento con cui la bacchetta viene disegnata.
  function computeContact(tool, px, py){
    var dKnobC = Math.hypot(px-CX, py-KNOB_Y);
    var dWoolC = Math.hypot(px-WOOL_X, py-WOOL_Y);
    var res = { render:{x:px,y:py,angleDeg:0} };

    if(tool.type === 'rod'){
      var towardKnob = dKnobC <= dWoolC;
      var tx = towardKnob ? CX : WOOL_X, ty = towardKnob ? KNOB_Y : WOOL_Y;
      var ang = Math.atan2(ty-py, tx-px);
      var minCenterDistKnob = ROD_HALF + KNOB_R + TIP_R;
      var rx = px, ry = py;
      if(towardKnob && dKnobC < minCenterDistKnob){
        var ux = dKnobC<1e-3 ? 0 : (px-CX)/dKnobC, uy = dKnobC<1e-3 ? -1 : (py-KNOB_Y)/dKnobC;
        rx = CX + ux*minCenterDistKnob; ry = KNOB_Y + uy*minCenterDistKnob;
      }
      res.render = { x:rx, y:ry, angleDeg: ang*180/Math.PI };
      res.touchingKnob = dKnobC <= minCenterDistKnob + 2;
      res.nearKnob = Math.max(0, dKnobC-ROD_HALF) <= 78;
      res.touchingWool = dWoolC <= (WOOL_R + 20);
    } else {
      var r = tool.r || 10;
      var minDist = KNOB_R + r;
      var rx2 = px, ry2 = py;
      if(dKnobC < minDist){
        var ux2 = dKnobC<1e-3 ? 0 : (px-CX)/dKnobC, uy2 = dKnobC<1e-3 ? -1 : (py-KNOB_Y)/dKnobC;
        rx2 = CX + ux2*minDist; ry2 = KNOB_Y + uy2*minDist;
      }
      res.render = { x:rx2, y:ry2, angleDeg:0 };
      res.touchingKnob = dKnobC <= minDist + 2;
      res.nearKnob = dKnobC <= 78;
      res.touchingWool = false;
    }
    return res;
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    var t = performance.now()/1000;

    // lana (fissa, sempre visibile, elettroni sempre orbitanti)
    drawWool(WOOL_X, WOOL_Y, t);

    // vetro dell'elettroscopio
    ctx.save();
    roundRect(JAR_L,JAR_TOP,JAR_R-JAR_L,JAR_BOT-JAR_TOP,12);
    ctx.fillStyle = 'rgba(111,211,217,0.06)'; ctx.fill();
    ctx.strokeStyle = 'rgba(111,211,217,0.35)'; ctx.lineWidth=1.6; ctx.stroke();
    ctx.restore();

    // asta interna (dal tappo al perno delle foglioline, visibile dentro il vetro)
    var rodGrad = ctx.createLinearGradient(CX-ROD_W/2,0,CX+ROD_W/2,0);
    rodGrad.addColorStop(0,'#f0d9a0'); rodGrad.addColorStop(.5,'#c9973f'); rodGrad.addColorStop(1,'#8a6423');
    ctx.fillStyle = rodGrad;
    ctx.fillRect(CX-ROD_W/2, JAR_TOP-4, ROD_W, PIVOT_Y-(JAR_TOP-4));

    // tappo, ben incastrato sopra il vetro (nessuno spazio vuoto)
    ctx.fillStyle = '#2b2420';
    roundRect(CX-STOPPER_W/2, STOPPER_TOP, STOPPER_W, STOPPER_BOT-STOPPER_TOP, 4);
    ctx.fill();

    // sferetta, che spunta appena dal tappo
    sphere(CX,KNOB_Y,KNOB_R,'#fdf0c8','#c9973f','#7a5a20');

    // strumento attualmente trascinato: calcola contatto/collisione
    var contact = null, dragTool = null;
    if(drag){
      dragTool = tools[drag.id];
      contact = computeContact(dragTool, drag.x, drag.y);
      // strofinio "dal vivo": mentre la bacchetta è sulla lana, lo scambio
      // di carica è visibile in tempo reale (si vede la lana "spogliarsi"
      // o "arricchirsi" di elettroni proprio mentre la si strofina)
      if(dragTool.type==='rod' && contact.touchingWool){
        rubRod(dragTool);
      }
      if(contact.touchingKnob){
        dragTouchedKnob = true;
        if(dragTool.type==='ball') dragTouchedSign = dragTool.sign;
        else if(dragTool.type==='rod' && dragTool.charged) dragTouchedSign = dragTool.sign;
      }
    }

    // foglioline: apertura parziale per induzione, massima al contatto.
    // Se in questo trascinamento c'è già stato un tocco con un oggetto
    // carico, restano spalancate anche mentre lo si allontana (prima
    // ancora del rilascio, che rende l'elettrizzazione permanente).
    var maxA = (permanent || dragTouchedSign) ? MAX_ANGLE_FULL : MAX_ANGLE_PARTIAL;
    if(contact && contact.touchingKnob) maxA = MAX_ANGLE_FULL;
    var angle = maxA * Math.abs(eBias);
    [-1,1].forEach(function(side){
      ctx.save();
      ctx.translate(CX,PIVOT_Y);
      ctx.rotate(side*angle);
      var leafGrad = ctx.createLinearGradient(0,0,side*8,0);
      leafGrad.addColorStop(0,'#fff3c4'); leafGrad.addColorStop(.6,'#e8983a'); leafGrad.addColorStop(1,'#b87333');
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(side*3,LEAF_LEN);
      ctx.lineTo(side*-2,LEAF_LEN);
      ctx.closePath();
      ctx.fillStyle = leafGrad; ctx.fill();
      ctx.restore();
    });

    // "+" della sferetta (sopra tutto il resto, sempre in vista)
    sign(CX,KNOB_Y,'+', '#5a3d10', 10);

    // reticolo di protoni (fissi) ed elettroni mobili: sempre sul metallo
    // (sferetta → asta → perno → fogliolina), appaiati e uniformi a riposo;
    // una carica vicina fa scivolare solo gli elettroni verso l'estremo
    // opposto, lasciando scoperti i protoni.
    SITES.forEach(function(site){
      var pp = armPoint(site.arm, site.s0, angle);
      var pxp = pp.x + 2.2*(-Math.cos(pp.rot)), pyp = pp.y + 2.2*(-Math.sin(pp.rot));
      sphere(pxp,pyp,4.2,'#ffd9c2','#e8983a','#9a4a12');
      sign(pxp,pyp,'+','#5a2f08',6.5);
    });
    SITES.forEach(function(site){
      var sTarget = biasedS(site.s0, eBias);
      var sJit = Math.sin(t*1.3+site.phase)*0.018;
      var s = clamp01(sTarget+sJit);
      var pe = armPoint(site.arm, s, angle);
      var exx = pe.x - 2.2*(-Math.cos(pe.rot)), eyy = pe.y - 2.2*(-Math.sin(pe.rot));
      sphere(exx,eyy,4.4,'#eef1f4','#c7ccd4','#8b93a1');
      sign(exx,eyy,'–','#3b4250',7);
    });

    if(drag && contact){
      if(dragTool.type==='ball'){
        var isPos = dragTool.sign==='+';
        if(isPos) sphere(contact.render.x,contact.render.y,13,'#ffd9c2','#e8983a','#9a4a12');
        else sphere(contact.render.x,contact.render.y,13,'#eef1f4','#c7ccd4','#8b93a1');
        sign(contact.render.x,contact.render.y, isPos?'+':'–', isPos?'#5a3d10':'#3b4250', 13);
      } else if(dragTool.type==='rod'){
        drawRod(contact.render.x, contact.render.y, contact.render.angleDeg, dragTool.material, dragTool, t);
      } else if(dragTool.type==='finger'){
        drawFinger(contact.render.x,contact.render.y);
      }
    }
  }

  function liveUpdate(){
    if(!drag){
      eBiasTarget = permanent ? (permSign==='+'?1:-1) : 0;
      return;
    }
    // se in questo trascinamento c'è già stato un tocco con un oggetto carico,
    // quella è la carica "di base" anche mentre lo si allontana (prima del
    // rilascio, che la renderà permanente): le foglioline restano spalancate.
    var base = permanent ? (permSign==='+'?1:-1) : (dragTouchedSign ? (dragTouchedSign==='+'?1:-1) : 0);
    var tool = tools[drag.id];
    var sgn = null;
    if(tool.type==='ball') sgn = tool.sign;
    else if(tool.type==='rod' && tool.charged) sgn = tool.sign;
    if(!sgn){ eBiasTarget = base; return; }
    var contact = computeContact(tool, drag.x, drag.y);
    var dKnobC = Math.hypot(drag.x-CX, drag.y-KNOB_Y);
    var d = tool.type==='rod' ? Math.max(0,dKnobC-ROD_HALF) : dKnobC;
    var NEAR_R = 78;
    if(contact.touchingKnob){
      eBiasTarget = sgn==='+' ? 1 : -1;
    } else if(d < NEAR_R){
      // un oggetto avvicinato (non a contatto) PERTURBA per induzione la carica
      // già presente: se ha segno opposto a quello permanente, la contrasta e
      // le foglioline si chiudono parzialmente; se ha lo stesso segno, le apre
      // ancora di più. Appena lo si allontana, si torna alla sola carica base.
      var f = 1-(d)/(NEAR_R);
      var influence = (sgn==='+'?1:-1) * f * 0.72;
      eBiasTarget = Math.max(-1, Math.min(1, base + influence));
    } else {
      eBiasTarget = base;
    }
  }

  function updateStateLabel(){
    if(drag && dragTouchedSign){
      stateEl.textContent = 'elettrizzato per contatto (' + (dragTouchedSign==='+'?'positivo':'negativo') + ')';
      return;
    }
    if(!permanent){ stateEl.textContent = Math.abs(eBias) > 0.08 ? 'polarizzato per induzione' : 'neutro'; return; }
    stateEl.textContent = 'elettrizzato per contatto (' + (permSign==='+'?'positivo':'negativo') + ')';
  }

  function tick(){
    liveUpdate();
    eBias += (eBiasTarget-eBias)*0.09;
    draw();
    updateStateLabel();
    requestAnimationFrame(tick);
  }

  // ─── strofinio: la bacchetta, strisciata sulla lana, si scambia con essa ──
  // TUTTI gli elettroni dei suoi siti attivi (non più uno soltanto): la
  // bacchetta di vetro perde tutti gli elettroni dei suoi 3 siti (resta
  // "+++"), quella di plastica li raddoppia tutti (diventa "−−−"), e la
  // lana riceve/cede la stessa quantità nei suoi 3 siti corrispondenti.
  function rubRod(tool){
    woolSlots.forEach(function(s){ s.n = 1; });
    tool.slots.forEach(function(s){ s.n = 1; });
    if(tool.material === 'glass'){
      tool.slots.forEach(function(s){ s.n = 0; });
      woolSlots.slice(0,3).forEach(function(s){ s.n = 2; });
      tool.sign = '+';
      caption.textContent = 'Tutti gli elettroni "liberi" del vetro sono passati alla lana: la bacchetta si è caricata positivamente!';
    } else {
      woolSlots.slice(0,3).forEach(function(s){ s.n = 0; });
      tool.slots.forEach(function(s){ s.n = 2; });
      tool.sign = '-';
      caption.textContent = 'Molti elettroni della lana sono passati alla plastica: la bacchetta si è caricata negativamente!';
    }
    tool.charged = true;
    updateBadges();
  }

  function updateBadges(){
    ['rodglass','rodplastic'].forEach(function(id){
      var el = root.querySelector('[data-badge="'+id+'"]');
      var tool = tools[id];
      if(tool.charged){
        el.textContent = '⚡' + tool.sign;
        el.className = 'eosx-tool-badge ' + (tool.sign==='+' ? 'pos':'neg');
      } else {
        el.textContent = ''; el.className = 'eosx-tool-badge';
      }
    });
  }

  // ─── trascinamento ───────────────────────────────────────────────────────
  function clientToCanvas(clientX, clientY){
    var rect = cv.getBoundingClientRect();
    return { x:(clientX-rect.left)*(W/rect.width), y:(clientY-rect.top)*(H/rect.height) };
  }

  root.querySelectorAll('.eosx-tool').forEach(function(el){
    el.addEventListener('pointerdown', function(e){
      e.preventDefault();
      var p = clientToCanvas(e.clientX, e.clientY);
      drag = { id: el.dataset.tool, x:p.x, y:p.y };
      dragTouchedKnob = false;
      dragTouchedSign = null;
      caption.textContent = 'Trascina fino alla sferetta dell\'elettroscopio' + (drag.id.indexOf('rod')===0 ? ', oppure sulla lana per caricarla.' : '.');
    });
  });
  window.addEventListener('pointermove', function(e){
    if(!drag) return;
    var p = clientToCanvas(e.clientX, e.clientY);
    drag.x = p.x; drag.y = p.y;
  });
  window.addEventListener('pointerup', function(e){
    if(!drag) return;
    var tool = tools[drag.id];
    var contact = computeContact(tool, drag.x, drag.y);

    if(tool.type==='finger'){
      if(contact.touchingKnob || dragTouchedKnob){
        permanent = false; permSign = null;
        caption.textContent = 'Toccando la sferetta con un dito, le cariche in eccesso fluiscono attraverso il tuo corpo e si ridistribuiscono uniformemente: l\'elettroscopio torna neutro.';
      }
    } else if(tool.type==='ball'){
      if(contact.touchingKnob || dragTouchedKnob){
        permanent = true; permSign = tool.sign;
        caption.textContent = 'Toccando la sferetta, la carica si trasferisce per contatto: l\'elettroscopio resta carico per sempre (anche se allontani la sfera), finché non lo scarichi con il dito.';
      } else if(contact.nearKnob){
        caption.textContent = 'Per induzione le foglioline si aprono; si richiuderanno se allontani la sfera senza averla toccata.';
      } else {
        caption.textContent = 'Trascina una sfera o una bacchetta (prima strofinala sulla lana) fino alla sferetta; trascina il dito per scaricare.';
      }
    } else if(tool.type==='rod'){
      if(contact.touchingWool){
        rubRod(tool); // garanzia: cattura lo strofinio anche se il rilascio avviene nello stesso istante
      } else if(tool.charged && (contact.touchingKnob || dragTouchedKnob)){
        permanent = true; permSign = tool.sign;
        caption.textContent = 'Toccando la sferetta, la carica si trasferisce per contatto: l\'elettroscopio resta carico per sempre (anche se allontani la bacchetta), finché non lo scarichi con il dito.';
      } else if(tool.charged && contact.nearKnob){
        caption.textContent = 'Per induzione le foglioline si aprono; si richiuderanno se allontani la bacchetta senza averla toccata.';
      } else if(!tool.charged){
        caption.textContent = 'Questa bacchetta non è ancora carica: trascinala prima sul panno di lana per strofinarla.';
      } else {
        caption.textContent = 'Trascina una sfera o una bacchetta (prima strofinala sulla lana) fino alla sferetta; trascina il dito per scaricare.';
      }
    }
    // la lana, appena lo strumento viene rilasciato, torna sempre alle
    // condizioni iniziali (il contatto con la bacchetta è transitorio: è
    // la bacchetta, isolata, a mantenere la carica acquisita)
    woolSlots.forEach(function(s){ s.n = 1; });
    drag = null;
  });

  $('.eosx-reset').addEventListener('click', function(){
    permanent = false; permSign = null; eBias = 0; eBiasTarget = 0;
    tools.rodglass.charged = false; tools.rodglass.sign = null; tools.rodglass.slots.forEach(function(s){ s.n=1; });
    tools.rodplastic.charged = false; tools.rodplastic.sign = null; tools.rodplastic.slots.forEach(function(s){ s.n=1; });
    woolSlots.forEach(function(s){ s.n=1; });
    updateBadges();
    caption.textContent = 'Trascina una sfera o una bacchetta (prima strofinala sulla lana) fino alla sferetta; trascina il dito per scaricare.';
  });

  updateBadges();
  requestAnimationFrame(tick);
})();
</script>

### Ripasso: l'elettrizzazione

Abbiamo visto diversi modi per elettrizzare un corpo. Prova ad abbinare ciascun fenomeno a come avviene e a cosa comporta:

<div style="overflow-x:auto;">
{% capture _datiElettr %}[
  {"l":"Strofinio", "m":"Attrito", "r":"Cariche opposte"},
  {"l":"Contatto", "m":"Tocco diretto", "r":"Cariche uguali"},
  {"l":"Induzione senza terra", "m":"Solo avvicinamento", "r":"Resta neutro"},
  {"l":"Induzione con terra", "m":"Si collega/scollega la terra", "r":"Carica permanente"}
]{% endcapture %}
{% include match.html id="match-elettrizzazione" dati=_datiElettr col1="Fenomeno" col2="Come avviene" col3="Conseguenza" %}
</div>

{% include box-ex.html titolo="Verifica Subito!" %}
{% capture _qElettr %}[
{"t":"Nell'elettrizzazione per strofinio, sono i protoni a spostarsi da un corpo all'altro.","ok":false,"s":"Falso: si spostano sempre e solo gli elettroni, mai i protoni."},
{"t":"Nell'elettrizzazione per contatto, alla fine i due corpi hanno lo stesso segno di carica.","ok":true,"s":"Vero: la carica si redistribuisce fra i due conduttori, che restano quindi carichi dello stesso segno."},
{"t":"Durante la sola polarizzazione (senza messa a terra), il conduttore acquisisce una carica netta permanente.","ok":false,"s":"Falso: il conduttore resta neutro nel complesso, e la polarizzazione scompare non appena il corpo carico viene allontanato."},
{"t":"Un elettroscopio a foglie può aprirsi anche solo avvicinando un corpo carico, senza toccarlo.","ok":true,"s":"Vero, grazie all'induzione — ma in questo caso le foglioline si richiudono se il corpo viene allontanato."},
{"t":"Per rendere permanente la carica indotta, bisogna staccare il filo di terra PRIMA di allontanare il corpo carico.","ok":true,"s":"Vero: se si allontanasse prima il corpo carico, tutta la carica tornerebbe indietro attraverso il filo di terra."},
{"t":"L'angolo di apertura delle foglioline dell'elettroscopio non dipende dalla quantità di carica presente.","ok":false,"s":"Falso: più carica è presente, più le foglioline si respingono e si aprono."}
]{% endcapture %}
{% include quiz.html id="qgfElettr" domande=_qElettr label_si="Un fenomeno in cui la carica si trasferisce" label_no="Un fenomeno in cui la carica non si trasferisce" %}
{% include box-end.html %}


# La Forza Elettrica e la Legge di Coulomb

Abbiamo quindi compreso che le cariche elettriche interagiscono tra loro 

### In presenza di più cariche

# Il Campo Elettrico

### In presenza di più cariche

## Le linee di campo

# L'energia elettrica

## L'energia potenziale elettrica

## Il potenziale elettrico

## Il moto di una particella carica in un campo elettrico

