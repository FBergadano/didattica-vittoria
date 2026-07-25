---
layout: capitolo
title: "L'Elettrostatica"
corso: fisica-5acd
corso_titolo: "Fisica 5ª ACD"
materia: fisica
classe: "5ACD"
numero: 2
---

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
- Quando strofiniamo il palloncino sul maglione di lana <u>alcuni elettroni passano dalla lana al palloncino</u>: di questo modo il maglione ha più cariche positive che negative, mentre il palloncino è a maggioranza di cariche negative. Diciamo quindi che la <definizione>carica globale</definizione> del maglione è positiva e che la carica globale del palloncino è negativa.  Questo processo si chiama <definizione>elettrizzazione per strofinio</definizione>. Notiamo che <u>i protoni non si spostano mai</u>.
- Quando palloncino e maglione sono carichi di segno opposto, essi si attraggono. <u markdown="span">È quindi presente una forza, diversa da quela gravitazionale, che attira il palloncino verso il maglione</u>.
- Quando il palloncino carico negativamente è avvicinato al muro, gli elettroni nel muro vengono respinti, mentre i protoni rimangono fermi. Si viene quindi a creare una zona di carica positiva, da cui il palloncino (negativo) è attratto.

In questo capitolo, approfondiremo ogni aspetto del fenomeno che abbiamo appena descritto.

## La materia è piena di cariche elettriche

Nel 1955, per la prima volta nella Storia, un uomo **ha visto** gli atomi (Erwin Müller, con il microscopio a ioni di campo), confermando la teoria atomica nata per la prima volta nell'Antica Grecia con Leucippo e Democrito. È un evento tanto sensazionale quanto la prima volta in cui un uomo ha camminato su un pianeta extraterrestre (avvenuto 14 anni dopo).

Gli atomi sono ciò di cui è costituita la materia, i piccoli mattoncini che si organizzano in molecole, le quali a loro volta costituiscono i solidi, i liquidi e i gas da cui siamo circondati e di cui siamo composti.

<div class="zm-widget">
<svg viewBox="0 0 400 280" role="img" aria-label="Animazione in loop: zoom da un blocco di materia alle molecole, poi agli atomi con protoni, neutroni ed elettroni">
<defs>
  <radialGradient id="zmBlockG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fffdf0"/><stop offset="55%" stop-color="#fef3b0"/><stop offset="100%" stop-color="#fde68a"/></radialGradient>
  <radialGradient id="zmMolG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fff7ed"/><stop offset="55%" stop-color="#fed7aa"/><stop offset="100%" stop-color="#fdba74"/></radialGradient>
  <radialGradient id="zmProtonG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fff1f2"/><stop offset="55%" stop-color="#fecdd3"/><stop offset="100%" stop-color="#fda4af"/></radialGradient>
  <radialGradient id="zmNeutronG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#f0f9ff"/><stop offset="55%" stop-color="#bae6fd"/><stop offset="100%" stop-color="#7dd3fc"/></radialGradient>
  <radialGradient id="zmElectronG" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#fafafa"/><stop offset="55%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#d1d5db"/></radialGradient>
</defs>

<g class="zm-stage zm-stage-block" transform="translate(200,140)">
  <rect x="-70" y="-70" width="140" height="140" rx="20" fill="url(#zmBlockG)"/>
  <ellipse cx="-30" cy="-40" rx="26" ry="14" fill="#fff" opacity=".45"/>
</g>

<g class="zm-stage zm-stage-molecule" transform="translate(200,140)">
  <line x1="0" y1="10" x2="-48" y2="-30" stroke="#c2733a" stroke-width="4"/>
  <line x1="0" y1="10" x2="48" y2="-30" stroke="#c2733a" stroke-width="4"/>
  <circle cx="0" cy="10" r="30" fill="url(#zmMolG)"/>
  <ellipse cx="-10" cy="2" rx="10" ry="6" fill="#fff" opacity=".45"/>
  <circle cx="-48" cy="-30" r="19" fill="url(#zmMolG)"/>
  <ellipse cx="-54" cy="-35" rx="6" ry="4" fill="#fff" opacity=".45"/>
  <circle cx="48" cy="-30" r="19" fill="url(#zmMolG)"/>
  <ellipse cx="42" cy="-35" rx="6" ry="4" fill="#fff" opacity=".45"/>
</g>

<g class="zm-stage zm-stage-atom" transform="translate(200,140)">
  <circle r="55" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/>
  <circle r="75" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/>
  <circle r="95" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/>

  <g class="zm-orbit zm-orbit1"><circle cx="55" cy="0" r="9" fill="url(#zmElectronG)"/><text x="55" y="3.5" text-anchor="middle" font-size="11" font-weight="700" fill="#4b5563">–</text></g>
  <g class="zm-orbit zm-orbit2"><circle cx="75" cy="0" r="9" fill="url(#zmElectronG)"/><text x="75" y="3.5" text-anchor="middle" font-size="11" font-weight="700" fill="#4b5563">–</text></g>
  <g class="zm-orbit zm-orbit3"><circle cx="95" cy="0" r="9" fill="url(#zmElectronG)"/><text x="95" y="3.5" text-anchor="middle" font-size="11" font-weight="700" fill="#4b5563">–</text></g>

  <g class="zm-nucleus">
    <circle cx="20" cy="0" r="11" fill="url(#zmProtonG)"/><text x="20" y="3.5" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">+</text>
    <circle cx="14.1" cy="-14.1" r="11" fill="url(#zmNeutronG)"/>
    <circle cx="0" cy="-20" r="11" fill="url(#zmProtonG)"/><text x="0" y="-16.5" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">+</text>
    <circle cx="-14.1" cy="-14.1" r="11" fill="url(#zmNeutronG)"/>
    <circle cx="-20" cy="0" r="11" fill="url(#zmProtonG)"/><text x="-20" y="3.5" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">+</text>
    <circle cx="-14.1" cy="14.1" r="11" fill="url(#zmNeutronG)"/>
    <circle cx="0" cy="20" r="11" fill="url(#zmProtonG)"/><text x="0" y="23.5" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">+</text>
    <circle cx="14.1" cy="14.1" r="11" fill="url(#zmNeutronG)"/>
  </g>
</g>
</svg>

<div class="zm-caption">
  <span class="zm-cap zm-cap-block">Un blocco di materia…</span>
  <span class="zm-cap zm-cap-molecule">…è fatto di molecole…</span>
  <span class="zm-cap zm-cap-atom">…fatte di atomi: protoni (rosso, +), neutroni (blu) ed elettroni (grigio, –) in orbita.</span>
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
.zm-orbit2 { animation-name: zmSpinRev; animation-duration: 4.5s; }
.zm-orbit3 { animation-name: zmSpin; animation-duration: 6.5s; }
@keyframes zmSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes zmSpinRev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

.zm-caption { position: relative; height: 1.6em; margin-top: .4rem; }
.zm-cap { position: absolute; left: 0; right: 0; font-size: .85rem; font-style: italic; color: #6b7280; opacity: 0; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-duration: 16s; }
.zm-cap-block    { animation-name: zmCapBlock; }
.zm-cap-molecule { animation-name: zmCapMolecule; }
.zm-cap-atom     { animation-name: zmCapAtom; }
@keyframes zmCapBlock    { 0%, 8% { opacity: 1; } 16%, 82% { opacity: 0; } 94%, 100% { opacity: 1; } }
@keyframes zmCapMolecule { 0%, 8% { opacity: 0; } 16%, 34% { opacity: 1; } 42%, 74% { opacity: 0; } 82%, 86% { opacity: 1; } 94%, 100% { opacity: 0; } }
@keyframes zmCapAtom     { 0%, 34%, 86%, 100% { opacity: 0; } 42%, 74% { opacity: 1; } }

@media print { .zm-widget { display: none; } }
</style>

{% include figura.html id="atomi"
   src="/corsi/gif/atoms_rutherford_model.webp"
   didascalia="Alcuni degli atomi che ti circondano in questo momento: Carbonio (C), Fosforo (P), Titanio (Ti), Neodimio (Nd). Osserva come variano il numero di elettroni, protoni e neutroni in base alla specie chimica."
   larghezza="290px" %}

Ogni atomo è costituito da tre tipi di particelle:
- l'<definizione>elettrone</definizione> ($e^-$), che porta una carica negativa e si muove nella nube che circonda il nucleo;
- il <definizione>protone</definizione> ($p^+$), che porta una carica positiva e si trova nel nucleo;
- il <definizione>neutrone</definizione> ($n$), che non porta alcuna carica (è elettricamente neutro) e si trova anch'esso nel nucleo, insieme ai protoni.

Queste tre particelle hanno carica e massa molto diverse tra loro:

| Particella | Carica | Massa |
|---|---|---|
| Protone ($p^+$) | $+e = +1{,}602\times10^{-19}\ \text{C}$ | $1{,}673\times10^{-27}\ \text{kg}$ |
| Neutrone ($n$) | $0$ | $1{,}675\times10^{-27}\ \text{kg}$ |
| Elettrone ($e^-$) | $-e = -1{,}602\times10^{-19}\ \text{C}$ | $9{,}109\times10^{-31}\ \text{kg}$ |

{% include box-imp.html titolo="Stessa carica, massa enormemente diversa" %}
Protone ed elettrone hanno <u markdown="span">esattamente **la stessa carica in valore assoluto**</u>, $e$, ma di segno opposto. La loro massa, invece, è profondamente diversa: <u markdown="span">un protone è circa **1836 volte più massiccio** di un elettrone</u>. È per questo che, quando un corpo si elettrizza (ad esempio per strofinio), a spostarsi sono sempre gli elettroni — molto più "leggeri" e mobili — e mai i protoni, saldamente ancorati nel nucleo.
{% include box-end.html %}

Osserva di nuovo la {% include fig-ref.html id="atomi" %}: per ciascun atomo, il numero di elettroni che orbitano attorno al nucleo è esattamente uguale al numero di protoni contenuti nel nucleo stesso. Questo non è un caso.

{% include box-imp.html titolo="Neutralità dell'atomo" %}
Un atomo, nelle condizioni normali, ha sempre lo stesso numero di elettroni e di protoni. Le loro cariche opposte si bilanciano esattamente, e l'atomo risulta complessivamente <u markdown="span">**neutro**</u> (carica totale nulla).
{% include box-end.html %}

{% include margin-note.html testo="Il modello che abbiamo usato è semplificato" %}
Nelle animazioni di questo capitolo abbiamo disegnato gli elettroni come pallini che percorrono orbite circolari nette attorno al nucleo — un'immagine comoda, ma non fisicamente accurata. In realtà gli elettroni non seguono traiettorie definite: si trovano piuttosto in una "nube" di probabilità attorno al nucleo, più densa in alcune zone e più rarefatta in altre.
{% include margin-note-end.html %}

{% include figura.html id="atomo-reale"
   src="/corsi/immagini/real-atom-wikipedia.jpeg"
   didascalia="Una rappresentazione più realistica (anche se sempre semplificata) della nube elettronica di un atomo, ben diversa dal modello 'planetario' usato finora."
   larghezza="200px" %}

### Carica di un corpo e Quantizzazione della carica

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

Se un corpo ha lo stesso numero di protoni ed elettroni, $Q = 0$: il corpo è neutro, come abbiamo visto sopra per gli atomi. Se invece un corpo cede o acquista elettroni, resta con un eccesso di carica positiva o negativa e si dice <definizione>elettrizzato</definizione>.

Osserva i quattro corpi seguenti: hanno configurazioni di cariche molto diverse fra loro.

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

Nonostante le configurazioni siano così diverse, la carica netta di ciascun corpo è sempre un multiplo intero della carica $e$. Questo perché ogni singola particella carica (protone o elettrone) porta sempre e soltanto una carica di $+e$ o $-e$ — mai una frazione di $e$. Di conseguenza, la carica totale di qualunque corpo si può scrivere come

$$Q = n \cdot e, \qquad n=n_p-n_e \in \mathbb{Z}$$

dove $n$ è un numero intero (positivo, negativo, o nullo): la differenza fra il numero di protoni e il numero di elettroni presenti nel corpo. Questo fatto sperimentale si chiama <definizione>quantizzazione della carica elettrica</definizione>: la carica non può assumere un valore qualsiasi, ma solo multipli interi di $e$.

{% include box-imp.html titolo="Quantizzazione della carica" %}
La carica elettrica di un corpo è sempre un **multiplo intero** della carica elementare $e = 1{,}602 \times 10^{-19}\ \text{C}$:
$$Q = n\cdot e, \quad n = 0, \pm1, \pm2, \pm3, \ldots$$
Non esistono, in natura, corpi con carica pari a $-0{,}5\, e$ o a $2{,}5\,e$.
{% include box-end.html %}


## Elettrizzazione per contatto, induzione e polarizzazione

### Conduttori e Isolanti

# La Forza Elettrica e la Legge di Coulomb

### In presenza di più cariche

# Il Campo Elettrico

### In presenza di più cariche

## Le linee di campo

# L'energia elettrica

## L'energia potenziale elettrica

## Il potenziale elettrico

## Il moto di una particella carica in un campo elettrico

