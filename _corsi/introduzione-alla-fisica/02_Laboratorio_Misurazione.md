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
Scopri perché nessuna misura è perfetta e come si dichiara quanto è precisa: l'incertezza strumentale, la semidispersione, l'incertezza relativa. Impari quando una misura è compatibile con il valore vero. Impari come si propagano le incertezze quando metti insieme più misure in un calcolo. Poi metti tutto in pratica in un'attività di laboratorio: misurare la densità di un sasso con un bicchiere d'acqua.
{% include box-end.html %}

<section id="cap1" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Parte I</span>
  <h2 class="chapter-title">La teoria dell'incertezza</h2>
</header>
<div class="prose" markdown="1">

### Errore e incertezza: una distinzione importante

{% include margin-note.html testo="Il misurando è ciò che vogliamo misurare" %}

Abbiamo detto che misurare significa associare un numero a una caratteristica di un oggetto. Chiameremo questa caratteristica il <definizione>misurando</definizione>.

{% include margin-note-end.html %}
{% include box-def.html testo="Misurando e Misura" %}
Il **misurando** è la grandezza che si vuole misurare: l'altezza di un tavolo, la massa di un sacco di riso, il volume di una bottiglietta d'acqua, etc.  
{% include box-end.html %} 

{% include margin-note.html testo="Lo strumento non vede le piccole differenze, e il misurando cambia" %}

Eppure, quando si vuole misurare qualcosa, sorgono subito alcuni problemi. Li illustriamo con i seguenti due esempi.

1. Considera questo cactus, di cui ci domandiamo la massa. La bilancia segna che la massa del cactus corrisponde a 3 421 g. Tuttavia, il vero valore della massa del cactus è leggermente diverso e corrisponde, inizialmente, a 3 421,2 g. Quella leggera differenza è così piccola che la bilancia non è in grado di rilevarla.  
Inoltre, quando arriva il Sole, l'acqua contenuta all'interno del cactus evapora parzialmente. Quindi la massa del cactus diminuisce, ma di così poco che la bilancia non è in grado di farlo vedere.  
È insomma evidente che non si possa misurare perfettamente la massa di un cactus, né di qualsiasi altra cosa.

{% include margin-note-end.html %}

{% include lab-virtuali/bilancia-cactus-lab.html %}

{% include margin-note.html testo="Anche chi misura ha dei limiti" %}

{: start="2"}
2. Ora considera il seguente esempio, in cui un'ape vola sopra un righello. Prova a indovinare la lunghezza dell'ape, e realizzerai quanto è difficile farlo. Qui la colpa non è né dello strumento né dell'ape: siamo noi che facciamo fatica a leggere il valore della misurazione perché le condizioni sono difficili. Come dicevamo, i nostri sensi sono limitati, e pur disponendo di un righello ben tarato talvolta è difficile realizzare una misurazione molto accurata.

{% include margin-note-end.html %}

{% include lab-virtuali/ape-righello-lab.html %}

{% include margin-note.html testo="Nessuna misura è perfetta: si dichiara sempre l'incertezza" %}

Tutte queste considerazioni ci portano a realizzare che in Fisica <u markdown="span">**nessuna misurazione può essere perfetta**</u>: esiste sempre una <definizione>incertezza</definizione> intrinseca nel processo di misura. Si preferisce parlare di *“incertezza”*, e non di “errore”, perché --- non potendo mai conoscere il valore esatto di una grandezza fisica --- non possiamo nemmeno sapere di quanto ci siamo sbagliati (né *se* ci siamo sbagliati).  
È perciò importante, quando si fornisce il valore di una misurazione, <u markdown="span">dichiarare anche quanto pensiamo che il valore sia vicino a quello reale</u>. Questa stima sarà **un numero**, ed è ciò a cui ci riferiremo con il termine “incertezza”. In questa attività scopriremo come fare a fornire questo tipo di informazione.

{% include margin-note-end.html %}

{% include box-imp.html testo="Incertezza di misura" %}
L'**incertezza di misura** quantifica l'imprecisione della misurazione di una grandezza fisica. Una misura senza incertezza dichiarata è una misura incompleta.
{% include box-end.html %}

### Le fonti di incertezza

{% include margin-note.html testo="Tre fonti di incertezza: strumento, misurando, chi misura" %}

Ogni misurazione è affetta da più sorgenti di incertezza. Le principali sono:

1. **Sensibilità dello strumento** — nessuno strumento è infinitamente preciso: un righello normalmente ha le tacche spaziate di un millimetro, e quindi non è in grado di rilevare differenze dell'ordine, ad esempio, del micrometro. Allo stesso modo, una bilancia digitale da cucina normalmente ha le cifre fino al grammo, quindi non è in grado di rilevare una differenza di un decimo di grammo.
2. **Variabilità del misurando** — a volte è la grandezza stessa a cambiare mentre la misuriamo, e allora misurazioni ripetute danno valori diversi. È il caso del cactus: mentre l'acqua al suo interno evapora, la sua massa diminuisce, e pesandolo più volte nel corso della giornata otterremmo valori via via più piccoli.
3. **Errore umano** — anche chi misura sbaglia. Ad esempio, quando si deve misurare il tempo di un corridore nei 100 m, il tempo è spesso misurato da un arbitro che avvia e ferma il cronometro. Ma l'arbitro avrà dei tempi di reazione e quindi potrebbe essere leggermente in ritardo o leggermente in anticipo, alterando quindi --- anche se di poco --- il valore della misurazione. È quello che succede con l'ape sul righello: lo strumento funziona benissimo, ma noi facciamo fatica a leggerlo.

{% include margin-note-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qFonti %}[
{"t":"Con uno strumento abbastanza preciso l'incertezza di una misura diventa zero.","ok":false,"s":"No: qualunque strumento ha una sensibilità limitata, e restano comunque le altre fonti di incertezza."},
{"t":"Se misuro tre volte la lunghezza di un tavolo con lo stesso righello e ottengo sempre lo stesso valore, la mia misura non ha incertezza.","ok":false,"s":"No: le misure non sono sparpagliate, ma resta l'incertezza dovuta alla sensibilità del righello."},
{"t":"Guardare la scala di un cilindro graduato dall'alto, invece che all'altezza del liquido, è un esempio di errore umano.","ok":true,"s":"Sì: lo strumento è corretto, è la lettura a essere sbagliata."}
]{% endcapture %}
{% include quiz.html domande=_qFonti id="q-fonti" senza_esempi="true" %}

Misuri più volte, nel giro di dieci minuti, la temperatura di una tazza di tè appena versato, con un termometro digitale, e ottieni valori sempre più bassi. Qual è la fonte di incertezza principale?
{% capture _o %}[
{"v":"a","t":"La sensibilità del termometro"},
{"v":"b","t":"La variabilità del misurando"},
{"v":"c","t":"L'errore umano"},
{"v":"d","t":"Le correnti d'aria che disturbano lo strumento"}
]{% endcapture %}
{% include mcq.html id="mcq-te" opts=_o ok="b" s="È il tè stesso a cambiare: si sta raffreddando, quindi la sua temperatura diminuisce mentre la misuriamo." %}
{% include box-end.html %}

### Stima dell'incertezza strumentale

{% include margin-note.html testo="Strumenti analogici e digitali" %}

Impariamo a stimare l'incertezza che deriva dallo strumento guardando direttamente ad esso. Per farlo, abbiamo bisogno di distinguere tra <definizione>strumenti analogici</definizione> e <definizione>strumenti digitali</definizione>.

{% include margin-note-end.html %}

{% include box-def.html testo="Strumenti analogici e digitali" %}
Uno strumento è **analogico** quando il valore della misura si legge confrontando la posizione di un indice (una lancetta, il livello di un liquido, il bordo di un oggetto) con una **scala graduata**, cioè con una serie di tacche.

Uno strumento è **digitale** quando il valore della misura compare già scritto in cifre su un **display**.
{% include box-end.html %}

Spesso lo stesso strumento esiste in entrambe le versioni. Nella prima riga qui sotto vedete una bilancia da cucina, un cronometro e un termometro analogici: per leggerli dovete guardare dove si ferma la lancetta o la colonnina di mercurio rispetto alle tacche.

{% include img-row.html
   immagini="/corsi/immagini/strumento-analogico-bil.webp|/corsi/immagini/strumento-analogico-cr.webp|/corsi/immagini/strumento-analogico-ter.webp"
   alt="Bilancia da cucina a lancetta|Cronometro a lancette|Termometro a mercurio"
   larghezza="190px" altezza="143px" %}

Nella seconda riga ci sono gli stessi strumenti in versione digitale: qui il numero si legge direttamente sul display, senza tacche.

{% include img-row.html
   immagini="/corsi/immagini/strumento-digitale-bil.webp|/corsi/immagini/strumento-digitale-cr.webp|/corsi/immagini/strumento-digitale-ter.webp"
   alt="Bilancia da cucina digitale|Cronometro digitale|Termometro digitale"
   larghezza="190px" altezza="143px" %}

<p style="font-size:11px;color:#6b7280;text-align:center;margin-top:-0.8rem;">Foto da Wikimedia Commons (CC BY-SA): Cristian.giovanetti, Al Riaz Uddin, Menchi, Ser Amantio di Nicolao, Lesselich, Srini297.</p>

{% include margin-note.html testo="Ogni strumento ha una sensibilità" %}

Che sia analogico o digitale, nessuno strumento può distinguere valori vicini quanto vogliamo: <u markdown="span">c'è sempre un **limite**</u>, ed è questo limite che ci serve per stimare l'incertezza.

{% include margin-note-end.html %}

{% include box-def.html testo="Sensibilità" %}
La **sensibilità** di uno strumento è la più piccola variazione della grandezza misurata che esso riesce a rilevare.
- **Strumenti analogici** (righello, bilancia a lancetta): la sensibilità è il valore della **divisione più piccola**, cioè della distanza fra due tacche vicine. Per un righello millimetrato è 1 mm.
- **Strumenti digitali** (bilancia elettronica, termometro digitale): la sensibilità è il valore dell'**ultima cifra del display**. Per una bilancia che arriva fino al grammo è 1 g, per una che arriva fino al decimo di grammo è 0,1 g.
{% include box-end.html %}

Una volta trovata la sensibilità, l'incertezza strumentale si ottiene subito.

{% include box-imp.html testo="Incertezza strumentale" %}
L'incertezza strumentale, che indichiamo nelle nostre formule con i.s., dipende solo dallo strumento ed è pari a **metà della sensibilità**. Per il righello millimetrato è quindi 0,5 mm; per la bilancia che arriva fino al grammo 0,5 g, per quella che arriva al decimo di grammo 0,05 g.
{% include box-end.html %}

{% include figure/esempio-righello-figura.html %}

{% include lab-virtuali/esempio-calibro-lab.html %}

{% include esercizi/prova-strumenti.html %}

### Semidispersione e la notazione $\bar x \pm I_x$

{% include margin-note.html testo="Le altre incertezze si stimano dopo aver misurato" %}

Come abbiamo detto prima, parte dell'incertezza proviene dallo strumento che utilizziamo, ma ci sono altre fonti di incertezza: l'errore umano, cioè del misuratore, e la variabilità del misurando. Stimare queste fonti di errore *a priori* sarebbe un compito molto difficile: l'errore umano dipende da persona a persona, e la variabilità del misurando dipende da un grandissimo numero di fattori, che cambiano da un luogo a un altro o da un momento a un altro. Questi tipi di incertezza, quindi, <u markdown="span">si stimano *a posteriori*, cioè **dopo** aver eseguito le misurazioni</u> e aver osservato i valori ottenuti.   

{% include margin-note-end.html %}

{% include margin-note.html testo="Il valore medio stima il valore vero" %}

Immaginiamo di dover misurare una certa grandezza $x$. Quando si eseguono più misurazioni della stessa grandezza si ottengono in genere valori leggermente diversi: $x_1, x_2, \ldots, x_N$. Non sappiamo quale di quei valori sia quello corretto: per stimarlo, quindi, facciamo una media (proprio come con i voti!) e la indichiamo con $\bar x$, che corrisponde quindi a

{% include margin-note-end.html %}

{% include eq-annotated.html
     id="media"
     formula="\bar x = \dfrac{x_1 + x_2 + \cdots + x_N}{\, N \,}"
     frammenti="\bar x|x_1 + x_2 + \cdots + x_N|\, N \,"
     etichette="valore medio|somma di tutte le misurazioni|numero di misurazioni"
     posizioni="alto|alto|basso"
  %}

{% include box-ex.html testo="Prova tu!" %}
{% include calc-margin.html id="calcMedie" %}
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
<div style="clear:both"></div>
{% include box-end.html %}

{% include margin-note.html testo="La semidispersione: metà della differenza fra massimo e minimo" %}

Dopodiché misuriamo anche l'incertezza della misurazione tramite la <definizione>semidispersione</definizione>, che corrisponde alla metà della differenza tra il valore massimo e quello minimo. Cioè, se abbiamo una grandezza $x$ di cui effettuiamo un certo numero di misurazioni, la semidispersione $s_x$ si calcola nel seguente modo:

{% include margin-note-end.html %}

{% include eq-annotated.html
     id="semidispersione"
     formula="s_x = \dfrac{x_\max - x_\min}{2}"
     frammenti="s_x|x_\max|x_\min"
     etichette="semidispersione di x|valore più grande misurato|valore più piccolo misurato"
     posizioni="alto|alto|alto"
  %}

{% include margin-note.html testo="Misure sparpagliate, semidispersione grande" %}

La semidispersione dice quanto sono "sparpagliate" le misurazioni: <u markdown="span">più esse sono lontane l'una dall'altra, più la semidispersione è grande</u>. 

Proviamo a vederlo su un grafico. Due gruppi misurano sei volte l'altezza dello stesso banco, con lo stesso metro; in orizzontale mettiamo il numero della misurazione, in verticale il valore ottenuto. I due grafici hanno la stessa scala, quindi si possono confrontare a colpo d'occhio.

{% include margin-note-end.html %}

{% include figure/semidispersione-gruppi-figura.html %}

{% include margin-note.html testo="Metà dell'altezza della fascia" %}

Come si legge la semidispersione su un grafico del genere? Tracciamo una linea orizzontale che passa per il punto più alto e un'altra che passa per il punto più basso: tutte le misurazioni stanno dentro la fascia compresa fra le due linee. L'altezza della fascia è proprio $x_\max - x_\min$, quindi la semidispersione è metà dell'altezza della fascia.

{% include margin-note-end.html %}

{% include figure/semidispersione-fascia-figura.html %}

Se i punti sono vicini fra loro, la fascia è sottile e $s_x$ è piccola; se sono sparpagliati, la fascia è larga e $s_x$ è grande.

{% include box-ex.html testo="Verifica Subito!" %}
Torna ai grafici dei due gruppi che misurano il banco. Quale dei due ha la semidispersione $s_x$ più elevata?

{% capture _o %}[
{"v":"a","t":"Il Gruppo 1"},
{"v":"b","t":"Il Gruppo 2"},
{"v":"c","t":"Hanno la stessa semidispersione, perché hanno fatto lo stesso numero di misurazioni"}
]{% endcapture %}
{% include mcq.html id="mcq-fascia" opts=_o ok="b" s="Nel Gruppo 2 i punti vanno da 74,6 cm a 76,1 cm: la fascia è alta 1,5 cm e la semidispersione è 0,75 cm. Nel Gruppo 1 vanno da 75,1 cm a 75,4 cm: la fascia è alta solo 0,3 cm e la semidispersione è 0,15 cm. Il numero di misurazioni non c'entra: conta quanto sono lontani il punto più alto e il più basso." %}
{% include box-end.html %}

{% include margin-note.html testo="Contano solo il valore più grande e il più piccolo" %}

Vediamo un esempio: cronometriamo quattro volte il tempo $t$ di caduta di una pallina e otteniamo questi valori.

| Misurazione | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $t$ (s) | 1,32 | 1,28 | 1,35 | 1,30 |

Il valore più grande è $1{,}35\ \text s$, il più piccolo $1{,}28\ \text s$: sono loro, e solo loro, a entrare nella formula.

{% include margin-note-end.html %}

{% include lab-virtuali/semidispersione-lab.html %}

Quindi:

$$
s_t = \frac{1{,}35\ \text s - 1{,}28\ \text s}{2} = \frac{0{,}07\ \text s}{2} = 0{,}035\ \text s.
$$

Le altre due misurazioni non contano: <u markdown="span">la semidispersione dipende **solo dai due valori estremi**</u>.

{% include box-ex.html testo="Prova tu!" %}
{% include calc-margin.html id="calcSemi" %}
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
{% include scorri-slide.html %}
Ora tocca a te cronometrare. Achille corre i 100 metri: avvia il cronometro quando parte e fermalo quando si ferma sul traguardo. Il cronometro arriva al millesimo di secondo. Fai quattro prove (se una ti viene male puoi ripeterla da sola), poi calcola la semidispersione $s_t$ dei tuoi tempi.

{% include lab-virtuali/cronometra-achille-lab.html %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
<div style="clear:both"></div>
{% include box-end.html %}

{% include margin-note.html testo="Incertezza totale: strumentale più semidispersione" %}

Alla fine si considera come incertezza globale $I_x$ <u markdown="span">la **somma** tra l'incertezza strumentale e la semidispersione</u>:

{% include margin-note-end.html %}

{% include eq-annotated.html
     id="incertezza-totale"
     formula="I_x = \text{i.s.} + s_x"
     frammenti="I_x|\text{i.s.}|s_x"
     etichette="incertezza totale|incertezza strumentale|semidispersione"
     posizioni="alto|alto|alto"
  %}

{% include box-imp.html testo="Valore medio e incertezza" %}
**Valore medio:**
$$\bar{x} = \frac{x_1 + x_2 + \cdots + x_N}{N}$$

**Incertezza:**
$$I_x = \text{i.s.} + \frac{x_\text{max} - x_\text{min}}{2}.$$

Il risultato della misura si riporta nella forma:
$$x = \bar{x} \pm I_x$$
{% include box-end.html %}

Vediamo tutta la procedura su un esempio in cui conosciamo il valore vero della grandezza misurata.

{% include box-esempio.html testo="Esempio: la larghezza della tessera sanitaria" %}
La tessera sanitaria, come le carte di credito, ha dimensioni fissate da una norma internazionale: è larga $85{,}60\ \text{mm}$. Le tessere vengono controllate in fabbrica con strumenti precisi al centesimo di millimetro, molto più precisi di un righello; possiamo quindi considerare $85{,}60\ \text{mm}$ come il valore vero della larghezza.

Misuriamo ora la tessera con un normale righello millimetrato, appoggiandolo quattro volte in punti diversi. Otteniamo questi valori.

| Misurazione | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $\ell$ (mm) | 85 | 86 | 86 | 85 |

Il valore medio è

$$\bar\ell = \frac{85 + 86 + 86 + 85}{4}\ \text{mm} = 85{,}5\ \text{mm}.$$

Il righello ha una tacca ogni millimetro, quindi la sua sensibilità è $1\ \text{mm}$: il bordo della tessera cade fra due tacche, e con il righello non possiamo dire dove si trovi esattamente fra le due. L'incertezza strumentale è metà della sensibilità.

{% include figure/tessera-righello-figura.html %}

Concludiamo quindi che l'incertezza strumentale del righello è

$$\text{i.s.} = \frac{1\ \text{mm}}{2} = 0{,}5\ \text{mm}.$$

La semidispersione, infine, è

$$s_\ell = \frac{86\ \text{mm} - 85\ \text{mm}}{2} = 0{,}5\ \text{mm},$$

quindi l'incertezza totale è $I_\ell = 0{,}5\ \text{mm} + 0{,}5\ \text{mm} = 1{,}0\ \text{mm}$, e il risultato della misura è

$$\ell = (85{,}5 \pm 1{,}0)\ \text{mm}.$$

Questo significa che la larghezza della tessera dovrebbe essere compresa fra $85{,}5 - 1{,}0 = 84{,}5\ \text{mm}$ e $85{,}5 + 1{,}0 = 86{,}5\ \text{mm}$. <u markdown="span">Il valore vero, $85{,}60\ \text{mm}$, è effettivamente compreso in questo intervallo</u>.
{% include box-end.html %}

{% include margin-note.html testo="Incertezza sottostimata e sovrastimata" %}

Supponiamo invece di aver misurato la tessera una sola volta, di aver letto $85\ \text{mm}$ e di aver considerato soltanto l'incertezza strumentale. Avremmo scritto $\ell = (85{,}0 \pm 0{,}5)\ \text{mm}$, cioè una larghezza compresa fra $84{,}5$ e $85{,}5\ \text{mm}$, e il valore vero, $85{,}60\ \text{mm}$, <u markdown="span">sarebbe rimasto **fuori** dall'intervallo</u>. Lo strumento è lo stesso di prima, ma <u markdown="span">l'incertezza dichiarata è **troppo piccola**</u>, perché con una sola misurazione non abbiamo potuto stimare la semidispersione.

Può succedere anche il contrario. Se avessimo scritto $\ell = (85{,}5 \pm 3)\ \text{mm}$, il valore vero sarebbe certamente compreso nell'intervallo, ma l'intervallo, da $82{,}5$ a $88{,}5\ \text{mm}$, sarebbe molto più largo del necessario.

{% include margin-note-end.html %}

{% include figure/compatibilita-tessera-figura.html %}

{% include box-def.html testo="Misure compatibili" %}
Una misura $x = \bar x \pm I_x$ è <definizione>compatibile</definizione> con un valore se quel valore è compreso fra $\bar x - I_x$ e $\bar x + I_x$; altrimenti è <definizione>non compatibile</definizione>.

Se una misura non è compatibile con il valore vero, si è sbagliato qualcosa nella misurazione oppure l'incertezza è stata <definizione>sottostimata</definizione>, cioè dichiarata più piccola di quanto fosse davvero. Un'incertezza <definizione>sovrastimata</definizione>, invece, è più grande del necessario: la misura resta compatibile, ma è poco utile.

Due misure della stessa grandezza sono <definizione>compatibili fra loro</definizione> se i loro intervalli hanno almeno un punto in comune.
{% include box-end.html %}

{% include unisci.html %}
{% include box-ex.html testo="Prova tu!" %}
{% include calc-margin.html id="calcMatita" %}
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
Il righello ha una tacca ogni millimetro. Quanto vale l'incertezza totale $I_\ell = \text{i.s.} + s_\ell$, in centimetri?

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
{% include scorri-slide.html titolo="6. Il confronto con il valore vero" %}
Un compagno misura la stessa matita con un calibro, molto più preciso del righello, e trova $12{,}52\ \text{cm}$: prendiamolo come valore vero. La tua misura, $\ell = (12{,}4 \pm 0{,}15)\ \text{cm}$, è compatibile con questo valore?
{% capture _oComp %}[
{"v":"a","t":"Sì: $12{,}52\\ \\text{cm}$ sta fra $12{,}25\\ \\text{cm}$ e $12{,}55\\ \\text{cm}$"},
{"v":"b","t":"No: $12{,}52\\ \\text{cm}$ è diverso da $12{,}4\\ \\text{cm}$"},
{"v":"c","t":"No: $12{,}52\\ \\text{cm}$ è più grande del valore massimo misurato, $12{,}5\\ \\text{cm}$"}
]{% endcapture %}
{% include mcq.html id="mcq-matita-comp" opts=_oComp ok="a" s="L'intervallo va da $12{,}4 - 0{,}15 = 12{,}25\ \text{cm}$ a $12{,}4 + 0{,}15 = 12{,}55\ \text{cm}$, e $12{,}52\ \text{cm}$ ci sta dentro. Che il valore medio sia diverso dal valore vero è normale: per questo si dichiara l'incertezza." %}
{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="7. La misura fatta in fretta" %}
Un altro compagno appoggia il righello una volta sola, legge $12{,}3\ \text{cm}$ e scrive $\ell = (12{,}3 \pm 0{,}05)\ \text{cm}$. Che cosa si può dire della sua misura, confrontandola con il valore vero $12{,}52\ \text{cm}$?
{% capture _oFretta %}[
{"v":"a","t":"È compatibile, ed è più precisa della tua"},
{"v":"b","t":"Non è compatibile: l'intervallo va da $12{,}25$ a $12{,}35\\ \\text{cm}$. Ha sottostimato l'incertezza, perché con una sola misurazione non ha potuto stimare la semidispersione"},
{"v":"c","t":"Non è compatibile, perché ha usato un righello diverso dal tuo"},
{"v":"d","t":"Non si può dire, perché ha fatto una sola misurazione"}
]{% endcapture %}
{% include mcq.html id="mcq-matita-fretta" opts=_oFretta ok="b" s="L'intervallo da $12{,}25$ a $12{,}35\ \text{cm}$ non contiene $12{,}52\ \text{cm}$. Il righello era lo stesso: l'incertezza dichiarata è più piccola di quella vera, cioè è sottostimata. Ha un'incertezza più piccola della tua, ma il suo intervallo non contiene il valore vero." %}
{% include scorri-slide-end.html %}
{% include scorri-end.html %}
<div style="clear:both"></div>
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
{% include mcq.html id="mcq-matita" opts=_o ok="b" s="Se la lunghezza vera stesse in entrambi gli intervalli, i due intervalli dovrebbero avere almeno un punto in comune. Non ce l'hanno: le due misure non sono compatibili fra loro, e qualcosa non torna." %}

{% capture _qComp %}[
{"t":"Una misura con un'incertezza più piccola è sempre più vicina al valore vero.","ok":false,"s":"No: pensa alla tessera sanitaria misurata in fretta: $(85{,}0 \\pm 0{,}5)\\ \\text{mm}$ aveva un'incertezza più piccola, ma non era compatibile con il valore vero."},
{"t":"Se dichiaro un'incertezza enorme, la mia misura sarà quasi sempre compatibile con il valore vero.","ok":true,"s":"Sì, ma l'incertezza sarà sovrastimata e la misura dirà pochissimo: dire che una matita è lunga fra 5 e 20 cm è corretto, ma non serve a molto."},
{"t":"Se una misura non è compatibile con il valore vero, è sempre colpa dello strumento.","ok":false,"s":"No: spesso lo strumento va benissimo, ma l'incertezza è stata sottostimata, per esempio facendo una sola misurazione, oppure si è sbagliata la lettura."}
]{% endcapture %}
{% include quiz.html domande=_qComp id="q-compatibili" senza_esempi="true" %}
{% include box-end.html %}
{% include unisci-end.html %}

### Incertezza relativa percentuale

{% include margin-note.html testo="L'incertezza va confrontata con il valore misurato" %}

Per chiedersi se l'incertezza di una misurazione sia grande o piccola, <u markdown="span">si deve **confrontare** l'incertezza con il valore della misurazione</u>. Ad esempio, un'incertezza di un centimetro nella misurazione dell'altezza della Tour Eiffel significa che la misurazione è molto precisa. D'altra parte, la stessa incertezza di un centimetro nella misurazione della dimensione di una cellula biologica (dell'ordine del micrometro) è un errore gigantesco.   
Per questo è necessario, oltreché stimare l'incertezza, riferirla anche all'oggetto che si è misurato. Il modo migliore di farlo è il seguente.

{% include margin-note-end.html %}

{% include box-imp.html testo="Incertezza relativa percentuale" %}
L'<definizione>incertezza relativa percentuale</definizione> esprime l'incertezza della misurazione come percentuale del valore medio:

{% include eq-annotated.html
     id="errore-relativo"
     formula="i_x = \left(\dfrac{I_x}{\bar{x}} \times 100\right)\%"
     frammenti="i_x|I_x|\bar{x}"
     etichette="incertezza relativa percentuale|incertezza totale|valore medio"
     posizioni="alto|alto|basso"
  %}

<u>Un'incertezza relativa percentuale piccola indica una misura precisa</u> (l'incertezza è piccola rispetto al valore misurato); <u>un'incertezza relativa percentuale grande indica che la misurazione non è affidabile</u> (l'incertezza è rilevante rispetto al valore misurato).

{% include box-end.html %}

{% include unisci.html %}
{% include box-ex.html testo="Verifica Subito!" %}
{% include calc-margin.html id="calcErrRel" %}
La lunghezza della matita è $\ell = (12{,}4 \pm 0{,}15)\ \text{cm}$. Quanto vale la sua incertezza relativa percentuale $i_\ell$?

{% include num.html id="numErrMatita" valore="1.21" unit="%" tol="3" %}
{% include spoiler.html testo="Mostra la soluzione" %}
$$i_\ell = \frac{I_\ell}{\bar\ell}\times 100\% = \frac{0{,}15\ \text{cm}}{12{,}4\ \text{cm}}\times 100\% \approx 1{,}2\%.$$
{% include spoiler-end.html %}
<div style="clear:both"></div>
{% include box-end.html %}

{% include esercizi/prova-errore-relativo.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% include calc-margin.html id="calcAutoMoneta" %}
Quale di queste due misure è più precisa?
{% capture _o %}[
{"v":"a","t":"La massa di un'automobile: $(1200 \\pm 10)\\ \\text{kg}$"},
{"v":"b","t":"La massa di una moneta: $(7{,}5 \\pm 0{,}1)\\ \\text g$"},
{"v":"c","t":"Sono ugualmente precise"}
]{% endcapture %}
{% include mcq.html id="mcq-auto-moneta" opts=_o ok="a" s="Bisogna confrontare le incertezze relative, non quelle assolute: per l'automobile $10/1200 \approx 0{,}8\%$, per la moneta $0{,}1/7{,}5 \approx 1{,}3\%$. Dieci chili sembrano tanti, ma rispetto a una tonnellata sono pochi." %}
<div style="clear:both"></div>
{% include box-end.html %}
{% include unisci-end.html %}

### Propagazione degli errori

{% include margin-note.html testo="Anche le grandezze calcolate hanno un'incertezza" %}

Spesso la grandezza che ci interessa non si misura direttamente, ma si *calcola* a partire da altre grandezze misurate. Per esempio, l'area di un pavimento non si misura con uno strumento: si misurano i due lati e si moltiplicano. <u markdown="span">I due lati, però, hanno un'incertezza, e quindi ce l'avrà anche l'area</u>. Vediamo come si calcola, cominciando da due esempi.

{% include margin-note-end.html %}

{% include margin-note.html testo="Somma e differenza: si sommano le incertezze assolute" %}

Il primo esempio è una somma. Mettiamo in fila due banchi: il primo è lungo $(70{,}2 \pm 0{,}2)\ \text{cm}$, il secondo $(69{,}8 \pm 0{,}2)\ \text{cm}$. La fila è lunga $70{,}2 + 69{,}8 = 140{,}0\ \text{cm}$. Ciascuno dei due banchi, però, potrebbe essere lungo fino a $0{,}2\ \text{cm}$ in più di quanto abbiamo misurato; se lo fossero entrambi, la fila sarebbe più lunga di $0{,}2 + 0{,}2 = 0{,}4\ \text{cm}$. Allo stesso modo, se fossero entrambi più corti, la fila sarebbe più corta di $0{,}4\ \text{cm}$. Scriviamo quindi

$$\ell = (140{,}0 \pm 0{,}4)\ \text{cm}.$$

Nella somma, dunque, <u markdown="span">le **incertezze assolute** si sommano</u>. Lo stesso accade nella differenza: il risultato di una sottrazione è il più grande possibile quando il primo numero è più grande di quanto misurato e il secondo è più piccolo, e anche in questo caso le due incertezze si sommano.

{% include margin-note-end.html %}

{% include margin-note.html testo="Prodotto: si sommano le incertezze relative" %}

Il secondo esempio è un prodotto. Il piano di un banco misura $(70{,}0 \pm 0{,}5)\ \text{cm}$ per $(50{,}0 \pm 0{,}5)\ \text{cm}$, quindi la sua area è $70{,}0 \times 50{,}0 = 3500\ \text{cm}^2$. Calcoliamo l'area con i valori più grandi possibili dei due lati, e poi con quelli più piccoli:

$$70{,}5 \times 50{,}5 \approx 3560\ \text{cm}^2, \qquad 69{,}5 \times 49{,}5 \approx 3440\ \text{cm}^2.$$

L'area può quindi essere circa $60\ \text{cm}^2$ più grande o più piccola di $3500\ \text{cm}^2$. Questa volta non possiamo sommare le incertezze assolute dei lati, perché sono in centimetri, mentre l'area si misura in centimetri quadrati. <u markdown="span">Si sommano invece le **incertezze relative percentuali**</u>: per il lato lungo l'incertezza relativa è $0{,}5/70{,}0 \approx 0{,}7\%$, per quello corto $0{,}5/50{,}0 = 1\%$, e per l'area $60/3500 \approx 1{,}7\%$, cioè proprio $0{,}7\% + 1\%$.

{% include margin-note-end.html %}

Queste regole valgono in generale, e sono riassunte nel seguente teorema.

{% include box-thm.html testo="Teorema di propagazione degli errori" %}
Siano $x$ e $y$ due grandezze misurate con incertezze assolute $I_x$, $I_y$ e incertezze relative percentuali $i_x = (I_x/\bar{x})\times 100\%$, $i_y = (I_y/\bar{y})\times 100\%$.

| Operazione | Incertezza da usare | Regola |
|---|---|---|
| $z = x + y$ | **assoluta** | $I_z = I_x + I_y$ |
| $z = x - y$ | **assoluta** | $I_z = I_x + I_y$ |
| $z = x \cdot y$ | **relativa %** | $i_z = i_x + i_y$ |
| $z = x / y$ | **relativa %** | $i_z = i_x + i_y$ |
| $z = x^n$ | **relativa %** | $i_z = n\,i_x$ |

L'incertezza assoluta risultante si ricava sempre come $I_z = \bar{z}\,\cdot\,i_z / 100$.
{% include box-end.html %}

{% include margin-note.html testo="Una potenza è un prodotto ripetuto" %}

La regola della potenza deriva da quella del prodotto. Infatti $x^2 = x \cdot x$, quindi $i_{x^2} = i_x + i_x = 2\,i_x$; allo stesso modo $x^3 = x \cdot x \cdot x$, e quindi $i_{x^3} = 3\,i_x$.

{% include margin-note-end.html %}

{% include box-imp.html testo="Come si usa il teorema" %}
1. Si calcola il valore $\bar z$ usando i valori medi delle grandezze misurate.
2. Si guarda quale operazione compare nella formula: per una somma o una differenza servono le incertezze **assolute**, per un prodotto, un quoziente o una potenza servono le incertezze **relative percentuali**.
3. Se servono le incertezze relative, si calcolano per ciascuna grandezza misurata con $i_x = (I_x/\bar x)\times 100\%$.
4. Si applica la regola della tabella.
5. Se si è trovata l'incertezza relativa $i_z$, si ricava quella assoluta con $I_z = \bar z \cdot i_z/100$.
6. Si scrive il risultato nella forma $z = \bar z \pm I_z$, con la sua unità di misura.
{% include box-end.html %}

{% include box-warn.html testo="Attenzione: nella differenza le incertezze si sommano!" %}
In $z = x - y$, le incertezze *assolute* si sommano (non si sottraggono). Se $x$ e $y$ sono vicini, $z = x - y$ è piccolo ma $I_z = I_x + I_y$ rimane grande: l'incertezza relativa percentuale su $z$ può diventare molto elevata.
{% include box-end.html %}

{% include margin-note.html testo="Più operazioni: un passo alla volta" %}

Se nella formula compaiono più operazioni, <u markdown="span">si applica il teorema **un'operazione alla volta**</u>, nello stesso ordine in cui si fanno i calcoli.

{% include margin-note-end.html %}

{% include box-esempio.html testo="Esempi svolti" %}
{% include scorri.html %}
{% include scorri-slide.html titolo="Una potenza: l'area di una piastrella" %}
Il lato di una piastrella quadrata misura $\ell = (20{,}0 \pm 0{,}2)\ \text{cm}$. Calcoliamo la sua area, con l'incertezza.

L'area vale $\bar S = (20{,}0\ \text{cm})^2 = 400\ \text{cm}^2$. Poiché $S = \ell^2$ è una potenza, dobbiamo usare le incertezze relative. L'incertezza relativa sul lato è

$$i_\ell = \frac{0{,}2\ \text{cm}}{20{,}0\ \text{cm}} \times 100\% = 1\%,$$

e quella sull'area è il doppio, $i_S = 2 \cdot 1\% = 2\%$. L'incertezza assoluta sull'area è quindi

$$I_S = \frac{400\ \text{cm}^2 \cdot 2}{100} = 8\ \text{cm}^2,$$

e il risultato è $S = (400 \pm 8)\ \text{cm}^2$. Possiamo controllarlo calcolando l'area con il lato più grande e con quello più piccolo possibile: $20{,}2^2 \approx 408\ \text{cm}^2$ e $19{,}8^2 \approx 392\ \text{cm}^2$, cioè proprio $8\ \text{cm}^2$ in più o in meno.

{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Un quoziente: la velocità di un velocista" %}
Un velocista corre $d = (100{,}0 \pm 0{,}5)\ \text{m}$ in $t = (12{,}5 \pm 0{,}1)\ \text{s}$. Calcoliamo la sua velocità media $v = d/t$, con l'incertezza.

La velocità media vale $\bar v = \dfrac{100{,}0\ \text{m}}{12{,}5\ \text{s}} = 8{,}0\ \text{m/s}$. Poiché è un quoziente, usiamo le incertezze relative: sulla distanza $i_d = \dfrac{0{,}5}{100{,}0} \times 100\% = 0{,}5\%$, sul tempo $i_t = \dfrac{0{,}1}{12{,}5} \times 100\% = 0{,}8\%$. Le due incertezze relative si sommano, anche se nella formula c'è una divisione:

$$i_v = 0{,}5\% + 0{,}8\% = 1{,}3\%.$$

L'incertezza assoluta è quindi $I_v = \dfrac{8{,}0\ \text{m/s} \cdot 1{,}3}{100} \approx 0{,}1\ \text{m/s}$, e il risultato è $v = (8{,}0 \pm 0{,}1)\ \text{m/s}$.

Osserviamo che l'incertezza relativa sul tempo è maggiore di quella sulla distanza: <u markdown="span">per migliorare la misura della velocità bisognerebbe usare un cronometro più preciso</u>.

{% include scorri-slide-end.html %}
{% include scorri-slide.html titolo="Due operazioni: la velocità di una macchinina" %}
Una macchinina giocattolo passa davanti a due tacche di un metro steso sul pavimento: la prima è a $x_1 = (20{,}0 \pm 0{,}5)\ \text{cm}$, la seconda a $x_2 = (80{,}0 \pm 0{,}5)\ \text{cm}$. Per andare dall'una all'altra impiega $t = (1{,}50 \pm 0{,}05)\ \text{s}$. Calcoliamo la sua velocità media, con l'incertezza.

Per prima cosa calcoliamo la distanza percorsa, che è una differenza: $d = x_2 - x_1 = 80{,}0\ \text{cm} - 20{,}0\ \text{cm} = 60{,}0\ \text{cm}$. Le incertezze assolute si sommano, quindi $I_d = 0{,}5\ \text{cm} + 0{,}5\ \text{cm} = 1{,}0\ \text{cm}$, e $d = (60{,}0 \pm 1{,}0)\ \text{cm}$. L'incertezza relativa sulla distanza è $i_d = \dfrac{1{,}0}{60{,}0} \times 100\% \approx 1{,}7\%$.

Poi calcoliamo la velocità, che è un quoziente: $\bar v = \dfrac{60{,}0\ \text{cm}}{1{,}50\ \text{s}} = 40\ \text{cm/s}$. L'incertezza relativa sul tempo è $i_t = \dfrac{0{,}05}{1{,}50} \times 100\% \approx 3{,}3\%$, quindi $i_v \approx 1{,}7\% + 3{,}3\% = 5\%$ e

$$I_v = \frac{40\ \text{cm/s} \cdot 5}{100} = 2\ \text{cm/s}, \qquad v = (40 \pm 2)\ \text{cm/s}.$$

{% include scorri-slide-end.html %}
{% include scorri-end.html %}
{% include box-end.html %}

{% include unisci.html %}
{% include box-ex.html testo="Verifica Subito!" %}
Per ogni grandezza calcolata, quali incertezze si sommano?
{% capture _sProp %}[
{"t":"Il perimetro di un rettangolo","c":0},
{"t":"L'altezza di due scatoloni impilati","c":0},
{"t":"Lo spessore di un libro, come differenza fra l'altezza di una pila di libri e quella della stessa pila senza quel libro","c":0},
{"t":"L'area di un rettangolo","c":1},
{"t":"Il volume di un cubo","c":1},
{"t":"La velocità, distanza diviso tempo","c":1}
]{% endcapture %}
{% include sort.html id="sort-propagazione" dati=_sProp col0="Le incertezze assolute" col1="Le incertezze relative %" %}
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qProp %}[
{"t":"Nella differenza $z = x - y$ le incertezze assolute si sottraggono.","ok":false,"s":"No: si sommano sempre, anche nella differenza."},
{"t":"Nel prodotto $z = x \\cdot y$ si sommano le incertezze assolute.","ok":false,"s":"No: nel prodotto e nel quoziente si sommano le incertezze relative percentuali."},
{"t":"Se il lato di un quadrato ha un'incertezza relativa del $2\\%$, l'area del quadrato ha un'incertezza relativa del $4\\%$.","ok":true,"s":"Sì: l'area è il lato al quadrato, e per una potenza l'incertezza relativa si moltiplica per l'esponente: $2 \\times 2\\% = 4\\%$."}
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
{% include margin-note.html testo="Misurare la densità di un sasso" %}

L'obiettivo è quello di farvi toccare con mano la precisione della Fisica sperimentale.

Durante l'esperienza, dovrete determinare la densità $d$ di un corpo irregolare (un sasso o simile) usando strumenti reperibili a casa.

{% include margin-note-end.html %}

{% include box-def.html testo="Densità" %}
La densità di un corpo è il rapporto tra la sua massa e il suo volume. Essa si calcola dunque con la formula
$$d = \frac{m}{V}$$
Si misura in kg/m³ (o in g/cm³ o in g/L in unità pratiche, dove “L” è il litro e corrisponde a 1 dm³).
{% include box-end.html %}

{% include margin-note.html testo="Il volume si misura con l'acqua" %}

Il problema è misurare il **volume** di un corpo irregolare, di cui non possiamo calcolare il volume con formule geometriche semplici. Usiamo il **metodo della variazione di livello**: si immerge il corpo in acqua e si misura di quanto sale il livello.

{% include margin-note-end.html %}

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

{% include margin-note.html testo="Serve un bicchiere cilindrico" %}

Il calcolo funziona solo se il bicchiere ha **sezione costante**, cioè è un cilindro (pareti verticali, non a tronco di cono).

{% include margin-note-end.html %}

{% include figure/bicchiere-cilindrico-figura.html %}

## Istruzioni

Segui le fasi nell'ordine indicato. Per ciascuna misurazione: riporta i dati grezzi, calcola media e incertezza, stima l'incertezza relativa percentuale. Scatta una fotografia per ogni fase.

---

#### Fase 0 — Fotografia degli strumenti

Fotografa tutti gli strumenti che utilizzerai prima di iniziare. La foto deve essere nitida e tutti gli strumenti devono essere riconoscibili.

---

#### Fase 1 — Diametro del bicchiere

{% include margin-note.html testo="Almeno tre misure del diametro" %}

Misura il **diametro interno** $d$ del bicchiere con il righello. Ripeti la misurazione almeno **3 volte**, spostando il righello in posizioni leggermente diverse. Fai una foto del righello sul diametro del bicchiere.

Calcola l'incertezza strumentale i.s. del righello.

Poi calcola:

$$\bar{d} = \frac{d_1 + d_2 + d_3}{3}, \qquad s_d = \frac{d_\text{max} - d_\text{min}}{2}$$

(naturalmente, può essere che ti venga sempre lo stesso valore tutte e tre le volte).

Quindi, calcola 

$$I_d = \text{i.s.} + s_d, \qquad i_d = \frac{I_d}{\bar d} \times 100\%.$$

{% include margin-note-end.html %}

---

#### Fase 2 — Area di base del bicchiere

{% include margin-note.html testo="Il quadrato raddoppia l'incertezza relativa" %}

L'area di base $S$ del bicchiere si calcola come l'area di un cerchio:

$$S = \pi \!\left(\frac{\bar{d}}{2}\right)^2$$

Dopo aver calcolato $S$ sarà necessario anche stimare l'incertezza su $S$. Qui ci è utile il precedente teorema (vedi [qui](#propagazione-degli-errori)), che ci dice che se 

$$z = x^n$$

allora $i_z = n \cdot i_x$. Nel nostro caso, quindi,

$$i_S = 2\,i_d.$$

{% include margin-note-end.html %}

---

#### Fase 3 — Altezza iniziale dell'acqua

{% include margin-note.html testo="Almeno tre misure dell'altezza" %}

Versa dell'acqua nel bicchiere. Misura l'altezza iniziale $h_i$ del livello con il righello. Ripeti almeno **3 volte**. Fai una fotografia del righello mentre misura l'altezza. A questo punto calcola tutte le quantità utili.

$$\bar{h}_i = \ldots, \qquad s_{h_i} = \frac{h_{i,\text{max}} - h_{i,\text{min}}}{2}, \qquad i_{h_i} = \frac{s_{h_i} + \text{i.s.}}{\bar{h}_i} \times 100\%$$

{% include margin-note-end.html %}

---

#### Fase 4 — Volume iniziale dell'acqua

{% include margin-note.html testo="Volume dell'acqua: area per altezza" %}

Conoscendo l'area di base dell'acqua e la sua altezza, possiamo calcolare il suo volume iniziale secondo la formula del volume di un cilindro

$$V_i=S\cdot h_i.$$

Secondo il teorema di propagazione degli errori (vedi [qui](#propagazione-degli-errori)) l'incertezza relativa percentuale sul volume è pari alla somma delle incertezze relative percentuali di sezione e altezza, cioè

$$
i_{V_i} = i_S + i_{h_i}.
$$

Ci sarà utile stimare anche l'incertezza $I_{V_i}$ del volume iniziale, che possiamo ricavare a partire dall'incertezza relativa percentuale come

$$
I_{V_i} = \frac{i_{V_i} \cdot V_i}{100}.
$$

{% include margin-note-end.html %}

---

#### Fase 5 — Massa del sasso

{% include margin-note.html testo="Per la massa basta l'incertezza strumentale" %}

Posa il sasso sulla bilancia e leggi la massa $m$. Fotografa il sasso e il valore.

Qui probabilmente ripetendo la misurazione il valore ottenuto sarebbe sempre uguale, quindi non è necessario ripetere più volte il processo e possiamo stimare semplicemente l'incertezza strumentale.

- Bilancia **digitale**: l'incertezza strumentale corrisponde a metà della cifra più piccola.
- Bilancia **analogica**: l'incertezza strumentale corrisponde a metà della distanza tra due tacche.

$$i_m = \frac{\text{i.s.}}{m} \times 100\%$$

{% include margin-note-end.html %}

---

#### Fase 6 — Inserimento del sasso e livello finale dell'acqua

{% include margin-note.html testo="Con il sasso il livello sale" %}

Inserisci il sasso e misura il nuovo livello $h_f$. Ripeti almeno **3 volte**. Fotografa una volta il righello.

Calcola di nuovo tutte le quantità che hai calcolato nella Fase 3 e nella Fase 4.

{% include margin-note-end.html %}

---

#### Fase 7 — Calcolo della densità

{% include margin-note.html testo="Differenza, prodotto, quoziente" %}

**Variazione di livello** (differenza: le incertezze assolute si sommano):

$$z=\bar{h}_f - \bar{h}_i, \qquad I_z = I_{h_f} + I_{h_i}, \qquad i_z = \frac{I_z}{z} \times 100\%$$

**Volume del sasso** (prodotto: le incertezze relative si sommano):

$$V_\text{sasso} = S \cdot z$$

$$i_V = i_S + i_z = 2\,i_d + i_z, \qquad I_V = V_\text{sasso} \cdot \frac{i_V}{100}$$

**Densità** (quoziente: le incertezze relative si sommano):

$$d = \frac{m}{V_\text{sasso}}$$

$$i_d = i_m + i_V, \qquad I_d = d \cdot \frac{i_d}{100}$$

**Risultato finale da riportare:**

$$\boxed{d = \bar{d} \pm I_d \quad \left(i_d = \ldots\%\right)}$$

{% include margin-note-end.html %}

---

### Discussione

{% include margin-note.html testo="Una riflessione libera, senza IA" %}

In questa sezione puoi **soltanto guadagnare punti**, non perderli. Rifletti liberamente sull'esperimento, senza l'aiuto dell'Intelligenza Artificiale. Ecco alcuni spunti (non obbligatori):

- Quali sono state le principali fonti di incertezza nel tuo esperimento?
- Quale grandezza ha contribuito di più all'incertezza finale su $d$? Perché?
- Come si potrebbe ridurre l'incertezza sul volume del sasso?
- Cosa succederebbe se il bicchiere non fosse perfettamente cilindrico?
- Esiste un modo alternativo per misurare il volume del sasso?
- Come potresti verificare il risultato in modo indipendente?

{% include margin-note-end.html %}

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

{% include margin-note.html testo="Un'interrogazione sulle scelte fatte" %}

Dopo la consegna della relazione ci sarà una **breve interrogazione individuale** sull'esperimento. Non si tratta di ricordare i numeri ottenuti: si tratta di dimostrare di aver *capito* le scelte fatte.

{% include margin-note-end.html %}

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
- Cosa significa scrivere $x = \bar{x} \pm I_x$?
- Cos'è l'incertezza relativa percentuale? Come si calcola e a cosa serve?
- Quando una misura è compatibile con un valore? Quando un'incertezza è sottostimata o sovrastimata?
- Perché nella differenza $z = x - y$ le incertezze *assolute* si sommano (e non si sottraggono)?
- Perché nel prodotto e nel quoziente si sommano le incertezze *relative*?
- Perché nella propagazione dell'incertezza su $S = \pi(d/2)^2$ compare un fattore 2?

**Attenzione!** Questa lista di domande sono solo esempi per aiutarvi a comprendere la tipologia. Chiaramente, potrei farvi domande non contenute in questa lista.
{% include box-end.html %}

</div>
</section>
