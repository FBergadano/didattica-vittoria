---
layout: capitolo
title: "L'Elettrostatica"
corso: "gravitazione-elettromagnetismo"
corso_titolo: "La Gravitazione e l'Elettromagnetismo"
materia: fisica
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

{% include fill-def.html prompt="Prova a descrivere tu ciò che vedi. Quali sono le caratteristiche più rilevanti del fenomeno? Puoi scriverlo qui, oppure, se preferisci, su un quaderno.  
<em>(Nota: la risposta non verrà salvata).</em>" id="fill-elettrostatica" %}
Confronta quello che hai notato tu con la seguente descrizione del fenomeno.
{% include spoiler.html testo="Descrizione del fenomeno del palloncino e del maglione" %}
La prima cosa da osservare è che <u markdown="span">**tutti** i corpi sono composti da particelle di <definizione>carica positiva</definizione> e da particelle di <definizione>carica negativa</definizione></u>. Le particelle di carica positiva si chiamano <definizione>protoni</definizione>; le particelle di carica negativa si chiamano <definizione>elettroni</definizione>.  
Osserviamo quindi le seguenti cose.
- Inizialmente, ogni corpo ha lo stesso numero di cariche negative e positive, e in tale condizione non c'è nessuna interazione: quando il palloncino viene lasciato libero di muoversi, esso rimane fermo.
- Quando strofiniamo il palloncino sul maglione di lana <u>alcuni elettroni passano dalla lana al palloncino</u>: di questo modo il maglione ha più cariche positive che negative, mentre il palloncino è a maggioranza di cariche negative. Diciamo quindi che la <definizione>carica globale</definizione> del maglione è positiva e che la carica globale del palloncino è negativa.  Questo processo si chiama  <definizione>elettrizzazione per strofinio</definizione>. Notiamo che <u>i protoni non si spostano mai</u>.
- Quando palloncino e maglione sono carichi di segno opposto, essi si attraggono. <u markdown="span">È quindi presente una forza, diversa da quella gravitazionale, che attira il palloncino verso il maglione</u>.
- Quando il palloncino carico negativamente è avvicinato al muro, gli elettroni nel muro vengono respinti, mentre i protoni rimangono fermi. Si viene quindi a creare una zona di carica positiva, da cui il palloncino (negativo) è attratto.
{% include spoiler-end.html %}

È essenziale notare che questo fenomeno non ha niente a che fare con la forza gravitazionale. È per questo che possiamo comprendere l'esistenza di una forza completamente nuova e diversa, come quella elettrica. In questo capitolo cercheremo di comprendere di cosa si tratti.

## La materia è piena di cariche elettriche
{% include margin-note.html testo="Ogni corpo è costituito da moltissime cariche elettriche" %}
Tutta la materia che ti circonda in questo momento è composta da un numero gigantesco di minuscole molecole, composte da ancor più minuscoli atomi, composti da ancor più minuscole particelle dotate di carica che si muovono freneticamente.


In un semplice bicchiere d'acqua è presente un numero di particelle cariche superiore al numero di stelle in tutto l'Universo.

{% include lab-virtuali/zoom-atomo-lab.html %}

Tutti i comportamenti comuni della materia sono comprensibili in termini del movimento di queste minuscole particelle elettricamente cariche, cioè in termini delle forze che studieremo in questo capitolo.
{% include margin-note-end.html %}

### L'unità di misura della carica elettrica
Per parlare di particelle elettricamente cariche, dobbiamo quindi introdurre un'unità di misura per la carica elettrica. Nel Sistema Internazionale si sceglie di adottare l'unità del <definizione>coulomb</definizione>.
{% include box-imp.html testo="Il Coulomb" %}
L'unità di misura della carica elettrica è il coulomb, che si indica con il simbolo C.
{% include box-end.html%}

### Atomi, Elettroni e Protoni


Nel 1955, per la prima volta nella Storia, un uomo **ha visto** gli atomi (Erwin Müller, con il microscopio a ioni di campo), confermando la teoria atomica nata nell'Antica Grecia con Leucippo e Democrito. È un evento tanto sensazionale quanto la prima volta in cui un uomo ha camminato su un pianeta extraterrestre (avvenuto 14 anni dopo).


{% include margin-note.html testo="La materia è costituita da atomi" %}
Gli atomi sono ciò di cui è costituita la materia, i piccoli mattoncini che si organizzano in molecole, le quali a loro volta costituiscono i solidi, i liquidi e i gas da cui siamo circondati e di cui siamo composti.
{% include margin-note-end.html %}





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
{% include box-imp.html testo="Stessa carica, massa enormemente diversa" %}
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

{% include esercizi/esercizio-atomi.html %}



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

{% include figure/quantizzazione-carica-figura.html %}

{% include margin-note.html testo="La carica è quantizzata" %}
Notiamo quindi che la carica di un corpo <u markdown="span">deve sempre essere un multiplo intero della carica elementare $e$</u>. Infatti, possiamo scrivere la precedente equazione come

$$Q = n \cdot e, \qquad \text{con } n=n_p-n_e \in \mathbb{Z}$$

dove $n$ è un numero intero (positivo, negativo, o nullo): la differenza fra il numero di protoni e il numero di elettroni presenti nel corpo. Questo fatto sperimentale si chiama <definizione>quantizzazione della carica elettrica</definizione>: la carica non può assumere un valore qualsiasi, ma solo multipli interi di $e$.
{% include margin-note-end.html %}

{% include box-imp.html testo="La carica di un corpo è quantizzata" %}
La carica elettrica di un corpo è sempre un **multiplo intero** della carica elementare $e = 1{,}602 \times 10^{-19}\ \text{C}$:

$$Q = n\cdot e, \quad n = 0, \pm1, \pm2, \pm3, \ldots, $$

dove $n=n_p-n_e$ è un <u>numero intero</u> che corrisponde alla differenza tra il numero di protoni e il numero di elettroni presenti nel corpo.  
Non esistono, in natura, corpi con carica pari a $-0{,}5\, e$ o a $2{,}5\,e$.
{% include box-end.html %}

{% include esercizi/esercizio-carica.html %}

### Conduttori e Isolanti
{% include margin-note.html testo="La differenza tra i conduttori e gli isolanti" %}
Quando molti atomi si uniscono per formare un corpo, le cariche si comportano in modo molto diverso a seconda della natura degli atomi in questione. In alcuni materiali, gli elettroni più esterni si staccano dai propri atomi e vagano liberamente all'interno del materiale, passando in continuazione da un atomo all'altro. In altri, invece, ogni elettrone resta legato per sempre al proprio nucleo. Chiamiamo <definizione>conduttori</definizione> i materiali del primo tipo (tipicamente i metalli) e <definizione>isolanti</definizione> quelli del secondo (legno, vetro, plastica...).
{% include margin-note-end.html %}

{% include margin-note.html testo="Esempi di conduttori e isolanti" %}
I metalli sono in genere ottimi conduttori (argento, rame e oro fra i migliori); vetro, gomma, plastica e aria secca sono invece buoni isolanti. È per questo che i fili elettrici sono fatti di rame e rivestiti di plastica.
{% include margin-note-end.html %}

Osserva l'animazione seguente: nel conduttore (ferro) gli elettroni migrano continuamente da un nucleo all'altro; nell'isolante (legno), invece, ogni elettrone orbita sempre e soltanto attorno al proprio nucleo.

{% include lab-virtuali/conduttore-isolante-lab.html %}

{% include box-imp.html testo="Conduttori e Isolanti" %}
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

{% include box-ex.html testo="Verifica Subito!" %}
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

{% include esercizi/esercizio-conduttori.html %}

## L'Elettrizzazione

Ci sono diversi modi in cui un corpo può **cambiare** la sua carica. Questo consiste sostanzialmente nel trasferimento di particelle cariche da un corpo a un altro ed è un fenomeno che si chiama <definizione>elettrizzazione</definizione>.

È essenziale osservare che, per quanto la carica di un corpo cambi, <u>la carica dell'Universo rimane invariata</u>. Vale a dire, se un corpo acquista cariche negative significa che un altro corpo ne ha acquistate di positive.

{% include box-imp.html testo="Conservazione della carica" %}
La carica non si crea e non si distrugge: semplicemente, può passare da un corpo a un altro.
{% include box-end.html %}

{% include spoiler.html testo="Qual è la carica dell'Universo?" %}
Non lo sappiamo con certezza, ma è probabile che l'Universo sia sostanzialmente neutro elettricamente. Infatti, se ci fosse un eccesso di carica positiva o negativa, si dovrebbero osservare delle interazioni tra pianeti o galassie, che invece non osserviamo. A dominare la dinamica di questi corpi sembrerebbe essere solo la gravità, il che significa che questi corpi sono sostanzialmente neutri.

In effetti, se la Terra per qualche motivo dovesse caricarsi elettricamente, è molto probabile che finiremmo per scontrarci con un pianeta vicino o per andare dritti nel Sole. 
{% include spoiler-end.html %}

### Elettrizzazione per strofinio

Il fenomeno che abbiamo osservato all'inizio del capitolo, per cui un palloncino strofinato su un maglione di lana diventa elettricamente attivo, è noto come <definizione>elettrizzazione per strofinio</definizione>.
{% include box-imp.html testo="Elettrizzazione per strofinio" %}
L'elettrizzazione per strofinio è il fenomeno per cui, strofinando un corpo inizialmente neutro su un altro corpo, si osserva passaggio di carica dal primo al secondo, per cui alla fine entrambi i corpi risultano carichi della stessa quantità ma di segno opposto.
{% include box-end.html %}
Alcuni materiali, come il vetro, quando vengono strofinati, **perdono** elettroni (li cedono al panno di lana), caricandosi positivamente. Altri materiali, invece, come la plastica, **acquisiscono** elettroni quando vengono strofinati, e perciò si caricano negativamente.

Il fenomeno è molto facile da osservare negli isolanti (un palloncino, una penna di plastica, una bacchetta di vetro, ecc.) ma è più difficile con i conduttori. Il motivo è che quando teniamo in mano un materiale conduttore e lo strofiniamo su un panno di lana, la carica acquisita dal conduttore si scarica molto velocemente attraverso il nostro corpo fino alla Terra, che rappresenta un enorme bacino di carica.  
Per elettrizzare con un panno di lana un metallo dobbiamo quindi indossare un guanto di gomma, di modo da impedire alla carica di passare attraverso di noi.

### Elettrizzazione per contatto (per conduttori)

Un conduttore può essere elettrizzato semplicemente venendo messo a contatto con un corpo carico. Questo processo si chiama <definizione>elettrizzazione per contatto</definizione>. Funziona come nella seguente animazione.

{% include lab-virtuali/carica-per-contatto-lab.html %}

È importante notare che, poiché il fenomeno coinvolge uno spostamento di carica interno ai materiali, <u>è necessario che entrambi i materiali che entrano a contatto siano conduttori</u>.

Inoltre, quanta carica finisce su ciascun corpo dipende dalla sua forma e dimensione: non è detto che si dividano esattamente a metà. Ciò che è garantito è che, alla fine, **entrambi i corpi restano carichi con lo stesso segno**.

### La Polarizzazione e l'Elettrizzazione per induzione

C'è però un modo ancora più sorprendente per cambiare la carica di un conduttore: senza nemmeno sfiorarlo. Guarda che cosa succede se avviciniamo un corpo carico (isolante o conduttore) a un conduttore neutro:

{% include lab-virtuali/polarizzazione-lab.html %}

Si vede che <u>le cariche di segno opposto al corpo ne sono attratte</u>, mentre <u>quelle di segno uguale ne sono respinte</u>. Pertanto, quelle di segno opposto si avvicinano e le altre si allontanano, <u>creando due zone separate di carica</u>. Questo processo è chiamato <definizione>polarizzazione</definizione>.

{% include box-imp.html testo="Polarizzazione" %}
La polarizzazione è la ridistribuzione delle cariche all'interno di un conduttore come conseguenza della presenza di un corpo carico esterno.
{% include box-end.html %}

È importante osservare che <u>il conduttore polarizzato resta neutro nel complesso</u>, cioè la sua carica globale è nulla. Infatti, a differenza del contatto, qui <u markdown="span">**nessuna carica passa da un corpo all'altro**</u>, e <u>la polarizzazione scompare non appena il corpo carico viene allontanato</u>. Per renderla permanente serve un passaggio in più, che puoi vedere nella seguente animazione.

{% include lab-virtuali/induzione-permanente-lab.html %}

Osserviamo che se, mentre il corpo carico resta vicino, tocchiamo per un istante il conduttore con un filo collegato a terra, alcuni elettroni fluiscono verso terra (mentre i protoni rimangono fermi, come al solito). Se poi stacchiamo il collegamento a terra *prima* di allontanare il corpo carico, il conduttore resta con una carica netta permanente — di segno **positivo**. Questo fenomeno consiste nell'<definizione>elettrizzazione per induzione</definizione>.

{% include box-imp.html testo="Elettrizzazione per induzione" %}
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

{% include lab-virtuali/elettroscopio-lab.html %}


{% include box-ex.html testo="Verifica Subito!" %}
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
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
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

Abbiamo quindi compreso che le cariche elettriche interagiscono tra loro, allontanandosi quando hanno lo stesso segno e avvicinandosi quando hanno segno opposto.  
Questo rivela la presenza di un nuovo tipo di forza, che si chiama **forza elettrica**. Nei termini della Fisica, diciamo che questa è una forza <u>repulsiva quando le due cariche hanno segno uguale</u> ed è <u>attrattiva quando le cariche hanno segno opposto</u>.
### Direzione e verso della forza elettrica
 Possiamo quindi comprendere fin da subito la direzione e il verso della forza elettrica: si disegna come nella seguente figura, a seconda dei casi.

{% include figure/direzione-forza-figura.html %}

{% include margin-note.html testo="La forza elettrica è una forza centrale" %}
Notiamo dal disegno che <u markdown="span">il vettore forza ha **sempre** come direzione la retta che congiunge i due centri</u>. Vale a dire, <u markdown="span">**la forza elettrica è una forza centrale**</u>. 
{% include margin-note-end.html %}

## L'esperimento di Coulomb e il modulo della forza elettrica

Come abbiamo fatto per la forza gravitazionale, dobbiamo ora chiederci quali fattori determinino il modulo della forza elettrica, e in che modo. Charles-Augustin de Coulomb rispose a questa domanda nel 1785, usando esattamente lo stesso tipo di apparato con cui Cavendish avrebbe in seguito misurato la forza gravitazionale: una bilancia a torsione — con la differenza che, al posto di due masse, Coulomb utilizzò due sferette cariche elettricamente.

Puoi ripetere l'esperienza di Coulomb con l'animazione qui sotto: è la stessa identica bilancia a torsione del capitolo precedente, solo che ora, al posto della massa fissa e di quella mobile, si sceglie il valore della carica fissa $Q$ e di quella mobile $q$. Poiché le due sferette hanno lo stesso segno di carica, si respingono: il bilancere ruota quindi allontanandosi dalla sferetta fissa, invece che avvicinandosi come accadeva per la gravità — ma, a parte questo, osserverai esattamente le stesse cose.

{% include lab-virtuali/coulomb-lab.html %}

Verifica con l'animazione che:

- puoi scegliere il segno di ciascuna carica con i pulsanti "+"/"−": se i segni sono uguali le cariche si respingono e il bilancere si allontana dalla sferetta fissa, se sono opposti si attraggono e il bilancere si avvicina (fino a un fermo meccanico, per evitare che le sferette si tocchino) — proprio la stessa regola vista nel disegno di inizio paragrafo;
- nello scenario "Dipendenza dalle cariche", premendo "Avvia" il bilancere ruota lentamente e si ferma in una posizione di equilibrio: aumentando la carica $Q$ oppure la carica $q$, l'angolo finale raggiunto (e quindi l'intensità della forza) è più grande;
- nello scenario "Dipendenza da r", i pulsanti spostano davvero il bilancere alla nuova distanza (indicata dalla linea tratteggiata $r$): raddoppiando $r$ l'intensità della forza non si dimezza, ma diventa un quarto; triplicando $r$ diventa un nono; quadruplicando $r$ diventa un sedicesimo — <u markdown="span">proprio quello che significa dire che $F$ è inversamente proporzionale al **quadrato** della distanza</u>, verificabile confrontando il valore di $F$ prima e dopo ogni cambio.

{% include margin-note.html testo="Dall'esperimento alla formula di Coulomb" %}
Coulomb dedusse così che il modulo della forza elettrica fra due cariche è **direttamente proporzionale al prodotto delle due cariche** e **inversamente proporzionale al quadrato della distanza** — esattamente la stessa dipendenza trovata da Cavendish per la forza gravitazionale. Cioè, la forza elettrica tra due cariche $q_1$ e $q_2$ è descritta dalla seguente equazione
{% include eq-annotated.html
   id="fel1"
   formula="F = k \dfrac{\lvert q_1 \cdot q_2 \rvert}{r^2}"
   frammenti="F|k|\lvert|q_1 \cdot q_2|r^2"
   etichette="modulo della forza elettrica|costante di Coulomb|valore assoluto: $F$ è sempre positiva|prodotto delle cariche|quadrato della distanza"
   posizioni="alto|basso|alto|alto|basso"
%}

dove $k$ è detta <definizione>costante di Coulomb</definizione>.
{% include margin-note-end.html %}

{% include margin-note.html testo="Perché c'è il valore assoluto?"%}
Il valore assoluto serve ad **assicurare che il modulo sia sempre positivo**. Infatti ricordiamo che, mentre le cariche possono essere sia positive sia negative, <u>il modulo di un vettore è sempre positivo</u>. 
{% include margin-note-end.html %}

### La costante di Coulomb

{% include margin-note.html testo="La costante di Coulomb dipende dal materiale" %}
La costante di Coulomb dipende dal materiale in cui sono immerse le cariche elettriche. Infatti, poiché ogni materiale risponde alla presenza delle cariche (ad esempio, polarizzandosi), può capitare che alcuni materiali “assorbano” parte della forza elettrica, diminuendone il modulo. È quindi intutivo che il valore della costante di Coulomb $k$ sia massimo per il vuoto, e sia sempre minore per ogni altro materiale. 
{% include margin-note-end.html %}

{% include margin-note.html testo="Determinazione sperimentale del valore di k" %}
Il valore della costante di Coulomb **nel vuoto**, misurato sperimentalmente, corrisponde a

$$
k = 8{,}99 \times 10^{9} \ \frac{\text N \cdot \text m^2}{\text{C}^2}.
$$

### S 
A differenza di $G$, il valore di $k$ è enorme: è proprio per questo che la forza elettrica è **molto più intensa** della forza gravitazionale a parità di distanza — così intensa che due cariche di appena $1\ \text{C}$ poste a $1\ \text{m}$ di distanza si respingerebbero con una forza di quasi $9$ miliardi di Newton, pari al peso di centinaia di migliaia di automobili.
{% include margin-note-end.html %}

{% include box-imp.html testo="La Legge di Coulomb" %}
Il modulo della forza elettrica fra due cariche puntiformi $q_1$ e $q_2$, poste a distanza $r$, è

$$F = k\,\frac{\lvert q_1\cdot q_2\rvert}{r^2}, \qquad k = 8{,}99\times10^9\ \frac{\text N\cdot\text m^2}{\text C^2}.$$

La forza è <u>diretta lungo la retta che congiunge le due cariche</u> (è una forza centrale): repulsiva se le cariche hanno lo stesso segno, attrattiva se hanno segno opposto.
{% include box-end.html %}

{% include esercizi/invert-coulomb.html %}

### Confronto fra forza elettrica e forza gravitazionale

Prima di proseguire, fermiamoci a confrontare quello che abbiamo appena imparato sulla forza elettrica con quanto già sapevamo sulla forza gravitazionale.

{% include esercizi/confronto-forze.html %}

{% include box-ex.html testo="Verifica Subito!" %}
Trascina ciascuna caratteristica nella colonna giusta: solo forza gravitazionale, solo forza elettrica, oppure entrambe.

{% include esercizi/classifica-forze.html %}
{% include box-end.html %}



### In presenza di più cariche

Finora abbiamo considerato solo due cariche. Ma cosa succede se su una carica $q$ agiscono contemporaneamente **più** cariche, ciascuna con la propria forza elettrica?

{% include box-imp.html testo="Principio di sovrapposizione degli effetti" %}
In presenza di più cariche, vale lo stesso <definizione>principio di sovrapposizione degli effetti</definizione> già visto per la forza gravitazionale: ogni carica esercita su $q$ la propria forza elettrica <u markdown="span">**esattamente come se le altre non ci fossero**</u>. La forza totale su $q$ è la somma *vettoriale* di tutte queste forze:

$$\vec F_{tot} = \vec F_1 + \vec F_2 + \dots$$

{% include box-end.html %}

Poiché le forze sono vettori, per sommarle non basta sommarne i moduli: vanno sommate **come vettori**, con la stessa regola del parallelogramma già vista per la somma di due vettori qualsiasi. L'unica accortezza in più, rispetto al caso gravitazionale, è che ogni singola forza può essere sia repulsiva sia attrattiva, a seconda del segno delle cariche coinvolte: nell'esempio seguente $Q_1$, $Q_2$ e $q$ sono tutte e tre positive, quindi entrambe le forze su $q$ sono repulsive (dirette lontano da $Q_1$ e da $Q_2$).

{% include lab-virtuali/somma-forze-elettriche-lab.html %}

Nell'animazione sopra, i moduli di $\vec F_1$ e $\vec F_2$ si ottengono con la legge di Coulomb:

$$
F_1 = k \frac{|Q_1\cdot q|}{r^2}, \qquad\qquad F_2 = k \frac{|Q_1\cdot q|}{r^2} 
$$


# Il Campo Elettrico

### In presenza di più cariche

## Le linee di campo

# L'energia elettrica

## L'energia potenziale elettrica

## Il potenziale elettrico

## Il moto di una particella carica in un campo elettrico

