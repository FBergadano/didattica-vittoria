---
layout: capitolo
title: "Laboratorio di Misurazione"
subtitle: "Un laboratorio sulla densità"
corso: "introduzione-alla-fisica"
corso_titolo: "Introduzione alla Fisica"
materia: fisica
numero: 2
---

<cit autore="Francesco De Gregori, Alice">
Alice guarda i gatti e i gatti guardano nel Sole,
Mentre il Sole sta girando senza fretta.
Irene al quarto piano è lì tranquilla
Che si guarda nello specchio e accende un'altra sigaretta.
E Lady Marlen, bella più che mai,
Sorride, non ti dice la sua età.
Ma tutto questo Alice non lo sa.
</cit>

{% include box-obiettivi.html %}
Scopri perché nessuna misura è perfetta e come si dichiara quanto è precisa: l'incertezza strumentale, la semidispersione, l'errore relativo. Impari come si propagano le incertezze quando metti insieme più misure in un calcolo. Poi metti tutto in pratica in un'attività di laboratorio: misurare la densità di un sasso con un bicchiere d'acqua.
{% include box-end.html %}




<section id="cap1" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Parte I</span>
  <h2 class="chapter-title">La teoria dell'incertezza</h2>
</header>
<div class="prose" markdown="1">

### Errore e incertezza: una distinzione importante

Abbiamo detto che misurare significa associare un numero a una caratteristica di un oggetto. Chiameremo questa caratteristica il <definizione>misurando</definizione>.
{% include box-def.html testo="Misurando e Misura" %}
Il **misurando** è la grandezza che si vuole misurare: l'altezza di un tavolo, la massa di un sacco di riso, il volume di una bottiglietta d'acqua, etc.  
{% include box-end.html %} 

Eppure, quando si vuole misurare qualcosa, sorgono subito alcuni problemi. Li illustriamo con i seguenti esempi.
<!-- - **Problema 1: l'instabilità di una misurazione.** Quasi sempre <u markdown="span">gli oggetti *cambiano* continuamente</u>, anche se non ce ne accorgiamo. E quindi in realtà quello che abbiamo misurato in un certo momento potrebbe essere molto diverso da ciò che misureremmo in un momento successivo.
- **Problema 2: le imprecisioni.** Se anche un oggetto possedesse una caratteristica che non cambia mai, come faremmo a misurarla perfettamente? <u markdown="span">Ogni strumento che abbiamo è **imperfetto**</u>: non si può mai ottenere una misurazione infinitamente precisa. Inoltre, per compiere una misurazione dobbiamo basarci **sui nostri sensi** (vista, udito, ecc.), che sono limitati. Quindi anche noi che compiamo la misurazione siamo imperfetti e quindi introduciamo errori. -->

Considera questo cactus, di cui ci domandiamo la massa. La bilancia segna che la massa del cactus corrisponde a 3 421 g. Tuttavia, il vero valore della massa del cactus è leggermente diverso e corrisponde, inizialmente, a 3 421,2 g. Quella leggera differenza è così piccola che la bilancia non è in grado di rilevarla.  
Inoltre, quando arriva il Sole, l'acqua contenuta all'interno del cactus evapora parzialmente. Quindi la massa del cactus diminuisce, ma di così poco che la bilancia non è in grado di farlo vedere.  
È insomma evidente che non si possa misurare perfettamente la massa di un cactus, né di qualsiasi altra cosa.

{% include lab-virtuali/bilancia-cactus-lab.html %}

Oppure considerate il seguente esempio, in cui un'ape vola sopra un righello. Provate a indovinare la lunghezza dell'ape, e realizzerete quanto è difficile farlo. Qui la colpa non è né dello strumento né dell'ape: siamo noi che facciamo fatica a leggere il valore della misurazione perché le condizioni sono difficili. Come dicevamo, i nostri sensi sono limitati, e pur disponendo di un righello ben tarato talvolta è difficile realizzare una misurazione molto accurata.

{% include lab-virtuali/ape-righello-lab.html %}

Tutte queste considerazioni ci portano a realizzare che in Fisica <u>nessuna misurazione può essere perfetta</u>: esiste sempre una <definizione>incertezza</definizione> intrinseca nel processo di misura. Si preferisce parlare di *“incertezza”*, e non di “errore”, perché --- non potendo mai conoscere il valore esatto di una grandezza fisica --- non possiamo nemmeno sapere di quanto ci siamo sbagliati (né *se* ci siamo sbagliati).  
È perciò importante, quando si fornisce il valore di una misurazione, dichiarare anche quanto pensiamo che il valore sia vicino a quello reale. Questa stima sarà **un numero**, ed è ciò a cui ci riferiremo con il termine “incertezza”. In questa attività scopriremo come fare a fornire questo tipo di informazione.

{% include box-imp.html testo="Incertezza di misura" %}
L'**incertezza di misura** quantifica l'imprecisione della misurazione di una grandezza fisica. Una misura senza incertezza dichiarata è una misura incompleta.
{% include box-end.html %}

### Le fonti di incertezza

Ogni misurazione è affetta da più sorgenti di incertezza. Le principali sono:

1. **Risoluzione dello strumento** — nessuno strumento è infinitamente preciso: un righello normalmente ha le tacche spaziate di un millimetro, e quindi non è in grado di rilevare differenze dell'ordine, ad esempio, del micrometro. Allo stesso modo, una bilancia digitale da cucina normalmente ha le cifre fino al grammo, quindi non è in grado di rilevare una differenza di un decimo di grammo.
2. **Variabilità del misurando** — a volte è la grandezza stessa a cambiare mentre la misuriamo, e allora misurazioni ripetute danno valori diversi. È il caso del cactus: mentre l'acqua al suo interno evapora, la sua massa diminuisce, e pesandolo più volte nel corso della giornata otterremmo valori via via più piccoli.
3. **Errore umano** — anche chi misura sbaglia. Ad esempio, quando si deve misurare il tempo di un corridore nei 100 m, il tempo è spesso misurato da un arbitro che avvia e ferma il cronometro. Ma l'arbitro avrà dei tempi di reazione e quindi potrebbe essere leggermente in ritardo o leggermente in anticipo, alterando quindi --- anche se di poco --- il valore della misurazione. È quello che succede con l'ape sul righello: lo strumento funziona benissimo, ma noi facciamo fatica a leggerlo.

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qFonti %}[
{"t":"Con uno strumento abbastanza preciso l'incertezza di una misura diventa zero.","ok":false,"s":"No: qualunque strumento ha una risoluzione finita, e restano comunque le altre fonti di incertezza."},
{"t":"Se misuro tre volte la lunghezza di un tavolo con lo stesso righello e ottengo sempre lo stesso valore, la mia misura non ha incertezza.","ok":false,"s":"No: le misure non sono sparpagliate, ma resta l'incertezza dovuta alla risoluzione del righello."},
{"t":"Guardare la scala di un cilindro graduato dall'alto, invece che all'altezza del liquido, è un esempio di errore umano.","ok":true,"s":"Sì: lo strumento è corretto, è la lettura a essere sbagliata."}
]{% endcapture %}
{% include quiz.html domande=_qFonti id="q-fonti" senza_esempi="true" %}

Misuri più volte, nel giro di dieci minuti, la temperatura di una tazza di tè appena versato, con un termometro digitale, e ottieni valori sempre più bassi. Qual è la fonte di incertezza principale?
{% capture _o %}[
{"v":"a","t":"La risoluzione del termometro"},
{"v":"b","t":"La variabilità del misurando"},
{"v":"c","t":"L'errore umano"},
{"v":"d","t":"Le correnti d'aria che disturbano lo strumento"}
]{% endcapture %}
{% include mcq.html id="mcq-te" opts=_o ok="b" s="È il tè stesso a cambiare: si sta raffreddando, quindi la sua temperatura diminuisce mentre la misuriamo." %}
{% include box-end.html %}

### Stima dell'incertezza strumentale

La **sensibilità** di uno strumento è la più piccola variazione della grandezza misurata che esso riesce a rilevare.

{% include box-imp.html testo="Incertezza strumentale" %}
L'incertezza strumentale, che indichiamo nelle nostre formule con i.s., dipende solo dallo strumento e si stima nel seguente modo. 
- **Strumenti analogici** (righello, bilancia a lancetta): l'incertezza strumentale è pari a **metà della divisione più piccola**. Ad esempio, per un righello con la distanza tra una tacca e l'altra pari a un millimetro l'incertezza è pari a 0,5 mm.
- **Strumenti digitali** (bilancia elettronica, termometro digitale): l'incertezza strumentale è pari a **metà dell'ultima cifra del display**. Ad esempio, per una bilancia che arriva fino al grammo l'incertezza è pari a 0,5 g, per una che arriva fino al decimo di grammo è pari a 0,05 g.
{% include box-end.html %}

{% include figure/esempio-righello-figura.html %}

{% include lab-virtuali/esempio-calibro-lab.html %}

{% include esercizi/prova-strumenti.html %}

### Semidispersione e la notazione $\bar x \pm \Delta_x$

Quando si eseguono più misurazioni della stessa grandezza si ottengono in genere valori leggermente diversi: $x_1, x_2, \ldots, x_N$. Non sappiamo quale di quei valori sia quello corretto: per stimarlo, quindi, facciamo una media (proprio come con i voti!) e la indichiamo con $\bar x$, che corrisponde quindi a

{% include eq-annotated.html
     id="media"
     formula="\bar x = \dfrac{x_1 + x_2 + \cdots + x_N}{\, N \,}"
     frammenti="\bar x|x_1 + x_2 + \cdots + x_N|\, N \,"
     etichette="valore medio|somma di tutte le misurazioni|numero di misurazioni"
     posizioni="alto|alto|basso"
  %}

{% include box-ex.html testo="Prova tu!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
Misuri cinque volte il periodo di oscillazione di un pendolo.

| Misurazione | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $T$ (s) | 2,10 | 2,14 | 2,08 | 2,12 | 2,11 |

Quanto vale il valore medio $\bar T$?

{% include num.html id="numMediaPendolo" valore="2.11" unit="s" tol="0.2" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Misuri quattro volte la temperatura di una stanza, in punti diversi.

| Misurazione | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $T$ (°C) | 21,4 | 21,8 | 21,6 | 21,2 |

Quanto vale la temperatura media $\bar T$?

{% include num.html id="numMediaStanza" valore="21.5" unit="°C" tol="0.1" %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

Dopodiché misuriamo anche l'incertezza della misurazione tramite la <definizione>semidispersione</definizione>, che corrisponde alla metà della differenza tra il valore massimo e quello minimo, e si indica con $s_x$:

{% include eq-annotated.html
     id="semidispersione"
     formula="s_x = \dfrac{x_\max - x_\min}{2}"
     frammenti="s_x|x_\max|x_\min"
     etichette="semidispersione|valore più grande misurato|valore più piccolo misurato"
     posizioni="basso|alto|alto"
  %}

La semidispersione dice quanto sono "sparpagliate" le misurazioni: più sono lontane l'una dall'altra, più è grande. Vediamola su un esempio: cronometriamo quattro volte il tempo $t$ di caduta di una pallina e otteniamo questi valori.

| Misurazione | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $t$ (s) | 1,32 | 1,28 | 1,35 | 1,30 |

Il valore più grande è $1{,}35\ \text s$, il più piccolo $1{,}28\ \text s$: sono loro, e solo loro, a entrare nella formula.

{% include lab-virtuali/semidispersione-lab.html %}

Quindi:

$$
s_t = \frac{1{,}35\ \text s - 1{,}28\ \text s}{2} = \frac{0{,}07\ \text s}{2} = 0{,}035\ \text s.
$$

Le altre due misurazioni non contano: la semidispersione dipende solo dai due valori estremi.

{% include box-ex.html testo="Prova tu!" %}
{% include scorri.html %}
{% include scorri-slide.html %}
Pesi quattro volte una mela con la stessa bilancia. Tocca il valore più piccolo e il più grande, poi calcola la semidispersione $s_m$.

{% include misure-clic.html id="mc-mela" valori="152|149|155|150" unita="g" simbolo="m" %}

{% include num.html id="numSemiMela" valore="3" unit="g" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html %}
Misuri cinque volte la larghezza di un quaderno. Tocca il valore più piccolo e il più grande, poi calcola la semidispersione $s_\ell$.

{% include misure-clic.html id="mc-quaderno" valori="21,0|21,2|20,9|21,1|21,3" unita="cm" simbolo="\ell" %}

{% include num.html id="numSemiQuaderno" valore="0.2" unit="cm" %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

Alla fine si considera come incertezza globale $\Delta_x$ la somma tra l'incertezza strumentale e la semidispersione:

{% include eq-annotated.html
     id="incertezza-totale"
     formula="\Delta_x = \text{i.s.} + s_x"
     frammenti="\Delta_x|\text{i.s.}|s_x"
     etichette="incertezza totale|incertezza strumentale|semidispersione"
     posizioni="alto|alto|alto"
  %}

{% include box-imp.html testo="Valore medio e incertezza" %}
**Valore medio:**
$$\bar{x} = \frac{x_1 + x_2 + \cdots + x_N}{N}$$

**Incertezza:**
$$\Delta_x = \text{i.s.} + \frac{x_\text{max} - x_\text{min}}{2}.$$

Il risultato della misura si riporta nella forma:
$$x = \bar{x} \pm \Delta_x$$
{% include box-end.html %}

{% include unisci.html %}
{% include box-ex.html testo="Prova tu!" %}
Misuri tre volte la lunghezza di una matita con un righello che ha una tacca ogni millimetro, e ottieni questi valori.

| Misurazione | 1 | 2 | 3 |
|---|---|---|---|
| $\ell$ (cm) | 12,3 | 12,5 | 12,4 |

{% include scorri.html %}
{% include scorri-slide.html titolo="1. Il valore medio" %}
Quanto vale il valore medio $\bar\ell$ delle tre misurazioni?

{% include num.html id="numPassiMedia" valore="12.4" unit="cm" tol="0.1" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="2. Il più piccolo e il più grande" %}
Tocca, nella tabella, il valore più piccolo e poi il più grande.

{% include misure-clic.html id="mc-matita" valori="12,3|12,5|12,4" unita="cm" simbolo="\ell" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="3. La semidispersione" %}
Con il valore più piccolo e il più grande delle misurazioni della matita, quanto vale la semidispersione $s_\ell$?

{% include num.html id="numPassiSemi" valore="0.1" unit="cm" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="4. L'incertezza totale" %}
Il righello ha una tacca ogni millimetro. Quanto vale l'incertezza totale $\Delta_\ell = \text{i.s.} + s_\ell$, in centimetri?

{% include num.html id="numPassiDelta" valore="0.15" unit="cm" %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="5. Il risultato" %}
Come si scrive il risultato della misura della matita?
{% capture _oMatita %}[
{"v":"a","t":"$\\ell = (0{,}15 \\pm 12{,}4)\\ \\text{cm}$"},
{"v":"b","t":"$\\ell = (12{,}4 \\pm 0{,}15)\\ \\text{cm}$"},
{"v":"c","t":"$\\ell = (12{,}4 \\pm 0{,}1)\\ \\text{cm}$"},
{"v":"d","t":"$\\ell = (12{,}4 \\pm 0{,}05)\\ \\text{cm}$"}
]{% endcapture %}
{% include mcq.html id="mcq-passi-risultato" opts=_oMatita ok="b" s="Prima il valore medio, poi, dopo il $\pm$, l'incertezza totale: $\ell = (12{,}4 \pm 0{,}15)\ \text{cm}$. Nell'incertezza vanno sia la semidispersione ($0{,}1\ \text{cm}$) sia l'incertezza strumentale ($0{,}05\ \text{cm}$)." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include esercizi/prova-semidispersione.html %}

{% include box-ex.html testo="Verifica Subito!" %}
Anna e Bruno misurano la stessa matita con lo stesso righello. Anna ottiene $(17{,}5 \pm 0{,}1)\ \text{cm}$, Bruno $(17{,}9 \pm 0{,}1)\ \text{cm}$. Uno dei due ha sbagliato?
{% capture _o %}[
{"v":"a","t":"No: la differenza fra le due misure è piccola"},
{"v":"b","t":"Sì: gli intervalli $17{,}4$–$17{,}6\\ \\text{cm}$ e $17{,}8$–$18{,}0\\ \\text{cm}$ non si sovrappongono, quindi almeno uno dei due ha sbagliato la misura o ne ha sottostimato l'incertezza"},
{"v":"c","t":"No: due persone diverse ottengono sempre risultati diversi"},
{"v":"d","t":"Non si può dire senza conoscere la vera lunghezza della matita"}
]{% endcapture %}
{% include mcq.html id="mcq-matita" opts=_o ok="b" s="Se la lunghezza vera stesse in entrambi gli intervalli, i due intervalli dovrebbero avere almeno un punto in comune. Non ce l'hanno: qualcosa non torna." %}
{% include box-end.html %}
{% include unisci-end.html %}

### Errore relativo percentuale

Per chiedersi se l'incertezza di una misurazione sia grande o piccola, si deve confrontare l'incertezza con il valore della misurazione. Ad esempio, un'incertezza di un centimetro nella misurazione dell'altezza della Tour Eiffel significa che la misurazione è molto precisa. D'altra parte, la stessa incertezza di un centimetro nella misurazione della dimensione di una cellula biologica (dell'ordine del micrometro) è un errore gigantesco.   
Per questo è necessario, oltreché stimare l'incertezza, riferirla anche all'oggetto che si è misurato. Il modo migliore di farlo è il seguente.

{% include box-imp.html testo="Errore relativo percentuale" %}
L'<definizione>errore relativo percentuale</definizione> esprime l'incertezza della misurazione come percentuale del valore medio:

{% include eq-annotated.html
     id="errore-relativo"
     formula="e_x = \left(\dfrac{\Delta_x}{\bar{x}} \times 100\right)\%"
     frammenti="e_x|\Delta_x|\bar{x}"
     etichette="errore relativo percentuale|incertezza totale|valore medio"
     posizioni="alto|alto|basso"
  %}

<u>Un errore relativo percentuale piccolo indica una misura precisa</u> (l'incertezza è piccola rispetto al valore misurato); <u>un errore relativo percentuale grande indica che la misurazione non è affidabile</u> (l'incertezza è rilevante rispetto al valore misurato).


{% include box-end.html %}

{% include unisci.html %}
{% include box-ex.html testo="Verifica Subito!" %}
{% include calc-margin.html id="calcErrMatita" %}
La lunghezza della matita è $\ell = (12{,}4 \pm 0{,}15)\ \text{cm}$. Quanto vale il suo errore relativo percentuale $e_\ell$?

{% include num.html id="numErrMatita" valore="1.21" unit="%" tol="3" %}
<div style="clear:both"></div>
{% include spoiler.html testo="Mostra la soluzione" %}
$$e_\ell = \frac{\Delta_\ell}{\bar\ell}\times 100\% = \frac{0{,}15\ \text{cm}}{12{,}4\ \text{cm}}\times 100\% \approx 1{,}2\%.$$
{% include spoiler-end.html %}
{% include box-end.html %}

{% include esercizi/prova-errore-relativo.html %}

{% include box-ex.html testo="Verifica Subito!" %}
Quale di queste due misure è più precisa?
{% capture _o %}[
{"v":"a","t":"La massa di un'automobile: $(1200 \\pm 10)\\ \\text{kg}$"},
{"v":"b","t":"La massa di una moneta: $(7{,}5 \\pm 0{,}1)\\ \\text g$"},
{"v":"c","t":"Sono ugualmente precise"}
]{% endcapture %}
{% include mcq.html id="mcq-auto-moneta" opts=_o ok="a" s="Bisogna confrontare gli errori relativi, non le incertezze: per l'automobile $10/1200 \approx 0{,}8\%$, per la moneta $0{,}1/7{,}5 \approx 1{,}3\%$. Dieci chili sembrano tanti, ma rispetto a una tonnellata sono pochi." %}
{% include box-end.html %}
{% include unisci-end.html %}

### Propagazione degli errori

Spesso la grandezza che ci interessa non si misura direttamente, ma si *calcola* a partire da grandezze misurate. La quantità calcolata avrà un'incertezza che è data dal seguente teorema.

{% include box-thm.html testo="Teorema di propagazione degli errori" %}
Siano $x$ e $y$ due grandezze misurate con incertezze assolute $\Delta_x$, $\Delta_y$ e incertezze relative percentuali $e_x = (\Delta_x/\bar{x})\times 100\%$, $e_y = (\Delta_y/\bar{y})\times 100\%$.

| Operazione | Incertezza da usare | Regola |
|---|---|---|
| $z = x + y$ | **assoluta** | $\Delta_z = \Delta_x + \Delta_y$ |
| $z = x - y$ | **assoluta** | $\Delta_z = \Delta_x + \Delta_y$ |
| $z = x \cdot y$ | **relativa %** | $e_z = e_x + e_y$ |
| $z = x / y$ | **relativa %** | $e_z = e_x + e_y$ |
| $z = x^n$ | **relativa %** | $e_z = n\,e_x$ |

L'incertezza assoluta risultante si ricava sempre come $\Delta_z = \bar{z}\,\cdot\,e_z / 100$.
{% include box-end.html %}

{% include box-warn.html testo="Attenzione: nella differenza le incertezze si sommano!" %}
In $z = x - y$, le incertezze *assolute* si sommano (non si sottraggono). Se $x$ e $y$ sono vicini, $z = x - y$ è piccolo ma $\Delta_z = \Delta_x + \Delta_y$ rimane grande: l'errore relativo percentuale su $z$ può diventare molto elevato.
{% include box-end.html %}

{% include unisci.html %}
{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qProp %}[
{"t":"Nella differenza $z = x - y$ le incertezze assolute si sottraggono.","ok":false,"s":"No: si sommano sempre, anche nella differenza."},
{"t":"Nel prodotto $z = x \\cdot y$ si sommano le incertezze assolute.","ok":false,"s":"No: nel prodotto e nel quoziente si sommano gli errori relativi percentuali."},
{"t":"Se il lato di un quadrato ha un errore relativo del $2\\%$, l'area del quadrato ha un errore relativo del $4\\%$.","ok":true,"s":"Sì: l'area è il lato al quadrato, e per una potenza l'errore relativo si moltiplica per l'esponente: $2 \\times 2\\% = 4\\%$."}
]{% endcapture %}
{% include quiz.html domande=_qProp id="q-propagazione" senza_esempi="true" %}
{% include box-end.html %}

{% include esercizi/prova-propagazione.html %}
{% include unisci-end.html %}

</div>
</section>

<section id="cap2" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Parte II</span>
  <h2 class="chapter-title">L'attività di laboratorio</h2>
</header>
<div class="prose" markdown="1">

## Regole dell'attività
- L'attività di laboratorio deve essere svolta a casa e documentata con fotografie dove richiesto. Infine, si dovrà compilare un modulo sull'attività, come specificato più avanti. Il modulo dovrà essere salvato **in formato pdf** e inviato <u>alla mail</u>
<div style="text-align:center">
<a href="mailto:fulvio.bergadano@vittoriaweb.it">fulvio.bergadano@vittoriaweb.it</a>
</div>
- Potete utilizzare l'Intelligenza Artificiale, tranne nella parte di **Discussione**, come specificato.
- Potete lavorare in gruppo (o con l'aiuto di un genitore/parente/amico), ma ciascuno di voi deve eseguire *le proprie* misurazioni. Infatti, ciascuno di voi dovrà misurare la densità di un oggetto differente. Tale oggetto deve essere unico per ciascuno studente.
- Dopo la consegna della relazione ci sarà un'interrogazione che verterà sulla relazione stessa (vedi sotto, parte 3). Anche se avete lavorato in gruppo, all'interrogazione siete tenuti a sapere <u>tutto</u> quello che avete scritto.
- L'interrogazione e la relazione concorrono insieme alla determinazione del voto. Il voto vale al 100%.
- Se la relazione non viene consegnata in tempo, il voto sarà 4. Sarà però possibile recuperare con una prova (scritta o orale).
- Se avete un qualsiasi dubbio che non siete in grado di risolvere da soli **dovete** scrivermi!
- Lavorate serenamente e onestamente.


### Obiettivo
L'obiettivo è quello di farvi toccare con mano la precisione della Fisica sperimentale.

Durante l'esperienza, dovrete determinare la densità $d$ di un corpo irregolare (un sasso o simile) usando strumenti reperibili a casa.

{% include box-def.html testo="Densità" %}
La densità di un corpo è il rapporto tra la sua massa e il suo volume. Essa si calcola dunque con la formula
$$d = \frac{m}{V}$$
Si misura in kg/m³ (o in g/cm³ o in g/L in unità pratiche, dove “L” è il litro e corrisponde a 1 dm³).
{% include box-end.html %}

Il problema è misurare il **volume** di un corpo irregolare, di cui non possiamo calcolare il volume con formule geometriche semplici. Usiamo il **metodo della variazione di livello**: si immerge il corpo in acqua e si misura di quanto sale il livello.

{% include figure/immersione-livello-figura.html %}

### Strumenti necessari

- Un sasso (o altro corpo solido irregolare, non troppo piccolo)
- Un bicchiere cilindrico (idealmente con pareti verticali e base piatta)
- Acqua
- Un righello millimetrato
- Una bilancia (anche da cucina va bene)
- Un filo sottile (per calare il sasso delicatamente)
- Uno smartphone per le fotografie

### Perché serve un bicchiere cilindrico

Il calcolo funziona solo se il bicchiere ha **sezione costante**, cioè è un cilindro (pareti verticali, non a tronco di cono).

{% include figure/bicchiere-cilindrico-figura.html %}


## Istruzioni

Segui le fasi nell'ordine indicato. Per ciascuna misurazione: riporta i dati grezzi, calcola media e incertezza, stima l'errore relativo percentuale. Scatta una fotografia per ogni fase.

---

#### Fase 0 — Fotografia degli strumenti

Fotografa tutti gli strumenti che utilizzerai prima di iniziare. La foto deve essere nitida e tutti gli strumenti devono essere riconoscibili.

---

#### Fase 1 — Diametro del bicchiere

Misura il **diametro interno** $d$ del bicchiere con il righello. Ripeti la misurazione almeno **3 volte**, spostando il righello in posizioni leggermente diverse. Fai una foto del righello sul diametro del bicchiere.

Calcola l'incertezza strumentale i.s. del righello.

Poi calcola:

$$\bar{d} = \frac{d_1 + d_2 + d_3}{3}, \qquad s_d = \frac{d_\text{max} - d_\text{min}}{2}$$

(naturalmente, può essere che ti venga sempre lo stesso valore tutte e tre le volte).

Quindi, calcola 

$$\Delta_d = \text{i.s.} + s_d, \qquad e_d = \frac{\Delta_d}{\bar d}.$$

---

#### Fase 2 — Area di base del bicchiere

L'area di base $S$ del bicchiere si calcola come l'area di un cerchio:

$$S = \pi \!\left(\frac{\bar{d}}{2}\right)^2$$

Dopo aver calcolato $S$ sarà necessario anche stimare l'incertezza su $S$. Qui ci è utile il precedente teorema (vedi [qui](#propagazione-degli-errori)), che ci dice che se 

$$z = x^n$$

allora $e_z = n \cdot e_x$. Nel nostro caso, quindi,

$$e_S = 2\,e_d.$$

---

#### Fase 3 — Altezza iniziale dell'acqua

Versa dell'acqua nel bicchiere. Misura l'altezza iniziale $h_i$ del livello con il righello. Ripeti almeno **3 volte**. Fai una fotografia del righello mentre misura l'altezza. A questo punto calcola tutte le quantità utili.

$$\bar{h}_i = \ldots, \qquad s_{h_i} = \frac{h_{i,\text{max}} - h_{i,\text{min}}}{2}, \qquad e_{h_i} = \frac{s_{h_i} + \text{i.s.}}{\bar{h}_i} \times 100\%$$


---

#### Fase 4 — Volume iniziale dell'acqua

Conoscendo l'area di base dell'acqua e la sua altezza, possiamo calcolare il suo volume iniziale secondo la formula del volume di un cilindro

$$V_i=S\cdot h_i.$$

Secondo il teorema di propagazione degli errori (vedi [qui](#propagazione-degli-errori)) l'errore relativo percentuale sul volume è pari alla somma degli errori relativi percentuali di sezione e altezza, cioè

$$
e_{V_i} = e_S + e_{h_i}.
$$

Ci sarà utile stimare anche l'incertezza $\Delta_{V_i}$ del volume iniziale, che possiamo ricavare a partire dall'errore relativo percentuale come

$$
\Delta_{V_i} = \frac{e_{V_i} \cdot V_i}{100}.
$$

---

#### Fase 5 — Massa del sasso

Posa il sasso sulla bilancia e leggi la massa $m$. Fotografa il sasso e il valore.

Qui probabilmente ripetendo la misurazione il valore ottenuto sarebbe sempre uguale, quindi non è necessario ripetere più volte il processo e possiamo stimare semplicemente l'incertezza strumentale.

- Bilancia **digitale**: l'incertezza strumentale corrisponde a metà della cifra più piccola.
- Bilancia **analogica**: l'incertezza strumentale corrisponde a metà della distanza tra due tacche.

$$e_m = \frac{\text{i.s.}}{m} \times 100\%$$


---


#### Fase 6 — Inserimento del sasso e livello finale dell'acqua

Inserisci il sasso e misura il nuovo livello $h_f$. Ripeti almeno **3 volte**. Fotografa una volta il righello.

Calcola di nuovo tutte le quantità che hai calcolato nella Fase 3 e nella Fase 4.

---

#### Fase 7 — Calcolo della densità

**Variazione di livello** (differenza: gli errori assoluti si sommano):

$$z=\bar{h}_f - \bar{h}_i, \qquad e_{z} = \Delta_{h_f} + \Delta_{h_i}, \qquad e_{z} = \frac{e_{z}}{z} \times 100\%$$

**Volume del sasso** (prodotto: gli errori relativi si sommano):

$$V_\text{sasso} = S \cdot \Delta h$$

$$e_{V} = e_S + e_{z} = 2\,e_d + e_{z}, \qquad e_V = V_\text{sasso} \cdot \frac{e_V}{100}$$

**Densità** (quoziente: gli errori relativi si sommano):

$$d = \frac{m}{V_\text{sasso}}$$

$$e_d = e_m + e_V, \qquad e_d = d \cdot \frac{e_d}{100}$$

**Risultato finale da riportare:**

$$\boxed{d = \bar{d} \pm e_d \quad \left(e_d = \ldots\%\right)}$$

---

### Discussione

In questa sezione puoi **soltanto guadagnare punti**, non perderli. Rifletti liberamente sull'esperimento, senza l'aiuto dell'Intelligenza Artificiale. Ecco alcuni spunti (non obbligatori):

- Quali sono state le principali fonti di incertezza nel tuo esperimento?
- Quale grandezza ha contribuito di più all'errore finale su $d$? Perché?
- Come si potrebbe ridurre l'incertezza sul volume del sasso?
- Cosa succederebbe se il bicchiere non fosse perfettamente cilindrico?
- Esiste un modo alternativo per misurare il volume del sasso?
- Come potresti verificare il risultato in modo indipendente?

</div>
</section>

<section id="cap-relazione" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Relazione</span>
  <h2 class="chapter-title">Modulo e consegna</h2>
</header>
<div class="prose" markdown="1">

### Come consegnare

Compila il modulo qui sotto, poi clicca **Stampa modulo** in fondo. Nel dialogo di stampa scegli "Salva come PDF" come destinazione e invia il file a:

<div style="text-align:center;margin:0.5rem 0;">
<a href="mailto:fulvio.bergadano@vittoriaweb.it">fulvio.bergadano@vittoriaweb.it</a>
</div>

**Oggetto della mail:** `Relazione densità – [Nome Cognome] – [Classe]`

*In alternativa: compila su carta, fotografa ogni pagina e allega le foto alla mail.*

### Modulo

{% include lab-virtuali/modulo-relazione-lab.html %}

</div>
</section>

<section id="cap3" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Parte III</span>
  <h2 class="chapter-title">L'interrogazione</h2>
</header>
<div class="prose" markdown="1">

Dopo la consegna della relazione ci sarà una **breve interrogazione individuale** sull'esperimento. Non si tratta di ricordare i numeri ottenuti: si tratta di dimostrare di aver *capito* le scelte fatte.

{% include box-warn.html testo="Cosa devi saper spiegare" %}
Ti potrà essere chiesto di rispondere a domande come queste:

- Qual è la formula della densità?
- Qual è la differenza tra *incertezza* e *errore*?
- Come stimi l'incertezza di uno strumento analogico? E di uno digitale?
- Cos'è la semidispersione?
- Potrei darvi una lista di valori di una certa misurazione e chiedervi di calcolare la semidispersione. *Esempio*: vi fornisco la lista  
12.1 cm, 12.4 cm, 11.9 cm, 12.3 cm, 12.1 cm   
e voi mi calcolate la semidispersione come  
$$ s=\frac{12.4-11.9}{2} \ \text{cm}. $$
- Cosa significa scrivere $x = \bar{x} \pm e_x$?
- Cos'è l'errore relativo percentuale? Come si calcola e a cosa serve?
- Perché nella differenza $z = x - y$ le incertezze *assolute* si sommano (e non si sottraggono)?
- Perché nel prodotto e nel quoziente si sommano le incertezze *relative*?
- Perché nella propagazione dell'errore su $S = \pi(d/2)^2$ compare un fattore 2?

**Attenzione!** Questa lista di domande sono solo esempi per aiutarvi a comprendere la tipologia. Chiaramente, potrei farvi domande non contenute in questa lista.
{% include box-end.html %}

</div>
</section>
