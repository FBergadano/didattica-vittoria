---
layout: capitolo
title: "L'Energia"
corso: "meccanica"
corso_titolo: "Meccanica"
materia: fisica
numero: 6
---

<cit autore="François Villon, Ballata delle dame di un tempo che fu">
Mais où sont les neiges d'antan?
(Dove sono le nevi di un tempo?)
</cit>

{% include margin-note.html testo="L'energia si conserva"%}
Tutto cambia continuamente: osserviamo in ogni momento forme, colori e sostanze che scompaiono. Eppure ci deve essere una realtà sottostante che non cambia, che rimane immutata, insomma qualcosa che “non si crea e non si distrugge”.  
Questa “cosa” che non cambia, noi la chiameremo <definizione>energia</definizione>: anche se non abbiamo la più pallida idea di cosa sia veramente. Come diceva uno dei più grandi Fisici del Novecento,
<cit autore="Richard Feynman, Feynman Lectures on Physics">
È importante rendersi conto che, nella fisica di oggi, non abbiamo alcuna conoscenza di cosa sia l'energia.
</cit>
{% include margin-note-end.html %}

{% include box-imp.html testo="Principio di conservazione dell'energia" %}
L'energia è ciò che non si crea e non si distrugge in nessuna trasformazione. Vale a dire, in **qualsiasi** processo fisico, l'energia **dell'intero sistema** si conserva. Sempre.
{% include box-end.html %}

L'energia ha molte forme. Anche se non sappiamo esattamente cosa sia l'energia, possiamo avere una buona intuizione di ciò a cui corrispondono le varie forme di energia.

# Il Lavoro
{% include margin-note.html testo="Il lavoro è una forma di energia" %}
La prima forma di energia che incontriamo si chiama ***lavoro***. 
Possiamo intuire il concetto di lavoro pensando alla sensazione di *fatica* che proviamo quando spostiamo qualcosa. Partiremo da un esempio concreto per comprendere come scrivere la formula del lavoro.
{% include margin-note-end.html %}

{% include margin-note.html testo="Dall'esempio del banco alla formula del lavoro" %}
Immagina di spostare un banco spingendolo orizzontalmente. Lo spostamento ti costa fatica, cioè *lavoro*. Proviamo a comprendere da cosa dipende questa fatica con la seguente animazione.

{% include lab-virtuali/spinta-banco-lab.html %}

La fatica che devi fare dipende
- dalla forza che devi applicare (un banco pesante richiederà più forza di uno leggero) 
- dallo spostamento che compi (uno spostamento piccolo non comporta molta fatica, mentre uno spostamento grande sì).  

Inoltre, è chiaro che la fatica non ha una direzione nello spazio, quindi <u markdown="span">il lavoro è una grandezza ***scalare***</u>.

Quindi, <u markdown="span">sia l'intensità della forza che lo spostamento sono **direttamente proporzionali** al lavoro</u>. 
Pertanto, il lavoro (che indichiamo con il simbolo $L$) si può esprimere attraverso la formula

{% include eq-annotated.html
     id="formula-lavoro-1"
     formula="L = F\cdot \Delta s"
     frammenti="L|F|\Delta s"
     etichette="lavoro|modulo della forza|distanza percorsa"
     posizioni="alto|alto|alto"
  %}
{% include margin-note-end.html %}

{% include box-warn.html %}
Ricorda che il modulo della forza corrisponde all'intensità della forza, ovvero alla lunghezza del vettore forza. Quindi, il modulo della forza <u>non può mai essere negativo</u>. Allo stesso modo, $\Delta s$ è una distanza percorsa, quindi anch'essa <u>non può mai essere negativa</u>.
{% include box-end.html %}


Anche se l'abbiamo derivata per un caso specifico (spostare un banco), questa formula vale in generale. Il lavoro è definito come il prodotto tra una forza e uno spostamento.  
Semplicemente, quando la utilizziamo in generale, dobbiamo fare attenzione ai segni!

### Il lavoro può essere positivo, negativo o nullo
Quando utilizzate la formula che abbiamo incontrato, dovete fare attenzione al segno. Infatti, in generale, <u>il lavoro può essere sia positivo, sia negativo, sia nullo</u>. 
- Se lo spostamento avviene **nello stesso verso** della forza, allora il lavoro è **positivo**.
- Se lo spostamento avviene **nel verso contrario** alla forza, allora il lavoro è **negativo**.
- Se lo spostamento è **perpendicolare** alla forza, allora il lavoro è **nullo**.

Chiaramente, il lavoro può essere nullo anche se uno dei due fattori è nullo, cioè se non viene applicata nessuna forza oppure se non c'è nessuno spostamento. Ad esempio, quando spingiamo un muro, anche se stiamo applicando una forza, non stiamo compiendo lavoro, poiché non c'è spostamento.

Perché allora, secondo te, quando spingiamo il muro facciamo fatica anche se non compiamo lavoro? Prova a immaginare la risposta (anche se non è facile!)


{% include spoiler.html testo="Perché allora quando spingiamo il muro facciamo fatica se non compiamo lavoro?"%}
Perché in realtà le cellule all'interno dei nostri muscoli si spostano continuamente, e anche in modo  piuttosto veloce! Quindi c'è una forza che spinge le nostre cellule a contrarsi e c'è uno spostamento. Pertanto, c'è un lavoro, cioè un dispendio di energia, che corrisponde proprio alla nostra sensazione di fatica.
{% include spoiler-end.html%}

| Spostamento rispetto alla forza | Lavoro | Formula da utilizzare |
|---|---|---|
| Stesso verso | Positivo $(L>0)$ | $L=F\cdot \Delta s$ |
| Verso contrario | Negativo $(L<0)$ | $L=-F\cdot \Delta s$ |
| Perpendicolare | Nullo $(L=0)$ | $L=0$ |

La seguente animazione riassume i casi appena descritti. Attiva le frecce delle quattro forze per confrontarne il verso con quello dello spostamento e leggere il segno del lavoro che ciascuna compie (ma cerca prima di indovinarle tu!).

{% include lab-virtuali/segno-lavoro-lab.html %}

In particolare, poiché l'attrito ha sempre verso opposto rispetto al moto, <u markdown="span">il lavoro compiuto dall'attrito è sempre **negativo**</u>.

### L'unità di misura dell'energia: il joule
Ora che abbiamo una formula per l'energia possiamo anche trovarne l'unità di misura. L'unità di misura del lavoro può essere ricavata dalla formula $L=F\cdot \Delta s$ sostituendo a ogni grandezza la rispettiva unità di misura:

{% include eq-annotated.html
     id="formula-joule-1"
     formula="[L]=[F]\cdot[\Delta s]=\text{N}\cdot \text{m}"
     frammenti="[L]|[F]|[\Delta s]|\text{N}|\text{m}"
     etichette="unità di L|unità di F|unità di s|newton|metro"
     posizioni="alto|basso|alto|basso|alto"
  %}

Questa unità di misura si chiama <definizione>joule</definizione> (simbolo $\text{J}$). Ricordando che il newton è definito come $\text{N} = \text{kg}\cdot\text{m}/\text{s}^2$, si ottiene

$$
\text{J} = \text{N}\cdot\text{m} = \text{kg}\cdot\frac{\text{m}}{\text{s}^2}\cdot\text{m} = \text{kg}\cdot\frac{\text{m}^2}{\text{s}^2}.
$$

{% include esercizi/esercizio-lavoro.html %}

{% include esercizi/invert-lavoro.html %}

## La Potenza

Consideriamo le seguenti due situazioni.

{% include lab-virtuali/pozzo-potenza-lab.html %}

Da una parte, un omino solleva a mano un secchio d'acqua; dall'altra, una pompa compie lo stesso lavoro (stesso peso dell'acqua, per lo stesso spostamento). Poiché forza e spostamento sono uguali in entrambe le situazioni, a cambiare non è il lavoro compiuto, ma <u markdown="span">il **tempo** impiegato per svolgere quel lavoro</u>. Evidentemente, la pompa è più ***potente*** dell'omino.

Definiamo quindi il concetto di <definizione>potenza</definizione> nel seguente modo.

{% include box-imp.html testo="La Potenza" %}
La potenza è il rapporto tra il lavoro $L$ compiuto e l'intervallo di tempo $\Delta t$ impiegato per compierlo:

{% include eq-annotated.html
     id="formula-potenza-1"
     formula="P=\dfrac{L}{\Delta t}"
     frammenti="P|L|\Delta t"
     etichette="potenza|lavoro compiuto|intervallo di tempo impiegato"
     posizioni="alto|alto|basso"
  %}

{% include box-end.html %}

Notiamo quindi che la potenza è
- **direttamente proporzionale** al lavoro compiuto
- **inversamente proporzionale** al tempo impiegato per compierlo.

Inoltre, notiamo che --- essendo la potenza definita come un lavoro diviso un tempo --- l'unità di misura della potenza corrisponde a

{% include eq-annotated.html
     id="formula-potenza-unita"
     formula="[P]=\dfrac{[L]}{[\Delta t]} = \dfrac{\text{J}}{\text{s}}"
     frammenti="[P]|[L]|[\Delta t]|\text{J}|\text{s}"
     etichette="unità di misura di P|unità di misura di L|unità di misura del tempo|joule|secondo"
     posizioni="alto|alto|basso|alto|basso"
  %}

Questa unità di misura, essendo un'unità importante, prende un nome proprio e si chiama <definizione>watt</definizione> (simbolo W). Quindi, la relazione diventa

$$ \text{W} = \dfrac{\text{J}}{\text{s}}.$$

C'è un altro modo, spesso più comodo, di scrivere la potenza. Ricorda che il lavoro si può scrivere come $L=F\cdot \Delta s$: prova tu stesso a sostituirlo nella formula della potenza, e a riconoscere una grandezza che già conosci.

{% include esercizi/scoperta-potenza-fv.html %}

Hai scoperto quindi che la potenza si può scrivere anche così:

{% include eq-annotated.html
     id="formula-potenza-fv"
     formula="P=F\cdot v"
     frammenti="P|F|v"
     etichette="potenza|modulo della forza applicata|modulo della velocità"
     posizioni="alto|basso|alto"
  %}

Prova tu ora a invertire sia questa formula sia quella vista in precedenza, $P=\dfrac{L}{\Delta t}$, isolando ogni volta le altre grandezze.

{% include esercizi/invert-potenza.html %}

Prova infine con qualche esercizio e un quiz vero/falso sulla potenza.

{% include esercizi/esercizio-potenza.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qpotenza %}[
{"t":"Se il lavoro compiuto raddoppia, a parità di tempo impiegato, anche la potenza raddoppia.","ok":true,"s":"Sì: la potenza è direttamente proporzionale al lavoro."},
{"t":"Una macchina più potente compie sempre un lavoro maggiore.","ok":false,"s":"No: due macchine possono compiere lo stesso lavoro; quella più potente ci mette semplicemente meno tempo."},
{"t":"Se il tempo impiegato raddoppia, a parità di lavoro compiuto, la potenza raddoppia.","ok":false,"s":"No: la potenza è inversamente proporzionale al tempo, quindi raddoppiando il tempo la potenza dimezza."},
{"t":"Il watt corrisponde a un joule al secondo.","ok":true,"s":"Sì, per definizione: $\\text W=\\text J/\\text s$."},
{"t":"Ricorda che $\\text J=\\text{kg}\\cdot\\text m^2/\\text s^2$. Esprimi allora il watt nelle sole unità fondamentali del Sistema Internazionale (kg, m, s).","tipo":"fill","opts":["kg·m²/s³","kg·m/s²","kg·m²/s²","kg/(m·s³)"],"ok":"kg·m²/s³","s":"Il watt è un joule al secondo: $\\text W=\\text J/\\text s=(\\text{kg}\\cdot\\text m^2/\\text s^2)/\\text s=\\text{kg}\\cdot\\text m^2/\\text s^3$."},
{"t":"Se una forza $F$ sposta un corpo con velocità costante $v$, la potenza sviluppata vale $Fv$.","ok":true,"s":"Sì, è proprio la forma alternativa della potenza che hai appena scoperto."}
]{% endcapture %}
{% include quiz.html domande=_qpotenza id="q-potenza" senza_esempi="true" %}
{% include box-end.html %}

### Il lavoro si può convertire in altre forme di energia
Quando applichiamo una forza su un corpo e ne produciamo uno spostamento, abbiamo compiuto un lavoro. Ma nel momento in cui smettiamo di applicare la forza, il lavoro svanisce. Eppure, l'energia non può scomparire. Questo significa che l'energia ha cambiato forma: il lavoro è diventato qualcos'altro. 

In questo capitolo vedremo tre forme di energia in cui si può convertire il lavoro: energia cinetica, energia potenziale e calore.


# L'Energia Cinetica

## Il Teorema dell'Energia Cinetica

Per comprendere in che modo il lavoro si può trasformare in altre forme di energia, cominciamo da un esempio concreto.  
{% include margin-note.html testo="Da un esempio al teorema dell'energia cinetica" %}
Immagina di spingere una bimba su una bici. Finché la stai spingendo, stai compiendo un lavoro, ma nel momento in cui smetti di spingere, la forza diventa nulla e perciò anche il lavoro è nullo. L'energia si è trasferita alla bambina, che ora si muove.
{% include margin-note-end.html %}

{% include figura.html id="bimbo-bici"
   src="/corsi/gif/bimbo_bici.webp"
   didascalia="Spingendo la bimba sulla bici, applichi una forza lungo lo spostamento: stai compiendo lavoro su di lei. Il risultato di questo lavoro è che la bambina acquisisce un'energia di movimento."
   larghezza="360px" %}

Questa energia è un'energia di movimento, e perciò è detta <definizione>energia cinetica</definizione> (dal greco *“chinéo”*, che vuol dire “muovere”). Essa si indica con il simbolo $K$.

{% include box-thm.html testo="Teorema dell'Energia Cinetica"%}
Il **lavoro totale** compiuto su un corpo <u>dalla somma di tutte le forze</u> che agiscono su di esso è pari alla variazione della sua energia cinetica. In formule, 

$$
L = \Delta K,
$$  

ove $\Delta K=K_f-K_i$ indica la variazione di energia cinetica del corpo (energia cinetica finale meno quella iniziale).
{% include box-end.html %}

Notiamo che
- se $L$ è positivo allora $\Delta K>0$, cioè l'energia cinetica aumenta;
- se $L$ è negativo allora $\Delta K<0$, cioè l'energia cinetica diminuisce;
- se $L$ è nullo allora $\Delta K=0$, cioè l'energia cinetica rimane invariata.

Vale a dire, il lavoro esercitato da una forza contraria allo spostamento è negativo, e quindi frena il corpo, facendone diminuire l'energia cinetica. Al contrario, quello esercitato da una forza che spinge nel verso dello spostamento è positivo, e quindi accelera il corpo, facendo aumentare l'energia cinetica.

### La formula dell'Energia Cinetica

{% include margin-note.html testo="Dal teorema dell'energia cinetica alla formula" %}
La formula dell'energia cinetica può essere derivata direttamente dal teorema dell'energia cinetica, attraverso il seguente calcolo.

{% include spoiler.html testo="Derivazione della formula dell'energia cinetica" %}

Consideriamo un corpo di massa $m$ che si muove con velocità iniziale $v_i$. Su di esso agisce, per un tempo $\Delta t$, una forza costante $F$ diretta come il moto: questa forza compie un lavoro $L$, provoca uno spostamento $\Delta s$ e porta il corpo ad avere velocità finale $v_f$.

**Il lavoro.** Per definizione,

$$L = F\cdot \Delta s.$$

**La forza.** Per il secondo principio della dinamica,

$$F = m\, a.$$

**L'accelerazione.** Dalla definizione di accelerazione,

$$a = \frac{v_f-v_i}{\Delta t} \quad \implies \quad \Delta t = \frac{v_f-v_i}{a}.$$

**Lo spostamento.** Lo spostamento è lo stesso che si avrebbe con un moto a velocità costante pari alla velocità media $v_m$, cioè

$$\Delta s = v_m\cdot \Delta t, \qquad \text{con} \qquad v_m = \frac{v_i+v_f}{2}.$$



**Mettiamo insieme i pezzi.** Sostituendo $F=ma$ e $\Delta s=v_m\cdot \Delta t$ nella formula del lavoro,

$$L = m\,a\cdot \frac{v_i+v_f}{2}\cdot \Delta t.$$

Ora sostituiamo $\Delta t = \dfrac{v_f-v_i}{a}$: l'accelerazione $a$ si semplifica, e resta

$$L = m\cdot \frac{v_i+v_f}{2}\cdot (v_f-v_i) = \frac12 m\,(v_f+v_i)(v_f-v_i) = \frac12 mv_f^2 - \frac12 mv_i^2.$$

Ma per il teorema dell'energia cinetica sappiamo che $L = \Delta K = K_f - K_i$. Confrontando questa relazione con quella appena trovata, riconosciamo

$$K_f = \frac12 mv_f^2, \qquad\qquad K_i = \frac12 mv_i^2.$$

{% include spoiler-end.html %}
{% include margin-note-end.html %}

La formula dell'energia cinetica, dunque, risulta essere

$$
K = \frac 12 m v^2.
$$

Notiamo che:
- l'energia cinetica è <u>direttamente proporzionale alla massa</u> (quindi raddoppiando la massa raddoppia anche l'energia cinetica, a parità di $v$);
- l'energia cinetica è <u markdown="span">direttamente proporzionale al **quadrato** della velocità</u>.

{% include box-warn.html %}
Il fatto che sia direttamente proporzionale al quadrato della velocità significa che se la velocità raddoppia allora l'energia cinetica non raddoppia ma quadruplica. Se la velocità triplica, l'energia cinetica aumenta di nove volte; se la velocità quadruplica allora l'energia cinetica aumenta di 16 volte, etc.
{% include box-end.html %}

### L'unità di misura dell'Energia Cinetica

L'energia cinetica, essendo un'energia, <u>ha la stessa unità di misura del lavoro: il joule</u>. Questo si può vedere dalla formula $K=\frac 12 m v^2$:
{% include eq-annotated.html
     id="formula-joule-2"
     formula="[K]=[m]\cdot[v^2]=\text{kg}\cdot \left(\frac{\text m}{\text{s}}\right)^2 = \text J"
     frammenti="[K]|[m]|[v^2]|\text{kg}|\text m|\text{s}|\text J"
     etichette="unità di K|unità di m|unità di v²|chilo|metro|secondo|joule"
     posizioni="alto|basso|alto|basso|alto|basso|alto"
  %}

{% include esercizi/esercizio-cinetica.html %}

{% include esercizi/invert-cinetica.html %}

# L'Energia Potenziale

{% include margin-note.html testo="Dagli esempi al concetto di energia potenziale" %}
Vediamo adesso un'altra forma di energia in cui si può trasformare il lavoro. Anche qui, partiamo da un paio di esempi concreti.

Immagina di comprimere una molla spingendo con la mano. Poiché eserciti una forza lungo uno spostamento, stai compiendo un lavoro.
{% include figura.html id="compressing-string"
   src="/corsi/gif/compressing-string.gif"
   didascalia="Comprimendo la molla, applichi una forza lungo uno spostamento: stai compiendo un lavoro. Il risultato di questo lavoro è immagazzinato dentro la molla."
   larghezza="250px" %}
Tuttavia, nel momento in cui la tua mano si ferma, lo spostamento finisce e quindi il lavoro diventa nullo. D'altra parte, niente si sta muovendo, quindi non c'è energia cinetica. Deve quindi esistere una nuova energia, immagazzinata dentro la molla, che potrebbe portarla, *potenzialmente*, ad esplodere. Questa energia si chiama pertanto <definizione>energia potenziale</definizione>. Nel caso di una molla, si parla di <definizione>energia potenziale elastica</definizione>.

La stessa cosa succede quando solleviamo un peso. 
{% include figura.html id="bimbo-sollevamento-pesi"
   src="/corsi/gif/bimbo_solleva_pesi.webp"
   didascalia="Sollevando il peso, si applica una forza lungo uno spostamento: stai compiendo un lavoro. Il risultato di questo lavoro è che il peso si trova a un'altezza da cui può cadere, acquisendo velocità e quindi energia cinetica."
   larghezza="300px" %}
Per sollevare il peso compiamo un lavoro, ma quando poi lo manteniamo fisso a una certa altezza il lavoro è nullo e poiché tutto è fermo non c'è energia cinetica. Anche in questo caso, quindi, l'energia è immagazzinata dentro il corpo, che ora ha il *potenziale* di cadere. Il corpo ha dunque una certa **energia potenziale**. In questo caso, si parla di <definizione>energia potenziale gravitazionale</definizione>.


Da questi due esempi comprendiamo che, a differenza dell'energia cinetica, <u>esistono diversi tipi di energia potenziale</u>. Ciascuno, ha la propria formula. In questo capitolo, ci concentreremo in particolare sull'energia potenziale gravitazionale.
{% include margin-note-end.html %}





### L'energia potenziale gravitazionale

{% include margin-note.html testo="Dall'esempio del sollevamento alla formula dell'energia potenziale gravitazionale" %}
Dall'esempio del sollevamento di un peso, possiamo anche trovare la formula per l'energia potenziale gravitazionale. Infatti, immagina di sollevare una massa $m$ da un'altezza $h_i$ a un'altezza $h_f$. Prendiamo la nostra solita formula del lavoro $L = F\cdot \Delta s$ e applichiamola a questo caso. Nella formula,
- $F$ è il modulo della forza peso $F_{\text{peso}}=mg$, dove $g$ è l'accelerazione gravitazionale del pianeta;
- $\Delta s$ è la distanza percorsa, che in questo caso corrisponde alla differenza di altezza $\Delta h$;
- notiamo che la forza peso (diretta verso il basso) è opposta allo spostamento (diretto verso l'alto), quindi nella nostra formula dobbiamo aggiungere un meno. Pertanto, il lavoro svolto dalla forza peso è

$$
L = -mg \cdot \Delta h.
$$

Poiché, come abbiamo detto prima, sappiamo che tutto il lavoro si converte in una variazione dell'energia potenziale gravitazionale, allora possiamo scrivere che

$$
L = - \Delta U_g.
$$

Uguagliando le due formule per $L$, possiamo comprendere che la formula dell'energia potenziale è

$$
U_g = mgh.
$$

{% include margin-note-end.html %}

### L'unità di misura dell'Energia Potenziale

Anche l'energia potenziale, essendo un'energia, <u>ha la stessa unità di misura del lavoro: il joule</u>. Questo si può vedere dalla formula $U_g=mgh$:

{% include eq-annotated.html
     id="formula-joule-3"
     formula="[U_g]=[m]\cdot[g]\cdot[h]=\text{kg}\cdot\frac{\text{m}}{\text{s}^2}\cdot \text{m} = \text{J}"
     frammenti="[U_g]|[m]|[g]|[h]|\text{J}"
     etichette="unità di U_g|unità di m|unità di g|unità di h|joule"
     posizioni="alto|basso|alto|basso|alto"
  %}


{% include box-imp.html testo="Energia Potenziale Gravitazionale" %}
Il lavoro svolto dalla forza peso per variare l'altezza di un corpo è pari a

$$L_{\text{peso}}= - \Delta U_g,$$

dove $U_g$ è l'energia potenziale gravitazionale, la cui formula corrisponde a 

$$U_g = mgh,$$

ove $m$ è la massa del corpo, $g$ è l'accelerazione gravitazionale e $h$ è l'altezza. 

L'unità di misura dell'energia potenziale gravitazionale è il joule (J).


{% include box-end.html %}





{% include esercizi/esercizio-potenziale-grav.html %}

{% include esercizi/invert-potenziale-grav.html %}

# L'Energia Meccanica e il Calore

{% include margin-note.html testo="Definizione dell'energia meccanica" %}
Abbiamo visto che un corpo in movimento possiede energia cinetica $K$, mentre un corpo sollevato possiede energia potenziale $U_g$ e un corpo elastico (come una molla) può possedere un'energia potenziale elastica $U_{\text{el}}$. In generale, un corpo può essere dotato di molti tipi di energia allo stesso tempo. In quel caso, <u>la sua energia è semplicemente la somma delle sue energie</u>. Chiamiamo <definizione>energia meccanica</definizione> $E$ questa somma.
{% include margin-note-end.html %}

{% include box-imp.html testo="L'energia meccanica" %}

L'energia meccanica è la somma dell'energia cinetica e tutte le energie potenziali che stanno agendo sul corpo:

$$E = K + U,$$

dove $U$ racchiude tutti i tipi di energia potenziale (ad esempio, elastica e gravitazionale).  
Naturalmente, essendo $E$ un'energia, <u>si misura anch'essa in joule</u>.
{% include box-end.html %}

{% include esercizi/esercizio-energia-meccanica.html %}

## I Sistemi Isolati e la Conservazione dell'Energia Meccanica

{% include box-imp.html testo="I sistemi isolati" %}
Un sistema si dice <definizione>isolato</definizione> se esso non scambia energia con il resto dell'Universo.
{% include box-end.html %}

{% include figure/figura-sistema-isolato.html %}

Quindi <u markdown="span">su un sistema isolato **non** si compie lavoro</u> (in particolare, non c'è l'attrito).  
I sistemi isolati sono perciò quelli che <u markdown="span">**conservano** la propria energia: non la cedono e non ne acquistano</u>.  
In questa situazione, l'energia meccanica non fa che trasformarsi continuamente da potenziale a cinetica e viceversa, senza mai disperdersi.


{% include box-thm.html testo="Teorema di conservazione dell'energia meccanica" %}
<u markdown="span">In un sistema **isolato**, l'energia meccanica si conserva</u>, cioè <u markdown="span">resta **costante** nel tempo</u>. 

$$
E = K+U \quad \text{è costante.}
$$

Ovvero, indicando con il pedice $i$ la situazione iniziale e con $f$ quella finale, possiamo scrivere che per un sistema isolato

$$
K_i+U_i = K_f+U_f.
$$

{% include box-end.html %}

Questo fatto così semplice è capace di descrivere un'immensa quantità di fenomeni molto diversi. È importante provare a usare il linguaggio dell'energia meccanica per descrivere alcuni fenomeni semplici, perché è uno strumento molto potente che ci tornerà molto spesso utile. 

## Alcuni esempi di applicazione della conservazione dell'energia meccanica.

Proviamo quindi a mettere questo concetto in azione, con alcuni esempi concreti.

### Un bambino su un tappeto elastico

Guarda ad esempio cosa succede dal punto di vista energetico a un bambino che salta su un tappeto elastico:


{% include lab-virtuali/trampolino-lab.html %}

Prova a ricostruire tu stesso, passo per passo, come cambia l'energia del bambino lungo tutto il ciclo (nota che ora prendiamo come riferimento per l'altezza, e quindi per l'energia potenziale gravitazionale nulla, proprio il punto di massima estensione del tappeto):

{% include esercizi/cloze-trampolino.html %}


### Il pendolo

Lo stesso scambio fra energia potenziale ed energia cinetica avviene in moltissime altre situazioni. Osserva ad esempio un pendolo che oscilla avanti e indietro senza mai fermarsi:

{% include lab-virtuali/pendolo-lab.html %}

Prova a descrivere anche tu, passo per passo, come cambia la sua energia lungo l'oscillazione (l'altezza $h$ è misurata rispetto al punto più basso della sua traiettoria):

{% include esercizi/cloze-pendolo.html %}

### Lo yo-yo

Un altro esempio dello stesso fenomeno è uno yo-yo che sale e scende lungo il suo filo, senza mai fermarsi:

{% include lab-virtuali/yoyo-lab.html %}

Anche qui, prova a descrivere come cambia la sua energia (l'altezza $h$ è misurata rispetto al punto più basso della sua corsa):

{% include esercizi/cloze-yoyo.html %}





### La velocità di impatto

{% include margin-note.html testo="Dalla caduta di un corpo alla velocità d'impatto" %}
Vediamo ora un'applicazione di quanto abbiamo imparato: la caduta di un corpo di massa $m$ da un'altezza iniziale $h_i$, lasciato cadere da fermo.

Durante la caduta, l'energia potenziale gravitazionale si trasforma via via in energia cinetica:
- all'inizio della caduta, all'altezza $h_i$, tutta l'energia è potenziale e la velocità è ancora nulla, quindi $E=U_g=mgh_i$;
- a metà caduta, una parte dell'energia è ancora potenziale e l'altra parte si è già trasformata in energia cinetica: $E=K+U_g$;
- appena prima dell'impatto, all'altezza $0$, tutta l'energia è ormai cinetica e perciò $E = K = \frac 12 mv_f^2$.

Possiamo usare questa catena di trasformazioni per calcolare la velocità con cui il corpo arriva al suolo. Trascurando l'attrito dell'aria, tutta l'energia potenziale iniziale si trasforma in energia cinetica finale, cioè $U_g=K$:

$$mgh_i = \frac12 mv_f^2.$$

Notiamo che la massa $m$ compare su entrambi i lati e si semplifica (quindi <u markdown="span">**tutti i corpi cadono con la stessa velocità**, indipendentemente dalla loro massa</u>!):

$$gh_i = \frac12 v_f^2.$$

Scambiando i membri e moltiplicando per 2 si ottiene

$$v_f^2 = 2gh_i$$

Ora ci basta prendere la radice quadrata su entrambi i membri per ottenere

$$v_f = \sqrt{2gh_i}.$$


{% include margin-note-end.html %}


{% include box-imp.html testo="Velocità di impatto di un corpo in caduta libera"%}
In assenza di attriti, per la conservazione dell'energia meccanica, un corpo di massa $m$ che cade da un'altezza iniziale $h_i$ impatta il suolo con una velocità pari a 

$$v_f = \sqrt{2gh_i}.$$

{% include box-end.html %}

{% include esercizi/invert-impatto.html %}

{% include esercizi/esercizio-impatto.html %}

## I Sistemi non Isolati e la Conservazione dell'Energia Meccanica Totale

{% include box-imp.html testo="Sistemi non isolati" %}
Un sistema si dice <definizione>non isolato</definizione> se scambia energia con una parte del resto dell'Universo.
{% include box-end.html %}

In questo caso, il sistema può **perdere** energia oppure **acquistare** energia, a seconda dei casi. Ad esempio, un corpo in movimento soggetto ad attrito **perde** energia meccanica, mentre un corpo su cui viene applicata una forza fino a produrne uno spostamento **acquista** energia meccanica.   
In ogni caso, <u markdown="span">l'energia **non** può scomparire nel nulla né comparire dal nulla</u>, quindi viene fornita dall'Universo oppure finisce nel resto dell'Universo.

In generale, vale il seguente teorema.

{% include box-thm.html testo="Teorema di Conservazione dell'Energia Meccanica Totale" %}

Un sistema che scambia lavoro con il resto dell'Universo varia la sua energia meccanica secondo la legge

$$
\Delta E=L.
$$

Ci sono quindi tre situazioni:
- se $L>0$, allora $\Delta E>0$ e quindi l'energia meccanica aumenta;
- se $L=0,$ allora $\Delta E=0$ e quindi l'energia è costante;
- se $L<0,$ allora $\Delta E<0$ e quindi l'energia meccanica diminuisce.

{% include box-end.html %}

{% include figure/figura-sistema-non-isolato.html %}

Ad esempio, l'attrito compie sempre un lavoro negativo, perciò diminuisce l'energia meccanica, mentre un motore compie sempre un lavoro positivo, perciò aumenta l'energia meccanica.

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qlavene %}[
{"t":"Se su un sistema si compie un lavoro positivo, la sua energia meccanica aumenta.","ok":true,"s":"Sì: per il teorema $\\Delta E = L$, se $L>0$ allora anche $\\Delta E>0$."},
{"t":"L'attrito può, in certi casi, aumentare l'energia meccanica di un sistema.","ok":false,"s":"No: l'attrito compie sempre un lavoro negativo, quindi diminuisce sempre l'energia meccanica, mai il contrario."},
{"t":"Un motore che compie lavoro su un sistema ne diminuisce sempre l'energia meccanica.","ok":false,"s":"No, è vero il contrario: un motore compie lavoro positivo, quindi aumenta l'energia meccanica del sistema."},
{"t":"Se il lavoro totale compiuto su un sistema è nullo, la sua energia meccanica resta costante.","ok":true,"s":"Sì: per $\\Delta E=L$, se $L=0$ allora $\\Delta E=0$, cioè l'energia non cambia."}
]{% endcapture %}
{% include quiz.html domande=_qlavene
   label_si="Un esempio di lavoro che fa aumentare l'energia meccanica"
   label_no="Un esempio di lavoro che la fa diminuire"
   id="q-lavoro-energia" %}
{% include box-end.html %}

### La palla da bowling

Consideriamo l'esempio di una palla da bowling che cade.

{% include lab-virtuali/bowling-lab.html %}

Inizialmente, come già sappiamo l'energia meccanica è solo potenziale gravitazionale. Man mano che cade, essa si trasforma in energia cinetica.   
Quando però la palla tocca il pavimento, la sua energia potenziale è nulla e dopo pochi istanti vediamo che la palla è ferma, quindi perde anche tutta la sua energia cinetica. Questo significa che la sua energia è stata dissipata.

In effetti, nel momento dell'urto, la palla comprime il pavimento, compiendo quindi un lavoro e cedendo quindi energia al pavimento. Il pavimento riprende presto la sua forma originaria, dissipando l'energia sotto forma di vibrazioni (quindi anch'esso compie un lavoro). Le vibrazioni del pavimento fanno inoltre vibrare l'aria (compiendo un ulteriore lavoro) che giunge fino al nostro timpano e lo fa vibrare (compiendo lavoro). La vibrazione del timpano viene infine convertita in suono.  
(Se attivi l'animazione, infatti, sentirai il rumore della palla che colpisce il suolo).

## La Dissipazione dell'Energia: il Calore

Sappiamo che <u>l'attrito dissipa dell'energia</u>, compiendo un lavoro **negativo** sul corpo. Ad esempio, un corpo che striscia su una superificie orizzontale soggetta ad attrito rallenta fino a fermarsi, perdendo perciò tutta l'energia cinetica che aveva. Dove va a finire questa energia?  
L'energia non è scomparsa — non potrebbe, per il principio di conservazione dell'energia visto all'inizio del capitolo: si è convertita in <definizione>calore</definizione>.

Un esperimento semplice per visualizzare questo concetto è sfregare le proprie mani l'una contro l'altra: l'attrito dissipa l'energia cinetica delle mani e sentiamo che esse si riscaldano. La stessa cosa succede con la punta di un trapano che si riscalda, o con un fiammifero che si accende: in tutti questi casi il lavoro si converte prima in energia cinetica, che a sua volta viene dissipata sotto forma di calore dall'attrito.

{% include img-row.html
   immagini="/corsi/gif/alcaraz-rubbing-hands.webp|/corsi/gif/drill-heating-up.webp|/corsi/gif/fiammifero.webp"
   alt="Sfregamento delle mani che si riscaldano per attrito|Punta di un trapano che si riscalda per attrito|Un fiammifero che si accende per attrito"
   larghezza="170px" %}


Utilizzando questo fatto, puoi spiegare anche un famoso esperimento che circola sul web: si può cuocere un pollo prendendolo a schiaffi?
{% include spoiler.html testo="Mostra la soluzione" %}
Sì. Infatti, ogni schiaffo corrisponde a una forza che provoca una compressione nel pollo, cioè uno spostamento. Se ci sono sia forza sia spostamento, allora c'è lavoro. Il lavoro non viene convertito in energia cinetica né potenziale. Cioè, viene dissipato subito (tramite delle vibrazioni nel pollo) che finiscono per riscaldare il pollo. Più sotto puoi trovare un esercizio che chiede di calcolare il numero di schiaffi necessario.
{% include spoiler-end.html %}

{% include box-imp.html testo="Il calore" %}
L'energia meccanica che viene dissipata si converte in **calore** (simbolo $Q$). Pertanto, anche il calore è una forma di energia e perciò la sua unità di misura è il joule.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qCalore %}[
{"t":"Il calore è la stessa cosa dell'energia meccanica: sono due nomi per la stessa grandezza.","ok":false,"s":"No: il calore è l'energia meccanica dissipata, cioè quella che un sistema non isolato perde a causa dell'attrito — non è l'energia meccanica del sistema stesso."},
{"t":"Il calore si misura in joule, come tutte le altre forme di energia.","ok":true,"s":"Sì: essendo una forma di energia, condivide la stessa unità di misura del lavoro, dell'energia cinetica e di quella potenziale."},
{"t":"Se un corpo rallenta fino a fermarsi a causa dell'attrito, l'energia cinetica persa si trasforma interamente in calore.","ok":true,"s":"Sì: è proprio il lavoro negativo dell'attrito, dissipato sotto forma di calore."},
{"t":"Più l'attrito è intenso, meno calore viene prodotto a parità di spostamento.","ok":false,"s":"No, è vero il contrario: un attrito più intenso significa una forza d'attrito maggiore, quindi — a parità di spostamento — più lavoro dissipato, cioè più calore."}
]{% endcapture %}
{% include quiz.html domande=_qCalore id="q-calore" senza_esempi="true" %}
{% include box-end.html %}

{% include esercizi/esercizio-calore.html %}

Prova tu stesso a esplorare la conservazione — e la dissipazione — dell'energia meccanica con questa simulazione:

{% include phet-sim.html id="energy-skate-park"
   src="https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_all.html"
   didascalia="Simulazione PhET: fai scorrere lo skater lungo la pista e osserva come l'energia potenziale si trasforma in energia cinetica (e viceversa). Prova ad attivare l'attrito, e osserva come parte dell'energia si trasforma in calore."
   altezza="550px" %}


# Esercizi di Riepilogo

### Mettiti alla prova: ripasso veloce

Prima di affrontare gli esercizi veri e propri, un ripasso rapido su tutto il capitolo.

{% include ex.html diff=1 %}
Vero o falso?

{% capture _qRipEnergia %}[
{"t":"Se una forza è perpendicolare allo spostamento del corpo su cui agisce, il lavoro che compie è nullo.","ok":true,"s":"Sì: nella formula del lavoro conta solo la componente della forza lungo lo spostamento, e una forza perpendicolare non ne ha nessuna."},
{"t":"L'energia cinetica è direttamente proporzionale alla velocità del corpo.","ok":false,"s":"No: $K=\\frac12mv^2$ è proporzionale al quadrato della velocità, non alla velocità stessa."},
{"t":"L'attrito può, in certi casi, far aumentare l'energia meccanica di un sistema.","ok":false,"s":"No: l'attrito compie sempre un lavoro negativo, quindi diminuisce sempre l'energia meccanica."},
{"t":"In un sistema isolato, l'energia meccanica totale resta costante nel tempo.","ok":true,"s":"Sì, è proprio il teorema di conservazione dell'energia meccanica: $K_i+U_i=K_f+U_f$."},
{"t":"Un corpo fermo non può avere energia meccanica.","ok":false,"s":"No: un corpo fermo può comunque possedere energia potenziale (ad esempio se è sollevato da terra), quindi un'energia meccanica non nulla."},
{"t":"Il calore è una forma di energia, e si misura anch'esso in joule.","ok":true,"s":"Sì: il calore è l'energia meccanica dissipata, quindi condivide la stessa unità di misura di tutte le energie, il joule."},
{"t":"Due macchine che compiono lo stesso lavoro nello stesso tempo hanno necessariamente la stessa potenza.","ok":true,"s":"Sì: la potenza dipende solo dal lavoro compiuto e dal tempo impiegato, $P=L/\\Delta t$."},
{"t":"Raddoppiando la forza $F$ e la velocità $v$ con cui si muove un corpo, la potenza $P=Fv$ raddoppia.","ok":false,"s":"No: raddoppiando entrambi i fattori, $P=Fv$ quadruplica, non raddoppia."}
]{% endcapture %}
{% include quiz.html domande=_qRipEnergia id="q-ripasso-energia" senza_esempi="true" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Abbina ogni grandezza alla formula corrispondente.

{% capture _matchEnergia %}[
  {"l":"Lavoro","r":"$L=F\\cdot\\Delta s$"},
  {"l":"Energia cinetica","r":"$K=\\frac12mv^2$"},
  {"l":"Energia potenziale gravitazionale","r":"$U_g=mgh$"},
  {"l":"Energia meccanica","r":"$E=K+U$"},
  {"l":"Velocità di impatto al suolo (caduta libera)","r":"$v_f=\\sqrt{2gh_i}$"},
  {"l":"Potenza","r":"$P=\\dfrac{L}{\\Delta t}$"}
]{% endcapture %}
{% include match.html id="match-formule-energia" dati=_matchEnergia col1="Grandezza" col3="Formula" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Classifica ciascuna situazione.

{% capture _sortIsolati %}[
  {"t":"Un pendolo che oscilla nel vuoto, senza attrito","c":0},
  {"t":"Una palla che rotola su un prato, rallentando per attrito","c":1},
  {"t":"Un satellite in orbita, lontano da ogni attrito","c":0},
  {"t":"Una massa che scivola lungo un piano inclinato perfettamente liscio","c":0},
  {"t":"Un bambino spinto da un adulto su un'altalena","c":1}
]{% endcapture %}
{% include sort.html id="sort-isolato-nonisolato" dati=_sortIsolati col0="Sistema isolato" col1="Sistema non isolato" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Completa le frasi.

{% include fill.html prima="Se il lavoro totale compiuto su un corpo è positivo, la sua energia cinetica" tipo="drop" opts="aumenta|diminuisce|resta invariata" ok="aumenta" dopo="." s="Per il teorema dell'energia cinetica, $L=\Delta K$: se $L>0$ allora anche $\Delta K>0$." %}

{% include fill.html prima="Un sistema che non scambia energia con il resto dell'Universo si dice" ok="isolato,isolata" dopo="." s="Un sistema isolato conserva la propria energia meccanica nel tempo." %}

{% include fill.html prima="L'energia meccanica dissipata da un sistema non isolato (ad esempio a causa dell'attrito) si trasforma in" ok="calore" dopo="." s="Il calore è proprio la forma in cui finisce l'energia meccanica non conservata." %}

{% include fill.html prima="Il rapporto tra il lavoro compiuto e il tempo impiegato per compierlo si chiama" ok="potenza" dopo="." s="$P=L/\Delta t$: è proprio la definizione di potenza." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="Il lavoro compiuto da una forza dipende solo dalla componente della forza lungo lo spostamento." ok=true s="Esatto: le componenti perpendicolari allo spostamento non contribuiscono al lavoro." %}
{% include tf.html q="Raddoppiando la velocità di un corpo, a parità di massa, la sua energia cinetica raddoppia." ok=false s="No: l'energia cinetica è proporzionale al quadrato della velocità, quindi raddoppiando $v$, $K$ quadruplica." %}
{% include ex-end.html %}

### Esercizi sulla formula del lavoro


{% include ex.html diff=1 %}
Trascina ciascuna situazione nella colonna corrispondente.

<div class="sort-widget" id="sw-sortLavSeg">
<p class="sort-hint">Trascina ogni voce nella colonna appropriata.</p>
<div class="sort-pool" id="sp-sortLavSeg"></div>
<div class="sort-table sortls-table3">
<div class="sort-zone">
<div class="sort-zone-hdr">$L>0$</div>
<div class="sort-zone-body" id="szb-sortLavSeg-0" data-cat="0"></div>
</div>
<div class="sort-zone">
<div class="sort-zone-hdr">$L<0$</div>
<div class="sort-zone-body" id="szb-sortLavSeg-1" data-cat="1"></div>
</div>
<div class="sort-zone">
<div class="sort-zone-hdr">$L=0$</div>
<div class="sort-zone-body" id="szb-sortLavSeg-2" data-cat="2"></div>
</div>
</div>
<div class="sort-ctrl">
<button class="sort-vbtn" id="sv-sortLavSeg">✓ Verifica</button>
<button class="sort-rbtn" id="sr-sortLavSeg">↺ Ricomincia</button>
</div>
<div class="sort-fb" id="sf-sortLavSeg"></div>
</div>

<style>
.sortls-table3 { grid-template-columns: 1fr 1fr 1fr !important; }
@media (max-width: 640px) { .sortls-table3 { grid-template-columns: 1fr !important; } }
#sw-sortLavSeg .sort-item { display: inline-block; white-space: normal; text-align: center; }
</style>

<script>
(function(){
var D=[
  {"t":"Forza e spostamento hanno lo stesso verso","c":0},
  {"t":"Forza e spostamento hanno verso opposto","c":1},
  {"t":"Forza e spostamento sono perpendicolari","c":2}
];
var ID='sortLavSeg';
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=0|Math.random()*(i+1),t=a[i];a[i]=a[j];a[j]=t;}return a;}
var pool=document.getElementById('sp-'+ID);
var zones={0:document.getElementById('szb-'+ID+'-0'),1:document.getElementById('szb-'+ID+'-1'),2:document.getElementById('szb-'+ID+'-2')};
var fb=document.getElementById('sf-'+ID);
var dragging=null,ghost=null,overZone=null,ox=0,oy=0;

function getZone(x,y){ghost.style.display='none';var el=document.elementFromPoint(x,y);ghost.style.display='';return el?el.closest('.sort-zone-body,.sort-pool'):null;}

function onDown(e){
  e.preventDefault();
  var el=this;
  dragging=el;
  var r=el.getBoundingClientRect();
  ox=e.clientX-r.left;oy=e.clientY-r.top;
  ghost=el.cloneNode(true);
  ghost.className='sort-item sort-ghost';
  ghost.style.cssText+='width:'+r.width+'px;left:'+(e.clientX-ox)+'px;top:'+(e.clientY-oy)+'px;';
  document.body.appendChild(ghost);
  el.classList.add('sort-dragging');
  fb.className='sort-fb';fb.textContent='';
  el.querySelectorAll('.correct,.wrong').forEach(function(x){x.classList.remove('correct','wrong');});
  el.classList.remove('correct','wrong');
  document.addEventListener('pointermove',onMove,{passive:false});
  document.addEventListener('pointerup',onUp);
  document.addEventListener('pointercancel',onUp);
}

function onMove(e){
  e.preventDefault();
  if(!ghost)return;
  ghost.style.left=(e.clientX-ox)+'px';ghost.style.top=(e.clientY-oy)+'px';
  var z=getZone(e.clientX,e.clientY);
  if(overZone!==z){if(overZone)overZone.classList.remove('over');overZone=z;if(overZone)overZone.classList.add('over');}
}

function onUp(){
  document.removeEventListener('pointermove',onMove);
  document.removeEventListener('pointerup',onUp);
  document.removeEventListener('pointercancel',onUp);
  if(ghost){ghost.remove();ghost=null;}
  if(!dragging)return;
  var el=dragging;dragging=null;
  el.classList.remove('sort-dragging');
  if(overZone){overZone.classList.remove('over');overZone.appendChild(el);overZone=null;}
}

function mkItem(d){
  var el=document.createElement('span');
  el.className='sort-item';el.textContent=d.t;
  el.dataset.c=d.c;el.style.touchAction='none';
  el.addEventListener('pointerdown',onDown);
  return el;
}

function render(){
  pool.innerHTML='';zones[0].innerHTML='';zones[1].innerHTML='';zones[2].innerHTML='';
  fb.className='sort-fb';fb.textContent='';
  shuf(D).forEach(function(d){pool.appendChild(mkItem(d));});
}

window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};

document.getElementById('sv-'+ID).addEventListener('click',function(){
  if(pool.querySelector('.sort-item')){fb.className='sort-fb err';fb.textContent='Posiziona tutti gli elementi prima di verificare.';return;}
  var allOk=true;
  [0,1,2].forEach(function(ci){
    zones[ci].querySelectorAll('.sort-item').forEach(function(el){
      var ok=parseInt(el.dataset.c)===ci;
      el.classList.toggle('correct',ok);el.classList.toggle('wrong',!ok);
      if(!ok)allOk=false;
    });
  });
  var btn=document.getElementById('sv-'+ID);
  if(allOk){
    fb.className='sort-fb ok';fb.textContent='✓ Perfetto! Tutte le situazioni sono nella colonna giusta.';
    _shoot(btn);
    for(var b=0;b<5;b++)(function(b){setTimeout(function(){_shoot({getBoundingClientRect:function(){return{left:window.innerWidth*(.1+Math.random()*.8),top:window.innerHeight*(.1+Math.random()*.5),width:0,height:0};}});},b*200);})(b);
  } else {
    fb.className='sort-fb err';fb.textContent='✗ Alcune situazioni non sono nella colonna giusta. Quelle corrette sono in verde, le altre in rosso.';
  }
});

document.getElementById('sr-'+ID).addEventListener('click',render);
render();
if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([document.getElementById('sw-sortLavSeg')]);
})();
</script>
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un'automobile traina un carrello che pesa $2\,500\ \text N$ con una forza pari a $20\ \text N$ per una distanza di $8\ \text{km}$ lungo una strada dritta ed orizzontale. Qual è il lavoro eseguito dall'auto per tirare il carrello?

*(Fonte: Giochi di Anacleto, 2022)*

<div class="iex-choices" id="mcqEx2choices">
<button class="iex-choice-btn" data-v="a">A. $160\ \text J$</button>
<button class="iex-choice-btn" data-v="b">B. $20\,000\ \text J$</button>
<button class="iex-choice-btn" data-v="c">C. $160\,000\ \text J$</button>
<button class="iex-choice-btn" data-v="d">D. $20\,000\,000\ \text J$</button>
</div>
<div class="iex-fb" id="mcqEx2fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx2choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx2fb');
  var correctV='c';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx2choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Il peso del carrello ($2\,500\ \text N$) non serve a calcolare il lavoro: conta solo la forza effettivamente applicata lungo lo spostamento, cioè $F=20\ \text N$. Convertendo $8\ \text{km}=8\,000\ \text m$,

$$L = F\cdot \Delta s = 20\ \text N \times 8\,000\ \text m = 160\,000\ \text J.$$

La risposta corretta è **C**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Qual è l'altezza da cui cade un corpo dal peso di $2\ \text N$ sapendo che il lavoro compiuto dalla forza di gravità è pari a $2\ \text J$?

*(Fonte: Test di ammissione a Professioni Sanitarie, 2019)*

<div class="iex-choices" id="mcqEx3choices">
<button class="iex-choice-btn" data-v="a">A. $1\ \text m$</button>
<button class="iex-choice-btn" data-v="b">B. $2\ \text m$</button>
<button class="iex-choice-btn" data-v="c">C. $10\ \text m$</button>
<button class="iex-choice-btn" data-v="d">D. $20\ \text m$</button>
<button class="iex-choice-btn" data-v="e">E. $0{,}5\ \text m$</button>
</div>
<div class="iex-fb" id="mcqEx3fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx3choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx3fb');
  var correctV='a';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx3choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Il peso è già la forza di gravità: $F_{peso}=2\ \text N$. Durante la caduta, forza e spostamento hanno lo stesso verso (entrambi verso il basso), quindi

$$L = F_{peso}\cdot h \quad \implies \quad h = \frac{L}{F_{peso}} = \frac{2\ \text J}{2\ \text N} = 1\ \text m.$$

La risposta corretta è **A**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un uomo tenta di spingere la sua auto. Spingendo al massimo, esercita una forza di $10^3\ \text N$, ma non riesce a spostarla. Qual è il lavoro compiuto?

<div class="iex-choices" id="mcqEx4choices">
<button class="iex-choice-btn" data-v="a">A. $10^3\ \text J$</button>
<button class="iex-choice-btn" data-v="b">B. $0$</button>
<button class="iex-choice-btn" data-v="c">C. $10^4\ \text J$</button>
<button class="iex-choice-btn" data-v="d">D. Non è possibile rispondere perché mancano alcuni dati.</button>
</div>
<div class="iex-fb" id="mcqEx4fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx4choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx4fb');
  var correctV='b';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx4choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Anche se l'uomo applica una forza, l'automobile non si sposta: lo spostamento è nullo, $\Delta s=0$. Quindi

$$L = F\cdot \Delta s = 10^3\ \text N \times 0 = 0.$$

La risposta corretta è **B**. (È lo stesso motivo per cui, spingendo un muro, non compi lavoro anche se ti stanchi!)
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
L'attrito esercita una forza costante di $100\ \text N$ su un corpo che scivola per $10\ \text m$. Qual è il lavoro compiuto dall'attrito?

<div class="iex-choices" id="mcqEx5choices">
<button class="iex-choice-btn" data-v="a">A. $1\,000\ \text J$</button>
<button class="iex-choice-btn" data-v="b">B. $100\ \text J$</button>
<button class="iex-choice-btn" data-v="c">C. $10\ \text J$</button>
<button class="iex-choice-btn" data-v="d">D. $-1\,000\ \text J$</button>
</div>
<div class="iex-fb" id="mcqEx5fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx5choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx5fb');
  var correctV='d';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx5choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
L'attrito si oppone sempre al moto: forza e spostamento hanno verso opposto, quindi il lavoro è negativo.

$$L = -F\cdot \Delta s = -100\ \text N \times 10\ \text m = -1\,000\ \text J.$$

La risposta corretta è **D**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Calcola il lavoro compiuto da una forza di $4\times10^2\ \text N$ per spingere un corpo per una lunghezza di $3\ \text{km}$ lungo una direzione parallela alla forza stessa. Esprimi il risultato in joule, in notazione scientifica.

{% include sci.html prima="$L=$" coeff="1.2" exp="6" s="$1{,}2\times10^6\ \text J$" %}

{% include ex-sol.html %}
Convertendo $3\ \text{km}=3\,000\ \text m$, e poiché la forza è parallela allo spostamento,

$$L = F\cdot \Delta s = 4\times10^2\ \text N \times 3\,000\ \text m = 1{,}2\times10^6\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Chi compie più lavoro tra Alice, che spinge con una forza di $300\ \text N$ per $50\ \text m$, e Bob, che spinge con una forza di $150\ \text N$ per $99{,}9\ \text m$?

<div class="iex-choices" id="mcqEx7choices">
<button class="iex-choice-btn" data-v="alice">Alice</button>
<button class="iex-choice-btn" data-v="bob">Bob</button>
<button class="iex-choice-btn" data-v="uguali">Uguali</button>
</div>
<div class="iex-fb" id="mcqEx7fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx7choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx7fb');
  var correctV='alice';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx7choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Calcoliamo entrambi i lavori:

$$L_{Alice} = 300\ \text N \times 50\ \text m = 15\,000\ \text J,$$

$$L_{Bob} = 150\ \text N \times 99{,}9\ \text m = 14\,985\ \text J.$$

Anche se Bob spinge per una distanza quasi doppia, la forza di Alice è più che doppia rispetto a quella di Bob: **Alice** compie più lavoro (anche se di poco).
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Calcola il lavoro compiuto dall'attrito radente su di un corpo di massa $20\ \text{kg}$ che scivola per dieci metri su una superficie orizzontale con coefficiente di attrito $\mu = 0{,}3$ (usa $g\approx 9{,}8\ \text{m/s}^2$). Esprimi il risultato in joule. *(Indizio: ricorda che la formula dell'attrito corrisponde a $F_{\text{att}} = \mu F_\perp$.)*

{% include num.html id="numAttritoRadente" valore="-588" unit="J" %}

{% include ex-sol.html %}
Su una superficie orizzontale, la forza perpendicolare $F_\perp$ è semplicemente il peso del corpo, $F_\perp = mg$. Quindi la forza di attrito vale

$$F_{\text{att}} = \mu F_\perp = \mu m g = 0{,}3 \times 20\ \text{kg} \times 9{,}8\ \text{m/s}^2 = 58{,}8\ \text N.$$

L'attrito si oppone sempre al moto, quindi il lavoro è negativo: **non dimenticare il meno!**

$$L = -F_{\text{att}}\cdot \Delta s = -58{,}8\ \text N \times 10\ \text m = -588\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Calcola il lavoro esercitato dalla forza peso su di un corpo di massa $1\ \text{kg}$ che scivola orizzontalmente su una superficie per $50\ \text m$.

{% include ex-sol.html %}
La forza peso è sempre verticale, diretta verso il basso; lo spostamento, invece, è orizzontale. Forza e spostamento sono quindi **perpendicolari**, perciò il lavoro della forza peso è nullo:

$$L = 0\ \text J,$$

indipendentemente dalla massa del corpo o dalla distanza percorsa (che infatti non servono per rispondere).
{% include ex-sol-end.html %}


{% include ex.html diff=2 %}
In un'officina, per spostare una cassa di attrezzi lungo $15\ \text m$ di pavimento viene compiuto un lavoro di $450\ \text J$. Supponendo che la forza sia parallela allo spostamento, quanto vale la forza applicata?

{% include num.html id="numFE1" valore="30" unit="N" %}

{% include ex-sol.html %}
$$F = \frac{L}{\Delta s} = \frac{450\ \text J}{15\ \text m} = 30\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
In un magazzino, un carrello elevatore spinge una scatola con una forza di $50\ \text N$, parallela allo spostamento, compiendo un lavoro di $750\ \text J$. Di quanti metri si è spostata la scatola?

{% include num.html id="numSE1" valore="15" unit="m" %}

{% include ex-sol.html %}
$$\Delta s = \frac{L}{F} = \frac{750\ \text J}{50\ \text N} = 15\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Andrea cala un secchio pieno di acqua nel pozzo. Sapendo che la massa del secchio pieno corrisponde a $15\ \text{kg}$ e che è stato calato per $10\ \text m$ a velocità costante, trova il lavoro svolto da Andrea. Esprimi il risultato in joule, in notazione scientifica. (Usa $g\approx 10\ \text{m/s}^2$.)

{% include sci.html prima="$L=$" coeff="-1.5" exp="3" s="$-1{,}5\times10^3\ \text J$" %}

{% include ex-sol.html %}
Poiché il secchio scende a velocità costante, la forza che Andrea esercita con la corda (verso l'alto, per trattenerlo) deve avere lo stesso modulo del peso del secchio:

$$F_{Andrea} = mg = 15\ \text{kg}\times 10\ \text{m/s}^2 = 150\ \text N.$$

Questa forza è diretta verso l'**alto**, mentre lo spostamento del secchio è verso il **basso**: sono opposti, quindi il lavoro di Andrea è negativo.

$$L = -F_{Andrea}\cdot \Delta s = -150\ \text N \times 10\ \text m = -1\,500\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un rimorchiatore traina una nave lungo un canale per $800\ \text m$, compiendo un lavoro di $2{,}4\times10^6\ \text J$. Quale forza (costante, parallela allo spostamento) ha applicato? Esprimi il risultato in newton, in notazione scientifica.

{% include sci.html prima="$F=$" coeff="3" exp="3" s="$3\times10^3\ \text N$" %}

{% include ex-sol.html %}
$$F = \frac{L}{\Delta s} = \frac{2{,}4\times10^6\ \text J}{800\ \text m} = 3\times10^3\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un trattore applica una forza costante di $800\ \text N$, parallela allo spostamento, e compie un lavoro di $4\times10^5\ \text J$ per trainare un carico lungo un campo. Per quanti metri lo ha trainato?

{% include num.html id="numTrattore" valore="500" unit="m" %}

{% include ex-sol.html %}
$$\Delta s = \frac{L}{F} = \frac{4\times10^5\ \text J}{800\ \text N} = 5\times10^2\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Quando esegue un servizio, una tennista lancia la palla (di massa $60\ \text g$) verso l'alto, facendola salire di $1\ \text m$. Trova il lavoro compiuto dalla forza peso. Esprimi il risultato in joule. (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numPallina" valore="-0.6" unit="J" %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $60\ \text g = 0{,}06\ \text{kg}$. La forza peso vale

$$F_{peso} = mg = 0{,}06\ \text{kg}\times 10\ \text{m/s}^2 = 0{,}6\ \text N.$$

La palla sale, quindi lo spostamento è verso l'**alto**, mentre la forza peso è sempre diretta verso il **basso**: sono opposti, quindi il lavoro è negativo. **Attenzione al segno meno!**

$$L = -F_{peso}\cdot \Delta s = -0{,}6\ \text N \times 1\ \text m = -0{,}6\ \text J = -6\times10^{-1}\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
L'attrito frena una slitta che scivola in linea retta per $25\ \text m$, compiendo su di essa un lavoro di $-125\ \text J$. Quanto vale il **modulo** della forza di attrito?

{% include num.html id="numFE3" valore="5" unit="N" %}

{% include ex-sol.html %}
L'attrito si oppone al moto, quindi il lavoro è negativo: $L=-F\cdot\Delta s$. Il modulo della forza, però, non può mai essere negativo:

$$F = \frac{|L|}{\Delta s} = \frac{125\ \text J}{25\ \text m} = 5\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
L'attrito, con una forza costante di $30\ \text N$, compie un lavoro di $-180\ \text J$ su un oggetto che scivola in linea retta. Per quanti metri si è spostato l'oggetto?

{% include num.html id="numSE3" valore="6" unit="m" %}

{% include ex-sol.html %}
Anche lo spostamento $\Delta s$ non può mai essere negativo, quindi usiamo il valore assoluto del lavoro:

$$\Delta s = \frac{|L|}{F} = \frac{180\ \text J}{30\ \text N} = 6\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una gatta di massa $4\ \text{kg}$ trasporta uno dei suoi cuccioli, di massa $0{,}5\ \text{kg}$, per la collottola. Nel primo tratto accelera con un'accelerazione di $0{,}5\ \text{m/s}^2$, per $4\ \text m$. Poi procede con velocità costante per $6\ \text m$. Qual è il lavoro totale? Esprimi il risultato in joule.

{% include figura.html id="mamma-gatta"
   src="/corsi/immagini/mamma-gatta.jpeg"
   didascalia="Una gatta trasporta il proprio cucciolo per la collottola."
   larghezza="320px" %}

{% include num.html id="numGattaCucciolo" valore="1" unit="J" %}

{% include ex-sol.html %}
La massa della gatta ($4\ \text{kg}$) non serve: quello che conta è la forza che la gatta esercita **sul cucciolo** per trasportarlo, che dipende solo dalla massa del cucciolo.

**Primo tratto (accelerato).** Per il secondo principio della dinamica, la forza netta sul cucciolo è

$$F_1 = m_{cucciolo}\cdot a = 0{,}5\ \text{kg}\times 0{,}5\ \text{m/s}^2 = 0{,}25\ \text N,$$

che compie un lavoro

$$L_1 = F_1\cdot \Delta s_1 = 0{,}25\ \text N \times 4\ \text m = 1\ \text J.$$

**Secondo tratto (velocità costante).** Se la velocità è costante, l'accelerazione è nulla: per il secondo principio della dinamica, anche la forza netta necessaria è nulla, quindi

$$L_2 = 0\ \text J.$$

**Totale.**

$$L = L_1+L_2 = 1\ \text J + 0\ \text J = 1\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un facchino trascina un baule per $5\ \text{km}$ lungo un lunghissimo corridoio, compiendo un lavoro di $30\,000\ \text J$. Con quale forza (costante, parallela allo spostamento) lo ha trascinato?

{% include num.html id="numFE4" valore="6" unit="N" %}

Se il facchino ha impiegato $10$ minuti a percorrere l'intero corridoio, quale potenza media ha sviluppato?

{% include num.html id="numFE4pot" valore="50" unit="W" %}

{% include ex-sol.html %}
Convertendo $5\ \text{km}=5\,000\ \text m$,

$$F = \frac{L}{\Delta s} = \frac{30\,000\ \text J}{5\,000\ \text m} = 6\ \text N.$$

Convertendo $10$ minuti $=600\ \text s$,

$$P = \frac{L}{\Delta t} = \frac{30\,000\ \text J}{600\ \text s} = 50\ \text W.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una forza costante di $2\,000\ \text N$, parallela allo spostamento, compie un lavoro di $5\times10^6\ \text J$ spingendo un'automobile lungo un rettilineo. Per quanti metri si è spostata l'automobile? Esprimi il risultato in metri, in notazione scientifica.

{% include sci.html prima="$\Delta s=$" coeff="2.5" exp="3" s="$2{,}5\times10^3\ \text m$" %}

Se l'automobile ha percorso quello spazio, a velocità costante, in $50\ \text s$, quale potenza ha sviluppato la forza? Esprimi il risultato in watt, in notazione scientifica.

{% include sci.html prima="$P=$" coeff="1" exp="5" s="$1\times10^5\ \text W$" %}

{% include ex-sol.html %}
$$\Delta s = \frac{L}{F} = \frac{5\times10^6\ \text J}{2\,000\ \text N} = 2{,}5\times10^3\ \text m.$$

La velocità (costante) dell'automobile è

$$v = \frac{\Delta s}{\Delta t} = \frac{2{,}5\times10^3\ \text m}{50\ \text s} = 50\ \text{m/s},$$

quindi la potenza sviluppata è

$$P = F\cdot v = 2\,000\ \text N \times 50\ \text{m/s} = 1\times10^5\ \text W.$$
{% include ex-sol-end.html %}

### Esercizi sulla potenza

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="Un montacarichi che solleva un peso in pochi secondi sviluppa, a parità di lavoro compiuto, una potenza maggiore di un operaio che solleva lo stesso peso in alcuni minuti." ok=true s="Sì: a parità di lavoro, minore è il tempo impiegato, maggiore è la potenza." %}
{% include tf.html q="A parità di potenza sviluppata, una macchina che lavora per più tempo compie meno lavoro." ok=false s="No: a parità di potenza, $L=P\cdot\Delta t$ è direttamente proporzionale al tempo, quindi lavorando più a lungo si compie più lavoro, non meno." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un frullatore ha una potenza di $300\ \text W$ e viene utilizzato per $2$ minuti. Quale lavoro ha compiuto in questo intervallo di tempo?

{% include num.html id="numPotRiep1" valore="36000" unit="J" %}

{% include ex-sol.html %}
Convertendo $2$ minuti $=120\ \text s$,

$$L = P\cdot \Delta t = 300\ \text W \times 120\ \text s = 36\,000\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un rimorchiatore traina una nave esercitando una forza costante di $5\times10^4\ \text N$, parallela al moto, mentre la nave avanza a velocità costante di $2\ \text{m/s}$. Quale potenza sta sviluppando il rimorchiatore?

{% include num.html id="numPotRiep2" valore="100000" unit="W" %}

{% include ex-sol.html %}
$$P = F\cdot v = 5\times10^4\ \text N \times 2\ \text{m/s} = 1\times10^5\ \text W = 100\,000\ \text W.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Il kilowattora (kWh) è un'unità di misura che compare spesso sulle bollette e sugli elettrodomestici, nonostante il suo nome contenga l'unità di potenza. A cosa corrisponde, nel Sistema Internazionale?

<div class="iex-choices" id="mcqKwhChoices">
<button class="iex-choice-btn" data-v="a">$3{,}6\times10^3\ \text J$</button>
<button class="iex-choice-btn" data-v="b">$3{,}6\times10^6\ \text J$</button>
<button class="iex-choice-btn" data-v="c">$1\,000\ \text J$</button>
<button class="iex-choice-btn" data-v="d">$3{,}6\times10^9\ \text J$</button>
</div>
<div class="iex-fb" id="mcqKwhChoicesfb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqKwhChoices .iex-choice-btn');
  var fb=document.getElementById('mcqKwhChoicesfb');
  var correctV='b';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqKwhChoices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Un kilowattora è il lavoro (cioè l'energia) compiuto da una potenza di $1\ \text{kW}=1\,000\ \text W$ mantenuta per un'ora, cioè per $3\,600\ \text s$:

$$1\ \text{kWh} = P\cdot \Delta t = 1\,000\ \text W \times 3\,600\ \text s = 3{,}6\times10^6\ \text J.$$
{% include ex-sol-end.html %}

### Esercizi sul teorema dell'energia cinetica


{% include ex.html diff=1 %}
In quale di queste situazioni l'energia cinetica di un ciclista **aumenta**?

<div class="iex-choices" id="mcqKE1choices">
<button class="iex-choice-btn" data-v="a">Il ciclista frena</button>
<button class="iex-choice-btn" data-v="b">Il ciclista pedala accelerando</button>
<button class="iex-choice-btn" data-v="c">Il ciclista procede a velocità costante su un rettilineo</button>
<button class="iex-choice-btn" data-v="d">Il ciclista sale in salita mantenendo la velocità costante</button>
</div>
<div class="iex-fb" id="mcqKE1fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqKE1choices .iex-choice-btn');
  var fb=document.getElementById('mcqKE1fb');
  var correctV='b';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqKE1choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
L'energia cinetica cambia solo se cambia la velocità. Pedalando e accelerando, il ciclista aumenta la sua velocità, quindi la sua energia cinetica aumenta. Negli altri tre casi la velocità resta costante (o diminuisce, se frena): l'energia cinetica non aumenta.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Il lavoro totale compiuto su un corpo è negativo. Cosa possiamo concludere sulla sua energia cinetica?

<div class="iex-choices" id="mcqKE2choices">
<button class="iex-choice-btn" data-v="a">È aumentata</button>
<button class="iex-choice-btn" data-v="b">È diminuita</button>
<button class="iex-choice-btn" data-v="c">È rimasta invariata</button>
<button class="iex-choice-btn" data-v="d">È diventata negativa</button>
</div>
<div class="iex-fb" id="mcqKE2fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqKE2choices .iex-choice-btn');
  var fb=document.getElementById('mcqKE2fb');
  var correctV='b';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqKE2choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Per il teorema dell'energia cinetica, $L=\Delta K$. Se $L<0$, allora $\Delta K<0$: l'energia cinetica **diminuisce**. Attenzione: l'energia cinetica $K=\frac12 mv^2$ non può mai diventare negativa (è sempre $\ge 0$), può solo avvicinarsi a zero.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un pallone da calcio di massa $450\ \text g$ viaggia a una velocità di $20\ \text{m/s}$. Quanta energia cinetica possiede?

{% include num.html id="numKE3" valore="90" unit="J" %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $450\ \text g=0{,}45\ \text{kg}$.

$$K = \frac12 mv^2 = \frac12 \times 0{,}45\ \text{kg}\times (20\ \text{m/s})^2 = 90\ \text J.$$
{% include ex-sol-end.html %}


{% include ex.html diff=2 %}
Un'automobile di massa $1\,200\ \text{kg}$ viaggia a una velocità di $72\ \text{km/h}$. Quanta energia cinetica possiede? Esprimi il risultato in joule, in notazione scientifica.

{% include sci.html prima="$K=$" coeff="2.4" exp="5" s="$2{,}4\times10^5\ \text J$" %}

{% include ex-sol.html %}
Convertendo la velocità in $\text{m/s}$:

$$72\ \text{km/h} = \frac{72}{3{,}6}\ \text{m/s} = 20\ \text{m/s}.$$

Quindi

$$K = \frac12 mv^2 = \frac12 \times 1\,200\ \text{kg}\times (20\ \text{m/s})^2 = 2{,}4\times10^5\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un cane insegue una pallina correndo a $8\ \text{m/s}$ (quasi $29\ \text{km/h}$!), con un'energia cinetica di $256\ \text J$. Qual è la sua massa?

{% include num.html id="numKE5" valore="8" unit="kg" %}

{% include ex-sol.html %}
Isoliamo $m$ nella formula $K=\frac12 mv^2$:

$$m = \frac{2K}{v^2} = \frac{2\times256\ \text J}{(8\ \text{m/s})^2} = \frac{512}{64} = 8\ \text{kg}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una palla da bowling di massa $5\ \text{kg}$ rotola lungo la corsia con un'energia cinetica di $90\ \text J$. A quale velocità si sta muovendo?

{% include num.html id="numKE6" valore="6" unit="m/s" %}

{% include ex-sol.html %}
Isoliamo $v$ nella formula $K=\frac12 mv^2$ (attenzione: qui serve una radice quadrata!):

$$v = \sqrt{\frac{2K}{m}} = \sqrt{\frac{2\times90\ \text J}{5\ \text{kg}}} = \sqrt{36} = 6\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un proiettile di massa $10\ \text g$ possiede un'energia cinetica di $1\,250\ \text J$. A quale velocità viaggia? Esprimi il risultato in km/h.

{% include num.html id="numKE7" valore="1800" unit="km/h" %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $10\ \text g=0{,}01\ \text{kg}$. Isoliamo $v$:

$$v = \sqrt{\frac{2K}{m}} = \sqrt{\frac{2\times1\,250\ \text J}{0{,}01\ \text{kg}}} = \sqrt{250\,000} = 500\ \text{m/s}.$$

Convertendo in $\text{km/h}$:

$$v = 500\ \text{m/s}\times 3{,}6 = 1\,800\ \text{km/h}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un'automobile di massa $1\,000\ \text{kg}$ accelera da $10\ \text{m/s}$ a $30\ \text{m/s}$. Quanto lavoro (totale) è stato compiuto sull'automobile? Esprimi il risultato in joule, in notazione scientifica.

{% include sci.html prima="$L=$" coeff="4" exp="5" s="$4\times10^5\ \text J$" %}

{% include ex-sol.html %}
Per il teorema dell'energia cinetica, $L=\Delta K = K_f - K_i$:

$$L = \frac12 m v_f^2 - \frac12 m v_i^2 = \frac12\times1\,000\ \text{kg}\times\left[(30\ \text{m/s})^2 - (10\ \text{m/s})^2\right] = \frac12\times1\,000\times800 = 4\times10^5\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Marco lancia una palla da fermo, di massa $200\ \text g$, facendole raggiungere una velocità di $15\ \text{m/s}$. Quanto lavoro ha compiuto Marco sulla palla?

{% include num.html id="numKE9" valore="22.5" unit="J" %}

{% include ex-sol.html %}
La palla parte da ferma, quindi $v_i=0$ e $K_i=0$. Convertendo la massa, $200\ \text g=0{,}2\ \text{kg}$. Per il teorema dell'energia cinetica,

$$L = \Delta K = K_f - K_i = \frac12 m v_f^2 - 0 = \frac12\times0{,}2\ \text{kg}\times(15\ \text{m/s})^2 = 22{,}5\ \text J.$$
{% include ex-sol-end.html %}

### Esercizi sull'energia potenziale


{% include ex.html diff=1 %}
Un libro di massa $2\ \text{kg}$ viene posto su uno scaffale a $5\ \text m$ di altezza. Quanta energia potenziale gravitazionale possiede rispetto al pavimento? (Usa $g\approx 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numB1" valore="98" unit="J" %}

{% include ex-sol.html %}
$$U_g = mgh = 2\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 5\ \text m = 98\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Una mela di massa $500\ \text g$ pende da un ramo a $4\ \text m$ di altezza dal suolo. Quanta energia potenziale gravitazionale possiede? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numB2" valore="20" unit="J" %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $500\ \text g=0{,}5\ \text{kg}$.

$$U_g = mgh = 0{,}5\ \text{kg}\times 10\ \text{m/s}^2\times 4\ \text m = 20\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Durante un trasloco, uno scatolone di libri di massa $10\ \text{kg}$ viene sistemato su uno scaffale a $1{,}5\ \text m$ di altezza. Quanta energia potenziale gravitazionale possiede? (Usa $g\approx 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numB3" valore="147" unit="J" %}

{% include ex-sol.html %}
$$U_g = mgh = 10\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 1{,}5\ \text m = 147\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un telefono di massa $200\ \text g$ cade da un tavolo alto $50\ \text{cm}$. Quanta energia potenziale gravitazionale possiede, rispetto al pavimento, appena prima di cadere? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numB4" valore="1" unit="J" %}

{% include ex-sol.html %}
Convertendo, $200\ \text g=0{,}2\ \text{kg}$ e $50\ \text{cm}=0{,}5\ \text m$.

$$U_g = mgh = 0{,}2\ \text{kg}\times 10\ \text{m/s}^2\times 0{,}5\ \text m = 1\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
I compagni di Ulisse devono sollevare l'albero orizzontale della vela, di massa $250\ \text{kg}$, fino a un'altezza di $4\ \text m$. (Usa $g\approx 9{,}8\ \text{m/s}^2$.)

Qual è il lavoro compiuto dalla forza gravitazionale? Ed il lavoro compiuto dai compagni di Ulisse?

{% include sci.html prima="$L_{\text{gravità}}=$" coeff="-9.8" exp="3" s="$-9{,}8\times10^3\ \text J$" %}

{% include sci.html prima="$L_{\text{compagni}}=$" coeff="9.8" exp="3" s="$9{,}8\times10^3\ \text J$" %}

{% include ex-sol.html %}
Il lavoro della forza gravitazionale è negativo, poiché la forza (verso il basso) è opposta allo spostamento (verso l'alto):

$$L_{\text{gravità}} = -mgh = -250\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 4\ \text m = -9{,}8\times10^3\ \text J.$$

L'albero parte da fermo e arriva fermo (velocità nulla sia all'inizio che alla fine): per il teorema dell'energia cinetica, $\Delta K=0$, quindi il lavoro **totale** deve essere nullo. Il lavoro dei compagni deve perciò compensare esattamente quello della gravità:

$$L_{\text{compagni}} = -L_{\text{gravità}} = 9{,}8\times10^3\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Secondo la leggenda, il drammaturgo greco Eschilo morì perché era così calvo che un'aquila scambiò la sua testa per una roccia, e vi lasciò cadere sopra una tartaruga per romperne il guscio e mangiarla. Se l'aquila volava a $20\ \text m$ di altezza, a quale velocità la tartaruga ha colpito la testa di Eschilo? (Usa $g\approx 10\ \text{m/s}^2$ e trascura l'attrito dell'aria.)

{% include num.html id="numEsch" valore="20" unit="m/s" %}

{% include ex-sol.html %}
È esattamente la situazione di un corpo che cade da fermo da un'altezza $h$: tutta l'energia potenziale si trasforma in energia cinetica, quindi vale la formula $v=\sqrt{2gh}$ già vista:

$$v = \sqrt{2gh} = \sqrt{2\times 10\ \text{m/s}^2\times 20\ \text m} = \sqrt{400} = 20\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un corpo viene sparato verticalmente verso l'alto con una velocità iniziale di $30\ \text{m/s}$. Che altezza massima raggiunge, trascurando l'attrito dell'aria? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numSparo" valore="45" unit="m" %}

{% include ex-sol.html %}
È la situazione opposta di un corpo che cade: qui tutta l'energia cinetica iniziale si trasforma in energia potenziale, fino a che il corpo si ferma per un istante nel punto più alto. Vale quindi ancora $\frac12 mv^2 = mgh$, cioè $v=\sqrt{2gh}$, da cui isoliamo $h$:

$$h = \frac{v^2}{2g} = \frac{(30\ \text{m/s})^2}{2\times 10\ \text{m/s}^2} = \frac{900}{20} = 45\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Su un pianeta appena scoperto, un oggetto lasciato cadere da un'altezza di $5\ \text m$ tocca il suolo con una velocità di $6\ \text{m/s}$. Qual è l'accelerazione di gravità su quel pianeta?

{% include num.html id="numPianeta" valore="3.6" unit="m/s²" %}

{% include ex-sol.html %}
Isoliamo $g$ dalla formula $v=\sqrt{2gh}$:

$$g = \frac{v^2}{2h} = \frac{(6\ \text{m/s})^2}{2\times 5\ \text m} = \frac{36}{10} = 3{,}6\ \text{m/s}^2.$$

(Non lontano dal valore reale di Marte, $g\approx 3{,}7\ \text{m/s}^2$!)
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un drone di massa $2\ \text{kg}$ sta riprendendo un video a $3\ \text m$ di altezza. Il pilota lo fa salire ulteriormente, compiendo su di esso un lavoro di $40\ \text J$ (che si traduce in un aumento della sua energia potenziale gravitazionale). A quale altezza si trova adesso? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numHf" valore="5" unit="m" %}

{% include ex-sol.html %}
L'aumento di energia potenziale è $\Delta U_g = mg(h_f-h_i)$. Isoliamo $h_f$:

$$h_f = h_i + \frac{\Delta U_g}{mg} = 3\ \text m + \frac{40\ \text J}{2\ \text{kg}\times 10\ \text{m/s}^2} = 3\ \text m + 2\ \text m = 5\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
A Natale, Babbo Natale cala lungo un camino un sacco di regali di massa $5\ \text{kg}$, legato a una corda. Su di esso viene compiuto un lavoro di $-150\ \text J$, che diminuisce la sua energia potenziale gravitazionale: alla fine si trova a un'altezza di $2\ \text m$ dal camino. Qual era la sua altezza iniziale? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numHi" valore="5" unit="m" %}

{% include ex-sol.html %}
L'aumento di energia potenziale è $\Delta U_g = mg(h_f-h_i)$. Isoliamo $h_i$:

$$h_i = h_f - \frac{\Delta U_g}{mg} = 2\ \text m - \frac{-150\ \text J}{5\ \text{kg}\times 10\ \text{m/s}^2} = 2\ \text m + 3\ \text m = 5\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un pescatore issa sulla banchina una cassa di pesce, sollevandola di $4\ \text m$: la sua energia potenziale gravitazionale aumenta di $800\ \text J$. Qual è il peso della cassa?

{% include num.html id="numForza" valore="200" unit="N" %}

{% include ex-sol.html %}
Il lavoro compiuto contro la gravità (che si trasforma in energia potenziale) è $L=F\cdot\Delta s$, dove qui $F$ è proprio il peso della cassa e $\Delta s$ è l'altezza $h$. Isoliamo $F$:

$$F = \frac{\Delta U_g}{h} = \frac{800\ \text J}{4\ \text m} = 200\ \text N.$$
{% include ex-sol-end.html %}

### Esercizi sull'energia meccanica e sul calore

Prima di iniziare, fissiamo le idee su cosa sia un sistema isolato.

{% include frayer.html id="frayer-sistema-isolato" termine="Sistema isolato" %}

{% include ex.html diff=1 %}
Marco gioca con uno yo-yo di massa $60\ \text g$. Lo yo-yo scende, srotolandosi, da fermo per un tratto di $0{,}9\ \text m$: trascurando l'attrito, quanta energia cinetica ha acquistato? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numYoyo" valore="0.54" unit="J" %}

{% include ex-sol.html %}
Convertendo la massa, $60\ \text g = 0{,}06\ \text{kg}$. In assenza di attrito, l'energia meccanica si conserva: tutta l'energia potenziale persa si ritrova come energia cinetica guadagnata,

$$K = U_i - U_f = mgh = 0{,}06\ \text{kg}\times 10\ \text{m/s}^2\times 0{,}9\ \text m = 0{,}54\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Una bambina su un'altalena viene tirata indietro finché non si trova a $0{,}45\ \text m$ di altezza rispetto al punto più basso, poi lasciata andare da ferma. Trascurando l'attrito, con che velocità passa per il punto più basso? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numAltalena1" valore="3" unit="m/s" %}

{% include ex-sol.html %}
È la stessa situazione di un corpo lasciato cadere da un'altezza $h$: tutta l'energia potenziale iniziale si trasforma in energia cinetica, quindi $mgh=\frac12 mv^2$, da cui $v=\sqrt{2gh}$:

$$v = \sqrt{2gh} = \sqrt{2\times 10\ \text{m/s}^2\times 0{,}45\ \text m} = \sqrt 9 = 3\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un'altra bambina, su un'altra altalena (trascura sempre l'attrito, usa $g\approx 10\ \text{m/s}^2$), passa per il punto più basso con una velocità di $5\ \text{m/s}$. Con che velocità passa per un punto che si trova $1{,}05\ \text m$ più in alto rispetto al punto più basso?

{% include num.html id="numAltalena2" valore="2" unit="m/s" %}

{% include ex-sol.html %}
L'energia meccanica si conserva, quindi è la stessa nei due punti:

$$\frac12 m v_{\text{basso}}^2 = \frac12 m v^2 + mgh.$$

La massa si semplifica; isoliamo $v$:

$$v = \sqrt{v_{\text{basso}}^2 - 2gh} = \sqrt{(5\ \text{m/s})^2 - 2\times 10\ \text{m/s}^2\times 1{,}05\ \text m} = \sqrt{25-21} = \sqrt 4 = 2\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Il pendolo di un vecchio orologio a muro, di massa $0{,}5\ \text{kg}$, viene spostato lateralmente fino a un'altezza di $0{,}8\ \text m$ rispetto al punto più basso della sua oscillazione, e lì lasciato fermo (usa $g\approx 10\ \text{m/s}^2$). Prendendo come riferimento il punto più basso, qual è la sua energia meccanica in quell'istante?

{% include num.html id="numPendoloE" valore="4" unit="J" %}

{% include ex-sol.html %}
Il pendolo è fermo, quindi tutta la sua energia meccanica è potenziale ($K=0$):

$$E = K+U = 0 + mgh = 0{,}5\ \text{kg}\times 10\ \text{m/s}^2\times 0{,}8\ \text m = 4\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Uno skater in uno skatepark parte da un punto della rampa alto $3\ \text m$, già in movimento con una velocità di $3\ \text{m/s}$, e scende (trascurando l'attrito, usa $g\approx 10\ \text{m/s}^2$) fino a un punto alto $1\ \text m$. Con che velocità passa da quel punto?

{% include num.html id="numSkater" valore="7" unit="m/s" %}

{% include ex-sol.html %}
L'energia meccanica si conserva fra i due punti:

$$\frac12 m v_1^2 + mgh_1 = \frac12 m v_2^2 + mgh_2.$$

La massa si semplifica; isoliamo $v_2$:

$$v_2 = \sqrt{v_1^2 + 2g(h_1-h_2)} = \sqrt{(3\ \text{m/s})^2 + 2\times 10\ \text{m/s}^2\times(3\ \text m - 1\ \text m)} = \sqrt{9+40} = \sqrt{49} = 7\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un pendolo di un orologio a muro, di massa $0{,}5\ \text{kg}$, ha un'energia meccanica di $4\ \text J$ (rispetto al punto più basso della sua oscillazione). Con che velocità passa per quel punto più basso?

{% include num.html id="numPendoloV" valore="4" unit="m/s" %}

{% include ex-sol.html %}
Nel punto più basso tutta l'energia meccanica è cinetica ($U=0$, prendendolo come riferimento):

$$E = K = \frac12 mv^2 \quad\Rightarrow\quad v = \sqrt{\frac{2E}{m}} = \sqrt{\frac{2\times 4\ \text J}{0{,}5\ \text{kg}}} = \sqrt{16} = 4\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
In un bowling, una palla di massa $6\ \text{kg}$ cade da uno scaffale alto $1{,}2\ \text m$ e rimbalza sul pavimento fino a raggiungere di nuovo un'altezza massima di soli $0{,}3\ \text m$. Quanta energia si è convertita in calore durante l'urto con il pavimento? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numBowlingCalore" valore="54" unit="J" %}

{% include ex-sol.html %}
Sia appena prima di cadere sia nel punto più alto del rimbalzo la palla è ferma, quindi in entrambi i casi la sua energia meccanica è tutta potenziale. Se l'energia meccanica si fosse conservata, la palla sarebbe rimbalzata fino alla stessa altezza di partenza: il fatto che risalga solo fino a $0{,}3\ \text m$ significa che l'energia mancante,

$$\Delta E = U_i - U_f = mg(h_i-h_f) = 6\ \text{kg}\times 10\ \text{m/s}^2\times(1{,}2\ \text m - 0{,}3\ \text m) = 6\ \text{kg}\times 10\ \text{m/s}^2\times 0{,}9\ \text m = 54\ \text J,$$

si è convertita in calore nell'urto con il pavimento.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Uno slittino di massa $4\ \text{kg}$ scivola lungo una discesa innevata, partendo da fermo da un'altezza di $5\ \text m$. A causa dell'attrito con la neve, in fondo alla discesa la sua velocità è di soli $8\ \text{m/s}$ (minore di quella che avrebbe senza attrito). Quanta energia si è convertita in calore lungo la discesa? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numSlittinoCalore" valore="72" unit="J" %}

{% include ex-sol.html %}
Se non ci fosse stato attrito, l'energia meccanica si sarebbe conservata e tutta l'energia potenziale iniziale si sarebbe trasformata in energia cinetica finale. L'energia effettivamente dissipata sotto forma di calore è allora la differenza fra l'energia potenziale iniziale e l'energia cinetica finale realmente osservata:

$$\Delta E = U_i - K_f = mgh - \frac12 mv^2 = 4\ \text{kg}\times 10\ \text{m/s}^2\times 5\ \text m - \frac12\times 4\ \text{kg}\times(8\ \text{m/s})^2 = 200\ \text J - 128\ \text J = 72\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Torniamo all'esperimento (immaginario!) del "pollo cotto a schiaffi". Supponi che ogni schiaffo comprima il pollo di $2{,}5\ \text{cm}$ esercitando una forza di $40\ \text N$, e che tutto il lavoro compiuto si dissipi istantaneamente in calore. Sapendo che per cuocere completamente il pollo servono circa $2\times10^5\ \text J$ di calore, quanti schiaffi sarebbero necessari?

{% include sci.html prima="Numero di schiaffi $=$" coeff="2" exp="5" s="2 × 10⁵ schiaffi" %}

{% include ex-sol.html %}
Il lavoro — e quindi il calore — prodotto da un singolo schiaffo è

$$L_{\text{schiaffo}} = F\cdot \Delta s = 40\ \text N \times 0{,}025\ \text m = 1\ \text J.$$

Per ottenere i $2\times10^5\ \text J$ necessari a cuocere il pollo servono quindi

$$n = \frac{2\times10^5\ \text J}{1\ \text J} = 2\times10^5 \text{ schiaffi},$$

cioè 200 000 schiaffi — un numero completamente assurdo, che spiega bene perché non è davvero un modo pratico per cucinare un pollo!
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
L'immagine seguente è una termoscopia (una foto scattata con una telecamera a infrarossi) di una moto appena utilizzata: le zone arancioni sono quelle a temperatura più alta, quelle blu le più fredde.

{% include figura.html id="moto-termoscopia"
   src="/corsi/immagini/moto_termoscopia.png"
   didascalia="Termoscopia di una moto appena utilizzata: le zone arancioni sono le più calde."
   larghezza="420px" %}

Osserva quali parti della moto sono le più calde, e quali restano invece fredde (ad esempio il telaio, il serbatoio, il cerchione delle ruote). Sapendo che il calore prodotto in un corpo in movimento è energia meccanica dissipata dall'attrito, spiega perché sono proprio quelle parti a scaldarsi di più.

{% include fill-def.html id="fd-moto-termoscopia" prompt="Perché, secondo te, proprio quelle parti della moto sono le più calde?" %}

{% include ex-sol.html %}
Le zone più calde sono il motore e il mozzo delle ruote (la parte centrale, vicino all'asse): sono proprio i punti dove due superfici restano a stretto contatto e scorrono l'una sull'altra ad alta velocità — i pistoni dentro i cilindri e gli ingranaggi del cambio nel motore, i cuscinetti (e, quando si frena, le pastiglie sul disco) nel mozzo delle ruote. È lì che l'attrito è più intenso e, come abbiamo visto, più l'attrito è intenso più lavoro viene dissipato in calore a parità di spostamento.

Il telaio, il serbatoio e il cerchione delle ruote, invece, si muovono in blocco, senza superfici interne che strisciano l'una sull'altra: l'attrito lì è trascurabile, e infatti restano molto più freddi.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Prova a scrivere con parole tue, senza guardare indietro nel capitolo, cosa significa che l'energia meccanica di un sistema "si conserva".

{% include def-compare.html id="dc-conservazione" testo="L'energia meccanica di un sistema si conserva quando…" label="Confronta con la definizione nel testo" %}
{% include ex-end.html %}
