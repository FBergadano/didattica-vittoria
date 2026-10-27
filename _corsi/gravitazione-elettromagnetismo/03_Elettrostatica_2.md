---
layout: capitolo
title: "L'Elettrostatica (parte 2)"
corso: "gravitazione-elettromagnetismo"
corso_titolo: "La Gravitazione e l'Elettromagnetismo"
materia: fisica
numero: 3
---

{% include box-obiettivi.html %}
Riprendi le forze e i campi della prima parte e li traduci nel linguaggio dell'energia, seguendo la stessa strada già percorsa per la gravità: energia potenziale elettrica, potenziale, superfici equipotenziali. Con questi strumenti studi il moto di una carica in un campo elettrico: quale forza subisce, quanto accelera, verso dove va se la lasci libera e con quale velocità arriva dopo aver attraversato una differenza di potenziale. Vedrai anche come Millikan riuscì a misurare la carica di un singolo elettrone.
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

{% include eq-annotated.html
   id="uel1"
   formula="U = k\dfrac{Q\cdot q}{\,r\,}"
   frammenti="U|k|Q\cdot q|\,r\,"
   etichette="energia potenziale elettrica (J)|costante di Coulomb|prodotto delle cariche, ciascuna con il suo segno|distanza fra i centri delle cariche"
   posizioni="alto|basso|alto|basso"
%}

Nella formula <u markdown="span">le cariche vanno scritte **con il loro segno**, senza valore assoluto</u>. E manca il segno meno che c'era nella formula gravitazionale: ora a decidere il segno di $U$ sono le cariche stesse.
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
- **Formula:** $U = k\,\dfrac{Q\cdot q}{r}$, con le cariche scritte con il loro segno.
- **Segno:** negativa se le cariche si attraggono, positiva se si respingono; zero a distanza infinita.
- **Unità di misura:** joule (J).
{% include box-end.html %}

{% include unisci.html %}
Esplora tu stesso come cambia $U$ al variare di $Q$, di $q$ o di $r$ (qui le due cariche sono positive).

{% include graph-explorer.html id="ge-energia-el"
   variabili="Q|q|r" unita="×10⁻⁶ C|×10⁻⁶ C|m" scala="1e-6|1e-6|1"
   min="0.1|0.1|0.1" max="10|10|5" default="2|3|1"
   costanti="k" costanti_valori="8.99e9"
   formula="k*Q*q/r" formula_latex="k\dfrac{Q \cdot q}{r}"
   y_simbolo="U" y_unita="J" solo_positivi="true"
   titolo="Esplora il grafico" punti_min="5" %}

Leggi sul grafico di $U$ con $r$ in ascissa: quando $r$ raddoppia, che cosa succede a $U$?
{% capture _o_mcqgeenergiael %}[{"v":"a","t":"Raddoppia"},{"v":"b","t":"Diventa un quarto"},{"v":"c","t":"Si dimezza"},{"v":"d","t":"Resta uguale"}]{% endcapture %}
{% include mcq.html id="mcqgeenergiael" opts=_o_mcqgeenergiael ok="c" s="$U = k\,Q\,q/r$ è inversamente proporzionale a $r$, non a $r^2$ come la forza: a distanza doppia l'energia si dimezza." %}

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
Nell'atomo di idrogeno, un elettrone si trova a distanza $r$ da un protone. Per calcolare la loro energia potenziale con $U = k\,\dfrac{Q\cdot q}{r}$, come si scrivono le due cariche?
{% capture _oSimbU %}[
{"v":"a","t":"tutte e due positive, $+e$ e $+e$: nelle formule si usa sempre il valore assoluto"},
{"v":"b","t":"$+e$ per il protone e $-e$ per l'elettrone, quindi $U$ è negativa"},
{"v":"c","t":"tutte e due negative, perché si attraggono"},
{"v":"d","t":"non importa, perché $U$ si misura in joule e i joule sono sempre positivi"}
]{% endcapture %}
{% include mcq.html id="mcq-simboli-energia" opts=_oSimbU ok="b" s="Nell'energia potenziale le cariche vanno scritte con il loro segno, senza valore assoluto: $Q\cdot q = (+e)\cdot(-e) < 0$, e quindi $U < 0$. È proprio il segno di $U$ a dirci che protone ed elettrone si attraggono, cioè sono legati. Il valore assoluto serve solo nella legge di Coulomb, dove si calcola un modulo." %}
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
{% include unisci-end.html %}

### Sovrapposizione degli effetti per l'energia potenziale

{% include box-imp.html testo="Il principio di sovrapposizione degli effetti per l'energia potenziale elettrica" %}
In presenza di più cariche, ognuna contribuisce all'energia potenziale di $q$ <u markdown="span">esattamente come se le altre non ci fossero</u>. L'energia potenziale totale è la somma algebrica di tutti i contributi:

{% include eq-annotated.html
   id="utot"
   formula="U_{tot} = U_1+U_2 + \cdots"
   frammenti="U_{tot}|U_1|U_2"
   etichette="energia potenziale totale di $q$|contributo della prima carica|contributo della seconda carica"
   posizioni="alto|basso|alto"
%}
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

{% include eq-annotated.html
   id="vel1"
   formula="V = \dfrac{U}{q} = k\dfrac{Q}{\,r\,}"
   frammenti="V|U|q|Q"
   etichette="potenziale elettrico (V)|energia potenziale della carica di prova|carica di prova|carica che genera il potenziale, con il suo segno"
   posizioni="alto|alto|basso|alto"
%}

La stessa formula si ottiene, per analogia, da quella del potenziale gravitazionale:

{% include lab-virtuali/analogia-formule-lab.html id="an-potenziale" tipo="potenziale" %}

<u markdown="span">Il potenziale non dipende dalla carica di prova</u>, ma solo dalla carica $Q$ che lo genera (con il suo segno) e dalla distanza $r$ dal suo centro. Vicino a una carica positiva il potenziale è positivo, vicino a una carica negativa è negativo.
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
- **Formula:** $V = \dfrac{U}{q} = k\,\dfrac{Q}{r}$, con $Q$ scritta con il suo segno.
- **Unità di misura:** volt (V): $1\ \text V = 1\ \text J/\text C$.
- **Legame con l'energia:** una carica $q$ in un punto in cui il potenziale vale $V$ ha energia potenziale $U = q\,V$.
{% include box-end.html %}

{% capture _rUVel %}L'energia potenziale $U$ riguarda <strong>due</strong> cariche: è l'energia della coppia $Q$–$q$, raddoppia se raddoppia $q$, e si misura in joule. Il potenziale $V = U/q$ è invece una proprietà del <strong>punto</strong> attorno a $Q$: dice quanta energia potenziale avrebbe <em>ogni coulomb</em> posto lì, non dipende da $q$, e si misura in volt. Esempio: in un punto in cui $V = 100\ \text V$, una carica di $2\ \text C$ ha $U = 200\ \text J$, una carica di $-3\ \text C$ ha $U = -300\ \text J$, ma il potenziale è lo stesso per entrambe.{% endcapture %}
{% include risposta-aperta.html id="ra-spiega-UV-el" tipo="spiega"
   domanda="Qual è la differenza fra energia potenziale elettrica $U$ e potenziale elettrico $V$? Spiegala con un esempio numerico inventato da te."
   risposta=_rUVel %}

{% include unisci.html %}
Esplora tu stesso come cambia $V$ al variare di $Q$ o di $r$ (qui la carica è positiva).

{% include graph-explorer.html id="ge-potenziale-el"
   variabili="Q|r" unita="×10⁻⁶ C|m" scala="1e-6|1"
   min="0.1|0.1" max="10|5" default="2|1"
   costanti="k" costanti_valori="8.99e9"
   formula="k*Q/r" formula_latex="k\dfrac{Q}{r}"
   y_simbolo="V" y_unita="V" solo_positivi="true"
   titolo="Esplora il grafico" punti_min="5" %}

Con $r$ in ascissa, il potenziale $V$ di una carica positiva arriva a zero a una certa distanza?
{% capture _o_mcqgepotenzialeel %}[{"v":"a","t":"Sì, a qualche metro dalla carica"},{"v":"b","t":"No: scende verso zero ma non lo raggiunge mai; vale zero solo a distanza infinita"},{"v":"c","t":"No: resta sempre uguale"},{"v":"d","t":"Sì, e poi diventa negativo"}]{% endcapture %}
{% include mcq.html id="mcqgepotenzialeel" opts=_o_mcqgepotenzialeel ok="b" s="$V = k\,Q/r$ è positivo per ogni $r$ e diminuisce allontanandosi, avvicinandosi a zero senza mai toccarlo: per convenzione $V=0$ solo a distanza infinita." %}

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
{% include unisci-end.html %}

### Sovrapposizione degli effetti per il potenziale

{% include box-imp.html testo="Il principio di sovrapposizione degli effetti per il potenziale elettrico" %}
In presenza di più cariche, ciascuna genera un potenziale <u markdown="span">esattamente come se le altre non ci fossero</u>. Il potenziale totale è la somma algebrica dei contributi, ciascuno con il suo segno:

{% include eq-annotated.html
   id="vtot"
   formula="V_{tot} = V_1+V_2 + \cdots"
   frammenti="V_{tot}|V_1|V_2"
   etichette="potenziale totale nel punto|potenziale generato dalla prima carica|potenziale generato dalla seconda carica"
   posizioni="alto|basso|alto"
%}
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
Come per la gravità, il potenziale si rappresenta con le <definizione>superfici equipotenziali</definizione>: l'insieme dei punti in cui il potenziale ha lo stesso valore. Valgono le stesse proprietà: <u markdown="span">sono in ogni punto **perpendicolari** alle linee di campo</u>, e per una singola carica sono **sfere** concentriche alla carica (sul foglio, circonferenze), perché $V = k\,Q/r$ dipende solo dalla distanza.
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

dove <u markdown="span">$\vec g$ è il campo in cui la massa si trova</u> (per esempio quello generato dalla Terra), e non quello che la massa stessa genera.
{% include box-end.html %}

{% include margin-note.html testo="Dal campo alla forza" %}
Per le cariche vale lo stesso, ed è la definizione del campo elettrico letta al contrario: da $\vec E = \vec F/q$ si ricava che una carica $q$, in un punto in cui il campo vale $\vec E$, subisce la forza

{% include eq-annotated.html
   id="fqe1"
   formula="\vec F = q\,\vec E"
   frammenti="\vec F|q|\vec E"
   etichette="forza sulla carica $q$|carica che subisce la forza, con il suo segno|campo generato dalle altre cariche nel punto in cui si trova $q$"
   posizioni="alto|basso|alto"
%}
{% include margin-note-end.html %}


{% include margin-note.html testo="Il segno della carica decide il verso" %}
La differenza con la gravità sta nel segno. Le masse sono tutte positive, e il peso ha sempre lo stesso verso di $\vec g$. Le cariche invece possono essere negative: <u>un protone viene spinto nel verso del campo, un elettrone nel verso opposto</u>.
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

{% include eq-annotated.html
   id="aqem"
   formula="\vec a = \dfrac{q}{m}\,\vec E"
   frammenti="\vec a|q|m|\vec E"
   etichette="accelerazione della particella|sua carica, con il segno|sua massa|campo generato dalle altre cariche"
   posizioni="alto|alto|basso|basso"
%}

{% include margin-note-end.html %}


{% include margin-note.html testo="Perché qui la massa non si semplifica" %}
Nella gravità, la massa compariva sia nella forza ($\vec F = m\,\vec g$) sia nel secondo principio ($\vec F = m\,\vec a$), e si semplificava: tutti i corpi cadono con la stessa accelerazione $\vec a = \vec g$, il martello come la piuma. Qui invece la forza dipende dalla carica e l'inerzia dalla massa, che sono due proprietà diverse: non si semplifica niente, e <u markdown="span">l'accelerazione dipende dal rapporto $q/m$</u>.
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

{% include eq-annotated.html
   id="kcin"
   formula="K = \dfrac12\,m\,v^2"
   frammenti="K|m|v^2"
   etichette="energia cinetica (J)|massa del corpo|quadrato della sua velocità"
   posizioni="alto|basso|alto"
%}

L'**energia meccanica** è la somma dell'energia cinetica e dell'energia potenziale: $K + U$. Se agiscono solo forze come il peso (senza attriti), l'energia meccanica si conserva: l'energia potenziale si trasforma in energia cinetica, e viceversa, ma la somma resta la stessa,

{% include eq-annotated.html
   id="consmecc"
   formula="K_i + U_i = K_f + U_f"
   frammenti="K_i + U_i|K_f + U_f"
   etichette="energia meccanica all'inizio|energia meccanica alla fine"
   posizioni="alto|alto"
%}

Un sasso lasciato cadere scende: la sua energia potenziale diminuisce e si trasforma in energia cinetica. E poiché $U = m\,V$ e le masse sono sempre positive, una massa lasciata libera va sempre verso il potenziale gravitazionale più basso, cioè verso la Terra. Lo trovi nel capitolo sull'[energia]({{ '/corsi/meccanica/06_Energia/' | relative_url }}#i-sistemi-isolati-e-la-conservazione-dellenergia-meccanica).
{% include box-end.html %}

{% include margin-note.html testo="L'energia potenziale diventa energia cinetica" %}
Anche per la forza elettrica, come per il peso, abbiamo potuto definire un'energia potenziale. Una carica che si muove liberamente in un campo elettrico conserva quindi la sua energia meccanica: la sua energia potenziale elettrica si trasforma in energia cinetica. <u markdown="span">Una carica lasciata ferma si mette in moto nel verso in cui la sua energia potenziale $U = q\,V$ diminuisce</u>, come una pallina su uno scivolo.
{% include margin-note-end.html %}


{% include margin-note.html testo="Positive e negative vanno in versi opposti" %}
Qui però entra di nuovo in gioco il segno. Per una carica positiva, $U = q\,V$ diminuisce quando diminuisce $V$: <u>la carica va verso il potenziale più basso</u>, come le masse. Per una carica negativa, $U = q\,V$ diminuisce quando $V$ **aumenta**: <u>la carica va verso il potenziale più alto</u>.
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
Abbiamo visto che il moto di una carica dipende da come cambia il potenziale fra il punto di partenza e quello di arrivo. La <definizione>differenza di potenziale</definizione> fra due punti, che si chiama anche <definizione>tensione</definizione>, è <u>il potenziale del punto di arrivo meno quello del punto di partenza</u>:

{% include eq-annotated.html
   id="deltav"
   formula="\Delta V = V_{arrivo} - V_{partenza}"
   frammenti="\Delta V|V_{arrivo}|V_{partenza}"
   etichette="differenza di potenziale (V)|potenziale del punto di arrivo|potenziale del punto di partenza"
   posizioni="alto|basso|alto"
%}

Come ogni potenziale, si misura in volt. Nella figura, una carica va dal punto $A$, dove il potenziale vale $600\ \text V$, al punto $B$, dove vale $200\ \text V$:

{% include figure/figura-differenza-potenziale.html %}
{% include margin-note-end.html %}


{% include margin-note.html testo="Differenza di potenziale ed energia" %}
Da $U = q\,V$ segue che, quando la carica si sposta, la sua energia potenziale cambia di

{% include eq-annotated.html
   id="deltau"
   formula="\Delta U = q\,\Delta V"
   frammenti="\Delta U|q|\Delta V"
   etichette="variazione dell'energia potenziale (J)|carica che si sposta, con il suo segno|differenza di potenziale fra arrivo e partenza"
   posizioni="alto|basso|alto"
%}

Se la carica parte da ferma, <u>l'energia potenziale che perde si trasforma tutta in energia cinetica</u>: arriva con $K = \lvert q\rvert\,\lvert\Delta V\rvert$. Più grande è la differenza di potenziale, più energia acquista ogni carica: per questo, per accelerare le particelle, si usano differenze di potenziale molto grandi.
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


### Schema riassuntivo

{% include mappa.html id="elettrostatica-2" %}

# Esercizi di riepilogo

Dove serve, usa $k \approx 9\times10^{9}\ \text N\cdot\text m^2/\text C^2$, $e = 1{,}6\times10^{-19}\ \text C$, $m_e = 9{,}1\times10^{-31}\ \text{kg}$, $m_p = 1{,}67\times10^{-27}\ \text{kg}$ e $g = 9{,}8\ \text{m/s}^2$.

### L'energia potenziale elettrica

{% include ex.html diff=1 %}
{% include fill.html prima="Due cariche di segno opposto hanno un'energia potenziale" tipo="drop" opts="positiva|negativa|nulla" ok="negativa" dopo="," s="Il prodotto Qq è negativo: le cariche si attraggono, e sono legate." %}

{% include fill.html prima="e quando sono a distanza infinita la loro energia potenziale è" tipo="drop" opts="positiva|negativa|nulla" ok="nulla" dopo="." s="U = kQq/r tende a zero quando r diventa grandissimo." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Trascina ciascuna coppia di cariche nella colonna giusta, secondo il segno della loro energia potenziale.

{% capture _s %}[
{"t":"due protoni","c":0},{"t":"due elettroni","c":0},{"t":"+2 μC e +5 μC","c":0},{"t":"−1 μC e −3 μC","c":0},
{"t":"un protone e un elettrone","c":1},{"t":"+4 μC e −1 μC","c":1},{"t":"il nucleo di un atomo e un suo elettrone","c":1}
]{% endcapture %}
{% include sort.html id="rie-sort-segnoU" dati=_s col0="U positiva (si respingono)" col1="U negativa (si attraggono)" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include calc-margin.html id="calcElR22" %}
Due cariche $Q = +3\times10^{-6}\ \text C$ e $q = +2\times10^{-6}\ \text C$ sono a $0{,}6\ \text m$ di distanza. Quanto vale la loro energia potenziale?

{% include fill-multi.html testo="$U =$ [0,09|0.09] J" s="$U = k\dfrac{Q\,q}{r} = 9\times10^{9}\cdot\dfrac{3\times10^{-6}\cdot2\times10^{-6}}{0{,}6}\ \text J = 0{,}09\ \text J$: positiva, perché le cariche hanno lo stesso segno." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Se la distanza fra due cariche raddoppia, la loro energia potenziale
{% capture _o %}[
{"v":"a","t":"si dimezza"},
{"v":"b","t":"diventa un quarto"},
{"v":"c","t":"raddoppia"},
{"v":"d","t":"resta la stessa"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-U-doppia" opts=_o ok="a" s="Nell'energia potenziale $r$ compare al denominatore, ma non al quadrato: $U$ va come $1/r$, quindi si dimezza. È la forza a diventare un quarto, perché va come $1/r^2$." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR23" %}
Nell'atomo di idrogeno l'elettrone e il protone distano circa $5{,}3\times10^{-11}\ \text m$. Quanto vale la loro energia potenziale elettrica?

{% include fill-multi.html testo="$U \approx$ [-4,3|−4,3|-4.3|−4.3|-4,35|−4,35|-4.35|−4.35] $\times10^{-18}$ J" s="$U = k\dfrac{Q\,q}{r} = 9\times10^{9}\cdot\dfrac{(+1{,}6\times10^{-19})\cdot(-1{,}6\times10^{-19})}{5{,}3\times10^{-11}}\ \text J \approx -4{,}3\times10^{-18}\ \text J$. È negativa: elettrone e protone sono legati, e per separarli bisogna fornire energia." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR24" %}
Marco deve calcolare l'energia potenziale di due cariche, $+2\ \mu\text C$ e $-3\ \mu\text C$, a $1\ \text m$ di distanza. Ecco la sua soluzione:

> *$U = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot3\times10^{-6}}{1} = 0{,}054\ \text J$.*

{% capture _r %}Marco ha usato i valori assoluti delle cariche, come nella forza di Coulomb. Nell'energia potenziale le cariche vanno scritte con il loro segno: $U = 9\times10^{9}\cdot\dfrac{(+2\times10^{-6})\cdot(-3\times10^{-6})}{1}\ \text J = -0{,}054\ \text J$. Il segno conta: è negativo perché le cariche si attraggono.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-err-marco" tipo="errore" domanda="Dove ha sbagliato Marco? Correggi il calcolo." risposta=_r %}
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
{% include calc-margin.html id="calcElR25" %}
Una carica $q = +1\times10^{-6}\ \text C$ si trova a $0{,}3\ \text m$ da una carica $Q_1 = +2\times10^{-6}\ \text C$ e a $0{,}6\ \text m$ da una carica $Q_2 = -4\times10^{-6}\ \text C$. Quanto vale la sua energia potenziale?

{% include fill-multi.html testo="$U_1 =$ [0,06|0.06] J, $U_2 =$ [-0,06|−0,06|-0.06|−0.06] J, $U_{tot} =$ [0] J" s="Ogni carica contribuisce come se l'altra non ci fosse: $U_1 = 9\times10^{9}\cdot\dfrac{2\times10^{-6}\cdot1\times10^{-6}}{0{,}3}\ \text J = 0{,}06\ \text J$ e $U_2 = 9\times10^{9}\cdot\dfrac{(-4\times10^{-6})\cdot1\times10^{-6}}{0{,}6}\ \text J = -0{,}06\ \text J$. Sommandoli con il segno, $U_{tot} = 0$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

### Il potenziale elettrico e le superfici equipotenziali

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="Il potenziale elettrico è una grandezza scalare." ok=true s="Sì: per questo, con più cariche, i potenziali si sommano con una semplice somma algebrica." %}
{% include tf.html q="L'energia potenziale di due cariche positive è negativa." ok=false s="No: le cariche hanno lo stesso segno, quindi il prodotto Qq è positivo, e anche U. Due cariche che si respingono non sono legate." %}
{% include tf.html q="Il potenziale in un punto non dipende dalla carica di prova che ci mettiamo." ok=true s="Sì: V = U/q dipende solo dalle cariche che lo generano e dalla distanza." %}
{% include tf.html q="Le superfici equipotenziali sono parallele alle linee di campo." ok=false s="No: sono sempre perpendicolari." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Collega ciascuna grandezza alla sua formula e alla sua unità di misura.

{% capture _d %}[
{"l":"Energia potenziale di due cariche","m":"$k\\,\\dfrac{Q\\,q}{r}$","r":"J"},
{"l":"Potenziale generato da una carica","m":"$k\\,\\dfrac{Q}{r}$","r":"V"},
{"l":"Energia di una carica in un punto a potenziale V","m":"$q\\,V$","r":"J"},
{"l":"Differenza di potenziale","m":"$V_{arrivo} - V_{partenza}$","r":"V"}
]{% endcapture %}
{% include match.html id="rie-match-pot" dati=_d col1="Grandezza" col2="Formula" col3="Unità" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include fill.html prima="Un volt corrisponde a un" tipo="drop" opts="joule al coulomb|newton al coulomb|coulomb al joule|joule al secondo" ok="joule al coulomb" dopo="." s="V = U/q: energia in joule divisa per carica in coulomb." %}
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
Attorno a una carica **negativa** $Q$, man mano che ci si avvicina alla carica, il potenziale
{% capture _o %}[
{"v":"a","t":"aumenta"},
{"v":"b","t":"diminuisce, diventando sempre più negativo"},
{"v":"c","t":"resta costante"},
{"v":"d","t":"è sempre zero"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-V-negativa" opts=_o ok="b" s="$V = k\,Q/r$ con $Q < 0$: è negativo, e più ci si avvicina (più $r$ è piccolo) più è grande in valore assoluto, cioè più è negativo." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR26" %}
A quale distanza da una carica $Q = +2\times10^{-9}\ \text C$ il potenziale vale $36\ \text V$?

{% include fill-multi.html testo="$r =$ [0,5|0.5] m" s="Da $V = k\dfrac{Q}{r}$, isolando $r$: $r = \dfrac{k\,Q}{V} = \dfrac{9\times10^{9}\cdot2\times10^{-9}}{36}\ \text m = 0{,}5\ \text m$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR11" %}
Due cariche, $Q_1 = +2\times10^{-6}\ \text C$ e $Q_2 = -1\times10^{-6}\ \text C$, sono a $2\ \text m$ di distanza. Quanto vale il potenziale nel punto a metà strada?

{% include fill-multi.html testo="$V_1 =$ [18000|18 000] V, $V_2 =$ [-9000|−9000|-9 000|−9 000] V, $V_{tot} =$ [9000|9 000] V" s="Ciascuna carica è a $1\ \text m$ dal punto: $V_1 = 9\times10^{9}\cdot 2\times10^{-6}\ \text V = 18\,000\ \text V$, $V_2 = 9\times10^{9}\cdot(-1\times10^{-6})\ \text V = -9000\ \text V$, e sommandoli con il segno $V_{tot} = 9000\ \text V$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Due cariche $+Q$ uguali sono a una certa distanza. Nel punto a metà strada,
{% capture _o %}[
{"v":"a","t":"il campo e il potenziale sono entrambi zero"},
{"v":"b","t":"il campo è zero, ma il potenziale no: è il doppio di quello generato da una sola carica"},
{"v":"c","t":"il potenziale è zero, ma il campo no"},
{"v":"d","t":"né il campo né il potenziale sono zero"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-meta-V" opts=_o ok="b" s="I due campi hanno lo stesso modulo e versi opposti, e si annullano: il campo è una somma di vettori. I due potenziali invece sono due numeri positivi uguali, e si sommano: il potenziale è uno scalare. Con $+Q$ e $-Q$ succede il contrario: il campo raddoppia e il potenziale è zero." %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Una carica di prova si sposta lungo una superficie equipotenziale. Spiega perché la sua energia potenziale non cambia, e usa questo fatto per spiegare perché le superfici equipotenziali sono perpendicolari alle linee di campo.
{% capture _r %}Su una superficie equipotenziale $V$ è lo stesso in ogni punto, quindi anche $U = q\,V$ non cambia. Se il campo avesse una componente lungo la superficie, una carica lasciata libera sarebbe spinta lungo la superficie e accelererebbe, guadagnando energia cinetica: l'energia potenziale dovrebbe diminuire, ma su quella superficie è costante. Quindi il campo non ha componenti lungo la superficie: è perpendicolare a essa, e così anche le linee di campo.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-equipot" tipo="spiega" domanda="Scrivi la tua spiegazione." risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
Perché le superfici equipotenziali di una carica puntiforme sono sfere centrate nella carica? E perché, fra due lastre piane cariche con segni opposti, sono piani paralleli alle lastre?
{% capture _r %}Il potenziale di una carica puntiforme, $V = k\,Q/r$, dipende solo dalla distanza $r$ dalla carica: tutti i punti alla stessa distanza, cioè su una sfera centrata nella carica, hanno lo stesso potenziale. Fra le lastre, invece, le linee di campo sono rette parallele, perpendicolari alle lastre; le superfici equipotenziali sono sempre perpendicolari alle linee di campo, quindi sono piani paralleli alle lastre.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-equipot-forme" tipo="spiega" domanda="Spiegalo con le tue parole." risposta=_r %}
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
{% include fill.html prima="In un campo elettrico, un elettrone è spinto nel verso" tipo="drop" opts="del campo|opposto al campo|perpendicolare al campo" ok="opposto al campo" dopo="." s="F = qE: con q negativa, la forza ha verso opposto a quello del campo." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
{% include calc-margin.html id="calcElR27" %}
Un protone si trova in un campo elettrico $E = 2000\ \text{N/C}$. Quanto vale il modulo della forza che subisce?

{% include fill-multi.html testo="$F =$ [3,2|3.2] $\times10^{-16}$ N" s="$F = e\,E = 1{,}6\times10^{-19}\cdot2000\ \text N = 3{,}2\times10^{-16}\ \text N$, nel verso del campo, perché il protone è positivo." %}
<div style="clear:both"></div>
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
{% include calc-margin.html id="calcElR28" %}
Un protone si trova in un campo elettrico $E = 1000\ \text{N/C}$. Quanto vale la sua accelerazione?

{% include fill-multi.html testo="$a \approx$ [9,6|9.6|9,58|9.58] $\times10^{10}$ m/s²" s="$a = \dfrac{e\,E}{m_p} = \dfrac{1{,}6\times10^{-19}\cdot1000}{1{,}67\times10^{-27}}\ \text{m/s}^2 \approx 9{,}6\times10^{10}\ \text{m/s}^2$: quasi diecimila miliardi di volte l'accelerazione di gravità." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un elettrone viene lanciato nello stesso verso del campo elettrico, che è uniforme. Che cosa succede?
{% capture _o %}[
{"v":"a","t":"accelera sempre di più"},
{"v":"b","t":"si muove a velocità costante"},
{"v":"c","t":"rallenta, si ferma e poi torna indietro, accelerando nel verso opposto al campo"},
{"v":"d","t":"devia di lato, perpendicolarmente al campo"}
]{% endcapture %}
{% include mcq.html id="rie-mcq-lanciato" opts=_o ok="c" s="La forza sull'elettrone ha verso opposto al campo, quindi opposto alla sua velocità: lo frena, come la gravità frena un sasso lanciato verso l'alto. Quando la velocità arriva a zero, la forza continua ad agire e lo riporta indietro." %}
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
{% include calc-margin.html id="calcElR29" %}
Fra i poli di una pila da $9\ \text V$ c'è una differenza di potenziale di $9\ \text V$. Quanta energia cinetica acquista un elettrone che, partendo da fermo, attraversa tutta questa differenza di potenziale?

{% include fill-multi.html testo="$K =$ [1,44|1.44] $\times10^{-18}$ J" s="$K = e\,\lvert\Delta V\rvert = 1{,}6\times10^{-19}\cdot9\ \text J = 1{,}44\times10^{-18}\ \text J$: non $9\ \text J$, perché la carica dell'elettrone è piccolissima." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR14" %}
Una carica $q = -3\times10^{-6}\ \text C$ va dal punto $A$, a potenziale $100\ \text V$, al punto $B$, a potenziale $400\ \text V$. Quanto vale la differenza di potenziale? Di quanto cambia l'energia potenziale della carica?

{% include fill-multi.html testo="$\Delta V =$ [300|+300] V, $\Delta U =$ [-9|−9] $\times10^{-4}$ J" s="$\Delta V = V_B - V_A = 400\ \text V - 100\ \text V = +300\ \text V$. $\Delta U = q\,\Delta V = -3\times10^{-6}\cdot 300\ \text J = -9\times10^{-4}\ \text J$: l'energia potenziale diminuisce, quindi la carica può fare questo spostamento da sola, e guadagna $9\times10^{-4}\ \text J$ di energia cinetica." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
{% include calc-margin.html id="calcElR30" %}
Un protone va dal punto $A$, a potenziale $500\ \text V$, al punto $B$, a potenziale $200\ \text V$. Quanto valgono la differenza di potenziale e la variazione della sua energia potenziale?

{% include fill-multi.html testo="$\Delta V =$ [-300|−300] V, $\Delta U =$ [-4,8|−4,8|-4.8|−4.8] $\times10^{-17}$ J" s="$\Delta V = V_B - V_A = 200\ \text V - 500\ \text V = -300\ \text V$, e $\Delta U = q\,\Delta V = 1{,}6\times10^{-19}\cdot(-300)\ \text J = -4{,}8\times10^{-17}\ \text J$. L'energia potenziale diminuisce: il protone va spontaneamente verso il potenziale più basso, e quell'energia diventa cinetica." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=2 %}
Nell'esperimento di Millikan, misurando la carica di moltissime goccioline d'olio, si trovavano sempre valori come $3{,}2\times10^{-19}\ \text C$, $4{,}8\times10^{-19}\ \text C$, $8{,}0\times10^{-19}\ \text C$, e mai valori come $2{,}4\times10^{-19}\ \text C$. Che cosa dimostra?
{% capture _r %}Tutte le cariche misurate sono multipli interi di $1{,}6\times10^{-19}\ \text C$ ($2$, $3$, $5$ volte), e mai valori intermedi: la carica di un corpo non può assumere qualunque valore, ma è sempre un multiplo intero della carica elementare $e = 1{,}6\times10^{-19}\ \text C$. È la quantizzazione della carica, e Millikan ha misurato così il valore di $e$.{% endcapture %}
{% include risposta-aperta.html id="ra-rie-millikan" tipo="spiega" domanda="Spiegalo con le tue parole." risposta=_r %}
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR15" %}
Un elettrone parte da fermo e attraversa una differenza di potenziale di $100\ \text V$. Con quale velocità arriva?

{% include fill-multi.html testo="$K =$ [1,6|1.6] $\times10^{-17}$ J, $v \approx$ [5,9|5.9|5,93|5.93] $\times10^{6}$ m/s" s="L'energia potenziale persa si trasforma in energia cinetica: $K = e\,\lvert\Delta V\rvert = 1{,}6\times10^{-19}\cdot 100\ \text J = 1{,}6\times10^{-17}\ \text J$. Da $K = \dfrac12 m_e v^2$: $v = \sqrt{\dfrac{2K}{m_e}} = \sqrt{\dfrac{3{,}2\times10^{-17}}{9{,}1\times10^{-31}}}\ \text{m/s} \approx 5{,}9\times10^{6}\ \text{m/s}$, circa il $2\%$ della velocità della luce, con appena $100\ \text V$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR31" %}
Un protone parte da fermo e attraversa una differenza di potenziale di $1000\ \text V$. Con quale velocità arriva?

{% include fill-multi.html testo="$K =$ [1,6|1.6] $\times10^{-16}$ J, $v \approx$ [4,4|4.4|4,38|4.38] $\times10^{5}$ m/s" s="$K = e\,\lvert\Delta V\rvert = 1{,}6\times10^{-19}\cdot1000\ \text J = 1{,}6\times10^{-16}\ \text J$. Da $K = \dfrac12 m_p v^2$: $v = \sqrt{\dfrac{2K}{m_p}} = \sqrt{\dfrac{3{,}2\times10^{-16}}{1{,}67\times10^{-27}}}\ \text{m/s} \approx 4{,}4\times10^{5}\ \text{m/s}$." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR32" %}
Un elettrone si muove a $1\times10^{6}\ \text{m/s}$. Quale differenza di potenziale deve attraversare per fermarsi?

{% include fill-multi.html testo="$\lvert\Delta V\rvert \approx$ [2,8|2.8|2,84|2.84] V" s="Tutta la sua energia cinetica, $K = \dfrac12 m_e v^2 = \dfrac12\cdot9{,}1\times10^{-31}\cdot(1\times10^{6})^2\ \text J \approx 4{,}55\times10^{-19}\ \text J$, deve diventare energia potenziale: $e\,\lvert\Delta V\rvert = K$, quindi $\lvert\Delta V\rvert = \dfrac{K}{e} = \dfrac{4{,}55\times10^{-19}}{1{,}6\times10^{-19}}\ \text V \approx 2{,}8\ \text V$. Bastano meno di $3\ \text V$, come in una pila." %}
<div style="clear:both"></div>
{% include ex-end.html %}

{% include ex.html diff=3 %}
{% include calc-margin.html id="calcElR33" %}
Un elettrone parte da fermo dal punto $A$, a potenziale $0\ \text V$. Il punto $B$ è a potenziale $50\ \text V$, il punto $C$ a potenziale $20\ \text V$.

{% include fill.html prima="Dei due punti, l'elettrone ha la velocità più grande in" tipo="drop" opts="B|C" ok="B" dopo="." s="Per una carica negativa l'energia potenziale U = qV è più bassa dove V è più alto: in B ne ha persa di più, e quindi ha più energia cinetica." %}

{% include fill-multi.html testo="Energia cinetica in $B$: $K_B =$ [8] $\times10^{-18}$ J" s="$K_B = e\,\lvert\Delta V\rvert = 1{,}6\times10^{-19}\cdot50\ \text J = 8\times10^{-18}\ \text J$." %}
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
