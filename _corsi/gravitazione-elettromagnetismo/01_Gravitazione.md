---
layout: capitolo
title: "La Teoria della Gravitazione"
corso: "gravitazione-elettromagnetismo"
corso_titolo: "La Gravitazione e l'Elettromagnetismo"
materia: fisica
numero: 1
---

<cit autore="Bertolt Brecht, Vita di Galileo, scena settima">
<em>CARDINAL BARBERINI</em> “Siete sicuro, amico Galileo, che voi astronomi non vogliate semplicemente rendere più comoda l'astronomia? Pensate in termini di cerchi ed ellissi, cioè di cose conformi ai vostri cervelli. Ma supponiamo che l'Onnipotente si sia fitto in capo di far muovere le stelle così <em>(traccia in aria col dito un'orbita complicatissima con un moto irregolare)</em>. Dove andrebbero a finire, allora, i vostri calcoli?” 
<em>GALILEO</em> “Allora, Eminenza, l'Onnipotente ci avrebbe forniti di cervelli fatti così <em>(traccia col dito lo stesso movimento)</em> perché potessimo credere che un movimento così <em>(ripete il tracciato immaginario)</em> fosse il più semplice possibile! Io ho fede nel cervello.”
</cit>


{% include margin-note.html testo="Tutto interagisce con tutto." %}
Tutti noi sappiamo che la forza gravitazionale è quella che ci attrae verso il centro della Terra e che attrae la Terra verso il Sole. Ciò che invece è meno comune è comprendere che **ogni oggetto dotato di massa** (cioè quasi qualsiasi cosa tranne la luce) **è attratto da qualsiasi altro oggetto dotato di massa**. Voi siete attratti dal tavolo che avete di fronte, e lo attraete a vostra volta, e lo stesso vale per ogni granello di sabbia in ogni spiaggia lontana o ogni molecola di aria. Ogni oggetto tende ad unirsi con ogni altro oggetto nell'Universo per via dell'interazione gravitazionale. 
{% include margin-note-end.html %}

{% include figura.html id="newton-mela"
   src="/corsi/gif/newton-apple.gif"
   didascalia="La leggenda (forse vera) della mela caduta sulla testa di Newton, all'origine della sua intuizione sulla gravitazione universale."
   larghezza="290px" %}

{% include margin-note.html testo="La gravità è la forza più debole della Natura." %}
Ma, come ci dice l'esperienza quotidiana, questa attrazione è così debole che possiamo trascurarla praticamente sempre, tranne nel caso dei pianeti e delle stelle. Vale a dire, affinché gli effetti della forza gravitazionale siano realmente visibili, ci vogliono masse enormi.  
La <definizione>gravità</definizione> è la forza più debole presente in Natura.
{% include margin-note-end.html %}

# La legge di Gravitazione Universale
La teoria che vedremo in questo capitolo fu essenzialmente formulata nel 1687 dal pazzo più geniale della storia della Fisica: Newton. 
Fu solo dopo più di un secolo, nel 1798, che Cavendish riuscì a dimostrare **sperimentialmente**, in un laboratorio, la legge trovata da Newton.  

{% include staffetta-storica.html
   img1="/corsi/immagini/isaac_newton_ritratto.jpg" nome1="Newton" ruolo1="Sviluppa la teoria"
   img2="/corsi/immagini/henry_cavendish_ritratto.jpg" nome2="Cavendish" ruolo2="Prova sperimentalmente"
   intervallo="Cent'anni dopo" %}


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

{% include margin-note.html testo="Alcuni dettagli dell'esperimento" %}
Cavendish conosceva (tramite misurazioni precedenti) la forza necessaria per ruotare il bilancere di un certo angolo. Quindi, misurando l'angolo di rotazione, fu capace di misurare l'intensità dell'attrazione tra le masse.

Nella realtà la rotazione era così minuscola che Cavendish dovette leggerla con uno specchietto fissato al filo, che rifletteva un fascio di luce su una scala lontana; nella nostra animazione, per semplicità, la scala è mostrata direttamente attorno al bilancere.

{% include margin-note-end.html %}

Puoi ripetere l'esperienza di Cavendish con l'animazione qui sotto.

{% include lab-virtuali/cavendish-lab.html %}

Verifica con l'animazione che:

- nello scenario "Dipendenza dalle masse", la forza mostrata si aggiorna subito quando scegli $M$ e $m$, misurata sempre alla stessa distanza: raddoppiando una delle due masse la forza raddoppia esattamente (confronta pure i valori mostrati per le diverse combinazioni). Premendo "Avvia" il bilancere ruota lentamente verso la sfera grande e si ferma in una posizione di equilibrio — è la stessa attrazione che stai misurando, resa visibile: più le masse sono grandi, più il bilancere ruota;
- nello scenario "Dipendenza da r", i pulsanti spostano davvero il bilancere alla nuova distanza (indicata dalla linea tratteggiata $r$): raddoppiando $r$ l'intensità della forza non si dimezza, ma diventa un quarto; triplicando $r$ diventa un nono; quadruplicando $r$ diventa un sedicesimo — <u markdown="span">proprio quello che significa dire che $F$ è inversamente proporzionale al **quadrato** della distanza</u>, verificabile confrontando il valore di $F$ prima e dopo ogni cambio.

{% include margin-note.html testo="Dall'esperimento alla formula di Newton" %}
Cavendish dedusse così che il modulo della forza gravitazionale fra due corpi è <u markdown="span">**direttamente proporzionale al prodotto delle loro masse** e **inversamente proporzionale al quadrato della distanza**</u>. Cioè, la forza gravitazionale tra due masse $m_1$ ed $m_2$ è descritta dalla seguente equazione, detta <definizione>legge di gravitazione universale</definizione>:

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


{% include esercizi/verifica-cavendish.html %}

### Direzione e verso della Forza Gravitazionale

Il modulo $F = G\,\dfrac{m_1 \cdot m_2}{r^2}$ ci dice *quanto* vale la forza gravitazionale, ma una forza è un vettore: per descriverla completamente dobbiamo specificare anche **direzione** e **verso**.

- **Direzione:** la retta congiungente i centri delle due masse.
- **Verso:** attrattivo — ciascuna massa è "tirata" verso l'altra.


Questo significa che i vettori si disegnano nel seguente modo.

{% include figure/figura-dir-verso-gravita.html %}

{% include margin-note.html testo="Forze centrali" %}
Le forze che, come quella gravitazionale, hanno come direzione la retta che passa per i centri dei corpi si chiamano <definizione>forze centrali</definizione>. Queste forze hanno delle proprietà molto importanti, come cominceremo a vedere nella <a href="#energia-potenziale-gravitazionale">sezione sull'energia potenziale</a>, più sotto.
{% include margin-note-end.html %}

{% include margin-note.html testo="Il terzo principio della dinamica" %}
**Attenzione.** Nota che, anche se la massa a destra è molto più grande della massa a sinsitra, i due vettori sono lunghi uguali. Ricorda infatti che, per il <definizione>terzo principio della dinamica</definizione> (principio di azione e reazione), se un corpo esercita una forza su un secondo corpo, quest'ultimo esercita sempre sul primo una forza <u markdown="span">**di uguale modulo**, **stessa direzione** e **verso opposto**</u>. In formule,

$$\vec F_{2\to1} = -\vec F_{1\to2}.$$

Quindi, la massa grande attrae la massa piccola tanto quanto la massa piccola attrae la massa grande. Ad esempio, il Sole attrae la Terra tanto quanto essa attrae il Sole; la Terra ti attrae verso di sé tanto quanto tu attrai lei.
{% include margin-note-end.html %}


{% include box-imp.html testo="La forza gravitazionale" %}
- **Che cos'è:** una forza <u markdown="span">centrale</u> e <u markdown="span">attrattiva</u> fra due masse qualsiasi $m_1$ ed $m_2$.
- **Modulo:** $F = G\,\dfrac{m_1 \cdot m_2}{r^2}$.
- **Direzione e verso:** si disegna così:

{% include figure/figura-miniatura-vettori.html %}

sempre con i vettori di lunghezza uguale, anche se le masse sono diverse.

{% include box-end.html %}

Esplora tu stesso come cambia $F$ al variare di una fra $m_1$, $m_2$ e $r$.

{% include graph-explorer.html id="ge-forza"
   variabili="m1|m2|r" etichette="m_1|m_2|r" unita="kg|kg|m"
   min="1e2|1e2|1" max="1e6|1e6|100" default="1e3|1e3|10"
   costanti="G" costanti_valori="6.67e-11"
   formula="G*m1*m2/(r*r)" formula_latex="G\dfrac{m_1 \cdot m_2}{r^2}"
   y_simbolo="F" y_unita="N" solo_positivi="true" %}

{% include esercizi/invert-forza-gravitazionale.html %}


Utilizza questa simulazione per sperimentare con la forza gravitazionale!

{% include phet-sim.html id="gravity-force-lab"
   src="https://phet.colorado.edu/sims/html/gravity-force-lab/latest/gravity-force-lab_all.html"
   didascalia="Simulazione PhET: modifica le due masse e la distanza fra loro, e osserva come cambiano forza e vettori."
   altezza="550px" %}

## In presenza di più masse

Finora abbiamo considerato solo due masse. Ma cosa succede se su una massa $m$ agiscono contemporaneamente **più** masse, ciascuna con la propria forza gravitazionale?

{% include box-imp.html testo="Principio di sovrapposizione degli effetti" %}
In presenza di più masse, vale il <definizione>principio di sovrapposizione degli effetti</definizione>: ogni massa esercita su $m$ la propria forza gravitazionale <u markdown="span">**esattamente come se le altre non ci fossero**</u>. La forza totale su $m$ è la somma *vettoriale* di tutte queste forze:

$$\vec F_{tot} = \vec F_1 + \vec F_2 + \dots$$

{% include box-end.html %}

Poiché le forze sono vettori, per sommarle non basta sommarne i moduli: vanno sommate **come vettori**, con la stessa regola del parallelogramma già vista per la somma di due vettori qualsiasi.

{% include figure/figura-somma-forze.html %}

Nell'animazione sopra, i moduli di $\vec F_1$ e $\vec F_2$ si ottengono con la legge di Newton:

$$
F_1 = G \frac{M_1 \cdot m}{r^2}, \qquad\qquad F_2 = G \frac{M_2\cdot m}{r^2} 
$$

Prova tu stesso a rinfrescare la regola del parallelogramma, questa volta in un contesto concreto — con quattro scenari diversi.

{% include esercizi/parallelogramma-scenari.html %}


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
Questa modificazione dello spazio attuata da una massa è ciò che chiameremo <definizione>campo gravitazionale</definizione>. <u markdown="span">Essa è una quantità **vettoriale**</u>. 
{% include margin-note-end.html %}

{% include box-imp.html testo="Il campo gravitazionale" %}
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
{% include margin-note.html testo="L'ordine che seguiremo" %}
Vogliamo adesso trovare una formula per calcolare il campo gravitazionale generato da una certa massa $M$ in un punto $\vec r$. Indicheremo questa quantità con $\vec g$ (come al solito, $\vec g$ indica il vettore campo gravitazionale mentre $g$ indicherà il modulo del vettore).  
Sappiamo che un vettore ha tre caratteristiche: modulo, direzione e verso. Cominciamo quindi ricercando una formula per il **modulo**, successivamente determineremo la direzione e il verso.
{% include margin-note-end.html %}

### Il modulo del vettore campo gravitazionale
{% include margin-note.html testo="Cosa cerchiamo: una formula per il modulo" %}
Ricerchiamo dunque una formula per il modulo del campo. Per trovare tale formula, sfruttiamo l'analogia con il telo per intuirne la costruzione. 
{% include margin-note-end.html %} 

{% include margin-note.html testo="Costruzione della formula: dall'analogia del telo alla formula" %}
Abbiamo detto che il campo corrisponde alla curvatura di un telo su cui mettiamo una massa grande $M$. Per vedere bene questa curvatura dobbiamo quindi fare in modo che non ci siano altre masse che curvano il telo. Prendiamo quindi la formula 

$$
F = G \frac{M\cdot m}{r^2},
$$

che rappresenta la situazione in cui ci sono sul telo sia la massa $M$ sia la massa $m$, e <u markdown="span">togliamo la massa $m$</u>, ottenendo:



{% include eq-annotated.html
   id="fga1"
   formula="g = G \dfrac{M}{r^2}"
   frammenti="g|G|M|r^2"
   etichette="modulo del campo gravitazionale|costante di gravitazione universale|massa che genera il campo|quadrato della distanza"
   posizioni="alto|basso|alto|basso"
%}

Osserviamo quindi che
- il campo nel punto $\vec r$ dipende <u markdown="span">solo</u> dalla massa $M$ che lo genera e dal punto $\vec r$ $(G$ è una costante, quindi non può cambiare);
- il campo è <u markdown="span">direttamente proporzionale alla massa $M$</u> e <u markdown="span">inversamente proporzionale al **quadrato** della distanza da essa</u>.

Chiaramente, da un punto di vista matematico, “togliere la $m$” come abbiamo fatto prima significa in realtà dividere per $m$. 
{% include lab-virtuali/togli-massa-esploratrice-lab.html id="tm-campo" da="F" a="g" esp="2" %}
Quindi la formula per il campo gravitazionale può essere scritta in modo del tutto equivalente come

{% include eq-annotated.html
   id="fga1"
   formula="g = \dfrac{F}{m}"
   frammenti="g|F|m"
   etichette="modulo del campo gravitazionale (N/kg)|modulo della forza gravitazionale tra la massa $M$ che genera il campo e la massa  $m$ che si trova nel campo (N)|massa che si trova nel campo ma che non genera il campo (kg)"
   posizioni="alto|alto|basso"
%}

{% include margin-note-end.html %}


{% include margin-note.html testo="L'unità di misura del campo gravitazionale è il N/kg" %}
Osserviamo quindi anche che <u markdown="span">l'unità di misura del campo gravitazionale corrisponde all'unità di misura di $F$ (il newton N) diviso l'unità della massa (kg), cioè corrisponde a N/kg.</u> 

<!-- {% capture _ua_campo %}{"lhs":{"s":"g"},
 "rhs":[{"f":[[{"s":"F","u":"N"}],[{"s":"m","u":"kg"}]]}]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-campo" dati=_ua_campo %}

Quindi:

$$[g=\frac{\text N}{\text{kg}}.$$ -->

<div class="iex-nested">
{% include unit-derive.html id="ud-g" testo="Trova l'unità di misura di g"
   variabile="g"
   numeratore_simboli="F" numeratore_corrette="N"
   denominatore_simboli="m" denominatore_corrette="kg"
   opzioni="N|kg|J|m" %}
</div>
{% include margin-note-end.html %}

{% include margin-note.html testo="Massa esploratrice"%}
Inoltre, nonostante nella formula compaia la massa $m$, ricordiamo che il campo $g$ **non** dipende da essa (come visto prima, si semplifica con la $m$ contenuta in $F$). Spesso però ci capiterà di introdurre, all'interno di un certo campo generato da una massa $M$ una seconda massa $m$, di modo da misurare la forza di attrazione, da cui poi si ottiene il campo secondo la formula appena data. Pertanto, questa massa è chiamata <definizione>massa esploratrice</definizione> (nel senso che “esplora” il campo).
{% include margin-note-end.html %}

{% include box-imp.html testo="Il modulo del campo gravitazionale generato da una massa M" %}
Il campo gravitazionale generato da una massa $M$, a distanza $r$ da essa, ha **modulo**

$$g = G\,\dfrac{M}{r^2} = \dfrac{F}{m}.$$

L'unità di misura del campo, pertanto, corrisponde a N/kg.  
Inoltre, il campo **non dipende** dalla massa esploratrice $m$: dipende solo da $M$ (che lo genera) e da $r$ (il punto in cui lo si misura).  
{% include box-end.html %}

{% include margin-note.html testo="g è (quasi) costante sulla superficie di un pianeta" %}
Sulla superficie di un pianeta, di una stella, o di una qualsiasi massa **sferica**, poiché tutti i punti della superficie si trovano alla <u markdown="span">stessa distanza dal centro</u> (il raggio del pianeta), <u markdown="span">anche il modulo del campo è praticamente costante</u> su tutta la superficie. Per la Terra, questo valore vale circa $g \approx 9{,}81\ \text{N/kg}$.
{% include margin-note-end.html %}



Esplora tu stesso come cambia $g$ al variare di $M$ o di $r$.

{% include graph-explorer.html id="ge-campo"
   variabili="M|r" unita="kg|m"
   min="1e23|6.371e6" max="2e25|2.5e7" default="5.97e24|6.371e6"
   costanti="G" costanti_valori="6.67e-11"
   formula="G*M/(r*r)" formula_latex="G\dfrac{M}{r^2}"
   y_simbolo="g" y_unita="N/kg" solo_positivi="true" %}

{% include esercizi/invert-campo-gravitazionale.html %}

### Direzione e verso del vettore campo gravitazionale

Si sceglie di dare, per convenzione, al vettore campo gravitazionale $\vec g$ lo stesso verso del vettore forza $\vec F$. Quindi, il campo generato dalla massa $M$ in punto $P$ a distanza $r$ si disegna così:

{% include figure/figura-vettore-campo-g.html %}

Cioè, così come nel caso del vettore forza gravitazionale, <u markdown="span">il vettore punta sempre verso il centro della massa che genera il campo</u>.  
{% include margin-note.html testo="La formula più completa che lega campo e forza" %}
Ricordando la precedente relazione $g=F/m$ tra i **moduli** del campo e della forza, possiamo quindi scrivere che

{% include eq-annotated.html
   id="fga1"
   formula="\vec g = \dfrac{\vec F}{m}."
   frammenti="\vec g|\vec F|m"
   etichette="vettore campo gravitazionale| vettore forza gravitazionale tra $M$ ed $m$|massa esploratrice"
   posizioni="alto|alto|basso"
%}

Questa equazione è insomma molto più completa della precedente $g = F/m$, perché ci dice che:
1. il modulo di $g$ è legato al modulo del vettore forza tramite la legge $g=F/m$;
2. la direzione e il verso del vettore $\vec g$ coincidono con la direzione e il verso di $\vec F$ (poiché la massa $m$ è sempre positiva).
{% include margin-note-end.html %}

{% include box-imp.html testo="Il vettore campo gravitazione generato da una massa M" %}
Il **vettore** campo gravitazionale $\vec g$ è legato al **vettore** forza gravitazionale $\vec F$ dalla relazione

$$\vec g = \frac {\vec F} m,$$

ove $m$ è la massa esploratrice. <u markdown="span">Il vettore campo gravitazionale $\vec g$ ha pertanto **stessa direzione** e **stesso verso** del vettore forza $\vec F$</u>.


{% include box-end.html %}



### Sovrapposizione degli effetti per il campo gravitazionale

Anche per il campo gravitazionale vale lo stesso <definizione>principio di sovrapposizione degli effetti</definizione> già visto per le forze.
{% include box-imp.html testo="Sovrapposizione degli effetti (campo)" %}
In presenza di più masse, ciascuna massa genera il proprio campo <u>esattamente come se le altre non ci fossero</u>. Il campo totale in un punto dello spazio è la somma vettoriale (con la regola del parallelogramma) dei singoli campi generati da ciascuna massa:

$$\vec g_{tot} = \vec g_1 + \vec g_2 + \cdots.$$

{% include box-end.html %}

{% include figure/figura-somma-campi.html %}


## Le linee di campo


Abbiamo detto che il campo gravitazionale associa a ogni punto dello spazio un vettore. Ma chiaramente per disegnare il campo gravitazionale non potremmo certamente disegnare un vettore per ogni punto: sarebbero un'infinità di vettori tutti sovrapposti l'uno all'altro. Possiamo però trovare una soluzione molto intuitiva.  
{% include margin-note.html testo="Dalla corrente marina al concetto di linee di campo vettoriale" %}
Considera il seguente esempio di campo vettoriale, che associa ad ogni punto del mare italiano la direzione e il verso della corrente in quel punto:

{% include figura.html id="campo-correnti"
   src="/corsi/immagini/campo_correnti_mare.png"
   didascalia="Le frecce indicano il vettore velocità della corrente marina punto per punto."
   larghezza="300px" %}

Come puoi vedere, i vettori si dispongono secondo delle linee. È quindi possibile, invece di disegnare ogni vettore, sostituirli con delle linee che si chiamano <definizione>linee di campo</definizione>. 
{% include margin-note-end.html %}

{% include box-imp.html testo="Le linee di campo" %}

Le linee di campo sono linee <u>in ogni punto tangenti alla direzione del vettore campo gravitazionale in quel punto</u>. La **densità** delle linee di campo <u markdown="span">misura l'**intensità** delle linee di campo presenti in quel punto</u>. 

{% include box-end.html %}

{% include margin-note.html testo="Costruire le linee di campo" %}
Osserva come si costruisce una linea di campo a partire dai vettori: si dispongono prima i vettori del campo $\vec g$ uno via l'altro, poi si traccia la linea che li unisce, e infine vedi comparire, punto per punto, la retta tangente alla curva in quel punto: nota che ogni vettore giace esattamente su di essa.
{% include margin-note-end.html %}

{% include lab-virtuali/linea-tangente-lab.html %}

{% include margin-note.html testo="Il caso di una singola massa sferica" %}
Nel caso di una singola massa sferica che genera il campo, poiché il vettore $\vec g$ indica sempre verso la massa, le linee si disegnano così:

{% include figure/figura-linee-di-campo.html %}

Da questa immagine notiamo alcune proprietà importanti delle linee di campo <u>generate da una singola massa</u>.


1. Le linee sono radiali alla massa (cioè sono come i raggi del Sole 🌞).
2. Le linee sono più concentrate vicino alla massa e sono più rarefatte lontano da essa. Infatti <u markdown="span">la concentrazione di linee di campo misura l'intensità del campo in quel punto</u>.
3. Le linee di campo hanno sempre verso **entrante** nella massa che genera il campo.
{% include margin-note-end.html %}


{% include margin-note.html testo="Un'altra interpretazione delle linee di campo" %}
Le linee di campo hanno anche un altro significato molto intuitivo: sono le traiettorie che seguirebbe una <definizione>massa esploratrice</definizione> lasciata cadere, da ferma, in un punto qualsiasi del campo. Provalo tu stesso: trascina la massa esploratrice (pallina grigia) in un punto qualsiasi attorno alla massa $M$ e lasciala andare — osserva come "cade" muovendosi sempre più velocemente (proprio come ci si aspetta, avvicinandosi a $M$), seguendo esattamente una linea di campo.
{% include margin-note-end.html %}

{% include lab-virtuali/traiettoria-campo-singolo-lab.html %}


### Linee di campo in presenza di più masse

{% include margin-note.html testo="Dal principio di sovrapposizione degli effetti alle linee di campo in presenza di più masse" %}
Cosa succede se il campo è generato da **più masse insieme**, come ad esempio nel sistema Terra-Luna? Come abbiamo appena visto, il campo totale in ogni punto è la somma vettoriale dei campi generati da ciascuna massa. Le linee di campo, però, non sono più delle semplici rette radiali: si incurvano, perché in ogni punto risentono dell'attrazione di **entrambe** le masse, apparendo quindi come nella seguente immagine.

Prova tu stesso a verificare che questa è la forma delle linee di campo secondo la definizione data prima: clicca in un punto qualsiasi dell'immagine (fuori dai due corpi) per vedere comparire i due vettori $\vec g_T$ e $\vec g_L$ generati da Terra e Luna in quel punto, la loro somma $\vec g_{tot}$ secondo la regola del parallelogramma, e la retta tangente alla linea di campo risultante in quel punto.
{% include margin-note-end.html %}

{% include lab-virtuali/campo-terra-luna-lab.html %}

{% include margin-note.html testo="Le linee di campo come traiettorie" %}
Anche in questo caso possiamo pensare alle linee di campo come alle traiettorie di una massa esploratrice lasciata cadere, da ferma, in un punto qualsiasi. Prova tu stesso, questa volta con due masse (una grande, come la Terra, e una piccola, come la Luna): la pallina non cadrà più lungo una semplice retta, ma seguirà un percorso curvo, deciso dall'attrazione combinata delle due masse.
{% include margin-note-end.html %}

{% include lab-virtuali/traiettoria-campo-doppio-lab.html %}

# Energia Gravitazionale

{% include margin-note.html testo="Il problema della descrizione vettoriale" %}
Finora abbiamo descritto la gravità nel linguaggio delle forze e dei campi. In teoria, questo linguaggio può descrivere anche un sistema di molte masse, ma per farlo ha bisogno di sommare vettorialmente tutti i campi e tutte le forze. E questo non è facile: sommare vettorialmente tante forze può essere un problema difficile.
{% include margin-note-end.html %}

{% include margin-note.html testo="Una descrizione alternativa: l'energia" %}
Possiamo però sostituire il linguaggio delle forze e dei campi con un altro del tutto analogo, dove le grandezze non sono vettoriali ma scalari: quello dell'<definizione>energia</definizione>. È una descrizione molto ricca ed elegante, che ci permetterà di collegare in modo naturale grandezze apparentemente lontane fra loro, come la velocità di un corpo immerso in un campo gravitazionale e la distanza dalla massa che genera il campo (vedi la <a href="#moto-di-una-massa-in-un-campo-gravitazionale">sezione sul moto di una massa in un campo gravitazionale</a>).
{% include margin-note-end.html %}

## Energia potenziale gravitazionale
{% include margin-note.html testo="Perché possiamo parlare di energia potenziale?"%}
Abbiamo detto che la forza gravitazionale è una forza **centrale**. La proprietà fondamentale delle forze centrali è quella di <u markdown="span">poter definire un'energia potenziale</u> (cosa che non vale per tutte le forze in generale). Quindi ha senso parlare di <definizione>energia potenziale gravitazionale</definizione>.
{% include margin-note-end.html %}

{% include margin-note.html testo="Comprendere cos'è l'energia potenziale" %}
Quando due masse si trovano a una certa distanza, c'è dell'energia "immagazzinata" tra loro, come se fossero connesse da una molla in tensione: se lasciamo che si avvicinino spontaneamente, attratte dalla gravità, questa energia si sprigiona sotto forma di **energia cinetica**. L'energia immagazzinata da due masse per effetti della forza di gravità corrisponde all'**energia potenziale gravitazionale**.
{% include margin-note-end.html %}

{% include lab-virtuali/molla-oscillazione-lab.html %}

{% include margin-note.html testo="Calcolare l'energia potenziale" %}
Per calcolare quanta energia è immagazzinata tra due masse $M$ ed $m$ a distanza $r,$ immaginiamo di partire da due masse inizialmente a contatto e di allontanarle fino alla distanza che ci interessa. Il lavoro che dobbiamo compiere per allontanarle, vincendo la loro attrazione reciproca, <u markdown="span">si trasforma interamente in **energia potenziale gravitazionale**</u>. Quindi per calcolare l'energia potenziale dobbiamo calcolare il lavoro compiuto.


Osserva l'animazione seguente: allontanando le due masse di un tratto $r$, la forza gravitazionale (attrattiva) si oppone sempre allo spostamento, come una molla in tensione.

{% include lab-virtuali/molla-separazione-lab.html %}

Il lavoro fatto dalla forza gravitazionale mentre le due masse si allontanano di un tratto $r$ è 

$$L = -F \times \text{spostamento} = -G\frac{Mm}{r^2} \times r = -G\frac{Mm}{r^{\cancel{2}}} \times \cancel{r} = -G\frac{Mm}{r}.$$

- Nel primo passaggio scriviamo semplicemente lavoro = forza per spostamento, <u>con il segno meno perché la forza si oppone al moto</u>.
- Nel secondo passaggio sostituiamo il modulo della forza gravitazionale, $F = G\dfrac{Mm}{r^2}$ e identifichiamo la distanza percorsa con $r$.
- Nel terzo passaggio notiamo che una delle due $r$ si semplifica con una delle due potenze di $r$ al denominatore.

Questo lavoro <u>si trasforma interamente in energia potenziale gravitazionale</u>, che indichiamo con $U$:

$$U = -G\frac{Mm}{r}.$$

{% include margin-note-end.html %}

{% include margin-note.html testo="Perché, in generale, U è negativa" %}
Il segno meno ha un significato fisico preciso: indica che le due masse sono "legate" dalla reciproca attrazione. Più sono vicine, più $U$ è negativa (più energia servirebbe per separarle); allontanandosi, $U$ cresce, avvicinandosi a zero — che raggiunge solo a distanza infinita.
{% include margin-note-end.html %}

{% include margin-note.html testo="Un'espressione equivalente per U" %}
Possiamo riscrivere questa stessa formula usando direttamente il campo gravitazionale $g$, al posto della sua espressione $G\,M/r^2$:

{% include lab-virtuali/u-mgr-lab.html %}

$$U = -mgr = -G\frac{Mm}{r}.$$

Le due scritture sono **la stessa identica formula**: nella prima usiamo direttamente $g$ (il campo generato da $M$ alla distanza $r$), nella seconda sostituiamo $g = G\,M/r^2$.
{% include margin-note-end.html %}


{% include margin-note.html testo="L'unità di misura di U" %}
Essendo un'energia, $U$ si misura in joule. Verifichiamolo a partire dalla formula, ricordando che $G$ si misura in $\text N\cdot\text m^2/\text{kg}^2$: questa volta, per arrivare al risultato, serve anche qualche semplificazione.

{% capture _ua_energiapot %}{"lhs":{"s":"U"},
 "rhs":[{"o":"−","drop":true},{"s":"G","u":"N·m²/kg²"},{"o":"·"},{"f":[[{"s":"M","u":"kg"},{"o":"·"},{"s":"m","u":"kg"}],[{"s":"r","u":"m"}]]}],
 "passi":[[{"f":[["N",{"o":"·"},"m",{"o":"·"},{"t":"m","x":true},{"o":"·"},{"t":"kg","x":true},{"o":"·"},{"t":"kg","x":true}],[{"t":"kg","x":true},{"o":"·"},{"t":"kg","x":true},{"o":"·"},{"t":"m","x":true}]]}],
          ["N",{"o":"·"},"m"],["J"]]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-energiapot" dati=_ua_energiapot %}

Quindi:

$$[U]=[G]\cdot\frac{[M]\cdot[m]}{[r]}=\frac{\text N\cdot\text m^2}{\text{kg}^2}\cdot\frac{\text{kg}\cdot\text{kg}}{\text m}=\text N\cdot\text m=\text J.$$
{% include margin-note-end.html %}

{% include box-imp.html testo="Energia potenziale gravitazionale" %}
- **Che cos'è:** è uno <u markdown="span">scalare</u> che esprime l'energia immagazzinata da una massa $m$ a causa della sua posizione nel campo gravitazionale generato da una massa $M$.
- **Formula:** $U = -mgr = -G\dfrac{Mm}{r}$.
- **Unità di misura:** essendo un'energia, si misura in joule (simbolo J).
{% include box-end.html %}

Esplora tu stesso come cambia $U$ al variare di $M$, di $m$ o di $r$.

{% include graph-explorer.html id="ge-energia"
   variabili="M|m|r" unita="×10²⁴ kg|t|×10⁶ m" scala="1e24|1000|1e6"
   min="0.1|0.1|1" max="20|10|30" default="6|0.5|6.4"
   costanti="G" costanti_valori="6.67e-11"
   formula="-G*M*m/r" formula_latex="-G\dfrac{M \cdot m}{r}"
   y_simbolo="U" y_unita="GJ" y_scala="1e9" solo_positivi="true" %}

{% include esercizi/invert-energia-potenziale.html %}

### Sovrapposizione degli effetti per l'energia potenziale

In presenza di più masse, il principio di sovrapposizione degli effetti, per l'energia potenziale, ci dice la seguente cosa.

{% include box-imp.html testo="Il principio di sovrapposizione degli effetti per l'energia potenziale" %}
In presenza di più masse, ogni massa contribuisce all'energia potenziale di $m$ <u markdown="span">esattamente come se tutte le altre non ci fossero</u>. L'energia potenziale totale è data dalla somma di tutti i contributi:

$$U_{tot} = U_1+U_2 + \cdots$$

{% include box-end.html %}

Mentre la forza e il campo sono vettori e perciò richiedevano una somma vettoriale, l'energia potenziale è **scalare**, pertanto <u markdown="span">la somma delle energie potenziali è una normale somma algebrica</u>.  
{% include margin-note.html testo="Un esempio numerico" %}
Ad esempio,

{% include figure/figura-sovrapposizione-energia-potenziale.html %}

{% include margin-note-end.html %}

## Potenziale gravitazionale

{% include margin-note.html testo="Cosa stiamo cercando" %}
Esattamente come abbiamo discusso nella sezione sul campo gravitazionale, è importante ricercare quantità che descrivano non l'interazione tra due masse ma <u markdown="span">una proprietà di **una singola** massa</u>. Ricerchiamo cioè l'analogo del campo gravitazionale (che è una proprietà di **una singola** massa) per l'energia. Questa grandezza è ciò che chiamiamo <definizione>potenziale gravitazionale</definizione> (simbolo $V$).
{% include margin-note-end.html %}

| | Forza $\vec F$ | Campo $\vec g$ | Energia potenziale $U$ | Potenziale $V$ |
|---|:---:|:---:|:---:|:---:|
| **Dipende da** | due masse| una singola massa | due masse | una singola massa |


{% include margin-note.html testo="Come ottenere l'equazione per V" %}
Ricordi come siamo passati dalla forza gravitazionale $\vec F$ al campo gravitazionale $\vec g$? Abbiamo semplicemente tolto la massa esploratrice $m$, dividendo per essa: $\vec g = \vec F / m$. Possiamo fare esattamente la stessa cosa con l'energia potenziale: <u markdown="span">togliendo la massa esploratrice $m$ dall'energia potenziale gravitazionale $U$, otteniamo **il potenziale** $V$</u>:

{% include lab-virtuali/togli-massa-esploratrice-lab.html id="tm-pot" da="U" a="V" meno="true" fine="gr" %}

$$V = \frac{U}{m} = -gr = -G\frac{M}{r}.$$

Anche qui, le tre scritture sono la stessa identica formula (basta sostituire le espressioni di $U$ e di $g$ per rendersene conto).
{% include margin-note-end.html %}

{% include margin-note.html testo="Energia potenziale vs. potenziale" %}
Non confondere le due grandezze: l'<u markdown="span">energia potenziale $U$ **dipende** dalla massa esploratrice $m$</u> (quanta più massa esploratrice metti, tanta più energia immagazzini), mentre <u markdown="span">il potenziale $V$ **non dipende** da $m$</u> (proprio come il campo $\vec g$), ma dipende solo dalla massa che genera il campo e dalla distanza da essa.
{% include margin-note-end.html %}

{% include margin-note.html testo="L'unità di misura di V" %}
Analizziamo l'unità di misura di $V$: essendo il rapporto fra un'energia (J) e una massa (kg), il potenziale gravitazionale si misura in J/kg.


<!-- 
{% capture _ua_potenziale %}{"lhs":{"s":"V"},
 "rhs":[{"f":[[{"s":"U","u":"J"}],[{"s":"m","u":"kg"}]]}]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-potenziale" dati=_ua_potenziale %}

Quindi:

$$[V]=\frac{[U]}{[m]}=\frac{\text J}{\text{kg}}.$$ -->

<div class="iex-nested">
{% include unit-derive.html id="ud-V" testo="Trova l'unità di misura di V"
   variabile="V"
   numeratore_simboli="U" numeratore_corrette="J"
   denominatore_simboli="m" denominatore_corrette="kg"
   opzioni="J|kg|N|m" %}
</div>
{% include margin-note-end.html %}

{% include box-imp.html testo="Potenziale gravitazionale" %}
- **Che cos'è:** l'energia potenziale gravitazionale "per unità di massa esploratrice" — non dipende da $m$, proprio come il campo $\vec g$ non dipende da $m$.
- **Formula:** $V = \dfrac{U}{m} = -gr = -G\dfrac{M}{r}$, indipendente dalla massa $m$.
- **Unità di misura:** J/kg.
{% include box-end.html %}

Esplora tu stesso come cambia $V$ al variare di $M$ o di $r$.

{% include graph-explorer.html id="ge-potenziale"
   variabili="M|r" unita="×10²⁴ kg|×10⁶ m" scala="1e24|1e6"
   min="0.1|1" max="20|30" default="6|6.4"
   costanti="G" costanti_valori="6.67e-11"
   formula="-G*M/r" formula_latex="-G\dfrac{M}{r}"
   y_simbolo="V" y_unita="MJ/kg" y_scala="1e6" solo_positivi="true" %}

{% include esercizi/invert-potenziale.html %}

### Sovrapposizione degli effetti per il potenziale 
Esattamente come per l'energia potenziale, in presenza di più masse si può calcolare un potenziale totale in modo molto semplice. 
<!-- Ogni massa genera un potenziale <u markdown="span">esattamente come se le altre non ci fossero</u> e il potenziale totale è dato <u markdown="span">dalla somma di ciascun potenziale</u>. -->

{% include box-imp.html testo="Il principio di sovrapposizione degli effetti per il potenziale" %}

In presenza di più masse, ciascuna di esse genera un potenziale <u markdown="span">esattamente come se le altre non ci fossero</u>. Il potenziale totale è dato dalla somma algebrica di tutti i contributi. In formule,

$$V_{tot} = V_1+V_2 + \cdots$$

{% include box-end.html %}

Come per l'energia potenziale, anche qui la somma è puramente algebrica, senza bisogno di alcuna regola del parallelogramma.  
{% include margin-note.html testo="Un esempio per chiarire" %}
Riprendendo lo stesso esempio di prima:

{% include figure/figura-sovrapposizione-potenziale.html %}
{% include margin-note-end.html %}



## Superfici equipotenziali

{% include margin-note.html testo="Cosa cerchiamo: un modo grafico per rappresentare il potenziale" %}
Abbiamo compreso che il potenziale gravitazionale è sostanzialmente l'analogo energetico del campo. Ci chiediamo allora se, così come è possibile rappresentare il campo con delle linee, sia possibile in qualche modo rappresentare graficamente il potenziale.  
In effetti, è possibile rappresentare graficamente il potenziale disegnando delle superfici che prendono il nome di <definizione>superfici equipotenziali</definizione>.  
(Naturalmente, quando si disegna su un foglio, tali superfici verranno rappresentate da delle linee.)
{% include margin-note-end.html %}

{% include box-imp.html testo="Superfici equipotenziali"%}
Le superfici equipotenziali sono il luogo dei punti in cui il potenziale assume <u markdown="span">lo **stesso** valore costante</u>. Inoltre, esse sono, in ogni punto, <u markdown="span">**perpendicolari** alle linee di campo.
{% include box-end.html %}

### Le superfici equipotenziali di una singola massa sferica
Poiché il potenziale gravitazionale $V$ generato da una singola massa sferica $M$ dipende solo dalla distanza $r$ da essa ($V = -G\frac{M}{r}$), tutti i punti a distanza $r$ da $M$ hanno lo stesso potenziale. L'insieme di questi punti forma quindi una sfera. Pertanto, le superfici equipotenziali per una singola massa sferica sono semplicemente sfere concentriche a $M$.

{% include lab-virtuali/equipotenziali-sfera-3d-lab.html %}

Dovendole rappresentare su un foglio, esse diventano delle circonferenze, come nella seguente figura.

{% include figure/figura-equipotenziali-sfera.html %}




### Le superfici equipotenziali in presenza di più masse
Quando il campo è generato da più masse, come nel sistema Terra-Luna, le superfici equipotenziali non sono più sfere: si deformano, avvicinandosi maggiormente dove il campo è più intenso — esattamente come succede per le linee di campo.

{% include lab-virtuali/equipotenziali-terra-luna-lab.html %}

<!-- {% include box-imp.html testo="Superfici equipotenziali" %}
- **Che cosa sono:** l'insieme dei punti dello spazio che hanno lo stesso potenziale gravitazionale.
- **Per una singola massa:** sono sfere concentriche alla massa che genera il campo.
- **Proprietà fondamentale:** sono sempre perpendicolari alle linee di campo.
{% include box-end.html %} -->

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qcampo %}[
{"t":"Le linee di campo gravitazionale sono sempre uscenti dalla massa che le genera.","ok":false,"s":"No: sono sempre entranti, perché la forza gravitazionale è attrattiva."},
{"t":"Più le linee di campo sono fitte in un punto, più il campo è intenso in quel punto.","ok":true,"s":"Sì: la concentrazione delle linee di campo misura proprio l'intensità del campo."},
{"t":"Le superfici equipotenziali sono sempre perpendicolari alle linee di campo.","ok":true,"s":"Sì, in ogni punto: spostandosi lungo una superficie equipotenziale non si compie lavoro."},
{"t":"Se il campo è generato da due masse (come nel sistema Terra-Luna), la traiettoria di caduta di una massa esploratrice è sempre una retta.","ok":false,"s":"No: si incurva, perché in ogni punto risente dell'attrazione di entrambe le masse."},
{"t":"Per una singola massa sferica, le superfici equipotenziali sono piani paralleli fra loro.","ok":false,"s":"No: sono sfere concentriche alla massa, non piani."},
{"t":"Il campo gravitazionale generato da più masse in uno stesso punto si ottiene sommando vettorialmente i singoli campi.","ok":true,"s":"Sì, per il principio di sovrapposizione degli effetti, con la regola del parallelogramma."}
]{% endcapture %}
{% include quiz.html domande=_qcampo
   id="q-campo" senza_esempi="true" %}
{% include box-end.html %}



### Confronto tra le formule

Richiamiamo le quattro formule trovate finora in questo capitolo:

<div style="text-align:center;margin:.8rem 0;">
<div style="color:#dc2626;">$$F = G\,\frac{m_1 m_2}{r^2} \qquad\qquad g = G\,\frac{M}{r^2}$$</div>
<div style="color:#6366f1;">$$U = -G\,\frac{Mm}{r} \qquad\qquad V = -G\,\frac{M}{r}$$</div>
</div>

{% include margin-note.html testo="Vettori o scalari?" %}
<u markdown="span">La forza $\vec F$ e il campo $\vec g$ sono grandezze **vettoriali**</u>: per descriverle servono modulo, direzione e verso. <u markdown="span">L'energia potenziale $U$ e il potenziale $V$, invece, sono grandezze **scalari**</u>: bastano un numero e un'unità di misura, senza alcuna direzione. È uno dei motivi per cui il linguaggio dell'energia è così comodo da usare: sommare scalari è molto più semplice che sommare vettori.
{% include margin-note-end.html %}

{% include margin-note.html testo="Chi aumenta e chi diminuisce?" %}
C'è poi un'altra differenza importante, che riguarda **come** queste grandezze dipendono dalla distanza $r$: forza e campo (in rosso) sono inversamente proporzionali al **quadrato** della distanza, mentre l'energia potenziale e il potenziale (in indaco) sono inversamente proporzionali alla distanza stessa. Inoltre, l'energia potenziale e il potenziale hanno un **segno meno** nella formula, che significa che <u markdown="span">quando $r$ aumenta esse **aumentano** (si avvicinano a zero e perciò diventano meno negative)</u>. Al contrario, campo e forza non hanno un segno meno, quindi <u markdown="span">quando $r$ aumenta esse **diminuiscono** (si avvicinano a zero)</u>.
{% include margin-note-end.html %}

{% include margin-note.html testo="Chi cambia più velocemente?" %}
Poiché, allontanandosi, $1/r$ diminuisce molto più lentamente di $1/r^2$, <u markdown="span">l'energia potenziale e il potenziale cambiano molto più lentamente con la distanza, rispetto a forza e campo</u> — come si vede confrontando i due grafici:
{% include margin-note-end.html %}

{% include figure/figura-confronto-decadimento.html %}



| | Forza $\vec F$ | Campo $\vec g$ | Energia potenziale $U$ | Potenziale $V$ |
|---|:---:|:---:|:---:|:---:|
| **Natura** | vettore | vettore | scalare | scalare |
|**Segno**|positivo|positivo|negativo|negativo|
| **Dipendenza da $r$** | $1/r^2$ (decresce velocemente) | $1/r^2$ (decresce velocemente) | $-1/r$ (cresce lentamente) | $-1/r$ (cresce lentamente)  |



{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qenergia %}[
{"t":"L'energia potenziale gravitazionale si misura in joule (J).","ok":true,"s":"Sì, essendo un'energia."},
{"t":"L'energia potenziale gravitazionale $U$ dipende dalla massa esploratrice $m$.","ok":true,"s":"Sì: infatti $U = mgr$, e $m$ compare esplicitamente nella formula."},
{"t":"Il potenziale gravitazionale si misura in joule (J).","ok":false,"s":"No: si misura in J/kg, perché è un'energia potenziale divisa per una massa."},
{"t":"Il lavoro necessario per sollevare un oggetto di massa $m$ per un tratto $r$, vicino alla superficie terrestre, vale $mgr$.","ok":true,"s":"Sì, a patto che $r$ sia piccolo rispetto al raggio terrestre, così che $g$ sia costante."},
{"t":"Il potenziale gravitazionale $V$ dipende dalla massa esploratrice $m$.","ok":false,"s":"No: proprio come il campo $\\vec g$, il potenziale $V = U/m$ non dipende da $m$, ma solo dalla massa che genera il campo e dalla distanza."},
{"t":"Il potenziale gravitazionale è sempre negativo, qualunque sia la distanza $r$ (finita).","ok":true,"s":"Sì: $V=-GM/r$ è negativo per qualunque distanza $r$, per quanto grande: si avvicina a zero solo quando $r$ diventa enorme, senza mai raggiungerlo esattamente a nessuna distanza finita."},
{"t":"A parità di distanza, l'energia potenziale gravitazionale fra due masse più pesanti è, in valore assoluto, maggiore di quella fra due masse più leggere.","ok":true,"s":"Sì: $|U|=GMm/r$ è direttamente proporzionale al prodotto delle masse."},
{"t":"Il potenziale gravitazionale $V$ e il campo gravitazionale $\\vec g$ dipendono nello stesso modo dalla distanza $r$.","ok":false,"s":"No: $\\vec g$ dipende da $1/r^2$, mentre $V$ dipende da $1/r$ — proprio come forza ed energia potenziale."},
{"t":"Se più masse generano energia potenziale (o potenziale) nello stesso punto, bisogna sommare i singoli contributi vettorialmente, con la regola del parallelogramma, come per la forza e il campo.","ok":false,"s":"No: l'energia potenziale e il potenziale sono scalari, quindi si sommano con una semplice somma algebrica — niente parallelogramma."},
{"t":"Ogni massa contribuisce all'energia potenziale (o al potenziale) di un punto esattamente come se le altre masse non ci fossero.","ok":true,"s":"Sì: è il principio di sovrapposizione degli effetti, valido per l'energia potenziale e per il potenziale esattamente come per forza e campo."}
]{% endcapture %}
{% include quiz.html domande=_qenergia
   id="q-energia" senza_esempi="true" %}
{% include box-end.html %}

{% include esercizi/esercizio-energia-potenziale.html %}

## Moto di una massa in un campo gravitazionale

### La Forza Peso

Quando una massa $m$ si trova in un campo gravitazionale, essa è soggetta a una forza gravitazionale che si chiama <definizione>forza peso</definizione>. Dalla definizione di campo, $\vec g =\frac{\vec F}m$, otteniamo un'espressione per la forza peso:

$$\vec g =\frac{\vec F}m \quad\Rightarrow\quad \vec F = m\vec g.$$



{% include box-imp.html testo="La forza peso" %}
La forza peso $\vec F = m\vec g$ è la forza con cui un pianeta attrae un corpo di massa $m$ vicino alla sua superficie. Si misura in newton, come ogni altra forza.
{% include box-end.html %}

{% include box-warn.html testo="Massa e peso non sono la stessa cosa" %}

| | Massa $m$ | Peso $\vec F$ |
|---|:---:|:---:|
| **Tipo di grandezza** | scalare | vettoriale (diretto verso il centro del pianeta) |
| **Unità di misura** | kg | N |
| **Da cosa dipende** | è una proprietà del corpo stesso: non cambia mai | dipende dal campo gravitazionale $\vec g$ del luogo in cui si trova il corpo: $\vec F = m\vec g$ |

Ad esempio, uno stesso astronauta ha la stessa massa sulla Terra e sulla Luna, ma un peso diverso, perché $g$ è diverso nei due luoghi (circa $9{,}8\ \text{m/s}^2$ sulla Terra, contro circa $1{,}6\ \text{m/s}^2$ sulla Luna). Un astronauta di $80\ \text{kg}$ pesa quindi circa $F = 80\times9{,}8\approx 780\ \text N$ sulla Terra, ma solo $F = 80\times1{,}6\approx 130\ \text N$ sulla Luna.

{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qpeso %}[
{"t":"La forza peso e la massa di un corpo sono la stessa grandezza, misurata in unità diverse.","ok":false,"s":"No: sono due grandezze diverse. La massa (kg) è una proprietà invariante del corpo; il peso (N) è una forza, e dipende anche dal valore di $g$ nel luogo in cui ci si trova."},
{"t":"Il peso di un corpo dipende dal valore del campo gravitazionale nel luogo in cui si trova.","ok":true,"s":"Sì: $F=mg$, quindi a parità di massa, un $g$ diverso dà un peso diverso."},
{"t":"Un astronauta ha la stessa massa sulla Terra e sulla Luna.","ok":true,"s":"Sì: la massa è una proprietà del corpo stesso, indipendente dal luogo in cui si trova."},
{"t":"Un astronauta pesa lo stesso sulla Terra e sulla Luna.","ok":false,"s":"No: il peso dipende da $g$, che sulla Luna è circa 6 volte più piccolo che sulla Terra — quindi l'astronauta pesa molto meno."},
{"t":"La forza peso è diretta verso il centro del pianeta che la genera.","ok":true,"s":"Sì, come il campo gravitazionale $\\vec g$ a cui è associata."},
{"t":"La Terra non è perfettamente sferica: è un po' schiacciata ai poli, cioè il raggio polare è leggermente più piccolo di quello equatoriale. Una persona che cammina dal Polo Nord verso l'equatore vede quindi il proprio peso aumentare.","ok":false,"s":"No: il peso <em>diminuisce</em>. Andando verso l'equatore la persona si allontana dal centro della Terra, e poiché $g=GM_\\oplus/r^2$, un $r$ più grande dà un $g$ (e quindi un peso $F=mg$) più piccolo. Al polo $g\\approx9{,}83\\ \\text{m/s}^2$, all'equatore $g\\approx9{,}78\\ \\text{m/s}^2$ (a questa differenza contribuisce anche la rotazione terrestre)."},
{"t":"Se la massa della Terra raddoppiasse, ma il suo raggio restasse lo stesso, il nostro peso raddoppierebbe.","ok":true,"s":"Sì: $g=GM_\\oplus/R_\\oplus^2$ è direttamente proporzionale a $M_\\oplus$, e il peso $F=mg$ è proporzionale a $g$."},
{"t":"Se il raggio della Terra raddoppiasse, ma la sua massa restasse la stessa, il nostro peso si dimezzerebbe.","ok":false,"s":"No: si ridurrebbe a <em>un quarto</em>, perché $g=GM_\\oplus/R_\\oplus^2$ dipende dall'inverso del <em>quadrato</em> del raggio."},
{"t":"Nel punto che si trova esattamente a metà strada fra la Terra e la Luna, un'astronave non ha peso, perché le attrazioni di Terra e Luna si compensano.","ok":false,"s":"No: la Terra ha una massa circa $81$ volte più grande di quella della Luna, quindi a metà strada la sua attrazione prevale nettamente. Il punto in cui le due attrazioni si compensano si trova molto più vicino alla Luna (a circa il $90\\%$ della distanza Terra-Luna)."},
{"t":"Gli astronauti sulla Stazione Spaziale Internazionale (a circa $400\\ \\text{km}$ di quota) galleggiano perché lassù il campo gravitazionale terrestre è praticamente nullo.","ok":false,"s":"No: a $400\\ \\text{km}$ di quota si è a $r\\approx6\\,770\\ \\text{km}$ dal centro della Terra, e $g$ vale ancora circa $8{,}7\\ \\text{m/s}^2$, quasi il $90\\%$ del valore a terra! Gli astronauti galleggiano perché la stazione e tutto ciò che contiene stanno cadendo insieme verso la Terra (mentre le girano intorno): è la cosiddetta <em>caduta libera</em>."}
]{% endcapture %}
{% include quiz.html domande=_qpeso
   id="q-peso" senza_esempi="true" %}
{% include box-end.html %}

{% include esercizi/esercizio-forza-peso.html %}

### L'Accelerazione Gravitazionale

Quando una massa $m$ si muove in un campo gravitazionale $\vec g$, essa è soggetta ad una forza. Ricordando che, per il secondo principio della dinamica,

$$\vec F = m \vec a,$$

essa è dunque soggetta anche a un'accelerazione. Confrontando con l'equazione che lega la forza al campo gravitazionale $\vec F = m \vec g,$ comprendiamo che possiamo identificare il campo gravitazionale con l'accelerazione a cui è soggetta la massa $m$. 

{% include lab-virtuali/a-uguale-g-lab.html %}

{% include box-imp.html testo="L'accelerazione di una massa in un campo gravitazioanle" %}
L'accelerazione $\vec a$ di una massa immersa in un campo gravitazionale $\vec g$ è uguale al campo: 

$$\vec a = \vec g.$$


{% include box-end.html %}

{% include box-ricorda.html testo="Dall'accelerazione al campo" %}
Ricorda che l'accelerazione è definita come $\vec a = \dfrac{\Delta \vec v}{\Delta t}$. Poiché il campo gravitazionale altro non è che l'accelerazione della massa $m$, possiamo sostituire $a$ con $g$:

{% include lab-virtuali/g-deltav-deltat-lab.html %}

$$\vec g = \frac{\Delta \vec v}{\Delta t}.$$

{% include box-end.html %}

Infatti, puoi provare con il seguente esercizio che l'unità di misura del campo corrisponde all'unità di misura dell'accelerazione.

{% include esercizi/unita-nkg.html %}

{% include esercizi/esercizio-accelerazione.html %}

### L'Energia Meccanica

Nello spazio non ci sono attriti: una massa che si muove in un campo gravitazionale forma, insieme alla massa che genera il campo, un sistema isolato. Vale quindi il [teorema di conservazione dell'energia meccanica]({{ '/corsi/meccanica/06_Energia/' | relative_url }}#i-sistemi-isolati-e-la-conservazione-dellenergia-meccanica) che hai già incontrato.

{% include box-imp.html testo="Conservazione dell'energia meccanica nel campo gravitazionale" %}
Durante il moto di una massa $m$ nel campo gravitazionale generato da $M$, l'energia meccanica totale resta costante:

$$E = K + U = \frac{1}{2}mv^2 - G\frac{Mm}{r} = \text{costante}.$$

Poiché la somma non cambia, energia cinetica ed energia potenziale si scambiano energia:
- **avvicinandosi** a $M$ ($r$ diminuisce), $U$ diminuisce (diventa più negativa), quindi $K$ aumenta: la massa **accelera**;
- **allontanandosi** da $M$ ($r$ aumenta), $U$ aumenta (si avvicina a zero), quindi $K$ diminuisce: la massa **rallenta**.
{% include box-end.html %}

Puoi verificarlo con la seguente animazione, in cui puoi costruire il tuo proprio sistema solare!

  {% include phet-sim.html id="gravity-energy-lab"
     src="https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system_all.html"
     didascalia="Osserva come, all'avvicinarsi delle due masse, la loro velocità (e quindi l'energia cinetica) aumenti; all'allontanarsi delle masse la loro velocità (energia cinetica) diminuisce, in linea con la conservazione dell'energia meccanica."
     altezza="550px" %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qmoto %}[
{"t":"Durante il moto in un campo gravitazionale, l'energia cinetica $K$ si conserva, in assenza di attriti.","ok":false,"s":"No: a conservarsi è l'energia meccanica totale $E=K+U$, non $K$ da sola, che infatti cambia continuamente."},
{"t":"Se una massa si avvicina a $M$, la sua energia cinetica aumenta.","ok":true,"s":"Sì: $U$ diminuisce e, per mantenere $E$ costante, $K$ deve aumentare."},
{"t":"Se una massa si allontana da $M$, la sua energia potenziale diminuisce.","ok":false,"s":"No: allontanandosi, $U$ aumenta (si avvicina a zero)."},
{"t":"L'energia meccanica totale $E=K+U$ può cambiare durante il moto, se l'unica forza in gioco è quella gravitazionale.","ok":false,"s":"No: in questo caso $E$ resta sempre costante, proprio perché la forza gravitazionale è una forza centrale."},
{"t":"Una massa che si allontana dalla massa che genera il campo rallenta.","ok":true,"s":"Sì: l'energia potenziale aumenta, quindi quella cinetica deve diminuire."},
{"t":"La conservazione dell'energia meccanica vale per la forza gravitazionale perché è una forza centrale.","ok":true,"s":"Sì: è proprio la proprietà, comune a tutte le forze centrali, che permette di definire un'energia potenziale."}
]{% endcapture %}
{% include quiz.html domande=_qmoto
   id="q-moto" senza_esempi="true" %}
{% include box-end.html %}


# Esercizi di riepilogo

### La forza gravitazionale

{% include ex.html diff=1 %}
Smista le seguenti affermazioni: sono vere o false per la forza gravitazionale?

{% capture _s_vero_falso_grav %}[
{"t":"È sempre attrattiva, mai repulsiva","c":0},
{"t":"È inversamente proporzionale al quadrato della distanza","c":0},
{"t":"Ha lo stesso modulo su entrambi i corpi (terzo principio della dinamica)","c":0},
{"t":"È una forza centrale","c":0},
{"t":"Diventa repulsiva se le due masse sono molto vicine","c":1},
{"t":"Non dipende affatto dalle masse dei due corpi, solo dalla distanza","c":1},
{"t":"È più intensa quando le masse sono lontane fra loro","c":1}
]{% endcapture %}
{% include sort.html id="sortVeroFalsoGrav" dati=_s_vero_falso_grav col0="Vero" col1="Falso" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Completa le frasi.

{% include fill.html prima="La forza gravitazionale fra due masse è sempre" tipo="drop" opts="attrattiva|repulsiva|nulla" ok="attrattiva" dopo="." s="Non è mai repulsiva, a differenza di altre forze che vedrai più avanti (come quella elettrica fra cariche dello stesso segno)." %}

{% include fill.html prima="Il vettore campo gravitazionale generato da una massa $M$ punta sempre" tipo="drop" opts="verso|in direzione opposta a|perpendicolarmente a" ok="verso" dopo=" $M$." s="Coerentemente con il fatto che la forza gravitazionale è sempre attrattiva." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Nella legge di gravitazione universale $F = G\dfrac{m_1 m_2}{r^2}$, che cosa rappresenta esattamente la distanza $r$, quando i due corpi sono due sfere?

{% include fill.html prima="$r$ è la distanza fra" tipo="drop" opts="le superfici delle due sfere|i centri delle due sfere|il centro della sfera più grande e la superficie di quella più piccola" ok="i centri delle due sfere" dopo="." s="È la distanza fra i centri: per questo, ad esempio, sulla superficie terrestre si usa $r = R_\oplus$ (il raggio della Terra), e non $r=0$." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include tf.html q="La Luna attrae la Terra con una forza minore di quella con cui la Terra attrae la Luna, perché la Luna ha una massa molto più piccola." ok=false s="No: per il terzo principio della dinamica, le due forze sono sempre uguali in modulo (e opposte in verso), qualunque sia la differenza fra le due masse." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
La forza gravitazionale agisce fra **qualsiasi** coppia di oggetti dotati di massa, quindi anche fra te e la sedia su cui sei seduto in questo momento. Perché allora non la senti mai, nella vita di tutti i giorni?
{% include ex-sol.html %}
La forza gravitazionale $F = G\dfrac{m_1 m_2}{r^2}$ dipende dal prodotto delle due masse, moltiplicato per la costante $G \approx 6{,}67\times10^{-11}\ \text{N}\cdot\text m^2/\text{kg}^2$: un numero estremamente piccolo. Gli oggetti che maneggiamo ogni giorno (sedie, libri, persone) hanno masse dell'ordine di pochi chilogrammi o poche decine di chilogrammi: il prodotto $m_1 m_2$ resta comunque piccolo, e moltiplicato per un $G$ così minuscolo dà una forza del tutto trascurabile. Solo quando almeno una delle due masse è enorme (un pianeta, una stella) la forza diventa abbastanza intensa da essere percepibile.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Elisa (massa $55\ \text{kg}$) e Marco (massa $70\ \text{kg}$) sono seduti sullo stesso divano, a mezzo metro di distanza l'uno dall'altra. Calcola l'intensità della forza gravitazionale con cui si attraggono. Esprimi il risultato in notazione scientifica.

{% include sci.html prima="$F=$" coeff="1.03" exp="-6" s="$1{,}03\times10^{-6}\ \text N$" %}

{% include ex-sol.html %}
$$F = G\frac{m_1 m_2}{r^2} = 6{,}67\times10^{-11}\times\frac{55\times70}{0{,}5^2} \approx 1{,}03\times10^{-6}\ \text N.$$

Una forza di poco più di un milionesimo di newton: totalmente impercettibile, esattamente come previsto nell'esercizio precedente.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
In breve: in cosa consisteva l'apparato usato da Cavendish, e cosa ha permesso di determinare per la prima volta?
{% include ex-sol.html %}
L'apparato era la **bilancia di torsione**: un'asta orizzontale sospesa al centro a un filo sottilissimo, con una piccola sfera di massa $m$ a un'estremità. Una sfera grande di massa $M$, posta vicino a essa, la attrae gravitazionalmente e fa ruotare leggermente l'asta, torcendo il filo. Misurando l'angolo di torsione (e quindi la forza) per masse e distanze note, Cavendish riuscì a determinare per la prima volta il valore della **costante di gravitazione universale $G$**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Due amici, seduti agli estremi opposti di una stanza, si attraggono gravitazionalmente. Il primo ha una massa doppia rispetto al secondo. Confronta i moduli delle due forze che si scambiano: quella con cui il primo attrae il secondo, e quella con cui il secondo attrae il primo.
{% include ex-sol.html %}
Per il **terzo principio della dinamica**, le due forze hanno sempre **lo stesso modulo** (e verso opposto), indipendentemente da quanto siano diverse le due masse. Non fa quindi alcuna differenza che uno dei due amici sia più pesante dell'altro: si attraggono a vicenda con la stessa identica intensità.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Sai già che $G$ si misura in $\text N\cdot\text m^2/\text{kg}^2$. Usando il **secondo principio della dinamica** per riscrivere il newton, qual è l'unità di misura di $G$ espressa soltanto in termini delle unità fondamentali del Sistema Internazionale (kg, m, s)?
<div class="iex-choices" id="mcqUnitaG">
<button class="iex-choice-btn" data-v="a">$\text{kg}\cdot\text m^2/\text s^2$</button>
<button class="iex-choice-btn" data-v="b">$\text{kg}/(\text m\cdot\text s^2)$</button>
<button class="iex-choice-btn" data-v="c">$\text m^3/(\text{kg}\cdot\text s^2)$</button>
<button class="iex-choice-btn" data-v="d">$\text m^2/(\text{kg}\cdot\text s)$</button>
</div>
<div class="iex-fb" id="mcqUnitaGfb"></div>
<script>
(function(){
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  var btns=document.querySelectorAll('#mcqUnitaG .iex-choice-btn');
  var fb=document.getElementById('mcqUnitaGfb');
  var correctV='c';
  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
      if(btn.disabled) return;
      btns.forEach(function(b){ b.disabled = true; });
      var correct = btn.dataset.v === correctV;
      fb.style.display = 'block';
      if(correct){
        btn.className = 'iex-choice-btn correct';
        fb.className = 'iex-fb ok';
        fb.innerHTML = '&#10003; Esatto! Sostituendo $\\text N = \\text{kg}\\cdot\\text m/\\text s^2$: $[G] = \\dfrac{\\text{kg}\\cdot\\text m/\\text s^2 \\cdot \\text m^2}{\\text{kg}^2} = \\dfrac{\\text m^3}{\\text{kg}\\cdot\\text s^2}$.';
        _shoot(btn);
      } else {
        btn.className = 'iex-choice-btn wrong';
        var cb=document.querySelector('#mcqUnitaG .iex-choice-btn[data-v="c"]');
        cb.className = 'iex-choice-btn correct';
        fb.className = 'iex-fb err';
        fb.innerHTML = 'Non è corretto: sostituendo $\\text N = \\text{kg}\\cdot\\text m/\\text s^2$ in $\\text N\\cdot\\text m^2/\\text{kg}^2$, un fattore $\\text{kg}$ si semplifica e resta $\\text m^3/(\\text{kg}\\cdot\\text s^2)$.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Sei coppie di sfere si attraggono gravitazionalmente. In ciascuna coppia sono indicate le due masse e la distanza fra i centri (con $m$ e $r$ fissati). Ordinale dalla coppia che si attrae **più debolmente** a quella che si attrae **più intensamente**.

{% capture _d_ord_forze %}[
{"t":"$m,\\ m$ — distanza $3r$","pos":0},
{"t":"$m,\\ m$ — distanza $2r$","pos":1},
{"t":"$2m,\\ 2m$ — distanza $3r$","pos":2},
{"t":"$m,\\ m$ — distanza $r$","pos":3},
{"t":"$3m,\\ m$ — distanza $r$","pos":4},
{"t":"$m,\\ m$ — distanza $r/2$","pos":5}
]{% endcapture %}
{% include order.html id="ordForze" dati=_d_ord_forze direz="dalla forza più debole alla più intensa" %}

{% include ex-sol.html %}
Rispetto alla coppia di riferimento ($m$, $m$, distanza $r$), le forze valgono rispettivamente $\tfrac19$, $\tfrac14$, $\tfrac49$, $1$, $3$, $4$ volte: la massa entra nel prodotto $m_1m_2$, la distanza entra al quadrato al denominatore.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Nell'esperimento della bilancia di torsione, se dimezzassi la distanza $r$ fra le due sfere, come cambierebbe la forza misurata? (Usa quanto hai osservato nell'animazione della bilancia di Cavendish.)
{% include ex-sol.html %}
Poiché $F$ è inversamente proporzionale al **quadrato** della distanza, dimezzando $r$ la forza diventa

$$F' = G\frac{Mm}{(r/2)^2} = G\frac{Mm}{r^2/4} = 4\,G\frac{Mm}{r^2} = 4F,$$

cioè **quadrupla**: esattamente l'opposto di ciò che si osserva raddoppiando $r$ (dove la forza diventa un quarto).
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Se raddoppiassi **contemporaneamente** sia le due masse $m_1$ ed $m_2$, sia la distanza $r$ fra loro, di quanto cambierebbe l'intensità della forza gravitazionale?
{% include ex-sol.html %}
Sostituendo $2m_1$, $2m_2$ e $2r$ nella formula:

$$F' = G\frac{(2m_1)(2m_2)}{(2r)^2} = G\frac{4\,m_1 m_2}{4\,r^2} = G\frac{m_1 m_2}{r^2} = F.$$

Il fattore $4$ che compare al numeratore (dal prodotto delle masse raddoppiate) si semplifica esattamente con il fattore $4$ al denominatore (dalla distanza raddoppiata, elevata al quadrato): la forza **resta invariata**.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Giove ha una massa circa $318$ volte quella della Terra, ma orbita attorno al Sole a una distanza mediamente $5{,}2$ volte maggiore di quella Terra-Sole. Di quante volte l'attrazione gravitazionale che Giove esercita sul Sole è più intensa di quella esercitata dalla Terra sul Sole?
{% include ex-sol.html %}
La forza gravitazionale è $F = G\dfrac{Mm}{r^2}$: a parità di $G$ e della massa del Sole, il rapporto tra le due forze è

$$\frac{F_{\text{Giove}}}{F_{\text{Terra}}} = \frac{M_{\text{Giove}}/r_{\text{Giove}}^2}{M_{\text{Terra}}/r_{\text{Terra}}^2} = \frac{M_{\text{Giove}}}{M_{\text{Terra}}} \cdot \left(\frac{r_{\text{Terra}}}{r_{\text{Giove}}}\right)^2 = \frac{318}{5{,}2^2} \approx \frac{318}{27} \approx 11{,}8.$$

Nonostante Giove sia molto più lontano dal Sole, la sua massa enorme prevale: attira il Sole con una forza quasi $12$ volte più intensa di quella della Terra.
{% include ex-sol-end.html %}

### Più masse: la sovrapposizione delle forze

{% include ex.html diff=2 %}
Su una massa $m$ agiscono contemporaneamente due forze gravitazionali fra loro **perpendicolari**, generate da due masse diverse: una di modulo $F_1 = 3\times10^{-8}\ \text N$, l'altra di modulo $F_2 = 4\times10^{-8}\ \text N$. Trova il modulo della forza totale su $m$. Esprimi il risultato in notazione scientifica.

{% include sci.html prima="$F_{tot}=$" coeff="5" exp="-8" s="$5\times10^{-8}\ \text N$" %}

{% include ex-sol.html %}
Essendo le due forze perpendicolari, il modulo della loro somma vettoriale si trova con il teorema di Pitagora:

$$F_{tot} = \sqrt{F_1^2 + F_2^2} = \sqrt{(3\times10^{-8})^2+(4\times10^{-8})^2} = \sqrt{9+16}\times10^{-8} = 5\times10^{-8}\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Su una massa $m$ agiscono contemporaneamente due forze gravitazionali, $\vec F_1$ (dovuta a $M_1)$ e $\vec F_2$ (dovuta a $M_2)$, come in figura.
{% include lab-virtuali/vdrag-somma-forze-lab.html %}
{% include ex-end.html %}

### Il campo gravitazionale

{% include ex.html diff=1 %}
Il campo gravitazionale generato da una massa $M$ in un punto dipende da $M$ e dalla distanza $r$. Da quale altra grandezza **non** dipende, anche se spesso la si utilizza proprio per misurarlo?
{% include ex-sol.html %}
Non dipende dalla <definizione>massa esploratrice</definizione> $m$: anche se per misurare $g$ introduciamo spesso una massa $m$ e calcoliamo $g=F/m$, il risultato non dipende da quale valore di $m$ abbiamo scelto (si semplifica), perché $F$ stessa è proporzionale a $m$.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Il campo gravitazionale generato da una massa $M$ vale $g$ in un certo punto. Collega ogni modifica all'effetto che produce sul modulo del campo.

{% capture _d_effetto_g %}[
{"l":"Raddoppio $M$ (stessa distanza)","r":"$g$ raddoppia"},
{"l":"Raddoppio la distanza $r$","r":"$g$ diventa un quarto"},
{"l":"Dimezzo la distanza $r$","r":"$g$ quadruplica"},
{"l":"Raddoppio la massa esploratrice $m$","r":"$g$ non cambia"},
{"l":"Dimezzo $M$ (stessa distanza)","r":"$g$ si dimezza"}
]{% endcapture %}
{% include match.html id="matchEffettoG" dati=_d_effetto_g col1="Modifica" col3="Effetto su $g$" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Marte ha massa $M = 6{,}42\times10^{23}\ \text{kg}$ e raggio $R = 3\,390\ \text{km}$. Calcola il modulo del campo gravitazionale sulla sua superficie.

{% include num.html id="numgMarte" valore="3.73" unit="N/kg" tol="2" %}

{% include ex-sol.html %}
Sulla superficie la distanza dal centro è il raggio, $r = R = 3{,}39\times10^6\ \text m$:

$$g = G\frac{M}{R^2} = 6{,}67\times10^{-11}\times\frac{6{,}42\times10^{23}}{(3{,}39\times10^6)^2} \approx 3{,}73\ \text{N/kg}.$$

Circa il $38\%$ del valore terrestre.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un punto $P$ si trova sulla retta che congiunge due sfere: a $1\ \text m$ dal centro della sfera $M_1 = 500\ \text{kg}$ (alla sua sinistra) e a $3\ \text m$ dal centro della sfera $M_2 = 2\,000\ \text{kg}$ (alla sua destra). Calcola il modulo del campo gravitazionale totale in $P$, ed indicane il verso. Esprimi il risultato in notazione scientifica.

{% include sci.html prima="$g_{tot}=$" coeff="1.85" exp="-8" tol="2" s="$1{,}85\times10^{-8}\ \text{N/kg}$" %}

{% include fill.html prima="Il campo totale in $P$ punta verso" tipo="drop" opts="$M_1$ (sinistra)|$M_2$ (destra)" ok="$M_1$ (sinistra)" dopo="." s="Il campo di $M_1$, pur essendo generato dalla massa più piccola, è più intenso, perché $P$ è molto più vicino a essa." %}

{% include ex-sol.html %}
I due campi hanno la stessa direzione (la retta che congiunge le sfere) ma versi opposti: $\vec g_1$ punta verso $M_1$ (a sinistra), $\vec g_2$ verso $M_2$ (a destra).

$$g_1 = G\frac{M_1}{r_1^2} = 6{,}67\times10^{-11}\times\frac{500}{1^2}\approx 3{,}34\times10^{-8}\ \text{N/kg},\qquad g_2 = G\frac{M_2}{r_2^2} = 6{,}67\times10^{-11}\times\frac{2\,000}{3^2}\approx 1{,}48\times10^{-8}\ \text{N/kg}.$$

Essendo opposti, il modulo del campo totale è la **differenza** dei moduli: $g_{tot} = g_1 - g_2 \approx 1{,}85\times10^{-8}\ \text{N/kg}$, con il verso del più intenso, cioè verso $M_1$. Nota che, pur avendo massa quadrupla, $M_2$ "perde": la distanza tripla divide il suo campo per $9$.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
La cima del Monte Everest si trova a circa $8\,850\ \text m$ sul livello del mare. Spiega perché il valore di $g$ lassù è, con ottima approssimazione, lo stesso che al livello del mare, anche se le due altezze sono diverse. (Suggerimento: confronta questi $8\,850\ \text m$ con il raggio terrestre, $R_\oplus\approx6\,371\ \text{km}$.)

Se volessimo invece essere precisi: il valore di $g$ misurato sulla cima dell'Everest sarebbe

{% include fill.html prima="" tipo="drop" opts="più grande|più piccolo|esattamente uguale" ok="più piccolo" dopo=" di quello misurato al livello del mare." s="Sulla cima, la distanza $r$ dal centro della Terra è leggermente maggiore: poiché $g=GM_\oplus/r^2$ è inversamente proporzionale al quadrato di $r$, un $r$ (di pochissimo) più grande dà un $g$ (di pochissimo) più piccolo." %}

{% include ex-sol.html %}
Il campo gravitazionale dipende dalla distanza $r$ **dal centro della Terra**, non dall'altitudine sul livello del mare in sé. Il raggio terrestre è $R_\oplus\approx6\,371\ \text{km} = 6\,371\,000\ \text m$: gli $8\,850\ \text m$ dell'Everest sono meno dello $0{,}15\%$ di questo valore. La distanza dal centro della Terra cambia quindi in modo del tutto trascurabile fra la vetta e il livello del mare, e con essa $g=GM_\oplus/r^2$ resta, con ottima approssimazione, costante.

Se però si vuole essere precisi, la vetta è **più lontana** dal centro della Terra ($r = R_\oplus + 8\,850\ \text m$, anziché $R_\oplus$): poiché $g$ è inversamente proporzionale al **quadrato** di $r$, un $r$ leggermente maggiore dà un $g$ leggermente **più piccolo** (anche se la differenza, circa lo $0{,}3\%$, è del tutto trascurabile in pratica).
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
A quale distanza dal centro della Terra il campo gravitazionale vale la **metà** di quello sulla superficie? (Raggio terrestre $R_\oplus \approx 6\,371\ \text{km}$.) Esprimi il risultato in metri, in notazione scientifica.

{% include sci.html prima="$r=$" coeff="9.01" exp="6" s="$9{,}01\times10^6\ \text m$" %}

{% include ex-sol.html %}
Vogliamo che $g(r) = \frac12 g(R_\oplus)$, cioè

$$G\frac{M_\oplus}{r^2} = \frac12\, G\frac{M_\oplus}{R_\oplus^2} \quad\Longrightarrow\quad r^2 = 2R_\oplus^2 \quad\Longrightarrow\quad r = R_\oplus\sqrt 2 \approx 6\,371\,000\times1{,}414 \approx 9{,}01\times10^6\ \text m.$$

Cioè a circa $9\,010\ \text{km}$ dal centro — circa $2\,640\ \text{km}$ sopra la superficie.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
La Luna ha massa $M_L = 7{,}35\times10^{22}\ \text{kg}$ e raggio $R_L = 1\,737\ \text{km}$.

1. Calcola il campo gravitazionale sulla sua superficie.
{% include num.html id="numgLuna" valore="1.62" unit="N/kg" tol="2" %}
2. Quante volte è più piccolo di quello terrestre ($9{,}81\ \text{N/kg}$)?
{% include num.html id="numRapLuna" valore="6.04" tol="3" %}

{% include ex-sol.html %}
$$g_L = G\frac{M_L}{R_L^2} = 6{,}67\times10^{-11}\times\frac{7{,}35\times10^{22}}{(1{,}737\times10^6)^2}\approx 1{,}62\ \text{N/kg},\qquad \frac{9{,}81}{1{,}62}\approx 6{,}0.$$

È proprio l'origine del famoso "sulla Luna si pesa un sesto".
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un pianeta ha **metà** del raggio della Terra e **un decimo** della sua massa. Quanto vale il campo gravitazionale sulla sua superficie? (Non serve conoscere né $M_\oplus$ né $R_\oplus$: usa $g_\oplus = 9{,}81\ \text{N/kg}$.)

{% include num.html id="numPianeta" valore="3.92" unit="N/kg" tol="2" %}

{% include ex-sol.html %}
$$g = G\frac{M_\oplus/10}{(R_\oplus/2)^2} = \frac{1/10}{1/4}\,G\frac{M_\oplus}{R_\oplus^2} = \frac{4}{10}\,g_\oplus = 0{,}4\times9{,}81\approx3{,}92\ \text{N/kg}.$$

Un pianeta così è molto simile a Marte: confronta con l'esercizio su Marte!
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
A quale distanza dal centro della Terra bisogna portarsi perché un oggetto pesi quanto peserebbe sulla superficie della Luna ($g_L\approx1{,}62\ \text{N/kg}$)? ($R_\oplus \approx 6\,371\ \text{km}$, $g_\oplus = 9{,}81\ \text{N/kg}$.) Esprimi il risultato in metri, in notazione scientifica.

{% include sci.html prima="$r=$" coeff="1.57" exp="7" tol="2" s="$1{,}57\times10^7\ \text m$" %}

{% include ex-sol.html %}
Il campo decresce come $1/r^2$, quindi $\dfrac{g_L}{g_\oplus} = \dfrac{R_\oplus^2}{r^2}$, da cui

$$r = R_\oplus\sqrt{\frac{g_\oplus}{g_L}} = 6{,}371\times10^6\times\sqrt{\frac{9{,}81}{1{,}62}}\approx 1{,}57\times10^7\ \text m,$$

cioè circa $2{,}5$ raggi terrestri dal centro.
{% include ex-sol-end.html %}

### Le linee di campo

{% include ex.html diff=1 %}
Due punti $A$ e $B$ si trovano rispettivamente a distanza $r$ e $3r$ da una massa $M$. In quale dei due punti le linee di campo sono più fitte? In quale dei due il campo gravitazionale è più intenso?
{% include ex-sol.html %}
Le linee di campo sono più concentrate vicino alla massa: sono quindi più fitte in $A$ (più vicino a $M$). Poiché la concentrazione delle linee misura l'intensità del campo, anche il campo è più intenso in $A$ — coerentemente con $g=GM/r^2$, che è più grande per $r$ più piccolo.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Vero o falso, sulla definizione di linea di campo?

{% include tf.html q="In ogni suo punto, una linea di campo è tangente al vettore campo in quel punto." ok=true s="Sì, è proprio così che una linea di campo è definita." %}
{% include tf.html q="Una linea di campo può essere disegnata come una qualunque linea, purché passi abbastanza vicino alla massa che genera il campo." ok=false s="No: passare vicino alla massa non basta. La condizione che definisce una linea di campo è che sia tangente, in ogni suo punto, al vettore campo in quel punto." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Il campo gravitazionale associa a ogni punto dello spazio un vettore. Usando questo fatto, spiega perché due linee di campo gravitazionale non possono mai incrociarsi in nessun punto dello spazio.
{% include ex-sol.html %}
Se due linee di campo si incrociassero in un punto $P$, in quel punto il campo dovrebbe avere **due direzioni diverse** contemporaneamente (una per ciascuna linea che passa per $P$). Ma il campo gravitazionale associa a ogni punto dello spazio **un solo** vettore, con una sola direzione e un solo verso: due linee non possono quindi mai incrociarsi.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Una linea di campo gravitazionale potrebbe mai chiudersi su sé stessa, formando un anello? (Suggerimento: pensa a una massa esploratrice che, lasciata libera, percorre la linea di campo, e usa la conservazione dell'energia.)
{% include ex-sol.html %}
No. Una massa esploratrice lasciata libera si muove lungo la linea di campo **nel verso del campo** e accelera: la sua energia cinetica $K$ aumenta, quindi (conservazione dell'energia meccanica) la sua energia potenziale $U$ **diminuisce** continuamente. Se la linea fosse un anello, la massa tornerebbe al punto di partenza con un'energia potenziale più bassa di quella che aveva all'inizio **nello stesso punto**: impossibile, perché $U$ dipende solo dalla posizione. Seguendo una linea di campo il potenziale scende sempre, e per questo le linee di campo gravitazionale non possono chiudersi: finiscono sempre sulle masse che generano il campo.
{% include ex-sol-end.html %}

### L'energia potenziale gravitazionale

{% include ex.html diff=1 %}
Perché è possibile definire un'energia potenziale per la forza gravitazionale?
<div class="iex-choices" id="mcqCentrale">
<button class="iex-choice-btn" data-v="a">Perché è sempre attrattiva</button>
<button class="iex-choice-btn" data-v="b">Perché è una forza centrale</button>
<button class="iex-choice-btn" data-v="c">Perché la massa esploratrice è arbitraria</button>
<button class="iex-choice-btn" data-v="d">Perché la costante $G$ è universale</button>
</div>
<div class="iex-fb" id="mcqCentralefb"></div>
<script>
(function(){
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  var btns=document.querySelectorAll('#mcqCentrale .iex-choice-btn');
  var fb=document.getElementById('mcqCentralefb');
  var correctV='b';
  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
      if(btn.disabled) return;
      btns.forEach(function(b){ b.disabled = true; });
      var correct = btn.dataset.v === correctV;
      fb.style.display = 'block';
      if(correct){
        btn.className = 'iex-choice-btn correct';
        fb.className = 'iex-fb ok';
        fb.innerHTML = '&#10003; Esatto! È proprio la proprietà di essere una forza <strong>centrale</strong> (avere come direzione la retta che congiunge i due corpi) — comune a tutte le forze centrali, non solo a quella gravitazionale — a rendere possibile definire un\'energia potenziale.';
        _shoot(btn);
      } else {
        btn.className = 'iex-choice-btn wrong';
        var cb=document.querySelector('#mcqCentrale .iex-choice-btn[data-v="b"]');
        cb.className = 'iex-choice-btn correct';
        fb.className = 'iex-fb err';
        fb.innerHTML = 'Non è corretto: è la proprietà di essere una forza <strong>centrale</strong> a permettere di definire un\'energia potenziale — non tutte le forze lo consentono.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>
{% include ex-end.html %}

{% include ex.html diff=1 %}
Perché l'energia potenziale gravitazionale $U$ fra due masse è sempre **negativa**, qualunque sia la loro distanza (finita)?
{% include ex-sol.html %}
Il segno negativo di $U=-G\dfrac{Mm}{r}$ indica che le due masse sono "legate" dalla reciproca attrazione: per separarle completamente (portarle a distanza infinita, dove $U=0$) bisognerebbe fornire energia dall'esterno. Finché restano a distanza finita, la loro energia potenziale resta sempre inferiore a quella corrispondente alla separazione totale, cioè resta negativa.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Se, in un secondo sistema di due masse, sia $m_1$ sia $m_2$ fossero il **doppio** rispetto a un primo sistema (a parità di distanza $r$), come cambierebbe, in valore assoluto, l'energia potenziale gravitazionale?
{% include ex-sol.html %}
$$|U| = G\frac{m_1 m_2}{r}$$

è direttamente proporzionale al **prodotto** delle due masse. Raddoppiando entrambe, il prodotto diventa $2m_1\times2m_2 = 4\,m_1 m_2$: l'energia potenziale (in valore assoluto) **quadruplica**.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Due sfere si attraggono con una forza di modulo $F$ e hanno energia potenziale gravitazionale $U$.

**a)** Collega ogni modifica all'effetto che ha sulla **forza**.

{% capture _d_eff_F %}[
{"l":"Raddoppio la distanza","r":"$F$ diventa $\\tfrac14$"},
{"l":"Triplico la distanza","r":"$F$ diventa $\\tfrac19$"},
{"l":"Dimezzo la distanza","r":"$F$ quadruplica"},
{"l":"Raddoppio una massa e la distanza","r":"$F$ si dimezza"}
]{% endcapture %}
{% include match.html id="matchEffF" dati=_d_eff_F col1="Modifica" col3="Effetto sulla forza" %}

**b)** Ora collega le stesse modifiche all'effetto che hanno sull'**energia potenziale** (in valore assoluto). Attenzione: non è lo stesso di prima!

{% capture _d_eff_U %}[
{"l":"Raddoppio la distanza","r":"$|U|$ si dimezza"},
{"l":"Triplico la distanza","r":"$|U|$ diventa $\\tfrac13$"},
{"l":"Dimezzo la distanza","r":"$|U|$ raddoppia"},
{"l":"Raddoppio una massa e la distanza","r":"$|U|$ non cambia"}
]{% endcapture %}
{% include match.html id="matchEffU" dati=_d_eff_U col1="Modifica" col3="Effetto su |U|" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un satellite di massa $500\ \text{kg}$ orbita a $400\ \text{km}$ di altitudine sopra la superficie terrestre (quindi a distanza $r = R_\oplus + 400\ \text{km}$ dal centro della Terra, con $R_\oplus \approx 6\,371\ \text{km}$ e $M_\oplus = 5{,}97\times10^{24}\ \text{kg}$). Calcola la sua energia potenziale gravitazionale. Esprimi il risultato in notazione scientifica.

{% include sci.html prima="$U=$" coeff="-2.94" exp="10" s="$-2{,}94\times10^{10}\ \text J$" %}

{% include ex-sol.html %}
$$r = 6\,371\,000 + 400\,000 = 6\,771\,000\ \text m,$$
$$U = -G\frac{M_\oplus\, m}{r} = -6{,}67\times10^{-11}\times\frac{5{,}97\times10^{24}\times500}{6{,}771\times10^6} \approx -2{,}94\times10^{10}\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Quanta energia bisogna fornire per allontanare due sfere di massa $1\,000\ \text{kg}$ ciascuna dalla distanza di $10\ \text m$ alla distanza di $20\ \text m$? Esprimi il risultato in notazione scientifica.

{% include sci.html prima="$\Delta U=$" coeff="3.34" exp="-6" s="$3{,}34\times10^{-6}\ \text J$" %}

{% include ex-sol.html %}
$$\Delta U = U(2r)-U(r) = -G\frac{m_1 m_2}{2r}-\left(-G\frac{m_1 m_2}{r}\right) = G\frac{m_1 m_2}{2r} = 6{,}67\times10^{-11}\times\frac{1\,000\times1\,000}{2\times10} \approx 3{,}34\times10^{-6}\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Vicino alla superficie terrestre, il lavoro per sollevare un oggetto di massa $m$ di un'altezza $h$ vale $mgh$. Se invece volessimo portare un satellite da terra fino a una quota pari al raggio terrestre ($h=R_\oplus$), il lavoro necessario sarebbe **maggiore**, **minore** o **uguale** a $mgR_\oplus$? Perché?
{% include ex-sol.html %}
**Minore.** La formula $mgh$ presuppone che $g$ resti costante lungo tutto il tragitto; ma salendo il campo si indebolisce ($g=GM_\oplus/r^2$): alla quota $h=R_\oplus$ la distanza dal centro è raddoppiata e $g$ è già diventato un quarto. Per quasi tutto il tragitto la forza da vincere è quindi più piccola di $mg$, e il lavoro è minore di $mgR_\oplus$. Il calcolo esatto con l'energia potenziale lo conferma:

$$\Delta U = -G\frac{M_\oplus m}{2R_\oplus}-\left(-G\frac{M_\oplus m}{R_\oplus}\right) = \frac12\,G\frac{M_\oplus m}{R_\oplus} = \frac12\,m g R_\oplus,$$

esattamente **la metà** di $mgR_\oplus$ (abbiamo usato $g = GM_\oplus/R_\oplus^2$).
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Quanta energia serve per allontanare due masse dalla distanza $r$ alla distanza $2r$? E quanta ne serve per allontanarle da $r$ fino all'infinito? Quale delle due richiede più energia, e di quanto?
{% include ex-sol.html %}
L'energia richiesta è la variazione di energia potenziale, $\Delta U = U_{\text{finale}} - U_{\text{iniziale}}$.

**Da $r$ a $2r$:**
$$\Delta U_1 = U(2r) - U(r) = -G\frac{Mm}{2r} - \left(-G\frac{Mm}{r}\right) = G\frac{Mm}{r} - G\frac{Mm}{2r} = G\frac{Mm}{2r}.$$

**Da $r$ all'infinito** (cioè separandole completamente: quando la distanza è così grande da rendere l'attrazione ormai nulla, anche l'energia potenziale è ormai $0$):
$$\Delta U_2 = 0 - \left(-G\frac{Mm}{r}\right) = G\frac{Mm}{r}.$$

Confrontando, $\Delta U_2 = 2\,\Delta U_1$: separare completamente le due masse richiede **il doppio** dell'energia necessaria per portarle semplicemente a distanza doppia. Detto altrimenti: **metà** dell'energia totale necessaria per separarle del tutto è già sufficiente per raddoppiare la loro distanza iniziale.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Quanta energia serve per portare un satellite di $500\ \text{kg}$ dalla superficie terrestre fino a $400\ \text{km}$ di quota (senza contare l'energia cinetica necessaria per metterlo in orbita)? ($R_\oplus \approx 6\,371\ \text{km}$, $M_\oplus = 5{,}97\times10^{24}\ \text{kg}$.) Esprimi il risultato in notazione scientifica. Poi confrontalo con la stima $mgh$.

{% include sci.html prima="$\Delta U=$" coeff="1.85" exp="9" tol="2" s="$1{,}85\times10^9\ \text J$" %}

{% include ex-sol.html %}
$$\Delta U = U_{\text{fin}}-U_{\text{in}} = GM_\oplus m\left(\frac1{R_\oplus}-\frac1{R_\oplus+h}\right) = 6{,}67\times10^{-11}\times5{,}97\times10^{24}\times500\times\left(\frac1{6{,}371\times10^6}-\frac1{6{,}771\times10^6}\right)\approx1{,}85\times10^9\ \text J.$$

La stima $mgh = 500\times9{,}81\times4\times10^5\approx1{,}96\times10^9\ \text J$ è più grande di circa il $6\%$: suppone che $g$ resti $9{,}81\ \text{N/kg}$ fino a $400\ \text{km}$ di quota, mentre lassù si è già ridotto a circa $8{,}7\ \text{N/kg}$.
{% include ex-sol-end.html %}

### Il potenziale gravitazionale

{% include ex.html diff=2 %}
Calcola il potenziale gravitazionale generato dalla Terra sulla propria superficie $(R_\oplus \approx 6\,371\ \text{km}$, $M_\oplus = 5{,}97\times10^{24}\ \text{kg})$. Esprimi il risultato in notazione scientifica.

{% include sci.html prima="$V=$" coeff="-6.25" exp="7" s="$-6{,}25\times10^7\ \text J/\text{kg}$" %}

{% include ex-sol.html %}
$$V = -G\frac{M_\oplus}{R_\oplus} = -6{,}67\times10^{-11}\times\frac{5{,}97\times10^{24}}{6{,}371\times10^6} \approx -6{,}25\times10^7\ \text J/\text{kg}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Ordina i seguenti punti dal potenziale gravitazionale terrestre **più basso** (più negativo) a quello **più alto**.

{% capture _d_ord_pot %}[
{"t":"Superficie terrestre","pos":0},
{"t":"Stazione Spaziale ($400\\ \\text{km}$ di quota)","pos":1},
{"t":"Satellite geostazionario ($36\\,000\\ \\text{km}$ di quota)","pos":2},
{"t":"Alla distanza della Luna","pos":3},
{"t":"Lontanissimo dalla Terra (all'infinito)","pos":4}
]{% endcapture %}
{% include order.html id="ordPotenziali" dati=_d_ord_pot direz="dal potenziale più basso al più alto" %}

{% include ex-sol.html %}
$V=-GM_\oplus/r$ è negativo e **cresce** (si avvicina a zero) all'aumentare di $r$: il potenziale più basso è sulla superficie ($\approx-6{,}25\times10^7\ \text{J/kg}$), il più alto è all'infinito, dove vale $0$.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Il Sole genera un potenziale gravitazionale sia in corrispondenza della Terra, a distanza $r_{\text T}$ da esso, sia in corrispondenza di Giove, a distanza $r_{\text G} = 5{,}2\, r_{\text T}$. Di quante volte il potenziale gravitazionale (in valore assoluto) generato dal Sole è più grande in corrispondenza della Terra rispetto a quanto lo è in corrispondenza di Giove?
{% include ex-sol.html %}
$$\frac{|V_{\text T}|}{|V_{\text G}|} = \frac{G M_{\odot}/r_{\text T}}{G M_{\odot}/r_{\text G}} = \frac{r_{\text G}}{r_{\text T}} = 5{,}2.$$

Il potenziale (in valore assoluto) è quindi $5{,}2$ volte più grande in corrispondenza della Terra. A differenza dell'analogo esercizio sulla forza fra Giove e la Terra (dove contava anche la massa di Giove, ed era in gioco il quadrato della distanza), qui non serve nemmeno conoscere le masse dei due pianeti: essendo il potenziale inversamente proporzionale a $r$ (e non a $r^2$), il rapporto dipende **solo** dal rapporto delle distanze.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Due sfere identiche, di massa $M$, si trovano a distanza $d$ l'una dall'altra.

{% include tf.html q="Nel punto medio del segmento che congiunge i due centri, il campo gravitazionale totale è nullo." ok=true s="Sì: i due campi hanno lo stesso modulo $GM/(d/2)^2$, la stessa direzione e versi opposti, quindi la loro somma vettoriale è zero." %}
{% include tf.html q="Di conseguenza, nel punto medio anche il potenziale gravitazionale totale è nullo." ok=false s="No! Il potenziale è uno scalare negativo: i due contributi non si cancellano, si sommano. $V_{tot} = -\dfrac{GM}{d/2}-\dfrac{GM}{d/2} = -\dfrac{4GM}{d}$, che è tutt'altro che zero." %}
{% include tf.html q="Una massa esploratrice lasciata ferma esattamente nel punto medio resta ferma." ok=true s="Sì: se il campo è nullo, la forza totale sulla massa è nulla, e una massa ferma con forza totale nulla resta ferma (primo principio della dinamica)." %}

{% include ex-sol.html %}
Campo nullo **non** significa potenziale nullo: il campo è la somma di vettori (che possono cancellarsi), il potenziale è la somma di numeri tutti negativi (che non possono cancellarsi mai).
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Fra la Terra e la Luna esiste un punto in cui i campi gravitazionali generati dai due corpi si annullano a vicenda. ($M_\oplus = 5{,}97\times10^{24}\ \text{kg}$, $M_L = 7{,}35\times10^{22}\ \text{kg}$, distanza fra i centri $d = 3{,}84\times10^8\ \text m$.)

1. A che distanza dal centro della Terra si trova?
{% include sci.html prima="$r_\oplus=$" coeff="3.46" exp="8" tol="1" s="$3{,}46\times10^8\ \text m$" %}
2. Quanto vale in quel punto il potenziale gravitazionale totale?
{% include sci.html prima="$V_{tot}=$" coeff="-1.28" exp="6" tol="2" s="$-1{,}28\times10^6\ \text{J/kg}$" %}

{% include ex-sol.html %}
**1.** Chiamiamo $r_\oplus$ e $r_L = d-r_\oplus$ le distanze del punto dai centri di Terra e Luna. I due campi devono avere lo stesso modulo:

$$G\frac{M_\oplus}{r_\oplus^2} = G\frac{M_L}{r_L^2}\quad\Longrightarrow\quad \frac{r_\oplus}{r_L} = \sqrt{\frac{M_\oplus}{M_L}} = \sqrt{81{,}2}\approx 9{,}01.$$

Quindi $r_\oplus$ è circa $9$ volte $r_L$: dividendo $d$ in $9{,}01+1 = 10{,}01$ parti,

$$r_\oplus = d\cdot\frac{9{,}01}{10{,}01}\approx 3{,}46\times10^8\ \text m,\qquad r_L\approx 3{,}84\times10^7\ \text m.$$

Il punto si trova a circa il $90\%$ del tragitto verso la Luna.

**2.** Il potenziale è uno scalare: i due contributi (entrambi negativi) si sommano algebricamente.

$$V_{tot} = -G\frac{M_\oplus}{r_\oplus}-G\frac{M_L}{r_L} = -6{,}67\times10^{-11}\left(\frac{5{,}97\times10^{24}}{3{,}46\times10^8}+\frac{7{,}35\times10^{22}}{3{,}84\times10^7}\right)\approx -1{,}28\times10^6\ \text{J/kg}.$$

Ancora una volta: campo nullo, ma potenziale tutt'altro che nullo.
{% include ex-sol-end.html %}

### Confronto fra forza, campo, energia potenziale e potenziale

{% include ex.html diff=1 %}
Abbina ogni grandezza al proprio simbolo e alla propria unità di misura.

{% capture _d_grav_unita %}[
{"l":"Forza gravitazionale","m":"F","r":"N"},
{"l":"Campo gravitazionale","m":"g","r":"N/kg"},
{"l":"Energia potenziale gravitazionale","m":"U","r":"J"},
{"l":"Potenziale gravitazionale","m":"V","r":"J/kg"},
{"l":"Costante di gravitazione universale","m":"G","r":"N·m²/kg²"}
]{% endcapture %}
{% include match.html id="matchGravUnita" dati=_d_grav_unita col1="Grandezza" col2="Simbolo" col3="Unità SI" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Trascina ogni grandezza nella colonna giusta: è una grandezza vettoriale o scalare?

{% capture _s_vett_scal %}[
{"t":"Forza gravitazionale","c":0},
{"t":"Campo gravitazionale","c":0},
{"t":"Forza peso","c":0},
{"t":"Accelerazione di caduta","c":0},
{"t":"Velocità","c":0},
{"t":"Massa","c":1},
{"t":"Energia potenziale gravitazionale","c":1},
{"t":"Potenziale gravitazionale","c":1},
{"t":"Energia cinetica","c":1},
{"t":"Costante $G$","c":1}
]{% endcapture %}
{% include sort.html id="sortVettScal" dati=_s_vett_scal col0="Vettoriale" col1="Scalare" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Perché conviene usare il linguaggio dell'energia (scalari: energia potenziale $U$ e potenziale $V$) invece di quello delle forze (vettori: $\vec F$ e $\vec g$), quando sono coinvolte molte masse contemporaneamente?
{% include ex-sol.html %}
Perché sommare grandezze **scalari** (come $U$ o $V$) significa semplicemente sommare numeri con il loro segno, mentre sommare grandezze **vettoriali** (come $\vec F$ o $\vec g$) richiede la regola del parallelogramma, componente per componente — molto più laborioso quando le masse coinvolte sono tante. Il linguaggio dell'energia è quindi molto più comodo da maneggiare in questi casi, pur descrivendo esattamente la stessa fisica.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Completa il seguente riepilogo: per ciascuna delle quattro grandezze — forza gravitazionale $\vec F$, campo gravitazionale $\vec g$, energia potenziale gravitazionale $U$, potenziale gravitazionale $V$ — indica se è una grandezza vettoriale o scalare, e se dipende da $1/r$ oppure da $1/r^2$.
{% include ex-sol.html %}
| Grandezza | Natura | Dipendenza da $r$ |
|---|:---:|:---:|
| Forza $\vec F$ | vettore | $1/r^2$ |
| Campo $\vec g$ | vettore | $1/r^2$ |
| Energia potenziale $U$ | scalare | $1/r$ |
| Potenziale $V$ | scalare | $1/r$ |

Le due grandezze vettoriali (forza e campo) dipendono dal quadrato della distanza; le due grandezze scalari (energia potenziale e potenziale) dipendono dalla distanza stessa, e quindi diminuiscono più lentamente allontanandosi.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Il grafico seguente mostra come cambia, all'aumentare della distanza $r$, il modulo di due grandezze: la curva <strong style="color:#dc2626">rossa</strong> (positiva) e la curva <strong style="color:#0891b2">blu</strong> (negativa). Una delle due rappresenta l'andamento di forza e campo gravitazionale; l'altra, quello di energia potenziale e potenziale gravitazionale.

{% include figure/figura-grafico-decadimento-vuoto.html %}

Completa le frasi.

{% include fill.html prima="La curva <strong style='color:#dc2626'>rossa</strong>, il cui modulo diminuisce più rapidamente, rappresenta l'andamento di" tipo="drop" opts="forza e campo|energia potenziale e potenziale" ok="forza e campo" dopo="." s="Forza e campo sono inversamente proporzionali al QUADRATO della distanza: il loro modulo diminuisce più rapidamente." %}

{% include fill.html prima="La curva <strong style='color:#0891b2'>blu</strong>, il cui modulo diminuisce più lentamente (pur essendo negativa, e quindi crescendo verso lo zero), rappresenta l'andamento di" tipo="drop" opts="forza e campo|energia potenziale e potenziale" ok="energia potenziale e potenziale" dopo="." s="Energia potenziale e potenziale sono negativi e inversamente proporzionali alla distanza stessa (non al suo quadrato): il loro modulo diminuisce più lentamente, avvicinandosi a zero da valori negativi." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Una massa esploratrice $m$ si trova vicino a una massa $M$. Trascina ogni grandezza nella colonna giusta: dipende o no dal valore di $m$?

{% capture _s_esploratrice %}[
{"t":"La forza gravitazionale su $m$","c":0},
{"t":"L'energia potenziale gravitazionale","c":0},
{"t":"Il peso di $m$","c":0},
{"t":"L'energia cinetica di $m$ quando cade","c":0},
{"t":"Il campo gravitazionale nel punto in cui si trova $m$","c":1},
{"t":"Il potenziale gravitazionale nel punto in cui si trova $m$","c":1},
{"t":"L'accelerazione con cui $m$ cade","c":1},
{"t":"La forma delle superfici equipotenziali","c":1},
{"t":"La velocità con cui $m$ arriva al suolo","c":1}
]{% endcapture %}
{% include sort.html id="sortEsploratrice" dati=_s_esploratrice col0="Dipende da m" col1="Non dipende da m" %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Due punti si trovano entrambi a distanza $r$ dal centro di una massa sferica $M$, ma in direzioni diverse rispetto a essa. Confronta, nei due punti: il potenziale gravitazionale $V$, e il vettore campo gravitazionale $\vec g$.
{% include ex-sol.html %}
Il potenziale $V=-GM/r$ dipende **solo** dalla distanza $r$: essendo la stessa nei due punti, il potenziale è **identico** (i due punti si trovano infatti sulla stessa superficie equipotenziale, una sfera di raggio $r$).  
Il vettore campo $\vec g$, invece, ha lo stesso **modulo** nei due punti (dipende anch'esso solo da $r$), ma **direzione diversa**: punta sempre verso il centro di $M$, quindi in due punti diversi della stessa sfera punta in due direzioni diverse. Questo è un buon esempio della differenza fra una grandezza scalare ($V$) e una vettoriale ($\vec g$).
{% include ex-sol-end.html %}

### Le superfici equipotenziali

{% include ex.html diff=1 %}
Perché, muovendosi lungo una superficie equipotenziale, non si compie mai lavoro?
{% include ex-sol.html %}
Su una superficie equipotenziale il potenziale $V$ (e quindi l'energia potenziale $U$) non cambia, per definizione. Se l'energia potenziale non cambia, la forza gravitazionale non ha compiuto lavoro: le superfici equipotenziali sono infatti sempre perpendicolari alle linee di campo, e uno spostamento perpendicolare alla forza corrisponde sempre a lavoro nullo.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Due superfici equipotenziali diverse (cioè corrispondenti a due valori diversi del potenziale) possono intersecarsi?
{% include ex-sol.html %}
No. Nei punti di intersezione il potenziale dovrebbe assumere contemporaneamente **due valori diversi** (uno per ciascuna superficie). Ma il potenziale associa a ogni punto dello spazio **un solo** numero: il ragionamento è lo stesso dell'esercizio sulle linee di campo che non possono incrociarsi, con uno scalare al posto di un vettore.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Attorno a una massa sferica $M$ di raggio $R$ si disegnano le superfici equipotenziali corrispondenti a valori di $V$ **equispaziati**: $V_0$, $\tfrac34V_0$, $\tfrac12V_0$, $\tfrac14V_0$, dove $V_0=-GM/R$ è il potenziale sulla superficie. Queste sfere concentriche sono equidistanti fra loro? Se no, dove sono più fitte?
{% include ex-sol.html %}
Da $V=-GM/r$ si ricava $r=-GM/V$: il raggio è inversamente proporzionale a $V$. Ai valori $V_0,\ \tfrac34V_0,\ \tfrac12V_0,\ \tfrac14V_0$ corrispondono quindi i raggi $R,\ \tfrac43R,\ 2R,\ 4R$.

Le distanze fra una sfera e la successiva sono $\tfrac13R$, $\tfrac23R$, $2R$: sempre più grandi. Le superfici equipotenziali (disegnate a salti di potenziale uguali) **non** sono equidistanti: sono **più fitte vicino alla massa**, dove il campo è più intenso, e sempre più rade allontanandosi, proprio come le linee di campo.
{% include ex-sol-end.html %}

### Forza peso e accelerazione gravitazionale

{% include ex.html diff=1 %}
Verifica che l'unità di misura del campo gravitazionale, il N/kg, coincide con quella di un'accelerazione. (Suggerimento: ricorda che $\text N = \text{kg}\cdot\text m/\text s^2$.)
{% include ex-sol.html %}
$$\frac{\text N}{\text{kg}} = \frac{\text{kg}\cdot\text m/\text s^2}{\text{kg}} = \frac{\text m}{\text s^2}.$$

È proprio l'unità di misura di un'accelerazione: coerente con il fatto che $g$ **è** un'accelerazione (quella che subirebbe una massa esploratrice lasciata libera in quel punto del campo).
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un oggetto di massa $8\ \text{kg}$ viene portato dalla Terra alla Luna, dove il campo gravitazionale $g_{\text{Luna}}$ vale circa un sesto di quello terrestre. Vero o falso?

{% include tf.html q="Sulla Luna, la massa dell'oggetto resta $8\ \text{kg}$." ok=true s="Sì: la massa è una proprietà del corpo stesso, non dipende dal luogo in cui si trova." %}
{% include tf.html q="Sulla Luna, anche il peso dell'oggetto resta lo stesso che sulla Terra." ok=false s="No: il peso $F=mg$ dipende da $g$, che sulla Luna è molto più piccolo — quindi l'oggetto pesa molto meno (circa un sesto)." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Su un pianeta il cui campo gravitazionale ha modulo $g = 4\ \text{m/s}^2$, un masso ha un peso di $600\ \text N$. Qual è la sua massa?

{% include num.html id="numPesoMassa" valore="150" unit="kg" %}

{% include ex-sol.html %}
Dalla formula del peso $F=mg$, isolando $m$:

$$m = \frac{F}{g} = \frac{600\ \text N}{4\ \text{m/s}^2} = 150\ \text{kg}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Usando il risultato dell'esercizio su Marte ($g\approx3{,}73\ \text{N/kg}$), calcola il peso su Marte di un astronauta di $60\ \text{kg}$.

{% include num.html id="numPesoMarte" valore="224" unit="N" tol="2" %}

{% include ex-sol.html %}
$$F = mg = 60\ \text{kg}\times3{,}73\ \text{N/kg}\approx 224\ \text N,$$

contro i circa $590\ \text N$ che la stessa astronauta pesa sulla Terra. La sua massa, invece, resta $60\ \text{kg}$.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Una massa, inizialmente ferma, si trova in un punto dello spazio dove il campo gravitazionale ha modulo $g = 5\ \text{m/s}^2$. Dopo quanto tempo la sua velocità raggiunge $30\ \text{m/s}$?

{% include num.html id="numAccelDt" valore="6" unit="s" %}

{% include ex-sol.html %}
Dalla definizione di accelerazione, $g = \Delta v/\Delta t$, isolando $\Delta t$ (e ricordando che, partendo da ferma, $\Delta v$ coincide con la velocità finale):

$$\Delta t = \frac{\Delta v}{g} = \frac{30\ \text{m/s}}{5\ \text{m/s}^2} = 6\ \text s.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Su Marte ($g\approx3{,}73\ \text{m/s}^2$) un rover lascia cadere da fermo un sasso. Che velocità ha il sasso dopo $3\ \text s$ di caduta (trascura l'atmosfera, molto rarefatta)?

{% include num.html id="numVMarte" valore="11.2" unit="m/s" tol="2" %}

{% include ex-sol.html %}
Poiché l'accelerazione del sasso è proprio il campo, $a=g$, da $g=\Delta v/\Delta t$:

$$\Delta v = g\,\Delta t = 3{,}73\ \text{m/s}^2\times3\ \text s\approx 11{,}2\ \text{m/s}.$$

Sulla Terra, nello stesso tempo, avrebbe raggiunto circa $29\ \text{m/s}$.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Se il campo gravitazionale in un punto raddoppiasse, a parità di tempo trascorso, come cambierebbe la variazione di velocità $\Delta v$ di una massa lì lasciata cadere da ferma?
<div class="iex-choices" id="mcqAccelDouble">
<button class="iex-choice-btn" data-v="a">Raddoppierebbe</button>
<button class="iex-choice-btn" data-v="b">Diventerebbe 4 volte più grande</button>
<button class="iex-choice-btn" data-v="c">Dimezzerebbe</button>
<button class="iex-choice-btn" data-v="d">Resterebbe invariata</button>
</div>
<div class="iex-fb" id="mcqAccelDoublefb"></div>
<script>
(function(){
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  var btns=document.querySelectorAll('#mcqAccelDouble .iex-choice-btn');
  var fb=document.getElementById('mcqAccelDoublefb');
  var correctV='a';
  btns.forEach(function(btn){
    btn.addEventListener('click', function(){
      if(btn.disabled) return;
      btns.forEach(function(b){ b.disabled = true; });
      var correct = btn.dataset.v === correctV;
      fb.style.display = 'block';
      if(correct){
        btn.className = 'iex-choice-btn correct';
        fb.className = 'iex-fb ok';
        fb.innerHTML = '&#10003; Esatto! $\\Delta v = g\\cdot\\Delta t$: a parità di $\\Delta t$, $\\Delta v$ è direttamente proporzionale a $g$, quindi raddoppiando $g$ raddoppia anche $\\Delta v$.';
        _shoot(btn);
      } else {
        btn.className = 'iex-choice-btn wrong';
        var cb=document.querySelector('#mcqAccelDouble .iex-choice-btn[data-v="a"]');
        cb.className = 'iex-choice-btn correct';
        fb.className = 'iex-fb err';
        fb.innerHTML = 'Non è corretto: $\\Delta v = g\\cdot\\Delta t$ è direttamente proporzionale a $g$ (non al suo quadrato, né inversamente proporzionale), quindi raddoppiando $g$ raddoppia anche $\\Delta v$.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un martello e una piuma, lasciati cadere nello stesso campo gravitazionale (in assenza di attrito con l'aria), arrivano al suolo con la stessa accelerazione, pur avendo massa molto diversa. Usa il **secondo principio della dinamica** ($a = F/m$), insieme alla legge di gravitazione universale, per dimostrarlo.
{% include ex-sol.html %}
Chiamiamo $m$ la massa dell'oggetto che cade (martello o piuma) e $M$ la massa del pianeta. La forza gravitazionale su di esso è $F = G\dfrac{Mm}{r^2}$. Per il secondo principio della dinamica, la sua accelerazione è

$$a = \frac{F}{m} = \frac{1}{m}\cdot G\frac{Mm}{r^2} = G\frac{M}{r^2}.$$

La massa $m$ dell'oggetto che cade si semplifica completamente: l'accelerazione $a$ non dipende da essa, ma solo da $M$ (la massa del pianeta) e da $r$. Un martello e una piuma, alla stessa distanza $r$ dal centro del pianeta, subiscono quindi esattamente la stessa accelerazione — che, non a caso, è proprio il campo gravitazionale $g = GM/r^2$.
{% include ex-sol-end.html %}

### L'energia meccanica

{% include ex.html diff=1 %}
Durante la caduta libera di una sonda verso un pianeta, la sua energia cinetica aumenta. Che cosa succede, nello stesso tempo, alla sua energia potenziale e alla sua energia meccanica totale?
{% include ex-sol.html %}
L'energia potenziale **diminuisce** (diventa più negativa), esattamente della stessa quantità di cui aumenta l'energia cinetica: l'energia meccanica totale $E=K+U$ **resta costante**, perché la forza gravitazionale è una forza centrale, per cui l'energia si conserva.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una cometa percorre un'orbita molto allungata attorno al Sole: in alcuni tratti passa vicinissima al Sole, in altri se ne allontana moltissimo. In quale punto dell'orbita la cometa è più veloce?

{% capture _o_cometa %}[
{"v":"a","t":"Nel punto più vicino al Sole"},
{"v":"b","t":"Nel punto più lontano dal Sole"},
{"v":"c","t":"Va sempre alla stessa velocità, perché l'energia si conserva"},
{"v":"d","t":"Non si può dire senza conoscere la massa della cometa"}
]{% endcapture %}
{% include mcq.html id="mcqCometa" opts=_o_cometa ok="a" s="L'energia meccanica $E=K+U$ si conserva. Vicino al Sole $r$ è piccolo, quindi $U=-GMm/r$ è molto negativa: perché $E$ resti costante, $K$ deve essere grande. A conservarsi è la somma $K+U$, non $K$ da sola: la velocità cambia continuamente lungo l'orbita." %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Un meteorite, inizialmente fermo, cade verso la Terra da un'altitudine di $2\,000\ \text{km}$ sopra la superficie. Trascurando l'attrito con l'atmosfera, usa la conservazione dell'energia meccanica per trovare con quale velocità arriva al suolo. ($R_\oplus \approx 6\,371\ \text{km}$, $M_\oplus = 5{,}97\times10^{24}\ \text{kg}$.) Esprimi il risultato in notazione scientifica.

{% include sci.html prima="$v=$" coeff="5.47" exp="3" s="$5{,}47\times10^3\ \text{m/s}$" %}

{% include ex-sol.html %}
Le distanze dal centro della Terra sono $r_1 = R_\oplus + 2\,000\,000 = 8\,371\,000\ \text m$ (partenza) e $r_2 = R_\oplus = 6\,371\,000\ \text m$ (arrivo al suolo). La conservazione dell'energia meccanica $E=K+U=\text{costante}$, con velocità iniziale nulla, dà

$$\frac12 m v_1^2 - G\frac{M_\oplus m}{r_1} = \frac12 m v_2^2 - G\frac{M_\oplus m}{r_2} \quad\Longrightarrow\quad \frac12 v_2^2 = GM_\oplus\left(\frac1{r_2}-\frac1{r_1}\right),$$

da cui

$$v_2 = \sqrt{2GM_\oplus\left(\frac1{r_2}-\frac1{r_1}\right)} \approx 5{,}47\times10^3\ \text{m/s},$$

cioè quasi $20\,000\ \text{km/h}$: gli impatti dei meteoriti sono violentissimi anche senza alcuna spinta propria, solo per effetto della caduta gravitazionale.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Dalla cima di una torre si lanciano due palline identiche con la stessa velocità: una verso l'alto, l'altra verso il basso. Trascurando l'attrito con l'aria, quale delle due arriva al suolo più veloce?
{% include ex-sol.html %}
Arrivano **con la stessa velocità**. Al momento del lancio le due palline hanno la stessa energia cinetica (stessa massa e stessa velocità, in modulo) e la stessa energia potenziale (stessa posizione): hanno quindi la stessa energia meccanica $E=K+U$. Al suolo hanno ancora la stessa energia potenziale, e poiché $E$ si conserva devono avere anche la stessa energia cinetica, cioè la stessa velocità. La pallina lanciata verso l'alto ci mette solo più tempo: sale, si ferma, ricade e ripassa dalla cima della torre esattamente con la velocità iniziale, ma diretta verso il basso.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Un astronauta sulla Luna lancia un sasso verticalmente verso l'alto a $1\,000\ \text{m/s}$ (una velocità enorme, ma utile per capire). Trascurando l'effetto della Terra, a quale **altezza** sulla superficie lunare arriva il sasso? ($M_L = 7{,}35\times10^{22}\ \text{kg}$, $R_L = 1\,737\ \text{km}$.) Esprimi il risultato in km.

{% include num.html id="numHLuna" valore="374" unit="km" tol="2" %}

{% include ex-sol.html %}
Nel punto più alto il sasso è fermo ($K=0$). Conservazione dell'energia meccanica fra il lancio ($r=R_L$) e il punto più alto ($r$):

$$\frac12 m v^2 - G\frac{M_L m}{R_L} = -G\frac{M_L m}{r}\quad\Longrightarrow\quad \frac1r = \frac1{R_L}-\frac{v^2}{2GM_L}.$$

Numericamente: $\dfrac1{R_L}\approx5{,}757\times10^{-7}\ \text m^{-1}$ e $\dfrac{v^2}{2GM_L} = \dfrac{10^6}{2\times4{,}90\times10^{12}}\approx1{,}020\times10^{-7}\ \text m^{-1}$, quindi $\dfrac1r\approx4{,}737\times10^{-7}\ \text m^{-1}$ e $r\approx2\,111\ \text{km}$. L'altezza è $h=r-R_L\approx 374\ \text{km}$.

Se avessimo considerato $g$ costante ($1{,}62\ \text{m/s}^2$), avremmo trovato $h = v^2/(2g)\approx 308\ \text{km}$: un errore di quasi il $20\%$, perché salendo così in alto il campo lunare si indebolisce sensibilmente.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Una sonda spaziale viene lanciata dalla Terra con una certa energia cinetica iniziale, allontanandosi radialmente. Usando $E = K + U = \text{costante}$, e ricordando che l'energia cinetica $K$ non può mai essere negativa, spiega perché: se l'energia meccanica totale $E$ della sonda è negativa, essa non riuscirà mai ad allontanarsi a distanza infinita (prima o poi rallenterà, si fermerà e ricadrà indietro); mentre se $E \geq 0$, la sonda potrà allontanarsi indefinitamente.
{% include ex-sol.html %}
Man mano che la sonda si allontana, la distanza $r$ diventa sempre più grande, e quindi $U=-GMm/r$ (che è sempre negativa) si avvicina sempre di più a $0$. Poiché $E=K+U$ resta costante durante tutto il moto, quando $r$ è ormai enorme e $U$ è ormai vicinissima a $0$, l'energia cinetica $K=E-U$ è diventata a sua volta vicinissima a $E$.

- Se $E<0$: mano a mano che $r$ aumenta, $U$ (negativa) si avvicina a $0$ dal basso, quindi $K=E-U$ deve **diminuire** per mantenere $E$ costante — e prima che $U$ raggiunga $0$, $K$ si annullerebbe (diventando negativa, il che è impossibile). La sonda deve quindi fermarsi a una distanza finita, dove $K=0$, per poi ricadere.
- Se $E\geq0$: anche quando $r$ è diventato enorme e $U$ è ormai vicinissima a $0$, resta $K=E-U\geq0$: la sonda può quindi continuare ad allontanarsi senza mai fermarsi, con un'energia cinetica che rimane sempre almeno pari a $E$ (cioè, se $E=0$, con una velocità che si fa sempre più piccola, ma senza mai annullarsi del tutto).
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Usando il risultato dell'esercizio precedente, trova la **velocità minima** con cui bisogna lanciare un oggetto dalla superficie terrestre perché si allontani per sempre, senza più ricadere (la cosiddetta <definizione>velocità di fuga</definizione>). Trascura l'atmosfera. ($R_\oplus \approx 6\,371\ \text{km}$, $M_\oplus = 5{,}97\times10^{24}\ \text{kg}$.) Esprimi il risultato in notazione scientifica.

{% include sci.html prima="$v_{fuga}=$" coeff="1.12" exp="4" tol="1" s="$1{,}12\times10^4\ \text{m/s}$" %}

{% include fill.html prima="La velocità di fuga dipende dalla massa dell'oggetto lanciato?" tipo="drop" opts="Sì, un oggetto più pesante deve essere lanciato più veloce|Sì, un oggetto più pesante può essere lanciato più piano|No, è la stessa per qualsiasi oggetto" ok="No, è la stessa per qualsiasi oggetto" s="Nella condizione $\tfrac12mv^2 = GM_\oplus m/R_\oplus$ la massa $m$ compare in entrambi i membri e si semplifica." %}

{% include ex-sol.html %}
La velocità minima è quella che dà $E=0$ esattamente:

$$\frac12 m v^2 - G\frac{M_\oplus m}{R_\oplus} = 0\quad\Longrightarrow\quad v_{fuga} = \sqrt{\frac{2GM_\oplus}{R_\oplus}} = \sqrt{\frac{2\times6{,}67\times10^{-11}\times5{,}97\times10^{24}}{6{,}371\times10^6}}\approx1{,}12\times10^4\ \text{m/s},$$

cioè circa $40\,000\ \text{km/h}$. La massa $m$ si semplifica: un granello di sabbia e un'astronave hanno la stessa velocità di fuga (anche se, ovviamente, all'astronave serve molta più energia per raggiungerla).
{% include ex-sol-end.html %}
