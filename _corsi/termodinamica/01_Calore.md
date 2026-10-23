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

{% include box-obiettivi.html %}
Scopri che il calore è energia che passa da un corpo all'altro, e che cosa misura davvero la temperatura, fino al livello delle particelle. Impari a passare dai gradi centigradi ai kelvin, a calcolare di quanto si allunga un oggetto scaldato e quanto calore serve per cambiare la temperatura di un corpo. Infine vedi i tre modi in cui il calore si trasmette: conduzione, convezione e irraggiamento.
{% include box-end.html %}

{% include margin-note.html testo="Il calore e Joule" %}
In questo capitolo studieremo nel dettaglio una delle forme di energia che abbiamo incontrato: il <definizione>calore</definizione>.  
Abbiamo già detto, nello scorso capitolo, che l'energia meccanica può convertirsi in calore per azione dell'attrito. Questa scoperta fu fatta dall'inglese [James Prescott Joule](https://it.wikipedia.org/wiki/James_Prescott_Joule): un mastro birraio che aveva bisogno di fare esperimenti sul calore per trovare il modo ottimale di raffreddare la birra. A lui (e alla birra) si deve un esperimento che è noto come <definizione>il mulinello di Joule</definizione>. Per questa esperienza, gli fu intitolato il nome dell'unità di misura dell'energia: il “joule”.
{% include margin-note-end.html %}

{% include figura.html id="james-prescott-joule"
   src="/corsi/immagini/james-prescott-joule.webp"
   didascalia="James Prescott Joule (1818–1889)."
   alt="Ritratto di James Prescott Joule"
   larghezza="220px" %}

Puoi ripetere il suo esperimento con la seguente animazione.

{% include lab-virtuali/mulinello-joule-lab.html %}

{% include margin-note.html testo="Dal lavoro al calore" %}
Mentre i pesi scendono, perdono **energia potenziale gravitazionale**. Le corde, srotolandosi, fanno girare il mulinello, che agita l'acqua. Ma l'acqua non continua a girare per sempre: l'attrito con le palette la rallenta e l'energia viene **dissipata**. E infatti il termometro sale: <u markdown="span">l'energia meccanica persa dai pesi è diventata **calore**, che ha scaldato l'acqua</u>. Più volte fai cadere i pesi, più la temperatura aumenta.
{% include margin-note-end.html %}

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

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qcalore %}[
{"t": "Il calore è una forma di energia e si misura in joule.", "ok": true, "s": "Sì: proprio per questo la sua unità di misura è il joule, come per il lavoro e per ogni altra forma di energia."},
{"t": "Strofinando le mani, l'energia meccanica si trasforma in calore.", "ok": true, "s": "Sì: l'attrito dissipa l'energia meccanica, che diventa calore."},
{"t": "Nel mulinello di Joule l'acqua si scalda perché viene a contatto con un corpo più caldo.", "ok": false, "s": "No: nessun corpo caldo tocca l'acqua. Si scalda perché l'energia meccanica persa dai pesi viene dissipata dall'attrito fra l'acqua e le palette."},
{"t": "Nel mulinello di Joule, se i pesi cadessero da un'altezza doppia, l'acqua si scalderebbe di più.", "ok": true, "s": "Sì: i pesi perderebbero il doppio dell'energia potenziale, e il doppio dell'energia diventerebbe calore."},
{"t": "Un corpo caldo contiene più calore di un corpo freddo.", "ok": false, "s": "No: il calore non è qualcosa che un corpo contiene. È energia che passa da un corpo a un altro: un corpo caldo ha una temperatura più alta, non «più calore»."}
]{% endcapture %}
{% include quiz.html domande=_qcalore id="q-calore" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Nel suo mulinello, Joule faceva cadere i pesi decine di volte di fila, riavvolgendo ogni volta le corde. Perché?
{% capture _o %}[
{"v":"a","t":"Perché i pesi, cadendo più volte, diventavano più pesanti"},
{"v":"b","t":"Perché a ogni caduta l'acqua si scaldava pochissimo: ripetendo, l'energia si accumulava e il riscaldamento diventava abbastanza grande da misurarlo"},
{"v":"c","t":"Perché l'acqua doveva prima raffreddarsi"},
{"v":"d","t":"Perché una sola caduta avrebbe raffreddato l'acqua"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-joule-ripete" opts=_o ok="b" s="L'energia potenziale persa in una caduta è piccola, e l'aumento di temperatura che produce è di pochi millesimi di grado. Ripetendo le cadute, l'energia trasformata in calore si somma, e la temperatura sale abbastanza da poterla misurare con precisione." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcVsBici" %}
Un ciclista, con la bici, ha una massa totale di $80\ \text{kg}$ e viaggia a $10\ \text{m/s}$. Frena fino a fermarsi. Quanta energia è diventata calore, soprattutto nei freni e nelle ruote?

{% include num.html id="numVsBici" valore="4000" unit="J" %}
{% include spoiler.html testo="Mostra la soluzione" %}
Tutta l'energia cinetica, $K = \dfrac12 m v^2 = \dfrac12\cdot 80\ \text{kg}\cdot(10\ \text{m/s})^2 = 4\,000\ \text J$, viene dissipata dall'attrito e diventa calore: è per questo che, dopo una lunga discesa frenando, i freni di una bici scottano.
{% include spoiler-end.html %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Le «stelle cadenti» sono sassolini, spesso più piccoli di un chicco di riso, che entrano nell'atmosfera a decine di chilometri al secondo. Perché brillano?
{% capture _o %}[
{"v":"a","t":"Perché riflettono la luce del Sole"},
{"v":"b","t":"Perché sono fatti di materiale luminoso"},
{"v":"c","t":"Perché l'attrito con l'aria trasforma la loro enorme energia cinetica in calore: si scaldano fino a migliaia di gradi e diventano incandescenti"},
{"v":"d","t":"Perché sono già caldissimi quando arrivano dallo spazio"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-meteora" opts=_o ok="c" s="A decine di chilometri al secondo anche un sassolino ha un'energia cinetica enorme. Frenato dall'aria, la dissipa in calore in pochi secondi: si scalda fino a diventare incandescente e quasi sempre si consuma prima di toccare terra." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _r %}Non è sparita: a ogni rimbalzo una parte dell'energia meccanica della palla viene dissipata. Diventa soprattutto calore (la palla e il pavimento si scaldano un pochino, nel punto dell'urto) e in parte suono. Alla fine tutta l'energia potenziale iniziale si è trasformata così: la quantità totale di energia è rimasta la stessa.{% endcapture %}
{% include risposta-aperta.html id="ra-vs-palla" tipo="spiega"
   domanda="Una palla rimbalza sul pavimento sempre un po' più in basso, finché si ferma. Dove è andata a finire la sua energia?"
   risposta=_r %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include margin-note.html testo="Quando e come" %}
In questo capitolo vedremo ***quando*** e ***come*** il calore si può **trasmettere**.  
Cominciamo descrivendo ***quando*** il calore si può trasmettere, e per farlo abbiamo bisogno del concetto di <definizione>temperatura</definizione>.
{% include margin-note-end.html %}




<!-- Quello che io trovo bello di questo capitolo della Fisica è che esso svela quanto sia complesso e ricco il mondo che ci circonda: quello a cui siamo più abituati. Ci sorprende senza aver bisogno di osservare niente di più che ciò che abbiamo attorno. Impareremo che l'aria che respiriamo, il nostro corpo, i corpi che ci circondano --- dai granelli di sabbia alle stelle --- sono l'incontro di un numero inimmaginabile di minuscole particelle, che interagiscono tra loro dando luogo a un gomitolo così ingarbugliato che noi non saremo mai in grado di esaurirlo.  
Per me è stato bello scoprire questa parte della Fisica e mi ha donato mille stupori: spero possa essere un piccolo stupore anche per voi! -->

# La Temperatura

{% include box-imp.html testo="L'equilibrio termico"%}

Il calore si trasferisce tra due sistemi <u markdown="span">solo se tra di essi c'è una **differenza di temperatura**</u>. In particolare, il calore <u markdown="span">fluisce sempre dal corpo a temperatura **maggiore** a quello a temperatura **minore**</u>, finché i due sistemi non raggiungono la stessa temperatura.  
Quando i due sistemi si trovano alla stessa temperatura, tra di essi non c'è scambio di calore e si parla di <definizione>equilibrio termico</definizione>.

{% include box-end.html %}

{% include margin-note.html testo="Sistema e ambiente" %}
Per comprendere quindi **se** il calore si trasmette tra due sistemi $A$ e $B$ e **in che verso** si trasmetta (da $A$ a $B$ o da $B$ ad $A$), dobbiamo conoscere la temperatura dei due sistemi $T_A$ e $T_B$. 

Quando studiamo uno scambio di calore, conviene sempre dire con chiarezza chi è il <definizione>sistema</definizione>, cioè il corpo (o l'insieme di corpi) che ci interessa, e chi è l'<definizione>ambiente</definizione>, cioè tutto il resto. Il calore $Q$ scambiato dal sistema ha allora un **segno**, che ci dice in che verso va il calore.
{% include margin-note-end.html %}

{% include box-imp.html testo="Il segno del calore" %}
- $Q > 0$: è l'**ambiente** che riscalda il sistema, cioè il calore **entra** nel sistema.
- $Q < 0$: è il **sistema** che cede calore all'ambiente, cioè il calore **esce** dal sistema.
- $Q = 0$: sistema e ambiente non si scambiano calore (per esempio perché sono in equilibrio termico).
{% include box-end.html %}

{% include figure/segno-calore-figura.html %}

{% include margin-note.html testo="Come per il lavoro" %}
È la stessa convenzione che hai usato per il lavoro: come un lavoro positivo fa aumentare l'energia del sistema ($\Delta E = L$), così un calore positivo è energia che il sistema riceve, e un calore negativo è energia che il sistema perde.
{% include margin-note-end.html %}

Trascina la spada nella fornace per scaldarla, nel cesto di ghiaccio per raffreddarla, oppure immergila nella bacinella d'acqua e osserva il flusso di calore, finché spada e acqua non raggiungono l'equilibrio termico. Ogni volta che appoggi la spada da qualche parte, prima di vedere che cosa succede, dovrai indovinare se, prendendo la **spada come sistema** e tutto il resto come ambiente, il calore $Q$ sarà positivo, negativo o nullo.

{% include lab-virtuali/spada-lab.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qtemperatura %}[
{"t": "Due corpi in equilibrio termico hanno la stessa temperatura.", "ok": true, "s": "Sì: è proprio la definizione di equilibrio termico."},
{"t": "Il calore passa sempre dal corpo che ha più massa a quello che ne ha meno.", "ok": false, "s": "No: il calore passa dal corpo a temperatura maggiore a quello a temperatura minore, qualunque sia la loro massa."},
{"t": "Una tazza di tè si raffredda sul tavolo: prendendo il tè come sistema, $Q<0$.", "ok": true, "s": "Sì: il tè cede calore all'ambiente, quindi il calore esce dal sistema."},
{"t": "Un cubetto di ghiaccio messo in un bicchiere d'acqua tiepida: prendendo il ghiaccio come sistema, $Q>0$.", "ok": true, "s": "Sì: l'acqua, più calda, cede calore al ghiaccio. Il calore entra nel sistema."},
{"t": "Una bottiglia d'acqua chiusa in frigorifero da un giorno intero scambia ancora calore con l'aria del frigorifero.", "ok": false, "s": "No: dopo tanto tempo ha raggiunto la temperatura del frigorifero. È in equilibrio termico, quindi $Q=0$."}
]{% endcapture %}
{% include quiz.html domande=_qtemperatura id="q-temperatura" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Quando ti misuri la febbre, devi tenere il termometro sotto la lingua per qualche minuto. Perché non basta un secondo?
{% capture _o %}[
{"v":"a","t":"Perché il termometro deve prima scaricarsi"},
{"v":"b","t":"Perché il termometro misura la sua temperatura: deve aspettare di arrivare all'equilibrio termico con il tuo corpo, e il calore impiega un po' di tempo a passare"},
{"v":"c","t":"Perché la febbre sale piano piano mentre tieni il termometro in bocca"},
{"v":"d","t":"Perché in bocca la temperatura cambia continuamente"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-termometro-bocca" opts=_o ok="b" s="Un termometro misura sempre la propria temperatura. Se è in equilibrio termico con il corpo che tocca, le due temperature sono uguali, e solo allora la lettura è giusta. Per arrivarci, il calore deve passare dalla bocca al termometro, e serve un po' di tempo." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
In un contenitore che non scambia calore con l'esterno, metti a contatto tre corpi: $A$ a $80\ \text{°C}$, $B$ a $50\ \text{°C}$ e $C$ a $20\ \text{°C}$. Dopo molto tempo,
{% capture _o %}[
{"v":"a","t":"$A$ resta a $80\\ \\text{°C}$ e gli altri due si scaldano fino a lui"},
{"v":"b","t":"tutti e tre arrivano alla stessa temperatura, compresa fra $20\\ \\text{°C}$ e $80\\ \\text{°C}$"},
{"v":"c","t":"tutti e tre arrivano a $50\\ \\text{°C}$, perché è la temperatura di mezzo"},
{"v":"d","t":"$B$ non scambia calore con nessuno, perché è già a metà"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-tre-corpi" opts=_o ok="b" s="Il calore passa dai corpi più caldi a quelli più freddi finché c'è una differenza di temperatura: alla fine i tre corpi sono in equilibrio termico, cioè alla stessa temperatura. Quale sia esattamente dipende dalle loro masse e dai materiali: non è detto che sia proprio $50\ \text{°C}$. Anche $B$ partecipa: prima riceve calore da $A$ o ne cede a $C$, a seconda di come cambiano le temperature." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una tazza di tè a $70\ \text{°C}$ è appoggiata sul tavolo, in una stanza a $20\ \text{°C}$.

{% include fill.html prima="Il calore passa" tipo="drop" opts="dal tè all'aria|dall'aria al tè" ok="dal tè all'aria" dopo="," %}

{% include fill.html prima="e, prendendo il tè come sistema, il segno del calore è" tipo="drop" opts="Q > 0|Q < 0|Q = 0" ok="Q < 0" dopo="." %}

{% include fill.html prima="Il tè smette di raffreddarsi quando arriva a" tipo="drop" opts="0 °C|20 °C|37 °C" ok="20 °C" dopo="," s="cioè quando è in equilibrio termico con l'aria della stanza." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _r %}Perché il corpo umano non è come una tazza di tè: produce continuamente energia, trasformando quella chimica del cibo che mangiamo (il metabolismo). Questa energia compensa il calore che cediamo all'ambiente e mantiene la temperatura del corpo costante, intorno ai $37\ \text{°C}$. Non siamo in equilibrio termico con la stanza: lo scambio di calore continua sempre, e per questo dobbiamo mangiare. Quando fa freddo e cediamo più calore, tremiamo: i muscoli producono altro calore.{% endcapture %}
{% include risposta-aperta.html id="ra-vs-corpo-37" tipo="spiega"
   domanda="In una stanza a $20\ \text{°C}$ il tuo corpo è a circa $37\ \text{°C}$: c'è una differenza di temperatura, quindi cedi continuamente calore all'aria. Perché allora non ti raffreddi fino a $20\ \text{°C}$, come una tazza di tè?"
   risposta=_r %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}





## La Definizione operativa della Temperatura e la scala Kelvin

Diamo la seguente definizione **operativa** di temperatura.

{% include box-imp.html testo="Temperatura" %}
La temperatura (simbolo $T$) è la grandezza fisica misurata da un termometro. La sua unità di misura nel Sistema Internazionale è il <definizione>kelvin</definizione> (simbolo K).
{% include box-end.html %}

{% include margin-note.html testo="Kelvin e gradi centigradi" %}
Come scopriremo nei prossimi capitoli, ci sono ottime ragioni per cui nel Sistema Internazionale si è scelto di utilizzare la scala dei kelvin per misurare la temperatura, invece che quella più abituale dei gradi centigradi (anche chiamati **gradi celsius**, in onore del suo inventore Anders Celsius). Eppure, comunemente continuiamo ad utilizzare la scala dei gradi centigradi. È quindi importante abituarsi a passare dall'una all'altra, anche se in questo corso vi sarà richiesto di adottare quasi sempre il kelvin quando fornite un risultato.
{% include margin-note-end.html %}

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

{% include margin-note.html testo="Le variazioni sono uguali" %}
Pertanto, <u markdown="span">una **variazione** di temperatura $\Delta T$ </u> (cioè di quanto sale o scende la temperatura) <u markdown="span">è **la stessa in entrambe le scale**</u>. Cioè, se la temperatura sale di $5\,°C$, sale anche di $5\,K$. 
Dimostralo tu, con il seguente esercizio.
{% include margin-note-end.html %}


{% include esercizi/conversione-celsius-kelvin.html %}

{% include margin-note.html testo="Lo zero assoluto" %}
Esiste, come vedremo meglio più avanti, una temperatura minima possibile in assoluto, chiamata <definizione>zero assoluto</definizione>, che vale esattamente $0\,\text{K}$ (cioè $-273{,}15\,°\text{C}$). Scopriremo che **non è possibile raggiungere questa temperatura**. Per il momento, osserviamo che, poiché lo zero della scala kelvin coincide con questa temperatura minima invalicabile, <u markdown="span">sulla scala kelvin **non esistono temperature negative**</u>.
{% include margin-note-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qkelvin %}[
{"t": "$0\\ \\text{°C}$ corrispondono a $273{,}15\\ \\text K$.", "ok": true, "s": "Sì: $T^{\\text K}=0+273{,}15$."},
{"t": "Una temperatura di $-10\\ \\text K$ è possibile, anche se molto fredda.", "ok": false, "s": "No: lo zero della scala kelvin è lo zero assoluto, e sulla scala kelvin non esistono temperature negative."},
{"t": "Se la temperatura passa da $20\\ \\text{°C}$ a $30\\ \\text{°C}$, aumenta di $10\\ \\text K$.", "ok": true, "s": "Sì: una variazione di temperatura è la stessa nelle due scale."},
{"t": "La temperatura del corpo umano, circa $37\\ \\text{°C}$, corrisponde a circa $310\\ \\text K$.", "ok": true, "s": "Sì: $37+273{,}15\\approx 310$."},
{"t": "Se la temperatura passa da $10\\ \\text{°C}$ a $20\\ \\text{°C}$, raddoppia anche in kelvin.", "ok": false, "s": "No: in kelvin passa da $283{,}15\\ \\text K$ a $293{,}15\\ \\text K$, che non è il doppio. Aumenta della stessa quantità ($10$ gradi), ma non dello stesso fattore."}
]{% endcapture %}
{% include quiz.html domande=_qkelvin id="q-kelvin" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcVsVostok" %}
La temperatura più bassa mai registrata sulla superficie della Terra è di $-89{,}2\ \text{°C}$, il 21 luglio 1983, alla stazione Vostok, in Antartide. Quanto vale in kelvin?

{% include num.html id="numVsVostok" valore="183.95" unit="K" tol="0.1" %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcVsSole" %}
La superficie del Sole è a circa $5\,800\ \text K$. Quanto vale in gradi centigradi?

{% include num.html id="numVsSole" valore="5527" unit="°C" tol="0.5" %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Ieri la temperatura era di $10\ \text{°C}$, oggi di $20\ \text{°C}$. Un giornalista scrive: «Oggi fa il doppio del caldo di ieri». Ha ragione?
{% capture _o %}[
{"v":"a","t":"Sì: $20$ è il doppio di $10$"},
{"v":"b","t":"No: lo zero dei gradi centigradi è stato scelto per comodità; nella scala Kelvin, che parte dallo zero assoluto, si passa da $283\\ \\text K$ a $293\\ \\text K$, appena il $3{,}5\\%$ in più"},
{"v":"c","t":"No: la temperatura è diminuita"},
{"v":"d","t":"Non si può dire senza conoscere l'umidità"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-doppio-caldo" opts=_o ok="b" s="Raddoppiare una temperatura ha senso solo in kelvin, dove lo zero è lo zero assoluto. Lo zero dei gradi centigradi è la temperatura del ghiaccio fondente, una scelta comoda ma arbitraria: $20\ \text{°C}$ non è «il doppio» di $10\ \text{°C}$ più di quanto $-20\ \text{°C}$ sia «il doppio del freddo» di $-10\ \text{°C}$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Metti in ordine queste temperature, dalla più fredda alla più calda.

{% capture _d %}[
{"t":"$0\\ \\text K$","pos":0},
{"t":"$-100\\ \\text{°C}$","pos":1},
{"t":"$200\\ \\text K$","pos":2},
{"t":"$0\\ \\text{°C}$","pos":3},
{"t":"$300\\ \\text K$","pos":4},
{"t":"$50\\ \\text{°C}$","pos":5}
]{% endcapture %}
{% include order.html id="ord-vs-temperature" dati=_d direz="dalla più fredda alla più calda" %}
{% include spoiler.html testo="Mostra la soluzione" %}
In kelvin: $0\ \text K$, $-100\ \text{°C} = 173\ \text K$, $200\ \text K$, $0\ \text{°C} = 273\ \text K$, $300\ \text K$ (cioè $27\ \text{°C}$), $50\ \text{°C} = 323\ \text K$.
{% include spoiler-end.html %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}


## Interpretazione Microscopica della Temperatura 

{% include margin-note.html testo="Che cos'è la temperatura?" %}
Uno degli aspetti della temperatura e del calore che ha affascinato di più gli scienziati è che esse sono qualità **invisibili**. Sappiamo che possiamo renderle visibili grazie a un termometro, ma non sappiamo veramente ***che cosa*** faccia alzare o abbassare il termometro. Nella storia, si sono quindi sviluppate teorie molto originali e interessanti su cosa sia fisicamente e concretamente la temperatura. Noi analizzeremo solo quella in cui crediamo oggi, ma se sei curioso clicca qui di seguito.
{% include margin-note-end.html %}  

{% include spoiler.html testo="Le teorie più originali sul calore, nella storia" %}
Fin dall'antichità si è cercato di capire cosa fosse davvero il calore. Un filosofo greco di nome Empedocle, ad esempio, lo associava al fuoco, e credeva che tutti i corpi fossero costituiti da fuoco: alcuni in quantità maggiore (quelli caldi), altri in quantità minore (quelli freddi). Ma è nel Settecento che nasce e si sviluppa la teoria più affascinante e duratura: quella del <definizione>calorico</definizione>.

Secondo questa teoria, il calore non era energia, ma una vera e propria **sostanza**: un fluido invisibile e privo di peso, contenuto in quantità maggiore nei corpi caldi e minore in quelli freddi, capace di "scorrere" da un corpo all'altro un po' come un liquido. L'idea del calorico spiegava molto bene ciò che osservava: il calore fluisce sempre dal corpo più caldo a quello più freddo perché il calorico "scende" da dove è più concentrato a dove lo è meno, e due corpi raggiungono l'equilibrio termico perché il calorico semplicemente si ridistribuisce tra loro.

Tra i più autorevoli sostenitori di questa teoria c'erano il chimico Antoine Lavoisier e il matematico e fisico Pierre-Simon Laplace, che costruirono insieme uno dei primi <definizione>calorimetri</definizione> della storia — un contenitore pieno di ghiaccio, con cui misuravano la quantità di calorico ceduta da un corpo osservando quanto ghiaccio riuscivano a fondere.

{% include figura.html id="laplace-calorico"
   src="/corsi/immagini/pierre-simon-laplace.webp"
   didascalia="Pierre-Simon Laplace (1749-1827), tra i più autorevoli sostenitori della teoria del calorico." larghezza="220px" %}

A far vacillare la teoria del calorico fu un esperimento sorprendente. Nel 1798 il fisico Benjamin Thompson, conte di Rumford, stava supervisionando la foratura di cannoni di bronzo in un arsenale, e si accorse che l'attrito tra il trapano e il metallo produceva una quantità di calore enorme e, apparentemente, inesauribile — tanto da riuscire a far bollire dell'acqua. Se il calorico fosse stato un fluido presente in quantità limitata dentro il metallo, prima o poi si sarebbe dovuto esaurire; invece continuava a essere prodotto finché si continuava a far girare il trapano. Rumford ne concluse che il calore non potesse essere una sostanza contenuta nei corpi, ma dovesse avere a che fare con il **movimento**.

Ci vollero comunque ancora diversi decenni, e gli esperimenti di scienziati come James Prescott Joule, prima che l'idea del calorico venisse definitivamente abbandonata a favore della teoria che studieremo noi: quella per cui il calore è energia legata al movimento disordinato delle particelle che compongono la materia.
{% include spoiler-end.html %}

{% include margin-note.html testo="Le particelle e l'agitazione termica" %}
Oggi crediamo che la materia sia composta da un numero gigantesco di **molecole**, a loro volta composte da **atomi**. Ci riferiremo in genere agli atomi e alle molecole che compongono la materia con il nome di <definizione>particelle</definizione>. Le particelle che compongono un corpo sono in continuo movimento, anche se il corpo è fermo, per un'agitazione che si chiama <definizione>agitazione termica</definizione>, come puoi vedere nell'animazione qui sotto.
{% include margin-note-end.html %}

{% include figura.html id="alpha-elix"
   src="/corsi/gif/Thermally_Agitated_alpha-elix.mp4"
   didascalia="Un segmento di proteina di alfa-elica che vibra per agitazione termica."
   larghezza="190px" %}

{% include box-imp.html testo="Interpretazione microscopica della temperatura" %}
<u markdown="span">La temperatura misura **l'agitazione termica**</u> di un corpo, cioè la velocità con cui si muovono le particelle che lo compongono. Maggiore è la temperatura, maggiore è la velocità delle particelle.
{% include box-end.html %}

{% include lab-virtuali/agitazione-termica-lab.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qmicroscopica %}[
{"t": "Le particelle di un corpo fermo sono anch'esse ferme.", "ok": false, "s": "No: anche in un corpo fermo le particelle sono in continuo movimento, per l'agitazione termica."},
{"t": "Più è alta la temperatura di un corpo, più velocemente si muovono le sue particelle.", "ok": true, "s": "Sì: la temperatura misura proprio l'agitazione termica."},
{"t": "Raffreddando un corpo, le sue particelle si muovono più lentamente.", "ok": true, "s": "Sì: una temperatura più bassa corrisponde a un'agitazione termica minore."},
{"t": "Le particelle di un bicchiere d'acqua a $80\\ \\text{°C}$ si muovono in media più velocemente di quelle dell'acqua di una piscina a $30\\ \\text{°C}$.", "ok": true, "s": "Sì: conta la temperatura, non la quantità d'acqua. La piscina è molto più grande, ma le sue particelle si agitano di meno."},
{"t": "Secondo la teoria del calorico, il calore era una sostanza che passava da un corpo all'altro.", "ok": true, "s": "Sì: un fluido invisibile e senza peso. Oggi sappiamo invece che il calore è energia legata al movimento delle particelle."}
]{% endcapture %}
{% include quiz.html domande=_qmicroscopica id="q-microscopica" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Le molecole dell'aria che stai respirando, a temperatura ambiente, si muovono in media a una velocità di circa
{% capture _o %}[
{"v":"a","t":"$0{,}5\\ \\text{m/s}$, come una persona che passeggia piano"},
{"v":"b","t":"$15\\ \\text{m/s}$, come un'automobile in città"},
{"v":"c","t":"$500\\ \\text{m/s}$, più veloci di un aereo di linea"},
{"v":"d","t":"$300\\,000\\ \\text{km/s}$, come la luce"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-molecole-aria" opts=_o ok="c" s="Circa $500\ \text{m/s}$, cioè quasi $1\,800\ \text{km/h}$! Non ce ne accorgiamo perché ogni molecola percorre pochissima strada prima di urtarne un'altra e cambiare direzione: si muovono velocissime, ma in tutte le direzioni a caso. È proprio questa l'agitazione termica." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
In un solido le particelle non possono andarsene in giro come in un gas: ognuna resta più o meno al suo posto. Come si manifesta allora la loro agitazione termica?
{% capture _o %}[
{"v":"a","t":"Non c'è: nei solidi le particelle sono ferme"},
{"v":"b","t":"Le particelle vibrano avanti e indietro attorno alla loro posizione, tanto più velocemente quanto più alta è la temperatura"},
{"v":"c","t":"Le particelle ruotano tutte insieme nello stesso verso"},
{"v":"d","t":"Le particelle si allontanano sempre di più, finché il solido sparisce"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-solido-vibra" opts=_o ok="b" s="Ogni particella di un solido vibra attorno alla sua posizione, legata alle vicine come da tante piccole molle. Scaldando il solido le vibrazioni diventano più veloci e più ampie; è proprio per questo, come vedrai, che i corpi scaldati si dilatano." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _r %}Nel tè caldo le particelle d'acqua si muovono più velocemente, cioè hanno un'agitazione termica maggiore. Urtano i granelli di zucchero più spesso e con più forza, e staccano più rapidamente le molecole di zucchero, che poi si sparpagliano nel tè. Nel tè freddo gli urti sono più lenti e più deboli, e lo zucchero si scioglie più lentamente.{% endcapture %}
{% include risposta-aperta.html id="ra-vs-zucchero" tipo="spiega"
   domanda="Lo zucchero si scioglie molto più in fretta nel tè caldo che nel tè freddo. Prova a spiegarlo pensando alle particelle."
   risposta=_r %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

## Il Termometro e la Dilatazione Termica

{% include margin-note.html testo="Come funziona un termometro?" %}
Sappiamo tutti che i termometri contengono un liquido (normalmente mercurio) il cui livello si alza quando la temperatura aumenta e si abbassa quando la temperatura diminuisce. Eppure, non è semplice spiegare *perché* il liquido all'interno si comporti in quel modo. 
{% include margin-note-end.html %}

{% include margin-note.html testo="La dilatazione termica" %}
La motivazione è che il liquido all'interno **si espande**, cioè aumenta di volume quando aumenta la temperatura. Questo fenomeno si chiama <definizione>dilatazione termica</definizione> e <u markdown="span">avviene con **tutti** i corpi</u> (non solo con i termometri).  
{% include margin-note-end.html %}
{% include margin-note.html testo="La spiegazione microscopica" %}
Esso avviene perché, quando la temperatura di un corpo aumenta, aumenta anche la velocità con cui si muovono le particelle che costituiscono il corpo. Muovendosi più velocemente, le particelle si urtano con maggiore intensità. Pertanto, esse tendono a “rimbalzare” maggiormente e quindi ad allontanarsi. Il materiale, quindi, si dilata.

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

{% include unisci.html %}
{% include esercizi/unita-alfa.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qdilatazione %}[
{"t": "Quasi tutti i corpi, scaldandosi, aumentano di volume.", "ok": true, "s": "Sì: è la dilatazione termica, che riguarda solidi, liquidi e gas."},
{"t": "Il coefficiente di dilatazione $\\alpha$ è uguale per tutti i materiali.", "ok": false, "s": "No: dipende dal materiale. Materiali diversi, scaldati allo stesso modo, si dilatano in modo diverso."},
{"t": "Se $\\Delta T$ è negativo, anche $\\Delta L$ è negativo: il corpo si accorcia.", "ok": true, "s": "Sì: raffreddandosi, un corpo si contrae."},
{"t": "Due barre di ferro, una lunga il doppio dell'altra, scaldate della stessa $\\Delta T$: la più lunga si allunga il doppio.", "ok": true, "s": "Sì: $\\Delta L$ è direttamente proporzionale alla lunghezza iniziale $L_i$."},
{"t": "Una barra lunga $10\\ \\text m$ con $\\alpha=1{,}2\\times10^{-5}\\ \\text K^{-1}$, scaldata di $50\\ \\text K$, si allunga di $6\\ \\text{mm}$.", "ok": true, "s": "Sì: $\\Delta L=1{,}2\\times10^{-5}\\ \\text K^{-1}\\cdot 10\\ \\text m\\cdot 50\\ \\text K=6\\times10^{-3}\\ \\text m=6\\ \\text{mm}$."}
]{% endcapture %}
{% include quiz.html domande=_qdilatazione id="q-dilatazione" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcVsEiffel" %}
La Torre Eiffel è di ferro ($\alpha = 1{,}2\times10^{-5}\ \text K^{-1}$) ed è alta circa $300\ \text m$ (senza antenne). Fra una giornata d'inverno a $-5\ \text{°C}$ e una d'estate a $35\ \text{°C}$, di quanti centimetri cambia la sua altezza?

{% include fill-multi.html testo="$\Delta L =$ [14,4|14.4] cm" s="$\Delta T = 35 - (-5) = 40\ \text K$, quindi $\Delta L = \alpha\,L_i\,\Delta T = 1{,}2\times10^{-5}\ \text K^{-1}\cdot 300\ \text m\cdot 40\ \text K = 0{,}144\ \text m$: d'estate la torre è circa $15\ \text{cm}$ più alta che d'inverno." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una barra d'acciaio ($\alpha = 1{,}2\times10^{-5}\ \text K^{-1}$) e una d'alluminio ($\alpha = 2{,}4\times10^{-5}\ \text K^{-1}$) hanno la stessa lunghezza e vengono scaldate della stessa $\Delta T$. La barra d'alluminio si allunga
{% capture _o %}[
{"v":"a","t":"di meno, perché è più leggera"},
{"v":"b","t":"come quella d'acciaio"},
{"v":"c","t":"il doppio di quella d'acciaio"},
{"v":"d","t":"il quadruplo di quella d'acciaio"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-acciaio-alluminio" opts=_o ok="c" s="In $\Delta L = \alpha\,L_i\,\Delta T$ la lunghezza iniziale e $\Delta T$ sono le stesse: $\Delta L$ è direttamente proporzionale ad $\alpha$, che per l'alluminio è il doppio." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _r %}D'estate pendono di più. Con il caldo il metallo dei fili si dilata e si allunga: la distanza fra i tralicci resta la stessa, e il filo, più lungo, deve formare una curva più profonda. Per questo i fili si montano lasciandoli un po' lenti: d'inverno si accorciano, e se fossero già tesi rischierebbero di spezzarsi.{% endcapture %}
{% include risposta-aperta.html id="ra-vs-fili-luce" tipo="prevedi"
   domanda="I fili della corrente sono tesi fra due tralicci. D'estate pendono più o meno che d'inverno? Perché?"
   risposta=_r %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}
{% include unisci-end.html %}

## Alcuni Esperimenti e alcune Applicazioni Tecnologiche della Dilatazione Termica

{% include margin-note.html testo="Esperimenti e applicazioni" %}
La dilatazione termica si può osservare con esperimenti semplici, e va sempre tenuta in conto quando si progettano oggetti e costruzioni: a volte la si sfrutta, a volte bisogna lasciarle spazio.
{% include margin-note-end.html %}

{% include box-note.html testo="La dilatazione termica, dall'esperimento alla tecnologia" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="L'anello di 's Gravesande" %}
{% include video.html id="vfv7Ao2T1G0" %}
L'esperimento ideato dal fisico e filosofo olandese Willem 's Gravesande nel Settecento: una sfera di metallo passa appena attraverso un anello. Se si scalda la sfera, questa si dilata e non passa più; quando si raffredda, torna a passare.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Il dilatometro" %}
{% include lab-virtuali/dilatometro-lab.html %}
Una sbarra, fissata a un estremo, viene scaldata da un becco Bunsen. Allungandosi spinge il braccio corto di una leva: la lancetta lunga rende visibile anche un allungamento piccolissimo.
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="La lamina bimetallica e l'interruttore termico" %}
{% include video.html id="BnAQWYFggC8" %}
Una <definizione>lamina bimetallica</definizione> è fatta di due strisce di metalli diversi saldate insieme, con coefficienti di dilatazione $\alpha$ diversi. Scaldandola, una striscia si allunga più dell'altra e la lamina si incurva. Se la lamina fa parte di un circuito, incurvandosi può aprire o chiudere un contatto: è un <definizione>interruttore termico</definizione>, usato ad esempio nei termostati, nei ferri da stiro e come protezione contro il surriscaldamento. (Video in inglese.)
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Il termometro bimetallico" %}
<div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-items:center;">
<img src="{{ '/corsi/immagini/bimetal-thermometer.webp' | relative_url }}" alt="Termometro a quadrante per barbecue, con una lancetta e una scala da 100 a 500 gradi Fahrenheit" loading="lazy" style="width:200px;max-width:100%;border-radius:8px;">
{% include lab-virtuali/termometro-bimetallico-lab.html %}
</div>

Dentro il termometro della foto c'è il meccanismo dell'animazione: una lamina bimetallica avvolta a spirale. Scaldandosi la spirale si svolge e fa ruotare la lancetta. (La scala della foto è in gradi Fahrenheit, l'unità usata negli Stati Uniti.)
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/giunto-dilatazione.webp" alt="Binari ferroviari con un giunto di dilatazione: le estremità di due rotaie sono tagliate in obliquo e affiancate" titolo="I binari del treno" %}
Le rotaie, d'estate, si allungano. Se fossero bloccate senza spazio, si deformerebbero. Per questo, in alcuni punti, i binari hanno dei <definizione>giunti di dilatazione</definizione>: le estremità di due rotaie sono tagliate in obliquo e affiancate, così possono scorrere l'una accanto all'altra quando si allungano o si accorciano, senza lasciare un vuoto sotto le ruote.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/giunti-dilatazione-strada.jpeg" alt="Un operaio cammina accanto a un giunto di dilatazione che attraversa la carreggiata di un viadotto" titolo="I ponti e i viadotti" %}
Anche un ponte si allunga d'estate e si accorcia d'inverno: un viadotto lungo qualche centinaio di metri può cambiare lunghezza di parecchi centimetri. Per questo, fra un tratto e l'altro, si lasciano dei giunti di dilatazione, come quello nella foto, che attraversano tutta la carreggiata e lasciano al ponte lo spazio per muoversi.
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qapplicazioni %}[
{"t": "Nella lamina bimetallica i due metalli hanno lo stesso coefficiente di dilatazione.", "ok": false, "s": "No: devono avere coefficienti diversi. Se si dilatassero allo stesso modo, la lamina si allungherebbe senza incurvarsi."},
{"t": "I giunti di dilatazione lasciano spazio a ponti e binari per allungarsi d'estate.", "ok": true, "s": "Sì: senza quello spazio, la dilatazione deformerebbe la struttura."},
{"t": "Nell'anello di 's Gravesande, la sfera scaldata non passa più perché si è dilatata.", "ok": true, "s": "Sì: scaldata, la sfera aumenta di volume e diventa più grande del foro."},
{"t": "Nell'anello di 's Gravesande, se scaldassi anche l'anello insieme alla sfera, la sfera potrebbe tornare a passare.", "ok": true, "s": "Sì: anche l'anello si dilata, e il suo foro si allarga, proprio come si ingrandirebbe una fotografia dell'anello."},
{"t": "Scaldata, una lamina bimetallica si incurva dalla parte del metallo che si dilata di più.", "ok": false, "s": "No: il metallo che si allunga di più resta all'esterno della curva. La lamina si incurva dalla parte del metallo che si dilata di meno."}
]{% endcapture %}
{% include quiz.html domande=_qapplicazioni id="q-applicazioni" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una teglia di vetro, appena tolta dal forno, viene messa sotto l'acqua fredda e si crepa. Perché?
{% capture _o %}[
{"v":"a","t":"Perché l'acqua fredda scioglie il vetro"},
{"v":"b","t":"Perché la superficie, raffreddata di colpo, si contrae subito, mentre l'interno del vetro è ancora caldo e dilatato: le due parti «tirano» in modo diverso e il vetro si spezza"},
{"v":"c","t":"Perché il vetro caldo diventa più pesante"},
{"v":"d","t":"Perché il vetro non si dilata con la temperatura"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-vetro-forno" opts=_o ok="b" s="Il vetro conduce male il calore: la superficie si raffredda subito, l'interno resta caldo per un po'. La superficie vorrebbe accorciarsi, l'interno no, e lo sforzo può rompere la teglia. I vetri da forno speciali hanno un coefficiente di dilatazione molto piccolo proprio per resistere a questi sbalzi." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
I materiali per le otturazioni dei denti vengono scelti con un coefficiente di dilatazione simile a quello del dente. Perché?
{% capture _o %}[
{"v":"a","t":"Per avere lo stesso colore del dente"},
{"v":"b","t":"Perché mangiando un gelato o bevendo un tè caldo dente e otturazione cambiano temperatura insieme: se si dilatassero in modo diverso, l'otturazione si staccherebbe o creperebbe il dente"},
{"v":"c","t":"Perché così l'otturazione pesa come il dente"},
{"v":"d","t":"Perché il dente non cambia mai temperatura"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-otturazioni" opts=_o ok="b" s="Nella bocca la temperatura cambia di decine di gradi in pochi secondi. Se otturazione e dente si dilatassero in modo diverso, a ogni sbalzo si creerebbero piccoli spazi fra i due, o sforzi che potrebbero crepare il dente." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _r %}Quando la piastra diventa troppo calda, anche la lamina bimetallica si scalda: i due metalli si dilatano in modo diverso e la lamina si incurva, staccandosi dal contatto e aprendo il circuito. La corrente non passa più e la piastra smette di scaldarsi. Raffreddandosi, la lamina torna dritta, richiude il contatto, e la piastra ricomincia a scaldarsi. Così la temperatura oscilla di poco attorno al valore scelto.{% endcapture %}
{% include risposta-aperta.html id="ra-vs-ferro-stiro" tipo="spiega"
   domanda="Il termostato di un vecchio ferro da stiro è una lamina bimetallica che fa parte del circuito elettrico che scalda la piastra. Spiega come fa a mantenere la piastra a una temperatura quasi costante."
   risposta=_r %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

# La Legge Fondamentale della Calorimetria


{% include margin-note.html testo="Calore e temperatura" %}
Sappiamo che la temperatura di un corpo cambia quando si fornisce ad esso --- o si sottrae da esso --- **calore**. Dobbiamo quindi trovare un modo per connettere la **variazione della temperatura** alla quantità di **calore** che forniamo ad un corpo o che sottraiamo da esso. Esprimeremo il calore fornito con un numero **positivo** e quello sottratto con un numero **negativo**.
{% include margin-note-end.html %}

Puoi osservare il riscaldamento e il raffreddamento di un corpo con la seguente animazione.
{% include lab-virtuali/calorimetria-lab.html %}

{% include margin-note.html testo="Costruire la formula" %}
Notiamo che la variazione della temperatura è:
- direttamente proporzionale alla quantità di calore $Q$ che viene fornita;
- inversamente proporzionale alla massa da riscaldare;
- dipendente dal tipo di materiale (prova a far bollire acqua e olio, vedrai come sono diversi!). Questa dipendenza è una caratteristica del materiale che chiameremo <definizione>calore specifico</definizione> e indicheremo con il simbolo $c$, e corrisponde alla resistenza che oppone il materiale al suo riscaldamento.
{% include margin-note-end.html %}

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

{% include box-imp.html testo="Legge fondamentale della calorimetria" %}
Il calore $Q$ fornito a un corpo di massa $m$ è legato alla sua variazione di temperatura $\Delta T$ secondo la legge fondamentale della calorimetria:

$$Q = c\, m \, \Delta T,$$

ove $c$ indica una caratterista del materiale che si chiama **calore specifico**.
{% include box-end.html %}

{% include margin-note.html testo="Il segno di Q e di ΔT" %}
Notiamo che
- se $Q$ è **negativo** (cioè sottraiamo calore dal corpo) allora $\Delta T <0$, cioè la temperatura **diminuisce**;
- se $Q$ è **positivo** (cioè forniamo calore al corpo) allora $\Delta T>0$, cioè la temperatura **aumenta**.
{% include margin-note-end.html %}

Inoltre, verifica con il seguente esercizio che l'unità di misura del calore specifico $c$ è il joule per chilogrammo kelvin, cioè che

$$[c]=\dfrac{\text J}{\text{kg}\cdot\text K}.$$

{% include esercizi/unita-calore-specifico.html %}

{% include margin-note.html testo="Il significato del calore specifico" %}
Con l'esercizio precedente hai ottenuto che il calore specifico $c$ è 

$$c=\frac{Q}{m\,\Delta T}.$$


Quindi, <u markdown="span">il calore specifico di un materiale è il calore che serve per aumentare di $1\ \text K$ la temperatura di $1\ \text{kg}$ di sostanza</u>. Ad esempio, il calore specifico dell'acqua (distillata) è $c\_{\text{H}\_2\text O}=4\,186 \ \text{J/(kg K)}$. Completa:

{% include fill-multi.html testo="il che significa che per alzare di $1\ \text K$ la temperatura di $1\ \text{kg}$ di acqua servono [4186|4.186] J." %}

Per il ferro, invece, il calore specifico è pari a $c\_{\text{Fe}}=450 \ \text{J/(kg K)}$. Completa:

{% include fill-multi.html testo="cioè per aumentare di [1] K la temperatura di [1] kg di ferro bastano solo [450] J." %}

Quindi, <u markdown="span">un calore specifico **alto** significa che il materiale si riscalda **difficilmente**, mentre un calore specifico **basso** significa che il materiale si riscalda **facilmente**</u>.
{% include margin-note-end.html %}

{% include box-imp.html testo="Il calore specifico" %}


Il calore specifico è una caratteristica del materiale che misura la quantità di calore che serve per aumentare di $1 \ \text K$ la temperatura di $1 \ \text{kg}$ di materiale. Un calore specifico alto indica che il materiale si riscalda difficilmente; un calore specifico basso indica che il materiale si riscalda facilmente.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qcalorimetria %}[
{"t": "Fornendo calore a un corpo ($Q>0$), la sua temperatura aumenta.", "ok": true, "s": "Sì: con $Q>0$ anche $\\Delta T=\\frac{Q}{c\\,m}$ è positiva."},
{"t": "A parità di calore fornito, un corpo di massa doppia si scalda il doppio.", "ok": false, "s": "No: si scalda la metà, perché $\\Delta T$ è inversamente proporzionale alla massa."},
{"t": "L'acqua ha un calore specifico più alto del ferro: a parità di massa e di calore fornito, si scalda di meno.", "ok": true, "s": "Sì: un calore specifico alto significa che il materiale si riscalda difficilmente."},
{"t": "Per scaldare di $10\\ \\text K$ due chilogrammi d'acqua servono circa $84\\,000\\ \\text J$.", "ok": true, "s": "Sì: $Q=c\\,m\\,\\Delta T=4\\,186\\cdot 2\\cdot 10\\approx 84\\,000\\ \\text J$."},
{"t": "D'estate la sabbia della spiaggia scotta mentre l'acqua del mare resta fresca anche perché l'acqua ha un calore specifico molto più alto della sabbia.", "ok": true, "s": "Sì: ricevendo dal Sole la stessa energia, l'acqua si scalda molto meno della sabbia."}
]{% endcapture %}
{% include quiz.html domande=_qcalorimetria id="q-calorimetria" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcVsVasca" %}
Per fare un bagno caldo si riempie la vasca con $150\ \text{kg}$ d'acqua, che va scaldata da $15\ \text{°C}$ a $40\ \text{°C}$. Quanto calore serve? ($c_{\text{acqua}} = 4\,186\ \text{J/(kg·K)}$)

{% include fill-multi.html testo="$Q \approx$ [1,57|1.57|1,6|1.6] $\times10^{7}$ J" s="$Q = c\,m\,\Delta T = 4\,186\cdot 150\cdot 25\ \text J \approx 1{,}57\times10^{7}\ \text J$: più di quanto serve per sollevare un'automobile di una tonnellata in cima a un grattacielo di $1\,500$ metri." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una torta di mele è appena uscita dal forno: la crosta e il ripieno sono alla stessa temperatura. Eppure la crosta si può mangiare quasi subito, mentre il ripieno ustiona la lingua. Perché?
{% capture _o %}[
{"v":"a","t":"Perché il ripieno è più caldo della crosta"},
{"v":"b","t":"Perché il ripieno è pieno d'acqua, che ha un calore specifico altissimo: raffreddandosi fino alla temperatura della lingua, cede molto più calore della crosta"},
{"v":"c","t":"Perché la crosta è un isolante"},
{"v":"d","t":"Perché le mele producono calore"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-torta-mele" opts=_o ok="b" s="Alla stessa temperatura, ciò che conta per scottarsi è quanto calore il cibo cede alla lingua mentre si raffredda: $Q = c\,m\,\Delta T$. Il ripieno, ricco d'acqua, ha un calore specifico molto più alto della crosta secca e, raffreddandosi degli stessi gradi, cede molto più calore." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcVsCorpo" %}
A riposo, il corpo umano produce circa $100\ \text W$ di potenza termica (cioè $100\ \text J$ ogni secondo). Se una persona di $70\ \text{kg}$ non riuscisse a cedere all'ambiente nemmeno un po' di questo calore, di quanto salirebbe la sua temperatura in un'ora? (Il calore specifico medio del corpo umano è circa $3\,500\ \text{J/(kg·K)}$.)

{% include fill-multi.html testo="$\Delta T \approx$ [1,5|1.5|1,47|1.47] K" s="In un'ora il corpo produce $Q = 100\ \text W\cdot 3\,600\ \text s = 360\,000\ \text J$, e $\Delta T = \dfrac{Q}{c\,m} = \dfrac{360\,000}{3\,500\cdot 70}\ \text K \approx 1{,}5\ \text K$. In un'ora avrebbe la febbre: ecco perché il corpo deve cedere continuamente calore, e perché d'estate sudiamo." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

# La Trasmissione del Calore

{% include margin-note.html testo="Il calore non è una proprietà" %}
È fondamentale comprendere che <u markdown="span">il calore non è in nessun modo una *proprietà* di un corpo</u>. Un corpo non *ha* calore.  
Il calore è una forma di energia <u markdown="span">che si **trasmette** da un corpo a un altro.</u>
{% include margin-note-end.html %} 

{% include margin-note.html testo="Tre modi di trasmettere il calore" %}
La descrizione della trasmissione del calore è molto affascinante, perché non è possibile descrivere ***come*** esso avvenga se non in termini di ciò che succede **a livello microscopico**, cioè a livello delle molecole e degli atomi di cui sono composti i corpi, e questo rivela quanto sia complesso e ricco il mondo che abbiamo attorno, proprio quello a cui siamo più abituati.

Le forme di trasmissione del calore sono solo tre e in questa sezione le affronteremo una ad una.
{% include margin-note-end.html %}

{% include margin-note.html testo="La potenza termica" %}
Prima, però, ci serve una grandezza che ci dica *quanto velocemente* il calore si trasmette. Ricordi la [potenza]({{ '/corsi/meccanica/06_Energia/' | relative_url }}#la-potenza)? Nel capitolo sull'energia l'abbiamo definita come il lavoro compiuto diviso il tempo impiegato per compierlo, $P = \dfrac{L}{\Delta t}$, e l'abbiamo misurata in watt ($1\ \text W = 1\ \text J/\text s$): la pompa era più potente dell'omino non perché compisse più lavoro, ma perché compiva lo stesso lavoro in meno tempo.

Poiché anche il calore è energia, possiamo fare esattamente la stessa cosa. Spesso, infatti, non ci interessa tanto *quanto* calore passa in totale da un corpo a un altro, ma *quanto ne passa ogni secondo*. Questa grandezza si chiama <definizione>potenza termica</definizione>.
{% include margin-note-end.html %}

{% include box-imp.html testo="La potenza termica" %}
La potenza termica $P$ è la quantità di calore $Q$ trasmessa in un certo intervallo di tempo $\Delta t$, divisa per l'intervallo di tempo stesso:

$$P = \frac{Q}{\Delta t}.$$

Come ogni potenza, si misura in watt (W): $1\ \text W = 1\ \text J/\text s$.
{% include box-end.html %}

{% include unisci.html %}
{% include esercizi/invert-potenza-termica.html %}

{% include esercizi/esercizio-potenza-termica.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qtrasmissione %}[
{"t": "Il calore è una proprietà di un corpo. Un corpo è più caldo di un altro se ha più calore.", "ok": false, "s": "No: un corpo non «ha» calore. Il calore è energia che si trasmette da un corpo a un altro."},
{"t": "La potenza termica si misura in watt.", "ok": true, "s": "Sì: come ogni potenza, $1\\ \\text W = 1\\ \\text J/\\text s$."},
{"t": "Se in $10\\ \\text s$ passano $500\\ \\text J$ di calore, la potenza termica è $50\\ \\text W$.", "ok": true, "s": "Sì: $P=\\frac{Q}{\\Delta t}=\\frac{500\\ \\text J}{10\\ \\text s}=50\\ \\text W$."},
{"t": "Due stufe cedono la stessa quantità di calore: ha la potenza termica maggiore quella che impiega più tempo.", "ok": false, "s": "No: a parità di calore, la potenza è maggiore per chi impiega meno tempo."},
{"t": "Un buon cappotto impedisce del tutto al calore del corpo di uscire.", "ok": false, "s": "No: lo fa uscire molto più lentamente, cioè riduce la potenza termica, ma non la annulla."}
]{% endcapture %}
{% include quiz.html domande=_qtrasmissione id="q-trasmissione" senza_esempi="true" %}
{% include box-end.html %}
{% include unisci-end.html %}


## La Trasmissione del Calore per Conduzione e la Legge di Fourier

{% include margin-note.html testo="La conduzione" %}
All'interno di un **solido**, il calore si trasmette per <definizione>conduzione</definizione>. Per comprendere di cosa si tratta, osserva la seguente animazione.
{% include margin-note-end.html %}

{% include lab-virtuali/conduzione-barra-lab.html %}


{% include margin-note.html testo="La spiegazione microscopica" %}
Nota che, riscaldando una barra di metallo a una estremità, l'energia si propaga dentro la barra, trasferendosi dalla regione più calda alla regione più fredda. Nello scenario “vista microscopica” puoi anche vedere ***come*** avvenga questa trasmissione di energia: le particelle delle zone più calde si muovono a velocità più elevate e impattano contro le particelle delle zone più fredde, donando loro energia cinetica, e quindi aumentando la temperatura di quella zona.
{% include margin-note-end.html %}

{% include margin-note.html testo="Costruire la formula" %}
Osserva anche, con la modalità laboratorio, che la potenza termica $P$ che si trasmette fra due sezioni della barra, nei punti $x_1$ e $x_2$ (cioè il calore che ogni secondo passa dalla sezione più calda a quella più fredda), è:
- direttamente proporzionale all'area $A$ della sezione (maggiore è l'area e maggiore è il numero di particelle che ogni secondo trasmettono il calore);
- direttamente proporzionale alla differenza di temperatura $\Delta T$ fra le due sezioni;
- inversamente proporzionale alla distanza $\Delta x$ fra le due sezioni;
- dipendente dal materiale attraverso una grandezza che chiamiamo <definizione>conducibilità termica</definizione> e indichiamo con $k$, e che esprime la capacità di un materiale di trasmettere calore.


Pertanto, la formula si costruisce nel seguente modo, e prende il nome di <definizione>legge di Fourier</definizione>.
{% include margin-note-end.html %}
{% include box-imp.html testo="Legge di Fourier" %}
La legge di Fourier descrive la potenza termica trasmessa all'interno di un solido:
{% include eq-annotated.html
     id="fourier"
     formula="P = k\, A\, \frac{\Delta T}{\Delta x}."
     frammenti="P|k|A|\Delta T|\Delta x"
     etichette="potenza termica trasmessa dalla sezione più calda a quella più fredda|conducibilità termica (proprietà del materiale)|area della sezione|differenza di temperatura fra le due sezioni|distanza fra le due sezioni"
     posizioni="alto|basso|alto|alto|basso"
  %}

{% include box-end.html %}

Verifica con il seguente esercizio che l'unità di misura della conducibilità termica $k$ è $\dfrac{\text W}{\text m\cdot\text K}$.

{% include esercizi/unita-conducibilita.html %}

Ricapitolando:

{% capture _ua_cond %}{"lhs":{"s":"k"},
 "rhs":[{"f":[[{"s":"P","u":"W"},{"o":"·"},{"s":"Δx","u":"m"}],[{"s":"A","u":"m²"},{"o":"·"},{"s":"ΔT","u":"K"}]]}],
 "passi":[[{"f":[["W",{"o":"·"},"m"],[{"t":"m","hl":true},{"o":"·"},{"t":"m","hl":true},{"o":"·"},"K"]]}],
          [{"f":[["W",{"o":"·"},{"t":"m","x":true}],[{"t":"m","x":true},{"o":"·"},"m",{"o":"·"},"K"]]}],
          [{"f":[["W"],["m",{"o":"·"},"K"]]}]]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-cond" dati=_ua_cond %}

cioè

$$[k]=\frac{\text W}{\text m\cdot\text K}.$$

{% include margin-note.html testo="Conduttori e isolanti" %}
<u>La conducibilità termica $k$ misura quindi quanto un materiale conduce il calore.</u> Un materiale con una **elevata** conducibilità termica è un <definizione>conduttore termico</definizione>, un materiale con **bassa** conducibilità termica è invece un <definizione>isolante termico</definizione>. Ad esempio, la conducibilità del rame (buon conduttore) è $k_{\text{Cu}} \approx 390\ \dfrac{\text W}{\text m\cdot\text K}$, mentre quella del legno (buon isolante) è in media $k_{\text{Legno}}\approx 0{,}15\ \dfrac{\text W}{\text m\cdot\text K}$ (il valore varia un po' a seconda del tipo di legno e di quanto è umido). A parità di forma e di differenza di temperatura, attraverso il rame passa una potenza termica più di duemila volte maggiore che attraverso il legno.
{% include margin-note-end.html %}

{% capture _r %}Il metallo della padella è un buon conduttore termico: il calore della fiamma passa rapidamente dal fondo a tutta la padella. Se anche il manico fosse di metallo, il calore arriverebbe fino alla mano e lo scotterebbe. Il legno, invece, ha una conducibilità termica migliaia di volte più piccola: è un isolante termico, quindi attraverso il manico passa pochissimo calore e lo si può impugnare senza scottarsi.{% endcapture %}
{% capture _dpad %}<img src="{{ '/corsi/immagini/padella-manico-legno.webp' | relative_url }}" alt="Padella arancione di metallo con il manico di legno, appoggiata su un tagliere" style="display:block;width:100%;max-width:340px;margin:.3rem auto .6rem;border-radius:6px;">Perché molte padelle hanno il manico di legno? Usa la conducibilità termica per spiegarlo.{% endcapture %}
{% include risposta-aperta.html id="ra-spiega-padella" tipo="spiega"
   domanda=_dpad
   risposta=_r %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qconduzione %}[
{"t": "Nella conduzione le particelle si spostano da un'estremità all'altra del corpo.", "ok": false, "s": "No: le particelle restano al loro posto e si passano l'energia attraverso gli urti."},
{"t": "Il rame è un buon isolante termico.", "ok": false, "s": "No: il rame ha una conducibilità termica molto alta, quindi è un ottimo conduttore."},
{"t": "Raddoppiando l'area della sezione di una barra, la potenza termica che la attraversa raddoppia.", "ok": true, "s": "Sì: nella legge di Fourier $P$ è direttamente proporzionale ad $A$."},
{"t": "Raddoppiando lo spessore di una parete, la potenza termica che la attraversa raddoppia.", "ok": false, "s": "No: si dimezza, perché $P$ è inversamente proporzionale a $\\Delta x$."},
{"t": "Al tatto, un oggetto di metallo sembra più freddo di uno di legno alla stessa temperatura, perché il metallo porta via calore dalla mano più rapidamente.", "ok": true, "s": "Sì: i due oggetti sono alla stessa temperatura, ma il metallo, buon conduttore, toglie calore alla mano con una potenza termica molto maggiore."}
]{% endcapture %}
{% include quiz.html domande=_qconduzione id="q-conduzione" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include calc-margin.html id="calcVsMattoni" %}
Una parete di mattoni ($k = 0{,}7\ \text{W/(m·K)}$) ha un'area di $10\ \text m^2$ ed è spessa $30\ \text{cm}$. Dentro casa ci sono $20\ \text{°C}$, fuori $0\ \text{°C}$. Quale potenza termica attraversa la parete?

{% include num.html id="numVsMattoni" valore="466.7" unit="W" tol="1" %}
{% include spoiler.html testo="Mostra la soluzione" %}
$$P = k\,A\,\frac{\Delta T}{\Delta x} = 0{,}7\ \tfrac{\text W}{\text m\cdot\text K}\cdot 10\ \text m^2\cdot\frac{20\ \text K}{0{,}3\ \text m}\approx 467\ \text W:$$
quasi mezzo kilowatt per una sola parete, che la caldaia deve rimpiazzare continuamente.
{% include spoiler-end.html %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Le finestre a doppio vetro hanno due lastre separate da uno strato d'aria (o di un altro gas) di qualche millimetro. Perché isolano molto meglio di un vetro singolo?
{% capture _o %}[
{"v":"a","t":"Perché due vetri sono il doppio più spessi"},
{"v":"b","t":"Perché l'aria ferma è un pessimo conduttore di calore: la sua conducibilità termica è decine di volte più piccola di quella del vetro"},
{"v":"c","t":"Perché il secondo vetro riflette il freddo"},
{"v":"d","t":"Perché fra i due vetri c'è il vuoto"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-doppio-vetro" opts=_o ok="b" s="La conducibilità termica dell'aria è circa $0{,}025\ \text{W/(m·K)}$, quella del vetro circa $0{,}9\ \text{W/(m·K)}$: pochi millimetri d'aria ferma isolano quanto decine di centimetri di vetro. Lo strato è sottile proprio perché l'aria resti ferma e non si metta a circolare." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
D'inverno molti uccelli «si gonfiano», sollevando le piume, e sembrano due volte più grossi. A che cosa serve?
{% capture _o %}[
{"v":"a","t":"A spaventare i predatori"},
{"v":"b","t":"A intrappolare uno strato d'aria ferma fra le piume: l'aria è un ottimo isolante termico, e l'uccello disperde meno calore"},
{"v":"c","t":"A raccogliere più luce del Sole"},
{"v":"d","t":"A far circolare più aria attorno al corpo per scaldarsi"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-piume" opts=_o ok="b" s="È lo stesso principio dei piumini e dei maglioni di lana: non sono le piume o la lana a scaldare, ma l'aria ferma che intrappolano, che conduce pochissimo il calore." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}



  
## La Trasmissione del Calore per Convezione

{% include margin-note.html testo="La convezione" %}
In un liquido o in un gas, il calore si trasmette per <definizione>convezione</definizione>. Per comprendere di cosa si tratti, osserva la seguente animazione.
{% include margin-note-end.html %}

{% include lab-virtuali/convezione-pentola-lab.html %}

{% include margin-note.html testo="La spiegazione microscopica" %}
Nella vista microscopica, le particelle sul fondo, scaldate dalla fiamma, vibrano di più e [si allontanano](#il-termometro-e-la-dilatazione-termica) le une dalle altre: l'acqua calda si dilata, diventa **meno densa** e spinge verso l'alto le particelle che le stanno sopra. L'acqua calda sale, e quella fredda, più densa, scende ai lati a prenderne il posto.
{% include margin-note-end.html %}

{% include margin-note.html testo="Il moto convettivo" %}
Nella vista macroscopica si vede il risultato: l'acqua calda sale al centro, in superficie si raffredda, scende lungo le pareti e sul fondo torna verso il centro. Si forma un circuito chiuso, detto <definizione>moto convettivo</definizione>, che porta il calore in tutta l'acqua.
{% include margin-note-end.html %}

{% include box-imp.html testo="La convezione" %}
La convezione è la trasmissione del calore nei liquidi e nei gas <u markdown="span">dovuto a uno **spostamento di materia** a causa di una **differenza di temperatura**</u>.
{% include box-end.html %}

{% include box-warn.html testo="«Il calore sale»?" %}
Non è così: il calore va sempre dalla zona più calda a quella più fredda, **in qualsiasi direzione**. Ciò che sale è il **fluido caldo**, perché è meno denso.
{% include box-end.html %}

{% include box-note.html testo="La convezione intorno a te" %}
La convezione è dappertutto intorno a te: scorri gli esempi.

{% include scorri.html %}
{% include scorri-slide.html img="/corsi/immagini/convection-heater.webp" alt="Una stanza con un termosifone: l'aria calda sale sopra il termosifone, attraversa la stanza vicino al soffitto, scende dalla parte opposta e torna verso il termosifone lungo il pavimento" titolo="Il termosifone" %}
Il termosifone scalda l'aria vicina, che sale, attraversa la stanza vicino al soffitto, si raffredda, scende e torna verso il termosifone: un moto convettivo. Per questo i termosifoni si mettono in basso e i condizionatori in alto.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/convection-bird.webp" alt="Una sterna in volo con le ali spiegate" titolo="Gli uccelli e le correnti termiche" %}
Il terreno scaldato dal Sole scalda l'aria sopra di sé, che sale in colonne: le **correnti termiche**. Molti uccelli (e i piloti di parapendio) le sfruttano per salire di quota quasi senza battere le ali.
{% include scorri-slide-end.html %}
{% include scorri-slide.html img="/corsi/immagini/convection-currents-earth.webp" alt="A sinistra, uno spaccato della Terra con i moti convettivi nel mantello sotto le placche; a destra, una pentola d'acqua sul fuoco con gli stessi moti convettivi" titolo="Sotto i tuoi piedi: il mantello terrestre" %}
Le rocce caldissime del mantello terrestre si muovono per convezione, come l'acqua nella pentola, ma lentissimamente (pochi centimetri all'anno), e trascinano con sé le placche dei continenti.
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qconv %}[
{"t":"La convezione può avvenire all'interno di una sbarra di ferro.","ok":false,"s":"No: nei solidi le particelle restano al loro posto e non possono spostarsi trasportando l'energia. Nei solidi il calore si trasmette per conduzione."},
{"t":"Nella convezione è il fluido stesso a spostarsi, portando con sé l'energia.","ok":true,"s":"Sì, è proprio questa la differenza con la conduzione, in cui l'energia passa da una particella all'altra ma le particelle restano al loro posto."},
{"t":"Scaldandosi, l'acqua si dilata e la sua densità diminuisce.","ok":true,"s":"Sì: le particelle si allontanano, quindi la stessa massa occupa un volume più grande."},
{"t":"L'acqua calda sale perché il calore tende sempre ad andare verso l'alto.","ok":false,"s":"No: il calore va dalla zona più calda a quella più fredda, in qualsiasi direzione. L'acqua calda sale perché, scaldandosi, si è dilatata ed è diventata meno densa; l'acqua fredda, più densa, scende a prenderne il posto."},
{"t":"Un termosifone scalda una stanza soprattutto per convezione.","ok":true,"s":"Sì: scalda l'aria vicina, che sale, attraversa la stanza e torna verso il termosifone: un moto convettivo."},
{"t":"In una stanza scaldata da un termosifone, l'aria vicino al soffitto è più calda di quella vicino al pavimento.","ok":true,"s":"Sì: l'aria scaldata dal termosifone sale e si raccoglie in alto."},
{"t":"In un frigorifero, conviene che la parte che raffredda l'aria si trovi in alto.","ok":true,"s":"Sì: l'aria raffreddata in alto diventa più densa e scende, e al suo posto sale l'aria più calda del fondo, che a sua volta viene raffreddata. Si forma un moto convettivo che raffredda tutto il frigorifero."}
]{% endcapture %}
{% include quiz.html domande=_qconv id="q-convezione" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
In una giornata d'estate, al mare, a metà giornata il vento soffia dal mare verso la spiaggia (la «brezza di mare»). Perché?
{% capture _o %}[
{"v":"a","t":"Perché il mare spinge l'aria con le onde"},
{"v":"b","t":"Perché la spiaggia si scalda molto più del mare: l'aria sopra la spiaggia si scalda, diventa meno densa e sale, e al suo posto arriva l'aria più fresca che sta sopra il mare"},
{"v":"c","t":"Perché l'aria calda sopra il mare scende verso la spiaggia"},
{"v":"d","t":"Perché di giorno il vento soffia sempre verso terra"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-brezza" opts=_o ok="b" s="È un grande moto convettivo: la sabbia, con il suo calore specifico basso, si scalda più in fretta del mare; l'aria sopra di lei sale, e viene sostituita da aria più fresca proveniente dal mare. Di notte succede il contrario: la terra si raffredda prima del mare, e la brezza soffia da terra verso il mare." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una mongolfiera sale quando il bruciatore scalda l'aria dentro il pallone. Perché?
{% capture _o %}[
{"v":"a","t":"Perché il fuoco spinge il pallone verso l'alto"},
{"v":"b","t":"Perché l'aria calda dentro il pallone si è dilatata ed è meno densa dell'aria fredda che sta fuori: come l'acqua calda nella pentola, tende a salire, e si porta dietro il pallone"},
{"v":"c","t":"Perché il calore va sempre verso l'alto"},
{"v":"d","t":"Perché l'aria calda pesa di più"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-mongolfiera" opts=_o ok="b" s="È lo stesso motivo per cui l'acqua calda sale nella pentola: scaldata, l'aria si dilata e diventa meno densa di quella che la circonda, ed è spinta verso l'alto. Spegnendo il bruciatore, l'aria nel pallone si raffredda e la mongolfiera scende." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _r %}Seguiranno il moto convettivo dell'acqua: saliranno al centro della pentola, sopra la fiamma, dove l'acqua è più calda e meno densa; arrivati in superficie si sposteranno verso le pareti, scenderanno lungo le pareti, dove l'acqua è più fredda, e sul fondo torneranno verso il centro, ricominciando il giro. Il pepe rende visibile la convezione.{% endcapture %}
{% include risposta-aperta.html id="ra-vs-pepe" tipo="prevedi"
   domanda="In una pentola d'acqua sul fuoco butti qualche grano di pepe, che resta sospeso nell'acqua. Mentre l'acqua si scalda, come si muoveranno i grani?"
   risposta=_r %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% capture _r %}Il calore non «sale»: va sempre dalla zona più calda a quella più fredda, in qualsiasi direzione. Nella pentola a salire è l'acqua calda del fondo: scaldandosi si dilata, diventa meno densa e sale, mentre l'acqua fredda, più densa, scende a prenderne il posto. È l'acqua che si muove a portare il calore fino in superficie: questa è la convezione.{% endcapture %}
{% include risposta-aperta.html id="ra-spiega-convezione" tipo="spiega"
   domanda="Un compagno ti dice: «La superficie dell'acqua nella pentola si scalda perché il calore sale». Come gli spieghi dove sbaglia, e che cosa succede davvero?"
   risposta=_r %}



## La Trasmissione del Calore per Irraggiamento
{% include margin-note.html testo="Il calore nel vuoto" %}
I meccanismi di conduzione e convezione <u markdown="span">avvengono **nella materia**</u> (un solido, un liquido o un gas). Eppure sappiamo che tra noi e il Sole non c'è materia, bensì 150 milioni di chilometri di spazio assolutamente vuoto. Comprendiamo quindi che deve esistere un modo per trasmettere calore che sia diverso rispetto alla conduzione e alla convezione. 
{% include margin-note-end.html %}
{% include box-imp.html testo="Irraggiamento" %}
La trasmissione di calore nel vuoto è detta <definizione>irraggiamento</definizione> e corrisponde all'emissione di energia sotto forma di radiazione elettromagnetica.
{% include box-end.html %}

{% include margin-note.html testo="Assorbire ed emettere" %}
Infatti, ogni corpo emette radiazioni elettromagnetiche, emettendo dunque energia. Contemporaneamente, ogni corpo che riceve onde elettromagnetiche assorbe energia.  
<u markdown="span">Quando un corpo **assorbe** più radiazioni di quante non ne **emetta**, esso si riscalda; quando invece un corpo **emette** più radiazioni di quante non ne **assorba**, esso si raffredda.</u>
{% include margin-note-end.html %}

{% include figure/bilancio-irraggiamento-figura.html %}

{% include margin-note.html testo="La radiazione infrarossa" %}
Anche il nostro corpo, e quello degli animali, emette continuamente radiazione, soprattutto infrarossa, che i nostri occhi non vedono. Una termocamera la rileva e la trasforma in un'immagine: le zone più calde, che emettono di più, appaiono più chiare.
{% include margin-note-end.html %}

{% include figura.html id="gatto-termocamera"
   src="/corsi/immagini/cat-thermoscopy.webp"
   didascalia="Un gatto fotografato con una termocamera. Le zone più calde (gli occhi, le orecchie, il naso: fino a 33 °C) emettono più radiazione infrarossa e appaiono gialle e bianche; lo sfondo, più freddo (circa 12 °C), appare viola scuro."
   alt="Immagine termica di un gatto: occhi, orecchie e naso appaiono gialli e bianchi, il corpo viola, lo sfondo viola scuro"
   larghezza="280px" %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
In una teiera che bolle sul fornello sono all'opera tutti e tre i modi di trasmettere il calore. Riconoscili nei cinque punti indicati.

{% include lab-virtuali/teiera-trasmissione-lab.html %}

{% capture _qirr %}[
{"t":"Il calore del Sole arriva sulla Terra per irraggiamento.","ok":true,"s":"Sì: fra il Sole e la Terra c'è il vuoto, e l'unico modo di trasmettere il calore nel vuoto è l'irraggiamento."},
{"t":"L'irraggiamento, come la conduzione, ha bisogno di materia per avvenire.","ok":false,"s":"No: l'irraggiamento avviene anche nel vuoto."},
{"t":"Anche il corpo umano emette radiazione.","ok":true,"s":"Sì: soprattutto infrarossa, che si vede con una termocamera."},
{"t":"Un corpo che assorbe più radiazione di quanta ne emetta si raffredda.","ok":false,"s":"No: se assorbe più energia di quanta ne emetta, si riscalda."},
{"t":"Seduto vicino a un falò, senza toccarlo, senti caldo soprattutto per irraggiamento.","ok":true,"s":"Sì: l'aria calda del falò sale verso l'alto (convezione), ma ciò che ti scalda di lato è la radiazione emessa dalle fiamme e dalla brace."}
]{% endcapture %}
{% include quiz.html domande=_qirr id="q-irraggiamento" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
D'estate, sotto il Sole, conviene vestirsi di bianco piuttosto che di nero. Perché?
{% capture _o %}[
{"v":"a","t":"Perché il bianco è più leggero"},
{"v":"b","t":"Perché un tessuto bianco riflette gran parte della radiazione del Sole, mentre uno nero la assorbe quasi tutta, e chi assorbe più radiazione di quanta ne emette si scalda"},
{"v":"c","t":"Perché il nero emette freddo"},
{"v":"d","t":"Perché il bianco conduce meglio il calore"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-bianco" opts=_o ok="b" s="Il colore dice quanta radiazione (visibile) un corpo assorbe: il nero quasi tutta, il bianco poca. Al Sole, una maglietta nera assorbe molta più energia di una bianca e si scalda di più." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
D'inverno, le notti con il cielo sereno sono più fredde di quelle con il cielo coperto di nuvole. Perché?
{% capture _o %}[
{"v":"a","t":"Perché le nuvole producono calore"},
{"v":"b","t":"Perché di notte il terreno emette radiazione infrarossa verso il cielo: le nuvole ne assorbono e ne rimandano indietro una parte, mentre con il cielo sereno se ne va quasi tutta nello spazio"},
{"v":"c","t":"Perché con il cielo sereno arriva la luce fredda delle stelle"},
{"v":"d","t":"Perché le nuvole bloccano il vento"}
]{% endcapture %}
{% include mcq.html id="mcq-vs-notte-serena" opts=_o ok="b" s="Di notte il Sole non scalda, e il terreno si raffredda emettendo radiazione. Con il cielo coperto, le nuvole fanno un po' da coperta: ne assorbono una parte e la riemettono anche verso il basso. Con il cielo sereno, invece, la radiazione se ne va libera nello spazio, e al mattino si può trovare la brina." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% capture _r %}Il corpo umano perde calore anche per irraggiamento, emettendo radiazione infrarossa. La coperta, lucida come uno specchio, riflette indietro verso il corpo gran parte di questa radiazione, invece di lasciarla disperdere. In più ferma l'aria vicino al corpo e il vento, riducendo anche le perdite per convezione. Non produce calore: impedisce a quello del corpo di andarsene.{% endcapture %}
{% include risposta-aperta.html id="ra-vs-coperta-termica" tipo="spiega"
   domanda="I soccorritori avvolgono le persone infreddolite in coperte sottilissime, dorate o argentate, che pesano pochi grammi. Come fanno a tenere caldo?"
   risposta=_r %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}


### Schema riassuntivo

{% include mappa.html id="calore" %}

# Esercizi di Riepilogo

### Calore, temperatura ed equilibrio termico

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="Due corpi a contatto si scambiano calore finché non hanno la stessa temperatura." ok=true s="Sì: a quel punto sono in equilibrio termico e lo scambio di calore si ferma." %}
{% include tf.html q="Un corpo può avere una temperatura di $-5\ \text K$." ok=false s="No: in kelvin non esistono temperature negative, perché lo zero della scala è lo zero assoluto." %}
{% include tf.html q="Un aumento di temperatura di $15\ \text{°C}$ corrisponde a un aumento di $15\ \text K$." ok=true s="Sì: le variazioni di temperatura sono uguali nelle due scale." %}
{% include tf.html q="Il calore passa sempre dal corpo più grande a quello più piccolo." ok=false s="No: passa dal corpo a temperatura maggiore a quello a temperatura minore, qualunque sia la loro grandezza." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Converti le seguenti temperature.

$25\ \text{°C}$ in kelvin:

{% include num.html id="numRiepK1" valore="298.15" tol="0.1" unit="K" %}

$300\ \text K$ in gradi centigradi:

{% include num.html id="numRiepK2" valore="26.85" tol="0.5" unit="°C" %}

$-40\ \text{°C}$ in kelvin:

{% include num.html id="numRiepK3" valore="233.15" tol="0.1" unit="K" %}
{% include ex-sol.html %}
$25+273{,}15=298{,}15\ \text K$; $\quad 300-273{,}15=26{,}85\ \text{°C}$; $\quad -40+273{,}15=233{,}15\ \text K$.
{% include ex-sol-end.html %}

{% capture _dStoria %}[
{"l":"Empedocle","m":"il calore è legato al fuoco, contenuto in quantità diversa nei corpi","r":"antica Grecia"},
{"l":"Lavoisier e Laplace","m":"il calore è un fluido invisibile, il calorico; costruiscono uno dei primi calorimetri","r":"Settecento"},
{"l":"Il conte di Rumford","m":"l'attrito nella foratura dei cannoni produce calore senza fine","r":"1798"},
{"l":"Joule","m":"con il mulinello misura quanto lavoro serve per produrre una certa quantità di calore","r":"anni Quaranta dell'Ottocento"}
]{% endcapture %}
{% include ex.html diff=1 %}
Chi pensava che cosa sul calore, e quando? Collega ciascuno scienziato alla sua idea e alla sua epoca.

{% include match.html id="riep-match-storia" dati=_dStoria col1="Chi" col2="Che cosa" col3="Quando" %}
{% include ex-end.html %}

{% capture _sortRiepQ %}[
  {"t":"L'acqua della pasta sul fornello acceso (sistema: l'acqua)","c":0},
  {"t":"Un cubetto di ghiaccio tenuto in mano (sistema: il ghiaccio)","c":0},
  {"t":"La tua mano che stringe un cubetto di ghiaccio (sistema: la mano)","c":1},
  {"t":"Una lattina appena messa in frigorifero (sistema: la lattina)","c":1},
  {"t":"Un caffè lasciato raffreddare sul tavolo (sistema: il caffè)","c":1},
  {"t":"Una pietra al sole d'estate (sistema: la pietra)","c":0}
]{% endcapture %}
{% include ex.html diff=2 %}
Per ciascuna situazione, stabilisci il segno del calore $Q$ scambiato dal sistema indicato.

{% include sort.html id="sort-riep-segno-q" dati=_sortRiepQ col0="Q > 0 (il calore entra)" col1="Q < 0 (il calore esce)" %}
{% include ex-end.html %}

{% capture _oRumford %}[
{"v":"a","t":"Che il bronzo dei cannoni conteneva moltissimo calorico"},
{"v":"b","t":"Che l'attrito fra il trapano e il metallo continuava a produrre calore finché si continuava a forare, come se il calore non finisse mai: difficile da spiegare se il calore è una sostanza contenuta nei corpi in quantità limitata"},
{"v":"c","t":"Che i cannoni, forati, diventavano più freddi"},
{"v":"d","t":"Che il calore passava dal metallo freddo al trapano caldo"}
]{% endcapture %}
{% include ex.html diff=2 %}
Che cosa osservò il conte di Rumford, nel 1798, mentre si foravano i cannoni, e perché la sua osservazione mise in crisi la teoria del calorico?
{% include mcq.html id="mcq-riep-rumford" opts=_oRumford ok="b" s="Se il calore fosse una sostanza contenuta nei corpi, a forza di forare prima o poi dovrebbe esaurirsi. Invece il calore continuava a uscire finché si faceva lavoro con il trapano: non è una sostanza, ma qualcosa che si produce compiendo lavoro, cioè energia." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% capture _r %}La temperatura è una proprietà di un corpo: la misura il termometro e dice quanto sono agitate le sue particelle. Il calore invece non è una proprietà: è energia **in viaggio** da un corpo a un altro, e passa solo se c'è una differenza di temperatura, dal corpo più caldo a quello più freddo. Per questo un corpo «ha» una temperatura, ma non «ha» calore: il calore esiste solo mentre passa. Un esempio: una vasca d'acqua tiepida e una tazza di tè bollente; il tè ha la temperatura più alta, ma la vasca, molto più grande, può cedere molto più calore raffreddandosi di un grado.{% endcapture %}
{% include risposta-aperta.html id="ra-riep-calore-temperatura" tipo="spiega"
   domanda="Che differenza c'è fra calore e temperatura? Perché si dice che un corpo non «ha» calore?"
   risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% capture _r %}Il freddo non esiste come «cosa» che passa da un corpo all'altro: passa soltanto il calore, e sempre dal corpo più caldo a quello più freddo. È la bibita, più calda, a cedere calore al ghiaccio: la bibita si raffredda perché perde energia, e il ghiaccio la riceve (e infatti fonde).{% endcapture %}
{% include risposta-aperta.html id="ra-errore-freddo" tipo="errore"
   domanda="Un compagno dice: «Il ghiaccio raffredda la bibita perché le cede il suo freddo». Dove sbaglia? Spiega che cosa succede davvero."
   risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
La temperatura di un oggetto è di $20\ \text{°C}$. Qual è, in gradi centigradi, la temperatura che corrisponde al **doppio** di questa temperatura misurata in kelvin?

{% include num.html id="numRiepDoppio" valore="313.15" tol="0.2" unit="°C" %}

{% include ex-sol.html %}
In kelvin la temperatura è $20+273{,}15=293{,}15\ \text K$; il doppio è $586{,}3\ \text K$, cioè $586{,}3-273{,}15=313{,}15\ \text{°C}$. «Il doppio di $20\ \text{°C}$» non è $40\ \text{°C}$: raddoppiare una temperatura ha senso solo nella scala kelvin, che parte dallo zero assoluto.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
{% capture _r %}La temperatura misura l'agitazione termica, cioè quanto velocemente si muovono le particelle di un corpo. Più un corpo si raffredda, più le sue particelle rallentano. Lo zero assoluto, $0\ \text K = -273{,}15\ \text{°C}$, è la temperatura in cui l'agitazione è la più piccola possibile: non si può scendere più in basso, perché le particelle non possono essere «meno agitate di così». Per questo la scala Kelvin, che parte proprio da lì, non ha temperature negative. Lo zero assoluto si può avvicinare moltissimo, ma non raggiungere.{% endcapture %}
{% include risposta-aperta.html id="ra-riep-zero-assoluto" tipo="spiega"
   domanda="Perché nella scala Kelvin non esistono temperature negative? Che cosa succede alle particelle di un corpo man mano che ci si avvicina allo zero assoluto?"
   risposta=_r %}
{% include ex-end.html %}

### La dilatazione termica

{% include ex.html diff=1 %}
Una sbarra d'acciaio ($\alpha = 1{,}2\times10^{-5}\ \text K^{-1}$) lunga $2\ \text m$ viene scaldata di $50\ \text K$. Di quanti millimetri si allunga?

{% include num.html id="numRiepDil1" valore="1.2" unit="mm" %}

{% include ex-sol.html %}
$$\Delta L=\alpha\,L_i\,\Delta T=1{,}2\times10^{-5}\ \text K^{-1}\cdot 2\ \text m\cdot 50\ \text K=1{,}2\times10^{-3}\ \text m=1{,}2\ \text{mm}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="I giunti di dilatazione dei ponti e delle rotaie servono a lasciare spazio all'allungamento d'estate." ok=true s="Sì: senza quello spazio, allungandosi, il metallo spingerebbe e si deformerebbe." %}
{% include tf.html q="Scaldando una lamina bimetallica, essa si incurva dalla parte del metallo che si dilata di più." ok=false s="No: il metallo che si dilata di più diventa più lungo e resta all'esterno della curva; la lamina si incurva dalla parte di quello che si dilata di meno." %}
{% include tf.html q="Scaldando una lastra di metallo con un foro in mezzo, il foro si allarga." ok=true s="Sì: tutto il metallo si dilata, anche attorno al foro, e la lastra si ingrandisce come una fotografia ingrandita, foro compreso. È per questo che, nell'esperimento di 's Gravesande, anche l'anello scaldato lascerebbe passare la sfera più facilmente." %}
{% include tf.html q="Il liquido di un termometro sale perché, scaldandosi, aumenta di volume." ok=true s="Sì: il termometro sfrutta proprio la dilatazione termica del liquido." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Una sbarra lunga $1\ \text m$, scaldata di $100\ \text K$, si allunga di $2{,}4\ \text{mm}$. Qual è il suo coefficiente di dilatazione? Scrivi il risultato in notazione scientifica.

{% include sci.html prima="$\alpha =$" coeff="2.4" exp="-5" tol=1 s="2,4 × 10⁻⁵ K⁻¹ (è alluminio)" %}

{% include ex-sol.html %}
$$\alpha=\frac{\Delta L}{L_i\,\Delta T}=\frac{2{,}4\times10^{-3}\ \text m}{1\ \text m\cdot 100\ \text K}=2{,}4\times10^{-5}\ \text K^{-1}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una rotaia d'acciaio ($\alpha = 1{,}2\times10^{-5}\ \text K^{-1}$) è lunga $25\ \text m$. D'inverno la sua temperatura scende fino a $-10\ \text{°C}$, d'estate sale fino a $40\ \text{°C}$. Quanto spazio, in millimetri, bisogna lasciare come minimo fra una rotaia e la successiva?

{% include num.html id="numRiepDil2" valore="15" unit="mm" %}

{% include ex-sol.html %}
$\Delta T = 40-(-10)=50\ \text K$, quindi
$$\Delta L=1{,}2\times10^{-5}\ \text K^{-1}\cdot 25\ \text m\cdot 50\ \text K=0{,}015\ \text m=15\ \text{mm}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un ponte d'acciaio ($\alpha = 1{,}2\times10^{-5}\ \text K^{-1}$) è lungo $300\ \text m$ a $0\ \text{°C}$. Quanto è lungo in una giornata d'estate a $35\ \text{°C}$?

{% include num.html id="numRiepDil3" valore="300.126" tol="0.001" unit="m" %}

{% include ex-sol.html %}
$$\Delta L=1{,}2\times10^{-5}\ \text K^{-1}\cdot 300\ \text m\cdot 35\ \text K=0{,}126\ \text m,\qquad L_f=L_i+\Delta L=300{,}126\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
{% capture _r %}Quando un corpo si scalda, le sue particelle si muovono più velocemente: vibrano di più attorno alle loro posizioni e si urtano con più forza. Urtandosi più forte, «rimbalzano» di più e tendono ad allontanarsi le une dalle altre. Se ogni particella sta un po' più lontana dalle vicine, il corpo nel suo insieme occupa più spazio: si dilata. Raffreddandolo succede il contrario.{% endcapture %}
{% include risposta-aperta.html id="ra-riep-dilatazione" tipo="spiega"
   domanda="Spiega, pensando alle particelle che compongono un corpo, perché un corpo scaldato si dilata."
   risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
In un esperimento simile a quello di 's Gravesande, il foro di un anello ha un diametro di $2{,}000\ \text{cm}$, mentre una sfera di ottone ($\alpha = 1{,}9\times10^{-5}\ \text K^{-1}$) ha un diametro di $2{,}002\ \text{cm}$ e non passa. Di quanti kelvin bisogna raffreddare la sfera (lasciando l'anello com'è), come minimo, perché passi?

{% include num.html id="numRiepGrav" valore="52.6" tol="3" unit="K" %}

{% include ex-sol.html %}
Il diametro della sfera deve diminuire di $\Delta L=-0{,}002\ \text{cm}$. Da $\Delta L=\alpha\,L_i\,\Delta T$:
$$\Delta T=\frac{\Delta L}{\alpha\,L_i}=\frac{-0{,}002\ \text{cm}}{1{,}9\times10^{-5}\ \text K^{-1}\cdot 2{,}002\ \text{cm}}\approx-53\ \text K.$$
La sfera va raffreddata di circa $53\ \text K$.
{% include ex-sol-end.html %}

{% capture _o_riepBimet %}[{"v":"a","t":"Dalla parte dell'acciaio"},{"v":"b","t":"Dalla parte dell'ottone"},{"v":"c","t":"Non si incurva: si allunga e basta"}]{% endcapture %}
{% include ex.html diff=3 %}
Una lamina bimetallica è fatta di acciaio ($\alpha = 1{,}2\times10^{-5}\ \text K^{-1}$) e di ottone ($\alpha = 1{,}9\times10^{-5}\ \text K^{-1}$). Scaldandola, da quale parte si incurva?

{% include mcq.html id="mcq-riep-bimetallica" opts=_o_riepBimet ok="a" s="L'ottone si allunga di più e resta all'esterno della curva: la lamina si incurva dalla parte dell'acciaio, che si allunga di meno." %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% capture _r %}Il coperchio è di metallo, il barattolo di vetro, e il metallo ha un coefficiente di dilatazione più grande di quello del vetro. Sotto l'acqua calda tutti e due si scaldano, ma il coperchio si dilata di più: si allarga attorno alla bocca del barattolo, che invece si allarga poco, e si allenta. Funziona meglio se l'acqua scalda soprattutto il coperchio, senza scaldare troppo il vetro.{% endcapture %}
{% include risposta-aperta.html id="ra-riep-barattolo" tipo="spiega"
   domanda="Un barattolo di vetro ha il coperchio di metallo bloccato. Se si mette il coperchio sotto l'acqua calda per qualche secondo, spesso si apre. Perché?"
   risposta=_r %}
{% include ex-end.html %}

### La legge fondamentale della calorimetria

{% include ex.html diff=1 %}
Quanto calore serve per scaldare $3\ \text{kg}$ d'acqua da $20\ \text{°C}$ a $80\ \text{°C}$? Scrivi il risultato in notazione scientifica.

{% include sci.html prima="$Q =$" coeff="7.53,7.5" exp="5" tol=1 s="≈ 7,5 × 10⁵ J" %}

{% include ex-sol.html %}
$$Q=c\,m\,\Delta T=4\,186\ \tfrac{\text J}{\text{kg}\cdot\text K}\cdot 3\ \text{kg}\cdot 60\ \text K\approx 7{,}5\times10^{5}\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
A un blocco di ferro di $500\ \text g$ ($c = 450\ \text{J/(kg·K)}$) si forniscono $9\,000\ \text J$ di calore. Di quanto aumenta la sua temperatura?

{% include num.html id="numRiepCal1" valore="40" unit="K" %}

{% include ex-sol.html %}
Attenzione alla massa in chilogrammi: $m=0{,}5\ \text{kg}$.
$$\Delta T=\frac{Q}{c\,m}=\frac{9\,000\ \text J}{450\ \tfrac{\text J}{\text{kg}\cdot\text K}\cdot 0{,}5\ \text{kg}}=40\ \text K.$$
{% include ex-sol-end.html %}

{% capture _oSpiaggia %}[
{"v":"a","t":"Perché l'acqua riflette tutta la luce del Sole"},
{"v":"b","t":"Perché l'acqua ha un calore specifico molto più alto di quello della sabbia: a parità di calore ricevuto, la sua temperatura sale molto meno"},
{"v":"c","t":"Perché la sabbia è un buon conduttore di calore"},
{"v":"d","t":"Perché il Sole scalda di più la sabbia che l'acqua"}
]{% endcapture %}
{% include ex.html diff=1 %}
D'estate, a mezzogiorno, la sabbia della spiaggia scotta, mentre l'acqua del mare è fresca, anche se il Sole le ha scaldate allo stesso modo per tutta la mattina. Perché?
{% include mcq.html id="mcq-riep-spiaggia" opts=_oSpiaggia ok="b" s="Dalla legge $Q = c\,m\,\Delta T$: a parità di calore e di massa, $\Delta T = Q/(c\,m)$ è tanto più piccolo quanto più grande è $c$. L'acqua ha uno dei calori specifici più alti in assoluto: si scalda lentamente e si raffredda lentamente. Per lo stesso motivo, di notte la sabbia si raffredda in fretta e il mare resta tiepido." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Per scaldare di $10\ \text K$ un blocco di $2\ \text{kg}$ di un materiale sconosciuto servono $18\,000\ \text J$. Qual è il calore specifico del materiale?

{% include num.html id="numRiepCal2" valore="900" unit="J/(kg·K)" %}

{% include ex-sol.html %}
$$c=\frac{Q}{m\,\Delta T}=\frac{18\,000\ \text J}{2\ \text{kg}\cdot 10\ \text K}=900\ \tfrac{\text J}{\text{kg}\cdot\text K}$$
(è il calore specifico dell'alluminio).
{% include ex-sol-end.html %}

{% capture _dOrdC %}[
{"t":"rame ($c = 385$)","pos":0},
{"t":"ferro ($c = 450$)","pos":1},
{"t":"alluminio ($c = 900$)","pos":2},
{"t":"acqua ($c = 4\\,186$)","pos":3}
]{% endcapture %}
{% include ex.html diff=2 %}
Hai quattro corpi della stessa massa, fatti di materiali diversi (i calori specifici sono in J/(kg·K)), e a ciascuno dai la stessa quantità di calore. Mettili in ordine, da quello che si scalda di più a quello che si scalda di meno.

{% include order.html id="riep-ord-calore-specifico" dati=_dOrdC direz="da quello che si scalda di più a quello che si scalda di meno" %}
{% include ex-sol.html %}
$\Delta T = \dfrac{Q}{c\,m}$: a parità di $Q$ e di $m$, si scalda di più il materiale con il calore specifico più piccolo. Il rame si scalda più di dieci volte dell'acqua.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Con l'energia di $1\ \text{kWh}$ ($3{,}6\times10^{6}\ \text J$), quanti chilogrammi d'acqua si possono portare da $20\ \text{°C}$ a $100\ \text{°C}$, se tutta l'energia va all'acqua?

{% include num.html id="numRiepCal3" valore="10.75" tol="2" unit="kg" %}

{% include ex-sol.html %}
$$m=\frac{Q}{c\,\Delta T}=\frac{3{,}6\times10^{6}\ \text J}{4\,186\ \tfrac{\text J}{\text{kg}\cdot\text K}\cdot 80\ \text K}\approx 10{,}8\ \text{kg}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
{% capture _r %}L'errore è la massa: nella formula $Q=c\,m\,\Delta T$, con $c$ in $\text{J/(kg·K)}$, la massa va espressa in chilogrammi. $500\ \text g=0{,}5\ \text{kg}$, quindi $Q=4\,186\cdot 0{,}5\cdot 10=20\,930\ \text J$, mille volte meno del risultato del compagno.{% endcapture %}
{% include risposta-aperta.html id="ra-errore-grammi" tipo="errore"
   domanda="Per scaldare di 10 K mezzo litro d'acqua (500 g), un compagno scrive: Q = 4186 · 500 · 10 = 20 930 000 J. Dove sbaglia? Qual è il risultato corretto?"
   risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
In un recipiente isolato si versano $1\ \text{kg}$ d'acqua a $80\ \text{°C}$ e $2\ \text{kg}$ d'acqua a $20\ \text{°C}$. Qual è la temperatura finale, all'equilibrio termico?

*Suggerimento*: il calore ceduto dall'acqua calda è uguale al calore ricevuto dall'acqua fredda.

{% include num.html id="numRiepMix1" valore="40" unit="°C" %}

{% include ex-sol.html %}
Chiamiamo $T$ la temperatura finale. L'acqua calda cede $c\cdot 1\cdot(80-T)$, quella fredda riceve $c\cdot 2\cdot(T-20)$. Uguagliando (il calore specifico è lo stesso e si semplifica):
$$80-T=2\,(T-20)\quad\Rightarrow\quad 3T=120\quad\Rightarrow\quad T=40\ \text{°C}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Un pezzo di ferro di $0{,}5\ \text{kg}$ a $200\ \text{°C}$ ($c = 450\ \text{J/(kg·K)}$) viene immerso in $2\ \text{kg}$ d'acqua a $20\ \text{°C}$. Qual è la temperatura finale, all'equilibrio termico? (Trascura il calore ceduto all'ambiente.)

{% include num.html id="numRiepMix2" valore="24.7" tol="2" unit="°C" %}

{% include ex-sol.html %}
Il ferro cede $450\cdot 0{,}5\cdot(200-T)$, l'acqua riceve $4\,186\cdot 2\cdot(T-20)$. Uguagliando:
$$225\,(200-T)=8\,372\,(T-20)\quad\Rightarrow\quad T=\frac{45\,000+167\,440}{8\,597}\approx 24{,}7\ \text{°C}.$$
Il ferro era caldissimo, ma l'acqua si scalda di meno di $5\ \text K$: ha una massa maggiore e, soprattutto, un calore specifico quasi dieci volte più grande.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
{% capture _r %}Il calore specifico dell'olio è circa la metà di quello dell'acqua. Il fornello dà alle due pentole la stessa potenza, quindi nello stesso tempo lo stesso calore; con la stessa massa, per $Q = c\,m\,\Delta T$ l'aumento di temperatura è inversamente proporzionale a $c$: l'olio si scalda circa il doppio dell'acqua. Dopo lo stesso tempo l'olio è quindi molto più caldo, e scotta di più. (Inoltre l'olio non bolle a $100\ \text{°C}$ come l'acqua: può superare i $150\ \text{°C}$, ed è per questo che si usa per friggere.){% endcapture %}
{% include risposta-aperta.html id="ra-riep-olio" tipo="prevedi"
   domanda="Su due fornelli uguali metti due pentole identiche: una con 1 kg d'acqua e una con 1 kg d'olio, entrambi a temperatura ambiente. Dopo due minuti, quale dei due liquidi è più caldo? Perché?"
   risposta=_r %}
{% include ex-end.html %}

### La trasmissione del calore

{% include ex.html diff=1 %}
Per ciascuna situazione, scegli il modo in cui si trasmette soprattutto il calore.

{% include fill.html prima="Il manico di un cucchiaino immerso nel tè bollente si scalda:" tipo="drop" opts="conduzione|convezione|irraggiamento" ok="conduzione" dopo="." %}
{% include fill.html prima="Il Sole scalda la Terra:" tipo="drop" opts="conduzione|convezione|irraggiamento" ok="irraggiamento" dopo="." %}
{% include fill.html prima="L'aria scaldata da un termosifone sale verso il soffitto:" tipo="drop" opts="conduzione|convezione|irraggiamento" ok="convezione" dopo="." %}
{% include fill.html prima="Ti scaldi le mani davanti al camino, senza toccarlo:" tipo="drop" opts="conduzione|convezione|irraggiamento" ok="irraggiamento" dopo="." %}
{% include fill.html prima="Il fondo di una pentola sul fuoco si scalda fino alla parte interna:" tipo="drop" opts="conduzione|convezione|irraggiamento" ok="conduzione" dopo="." %}
{% include fill.html prima="Le correnti termiche che fanno salire gli uccelli:" tipo="drop" opts="conduzione|convezione|irraggiamento" ok="convezione" dopo="." %}
{% include ex-end.html %}

{% capture _sCond %}[
{"t":"rame","c":0},{"t":"alluminio","c":0},{"t":"ferro","c":0},{"t":"argento","c":0},
{"t":"legno","c":1},{"t":"lana","c":1},{"t":"aria","c":1},{"t":"polistirolo","c":1},{"t":"sughero","c":1}
]{% endcapture %}
{% include ex.html diff=1 %}
Trascina ciascun materiale nella colonna giusta.

{% include sort.html id="riep-sort-conduttori-termici" dati=_sCond col0="Buoni conduttori di calore" col1="Isolanti termici" %}
{% include ex-end.html %}

{% capture _oTermo %}[
{"v":"a","t":"Perché il gatto riflette la luce della stanza"},
{"v":"b","t":"Perché il gatto, come ogni corpo, emette radiazione infrarossa, più intensa dove è più caldo: la termocamera la rileva anche senza luce"},
{"v":"c","t":"Perché la termocamera misura il calore che il gatto le trasmette per conduzione"},
{"v":"d","t":"Perché l'aria attorno al gatto si muove per convezione"}
]{% endcapture %}
{% include ex.html diff=1 %}
Una termocamera «vede» un gatto anche in una stanza completamente buia. Come è possibile?
{% include mcq.html id="mcq-riep-termocamera" opts=_oTermo ok="b" s="È l'irraggiamento: ogni corpo emette radiazione elettromagnetica, e un corpo alla temperatura del nostro (o di un gatto) la emette soprattutto nell'infrarosso, che i nostri occhi non vedono. Non serve una sorgente di luce: è il gatto stesso a «brillare»." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Una stufa da $1\,500\ \text W$ resta accesa per $2$ ore. Quanto calore cede alla stanza? Scrivi il risultato in notazione scientifica.

{% include sci.html prima="$Q =$" coeff="1.08,1.1" exp="7" tol=1 s="1,08 × 10⁷ J" %}

{% include ex-sol.html %}
$$Q=P\,\Delta t=1\,500\ \text W\cdot 7\,200\ \text s=1{,}08\times10^{7}\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una porta di legno ($k = 0{,}15\ \text{W/(m·K)}$) ha un'area di $2\ \text{m}^2$ ed è spessa $4\ \text{cm}$. Fra le sue due facce c'è una differenza di temperatura di $15\ \text K$. Quale potenza termica la attraversa?

{% include num.html id="numRiepFour1" valore="112.5" unit="W" %}

{% include ex-sol.html %}
$$P=k\,A\,\frac{\Delta T}{\Delta x}=0{,}15\ \tfrac{\text W}{\text m\cdot\text K}\cdot 2\ \text m^2\cdot\frac{15\ \text K}{0{,}04\ \text m}=112{,}5\ \text W.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una barra lunga $50\ \text{cm}$, con una sezione di $1\ \text{cm}^2$, ha le estremità a temperature che differiscono di $80\ \text K$. La attraversa una potenza termica di $6{,}24\ \text W$. Qual è la conducibilità termica del materiale? Di quale materiale potrebbe trattarsi?

{% include num.html id="numRiepFour2" valore="390" unit="W/(m·K)" %}

{% include ex-sol.html %}
$A=1\ \text{cm}^2=10^{-4}\ \text m^2$, $\Delta x=0{,}5\ \text m$:
$$k=\frac{P\,\Delta x}{A\,\Delta T}=\frac{6{,}24\ \text W\cdot 0{,}5\ \text m}{10^{-4}\ \text m^2\cdot 80\ \text K}=390\ \tfrac{\text W}{\text m\cdot\text K}:$$
è rame.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
{% capture _r %}La maniglia di metallo e il legno della porta sono alla stessa temperatura, quella della stanza (sono in equilibrio termico). La maniglia sembra più fredda perché il metallo è un buon conduttore: toglie calore alla mano molto più rapidamente del legno, che è un isolante. La nostra pelle non misura la temperatura, ma la rapidità con cui perde calore.{% endcapture %}
{% include risposta-aperta.html id="ra-errore-maniglia" tipo="errore"
   domanda="Un compagno dice: «D'inverno la maniglia di metallo della porta è più fredda del legno della porta: basta toccarla per sentirlo». Dove sbaglia? Spiega che cosa succede davvero."
   risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Quanto deve essere spesso uno strato di legno ($k = 0{,}15\ \text{W/(m·K)}$) per lasciar passare la stessa potenza termica di uno strato di vetro ($k = 0{,}9\ \text{W/(m·K)}$) spesso $1\ \text{cm}$, a parità di area e di differenza di temperatura?

{% include num.html id="numRiepFour3" valore="1.67" tol="3" unit="mm" %}

{% include ex-sol.html %}
A parità di $A$ e di $\Delta T$, la potenza è la stessa se è uguale il rapporto $k/\Delta x$:
$$\frac{0{,}15}{\Delta x}=\frac{0{,}9}{1\ \text{cm}}\quad\Rightarrow\quad \Delta x=\frac{0{,}15}{0{,}9}\cdot 1\ \text{cm}\approx 0{,}167\ \text{cm}\approx 1{,}7\ \text{mm}.$$
Meno di due millimetri di legno isolano quanto un centimetro di vetro.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
{% capture _r %}Il calore può passare in tre modi, e il thermos li ostacola tutti e tre. Fra le due pareti c'è il vuoto: senza materia non c'è né conduzione (che ha bisogno di particelle che si urtano) né convezione (che ha bisogno di un fluido che si sposta). Resta l'irraggiamento, che funziona anche nel vuoto: per questo le pareti sono argentate, come uno specchio, e riflettono indietro gran parte della radiazione invece di assorbirla o lasciarla uscire. Il tappo, di plastica o di sughero, isola la bocca. Funziona in tutti e due i versi: tiene caldo il caffè e fresca una bibita.{% endcapture %}
{% include risposta-aperta.html id="ra-riep-thermos" tipo="spiega"
   domanda="Un thermos ha due pareti di vetro con il vuoto in mezzo, e le pareti sono argentate come uno specchio. Spiega come ciascuna di queste scelte ostacola uno dei tre modi in cui si trasmette il calore."
   risposta=_r %}
{% include ex-end.html %}

### Ripasso: energia e calore

{% include ex.html diff=2 %}
In un mulinello di Joule due pesi da $5\ \text{kg}$ cadono di $2\ \text m$, e l'esperimento viene ripetuto $20$ volte. Tutta l'energia potenziale persa dai pesi diventa calore in $1\ \text{kg}$ d'acqua. Di quanto aumenta la temperatura dell'acqua? (Usa $g = 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numRiepJoule" valore="0.94" tol="2" unit="K" %}

{% include ex-sol.html %}
In ogni caduta i due pesi perdono $2\,mgh=2\cdot 5\cdot 9{,}8\cdot 2=196\ \text J$; in $20$ cadute, $3\,920\ \text J$. Quindi
$$\Delta T=\frac{Q}{c\,m}=\frac{3\,920\ \text J}{4\,186\ \tfrac{\text J}{\text{kg}\cdot\text K}\cdot 1\ \text{kg}}\approx 0{,}94\ \text K.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un bollitore elettrico da $2\,000\ \text W$ porta $1{,}5\ \text{kg}$ d'acqua da $20\ \text{°C}$ a $100\ \text{°C}$. Quanto tempo impiega, se tutta l'energia va all'acqua?

{% include num.html id="numRiepBollitore" valore="251" tol="2" unit="s" %}

{% include ex-sol.html %}
$$Q=c\,m\,\Delta T=4\,186\cdot 1{,}5\cdot 80=502\,320\ \text J,\qquad \Delta t=\frac{Q}{P}=\frac{502\,320\ \text J}{2\,000\ \text W}\approx 251\ \text s\approx 4\ \text{min}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
L'acqua di una cascata cade da un'altezza di $100\ \text m$. Se tutta l'energia potenziale persa dall'acqua si trasformasse in calore nell'acqua stessa, di quanto sarebbe più calda in fondo che in cima? (È la misura che Joule voleva fare in viaggio di nozze. Usa $g = 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numRiepCascata" valore="0.234" tol="3" unit="K" %}

{% include ex-sol.html %}
Per una massa $m$ d'acqua, l'energia potenziale persa è $mgh$ e diventa calore $c\,m\,\Delta T$:
$$mgh=c\,m\,\Delta T\quad\Rightarrow\quad\Delta T=\frac{gh}{c}=\frac{9{,}8\cdot 100}{4\,186}\approx 0{,}23\ \text K.$$
La massa si semplifica: il risultato vale per qualsiasi quantità d'acqua. Ecco perché Joule aveva bisogno di termometri così precisi.
{% include ex-sol-end.html %}
