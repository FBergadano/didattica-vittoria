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
Infatti, ricordiamo che nello scorso capitolo abbiamo scoperto ciò che riassumiamo qui di seguito.

{% include box-imp.html testo="Il calore" %}
<u>Il calore</u> (simbolo $Q$) <u>è una forma di energia</u>. Pertanto, <u>essa si misura in joule</u> (simbolo J).  
Inoltre, l'energia meccanica può convertirsi in calore tramite l'attrito.  
{% include box-end.html %}


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

Prova tu stesso: trascina la spada nella fornace per scaldarla, nel cesto di ghiaccio per raffreddarla, oppure immergila nella bacinella d'acqua e osserva il flusso di calore, finché spada e acqua non raggiungono l'equilibrio termico.

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

Oggi crediamo che la materia sia composta da un numero gigantesco di **molecole**, a loro volta composti da **atomi**. Ci riferiremo in genere agli atomi e alle molecole che compongono la materia con il nome di <definizione>particelle</definizione>. Le particelle che compongono un corpo sono in continuo movimento, anche se il corpo è fermo, per un'agitazione che si chiama <definizione>agitazione termica</definizione>, come puoi vedere nell'animazione qui sotto.

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




# La Trasmissione del Calore

La descrizione della trasmissione del calore è molto affascinante, perché non è possibile descrivere ***come*** esso avvenga se non in termini di ciò che succede **a livello microscopico**, cioè a livello delle molecole e degli atomi di cui sono composti i corpi, e questo rivela quanto sia complesso e ricco il mondo che abbiamo attorno, proprio quello a cui siamo più abituati.



