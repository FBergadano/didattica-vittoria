---
layout: capitolo
title: "Il Calore"
corso: "termodinamica"
corso_titolo: "La Termodinamica"
materia: fisica
numero: 1
---

<cit autore="William Blake, Auguries of Innocence">
To see the world in a grain of sand
And a heaven in a wild flower
To hold infinity in the palm of your hand
And eternity in an hour.
</cit>
In questo capitolo studieremo nel dettaglio una delle forme di energia che abbiamo incontrato: il <definizione>calore</definizione>.  
Abbiamo già detto, nello scorso capitolo, che l'energia meccanica può convertirsi in calore per azione dell'attrito. Questa scoperta fu fatta dall'inglese [James Prescott Joule](https://it.wikipedia.org/wiki/James_Prescott_Joule): un mastro birraio che aveva bisogno di fare esperimenti sul calore per trovare il modo ottimale di raffreddare la birra. A lui (e alla birra) si deve un esperimento che è noto come <definizione>il mulinello di Joule</definizione>. Per questa esperienza, gli fu intitolato il nome dell'unità di misura dell'energia: il “joule”.

{% include figura.html id="james-prescott-joule"
   src="/corsi/immagini/james-prescott-joule.jpeg"
   didascalia="James Prescott Joule (1818–1889)."
   alt="Ritratto di James Prescott Joule"
   larghezza="220px" %}

Puoi ripetere il suo esperimento con la seguente animazione.

{% include lab-virtuali/mulinello-joule-lab.html %}

Mentre i pesi scendono, perdono **energia potenziale gravitazionale**. Le corde, srotolandosi, fanno girare il mulinello, che agita l'acqua. Ma l'acqua non continua a girare per sempre: l'attrito con le palette la rallenta e l'energia viene **dissipata**. E infatti il termometro sale: <u markdown="span">l'energia meccanica persa dai pesi è diventata **calore**, che ha scaldato l'acqua</u>. Più volte fai cadere i pesi, più la temperatura aumenta.

Joule comprese dunque la seguente cosa.

{% include box-imp.html testo="Il calore" %}
<u>Il calore</u> (simbolo $Q$) <u markdown="span">è una forma di energia che si **trasmette** da un corpo a un altro</u>. Pertanto, <u>essa si misura in joule</u> (simbolo J).  


{% include box-end.html %}
{% include spoiler.html testo="Joule e la birra: la storia" %}
{% include figure/joule-birra-figura.html %}

James Prescott Joule (1818–1889) non era un professore universitario: era il figlio di un ricco birraio di Salford, vicino a Manchester, e da giovane si ritrovò a dirigere la birreria di famiglia. Fare la birra è, in gran parte, una questione di temperature: il mosto, dopo essere stato bollito, va **raffreddato** al punto giusto prima di aggiungere il lievito, e durante la fermentazione la temperatura va tenuta sotto controllo. Un buon birraio, quindi, doveva saper scaldare e raffreddare con precisione, sprecando meno carbone (e meno soldi) possibile.

Per questo Joule si appassionò a una domanda molto concreta: *quanto* lavoro serve per produrre una certa quantità di calore, e viceversa? Diventò bravissimo a misurare le temperature, con termometri che apprezzavano differenze di pochi millesimi di grado (quelli del suo mulinello dovevano esserlo, visto che l'acqua si scaldava di una frazione di grado!), e fece i suoi esperimenti in casa e in birreria.

Quando presentò i suoi risultati, negli anni Quaranta dell'Ottocento, molti scienziati non gli diedero retta: chi era questo birraio che pretendeva di misurare differenze di temperatura così piccole? Ma uno di loro, il giovane William Thomson (il futuro Lord Kelvin, quello della scala di temperatura!), capì che Joule aveva ragione. Si racconta che i due si incontrarono di nuovo per caso in Svizzera, dove Joule era in viaggio di nozze: Joule aveva con sé un lungo termometro, con cui voleva misurare se l'acqua di una cascata fosse più calda in fondo che in cima. Cadendo, infatti, l'acqua perde energia potenziale, che alla fine si trasforma in calore, proprio come nel suo mulinello.
{% include spoiler-end.html %}

In questo capitolo vedremo ***quando*** e ***come*** il calore si può **trasmettere**.  
Cominciamo descrivendo ***quando*** il calore si può trasmettere, e per farlo abbiamo bisogno del concetto di <definizione>temperatura</definizione>.




<!-- Quello che io trovo bello di questo capitolo della Fisica è che esso svela quanto sia complesso e ricco il mondo che ci circonda: quello a cui siamo più abituati. Ci sorprende senza aver bisogno di osservare niente di più che ciò che abbiamo attorno. Impareremo che l'aria che respiriamo, il nostro corpo, i corpi che ci circondano --- dai granelli di sabbia alle stelle --- sono l'incontro di un numero inimmaginabile di minuscole particelle, che interagiscono tra loro dando luogo a un gomitolo così ingarbugliato che noi non saremo mai in grado di esaurirlo.  
Per me è stato bello scoprire questa parte della Fisica e mi ha donato mille stupori: spero possa essere un piccolo stupore anche per voi! -->

# La Temperatura

{% include box-imp.html testo="L'equilibrio termico"%}

Il calore si trasferisce tra due sistemi <u markdown="span">solo se tra di essi c'è una **differenza di temperatura**</u>. In particolare, il calore <u markdown="span">fluisce sempre dal corpo a temperatura **maggiore** a quello a temperatura **minore**</u>, finché i due sistemi non raggiungono la stessa temperatura.  
Quando i due sistemi si trovano alla stessa temperatura, tra di essi non c'è scambio di calore e si parla di <definizione>equilibrio termico</definizione>.

{% include box-end.html %}

Per comprendere quindi **se** il calore si trasmette tra due sistemi $A$ e $B$ e **in che verso** si trasmetta (da $A$ a $B$ o da $B$ ad $A$), dobbiamo conoscere la temperatura dei due sistemi $T_A$ e $T_B$. 

Quando studiamo uno scambio di calore, conviene sempre dire con chiarezza chi è il <definizione>sistema</definizione>, cioè il corpo (o l'insieme di corpi) che ci interessa, e chi è l'<definizione>ambiente</definizione>, cioè tutto il resto. Il calore $Q$ scambiato dal sistema ha allora un **segno**, che ci dice in che verso va il calore.

{% include box-imp.html testo="Il segno del calore" %}
- $Q > 0$: è l'**ambiente** che riscalda il sistema, cioè il calore **entra** nel sistema.
- $Q < 0$: è il **sistema** che cede calore all'ambiente, cioè il calore **esce** dal sistema.
- $Q = 0$: sistema e ambiente non si scambiano calore (per esempio perché sono in equilibrio termico).
{% include box-end.html %}

{% include figure/segno-calore-figura.html %}

È la stessa convenzione che hai usato per il lavoro: come un lavoro positivo fa aumentare l'energia del sistema ($\Delta E = L$), così un calore positivo è energia che il sistema riceve, e un calore negativo è energia che il sistema perde.

Ora mettiti alla prova: trascina la spada nella fornace per scaldarla, nel cesto di ghiaccio per raffreddarla, oppure immergila nella bacinella d'acqua e osserva il flusso di calore, finché spada e acqua non raggiungono l'equilibrio termico. Ogni volta che appoggi la spada da qualche parte, prima di vedere che cosa succede, dovrai indovinare se, prendendo la **spada come sistema** e tutto il resto come ambiente, il calore $Q$ sarà positivo, negativo o nullo.

{% include lab-virtuali/spada-lab.html %}





## La Definizione operativa della Temperatura e la scala Kelvin

Diamo la seguente definizione **operativa** di temperatura.

{% include box-imp.html testo="Temperatura" %}
La temperatura (simbolo $T$) è la grandezza fisica misurata da un termometro. La sua unità di misura nel Sistema Internazionale è il <definizione>kelvin</definizione> (simbolo K).
{% include box-end.html %}

Come scopriremo nei prossimi capitoli, ci sono ottime ragioni per cui nel Sistema Internazionale si è scelto di utilizzare la scala dei kelvin per misurare la temperatura, invece che quella più abituale dei gradi centigradi (anche chiamati **gradi celsius**, in onore del suo inventore Anders Celsius). Eppure, comunemente continuiamo ad utilizzare la scala dei gradi centigradi. È quindi importante abituarsi a passare dall'una all'altra, anche se in questo corso vi sarà richiesto di adottare quasi sempre il kelvin quando fornite un risultato.

Compara le due scale con questa animazione.

{% include lab-virtuali/termometro-fuoco-ghiaccio-lab.html %}

{% include box-imp.html testo="Da gradi centigradi a kelvin" %}
Per passare da una scala all'altra basta sommare o sottrarre il numero $273{,}15$:

{% include eq-annotated.html
     id="conv-c-k"
     formula="T^{\text{K}} = T^{\text{°C}} + 273{,}15"
     frammenti="T^{\text{K}}|T^{\text{°C}}|273{,}15"
     etichette="temperatura in kelvin|temperatura in gradi centigradi|scarto fisso tra le due scale"
     posizioni="alto|basso|alto"
  %}

{% include eq-annotated.html
     id="conv-k-c"
     formula="T^{\text{°C}} = T^{\text{K}} - 273{,}15"
     frammenti="T^{\text{°C}}|T^{\text{K}}|273{,}15"
     etichette="temperatura in gradi centigradi|temperatura in kelvin|scarto fisso tra le due scale"
     posizioni="alto|basso|alto"
  %}

{% include box-end.html %}

Pertanto, <u markdown="span">una **variazione** di temperatura $\Delta T$ </u> (cioè di quanto sale o scende la temperatura) <u markdown="span">è **la stessa in entrambe le scale**</u>. Cioè, se la temperatura sale di $5\,°C$, sale anche di $5\,K$. 
Dimostralo tu, con il seguente esercizio.


{% include esercizi/conversione-celsius-kelvin.html %}

Esiste, come vedremo meglio più avanti, una temperatura minima possibile in assoluto, chiamata <definizione>zero assoluto</definizione>, che vale esattamente $0\,\text{K}$ (cioè $-273{,}15\,°\text{C}$). Scopriremo che **non è possibile raggiungere questa temperatura**. Per il momento, osserviamo che, poiché lo zero della scala kelvin coincide con questa temperatura minima invalicabile, <u markdown="span">sulla scala kelvin **non esistono temperature negative**</u>.

## Interpretazione Microscopica della Temperatura 

Uno degli aspetti della temperatura e del calore che ha affascinato di più gli scienziati è che esse sono qualità **invisibili**. Sappiamo che possiamo renderle visibili grazie a un termometro, ma non sappiamo veramente ***che cosa*** faccia alzare o abbassare il termometro. Nella storia, si sono quindi sviluppate teorie molto originali e interessanti su cosa sia fisicamente e concretamente la temperatura. Noi analizzeremo solo quella in cui crediamo oggi, ma se sei curioso clicca qui di seguito.  

{% include spoiler.html testo="Le teorie più originali sul calore, nella storia" %}
Fin dall'antichità si è cercato di capire cosa fosse davvero il calore. Un filosofo greco di nome Empedocle, ad esempio, lo associava al fuoco, e credeva che tutti i corpi fossero costituiti da fuoco: alcuni in quantità maggiore (quelli caldi), altri in quantità minore (quelli freddi). Ma è nel Settecento che nasce e si sviluppa la teoria più affascinante e duratura: quella del <definizione>calorico</definizione>.

Secondo questa teoria, il calore non era energia, ma una vera e propria **sostanza**: un fluido invisibile e privo di peso, contenuto in quantità maggiore nei corpi caldi e minore in quelli freddi, capace di "scorrere" da un corpo all'altro un po' come un liquido. L'idea del calorico spiegava molto bene ciò che osservava: il calore fluisce sempre dal corpo più caldo a quello più freddo perché il calorico "scende" da dove è più concentrato a dove lo è meno, e due corpi raggiungono l'equilibrio termico perché il calorico semplicemente si ridistribuisce tra loro.

Tra i più autorevoli sostenitori di questa teoria c'erano il chimico Antoine Lavoisier e il matematico e fisico Pierre-Simon Laplace, che costruirono insieme uno dei primi <definizione>calorimetri</definizione> della storia — un contenitore pieno di ghiaccio, con cui misuravano la quantità di calorico ceduta da un corpo osservando quanto ghiaccio riuscivano a fondere.

{% include figura.html id="laplace-calorico"
   src="/corsi/immagini/pierre-simon-laplace.jpg"
   didascalia="Pierre-Simon Laplace (1749-1827), tra i più autorevoli sostenitori della teoria del calorico." larghezza="220px" %}

A far vacillare la teoria del calorico fu un esperimento sorprendente. Nel 1798 il fisico Benjamin Thompson, conte di Rumford, stava supervisionando la foratura di cannoni di bronzo in un arsenale, e si accorse che l'attrito tra il trapano e il metallo produceva una quantità di calore enorme e, apparentemente, inesauribile — tanto da riuscire a far bollire dell'acqua. Se il calorico fosse stato un fluido presente in quantità limitata dentro il metallo, prima o poi si sarebbe dovuto esaurire; invece continuava a essere prodotto finché si continuava a far girare il trapano. Rumford ne concluse che il calore non potesse essere una sostanza contenuta nei corpi, ma dovesse avere a che fare con il **movimento**.

Ci vollero comunque ancora diversi decenni, e gli esperimenti di scienziati come James Prescott Joule, prima che l'idea del calorico venisse definitivamente abbandonata a favore della teoria che studieremo noi: quella per cui il calore è energia legata al movimento disordinato delle particelle che compongono la materia.
{% include spoiler-end.html %}

Oggi crediamo che la materia sia composta da un numero gigantesco di **molecole**, a loro volta composte da **atomi**. Ci riferiremo in genere agli atomi e alle molecole che compongono la materia con il nome di <definizione>particelle</definizione>. Le particelle che compongono un corpo sono in continuo movimento, anche se il corpo è fermo, per un'agitazione che si chiama <definizione>agitazione termica</definizione>, come puoi vedere nell'animazione qui sotto.

{% include figura.html id="alpha-elix"
   src="/corsi/gif/Thermally_Agitated_alpha-elix.gif"
   didascalia="Un segmento di proteina di alfa-elica che vibra per agitazione termica."
   larghezza="190px" %}

{% include box-imp.html testo="Interpretazione microscopica della temperatura" %}
<u markdown="span">La temperatura misura **l'agitazione termica**</u> di un corpo, cioè la velocità con cui si muovono le particelle che lo compongono.
{% include box-end.html %}

{% include lab-virtuali/agitazione-termica-lab.html %}

## Il Termometro e la Dilatazione Termica

{% include margin-note.html testo="Come funziona un termometro?" %}
Sappiamo tutti che i termometri contengono un liquido (normalmente mercurio) il cui livello si alza quando la temperatura aumenta e si abbassa quando la temperatura diminuisce. Eppure, non è semplice spiegare *perché* il liquido all'interno si comporti in quel modo. 
{% include margin-note-end.html %}

{% include margin-note.html testo="La dilatazione termica" %}
La motivazione è che il liquido all'interno **si espande**, cioè aumenta di volume quando aumenta la temperatura. Questo fenomeno si chiama <definizione>dilatazione termica</definizione> e <u markdown="span">avviene con **tutti** i corpi</u> (non solo con i termometri).  
{% include margin-note-end.html %}
{% include margin-note.html testo="La spiegazione microscopica" %}
Esso avviene perché, quando la temperatura di un corpo aumenta, aumenta anche la velocità con cui si muovono le particelle che costituiscono il corpo. Muovendosi più velocemente, le particelle si urtano con maggiore intensità. Pertanto, esse tendono a “rimbalzare” maggiormente e quindi ad allontanarsi. Il materiale, pertanto, si dilata.

{% include lab-virtuali/dilatazione-termometro-lab.html %}

{% include margin-note-end.html %}



### Una Formula per la Dilatazione Termica

{% include margin-note.html testo="Costruire la formula" %}
Abbiamo compreso che un corpo con una lunghezza iniziale pari a $L_i$ si **allunga**, raggiungendo una lunghezza finale $L_f$, quando lo portiamo da una temperatura iniziale $T_i$ a una temperatura finale $T_f$. Chiamiamo, come al solito, la **variazione** di lunghezza $\Delta L = L_f-L_i$ e la variazione della temperatura $\Delta T = T_f-T_i.$  
Per capire di quanto si allunga abbiamo bisogno di cercare una formula per $\Delta L.$  
Possiamo intuire che l'allungamento $\Delta L$ sarà:
- direttamente proporzionale alla variazione di temperatura $\Delta T$ (più riscaldo il corpo, più esso si allunga);
- direttamente proporzionale alla lunghezza iniziale $L_i$ (una barra lunga si allunga più di quanto non faccia una barra corta);
- dipendente dal tipo di materiale attraverso un certo <definizione>coefficiente di dilatazione termica</definizione>, che indicheremo con $\alpha$ ed esprime la facilità con cui un corpo si dilata quando lo si riscalda (diversi materiali si dilatano differentemente).

La formula risulta quindi essere 

{% include eq-annotated.html
     id="dilatazione-termica"
     formula="\Delta L = \alpha\, L_i\, \Delta T"
     frammenti="\Delta L|\alpha|L_i|\Delta T"
     etichette="allungamento|coefficiente di dilatazione termica (dipendenza dal materiale)|lunghezza iniziale|variazione della temperatura"
     posizioni="alto|basso|alto|basso"
  %}

{% include margin-note-end.html %}


Verifica con il seguente esercizio che <u>l'unità di misura del coefficiente di dilatazione termica $\alpha$ è l'inverso del kelvin</u>, cioè che

$$[\alpha]=\frac 1 {\text{K}}.$$

{% include esercizi/unita-alfa.html %}

## Alcuni Esperimenti e alcune Applicazioni Tecnologiche della Dilatazione Termica

La dimostrazione sperimentale di questa teoria avvenne con un esperimento molto simpatico, ideato dal fisico e filosofo olandese Willem 's Gravesande. Puoi vederlo con questo video.

{% include video.html id="vfv7Ao2T1G0" didascalia="L'anello di 's Gravesande: la sfera passa nell'anello solo finché è fredda; scaldata, si dilata e non passa più." %}


https://www.youtube.com/shorts/BnAQWYFggC8







# La Legge Fondamentale della Calorimetria


Sappiamo che la temperatura di un corpo cambia quando si fornisce ad esso --- o si sottrae da esso --- **calore**. Dobbiamo quindi trovare un modo per connettere la **variazione della temperatura** alla quantità di **calore** che forniamo ad un corpo o che sottraiamo da esso. Esprimeremo il calore fornito con un numero **positivo** e quello sottratto con un numero **negativo**.

Puoi osservare il riscaldamento e il raffreddamento di un corpo con la seguente animazione.
{% include phet-sim.html id="heating-up"
   src="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_all.html"
   didascalia="Simulazione PhET: Trascina il termometro dall'angolo in alto a sinistra fino a toccare (con la frecciolina sulla sinistra) uno dei corpi di cui ti interessa conoscere la temperatura. Attivando i fornelli, puoi riscaldare tutti i corpi. Inoltre, puoi vedere come un corpo caldo cede calore a un corpo più freddo mettendo a contatto due corpi che si trovano a temperature diverse."
   altezza="550px" %}

Notiamo che la variazione della temperatura è:
- direttamente proporzionale alla quantità di calore $Q$ che viene fornita;
- inversamente proporzionale alla massa da riscaldare;
- dipendente dal tipo di materiale (prova a far bollire acqua e olio, vedrai come sono diversi!). Questa dipendenza è una caratteristica del materiale che chiameremo <definizione>calore specifico</definizione> e indicheremo con il simbolo $c$, e corrisponde alla resistenza che oppone il materiale al suo riscaldamento.

La formula quindi si costruisce così

{% include eq-annotated.html
     id="calorimetria"
     formula="\Delta T = \frac{Q}{c\,m}."
     frammenti="\Delta T|Q|c\,|m"
     etichette="variazione della temperatura|calore|calore specifico (proprietà del corpo)|massa"
     posizioni="alto|alto|basso|basso"
  %}

Questa formula è nota come la <definizione>legge fondamentale della calorimetria</definizione>, che possiamo riscrivere, nella sua forma più famosa, come

{% include lab-virtuali/calorimetria-inversione-lab.html %}

$$Q = c\, m \, \Delta T.$$

Notiamo che
- se $Q$ è **negativo** (cioè sottraiamo calore dal corpo) allora $\Delta T <0$, cioè la temperatura **diminuisce**;
- se $Q$ è **positivo** (cioè forniamo calore al corpo) allora $\Delta T>0$, cioè la temperatura **aumenta**.

Inoltre, verifica con il seguente esercizio che l'unità di misura del calore specifico $c$ è il joule per chilogrammo kelvin, cioè che

$$[c]=\dfrac{\text J}{\text{kg}\cdot\text K}.$$

{% include esercizi/unita-calore-specifico.html %}

{% include box-imp.html testo="Legge fondamentale della calorimetria" %}
Il calore $Q$ fornito a un corpo è legato alla sua variazione di temperatura $\Delta T$ tramite la legge fondamentale della calorimetria

$$
Q=c\,m\, \Delta T,
$$

ove $c$ è il calore specifico: una caratteristica del materiale la cui unità di misura è il $\frac{\text J} {\text{kg}\cdot\text K}.$

{% include box-end.html %}





# La Trasmissione del Calore

È fondamentale comprendere che <u markdown="span">il calore non è in nessun modo una *proprietà* di un corpo</u>. Un corpo non *ha* calore.  
Il calore è una forma di energia <u markdown="span">che si **trasmette** da un corpo a un altro.</u> 

La descrizione della trasmissione del calore è molto affascinante, perché non è possibile descrivere ***come*** esso avvenga se non in termini di ciò che succede **a livello microscopico**, cioè a livello delle molecole e degli atomi di cui sono composti i corpi, e questo rivela quanto sia complesso e ricco il mondo che abbiamo attorno, proprio quello a cui siamo più abituati.

Le forme di trasmissione del calore sono solo tre e in questa sezione le affronteremo una ad una.

Prima, però, ci serve una grandezza che ci dica *quanto velocemente* il calore si trasmette. Ricordi la [potenza]({{ '/corsi/meccanica/06_Energia/' | relative_url }}#la-potenza)? Nel capitolo sull'energia l'abbiamo definita come il lavoro compiuto diviso il tempo impiegato per compierlo, $P = \dfrac{L}{\Delta t}$, e l'abbiamo misurata in watt ($1\ \text W = 1\ \text J/\text s$): la pompa era più potente dell'omino non perché compisse più lavoro, ma perché compiva lo stesso lavoro in meno tempo.

Poiché anche il calore è energia, possiamo fare esattamente la stessa cosa. Spesso, infatti, non ci interessa tanto *quanto* calore passa in totale da un corpo a un altro, ma *quanto ne passa ogni secondo*: un buon cappotto non impedisce al calore del nostro corpo di uscire, ma lo fa uscire molto più lentamente. Questa grandezza si chiama <definizione>potenza termica</definizione>.

{% include box-imp.html testo="La potenza termica" %}
La potenza termica $P$ è la quantità di calore $Q$ trasmessa in un certo intervallo di tempo $\Delta t$, divisa per l'intervallo di tempo stesso:

$$P = \frac{Q}{\Delta t}.$$

Come ogni potenza, si misura in watt (W): $1\ \text W = 1\ \text J/\text s$.
{% include box-end.html %}

{% include esercizi/invert-potenza-termica.html %}

{% include esercizi/esercizio-potenza-termica.html %}


## La Trasmissione del Calore per Conduzione

Osserva la seguente animazione.

{% include lab-virtuali/conduzione-barra-lab.html %}


Nota che, riscaldando una barra di metallo a una estremità, l'energia si propaga dentro la barra, trasferendosi dalla regione più calda alla regione più fredda. Nello scenario “vista microscopica” puoi anche vedere ***come*** avvenga questa trasmissione di energia: le particelle delle zone più calde si muovono a velocità più elevate e impattano contro le particelle delle zone più fredde, donando loro energia cinetica, e quindi aumentando la temperatura di quella zona.

Osserva anche, con la modalità laboratorio, che la potenza termica $P$ che si trasmette da un punto $x_1$ che si trova a temperatura $T_1$ a un punto $x_2$ che si trova a temperatura $T_2$ (cioè il calore che ogni secondo passa da $x_1$ a $x_2$) è:
- direttamente proporzionale all'area $A$ della sezione (maggiore è l'area e maggiore è il numero di particelle che ogni secondo trasmettono il calore);
- direttamente proporzionale alla variazione di temperatura $\Delta T = T_2-T_1$ cambiata di segno: ad esempio, se $T_2$ è maggiore di $T_1$ allora $\Delta T>0$ ma il calore va da $T_2$ a $T_1$, quindi la potenza termica da $x_1$ a $x_2$ è negativa;
- inversamente proporzionale alla distanza tra i punti $x_1$ e $x_2$, cioè alla variazione della posizione $\Delta x = x_2 - x_1$;
- dipendente dal materiale attraverso una grandezza che chiamiamo <definizione>conducibilità termica</definizione> e indichiamo con $k$, e che esprime la capacità di un materiale di trasmettere calore.


Pertanto, la formula si costruisce in questo modo:
{% include eq-annotated.html
     id="fourier"
     formula="P = -k\, A\, \frac{\Delta T}{\Delta x}."
     frammenti="P|-|k|A|\Delta T|\Delta x"
     etichette="potenza termica trasmessa tra due sezioni nelle posizioni $x_1$ e $x_2$|va nel verso opposto della crescita della temperatura|conducibilità termica (proprietà del materiale)|area della sezione|variazione della temperatura $T_2-T_1$|variazione della posizione delle due sezioni $x_2-x_1$"
     posizioni="alto|basso|alto|basso|alto|basso"
  %}

Verifica con il seguente esercizio che l'unità di misura della conducibilità termica $k$ è $\dfrac{\text W}{\text m\cdot\text K}$.

{% include esercizi/unita-conducibilita.html %}

Ricapitolando:

{% capture _ua_cond %}{"lhs":{"s":"k"},
 "rhs":[{"o":"−","drop":true},{"f":[[{"s":"P","u":"W"},{"o":"·"},{"s":"Δx","u":"m"}],[{"s":"A","u":"m²"},{"o":"·"},{"s":"ΔT","u":"K"}]]}],
 "passi":[[{"f":[["W",{"o":"·"},"m"],[{"t":"m","hl":true},{"o":"·"},{"t":"m","hl":true},{"o":"·"},"K"]]}],
          [{"f":[["W",{"o":"·"},{"t":"m","x":true}],[{"t":"m","x":true},{"o":"·"},"m",{"o":"·"},"K"]]}],
          [{"f":[["W"],["m",{"o":"·"},"K"]]}]]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-cond" dati=_ua_cond %}

Quindi:

$$[k]=\frac{[P]\cdot[\Delta x]}{[A]\cdot[\Delta T]}=\frac{\text W\cdot\text m}{\text m^2\cdot\text K}=\frac{\text W\cdot\cancel{\text m}}{\cancel{\text m}\cdot\text m\cdot\text K}=\frac{\text W}{\text m\cdot\text K}.$$


  
## La Trasmissione del Calore per Convezione

Osserva la seguente animazione.

{% include lab-virtuali/convezione-pentola-lab.html %}

Nella vista microscopica, le particelle sul fondo, scaldate dalla fiamma, vibrano di più e [si allontanano](#il-termometro-e-la-dilatazione-termica) le une dalle altre: l'acqua calda si dilata e diventa **meno densa**. Le particelle fredde in alto, più vicine fra loro, scendono e si infilano negli spazi che si sono aperti, spingendo verso l'alto quelle calde.

Nella vista macroscopica si vede il risultato: l'acqua calda sale al centro, in superficie si raffredda, scende lungo le pareti e sul fondo torna verso il centro. Si forma un circuito chiuso, detto <definizione>moto convettivo</definizione>, che porta il calore in tutta l'acqua. Questo modo di trasmettere il calore si chiama <definizione>convezione</definizione>.

{% include box-imp.html testo="La convezione" %}
La convezione è la trasmissione del calore in un **fluido** (un liquido o un gas) grazie al **movimento del fluido stesso**: la parte calda, meno densa, sale; quella fredda, più densa, scende a prenderne il posto.  
A differenza della conduzione, qui **la materia si sposta**, portando con sé l'energia: per questo la convezione non avviene nei solidi.
{% include box-end.html %}

{% include box-warn.html testo="«Il calore sale»?" %}
Non è così: il calore va sempre dalla zona più calda a quella più fredda, **in qualsiasi direzione**. Ciò che sale è il **fluido caldo**, perché è meno denso.
{% include box-end.html %}

{% include box-note.html testo="La convezione intorno a te" %}
La convezione è dappertutto intorno a te: scorri gli esempi.

{% include scorri.html %}
{% include scorri-slide.html img="/corsi/immagini/convection-heater.png" alt="Una stanza con un termosifone: l'aria calda sale sopra il termosifone, attraversa la stanza vicino al soffitto, scende dalla parte opposta e torna verso il termosifone lungo il pavimento" titolo="Il termosifone" %}
Il termosifone scalda l'aria vicina, che sale, attraversa la stanza vicino al soffitto, si raffredda, scende e torna verso il termosifone: un moto convettivo. Per questo i termosifoni si mettono in basso e i condizionatori in alto.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/convection-bird.jpeg" alt="Una sterna in volo con le ali spiegate" titolo="Gli uccelli e le correnti termiche" %}
Il terreno scaldato dal Sole scalda l'aria sopra di sé, che sale in colonne: le **correnti termiche**. Molti uccelli (e i piloti di parapendio) le sfruttano per salire di quota quasi senza battere le ali.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/convection-currents-earth.png" alt="A sinistra, uno spaccato della Terra con i moti convettivi nel mantello sotto le placche; a destra, una pentola d'acqua sul fuoco con gli stessi moti convettivi" titolo="Sotto i tuoi piedi: il mantello terrestre" %}
Le rocce caldissime del mantello terrestre si muovono per convezione, come l'acqua nella pentola, ma lentissimamente (pochi centimetri all'anno), e trascinano con sé le placche dei continenti.
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qconv %}[
{"t":"La convezione può avvenire all'interno di una sbarra di ferro.","ok":false,"s":"No: nei solidi le particelle restano al loro posto e non possono spostarsi trasportando l'energia. Nei solidi il calore si trasmette per conduzione."},
{"t":"Nella convezione è il fluido stesso a spostarsi, portando con sé l'energia.","ok":true,"s":"Sì, è proprio questa la differenza con la conduzione, in cui l'energia passa da una particella all'altra ma le particelle restano al loro posto."},
{"t":"Scaldandosi, l'acqua si dilata e la sua densità diminuisce.","ok":true,"s":"Sì: le particelle si allontanano, quindi la stessa massa occupa un volume più grande."},
{"t":"L'acqua calda sale perché il calore tende sempre ad andare verso l'alto.","ok":false,"s":"No: il calore va dalla zona più calda a quella più fredda, in qualsiasi direzione. L'acqua calda sale perché è meno densa ed è spinta verso l'alto dall'acqua fredda, più densa, che le scende sotto."},
{"t":"Se scaldi una pentola d'acqua dall'alto (per esempio con una resistenza elettrica appena sotto la superficie), si formano gli stessi moti convettivi che scaldandola dal basso.","ok":false,"s":"No: l'acqua calda, meno densa, è già in alto e lì resta; quella fredda, più densa, è già in basso. Nessuno ha motivo di muoversi, e il calore scende solo per conduzione, molto lentamente."},
{"t":"In un frigorifero, conviene che la parte che raffredda l'aria si trovi in alto.","ok":true,"s":"Sì: l'aria raffreddata in alto diventa più densa e scende, e al suo posto sale l'aria più calda del fondo, che a sua volta viene raffreddata. Si forma un moto convettivo che raffredda tutto il frigorifero."},
{"t":"Fra 0 °C e 4 °C l'acqua fa un'eccezione: scaldandosi si contrae, invece di dilatarsi. Per questo d'inverno, in un lago, l'acqua a 4 °C si raccoglie sul fondo e il ghiaccio si forma in superficie.","ok":true,"s":"Sì: a 4 °C l'acqua ha la densità massima, quindi scende sul fondo. L'acqua più fredda, meno densa, resta in alto e lì gela: il ghiaccio galleggia e fa da coperta, e i pesci sopravvivono sul fondo a 4 °C."}
]{% endcapture %}
{% include quiz.html domande=_qconv id="q-convezione" senza_esempi="true" %}
{% include box-end.html %}

{% capture _r %}Il calore non «sale»: va sempre dalla zona più calda a quella più fredda, in qualsiasi direzione. Nella pentola a salire è l'acqua calda del fondo: scaldandosi si dilata, diventa meno densa, e l'acqua fredda della superficie, più densa, le scende sotto e la spinge verso l'alto. È l'acqua che si muove a portare il calore fino in superficie: questa è la convezione.{% endcapture %}
{% include risposta-aperta.html id="ra-spiega-convezione" tipo="spiega"
   domanda="Un compagno ti dice: «La superficie dell'acqua nella pentola si scalda perché il calore sale». Come gli spieghi dove sbaglia, e che cosa succede davvero?"
   risposta=_r %}


## La Trasmissione del Calore per Irraggiamento


