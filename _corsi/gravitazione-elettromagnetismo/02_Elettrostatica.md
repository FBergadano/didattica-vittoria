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

È essenziale notare che questo fenomeno non ha niente a che fare con la forza gravitazionale. È per questo che possiamo comprendere l'esistenza di una forza completamente nuova e diversa. Questa forza, che studieremo nel dettaglio in questo capitolo, è la **forza elettrica**.

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
<!-- {% include margin-note.html testo="L'atomo è quasi tutto vuoto"%}
Quasi tutta la massa dell'atomo è concentrata nel nucleo, che però è circa centomila volte più piccolo dell'atomo intero. Gli elettroni si muovono attorno al nucleo in uno spazio enorme rispetto alle loro dimensioni, e tutto il resto è vuoto. Se un atomo fosse grande come la cupola di San Pietro, il nucleo sarebbe un granello di sale al centro della cupola.
{% include margin-note-end.html %} -->

{% include margin-note.html testo="Gli elettroni si spostano, i protoni no"%}
Questa differenza ha una conseguenza importante. I protoni sono pesanti e stanno nel nucleo, tenuti insieme ai neutroni dalle forze nucleari; gli elettroni sono leggerissimi e occupano la parte esterna dell'atomo. Per questo, quando due corpi si scambiano carica elettrica, sono gli elettroni a passare dall'uno all'altro, mentre i protoni restano al loro posto. Lo vedremo accadere in tutti i fenomeni di questo capitolo.
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
I metalli sono in genere ottimi conduttori (argento, rame e oro fra i migliori); vetro, gomma, plastica e aria secca sono invece buoni isolanti. È per questo che i fili elettrici sono fatti di rame e rivestiti di plastica. Il miglior conduttore in assoluto è l'oro; il miglior isolante è il teflon (o il vuoto, che però non è a tutti gli effetti “un materiale”).
{% include margin-note-end.html %}

Osserva l'animazione seguente: nel conduttore (ferro) alcuni elettroni sono liberi di muoversi fra i nuclei; nell'isolante (legno), invece, ogni elettrone orbita sempre e soltanto attorno al proprio nucleo. Poi trascina la carica vicino ai due materiali e confronta che cosa succede.

{% include lab-virtuali/conduttore-isolante-lab.html %}

{% include box-imp.html testo="Conduttori e Isolanti" %}
I conduttori sono quei materiali che presentano al loro interno cariche libere di muoversi. Gli isolanti sono quei materiali che non presentano cariche libere di muoversi.
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

Ci sono diversi modi in cui un corpo può **cambiare** la sua carica. Questo consiste sostanzialmente nel trasferimento di particelle cariche da un corpo a un altro ed è un fenomeno che si chiama <definizione>elettrizzazione</definizione>.

È essenziale osservare che, per quanto la carica di un corpo cambi, <u>la carica dell'Universo rimane invariata</u>. Vale a dire, se un corpo acquista carica negativa significa che un altro corpo ne ha acquistata di positiva.

{% include box-imp.html testo="Conservazione della carica" %}
La carica non si crea e non si distrugge: semplicemente, può passare da un corpo a un altro.
{% include box-end.html %}

{% include spoiler.html testo="Qual è la carica dell'Universo?" %}
Non lo sappiamo con certezza, ma è probabile che l'Universo sia sostanzialmente neutro elettricamente. Infatti, se ci fosse un eccesso di carica positiva o negativa, si dovrebbero osservare delle interazioni tra pianeti o galassie, che invece non osserviamo. A dominare la dinamica di questi corpi sembrerebbe essere solo la gravità, il che significa che questi corpi sono sostanzialmente neutri.

In effetti, se la Terra per qualche motivo dovesse caricarsi elettricamente, è molto probabile che finiremmo per scontrarci con un pianeta vicino o per andare dritti nel Sole. 
{% include spoiler-end.html %}

### Elettrizzazione per strofinio

Il fenomeno che abbiamo osservato all'inizio del capitolo ([rivedi l'esperimento](#electrisation-lab)), per cui un palloncino strofinato su un maglione di lana diventa elettricamente attivo, è noto come <definizione>elettrizzazione per strofinio</definizione>.
{% include box-imp.html testo="Elettrizzazione per strofinio" %}
L'elettrizzazione per strofinio è il fenomeno per cui, strofinando un corpo inizialmente neutro su un altro corpo, i **due** corpi si caricano elettricamente.
{% include box-end.html %}
Ci sono tre caratteristiche essenziali di questo fenomeno:
1. gli elettroni si **trasferiscono** da uno dei due corpi all'altro corpo, mentre i protoni stanno fermi;
2. il corpo che ha **perso** elettroni si carica **positivamente**, quello che ha acquisito elettroni si carica **negativamente**;
3. la carica non è <u>né comparsa né scomparsa</u>: la carica totale rimane la stessa.

Alcuni materiali, come il vetro, quando vengono strofinati, **perdono** elettroni (li cedono al panno di lana), caricandosi positivamente. Altri materiali, invece, come la plastica o l'ambra, **acquisiscono** elettroni quando vengono strofinati, e perciò si caricano negativamente.

Il fenomeno è molto facile da osservare negli isolanti (un palloncino, una penna di plastica, una bacchetta di vetro, ecc.), ma è più difficile con i conduttori. Il motivo è che quando teniamo in mano un materiale conduttore e lo strofiniamo su un panno di lana, la carica acquisita dal conduttore si scarica molto velocemente attraverso il nostro corpo fino alla Terra, che rappresenta un enorme bacino di carica.  
Per elettrizzare con un panno di lana un metallo dobbiamo quindi indossare un guanto di gomma, di modo da impedire alla carica di passare attraverso di noi.

Nella simulazione seguente John Travolta strofina il piede sul tappeto, e così si carica. Muovi la sua gamba per strofinare, poi avvicina la sua mano alla maniglia della porta: guarda che cosa succede alle cariche, e quando.

{% include phet-sim.html id="john-travoltage"
   src="https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_all.html"
   didascalia="Simulazione PhET: John si carica strofinando il piede sul tappeto e prende la scossa toccando la maniglia."
   altezza="500px" %}

{% include box-note.html testo="L'elettrizzazione per strofinio, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="Lo scotch che si respinge" %}
Attacca sul tavolo due strisce di nastro adesivo lunghe una decina di centimetri, poi staccale con uno strappo deciso e avvicinale tenendole sospese: si respingono. Strappandole dal tavolo si sono caricate per strofinio, ed essendo state trattate allo stesso modo hanno carica dello stesso segno. Ora attacca una striscia sopra l'altra e staccale di colpo: questa volta si attraggono, perché strofinandosi fra loro si sono caricate con segni opposti.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Lo scotch che fa i raggi X" %}
Una curiosità vera: nel 2008 alcuni ricercatori dell'Università della California hanno srotolato del nastro adesivo dentro una camera a vuoto, e hanno scoperto che lo strappo emette lampi di luce e perfino raggi X, abbastanza intensi da fare una radiografia di un dito! Le cariche separate dallo strappo sono così concentrate che, ricombinandosi, accelerano fortissimo gli elettroni. Nell'aria non succede: l'aria scarica le cariche prima che diventino così intense.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Le gomme di aerei e autocisterne" %}
Muovendosi, un aereo si carica per strofinio con l'aria, e un'autocisterna con la strada e con il carburante che sciaborda dentro di lei. Per evitare scintille pericolose, le gomme di aerei e camion contengono materiali conduttori (per esempio polvere di carbonio), che lasciano scendere a terra la carica appena si tocca il suolo.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Gli imballaggi antistatici" %}
I componenti elettronici (schede, memorie, processori) possono essere danneggiati da una piccola scintilla, che non sentiremmo nemmeno. Per questo vengono spediti in buste di plastica speciale, spesso grigio argentate o rosa, che non si caricano per strofinio e non lasciano accumulare carica sul componente.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Gli ammorbidenti" %}
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
Strofinando un palloncino su un maglione, il palloncino acquista $5\times10^{11}$ elettroni. Quale carica ha, alla fine, il maglione? (Usa $e=1{,}6\times10^{-19}\ \text C$.)
{% capture _oStrof %}[
{"v":"a","t":"$-8\\times10^{-8}\\ \\text C$"},
{"v":"b","t":"$+8\\times10^{-8}\\ \\text C$"},
{"v":"c","t":"$0\\ \\text C$, perché il maglione non c'entra"},
{"v":"d","t":"$+5\\times10^{11}\\ \\text C$"}
]{% endcapture %}
{% include mcq.html id="mcq-strofinio-maglione" opts=_oStrof ok="b" s="Il maglione ha perso proprio i $5\times10^{11}$ elettroni acquistati dal palloncino, quindi è carico positivamente: $Q=5\times10^{11}\times1{,}6\times10^{-19}\ \text C=+8\times10^{-8}\ \text C$. Il palloncino ha la carica opposta, $-8\times10^{-8}\ \text C$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include figura.html id="nastro-antistatico"
   src="/corsi/immagini/nastro-antistatico.jpeg"
   didascalia="Un nastro antistatico: è fissato alla carrozzeria dell'auto e tocca l'asfalto."
   larghezza="260px" %}

Capita spesso di scendere dall'auto, toccare la portiera e prendere la scossa. Per evitarlo si vendono dei nastri antistatici come quello della figura: una striscia che contiene un materiale conduttore (a volte è proprio una catenella di metallo), fissata sotto la carrozzeria in modo da strisciare sull'asfalto.
{% capture _rNastro %}Mentre l'auto viaggia, la carrozzeria si carica per strofinio con l'aria, e anche noi ci carichiamo strofinandoci sul sedile. Le gomme sono isolanti, quindi la carica non riesce a scendere a terra e resta sull'auto. Quando scendiamo e tocchiamo la portiera, il nostro corpo, che è un conduttore e poggia per terra, offre alla carica una strada verso la Terra: le cariche ci attraversano tutte insieme, e sentiamo la scossa. Il nastro antistatico collega sempre la carrozzeria al terreno con un conduttore, quindi la carica si scarica a poco a poco mentre si viaggia, e non resta niente da scaricare attraverso di noi.{% endcapture %}
{% include risposta-aperta.html id="ra-nastro-antistatico" tipo="spiega"
   domanda="Perché la scossa ci arriva proprio quando tocchiamo la portiera? E perché il nastro antistatico la evita?" risposta=_rNastro %}
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

Un conduttore può essere elettrizzato semplicemente venendo messo a contatto con un corpo carico. Questo processo si chiama <definizione>elettrizzazione per contatto</definizione>. Funziona come nella seguente animazione.

{% include lab-virtuali/carica-per-contatto-lab.html %}

{% include box-imp.html testo="Elettrizzazione per contatto" %}
L'elettrizzazione per contatto è il fenomeno per cui un conduttore neutro, messo a contatto con un corpo carico, si carica anch'esso: una parte della carica passa <u>dal corpo carico a quello neutro</u>, e alla fine i due corpi sono carichi <u>con lo stesso segno</u>.
{% include box-end.html %}

Il corpo che riceve la carica deve essere un conduttore: solo così la carica che arriva può spostarsi e distribuirsi su tutto il corpo. Il corpo carico, invece, può anche essere un isolante, come una bacchetta di vetro o di plastica strofinata. In questo caso, però, <u>cede soltanto la carica che si trova nei punti in cui tocca il conduttore</u>, perché in un isolante le cariche non possono spostarsi per raggiungere il punto di contatto. 

Inoltre, quanta carica finisce su ciascun corpo dipende dalla sua forma e dalle sue dimensioni: non è detto che la carica si divida esattamente a metà. Se i due corpi sono conduttori identici, cioè della stessa forma e delle stesse dimensioni, la carica si divide a metà, qualunque sia il metallo di cui sono fatti; in generale, invece, ne prende di più il corpo più grande. Ciò che è garantito è che, alla fine, **entrambi i corpi restano carichi con lo stesso segno**.

{% include box-note.html testo="L'elettrizzazione per contatto, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="Il pendolino elettrico" %}
Appendi a un filo di cotone una pallina di carta stagnola e avvicinale una penna di plastica strofinata: la pallina viene attratta, tocca la penna e subito dopo viene respinta, come se avesse cambiato idea. Prima la penna polarizza la pallina e la attira; poi, al contatto, le cede un po' della sua carica: ora le due hanno carica dello stesso segno, e si respingono.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="La verniciatura elettrostatica" %}
Le carrozzerie delle automobili si verniciano con uno spruzzo di goccioline di vernice cariche, che si caricano uscendo dall'ugello. La carrozzeria è collegata a terra, e le goccioline vengono attirate su di lei: si distribuiscono in modo uniforme e arrivano anche sui lati nascosti, che lo spruzzo non vede direttamente. In più, si spreca molta meno vernice.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="La verniciatura a polvere" %}
Molti oggetti di metallo, come le biciclette, i termosifoni o le ringhiere, sono verniciati con una polvere colorata invece che con una vernice liquida. I granelli di polvere vengono caricati e si attaccano all'oggetto, collegato a terra; poi l'oggetto viene messo in un forno, dove la polvere si scioglie e forma uno strato liscio e resistente.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Stampanti laser e fotocopiatrici" %}
Dentro una stampante laser c'è un cilindro che viene caricato, e un raggio laser lo scarica nei punti che devono restare bianchi. Le particelle di toner, una polvere nera finissima, si caricano strofinandosi e toccando altre particelle, e si attaccano al cilindro solo dove è rimasto carico, cioè dove ci sono le lettere. Poi il toner passa sul foglio e viene fissato dal calore: per questo i fogli escono dalla stampante tiepidi.
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qCont %}[
{"t":"Dopo il contatto, i due conduttori hanno cariche di segno opposto.","ok":false,"s":"No: alla fine sono carichi con lo stesso segno, quello del corpo che era carico all'inizio."},
{"t":"Toccando una sfera metallica neutra con una sfera metallica carica negativamente, alcuni elettroni passano dalla sfera carica a quella neutra.","ok":true,"s":"Sì: gli elettroni in eccesso si respingono e una parte di essi si sposta sulla sfera neutra."},
{"t":"Toccando una sfera metallica neutra con una sfera metallica carica positivamente, alcuni protoni passano sulla sfera neutra.","ok":false,"s":"No: i protoni non si spostano mai. Sono alcuni elettroni della sfera neutra a passare su quella positiva, che li attira: così la sfera prima neutra resta con più protoni che elettroni, cioè positiva."},
{"t":"La carica totale delle due sfere, dopo il contatto, è uguale a quella che avevano prima del contatto.","ok":true,"s":"Sì: la carica non si crea e non si distrugge, passa soltanto da un corpo all'altro."}
]{% endcapture %}
{% include quiz.html domande=_qCont id="q-contatto" senza_esempi="true" %}

Due sfere metalliche identiche hanno cariche $+8\times10^{-9}\ \text C$ e $-2\times10^{-9}\ \text C$. Vengono messe a contatto e poi separate. Quale carica ha ciascuna sfera alla fine?
{% capture _oCont %}[
{"v":"a","t":"$+3\\times10^{-9}\\ \\text C$ ciascuna"},
{"v":"b","t":"$+4\\times10^{-9}\\ \\text C$ e $-1\\times10^{-9}\\ \\text C$"},
{"v":"c","t":"$+5\\times10^{-9}\\ \\text C$ ciascuna"},
{"v":"d","t":"le stesse di prima: $+8\\times10^{-9}\\ \\text C$ e $-2\\times10^{-9}\\ \\text C$"}
]{% endcapture %}
{% include mcq.html id="mcq-contatto-sfere" opts=_oCont ok="a" s="La carica totale si conserva: $+8\times10^{-9}\ \text C-2\times10^{-9}\ \text C=+6\times10^{-9}\ \text C$. Poiché le sfere sono identiche, se la dividono a metà: $+3\times10^{-9}\ \text C$ ciascuna." %}
{% include box-end.html %}

### La Polarizzazione e l'Elettrizzazione per induzione

C'è però un modo ancora più sorprendente per cambiare la carica di un conduttore: senza nemmeno sfiorarlo. Guarda che cosa succede se avviciniamo un corpo carico (isolante o conduttore) a un conduttore neutro:

{% include lab-virtuali/polarizzazione-lab.html %}

Si vede che <u>le cariche di segno opposto al corpo ne sono attratte</u>, mentre <u>quelle di segno uguale ne sono respinte</u>. Pertanto, quelle di segno opposto si avvicinano e le altre si allontanano, <u>creando due zone separate di carica</u>. Questo processo è chiamato <definizione>polarizzazione</definizione>.

{% include box-imp.html testo="Polarizzazione" %}
La polarizzazione è la ridistribuzione delle cariche all'interno di un conduttore come conseguenza della presenza di un corpo carico esterno.
{% include box-end.html %}

È importante osservare che <u>il conduttore polarizzato resta neutro nel complesso</u>, cioè la sua carica globale è nulla. Infatti, a differenza del contatto, qui <u markdown="span">**nessuna carica passa da un corpo all'altro**</u>, e <u>la polarizzazione scompare non appena il corpo carico viene allontanato</u>.

{% include box-note.html testo="La polarizzazione, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="Il pettine che piega l'acqua" %}
Apri il rubinetto in modo che esca un filo d'acqua sottile e continuo. Pettinati i capelli asciutti con un pettine di plastica e avvicinalo al filo d'acqua, senza toccarlo: l'acqua si piega verso il pettine! Le molecole d'acqua sono neutre, ma il pettine carico le polarizza, e la parte più vicina, di segno opposto, viene attratta più di quanto venga respinta quella più lontana.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="La lattina che insegue il palloncino" %}
Appoggia una lattina vuota di metallo su un tavolo, sdraiata. Avvicinale un palloncino strofinato sui capelli: la lattina comincia a rotolare verso il palloncino, e se lo sposti la lattina lo segue. La lattina è un conduttore: il palloncino la polarizza, e la attira.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="I pezzettini di carta che saltano" %}
Strappa dei pezzettini di carta, piccolissimi, e avvicina una penna di plastica strofinata: i pezzettini saltano su e si attaccano alla penna. Qualcuno, dopo un po', schizza via: toccando la penna si è caricato con lo stesso segno, ed è stato respinto.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="I filtri elettrostatici" %}
Nei camini delle fabbriche e in molti purificatori d'aria, i fumi passano accanto a lastre o fili carichi. Le particelle di polvere e di fuliggine, anche se sono neutre, vengono polarizzate e attirate, e restano attaccate ai filtri invece di finire nell'aria che respiriamo.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Il panno cattura-polvere e la pellicola" %}
I panni cattura-polvere di tessuto sintetico si caricano strofinando le superfici, e attirano la polvere polarizzandola. Anche la pellicola trasparente per alimenti si carica quando la srotoliamo, e si attacca alle ciotole, anche di vetro, polarizzandole.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Il touchscreen" %}
Lo schermo dello smartphone è un touchscreen capacitivo: sotto il vetro c'è una griglia di elettrodi carichi, trasparenti. Il dito è un conduttore: avvicinandosi, modifica la distribuzione delle cariche negli elettrodi più vicini, e il telefono capisce dove lo stai toccando. Per questo un normale guanto, che è un isolante, non funziona sul touchscreen, mentre funzionano i guanti con le punte delle dita conduttive.
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

Per rendere permanente la separazione delle cariche serve un passaggio in più, che puoi vedere nella seguente animazione. Prova sia con la bacchetta negativa sia con quella positiva.

{% include lab-virtuali/induzione-permanente-lab.html %}

Osserviamo che se, mentre il corpo carico resta vicino, colleghiamo il conduttore a terra con un filo, alcuni elettroni si spostano attraverso il filo (mentre i protoni rimangono fermi, come al solito). Se poi stacchiamo il collegamento a terra *prima* di allontanare il corpo carico, il conduttore resta con una carica netta permanente. Questo fenomeno consiste nell'<definizione>elettrizzazione per induzione</definizione>.

Il segno della carica che resta dipende dal corpo carico che abbiamo avvicinato:
- se il corpo è **negativo**, respinge gli elettroni del conduttore, e alcuni di essi <u>scendono nel terreno</u>: il conduttore resta con meno elettroni che protoni, cioè carico **positivamente**;
- se il corpo è **positivo**, attira elettroni, e alcuni di essi <u>salgono dal terreno</u> verso il conduttore: il conduttore resta con più elettroni che protoni, cioè carico **negativamente**.

In entrambi i casi, il conduttore si carica con il segno <u>opposto</u> a quello del corpo che abbiamo avvicinato.

{% include box-note.html testo="L'elettrizzazione per induzione, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="L'elettroforo di Volta" %}
Nel 1775 [Alessandro Volta](https://it.wikipedia.org/wiki/Alessandro_Volta) inventò l'<definizione>elettroforo</definizione>, uno strumento per produrre carica a volontà, che puoi costruire anche tu: ti servono un vassoio di plastica (o di polistirolo), una teglia di alluminio e un bicchiere di plastica incollato al centro della teglia, come manico isolante. Strofina il vassoio con la lana, appoggiaci sopra la teglia tenendola per il manico, tocca la teglia con un dito, poi solleva la teglia: ora è carica, e avvicinandole un dito scocca una piccola scintilla. La teglia si è caricata per induzione: il vassoio carico ha polarizzato la teglia, e il dito ha fatto da collegamento a terra. Puoi ripetere l'operazione tantissime volte, senza strofinare di nuovo il vassoio.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="La messa a terra" %}
Nelle prese di casa, oltre ai due fori per la corrente, c'è un terzo contatto, collegato al filo giallo e verde: è la **messa a terra**. Collega l'involucro metallico degli elettrodomestici al terreno, così che se per un guasto l'involucro si caricasse, la carica scenderebbe subito a terra invece di passare attraverso chi lo tocca.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Il parafulmine" %}
Durante un temporale, la base delle nuvole è carica e induce sul terreno sotto di lei una carica di segno opposto. Il parafulmine è un'asta di metallo, appuntita e collegata a terra con un grosso cavo: la carica indotta si concentra sulla sua punta, e il fulmine sceglie di scaricarsi proprio lì, lungo un percorso sicuro, invece che sull'edificio.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Le autocisterne e i braccialetti antistatici" %}
Prima di scaricare il carburante, l'autocisterna viene collegata a terra con un cavo, per scaricare ogni carica accumulata durante il viaggio senza scintille. Per lo stesso motivo, chi monta o ripara i computer indossa un braccialetto antistatico, collegato a terra con un filo: il suo corpo non accumula carica, e non danneggia i componenti elettronici con una scintilla.
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

Ogni grandezza fisica deve essere misurabile, e quindi deve esistere (almeno idealmente) uno strumento per misurarla. Per misurare la carica elettrica, il primo strumento che si utilizzò fu un <definizione>elettroscopio a foglie</definizione>: uno strumento formato da un'asta conduttrice che attraversa un tappo isolante, terminando in alto con una sferetta metallica e, in basso, con due sottilissime foglioline metalliche, racchiuse in un contenitore di vetro per proteggerle dalle correnti d'aria.

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

Finché lo strumento è scarico, le due foglioline restano chiuse. Se un corpo carico tocca la sferetta, parte della sua carica si trasferisce lungo l'asta conduttrice fino alle foglioline, che si caricano dello stesso segno e, respingendosi a vicenda, si aprono a ventaglio. Il corpo carico può essere anche una bacchetta isolante, di vetro o di plastica: come abbiamo visto per l'elettrizzazione per contatto, cede alla sferetta la carica dei punti con cui la tocca.

Sorprendentemente, l'elettroscopio funziona anche se il corpo carico si limita ad **avvicinarsi** alla sferetta, senza toccarla: come abbiamo appena visto, basta che le cariche libere dell'asta si ridistribuiscano per induzione, concentrando carica dello stesso segno sulle foglioline. In questo caso, però, le foglioline si richiudono non appena il corpo viene allontanato.

Più carica è presente, più le foglioline si respingono e più si allontanano tra loro: l'angolo di apertura è quindi legato alla quantità di carica. 

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

Abbiamo quindi compreso che le cariche elettriche interagiscono tra loro, allontanandosi quando hanno lo stesso segno e avvicinandosi quando hanno segno opposto.  
Questo rivela la presenza di un nuovo tipo di forza, che si chiama **forza elettrica**. Nei termini della Fisica, diciamo che questa è una forza <u>repulsiva quando le due cariche hanno segno uguale</u> ed è <u>attrattiva quando le cariche hanno segno opposto</u>.
### Direzione e verso della forza elettrica
 Possiamo quindi comprendere fin da subito la direzione e il verso della forza elettrica: si disegna come nella seguente figura, a seconda dei casi.

{% include figure/direzione-forza-figura.html %}

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

Come abbiamo fatto per la forza gravitazionale, dobbiamo ora chiederci quali fattori determinino il modulo della forza elettrica, e in che modo. Charles-Augustin de Coulomb rispose a questa domanda nel 1785, usando esattamente lo stesso tipo di apparato con cui Cavendish avrebbe in seguito misurato la forza gravitazionale: una bilancia a torsione — con la differenza che, al posto di due masse, Coulomb utilizzò due sferette cariche elettricamente.

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

A differenza di $G$, il valore di $k$ è enorme: è proprio per questo che la forza elettrica è **molto più intensa** della forza gravitazionale a parità di distanza — così intensa che due cariche di appena $1\ \text{C}$ poste a $1\ \text{m}$ di distanza si respingerebbero con una forza di quasi $9$ miliardi di Newton, pari al peso di centinaia di migliaia di automobili.
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
Due cariche puntiformi, entrambe uguali a $+1\times10^{-6}\ \text C$, si trovano nel vuoto, con i centri a $1\ \text m$ di distanza.

{% include fill-multi.html testo="Il modulo della forza fra le due cariche è [9] $\times10^{-3}\ \text N$, e la forza è [repulsiva|repulsive]." s="$F = 9\times10^{9}\cdot\dfrac{1\times10^{-6}\cdot1\times10^{-6}}{1^2}\ \text N = 9\times10^{9}\cdot10^{-12}\ \text N = 9\times10^{-3}\ \text N$. Le cariche hanno lo stesso segno, quindi si respingono." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Due cariche puntiformi $q_1 = +2\times10^{-6}\ \text C$ e $q_2 = -3\times10^{-6}\ \text C$ si trovano nel vuoto, con i centri a $3\ \text m$ di distanza.

{% include fill-multi.html testo="Il modulo della forza è [6] $\times10^{-3}\ \text N$, e la forza è [attrattiva|attrattive]." s="$F = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot3\times10^{-6}}{3^2}\ \text N = \dfrac{54\times10^{-3}}{9}\ \text N = 6\times10^{-3}\ \text N$. Nel calcolo del modulo il segno meno non conta (c'è il valore assoluto); le cariche hanno segno opposto, quindi si attraggono." %}
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
Due cariche puntiformi $q_1 = +2\times10^{-6}\ \text C$ e $q_2 = -3\times10^{-6}\ \text C$ si trovano nel vuoto, con i centri a $30\ \text{cm}$ di distanza. Attenzione alle unità di misura!

{% include fill-multi.html testo="Il modulo della forza fra le due cariche è [0,6|0.6|0,60] N, e la forza è [attrattiva|attrattive]." s="$F = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot3\times10^{-6}}{(0{,}3)^2}\ \text N = \dfrac{54\times10^{-3}}{0{,}09}\ \text N = 0{,}6\ \text N$. Le cariche hanno segno opposto, quindi si attraggono. Attenzione a scrivere la distanza in metri: $30\ \text{cm} = 0{,}3\ \text m$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Due sferette con la stessa carica si respingono nel vuoto con una forza di $0{,}9\ \text N$ quando i loro centri distano $10\ \text{cm}$. Quanto vale la carica di ciascuna sferetta?
{% capture _oCoulQ %}[
{"v":"a","t":"$1\\times10^{-12}\\ \\text C$"},
{"v":"b","t":"$1\\times10^{-6}\\ \\text C$"},
{"v":"c","t":"$1\\times10^{-3}\\ \\text C$"},
{"v":"d","t":"$9\\times10^{-6}\\ \\text C$"}
]{% endcapture %}
{% include mcq.html id="mcq-coulomb-carica" opts=_oCoulQ ok="b" s="Le cariche sono uguali, quindi $F = k\,\dfrac{q^2}{r^2}$ e $q^2 = \dfrac{F\,r^2}{k} = \dfrac{0{,}9\cdot(0{,}1)^2}{9\times10^{9}}\ \text C^2 = 1\times10^{-12}\ \text C^2$. Ma questo è $q^2$: bisogna ancora estrarre la radice, $q = 1\times10^{-6}\ \text C$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Due ioni, immersi nell'acqua, hanno i centri a $1\ \text{nm}$ di distanza. A quale distanza dovrebbero trovarsi nel vuoto per attrarsi con la stessa forza? Guarda la tabella dei valori di $k$.
{% capture _oCoulW %}[
{"v":"a","t":"a $80\\ \\text{nm}$"},
{"v":"b","t":"a circa $9\\ \\text{nm}$"},
{"v":"c","t":"a $\\dfrac{1}{80}\\ \\text{nm}$"},
{"v":"d","t":"alla stessa distanza, $1\\ \\text{nm}$"}
]{% endcapture %}
{% include mcq.html id="mcq-coulomb-acqua" opts=_oCoulW ok="b" s="Nell'acqua $k$ è circa 80 volte più piccola che nel vuoto, quindi la forza è 80 volte più debole. Nel vuoto, per avere una forza 80 volte più debole bisogna che $r^2$ sia 80 volte più grande, cioè che $r$ sia $\sqrt{80}\approx 9$ volte più grande: circa $9\ \text{nm}$." %}
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
In un atomo di idrogeno un protone e un elettrone si attraggono sia con la forza elettrica sia con la forza gravitazionale. Quante volte la forza elettrica è più intensa di quella gravitazionale? Usa i valori di carica e massa della tabella di inizio capitolo, e $G = 6{,}67\times10^{-11}\ \text N\cdot\text m^2/\text{kg}^2$.

*Suggerimento:* scrivi il rapporto $F_{el}/F_g$. Che cosa succede alla distanza $r$?
{% capture _oPE %}[
{"v":"a","t":"circa $2\\times10^{3}$ volte"},
{"v":"b","t":"circa $2\\times10^{20}$ volte"},
{"v":"c","t":"circa $2\\times10^{39}$ volte"},
{"v":"d","t":"dipende dalla distanza fra protone ed elettrone"}
]{% endcapture %}
{% include mcq.html id="mcq-protone-elettrone" opts=_oPE ok="c" s="Entrambe le forze sono inversamente proporzionali a $r^2$, quindi nel rapporto la distanza si semplifica: $\dfrac{F_{el}}{F_g}=\dfrac{k\,e^2}{G\,m_p\,m_e}=\dfrac{8{,}99\times10^{9}\times(1{,}602\times10^{-19})^2}{6{,}67\times10^{-11}\times1{,}673\times10^{-27}\times9{,}109\times10^{-31}}\approx2\times10^{39}$. Un numero con trentanove zeri." %}
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

Finora abbiamo considerato solo due cariche. Ma cosa succede se su una carica $q$ agiscono contemporaneamente **più** cariche, ciascuna con la propria forza elettrica?

{% include box-imp.html testo="Principio di sovrapposizione degli effetti" %}
In presenza di più cariche, vale lo stesso <definizione>principio di sovrapposizione degli effetti</definizione> già visto per la forza gravitazionale: ogni carica esercita su $q$ la propria forza elettrica <u markdown="span">**esattamente come se le altre non ci fossero**</u>. La forza totale su $q$ è la somma *vettoriale* di tutte queste forze:

$$\vec F_{tot} = \vec F_1 + \vec F_2 + \dots$$

{% include box-end.html %}

Poiché le forze sono vettori, per sommarle non basta sommarne i moduli: vanno sommate **come vettori**, con la stessa regola del parallelogramma già vista per la somma di due vettori qualsiasi. L'unica accortezza in più, rispetto al caso gravitazionale, è che ogni singola forza può essere sia repulsiva sia attrattiva, a seconda del segno delle cariche coinvolte. Nel simulatore seguente puoi spostare le cariche e cambiarne valore e segno: guarda come cambiano le due forze su $q$, e la loro somma.

{% include lab-virtuali/sovrapposizione-lab.html id="sov-forza-elet" tipo="forza" fisica="elet" %}

Nella regola del parallelogramma, i moduli di $\vec F_1$ e $\vec F_2$ (rappresentati dalla lunghezza delle frecce) si ottengono con la legge di Coulomb:

$$
F_1 = k \frac{|Q_1\cdot q|}{r_1^2}, \qquad\qquad F_2 = k \frac{|Q_2\cdot q|}{r_2^2} 
$$

Prova tu stesso a rinfrescare la regola del parallelogramma, questa volta con le forze elettriche: ricorda che ogni forza può essere repulsiva o attrattiva, a seconda dei segni.

{% include esercizi/parallelogramma-coulomb.html %}

# Il Campo Elettrico

La legge di Coulomb ci dice ***quanto*** due cariche si attraggano. Ma, esattamente come per il caso della forza gravitazionale, possiamo cambiare leggermente la nostra prospettiva e chiederci <u markdown="span">cosa ci sia ***nello spazio in mezzo*** a due cariche che si attraggono</u>. Il primo che si pose questa domanda fu il fisico inglese [Michael Faraday](https://it.wikipedia.org/wiki/Michael_Faraday). La sua risposta si basa sul concetto di **campo vettoriale** che abbiamo già incontrato per la gravitazione (storicamente, il primo a inventare il concetto di campo fu proprio Faraday, per spiegare i suoi esperimenti sull'elettromagnetismo).

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

Per le cariche elettriche vale tutto questo, quasi parola per parola: basta sostituire la massa con la carica, e la legge di gravitazione universale con la legge di Coulomb. Possiamo quindi andare veloci, fermandoci solo sulle cose che cambiano.

{% include margin-note.html testo="Il telo, per le cariche" %}
Anche una carica modifica lo spazio attorno a sé. C'è però una differenza: le masse si attraggono sempre, quindi il telo si infossa sempre. Con le cariche, invece, la forza può essere attrattiva o repulsiva. Immagina di posare sul telo una pallina con carica positiva: una carica negativa sarebbe per lei una **buca**, in cui la pallina rotola dentro; una carica positiva sarebbe invece una **gobba**, da cui la pallina rotola via.
{% include margin-note-end.html %}

{% include box-imp.html testo="Il campo elettrico" %}
La modificazione dello spazio prodotta da una carica si chiama <definizione>campo elettrico</definizione> e si indica con $\vec E$. È una grandezza **vettoriale**: associa a ogni punto dello spazio un vettore, che dice con quale intensità, in quale direzione e in quale verso viene spinta una carica posta in quel punto.
{% include box-end.html %}

## Il vettore campo elettrico

Sappiamo che il campo elettrico $\vec E$ è una quantità vettoriale e che i vettori hanno tre caratteristiche: modulo, direzione e verso. Cominciamo studiando il modulo del vettore, poi analizzeremo la direzione e il verso.
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
Una carica $Q = +2\times10^{-6}\ \text C$ è nel vuoto. Quanto vale il campo elettrico a $3\ \text m$ dal suo centro?

{% include fill-multi.html testo="$E =$ [2000|2 000] N/C" s="$E = k\dfrac{\lvert Q\rvert}{r^2} = 9\times10^{9}\cdot\dfrac{2\times10^{-6}}{3^2}\ \text{N/C} = \dfrac{18\times10^{3}}{9}\ \text{N/C} = 2000\ \text{N/C}$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
In un punto il campo elettrico vale $2000\ \text{N/C}$. Quanto vale la forza su una carica $q = 3\times10^{-6}\ \text C$ posta in quel punto?

{% include fill-multi.html testo="$F =$ [6] $\times10^{-3}\ \text N$" s="Da $E = F/q$ si ricava $F = q\,E = 3\times10^{-6}\ \text C\cdot 2000\ \text{N/C} = 6\times10^{-3}\ \text N$." %}
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

Per il campo gravitazionale avevamo scelto che $\vec g$ avesse il verso della forza sulla massa esploratrice. Allo stesso modo, si sceglie che $\vec E$ abbia la direzione e il verso della forza che agirebbe sulla carica di prova, che è **positiva**. Quindi il campo generato da una carica positiva si allontana da essa, mentre quello generato da una carica negativa punta verso di essa:

{% include figure/figura-vettore-campo-e.html %}

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
In un punto il campo elettrico punta verso destra. In quel punto mettiamo un elettrone. In che verso è la forza che agisce su di lui?
{% capture _oCE1 %}[
{"v":"a","t":"verso destra, come il campo"},
{"v":"b","t":"verso sinistra"},
{"v":"c","t":"non c'è nessuna forza, perché il campo è generato da altre cariche"},
{"v":"d","t":"dipende dalla massa dell'elettrone"}
]{% endcapture %}
{% include mcq.html id="mcq-campo-elettrone" opts=_oCE1 ok="b" s="La carica dell'elettrone è negativa, quindi $\vec F = q\vec E$ ha verso opposto al campo: verso sinistra. Il campo indica il verso in cui verrebbe spinta una carica positiva." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
In uno stesso punto mettiamo, una volta, un protone e, un'altra volta, un elettrone. Che cosa si può dire delle forze che agiscono su di loro?
{% capture _oPE3 %}[
{"v":"a","t":"sono uguali in tutto"},
{"v":"b","t":"hanno lo stesso modulo e versi opposti"},
{"v":"c","t":"sull'elettrone la forza è molto più piccola, perché la sua massa è molto più piccola"},
{"v":"d","t":"hanno lo stesso verso, ma moduli diversi"}
]{% endcapture %}
{% include mcq.html id="mcq-protone-elettrone-campo" opts=_oPE3 ok="b" s="Il campo nel punto è lo stesso. Le due cariche hanno lo stesso valore assoluto, $e$, quindi $F = \lvert q\rvert E$ è uguale; ma hanno segno opposto, quindi le forze hanno versi opposti: quella sul protone nel verso del campo, quella sull'elettrone al contrario. La massa non c'entra con la forza (c'entrerà con l'accelerazione)." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una carica $Q = -4\times10^{-9}\ \text C$ è nel vuoto. Quanto vale il campo elettrico a $20\ \text{cm}$ dal suo centro? Attenzione alle unità di misura!

{% include fill-multi.html testo="$E =$ [900] N/C, e il campo punta [verso la carica|verso Q|verso la carica Q]." s="$r = 20\ \text{cm} = 0{,}2\ \text m$, quindi $E = 9\times10^{9}\cdot\dfrac{4\times10^{-9}}{(0{,}2)^2}\ \text{N/C} = \dfrac{36}{0{,}04}\ \text{N/C} = 900\ \text{N/C}$. La carica è negativa, quindi il campo punta verso di essa." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

### In presenza di più cariche

Anche per il campo elettrico vale il <definizione>principio di sovrapposizione degli effetti</definizione>, esattamente come per il campo gravitazionale.

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

Le linee del campo elettrico si definiscono esattamente come quelle del campo gravitazionale: in ogni punto sono tangenti al vettore $\vec E$, e la loro densità misura l'intensità del campo. Anche qui, però, cambia qualcosa.

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
Torna ancora una volta all'[animazione all'inizio del capitolo](#fig-bimbi-capelli). I capelli dei bambini non si sollevano a caso: si dispongono a raggiera, come i raggi del Sole.
{% capture _rBimbiLinee %}I bambini sono carichi, e i capelli hanno tutti carica dello stesso segno. Ogni capello è leggero e libero di muoversi, quindi si dispone nella direzione in cui lo spinge la forza elettrica, cioè lungo le linee del campo. Attorno a un corpo carico più o meno tondo, come una testa, le linee di campo sono radiali, come quelle di una singola carica: per questo i capelli si dispongono a raggiera.{% endcapture %}
{% include risposta-aperta.html id="ra-bimbi-linee" tipo="spiega"
   domanda="Perché i capelli si dispongono proprio a raggiera? Che cosa c'entrano le linee di campo?" risposta=_rBimbiLinee %}
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



# L'energia elettrica

Per la gravità, dopo forze e campi, eravamo passati al linguaggio dell'energia: le grandezze diventano scalari, e sommarle è molto più semplice che sommare vettori. Facciamo lo stesso per la forza elettrica, ancora una volta seguendo passo passo la strada già percorsa.

## L'energia potenziale elettrica

{% include box-ricorda.html testo="L'energia potenziale gravitazionale, in breve" %}
- La forza gravitazionale è centrale, quindi si può definire un'energia potenziale.
- Due masse $M$ ed $m$ a distanza $r$ immagazzinano un'energia potenziale $U = -G\,\dfrac{M\cdot m}{r}$, che si misura in joule: è il lavoro della forza gravitazionale quando le masse vengono allontanate.
- $U$ è negativa perché le masse si attraggono: sono "legate", e per separarle bisogna spendere energia. Vale zero quando le masse sono infinitamente lontane.
- Con più masse, le energie potenziali si sommano con una normale somma algebrica.
{% include box-end.html %}

{% include margin-note.html testo="Dalla gravità alle cariche" %}
Anche la forza elettrica è una forza centrale, quindi anche per due cariche si può definire un'energia potenziale: l'<definizione>energia potenziale elettrica</definizione>. Il ragionamento è lo stesso della gravità, con $k$ al posto di $G$ e le cariche al posto delle masse:

$$U = k\,\frac{Q\cdot q}{r}.$$

Nella formula le cariche vanno scritte **con il loro segno**, senza valore assoluto. E manca il segno meno che c'era nella formula gravitazionale: ora a decidere il segno di $U$ sono le cariche stesse.
{% include margin-note-end.html %}

{% include margin-note.html testo="Il segno di U" %}
- Se le due cariche hanno **segno opposto**, si attraggono, come due masse: il prodotto $Q\cdot q$ è negativo, e quindi anche $U$ è **negativa**. Proprio come per la gravità, le due cariche sono "legate": per separarle bisogna spendere energia.
- Se le due cariche hanno **lo stesso segno**, si respingono: il prodotto $Q\cdot q$ è positivo, e $U$ è **positiva**. Le due cariche sono come una molla compressa: se le lasciamo libere si allontanano, e l'energia immagazzinata diventa energia cinetica.

In entrambi i casi $U$ vale zero quando le cariche sono infinitamente lontane. Nella formula gravitazionale il segno meno serviva proprio a dire "le masse si attraggono sempre"; per le cariche, che possono anche respingersi, questo lavoro lo fanno i segni di $Q$ e di $q$.
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
- **Che cos'è:** l'energia immagazzinata da due cariche $Q$ e $q$ a distanza $r$, a causa della forza elettrica fra loro.
- **Formula:** $U = k\,\dfrac{Q\cdot q}{r}$, con le cariche scritte con il loro segno.
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
Due cariche puntiformi, $Q = +2\times10^{-6}\ \text C$ e $q = +3\times10^{-6}\ \text C$, sono nel vuoto a $3\ \text m$ di distanza. Quanto vale la loro energia potenziale?

{% include fill-multi.html testo="$U =$ [18] $\times10^{-3}\ \text J$" s="$U = k\dfrac{Q\cdot q}{r} = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot3\times10^{-6}}{3}\ \text J = 18\times10^{-3}\ \text J$. È positiva: le cariche si respingono." %}
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
Una carica $q = +1\times10^{-6}\ \text C$ si trova a $1\ \text m$ da una carica $Q_1 = +2\times10^{-6}\ \text C$ e a $2\ \text m$ da una carica $Q_2 = -2\times10^{-6}\ \text C$.

{% include fill-multi.html testo="$U_1 =$ [18] $\times10^{-3}\ \text J$, $U_2 =$ [-9|−9] $\times10^{-3}\ \text J$, $U_{tot} =$ [9] $\times10^{-3}\ \text J$" s="$U_1 = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot1\times10^{-6}}{1}\ \text J = 18\times10^{-3}\ \text J$; $U_2 = 9\times10^{9}\cdot\dfrac{(-2\times10^{-6})\cdot1\times10^{-6}}{2}\ \text J = -9\times10^{-3}\ \text J$. La somma, con i segni: $U_{tot} = 18\times10^{-3}\ \text J - 9\times10^{-3}\ \text J = 9\times10^{-3}\ \text J$." %}
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

Il potenziale non dipende dalla carica di prova, ma solo dalla carica $Q$ che lo genera (con il suo segno) e dalla distanza $r$ dal suo centro. Vicino a una carica positiva il potenziale è positivo, vicino a una carica negativa è negativo.
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
- **Che cos'è:** l'energia potenziale elettrica "per unità di carica di prova". Non dipende da $q$, proprio come il campo $\vec E$.
- **Formula:** $V = \dfrac{U}{q} = k\,\dfrac{Q}{r}$, con $Q$ scritta con il suo segno.
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
Una carica $Q = +2\times10^{-6}\ \text C$ è nel vuoto. Quanto vale il potenziale elettrico a $3\ \text m$ dal suo centro?

{% include fill-multi.html testo="$V =$ [6000|6 000] V" s="$V = k\dfrac{Q}{r} = 9\times10^{9}\cdot\dfrac{2\times10^{-6}}{3}\ \text V = 6000\ \text V$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Nel punto dell'esercizio precedente, dove il potenziale vale $6000\ \text V$, mettiamo una carica $q = +3\times10^{-6}\ \text C$. Quanto vale la sua energia potenziale?

{% include fill-multi.html testo="$U =$ [18] $\times10^{-3}\ \text J$" s="$U = q\,V = 3\times10^{-6}\ \text C\cdot 6000\ \text V = 18\times10^{-3}\ \text J$: lo stesso risultato che si ottiene con la formula $U = k\dfrac{Q\cdot q}{r}$." %}
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
A quale distanza da una carica $Q = +4\times10^{-9}\ \text C$ il potenziale vale $90\ \text V$?

{% include fill-multi.html testo="$r =$ [0,4|0.4|0,40] m" s="Da $V = k\dfrac{Q}{r}$ si ricava $r = k\dfrac{Q}{V} = 9\times10^{9}\cdot\dfrac{4\times10^{-9}}{90}\ \text m = \dfrac{36}{90}\ \text m = 0{,}4\ \text m$." %}
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
Un punto $P$ si trova a $1\ \text m$ da una carica $Q_1 = +2\times10^{-6}\ \text C$ e a $2\ \text m$ da una carica $Q_2 = -2\times10^{-6}\ \text C$. Quanto vale il potenziale in $P$?

{% include fill-multi.html testo="$V_1 =$ [18000|18 000] V, $V_2 =$ [-9000|−9000|-9 000|−9 000] V, $V_{tot} =$ [9000|9 000] V" s="$V_1 = 9\times10^{9}\cdot\dfrac{2\times10^{-6}}{1}\ \text V = 18\,000\ \text V$, $V_2 = 9\times10^{9}\cdot\dfrac{-2\times10^{-6}}{2}\ \text V = -9000\ \text V$. Sommandoli con il loro segno: $V_{tot} = 9000\ \text V$." %}
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

Come per la gravità, il potenziale si rappresenta con le <definizione>superfici equipotenziali</definizione>: l'insieme dei punti in cui il potenziale ha lo stesso valore. Valgono le stesse proprietà: sono in ogni punto **perpendicolari** alle linee di campo, e per una singola carica sono **sfere** concentriche alla carica (sul foglio, circonferenze), perché $V = k\,Q/r$ dipende solo dalla distanza.

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

{% comment %}
Da usare in questa sezione, dopo aver spiegato che le cariche positive vanno dal potenziale più alto a quello più basso (e le negative al contrario): una slide per un Verifica Subito.

{% include scorri-slide.html %}
Gli uccelli si posano tranquillamente sui fili dell'alta tensione, che hanno un potenziale di migliaia di volt rispetto al terreno, e non prendono la scossa.
{% capture _rUccelli %}Perché la carica si sposti attraverso un corpo serve una differenza di potenziale fra due punti del corpo. L'uccello tocca il filo con entrambe le zampe, e lo tocca soltanto: le due zampe sono quasi allo stesso potenziale, quindi attraverso il suo corpo non passa praticamente nessuna carica. Se invece toccasse contemporaneamente il filo e un palo collegato a terra, fra i due punti ci sarebbe una differenza di potenziale enorme, e la carica lo attraverserebbe: per questo è pericolosissimo per una persona su una scala che tocchi un filo.{% endcapture %}
{% include risposta-aperta.html id="ra-uccelli-filo" tipo="spiega"
   domanda="Perché gli uccelli posati sul filo non prendono la scossa? Che cosa succederebbe se l'uccello toccasse insieme il filo e il palo?" risposta=_rUccelli %}
{% include scorri-slide-end.html %}
{% endcomment %}

