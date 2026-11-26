---
layout: capitolo
title: "La funzione esponenziale"
corso: "funzioni"
corso_titolo: "Le Funzioni"
materia: matematica
numero: 2
---

<cit autore="Dante, canto XXVIII del Paradiso">
L'incendio suo seguiva ogne scintilla;
ed eran tante, che'l numero loro
più che'l doppiar de li scacchi s'inmilla.
</cit>

Per raccontare il numero di angeli che vede nel Paradiso, Dante dice che il numero degli angeli "s'inmilla" (cioè aumenta) ancor più del "doppiar degli scacchi". Sta facendo riferimento a una storia antica: il mito della nascita degli scacchi. Puoi sentire il racconto di questo mito con il seguente video.  

{% include video.html id="DIPcd3dIqrM" didascalia="L'invenzione degli scacchi e le potenze di base due" %}

Questa storia ci fa comprendere quanto le potenze possano raggiungere valori sorprendentemente enormi anche con esponenti relativamente normali. 

{% include spoiler.html testo="Una leggenda simile di origine cinese: il bastone dimezzato" %}
Una leggenda di origine cinese racconta di un lungo bastone, tramandato di generazione in generazione. A ogni passaggio, per ragioni rituali, il bastone viene tagliato esattamente a metà, e solo una delle due parti viene conservata e trasmessa.

Generazione dopo generazione, il bastone si accorcia sempre di più: prima metà, poi un quarto, poi un ottavo, e così via. La storia viene utilizzata per insegnare che per quanto il tempo passi qualcosa rimane sempre, per quanto piccolo: il bastone non scompare mai del tutto.

Anche qui, possiamo utilizzare le potenze per comprendere questa storia. Dopo la prima generazione un bastone lungo un metro diventerebbe lungo $\frac 12$ metro. Poi dopo due generazioni sarebbe un quarto di metro, cioè $\frac 12 \cdot \frac 12 = \left(\frac{1}{2}\right)^2$. Poi dopo un'altra generazione sarebbe un ottavo di metro, cioè $\frac 12 \cdot \frac 12 \cdot \frac 12 = \left(\frac 12\right)^3$, e così via. Alla trentesima generazione, del bastone non rimane che una molecola. Di nuovo, comprendiamo che il dimezzamento descritto può essere espresso dalle potenze. 

{% include spoiler-end.html %}


Le sorprendenti storie degli scacchi, del bastone dimezzato e degli angeli nel paradiso sono tutti esempi di <definizione>grandezze esponenziali</definizione>. <u markdown="span">Le grandezze esponenziali sono quelle che a ogni passo si **moltiplicano** o si **dividono** sempre per la stessa quantità.</u> Queste grandezze, in pochi passi, aumentano o diminuiscono in modo estremamente **veloce**: così veloce, che per noi è molto difficile da comprendere.  

Ci sorprendiamo nel vedere la crescita e la decrescita delle grandezze esponenziali perché noi siamo più abituati a un tipo di grandezze diverso: le <definizione>grandezze lineari</definizione>. <u markdown="span"> Le grandezze lineari sono quelle che a ogni passo aumentano o diminuiscono della stessa quantità, cioè in cui si somma sempre la stessa quantità a ogni passo.</u>

{% include box-imp.html testo="Lineari o esponenziali?" %}
Una grandezza è **lineare** se a ogni passo si **somma** (o si sottrae) sempre la stessa quantità.

Una grandezza è **esponenziale** se a ogni passo si **moltiplica** (o si divide) sempre per la stessa quantità, positiva e diversa da $1$.

{% include box-end.html %}

| | Grandezza lineare | Grandezza esponenziale |
|---|---|---|
| A ogni passo | si somma lo stesso numero $m$ | si moltiplica per lo stesso numero $a$ |
| Aumenta se | $m>0$ | $a>1$ |
| Diminuisce se | $m<0$ | $0<a<1$ |
| Un esempio che aumenta | $1,\ 3,\ 5,\ 7,\ 9,\dots$ (ogni volta $+2$) | $1,\ 2,\ 4,\ 8,\ 16,\dots$ (ogni volta $\cdot\,2$) |
| Un esempio che diminuisce | $16,\ 14,\ 12,\ 10,\dots$ (ogni volta $-2$) | $16,\ 8,\ 4,\ 2,\dots$ (ogni volta $\cdot\,\frac12$) |
| Per riconoscerla | la **differenza** fra un valore e il precedente è sempre la stessa | il **rapporto** fra un valore e il precedente è sempre lo stesso |
| Dopo $x$ passi, partendo da $q$ | $q+m\cdot x$ | $q\cdot a^x$ |

{% include box-esempio.html testo="Esempio: quale salvadanaio scegli?" %}
Ti offrono due salvadanai magici, che potrai aprire fra un mese. Nel primo, il giorno $1$ ci sono $1000$ euro, e ogni giorno se ne aggiungono altri $1000$. Nel secondo, il giorno $1$ c'è $1$ centesimo, e ogni giorno quello che c'è dentro raddoppia. Puoi prenderne uno solo, e lo apri il giorno $30$. Quale scegli?

Il primo salvadanaio è una grandezza lineare, perché ogni giorno si sommano $1000$ euro. Il secondo è una grandezza esponenziale, perché ogni giorno si moltiplica per $2$. Dal giorno $1$ al giorno $30$ ci sono $29$ passi. Quindi, nel primo salvadanaio il giorno $30$ ci sono

$$1000+1000\cdot 29 = 30\,000\ \text{euro},$$

mentre nel secondo ci sono

$$0{,}01\cdot 2^{29} = 5\,368\,709{,}12\ \text{euro}.$$

Più di cinque milioni di euro! Guarda che cosa succede nei giorni in mezzo.

| Giorno | Primo salvadanaio (€) | Secondo salvadanaio (€) |
|---|---|---|
| $1$ | $1000$ | $0{,}01$ |
| $2$ | $2000$ | $0{,}02$ |
| $3$ | $3000$ | $0{,}04$ |
| $10$ | $10\,000$ | $5{,}12$ |
| $20$ | $20\,000$ | $5242{,}88$ |
| $22$ | $22\,000$ | $20\,971{,}52$ |
| $23$ | $23\,000$ | $41\,943{,}04$ |
| $30$ | $30\,000$ | $5\,368\,709{,}12$ |

Il giorno $10$ nel secondo salvadanaio ci sono solo cinque euro, e chi l'ha scelto si starà già pentendo. Fino al giorno $22$ il primo è ancora in vantaggio, ma il giorno $23$ il secondo lo supera, e da lì in poi non c'è più gara.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
{% capture _qLinExp %}[
{"t":"Un taxi costa 3 euro alla partenza, più 2 euro per ogni chilometro. Il prezzo della corsa è una grandezza lineare.","ok":true,"s":"Sì: a ogni chilometro si sommano sempre 2 euro."},
{"t":"Hai 100 euro e ne spendi 5 ogni settimana. I tuoi risparmi sono una grandezza esponenziale, perché diminuiscono.","ok":false,"s":"No: ogni settimana si sottraggono sempre 5 euro, quindi sono una grandezza lineare. Anche le grandezze lineari possono diminuire."},
{"t":"Mandi un video a 3 amici. Ognuno di loro lo manda ad altre 3 persone, e ognuna di queste ad altre 3. Il numero di persone che ricevono il video a ogni passaggio è una grandezza esponenziale.","ok":true,"s":"Sì: 3, 9, 27… A ogni passaggio si moltiplica per 3. È così che un video diventa virale."}
]{% endcapture %}
{% include quiz.html domande=_qLinExp id="q-lin-exp" senza_esempi="true" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Quali di queste grandezze sono lineari, e quali esponenziali?
{% capture _sLinExp %}[
{"t":"L'altezza di una candela che si accorcia di 2 cm ogni ora","c":0},
{"t":"Il numero di batteri nello yogurt, se raddoppia ogni ora","c":1},
{"t":"Le pagine lette, se ne leggi 20 al giorno","c":0},
{"t":"La caffeina nel sangue, che si dimezza ogni 5 ore circa","c":1}
]{% endcapture %}
{% include sort.html id="sort-lin-exp" dati=_sLinExp col0="Lineari" col1="Esponenziali" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Quanti antenati!" %}
A ogni generazione, andando indietro, il numero dei tuoi antenati raddoppia.

{% include fill-multi.html testo="Hai 2 genitori, 4 nonni, [8] bisnonni e [16] trisnonni." s="Andando indietro di dieci generazioni gli antenati sono già $2^{10}=1024$." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Il foglio piegato" %}
{% include calc-margin.html id="calcFoglio" %}
Un foglio di carta è spesso circa $0{,}1\ \text{mm}$. Ogni volta che lo pieghi a metà, lo spessore raddoppia.

{% include fill-multi.html testo="Dopo 1 piega è spesso 0,2 mm, dopo 2 pieghe [0,4] mm, dopo 3 pieghe [0,8] mm." s="Prova davvero con un foglio di quaderno: dopo 6 o 7 pieghe non riuscirai più ad andare avanti." %}
<div style="clear:both"></div>
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Formalizza" %}
Come fai a scrivere lo spessore del foglio dopo $x$ pieghe?

{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="E se lo pieghi 42 volte?" %}
Immagina di riuscire a piegare a metà $42$ volte un foglio spesso $0{,}1\ \text{mm}$. Secondo te, fin dove arriverebbe? (Non servono conti: prova a indovinare.)
{% capture _oFoglio %}[
{"v":"a","t":"Al soffitto della classe"},
{"v":"b","t":"In cima alla Mole Antonelliana"},
{"v":"c","t":"In cima all'Everest"},
{"v":"d","t":"Oltre la Luna"}
]{% endcapture %}
{% include mcq.html id="mcq-foglio-luna" opts=_oFoglio ok="d" s="Lo spessore è $0{,}1\ \text{mm}\cdot 2^{42}$, cioè circa $440\,000\ \text{km}$. La Luna è in media a $384\,000\ \text{km}$ da noi!" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Troppi antenati" %}
Hai $2$ genitori, $4$ nonni, $8$ bisnonni: a ogni generazione, andando indietro, il numero raddoppia. Trenta generazioni fa, cioè circa $800$ anni fa, avresti dunque $2^{30}$ antenati: più di un miliardo. Ma a quell'epoca sulla Terra vivevano circa $400$ milioni di persone!

{% capture _rAntenati %}Molti di quegli antenati sono la stessa persona, contata più volte. Se due miei antenati erano cugini, anche alla lontana, avevano dei nonni o dei bisnonni in comune, che nell'albero genealogico compaiono più volte. Il raddoppio quindi vale solo per le generazioni vicine. E per lo stesso motivo siamo tutti parenti, se andiamo abbastanza indietro.{% endcapture %}
{% include risposta-aperta.html id="ra-antenati" tipo="spiega" domanda="Come è possibile? Prova a dare una spiegazione." risposta=_rAntenati %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

La Matematica --- con il suo solito linguaggio così astratto --- parla, invece che di grandezze esponenziali, di <definizione>funzione esponenziale</definizione>.


{% include box-obiettivi.html %}
In questo capitolo conosciamo una delle funzioni più belle e importanti della Matematica: l'esponenziale. Ne studieremo le caratteristiche e alcune delle sue innumerevoli applicazioni.
{% include box-end.html %}




