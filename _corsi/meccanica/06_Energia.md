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

{% include box-obiettivi.html %}
Scopri che cos'è l'energia attraverso la sua proprietà più importante: non si crea e non si distrugge, si trasforma soltanto. Impari a calcolare il lavoro di una forza e la potenza, e vedi in quali forme il lavoro può trasformarsi: energia cinetica ed energia potenziale gravitazionale. Le metti insieme nell'energia meccanica e scopri quando si conserva, nei sistemi isolati, e quando invece cambia, nei sistemi non isolati, fino all'energia che l'attrito trasforma in calore.
{% include box-end.html %}


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

{% capture _ua_lavoro %}{"lhs":{"s":"L"},
 "rhs":[{"s":"F","u":"N"},{"o":"·"},{"s":"Δs","u":"m"}]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-lavoro" dati=_ua_lavoro %}

Quindi:

$$[L]=[F]\cdot[\Delta s]=\text N\cdot\text m.$$

Questa unità di misura si chiama <definizione>joule</definizione> (simbolo $\text{J}$). Ricordando che il newton è definito come $\text{N} = \text{kg}\cdot\text{m}/\text{s}^2$, si ottiene

$$
\text{J} = \text{N}\cdot\text{m} = \text{kg}\cdot\frac{\text{m}}{\text{s}^2}\cdot\text{m} = \text{kg}\cdot\frac{\text{m}^2}{\text{s}^2}.
$$

{% include unisci.html %}
{% include esercizi/esercizio-lavoro.html %}

{% include esercizi/invert-lavoro.html %}
{% include unisci-end.html %}

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

{% capture _ua_potenza %}{"lhs":{"s":"P"},
 "rhs":[{"f":[[{"s":"L","u":"J"}],[{"s":"Δt","u":"s"}]]}]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-potenza" dati=_ua_potenza %}

Quindi:

$$[P]=\frac{[L]}{[\Delta t]}=\frac{\text J}{\text s}.$$

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

Prova tu ora a invertire sia questa formula sia quella vista in precedenza, $P=\dfrac{L}{\Delta t}$, isolando ogni volta le altre grandezze. Poi prova con qualche esercizio e un quiz vero/falso sulla potenza.

{% include unisci.html %}
{% include esercizi/invert-potenza.html %}

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

{% include box-ex.html testo="Verifica Subito!" %}
{% include calc-margin.html id="calcTrenoMumbai" %}
Il 28 luglio 2019, a Mumbai, un treno suburbano viaggiava a circa $80\ \text{km/h}$ quando il macchinista, Narendra Talekar, vide un ragazzo sdraiato sui binari. Frenò d'emergenza e il treno si fermò a pochi metri dal ragazzo, che fu salvato.

Gli altri dati non sono nella notizia, ma sono verosimili: il macchinista comincia a frenare quando il ragazzo è a $270\ \text m$ dal treno, e il treno si ferma a $6\ \text m$ da lui; la forza frenante vale $5{,}0\times10^{5}\ \text N$ e la frenata dura $24\ \text s$.
<div style="clear:both"></div>

{% include scorri.html %}
{% include scorri-slide.html titolo="1. Lo spostamento" %}
Di quanti metri si è spostato il treno mentre frenava?

{% include num.html id="numTrenoDs" valore="264" unit="m" %}
{% include spoiler.html testo="Mostra la soluzione" %}
All'inizio il ragazzo è a $270\ \text m$, alla fine a $6\ \text m$: il treno si è avvicinato di $\Delta s = 270\ \text m - 6\ \text m = 264\ \text m$.
{% include spoiler-end.html %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="2. Il lavoro della forza frenante" %}
Quanto vale il lavoro compiuto sul treno dalla forza frenante, durante tutta la frenata? Attento al segno.

{% include fill-multi.html testo="$L =$ [-1,32|−1,32|-1.32|−1.32] $\times10^{8}$ J" s="La forza frenante ha verso opposto allo spostamento, quindi il lavoro è negativo: $L = -F\cdot\Delta s = -5{,}0\times10^{5}\ \text N\cdot 264\ \text m = -1{,}32\times10^{8}\ \text J$. È l'energia cinetica che i freni tolgono al treno, trasformandola in calore." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="3. La potenza dei freni" %}
Con quale potenza i freni tolgono energia al treno? (Usa il valore assoluto del lavoro.)

{% include fill-multi.html testo="$P =$ [5,5|5.5] $\times10^{6}$ W" s="$P = \dfrac{\lvert L\rvert}{\Delta t} = \dfrac{1{,}32\times10^{8}\ \text J}{24\ \text s} = 5{,}5\times10^{6}\ \text W$: cinque megawatt e mezzo, la potenza di qualche migliaio di asciugacapelli accesi insieme." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}
{% include unisci-end.html %}

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
   src="/corsi/gif/bimbo_bici.mp4"
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

Dato che $L=\Delta K$, l'energia cinetica si misura come il lavoro: <u>in joule</u>.

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
Il lavoro totale compiuto su un carrello è di $+50\ \text J$. Che cosa succede alla sua energia cinetica?

{% capture _oTeo1 %}[{"v":"a","t":"Aumenta di $50\\ \\text J$"},{"v":"b","t":"Diminuisce di $50\\ \\text J$"},{"v":"c","t":"Diventa $50\\ \\text J$, qualunque fosse prima"},{"v":"d","t":"Non cambia"}]{% endcapture %}
{% include mcq.html id="mcq-teo-aumenta" opts=_oTeo1 ok="a" s="$\Delta K=L=+50\ \text J$: il lavoro ci dice di quanto cambia l'energia cinetica, non quanto vale alla fine." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Un carrello ha un'energia cinetica di $30\ \text J$. Viene compiuto su di esso un lavoro totale di $50\ \text J$. Quanto vale ora la sua energia cinetica?

{% include num.html id="numTeoKf" valore="80" unit="J" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Un pallone ha un'energia cinetica di $200\ \text J$. Rotolando sul prato, l'attrito compie su di esso un lavoro di $-150\ \text J$. Quanto vale ora la sua energia cinetica?

{% include num.html id="numTeoFrena" valore="50" unit="J" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
L'energia cinetica di una pattinatrice passa da $400\ \text J$ a $100\ \text J$. Quanto vale il lavoro totale compiuto su di lei? Attento al segno.

{% include num.html id="numTeoL" valore="-300" unit="J" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Una slitta è ferma sul ghiaccio. La tiri con una forza di $20\ \text N$, parallela allo spostamento, per $5\ \text m$. Trascura l'attrito. Quanto vale alla fine la sua energia cinetica?

{% include num.html id="numTeoSlitta" valore="100" unit="J" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Un'automobile viaggia a velocità costante: il motore la spinge e gli attriti la frenano. Quanto vale il lavoro totale compiuto sull'automobile?

{% capture _oTeo2 %}[{"v":"a","t":"È positivo, perché il motore spinge"},{"v":"b","t":"È negativo, perché ci sono gli attriti"},{"v":"c","t":"È nullo"},{"v":"d","t":"Non si può dire senza conoscere la massa"}]{% endcapture %}
{% include mcq.html id="mcq-teo-costante" opts=_oTeo2 ok="c" s="A velocità costante l'energia cinetica non cambia, quindi $L=\Delta K=0$: il lavoro positivo del motore e quello negativo degli attriti si compensano." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

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

Vale anche al contrario: se la velocità si dimezza, l'energia cinetica si divide per $4$; se la velocità diventa un terzo, l'energia cinetica si divide per $9$, etc.
{% include box-end.html %}

### L'unità di misura dell'Energia Cinetica

L'energia cinetica, essendo un'energia, <u>ha la stessa unità di misura del lavoro: il joule</u>. Questo si può vedere dalla formula $K=\frac 12 m v^2$:
{% capture _ua_cinetica %}{"lhs":{"s":"K"},
 "rhs":[{"o":"½","drop":true},{"s":"m","u":"kg"},{"o":"·"},{"s":"v","sup":"2","u":"m/s"}],
 "passi":[["kg",{"o":"·"},{"f":[["m²"],["s²"]]}],["J"]]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-cinetica" dati=_ua_cinetica %}

Quindi:

$$[K]=[m]\cdot[v]^2=\text{kg}\cdot\left(\frac{\text m}{\text s}\right)^2=\text{kg}\cdot\frac{\text m^2}{\text s^2}=\text J.$$

{% include unisci.html %}
{% include esercizi/esercizio-cinetica.html %}

{% include esercizi/invert-cinetica.html %}
{% include unisci-end.html %}

# L'Energia Potenziale

{% include margin-note.html testo="Dagli esempi al concetto di energia potenziale" %}
Vediamo adesso un'altra forma di energia in cui si può trasformare il lavoro. Anche qui, partiamo da un paio di esempi concreti.

Immagina di comprimere una molla spingendo con la mano. Poiché eserciti una forza lungo uno spostamento, stai compiendo un lavoro.
{% include figura.html id="compressing-string"
   src="/corsi/gif/compressing-string.mp4"
   didascalia="Comprimendo la molla, applichi una forza lungo uno spostamento: stai compiendo un lavoro. Il risultato di questo lavoro è immagazzinato dentro la molla."
   larghezza="250px" %}
Tuttavia, nel momento in cui la tua mano si ferma, lo spostamento finisce e quindi il lavoro diventa nullo. D'altra parte, niente si sta muovendo, quindi non c'è energia cinetica. Deve quindi esistere una nuova energia, immagazzinata dentro la molla, che potrebbe portarla, *potenzialmente*, ad esplodere. Questa energia si chiama pertanto <definizione>energia potenziale</definizione>. Nel caso di una molla, si parla di <definizione>energia potenziale elastica</definizione>.

La stessa cosa succede quando solleviamo un peso. 
{% include figura.html id="bimbo-sollevamento-pesi"
   src="/corsi/gif/bimbo_solleva_pesi.mp4"
   didascalia="Sollevando il peso, si applica una forza lungo uno spostamento: stai compiendo un lavoro. Il risultato di questo lavoro è che il peso si trova a un'altezza da cui può cadere, acquisendo velocità e quindi energia cinetica."
   larghezza="300px" %}
Per sollevare il peso compiamo un lavoro, ma quando poi lo manteniamo fisso a una certa altezza il lavoro è nullo e poiché tutto è fermo non c'è energia cinetica. Anche in questo caso, quindi, l'energia è immagazzinata dentro il corpo, che ora ha il *potenziale* di cadere. Il corpo ha dunque una certa **energia potenziale**. In questo caso, si parla di <definizione>energia potenziale gravitazionale</definizione>.


Da questi due esempi comprendiamo che, a differenza dell'energia cinetica, <u>esistono diversi tipi di energia potenziale</u>. Ciascuno, ha la propria formula. In questo capitolo, ci concentreremo in particolare sull'energia potenziale gravitazionale.
{% include margin-note-end.html %}





### L'energia potenziale gravitazionale

{% include margin-note.html testo="Dall'esempio del sollevamento alla formula dell'energia potenziale gravitazionale" %}
Dall'esempio del sollevamento di un peso possiamo anche trovare la formula per l'energia potenziale gravitazionale. Possiamo infatti calcolare il lavoro compiuto (per il quale già conosciamo la formula) e porlo uguale all'energia che si è immagazzinata nella massa che è stata sollevata.

Immagina di sollevare una massa $m$ da terra (cioè da altezza zero) fino a un'altezza $h$. Prendiamo la nostra solita formula del lavoro e applichiamola alla forza peso:
- la forza è la forza peso, il cui modulo vale $mg$, dove $g$ è l'accelerazione gravitazionale del pianeta;
- lo spostamento è l'altezza $h$ a cui abbiamo sollevato il corpo;
- la forza peso è diretta verso il basso, mentre lo spostamento è verso l'alto: sono opposti, quindi dobbiamo aggiungere un segno meno.

{% include lab-virtuali/lavoro-peso-lab.html %}

Il lavoro svolto dalla forza peso è quindi

$$
L = -mgh.
$$

Come abbiamo detto prima, questo lavoro non è sparito: si è trasformato nell'energia potenziale gravitazionale $U_g$ immagazzinata nel corpo sollevato.   
Il segno meno ci dice che, mentre la forza peso compie un lavoro negativo, l'energia potenziale acquisita è **positiva**:

$$
L = -U_g.
$$

Mettendo insieme le due espressioni del lavoro otteniamo la formula dell'energia potenziale gravitazionale:

{% include lab-virtuali/lavoro-energia-potenziale-lab.html %}

$$
U_g = mgh.
$$

{% include margin-note-end.html %}

### L'unità di misura dell'Energia Potenziale

Anche l'energia potenziale, essendo un'energia, <u>ha la stessa unità di misura del lavoro: il joule</u>. Questo si può vedere dalla formula $U_g=mgh$:

{% capture _ua_potgrav %}{"lhs":{"s":"U","sub":"g"},
 "rhs":[{"s":"m","u":"kg"},{"o":"·"},{"s":"g","u":"m/s²"},{"o":"·"},{"s":"h","u":"m"}],
 "passi":[["kg",{"o":"·"},{"f":[[{"t":"m","hl":true},{"o":"·"},{"t":"m","hl":true}],["s²"]]}],
          ["kg",{"o":"·"},{"f":[[{"t":"m²","hl":true}],["s²"]]}],["J"]]}{% endcapture %}
{% include lab-virtuali/unita-anim.html id="ua-potgrav" dati=_ua_potgrav %}

Quindi:

$$[U_g]=[m]\cdot[g]\cdot[h]=\text{kg}\cdot\frac{\text m}{\text s^2}\cdot\text m=\text{kg}\cdot\frac{\text m\cdot\text m}{\text s^2}=\text{kg}\cdot\frac{\text m^2}{\text s^2}=\text J.$$


{% include box-imp.html testo="Energia Potenziale Gravitazionale" %}
Un corpo di massa $m$ che si trova a un'altezza $h$ possiede un'energia potenziale gravitazionale

$$U_g = mgh,$$

ove $g$ è l'accelerazione gravitazionale. È l'energia che si è immagazzinata nel corpo mentre veniva sollevato da terra: il lavoro svolto in quel sollevamento dalla forza peso vale infatti $L=-mgh=-U_g$. 

L'unità di misura dell'energia potenziale gravitazionale è il joule (J).


{% include box-end.html %}





{% include unisci.html %}
{% include esercizi/esercizio-potenziale-grav.html %}

{% include esercizi/invert-potenziale-grav.html %}
{% include unisci-end.html %}

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

{% include unisci.html %}
{% include esercizi/invert-impatto.html %}

{% include esercizi/esercizio-impatto.html %}
{% include unisci-end.html %}

## I Sistemi non Isolati e la Conservazione dell'Energia Meccanica Totale

{% include box-imp.html testo="Sistemi non isolati" %}
Un sistema si dice <definizione>non isolato</definizione> se scambia energia con una parte del resto dell'Universo.
{% include box-end.html %}

In questo caso, il sistema può **perdere** energia oppure **acquistare** energia, a seconda dei casi. Ad esempio, un corpo in movimento soggetto ad attrito **perde** energia meccanica, mentre un corpo su cui viene applicata una forza fino a produrne uno spostamento **acquista** energia meccanica.   
In ogni caso, <u markdown="span">l'energia **non** può scomparire nel nulla né comparire dal nulla</u>, quindi viene fornita dall'Universo oppure finisce nel resto dell'Universo.

Finora abbiamo incontrato solo un modo per trasmettere energia da un corpo all'altro: il lavoro. Noi considereremo quindi sistemi che scambiano **solo lavoro** con il resto dell'Universo.

Il lavoro può passare in due versi:
- il resto dell'Universo può compiere lavoro **sul sistema**: chiamiamolo $L_{U\to S}$. È energia che **entra** nel sistema;
- il sistema può compiere lavoro **sul resto dell'Universo**: chiamiamolo $L_{S\to U}$. È energia che **esce** dal sistema.

Ciò che conta, per l'energia del sistema, è la differenza fra l'energia che entra e quella che esce:

{% include figure/figura-lavoro-scambiato.html %}

$$L = L_{U\to S} - L_{S\to U}.$$

D'ora in poi chiameremo semplicemente $L$ questo lavoro, cioè il <definizione>lavoro scambiato</definizione> dal sistema con il resto dell'Universo. Ad esempio, se spingi un carrello compiendo su di esso un lavoro di $50\ \text J$ e il carrello, urtando una molla, compie su di essa un lavoro di $20\ \text J$, allora $L = 50\ \text J - 20\ \text J = 30\ \text J$.

In questa situazione, vale il seguente teorema.

{% include box-thm.html testo="Teorema di Conservazione dell'Energia Meccanica Totale" %}

Un sistema che scambia con il resto dell'Universo un lavoro $L = L_{U\to S} - L_{S\to U}$ varia la sua energia meccanica secondo la legge

$$
\Delta E=L.
$$

Ci sono quindi tre situazioni:
- se $L>0$, allora $\Delta E>0$ e quindi l'energia meccanica aumenta;
- se $L=0,$ allora $\Delta E=0$ e quindi l'energia è costante;
- se $L<0,$ allora $\Delta E<0$ e quindi l'energia meccanica diminuisce.

{% include box-end.html %}

Ad esempio, l'attrito compie sempre un lavoro negativo, perciò diminuisce l'energia meccanica, mentre un motore compie sempre un lavoro positivo, perciò aumenta l'energia meccanica.

{% include unisci.html %}
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

{% include esercizi/esercizio-lavoro-scambiato.html %}
{% include unisci-end.html %}

### Gli urti

Consideriamo l'esempio di una palla da bowling che cade.

{% include lab-virtuali/bowling-lab.html %}

Inizialmente, come già sappiamo, l'energia meccanica è solo potenziale gravitazionale. Man mano che cade, essa si trasforma in energia cinetica.   
Quando però la palla tocca il pavimento, la sua energia potenziale è nulla e dopo pochi istanti vediamo che la palla è ferma, quindi perde anche tutta la sua energia cinetica. Questo significa che la sua energia è stata dissipata.

In effetti, nel momento dell'urto, la palla comprime il pavimento, compiendo quindi un lavoro e cedendo quindi energia al pavimento. Il pavimento riprende presto la sua forma originaria, dissipando l'energia sotto forma di vibrazioni (quindi anch'esso compie un lavoro). Le vibrazioni del pavimento fanno inoltre vibrare l'aria (compiendo un ulteriore lavoro) che giunge fino al nostro timpano e lo fa vibrare (compiendo lavoro). La vibrazione del timpano viene infine tradotto dal nostro cervello nella sensazione di “suono”.  
(Se attivi l'animazione, infatti, sentirai il rumore della palla che colpisce il suolo).

## La Dissipazione dell'Energia: il Calore

Sappiamo che <u>l'attrito dissipa dell'energia</u>, compiendo un lavoro **negativo** sul corpo. Ad esempio, un corpo che striscia su una superficie orizzontale soggetta ad attrito rallenta fino a fermarsi, perdendo perciò tutta l'energia cinetica che aveva. Dove va a finire questa energia?  
L'energia non è scomparsa — non potrebbe, per il principio di conservazione dell'energia visto all'inizio del capitolo: si è convertita in <definizione>calore</definizione>.

Un esperimento semplice per visualizzare questo concetto è sfregare le proprie mani l'una contro l'altra: l'attrito dissipa l'energia cinetica delle mani e sentiamo che esse si riscaldano. La stessa cosa succede con la punta di un trapano che si riscalda, o con un fiammifero che si accende: in tutti questi casi il lavoro si converte prima in energia cinetica, che a sua volta viene dissipata sotto forma di calore dall'attrito.

{% include img-row.html
   immagini="/corsi/gif/alcaraz-rubbing-hands.mp4|/corsi/gif/drill-heating-up.mp4|/corsi/gif/fiammifero.mp4"
   alt="Sfregamento delle mani che si riscaldano per attrito|Punta di un trapano che si riscalda per attrito|Un fiammifero che si accende per attrito"
   larghezza="170px" %}


Utilizzando questo fatto, puoi spiegare anche un famoso esperimento che circola sul web: si può cuocere un pollo prendendolo a schiaffi?
{% include spoiler.html testo="Mostra la soluzione" %}
Sì. Infatti, ogni schiaffo corrisponde a una forza che provoca una compressione nel pollo, cioè uno spostamento. Se ci sono sia forza sia spostamento, allora c'è lavoro. Il lavoro non viene convertito in energia cinetica né potenziale. Cioè, viene dissipato subito (tramite delle vibrazioni nel pollo) che finiscono per riscaldare il pollo. Più sotto puoi trovare un esercizio che chiede di calcolare il numero di schiaffi necessario.
{% include spoiler-end.html %}

{% include box-imp.html testo="Il calore" %}
L'energia meccanica che viene dissipata si converte in **calore** (simbolo $Q$). Pertanto, anche il calore è una forma di energia e perciò la sua unità di misura è il joule.
{% include box-end.html %}

{% include unisci.html %}
{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qCalore %}[
{"t":"Il calore è la stessa cosa dell'energia meccanica: sono due nomi per la stessa grandezza.","ok":false,"s":"No: il calore è l'energia meccanica dissipata, cioè quella che un sistema non isolato perde a causa dell'attrito — non è l'energia meccanica del sistema stesso."},
{"t":"Il calore si misura in joule, come tutte le altre forme di energia.","ok":true,"s":"Sì: essendo una forma di energia, condivide la stessa unità di misura del lavoro, dell'energia cinetica e di quella potenziale."},
{"t":"Se un corpo rallenta fino a fermarsi a causa dell'attrito, l'energia cinetica persa si trasforma interamente in calore.","ok":true,"s":"Sì: è proprio il lavoro negativo dell'attrito, dissipato sotto forma di calore."},
{"t":"Più l'attrito è intenso, meno calore viene prodotto a parità di spostamento.","ok":false,"s":"No, è vero il contrario: un attrito più intenso significa una forza d'attrito maggiore, quindi — a parità di spostamento — più lavoro dissipato, cioè più calore."}
]{% endcapture %}
{% include quiz.html domande=_qCalore id="q-calore" senza_esempi="true" %}
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
Una cassa scivola sul pavimento e, a causa dell'attrito, rallenta fino a fermarsi. Che fine ha fatto la sua energia cinetica?
{% capture _oCassa %}[
{"v":"a","t":"è scomparsa: l'attrito l'ha distrutta"},
{"v":"b","t":"si è trasformata in calore: la cassa e il pavimento si sono scaldati un po'"},
{"v":"c","t":"si è trasformata in energia potenziale gravitazionale"},
{"v":"d","t":"è rimasta nella cassa, che però è ferma"}
]{% endcapture %}
{% include mcq.html id="mcq-calore-cassa" opts=_oCassa ok="b" s="L'energia non si crea e non si distrugge: l'attrito compie un lavoro negativo e l'energia cinetica persa diventa calore. La cassa non è salita, quindi la sua energia potenziale non è cambiata." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
{% include fill.html prima="Su un corpo che striscia, il lavoro compiuto dalla forza d'attrito è sempre" tipo="drop" opts="positivo|negativo|nullo" ok="negativo" dopo="," s="L'attrito ha verso opposto allo spostamento: forza e spostamento sono opposti, quindi L < 0." %}

{% include fill.html prima="e l'energia meccanica del corpo" tipo="drop" opts="aumenta|diminuisce|resta la stessa" ok="diminuisce" dopo="." s="Per un sistema non isolato ΔE = L: con L < 0, l'energia meccanica diminuisce, e quella che manca diventa calore." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include esercizi/esercizio-calore.html %}
{% include unisci-end.html %}

Prova tu stesso a esplorare la conservazione — e la dissipazione — dell'energia meccanica con questa simulazione:

{% include phet-sim.html id="energy-skate-park"
   src="https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_all.html"
   didascalia="Simulazione PhET: fai scorrere lo skater lungo la pista e osserva come l'energia potenziale si trasforma in energia cinetica (e viceversa). Prova ad attivare l'attrito, e osserva come parte dell'energia si trasforma in calore."
   altezza="550px" %}


### Schema riassuntivo

{% include mappa.html id="energia" %}

# Esercizi di Riepilogo

### Ripasso veloce

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
{% include spoiler.html testo="Indizio" %}
Per ogni affermazione guarda la formula: quali grandezze compaiono, e a che potenza?
{% include spoiler-end.html %}

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
{% include spoiler.html testo="Indizio" %}
Il lavoro è una forza per uno spostamento, la potenza è un lavoro diviso un tempo. Per le energie, chiediti quale dipende dalla velocità e quale dall'altezza.
{% include spoiler-end.html %}

{% include ex-end.html %}

### Esercizi sulla formula del lavoro


{% include ex.html diff=1 %}
Trascina ciascuna situazione nella colonna corrispondente.

{% include esercizi/sort-segno-lavoro.html %}
{% include spoiler.html testo="Indizio" %}
Confronta il verso della forza con quello dello spostamento: sono concordi, opposti o perpendicolari?
{% include spoiler-end.html %}

{% include ex-end.html %}

{% include ex.html diff=1 %}
Un'automobile traina un carrello che pesa $2\,500\ \text N$ con una forza pari a $20\ \text N$ per una distanza di $8\ \text{km}$ lungo una strada dritta ed orizzontale. Qual è il lavoro eseguito dall'auto per tirare il carrello?

*(Fonte: Giochi di Anacleto, 2022)*

{% capture _o_mcqEx2choices %}[{"v": "a", "t": "A. $160\\ \\text J$"}, {"v": "b", "t": "B. $20\\,000\\ \\text J$"}, {"v": "c", "t": "C. $160\\,000\\ \\text J$"}, {"v": "d", "t": "D. $20\\,000\\,000\\ \\text J$"}]{% endcapture %}
{% include mcq.html id="mcqEx2choices" opts=_o_mcqEx2choices ok="c" %}

{% include spoiler.html testo="Indizio" %}
Nel lavoro entra la forza con cui l'auto tira, non il peso del carrello. Attenzione ai chilometri.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Il peso del carrello ($2\,500\ \text N$) non serve a calcolare il lavoro: conta solo la forza effettivamente applicata lungo lo spostamento, cioè $F=20\ \text N$. Convertendo $8\ \text{km}=8\,000\ \text m$,

$$L = F\cdot \Delta s = 20\ \text N \times 8\,000\ \text m = 160\,000\ \text J.$$

La risposta corretta è **C**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Qual è l'altezza da cui cade un corpo dal peso di $2\ \text N$ sapendo che il lavoro compiuto dalla forza di gravità è pari a $2\ \text J$?

*(Fonte: Test di ammissione a Professioni Sanitarie, 2019)*

{% capture _o_mcqEx3choices %}[{"v": "a", "t": "A. $1\\ \\text m$"}, {"v": "b", "t": "B. $2\\ \\text m$"}, {"v": "c", "t": "C. $10\\ \\text m$"}, {"v": "d", "t": "D. $20\\ \\text m$"}, {"v": "e", "t": "E. $0{,}5\\ \\text m$"}]{% endcapture %}
{% include mcq.html id="mcqEx3choices" opts=_o_mcqEx3choices ok="a" %}

{% include spoiler.html testo="Indizio" %}
La forza qui è il peso, e lo spostamento è proprio l'altezza. Da $L=F\cdot\Delta s$ isola $\Delta s$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Il peso è già la forza di gravità: $F_{peso}=2\ \text N$. Durante la caduta, forza e spostamento hanno lo stesso verso (entrambi verso il basso), quindi

$$L = F_{peso}\cdot h \quad \implies \quad h = \frac{L}{F_{peso}} = \frac{2\ \text J}{2\ \text N} = 1\ \text m.$$

La risposta corretta è **A**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un uomo tenta di spingere la sua auto. Spingendo al massimo, esercita una forza di $10^3\ \text N,$ ma non riesce a spostarla. Qual è il lavoro compiuto?

{% capture _o_mcqEx4choices %}[{"v": "a", "t": "A. $10^3\\ \\text J$"}, {"v": "b", "t": "B. $0$"}, {"v": "c", "t": "C. $10^4\\ \\text J$"}, {"v": "d", "t": "D. Non è possibile rispondere perché mancano alcuni dati."}]{% endcapture %}
{% include mcq.html id="mcqEx4choices" opts=_o_mcqEx4choices ok="b" %}

{% include spoiler.html testo="Indizio" %}
Nella formula $L=F\cdot\Delta s$, quanto vale $\Delta s$ se l'auto non si muove?
{% include spoiler-end.html %}

{% include ex-sol.html %}
Anche se l'uomo applica una forza, l'automobile non si sposta: lo spostamento è nullo, $\Delta s=0$. Quindi

$$L = F\cdot \Delta s = 10^3\ \text N \times 0 = 0.$$

La risposta corretta è **B**. (È lo stesso motivo per cui, spingendo un muro, non compi lavoro anche se ti stanchi!)
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
L'attrito esercita una forza costante di $100\ \text N$ su un corpo che scivola per $10\ \text m$. Qual è il lavoro compiuto dall'attrito?

{% capture _o_mcqEx5choices %}[{"v": "a", "t": "A. $1\\,000\\ \\text J$"}, {"v": "b", "t": "B. $100\\ \\text J$"}, {"v": "c", "t": "C. $10\\ \\text J$"}, {"v": "d", "t": "D. $-1\\,000\\ \\text J$"}]{% endcapture %}
{% include mcq.html id="mcqEx5choices" opts=_o_mcqEx5choices ok="d" %}

{% include spoiler.html testo="Indizio" %}
L'attrito è opposto allo spostamento: che segno ha il suo lavoro?
{% include spoiler-end.html %}

{% include ex-sol.html %}
L'attrito si oppone sempre al moto: forza e spostamento hanno verso opposto, quindi il lavoro è negativo.

$$L = -F\cdot \Delta s = -100\ \text N \times 10\ \text m = -1\,000\ \text J.$$

La risposta corretta è **D**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Calcola il lavoro esercitato dalla forza peso su di un corpo di massa $1\ \text{kg}$ che scivola orizzontalmente su una superficie per $50\ \text m$.

{% include spoiler.html testo="Indizio" %}
La forza peso è verticale, lo spostamento è orizzontale. Come sono fra loro?
{% include spoiler-end.html %}

{% include ex-sol.html %}
La forza peso è sempre verticale, diretta verso il basso; lo spostamento, invece, è orizzontale. Forza e spostamento sono quindi **perpendicolari**, perciò il lavoro della forza peso è nullo:

$$L = 0\ \text J,$$

indipendentemente dalla massa del corpo o dalla distanza percorsa (che infatti non servono per rispondere).
{% include ex-sol-end.html %}


{% include ex.html diff=2 %}
In un'officina, per spostare una cassa di attrezzi lungo $15\ \text m$ di pavimento viene compiuto un lavoro di $450\ \text J$. Supponendo che la forza sia parallela allo spostamento, quanto vale la forza applicata?

{% include num.html id="numFE1" valore="30" unit="N" %}

{% include spoiler.html testo="Indizio" %}
Parti da $L=F\cdot\Delta s$ e isola $F$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
$$F = \frac{L}{\Delta s} = \frac{450\ \text J}{15\ \text m} = 30\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
In un magazzino, un carrello elevatore spinge una scatola con una forza di $50\ \text N$, parallela allo spostamento, compiendo un lavoro di $750\ \text J$. Di quanti metri si è spostata la scatola?

{% include num.html id="numSE1" valore="15" unit="m" %}

{% include spoiler.html testo="Indizio" %}
Parti da $L=F\cdot\Delta s$ e isola $\Delta s$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
$$\Delta s = \frac{L}{F} = \frac{750\ \text J}{50\ \text N} = 15\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Andrea cala un secchio pieno di acqua nel pozzo. Sapendo che la massa del secchio pieno corrisponde a $15\ \text{kg}$ e che è stato calato per $10\ \text m$ a velocità costante, trova il lavoro svolto da Andrea. Esprimi il risultato in joule, in notazione scientifica. (Usa $g\approx 10\ \text{m/s}^2$.)

{% include sci.html prima="$L=$" coeff="-1.5" exp="3" s="$-1{,}5\times10^3\ \text J$" %}

{% include spoiler.html testo="Indizio" %}
A velocità costante la forza di Andrea è uguale al peso del secchio. Lui tira verso l'alto, ma il secchio scende: che segno ha il lavoro?
{% include spoiler-end.html %}

{% include ex-sol.html %}
Poiché il secchio scende a velocità costante, la forza che Andrea esercita con la corda (verso l'alto, per trattenerlo) deve avere lo stesso modulo del peso del secchio:

$$F_{Andrea} = mg = 15\ \text{kg}\times 10\ \text{m/s}^2 = 150\ \text N.$$

Questa forza è diretta verso l'**alto**, mentre lo spostamento del secchio è verso il **basso**: sono opposti, quindi il lavoro di Andrea è negativo.

$$L = -F_{Andrea}\cdot \Delta s = -150\ \text N \times 10\ \text m = -1\,500\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
L'attrito frena una slitta che scivola in linea retta per $25\ \text m$, compiendo su di essa un lavoro di $-125\ \text J$. Quanto vale il **modulo** della forza di attrito?

{% include num.html id="numFE3" valore="5" unit="N" %}

{% include spoiler.html testo="Indizio" %}
Il modulo di una forza è positivo: da $\lvert L\rvert=F\cdot\Delta s$ isola $F$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
L'attrito si oppone al moto, quindi il lavoro è negativo: $L=-F\cdot\Delta s$. Il modulo della forza, però, non può mai essere negativo:

$$F = \frac{|L|}{\Delta s} = \frac{125\ \text J}{25\ \text m} = 5\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una forza costante di $2\,000\ \text N$, parallela allo spostamento, compie un lavoro di $5\times10^6\ \text J$ spingendo un'automobile lungo un rettilineo. Per quanti metri si è spostata l'automobile? Esprimi il risultato in metri, in notazione scientifica.

{% include sci.html prima="$\Delta s=$" coeff="2.5" exp="3" s="$2{,}5\times10^3\ \text m$" %}

Se l'automobile ha percorso quello spazio, a velocità costante, in $50\ \text s$, quale potenza ha sviluppato la forza? Esprimi il risultato in watt, in notazione scientifica.

{% include sci.html prima="$P=$" coeff="1" exp="5" s="$1\times10^5\ \text W$" %}

{% include spoiler.html testo="Indizio" %}
Da $L=F\cdot\Delta s$ isola $\Delta s$. Per la seconda domanda, la potenza è il lavoro diviso per il tempo.
{% include spoiler-end.html %}

{% include ex-sol.html %}
$$\Delta s = \frac{L}{F} = \frac{5\times10^6\ \text J}{2\,000\ \text N} = 2{,}5\times10^3\ \text m.$$

La velocità (costante) dell'automobile è

$$v = \frac{\Delta s}{\Delta t} = \frac{2{,}5\times10^3\ \text m}{50\ \text s} = 50\ \text{m/s},$$

quindi la potenza sviluppata è

$$P = F\cdot v = 2\,000\ \text N \times 50\ \text{m/s} = 1\times10^5\ \text W.$$
{% include ex-sol-end.html %}

### Esercizi sulla potenza

{% include ex.html diff=1 %}
Un frullatore ha una potenza di $300\ \text W$ e viene utilizzato per $2$ minuti. Quale lavoro ha compiuto in questo intervallo di tempo?

{% include num.html id="numPotRiep1" valore="36000" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Da $P=L/\Delta t$ isola $L$. Il tempo va in secondi.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Convertendo $2$ minuti $=120\ \text s$,

$$L = P\cdot \Delta t = 300\ \text W \times 120\ \text s = 36\,000\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un rimorchiatore traina una nave esercitando una forza costante di $5\times10^4\ \text N$, parallela al moto, mentre la nave avanza a velocità costante di $2\ \text{m/s}$. Quale potenza sta sviluppando il rimorchiatore?

{% include num.html id="numPotRiep2" valore="100000" unit="W" %}

{% include spoiler.html testo="Indizio" %}
A velocità costante puoi usare $P=F\cdot v$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
$$P = F\cdot v = 5\times10^4\ \text N \times 2\ \text{m/s} = 1\times10^5\ \text W = 100\,000\ \text W.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un'automobile viaggia a velocità costante di $90\ \text{km/h}$; per mantenerla, il motore deve vincere forze resistenti (aria e attriti) per un totale di $600\ \text N$. Quale potenza sviluppa il motore?

{% include num.html id="numPotRiep6" valore="15000" unit="W" %}

{% include spoiler.html testo="Indizio" %}
Usa $P=F\cdot v$, con la velocità in m/s: dividi i km/h per $3{,}6$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
$v = 90\ \text{km/h} = 25\ \text{m/s}$; la forza del motore è uguale alle forze resistenti, quindi
$$P = F\cdot v = 600\ \text N \times 25\ \text{m/s} = 15\,000\ \text W.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un ascensore di massa totale $800\ \text{kg}$ sale di $30\ \text m$ in $20\ \text s$, a velocità costante. Quale potenza minima deve avere il motore? (Usa $g = 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numPotRiep7" valore="11760" unit="W" %}

{% include spoiler.html testo="Indizio" %}
Il motore deve dare all'ascensore l'energia potenziale $mgh$ in $20\ \text s$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Il motore deve compiere almeno il lavoro necessario a sollevare l'ascensore: $L = mgh = 800\ \text{kg}\times 9{,}8\ \text{m/s}^2 \times 30\ \text m = 235\,200\ \text J$. Quindi
$$P = \frac{L}{\Delta t} = \frac{235\,200\ \text J}{20\ \text s} = 11\,760\ \text W \approx 1{,}2\times10^4\ \text W.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una gru ha una potenza di $5\ \text{kW}$. Quanto tempo le serve, come minimo, per sollevare un carico di $500\ \text{kg}$ di $20\ \text m$? (Usa $g = 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numPotRiep8" valore="19.6" unit="s" %}

{% include spoiler.html testo="Indizio" %}
Il lavoro della gru è $mgh$. Da $P=L/\Delta t$ isola $\Delta t$, con la potenza in watt.
{% include spoiler-end.html %}

{% include ex-sol.html %}
$L = mgh = 500\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 20\ \text m = 98\,000\ \text J$, quindi
$$\Delta t = \frac{L}{P} = \frac{98\,000\ \text J}{5\,000\ \text W} = 19{,}6\ \text s.$$
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Un ciclista professionista può sviluppare per un'ora una potenza di circa $400\ \text W$. Il ciclista e la bicicletta hanno una massa complessiva di $75\ \text{kg}$. Trascurando gli attriti, quanti minuti gli servono, come minimo, per salire su un passo di montagna con un dislivello di $1\,000\ \text m$? (Usa $g = 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numPotRiep9" valore="30.6" tol="2" unit="min" %}

{% include spoiler.html testo="Indizio" %}
Il lavoro delle gambe è l'energia potenziale guadagnata. Da $P=L/\Delta t$ isola $\Delta t$, poi passa ai minuti.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Il lavoro minimo è quello necessario per sollevare ciclista e bici di $1\,000\ \text m$: $L = mgh = 75\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 1\,000\ \text m = 735\,000\ \text J$. Quindi
$$\Delta t = \frac{L}{P} = \frac{735\,000\ \text J}{400\ \text W} \approx 1\,838\ \text s \approx 30{,}6\ \text{min}.$$
In realtà ci vuole di più, perché una parte del lavoro serve a vincere gli attriti e la resistenza dell'aria.
{% include ex-sol-end.html %}

### Esercizi sul teorema dell'energia cinetica


{% include ex.html diff=1 %}
Un pallone da calcio di massa $450\ \text g$ viaggia a una velocità di $20\ \text{m/s}$. Quanta energia cinetica possiede?

{% include num.html id="numKE3" valore="90" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Prima di tutto porta la massa in chilogrammi.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $450\ \text g=0{,}45\ \text{kg}$.

$$K = \frac12 mv^2 = \frac12 \times 0{,}45\ \text{kg}\times (20\ \text{m/s})^2 = 90\ \text J.$$
{% include ex-sol-end.html %}


{% include ex.html diff=2 %}
Un'automobile di massa $1\,200\ \text{kg}$ viaggia a una velocità di $72\ \text{km/h}$. Quanta energia cinetica possiede? Esprimi il risultato in joule, in notazione scientifica.

{% include sci.html prima="$K=$" coeff="2.4" exp="5" s="$2{,}4\times10^5\ \text J$" %}

{% include spoiler.html testo="Indizio" %}
Porta la velocità in m/s, dividendo per $3{,}6$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Convertendo la velocità in $\text{m/s}$:

$$72\ \text{km/h} = \frac{72}{3{,}6}\ \text{m/s} = 20\ \text{m/s}.$$

Quindi

$$K = \frac12 mv^2 = \frac12 \times 1\,200\ \text{kg}\times (20\ \text{m/s})^2 = 2{,}4\times10^5\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un cane insegue una pallina correndo a $8\ \text{m/s}$ (quasi $29\ \text{km/h}$!), con un'energia cinetica di $256\ \text J$. Qual è la sua massa?

{% include num.html id="numKE5" valore="8" unit="kg" %}

{% include spoiler.html testo="Indizio" %}
Da $K=\frac12mv^2$ isola $m$: moltiplica per $2$ e dividi per $v^2$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Isoliamo $m$ nella formula $K=\frac12 mv^2$:

$$m = \frac{2K}{v^2} = \frac{2\times256\ \text J}{(8\ \text{m/s})^2} = \frac{512}{64} = 8\ \text{kg}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una palla da bowling di massa $5\ \text{kg}$ rotola lungo la corsia con un'energia cinetica di $90\ \text J$. A quale velocità si sta muovendo?

{% include num.html id="numKE6" valore="6" unit="m/s" %}

{% include spoiler.html testo="Indizio" %}
Da $K=\frac12mv^2$ isola $v$: alla fine c'è una radice quadrata.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Isoliamo $v$ nella formula $K=\frac12 mv^2$ (attenzione: qui serve una radice quadrata!):

$$v = \sqrt{\frac{2K}{m}} = \sqrt{\frac{2\times90\ \text J}{5\ \text{kg}}} = \sqrt{36} = 6\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un proiettile di massa $10\ \text g$ possiede un'energia cinetica di $1\,250\ \text J$. A quale velocità viaggia? Esprimi il risultato in km/h.

{% include num.html id="numKE7" valore="1800" unit="km/h" %}

{% include spoiler.html testo="Indizio" %}
Massa in chilogrammi, poi isola $v$. Per passare da m/s a km/h moltiplica per $3{,}6$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $10\ \text g=0{,}01\ \text{kg}$. Isoliamo $v$:

$$v = \sqrt{\frac{2K}{m}} = \sqrt{\frac{2\times1\,250\ \text J}{0{,}01\ \text{kg}}} = \sqrt{250\,000} = 500\ \text{m/s}.$$

Convertendo in $\text{km/h}$:

$$v = 500\ \text{m/s}\times 3{,}6 = 1\,800\ \text{km/h}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un'automobile di massa $1\,000\ \text{kg}$ accelera da $10\ \text{m/s}$ a $30\ \text{m/s}$. Quanto lavoro (totale) è stato compiuto sull'automobile? Esprimi il risultato in joule, in notazione scientifica.

{% include sci.html prima="$L=$" coeff="4" exp="5" s="$4\times10^5\ \text J$" %}

{% include spoiler.html testo="Indizio" %}
Usa $L=K_f-K_i$. Calcola le due energie separatamente: non puoi usare la differenza delle velocità.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Per il teorema dell'energia cinetica, $L=\Delta K = K_f - K_i$:

$$L = \frac12 m v_f^2 - \frac12 m v_i^2 = \frac12\times1\,000\ \text{kg}\times\left[(30\ \text{m/s})^2 - (10\ \text{m/s})^2\right] = \frac12\times1\,000\times800 = 4\times10^5\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Marco lancia una palla da fermo, di massa $200\ \text g$, facendole raggiungere una velocità di $15\ \text{m/s}$. Quanto lavoro ha compiuto Marco sulla palla?

{% include num.html id="numKE9" valore="22.5" unit="J" %}

{% include spoiler.html testo="Indizio" %}
La palla parte da ferma, quindi $K_i=0$. La massa va in chilogrammi.
{% include spoiler-end.html %}

{% include ex-sol.html %}
La palla parte da ferma, quindi $v_i=0$ e $K_i=0$. Convertendo la massa, $200\ \text g=0{,}2\ \text{kg}$. Per il teorema dell'energia cinetica,

$$L = \Delta K = K_f - K_i = \frac12 m v_f^2 - 0 = \frac12\times0{,}2\ \text{kg}\times(15\ \text{m/s})^2 = 22{,}5\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcSputacchina" %}
L'animale con l'accelerazione più grande mai misurata è un insetto lungo pochi millimetri, la sputacchina (*Philaenus spumarius*): nei suoi salti migliori, partendo da ferma, raggiunge una velocità di $4\ \text{m/s}$ con una spinta delle zampe posteriori che dura appena $1\ \text{ms}$, durante la quale il suo corpo si sposta di circa $2\ \text{mm}$. La sua massa è di circa $12\ \text{mg}$.

{% include spoiler.html testo="Indizio" %}
Usa il secondo principio della dinamica: per trovare la forza con cui le zampe spingono l'insetto ti serve prima la sua accelerazione, cioè di quanto cambia la velocità in ogni secondo.
{% include spoiler-end.html %}

Quanto lavoro compiono le zampe sull'insetto durante la spinta?

{% include fill-multi.html testo="$L =$ [9,6|9.6] $\times10^{-5}$ J" %}

Con quale potenza?

{% include fill-multi.html testo="$P =$ [9,6|9.6] $\times10^{-2}$ W" %}

Quanto vale l'energia cinetica dell'insetto quando si stacca da terra? Confrontala con il lavoro.

{% include fill-multi.html testo="$K =$ [9,6|9.6] $\times10^{-5}$ J" %}
<div style="clear:both"></div>

{% include ex-sol.html %}
La massa è $12\ \text{mg} = 1{,}2\times10^{-5}\ \text{kg}$, la durata della spinta $1\ \text{ms} = 10^{-3}\ \text s$, lo spostamento $2\ \text{mm} = 2\times10^{-3}\ \text m$.

L'accelerazione è la variazione di velocità divisa per il tempo:

$$a = \frac{\Delta v}{\Delta t} = \frac{4\ \text{m/s}}{10^{-3}\ \text s} = 4\times10^{3}\ \text{m/s}^2,$$

circa $400$ volte l'accelerazione di gravità. Per il secondo principio della dinamica, la forza delle zampe è

$$F = m\,a = 1{,}2\times10^{-5}\ \text{kg}\times4\times10^{3}\ \text{m/s}^2 = 4{,}8\times10^{-2}\ \text N,$$

e il lavoro è

$$L = F\cdot\Delta s = 4{,}8\times10^{-2}\ \text N\times2\times10^{-3}\ \text m = 9{,}6\times10^{-5}\ \text J.$$

La potenza è

$$P = \frac{L}{\Delta t} = \frac{9{,}6\times10^{-5}\ \text J}{10^{-3}\ \text s} = 9{,}6\times10^{-2}\ \text W.$$

L'energia cinetica al decollo è

$$K = \frac12\,m\,v^2 = \frac12\times1{,}2\times10^{-5}\ \text{kg}\times(4\ \text{m/s})^2 = 9{,}6\times10^{-5}\ \text J:$$

esattamente il lavoro compiuto dalle zampe. Non è un caso: è il teorema dell'energia cinetica, $L = \Delta K$, con $K_i = 0$ perché l'insetto parte da fermo.

*Dati da M. Burrows, «Froghopper insects leap to new heights», Nature 424, 509 (2003).*
{% include ex-sol-end.html %}

### Esercizi sull'energia potenziale

{% include ex.html diff=1 %}
Un libro di massa $2\ \text{kg}$ viene posto su uno scaffale a $5\ \text m$ di altezza. Quanta energia potenziale gravitazionale possiede rispetto al pavimento? (Usa $g\approx 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numB1" valore="98" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Basta $U_g=mgh$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
$$U_g = mgh = 2\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 5\ \text m = 98\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un vaso di fiori di massa $3\ \text{kg}$, appoggiato su un davanzale, possiede un'energia potenziale gravitazionale di $294\ \text J$ rispetto al marciapiede. A che altezza si trova il davanzale? (Usa $g\approx 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numUh" valore="10" unit="m" %}

{% include spoiler.html testo="Indizio" %}
Da $U_g=mgh$ isola $h$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Isoliamo $h$ dalla formula $U_g=mgh$, dividendo entrambi i membri per $mg$:

$$h=\frac{U_g}{mg}=\frac{294\ \text J}{3\ \text{kg}\times 9{,}8\ \text{m/s}^2}=10\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un sasso appoggiato in cima a un muro alto $12\ \text m$ ha un'energia potenziale gravitazionale di $60\ \text J$ rispetto al suolo. Qual è la sua massa? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numUm" valore="0.5" unit="kg" %}

{% include spoiler.html testo="Indizio" %}
Da $U_g=mgh$ isola $m$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Isoliamo $m$ dalla formula $U_g=mgh$, dividendo entrambi i membri per $gh$:

$$m=\frac{U_g}{gh}=\frac{60\ \text J}{10\ \text{m/s}^2\times 12\ \text m}=0{,}5\ \text{kg}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Sulla Luna, un'astronauta solleva un campione di roccia di massa $2\ \text{kg}$ di $1{,}5\ \text m$: l'energia potenziale gravitazionale del campione aumenta di $4{,}86\ \text J$.

1. Quanto vale l'accelerazione di gravità sulla Luna?
{% include num.html id="numgLunaU" valore="1.62" unit="m/s²" tol="2" %}
2. Quante volte è più piccola di quella terrestre ($9{,}8\ \text{m/s}^2$)?
{% include num.html id="numRapLunaU" valore="6.05" tol="3" %}

{% include spoiler.html testo="Indizio" %}
Da $\Delta U_g=mg\,\Delta h$ isola $g$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Isoliamo $g$ dalla formula $U_g=mgh$, dividendo entrambi i membri per $mh$:

$$g=\frac{U_g}{mh}=\frac{4{,}86\ \text J}{2\ \text{kg}\times 1{,}5\ \text m}=1{,}62\ \text{m/s}^2,\qquad \frac{9{,}8\ \text{m/s}^2}{1{,}62\ \text{m/s}^2}\approx 6{,}05.$$

Circa sei volte più piccola: per questo sulla Luna si salta così in alto!
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
A Natale, Babbo Natale cala lungo un camino un sacco di regali di massa $5\ \text{kg}$, legato a una corda. Su di esso viene compiuto un lavoro di $-150\ \text J$, che diminuisce la sua energia potenziale gravitazionale: alla fine si trova a un'altezza di $2\ \text m$ dal camino. Qual era la sua altezza iniziale? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numHi" valore="5" unit="m" %}

{% include spoiler.html testo="Indizio" %}
Da quel lavoro ricavi di quanti metri è sceso il sacco. Poi ricordati che alla fine si trova ancora a $2\ \text m$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
L'aumento di energia potenziale è $\Delta U_g = mg(h_f-h_i)$. Isoliamo $h_i$:

$$h_i = h_f - \frac{\Delta U_g}{mg} = 2\ \text m - \frac{-150\ \text J}{5\ \text{kg}\times 10\ \text{m/s}^2} = 2\ \text m + 3\ \text m = 5\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un pescatore issa sulla banchina una cassa di pesce, sollevandola di $4\ \text m$: la sua energia potenziale gravitazionale aumenta di $800\ \text J$. Qual è il peso della cassa?

{% include num.html id="numForza" valore="200" unit="N" %}

{% include spoiler.html testo="Indizio" %}
Il peso è $mg$, quindi $\Delta U_g$ è il peso per l'altezza. Isola il peso.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Il lavoro compiuto contro la gravità (che si trasforma in energia potenziale) è $L=F\cdot\Delta s$, dove qui $F$ è proprio il peso della cassa e $\Delta s$ è l'altezza $h$. Isoliamo $F$:

$$F = \frac{\Delta U_g}{h} = \frac{800\ \text J}{4\ \text m} = 200\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un oggetto $A$ di massa $m$ si trova all'altezza $h$. Un oggetto $B$ ha massa tripla, $3m$, ma la **stessa** energia potenziale gravitazionale di $A$. A che altezza si trova $B$?

{% capture _o_prop %}[
{"v":"a","t":"A un'altezza $3h$"},
{"v":"b","t":"Alla stessa altezza $h$"},
{"v":"c","t":"A un'altezza $h/3$"},
{"v":"d","t":"A un'altezza $h/9$"}
]{% endcapture %}
{% include mcq.html id="mcqUprop" opts=_o_prop ok="c" s="Da $h=\dfrac{U_g}{mg}$: a parità di $U_g$ (e di $g$), l'altezza è inversamente proporzionale alla massa. Se la massa triplica, l'altezza deve diventare un terzo." %}
{% include spoiler.html testo="Indizio" %}
Scrivi $U_g$ per $A$ e per $B$, e uguagliale.
{% include spoiler-end.html %}

{% include ex-end.html %}

### Esercizi sull'energia meccanica e sul calore

Prima di iniziare, fissiamo le idee su cosa sia un sistema isolato.

{% include frayer.html id="frayer-sistema-isolato" termine="Sistema isolato" %}

{% include ex.html diff=1 %}
Una bambina su un'altalena viene tirata indietro finché non si trova a $0{,}45\ \text m$ di altezza rispetto al punto più basso, poi lasciata andare da ferma. Trascurando l'attrito, con che velocità passa per il punto più basso? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numAltalena1" valore="3" unit="m/s" %}

{% include spoiler.html testo="Indizio" %}
Tutta l'energia potenziale in alto diventa energia cinetica in basso. La massa si semplifica.
{% include spoiler-end.html %}

{% include ex-sol.html %}
È la stessa situazione di un corpo lasciato cadere da un'altezza $h$: tutta l'energia potenziale iniziale si trasforma in energia cinetica, quindi $mgh=\frac12 mv^2$, da cui $v=\sqrt{2gh}$:

$$v = \sqrt{2gh} = \sqrt{2\times 10\ \text{m/s}^2\times 0{,}45\ \text m} = \sqrt 9 = 3\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un corpo viene sparato verticalmente verso l'alto con una velocità iniziale di $30\ \text{m/s}$. Che altezza massima raggiunge, trascurando l'attrito dell'aria? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numSparo" valore="45" unit="m" %}

{% include spoiler.html testo="Indizio" %}
È il contrario della caduta: l'energia cinetica diventa tutta potenziale. Da $\frac12mv^2=mgh$ isola $h$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
È la situazione opposta di un corpo che cade: qui tutta l'energia cinetica iniziale si trasforma in energia potenziale, fino a che il corpo si ferma per un istante nel punto più alto. Vale quindi ancora $\frac12 mv^2 = mgh$, cioè $v=\sqrt{2gh}$, da cui isoliamo $h$:

$$h = \frac{v^2}{2g} = \frac{(30\ \text{m/s})^2}{2\times 10\ \text{m/s}^2} = \frac{900}{20} = 45\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Su un pianeta appena scoperto, un oggetto lasciato cadere da un'altezza di $5\ \text m$ tocca il suolo con una velocità di $6\ \text{m/s}$. Qual è l'accelerazione di gravità su quel pianeta?

{% include num.html id="numPianeta" valore="3.6" unit="m/s²" %}

{% include spoiler.html testo="Indizio" %}
Vale $\frac12mv^2=mgh$. La massa si semplifica: isola $g$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Isoliamo $g$ dalla formula $v=\sqrt{2gh}$:

$$g = \frac{v^2}{2h} = \frac{(6\ \text{m/s})^2}{2\times 5\ \text m} = \frac{36}{10} = 3{,}6\ \text{m/s}^2.$$

(Non lontano dal valore reale di Marte, $g\approx 3{,}7\ \text{m/s}^2$!)
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Uno skater in uno skatepark parte da un punto della rampa alto $3\ \text m$, già in movimento con una velocità di $3\ \text{m/s}$, e scende (trascurando l'attrito, usa $g\approx 10\ \text{m/s}^2$) fino a un punto alto $1\ \text m$. Con che velocità passa da quel punto?

{% include num.html id="numSkater" valore="7" unit="m/s" %}

{% include spoiler.html testo="Indizio" %}
All'inizio ha sia energia cinetica sia energia potenziale. Scrivi $K_i+U_i=K_f+U_f$: la massa si semplifica.
{% include spoiler-end.html %}

{% include ex-sol.html %}
L'energia meccanica si conserva fra i due punti:

$$\frac12 m v_1^2 + mgh_1 = \frac12 m v_2^2 + mgh_2.$$

La massa si semplifica; isoliamo $v_2$:

$$v_2 = \sqrt{v_1^2 + 2g(h_1-h_2)} = \sqrt{(3\ \text{m/s})^2 + 2\times 10\ \text{m/s}^2\times(3\ \text m - 1\ \text m)} = \sqrt{9+40} = \sqrt{49} = 7\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Uno slittino di massa $10\ \text{kg}$, inizialmente fermo, viene tirato da un bambino su un tratto orizzontale: il bambino compie sullo slittino un lavoro di $200\ \text J$, mentre a causa dell'attrito lo slittino cede alla neve $110\ \text J$. Con quale velocità si muove lo slittino alla fine?

{% include num.html id="numLavScambR2" valore="4.24" tol="2" unit="m/s" %}

{% include spoiler.html testo="Indizio" %}
Trova il lavoro totale, con il suo segno. Il tratto è orizzontale, quindi quel lavoro diventa tutto energia cinetica.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Il tratto è orizzontale, quindi l'energia potenziale non cambia e tutta la variazione di energia meccanica è energia cinetica:
$$\Delta E = L = 200\ \text J - 110\ \text J = 90\ \text J = \tfrac12 m v^2 \quad\Rightarrow\quad v=\sqrt{\frac{2\cdot 90\ \text J}{10\ \text{kg}}}=\sqrt{18}\ \text{m/s}\approx 4{,}24\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Torniamo all'esperimento (immaginario!) del "pollo cotto a schiaffi". Supponi che ogni schiaffo comprima il pollo di $2{,}5\ \text{cm}$ esercitando una forza di $40\ \text N$, e che tutto il lavoro compiuto si dissipi istantaneamente in calore. Sapendo che per cuocere completamente il pollo servono circa $2\times10^5\ \text J$ di calore, quanti schiaffi sarebbero necessari?

{% include sci.html prima="Numero di schiaffi $=$" coeff="2" exp="5" s="2 × 10⁵ schiaffi" %}

{% include spoiler.html testo="Indizio" %}
Calcola il lavoro di uno schiaffo, con lo spostamento in metri. Poi dividi l'energia totale per quel lavoro.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Il lavoro — e quindi il calore — prodotto da un singolo schiaffo è

$$L_{\text{schiaffo}} = F\cdot \Delta s = 40\ \text N \times 0{,}025\ \text m = 1\ \text J.$$

Per ottenere i $2\times10^5\ \text J$ necessari a cuocere il pollo servono quindi

$$n = \frac{2\times10^5\ \text J}{1\ \text J} = 2\times10^5 \text{ schiaffi},$$

cioè 200 000 schiaffi — un numero completamente assurdo, che spiega bene perché non è davvero un modo pratico per cucinare un pollo!
{% include ex-sol-end.html %}

# Esercizi simili alla verifica

In verifica non vi chiedo quasi mai di applicare una formula e basta: vi racconto una situazione, e tocca a voi capire quale energia si trasforma in quale. Se so quanto in alto salto, so anche con che velocità mi sono staccato da terra, perché l'energia cinetica della partenza è diventata energia potenziale. Se so quanto lavoro è stato compiuto su un corpo, il teorema dell'energia cinetica mi dice che velocità raggiunge.

Davanti a un problema, quindi, vi conviene chiedervi per prima cosa che energia ha il corpo all'inizio e che energia ha alla fine. Poi guardate se qualcuno spinge o se c'è attrito: se non c'è nessuno dei due l'energia meccanica si conserva, altrimenti cambia di una quantità pari al lavoro scambiato. Solo a questo punto scegliete la formula.

Molti di questi esercizi sono proprio quelli delle verifiche di quest'anno, e in fondo trovate tutti quelli per aggiungere punti. Fateli sul quaderno, scrivendo tutti i passaggi. Se vi bloccate aprite l'indizio, e guardate la soluzione solo alla fine. Usate sempre $g=10\ \text{m/s}^2$.

### Le domande di teoria

{% include ex.html diff=1 %}
{% capture _r %}Il lavoro totale compiuto su un corpo da tutte le forze che agiscono su di esso è uguale alla variazione della sua energia cinetica: $L=\Delta K=K_f-K_i$.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-teorema" tipo="spiega" domanda="Enuncia il teorema dell'energia cinetica." risposta=_r %}

{% capture _r %}È positivo se lo spostamento ha lo stesso verso della forza (la forza peso su un oggetto che cade), negativo se ha verso opposto (l'attrito su una slitta che scivola), nullo se è perpendicolare alla forza (la forza peso su un corpo che si muove in orizzontale).{% endcapture %}
{% include risposta-aperta.html id="ra-ver-segno" tipo="spiega" domanda="Quando il lavoro compiuto da una forza è positivo, quando è negativo e quando è nullo? Fai un esempio per ciascun caso." risposta=_r %}

{% capture _r %}La potenza è il rapporto fra il lavoro compiuto e il tempo impiegato a compierlo, $P=L/\Delta t$. Si misura in watt: $1\ \text W=1\ \text{J/s}$.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-potenza" tipo="spiega" domanda="Che cos'è la potenza? Qual è la sua unità di misura, e perché?" risposta=_r %}

{% capture _r %}L'energia meccanica è la somma dell'energia cinetica e dell'energia potenziale, $E=K+U$. Come ogni energia, si misura in joule.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-meccanica" tipo="spiega" domanda="Che cos'è l'energia meccanica di un corpo? In che unità si misura?" risposta=_r %}

{% include spoiler.html testo="Indizio" %}
Per il teorema pensa a che cosa cambia in un corpo su cui viene compiuto un lavoro. Per il segno del lavoro confronta il verso della forza con quello dello spostamento.
{% include spoiler-end.html %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% capture _r %}Un sistema è isolato se non scambia energia con il resto dell'Universo: non si compie lavoro su di esso e non c'è attrito. La sua energia meccanica resta costante, $K_i+U_i=K_f+U_f$: energia cinetica e potenziale si trasformano l'una nell'altra, ma la loro somma non cambia.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-isolato" tipo="spiega" domanda="Che cos'è un sistema isolato? Che cosa succede alla sua energia meccanica?" risposta=_r %}

{% capture _r %}Vale $\Delta E=L$. Se $L>0$ l'energia meccanica aumenta, se $L=0$ resta costante, se $L<0$ diminuisce. Un esempio con $L<0$ è una slitta che scivola sulla neve e rallenta per l'attrito.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-scambio" tipo="spiega" domanda="Un sistema scambia con il resto dell'Universo un lavoro $L$. Come cambia la sua energia meccanica se $L$ è positivo, nullo o negativo? Fai un esempio con $L$ negativo." risposta=_r %}

{% capture _r %}Il calore è l'energia meccanica dissipata, per esempio dall'attrito, e si misura in joule. Quando ti sfreghi le mani, l'attrito compie un lavoro negativo, l'energia cinetica delle mani si dissipa e le mani si scaldano.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-calore" tipo="spiega" domanda="Che cos'è il calore? Qual è la sua unità di misura? Spiega con un esempio da dove nasce." risposta=_r %}

{% capture _r %}Con l'attrito il sistema non è isolato: l'attrito compie un lavoro negativo, e parte dell'energia meccanica si trasforma in calore. L'energia meccanica quindi diminuisce.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-attrito" tipo="spiega" domanda="Perché la conservazione dell'energia meccanica non vale in presenza di attrito?" risposta=_r %}

{% include spoiler.html testo="Indizio" %}
Il punto chiave è sempre lo stesso: l'energia meccanica cambia solo se il sistema scambia lavoro con il resto dell'Universo.
{% include spoiler-end.html %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Vero o falso? Spiega perché.

{% capture _r %}Falso. In $K=\frac12mv^2$ la velocità è al quadrato: se raddoppia, l'energia cinetica diventa quattro volte più grande.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-vf1" tipo="spiega" domanda="Se la velocità di un corpo raddoppia, la sua energia cinetica raddoppia." risposta=_r %}

{% capture _r %}Falso. Se $v$ si dimezza, $K$ diventa un quarto.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-vf2" tipo="spiega" domanda="Se la velocità di un corpo si dimezza, anche la sua energia cinetica si dimezza." risposta=_r %}

{% capture _r %}Vero. Da $mgh=\frac12mv^2$ la massa si semplifica e resta $v=\sqrt{2gh}$, che dipende solo dall'altezza.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-vf3" tipo="spiega" domanda="Lasciati cadere dalla stessa altezza, un sasso di 1 kg e uno di 5 kg arrivano a terra con la stessa velocità (trascura l'aria)." risposta=_r %}

{% capture _r %}Vero. Per il teorema dell'energia cinetica $\Delta K=L<0$: l'energia cinetica diminuisce, quindi diminuisce la velocità.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-vf4" tipo="spiega" domanda="Se il lavoro totale compiuto su un corpo è negativo, il corpo rallenta." risposta=_r %}

{% capture _r %}Vero. L'attrito ha verso opposto al moto, quindi $L=-F\cdot\Delta s$.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-vf5" tipo="spiega" domanda="Il lavoro compiuto dalla forza di attrito su un corpo che scivola è sempre negativo." risposta=_r %}

{% capture _r %}Vero. Se la velocità è costante $\Delta K=0$, quindi $L=0$. Le forze possono compiere lavoro, ma quelli positivi e quelli negativi si compensano: su un'auto a velocità costante il lavoro del motore compensa quello degli attriti.{% endcapture %}
{% include risposta-aperta.html id="ra-ver-vf6" tipo="spiega" domanda="Se un corpo si muove a velocità costante, il lavoro totale delle forze che agiscono su di esso è nullo, anche se su di esso agiscono delle forze." risposta=_r %}

{% include spoiler.html testo="Indizio" %}
Per le prime due guarda a che potenza compare $v$ in $K=\frac12mv^2$. Per le ultime usa il teorema dell'energia cinetica, $L=\Delta K$.
{% include spoiler-end.html %}
{% include ex-end.html %}

### I problemi

{% include ex.html diff=1 %}
Una gru solleva un carico di $200\ \text{kg}$ di $15\ \text m$ in $10\ \text s$.

**(a)** Quanta energia potenziale guadagna il carico?

{% include num.html id="numVerGruU" valore="30000" unit="J" %}

**(b)** Quale potenza sviluppa la gru?

{% include num.html id="numVerGruP" valore="3000" unit="W" %}

{% include spoiler.html testo="Indizio" %}
Il lavoro della gru è proprio l'energia potenziale guadagnata dal carico. La potenza è quel lavoro diviso per il tempo.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $\Delta U_g=mgh=200\ \text{kg}\times10\ \text{m/s}^2\times15\ \text m=30\,000\ \text J$.

**(b)** $P=\dfrac{L}{\Delta t}=\dfrac{30\,000\ \text J}{10\ \text s}=3\,000\ \text W$.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un salmone di $4\ \text{kg}$ risale un fiume e, con un salto, supera una cascata alta $2\ \text m$. Il salto dura $0{,}4\ \text s$.

**(a)** Quanto lavoro compie la forza peso sul salmone?

{% include num.html id="numVerSalL" valore="-80" unit="J" %}

**(b)** Quanta energia potenziale gravitazionale guadagna?

{% include num.html id="numVerSalU" valore="80" unit="J" %}

**(c)** Quale potenza sviluppano i suoi muscoli?

{% include num.html id="numVerSalP" valore="200" unit="W" %}

{% include spoiler.html testo="Indizio" %}
Il salmone sale e la forza peso è diretta verso il basso: che segno ha il suo lavoro? I muscoli devono fornire tutta l'energia potenziale guadagnata.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** Il salmone sale e la forza peso è verso il basso, quindi $L_{\text{peso}}=-mgh=-4\ \text{kg}\times10\ \text{m/s}^2\times2\ \text m=-80\ \text J$.

**(b)** $\Delta U_g=mgh=80\ \text J$: è uguale e opposta al lavoro della forza peso.

**(c)** $P=\dfrac{L}{\Delta t}=\dfrac{80\ \text J}{0{,}4\ \text s}=200\ \text W$.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Uno stambecco di $60\ \text{kg}$ sale lungo un pendio, superando un dislivello di $600\ \text m$ in $20$ minuti.

**(a)** Quanto lavoro compie la forza peso sullo stambecco?

{% include num.html id="numVerStaL" valore="-360000" unit="J" %}

**(b)** Quanta energia potenziale gravitazionale guadagna?

{% include num.html id="numVerStaU" valore="360000" unit="J" %}

**(c)** Quale potenza sviluppano i suoi muscoli?

{% include num.html id="numVerStaP" valore="300" unit="W" %}

{% include spoiler.html testo="Indizio" %}
È come il salmone, ma stai attento al tempo: per avere la potenza in watt, i minuti vanno trasformati in secondi.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $L_{\text{peso}}=-mgh=-60\ \text{kg}\times10\ \text{m/s}^2\times600\ \text m=-360\,000\ \text J$.

**(b)** $\Delta U_g=mgh=360\,000\ \text J$.

**(c)** I muscoli compensano il lavoro della forza peso in $20\times60\ \text s=1\,200\ \text s$:

$$P=\frac{L}{\Delta t}=\frac{360\,000\ \text J}{1\,200\ \text s}=300\ \text W.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Una pompa solleva $600\ \text{kg}$ d'acqua dal fondo di un pozzo profondo $10\ \text m$ fino al bordo, in $2$ minuti. Quale potenza sviluppa la pompa?

{% include num.html id="numVerPompa" valore="500" unit="W" %}

{% include spoiler.html testo="Indizio" %}
Che energia guadagna l'acqua? Il lavoro della pompa serve proprio a darle quell'energia.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Il lavoro della pompa aumenta l'energia potenziale dell'acqua: $L=\Delta U_g=mgh=600\ \text{kg}\times10\ \text{m/s}^2\times10\ \text m=60\,000\ \text J$. In $2$ minuti, cioè $120\ \text s$,

$$P=\frac{L}{\Delta t}=\frac{60\,000\ \text J}{120\ \text s}=500\ \text W.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un'automobile di $1\,000\ \text{kg}$ accelera da $10\ \text{m/s}$ a $20\ \text{m/s}$. Quanto lavoro totale è stato compiuto sull'automobile?

{% include num.html id="numVerAutoAcc" valore="150000" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Non conosci né la forza né lo spostamento, ma conosci le velocità: quale teorema ti collega il lavoro alle velocità?
{% include spoiler-end.html %}

{% include ex-sol.html %}
Per il teorema dell'energia cinetica $L=K_f-K_i$. Le due energie valgono $K_i=\frac12\times1\,000\ \text{kg}\times(10\ \text{m/s})^2=50\,000\ \text J$ e $K_f=\frac12\times1\,000\ \text{kg}\times(20\ \text{m/s})^2=200\,000\ \text J$, quindi $L=150\,000\ \text J$.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un ghepardo di $50\ \text{kg}$ parte da fermo e in $3\ \text s$ raggiunge la velocità di $30\ \text{m/s}$, cioè più di $100\ \text{km/h}$.

**(a)** Quanta energia cinetica ha alla fine dello scatto?

{% include num.html id="numVerGheK" valore="22500" unit="J" %}

**(b)** Quanto lavoro totale è stato compiuto sul ghepardo? Quale teorema usi?

{% include num.html id="numVerGheL" valore="22500" unit="J" %}

**(c)** Quale potenza media hanno sviluppato i suoi muscoli?

{% include num.html id="numVerGheP" valore="7500" unit="W" %}

{% include spoiler.html testo="Indizio" %}
Il ghepardo parte da fermo: quanto vale $K_i$? Da lì il teorema dell'energia cinetica ti dà subito il lavoro.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $K_f=\frac12mv^2=\frac12\times50\ \text{kg}\times(30\ \text{m/s})^2=22\,500\ \text J$.

**(b)** Per il teorema dell'energia cinetica $L=K_f-K_i$, e $K_i=0$ perché parte da fermo: $L=22\,500\ \text J$.

**(c)** $P=\dfrac{L}{\Delta t}=\dfrac{22\,500\ \text J}{3\ \text s}=7\,500\ \text W$.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un carrello di $25\ \text{kg}$ è fermo. Lo spingi con una forza di $40\ \text N$ per $5\ \text m$. Trascura l'attrito.

**(a)** Quanto lavoro compi?

{% include num.html id="numVerCarL" valore="200" unit="J" %}

**(b)** Qual è la velocità finale del carrello?

{% include num.html id="numVerCarV" valore="4" unit="m/s" %}

**(c)** La spinta dura $2{,}5\ \text s$. Quale potenza sviluppi?

{% include num.html id="numVerCarP" valore="80" unit="W" %}

{% include spoiler.html testo="Indizio" %}
Il lavoro che compi diventa tutto energia cinetica del carrello, perché parte da fermo. Conoscendo l'energia cinetica, isola $v$ da $K=\frac12mv^2$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $L=F\cdot\Delta s=40\ \text N\times5\ \text m=200\ \text J$.

**(b)** Per il teorema dell'energia cinetica, partendo da fermo, $K_f=L=200\ \text J$. Quindi

$$v=\sqrt{\frac{2K_f}{m}}=\sqrt{\frac{2\times200\ \text J}{25\ \text{kg}}}=\sqrt{16}\ \text{m/s}=4\ \text{m/s}.$$

**(c)** $P=\dfrac{L}{\Delta t}=\dfrac{200\ \text J}{2{,}5\ \text s}=80\ \text W$.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una pallavolista di $70\ \text{kg}$ salta verso l'alto per andare a muro, e il suo baricentro sale di $0{,}45\ \text m$. Trascura l'aria.

**(a)** Quanta energia potenziale gravitazionale guadagna, arrivata nel punto più alto?

{% include num.html id="numVerPalU" valore="315" unit="J" %}

**(b)** Con che velocità si stacca da terra?

{% include num.html id="numVerPalV" valore="3" unit="m/s" %}

{% include spoiler.html testo="Indizio" %}
Allo stacco ha solo energia cinetica, nel punto più alto solo energia potenziale. Scrivi che le due sono uguali.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $\Delta U_g=mgh=70\ \text{kg}\times10\ \text{m/s}^2\times0{,}45\ \text m=315\ \text J$.

**(b)** Mentre sale, l'energia cinetica si trasforma in energia potenziale, e nel punto più alto è ferma:

$$\frac12mv^2=mgh\quad\Rightarrow\quad v=\sqrt{2gh}=\sqrt{2\times10\ \text{m/s}^2\times0{,}45\ \text m}=\sqrt9\ \text{m/s}=3\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un canguro di $50\ \text{kg}$ spicca un salto verso l'alto e il suo baricentro sale di $1{,}8\ \text m$.

**(a)** Quanta energia potenziale gravitazionale guadagna, arrivato nel punto più alto?

{% include num.html id="numVerCanU" valore="900" unit="J" %}

**(b)** Trascurando l'aria, con che velocità si stacca da terra?

{% include num.html id="numVerCanV" valore="6" unit="m/s" %}

**(c)** La spinta delle zampe dura $0{,}3\ \text s$. Quale potenza media sviluppano i suoi muscoli?

{% include num.html id="numVerCanP" valore="3000" unit="W" %}

{% include spoiler.html testo="Indizio" %}
Per la velocità ragiona come sulla pallavolista. Per la potenza: durante la spinta i muscoli danno al canguro tutta la sua energia cinetica di partenza.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $U_g=mgh=50\ \text{kg}\times10\ \text{m/s}^2\times1{,}8\ \text m=900\ \text J$.

**(b)** L'energia cinetica con cui si stacca diventa tutta energia potenziale nel punto più alto, quindi $v=\sqrt{2gh}=\sqrt{36}\ \text{m/s}=6\ \text{m/s}$. È lo stesso calcolo della velocità di impatto, al contrario.

**(c)** Il lavoro dei muscoli è l'energia cinetica data al canguro durante la spinta, $900\ \text J$: $P=\dfrac{900\ \text J}{0{,}3\ \text s}=3\,000\ \text W$.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Nel curling si lancia sul ghiaccio una pietra di $20\ \text{kg}$. La pietra parte a $3\ \text{m/s}$ e, scivolando, si ferma dopo $30\ \text m$.

**(a)** Quanta energia cinetica ha la pietra alla partenza?

{% include num.html id="numVerCurK" valore="90" unit="J" %}

**(b)** Quanto lavoro compie l'attrito sulla pietra? Che segno ha, e perché?

{% include num.html id="numVerCurL" valore="-90" unit="J" %}

**(c)** Quanto vale la forza di attrito? Dove è finita l'energia cinetica della pietra?

{% include num.html id="numVerCurF" valore="3" unit="N" %}

{% include spoiler.html testo="Indizio" %}
Alla fine la pietra è ferma, quindi $K_f=0$: usa il teorema dell'energia cinetica. Poi dal lavoro e dallo spostamento ricavi la forza.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $K_i=\frac12\times20\ \text{kg}\times(3\ \text{m/s})^2=90\ \text J$.

**(b)** $L=\Delta K=0-90\ \text J=-90\ \text J$. È negativo perché la forza di attrito ha verso opposto allo spostamento.

**(c)** Da $\lvert L\rvert=F\cdot\Delta s$ ricavo $F=\dfrac{90\ \text J}{30\ \text m}=3\ \text N$. L'energia cinetica si è trasformata in calore, che scalda la pietra e il ghiaccio.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un'automobile di $1\,000\ \text{kg}$ viaggia a $20\ \text{m/s}$. Il conducente frena e l'auto si ferma dopo $40\ \text m$.

**(a)** Quanta energia cinetica ha l'auto prima di frenare?

{% include num.html id="numVerAutK" valore="200000" unit="J" %}

**(b)** Quanto lavoro compie la forza frenante sull'auto?

{% include num.html id="numVerAutL" valore="-200000" unit="J" %}

**(c)** Quanto vale, in modulo, la forza frenante? Dove è finita l'energia cinetica dell'auto?

{% include num.html id="numVerAutF" valore="5000" unit="N" %}

{% include spoiler.html testo="Indizio" %}
Si ragiona come sulla pietra da curling: l'auto alla fine è ferma, quindi tutta l'energia cinetica è stata tolta dal lavoro della forza frenante.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $K_i=\frac12\times1\,000\ \text{kg}\times(20\ \text{m/s})^2=200\,000\ \text J$.

**(b)** Alla fine $K_f=0$, quindi $L=K_f-K_i=-200\,000\ \text J$.

**(c)** $F=\dfrac{\lvert L\rvert}{\Delta s}=\dfrac{200\,000\ \text J}{40\ \text m}=5\,000\ \text N$. L'energia cinetica si è trasformata in calore: i freni e le gomme si scaldano.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un ragazzo trascina su un prato innevato, in orizzontale, uno slittino di $8\ \text{kg}$, inizialmente fermo, tirandolo con una forza di $50\ \text N$ parallela al terreno per $20\ \text m$. Fra lo slittino e la neve agisce una forza di attrito di $30\ \text N$.

**(a)** Quanto lavoro compie il ragazzo? E la forza di attrito?

{% include num.html id="numVerSliLR" valore="1000" unit="J" %}
{% include num.html id="numVerSliLA" valore="-600" unit="J" %}

**(b)** Quanto vale il lavoro totale compiuto sullo slittino?

{% include num.html id="numVerSliL" valore="400" unit="J" %}

**(c)** Con che velocità si muove lo slittino alla fine dei $20\ \text m$?

{% include num.html id="numVerSliV" valore="10" unit="m/s" %}

{% include spoiler.html testo="Indizio" %}
Nel teorema dell'energia cinetica conta il lavoro totale, non solo quello del ragazzo. Lo slittino parte da fermo, quindi quel lavoro diventa tutto energia cinetica.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $L_{\text{ragazzo}}=50\ \text N\times20\ \text m=1\,000\ \text J$ e $L_{\text{attrito}}=-30\ \text N\times20\ \text m=-600\ \text J$.

**(b)** $L=1\,000\ \text J-600\ \text J=400\ \text J$. La forza peso e la reazione del terreno sono perpendicolari allo spostamento e non compiono lavoro.

**(c)** Partendo da fermo, $L=K_f=\frac12mv^2$:

$$v=\sqrt{\frac{2L}{m}}=\sqrt{\frac{2\times400\ \text J}{8\ \text{kg}}}=\sqrt{100}\ \text{m/s}=10\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un sasso di $2\ \text{kg}$ cade da fermo da una rupe alta $20\ \text m$. Trascura l'aria.

**(a)** Quanto vale la sua energia potenziale in cima?

{% include num.html id="numVerSasU" valore="400" unit="J" %}

**(b)** Con che velocità arriva a terra?

{% include num.html id="numVerSasV" valore="20" unit="m/s" %}

**(c)** A metà altezza, quanto valgono la sua energia cinetica e la sua energia potenziale?

{% include num.html id="numVerSasK2" valore="200" unit="J" %}
{% include num.html id="numVerSasU2" valore="200" unit="J" %}

{% include spoiler.html testo="Indizio" %}
L'energia meccanica resta sempre quella che aveva in cima. A qualunque altezza, l'energia cinetica è quello che manca all'energia potenziale per arrivare al totale.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $U_g=mgh=2\ \text{kg}\times10\ \text{m/s}^2\times20\ \text m=400\ \text J$.

**(b)** $v=\sqrt{2gh}=\sqrt{400}\ \text{m/s}=20\ \text{m/s}$.

**(c)** A metà altezza $U_g=200\ \text J$. L'energia meccanica si conserva e resta $400\ \text J$, quindi $K=400\ \text J-200\ \text J=200\ \text J$.
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una pigna di $0{,}5\ \text{kg}$ si stacca da un pino, a $20\ \text m$ di altezza. Trascura l'aria.

**(a)** Quanta energia potenziale gravitazionale ha all'inizio?

{% include num.html id="numVerPigU" valore="100" unit="J" %}

**(b)** Con che velocità arriva a terra?

{% include num.html id="numVerPigV" valore="20" unit="m/s" %}

**(c)** Quanto valgono la sua energia cinetica e la sua energia potenziale quando si trova a $5\ \text m$ da terra?

{% include num.html id="numVerPigK" valore="75" unit="J" %}
{% include num.html id="numVerPigU2" valore="25" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Per la (c) calcola prima $U_g$ a $5\ \text m$ da terra. L'energia meccanica si conserva, quindi $K=E-U_g$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $U_g=mgh=0{,}5\ \text{kg}\times10\ \text{m/s}^2\times20\ \text m=100\ \text J$.

**(b)** $v=\sqrt{2gh}=\sqrt{400}\ \text{m/s}=20\ \text{m/s}$.

**(c)** A $5\ \text m$ da terra $U_g=0{,}5\ \text{kg}\times10\ \text{m/s}^2\times5\ \text m=25\ \text J$. L'energia meccanica resta $100\ \text J$, quindi $K=100\ \text J-25\ \text J=75\ \text J$.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Un pinguino di $20\ \text{kg}$ si lascia scivolare a pancia in giù lungo un pendio ghiacciato, partendo da fermo da un'altezza di $3{,}2\ \text m$.

**(a)** Quanta energia potenziale gravitazionale ha in cima al pendio?

{% include num.html id="numVerPinU" valore="640" unit="J" %}

**(b)** Se non ci fosse attrito, con che velocità arriverebbe in fondo?

{% include num.html id="numVerPinV" valore="8" unit="m/s" %}

**(c)** In realtà arriva in fondo a $6\ \text{m/s}$. Quanta energia meccanica ha perso? Quanto lavoro ha compiuto l'attrito, e dove è finita l'energia persa?

{% include num.html id="numVerPinE" valore="280" unit="J" %}
{% include num.html id="numVerPinL" valore="-280" unit="J" %}

{% include spoiler.html testo="Indizio" %}
In cima ha solo $U_g$, in fondo solo $K$. L'energia persa è la differenza fra quello che aveva in cima e quello che ha davvero in fondo.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $U_g=mgh=20\ \text{kg}\times10\ \text{m/s}^2\times3{,}2\ \text m=640\ \text J$.

**(b)** $v=\sqrt{2gh}=\sqrt{64}\ \text{m/s}=8\ \text{m/s}$.

**(c)** In fondo l'energia è tutta cinetica: $K_f=\frac12\times20\ \text{kg}\times(6\ \text{m/s})^2=360\ \text J$. Il pinguino ha perso $640\ \text J-360\ \text J=280\ \text J$. Per $\Delta E=L$ l'attrito ha compiuto un lavoro $L=-280\ \text J$, e quell'energia è diventata calore, che scalda la pancia del pinguino e il ghiaccio.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Uno sciatore di $60\ \text{kg}$ parte da fermo e scende lungo una pista, superando un dislivello di $20\ \text m$. In fondo alla pista viaggia a $10\ \text{m/s}$.

**(a)** Se non ci fosse attrito, con che velocità arriverebbe in fondo?

{% include num.html id="numVerSciV" valore="20" unit="m/s" %}

**(b)** Quanta energia meccanica ha perso? Dove è finita?

{% include num.html id="numVerSciE" valore="9000" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Attenzione: la velocità è la metà di quella ideale, ma l'energia cinetica non è la metà. Calcola $U_g$ in cima e $K$ in fondo, poi fai la differenza.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $v=\sqrt{2gh}=\sqrt{400}\ \text{m/s}=20\ \text{m/s}$.

**(b)** In cima $U_g=60\ \text{kg}\times10\ \text{m/s}^2\times20\ \text m=12\,000\ \text J$, in fondo $K_f=\frac12\times60\ \text{kg}\times(10\ \text{m/s})^2=3\,000\ \text J$. Ha perso $9\,000\ \text J$, cioè i tre quarti della sua energia, diventati calore che scalda gli sci e la neve.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Una goccia di pioggia di $0{,}05\ \text g$ si stacca da una nuvola a $2\,000\ \text m$ di altezza.

**(a)** Qual è la sua energia potenziale?

{% include num.html id="numVerGocU" valore="1" unit="J" %}

**(b)** Se non ci fosse l'aria, con che velocità arriverebbe a terra?

{% include num.html id="numVerGocV" valore="200" unit="m/s" %}

**(c)** In realtà tocca terra a circa $10\ \text{m/s}$. Quanta energia meccanica ha perso durante la caduta? Dove è finita?

{% include num.html id="numVerGocE" valore="1" unit="J" %}

{% include spoiler.html testo="Indizio" %}
La massa va in chilogrammi. Nella (c) calcola l'energia cinetica con cui arriva davvero a terra: vedrai che è quasi niente rispetto a quella di partenza.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** Con $m=0{,}05\ \text g=5\times10^{-5}\ \text{kg}$, $U=mgh=5\times10^{-5}\ \text{kg}\times10\ \text{m/s}^2\times2\,000\ \text m=1\ \text J$.

**(b)** Senza aria $v=\sqrt{2gh}=\sqrt{40\,000}\ \text{m/s}=200\ \text{m/s}$, cioè circa $720\ \text{km/h}$.

**(c)** $K_f=\frac12\times5\times10^{-5}\ \text{kg}\times(10\ \text{m/s})^2=0{,}0025\ \text J$, quindi ha perso $0{,}9975\ \text J$, quasi tutta l'energia. La resistenza dell'aria l'ha dissipata in calore, che scalda di pochissimo l'aria e la goccia.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Un chicco di grandine di $2\ \text g$ si forma in una nuvola a $4\,500\ \text m$ di altezza e cade.

**(a)** Se non ci fosse l'aria, con che velocità arriverebbe a terra?

{% include num.html id="numVerGraV" valore="300" unit="m/s" %}

**(b)** In realtà tocca terra a circa $20\ \text{m/s}$. Quanta energia meccanica ha perso durante la caduta? Dove è finita?

{% include num.html id="numVerGraE" valore="89.6" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Per la (a) la massa non serve. Per la (b) sì: trasformala in chilogrammi, poi confronta $U_g$ in alto con $K$ a terra.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $v=\sqrt{2gh}=\sqrt{2\times10\ \text{m/s}^2\times4\,500\ \text m}=\sqrt{90\,000}\ \text{m/s}=300\ \text{m/s}$, circa $1\,080\ \text{km/h}$.

**(b)** Con $m=2\times10^{-3}\ \text{kg}$, $U_i=mgh=90\ \text J$ e $K_f=\frac12\times2\times10^{-3}\ \text{kg}\times(20\ \text{m/s})^2=0{,}4\ \text J$. Ha perso $89{,}6\ \text J$: la resistenza dell'aria li ha trasformati in calore, che scalda l'aria e il chicco stesso.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Un ciclista, che insieme alla bicicletta ha una massa di $80\ \text{kg}$, sale lungo un passo di montagna superando un dislivello di $1\,000\ \text m$ in $40$ minuti.

**(a)** Quanta energia potenziale gravitazionale guadagna il sistema ciclista-bicicletta?

{% include num.html id="numVerCicU" valore="800000" unit="J" %}

**(b)** Quale potenza media devono sviluppare, come minimo, le gambe del ciclista?

{% include num.html id="numVerCicP" valore="333" tol="2" unit="W" %}

**(c)** Una barretta energetica fornisce $1{,}0\times10^6\ \text J$, ma il corpo umano riesce a trasformare in lavoro dei muscoli solo il $25\%$ dell'energia del cibo. Quante barrette deve mangiare, come minimo, il ciclista per fare la salita?

{% include num.html id="numVerCicB" valore="4" tol="0" unit="barrette" %}

{% include spoiler.html testo="Indizio" %}
Per la (c) trova prima quanta energia utile dà ai muscoli una barretta. Poi attento: le barrette si mangiano intere.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $\Delta U_g=mgh=80\ \text{kg}\times10\ \text{m/s}^2\times1\,000\ \text m=800\,000\ \text J$.

**(b)** In $40\times60\ \text s=2\,400\ \text s$: $P=\dfrac{800\,000\ \text J}{2\,400\ \text s}\approx333\ \text W$.

**(c)** Ogni barretta dà ai muscoli $0{,}25\times1{,}0\times10^6\ \text J=250\,000\ \text J$. Ne servono $\dfrac{800\,000\ \text J}{250\,000\ \text J}=3{,}2$, quindi almeno $4$ barrette.
{% include ex-sol-end.html %}

### Per aggiungere punti

{% include ex.html diff=3 %}
Un vaso di $2\ \text{kg}$ cade da un balcone alto $5\ \text m$ e arriva a terra a $8\ \text{m/s}$. Quanta energia si è trasformata in calore?

{% include num.html id="numBonVaso" valore="36" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Il calore è l'energia meccanica che manca all'appello: confronta l'energia in cima con quella a terra.
{% include spoiler-end.html %}

{% include ex-sol.html %}
In cima $U_g=2\ \text{kg}\times10\ \text{m/s}^2\times5\ \text m=100\ \text J$, a terra $K_f=\frac12\times2\ \text{kg}\times(8\ \text{m/s})^2=64\ \text J$. Il calore è $Q=100\ \text J-64\ \text J=36\ \text J$.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Una palla di $0{,}5\ \text{kg}$ viene lasciata cadere da $2\ \text m$ e rimbalza fino a $1{,}5\ \text m$. Quanta energia si è trasformata in calore nel rimbalzo?

{% include num.html id="numBonPalla" valore="2.5" unit="J" %}

{% include spoiler.html testo="Indizio" %}
Nei due punti più alti la palla è ferma, quindi la sua energia è tutta potenziale. Quanto è diminuita?
{% include spoiler-end.html %}

{% include ex-sol.html %}
$Q=mg(h_i-h_f)=0{,}5\ \text{kg}\times10\ \text{m/s}^2\times0{,}5\ \text m=2{,}5\ \text J$.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Dal balcone di un palazzo, a $15\ \text m$ di altezza, lanci due palline identiche, entrambe a $10\ \text{m/s}$: una verso l'alto e una verso il basso. Trascurando l'aria, quale delle due arriva a terra con la velocità maggiore? Calcola la velocità con cui arriva ciascuna.

{% include num.html id="numBonBalcone" valore="20" unit="m/s" %}

{% include spoiler.html testo="Indizio" %}
Il verso del lancio compare nella formula dell'energia cinetica? Confronta l'energia meccanica delle due palline alla partenza.
{% include spoiler-end.html %}

{% include ex-sol.html %}
Arrivano con la stessa velocità. Partono con la stessa energia cinetica, perché $K$ dipende solo dal modulo della velocità, e con la stessa energia potenziale. L'energia meccanica si conserva, quindi a terra è la stessa:

$$\frac12mv_f^2=\frac12mv_0^2+mgh\quad\Rightarrow\quad v_f=\sqrt{v_0^2+2gh}=\sqrt{100+300}\ \text{m/s}=20\ \text{m/s}.$$

Cambia soltanto il tempo che impiegano ad arrivare: la pallina lanciata verso l'alto sale, si ferma e ripassa davanti al balcone a $10\ \text{m/s}$ verso il basso, e da lì si muove esattamente come l'altra.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Un'automobile di $1\,000\ \text{kg}$ viaggia a $108\ \text{km/h}$.

**(a)** Quanta energia cinetica possiede?

{% include num.html id="numBonAutoK" valore="450000" unit="J" %}

**(b)** Da che altezza dovrebbe cadere la stessa automobile per arrivare a terra con la stessa energia?

{% include num.html id="numBonAutoH" valore="45" unit="m" %}

**(c)** A quanti piani di un palazzo corrisponde, se ogni piano è alto $3\ \text m$?

{% include num.html id="numBonAutoP" valore="15" unit="piani" %}

{% include spoiler.html testo="Indizio" %}
Trasforma prima la velocità in m/s, dividendo per $3{,}6$. Poi cerchi l'altezza per cui $mgh$ è uguale a quell'energia cinetica.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $108\ \text{km/h}=30\ \text{m/s}$, quindi $K=\frac12\times1\,000\ \text{kg}\times(30\ \text{m/s})^2=450\,000\ \text J$.

**(b)** Da $mgh=K$ ricavo $h=\dfrac{K}{mg}=\dfrac{450\,000\ \text J}{1\,000\ \text{kg}\times10\ \text{m/s}^2}=45\ \text m$.

**(c)** $45\ \text m$ sono $15$ piani. La massa non conta, perché $h=v^2/2g$: conta la velocità, che compare al quadrato.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Nel salto con l'asta l'atleta arriva in fondo alla rincorsa a circa $10\ \text{m/s}$, e l'asta trasforma la sua energia cinetica in energia potenziale gravitazionale. Di quanto può salire, al massimo, il suo baricentro?

{% include num.html id="numBonAsta" valore="5" unit="m" %}

{% capture _r %}Il baricentro di un atleta in piedi è già a circa $1\ \text m$ da terra, quindi può arrivare a circa $6\ \text m$: la stima è compatibile con il record. Ho trascurato per esempio il lavoro che l'atleta compie con le braccia spingendo sull'asta, che aggiunge energia, e la velocità orizzontale che deve conservare per superare l'asticella.{% endcapture %}
{% include risposta-aperta.html id="ra-bon-asta" tipo="spiega" domanda="Il record del mondo è di poco superiore a 6 m: è compatibile con la tua stima? Che cosa hai trascurato?" risposta=_r %}

{% include spoiler.html testo="Indizio" %}
È il salto di prima: $\frac12mv^2=mgh$, e la massa si semplifica. Per il confronto col record, pensa a quanto è alto il baricentro di una persona già prima di saltare.
{% include spoiler-end.html %}

{% include ex-sol.html %}
$\frac12mv^2=mg\,\Delta h$, quindi $\Delta h=\dfrac{v^2}{2g}=\dfrac{100}{20}\ \text m=5\ \text m$.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Lasci cadere una pallina da $1\ \text m$. A ogni rimbalzo perde sempre la stessa percentuale della sua energia: dopo il primo rimbalzo risale a $80\ \text{cm}$.

**(a)** Che percentuale di energia perde a ogni rimbalzo?

{% include num.html id="numBonRimP" valore="20" unit="%" %}

**(b)** Dopo quanti rimbalzi risale per la prima volta a meno di $50\ \text{cm}$?

{% include num.html id="numBonRimN" valore="4" tol="0" unit="rimbalzi" %}

{% include spoiler.html testo="Indizio" %}
Nel punto più alto l'energia è tutta potenziale, quindi è proporzionale all'altezza. La massa non serve. A ogni rimbalzo l'altezza si moltiplica sempre per lo stesso numero.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $U_g=mgh$ è proporzionale all'altezza. Se l'altezza passa da $100\ \text{cm}$ a $80\ \text{cm}$, la pallina conserva l'$80\%$ della sua energia e ne perde il $20\%$.

**(b)** A ogni rimbalzo l'altezza si moltiplica per $0{,}8$: $100\to80\to64\to51{,}2\to40{,}96\ \text{cm}$. Scende sotto $50\ \text{cm}$ per la prima volta dopo il quarto rimbalzo.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
L'asteroide che 66 milioni di anni fa colpì la Terra, contribuendo all'estinzione dei dinosauri, aveva una massa di circa $10^{15}\ \text{kg}$ e viaggiava a circa $20\ \text{km/s}$.

**(a)** Quanta energia cinetica aveva?

{% include sci.html prima="$K=$" coeff="2" exp="23" s="$2\times10^{23}\ \text J$" %}

**(b)** La bomba di Hiroshima liberò circa $6\times10^{13}\ \text J$. A quante bombe corrisponde, più o meno, l'impatto?

{% include sci.html prima="Bombe $=$" coeff="3.33" exp="9" tol=12 s="circa $3\times10^{9}$" %}

**(c)** Se l'asteroide avesse avuto massa doppia ma velocità dimezzata, l'impatto come sarebbe stato?

{% capture _oBonAst %}[{"v":"a","t":"Uguale: massa doppia e velocità metà si compensano"},{"v":"b","t":"Meno violento, con metà dell'energia"},{"v":"c","t":"Più violento, con il doppio dell'energia"},{"v":"d","t":"Meno violento, con un quarto dell'energia"}]{% endcapture %}
{% include mcq.html id="mcq-bon-asteroide" opts=_oBonAst ok="b" s="$K'=\frac12(2m)\left(\frac v2\right)^2=\frac12\cdot\frac12mv^2=\frac K2$. La velocità conta più della massa, perché compare al quadrato." %}

{% include spoiler.html testo="Indizio" %}
La velocità va in m/s: $20\ \text{km/s}=2\times10^4\ \text{m/s}$. Nella (c) sostituisci $2m$ e $v/2$ nella formula di $K$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
**(a)** $K=\frac12mv^2=\frac12\times10^{15}\ \text{kg}\times(2\times10^4\ \text{m/s})^2=2\times10^{23}\ \text J$.

**(b)** $\dfrac{2\times10^{23}\ \text J}{6\times10^{13}\ \text J}\approx3\times10^{9}$: circa tre miliardi di bombe di Hiroshima.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Un muscolo, contraendosi, può compiere un lavoro di circa $100\ \text J$ per ogni chilogrammo di muscolo, e negli animali i muscoli delle zampe costituiscono circa un decimo della massa del corpo. Secondo questo modello, quanto in alto può saltare un uomo di $70\ \text{kg}$? E una pulce di $1\ \text{mg}$?

{% include num.html id="numBonUomo" valore="1" unit="m" %}
{% include num.html id="numBonPulce" valore="1" unit="m" %}

{% capture _r %}Secondo il modello saltano alla stessa altezza, perché la massa si semplifica. Come ordine di grandezza è quello che si osserva: pulci, cavallette, gatti e persone saltano tutti fra qualche decina di centimetri e un metro, pur avendo masse molto diverse.{% endcapture %}
{% include risposta-aperta.html id="ra-bon-pulce" tipo="spiega" domanda="Che cosa ne concludi?" risposta=_r %}

{% include spoiler.html testo="Indizio" %}
Scrivi il lavoro dei muscoli per una massa generica $m$: i muscoli pesano $m/10$. Poi uguaglialo a $mgh$ e guarda che fine fa $m$.
{% include spoiler-end.html %}

{% include ex-sol.html %}
I muscoli delle zampe hanno massa $m/10$, quindi compiono un lavoro $L=\dfrac{m}{10}\times100\ \text{J/kg}=m\times10\ \text{J/kg}$. Questo lavoro diventa energia potenziale, $L=mgh$:

$$h=\frac{L}{mg}=\frac{m\times10\ \text{J/kg}}{m\times10\ \text{m/s}^2}=1\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Ogni secondo, dalle cascate del Niagara precipitano circa $2\,000\ \text m^3$ d'acqua (un metro cubo d'acqua ha una massa di $1\,000\ \text{kg}$), che cadono per circa $50\ \text m$. Se tutta questa energia si potesse trasformare in energia elettrica, quante case si potrebbero alimentare, sapendo che una casa usa in media una potenza di $1\ \text{kW}$?

{% include sci.html prima="Case $=$" coeff="1" exp="6" s="circa $10^{6}$" %}

{% capture _r %}L'energia cinetica dell'acqua si dissipa negli urti contro le rocce e contro l'acqua in fondo, e diventa calore: l'acqua in fondo alla cascata è un pochino più calda di quella in cima.{% endcapture %}
{% include risposta-aperta.html id="ra-bon-niagara" tipo="spiega" domanda="E quando nessuno la sfrutta, che fine fa l'energia dell'acqua che arriva in fondo alla cascata?" risposta=_r %}

{% include spoiler.html testo="Indizio" %}
Calcola quanta energia potenziale perde in un secondo l'acqua che cade: l'energia in un secondo è proprio la potenza.
{% include spoiler-end.html %}

{% include ex-sol.html %}
In un secondo cade una massa $m=2\,000\times1\,000\ \text{kg}=2\times10^6\ \text{kg}$, che perde l'energia potenziale

$$U_g=mgh=2\times10^6\ \text{kg}\times10\ \text{m/s}^2\times50\ \text m=10^9\ \text J.$$

Questa energia si libera ogni secondo, quindi la potenza è $10^9\ \text W$, e le case sono $\dfrac{10^9\ \text W}{10^3\ \text W}=10^6$, cioè circa un milione.
{% include ex-sol-end.html %}
