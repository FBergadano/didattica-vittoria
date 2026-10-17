---
layout: capitolo
title: "L'Elettrostatica"
corso: "gravitazione-elettromagnetismo"
corso_titolo: "La Gravitazione e l'Elettromagnetismo"
materia: fisica
numero: 2
---

<cit autore="I Ching, il libro dei mutamenti">
Le leggi naturali non sono esterne alle cose. Sono anzi l'armonia del moto, immanente alle cose.
</cit> 

<!-- <cit autore="Empedocle, Sulla Natura">
Sole fulgido, Terra, Cielo, Mare
sono una cosa sola con le loro parti che, disgiuntesi da essi,
si sono generati negli esseri mortali. Così, 
fatte simili da Afrodite, 
le cose più adatte alla mescolanza si amano tra loro.
Ma sono nemiche le cose che più si differenziano
per origine e mescolanza e immagini impresse,
del tutto inadatte a unirsi, e assai addolorate
per i decreti di Contesa, che diede loro origine.
</cit> -->

{% include margin-note.html testo="Comprendere l'esistenza di una nuova forza"%}
Abbiamo imparato a descrivere l'attrazione gravitazionale e a ricondurre ad essa moltissimi fenomeni. Ma ce ne sono alcuni che non possono essere spiegati attraverso l'attrazione gravitazionale e per cui si scopre una nuova origine: la <definizione>forza elettrica</definizione>.
{% include margin-note-end.html %}

# La Carica Elettrica

{% include figura.html id="bimbi-capelli"
   src="/corsi/gif/bimbi_capelli_elettrizzati.mp4"
   didascalia="Quando ci strofiniamo su una poltrona di velluto (senza toccare per terra) diventiamo carichi elettricamente. I nostri capelli si dispongono radialmente per motivi che saranno chiari alla fine del capitolo."
   larghezza="290px" %}

Ecco un esperimento molto semplice, che sicuramente vi sarà capitato di provare nella vostra vita, che mette in luce l'esistenza e la natura della forza elettrica.
{% include phet-sim.html id="electrisation-lab"
   src="https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_all.html"
   didascalia="Simulazione PhET: strofina il palloncino di gomma sul maglione di lana, poi lascialo libero e osserva ciò che succede tra il palloncino e il maglione e tra il palloncino e il muro."
   altezza="550px" %}

{% include riflessione.html id="descrivi-palloncino" etichetta="👀 Descrivi ciò che osservi"
   domanda="Prova a descrivere tu ciò che vedi. Quali sono le caratteristiche più rilevanti del fenomeno?" %}
Confronta quello che hai notato tu con la seguente descrizione del fenomeno.
{% include spoiler.html testo="Descrizione del fenomeno del palloncino e del maglione" %}
La prima cosa da osservare è che <u markdown="span">**tutti** i corpi sono composti da particelle di <definizione>carica positiva</definizione> e da particelle di <definizione>carica negativa</definizione></u>. Le particelle di carica positiva si chiamano <definizione>protoni</definizione>; le particelle di carica negativa si chiamano <definizione>elettroni</definizione>.  
Osserviamo quindi le seguenti cose.
- Inizialmente, ogni corpo ha lo stesso numero di cariche negative e positive, e in tale condizione non c'è nessuna interazione: quando il palloncino viene lasciato libero di muoversi, esso rimane fermo.
- Quando strofiniamo il palloncino sul maglione di lana <u>alcuni elettroni passano dalla lana al palloncino</u>: di questo modo il maglione ha più cariche positive che negative, mentre il palloncino è a maggioranza di cariche negative. Diciamo quindi che la <definizione>carica globale</definizione> del maglione è positiva e che la carica globale del palloncino è negativa.  Questo processo si chiama  <definizione>elettrizzazione per strofinio</definizione>. Notiamo che <u>i protoni non si spostano mai</u>.
- Quando palloncino e maglione sono carichi di segno opposto, essi si attraggono. <u markdown="span">È quindi presente una forza, diversa da quella gravitazionale, che attira il palloncino verso il maglione</u>.
- Quando il palloncino carico negativamente è avvicinato al muro, gli elettroni nel muro vengono respinti, mentre i protoni rimangono fermi. Si viene quindi a creare una zona di carica positiva, da cui il palloncino (negativo) è attratto.
{% include spoiler-end.html %}

È essenziale notare che <u>questo fenomeno non ha niente a che fare con la forza gravitazionale</u>. È per questo che possiamo comprendere l'esistenza di una forza completamente nuova e diversa. Questa forza, che studieremo nel dettaglio in questo capitolo, è la **forza elettrica**.

{% include spoiler.html testo="Prima degli elettroni: come si spiegava l'elettricità nei secoli passati" %}
Che un pezzo d'ambra strofinato attiri le pagliuzze lo sapevano già i Greci: secondo la tradizione fu Talete di Mileto, nel VI secolo a.C., a notarlo per primo, e qualcuno racconta che ne avesse concluso che l'ambra avesse un'anima. Il nome greco dell'ambra, *élektron*, è all'origine della parola "elettricità".

Per più di duemila anni il fenomeno rimase una curiosità. Nel 1600 il medico inglese William Gilbert, nel suo libro *De Magnete*, provò a dargli una spiegazione: strofinando l'ambra se ne libererebbe un "effluvio", una sostanza sottilissima che si allunga verso le pagliuzze come un braccio invisibile, le afferra e le riporta indietro.

Nel 1730 Stephen Gray, un tintore inglese appassionato di esperimenti, scoprì che la "virtù elettrica" può viaggiare lungo un filo per decine di metri: era la scoperta dei conduttori. Per dimostrarlo inventò l'esperimento del "ragazzo volante": appendeva al soffitto, con corde di seta, un ragazzino disteso in orizzontale, gli avvicinava ai piedi un tubo di vetro strofinato, e dalle mani e dal viso del ragazzo pezzetti di carta e foglioline d'oro saltavano verso di lui.

Pochi anni dopo il francese Charles Du Fay si accorse che esistono due tipi di elettricità, che chiamò *vitrea* (quella del vetro strofinato) e *resinosa* (quella dell'ambra e delle resine): due corpi con lo stesso tipo si respingono, due corpi con tipi diversi si attraggono. Pensava che fossero due fluidi distinti. Il suo assistente, l'abate Jean-Antoine Nollet, divenne famoso per le dimostrazioni pubbliche: davanti al re Luigi XV fece passare una scarica elettrica attraverso 180 guardie reali che si tenevano per mano, facendole saltare tutte nello stesso istante, e in seguito ripeté l'esperimento con circa duecento monaci in fila.

Infine, a metà del Settecento, l'americano Benjamin Franklin propose che il fluido elettrico fosse uno solo: un corpo che ne ha troppo è carico "più", uno che ne ha troppo poco è carico "meno". Sono i nomi *positivo* e *negativo* che usiamo ancora oggi. Franklin dovette però scegliere a caso quale dei due corpi avesse il fluido in eccesso, e decise che fosse il vetro strofinato. Oggi sappiamo che a spostarsi sono gli elettroni, e che il vetro strofinato li perde: con la convenzione di Franklin, gli elettroni si sono ritrovati con carica negativa.

{% include figura.html id="franklin-aquilone"
   src="/corsi/immagini/franklin.jpeg"
   didascalia="Benjamin Franklin e il figlio William durante l'esperimento dell'aquilone (illustrazione ottocentesca). Ai piedi di Franklin c'è la bottiglia di Leida in cui raccolse la carica."
   larghezza="300px" %}

Franklin è ricordato soprattutto per un esperimento rimasto celebre. Sospettava che il fulmine fosse una gigantesca scintilla elettrica, ma come dimostrarlo? Nel giugno del 1752, durante un temporale a Filadelfia, fece volare un aquilone di seta (che resiste alla pioggia meglio della carta) con in cima un filo metallico appuntito. Al fondo dello spago di canapa, che bagnato dalla pioggia conduce l'elettricità, era legata una chiave di metallo; Franklin teneva l'aquilone con un nastro di seta, al riparo sotto una tettoia perché restasse asciutto e isolante. A un certo punto vide le fibre dello spago rizzarsi, come i capelli dei bambini nella prima figura di questo capitolo. Avvicinò una nocca alla chiave e scoccò una scintilla. Con la chiave caricò poi una *bottiglia di Leida*, una specie di barattolo capace di immagazzinare carica elettrica, e verificò che quella carica si comportava esattamente come quella ottenuta strofinando il vetro. Il "fuoco" del cielo e l'elettricità dei laboratori erano la stessa cosa.

Il fulmine non colpì mai l'aquilone: lo spago raccolse soltanto la carica presente nell'aria durante il temporale. Se l'avesse colpito, Franklin sarebbe quasi certamente morto, come accadde l'anno dopo al fisico Georg Richmann, ucciso a San Pietroburgo mentre ripeteva un esperimento simile. Alcuni storici dubitano perfino che Franklin abbia fatto l'esperimento esattamente come lo raccontò, mesi dopo, in una lettera. Di sicuro ne ricavò un'invenzione che usiamo ancora oggi: il parafulmine.
{% include spoiler-end.html %}

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
<u markdown="span">L'unità di misura della carica elettrica è il **coulomb**</u>, che si indica con il simbolo C.
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
Protone ed elettrone hanno <u markdown="span">esattamente **la stessa carica in valore assoluto**</u>, chiamata <definizione>carica elementare</definizione>, indicata con $e$, ma di segno opposto. La loro massa, invece, è profondamente diversa: <u markdown="span">un protone è **migliaia di volte più massiccio** di un elettrone</u>.  
Il neutrone, invece, ha carica nulla e massa leggermente maggiore del protone. 
{% include box-end.html %}
<!-- {% include margin-note.html testo="L'atomo è quasi tutto vuoto"%}
Quasi tutta la massa dell'atomo è concentrata nel nucleo, che però è circa centomila volte più piccolo dell'atomo intero. Gli elettroni si muovono attorno al nucleo in uno spazio enorme rispetto alle loro dimensioni, e tutto il resto è vuoto. Se un atomo fosse grande come la cupola di San Pietro, il nucleo sarebbe un granello di sale al centro della cupola.
{% include margin-note-end.html %} -->

{% include margin-note.html testo="Gli elettroni si spostano, i protoni no"%}
Questa differenza ha una conseguenza importante. I protoni sono pesanti e stanno nel nucleo, tenuti insieme ai neutroni dalle forze nucleari; gli elettroni sono leggerissimi e occupano la parte esterna dell'atomo. Per questo, <u>quando due corpi si scambiano carica elettrica, sono gli elettroni a passare dall'uno all'altro, mentre i protoni restano al loro posto</u>. Lo vedremo accadere in tutti i fenomeni di questo capitolo.
{% include margin-note-end.html %}


{% include margin-note.html testo="Da dove viene la varietà della materia" %}
Le diverse specie chimiche sono semplicemente atomi con un numero diverso di elettroni, protoni e neutroni. Questa piccola differenza determina la sorprendente varietà di tutti i materiali che ci circondano.
{% include margin-note-end.html %}

Ecco alcuni esempi di atomi di specie chimiche piuttosto comuni:
{% include figura.html id="atomi"
   src="/corsi/gif/atoms_rutherford_model.mp4"
   didascalia="Alcuni degli atomi che ti circondano in questo momento: Carbonio (C), Fosforo (P), Titanio (Ti), Neodimio (Nd). Osserva come variano il numero di elettroni, protoni e neutroni in base alla specie chimica."
   larghezza="280px" %}

{% include spoiler.html testo="Quanto sono piccoli gli atomi? Un esperimento mentale" %}
Questo esperimento mentale è raccontato dal fisico Fritjof Capra nel libro *Il Tao della fisica*. Qui lo rifacciamo con i nostri numeri.

Prendiamo un'arancia, larga circa $8\ \text{cm}$, e immaginiamo di ingrandirla, ingrandendo nello stesso modo anche tutti i suoi atomi, che sono larghi circa $10^{-10}\ \text m$.

Ingrandiamola finché diventa grande come un elefante, circa $4\ \text m$: l'abbiamo ingrandita di $50$ volte, e i suoi atomi sono diventati larghi qualche milionesimo di millimetro. Sono ancora del tutto invisibili.

Continuiamo finché l'arancia diventa grande come la città di Torino, circa $15\ \text{km}$. Ora i suoi atomi sono larghi un paio di centesimi di millimetro: ancora troppo piccoli per vederli a occhio nudo, che riesce a distinguere al massimo oggetti di un decimo di millimetro.

Ingrandiamola ancora, finché diventa grande come la Terra. A questo punto i suoi atomi sono larghi circa $1{,}5\ \text{cm}$, più o meno come delle ciliegie. L'arancia sarebbe una sfera grande come un pianeta, completamente piena di ciliegie.

Ma se potessimo guardare dentro una di quelle ciliegie, non vedremmo niente. Il nucleo dell'atomo è circa centomila volte più piccolo dell'atomo intero, e gli elettroni sono ancora più piccoli: l'atomo è quasi tutto vuoto. Per vedere il nucleo bisogna ingrandire ancora, finché la ciliegia diventa grande come la cupola più grande del mondo, la cupola di San Pietro a Roma, che è larga più di $40\ \text m$. Il nucleo, al centro della cupola, sarebbe grande come un granello di sale. Gli elettroni sarebbero granelli di polvere ancora più fini, che sfrecciano attorno al granello di sale in tutto lo spazio vuoto della cupola.

E l'arancia? Con tutti questi ingrandimenti l'abbiamo ingrandita in tutto di circa $4\times10^{11}$ volte. Ora è larga circa $3\times10^{10}\ \text m$: è diventata circa diecimila volte più grande del Sole.
{% include spoiler-end.html %}

{% include margin-note.html testo="Gli atomi, normalmente, sono elettricamente neutri" %}
Nota che <u>il numero di protoni in ogni atomo</u>, in condizioni normali, <u>è sempre uguale al numero di elettroni</u>. Cioè, il numero di cariche positive è identico al numero di cariche negative, e pertanto <u>l'atomo è complessivamente neutro</u>.  
{% include margin-note-end.html %}
{% include margin-note.html testo="Atomi ionizzati" %}
È possibile estrarre o aggiungere un elettrone a un atomo. In queste condizioni, l'atomo si dice <definizione>ionizzato</definizione>. Un atomo si dice **ionizzato positivamente** se ha <u>un numero di protoni maggiore del numero di elettroni</u> e si dice **ionizzato negativamente** se <u>il numero di elettroni è maggiore del numero di protoni.</u>
{% include margin-note-end.html %}


{% include spoiler.html testo="Il modello che abbiamo usato è semplificato. Clicca qui se sei curiosa di conoscere un modello più avanzato." %}
Nelle animazioni di questo capitolo abbiamo disegnato gli elettroni come pallini che percorrono orbite circolari nette attorno al nucleo. In realtà gli elettroni non seguono traiettorie definite: si trovano piuttosto in una "nube" attorno al nucleo, più densa in alcune zone e più rarefatta in altre. Anche protoni e neutroni sono delle nubi dai contorni sfumati. Insomma queste particelle non hanno una posizione definita, e questo, in effetti, perché non sono particelle, bensì onde. Questo è uno dei principi della Fisica Quantistica, e si chiama <definizione>dualismo onda-particella</definizione>. Ogni particella è anche un'onda, sicché non si può parlare dei contorni precisi di un atomo, né di una molecola, né di un tavolo. Tutto è un'onda. 
{% include figura.html id="atomo-reale"
   src="/corsi/immagini/real-atom-wikipedia.webp"
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
<u markdown="span">La carica elettrica di un corpo è **quantizzata**</u>, cioè corrisponde sempre a un **multiplo intero** della carica elementare $e = 1{,}602 \times 10^{-19}\ \text{C}$:

$$Q = n\cdot e, \qquad n \in \mathbb Z,$$

dove $n=n_p-n_e$ è un <u>numero intero</u> che corrisponde alla differenza tra il numero di protoni e il numero di elettroni presenti nel corpo.  
Non esistono, in natura, corpi con carica pari a $-0{,}5\, e$ o a $2{,}5\,e$.
{% include box-end.html %}

{% include esercizi/esercizio-carica.html %}

### Conduttori e Isolanti
{% include margin-note.html testo="La differenza tra i conduttori e gli isolanti" %}
Quando molti atomi si uniscono per formare un corpo, le cariche si comportano in modo molto diverso a seconda della natura degli atomi in questione. In alcuni materiali, gli elettroni più esterni si staccano dai propri atomi e vagano liberamente all'interno del materiale, passando in continuazione da un atomo all'altro. In altri, invece, ogni elettrone resta legato per sempre al proprio nucleo. Chiamiamo <definizione>conduttori</definizione> i materiali del primo tipo e <definizione>isolanti</definizione> quelli del secondo.
{% include margin-note-end.html %}

{% include margin-note.html testo="Esempi di conduttori e isolanti" %}
I metalli sono in genere ottimi conduttori (argento, rame e oro fra i migliori); vetro, gomma, plastica e aria secca sono invece buoni isolanti. È per questo che i fili elettrici sono fatti di rame e rivestiti di plastica. Il miglior conduttore in assoluto è l'oro; il miglior isolante è il teflon (il vuoto è un isolante anche migliore del teflon, però non è a tutti gli effetti “un materiale”).
{% include margin-note-end.html %}

Osserva l'animazione seguente: nel conduttore (ferro) alcuni elettroni sono liberi di muoversi fra i nuclei; nell'isolante (legno), invece, ogni elettrone orbita sempre e soltanto attorno al proprio nucleo. Poi trascina la carica vicino ai due materiali e confronta che cosa succede.

{% include lab-virtuali/conduttore-isolante-lab.html %}

{% include box-imp.html testo="Conduttori e Isolanti" %}
I **conduttori** sono quei materiali che presentano al loro interno cariche **libere di muoversi**.  
Gli **isolanti** sono quei materiali che **non** presentano cariche libere di muoversi.
{% include box-end.html %}

{% include margin-note.html testo="Il nostro corpo è un conduttore" %}
Il nostro corpo è un esempio di materiale conduttore, cioè le cariche possono fluire attraverso di noi. Questo è essenziale per il funzionamento del nostro organismo, ma ci espone al rischio delle correnti elettriche, che possono attraversarci provocandoci gravi danni.
{% include margin-note-end.html %}

{% include margin-note.html testo="Anche la Terra è un conduttore" %}
Anche la Terra è un conduttore: il terreno contiene acqua, e nell'acqua sono sciolti molti sali, cioè ioni liberi di muoversi. E la Terra è così grande che può ricevere o cedere moltissima carica senza che la sua cambi in modo apprezzabile: è come un enorme serbatoio di cariche. Per questo, quando un corpo carico viene collegato al terreno con un conduttore (anche attraverso il nostro corpo), la sua carica in eccesso si disperde nella Terra, e il corpo si scarica. Si dice che il corpo è stato <definizione>messo a terra</definizione>.
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
{"t":"Se un materiale è isolante, le cariche al suo interno non sono libere di muoversi.","ok":true,"s":"Vero: è proprio questa la definizione di isolante."},
{"t":"Gli elettricisti lavorano con guanti e scarpe con la suola di gomma perché la gomma è un isolante.","ok":true,"s":"Vero: la gomma impedisce alle cariche di attraversare il loro corpo fino alla Terra, che è anch'essa un conduttore."},
{"t":"È pericoloso usare il phon mentre si è nella vasca da bagno perché l'acqua del rubinetto, con i sali che contiene, conduce l'elettricità.","ok":true,"s":"Vero: gli ioni dei sali sciolti nell'acqua sono cariche libere di muoversi. Il corpo immerso, l'acqua e le tubature formano un percorso conduttore fino a terra."},
{"t":"Un fulmine che colpisce il terreno si ferma in superficie, perché la Terra è un isolante.","ok":false,"s":"Falso: la Terra è un conduttore, e la carica del fulmine si disperde nel terreno."}
]{% endcapture %}
{% include quiz.html id="qgfCond" domande=_qCond label_si="Un esempio di buon conduttore" label_no="Un esempio di buon isolante" %}
{% include box-end.html %}

{% include esercizi/esercizio-conduttori.html %}

## L'Elettrizzazione

{% include margin-note.html testo="Cambiare la carica di un corpo" %}
Ci sono diversi modi in cui un corpo può **cambiare** la sua carica. Questo consiste sostanzialmente nel trasferimento di particelle cariche da un corpo a un altro ed è un fenomeno che si chiama <definizione>elettrizzazione</definizione>.
{% include margin-note-end.html %}


{% include margin-note.html testo="La carica dell'Universo non cambia" %}
È essenziale osservare che, per quanto la carica di un corpo cambi, <u>la carica dell'Universo rimane invariata</u>. Vale a dire, se un corpo acquista carica negativa significa che un altro corpo ne ha acquistata di positiva.
{% include margin-note-end.html %}


{% include box-imp.html testo="Conservazione della carica" %}
<u markdown="span">La carica ***non*** si **crea** e ***non*** si **distrugge**</u>: semplicemente, può passare da un corpo a un altro.
{% include box-end.html %}

{% include spoiler.html testo="Qual è la carica dell'Universo?" %}
Non lo sappiamo con certezza, ma è probabile che l'Universo sia sostanzialmente neutro elettricamente. Infatti, se ci fosse un eccesso di carica positiva o negativa, si dovrebbero osservare delle interazioni tra pianeti o galassie, che invece non osserviamo. A dominare la dinamica di questi corpi sembrerebbe essere solo la gravità, il che significa che questi corpi sono sostanzialmente neutri.

In effetti, se la Terra per qualche motivo dovesse caricarsi elettricamente, è molto probabile che finiremmo per scontrarci con un pianeta vicino o per andare dritti nel Sole. 
{% include spoiler-end.html %}

### Elettrizzazione per strofinio

{% include margin-note.html testo="Strofinando due corpi, si caricano entrambi" %}
Il fenomeno che abbiamo osservato all'inizio del capitolo ([rivedi l'esperimento](#electrisation-lab)), per cui un palloncino strofinato su un maglione di lana diventa elettricamente attivo, è noto come <definizione>elettrizzazione per strofinio</definizione>.
{% include margin-note-end.html %}

{% include box-imp.html testo="Elettrizzazione per strofinio" %}
L'**elettrizzazione per strofinio** è il fenomeno per cui, **strofinando** un corpo inizialmente neutro su un altro corpo, i **due** corpi si **caricano elettricamente**, di segno **opposto**.
{% include box-end.html %}
{% include margin-note.html testo="Le tre caratteristiche dello strofinio" %}
Ci sono tre caratteristiche essenziali di questo fenomeno:
1. gli elettroni si **trasferiscono** da uno dei due corpi all'altro corpo, mentre i protoni stanno fermi;
2. il corpo che ha **perso** elettroni si carica **positivamente**, quello che ha acquisito elettroni si carica **negativamente**;
3. la carica non è <u>né comparsa né scomparsa</u>: la carica totale rimane la stessa.

{% include margin-note-end.html %}


{% include margin-note.html testo="Chi perde e chi acquista elettroni" %}
Alcuni materiali, come il vetro, quando vengono strofinati con un apposito materiale (ad esempio la lana), **perdono** elettroni (li cedono al panno di lana), caricandosi positivamente. Altri materiali, invece, come la plastica o l'ambra, **acquisiscono** elettroni quando vengono strofinati (li prendono dal panno di lana), e perciò si caricano negativamente.
{% include margin-note-end.html %}


{% include margin-note.html testo="Strofinare un conduttore" %}
Il fenomeno è molto facile da osservare negli isolanti (un palloncino, una penna di plastica, una bacchetta di vetro, ecc.), ma è più difficile con i conduttori. Il motivo è che quando teniamo in mano un materiale conduttore e lo strofiniamo su un panno di lana, la carica acquisita dal conduttore si scarica molto velocemente attraverso il nostro corpo fino alla Terra.  
Per elettrizzare con un panno di lana un metallo dobbiamo quindi indossare un guanto di gomma, di modo da impedire alla carica di passare attraverso di noi.
{% include margin-note-end.html %}


Nella simulazione seguente John Travolta strofina il piede sul tappeto, e così si carica. Muovi la sua gamba per strofinare, poi avvicina la sua mano alla maniglia della porta: guarda che cosa succede alle cariche, e quando.

{% include phet-sim.html id="john-travoltage"
   src="https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_all.html"
   didascalia="Simulazione PhET: John si carica strofinando il piede sul tappeto e prende la scossa toccando la maniglia."
   altezza="500px" %}

{% include box-note.html testo="L'elettrizzazione per strofinio, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="Lo scotch che si respinge" %}
{% include figura.html id="scotch-respingono"
   src="/corsi/gif/scotch-respingono.mp4"
   didascalia="Due strisce di nastro adesivo, appena staccate dal tavolo, si respingono."
   larghezza="420px" %}

Attacca sul tavolo due strisce di nastro adesivo lunghe una decina di centimetri, poi staccale con uno strappo deciso e avvicinale tenendole sospese: si respingono. Ora attacca una striscia sopra l'altra e staccale di colpo l'una dall'altra: questa volta si attraggono! Perché? Prova a spiegarlo tu, poi controlla con il Verifica Subito qui sotto.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Lo scotch che fa i raggi X" %}
Una curiosità vera: nel 2008 alcuni ricercatori dell'Università della California hanno srotolato del nastro adesivo dentro una camera a vuoto, e hanno scoperto che lo strappo emette lampi di luce e perfino raggi X, abbastanza intensi da fare una radiografia di un dito! Le cariche separate dallo strappo sono così concentrate che, ricombinandosi, accelerano fortissimo gli elettroni. Nell'aria non succede: l'aria scarica le cariche prima che diventino così intense.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/imballaggi-antistatici.webp" alt="Una scheda elettronica dentro una busta antistatica grigio argentata" titolo="Gli imballaggi antistatici" %}
I componenti elettronici (schede, memorie, processori) possono essere danneggiati da una piccola scintilla, che non sentiremmo nemmeno. Per questo vengono spediti in buste di plastica speciale, spesso grigio argentate o rosa, che non si caricano per strofinio e non lasciano accumulare carica sul componente.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/panni-lavatrice-elettrostatica.webp" alt="Una mano tira fuori dei jeans dal cestello della lavatrice" titolo="Gli ammorbidenti" %}
I vestiti sintetici, strofinandosi fra loro nell'asciugatrice o addosso, si caricano: si appiccicano al corpo e fanno piccole scintille. Gli ammorbidenti lasciano sulle fibre un sottilissimo strato di sostanze che trattengono un po' di umidità: l'umidità aiuta le cariche a disperdersi, e i vestiti restano quasi neutri.
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qStrof %}[
{"t":"Strofinando un palloncino su un maglione di lana, il palloncino si carica e il maglione resta neutro.","ok":false,"s":"No: si caricano entrambi, con cariche di segno opposto. Gli elettroni che il palloncino acquista sono proprio quelli che il maglione perde."},
{"t":"Durante lo strofinio passano da un corpo all'altro sia elettroni sia protoni.","ok":false,"s":"No: si spostano solo gli elettroni, mentre i protoni restano fermi nei nuclei."},
{"t":"Se una bacchetta di vetro strofinata con la lana si carica positivamente, allora la lana si carica negativamente.","ok":true,"s":"Sì: il vetro ha ceduto elettroni alla lana, che quindi ne ha in eccesso."},
{"t":"Dopo lo strofinio, la carica totale dei due corpi, sommati insieme, è diversa da zero.","ok":false,"s":"No: la carica si conserva. Se i due corpi erano neutri prima, la somma delle loro cariche resta zero anche dopo."},
{"t":"Una bacchetta di metallo tenuta in mano e strofinata con la lana non si carica perché i metalli non possono avere carica elettrica.","ok":false,"s":"No: il metallo si carica, ma essendo un conduttore la carica si scarica subito attraverso il nostro corpo fino alla Terra. Con un guanto di gomma resta carico."},
{"t":"D'inverno, sfilandosi un maglione di lana, a volte si sentono dei piccoli scricchiolii (e al buio si vedono delle scintille): sono dovuti alle cariche separate dallo strofinio.","ok":true,"s":"Vero: il maglione e i vestiti sotto si caricano con segni opposti, e piccolissime scintille fanno passare elettroni da uno all'altro. D'inverno succede più spesso perché l'aria è secca: l'umidità, invece, aiuta le cariche a disperdersi."},
{"t":"Pettinandosi i capelli asciutti con un pettine di plastica, a volte i capelli si sollevano e si allontanano fra loro: è perché il pettine li ha caricati tutti con lo stesso segno.","ok":true,"s":"Vero: il pettine strofina i capelli e se ne porta via (o gliene lascia) degli elettroni. Tutti i capelli hanno carica dello stesso segno, quindi si respingono."},
{"t":"Al distributore di benzina si consiglia di toccare una parte metallica della colonnina, prima di prendere in mano la pistola, per scaricare a terra la carica che il nostro corpo può aver accumulato.","ok":true,"s":"Vero: strofinandoci sul sedile dell'auto possiamo caricarci. Toccando il metallo della colonnina, collegato a terra, la carica si disperde subito, senza scintille vicino ai vapori di benzina."}
]{% endcapture %}
{% include quiz.html domande=_qStrof id="q-strofinio" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl1" %}
Strofinando un palloncino su un maglione, il palloncino acquista $5\times10^{11}$ elettroni. Quale carica ha, alla fine, il maglione? (Usa $e=1{,}6\times10^{-19}\ \text C$.)
{% capture _oStrof %}[
{"v":"a","t":"$-8\\times10^{-8}\\ \\text C$"},
{"v":"b","t":"$+8\\times10^{-8}\\ \\text C$"},
{"v":"c","t":"$0\\ \\text C$, perché il maglione non c'entra"},
{"v":"d","t":"$+5\\times10^{11}\\ \\text C$"}
]{% endcapture %}
{% include mcq.html id="mcq-strofinio-maglione" opts=_oStrof ok="b" s="Il maglione ha perso proprio i $5\times10^{11}$ elettroni acquistati dal palloncino, quindi è carico positivamente: $Q=5\times10^{11}\times1{,}6\times10^{-19}\ \text C=+8\times10^{-8}\ \text C$. Il palloncino ha la carica opposta, $-8\times10^{-8}\ \text C$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Torna all'esperimento dello scotch (il primo del riquadro qui sopra). Due strisce di nastro adesivo, staccate dal tavolo con uno strappo deciso, si respingono. Perché?
{% capture _oScotch1 %}[
{"v":"a","t":"Perché staccandole dal tavolo si caricano per strofinio, entrambe con carica dello stesso segno"},
{"v":"b","t":"Perché staccandole dal tavolo una si carica positivamente e l'altra negativamente"},
{"v":"c","t":"Perché la colla del nastro è magnetica"},
{"v":"d","t":"Perché sono neutre, e due corpi neutri si respingono"}
]{% endcapture %}
{% include mcq.html id="mcq-scotch-1" opts=_oScotch1 ok="a" s="Strappandole dal tavolo, le strisce si caricano per strofinio. Sono fatte dello stesso materiale e sono state trattate allo stesso modo, quindi si caricano con lo stesso segno, e cariche dello stesso segno si respingono." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Ora attacca una striscia sopra l'altra, e staccale di colpo l'una dall'altra: questa volta si attraggono. Perché?
{% capture _oScotch2 %}[
{"v":"a","t":"Perché si sono scaricate, e due corpi neutri si attraggono"},
{"v":"b","t":"Perché strofinandosi fra loro si sono caricate con segni opposti: una ha ceduto elettroni all'altra"},
{"v":"c","t":"Perché sono ancora cariche con lo stesso segno, ma più deboli"},
{"v":"d","t":"Perché la colla di una striscia è rimasta attaccata all'altra"}
]{% endcapture %}
{% include mcq.html id="mcq-scotch-2" opts=_oScotch2 ok="b" s="Strappando una striscia dall'altra, gli elettroni passano da una striscia all'altra, proprio come fra il palloncino e il maglione: una resta con elettroni in più (negativa), l'altra con elettroni in meno (positiva). Cariche di segno opposto si attraggono." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Ti sarà capitato: ti alzi da una poltrona (o da un divano) di velluto, tocchi la maniglia di una porta e prendi la scossa.
{% capture _rPoltrona %}Alzandoci e muovendoci sul velluto, il nostro corpo e il tessuto si strofinano: gli elettroni passano dall'uno all'altro, e noi restiamo carichi. Le suole delle scarpe e il pavimento (soprattutto se c'è un tappeto o della moquette) sono isolanti, quindi la carica non riesce a scendere a terra e resta su di noi. Quando avviciniamo la mano alla maniglia, che è di metallo, cioè un conduttore, la carica trova finalmente una strada e passa tutta insieme, con una piccola scintilla: è la scossa.{% endcapture %}
{% include risposta-aperta.html id="ra-poltrona-velluto" tipo="spiega"
   domanda="Perché prendiamo la scossa dopo esserci strofinati su una poltrona di velluto? E perché proprio quando tocchiamo la maniglia di metallo?" risposta=_rPoltrona %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Torna all'[animazione all'inizio del capitolo](#fig-bimbi-capelli): due bambini si sono strofinati su una poltrona di velluto, e hanno i capelli "sparati" in tutte le direzioni.
{% capture _rBimbi %}Strofinandosi sul velluto, i bambini si sono caricati, e la carica si è distribuita su tutto il loro corpo, capelli compresi. Ogni capello ha quindi carica dello stesso segno degli altri: i capelli si respingono a vicenda e si allontanano il più possibile l'uno dall'altro, e anche dalla testa. I bambini non toccano terra (sono seduti sulla poltrona), quindi la carica non si disperde e i capelli restano sollevati.{% endcapture %}
{% include risposta-aperta.html id="ra-bimbi-capelli" tipo="spiega"
   domanda="Perché i capelli dei bambini si sollevano e si allontanano l'uno dall'altro?" risposta=_rBimbi %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### Elettrizzazione per contatto

{% include margin-note.html testo="Caricare per contatto" %}
Un conduttore può essere elettrizzato semplicemente venendo messo a contatto con un corpo carico. Questo processo si chiama <definizione>elettrizzazione per contatto</definizione>. Funziona come nella seguente animazione.
{% include margin-note-end.html %}


{% include lab-virtuali/carica-per-contatto-lab.html %}

{% include box-imp.html testo="Elettrizzazione per contatto" %}
L'elettrizzazione per contatto è il fenomeno per cui un conduttore neutro, messo a contatto con un corpo carico, si carica anch'esso: una parte della carica passa <u>dal corpo carico a quello neutro</u>, e alla fine i due corpi sono carichi <u>con lo stesso segno</u>.
{% include box-end.html %}

{% include margin-note.html testo="Serve un conduttore" %}
Il corpo che riceve la carica deve essere un conduttore: solo così la carica che arriva può spostarsi e distribuirsi su tutto il corpo. Il corpo carico, invece, può anche essere un isolante, come una bacchetta di vetro o di plastica strofinata. In questo caso, però, <u>cede soltanto la carica che si trova nei punti in cui tocca il conduttore</u>, perché in un isolante le cariche non possono spostarsi per raggiungere il punto di contatto. 
{% include margin-note-end.html %}


{% include margin-note.html testo="Come si divide la carica" %}
Inoltre, quanta carica finisce su ciascun corpo dipende dalla sua forma e dalle sue dimensioni: non è detto che la carica si divida esattamente a metà. Se i due corpi sono conduttori identici, cioè della stessa forma e delle stesse dimensioni, la carica si divide a metà, qualunque sia il metallo di cui sono fatti; in generale, invece, ne prende di più il corpo più grande. Ciò che è garantito è che, alla fine, **entrambi i corpi restano carichi con lo stesso segno**.
{% include margin-note-end.html %}


{% include box-note.html testo="L'elettrizzazione per contatto, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html img="/corsi/immagini/messa-a-terra.webp" alt="Un dispersore di rame piantato nel terreno, collegato con un cavo giallo e verde al quadro elettrico di una casa" titolo="La messa a terra" %}
Nelle prese di casa, oltre ai due fori per la corrente, c'è un terzo contatto, collegato al filo giallo e verde. Questo filo arriva fino a un palo di metallo piantato nel terreno, come quello della foto: è la **messa a terra**. Collega l'involucro metallico degli elettrodomestici alla Terra. Se per un guasto l'involucro si caricasse, sarebbe come mettere a contatto un piccolo conduttore con uno enorme: quasi tutta la carica passerebbe subito alla Terra, invece di passare attraverso chi lo tocca.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/parafulimne.webp" alt="Un fulmine si abbatte sui grattacieli di una città, di notte" titolo="Il parafulmine" %}
Il parafulmine è un'asta di metallo appuntita, in cima all'edificio, collegata al terreno con un grosso cavo. Durante un temporale il fulmine tende a scaricarsi proprio sulla sua punta. La carica del fulmine scende allora lungo il cavo fino alla Terra, che, essendo un conduttore enorme, la riceve tutta, lungo un percorso sicuro, invece di passare attraverso i muri dell'edificio.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/braccialetto-antistatico.webp" alt="Un braccialetto antistatico al polso, con il cavo a spirale e la pinza per collegarlo a terra" titolo="Il braccialetto antistatico" %}
Chi monta o ripara i computer indossa un braccialetto antistatico come quello della foto, collegato a terra con il cavo e la pinza. Il corpo, attraverso il braccialetto, resta sempre a contatto con la Terra: ogni carica che si accumulasse muovendosi passa subito al terreno, e non può scaricarsi con una scintilla sui componenti elettronici, che ne verrebbero danneggiati.
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qCont %}[
{"t":"Dopo il contatto, i due conduttori hanno cariche di segno opposto.","ok":false,"s":"No: alla fine sono carichi con lo stesso segno, quello del corpo che era carico all'inizio."},
{"t":"Toccando una sfera metallica neutra con una sfera metallica carica negativamente, alcuni elettroni passano dalla sfera carica a quella neutra.","ok":true,"s":"Sì: gli elettroni in eccesso si respingono e una parte di essi si sposta sulla sfera neutra."},
{"t":"Toccando una sfera metallica neutra con una sfera metallica carica positivamente, alcuni protoni passano sulla sfera neutra.","ok":false,"s":"No: i protoni non si spostano mai. Sono alcuni elettroni della sfera neutra a passare su quella positiva, che li attira: così la sfera prima neutra resta con più protoni che elettroni, cioè positiva."},
{"t":"La carica totale delle due sfere, dopo il contatto, è uguale a quella che avevano prima del contatto.","ok":true,"s":"Sì: la carica non si crea e non si distrugge, passa soltanto da un corpo all'altro."}
]{% endcapture %}
{% include quiz.html domande=_qCont id="q-contatto" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl2" %}
Due sfere metalliche identiche hanno cariche $+8\times10^{-9}\ \text C$ e $-2\times10^{-9}\ \text C$. Vengono messe a contatto e poi separate. Quale carica ha ciascuna sfera alla fine?
{% capture _oCont %}[
{"v":"a","t":"$+3\\times10^{-9}\\ \\text C$ ciascuna"},
{"v":"b","t":"$+4\\times10^{-9}\\ \\text C$ e $-1\\times10^{-9}\\ \\text C$"},
{"v":"c","t":"$+5\\times10^{-9}\\ \\text C$ ciascuna"},
{"v":"d","t":"le stesse di prima: $+8\\times10^{-9}\\ \\text C$ e $-2\\times10^{-9}\\ \\text C$"}
]{% endcapture %}
{% include mcq.html id="mcq-contatto-sfere" opts=_oCont ok="a" s="La carica totale si conserva: $+8\times10^{-9}\ \text C-2\times10^{-9}\ \text C=+6\times10^{-9}\ \text C$. Poiché le sfere sono identiche, se la dividono a metà: $+3\times10^{-9}\ \text C$ ciascuna." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include figura.html id="nastro-antistatico"
   src="/corsi/immagini/nastro-antistatico.jpeg"
   didascalia="Un nastro antistatico: è fissato alla carrozzeria dell'auto e tocca l'asfalto."
   larghezza="260px" %}

**Un'applicazione: il nastro antistatico.** Capita spesso di scendere dall'auto, toccare la portiera e prendere la scossa. Per evitarlo si vendono dei nastri antistatici come quello della figura: una striscia che contiene un materiale conduttore (a volte è proprio una catenella di metallo), fissata sotto la carrozzeria in modo da strisciare sull'asfalto.
{% capture _rNastro %}Mentre l'auto viaggia, la carrozzeria si carica per strofinio con l'aria, e anche noi ci carichiamo strofinandoci sul sedile. Le gomme sono isolanti, quindi la carica non riesce a scendere a terra e resta sull'auto. Quando scendiamo e tocchiamo la portiera, il nostro corpo, che è un conduttore e poggia per terra, offre alla carica una strada verso la Terra: le cariche ci attraversano tutte insieme, e sentiamo la scossa. Il nastro antistatico collega sempre la carrozzeria al terreno con un conduttore, quindi la carica si scarica a poco a poco mentre si viaggia, e non resta niente da scaricare attraverso di noi.{% endcapture %}
{% include risposta-aperta.html id="ra-nastro-antistatico" tipo="spiega"
   domanda="Perché la scossa ci arriva proprio quando tocchiamo la portiera? E perché il nastro antistatico la evita?" risposta=_rNastro %}

Per lo stesso motivo, prima di scaricare il carburante, le autocisterne vengono collegate al terreno con un cavo: la carica accumulata durante il viaggio passa alla Terra, senza scintille vicino ai vapori di benzina.
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include figura.html id="gomme-aereo"
   src="/corsi/immagini/gomme-aereo.jpeg"
   didascalia="Le gomme del carrello di un aereo."
   larghezza="320px" %}

**Un'applicazione: le gomme degli aerei.** Muovendosi, un aereo si carica per strofinio con l'aria. Per questo le sue gomme contengono materiali conduttori (per esempio polvere di carbonio): appena le ruote toccano la pista, l'aereo si scarica quasi completamente.

Perché, al contatto, quasi tutta la carica dell'aereo passa al terreno?
{% capture _oGomme %}[
{"v":"a","t":"Perché nel contatto la carica si divide sempre a metà, e l'altra metà resta sull'aereo"},
{"v":"b","t":"Perché la Terra è un conduttore enormemente più grande dell'aereo: nel contatto ne prende di più il corpo più grande, quindi la Terra si prende quasi tutta la carica"},
{"v":"c","t":"Perché la pista è carica con segno opposto a quello dell'aereo"},
{"v":"d","t":"Perché le gomme sono isolanti"}
]{% endcapture %}
{% include mcq.html id="mcq-gomme-aereo" opts=_oGomme ok="b" s="È un'elettrizzazione per contatto fra l'aereo e la Terra, entrambi conduttori. La carica si divide fra i due corpi, e ne prende di più quello più grande: la Terra è così grande che si prende praticamente tutta la carica, e l'aereo resta quasi neutro. (La metà vale solo per due conduttori identici; e le gomme, qui, sono fatte apposta per condurre.)" %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### La Polarizzazione e l'Elettrizzazione per induzione

{% include margin-note.html testo="Caricare senza toccare?" %}
C'è però un modo ancora più sorprendente per cambiare la carica di un conduttore: senza nemmeno sfiorarlo. Guarda che cosa succede se avviciniamo un corpo carico (isolante o conduttore) a un conduttore neutro:
{% include margin-note-end.html %}


{% include lab-virtuali/polarizzazione-lab.html %}

{% include margin-note.html testo="Le cariche si separano: la polarizzazione" %}
Si vede che <u>le cariche di segno opposto al corpo ne sono attratte</u>, mentre <u>quelle di segno uguale ne sono respinte</u>. Pertanto, quelle di segno opposto si avvicinano e le altre si allontanano, <u>creando due zone separate di carica</u>. Questo processo è chiamato <definizione>polarizzazione</definizione>.
{% include margin-note-end.html %}


{% include box-imp.html testo="Polarizzazione" %}
La polarizzazione è la ridistribuzione delle cariche all'interno di un conduttore come conseguenza della presenza di un corpo carico esterno.
{% include box-end.html %}

{% include margin-note.html testo="Il conduttore polarizzato resta neutro" %}
È importante osservare che <u>il conduttore polarizzato resta neutro nel complesso</u>, cioè la sua carica globale è nulla. Infatti, a differenza del contatto, qui <u markdown="span">**nessuna carica passa da un corpo all'altro**</u>, e <u>la polarizzazione scompare non appena il corpo carico viene allontanato</u>.
{% include margin-note-end.html %}


{% include box-note.html testo="La polarizzazione, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="Il pettine che piega l'acqua" %}
{% include video.html id="DHyj1sooKaA" %}
Apri il rubinetto in modo che esca un filo d'acqua sottile e continuo. Pettinati i capelli asciutti con un pettine di plastica, che così si carica per strofinio, e avvicinalo al filo d'acqua, senza toccarlo: l'acqua si piega verso il pettine! Nel video, al posto del pettine, c'è una bacchetta strofinata. Le molecole d'acqua sono neutre, ma il pettine carico le polarizza, e la parte più vicina, di segno opposto, viene attratta più di quanto venga respinta quella più lontana.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="La lattina che insegue il palloncino" %}
{% include figura.html id="palloncino-lattina"
   src="/corsi/video/palloncino-attira-lattina.mp4"
   didascalia="Il palloncino strofinato attira la lattina, che rotola verso di lui."
   larghezza="420px" %}

Appoggia una lattina vuota di metallo su un tavolo, sdraiata. Avvicinale un palloncino strofinato sui capelli: la lattina comincia a rotolare verso il palloncino, e se lo sposti la lattina lo segue. La lattina è un conduttore: il palloncino la polarizza, e la attira.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Gli omini di carta che ballano" %}
{% include figura.html id="bottiglia-omini"
   src="/corsi/video/polarizzazione-bottiglia-carta.mp4"
   didascalia="Una bottiglia di plastica strofinata fa ballare degli omini di carta."
   larghezza="240px" %}

Ritaglia da un foglio sottile degli omini di carta, piccoli e leggeri. Strofina una bottiglia di plastica (sui capelli o su un panno di lana) e tienila sopra gli omini, senza toccarli: si alzano in piedi e cominciano a ballare! La bottiglia carica polarizza la carta, e gli omini vengono attirati verso di lei. Quando uno tocca la bottiglia, si carica con il suo stesso segno, e viene respinto: ricade, si scarica sul tavolo e viene attirato di nuovo. Con dei pezzettini di carta e una penna strofinata succede la stessa cosa: i pezzettini saltano su, e qualcuno, dopo aver toccato la penna, schizza via.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Il pendolino elettrico" %}
{% include video.html id="tHXVk1he7Qw" %}
Appendi a un filo di cotone una pallina di carta stagnola e avvicinale una penna di plastica strofinata: la pallina viene attratta, tocca la penna e subito dopo viene respinta, come se avesse cambiato idea. Qui si vedono, uno dopo l'altro, due fenomeni che conosci: prima la penna polarizza la pallina e la attira; poi, al contatto, le cede un po' della sua carica (elettrizzazione per contatto): ora le due hanno carica dello stesso segno, e si respingono.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="La verniciatura elettrostatica" %}
Le carrozzerie delle automobili si verniciano con uno spruzzo di goccioline di vernice cariche, che si caricano uscendo dall'ugello. La carrozzeria, che è un conduttore, viene polarizzata dalle goccioline cariche (ed è anche collegata a terra), e così le attira: si distribuiscono in modo uniforme e arrivano anche sui lati nascosti, che lo spruzzo non vede direttamente. In più, si spreca molta meno vernice.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/filtro.elettrostatico.webp" alt="Schema di un filtro elettrostatico: l'aria passa fra fili carichi negativamente e lastre cariche positivamente, sulle quali restano attaccate le particelle" titolo="I filtri elettrostatici" %}
Nei camini delle fabbriche e in molti purificatori d'aria, i fumi passano fra fili e lastre carichi, come nello schema. Le particelle di polvere e di fuliggine vengono attirate dalle lastre: quelle neutre perché vengono polarizzate, e molte altre perché, passando vicino ai fili, si caricano esse stesse. Così restano attaccate alle lastre, invece di finire nell'aria che respiriamo.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/panno-cattura-polvere.webp" alt="Panno cattura-polvere" titolo="Il panno cattura-polvere" %}
I panni cattura-polvere di tessuto sintetico si caricano strofinando le superfici, e attirano la polvere polarizzandola: i granelli di polvere restano attaccati al panno invece di sollevarsi in aria.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/pellicola.webp" alt="Pellicola trasparente per alimenti" titolo="La pellicola per alimenti" %}
Anche la pellicola trasparente per alimenti si carica quando la srotoliamo: per questo si attacca alle ciotole, anche a quelle di vetro, che vengono polarizzate dalla pellicola carica. (E per lo stesso motivo, a volte, si attacca anche alle mani e si appallottola!)
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

Per rendere permanente la separazione delle cariche serve un passaggio in più, che puoi vedere nella seguente animazione. Prova sia con la bacchetta negativa sia con quella positiva.

{% include lab-virtuali/induzione-permanente-lab.html %}

{% include margin-note.html testo="Il collegamento a terra" %}
Osserviamo che se, mentre il corpo carico resta vicino, colleghiamo il conduttore a terra con un filo, alcuni elettroni si spostano attraverso il filo (mentre i protoni rimangono fermi, come al solito). Se poi stacchiamo il collegamento a terra *prima* di allontanare il corpo carico, il conduttore resta con una carica netta permanente. Questo fenomeno consiste nell'<definizione>elettrizzazione per induzione</definizione>.
{% include margin-note-end.html %}


{% include margin-note.html testo="Il segno della carica indotta" %}
Il segno della carica che resta dipende dal corpo carico che abbiamo avvicinato:
- se il corpo è **negativo**, respinge gli elettroni del conduttore, e alcuni di essi <u>scendono nel terreno</u>: il conduttore resta con meno elettroni che protoni, cioè carico **positivamente**;
- se il corpo è **positivo**, attira elettroni, e alcuni di essi <u>salgono dal terreno</u> verso il conduttore: il conduttore resta con più elettroni che protoni, cioè carico **negativamente**.

In entrambi i casi, il conduttore si carica con il segno **opposto** a quello del corpo che abbiamo avvicinato.
{% include margin-note-end.html %}


{% include box-note.html testo="L'elettrizzazione per induzione, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="L'elettroforo di Volta" %}
{% include video.html id="IyuFKc3eF5w" %}
Nel 1775 [Alessandro Volta](https://it.wikipedia.org/wiki/Alessandro_Volta) inventò l'<definizione>elettroforo</definizione>, uno strumento per produrre carica a volontà, che puoi costruire anche tu: ti servono un vassoio di plastica (o di polistirolo), una teglia di alluminio e un bicchiere di plastica incollato al centro della teglia, come manico isolante. Strofina il vassoio con la lana, appoggiaci sopra la teglia tenendola per il manico, tocca la teglia con un dito, poi solleva la teglia: ora è carica, e avvicinandole un dito scocca una piccola scintilla. La teglia si è caricata per induzione: il vassoio carico ha polarizzato la teglia, e il dito ha fatto da collegamento a terra. Puoi ripetere l'operazione tantissime volte, senza strofinare di nuovo il vassoio.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Il pozzo di Faraday" %}
{% include video.html id="sXwPTpwix90" %}
Un esperimento ideato da [Michael Faraday](https://it.wikipedia.org/wiki/Michael_Faraday): un recipiente di metallo (un "pozzo") è collegato a un elettroscopio. Se si cala dentro il recipiente una sferetta carica, appesa a un filo isolante, le foglioline si aprono anche se la sferetta non tocca nulla: per induzione, sulla superficie esterna del recipiente compare carica dello stesso segno della sferetta, che arriva fino alle foglioline. Faraday notò che l'apertura delle foglioline non dipende da dove si trova la sferetta dentro il pozzo, e che non cambia nemmeno quando la sferetta tocca il fondo: in quel momento tutta la sua carica passa al recipiente, e infatti, tirandola fuori, la sferetta è completamente scarica.
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include box-imp.html testo="Elettrizzazione per induzione" %}
L'elettrizzazione per induzione è il fenomeno per cui, **collegando a terra** un conduttore polarizzato da un corpo carico vicino, alcuni elettroni passano fra il conduttore e il terreno: <u>scendono nel terreno</u> se il corpo carico è negativo, <u>salgono dal terreno</u> se è positivo. Staccato il collegamento, il conduttore resta carico con il segno **opposto** a quello del corpo carico.
{% include box-end.html %}


{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qInd %}[
{"t":"Un conduttore polarizzato ha una carica totale diversa da zero.","ok":false,"s":"No: le sue cariche si sono solo ridistribuite, ma nel complesso resta neutro."},
{"t":"Avvicinando una bacchetta carica negativamente a una sfera metallica neutra, gli elettroni della sfera si spostano sul lato più lontano dalla bacchetta.","ok":true,"s":"Sì: sono respinti dalla bacchetta, che ha carica dello stesso segno."},
{"t":"Durante la polarizzazione alcune cariche passano dalla bacchetta al conduttore.","ok":false,"s":"No: nella polarizzazione nessuna carica passa da un corpo all'altro, e i due corpi non si toccano nemmeno."},
{"t":"Se si allontana la bacchetta, la polarizzazione scompare.","ok":true,"s":"Sì: senza il corpo carico vicino, le cariche del conduttore tornano a distribuirsi in modo uniforme."},
{"t":"Nell'elettrizzazione per induzione, se si allontana la bacchetta prima di staccare il collegamento a terra, il conduttore resta carico.","ok":false,"s":"No: allontanata la bacchetta, gli elettroni tornano dalla terra al conduttore, che torna neutro. Il collegamento a terra va staccato prima di allontanare il corpo carico."}
]{% endcapture %}
{% include quiz.html domande=_qInd id="q-induzione" senza_esempi="true" %}

Questa volta avviciniamo a una sfera metallica neutra una bacchetta carica **positivamente**. Colleghiamo la sfera a terra, poi stacchiamo il collegamento e infine allontaniamo la bacchetta. Che carica ha la sfera?
{% capture _oInd %}[
{"v":"a","t":"Positiva, come nell'esempio visto sopra"},
{"v":"b","t":"Negativa"},
{"v":"c","t":"Nessuna: torna neutra"}
]{% endcapture %}
{% include mcq.html id="mcq-induzione-positiva" opts=_oInd ok="b" s="La bacchetta positiva attira gli elettroni: mentre la sfera è collegata a terra, degli elettroni salgono dalla terra verso la sfera. Staccato il collegamento, quegli elettroni restano sulla sfera, che quindi è carica negativamente: il segno è sempre opposto a quello del corpo che induce." %}

Un palloncino strofinato sui capelli resta attaccato al muro, anche se il muro è neutro. Perché?
{% capture _oMuro %}[
{"v":"a","t":"Perché il palloncino cede la sua carica al muro, e da quel momento i due corpi si attraggono"},
{"v":"b","t":"Perché il palloncino polarizza il muro: nella parte vicina si avvicinano le cariche di segno opposto, che lo attirano più di quanto le altre, più lontane, lo respingano"},
{"v":"c","t":"Perché il muro è sempre carico, anche se non ce ne accorgiamo"},
{"v":"d","t":"Perché lo strofinio rende il palloncino un po' appiccicoso"}
]{% endcapture %}
{% include mcq.html id="mcq-palloncino-muro" opts=_oMuro ok="b" s="Il muro è un isolante, ma le sue molecole si polarizzano: in ognuna le cariche di segno opposto a quelle del palloncino si spostano un pochino verso di lui. Le cariche attratte sono un po' più vicine al palloncino di quelle respinte, e la forza elettrica diminuisce con la distanza: vince l'attrazione. È lo stesso motivo per cui un pettine strofinato attira dei pezzettini di carta." %}
{% include box-end.html %}

### Come misurare la carica: l'elettroscopio a foglie

{% include margin-note.html testo="Uno strumento per misurare la carica" %}
Ogni grandezza fisica deve essere misurabile, e quindi deve esistere (almeno idealmente) uno strumento per misurarla. Per misurare la carica elettrica, il primo strumento che si utilizzò fu un <definizione>elettroscopio a foglie</definizione>: uno strumento formato da un'asta conduttrice che attraversa un tappo isolante, terminando in alto con una sferetta metallica e, in basso, con due sottilissime foglioline metalliche, racchiuse in un contenitore di vetro per proteggerle dalle correnti d'aria.
{% include margin-note-end.html %}


<div class="fig-row">
{% include figura.html id="elettroscopio-neutro"
   src="/corsi/immagini/elettroscopio_a_foglie.webp"
   didascalia="Elettroscopio scarico: le due foglioline, neutre, restano chiuse."
   larghezza="240px" %}
{% include figura.html id="elettroscopio-attivo"
   src="/corsi/immagini/elettroscopio_a_foglie_attivo.webp"
   didascalia="Elettroscopio carico: le foglioline, cariche dello stesso segno, si respingono e si aprono."
   larghezza="240px" %}
</div>

{% include margin-note.html testo="Perché le foglioline si aprono" %}
Finché lo strumento è scarico, le due foglioline restano chiuse. Se un corpo carico tocca la sferetta, parte della sua carica si trasferisce lungo l'asta conduttrice fino alle foglioline, che si caricano dello stesso segno e, respingendosi a vicenda, si aprono a ventaglio. Il corpo carico può essere anche una bacchetta isolante, di vetro o di plastica: come abbiamo visto per l'elettrizzazione per contatto, cede alla sferetta la carica dei punti con cui la tocca.
{% include margin-note-end.html %}


{% include margin-note.html testo="Basta avvicinarsi" %}
Sorprendentemente, l'elettroscopio funziona anche se il corpo carico si limita ad **avvicinarsi** alla sferetta, senza toccarla: come abbiamo appena visto, basta che le cariche libere dell'asta si ridistribuiscano per induzione, concentrando carica dello stesso segno sulle foglioline. In questo caso, però, le foglioline si richiudono non appena il corpo viene allontanato.
{% include margin-note-end.html %}


{% include margin-note.html testo="L'apertura misura la carica" %}
Più carica è presente, più le foglioline si respingono e più si allontanano tra loro: l'angolo di apertura è quindi legato alla quantità di carica. 
{% include margin-note-end.html %}


{% include box-lab.html titolo="Elettroscopio a foglie fai da te"
   testo="Costruisci un elettroscopio con materiali da cucina: un barattolo, della carta stagnola e una vite. Bastano 15 minuti, e puoi guadagnare fino a 0,5 punti nella verifica."
   link="/corsi/gravitazione-elettromagnetismo/laboratorio/elettroscopio-fai-da-te/"
   img="/corsi/immagini/elettroscopio-fai-da-te/finito.webp" %}


Prova tu stesso: trascina uno strumento dal menu fino all'elettroscopio e osserva le foglioline.

{% include lab-virtuali/elettroscopio-lab.html %}


{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qElettr %}[
{"t":"Un elettroscopio a foglie può aprirsi anche solo avvicinando un corpo carico, senza toccarlo.","ok":true,"s":"Vero, grazie all'induzione — ma in questo caso le foglioline si richiudono se il corpo viene allontanato."},
{"t":"L'angolo di apertura delle foglioline dell'elettroscopio non dipende dalla quantità di carica presente.","ok":false,"s":"Falso: più carica è presente, più le foglioline si respingono e si aprono."}
]{% endcapture %}
{% include quiz.html id="qgfElettr" domande=_qElettr senza_esempi="true" %}
{% include box-end.html %}


# La Forza Elettrica e la Legge di Coulomb

{% include margin-note.html testo="Una nuova forza: la forza elettrica" %}
Abbiamo quindi compreso che le cariche elettriche interagiscono tra loro, allontanandosi quando hanno lo stesso segno e avvicinandosi quando hanno segno opposto.  
Questo rivela la presenza di un nuovo tipo di forza, che si chiama **forza elettrica**. Nei termini della Fisica, diciamo che questa è una forza <u>repulsiva quando le due cariche hanno segno uguale</u> ed è <u>attrattiva quando le cariche hanno segno opposto</u>.
{% include margin-note-end.html %}

### Direzione e verso della forza elettrica
{% include margin-note.html testo="Come si disegna la forza elettrica" %}
 Possiamo quindi comprendere fin da subito la direzione e il verso della forza elettrica: si disegna come nella seguente figura, a seconda dei casi.

{% include figure/direzione-forza-figura.html %}
{% include margin-note-end.html %}


{% include margin-note.html testo="La forza elettrica è una forza centrale" %}
Notiamo dal disegno che <u markdown="span">il vettore forza ha **sempre** come direzione la retta che congiunge i due centri</u>. Vale a dire, <u markdown="span">**la forza elettrica è una forza centrale**</u>. 
{% include margin-note-end.html %}

{% include margin-note.html testo="Il terzo principio della dinamica" %}
Nota anche che, in ciascun caso, le due frecce sono lunghe uguali. Come per la forza gravitazionale, vale infatti il <definizione>terzo principio della dinamica</definizione> (principio di azione e reazione): se la carica $q_1$ esercita una forza sulla carica $q_2$, allora $q_2$ esercita su $q_1$ una forza <u markdown="span">**di uguale modulo**, **stessa direzione** e **verso opposto**</u>,

$$\vec F_{2\to1} = -\vec F_{1\to2}.$$

Questo è vero anche quando le due cariche sono molto diverse: una carica grande respinge (o attrae) una carica piccola esattamente quanto la carica piccola respinge (o attrae) quella grande. E non conta nemmeno la massa dei due corpi: nell'atomo di idrogeno il protone attrae l'elettrone con la stessa intensità con cui l'elettrone attrae il protone, anche se il protone ha una massa circa 1800 volte più grande. Ciò che cambia è l'effetto: con la stessa forza, l'elettrone, molto più leggero, subisce un'accelerazione molto più grande.
{% include margin-note-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qDirF %}[
{"t":"Due cariche positive si respingono.","ok":true,"s":"Sì: cariche dello stesso segno si respingono."},
{"t":"La forza elettrica fra due cariche giace sempre sulla retta che congiunge i loro centri.","ok":true,"s":"Sì: la forza elettrica è una forza centrale."},
{"t":"Una carica grande esercita su una carica piccola una forza più intensa di quella che riceve.","ok":false,"s":"No: per il terzo principio della dinamica le due forze hanno lo stesso modulo e versi opposti, qualunque sia il valore delle cariche."}
]{% endcapture %}
{% include quiz.html domande=_qDirF id="q-dir-forza" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una carica negativa $Q_1$ si trova a sinistra di una carica positiva $Q_2$. In che verso è la forza che $Q_1$ esercita su $Q_2$?
{% capture _oDirF %}[
{"v":"a","t":"verso sinistra, cioè verso $Q_1$"},
{"v":"b","t":"verso destra, cioè lontano da $Q_1$"},
{"v":"c","t":"verso l'alto, perpendicolare alla retta fra le cariche"},
{"v":"d","t":"dipende da quale delle due cariche è più grande"}
]{% endcapture %}
{% include mcq.html id="mcq-dir-forza" opts=_oDirF ok="a" s="Le cariche hanno segno opposto, quindi si attraggono: la forza su $Q_2$ punta verso $Q_1$, cioè verso sinistra, lungo la retta che congiunge i centri. Il valore delle cariche cambia solo il modulo della forza, non il suo verso." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Nell'atomo di idrogeno il protone attrae l'elettrone esattamente con la stessa intensità con cui l'elettrone attrae il protone.
{% capture _rIdro %}Le due forze hanno lo stesso modulo, ma il protone ha una massa circa 1800 volte più grande di quella dell'elettrone. Per il secondo principio della dinamica, $a = F/m$: a parità di forza, l'elettrone ha un'accelerazione circa 1800 volte più grande. Il protone si muove pochissimo, l'elettrone moltissimo: per questo, in pratica, è l'elettrone a muoversi attorno al protone. (Succede lo stesso con la Terra e il Sole, che si attraggono con la stessa forza.){% endcapture %}
{% include risposta-aperta.html id="ra-idrogeno-terzo" tipo="spiega"
   domanda="Se le forze sono uguali, perché è l'elettrone a muoversi attorno al protone, e non il contrario?" risposta=_rIdro %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

## L'esperimento di Coulomb e il modulo della forza elettrica

{% include margin-note.html testo="Da che cosa dipende il modulo della forza?" %}
Come abbiamo fatto per la forza gravitazionale, dobbiamo ora chiederci quali fattori determinino il modulo della forza elettrica, e in che modo. Charles-Augustin de Coulomb rispose a questa domanda nel 1785, usando esattamente lo stesso tipo di apparato con cui Cavendish avrebbe in seguito misurato la forza gravitazionale: una bilancia a torsione — con la differenza che, al posto di due masse, Coulomb utilizzò due sferette cariche elettricamente.
{% include margin-note-end.html %}


Puoi ripetere l'esperienza di Coulomb con l'animazione qui sotto: è la stessa identica bilancia a torsione del capitolo precedente, solo che ora, al posto della massa fissa e di quella mobile, si sceglie il valore della carica fissa $Q$ e di quella mobile $q.$ Poiché le due sferette hanno lo stesso segno di carica, si respingono: il bilancere ruota quindi allontanandosi dalla sferetta fissa, invece che avvicinandosi come accadeva per la gravità — ma, a parte questo, osserverai esattamente le stesse cose.

{% include lab-virtuali/coulomb-lab.html %}

Verifica con l'animazione che:

- puoi scegliere il segno di ciascuna carica con i pulsanti "+"/"−": se i segni sono uguali le cariche si respingono e il bilancere si allontana dalla sferetta fissa, se sono opposti si attraggono e il bilancere si avvicina (fino a un fermo meccanico, per evitare che le sferette si tocchino) — proprio la stessa regola vista nel disegno di inizio paragrafo;
- nello scenario "Dipendenza dalle cariche", premendo "Avvia" il bilancere ruota lentamente e si ferma in una posizione di equilibrio: aumentando la carica $Q$ oppure la carica $q$, l'angolo finale raggiunto (e quindi l'intensità della forza) è più grande;
- nello scenario "Dipendenza da r", i pulsanti spostano davvero il bilancere alla nuova distanza (indicata dalla linea tratteggiata $r$): raddoppiando $r$ l'intensità della forza non si dimezza, ma diventa un quarto; triplicando $r$ diventa un nono; quadruplicando $r$ diventa un sedicesimo — <u markdown="span">proprio quello che significa dire che $F$ è inversamente proporzionale al **quadrato** della distanza</u>, verificabile confrontando il valore di $F$ prima e dopo ogni cambio.

{% include margin-note.html testo="Dall'esperimento alla formula di Coulomb" %}
Coulomb dedusse così che il modulo della forza elettrica fra due cariche è **direttamente proporzionale al prodotto delle due cariche** e **inversamente proporzionale al quadrato della distanza** — esattamente la stessa dipendenza trovata da Cavendish per la forza gravitazionale. Cioè, la forza elettrica tra due cariche $q_1$ e $q_2$ è descritta dalla seguente equazione, nota come <definizione>legge di Coulomb</definizione>:
{% include eq-annotated.html
   id="fel1"
   formula="F = k \dfrac{\lvert q_1 \cdot q_2 \rvert}{r^2}"
   frammenti="F|k|\lvert|q_1 \cdot q_2|r^2"
   etichette="modulo della forza elettrica|costante di Coulomb|valore assoluto|prodotto delle cariche|quadrato della distanza fra i centri delle cariche"
   posizioni="alto|basso|alto|alto|basso"
%}

dove $k$ è detta <definizione>costante di Coulomb</definizione> e $r$ è la distanza fra i centri delle due cariche.
{% include margin-note-end.html %}

Confrontala con la legge di gravitazione universale: la legge di Coulomb si ottiene sostituendo un simbolo alla volta.

{% include lab-virtuali/analogia-formule-lab.html id="an-forza" tipo="forza" %}

{% include margin-note.html testo="Perché c'è il valore assoluto?"%}
Il valore assoluto serve ad **assicurare che il modulo sia sempre positivo**. Infatti ricordiamo che, mentre le cariche possono essere sia positive sia negative, <u>il modulo di un vettore è sempre positivo</u>. 
{% include margin-note-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qExpC %}[
{"t":"Nella bilancia di Coulomb, se le due sferette hanno carica dello stesso segno, il bilancere si allontana dalla sferetta fissa.","ok":true,"s":"Sì: cariche dello stesso segno si respingono."},
{"t":"Raddoppiando una delle due cariche, la forza raddoppia.","ok":true,"s":"Sì: la forza è direttamente proporzionale al prodotto delle cariche."},
{"t":"Raddoppiando la distanza fra le sferette, la forza si dimezza.","ok":false,"s":"No: diventa un quarto, perché la forza è inversamente proporzionale al quadrato della distanza."}
]{% endcapture %}
{% include quiz.html domande=_qExpC id="q-esp-coulomb" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Se si raddoppiano **entrambe** le cariche, lasciando invariata la distanza, la forza fra le due sferette
{% capture _oExpC %}[
{"v":"a","t":"raddoppia"},
{"v":"b","t":"diventa 4 volte più grande"},
{"v":"c","t":"resta la stessa"},
{"v":"d","t":"diventa la metà"}
]{% endcapture %}
{% include mcq.html id="mcq-esp-coulomb" opts=_oExpC ok="b" s="La forza è proporzionale al prodotto delle cariche: raddoppiandole entrambe, il prodotto diventa $2\cdot2 = 4$ volte più grande, e così anche la forza." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Coulomb trovò che la forza dipende da $1/r^2$, esattamente come la gravità.
{% capture _rExpC %}Si confronta la forza misurata a due distanze diverse. Se, raddoppiando la distanza, la forza diventasse la metà, dipenderebbe da $1/r$; invece diventa un quarto. Triplicando la distanza diventa un nono, quadruplicandola un sedicesimo: ogni volta la forza si divide per il quadrato del fattore con cui è cresciuta la distanza, ed è proprio questo che vuol dire "inversamente proporzionale a $r^2$".{% endcapture %}
{% include risposta-aperta.html id="ra-esp-coulomb" tipo="spiega"
   domanda="Usando la bilancia (o l'animazione), come puoi capire che la forza dipende da $1/r^2$ e non, per esempio, da $1/r$?" risposta=_rExpC %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### La costante di Coulomb

{% include margin-note.html testo="La costante di Coulomb dipende dal materiale" %}
La costante di Coulomb dipende dal materiale in cui sono immerse le cariche elettriche. Infatti, poiché ogni materiale risponde alla presenza delle cariche (ad esempio, polarizzandosi), può capitare che alcuni materiali “assorbano” parte della forza elettrica, diminuendone il modulo. È quindi intuitivo che il valore della costante di Coulomb $k$ sia massimo per il vuoto, e sia sempre minore per ogni altro materiale. 
{% include margin-note-end.html %}

{% include spoiler.html testo="Come fa un materiale ad «assorbire» la forza elettrica?" %}
Ogni materiale è pieno di cariche elettriche: gli elettroni e i protoni dei suoi atomi. Se dentro un materiale mettiamo una carica, queste cariche ne risentono: quelle di segno opposto vengono attirate e si avvicinano un po', quelle dello stesso segno vengono respinte e si allontanano un po'.

Per vedere bene che cosa succede, prendiamo un materiale in cui alcune particelle cariche sono libere di muoversi, come gli ioni dell'acqua salata. Nell'animazione seguente le particelle libere hanno tutte lo stesso segno, mentre il resto del materiale, che sta fermo (i puntini chiari), ha la carica opposta: nel complesso il materiale è neutro. Scegli i segni e guarda che cosa succede attorno alle due cariche quando si passa dal vuoto al materiale.

{% include lab-virtuali/schermatura-lab.html %}

Attorno a ogni carica si forma una zona in cui prevale la carica di segno opposto. Se la carica attira le particelle libere, queste le si affollano attorno; se invece le respinge, attorno a lei restano soltanto le cariche ferme del resto del materiale, che hanno il segno opposto al suo. In entrambi i casi la carica si ritrova circondata da carica di segno opposto, che in parte la "copre": vista da lontano, sembra più piccola di quanto sia davvero, e la forza che esercita sulle altre cariche diminuisce. Questo effetto si chiama <definizione>schermatura</definizione> della carica.

Qualcosa di simile succede anche nei materiali in cui le cariche non sono libere di muoversi: dentro ogni molecola le cariche si spostano appena un poco, come nella polarizzazione, ma l'effetto è lo stesso, anche se più debole.

Nell'acqua la schermatura è fortissima: la forza fra due cariche è circa 80 volte più debole che nel vuoto. È anche per questo che il sale si scioglie nell'acqua. Il sale da cucina è fatto di ioni sodio positivi e ioni cloro negativi, tenuti insieme proprio dalla forza elettrica; immersi nell'acqua, gli ioni si attraggono 80 volte di meno, e l'agitazione delle molecole basta a separarli.
{% include spoiler-end.html %}

Prima di conoscere il valore di $k$, scopriamo in quale unità di misura si esprime.

{% include esercizi/unita-coulomb.html %}

Quindi:

$$[k]=\frac{[F]\cdot[r^2]}{[\lvert q_1\rvert]\cdot[\lvert q_2\rvert]}=\frac{\text N\cdot\text m^2}{\text C\cdot\text C}=\frac{\text N\cdot\text m^2}{\text C^2}.$$

{% include margin-note.html testo="Determinazione sperimentale del valore di k" %}
Il valore della costante di Coulomb **nel vuoto**, misurato sperimentalmente, corrisponde a

$$
k = 8{,}99 \times 10^{9} \ \frac{\text N \cdot \text m^2}{\text{C}^2}.
$$

In altri materiali la costante è più piccola. Ecco alcuni valori approssimati, utili negli esercizi:

| Materiale | Costante di Coulomb | Rispetto al vuoto |
|---|---|---|
| aria | $k_{\text{aria}} \approx 8{,}99\times10^{9}\ \text N\cdot\text m^2/\text C^2$ | praticamente uguale (in realtà leggermente più piccola) |
| olio | $k_{\text{olio}} \approx 4\times10^{9}\ \text N\cdot\text m^2/\text C^2$ | circa 2 volte più piccola |
| vetro | $k_{\text{vetro}} \approx 1{,}5\times10^{9}\ \text N\cdot\text m^2/\text C^2$ | circa 6 volte più piccola |
| alcol (etanolo) | $k_{\text{alcol}} \approx 3{,}6\times10^{8}\ \text N\cdot\text m^2/\text C^2$ | circa 25 volte più piccola |
| acqua | $k_{\text H_2\text O} \approx 1{,}1\times10^{8}\ \text N\cdot\text m^2/\text C^2$ | circa 80 volte più piccola |

A differenza di $G$, il valore di $k$ è enorme: è proprio per questo che la forza elettrica è miliardi di miliardi di miliardi di miliardi di volte più forte della forza gravitazionale, a parità di distanza.
{% include margin-note-end.html %}

{% include box-imp.html testo="La Legge di Coulomb" %}
Il modulo della forza elettrica fra due cariche puntiformi $q_1$ e $q_2$, i cui centri distano $r$, è

$$F = k\,\frac{\lvert q_1\cdot q_2\rvert}{r^2}, \qquad k = 8{,}99\times10^9\ \frac{\text N\cdot\text m^2}{\text C^2}.$$

La forza è <u>diretta lungo la retta che congiunge le due cariche</u> (è una forza centrale): repulsiva se le cariche hanno lo stesso segno, attrattiva se hanno segno opposto.
{% include box-end.html %}

Esplora tu stesso come cambia $F$ al variare di una fra $q_1$, $q_2$ e $r$.

{% include graph-explorer.html id="ge-coulomb"
   variabili="q1|q2|r" etichette="\lvert q_1\rvert|\lvert q_2\rvert|r" unita="×10⁻⁶ C|×10⁻⁶ C|m" scala="1e-6|1e-6|1"
   min="0.1|0.1|0.05" max="10|10|2" default="2|3|0.3"
   costanti="k" costanti_valori="8.99e9"
   formula="k*q1*q2/(r*r)" formula_latex="k\dfrac{\lvert q_1\rvert \cdot \lvert q_2\rvert}{r^2}"
   y_simbolo="F" y_unita="N" solo_positivi="true" %}

{% include box-ex.html testo="Verifica Subito!" %}
Nei calcoli usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$.

{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qCoul %}[
{"t":"Se una delle due cariche raddoppia, raddoppia anche la forza.","ok":true,"s":"Sì: la forza è direttamente proporzionale al prodotto delle cariche."},
{"t":"Nella legge di Coulomb, $r$ è la distanza fra i centri delle due cariche.","ok":true,"s":"Sì: anche per due sferette cariche si misura da centro a centro, non fra le superfici."},
{"t":"Se la distanza fra due cariche raddoppia, la forza fra loro si dimezza.","ok":false,"s":"No: la forza è inversamente proporzionale al quadrato della distanza, quindi diventa un quarto."},
{"t":"Fra una carica di $4\\times10^{-6}\\ \\text C$ e una di $1\\times10^{-6}\\ \\text C$, quella più grande esercita sull'altra una forza più intensa di quella che riceve.","ok":false,"s":"No: nella formula compare il prodotto $\\lvert q_1\\cdot q_2\\rvert$, che è lo stesso per entrambe. Le due forze hanno lo stesso modulo e versi opposti, come vuole il terzo principio della dinamica."},
{"t":"In aria la costante di Coulomb è un po' più grande che nel vuoto, perché l'aria contiene molte particelle cariche.","ok":false,"s":"No: il vuoto è il caso in cui $k$ è più grande in assoluto. In ogni materiale, aria compresa, $k$ è più piccola, perché il materiale si polarizza e scherma in parte le cariche. Nell'aria la differenza è minima, ed è per questo che negli esercizi si usa lo stesso valore del vuoto."},
{"t":"Raddoppiando entrambe le cariche e anche la distanza, la forza non cambia.","ok":true,"s":"Sì: il prodotto delle cariche diventa 4 volte più grande, e anche $r^2$ diventa 4 volte più grande. I due effetti si compensano."}
]{% endcapture %}
{% include quiz.html domande=_qCoul id="q-coulomb" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Due cariche si respingono con una forza $F$. Se la distanza fra i loro centri raddoppia, la nuova forza è
{% capture _oCoulP1 %}[
{"v":"a","t":"$\\dfrac{F}{2}$"},
{"v":"b","t":"$\\dfrac{F}{4}$"},
{"v":"c","t":"$2\\,F$"},
{"v":"d","t":"$4\\,F$"}
]{% endcapture %}
{% include mcq.html id="mcq-coulomb-prop1" opts=_oCoulP1 ok="b" s="La distanza compare al quadrato, e al denominatore: se $r$ raddoppia, $r^2$ diventa $2^2=4$ volte più grande, e la forza diventa 4 volte più piccola." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Due cariche si respingono con una forza $F$. Se la distanza fra i loro centri triplica, la nuova forza è
{% capture _oCoulP2 %}[
{"v":"a","t":"$\\dfrac{F}{3}$"},
{"v":"b","t":"$\\dfrac{F}{6}$"},
{"v":"c","t":"$\\dfrac{F}{9}$"},
{"v":"d","t":"$9\\,F$"}
]{% endcapture %}
{% include mcq.html id="mcq-coulomb-prop2" opts=_oCoulP2 ok="c" s="Se $r$ triplica, $r^2$ diventa $3^2=9$ volte più grande, e la forza diventa 9 volte più piccola." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Due cariche si respingono con una forza $F$. Se la distanza fra i loro centri triplica e, contemporaneamente, una delle due cariche raddoppia, la nuova forza è
{% capture _oCoulP %}[
{"v":"a","t":"$\\dfrac{2}{3}\\,F$"},
{"v":"b","t":"$\\dfrac{2}{9}\\,F$"},
{"v":"c","t":"$6\\,F$"},
{"v":"d","t":"$\\dfrac{9}{2}\\,F$"}
]{% endcapture %}
{% include mcq.html id="mcq-coulomb-proporzioni" opts=_oCoulP ok="b" s="I due cambiamenti si combinano: triplicando la distanza la forza diventa 9 volte più piccola, raddoppiando una carica diventa 2 volte più grande. In tutto: $F\cdot\dfrac{2}{9}$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl3" %}
Due cariche puntiformi, entrambe uguali a $+1\times10^{-6}\ \text C$, si trovano nel vuoto, con i centri a $1\ \text m$ di distanza.

{% include fill-multi.html testo="Il modulo della forza fra le due cariche è [9] $\times10^{-3}\ \text N$." s="$F = 9\times10^{9}\cdot\dfrac{1\times10^{-6}\cdot1\times10^{-6}}{1^2}\ \text N = 9\times10^{9}\cdot10^{-12}\ \text N = 9\times10^{-3}\ \text N$." %}

{% include fill.html prima="Le due cariche si" tipo="drop" opts="attraggono|respingono" ok="respingono" dopo="." s="Le cariche hanno lo stesso segno, quindi si respingono: la forza è repulsiva." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl4" %}
Due cariche puntiformi $q_1 = +2\times10^{-6}\ \text C$ e $q_2 = -3\times10^{-6}\ \text C$ si trovano nel vuoto, con i centri a $30\ \text{cm}$ di distanza. Attenzione alle unità di misura!

{% include fill-multi.html testo="Il modulo della forza fra le due cariche è [0,6|0.6|0,60] N." s="$F = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot3\times10^{-6}}{(0{,}3)^2}\ \text N = \dfrac{54\times10^{-3}}{0{,}09}\ \text N = 0{,}6\ \text N$. Attenzione a scrivere la distanza in metri: $30\ \text{cm} = 0{,}3\ \text m$." %}

{% include fill.html prima="Le due cariche si" tipo="drop" opts="attraggono|respingono" ok="attraggono" dopo="." s="Le cariche hanno segno opposto, quindi si attraggono." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Isola le altre grandezze della legge di Coulomb. Per ciascuna, cerca la sequenza più breve di mosse, poi appuntala sul quaderno in un punto facile da ritrovare: ti servirà spesso.

{% include invert.html id="inv-coulomb-Qa" variabili="F|k|Qa|Qb|r" etichette="F|k|\lvert q_1\rvert|\lvert q_2\rvert|r"
   sinistra="F" destra="k*Qa*Qb/r/r" obiettivo="Qa" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include invert.html id="inv-coulomb-Qb" variabili="F|k|Qa|Qb|r" etichette="F|k|\lvert q_1\rvert|\lvert q_2\rvert|r"
   sinistra="F" destra="k*Qa*Qb/r/r" obiettivo="Qb" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include invert.html id="inv-coulomb-r" variabili="F|k|Qa|Qb|r" etichette="F|k|\lvert q_1\rvert|\lvert q_2\rvert|r"
   sinistra="F" destra="k*Qa*Qb/r/r" obiettivo="r" radice="1" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl5" %}
Due cariche puntiformi, $q_1 = +2\times10^{-6}\ \text C$ e $q_2 = +3\times10^{-6}\ \text C$, sono immerse nell'olio, e si respingono con una forza di $0{,}6\ \text N$. A che distanza si trovano i loro centri? Usa il valore di $k$ dell'olio della tabella, $k_{\text{olio}} \approx 4\times10^{9}\ \text N\cdot\text m^2/\text C^2$.

{% include fill-multi.html testo="$r =$ [0,2|0.2|0,20] m" s="Isolando $r$ nella legge di Coulomb: $r^2 = k_{\text{olio}}\dfrac{\lvert q_1\cdot q_2\rvert}{F} = 4\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot3\times10^{-6}}{0{,}6}\ \text m^2 = \dfrac{24\times10^{-3}}{0{,}6}\ \text m^2 = 0{,}04\ \text m^2$, quindi $r = \sqrt{0{,}04}\ \text m = 0{,}2\ \text m = 20\ \text{cm}$. Attenzione a usare la $k$ dell'olio, non quella del vuoto!" %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl6" %}
Due sferette con la stessa carica si respingono nel vuoto con una forza di $0{,}9\ \text N$ quando i loro centri distano $10\ \text{cm}$. Quanto vale la carica di ciascuna sferetta?
{% capture _oCoulQ %}[
{"v":"a","t":"$1\\times10^{-12}\\ \\text C$"},
{"v":"b","t":"$1\\times10^{-6}\\ \\text C$"},
{"v":"c","t":"$1\\times10^{-3}\\ \\text C$"},
{"v":"d","t":"$9\\times10^{-6}\\ \\text C$"}
]{% endcapture %}
{% include mcq.html id="mcq-coulomb-carica" opts=_oCoulQ ok="b" s="Le cariche sono uguali, quindi $F = k\,\dfrac{q^2}{r^2}$ e $q^2 = \dfrac{F\,r^2}{k} = \dfrac{0{,}9\cdot(0{,}1)^2}{9\times10^{9}}\ \text C^2 = 1\times10^{-12}\ \text C^2$. Ma questo è $q^2$: bisogna ancora estrarre la radice, $q = 1\times10^{-6}\ \text C$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl7" %}
Due ioni, immersi nell'acqua, hanno i centri a $1\ \text{nm}$ di distanza. A quale distanza dovrebbero trovarsi nel vuoto per attrarsi con la stessa forza? Guarda la tabella dei valori di $k$.
{% capture _oCoulW %}[
{"v":"a","t":"a $80\\ \\text{nm}$"},
{"v":"b","t":"a circa $9\\ \\text{nm}$"},
{"v":"c","t":"a $\\dfrac{1}{80}\\ \\text{nm}$"},
{"v":"d","t":"alla stessa distanza, $1\\ \\text{nm}$"}
]{% endcapture %}
{% include mcq.html id="mcq-coulomb-acqua" opts=_oCoulW ok="b" s="Nell'acqua $k$ è circa 80 volte più piccola che nel vuoto, quindi la forza è 80 volte più debole. Nel vuoto, per avere una forza 80 volte più debole bisogna che $r^2$ sia 80 volte più grande, cioè che $r$ sia $\sqrt{80}\approx 9$ volte più grande: circa $9\ \text{nm}$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### Confronto fra forza elettrica e forza gravitazionale

Prima di proseguire, fermiamoci a confrontare quello che abbiamo appena imparato sulla forza elettrica con quanto già sapevamo sulla forza gravitazionale.

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
Sia la forza elettrica sia quella gravitazionale sono inversamente proporzionali a:
{% capture _oCF1 %}[
{"v":"a","t":"la distanza $r$"},
{"v":"b","t":"il quadrato della distanza, $r^2$"},
{"v":"c","t":"il cubo della distanza, $r^3$"},
{"v":"d","t":"nessuna delle due dipende dalla distanza"}
]{% endcapture %}
{% include mcq.html id="mcq-confronto-1" opts=_oCF1 ok="b" s="Sia $F=k\,\dfrac{\lvert q_1 q_2\rvert}{r^2}$ sia $F=G\,\dfrac{m_1m_2}{r^2}$ dipendono dall'inverso del quadrato della distanza." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Quale fra la forza elettrica e la forza gravitazionale è una forza <strong>centrale</strong>, cioè diretta lungo la retta che congiunge i due corpi?
{% capture _oCF2 %}[
{"v":"a","t":"solo la forza gravitazionale"},
{"v":"b","t":"solo la forza elettrica"},
{"v":"c","t":"entrambe"},
{"v":"d","t":"nessuna delle due"}
]{% endcapture %}
{% include mcq.html id="mcq-confronto-2" opts=_oCF2 ok="c" s="Sono entrambe forze centrali: il vettore forza giace sempre sulla retta che congiunge i centri dei due corpi, o delle due cariche." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
La forza elettrica può essere sia attrattiva sia repulsiva, a seconda del segno delle cariche. La forza gravitazionale, invece, può essere:
{% capture _oCF3 %}[
{"v":"a","t":"sia attrattiva sia repulsiva, come quella elettrica"},
{"v":"b","t":"solo repulsiva"},
{"v":"c","t":"solo attrattiva"},
{"v":"d","t":"né attrattiva né repulsiva"}
]{% endcapture %}
{% include mcq.html id="mcq-confronto-3" opts=_oCF3 ok="c" s="La massa è sempre positiva, quindi la forza gravitazionale è sempre attrattiva: non esiste un'«antigravità»." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Che cosa hanno in comune la forza elettrica e la forza gravitazionale, riguardo al <em>modo</em> in cui agiscono?
{% capture _oCF4 %}[
{"v":"a","t":"agiscono solo se i due corpi si toccano"},
{"v":"b","t":"sono entrambe forze a distanza: agiscono anche se i corpi non si toccano, perfino nel vuoto"},
{"v":"c","t":"agiscono solo se i due corpi sono in movimento"},
{"v":"d","t":"serve sempre l'aria a trasmetterle, come per il suono"}
]{% endcapture %}
{% include mcq.html id="mcq-confronto-4" opts=_oCF4 ok="b" s="Sono entrambe forze a distanza: agiscono anche fra corpi lontani e separati dal vuoto, senza che nulla li tocchi." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Quale fra le due costanti, $k$ e $G$, ha il valore più grande?
{% capture _oCF5 %}[
{"v":"a","t":"$G$ è più grande di $k$"},
{"v":"b","t":"sono all'incirca uguali"},
{"v":"c","t":"$k$ è enormemente più grande di $G$"},
{"v":"d","t":"non si possono confrontare"}
]{% endcapture %}
{% include mcq.html id="mcq-confronto-5" opts=_oCF5 ok="c" s="$k = 8{,}99\times10^9\ \text N\cdot\text m^2/\text C^2$ contro $G=6{,}67\times10^{-11}\ \text N\cdot\text m^2/\text{kg}^2$: circa 20 ordini di grandezza di differenza. È per questo che, a parità di distanza, bastano cariche piccolissime per avere forze notevoli." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Perché nella formula della forza elettrica compare il valore assoluto, $F = k\,\dfrac{\lvert q_1\cdot q_2\rvert}{r^2}$, mentre in quella della forza gravitazionale, $F = G\,\dfrac{m_1\cdot m_2}{r^2}$, no?
{% capture _oCF6 %}[
{"v":"a","t":"perché la forza elettrica è sempre più intensa di quella gravitazionale"},
{"v":"b","t":"perché le cariche possono essere negative, e senza il valore assoluto il prodotto $q_1\\cdot q_2$ potrebbe essere negativo"},
{"v":"c","t":"perché $k$ è più grande di $G$"},
{"v":"d","t":"è solo una convenzione, senza un vero motivo"}
]{% endcapture %}
{% include mcq.html id="mcq-confronto-6" opts=_oCF6 ok="b" s="Le masse sono sempre positive, le cariche no: senza il valore assoluto la formula darebbe a volte un modulo negativo, che non ha senso." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Trascina ciascuna caratteristica nella colonna giusta: solo forza gravitazionale, solo forza elettrica, oppure entrambe.

{% include esercizi/classifica-forze.html %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl8" %}
In un atomo di idrogeno un protone e un elettrone si attraggono sia con la forza elettrica sia con la forza gravitazionale. Quante volte la forza elettrica è più intensa di quella gravitazionale? Usa i valori di carica e massa della tabella di inizio capitolo, e $G = 6{,}67\times10^{-11}\ \text N\cdot\text m^2/\text{kg}^2$.

*Suggerimento:* scrivi il rapporto $F_{el}/F_g$. Che cosa succede alla distanza $r$?
{% capture _oPE %}[
{"v":"a","t":"circa $2\\times10^{3}$ volte"},
{"v":"b","t":"circa $2\\times10^{20}$ volte"},
{"v":"c","t":"circa $2\\times10^{39}$ volte"},
{"v":"d","t":"dipende dalla distanza fra protone ed elettrone"}
]{% endcapture %}
{% include mcq.html id="mcq-protone-elettrone" opts=_oPE ok="c" s="Entrambe le forze sono inversamente proporzionali a $r^2$, quindi nel rapporto la distanza si semplifica: $\dfrac{F_{el}}{F_g}=\dfrac{k\,e^2}{G\,m_p\,m_e}=\dfrac{8{,}99\times10^{9}\times(1{,}602\times10^{-19})^2}{6{,}67\times10^{-11}\times1{,}673\times10^{-27}\times9{,}109\times10^{-31}}\approx2\times10^{39}$. Un numero con trentanove zeri." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
La forza elettrica è enormemente più intensa di quella gravitazionale. Eppure a governare il moto dei pianeti e delle galassie è la gravità, non la forza elettrica. Perché?
{% capture _oPE2 %}[
{"v":"a","t":"Perché a grandi distanze la forza elettrica diminuisce più in fretta di quella gravitazionale"},
{"v":"b","t":"Perché la materia, su larga scala, è neutra: le forze delle cariche positive e negative si compensano, mentre le masse sono tutte positive e le loro forze si sommano sempre"},
{"v":"c","t":"Perché nello spazio vuoto la forza elettrica non si trasmette"},
{"v":"d","t":"Perché i pianeti sono troppo grandi per essere elettrizzati"}
]{% endcapture %}
{% include mcq.html id="mcq-gravita-vince" opts=_oPE2 ok="b" s="Entrambe le forze dipendono da $1/r^2$, e nel vuoto la forza elettrica agisce benissimo (anzi, è lì che è più intensa). Il punto è che un pianeta contiene quasi esattamente tanti protoni quanti elettroni: le loro forze elettriche si annullano a vicenda. Le masse invece non si compensano mai, perché sono tutte positive: così la gravità, per quanto debolissima, su larga scala finisce per prevalere." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}


### In presenza di più cariche

{% include margin-note.html testo="Più cariche insieme" %}
Finora abbiamo considerato solo due cariche. Ma cosa succede se su una carica $q$ agiscono contemporaneamente **più** cariche, ciascuna con la propria forza elettrica?
{% include margin-note-end.html %}


{% include box-imp.html testo="Principio di sovrapposizione degli effetti" %}
In presenza di più cariche, vale lo stesso <definizione>principio di sovrapposizione degli effetti</definizione> già visto per la forza gravitazionale: ogni carica esercita su $q$ la propria forza elettrica <u markdown="span">**esattamente come se le altre non ci fossero**</u>. La forza totale su $q$ è la somma *vettoriale* di tutte queste forze:

$$\vec F_{tot} = \vec F_1 + \vec F_2 + \dots$$

{% include box-end.html %}

{% include margin-note.html testo="Le forze si sommano come vettori" %}
Poiché le forze sono vettori, per sommarle non basta sommarne i moduli: vanno sommate **come vettori**, con la stessa regola del parallelogramma già vista per la somma di due vettori qualsiasi. L'unica accortezza in più, rispetto al caso gravitazionale, è che ogni singola forza può essere sia repulsiva sia attrattiva, a seconda del segno delle cariche coinvolte. Nel simulatore seguente puoi spostare le cariche e cambiarne valore e segno: guarda come cambiano le due forze su $q$, e la loro somma.
{% include margin-note-end.html %}


{% include lab-virtuali/sovrapposizione-lab.html id="sov-forza-elet" tipo="forza" fisica="elet" %}

{% include margin-note.html testo="I moduli delle singole forze" %}
Nella regola del parallelogramma, i moduli di $\vec F_1$ e $\vec F_2$ (rappresentati dalla lunghezza delle frecce) si ottengono con la legge di Coulomb:

$$
F_1 = k \frac{|Q_1\cdot q|}{r_1^2}, \qquad\qquad F_2 = k \frac{|Q_2\cdot q|}{r_2^2} 
$$
{% include margin-note-end.html %}


Prova tu stesso a rinfrescare la regola del parallelogramma, questa volta con le forze elettriche: ricorda che ogni forza può essere repulsiva o attrattiva, a seconda dei segni.

{% include esercizi/parallelogramma-coulomb.html %}

# Il Campo Elettrico

{% include margin-note.html testo="Perché ci serve il campo elettrico" %}
La legge di Coulomb ci dice ***quanto*** due cariche si attraggano. Ma, esattamente come per il caso della forza gravitazionale, possiamo cambiare leggermente la nostra prospettiva e chiederci <u markdown="span">cosa ci sia ***nello spazio in mezzo*** a due cariche che si attraggono</u>. Il primo che si pose questa domanda fu il fisico inglese [Michael Faraday](https://it.wikipedia.org/wiki/Michael_Faraday). La sua risposta si basa sul concetto di **campo vettoriale** che abbiamo già incontrato per la gravitazione (storicamente, il primo a inventare il concetto di campo fu proprio Faraday, nel 1831, per spiegare i suoi esperimenti sull'elettromagnetismo; il campo gravitazionale arrivò molto tempo più tardi, con Einstein, nella teoria della relatività del 1915).
{% include margin-note-end.html %}


{% include box-ricorda.html testo="Il campo gravitazionale, in breve" %}
Una massa $M$ modifica lo spazio attorno a sé, come una biglia pesante deforma un telo elastico; un'altra massa, posata sul telo, si muove seguendo quella deformazione.

<div class="fig-row">
{% include figura.html id="telo-elastico"
   src="/corsi/immagini/telo-elastico.webp"
   didascalia="Una biglia pesante deforma il telo elastico."
   larghezza="260px" %}
{% include figura.html id="telo-elastico-due-biglie"
   src="/corsi/immagini/telo-elastico-due-biglie.webp"
   didascalia="Una seconda biglia, posata sul telo, rotola verso la prima seguendo la deformazione."
   larghezza="260px" %}
</div>

Questa modificazione dello spazio è il campo gravitazionale $\vec g$:
- il suo modulo è $g = G\,\dfrac{M}{r^2}$, e si misura in N/kg;
- si misura con una massa esploratrice $m$, perché $\vec g = \dfrac{\vec F}{m}$, e non dipende da $m$;
- punta sempre verso il centro della massa che lo genera;
- con più masse, i campi si sommano come vettori;
- si rappresenta con le linee di campo.
{% include box-end.html %}

{% include margin-note.html testo="Dalla gravità alle cariche" %}
Per le cariche elettriche vale tutto questo, quasi parola per parola: basta sostituire la massa con la carica, e la legge di gravitazione universale con la legge di Coulomb. Possiamo quindi andare veloci, fermandoci solo sulle cose che cambiano.
{% include margin-note-end.html %}


{% include margin-note.html testo="Il telo, per le cariche" %}
Anche una carica modifica lo spazio attorno a sé. C'è però una differenza: le masse si attraggono sempre, quindi il telo si infossa sempre. Con le cariche, invece, la forza può essere attrattiva o repulsiva. Immagina di posare sul telo una pallina con carica positiva: una carica negativa sarebbe per lei una **buca**, in cui la pallina rotola dentro; una carica positiva sarebbe invece una **gobba**, da cui la pallina rotola via.
{% include margin-note-end.html %}

{% include box-imp.html testo="Il campo elettrico" %}
La modificazione dello spazio prodotta da una carica si chiama <definizione>campo elettrico</definizione> e si indica con $\vec E$. È una grandezza **vettoriale**: associa a ogni punto dello spazio un vettore, che dice con quale intensità, in quale direzione e in quale verso viene spinta una carica posta in quel punto.
{% include box-end.html %}

## Il vettore campo elettrico

{% include margin-note.html testo="Modulo, direzione e verso" %}
Sappiamo che il campo elettrico $\vec E$ è una quantità vettoriale e che i vettori hanno tre caratteristiche: modulo, direzione e verso. Cominciamo studiando il modulo del vettore, poi analizzeremo la direzione e il verso.
{% include margin-note-end.html %}

### Il modulo del vettore campo elettrico

{% include margin-note.html testo="Dalla forza al campo: togliamo la carica di prova" %}
Come per il campo gravitazionale, partiamo dalla forza fra la carica $Q$ che genera il campo e un'altra carica $q$,

$$F = k\,\frac{\lvert Q\cdot q\rvert}{r^2},$$

e togliamo la carica $q$, cioè dividiamo per $q$:

{% include lab-virtuali/togli-massa-esploratrice-lab.html id="tm-campo-e" da="F" a="E" esp="2" cost="k" sorg="Q" espl="q" abs="true" %}

Otteniamo così il modulo del campo elettrico generato dalla carica $Q$:

{% include eq-annotated.html
   id="fce1"
   formula="E = k \dfrac{\lvert Q \rvert}{r^2}"
   frammenti="E|k|\lvert Q \rvert|r^2"
   etichette="modulo del campo elettrico|costante di Coulomb|valore assoluto della carica che genera il campo|quadrato della distanza dal centro della carica"
   posizioni="alto|basso|alto|basso"
%}

o, in modo del tutto equivalente,

{% include eq-annotated.html
   id="fce2"
   formula="E = \dfrac{F}{q}"
   frammenti="E|F|q"
   etichette="modulo del campo elettrico (N/C)|modulo della forza elettrica fra la carica $Q$ che genera il campo e la carica $q$ (N)|carica di prova (C)"
   posizioni="alto|alto|basso"
%}
{% include margin-note-end.html %}

{% include margin-note.html testo="La carica di prova" %}
La carica $q$ che usiamo per "sentire" il campo si chiama <definizione>carica di prova</definizione>: ha lo stesso ruolo della massa esploratrice. Per convenzione si sceglie **positiva** e molto **piccola**: piccola, perché con la sua forza non deve spostare le cariche che generano il campo che vogliamo misurare. E, come per la massa esploratrice, il campo **non dipende** da $q$: se raddoppia la carica di prova, raddoppia anche la forza, e il loro rapporto resta lo stesso.
{% include margin-note-end.html %}

{% include margin-note.html testo="L'unità di misura del campo elettrico è il N/C" %}
Dalla formula $E = F/q$, l'unità di misura del campo elettrico è quella della forza divisa per quella della carica.

<div class="iex-nested">
{% include unit-derive.html id="ud-E" testo="Trova l'unità di misura di E"
   variabile="E"
   numeratore_simboli="F" numeratore_corrette="N"
   denominatore_simboli="q" denominatore_corrette="C"
   opzioni="N|C|kg|m" %}
</div>

Quindi:

$$[E] = \frac{[F]}{[q]} = \frac{\text N}{\text C}.$$
{% include margin-note-end.html %}

{% include box-imp.html testo="Il modulo del campo elettrico generato da una carica Q" %}
Il campo elettrico generato da una carica $Q$, a distanza $r$ dal suo centro, ha **modulo**

$$E = k\,\dfrac{\lvert Q\rvert}{r^2} = \dfrac{F}{q}.$$

Si misura in N/C, e **non dipende** dalla carica di prova $q$: dipende solo da $Q$ (che lo genera) e da $r$ (il punto in cui lo si misura).
{% include box-end.html %}

Esplora tu stesso come cambia $E$ al variare di $Q$ o di $r$.

{% include graph-explorer.html id="ge-campo-e"
   variabili="Q|r" etichette="\lvert Q\rvert|r" unita="×10⁻⁶ C|m" scala="1e-6|1"
   min="0.1|0.1" max="10|5" default="2|1"
   costanti="k" costanti_valori="8.99e9"
   formula="k*Q/(r*r)" formula_latex="k\dfrac{\lvert Q\rvert}{r^2}"
   y_simbolo="E" y_unita="N/C" solo_positivi="true" %}

{% include box-ex.html testo="Verifica Subito!" %}
Nei calcoli usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$.

{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qCampoE %}[
{"t":"Il campo elettrico si misura in N/C.","ok":true,"s":"Sì: $E = F/q$, quindi newton diviso coulomb."},
{"t":"Il campo elettrico generato da una carica $Q$ dipende dal valore della carica di prova $q$.","ok":false,"s":"No: se raddoppia $q$, raddoppia anche la forza, e il rapporto $E = F/q$ resta lo stesso. Il campo dipende solo da $Q$ e dalla distanza."},
{"t":"Se la carica che genera il campo raddoppia, anche il campo raddoppia.","ok":true,"s":"Sì: il campo è direttamente proporzionale a $\\lvert Q\\rvert$."},
{"t":"Raddoppiando la distanza dalla carica, il campo diventa la metà.","ok":false,"s":"No: il campo è inversamente proporzionale al quadrato della distanza, quindi diventa un quarto."}
]{% endcapture %}
{% include quiz.html domande=_qCampoE id="q-campo-e" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Nella formula $E = k\,\dfrac{\lvert Q\rvert}{r^2}$, che cosa sono $Q$ e $r$?
{% capture _oSimbE %}[
{"v":"a","t":"$Q$ è la carica che genera il campo, e $r$ è la distanza fra il centro di $Q$ e il punto in cui calcoliamo il campo"},
{"v":"b","t":"$Q$ è la carica di prova, e $r$ è la distanza fra la carica di prova e la carica che genera il campo"},
{"v":"c","t":"$Q$ è la carica che genera il campo, e $r$ è il suo raggio"},
{"v":"d","t":"$Q$ è la carica totale di tutte le cariche presenti, e $r$ è la distanza media fra loro"}
]{% endcapture %}
{% include mcq.html id="mcq-simboli-campo" opts=_oSimbE ok="a" s="Il campo è una proprietà della carica $Q$ che lo genera: nella formula la carica di prova non c'è nemmeno. La distanza $r$ si misura dal centro di $Q$ fino al punto in cui vogliamo conoscere il campo (dove, eventualmente, metteremo una carica di prova)." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl9" %}
Una carica $Q = +2\times10^{-6}\ \text C$ è nel vuoto. Quanto vale il campo elettrico a $3\ \text m$ dal suo centro?

{% include fill-multi.html testo="$E =$ [2000|2 000] N/C" s="$E = k\dfrac{\lvert Q\rvert}{r^2} = 9\times10^{9}\cdot\dfrac{2\times10^{-6}}{3^2}\ \text{N/C} = \dfrac{18\times10^{3}}{9}\ \text{N/C} = 2000\ \text{N/C}$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl10" %}
In un punto il campo elettrico vale $2000\ \text{N/C}$. Quanto vale la forza su una carica $q = 3\times10^{-6}\ \text C$ posta in quel punto?

{% include fill-multi.html testo="$F =$ [6] $\times10^{-3}\ \text N$" s="Da $E = F/q$ si ricava $F = q\,E = 3\times10^{-6}\ \text C\cdot 2000\ \text{N/C} = 6\times10^{-3}\ \text N$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Un elettrone si trova vicino a una sferetta metallica carica. Vogliamo calcolare la forza che agisce sull'elettrone con la formula $F = \lvert q\rvert\,E$. Che cosa sono, qui, $q$ ed $E$?
{% capture _oSimbF %}[
{"v":"a","t":"$q$ è la carica della sferetta, ed $E$ è il campo generato dall'elettrone"},
{"v":"b","t":"$q$ è la carica dell'elettrone, ed $E$ è il campo generato dall'elettrone stesso"},
{"v":"c","t":"$q$ è la carica dell'elettrone, ed $E$ è il campo generato dalla sferetta nel punto in cui si trova l'elettrone"},
{"v":"d","t":"$q$ è la carica della sferetta, ed $E$ è il campo generato dalla sferetta"}
]{% endcapture %}
{% include mcq.html id="mcq-simboli-forza" opts=_oSimbF ok="c" s="In $F = \lvert q\rvert E$, $q$ è la carica <em>su cui</em> agisce la forza (qui l'elettrone), ed $E$ è il campo generato dalle <em>altre</em> cariche (qui la sferetta), nel punto in cui si trova $q$. Il campo che una carica genera non agisce mai su sé stessa." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Isola le altre grandezze nella formula del campo elettrico. Per ciascuna, cerca la sequenza più breve di mosse.

{% include invert.html id="inv-campo-e-Q" variabili="E|k|Q|r" etichette="E|k|\lvert Q\rvert|r"
   sinistra="E" destra="k*Q/r/r" obiettivo="Q" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include invert.html id="inv-campo-e-r" variabili="E|k|Q|r" etichette="E|k|\lvert Q\rvert|r"
   sinistra="E" destra="k*Q/r/r" obiettivo="r" radice="1" %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}


### Direzione e verso del vettore campo elettrico

{% include margin-note.html testo="Il verso del campo elettrico" %}
Per il campo gravitazionale avevamo scelto che $\vec g$ avesse il verso della forza sulla massa esploratrice. Allo stesso modo, si sceglie che $\vec E$ abbia la direzione e il verso della forza che agirebbe sulla carica di prova, che è **positiva**. Quindi il campo generato da una carica positiva si allontana da essa, mentre quello generato da una carica negativa punta verso di essa:

{% include figure/figura-vettore-campo-e.html %}
{% include margin-note-end.html %}


{% include box-imp.html testo="Il vettore campo elettrico" %}
Il **vettore** campo elettrico è legato al **vettore** forza elettrica sulla carica di prova $q$ dalla relazione

$$\vec E = \frac{\vec F}{q}, \qquad\text{cioè}\qquad \vec F = q\,\vec E.$$

Il campo generato da una carica **positiva** punta **lontano** da essa; quello generato da una carica **negativa** punta **verso** di essa.
{% include box-end.html %}

{% include box-warn.html testo="Su una carica negativa, la forza è opposta al campo" %}
Qui c'è una differenza importante rispetto alla gravità. La massa è sempre positiva, quindi $\vec F = m\,\vec g$ ha sempre lo stesso verso di $\vec g$. La carica, invece, può essere negativa: se in un punto mettiamo una carica negativa, per esempio un elettrone, la forza $\vec F = q\,\vec E$ ha **verso opposto** al campo. Il campo ci dice in che verso verrebbe spinta una carica positiva; una carica negativa va nel verso contrario.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
Nei calcoli usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$.

{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qCampoDir %}[
{"t":"Il campo elettrico generato da una carica positiva punta lontano dalla carica.","ok":true,"s":"Sì: una carica di prova positiva verrebbe respinta."},
{"t":"Il campo elettrico generato da una carica negativa punta verso la carica.","ok":true,"s":"Sì: una carica di prova positiva verrebbe attratta dalla carica negativa, quindi il campo punta verso di essa."},
{"t":"Su un elettrone la forza elettrica ha lo stesso verso del campo.","ok":false,"s":"No: l'elettrone ha carica negativa, quindi $\\vec F = q\\vec E$ ha verso opposto al campo."}
]{% endcapture %}
{% include quiz.html domande=_qCampoDir id="q-campo-dir" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
In un punto $P$ c'è un campo elettrico, generato da altre cariche, e il vettore $\vec E$ in $P$ punta verso destra. Mettiamo in $P$ un elettrone. In che verso viene spinto l'elettrone?
{% capture _oCE1 %}[
{"v":"a","t":"verso destra, nello stesso verso del campo"},
{"v":"b","t":"verso sinistra, nel verso opposto al campo"},
{"v":"c","t":"non viene spinto: il campo agisce solo sulle cariche che lo generano"},
{"v":"d","t":"dipende dalla massa dell'elettrone"}
]{% endcapture %}
{% include mcq.html id="mcq-campo-elettrone" opts=_oCE1 ok="b" s="La carica dell'elettrone è negativa, quindi la forza $\vec F = q\vec E$ ha verso opposto al campo: l'elettrone viene spinto verso sinistra. Il campo indica il verso in cui verrebbe spinta una carica positiva; una carica negativa va nel verso contrario. E il campo agisce proprio sulle cariche che <em>non</em> lo generano." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Nello stesso punto $P$ dell'esercizio precedente, dove il campo punta verso destra, mettiamo prima un protone, poi, al suo posto, un elettrone. Confronta le due forze: quella sul protone e quella sull'elettrone.
{% capture _oPE3 %}[
{"v":"a","t":"sono uguali: stesso modulo e stesso verso"},
{"v":"b","t":"hanno lo stesso modulo, ma versi opposti: sul protone verso destra, sull'elettrone verso sinistra"},
{"v":"c","t":"sull'elettrone la forza è molto più piccola, perché la sua massa è molto più piccola"},
{"v":"d","t":"hanno lo stesso verso, ma moduli diversi"}
]{% endcapture %}
{% include mcq.html id="mcq-protone-elettrone-campo" opts=_oPE3 ok="b" s="Il campo in $P$ è lo stesso. Le due cariche hanno lo stesso valore assoluto, $e$, quindi $F = \lvert q\rvert E$ è uguale; ma hanno segno opposto, quindi le forze hanno versi opposti: quella sul protone nel verso del campo, verso destra, quella sull'elettrone al contrario, verso sinistra. La massa non c'entra con la forza (c'entrerà con l'accelerazione)." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl11" %}
Una carica $Q = -4\times10^{-9}\ \text C$ è nel vuoto. Quanto vale il campo elettrico a $20\ \text{cm}$ dal suo centro? Attenzione alle unità di misura!

{% include fill-multi.html testo="Il modulo del campo è $E =$ [900] N/C." s="$r = 20\ \text{cm} = 0{,}2\ \text m$, quindi $E = 9\times10^{9}\cdot\dfrac{4\times10^{-9}}{(0{,}2)^2}\ \text{N/C} = \dfrac{36}{0{,}04}\ \text{N/C} = 900\ \text{N/C}$." %}

{% include fill.html prima="In quel punto, il vettore campo elettrico punta" tipo="drop" opts="verso la carica Q|lontano dalla carica Q" ok="verso la carica Q" dopo="." s="La carica Q è negativa: una carica di prova positiva verrebbe attratta da lei, quindi il campo punta verso Q." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### In presenza di più cariche

{% include margin-note.html testo="I campi si sommano" %}
Anche per il campo elettrico vale il <definizione>principio di sovrapposizione degli effetti</definizione>, esattamente come per il campo gravitazionale.
{% include margin-note-end.html %}


{% include box-imp.html testo="Sovrapposizione degli effetti (campo elettrico)" %}
In presenza di più cariche, ciascuna genera il proprio campo <u>esattamente come se le altre non ci fossero</u>. Il campo totale in un punto è la somma vettoriale dei singoli campi:

$$\vec E_{tot} = \vec E_1 + \vec E_2 + \cdots.$$
{% include box-end.html %}

Prova a sommare i campi con il simulatore: sposta le cariche e il punto $P$, e cambiane valore e segno. Ricorda che ogni campo si allontana dalla sua carica, se è positiva, e punta verso di lei, se è negativa.

{% include lab-virtuali/sovrapposizione-lab.html id="sov-campo-elet" tipo="campo" fisica="elet" %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
Due cariche uguali, entrambe $+Q$, sono a una certa distanza fra loro. Quanto vale il campo elettrico nel punto a metà strada fra le due?
{% capture _oCE2 %}[
{"v":"a","t":"zero"},
{"v":"b","t":"il doppio del campo di una sola carica"},
{"v":"c","t":"la metà del campo di una sola carica"},
{"v":"d","t":"uguale al campo di una sola carica"}
]{% endcapture %}
{% include mcq.html id="mcq-campo-uguali" opts=_oCE2 ok="a" s="Le due cariche sono alla stessa distanza dal punto medio, quindi generano campi con lo stesso modulo. Ciascuno si allontana dalla propria carica: i due campi hanno versi opposti, e la loro somma è zero. Lo vedi anche nel simulatore delle linee di campo, con due cariche uguali: a metà strada non passa nessuna linea." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
E se le due cariche sono opposte, $+Q$ e $-Q$? Quanto vale il campo nel punto a metà strada?
{% capture _oCE3 %}[
{"v":"a","t":"zero, come prima"},
{"v":"b","t":"il doppio del campo di una sola carica, e punta verso la carica negativa"},
{"v":"c","t":"il doppio del campo di una sola carica, e punta verso la carica positiva"},
{"v":"d","t":"uguale al campo di una sola carica"}
]{% endcapture %}
{% include mcq.html id="mcq-campo-opposte" opts=_oCE3 ok="b" s="Il campo di $+Q$ si allontana da $+Q$, cioè va verso $-Q$; il campo di $-Q$ punta verso $-Q$. Hanno lo stesso modulo e lo stesso verso: si sommano, e il campo totale è il doppio, diretto verso la carica negativa." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

## Le linee di campo

{% include margin-note.html testo="Le linee del campo elettrico" %}
Le linee del campo elettrico si definiscono esattamente come quelle del campo gravitazionale: in ogni punto sono tangenti al vettore $\vec E$, e la loro densità misura l'intensità del campo. Anche qui, però, cambia qualcosa.
{% include margin-note-end.html %}


{% capture _rLinee %}Per una carica positiva le linee sono radiali, come quelle di una massa, ma con il verso opposto: escono dalla carica, perché il campo punta lontano da essa. Per una carica negativa le linee sono radiali ed entrano nella carica, proprio come quelle di una massa.{% endcapture %}
{% include risposta-aperta.html id="ra-prev-linee-e" tipo="prevedi"
   domanda="Ripensa alle linee del campo gravitazionale di una massa. Come saranno le linee del campo elettrico di una carica positiva? E di una carica negativa?" risposta=_rLinee %}

Verifica la tua previsione con il simulatore, poi prova con due cariche, uguali o opposte.

{% include lab-virtuali/linee-campo-elettrico-lab.html %}

{% include box-imp.html testo="Le linee del campo elettrico" %}
- Sono in ogni punto **tangenti** al vettore campo elettrico, e sono più **fitte** dove il campo è più intenso.
- **Escono** dalle cariche positive ed **entrano** in quelle negative: con una carica positiva e una negativa, le linee vanno dall'una all'altra.
- Due linee di campo **non si incrociano mai**: in ogni punto il campo ha una sola direzione.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qLinee %}[
{"t":"Le linee di campo escono dalle cariche positive ed entrano in quelle negative.","ok":true,"s":"Sì: seguono il verso del campo, che si allontana dalle positive e punta verso le negative."},
{"t":"Dove le linee di campo sono più fitte, il campo è più intenso.","ok":true,"s":"Sì: la densità delle linee misura l'intensità del campo."},
{"t":"Due linee di campo possono incrociarsi.","ok":false,"s":"No: nel punto d'incrocio il campo dovrebbe avere due direzioni diverse, ma in ogni punto ne ha una sola."}
]{% endcapture %}
{% include quiz.html domande=_qLinee id="q-linee-e" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include figura.html id="lampada-plasma"
   src="/corsi/gif/plasma-lamp.mp4"
   didascalia="Una lampada al plasma: prima nessuno la tocca, poi una mano si appoggia sul vetro."
   larghezza="420px" %}

Al centro della lampada c'è una sfera metallica, collegata a un generatore che la carica moltissimo; tutto attorno, dentro il vetro, c'è un gas a bassa pressione. Il gas si illumina nei punti in cui il campo elettrico è più intenso, lungo dei filamenti.
{% capture _rPlasma %}Quando nessuno tocca la lampada, la sfera centrale è come una singola carica: le linee di campo partono da lei in tutte le direzioni, come raggi, e i filamenti luminosi le seguono. Per questo la lampada ha la forma di tanti raggi che escono dal centro. Quando appoggiamo un dito sul vetro, il nostro corpo, che è un conduttore collegato a terra, si carica per induzione con segno opposto a quello della sfera. Le linee di campo vanno allora a finire sul dito: lì il campo è molto più intenso, e i filamenti si concentrano tutti verso di lui. (In realtà il generatore cambia il segno della sfera moltissime volte al secondo, ma la forma delle linee di campo resta la stessa.){% endcapture %}
{% include risposta-aperta.html id="ra-plasma-lamp" tipo="spiega"
   domanda="Perché i filamenti luminosi hanno quella forma? E perché cambiano, e si concentrano verso il dito, quando si tocca il vetro?" risposta=_rPlasma %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include figura.html id="capelli-linee-di-campo"
   src="/corsi/immagini/capelli-linee-di-campo.jpeg"
   didascalia="I capelli di questa ragazza si sono sollevati e allargati in tutte le direzioni."
   larghezza="360px" %}

La ragazza ha in mano una spazzola. Che ruolo ha avuto la spazzola nel far sollevare i suoi capelli?
{% capture _oSpazzola %}[
{"v":"a","t":"Spazzolandoli, li ha caricati per strofinio: tutti i capelli hanno ora carica dello stesso segno"},
{"v":"b","t":"Spazzolandoli, li ha caricati per strofinio: metà dei capelli è positiva e metà negativa"},
{"v":"c","t":"Nessuno: la spazzola è un isolante, quindi non può caricare i capelli"},
{"v":"d","t":"La spazzola è carica e attira i capelli verso di sé"}
]{% endcapture %}
{% include mcq.html id="mcq-capelli-spazzola" opts=_oSpazzola ok="a" s="Spazzolandosi, le setole si strofinano contro i capelli, e degli elettroni passano dai capelli alla spazzola, o al contrario, a seconda dei materiali: è un'elettrizzazione per strofinio. I capelli sono stati strofinati tutti allo stesso modo, quindi si caricano tutti con lo stesso segno, mentre la spazzola si carica con il segno opposto. Proprio perché è un isolante, la spazzola si carica facilmente per strofinio. E i capelli non vanno verso la spazzola, ma in tutte le direzioni." %}

Perché i suoi capelli si dispongono proprio in questo modo, a raggiera attorno alla testa?
{% capture _oRaggiera %}[
{"v":"a","t":"Perché i capelli carichi si respingono, e ognuno si dispone lungo le linee di campo, che attorno alla testa carica sono radiali"},
{"v":"b","t":"Perché i capelli carichi si attraggono a vicenda"},
{"v":"c","t":"Perché la forza peso sui capelli carichi diventa più piccola"},
{"v":"d","t":"Perché ogni capello è attratto dalla spazzola"}
]{% endcapture %}
{% include mcq.html id="mcq-capelli-raggiera" opts=_oRaggiera ok="a" s="I capelli hanno tutti carica dello stesso segno, quindi si respingono e si allontanano il più possibile l'uno dall'altro. Ogni capello, leggero e libero di muoversi, si dispone nella direzione della forza elettrica, cioè lungo le linee di campo: attorno a un corpo carico più o meno tondo, come una testa, le linee sono radiali, come quelle di una singola carica. Succede lo stesso ai bambini dell'animazione all'inizio del capitolo." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Le linee di campo si possono anche rendere visibili. In un piattino si versa un po' di olio e sulla sua superficie si sparge della semolina. Poi si immerge nell'olio un ago collegato a qualcosa di carico. Guarda come si dispongono i granelli.

{% include video.html id="2BvCqXEvdvI" didascalia="Granelli di semolina sull'olio, attorno a un ago elettrizzato." %}

{% capture _rSemolina2 %}La semolina è un isolante, ma nel campo elettrico ogni granello si polarizza: da una parte raccoglie un po' di carica positiva, dall'altra un po' di carica negativa. Un granello polarizzato si comporta come un piccolo ago di una bussola: ruota fino a mettersi nella direzione del campo. In più, l'estremità positiva di un granello attira quella negativa del granello vicino, e così i granelli si mettono in fila, uno dietro l'altro, lungo le linee di campo. L'olio serve a farli muovere facilmente, senza che si attacchino al fondo, e non conduce: così la carica dell'ago non si disperde.{% endcapture %}
{% include risposta-aperta.html id="ra-spiega-semolina" tipo="spiega"
   domanda="La semolina non è carica. Perché allora i granelli si allineano lungo le linee di campo? E a che cosa serve l'olio?" risposta=_rSemolina2 %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### Il campo fra due lastre piane

{% include margin-note.html testo="Il campo vicino alla superficie di un pianeta è uniforme" %}
Il campo gravitazionale di un pianeta punta verso il suo centro, e diventa più debole allontanandosi. Eppure, vicino alla superficie, in una regione piccola, le linee di campo che convergono verso il centro sono praticamente parallele, e la distanza dal centro è quasi la stessa ovunque. Il campo si dice <definizione>uniforme</definizione>, poiché ha lo stesso modulo, la stessa direzione e lo stesso verso in ogni punto. Sappiamo infatti che per il campo gravitazionale generato dalla Terra, sulla superficie, in una regione piccola, $\vec g$ è un vettore che punta “verso il basso” e il cui valore è costante e circa pari a $9,8 $ N/kg. 
{% include margin-note-end.html %}


{% include margin-note.html testo="Il campo fra due lastre è uniforme" %}
Per il campo elettrico c'è un modo semplice per ottenere la stessa situazione: due lastre metalliche piane, parallele e vicine fra loro, cariche con segni opposti. Fra le lastre, lontano dai bordi, il campo è uniforme, e le linee di campo sono segmenti paralleli ed equidistanti, che vanno dalla lastra positiva a quella negativa. Solo vicino ai bordi le linee si incurvano un po'.
{% include margin-note-end.html %}

{% include figure/figura-campo-lastre.html %}


Lo vedi nel simulatore: avvicinati alla superficie del pianeta, e guarda come cambiano i vettori del campo. Intanto, a destra, guarda che cosa succede al campo elettrico di una carica positiva e di una negativa quando ciascuna si allarga in una lastra piana.

{% include lab-virtuali/campo-uniforme-lab.html %}


{% include box-imp.html testo="Il campo uniforme" %}
Un campo è **uniforme** se ha lo stesso modulo, la stessa direzione e lo stesso verso in ogni punto: le sue linee di campo sono parallele ed equidistanti.
- Il campo gravitazionale è (quasi) uniforme vicino alla superficie di un pianeta, in una regione piccola rispetto al suo raggio.
- Il campo elettrico è (quasi) uniforme fra due lastre piane parallele cariche con segni opposti, lontano dai bordi: va dalla lastra positiva a quella negativa.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qUnif %}[
{"t":"In un campo uniforme le linee di campo sono parallele ed equidistanti.","ok":true,"s":"Sì: stessa direzione ovunque vuol dire linee parallele, stessa intensità vuol dire linee ugualmente fitte."},
{"t":"Fra due lastre cariche, il campo elettrico va dalla lastra negativa a quella positiva.","ok":false,"s":"No: come sempre, le linee di campo escono dalle cariche positive ed entrano in quelle negative."},
{"t":"Il campo gravitazionale della Terra è uniforme anche se lo guardiamo dallo spazio, su tutto il pianeta.","ok":false,"s":"No: su tutto il pianeta il campo punta sempre verso il centro, quindi cambia direzione da un punto all'altro, e diminuisce allontanandosi. È uniforme solo in una regione piccola rispetto al raggio terrestre."}
]{% endcapture %}
{% include quiz.html domande=_qUnif id="q-campo-uniforme" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Fra due lastre cariche con segni opposti, dove il campo elettrico è più intenso?
{% capture _oUnif %}[
{"v":"a","t":"vicino alla lastra positiva"},
{"v":"b","t":"vicino alla lastra negativa"},
{"v":"c","t":"a metà strada fra le lastre"},
{"v":"d","t":"è uguale in tutti i punti (lontano dai bordi)"}
]{% endcapture %}
{% include mcq.html id="mcq-campo-uniforme-dove" opts=_oUnif ok="d" s="Fra le lastre il campo è uniforme: stesso modulo, stessa direzione e stesso verso in ogni punto, a qualunque distanza dalle lastre. Cambia solo vicino ai bordi, dove le linee si incurvano." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}


# L'energia elettrica

{% include margin-note.html testo="Dalle forze all'energia" %}
Per la gravità, dopo forze e campi, eravamo passati al linguaggio dell'energia: le grandezze diventano scalari, e sommarle è molto più semplice che sommare vettori. Facciamo lo stesso per la forza elettrica, ancora una volta seguendo passo passo la strada già percorsa.
{% include margin-note-end.html %}


## L'energia potenziale elettrica

{% include box-ricorda.html testo="L'energia potenziale gravitazionale, in breve" %}
- La forza gravitazionale è centrale, quindi si può definire un'energia potenziale.
- Due masse $M$ ed $m$ a distanza $r$ immagazzinano un'energia potenziale $U = -G\,\dfrac{M\cdot m}{r}$, che si misura in joule: è il lavoro della forza gravitazionale quando le masse vengono allontanate.
- $U$ è negativa perché le masse si attraggono: sono "legate", e per separarle bisogna spendere energia. Vale zero quando le masse sono infinitamente lontane.
- Con più masse, le energie potenziali si sommano con una normale somma algebrica.
{% include box-end.html %}

{% include margin-note.html testo="Dalla gravità alle cariche" %}
Anche la forza elettrica è una forza centrale, quindi anche per due cariche si può definire un'energia potenziale: l'<definizione>energia potenziale elettrica</definizione>. Il ragionamento è lo stesso della gravità, con $k$ al posto di $G$ e le cariche al posto delle masse:

{% include lab-virtuali/analogia-formule-lab.html id="an-energia" tipo="energia" %}

$$U = k\,\frac{Q\cdot q}{r}.$$

Nella formula le cariche vanno scritte **con il loro segno**, senza valore assoluto. E manca il segno meno che c'era nella formula gravitazionale: ora a decidere il segno di $U$ sono le cariche stesse.
{% include margin-note-end.html %}

{% include margin-note.html testo="Il segno di U" %}
- Se le due cariche hanno **segno opposto**, si attraggono, come due masse: il prodotto $Q\cdot q$ è negativo, e quindi anche $U$ è **negativa**. Proprio come per la gravità, le due cariche sono "legate": per separarle bisogna spendere energia.
- Se le due cariche hanno **lo stesso segno**, si respingono: il prodotto $Q\cdot q$ è positivo, e $U$ è **positiva**. Le due cariche sono come una molla compressa: se le lasciamo libere si allontanano, e l'energia immagazzinata diventa energia cinetica.

In entrambi i casi $U$ vale zero quando le cariche sono infinitamente lontane. Nella formula gravitazionale il segno meno serviva proprio a dire "le masse si attraggono sempre"; per le cariche, che possono anche respingersi, questo lavoro lo fanno i segni di $Q$ e di $q$.
{% include margin-note-end.html %}

{% include margin-note.html testo="L'analogia della molla" %}
Come per la gravità, l'energia immagazzinata si può immaginare con una molla che collega le due cariche. Con le cariche di segno opposto la molla viene **allungata** quando le allontaniamo; con le cariche dello stesso segno viene **compressa** quando le avviciniamo. In entrambi i casi, lasciata andare, la molla restituisce l'energia immagazzinata come energia cinetica.
{% include margin-note-end.html %}


{% include lab-virtuali/molla-cariche-lab.html %}

{% include margin-note.html testo="Un'espressione equivalente per U" %}
Per la gravità avevamo scritto $U = -mgr$, usando direttamente il campo $g$. Possiamo fare lo stesso con il campo elettrico generato da $Q$ nel punto in cui si trova $q$, a patto di scriverlo **con un segno**:

$$
E = k\,\frac{Q}{r^2},
$$

con $Q$ scritta con il suo segno. Così $E$ è **positivo** se il campo punta **lontano** da $Q$ (cioè se $Q$ è positiva) e **negativo** se punta **verso** $Q$ (se $Q$ è negativa); il suo valore assoluto è il modulo del campo. Con questa convenzione una sola formula vale in tutti i casi:

{% include lab-virtuali/u-qer-lab.html id="uqer" %}

$$
U = q\,E\,r = k\,\frac{Q\cdot q}{r}.
$$

Qui $E$ è il campo generato da $Q$ (non da $q$!) nel punto in cui si trova $q$, e anche $q$ va scritta con il suo segno. 
{% include margin-note-end.html %}

{% include box-warn.html testo="Nell'energia potenziale niente valore assoluto" %}
Nella legge di Coulomb, $F = k\,\dfrac{\lvert Q\cdot q\rvert}{r^2}$, c'è il valore assoluto, perché un modulo è sempre positivo. Nell'energia potenziale, invece, le cariche si scrivono **con il loro segno**: il segno di $U$ ci dice se le cariche si attraggono ($U<0$) o si respingono ($U>0$).
{% include box-end.html %}

{% include margin-note.html testo="L'unità di misura di U" %}
Essendo un'energia, $U$ si misura in joule. Verifichiamolo a partire dalla formula, ricordando che $k$ si misura in $\text N\cdot\text m^2/\text C^2$.

{% capture _ua_energiael %}{"lhs":{"s":"U"},
 "rhs":[{"s":"k","u":"N·m²/C²"},{"o":"·"},{"f":[[{"s":"Q","u":"C"},{"o":"·"},{"s":"q","u":"C"}],[{"s":"r","u":"m"}]]}],
 "passi":[[{"f":[["N",{"o":"·"},"m",{"o":"·"},{"t":"m","x":true},{"o":"·"},{"t":"C","x":true},{"o":"·"},{"t":"C","x":true}],[{"t":"C","x":true},{"o":"·"},{"t":"C","x":true},{"o":"·"},{"t":"m","x":true}]]}],
          ["N",{"o":"·"},"m"],["J"]]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-energiael" dati=_ua_energiael %}

Quindi:

$$[U]=[k]\cdot\frac{[Q]\cdot[q]}{[r]}=\frac{\text N\cdot\text m^2}{\text C^2}\cdot\frac{\text C\cdot\text C}{\text m}=\text N\cdot\text m=\text J.$$
{% include margin-note-end.html %}

{% include box-imp.html testo="Energia potenziale elettrica" %}
- **L'energia potenziale elettrica** è l'energia immagazzinata da due cariche $Q$ e $q$ a distanza $r$, a causa della forza elettrica fra loro.
- **Formula:** $U = k\,\dfrac{Q\cdot q}{r}$, con le cariche scritte con il loro segno. In modo equivalente, $U = q\,E\,r$, dove $E = k\,Q/r^2$ è il campo generato da $Q$ nel punto in cui si trova $q$, scritto con il segno di $Q$ (positivo se punta lontano da $Q$, negativo se punta verso $Q).$
- **Segno:** negativa se le cariche si attraggono, positiva se si respingono; zero a distanza infinita.
- **Unità di misura:** joule (J).
{% include box-end.html %}

Esplora tu stesso come cambia $U$ al variare di $Q$, di $q$ o di $r$ (qui le due cariche sono positive).

{% include graph-explorer.html id="ge-energia-el"
   variabili="Q|q|r" unita="×10⁻⁶ C|×10⁻⁶ C|m" scala="1e-6|1e-6|1"
   min="0.1|0.1|0.1" max="10|10|5" default="2|3|1"
   costanti="k" costanti_valori="8.99e9"
   formula="k*Q*q/r" formula_latex="k\dfrac{Q \cdot q}{r}"
   y_simbolo="U" y_unita="J" solo_positivi="true" %}

{% include esercizi/invert-energia-elettrica.html %}

{% include box-ex.html testo="Verifica Subito!" %}
Nei calcoli usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$.

{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qEnEl %}[
{"t":"L'energia potenziale elettrica si misura in joule.","ok":true,"s":"Sì: è un'energia."},
{"t":"L'energia potenziale di due cariche positive è positiva.","ok":true,"s":"Sì: il prodotto $Q\\cdot q$ è positivo. Le cariche si respingono, come una molla compressa."},
{"t":"L'energia potenziale di due cariche di segno opposto è positiva.","ok":false,"s":"No: il prodotto $Q\\cdot q$ è negativo, quindi $U$ è negativa. Le cariche si attraggono e sono legate, come due masse."},
{"t":"Nella formula dell'energia potenziale elettrica le cariche vanno scritte con il valore assoluto.","ok":false,"s":"No: vanno scritte con il loro segno, perché è il segno di $U$ a dirci se le cariche si attraggono o si respingono."},
{"t":"Se la distanza fra due cariche raddoppia, la loro energia potenziale si dimezza.","ok":true,"s":"Sì: $U$ è inversamente proporzionale a $r$, non a $r^2$. È la forza che, invece, diventerebbe un quarto."}
]{% endcapture %}
{% include quiz.html domande=_qEnEl id="q-energia-el" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl12" %}
Due cariche puntiformi, $Q = +2\times10^{-6}\ \text C$ e $q = +3\times10^{-6}\ \text C$, sono nel vuoto a $3\ \text m$ di distanza. Quanto vale la loro energia potenziale?

{% include fill-multi.html testo="$U =$ [18] $\times10^{-3}\ \text J$" s="$U = k\dfrac{Q\cdot q}{r} = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot3\times10^{-6}}{3}\ \text J = 18\times10^{-3}\ \text J$. È positiva: le cariche si respingono." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
E se la carica $q$ fosse $-3\times10^{-6}\ \text C$, sempre a $3\ \text m$ da $Q = +2\times10^{-6}\ \text C$?
{% capture _oUseg %}[
{"v":"a","t":"$U = +18\\times10^{-3}\\ \\text J$, come prima"},
{"v":"b","t":"$U = -18\\times10^{-3}\\ \\text J$"},
{"v":"c","t":"$U = 0$"},
{"v":"d","t":"$U = -6\\times10^{-3}\\ \\text J$"}
]{% endcapture %}
{% include mcq.html id="mcq-energia-segno" opts=_oUseg ok="b" s="Il prodotto $Q\cdot q$ cambia segno, quindi anche $U$: $U = -18\times10^{-3}\ \text J$. Ora le cariche si attraggono, e sono legate." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una carica positiva $Q$ è fissa; a distanza $r$ da lei si trova una carica $q$. Per calcolare l'energia potenziale usiamo la formula $U = q\,E\,r$. Che cos'è, qui, $E$?
{% capture _oSimbU %}[
{"v":"a","t":"il campo generato dalla carica $q$ stessa"},
{"v":"b","t":"il campo generato da $Q$ nel punto in cui si trova $q$"},
{"v":"c","t":"la somma dei campi generati da $Q$ e da $q$"},
{"v":"d","t":"l'energia di ogni coulomb di carica"}
]{% endcapture %}
{% include mcq.html id="mcq-simboli-energia" opts=_oSimbU ok="b" s="Come in $F = qE$, $E$ è il campo generato dall'altra carica, $Q$, nel punto in cui si trova $q$. In effetti, sostituendo $E = k\dfrac{Q}{r^2}$, si ottiene $U = q\cdot k\dfrac{Q}{r^2}\cdot r = k\dfrac{Q\cdot q}{r}$. Una carica non entra mai nella formula con il proprio campo." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Due cariche hanno energia potenziale $U$. Se la distanza fra loro triplica, la nuova energia potenziale è
{% capture _oUdist %}[
{"v":"a","t":"$\\dfrac{U}{3}$"},
{"v":"b","t":"$\\dfrac{U}{9}$"},
{"v":"c","t":"$3\\,U$"},
{"v":"d","t":"$U$, perché l'energia si conserva"}
]{% endcapture %}
{% include mcq.html id="mcq-energia-distanza" opts=_oUdist ok="a" s="$U = k\dfrac{Q\cdot q}{r}$ è inversamente proporzionale a $r$: triplicando la distanza, $U$ diventa un terzo. Non confonderti con la forza, che dipende da $1/r^2$ e diventerebbe un nono." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Teniamo ferme, vicine fra loro, due sferette con carica positiva, poi le lasciamo libere.
{% capture _rMolla %}Le due cariche si respingono e si allontanano, sempre più velocemente: acquistano energia cinetica. Questa energia viene dall'energia potenziale: all'inizio, essendo cariche dello stesso segno e vicine, $U = k\dfrac{Q\cdot q}{r}$ era positiva e grande; allontanandosi, $r$ cresce e $U$ diminuisce, avvicinandosi a zero. L'energia potenziale persa si trasforma in energia cinetica, proprio come in una molla compressa che viene lasciata andare.{% endcapture %}
{% include risposta-aperta.html id="ra-energia-molla" tipo="spiega"
   domanda="Che cosa succede? Da dove viene l'energia cinetica che le sferette acquistano?" risposta=_rMolla %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### Sovrapposizione degli effetti per l'energia potenziale

{% include box-imp.html testo="Il principio di sovrapposizione degli effetti per l'energia potenziale elettrica" %}
In presenza di più cariche, ognuna contribuisce all'energia potenziale di $q$ <u markdown="span">esattamente come se le altre non ci fossero</u>. L'energia potenziale totale è la somma algebrica di tutti i contributi:

$$U_{tot} = U_1+U_2 + \cdots$$
{% include box-end.html %}

Attenzione ai segni: qui alcuni contributi possono essere positivi e altri negativi. Prova con il simulatore: sposta le cariche e la carica $q$, cambiane valore e segno, aggiungi o togli cariche.

{% include lab-virtuali/sovrapposizione-lab.html id="sov-energia-elet" tipo="energia" fisica="elet" aggiungi="true" %}

{% include box-ex.html testo="Verifica Subito!" %}
Nei calcoli usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$.

{% include scorri.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl13" %}
Una carica $q = +1\times10^{-6}\ \text C$ si trova a $1\ \text m$ da una carica $Q_1 = +2\times10^{-6}\ \text C$ e a $2\ \text m$ da una carica $Q_2 = -2\times10^{-6}\ \text C$.

{% include fill-multi.html testo="$U_1 =$ [18] $\times10^{-3}\ \text J$, $U_2 =$ [-9|−9] $\times10^{-3}\ \text J$, $U_{tot} =$ [9] $\times10^{-3}\ \text J$" s="$U_1 = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot1\times10^{-6}}{1}\ \text J = 18\times10^{-3}\ \text J$; $U_2 = 9\times10^{9}\cdot\dfrac{(-2\times10^{-6})\cdot1\times10^{-6}}{2}\ \text J = -9\times10^{-3}\ \text J$. La somma, con i segni: $U_{tot} = 18\times10^{-3}\ \text J - 9\times10^{-3}\ \text J = 9\times10^{-3}\ \text J$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una carica $q$ si trova vicino a due cariche: con la prima ha energia potenziale $U_1 = +5\ \text J$, con la seconda $U_2 = -5\ \text J$. Quale affermazione è corretta?
{% capture _oUsov %}[
{"v":"a","t":"L'energia potenziale totale è $10\\ \\text J$"},
{"v":"b","t":"L'energia potenziale totale è zero"},
{"v":"c","t":"Non si può calcolare senza sapere dove sono le cariche"},
{"v":"d","t":"Bisogna sommare i due contributi con la regola del parallelogramma"}
]{% endcapture %}
{% include mcq.html id="mcq-energia-sovr" opts=_oUsov ok="b" s="L'energia potenziale è uno scalare: i contributi si sommano con il loro segno, $U_{tot} = 5\ \text J - 5\ \text J = 0$. Non serve sapere dove sono le cariche, né usare il parallelogramma." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

## Il potenziale elettrico

{% include margin-note.html testo="Togliamo la carica di prova" %}
Come per la gravità, cerchiamo una grandezza che descriva una proprietà della sola carica $Q$ che genera il campo, e non della coppia $Q$–$q$. Come siamo passati dalla forza al campo togliendo la carica di prova, cioè dividendo per $q$, così togliamo la carica di prova dall'energia potenziale, e otteniamo il <definizione>potenziale elettrico</definizione> $V$:

{% include lab-virtuali/togli-massa-esploratrice-lab.html id="tm-pot-e" da="U" a="V" cost="k" sorg="Q" espl="q" %}

$$V = \frac{U}{q} = k\,\frac{Q}{r}.$$

La stessa formula si ottiene, per analogia, da quella del potenziale gravitazionale:

{% include lab-virtuali/analogia-formule-lab.html id="an-potenziale" tipo="potenziale" %}

Il potenziale non dipende dalla carica di prova, ma solo dalla carica $Q$ che lo genera (con il suo segno) e dalla distanza $r$ dal suo centro. Vicino a una carica positiva il potenziale è positivo, vicino a una carica negativa è negativo.
{% include margin-note-end.html %}

{% include margin-note.html testo="Un'espressione equivalente per V" %}
Come per l'energia potenziale, anche il potenziale si può scrivere con il campo $E = k\,Q/r^2$, scritto con il segno di $Q$ (positivo se il campo punta lontano da $Q$, negativo se punta verso $Q$):

{% include lab-virtuali/u-qer-lab.html id="ver" v="true" %}

$$
V = E\,r = k\,\frac{Q}{r}.
$$

Vicino a una carica negativa $E$ è negativo, e quindi lo è anche il potenziale. 
{% include margin-note-end.html %}

{% include margin-note.html testo="Il volt" %}
Il potenziale è un'energia divisa per una carica, quindi si misura in J/C.

<div class="iex-nested">
{% include unit-derive.html id="ud-V-el" testo="Trova l'unità di misura di V"
   variabile="V"
   numeratore_simboli="U" numeratore_corrette="J"
   denominatore_simboli="q" denominatore_corrette="C"
   opzioni="J|C|N|kg|m" %}
</div>

Questa unità di misura è così importante che ha un nome tutto suo: il <definizione>volt</definizione> (simbolo V), in onore di [Alessandro Volta](https://it.wikipedia.org/wiki/Alessandro_Volta), l'inventore della pila.

$$1\ \text V = 1\ \frac{\text J}{\text C}.$$
{% include margin-note-end.html %}

{% include box-imp.html testo="Potenziale elettrico" %}
- **Il potenziale elettrico** è l'energia potenziale elettrica "per unità di carica di prova". Non dipende da $q$, proprio come il campo $\vec E$.
- **Formula:** $V = \dfrac{U}{q} = k\,\dfrac{Q}{r}$, con $Q$ scritta con il suo segno. In modo equivalente, $V = E\,r$, dove $E = k\,Q/r^2$ è il campo generato da $Q$ a distanza $r$, scritto con il segno di $Q$.
- **Unità di misura:** volt (V): $1\ \text V = 1\ \text J/\text C$.
- **Legame con l'energia:** una carica $q$ in un punto in cui il potenziale vale $V$ ha energia potenziale $U = q\,V$.
{% include box-end.html %}

{% capture _rUVel %}L'energia potenziale $U$ riguarda <strong>due</strong> cariche: è l'energia della coppia $Q$–$q$, raddoppia se raddoppia $q$, e si misura in joule. Il potenziale $V = U/q$ è invece una proprietà del <strong>punto</strong> attorno a $Q$: dice quanta energia potenziale avrebbe <em>ogni coulomb</em> posto lì, non dipende da $q$, e si misura in volt. Esempio: in un punto in cui $V = 100\ \text V$, una carica di $2\ \text C$ ha $U = 200\ \text J$, una carica di $-3\ \text C$ ha $U = -300\ \text J$, ma il potenziale è lo stesso per entrambe.{% endcapture %}
{% include risposta-aperta.html id="ra-spiega-UV-el" tipo="spiega"
   domanda="Qual è la differenza fra energia potenziale elettrica $U$ e potenziale elettrico $V$? Spiegala con un esempio numerico inventato da te."
   risposta=_rUVel %}

Esplora tu stesso come cambia $V$ al variare di $Q$ o di $r$ (qui la carica è positiva).

{% include graph-explorer.html id="ge-potenziale-el"
   variabili="Q|r" unita="×10⁻⁶ C|m" scala="1e-6|1"
   min="0.1|0.1" max="10|5" default="2|1"
   costanti="k" costanti_valori="8.99e9"
   formula="k*Q/r" formula_latex="k\dfrac{Q}{r}"
   y_simbolo="V" y_unita="V" solo_positivi="true" %}

{% include esercizi/invert-potenziale-elettrico.html %}

{% include box-ex.html testo="Verifica Subito!" %}
Nei calcoli usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$.

{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qPotEl %}[
{"t":"Il potenziale elettrico si misura in volt, e $1\\ \\text V = 1\\ \\text J/\\text C$.","ok":true,"s":"Sì: il potenziale è un'energia divisa per una carica."},
{"t":"Vicino a una carica negativa il potenziale è negativo.","ok":true,"s":"Sì: in $V = k\\dfrac{Q}{r}$ la carica $Q$ va scritta con il suo segno."},
{"t":"Il potenziale elettrico in un punto dipende dalla carica di prova che ci mettiamo.","ok":false,"s":"No: $V = U/q$ non dipende da $q$, proprio come il campo. Dipende solo dalle cariche che lo generano e dalla distanza."},
{"t":"Raddoppiando la distanza da una carica, il potenziale diventa un quarto.","ok":false,"s":"No: il potenziale dipende da $1/r$, quindi si dimezza. È il campo che diventerebbe un quarto."}
]{% endcapture %}
{% include quiz.html domande=_qPotEl id="q-potenziale-el" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Nella formula $V = k\,\dfrac{Q}{r}$, che cosa sono $Q$ e $r$?
{% capture _oSimbV %}[
{"v":"a","t":"$Q$ è la carica di prova, $r$ la sua distanza dalla carica che genera il potenziale"},
{"v":"b","t":"$Q$ è la carica che genera il potenziale, con il suo segno, e $r$ è la distanza fra il suo centro e il punto in cui calcoliamo il potenziale"},
{"v":"c","t":"$Q$ è il valore assoluto della carica che genera il potenziale, e $r$ è il suo raggio"},
{"v":"d","t":"$Q$ è la carica totale presente nello spazio, e $r$ la distanza dal punto più vicino"}
]{% endcapture %}
{% include mcq.html id="mcq-simboli-potenziale" opts=_oSimbV ok="b" s="Come il campo, il potenziale è una proprietà della carica $Q$ che lo genera: la carica di prova non compare. Qui però $Q$ va scritta con il suo segno (niente valore assoluto), e $r$ è la distanza dal centro di $Q$ al punto." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl14" %}
Una carica $Q = +2\times10^{-6}\ \text C$ è nel vuoto. Quanto vale il potenziale elettrico a $3\ \text m$ dal suo centro?

{% include fill-multi.html testo="$V =$ [6000|6 000] V" s="$V = k\dfrac{Q}{r} = 9\times10^{9}\cdot\dfrac{2\times10^{-6}}{3}\ \text V = 6000\ \text V$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl15" %}
Nel punto dell'esercizio precedente, dove il potenziale vale $6000\ \text V$, mettiamo una carica $q = +3\times10^{-6}\ \text C$. Quanto vale la sua energia potenziale?

{% include fill-multi.html testo="$U =$ [18] $\times10^{-3}\ \text J$" s="$U = q\,V = 3\times10^{-6}\ \text C\cdot 6000\ \text V = 18\times10^{-3}\ \text J$: lo stesso risultato che si ottiene con la formula $U = k\dfrac{Q\cdot q}{r}$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una minuscola goccia d'olio carica galleggia fra due lastre metalliche cariche. Per calcolare la sua energia potenziale usiamo $U = q\,V$. Che cos'è, qui, $V$?
{% capture _oSimbUV %}[
{"v":"a","t":"il potenziale generato dalla goccia stessa, sulla sua superficie"},
{"v":"b","t":"il potenziale generato dalle lastre nel punto in cui si trova la goccia"},
{"v":"c","t":"l'energia potenziale della goccia divisa per la sua massa"},
{"v":"d","t":"la carica della goccia moltiplicata per la distanza dalle lastre"}
]{% endcapture %}
{% include mcq.html id="mcq-simboli-qV" opts=_oSimbUV ok="b" s="$q$ è la carica della goccia, e $V$ è il potenziale generato dalle <em>altre</em> cariche (quelle delle lastre) nel punto in cui si trova la goccia. Come per il campo, il potenziale che una carica genera non entra mai nel calcolo della sua stessa energia." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Se in quel punto mettiamo invece una carica $q = -3\times10^{-6}\ \text C$, che cosa cambia?
{% capture _oVseg %}[
{"v":"a","t":"cambia il potenziale, che diventa $-6000\\ \\text V$"},
{"v":"b","t":"il potenziale resta $6000\\ \\text V$, e l'energia potenziale diventa $-18\\times10^{-3}\\ \\text J$"},
{"v":"c","t":"non cambia niente"},
{"v":"d","t":"cambiano sia il potenziale sia l'energia potenziale"}
]{% endcapture %}
{% include mcq.html id="mcq-potenziale-segno" opts=_oVseg ok="b" s="Il potenziale non dipende dalla carica di prova: resta $6000\ \text V$. Cambia invece $U = q\,V = -3\times10^{-6}\cdot 6000\ \text J = -18\times10^{-3}\ \text J$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl16" %}
A quale distanza da una carica $Q = +4\times10^{-9}\ \text C$ il potenziale vale $90\ \text V$?

{% include fill-multi.html testo="$r =$ [0,4|0.4|0,40] m" s="Da $V = k\dfrac{Q}{r}$ si ricava $r = k\dfrac{Q}{V} = 9\times10^{9}\cdot\dfrac{4\times10^{-9}}{90}\ \text m = \dfrac{36}{90}\ \text m = 0{,}4\ \text m$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### Sovrapposizione degli effetti per il potenziale

{% include box-imp.html testo="Il principio di sovrapposizione degli effetti per il potenziale elettrico" %}
In presenza di più cariche, ciascuna genera un potenziale <u markdown="span">esattamente come se le altre non ci fossero</u>. Il potenziale totale è la somma algebrica dei contributi, ciascuno con il suo segno:

$$V_{tot} = V_1+V_2 + \cdots$$
{% include box-end.html %}

Prova con il simulatore: sposta le cariche e il punto $P$, cambiane valore e segno, aggiungine o toglile. Riesci a trovare un punto in cui il potenziale totale è zero?

{% include lab-virtuali/sovrapposizione-lab.html id="sov-potenziale-elet" tipo="potenziale" fisica="elet" aggiungi="true" %}

{% include box-ex.html testo="Verifica Subito!" %}
Nei calcoli usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$.

{% include scorri.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl17" %}
Un punto $P$ si trova a $1\ \text m$ da una carica $Q_1 = +2\times10^{-6}\ \text C$ e a $2\ \text m$ da una carica $Q_2 = -2\times10^{-6}\ \text C$. Quanto vale il potenziale in $P$?

{% include fill-multi.html testo="$V_1 =$ [18000|18 000] V, $V_2 =$ [-9000|−9000|-9 000|−9 000] V, $V_{tot} =$ [9000|9 000] V" s="$V_1 = 9\times10^{9}\cdot\dfrac{2\times10^{-6}}{1}\ \text V = 18\,000\ \text V$, $V_2 = 9\times10^{9}\cdot\dfrac{-2\times10^{-6}}{2}\ \text V = -9000\ \text V$. Sommandoli con il loro segno: $V_{tot} = 9000\ \text V$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Due cariche opposte, $+Q$ e $-Q$, sono a una certa distanza fra loro. Quanto vale il potenziale nel punto a metà strada?
{% capture _oEnEl2 %}[
{"v":"a","t":"zero"},
{"v":"b","t":"il doppio del potenziale di una sola carica"},
{"v":"c","t":"è positivo, perché la carica positiva è più vicina"},
{"v":"d","t":"non si può dire senza conoscere la distanza"}
]{% endcapture %}
{% include mcq.html id="mcq-potenziale-dipolo" opts=_oEnEl2 ok="a" s="I due potenziali hanno lo stesso valore assoluto, perché le cariche sono alla stessa distanza, ma segno opposto: $k\dfrac{Q}{r} + k\dfrac{-Q}{r} = 0$. Attenzione: in quel punto il <em>campo</em> non è zero, anzi è il doppio di quello di una sola carica! Il potenziale si somma come uno scalare, il campo come un vettore." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

## Le superfici equipotenziali

{% include margin-note.html testo="Le superfici equipotenziali" %}
Come per la gravità, il potenziale si rappresenta con le <definizione>superfici equipotenziali</definizione>: l'insieme dei punti in cui il potenziale ha lo stesso valore. Valgono le stesse proprietà: sono in ogni punto **perpendicolari** alle linee di campo, e per una singola carica sono **sfere** concentriche alla carica (sul foglio, circonferenze), perché $V = k\,Q/r$ dipende solo dalla distanza.
{% include margin-note-end.html %}


Nel simulatore delle linee di campo puoi ora mostrare anche le superfici equipotenziali (in arancione): guarda come si deformano con due cariche, e verifica che tagliano sempre le linee di campo ad angolo retto.

{% include lab-virtuali/linee-campo-elettrico-lab.html id="lce-equi" equi="true" %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qEquiEl %}[
{"t":"Lungo una superficie equipotenziale il potenziale ha sempre lo stesso valore.","ok":true,"s":"Sì: è proprio la definizione."},
{"t":"Le superfici equipotenziali di una singola carica sono sfere concentriche alla carica.","ok":true,"s":"Sì: $V = k\\dfrac{Q}{r}$ dipende solo dalla distanza, quindi tutti i punti alla stessa distanza hanno lo stesso potenziale."},
{"t":"Le superfici equipotenziali sono parallele alle linee di campo.","ok":false,"s":"No: sono perpendicolari alle linee di campo, in ogni punto."},
{"t":"Fra due cariche uguali, nel punto a metà strada, il potenziale è zero.","ok":false,"s":"No: i due potenziali hanno lo stesso segno e si sommano, quindi il potenziale è il doppio di quello di una sola carica. È il campo, in quel punto, a essere zero: lo puoi vedere nel primo simulatore delle linee di campo, cliccando a metà strada fra due cariche uguali."}
]{% endcapture %}
{% include quiz.html domande=_qEquiEl id="q-equipot-el" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _rEqui %}Con una carica positiva e una negativa uguali in valore assoluto, i punti a metà strada fra le due hanno potenziale zero, perché i due contributi si annullano. Lo stesso vale per tutti i punti che sono alla stessa distanza dalle due cariche: formano il piano che taglia a metà il segmento fra le cariche, ed è perpendicolare a esso. Sul foglio è la retta verticale a metà strada, e nel simulatore è la linea arancione dritta fra le due cariche.{% endcapture %}
{% include risposta-aperta.html id="ra-equipot-zero" tipo="spiega"
   domanda="Con due cariche $+Q$ e $-Q$, quali punti hanno potenziale zero? Che forma ha la superficie equipotenziale corrispondente? (Puoi aiutarti con il simulatore.)" risposta=_rEqui %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}


## Il moto di una particella carica in un campo elettrico

{% include margin-note.html testo="Che cosa succede a una carica in un campo?" %}
Finora ci siamo chiesti quale campo generano le cariche. Ora facciamo la domanda opposta, la stessa che ci eravamo posti per la gravità: che cosa succede a una carica $q$ che si trova in un campo elettrico generato da *altre* cariche? Quale forza sente, con quale accelerazione si muove, e dove va?
{% include margin-note-end.html %}


### La forza su una carica in un campo elettrico

{% include box-ricorda.html testo="La forza peso" %}
Una massa $m$ immersa in un campo gravitazionale $\vec g$ è soggetta alla forza peso

$$\vec F = m\,\vec g,$$

dove $\vec g$ è il campo in cui la massa si trova (per esempio quello generato dalla Terra), e non quello che la massa stessa genera.
{% include box-end.html %}

{% include margin-note.html testo="Dal campo alla forza" %}
Per le cariche vale lo stesso, ed è la definizione del campo elettrico letta al contrario: da $\vec E = \vec F/q$ si ricava che una carica $q$, in un punto in cui il campo vale $\vec E$, subisce la forza

$$\vec F = q\,\vec E.$$
{% include margin-note-end.html %}


{% include margin-note.html testo="Il segno della carica decide il verso" %}
La differenza con la gravità sta nel segno. Le masse sono tutte positive, e il peso ha sempre lo stesso verso di $\vec g$. Le cariche invece possono essere negative: un protone viene spinto nel verso del campo, un elettrone nel verso opposto.
{% include margin-note-end.html %}


{% include box-imp.html testo="La forza su una carica in un campo elettrico" %}
- **Formula:** $\vec F = q\,\vec E$, dove $q$ è la carica, con il suo segno, e $\vec E$ è il campo generato dalle *altre* cariche nel punto in cui si trova $q$: mai quello generato da $q$ stessa.
- **Modulo:** $F = \lvert q\rvert\,E$.
- **Verso:** se $q$ è positiva, $\vec F$ ha lo stesso verso di $\vec E$; se $q$ è negativa, ha verso opposto.
{% include box-end.html %}

{% include margin-note.html testo="In un campo uniforme la forza è costante" %}
In un campo uniforme, come quello fra due lastre, anche la forza su una carica è la stessa in ogni punto: proprio come il peso di un oggetto, che è lo stesso in ogni punto dell'aula.
{% include margin-note-end.html %}


{% include box-ex.html testo="Verifica Subito!" %}
Quando serve, usa $e = 1{,}6\times10^{-19}\ \text C$.

{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qForzaE %}[
{"t":"Se a parità di campo raddoppia la carica, raddoppia anche la forza che essa subisce.","ok":true,"s":"Sì: $F = |q|\\,E$ è direttamente proporzionale alla carica."},
{"t":"Un elettrone in un campo elettrico subisce una forza con lo stesso verso del campo.","ok":false,"s":"No: l'elettrone è negativo, quindi in $\\vec F = q\\,\\vec E$ la forza ha verso opposto al campo."},
{"t":"In $\\vec F = q\\,\\vec E$, $\\vec E$ è il campo generato dalla carica $q$.","ok":false,"s":"No: è il campo generato dalle altre cariche nel punto in cui si trova $q$. Una carica non subisce forze dal proprio campo, così come una mela non è attirata dalla propria gravità."},
{"t":"Fra due lastre cariche con segni opposti, un protone subisce la stessa forza in qualunque punto si trovi.","ok":true,"s":"Sì: fra le lastre il campo è uniforme, quindi anche $\\vec F = q\\,\\vec E$ è la stessa in ogni punto."}
]{% endcapture %}
{% include quiz.html domande=_qForzaE id="q-forza-qE" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl18" %}
Una carica $q = +2\times10^{-6}\ \text C$ si trova in un punto in cui il campo elettrico vale $E = 3000\ \text{N/C}$. Quanto vale il modulo della forza che subisce?

{% include fill-multi.html testo="$F =$ [6] $\times10^{-3}$ N" s="$F = q\,E = 2\times10^{-6}\ \text C\cdot 3000\ \text{N/C} = 6\times10^{-3}\ \text N$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Fra due lastre orizzontali, quella in alto è carica positivamente e quella in basso negativamente. Fra le due si trova un elettrone.

{% include fill.html prima="Il campo fra le lastre punta" tipo="drop" opts="verso l'alto|verso il basso" ok="verso il basso" dopo="," s="Il campo va dalla lastra positiva a quella negativa." %}

{% include fill.html prima="e la forza sull'elettrone punta" tipo="drop" opts="verso l'alto|verso il basso" ok="verso l'alto" dopo="." s="L'elettrone è negativo: la forza ha verso opposto al campo, cioè verso la lastra positiva, da cui è attratto." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl19" %}
Un protone si trova fra due lastre cariche, dove il campo vale $E = 1000\ \text{N/C}$. Quanto vale il modulo della forza che subisce?

{% include fill-multi.html testo="$F =$ [1,6|1.6] $\times10^{-16}$ N" s="La carica del protone è $e = 1{,}6\times10^{-19}\ \text C$, quindi $F = e\,E = 1{,}6\times10^{-19}\cdot 1000\ \text N = 1{,}6\times10^{-16}\ \text N$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### L'accelerazione

{% include margin-note.html testo="Dalla forza all'accelerazione" %}
Per il secondo principio della dinamica, una carica di massa $m$ soggetta alla forza $\vec F = q\,\vec E$ accelera, con $\vec F = m\,\vec a$. Uguagliando le due espressioni della forza:

{% include lab-virtuali/a-qe-m-lab.html %}

$$\vec a = \frac{q}{m}\,\vec E.$$

{% include margin-note-end.html %}


{% include margin-note.html testo="Perché qui la massa non si semplifica" %}
Nella gravità, la massa compariva sia nella forza ($\vec F = m\,\vec g$) sia nel secondo principio ($\vec F = m\,\vec a$), e si semplificava: tutti i corpi cadono con la stessa accelerazione $\vec a = \vec g$, il martello come la piuma. Qui invece la forza dipende dalla carica e l'inerzia dalla massa, che sono due proprietà diverse: non si semplifica niente, e l'accelerazione dipende dal rapporto $q/m$.
{% include margin-note-end.html %}


{% include box-imp.html testo="L'accelerazione di una carica in un campo elettrico" %}
Una particella di carica $q$ e massa $m$, in un punto in cui il campo generato dalle altre cariche vale $\vec E$, ha accelerazione

$$\vec a = \frac{q}{m}\,\vec E.$$

A differenza della gravità, l'accelerazione **dipende** dalla particella: dalla sua carica (con il segno, che ne decide il verso) e dalla sua massa.
{% include box-end.html %}

|  | Massa in un campo gravitazionale | Carica in un campo elettrico |
|---|:---:|:---:|
| **Forza** | $\vec F = m\,\vec g$ | $\vec F = q\,\vec E$ |
| **Accelerazione** | $\vec a = \vec g$: uguale per tutti i corpi | $\vec a = \dfrac{q}{m}\,\vec E$: dipende da $q$ e da $m$ |
| **Verso** | sempre quello di $\vec g$ | quello di $\vec E$ se $q > 0$, opposto se $q < 0$ |

{% include margin-note.html testo="Protone ed elettrone a confronto" %}
Per esempio, un protone e un elettrone hanno cariche con lo stesso valore assoluto, ma la massa dell'elettrone ($9{,}1\times10^{-31}\ \text{kg}$) è circa $1800$ volte più piccola di quella del protone ($1{,}67\times10^{-27}\ \text{kg}$). Nello stesso campo, l'elettrone subisce una forza uguale in modulo e opposta in verso, ma accelera circa $1800$ volte di più.
{% include margin-note-end.html %}


{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qAccE %}[
{"t":"In un campo gravitazionale tutti i corpi, qualunque sia la loro massa, hanno la stessa accelerazione.","ok":true,"s":"Sì: $\\vec a = \\vec g$, perché la massa si semplifica."},
{"t":"In un campo elettrico, due particelle con la stessa carica ma massa diversa hanno la stessa accelerazione.","ok":false,"s":"No: $a = \\dfrac{|q|}{m}\\,E$, quindi a parità di carica la particella con massa più piccola accelera di più."},
{"t":"Nello stesso campo elettrico, un protone e un elettrone subiscono forze con lo stesso modulo.","ok":true,"s":"Sì: le loro cariche hanno lo stesso valore assoluto $e$, quindi $F = e\\,E$ per entrambi. Le forze hanno però verso opposto."},
{"t":"In un campo uniforme, una carica lasciata ferma si muove di moto uniformemente accelerato lungo una linea di campo.","ok":true,"s":"Sì: la forza è costante, quindi lo è anche l'accelerazione. È come un sasso lasciato cadere."}
]{% endcapture %}
{% include quiz.html domande=_qAccE id="q-acc-qE" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl21" %}
Una sferetta di massa $m = 4\times10^{-3}\ \text{kg}$ e carica $q = +2\times10^{-6}\ \text C$ si trova in un campo elettrico $E = 5000\ \text{N/C}$. Trascurando il peso, quanto vale la sua accelerazione?

{% include fill-multi.html testo="$F =$ [1] $\times10^{-2}$ N, $a =$ [2,5|2.5] m/s²" s="$F = q\,E = 2\times10^{-6}\cdot 5000\ \text N = 1\times10^{-2}\ \text N$, e $a = \dfrac{F}{m} = \dfrac{1\times10^{-2}}{4\times10^{-3}}\ \text{m/s}^2 = 2{,}5\ \text{m/s}^2$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Un protone e un elettrone si trovano nello stesso campo elettrico. Che cosa si può dire dell'accelerazione dell'elettrone, rispetto a quella del protone?
{% capture _oAccPE %}[
{"v":"a","t":"è uguale, perché le due cariche hanno lo stesso valore assoluto"},
{"v":"b","t":"è circa $1800$ volte più grande, e ha verso opposto"},
{"v":"c","t":"è circa $1800$ volte più piccola, e ha lo stesso verso"},
{"v":"d","t":"è uguale in modulo, ma ha verso opposto"}
]{% endcapture %}
{% include mcq.html id="mcq-acc-protone-elettrone" opts=_oAccPE ok="b" s="Le forze hanno lo stesso modulo $e\,E$ e verso opposto. Ma in $a = F/m$ la massa dell'elettrone è circa $1800$ volte più piccola, quindi la sua accelerazione è circa $1800$ volte più grande." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl22" %}
Una pallina di polistirolo di massa $2\ \text g$, con carica $q = -4\times10^{-7}\ \text C$, si trova in un campo $E = 2\times10^{4}\ \text{N/C}$. Trascurando il peso, quanto vale la sua accelerazione?

{% include fill-multi.html testo="$F =$ [8] $\times10^{-3}$ N, $a =$ [4] m/s²" s="$F = |q|\,E = 4\times10^{-7}\cdot 2\times10^{4}\ \text N = 8\times10^{-3}\ \text N$. Attenzione alla massa: $2\ \text g = 2\times10^{-3}\ \text{kg}$, quindi $a = \dfrac{8\times10^{-3}}{2\times10^{-3}}\ \text{m/s}^2 = 4\ \text{m/s}^2$, con verso opposto al campo." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _rParab %}Il campo fra le lastre è uniforme, quindi la forza sul protone è costante e sempre verticale. In orizzontale non c'è nessuna forza, e il protone continua ad andare avanti con la stessa velocità; in verticale accelera in modo uniforme. È esattamente quello che succede a un sasso lanciato orizzontalmente, con la forza elettrica al posto del peso: la traiettoria è un arco di parabola.{% endcapture %}
{% include risposta-aperta.html id="ra-prevedi-parabola" tipo="spiega"
   domanda="Un protone viene lanciato orizzontalmente fra due lastre orizzontali cariche. Che traiettoria seguirà? A quale moto che conosci già assomiglia?"
   risposta=_rParab %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una particella alfa (un nucleo di elio) ha una carica doppia di quella del protone e una massa circa quattro volte più grande. Nello stesso campo elettrico, la sua accelerazione rispetto a quella del protone è
{% capture _oAlfa %}[
{"v":"a","t":"il doppio"},
{"v":"b","t":"la stessa"},
{"v":"c","t":"la metà"},
{"v":"d","t":"un quarto"}
]{% endcapture %}
{% include mcq.html id="mcq-acc-alfa" opts=_oAlfa ok="c" s="$a = \dfrac{q}{m}\,E$: la carica raddoppia e la massa quadruplica, quindi il rapporto $q/m$ diventa $\dfrac{2}{4} = \dfrac{1}{2}$ di quello del protone." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### L'esperimento di Millikan

{% include margin-note.html testo="Quanto vale la carica di un elettrone?" %}
Che la carica elettrica fosse portata da particelle minuscole, gli elettroni, all'inizio del Novecento era ormai chiaro. Ma quanto vale la carica di un elettrone? Nel 1897 Joseph John Thomson era riuscito a misurare il rapporto $q/m$ fra la sua carica e la sua massa, proprio il rapporto che compare in $\vec a = \dfrac{q}{m}\,\vec E$, ma non la carica da sola. Il fisico americano Robert Millikan, fra il 1909 e il 1913, trovò il modo di misurarla. Proviamo a seguire il ragionamento.
{% include margin-note-end.html %}


Il simulatore riproduce il suo esperimento: una goccia d'olio carica negativamente si trova fra due lastre orizzontali, e il campo fra le lastre si può regolare. Ti servirà nel problema qui sotto.

{% include lab-virtuali/millikan-lab.html %}

{% include box-ex.html testo="Il problema di Millikan" %}
Usa $g = 9{,}8\ \text{m/s}^2$.

{% include scorri.html %}
{% include scorri-slide.html %}
La prima idea che viene in mente: mettere un elettrone fra due lastre, dove il campo $E$ è uniforme e lo possiamo regolare noi, e usare $q\,E = m\,a$. Per ricavare $q$, che cosa dovremmo misurare?
{% capture _oMil1 %}[
{"v":"a","t":"solo il campo $E$"},
{"v":"b","t":"l'accelerazione $a$ e la massa $m$ dell'elettrone ($E$ lo regoliamo noi)"},
{"v":"c","t":"solo la velocità dell'elettrone"},
{"v":"d","t":"la distanza fra le lastre"}
]{% endcapture %}
{% include mcq.html id="mcq-millikan-idea" opts=_oMil1 ok="b" s="Da $q\,E = m\,a$ si ricava $q = \dfrac{m\,a}{E}$: conoscendo $E$, servono la massa e l'accelerazione dell'elettrone." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Questa strada, però, non porta da nessuna parte. Perché?
{% capture _oMil2 %}[
{"v":"a","t":"perché in un campo uniforme gli elettroni non accelerano"},
{"v":"b","t":"perché un elettrone non si può vedere, e la sua massa nessuno la conosceva: si conosceva solo il rapporto $q/m$"},
{"v":"c","t":"perché la formula $q\\,E = m\\,a$ vale solo per i protoni"},
{"v":"d","t":"perché il campo fra le lastre non si può regolare"}
]{% endcapture %}
{% include mcq.html id="mcq-millikan-problema" opts=_oMil2 ok="b" s="Un singolo elettrone è troppo piccolo per essere visto, e la sua accelerazione è enorme. Soprattutto, misurando come si muove un elettrone in un campo si ottiene sempre e solo il rapporto $q/m$, quello che aveva già trovato Thomson: per separare $q$ da $m$ serve un'altra idea." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
L'idea di Millikan fu di attaccare gli elettroni a qualcosa di abbastanza grande da essere visto al microscopio, e di cui si potesse misurare la massa: minuscole goccioline d'olio. Spruzzate da un nebulizzatore, le goccioline si caricano per strofinio, catturando qualche elettrone in più. Ora però sulla goccia agisce anche il peso. Regolando il campo, Millikan riusciva a tenere una goccia ferma a mezz'aria.

{% include fill.html prima="Se la goccia è ferma, la sua accelerazione è" tipo="drop" opts="zero|uguale a g|uguale a qE/m" ok="zero" dopo="," s="Ferma e che resta ferma: la velocità non cambia, quindi $a = 0$." %}

{% include fill.html prima="quindi la forza elettrica e il peso" tipo="drop" opts="hanno lo stesso modulo e verso opposto|hanno lo stesso verso|sono entrambi zero" ok="hanno lo stesso modulo e verso opposto" dopo="." s="Se l'accelerazione è zero, la forza totale è zero: la forza elettrica verso l'alto equilibra il peso verso il basso, $\lvert q\rvert\,E = m\,g$, e quindi $\lvert q\rvert = \dfrac{m\,g}{E}$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl20" %}
Nel simulatore, scegli la goccia 1 e regola il campo finché la goccia non resta ferma. Poi calcola la sua carica, in valore assoluto.

{% include fill-multi.html testo="La goccia 1 sta ferma con $E =$ [100] kN/C; la sua carica è $\lvert q\rvert =$ [4,8|4.8] $\times10^{-19}$ C" s="Attenzione all'unità di misura: $100\ \text{kN/C} = 1{,}0\times10^{5}\ \text{N/C}$. Allora $\lvert q\rvert = \dfrac{m\,g}{E} = \dfrac{4{,}9\times10^{-15}\cdot 9{,}8}{1{,}0\times10^{5}}\ \text C \approx 4{,}8\times10^{-19}\ \text C$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl26" %}
Fai lo stesso con le gocce 2 e 3.

{% include fill-multi.html testo="Goccia 2: $E =$ [150] kN/C, $\lvert q\rvert =$ [3,2|3.2] $\times10^{-19}$ C. Goccia 3: $E =$ [120] kN/C, $\lvert q\rvert =$ [8,0|8|8.0] $\times10^{-19}$ C." s="Goccia 2: $\lvert q\rvert = \dfrac{4{,}9\times10^{-15}\cdot 9{,}8}{1{,}5\times10^{5}}\ \text C \approx 3{,}2\times10^{-19}\ \text C$. Goccia 3: $\lvert q\rvert = \dfrac{9{,}8\times10^{-15}\cdot 9{,}8}{1{,}2\times10^{5}}\ \text C \approx 8{,}0\times10^{-19}\ \text C$. Le gocce 1 e 2 hanno la stessa massa ma cariche diverse: hanno catturato un numero diverso di elettroni." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Le cariche delle tre gocce sono $4{,}8\times10^{-19}\ \text C$, $3{,}2\times10^{-19}\ \text C$ e $8{,}0\times10^{-19}\ \text C$. Che cosa hanno in comune?
{% capture _oMil3 %}[
{"v":"a","t":"sono tutte multipli interi di $1{,}6\\times10^{-19}\\ \\text C$"},
{"v":"b","t":"sono più grandi per le gocce più pesanti"},
{"v":"c","t":"sono tutte uguali, a meno degli errori di misura"},
{"v":"d","t":"non hanno niente in comune"}
]{% endcapture %}
{% include mcq.html id="mcq-millikan-multipli" opts=_oMil3 ok="a" s="$4{,}8 = 3\times1{,}6$, $3{,}2 = 2\times1{,}6$, $8{,}0 = 5\times1{,}6$: le gocce hanno catturato $3$, $2$ e $5$ elettroni. Millikan misurò centinaia di gocce, e trovò sempre multipli interi dello stesso valore: la carica non si può dividere all'infinito, e il pezzetto più piccolo è quello di un elettrone. La carica dell'elettrone è quindi $-1{,}6\times10^{-19}\ \text C$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
E il protone? Un atomo di idrogeno è formato da un protone e un elettrone, ed è neutro. Quanto vale allora la carica del protone?
{% capture _oMil4 %}[
{"v":"a","t":"$+1{,}6\\times10^{-19}\\ \\text C$"},
{"v":"b","t":"$-1{,}6\\times10^{-19}\\ \\text C$"},
{"v":"c","t":"circa $1800$ volte quella dell'elettrone, perché il protone ha una massa circa $1800$ volte più grande"},
{"v":"d","t":"zero"}
]{% endcapture %}
{% include mcq.html id="mcq-millikan-protone" opts=_oMil4 ok="a" s="Perché l'atomo sia neutro, la carica del protone deve annullare esattamente quella dell'elettrone: $+1{,}6\times10^{-19}\ \text C$. La massa non c'entra: carica e massa sono due proprietà diverse. Anzi, una volta nota la carica dell'elettrone, dal rapporto $q/m$ di Thomson si ricavò anche la sua massa: $9{,}1\times10^{-31}\ \text{kg}$." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

Per queste misure (e per i suoi studi sull'effetto fotoelettrico) Millikan ricevette nel 1923 il premio Nobel per la Fisica.

{% include spoiler.html testo="Lo scandalo dietro l'esperimento di Millikan: le gocce scartate" %}
Nell'articolo del 1913, quello con i risultati definitivi, Millikan presentò le misure di 58 gocce, e scrisse che non si trattava di gocce scelte, ma di *tutte* quelle studiate in 60 giorni consecutivi. Negli anni Settanta lo storico della scienza Gerald Holton esaminò i suoi quaderni di laboratorio, e scoprì che non era vero: Millikan aveva studiato molte più gocce, e ne aveva scartate parecchie, a volte con commenti come «bellissimo, pubblicare» accanto a quelle che tornavano e «qualcosa non va» accanto a quelle che non tornavano.

Era in corso una disputa con il fisico austriaco Felix Ehrenhaft, che sosteneva di aver misurato cariche più piccole di quella dell'elettrone, e dichiarare di aver usato tutte le gocce rendeva i risultati di Millikan più convincenti. Le analisi successive hanno mostrato che i numeri non erano inventati e che, rifacendo i conti anche con le gocce scartate, il valore della carica dell'elettrone sarebbe cambiato pochissimo: Millikan aveva ragione. Ma aveva scelto i dati che gli davano ragione, e aveva scritto il falso su come li aveva scelti.

C'è anche un'altra ombra: buona parte del lavoro in laboratorio, compresa l'idea di usare l'olio al posto dell'acqua, che evaporava troppo in fretta, si deve al suo studente Harvey Fletcher, che però non firmò l'articolo.
{% include spoiler-end.html %}

### Il moto dal punto di vista dell'energia

{% include box-ricorda.html testo="Energia cinetica ed energia meccanica" %}
Un corpo di massa $m$ che si muove con velocità $v$ possiede un'**energia cinetica**, l'energia del movimento:

$$K = \frac12\,m\,v^2.$$

L'**energia meccanica** è la somma dell'energia cinetica e dell'energia potenziale: $K + U$. Se agiscono solo forze come il peso (senza attriti), l'energia meccanica si conserva: l'energia potenziale si trasforma in energia cinetica, e viceversa, ma la somma resta la stessa,

$$K_i + U_i = K_f + U_f.$$

Un sasso lasciato cadere scende: la sua energia potenziale diminuisce e si trasforma in energia cinetica. E poiché $U = m\,V$ e le masse sono sempre positive, una massa lasciata libera va sempre verso il potenziale gravitazionale più basso, cioè verso la Terra. Lo trovi nel capitolo sull'[energia]({{ '/corsi/meccanica/06_Energia/' | relative_url }}#i-sistemi-isolati-e-la-conservazione-dellenergia-meccanica).
{% include box-end.html %}

{% include margin-note.html testo="L'energia potenziale diventa energia cinetica" %}
Anche per la forza elettrica, come per il peso, abbiamo potuto definire un'energia potenziale. Una carica che si muove liberamente in un campo elettrico conserva quindi la sua energia meccanica: la sua energia potenziale elettrica si trasforma in energia cinetica. Una carica lasciata ferma si mette in moto nel verso in cui la sua energia potenziale $U = q\,V$ diminuisce, come una pallina su uno scivolo.
{% include margin-note-end.html %}


{% include margin-note.html testo="Positive e negative vanno in versi opposti" %}
Qui però entra di nuovo in gioco il segno. Per una carica positiva, $U = q\,V$ diminuisce quando diminuisce $V$: la carica va verso il potenziale più basso, come le masse. Per una carica negativa, $U = q\,V$ diminuisce quando $V$ **aumenta**: la carica va verso il potenziale più alto.
{% include margin-note-end.html %}


Nel simulatore puoi scegliere quale lastra è positiva e il segno della carica. Fra le lastre sono tracciate le linee equipotenziali, con il loro potenziale; sotto, il grafico del potenziale $V$ e quello dell'energia potenziale $U = q\,V$ della carica.

{% include lab-virtuali/rotola-potenziale-lab.html %}

{% include box-imp.html testo="Il moto di una carica dal punto di vista dell'energia" %}
- **Conservazione:** l'energia meccanica $K + U$ resta costante, quindi l'energia potenziale elettrica che la carica perde si trasforma in energia cinetica.
- **Energia e potenziale:** una carica $q$ in un punto a potenziale $V$ ha energia potenziale $U = q\,V$.
- **Dove va una carica lasciata libera:** sempre verso l'energia potenziale più bassa. Una carica **positiva** va dal potenziale più alto a quello più basso; una carica **negativa** va dal potenziale più basso a quello più alto.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qEnMoto %}[
{"t":"Una carica positiva lasciata libera si sposta verso i punti a potenziale più basso.","ok":true,"s":"Sì: per $q > 0$, $U = q\\,V$ diminuisce quando diminuisce $V$."},
{"t":"Una carica negativa lasciata libera si sposta verso i punti a potenziale più basso.","ok":false,"s":"No: per $q < 0$, $U = q\\,V$ diminuisce quando $V$ aumenta, quindi la carica va verso il potenziale più alto."},
{"t":"Quando una carica si muove liberamente in un campo elettrico, la sua energia potenziale diminuisce e la sua energia cinetica aumenta.","ok":true,"s":"Sì: l'energia potenziale persa si trasforma in energia cinetica. È lo stesso che succede a un sasso che cade."},
{"t":"Una massa lasciata libera in un campo gravitazionale va sempre verso il potenziale gravitazionale più basso.","ok":true,"s":"Sì: le masse sono sempre positive, quindi in $U = m\\,V$ l'energia potenziale diminuisce sempre quando diminuisce il potenziale."}
]{% endcapture %}
{% include quiz.html domande=_qEnMoto id="q-energia-moto" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Un elettrone, inizialmente fermo, si trova fra il punto $A$, a potenziale $100\ \text V$, e il punto $B$, a potenziale $300\ \text V$.

{% include fill.html prima="Lasciato libero, l'elettrone si muove verso" tipo="drop" opts="A|B" ok="B" dopo="." s="L'elettrone è negativo: va verso il potenziale più alto, cioè verso B. Lì la sua energia potenziale $U = q\,V$ è più bassa, perché $q$ è negativa." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl23" %}
Una carica $q = +2\times10^{-6}\ \text C$ parte da ferma dal punto $A$, dove il potenziale vale $500\ \text V$, e arriva nel punto $B$, dove vale $200\ \text V$.

{% include fill-multi.html testo="$U_A =$ [10] $\times10^{-4}$ J, $U_B =$ [4] $\times10^{-4}$ J, energia cinetica in $B$: $K_B =$ [6] $\times10^{-4}$ J" s="$U_A = q\,V_A = 2\times10^{-6}\cdot 500\ \text J = 10\times10^{-4}\ \text J$ e $U_B = q\,V_B = 2\times10^{-6}\cdot 200\ \text J = 4\times10^{-4}\ \text J$. La carica parte ferma, quindi $K_A = 0$, e dalla conservazione $K_A + U_A = K_B + U_B$: $K_B = U_A - U_B = 6\times10^{-4}\ \text J$. L'energia potenziale persa si è trasformata in energia cinetica." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### La differenza di potenziale

{% include margin-note.html testo="Che cos'è la differenza di potenziale" %}
Abbiamo visto che il moto di una carica dipende da come cambia il potenziale fra il punto di partenza e quello di arrivo. La <definizione>differenza di potenziale</definizione> fra due punti, che si chiama anche <definizione>tensione</definizione>, è il potenziale del punto di arrivo meno quello del punto di partenza:

$$\Delta V = V_{arrivo} - V_{partenza}.$$

Come ogni potenziale, si misura in volt. Nella figura, una carica va dal punto $A$, dove il potenziale vale $600\ \text V$, al punto $B$, dove vale $200\ \text V$:

{% include figure/figura-differenza-potenziale.html %}
{% include margin-note-end.html %}


{% include margin-note.html testo="Differenza di potenziale ed energia" %}
Da $U = q\,V$ segue che, quando la carica si sposta, la sua energia potenziale cambia di

$$\Delta U = q\,\Delta V.$$

Se la carica parte da ferma, l'energia potenziale che perde si trasforma tutta in energia cinetica: arriva con $K = \lvert q\rvert\,\lvert\Delta V\rvert$. Più grande è la differenza di potenziale, più energia acquista ogni carica: per questo, per accelerare le particelle, si usano differenze di potenziale molto grandi.
{% include margin-note-end.html %}


{% include box-imp.html testo="La differenza di potenziale" %}
- **Definizione:** $\Delta V = V_{arrivo} - V_{partenza}$, in volt. Si chiama anche tensione.
- **Energia:** quando una carica $q$ si sposta fra i due punti, la sua energia potenziale cambia di $\Delta U = q\,\Delta V$. Se parte da ferma, arriva con energia cinetica $K = \lvert q\rvert\,\lvert\Delta V\rvert$.
- **Moto:** una carica lasciata libera si muove solo se c'è una differenza di potenziale; senza differenza di potenziale non ci sono variazioni di energia potenziale, e non c'è niente che la metta in moto.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
Quando serve, usa $e = 1{,}6\times10^{-19}\ \text C$.

{% include scorri.html %}
{% include scorri-slide.html %}
Un protone va da un punto a potenziale $50\ \text V$ a un punto a potenziale $350\ \text V$.

{% include fill.html prima="La differenza di potenziale è ΔV =" tipo="drop" opts="+300 V|−300 V|400 V" ok="+300 V" dopo="," s="$\Delta V = V_{arrivo} - V_{partenza} = 350\ \text V - 50\ \text V = +300\ \text V$." %}

{% include fill.html prima="e la sua energia potenziale" tipo="drop" opts="aumenta|diminuisce|resta la stessa" ok="aumenta" dopo="." s="$\Delta U = q\,\Delta V$ con $q > 0$ e $\Delta V > 0$: l'energia potenziale aumenta. Un protone lasciato libero non ci andrebbe da solo: bisogna spingerlo, come per portare un sasso in cima a una salita." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include figura.html id="uccelli-sul-filo"
   src="/corsi/immagini/uccelli-sul-filo.webp"
   didascalia="Uccelli posati sui fili di una linea elettrica."
   larghezza="420px" %}

Gli uccelli si posano tranquillamente sui fili dell'alta tensione, che hanno un potenziale di migliaia di volt rispetto al terreno, e non prendono la scossa.
{% capture _rUccelli %}Perché la carica si sposti attraverso un corpo serve una differenza di potenziale fra due punti del corpo. L'uccello tocca il filo con entrambe le zampe, e lo tocca soltanto: le due zampe sono quasi allo stesso potenziale, quindi attraverso il suo corpo non passa praticamente nessuna carica. Se invece toccasse contemporaneamente il filo e un palo collegato a terra, fra i due punti ci sarebbe una differenza di potenziale enorme, e la carica lo attraverserebbe: per questo è pericolosissimo per una persona su una scala che tocchi un filo.{% endcapture %}
{% include risposta-aperta.html id="ra-uccelli-filo" tipo="spiega"
   domanda="Perché gli uccelli posati sul filo non prendono la scossa? Che cosa succederebbe se l'uccello toccasse insieme il filo e il palo?" risposta=_rUccelli %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include figura.html id="tubo-catodico"
   src="/corsi/immagini/tubo-catodico.webp"
   didascalia="Lo schema di un tubo catodico (cathode ray tube). Da sinistra: il filamento che scalda il catodo, l'anodo che accelera gli elettroni, le piastre che deviano il fascio in orizzontale e in verticale, lo schermo fluorescente."
   larghezza="420px" %}

**Un'applicazione: il tubo catodico.** Nei vecchi televisori, quelli profondi e non piatti, un filamento caldo liberava elettroni dal catodo. Gli elettroni venivano accelerati verso l'anodo da una differenza di potenziale di circa $20\,000\ \text V$, e poi passavano fra due coppie di piastre: il campo uniforme fra le piastre li deviava in alto o in basso, a destra o a sinistra. Il fascio colpiva così lo schermo nel punto voluto, facendolo illuminare.

{% include fill.html prima="Per essere accelerati, gli elettroni vanno verso un potenziale" tipo="drop" opts="più alto|più basso" ok="più alto" dopo="." s="Gli elettroni sono negativi: la loro energia potenziale $U = q\,V$ diminuisce andando verso il potenziale più alto, e si trasforma in energia cinetica. L'anodo è quindi a un potenziale più alto del catodo." %}

{% include fill.html prima="Per deviare il fascio verso l'alto, la piastra di deflessione positiva deve essere quella" tipo="drop" opts="in alto|in basso" ok="in alto" dopo="." s="Gli elettroni sono attratti dalla piastra positiva: la forza $q\,\vec E$ ha verso opposto al campo, che va dalla piastra positiva (in alto) a quella negativa (in basso)." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include figura.html id="cern-cms"
   src="/corsi/immagini/cern.webp"
   didascalia="Il rivelatore CMS del CERN di Ginevra, alto 15 metri: osserva le particelle prodotte negli scontri fra i protoni accelerati da LHC."
   larghezza="420px" %}

**Un'applicazione: gli acceleratori di particelle.** Al CERN di Ginevra, nell'acceleratore LHC, i protoni girano in un anello lungo 27 km. A ogni giro attraversano delle zone in cui una differenza di potenziale li accelera, e girando milioni di volte accumulano un'energia che corrisponde a una differenza di potenziale di quasi $7000$ miliardi di volt. Poi vengono fatti scontrare, e dall'energia dello scontro nascono nuove particelle, che rivelatori come CMS osservano.

{% include calc-margin.html id="calcEl24" %}
Quanta energia cinetica acquista un protone, partito da fermo, attraversando una differenza di potenziale di un milione di volt?

{% include fill-multi.html testo="$K =$ [1,6|1.6] $\times10^{-13}$ J" s="$K = e\,\lvert\Delta V\rvert = 1{,}6\times10^{-19}\ \text C\cdot 10^{6}\ \text V = 1{,}6\times10^{-13}\ \text J$." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcEl25" %}
Un protone, inizialmente fermo, viene accelerato da una differenza di potenziale di $1000\ \text V$. Con quale velocità arriva? Usa $m_p = 1{,}67\times10^{-27}\ \text{kg}$.

{% include fill-multi.html testo="$K =$ [1,6|1.6] $\times10^{-16}$ J, $v \approx$ [4,4|4.4|4,38|4.38] $\times10^{5}$ m/s" s="L'energia potenziale persa si trasforma in energia cinetica: $K = e\,\lvert\Delta V\rvert = 1{,}6\times10^{-19}\cdot 1000\ \text J = 1{,}6\times10^{-16}\ \text J$. Da $K = \dfrac12 m v^2$: $v = \sqrt{\dfrac{2K}{m_p}} = \sqrt{\dfrac{3{,}2\times10^{-16}}{1{,}67\times10^{-27}}}\ \text{m/s} \approx 4{,}4\times10^{5}\ \text{m/s}$: più di mille volte la velocità del suono." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Un protone e un elettrone, partendo da fermi, vengono accelerati dalla stessa differenza di potenziale (il protone verso il potenziale più basso, l'elettrone verso quello più alto). Alla fine,
{% capture _oPEenergia %}[
{"v":"a","t":"hanno la stessa energia cinetica e la stessa velocità"},
{"v":"b","t":"hanno la stessa energia cinetica, ma l'elettrone è molto più veloce"},
{"v":"c","t":"il protone ha più energia cinetica, perché è più pesante"},
{"v":"d","t":"l'elettrone ha più energia cinetica, perché è più leggero"}
]{% endcapture %}
{% include mcq.html id="mcq-energia-protone-elettrone" opts=_oPEenergia ok="b" s="$K = |q|\,|\Delta V|$ e le due cariche hanno lo stesso valore assoluto: l'energia cinetica è la stessa. Ma in $K = \dfrac12 m v^2$ l'elettrone ha una massa circa $1800$ volte più piccola, quindi la sua velocità è molto più grande (circa $\sqrt{1800}\approx 43$ volte)." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}


# Esercizi di riepilogo

Dove serve, usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$, $e = 1{,}6\times10^{-19}\ \text C$, $m_e = 9{,}1\times10^{-31}\ \text{kg}$, $m_p = 1{,}67\times10^{-27}\ \text{kg}$ e $g = 9{,}8\ \text{m/s}^2$.

### La carica elettrica e l'elettrizzazione

{% include ex.html diff=1 %}
Trascina ciascun materiale nella colonna giusta.

{% capture _s %}[
{"t":"rame","c":0},{"t":"gomma","c":1},{"t":"corpo umano","c":0},{"t":"vetro","c":1},
{"t":"acqua salata","c":0},{"t":"plastica","c":1},{"t":"la Terra","c":0},{"t":"lana","c":1},
{"t":"alluminio","c":0},{"t":"legno secco","c":1}
]{% endcapture %}
{% include sort.html id="rie-sort-cond" dati=_s col0="Conduttori" col1="Isolanti" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="Quando un corpo si carica positivamente, ha acquistato protoni." ok=false s="No: i protoni restano fermi nei nuclei. Un corpo si carica positivamente perché <em>perde</em> elettroni." %}
{% include tf.html q="Strofinando un palloncino sui capelli, si caricano sia il palloncino sia i capelli, con segni opposti." ok=true s="Sì: gli elettroni passano da un corpo all'altro, e la carica totale resta la stessa." %}
{% include tf.html q="La carica di un corpo può valere 2,4 × 10⁻¹⁹ C." ok=false s="No: la carica è quantizzata, cioè è sempre un multiplo intero di e = 1,6 × 10⁻¹⁹ C, e 2,4 non è un multiplo intero di 1,6." %}
{% include tf.html q="Un conduttore polarizzato ha carica totale zero." ok=true s="Sì: le sue cariche si sono solo separate, ma non ne è entrata né uscita nessuna." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include fill.html prima="Strofinando un palloncino sui capelli, il palloncino acquista elettroni: il palloncino si carica" tipo="drop" opts="positivamente|negativamente" ok="negativamente" dopo="," s="Ha più elettroni che protoni." %}

{% include fill.html prima="mentre i capelli si caricano" tipo="drop" opts="positivamente|negativamente" ok="positivamente" dopo="." s="Hanno perso gli elettroni che sono passati al palloncino: ora hanno più protoni che elettroni." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Collega ciascun modo di elettrizzare un corpo con ciò che serve e con il segno della carica che si ottiene.

{% capture _d %}[
{"l":"Strofinio","m":"due corpi di materiali diversi, strofinati","r":"i due corpi si caricano con segni opposti"},
{"l":"Contatto","m":"un conduttore che tocca un corpo carico","r":"stesso segno del corpo carico"},
{"l":"Induzione","m":"un corpo carico vicino e un collegamento a terra","r":"segno opposto a quello del corpo carico"}
]{% endcapture %}
{% include match.html id="rie-match-elettr" dati=_d col1="Modo" col2="Che cosa serve" col3="Carica che si ottiene" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR1" %}
Un corpo ha una carica di $-3{,}2\times10^{-18}\ \text C$. Quanti elettroni ha in più rispetto ai protoni?

{% include num.html id="rieNumElettroni" valore="20" unit="elettroni" tol="0" %}
<div style="clear:both"></div>
{% include ex-sol.html %}
Il numero di elettroni in eccesso è $\dfrac{3{,}2\times10^{-18}\ \text C}{1{,}6\times10^{-19}\ \text C} = 20$.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR2" %}
Strofinando una bacchetta di vetro con un panno di lana, la bacchetta perde $5\times10^{12}$ elettroni. Quanto vale la sua carica? E quella del panno?

{% include fill-multi.html testo="Bacchetta: $q =$ [+8|8] $\times10^{-7}$ C. Panno: $q =$ [-8|−8] $\times10^{-7}$ C." s="$q = 5\times10^{12}\cdot 1{,}6\times10^{-19}\ \text C = 8\times10^{-7}\ \text C$: positiva per la bacchetta, che ha perso elettroni, negativa per il panno, che li ha presi. La carica totale resta zero." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Due sfere metalliche identiche hanno cariche $+6\ \text{nC}$ e $-2\ \text{nC}$. Le facciamo toccare e poi le separiamo. Quanto vale la carica di ciascuna?
{% capture _o %}[
{"v":"a","t":"$+4\\ \\text{nC}$ e $0$"},
{"v":"b","t":"$+2\\ \\text{nC}$ ciascuna"},
{"v":"c","t":"$+3\\ \\text{nC}$ e $-1\\ \\text{nC}$"},
{"v":"d","t":"$+4\\ \\text{nC}$ ciascuna"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-contatto" opts=_o ok="b" s="La carica totale si conserva: $+6 - 2 = +4\ \text{nC}$. Le sfere sono identiche, quindi se la dividono a metà: $+2\ \text{nC}$ ciascuna." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un elettroscopio è carico positivamente, e le sue foglioline sono aperte. Avviciniamo alla sferetta, senza toccarla, una bacchetta carica, e le foglioline si chiudono un po'. La bacchetta è
{% capture _o %}[
{"v":"a","t":"carica positivamente"},
{"v":"b","t":"carica negativamente"},
{"v":"c","t":"neutra"},
{"v":"d","t":"non si può dire"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-elettroscopio" opts=_o ok="b" s="Una bacchetta negativa attira elettroni verso la sferetta, cioè li allontana dalle foglioline: le foglioline restano con meno carica positiva in eccesso, si respingono meno e si chiudono un po'. Una bacchetta positiva farebbe il contrario: le aprirebbe di più." %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Due sfere metalliche neutre, $A$ e $B$, si toccano. Avviciniamo una bacchetta negativa alla sfera $A$, senza toccarla. Poi, con la bacchetta ancora vicina, separiamo le due sfere, e solo alla fine allontaniamo la bacchetta.

{% include fill.html prima="Alla fine la sfera A è carica" tipo="drop" opts="positivamente|negativamente|per niente" ok="positivamente" dopo="," s="La bacchetta negativa respinge gli elettroni verso B: A resta con meno elettroni che protoni." %}

{% include fill.html prima="e la sfera B è carica" tipo="drop" opts="positivamente|negativamente|per niente" ok="negativamente" dopo="." s="Gli elettroni respinti dalla bacchetta si sono accumulati su B. Separando le sfere prima di allontanare la bacchetta, gli elettroni non possono più tornare indietro: è un'induzione, in cui la seconda sfera fa la parte della Terra." %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Hai tre sfere metalliche identiche: una ha carica $Q$, le altre due sono neutre. Puoi solo far toccare le sfere fra loro, due alla volta. Come ottieni una sfera con carica $Q/4$? E una con carica $3Q/8$?
{% capture _r %}Chiamiamo $A$ la sfera carica e $B$, $C$ le altre. Facendo toccare $A$ e $B$, ciascuna prende $Q/2$. Facendo poi toccare $A$ e $C$, la carica $Q/2$ si divide a metà: $A$ e $C$ hanno $Q/4$ ciascuna. Per $3Q/8$, facciamo ora toccare $B$ (che ha $Q/2$) e $C$ (che ha $Q/4$): la carica totale $3Q/4$ si divide a metà, e ciascuna ha $3Q/8$.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-tre-sfere" tipo="spiega"
   domanda="Descrivi la sequenza di contatti, indicando dopo ogni passaggio la carica di ciascuna sfera."
   risposta=_r %}
{% include ex-end.html %}

### La forza elettrica

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="La forza elettrica fra due cariche si dimezza se la distanza raddoppia." ok=false s="No: dipende da 1/r², quindi diventa un quarto." %}
{% include tf.html q="Due cariche si attirano con forze uguali in modulo, anche se una è molto più grande dell'altra." ok=true s="Sì: è il terzo principio della dinamica. Forze uguali e opposte, sulla stessa retta." %}
{% include tf.html q="Immergendo due cariche in acqua, la forza fra loro diminuisce." ok=true s="Sì: in un materiale la costante k è più piccola che nel vuoto, e in acqua lo è molto." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include calc-margin.html id="calcElR3" %}
Due cariche $q_1 = +2\times10^{-6}\ \text C$ e $q_2 = +3\times10^{-6}\ \text C$ sono nel vuoto, a $3\ \text m$ di distanza. Quanto vale il modulo della forza fra loro? È attrattiva o repulsiva?

{% include fill-multi.html testo="$F =$ [6] $\times10^{-3}$ N" s="$F = k\dfrac{\lvert q_1 q_2\rvert}{r^2} = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot3\times10^{-6}}{9}\ \text N = 6\times10^{-3}\ \text N$." %}

{% include fill.html prima="La forza è" tipo="drop" opts="attrattiva|repulsiva" ok="repulsiva" dopo="." s="Le due cariche hanno lo stesso segno." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Fra due cariche $q$ a distanza $r$ c'è una forza $F$. Metti in ordine le situazioni seguenti, dalla forza più piccola alla più grande.

{% capture _d %}[
{"t":"$q \\text{ e } q,\\ \\ \\text{distanza } 2r$","pos":0},
{"t":"$3q \\text{ e } q,\\ \\ \\text{distanza } 3r$","pos":1},
{"t":"$q \\text{ e } q,\\ \\ \\text{distanza } r$","pos":2},
{"t":"$2q \\text{ e } q,\\ \\ \\text{distanza } r$","pos":3},
{"t":"$q \\text{ e } q,\\ \\ \\text{distanza } r/2$","pos":4}
]{% endcapture %}
{% include order.html id="rie-ord-forza" dati=_d direz="dalla forza più piccola alla più grande" %}
{% include ex-sol.html %}
Le forze valgono, nell'ordine, $F/4$, $F/3$, $F$, $2F$ e $4F$: la carica entra al numeratore, la distanza al quadrato al denominatore.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Raddoppiamo entrambe le cariche e anche la loro distanza. La forza fra loro
{% capture _o %}[
{"v":"a","t":"raddoppia"},
{"v":"b","t":"quadruplica"},
{"v":"c","t":"resta la stessa"},
{"v":"d","t":"si dimezza"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-raddoppio" opts=_o ok="c" s="Il prodotto delle cariche diventa $4$ volte più grande, e anche $r^2$ diventa $4$ volte più grande: i due effetti si compensano." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR4" %}
Nell'atomo di idrogeno l'elettrone e il protone distano circa $5{,}3\times10^{-11}\ \text m$. Quanto vale la forza con cui si attraggono?

{% include fill-multi.html testo="$F \approx$ [8,2|8.2|8,20|8.20] $\times10^{-8}$ N" s="$F = k\dfrac{e^2}{r^2} = 9\times10^{9}\cdot\dfrac{(1{,}6\times10^{-19})^2}{(5{,}3\times10^{-11})^2}\ \text N \approx 8{,}2\times10^{-8}\ \text N$. Sembra pochissimo, ma su una particella di massa $9{,}1\times10^{-31}\ \text{kg}$ è una forza enorme." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR5" %}
Luca deve calcolare la forza fra due cariche di $2\ \text{nC}$ e $3\ \text{nC}$ a $10\ \text{cm}$ di distanza. Ecco la sua soluzione:

> *$F = 9\times10^{9}\cdot\dfrac{2\times10^{-9}\cdot 3\times10^{-9}}{0{,}1} = 5{,}4\times10^{-7}\ \text N$.*

{% capture _r %}Luca ha diviso per $r = 0{,}1\ \text m$ invece che per $r^2 = 0{,}01\ \text m^2$. Il risultato giusto è $F = 9\times10^{9}\cdot\dfrac{6\times10^{-18}}{0{,}01}\ \text N = 5{,}4\times10^{-6}\ \text N$, dieci volte più grande.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-err-luca" tipo="errore"
   domanda="Dove ha sbagliato Luca? Correggi il calcolo."
   risposta=_r %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR6" %}
Fra due protoni agiscono sia la forza elettrica sia quella gravitazionale. Quante volte la prima è più grande della seconda? (Usa $G = 6{,}67\times10^{-11}\ \text N\cdot\text m^2/\text{kg}^2$.)

{% include fill-multi.html testo="$F_{el}/F_{grav} \approx$ [1,2|1.2|1,24|1.24] $\times 10^{n}$, con $n =$ [36]" s="La distanza si semplifica: $\dfrac{F_{el}}{F_{grav}} = \dfrac{k\,e^2}{G\,m_p^2} = \dfrac{9\times10^{9}\cdot(1{,}6\times10^{-19})^2}{6{,}67\times10^{-11}\cdot(1{,}67\times10^{-27})^2} \approx 1{,}2\times10^{36}$, a qualunque distanza. Eppure nella vita di tutti i giorni sentiamo la gravità e non la forza elettrica: perché la materia è quasi perfettamente neutra." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR7" %}
Una carica $+q$ è nel punto $x = 0$, una carica $+4q$ nel punto $x = 3\ \text m$. In quale punto fra le due bisogna mettere una terza carica perché la forza totale su di essa sia zero?

{% include num.html id="rieNumEquilibrio" valore="1" unit="m" tol="2" %}
<div style="clear:both"></div>
{% include ex-sol.html %}
Nel punto $x$ le due forze devono avere lo stesso modulo: $k\dfrac{q\,Q}{x^2} = k\dfrac{4q\,Q}{(3-x)^2}$. La carica $Q$ si semplifica, e quindi la risposta non dipende né dal suo valore né dal suo segno: $(3-x)^2 = 4x^2$, cioè $3 - x = 2x$, e $x = 1\ \text m$. Ha senso: il punto è più vicino alla carica più piccola.
{% include ex-sol-end.html %}

### Il campo elettrico

{% include ex.html diff=1 %}
Trascina ciascuna grandezza nella colonna giusta.

{% capture _s %}[
{"t":"forza","c":0},{"t":"campo elettrico","c":0},{"t":"accelerazione","c":0},
{"t":"carica","c":1},{"t":"energia potenziale","c":1},{"t":"potenziale","c":1},{"t":"energia cinetica","c":1},{"t":"differenza di potenziale","c":1}
]{% endcapture %}
{% include sort.html id="rie-sort-vett" dati=_s col0="Grandezze vettoriali" col1="Grandezze scalari" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Collega ciascuna grandezza alla sua formula e alla sua unità di misura.

{% capture _d %}[
{"l":"Forza fra due cariche","m":"$k\\,\\dfrac{|q_1 q_2|}{r^2}$","r":"N"},
{"l":"Campo elettrico","m":"$k\\,\\dfrac{|Q|}{r^2}$","r":"N/C"},
{"l":"Energia potenziale","m":"$k\\,\\dfrac{Q\\,q}{r}$","r":"J"},
{"l":"Potenziale","m":"$k\\,\\dfrac{Q}{r}$","r":"V"}
]{% endcapture %}
{% include match.html id="rie-match-formule" dati=_d col1="Grandezza" col2="Formula" col3="Unità" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include frayer.html id="rie-frayer-campo" termine="Campo elettrico" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include calc-margin.html id="calcElR8" %}
Quanto vale il campo elettrico a $2\ \text m$ da una carica $Q = +8\times10^{-6}\ \text C$? Verso dove punta?

{% include fill-multi.html testo="$E =$ [18000|18 000] N/C" s="$E = k\dfrac{\lvert Q\rvert}{r^2} = 9\times10^{9}\cdot\dfrac{8\times10^{-6}}{4}\ \text{N/C} = 18\,000\ \text{N/C}$." %}

{% include fill.html prima="Il campo punta" tipo="drop" opts="verso la carica|lontano dalla carica" ok="lontano dalla carica" dopo="." s="La carica è positiva: una carica di prova positiva ne sarebbe respinta." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Il campo elettrico si misura in N/C. Usando la formula $V = E\,r$, però, se ne può trovare un'altra unità di misura, equivalente. Costruiscile tutte e due.

{% capture _u %}[
{"p":"Unità di E, ricavata da E = F/q","c":"N/C"},
{"p":"Unità di E, ricavata da V = E·r","c":"V/m"}
]{% endcapture %}
{% include unitbuild.html id="rie-ub-campo" domande=_u palette="N|C|V|m|J|·|/" soggetto="E" %}
{% include ex-sol.html %}
Da $E = F/q$ l'unità è N/C; da $V = E\,r$ si ricava $E = V/r$, cioè V/m. Sono la stessa unità: $1\ \text{V/m} = 1\ \dfrac{\text{J/C}}{\text m} = 1\ \dfrac{\text{N}\cdot\text m}{\text C\cdot\text m} = 1\ \text{N/C}$. Nei laboratori si usa quasi sempre V/m.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Due cariche $+Q$ uguali sono a una certa distanza. Quanto vale il campo elettrico nel punto a metà strada? E se una delle due cariche fosse $-Q$?
{% capture _o %}[
{"v":"a","t":"zero in entrambi i casi"},
{"v":"b","t":"zero con due cariche uguali; il doppio del campo di una sola carica, diretto verso $-Q$, con cariche opposte"},
{"v":"c","t":"il doppio del campo di una sola carica in entrambi i casi"},
{"v":"d","t":"il doppio con cariche uguali, zero con cariche opposte"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-meta" opts=_o ok="b" s="Con due cariche uguali, a metà strada i due campi hanno lo stesso modulo e versi opposti, e si annullano. Con $+Q$ e $-Q$ puntano tutti e due verso $-Q$ (lontano dalla positiva, verso la negativa) e si sommano. Per il potenziale succede esattamente il contrario: attento a non confonderli!" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include def-compare.html id="rie-dc-campo"
   testo="Il campo elettrico in un punto è…"
   link="#il-vettore-campo-elettrico"
   label="Confronta con il paragrafo sul vettore campo elettrico" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Dalla formula del modulo del campo, $E = k\,\dfrac{Q}{r^2}$, isola $r$: ti servirà per trovare a quale distanza da una carica il campo ha un certo valore.

{% include invert.html id="rie-inv-campo-r" variabili="E|k|Q|r" sinistra="E" destra="k*Q/r/r" obiettivo="r" radice="1" %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR9" %}
Una carica $+Q$ è nel punto $x = 0$ e una carica $+9Q$ nel punto $x = 4\ \text m$. In quale punto fra le due il campo elettrico è zero?

{% include num.html id="rieNumCampoZero" valore="1" unit="m" tol="2" %}
<div style="clear:both"></div>
{% include ex-sol.html %}
I due campi hanno versi opposti; devono avere lo stesso modulo: $k\dfrac{Q}{x^2} = k\dfrac{9Q}{(4-x)^2}$, cioè $(4-x)^2 = 9x^2$, $4 - x = 3x$, $x = 1\ \text m$.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Perché due linee di campo elettrico non si incrociano mai? E perché in un campo uniforme sono parallele ed equidistanti?
{% capture _r %}In ogni punto il campo elettrico è un solo vettore, con una sola direzione: se due linee si incrociassero, nel punto d'incrocio il campo avrebbe due direzioni diverse. In un campo uniforme il vettore ha la stessa direzione dappertutto, quindi le linee sono parallele; e ha lo stesso modulo dappertutto, quindi le linee sono ugualmente fitte, cioè equidistanti.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-linee" tipo="spiega" domanda="Spiegalo con le tue parole." risposta=_r %}
{% include ex-end.html %}

### Energia e potenziale

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="Il potenziale elettrico è una grandezza scalare." ok=true s="Sì: per questo, con più cariche, i potenziali si sommano con una semplice somma algebrica." %}
{% include tf.html q="L'energia potenziale di due cariche positive è negativa." ok=false s="No: le cariche hanno lo stesso segno, quindi il prodotto Qq è positivo, e anche U. Due cariche che si respingono non sono legate." %}
{% include tf.html q="Il potenziale in un punto non dipende dalla carica di prova che ci mettiamo." ok=true s="Sì: V = U/q dipende solo dalle cariche che lo generano e dalla distanza." %}
{% include tf.html q="Le superfici equipotenziali sono parallele alle linee di campo." ok=false s="No: sono sempre perpendicolari." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include calc-margin.html id="calcElR10" %}
Una carica $Q = +6\times10^{-9}\ \text C$ è nel vuoto. Quanto vale il potenziale a $3\ \text m$ da lei? E l'energia potenziale di una carica $q = +2\times10^{-6}\ \text C$ messa in quel punto?

{% include fill-multi.html testo="$V =$ [18] V, $U =$ [36] $\times10^{-6}$ J" s="$V = k\dfrac{Q}{r} = 9\times10^{9}\cdot\dfrac{6\times10^{-9}}{3}\ \text V = 18\ \text V$, e $U = q\,V = 2\times10^{-6}\cdot 18\ \text J = 36\times10^{-6}\ \text J$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Attorno a una carica positiva $Q$ ci sono quattro punti. Ordinali dal potenziale più basso al più alto.

{% capture _d %}[
{"t":"$4\\ \\text m \\text{ da } Q$","pos":0},
{"t":"$3\\ \\text m \\text{ da } Q$","pos":1},
{"t":"$2\\ \\text m \\text{ da } Q$","pos":2},
{"t":"$1\\ \\text m \\text{ da } Q$","pos":3}
]{% endcapture %}
{% include order.html id="rie-ord-pot" dati=_d direz="dal potenziale più basso al più alto" %}
{% include ex-sol.html %}
$V = k\,Q/r$ con $Q > 0$: il potenziale è più alto vicino alla carica. Attorno a una carica negativa l'ordine sarebbe esattamente il contrario.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR11" %}
Due cariche, $Q_1 = +2\times10^{-6}\ \text C$ e $Q_2 = -1\times10^{-6}\ \text C$, sono a $2\ \text m$ di distanza. Quanto vale il potenziale nel punto a metà strada?

{% include fill-multi.html testo="$V_1 =$ [18000|18 000] V, $V_2 =$ [-9000|−9000|-9 000|−9 000] V, $V_{tot} =$ [9000|9 000] V" s="Ciascuna carica è a $1\ \text m$ dal punto: $V_1 = 9\times10^{9}\cdot 2\times10^{-6}\ \text V = 18\,000\ \text V$, $V_2 = 9\times10^{9}\cdot(-1\times10^{-6})\ \text V = -9000\ \text V$, e sommandoli con il segno $V_{tot} = 9000\ \text V$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Due cariche positive uguali sono ferme, tenute a una certa distanza. La loro energia potenziale è positiva. Che cosa significa?
{% capture _o %}[
{"v":"a","t":"che si attraggono"},
{"v":"b","t":"che per avvicinarle ancora bisogna spendere energia, e che lasciate libere si allontanano, acquistando energia cinetica"},
{"v":"c","t":"che sono legate, come la Terra e la Luna"},
{"v":"d","t":"niente: il segno di $U$ non ha significato fisico"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-U-positiva" opts=_o ok="b" s="Si respingono: lasciate libere si allontanano, e la loro energia potenziale si trasforma in energia cinetica, fino a $U = 0$ quando sono infinitamente lontane. Sono le cariche di segno opposto, con $U < 0$, a essere legate." %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Una carica di prova si sposta lungo una superficie equipotenziale. Spiega perché la sua energia potenziale non cambia, e usa questo fatto per spiegare perché le superfici equipotenziali sono perpendicolari alle linee di campo.
{% capture _r %}Su una superficie equipotenziale $V$ è lo stesso in ogni punto, quindi anche $U = q\,V$ non cambia. Se il campo avesse una componente lungo la superficie, una carica lasciata libera sarebbe spinta lungo la superficie e accelererebbe, guadagnando energia cinetica: l'energia potenziale dovrebbe diminuire, ma su quella superficie è costante. Quindi il campo non ha componenti lungo la superficie: è perpendicolare a essa, e così anche le linee di campo.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-equipot" tipo="spiega" domanda="Scrivi la tua spiegazione." risposta=_r %}
{% include ex-end.html %}

### Il moto di una carica in un campo elettrico

{% include ex.html diff=1 %}
{% capture _q %}[
{"t":"In un campo elettrico, un protone e un elettrone subiscono forze con lo stesso modulo.","ok":true,"s":"Sì: le loro cariche hanno lo stesso valore assoluto $e$."},
{"t":"In un campo elettrico, un protone e un elettrone hanno la stessa accelerazione.","ok":false,"s":"No: $a = \\dfrac{q}{m}\\,E$, e l'elettrone ha una massa circa $1800$ volte più piccola."},
{"t":"Una carica che si muove liberamente in un campo elettrico conserva la sua energia meccanica.","ok":true,"s":"Sì: l'energia potenziale persa si trasforma in energia cinetica, e la somma resta la stessa."},
{"t":"Una carica lasciata libera si muove anche se tutti i punti attorno a lei hanno lo stesso potenziale.","ok":false,"s":"No: senza differenza di potenziale l'energia potenziale non può diminuire, e non c'è niente che la metta in moto. È il caso degli uccelli sul filo."}
]{% endcapture %}
{% include quiz.html domande=_q id="q-rie-moto" senza_esempi="true" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include fill.html prima="Un protone lasciato libero in un campo elettrico si muove verso i punti a potenziale più" tipo="drop" opts="alto|basso" ok="basso" dopo="," s="Per una carica positiva U = qV diminuisce dove V diminuisce." %}

{% include fill.html prima="un elettrone verso i punti a potenziale più" tipo="drop" opts="alto|basso" ok="alto" dopo="." s="Per una carica negativa U = qV diminuisce dove V aumenta." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include calc-margin.html id="calcElR12" %}
Un elettrone si trova in un campo elettrico $E = 100\ \text{N/C}$. Quanto vale il modulo della forza che subisce?

{% include fill-multi.html testo="$F =$ [1,6|1.6] $\times10^{-17}$ N" s="$F = e\,E = 1{,}6\times10^{-19}\cdot 100\ \text N = 1{,}6\times10^{-17}\ \text N$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR13" %}
Nell'esercizio precedente, quanto vale l'accelerazione dell'elettrone? E il suo peso, confrontato con la forza elettrica?

{% include fill-multi.html testo="$a \approx$ [1,8|1.8|1,76|1.76] $\times10^{13}$ m/s², peso $mg \approx$ [8,9|8.9|8,92|8.92] $\times10^{-30}$ N" s="$a = \dfrac{F}{m_e} = \dfrac{1{,}6\times10^{-17}}{9{,}1\times10^{-31}}\ \text{m/s}^2 \approx 1{,}8\times10^{13}\ \text{m/s}^2$. Il peso è $m_e\,g = 9{,}1\times10^{-31}\cdot 9{,}8\ \text N \approx 8{,}9\times10^{-30}\ \text N$: più di mille miliardi di volte più piccolo della forza elettrica, anche in un campo debole come questo. Per questo, per elettroni e protoni, il peso si trascura sempre." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% capture _r %}La lastra $A$ è negativa, quindi il potenziale è più basso vicino ad $A$ e più alto vicino a $B$. La carica è negativa: la sua energia potenziale $U = q\,V$ è più bassa dove $V$ è più alto, cioè vicino a $B$. Va quindi verso $B$, la lastra positiva, da cui è attratta: lo stesso risultato che si ottiene ragionando con le forze. Puoi controllarlo nel simulatore dello scivolo, scegliendo «A negativa, B positiva» e la carica negativa.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-prevedi-scivolo" tipo="prevedi"
   domanda="Fra due lastre, $A$ è negativa e $B$ è positiva. In mezzo lasciamo libera una carica negativa, ferma. Verso quale lastra andrà? Ragiona con il potenziale e con l'energia potenziale, non con le forze."
   risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Giulia scrive: *«Un elettrone fermo nel punto $A$, a $200\ \text V$, lasciato libero va verso il punto $B$, a $50\ \text V$, perché le cariche vanno sempre verso il potenziale più basso.»*

{% capture _r %}Vanno verso il potenziale più basso solo le cariche positive. L'elettrone è negativo: la sua energia potenziale $U = q\,V$ è più bassa dove $V$ è più alto, quindi va nel verso opposto a $B$, verso potenziali più alti di $200\ \text V$. Ciò che vale per tutte le cariche è che vanno verso l'energia potenziale più bassa.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-err-giulia" tipo="errore" domanda="Che cosa c'è di sbagliato nel ragionamento di Giulia?" risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR14" %}
Una carica $q = -3\times10^{-6}\ \text C$ va dal punto $A$, a potenziale $100\ \text V$, al punto $B$, a potenziale $400\ \text V$. Quanto vale la differenza di potenziale? Di quanto cambia l'energia potenziale della carica?

{% include fill-multi.html testo="$\Delta V =$ [300|+300] V, $\Delta U =$ [-9|−9] $\times10^{-4}$ J" s="$\Delta V = V_B - V_A = 400\ \text V - 100\ \text V = +300\ \text V$. $\Delta U = q\,\Delta V = -3\times10^{-6}\cdot 300\ \text J = -9\times10^{-4}\ \text J$: l'energia potenziale diminuisce, quindi la carica può fare questo spostamento da sola, e guadagna $9\times10^{-4}\ \text J$ di energia cinetica." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR15" %}
Un elettrone parte da fermo e attraversa una differenza di potenziale di $100\ \text V$. Con quale velocità arriva?

{% include fill-multi.html testo="$K =$ [1,6|1.6] $\times10^{-17}$ J, $v \approx$ [5,9|5.9|5,93|5.93] $\times10^{6}$ m/s" s="L'energia potenziale persa si trasforma in energia cinetica: $K = e\,\lvert\Delta V\rvert = 1{,}6\times10^{-19}\cdot 100\ \text J = 1{,}6\times10^{-17}\ \text J$. Da $K = \dfrac12 m_e v^2$: $v = \sqrt{\dfrac{2K}{m_e}} = \sqrt{\dfrac{3{,}2\times10^{-17}}{9{,}1\times10^{-31}}}\ \text{m/s} \approx 5{,}9\times10^{6}\ \text{m/s}$, circa il $2\%$ della velocità della luce, con appena $100\ \text V$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR16" %}
Una gocciolina d'olio di massa $1{,}6\times10^{-15}\ \text{kg}$ resta ferma fra due lastre orizzontali quando il campo vale $E = 4{,}9\times10^{4}\ \text{N/C}$. Quanti elettroni ha in eccesso?

{% include num.html id="rieNumMillikan" valore="2" unit="elettroni" tol="0" %}
<div style="clear:both"></div>
{% include ex-sol.html %}
Se la goccia è ferma, $\lvert q\rvert\,E = m\,g$, quindi $\lvert q\rvert = \dfrac{m\,g}{E} = \dfrac{1{,}6\times10^{-15}\cdot 9{,}8}{4{,}9\times10^{4}}\ \text C = 3{,}2\times10^{-19}\ \text C$, cioè $\dfrac{3{,}2\times10^{-19}}{1{,}6\times10^{-19}} = 2$ elettroni.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Fra due lastre cariche, un elettrone parte da fermo vicino alla lastra negativa e, nello stesso istante, un protone parte da fermo vicino alla lastra positiva. Le due particelle vanno l'una verso l'altra. Dove si incontrano? (Trascura la forza fra le due particelle.)
{% capture _o %}[
{"v":"a","t":"esattamente a metà strada"},
{"v":"b","t":"vicinissimo alla lastra negativa"},
{"v":"c","t":"vicinissimo alla lastra positiva"},
{"v":"d","t":"non si incontrano mai"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-incontro" opts=_o ok="c" s="Le forze hanno lo stesso modulo $e\,E$, ma l'elettrone ha una massa circa $1800$ volte più piccola, e quindi un'accelerazione circa $1800$ volte più grande. Partendo insieme da fermi, nello stesso tempo l'elettrone percorre una distanza circa $1800$ volte più lunga di quella del protone: si incontrano quasi addosso alla lastra positiva, da cui il protone si è appena staccato." %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Un protone e un elettrone, partendo da fermi, sono accelerati dalla stessa differenza di potenziale. Quante volte la velocità finale dell'elettrone è più grande di quella del protone?
{% capture _o %}[
{"v":"a","t":"circa $1800$ volte"},
{"v":"b","t":"circa $43$ volte"},
{"v":"c","t":"sono uguali"},
{"v":"d","t":"circa $2$ volte"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-velocita" opts=_o ok="b" s="Le due particelle acquistano la stessa energia cinetica $K = e\,\lvert\Delta V\rvert$. Da $K = \dfrac12 m v^2$, la velocità va come $1/\sqrt m$: il rapporto delle velocità è $\sqrt{m_p/m_e} = \sqrt{1836}\approx 43$." %}
{% include ex-end.html %}
