---
layout: capitolo
title: "Le Grandezze Unitarie e la Variazione"
corso: "introduzione-alla-fisica"
corso_titolo: "Introduzione alla Fisica"
materia: fisica
numero: 3
---

<cit autore="Eraclito">Non è possibile che un uomo si immerga due volte nello stesso fiume, perché non sarà più lo stesso fiume, né sarà più lo stesso uomo.</cit> 

In questo capitolo impariamo a osservare un fenomeno fino a essere in grado di descriverlo **con una formula matematica**. Impariamo cioè a *creare*, *interpretare* e *gestire* le formule della Fisica. Infine,
impareremo anche a **descrivere** il cambiamento di tutto ciò che ci circonda, e ad esprimerlo a livello delle equazioni.

# Le Grandezze Unitarie

Cosa intendiamo quando diciamo che *l'oro costa più della carta*? A pensarci bene, la frase nasconde un piccolo paradosso: un blocco di fogli A4 per la stampante costa circa $4$ euro, mentre un milligrammo d'oro ne costa solo circa $0{,}11$. Un intero blocco di fogli costa dunque **più** di un milligrammo d'oro. Eppure tutti sappiamo, senza esitare, che è l'oro la sostanza più preziosa. Come si concilia questo con i numeri che abbiamo appena scritto?


Il problema è che stiamo confrontando **quantità diverse** di due sostanze diverse: un intero blocco di carta, che pesa centinaia di grammi, contro un singolo, minuscolo milligrammo d'oro. Per confrontare correttamente i due prezzi dobbiamo considerare *la stessa quantità* delle due sostanze — ad esempio, quanto costa **un grammo** di ciascuna.

{% include box-blue.html testo="Rendere onesto il confronto" %}

Un milligrammo d'oro costa circa $0{,}11$ €, quindi un grammo (mille volte tanto) costa circa

$$0{,}11 \times 1000 = 110 \ \text{€/g}.$$

Un blocco di fogli A4 pesa circa $2{,}5$ kg $=2500$ g e costa $4$ €, quindi un grammo di carta costa circa

$$\frac{4}{2500} \approx 0{,}0016 \ \text{€/g}.$$

Un grammo d'oro costa dunque circa $70\,000$ volte più di un grammo di carta: ecco perché diciamo che l'oro "costa di più".

{% include box-end.html %}

In entrambi i casi abbiamo fatto la stessa operazione: abbiamo diviso **il costo totale** per **la quantità di materia** a cui si riferisce, ottenendo *il costo di un'unità* di quella sostanza (un grammo). Una grandezza del genere, cioè che esprime il rapporto tra una grandezza e una unità di un'altra grandezza, si chiama <definizione>grandezza unitaria</definizione>.

{% include box-imp.html testo="Grandezza unitaria" %}

Le grandezze unitarie, in generale, si esprimono attraverso **il rapporto** tra due grandezze (ad esempio €/g, kg/m³, km/h, etc.):

$$
\text{grandezza unitaria} = \frac{\text{grandezza 1}}{\text{grandezza 2}}$$

{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: è una **grandezza unitaria** oppure no?

{% capture _q %}[
{"t":"La densità di popolazione (abitanti/km²)","ok":true,"s":"È il numero di abitanti per ogni chilometro quadrato: una grandezza unitaria."},
{"t":"Lo stipendio orario (€/h)","ok":true,"s":"È il guadagno per ogni ora lavorata: una grandezza unitaria."},
{"t":"Il costo totale della spesa","ok":false,"s":"È una grandezza totale, non un rapporto: non dice nulla su 'per ogni unità di cosa'."},
{"t":"Il prezzo al chilo delle mele (€/kg)","ok":true,"s":"È un rapporto tra costo totale e massa: è una grandezza unitaria."},
{"t":"La popolazione di una città","ok":false,"s":"È un numero totale di persone, non un rapporto tra due grandezze."},
{"t":"Il numero totale di pagine di un libro","ok":false,"s":"Non è un rapporto tra due grandezze, è solo un conteggio totale."},
{"t":"Il consumo di carburante di un'automobile (km/L)","ok":true,"s":"È lo spazio percorso per ogni litro di carburante: una grandezza unitaria."}
]{% endcapture %}
{% include quiz.html domande=_q label_si="Una grandezza unitaria" label_no="Non una grandezza unitaria" id="q-gu" %}

{% include box-end.html %}






{% include box-ex.html testo="Esercizio — Il riso più conveniente" %}

In un negozio trovi due confezioni di riso. Clicca sulla confezione che conviene di più.

{% include lab-virtuali/riso-conveniente-lab.html %}

{% include spoiler.html testo="Mostra la soluzione" %}
La grandezza unitaria adatta è il **costo al chilo**:

$$c = \frac{\text{costo}}{\text{massa}}.$$

Per la confezione A: $c_A = \dfrac{6}{3} = 2\ \text{€/kg}$. Per la confezione B: $c_B = \dfrac{8}{5} = 1{,}6\ \text{€/kg}$.

Poiché $c_B < c_A$, la confezione B conviene di più: a parità di quantità, costa meno.
{% include spoiler-end.html %}

{% include box-end.html %}

{% include box-ex.html testo="Esercizio — Chi guadagna di più?" %}

Un altro caso in cui bisogna fare attenzione a confrontare le grandezze nella stessa unità: gli stipendi. Anna lavora con uno stipendio di $1400$ €/mese, e a dicembre riceve anche la <definizione>tredicesima</definizione> — una mensilità extra (se non sai cosa sia, [leggi qui](https://it.wikipedia.org/wiki/Tredicesima_mensilit%C3%A0)). Bruno guadagna invece $18\,000$ € all'anno, tutto compreso. Chi dei due, alla fine dell'anno, ha guadagnato di più? Clicca sulla persona che pensi guadagni di più.

{% include lab-virtuali/chi-guadagna-di-piu-lab.html %}

{% include spoiler.html testo="Mostra la soluzione" %}
Bisogna confrontare le due grandezze nella stessa unità: il totale guadagnato in un anno.

Bruno guadagna semplicemente $18\,000$ €/anno.

Anna guadagna $1\,400$ €/mese, ma con la tredicesima riceve in realtà **13** mensilità in un anno (non 12):

$$1\,400 \times 13 = 18\,200 \ \text{€/anno}.$$

Poiché $18\,200 > 18\,000$, è Anna a guadagnare di più — anche se di poco: circa **200 €** l'anno, poco più dell'1%.
{% include spoiler-end.html %}

{% include box-end.html %}

Prima di proseguire, fissiamo le idee su cosa sia una grandezza unitaria.

{% include frayer.html id="frayer-gu" termine="Grandezza unitaria" %}
 

## Proporzionalità diretta e proporzionalità inversa

C'è una caratteristica, che è comune a tutte le grandezze unitarie e che è fondamentale. Ci accompagnerà fino alla fine della quinta. 

Considera l'esempio del prezzo al chilo del riso, che è dato dalla formula

$$
\text{prezzo al chilo} = \frac{\text{prezzo totale}}{\text{numero di chili}}.
$$

Notiamo che *se aumentiamo il numeratore* (cioè il prezzo totale) *senza cambiare il denominatore* (ovvero il numero di chili), allora il prezzo al chilo aumenta.

Al contrario, *se aumentiamo il denominatore* (cioè il numero di chili) *senza cambiare il numeratore* (ovvero il prezzo totale), allora il prezzo al chilo diminuisce.

Questa cosa vale in generale, per ogni formula della fisica.

{% include lab-virtuali/proporzionalita-diagramma-lab.html %}

{% include box-imp.html testo="Proporzionalità diretta e Proporzionalità inversa" %}
In una formula del tipo 

$$
x = \frac y z,
$$

con $y$ e $z$ positivi, la due grandezze $x$ e $y$ si dicono <definizione>direttamente proporzionali</definizione>, in quanto se $y$ aumenta e $z$ rimane costante allora $x$ aumenta. Al contrario, le due grandezze $x$ e $z$ si dicono <definizione>inversamente proporzionali</definizione>, in quanto se $z$ aumenta e $y$ rimane fissato allora $x$ diminuisce.

{% include box-end.html %}
 
{% include box-blue.html testo="Un esempio da ricordare" %}
La definizione di grandezze direttamente proporzionali e inversamente proporzionali può essere ricordata con un esempio che conosci benissimo: dividere una pizza tra amici. Chiaramente, dato un certo numero di fette di pizza e un certo numero di amici, se si divide equamente risulte che il numero di fette a testa è dato da

$$
\text{fette a testa} = \frac{\text{fette totali}}{\text{numero di amici}}.
$$

Adesso pensa ad aumentare le fette totali e il numero di amici, **uno alla volta**.
- Se la pizza ha più fette, **a parità di amici**, ognuno ne mangia di più: **fette totali e fette a testa sono direttamente proporzionali**.
- Se invitate più amici, **a parità di fette**, ognuno ne mangia di meno: **numero di amici e fette a testa sono inversamente proporzionali**.

Ogni volta che incontri una formula del tipo $x = \frac yz$, pensa alla pizza: il **numeratore si comporta come le fette totali** — cresce e $x$ cresce con lui — mentre il **denominatore si comporta come gli amici a tavola** — cresce e $x$ diminuisce.
{% include box-end.html %}

{% include lab-virtuali/pizza-proporzionalita-lab.html %}

{% include box-ex.html testo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q2 %}[
{"t":"Se $x = y/z$, allora $x$ e $z$ sono direttamente proporzionali.","ok":false,"s":"No: se $z$ cresce (a $y$ fisso) $x$ diminuisce — sono inversamente proporzionali."},
{"t":"Le fette di pizza a testa sono direttamente proporzionali al numero di fette totali, a parità di amici.","ok":true,"s":"Più fette ci sono, a parità di amici, più ne tocca a ciascuno."},
{"t":"Se $x = y/z$, allora $x$ e $y$ sono direttamente proporzionali.","ok":true,"s":"Sì: se $y$ cresce (a $z$ fisso) anche $x$ cresce."},
{"t":"Le fette di pizza a testa sono direttamente proporzionali al numero di amici, a parità di fette totali.","ok":false,"s":"Al contrario: più amici ci sono, meno fette toccano a testa — sono inversamente proporzionali."},
{"t":"In una divisione, se il denominatore aumenta e il numeratore resta fisso, il risultato aumenta. ","ok":false,"s":"Il risultato diminuisce: il denominatore è inversamente proporzionale al risultato.","h":"<em>Indizio:</em> prova a scrivere una qualsiasi frazione con numeratore e denominatore entrambi positivi e calcolane il risultato in forma decimale, poi aumenta il denominatore e calcola il risultato di nuovo."},
{"t":"Il prezzo al chilo è direttamente proporzionale al prezzo totale, a parità di chili acquistati.","ok":true,"s":"Prezzo al chilo = prezzo totale ÷ chili: a chili fissi, più spendi più costa al chilo."}
]{% endcapture %}
{% include quiz.html domande=_q2 label_si="Un esempio di grandezze direttamente proporzionali" label_no="Un esempio di grandezze inversamente proporzionali" id="q-prop" %}

{% include box-end.html %}

## Trovare le unità di misura a partire dalla formula

L'unità di misura di una grandezza unitaria può essere trovata facilmente a partire dalle unità di misura del numeratore e del denominatore.

{% include box-imp.html testo="Trovare l'unità di misura" %}

Per trovare l'unità di misura di una grandezza $x$ di cui conosciamo la formula, basta rimpiazzare ciascuna grandezza con la rispettiva unità di misura. Indichiamo l'unità di misura di $x$ con $[x]$ (si legge "unità di $x$"). Allora,
- se $x=\frac y z$ allora 

$$[x] = \frac{[y]}{[z]};$$

- se $x = y\cdot z$ allora 

$$[x] = [y] \times [z].$$

{% include box-end.html %}

{% include box-blue.html testo="La densità" %}
Nel laboratorio hai calcolato la densità di un oggetto con la formula

$$d = \frac{m}{V}.$$

La massa $m$ si misura in chilogrammi (kg), il volume $V$ in metri cubi (m³). Sostituendo le unità al posto dei simboli, esattamente come nella formula,

$$[d] = \frac{\text{kg}}{\text{m}^3},$$

cioè la densità si misura in kg/m³ (o, in unità pratiche, g/cm³ o g/L).
{% include box-end.html %}

{% include box-blue.html testo="L'area e il volume" %}
Il caso del prodotto funziona allo stesso modo. L'area $A$ di un rettangolo è definita come il prodotto di due lunghezze,

$$A = b \cdot h,$$

dove $b$ e $h$ (base e altezza) si misurano entrambe in metri (m). Sostituendo le unità al posto dei simboli,

$$[A] = \text{m}\cdot\text{m} = \text{m}^2,$$

cioè l'area si misura in metri quadrati — esattamente come già sai.

Il volume $V$ di un parallelepipedo è invece il prodotto di **tre** lunghezze, $V = b\cdot h\cdot p$, quindi

$$[V] = \text{m}\cdot\text{m}\cdot\text{m} = \text{m}^3,$$

cioè il volume si misura in metri cubi.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso (oppure completa, dove richiesto).

{% capture _q3 %}[
{"t":"Se $x = y \\times z$, con $y$ misurato in metri e $z$ in secondi, allora $x$ si misura in m/s.","ok":false,"s":"In un prodotto le unità si moltiplicano, non si dividono: $x$ si misura in m·s (metri per secondo), non m/s."},
{"t":"Se lo stipendio si misura in € e il tempo in ore, qual è l'unità di misura dello stipendio orario?","tipo":"fill","opts":["€/h","h/€","€·h"],"ok":"€/h","s":"Stipendio orario = stipendio ÷ tempo, quindi l'unità è €, l'unità del tempo, cioè €/h."},
{"t":"Se il prezzo della benzina è in € e il volume in litri, il prezzo al litro si misura in €/L.","ok":true,"s":"Prezzo al litro = prezzo ÷ volume, quindi l'unità è €/L."},
{"t":"La densità, definita come massa diviso volume, si misura in m³/kg.","ok":false,"s":"Al contrario: densità = massa ÷ volume, quindi si misura in kg/m³, non m³/kg."},
{"t":"Se il prezzo è in € e la massa in kg, il prezzo al chilo si misura in €/kg.","ok":true,"s":"Prezzo al chilo = prezzo ÷ massa, quindi l'unità è €/kg."},
{"t":"Se $x = y/z$ e sia $y$ che $z$ si misurano in kg, allora $x$ è un numero puro, cioè un numero senza unità.","ok":true,"s":"kg/kg = 1: le unità uguali al numeratore e al denominatore si semplificano, come nei numeri."}
]{% endcapture %}
{% include quiz.html domande=_q3 label_si="Un'unità di misura corretta" label_no="Un'unità di misura sbagliata" id="q-unita" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html testo="Costruisci l'unità di misura" %}

Ora tocca a te: costruisci l'unità di misura cliccando sui tasti, uno alla volta.

{% capture _ub1 %}[
{"p":"Secondo te, che unità di misura avrebbe una quantità x definita come il prodotto di due lunghezze (come l'area)?","c":"m·m"},
{"p":"Secondo te, che unità di misura avrebbe una quantità x definita come il rapporto tra una lunghezza e una massa?","c":"m/kg"},
{"p":"Secondo te, che unità di misura avrebbe una quantità x definita come il prodotto di tre lunghezze (come il volume)?","c":"m·m·m"},
{"p":"Secondo te, che unità di misura avrebbe una quantità x definita come il rapporto tra una lunghezza e il prodotto di massa e tempo?","c":"m/(kg·s)"}
]{% endcapture %}
{% include unitbuild.html id="ub-lunghezza-massa" domande=_ub1 palette="m|kg|s|·|/|(|)" %}

{% include box-end.html %}

### Ipotizzare la formula a partire dall'unità di misura

Nella sezione precedente hai imparato a trovare l'unità di misura conoscendo la formula. Una cosa molto utile è anche fare il contrario: conoscendo solo l'unità di misura, proviamo adesso a **ipotizzare** come potrebbe essere fatta la formula.

{% include box-imp.html testo="Ipotizzare la formula" %}
Se una grandezza si misura con un'unità del tipo $A/B$ (come nel caso di €/kg o fette/amico), è ragionevole ipotizzare che la sua formula sia data dal rapporto tra una grandezza misurata in $A$ e una misurata in $B$ (cioè il rapporto tra un prezzo e una massa o il rapporto tra un numero di fette e un numero di amici).
{% include box-end.html %}

{% include box-blue.html testo="Esempio: La velocità" %}
Sappiamo che la velocità (simbolo $v$) si può misurare in km/h (chilometri orari). Dall'unità di misura vediamo quindi che a numeratore c'è una lunghezza (poiché si misura in km) e a denominatore un tempo (poiché si misura in ore). Possiamo quindi ipotizzare che la formula sia

$$v = \frac{\text{spazio}}{\text{tempo}}.$$


In effetti, la velocità ha proprio questa formula, come vedremo nel prossimo capitolo, quindi la nostra ipotesi è corretta.


{% include box-end.html %}
**Attenzione!** Il metodo appena descritto è un metodo molto utile, che però consente solo di fare ipotesi e non di determinare le formule con assoluta certezza. Infatti, formule diverse danno la stessa unità di misura. Ecco un esempio in cui ci si potrebbe sbagliare.

{% include box-blue.html testo="Controesempio: L'accelerazione" %}
Consideriamo l'unità di misura dell'accelerazione (simbolo $a$), che corrisponde a m/s². Potremmo quindi pensare che a numeratore ci sia una lunghezza e a denominatore un tempo elevato alla seconda, cioè una cosa tipo

$$a = \frac{\text{spazio}}{\text{tempo}^2}.$$


In realtà, l'accelerazione non ha affatto questa formula, come vedremo nel prossimo capitolo. Mi interessa insomma che sappiate che questo metodo non può garantire che la risposta sia esatta, anche se è una tecnica molto utile.


{% include box-end.html %}



{% include box-ex.html testo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: è un'ipotesi plausibile oppure no?

{% capture _q4 %}[
{"t":"L'unità abitanti/km² suggerisce che la grandezza sia definita come un'area divisa per un numero di abitanti.","ok":false,"s":"Al contrario: è un numero di abitanti diviso un'area (densità di popolazione)."},
{"t":"L'unità kg/m³ suggerisce che la grandezza sia definita come una massa divisa per un volume.","ok":true,"s":"Sì: è esattamente il caso della densità."},
{"t":"Data un'unità del tipo $A/B$, quella che abbiamo ipotizzato è l'unica formula possibile: non ci sono altre possibilità.","ok":false,"s":"No: dall'unità possiamo solo formulare un'ipotesi plausibile, non una certezza. Formule diverse potrebbero produrre la stessa unità."},
{"t":"L'unità pagine/giorno suggerisce che la grandezza sia definita come un numero di pagine lette diviso un numero di giorni.","ok":true,"s":"Sì: è un possibile ritmo di lettura."},
{"t":"L'unità km/L suggerisce che la grandezza sia definita come uno spazio percorso diviso un volume di carburante.","ok":true,"s":"Sì: è il consumo di un'automobile."}
]{% endcapture %}
{% include quiz.html domande=_q4 label_si="Un'ipotesi plausibile" label_no="Un'ipotesi non plausibile" id="q-ipotizza" senza_esempi=true %}

{% include box-end.html %}

# Invertire la formula
Torniamo a considerare il caso discusso precedentemente in cui alcuni amici devono dividere un certo numero di fette di pizza. Sai che ci sono 3 pizze, quindi $3\cdot 8=24$ fette di pizza. Sai che, dividendo in parti eque, a ciascuno spetteranno due fette di pizza. Come puoi calcolare il numero di persone presenti? Prima pensaci tu, poi guarda la soluzione qui sotto.

{% include spoiler.html %}
Sappiamo che il numero di fette a testa si può calcolare come

$$
\text{fette a testa} = \frac{\text{numero di fette totali}}{\text{numero di amici}}.
$$

Sappiamo anche che ci sono due fette a testa e 24 fette totali, quindi sostituendo questi valori nell'equazione, otteniamo

$$
2 = \frac{24}{\text{numero di amici}}.
$$

Ora questa è un'equazione con una sola incognita, cioè il numero di amici. Possiamo chiamarla, per brevità, $n$. In questo caso i numeri sono semplici e può essere intuito che la soluzione è $n=12$. Nel caso di numeri più difficili, si può comunque risolvere isolando il numero di amici all'interno dell'equazione. Per farlo, dobbiamo **moltiplicare** da entrambe le parti per il numero di amici, di modo che esso si semplifichi a destra e finisca al numeratore di sinistra:

$$
n \cdot 2 = \frac{24}{\cancel{n}}\cancel{n} \implies n \cdot 2 = 24
$$

A questo punto, per isolare il numero di amici a sinistra dobbiamo dividere da entrambe le parti per $2$:

$$
n\cdot \frac{\cancel 2 }{\cancel 2}= \frac{24}{2} \implies n = \frac {24} 2 \implies n = 12.
$$

{% include spoiler-end.html %}

Questo era un caso molto semplice di un problema che sarà molto importante per tutto il corso di Fisica, che chiamiamo <definizione>invertire le formule</definizione>. Siamo partiti dalla formula iniziale

$$\text{fette a testa} = \frac{\text{numero di fette totali}}{\text{numero di amici}}$$

in cui il "soggetto" era il numero di fette a testa, per arrivare a un'equazione in cui il soggetto è invece il numero di amici. Vediamo come si fa in generale, per una formula del tipo

$$x = \frac y z.$$

Prova tu: hai a disposizione alcune mosse (scambiare i membri, moltiplicare o dividere entrambi i membri per una delle tre variabili). Isola prima $y$, poi $z$, cercando di usare il minor numero di mosse possibile. Quando trovi la combinazione di mosse migliore, appuntalo sul tuo quaderno, scrivendolo in un luogo che tu possa consultare sempre!

{% include invert.html id="inv-y" variabili="x|y|z" sinistra="x" destra="y/z" obiettivo="y" %}

{% include invert.html id="inv-z" variabili="x|y|z" sinistra="x" destra="y/z" obiettivo="z" %}

{% include box-ex.html testo="Verifica Subito! (lettere e simboli)" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q5 %}[
{"t":"Se $x = y/z$, allora $y = x/z$.","ok":false,"s":"Attenzione: si moltiplica per $z$, non si divide. La formula corretta è $y = x\\cdot z$."},
{"t":"Se $x = y/z$, allora $y = x\\cdot z$.","ok":true,"s":"Corretto: si scambiano i membri e poi si moltiplica per $z$."},
{"t":"Se $x = y/z$, allora $z = x/y$.","ok":false,"s":"Attenzione: la formula corretta è $z = y/x$, non $x/y$."},
{"t":"Se $x = y/z$, allora $z = x\\cdot y$.","ok":false,"s":"Non è un prodotto: isolando $z$ si ottiene $z = y/x$."},
{"t":"Se $x = y/z$, allora $z = y/x$.","ok":true,"s":"Corretto: si moltiplica per $z$ e poi si divide per $x$."}
]{% endcapture %}
{% include quiz.html domande=_q5 label_si="Un passaggio corretto" label_no="Un passaggio sbagliato" id="q-inv-simboli" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito! (con i numeri)" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q6 %}[
{"t":"Se $x = 6$ e $z = 2$, allora $y = x/z = 3$.","ok":false,"s":"Errore comune: si divide invece di moltiplicare. In realtà $y = x\\cdot z = 6\\cdot 2 = 12$."},
{"t":"Se $x = 4$ e $z = 3$, allora $y = x\\cdot z = 12$.","ok":true,"s":"Corretto: $y = x\\cdot z = 4\\cdot 3 = 12$."},
{"t":"Se $x = 10$ e $y = 50$, allora $z = x/y = 0{,}2$.","ok":false,"s":"Errore comune: i due numeri sono invertiti. In realtà $z = y/x = 50/10 = 5$."},
{"t":"Se $x = 5$ e $y = 20$, allora $z = y/x = 4$.","ok":true,"s":"Corretto: $z = y/x = 20/5 = 4$."}
]{% endcapture %}
{% include quiz.html domande=_q6 label_si="Un calcolo corretto" label_no="Un calcolo sbagliato" id="q-inv-numeri" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html testo="Un chilo di piume e un chilo di piombo" %}

Un indovinello: pesa più un chilo di piume o un chilo di piombo?

Naturalmente pesano **uguale**, perché sono entrambi un chilo! Tuttavia, un chilo di piombo avrà un volume molto piccolo, mentre un chilo di piume formerà un mucchio gigantesco. Calcoliamo esattamente i volumi!

Sappiamo che la densità è definita come $d = \dfrac{m}{V}$. Per calcolare un volume a partire dalla massa e dalla densità dobbiamo isolare $V$: prova tu, cercando di usare il minor numero di mosse possibile, e poi copia i passaggi sul quaderno, in un posto che tu possa consultare sempre.

{% include invert.html id="inv-densita" variabili="d|m|V" sinistra="d" destra="m/V" obiettivo="V" %}

Ora che hai la formula, usiamo questi dati:
- densità del piombo: $d_{\text{piombo}} \approx 11\,340\ \text{kg/m}^3$;
- densità delle piume (stimata): $d_{\text{piume}} \approx 50\ \text{kg/m}^3$.

Calcola il volume di $1$ kg di piombo e di $1$ kg di piume, usando la notazione scientifica dove utile.

{% include spoiler.html testo="Mostra la soluzione" %}
Dalla formula $d = m/V$, isolando $V$ (scambio i membri e poi moltiplico per $V$, poi divido per $d$):

$$V = \frac{m}{d}.$$

Per il piombo:

$$V_{\text{piombo}} = \frac{1}{11\,340} \approx 8{,}82\times 10^{-5}\ \text{m}^3,$$

cioè circa $88$ cm³ — un cubetto di lato poco più di $4$ cm.

Per le piume:

$$V_{\text{piume}} = \frac{1}{50} = 2\times 10^{-2}\ \text{m}^3 = 20\ \text{L},$$

cioè un volume più di $200$ volte più grande di quello del piombo, a parità di massa: ecco perché un chilo di piume sembra un mucchio enorme, mentre un chilo di piombo sta in una mano.
{% include spoiler-end.html %}

{% include box-end.html %}

# La variazione

Stamattina alle 7 il termometro segnava $8$ °C. Adesso, a mezzogiorno, segna $15$ °C. Di quanto è cambiata la temperatura?

Per rispondere basta sottrarre il valore di partenza da quello di arrivo: $15-8=7$, cioè $7$ °C. La temperatura è aumentata di $7$ °C. Questa operazione — sottrarre il valore *iniziale* da quello *finale* — è così comune in Fisica che ha un nome e un simbolo tutti suoi.

{% include box-imp.html testo="Variazione di una grandezza" %}
La <definizione>variazione</definizione> di una grandezza $x$, indicata con $\Delta x$ (si legge "delta x", dove $\Delta$ è una lettera dell'alfabeto greco), è la differenza tra il suo valore finale e il suo valore iniziale:

$$\Delta x = x_f - x_i.$$

Se $x$ aumenta, $\Delta x$ è positivo. Se $x$ diminuisce, $\Delta x$ è negativo.
{% include box-end.html %}

{% include box-blue.html testo="La temperatura durante la giornata" %}
Alle 7 il termometro segna $T_i = 8$ °C; a mezzogiorno segna $T_f=15$ °C. La variazione è

$$\Delta T = T_f - T_i = 15 - 8 = +7,$$

cioè $\Delta T = +7$ °C, positiva, perché la temperatura è **aumentata**.

Alla sera, però, il termometro scende di nuovo a $8$ °C. Prendendo ora come iniziale il valore di mezzogiorno ($T_i=15$ °C) e come finale quello della sera ($T_f=8$ °C),

$$\Delta T = T_f - T_i = 8 - 15 = -7,$$

cioè $\Delta T = -7$ °C, negativa, perché la temperatura è **diminuita**. Lo stesso simbolo $\Delta T$ descrive sia un aumento sia una diminuzione: è il segno a dircelo.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q7 %}[
{"t":"Se una grandezza diminuisce, la sua variazione $\\Delta x$ è positiva.","ok":false,"s":"No: se il valore finale è minore di quello iniziale, la differenza è negativa."},
{"t":"Se un serbatoio contiene 30 L d'acqua e viene svuotato fino a 10 L, la sua variazione è $\\Delta x = 10 - 30 = -20$ L.","ok":true,"s":"Corretto: valore finale (10) meno valore iniziale (30), negativa perché l'acqua è diminuita."},
{"t":"Se una grandezza aumenta, la sua variazione $\\Delta x$ è positiva.","ok":true,"s":"Sì: $\\Delta x$ = valore finale − valore iniziale, e se il valore finale è maggiore, la differenza è positiva."},
{"t":"$\\Delta x$ si calcola sempre come valore iniziale meno valore finale.","ok":false,"s":"Al contrario: si calcola come valore finale meno valore iniziale."},
{"t":"Se un conto in banca passa da 100 € a 80 €, la variazione è $\\Delta x = +20$ €.","ok":false,"s":"Errore di segno: $\\Delta x = 80 - 100 = -20$ €, negativa perché il saldo è diminuito."}
]{% endcapture %}
{% include quiz.html domande=_q7 label_si="Un calcolo corretto di Δx" label_no="Un calcolo sbagliato di Δx" id="q-variazione" senza_esempi=true %}

{% include box-end.html %}


## La variazione nel tempo

Un caso particolare di variazione, che useremo continuamente da qui in avanti, è la variazione del tempo, indicata con $\Delta t$. Rappresenta quanto tempo è trascorso tra un istante iniziale $t_i$ e un istante finale $t_f$, cioè la **durata** di un intervallo:

$$\Delta t = t_f - t_i.$$

{% include box-blue.html testo="Quanti secondi dura il viaggio?" %}
Un treno parte dalla stazione alle 13:30 e arriva a destinazione alle 15:45. Quanti secondi sono trascorsi?

Contiamo prima le ore e i minuti: dalle 13:30 alle 15:45 passano $2$ ore e $15$ minuti, cioè

$$2\times (60 + 15 )= 135\ \text{min}.$$

Convertendo in secondi,

$$\Delta t = 135\times 60 = 8100\ \text{s} = 8{,}1\times 10^3\ \text{s}.$$
{% include box-end.html %}

A differenza di una variazione qualsiasi, $\Delta t$ nelle situazioni di tutti i giorni è sempre **positivo**: il tempo scorre sempre in avanti, quindi l'istante finale che scegliamo è sempre successivo a quello iniziale.

Quando diciamo che una grandezza $x$ **varia nel tempo**, però, intendiamo qualcosa di più preciso: non ci interessa solo di quanto è cambiata ($\Delta x$), né solo quanto tempo è passato ($\Delta t$), ma quanto è cambiata **per ogni unità di tempo trascorsa**, cioè il rapporto

$$\frac{\Delta x}{\Delta t}.$$

Hai già visto questo tipo di rapporto: è proprio una **grandezza unitaria**, come quelle incontrate all'inizio del capitolo — solo che qui il numeratore è **una variazione nel tempo**.

{% include box-imp.html testo="Variazione nel tempo" %}
La <definizione>variazione nel tempo</definizione> di una grandezza $x$ si esprime con il simbolo $\text{var}_{x,t}$ che corrisponde alla grandezza unitaria

$$
\text{var}_{x,t} = \frac{\Delta x}{\Delta t}.
$$

L'unità di misura di $\text{var}_{x,t}$ corrisponde all'unità di misura di $x$ divisa per l'unità di misura di $t$ (secondi, minuti, ore, anni, millisecondi, etc.).
{% include box-end.html %}

{% include box-blue.html testo="Quanto aumenta la temperatura ogni ora?" %}
Nell'esempio di prima, tra le 7 e mezzogiorno la temperatura è variata di $\Delta T = +7$ °C. Tra le due letture sono trascorse $\Delta t = 5\,\text{h}$. La variazione della temperatura nel tempo è quindi

$$\text{var}_{T,t}=\frac{\Delta T}{\Delta t} = \frac{7}{5} = 1{,}4\ \text{°C/h},$$

cioè la temperatura è aumentata, in media, di $1{,}4$ °C ogni ora.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q9 %}[
{"t":"$\\text{var}_{x,t}$ si misura sempre in secondi.","ok":false,"s":"No: si misura nell'unità di $x$ divisa per l'unità di tempo scelta (°C/h, L/min, cm/settimana, ecc.), non necessariamente in secondi."},
{"t":"Se l'altezza $h$ di una pianta cresce da $20$ cm a $35$ cm in $3$ settimane, la sua variazione nel tempo è $\\text{var}_{h,t}=(35-20)/3=5$ cm/settimana.","ok":true,"s":"Corretto: $\\Delta h = 15$ cm, $\\Delta t = 3$ settimane, quindi $\\text{var}_{h,t}=5$ cm/settimana."},
{"t":"Se $x$ diminuisce nel tempo, $\\text{var}_{x,t}$ è negativa.","ok":true,"s":"Esatto: $\\Delta x$ è negativo mentre $\\Delta t$ è positivo, quindi il rapporto è negativo."},
{"t":"$\\text{var}_{x,t}$ è semplicemente un altro nome per $\\Delta t$.","ok":false,"s":"No: $\\text{var}_{x,t}$ è il rapporto $\\Delta x/\\Delta t$, non $\\Delta t$ da solo."}
]{% endcapture %}
{% include quiz.html domande=_q9 label_si="Un calcolo corretto" label_no="Un calcolo sbagliato" id="q-var-tempo" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html testo="Un serbatoio che si svuota" %}
Un serbatoio contiene $V=80$ L d'acqua. Dopo $4$ minuti ne contiene $52$ L. Calcola $\text{var}_{V,t}$ per il livello dell'acqua.

{% include spoiler.html testo="Mostra la soluzione" %}
$$\Delta V = 52 - 80 = -28\ \text{L}, \qquad \Delta t = 4\ \text{min}.$$

$$\text{var}_{V,t} = \frac{\Delta V}{\Delta t} = \frac{-28}{4} = -7\ \text{L/min},$$

cioè il serbatoio perde in media $7$ litri ogni minuto.
{% include spoiler-end.html %}
{% include box-end.html %}

{% include box-ex.html testo="Invertire la formula della variazione nel tempo" %}

Sai già come si fa: la formula $\text{var}_{x,t}=\dfrac{\Delta x}{\Delta t}$ ha esattamente la stessa forma di $x=y/z$. Prova a isolare prima $\Delta x$, poi $\Delta t$, usando il minor numero di mosse possibile.

{% include invert.html id="inv-var-dx" variabili="v|Dx|Dt" etichette="\text{var}_{x,t}|\Delta x|\Delta t" sinistra="v" destra="Dx/Dt" obiettivo="Dx" %}

{% include invert.html id="inv-var-dt" variabili="v|Dx|Dt" etichette="\text{var}_{x,t}|\Delta x|\Delta t" sinistra="v" destra="Dx/Dt" obiettivo="Dt" %}

{% include box-end.html %}

## La variazione nello spazio

Un altro caso particolare, altrettanto importante, è la variazione della posizione di un oggetto lungo una retta. La indichiamo con $\Delta s$:

$$\Delta s = s_f - s_i.$$

{% include box-ex.html testo="Esercizio — L'ape sul righello" %}

Un'ape cammina su un righello, dal centimetro 3 al centimetro 7. Guarda l'animazione, poi calcola $\Delta s$.

{% include lab-virtuali/ape-righello-spostamento-lab.html %}

A differenza di $\Delta t$, la variazione nello spazio **può essere negativa**: il segno ci dice in quale delle due direzioni ci si è mossi.

{% include box-end.html %}

Allo stesso modo di prima, quando diciamo che una grandezza $x$ **varia nello spazio**, intendiamo il rapporto tra quanto $x$ è cambiata e lo spazio percorso nel farlo:

$$\frac{\Delta x}{\Delta s}.$$

{% include box-imp.html testo="Variazione nello spazio" %}
La <definizione>variazione nello spazio</definizione> di una grandezza $x$ si esprime con il simbolo $\text{var}_{x,s}$ che corrisponde alla grandezza unitaria

$$
\text{var}_{x,s} = \frac{\Delta x}{\Delta s}.
$$

L'unità di misura di $\text{var}_{x,s}$ corrisponde all'unità di misura di $x$ divisa per l'unità di misura di $s$ (metri, chilometri, centimetri, ecc.).
{% include box-end.html %}

{% include box-blue.html testo="Quanto cambia la temperatura salendo in montagna?" %}
Un alpinista parte da un rifugio alla quota $s_i = 1500\,\text{m}$, dove la temperatura è $T_i=12$ °C, e sale fino a un rifugio a quota $s_f = 3500\,\text{m}$, dove la temperatura è $T_f=-1$ °C. Il dislivello percorso è

$$\Delta s = s_f - s_i = 3500 - 1500 = 2000\,\text{m},$$

mentre la variazione di temperatura è

$$\Delta T = T_f - T_i = -1 - 12 = -13,$$

cioè $\Delta T=-13$ °C. La variazione della temperatura nello spazio è quindi

$$\text{var}_{T,s}=\frac{\Delta T}{\Delta s} = \frac{-13}{2000} = -0{,}0065\ \text{°C/m},$$

cioè, ogni $1000$ m di dislivello, la temperatura scende in media di circa $6{,}5$ °C: ecco perché in cima alle montagne fa più freddo!
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q8 %}[
{"t":"Se un ascensore parte dal piano $s=12$ m e si ferma al piano $s=4$ m, allora $\\Delta s = +8$ m.","ok":false,"s":"$\\Delta s = 4 - 12 = -8$ m: negativo, perché l'ascensore è sceso."},
{"t":"$\\text{var}_{x,s}$ è semplicemente un altro nome per $\\Delta s$.","ok":false,"s":"No: $\\text{var}_{x,s}$ è il rapporto $\\Delta x/\\Delta s$, non $\\Delta s$ da solo."},
{"t":"Un valore negativo di $\\Delta s$ significa che l'oggetto si è mosso nella direzione opposta a quella scelta come positiva.","ok":true,"s":"Esatto: il segno di $\\Delta s$ indica la direzione del movimento."},
{"t":"Se la densità dell'aria diminuisce salendo di quota, allora $\\text{var}_{d,s}$ per la densità è negativa.","ok":true,"s":"Esatto: $\\Delta d$ (la densità) è negativo mentre $\\Delta s$ (la quota) è positivo, quindi il rapporto è negativo."}
]{% endcapture %}
{% include quiz.html domande=_q8 label_si="Un calcolo corretto" label_no="Un calcolo sbagliato" id="q-var-spazio" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html testo="La densità dell'aria in quota" %}
La densità $d$ dell'aria diminuisce con l'altitudine. Al livello del mare vale circa $1{,}225\ \text{kg/m}^3$; a $5000$ m di quota vale circa $0{,}74\ \text{kg/m}^3$. Calcola $\text{var}_{d,s}$ per la densità dell'aria.

{% include spoiler.html testo="Mostra la soluzione" %}
$$\Delta d = 0{,}74 - 1{,}225 = -0{,}485\ \text{kg/m}^3, \qquad \Delta s = 5000\ \text{m}.$$

$$\text{var}_{d,s} = \frac{\Delta d}{\Delta s} = \frac{-0{,}485}{5000} \approx -9{,}7\times 10^{-5}\ \text{kg/m}^3\text{ per metro},$$

cioè la densità dell'aria scende, in media, di circa $9{,}7\times 10^{-5}\ \text{kg/m}^3$ per ogni metro di quota guadagnato.
{% include spoiler-end.html %}
{% include box-end.html %}

{% include box-ex.html testo="Invertire la formula della variazione nello spazio" %}

Anche qui, $\text{var}_{x,s}=\dfrac{\Delta x}{\Delta s}$ ha la stessa forma di $x=y/z$. Isola prima $\Delta x$, poi $\Delta s$, con il minor numero di mosse possibile. Quando hai trovato la combinazione di mosse migliore possibile, scrivila su un quaderno, in un posto dove tu possa tornare a vederlo quando ti serve.

{% include invert.html id="inv-vars-dx" variabili="v|Dx|Ds" etichette="\text{var}_{x,s}|\Delta x|\Delta s" sinistra="v" destra="Dx/Ds" obiettivo="Dx" %}

{% include invert.html id="inv-vars-ds" variabili="v|Dx|Ds" etichette="\text{var}_{x,s}|\Delta x|\Delta s" sinistra="v" destra="Dx/Ds" obiettivo="Ds" %}

{% include box-end.html %}

{% include box-ex.html testo="La pendenza di una strada" %}

{% include lab-virtuali/pendenza-strada-lab.html %}

Una strada in salita ha pendenza $\text{var}_{h,s} = 0{,}08$, dove $h$ è la quota: significa che l'altezza cresce di $0{,}08$ m per ogni metro percorso lungo la strada. Se percorri $\Delta s = 250$ m lungo la strada, di quanto sale la quota $\Delta h$?

{% include spoiler.html testo="Mostra la soluzione" %}
Dalla formula $\text{var}_{h,s}=\dfrac{\Delta h}{\Delta s}$, isolando $\Delta h$ (moltiplico entrambi i membri per $\Delta s$):

$$\Delta h = \text{var}_{h,s}\times \Delta s = 0{,}08\times 250 = 20\ \text{m}.$$
{% include spoiler-end.html %}

Un'altra strada scende con pendenza $\text{var}_{h,s} = -0{,}15$. Se la quota scende di $\Delta h = -30$ m, quanto tratto $\Delta s$ hai percorso?

{% include spoiler.html testo="Mostra la soluzione" %}
Dalla formula $\text{var}_{h,s}=\dfrac{\Delta h}{\Delta s}$, isolando $\Delta s$ (divido entrambi i membri per $\text{var}_{h,s}$):

$$\Delta s = \frac{\Delta h}{\text{var}_{h,s}} = \frac{-30}{-0{,}15} = 200\ \text{m}.$$
{% include spoiler-end.html %}

{% include box-end.html %}

# Esercizi di riepilogo


Includi un esercizio con due stelline in cui dici che a Tokyo c'è x abitanti per m², mentre a Pechino ci sono y abitanti per km². In quale delle due città ci sono più abitanti per km²?

 