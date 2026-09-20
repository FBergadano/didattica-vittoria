---
layout: capitolo
title: "La Misurazione"
corso: "introduzione-alla-fisica"
corso_titolo: "Introduzione alla Fisica"
materia: fisica
numero: 1
---

<cit autore="Giacomo Leopardi, Zibaldone">Niuna cosa maggiormente dimostra la grandezza e la potenza dell'umano intelletto, né l'altezza e nobiltà dell'uomo, che il poter l'uomo conoscere e interamente comprendere e fortemente sentire la sua piccolezza.</cit> 

Una delle cose più meravigliose dell'Universo è la sua immensità. L'infinita grandezza della galassia che ci contiene e l'infinita piccolezza degli atomi di cui siamo composti. Noi uomini siamo sospesi a metà tra questi due infiniti, e questo è un fatto che non cesserà mai di meravigliarci.


<!-- 
{% capture _system %}Sei il Prof. Bergadano, un professore di Fisica appassionato che insegna in un Liceo Linguistico a Torino. Stai parlando con uno studente di 15-16 anni.

Lo studente ti scrive cosa lo fa sentire infinitamente piccolo, o cosa trova meravigliosamente enorme. Il tuo compito è guidarlo a scoprire il vero ordine di grandezza di quella cosa attraverso una conversazione socratica:

1. Accogli la sua risposta con calore.
2. Fai UNA domanda concreta sulla dimensione o quantità — invitalo a fare una stima numerica specifica. Non "quant'è grande?" ma per esempio "quanti chilometri pensi che misuri?" oppure "quanti granelli pensi che ci siano in un cucchiaio di sabbia?". Un elemento di quella cosa grande che sia il più possibile facile da stimare. Introduci la domanda con una cosa tipo "Proviamo a stimare quanto è grande per davvero questa cosa". Il concetto è un po' quello di allenare lo studente ai ragionamenti tipo di Fermi "quanti accordatori di pianoforte ci sono a Chicago?". Oppure quello di Archimede chegli ha permesso di stimare il numero di granelli di sabbia necessari a riempire l'Universo.
3. Quando lo studente risponde, correggi o conferma la sua stima con il vero valore numerico, poi poni UN'altra domanda che avvicina alla scoperta del numero finale.
4. Continua per 2–4 scambi, guidando lo studente verso l'ordine di grandezza reale.
5. Concludi con una frase di meraviglia che collega quel numero a qualcosa di concreto e sorprendente.
6. Se lo studente risponde qualcosa di provocatorio o un insulto, rifiutati semplicemente e cordialmente di rispondere.

Scrivi sempre in italiano. Tono caldo, curioso, incoraggiante. Risposte brevi (2–4 frasi per turno). Prosa naturale — niente elenchi puntati. Se lo studente scrive qualcosa di non misurabile, aiutalo gentilmente a trovarne un aspetto misurabile.{% endcapture %}
{% include gemini-chat.html
   system=_system
   domanda="<em>Cerca di ricordare una volta in cui hai avvertito la sensazione di essere piccolissimo in confronto a ciò che avevi di fronte. Cos'era</em>?"
   hint="Se non ti ricordi di aver provato questa sensazione, prova a immaginarla."
%}
 -->
# Che cosa significa _misurare_?

«Misurare» significa associare **un numero** a una *caratteristica* di un oggetto. Descrivere il mondo con i numeri, significa scegliere <u>di utilizzare il linguaggio della Matematica</u>. Ecco perché la Fisica è fatta di equazioni. Naturalmente, non tutto si può esprimere con i numeri. La Fisica si limita dunque a descrivere solo le caratteristiche misurabili di un oggetto, che si chiamano <definizione>grandezze fisiche</definizione>.

{% include box-ex.html testo="Verifica Subito!" %}

Per ogni caratteristica, decidi: è una **grandezza fisica** (le si può associare un numero) oppure no?

{% capture _q %}[
{"t":"L'altezza di un tavolo","ok":true,"s":"Si misura in metri — è una grandezza fisica."},
{"t":"La massa di un tavolo","ok":true,"s":"Si misura in chilogrammi — è una grandezza fisica."},
{"t":"La comodità del tavolo","ok":false,"s":"È soggettiva: non le si può associare un numero universale."},
{"t":"La difficoltà della Fisica","ok":false,"s":"Cambia da persona a persona — non è misurabile."},
{"t":"Il numero di formule della Fisica","ok":true,"s":"Si può contare: un numero è già una misura."},
{"t":"L'intensità luminosa di una lampadina","ok":true,"s":"Si misura in candele (cd) — è una delle 7 grandezze fondamentali!"},
{"t":"L'importanza storica di un avvenimento","ok":false,"s":"Non sarebbe possibile esprimerla tramite un numero, quindi non è una grandezza fisica."},
{"t":"L'intensità di un rumore o di un suono","ok":true,"s":"Si misura in decibel (dB) — è una grandezza fisica."}
]{% endcapture %}
{% include quiz.html domande=_q label_si="Una grandezza fisica" label_no="Non una grandezza fisica" %}

{% include box-end.html %}
{% include fill-def.html prompt='Prova a formulare una definizione di grandezza fisica, completando la frase: "Una grandezza fisica è…"' id="fill-gf" %}
## Come si misura?
La misurazione è un'operazione che consiste nel confrontare l'oggetto che si desidera misurare con un oggetto di riferimento, il quale è chiamato <definizione>campione</definizione>. Ad esempio, qui di seguito puoi misurare il lato lungo della lavagna con una biro o con un cancellino
{% include lab-virtuali/misura-riga-lavagna-lab.html %}
oppure in quest'altro esempio puoi misurare la massa di un vaso di fiori con dei sacchetti di farina da $1 \ \text{kg}.$
{% include lab-virtuali/bilancia-vaso-lab.html %}

Notiamo alcune cose.
1. Il numero associato all'altezza della lavagna varia a seconda che utilizziamo un cancellino o una biro, e in effetti ha senso solo se è rapportato <u>a quel campione specifico</u>. Cambiando il campione cambia anche il numero.
2. Una misurazione non è mai perfetta, si commettono sempre alcuni errori, ed è difficile sapere *di quanto* ci si sia sbagliati.

<div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1.5rem 0;">
<div class="fill-def" style="flex:1;min-width:220px;">
  <p class="fill-def-label">✏️ Problema 1</p>
  <p class="fill-def-prompt">Come si potrebbe risolvere il problema del campione? Proponi una soluzione.</p>
  <textarea id="fill-prob1" placeholder="Scrivi qui la tua risposta…" aria-label="Soluzione al problema del campione"></textarea>
</div>
<div class="fill-def" style="flex:1;min-width:220px;">
  <p class="fill-def-label">✏️ Problema 2</p>
  <p class="fill-def-prompt">Come si potrebbe risolvere il problema degli errori di misura? Proponi una soluzione.</p>
  <textarea id="fill-prob2" placeholder="Scrivi qui la tua risposta…" aria-label="Soluzione al problema degli errori"></textarea>
</div>
</div>

Vediamo le risposte che hanno dato i fisici a questi problemi.

# Le unità di misura e il Sistema Internazionale

Nel 1875, alcuni dei più importanti scienziati di tutto il mondo si sono riuniti a Parigi, in una conferenza chiamata *«Conférence générale des poids et mesures»*, per stabilire delle unità di misura da adottare <u>in tutto il mondo</u>, <u>sempre</u>.  
Essi trovarono che tutte le grandezze fisiche potevano essere espresse in termini di **sette** <definizione>grandezze fondamentali</definizione>, a cui sono associate le rispettive <definizione>unità di misura</definizione>. Costruirono cioè la seguente tabella. 

<table id="tab-si" style="border-collapse:collapse;margin:1rem 0;font-size:15px;">
  <thead>
    <tr>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Grandezza</th>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Unità di misura</th>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Simbolo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Lunghezza</td>
      <td style="padding:6px 20px 6px 8px;">metro</td>
      <td style="padding:6px 20px 6px 8px;">m</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Tempo</td>
      <td style="padding:6px 20px 6px 8px;">secondo</td>
      <td style="padding:6px 20px 6px 8px;">s</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Massa</td>
      <td style="padding:6px 20px 6px 8px;">chilogrammo</td>
      <td style="padding:6px 20px 6px 8px;">kg</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Temperatura</td>
      <td style="padding:6px 20px 6px 8px;">kelvin</td>
      <td style="padding:6px 20px 6px 8px;">K</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Intensità di corrente</td>
      <td style="padding:6px 20px 6px 8px;">ampere</td>
      <td style="padding:6px 20px 6px 8px;">A</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Quantità di materia</td>
      <td style="padding:6px 20px 6px 8px;">mole</td>
      <td style="padding:6px 20px 6px 8px;">mol</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;border-bottom:1px solid #ccc;">Intensità luminosa</td>
      <td style="padding:6px 20px 6px 8px;border-bottom:1px solid #ccc;">candela</td>
      <td style="padding:6px 20px 6px 8px;border-bottom:1px solid #ccc;">cd</td>
    </tr>
  </tbody>
</table>

Queste 7 grandezze definiscono il <definizione>Sistema Internazionale</definizione>.

### La differenza tra grandezze fondamentali e grandezze derivate
Tutte le altre grandezze fisiche possono essere derivate a partire dalle grandezze nella tabella, tramite le leggi della fisica. Sono perciò dette <definizione>grandezze derivate</definizione>.  
Immaginatevi le 7 grandezze fisiche nella tabella come delle note musicali: esse si combinano in opportuni accordi (le formule della Fisica) e producono un nuovo suono, che è quello delle altre grandezze (come velocità, accelerazione, forza, etc.). Ad esempio, la velocità esprime semplicemente *quanto spazio percorro in un certo tempo*, quindi per misurare la velocità (che è una grandezza derivata) mi basta misurare lo spazio e il tempo (che sono grandezze fondamentali).
<a id="def-si" style="display:block;height:0;overflow:hidden" aria-hidden="true"></a>
{% include box-imp.html testo="Il Sistema Internazionale di Unità di Misura"%}

Il Sistema Internazionale di Unità di Misura è un sistema di *convenzioni* che ha scelto 7 grandezze fondamentali, a ciascuna delle quali ha associato un'unità di misura. Tutte le altre grandezze possono essere ottenute a partire da queste.

{% include box-end.html %}



# La notazione scientifica

Una delle caratteristiche più belle della Fisica è che cerca di descrivere *tutto* l'Universo: dalle minuscole particelle subatomiche alle immani, gigantesche galassie. Ma come facciamo a orientarci nel passaggio da una scala gigante a una scala minuscola? L'unità di misura del Sistema Internazionale è scelta «a nostra immagine e somiglianza», cioè su scala umana, ma ci sono moltissime cose per cui le grandezze del Sistema Internazionale diventano molto scomode. Ad esempio, la massa di un elettrone — che indichiamo con $m_\text{e}$ — corrisponde, in chili, a

$$m_\text{e} = 0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,000\,910\,938\,370\,153\ \text{kg};$$

la massa del Sole — che indichiamo con $m_\text{S}$ — è circa

$$m_\text{S} = 1\,989\,100\,000\,000\,000\,000\,000\,000\,000\,000\ \text{kg}.$$

Numeri del genere sono un po' scomodi da maneggiare. Prova a pensare a come risolveresti questo problema tu, prima di leggere la soluzione trovata dalla comunità scientifica.

{% include fill-def.html id='fill-notaz' prompt='Come rappresenteresti numeri molto grandi o molto piccoli in modo più comodo? Fai un esempio con i numeri 99999999 e 0,00000000000123. Verifica poi che funzioni per tutti i numeri!' %}

La soluzione adottata dagli scienziati consiste nell'indicare questi numeri tramite un tipo di notazione che è detto <definizione>notazione scientifica</definizione>. Vediamo in cosa consiste.

Considera il numero 
$$1\,000\,000\,000\,000\,000\,000\,000\,000\,000\,000.$$
Esso corrisponde al numero uno seguito da 30 zeri. Matematicamente, sappiamo che aggiungere uno zero significa moltiplicare per $10$ e quindi quel numero può essere scritto come

$$1\times \underbrace{10\times 10 \times 10 \times \cdots\times 10}_{30 \text{ volte}} = 1 \times 10^{30}.$$


Sfruttando questo ragionamento, possiamo scrivere $500$ come $5\times 10^2$, e $567$ come $5{,}67\times 10^2$. Basta insomma contare il numero di salti verso sinistra che fa la virgola e metterla ad esponente di 10. Ad esempio la massa del Sole diventa

{% include lab-virtuali/notazione-scientifica-grande-lab.html %}

$$
\begin{aligned}
m_\text{S} &= 1\,989\,100\,000\,000\,000\,000\,000\,000\,000\,000\ \text{kg}\\ &=1{,}9891 \times 10^{30}\ \text{kg}.
\end{aligned}
$$

E se invece il numero è molto piccolo, come nel caso della massa dell'elettrone? Facciamo lo stesso ragionamento, ma anziché far scivolare la virgola verso sinistra la facciamo scivolare verso destra. Questo significa che invece di moltiplicare per $10$ stiamo **dividendo** per $10$. Quindi

$$
0{,}00\, 000 \,000 \,000 \,000 \,000 \,000 \,000 \,000 \,000 1 = 1\div\underbrace{ 10 \div 10 \div \cdots \div 10}_{30 \text{ volte}} = \frac 1 {10^{30}}.
$$

Ricordiamo inoltre che $\frac 1 {10^n} = 10^{-n}$, quindi

$$
0{,}00 \,000 \,000 \,000 \,000 \,000 \,000 \,000 \,000 \,000 1 = 10^{-30}.
$$

In generale, il numero di zeri che compare prima della prima cifra, incluso quello prima della virgola, è pari all'esponente con un meno di fronte:

$$0{,}00\,1= 10^{-3}, \qquad 0{,}00\, 2 = 2\times 10^{-3}, \qquad 0{,}00\, 000\, 003\, 21 = 3{,}21\times 10^{-8}$$

Anche in questo caso, il numero di salti verso destra che fa la virgola diventa l'esponente, ma con un segno meno. Ad esempio, la massa dell'elettrone può essere scritta come

{% include lab-virtuali/notazione-scientifica-piccola-lab.html %}

$$\begin{aligned}
m_\text{e} &= 0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,000\,910\,938\,370\,153\ \text{kg}\\
&=9{,}
1093837015 \times 10^{-31}\ \text{kg}.
\end{aligned}$$

Vedete che in entrambi i casi abbiamo lasciato solo una cifra prima della virgola. Questo modo di scrivere i numeri è proprio la **notazione scientifica**. Chiamiamo <definizione>coefficiente</definizione> il numero di fronte al $10$ e chiamiamo come al solito <definizione>esponente</definizione> la potenza di $10$.

{% include figure/figura-coefficiente-esponente.html %}

Il coefficiente deve essere maggiore o uguale a 1 e minore di 10. Cioè, $1\le a < 10.$


{% include esercizi/esercizi-notazione-scientifica-1.html %}


### La notazione scientifica sulla calcolatrice

Quando la calcolatrice esegue un'operazione e il risultato è molto grande o molto piccolo, sul display **non c'è spazio per mostrare tutte le cifre** nella forma decimale estesa. Allora la calcolatrice usa automaticamente la notazione scientifica, ma con una sintassi diversa da quella che usiamo su carta: al posto di «$\times 10^n$» compare semplicemente la lettera **E** (dall'inglese *exponent*) seguita dall'esponente.

{% include figure/figura-display-calcolatrice.html %}

La lettera **E** va letta come «per dieci alla»: dunque

$$a\,\texttt{E}\,n \;=\; a \times 10^{n}.$$

Nel display qui sopra, `2.7778E-4` significa $2{,}7778 \times 10^{-4}$ — cioè $0{,}00027778$.

{% include box-note.html testo="Altri esempi di notazione E" %}

<table style="width:100%;border-collapse:collapse;margin:.4rem 0;">
<tr>
  <th style="padding:5px 22px 5px 6px;border-bottom:2px solid #b0c4de;text-align:left;">Sul display</th>
  <th style="padding:5px 22px 5px 6px;border-bottom:2px solid #b0c4de;text-align:left;">Significato</th>
  <th style="padding:5px 6px 5px 6px;border-bottom:2px solid #b0c4de;text-align:left;">Valore decimale</th>
</tr>
<tr>
  <td style="padding:5px 22px 5px 6px;"><code>1.234E-5</code></td>
  <td style="padding:5px 22px 5px 6px;">$1{,}234 \times 10^{-5}$</td>
  <td style="padding:5px 6px 5px 6px;">$0{,}00001234$</td>
</tr>
<tr>
  <td style="padding:5px 22px 5px 6px;"><code>6.022E+23</code></td>
  <td style="padding:5px 22px 5px 6px;">$6{,}022 \times 10^{23}$</td>
  <td style="padding:5px 6px 5px 6px;">$602\,200\,000\,000\,000\,000\,000\,000$</td>
</tr>
<tr>
  <td style="padding:5px 22px 5px 6px;border-bottom:1px solid #e5e7eb;"><code>9.109E-31</code></td>
  <td style="padding:5px 22px 5px 6px;border-bottom:1px solid #e5e7eb;">$9{,}109 \times 10^{-31}$</td>
  <td style="padding:5px 6px 5px 6px;border-bottom:1px solid #e5e7eb;">massa dell'elettrone in kg</td>
</tr>
</table>

{% include box-end.html %}


## Le operazioni in Notazione Scientifica

Ci capiterà spesso di sommare, moltiplicare o dividere numeri scritti in notazione scientifica. Per fortuna, le regole sono molto semplici.

{% include esercizi/esercizi-notazione-scientifica-2.html %}


## Dalle unità ai loro multipli e sottomultipli

Se doveste misurare la lunghezza di una formica, probabilmente non vi verrebbe da utilizzare la notazione scientifica, bensì esprimereste semplicemente la lunghezza in millimetri anziché metri. Non state realmente cambiando unità di misura, state semplicemente utilizzando un **sottomultiplo** del metro. Allo stesso modo, se doveste misurare la distanza tra Torino e Milano, difficilmente direste che corrisponde a circa $200\, 000 \ \text m$: più facilmente direste che sono circa $200\, \text{km}$. In questo caso state utilizzando un **multiplo** del metro.

Questi multipli e sottomultipli sono gli stessi per tutte le unità di misura e si indicano semplicemente con una lettera davanti al simbolo dell'unità di misura. Essi si basano sulle potenze di $10$. Ad esempio, un kilometro si indica con $1\ \text{km}$ e corrisponde a 

$$1\ \text{km} = 1\,000 \text m = 10^3 \ \text m.$$

Allo stesso modo, il millimetro si indica con $1 \ \text{mm}$ e corrisponde a

$$ 1 \ \text{mm} = 0{,}00\, 1 m = 10^{-3} \ \text m.$$


Notiamo, in generale, che quando passiamo da un multiplo di un'unità di misura a un altro dobbiamo moltiplicare per un certo fattore che corrisponde a una potenza di $10$. Tale fattore è chiamato <definizione>fattore di conversione</definizione>. Ad esempio, per passare da kilometri a metri, il fattore di conversione vale $10^3$; per passare da millimetri a metri il fattore vale $10^{-3}$.

Ecco la lista dei prefissi dei multipli e sottomultipli.

<div style="overflow-x:auto;margin:1.2rem 0;">
<table style="width:100%;border-collapse:collapse;font-size:.95rem;">
<thead><tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">
  <th style="padding:.45rem 1.2rem;text-align:left;">Prefisso</th>
  <th style="padding:.45rem 1.2rem;text-align:center;">Simbolo</th>
  <th style="padding:.45rem 1.2rem;text-align:center;">Fattore di conversione</th>
  <th style="padding:.45rem 1.2rem;text-align:left;">Esempio</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">Tera</td> <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">T</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{12}$</td>  <td style="padding:.4rem 1.2rem;">1 Ts = $10^{12}$ s</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">Giga</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">G</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{9}$</td>   <td style="padding:.4rem 1.2rem;">1,23 Gm = $1,23\times 10^{9}$ m</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">Mega</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">M</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{6}$</td>   <td style="padding:.4rem 1.2rem;">12,3 Mg = $12,3\times 10^{6}$ g</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">kilo</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">k</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{3}$</td>   <td style="padding:.4rem 1.2rem;">9,8 kg = $9,8\times 10^{3}$ g</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">etto</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">h</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{2}$</td>   <td style="padding:.4rem 1.2rem;">100 hg = $100\times 10^{2}$ g</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">deca</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">da</td> <td style="padding:.4rem 1.2rem;text-align:center;">$10^{1}$</td>   <td style="padding:.4rem 1.2rem;">3 dag = $3\times 10^{1}$ g</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">deci</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">d</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-1}$</td>  <td style="padding:.4rem 1.2rem;">0,04 dm = $0,04\times 10^{-1}$ m</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">centi</td> <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">c</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-2}$</td>  <td style="padding:.4rem 1.2rem;">3 cm = $3\times 10^{-2}$ m</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">milli</td> <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">m</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-3}$</td>  <td style="padding:.4rem 1.2rem;">41 ms = $41\times 10^{-3}$ s</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">micro</td> <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">μ</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-6}$</td>  <td style="padding:.4rem 1.2rem;">1,0001 μm = $1,0001\times 10^{-6}$ m</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">nano</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">n</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-9}$</td>  <td style="padding:.4rem 1.2rem;">5,55 ns = $5,55\times 10^{-9}$ s</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">pico</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">p</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-12}$</td> <td style="padding:.4rem 1.2rem;">6 pm = $6\times10^{-12}$ m</td></tr>
</tbody></table></div>


Questi prefissi si possono ordinare su una retta dal più piccolo al più grande nel seguente modo.

{% include figure/figura-retta-prefissi.html %}

{% include box-imp.html testo="Come convertire tra prefissi" %}
Per convertire un numero da un prefisso a un altro:

1. Guarda i fattori di conversione del prefisso di **partenza** ($10^n$) e di quello di **arrivo** $\text (10^m\text )$. (La base ha fattore di conversione $10^0$).
2. Calcola la differenza: $n - m$.
3. Il fattore di conversione totale è $10^{n-m}$.


Se $n > m$ (vai verso un prefisso più piccolo, cioè verso sinistra), il numero cresce, cioè l'esponente è positivo. Se $n < m$ (vai verso un prefisso più grande, cioè verso destra), il numero diminuisce, cioè l'esponente è negativo.
{% include box-end.html %}

{% include box-blue.html testo="Esempi" %}
**Esempio 1 — km in m:** k ha esponente 3, la base ha esponente 0. Differenza: $3-0=3$. Quindi $5\ \text{km} = 5\times 10^3\ \text{m} = 5000\ \text{m}$.

**Esempio 2 — mm in μm:** m ha esponente $-3$, μ ha esponente $-6$. Differenza: $-3-(-6)=3$. Quindi $2\ \text{mm} = 2\times 10^3\ \text{µm} = 2000\ \text{µm}$.

**Esempio 3 — Mm in km:** M ha esponente 6, k ha esponente 3. Differenza: $6-3=3$. Quindi $4\ \text{Mm} = 4\times 10^3\ \text{km} = 4000\ \text{km}$.

**Esempio 4 — cm in m:** c ha esponente $-2$, la base ha esponente 0. Differenza: $-2-0=-2$. Quindi $150\ \text{cm} = 150\times 10^{-2}\ \text{m} = 1{,}50\ \text{m}$.
{% include box-end.html %}



{% include esercizi/esercizio-conversione-unita.html %}

Per convertire da un prefisso a un altro è utile anche avere sempre presente la linea dei prefissi. Si possono quindi contare i salti per arrivare dal prefisso di partenza a quello di arrivo. Si deve porre attenzione al fatto che alcuni salti valgono $3$ (per esempio, da micrometri $10^{-6}$ a millimetri $10^{-3}$) mentre altri valgono solo $1$ (per esempio, da millimetri $10^{-3}$ a centimetri $10^{-2}$). Il numero di salti totale 
è pari all'esponente del fattore di conversione. Se i salti sono verso destra, l'esponente sarà negativo; se i salti sono verso sinistra, l'esponente sarà positivo.  
Usa la simulazione qui sotto per visualizzare come si converte da un prefisso a un altro. Scegli il prefisso di partenza e quello di arrivo, poi clicca **Mostra**.

{% include esercizi/prefissi-e-conversione.html %}

### L'unità di misura del tempo

Il tempo si misura in secondi. Però i multipli del secondo sono un po' strani, perché non sono decimali. Infatti, $1$ minuto corrisponde a $60$ secondi. Un'ora corrisponde a $60$ minuti, ciascuno dei quali è composto da $60$ secondi. Perciò un'ora è composta da

$$1\ \text h = 60 \ \text{min} = 60\times60 \ \text s = 3600 \ \text s.$$

Ci sarà in generale molto utile convertire tutti i multipli dei secondi (minuti, ore, giorni, anni, secoli, millenni) in secondi. Per farlo, prova tu con questi esercizi.
{% capture _d8 %}[
  {"p":"Quanti secondi ci sono in 1 giorno?","a":86400,"t":0.0001},
  {"p":"Quanti secondi ci sono in 1 anno? (Considera 365,25 giorni/anno.)","a":31557600,"t":0.005}
]{% endcapture %}
{% include iex-num.html id="t8" domande=_d8 testo="Esercizio 8 — Secondi in un giorno e in un anno" hint="Indizio: 1 giorno = 24 h, 1 h = 60 min, 1 min = 60 s. Per l'anno considera 365,25 giorni medi (anni bisestili ogni 4 anni)." %}

<p class="iex-lbl">Esercizio 9 — Secondi in un secolo e in un millennio</p>
{% include sci.html prima="Un secolo =" coeff="3.15576,3.16,3.2" exp="9" s="3,15576 × 10⁹ s" %}
{% include sci.html prima="Un millennio =" coeff="3.15576,3.16,3.2" exp="10" s="3,15576 × 10¹⁰ s" %}

<div class="calc-flow">
{% include calc-margin.html id="calc1" %}
<div class="calc-flow-body">

{% include esercizi/esercizio-ore-in-secondo.html %}



# Le grandezze derivate

Come abbiamo detto precedentemente, le grandezze derivate sono tutte quelle che non appartengono alle sette grandezze fondamentali del Sistema Internazionale (Tab. 1, [vedi qui](#tab-si)).

### Area

{% include box-imp.html testo="Area" %}

L'area di una superficie è una grandezza derivata: è data dal prodotto di due lunghezze e si misura in **metri quadrati** ($\text{m}^2$).

{% include box-end.html %}

{% include figure/figura-formule-aree.html %}

Esempio: un quadrato di lato $\ell = 4\ \text{m}$ ha area $A = \ell^2 = (4\ \text{m})^2 = 16\ \text{m}^2$.

#### Equivalenze tra misure di area

{% include lab-virtuali/equivalenza-area-lab.html %}

Prova ora a ripetere lo stesso ragionamento con gli altri multipli del metro.

{% capture _disc_area %}[
  {"p":"Completa: 1 m = 10<sup>?</sup> cm. Scrivi solo l'esponente.","a":2,"t":0.0001},
  {"p":"Quindi: 1 m&#178; = (10<sup>2</sup> cm) &times; (10<sup>2</sup> cm) = 10<sup>?</sup> cm&#178;. Scrivi l'esponente.","a":4,"t":0.0001},
  {"p":"Completa: 1 m = 10<sup>?</sup> mm. Scrivi solo l'esponente.","a":3,"t":0.0001},
  {"p":"Quindi: 1 m&#178; = (10<sup>3</sup> mm) &times; (10<sup>3</sup> mm) = 10<sup>?</sup> mm&#178;. Scrivi l'esponente.","a":6,"t":0.0001}
]{% endcapture %}
{% include iex-num.html id="disc-area" domande=_disc_area testo="Scoperta guidata — riproduci il ragionamento" hint="Scrivi solo il numero dell'esponente (es. 2, 4, …)." %}

Cosa noti? Per dm era $10^1$ → area $10^2$; per cm era $10^2$ → area $10^4$; per mm era $10^3$ → area $10^6$. **L'esponente dell'area è sempre il doppio** dell'esponente lineare.

{% include box-warn.html testo="Attenzione" %}
**Non è vero** che $1\ \text{m}^2 = 10^2\ \text{cm}^2$. L'esponente raddoppia: $1\ \text{m}^2 = 10^4\ \text{cm}^2$.
{% include box-end.html %}

{% include box-imp.html testo="Regola per le aree" %}
Se per la lunghezza il fattore di conversione è $10^n$, per l'**area** è $10^{2n}$. Sulla retta dei prefissi, ogni passo vale il **doppio** per le aree.
{% include box-end.html %}

{% include lab-virtuali/prefissi-area-lab.html %}

{% include esercizi/esercizio-qar.html %}

### Volume

{% include box-imp.html testo="Volume" %}

Il volume di un solido è una grandezza derivata: è dato dal prodotto di tre lunghezze e si misura in **metri cubi** ($\text{m}^3$).

{% include box-end.html %}

{% include figure/figura-formule-volumi.html %}

Esempio: un cubo di lato $\ell = 2\ \text{m}$ ha volume $V = \ell^3 = (2\ \text{m})^3 = 8\ \text{m}^3$.

#### Equivalenze tra misure di volume

{% include lab-virtuali/equivalenza-volume-lab.html %}

Prova ora a ripetere lo stesso ragionamento con gli altri multipli del metro.

{% capture _disc_vol %}[
  {"p":"Completa: 1 m = 10<sup>?</sup> cm. Scrivi solo l'esponente.","a":2,"t":0.0001},
  {"p":"Quindi: 1 m&#179; = (10<sup>2</sup> cm)<sup>3</sup> = 10<sup>?</sup> cm&#179;. Scrivi l'esponente.","a":6,"t":0.0001},
  {"p":"Completa: 1 m = 10<sup>?</sup> mm. Scrivi solo l'esponente.","a":3,"t":0.0001},
  {"p":"Quindi: 1 m&#179; = (10<sup>3</sup> mm)<sup>3</sup> = 10<sup>?</sup> mm&#179;. Scrivi l'esponente.","a":9,"t":0.0001}
]{% endcapture %}
{% include iex-num.html id="disc-vol" domande=_disc_vol testo="Scoperta guidata — riproduci il ragionamento" hint="Scrivi solo il numero dell'esponente (es. 3, 6, …)." %}

Cosa noti? Per dm era $10^1$ → volume $10^3$; per cm era $10^2$ → volume $10^6$; per mm era $10^3$ → volume $10^9$. **L'esponente del volume è sempre il triplo** dell'esponente lineare.

{% include box-warn.html testo="Attenzione" %}
**Non è vero** che $1\ \text{m}^3 = 10^2\ \text{cm}^3$. L'esponente si triplica: $1\ \text{m}^3 = 10^6\ \text{cm}^3$.
{% include box-end.html %}

{% include box-imp.html testo="Regola per i volumi" %}
Se per la lunghezza il fattore di conversione è $10^n$, per il **volume** è $10^{3n}$. Sulla retta dei prefissi, ogni passo vale il **triplo** per i volumi.
{% include box-end.html %}

{% include lab-virtuali/prefissi-volume-lab.html %}

{% include esercizi/esercizio-qvol.html %}

{% include esercizi/esercizio-aree-esponenti.html %}

{% include lab-virtuali/rinumera-esercizi-util.html %}

# Esercizi di riepilogo
### Le unità di misura e il Sistema Internazionale

{% include ex.html diff=1%}
Abbiamo visto che misurando il lato della lavagna con due campioni diversi (ad esempio un cancellino e una biro) ottenevamo risultati diversi (ad esempio 9.3 cancellini e 7.3 biro). In generale, abbiamo concluso che cambiando il campione cambia il risultato della misurazione. Come è stato risolto questo problema dalla comunità scientifica?
{% include ex-sol.html %}
Adottando un Sistema Internazionale di unità di misura, in cui cioè le misurazioni sono sempre riferite allo stesso campione, in tutto il mondo.
{% include ex-sol-end.html %}


{% include ex.html diff=1%}
Associa a ogni grandezza fisica fondamentale la rispettiva unità di misura e poi a ogni unità di misura il rispettivo simbolo.
{% capture _d %}[
  {"l":"Lunghezza",                  "m":"metro",        "r":"m"},
  {"l":"Massa",                      "m":"chilogrammo",  "r":"kg"},
  {"l":"Tempo",                      "m":"secondo",      "r":"s"},
  {"l":"Corrente elettrica",         "m":"ampere",       "r":"A"},
  {"l":"Temperatura",                "m":"kelvin",       "r":"K"},
  {"l":"Quantità di sostanza",       "m":"mole",         "r":"mol"},
  {"l":"Intensità luminosa",         "m":"candela",      "r":"cd"}
]{% endcapture %}
{% include match.html id="g7" dati=_d col1="Grandezza fondamentale" col2="Unità SI" col3="Simbolo" %}
{% include ex-end.html %}


{% include ex.html diff=1 %}
Inserisci ciascuna delle seguenti grandezze nella colonna appropriata.

{% capture _sort %}[
  {"t":"Velocità",                    "c":0},
  {"t":"Forza",                       "c":0},
  {"t":"Accelerazione",               "c":0},
  {"t":"Energia",                     "c":0},
  {"t":"Pressione",                   "c":0},
  {"t":"Area",                        "c":0},
  {"t":"Lunghezza",                   "c":1},
  {"t":"Massa",                       "c":1},
  {"t":"Tempo",                       "c":1},
  {"t":"Corrente elettrica",          "c":1},
  {"t":"Temperatura",   "c":1},
  {"t":"Quantità di sostanza",        "c":1}
]{% endcapture %}
{% include sort.html id="sort-gf" dati=_sort col0="Grandezze derivate" col1="Grandezze fondamentali" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Prova a formulare una definizione del Sistema Internazionale, completando la frase.

{% include def-compare.html id="dc-si"
   testo="Il Sistema Internazionale è..."
   link="#def-si"
   label="Confronta con la definizione nel riquadro" %}
{% include ex-end.html %}

### La notazione scientifica e la conversione tra prefissi nelle grandezze fondamentali

{% include ex.html diff=1 %}
Per ciascuna delle seguenti parole, associa il numero corrispondente, poi associa la sua espressione in notazione scientifica.

{% capture _d %}[
  {"l":"uno",             "m":"1",                   "r":"$10^0$"},
  {"l":"dieci",           "m":"10",                  "r":"$10^1$"},
  {"l":"cento",           "m":"100",                 "r":"$10^2$"},
  {"l":"mille",           "m":"1 000",               "r":"$10^3$"},
  {"l":"diecimila",       "m":"10 000",              "r":"$10^4$"},
  {"l":"centomila",       "m":"100 000",             "r":"$10^5$"},
  {"l":"un milione",      "m":"1 000 000",           "r":"$10^6$"},
  {"l":"un miliardo",     "m":"1 000 000 000",       "r":"$10^9$"},
  {"l":"cento miliardi",  "m":"100 000 000 000",     "r":"$10^{11}$"}
]{% endcapture %}
{% include match.html id="noti" dati=_d col1="Nome" col2="Numero" col3="Notazione scientifica" %}

{% include ex-end.html %}

{% include ex.html %}
Riordina i seguenti numeri dal più piccolo al più grande trascinando le caselle.

{% capture _d %}[
  {"t":"$10^{-100}$",   "pos":0},
  {"t":"$10^{-6}$",     "pos":1},
  {"t":"$10^0$",        "pos":2},
  {"t":"$10^6$",        "pos":3},
  {"t":"2 milioni e mezzo",             "pos":4},
  {"t":"10 000 000",    "pos":5},
  {"t":"$10^{100}$",    "pos":6}
]{% endcapture %}
{% include order.html id="ord1" dati=_d direz="dal più piccolo al più grande" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Esprimi i seguenti valori in notazione scientifica.

{% include sci.html prima="450 000 000 000 =" coeff="4.5" exp="11" s="4.5 × 10¹¹" %}
{% include sci.html prima="73 000 000 000 =" coeff="7.3" exp="10" s="7.3 × 10¹⁰" %}
{% include sci.html prima="8 600 000 000 000 =" coeff="8.6" exp="12" s="8.6 × 10¹²" %}
{% include sci.html prima="0,000 000 032 =" coeff="3.2" exp="-8" s="3.2 × 10⁻⁸" %}
{% include sci.html prima="0,000 000 000 051 =" coeff="5.1" exp="-11" s="5.1 × 10⁻¹¹" %}
{% include sci.html prima="0,000 000 000 74 =" coeff="7.4" exp="-10" s="7.4 × 10⁻¹⁰" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Riscrivi i seguenti valori per esteso (senza spazi).

{% include fill.html prima="$2.9 \times 10^{11}$ =" ok="290000000000" s="290 000 000 000" %}
{% include fill.html prima="$6.1 \times 10^{9}$ =" ok="6100000000" s="6 100 000 000" %}
{% include fill.html prima="$1.7 \times 10^{13}$ =" ok="17000000000000" s="17 000 000 000 000" %}
{% include fill.html prima="$4.5 \times 10^{-9}$ =" ok="0.0000000045,0,0000000045" s="0,000 000 004 5" %}
{% include fill.html prima="$8.3 \times 10^{-7}$ =" ok="0.00000083,0,00000083" s="0,000 000 83" %}
{% include fill.html prima="$3.0 \times 10^{-11}$ =" ok="0.00000000003,0,00000000003" s="0,000 000 000 030" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Ogni anno nell'Universo nascono circa $3 \times 10^{11}$ stelle. Quante stelle nasceranno nel prossimo millennio?

{% include sci.html coeff="3" exp="14" s="3 × 10¹⁴" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Nel 2023 le entrate fiscali di un piccolo paese europeo sono state di $4{,}5 \times 10^{11}$ €, mentre le spese pubbliche hanno raggiunto $3{,}9 \times 10^{11}$ €. Qual è il bilancio dello stato (entrate meno spese)?

{% include sci.html coeff="6" exp="10" s="6 × 10¹⁰ €" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Calcola e scrivi il risultato in notazione scientifica.

$$\frac{(4 \times 10^8) \times (3 \times 10^5)}{(2 \times 10^6) \times (6 \times 10^3)}$$

{% include sci.html coeff="1" exp="4" s="1 × 10⁴" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Calcola e scrivi il risultato in notazione scientifica.

$$\frac{(5 \times 10^9) \times (6 \times 10^4)}{(3 \times 10^7) \times (2 \times 10^3)}$$

{% include sci.html coeff="5" exp="3" s="5 × 10³" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Calcola il risultato delle seguenti operazioni in notazione scientifica. Cerca di non usare la calcolatrice: riconduci prima ogni numero alla forma $a \times 10^n$ e poi esegui i calcoli a mente!

{% include sci.html prima="$\dfrac{80\,000}{0{,}04} =$" coeff="2" exp="6" s="2 × 10⁶" %}
{% include sci.html prima="$4\,000\,000 \times 0{,}000\,02 =$" coeff="8" exp="1" s="8 × 10¹" %}
{% include sci.html prima="$\dfrac{0{,}016}{0{,}000\,000\,4} =$" coeff="4" exp="4" s="4 × 10⁴" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Il numero di stelle visibili a occhio nudo dalla Terra è circa 9 000. Quando Galileo inventò il primo telescopio poteva però vederne circa $3\times 10^4$. Quante stelle ha scoperto Galileo, in notazione scientifica?

{% include sci.html coeff="2.1" exp="4" s="2.1 × 10⁴" %}
{% include ex-end.html %}



{% include ex.html diff=1 %}
Una macchina accesa emette circa $2\times 10^{-3}$ kg di CO₂ al secondo. In questo momento nel mondo ci sono circa $5 \times 10^{8}$ macchine accese. Stima la quantità totale di CO₂ emessa in questo secondo, in chilogrammi.

{% include sci.html coeff="1" exp="6" s="1 × 10⁶ kg" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Una tonnellata sono 1 000 chilogrammi. Esprimi $7.6 \times 10^7$ tonnellate in chilogrammi.

{% include sci.html coeff="7.6" exp="10" s="7.6 × 10¹⁰ kg" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un quintale sono 100 chilogrammi. Esprimi $1.5 \times 10^8$ kg in quintali.

{% include sci.html coeff="1.5" exp="6" s="1.5 × 10⁶ quintali" %}
{% include ex-end.html %}

{% capture _d %}[
  {"t":"1 pm",  "pos":0},
  {"t":"1 nm",  "pos":1},
  {"t":"1 µm",  "pos":2},
  {"t":"1 cm",  "pos":3},
  {"t":"1 dam", "pos":4},
  {"t":"1 hm",  "pos":5},
  {"t":"1 km",  "pos":6},
  {"t":"1 Gm",  "pos":7},
  {"t":"1 Tm",  "pos":8}
]{% endcapture %}
{% include ex.html diff=1 %}
Riordina le seguenti lunghezze dal più piccolo al più grande.

{% include order.html id="ord-pref" dati=_d direz="dal più piccolo al più grande" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Il raggio della Terra è $R = 6\,400$ km. Usando la formula $C = 2\pi R$ e $\pi \approx 3.14$, calcola la lunghezza dell'equatore ed esprimila in notazione scientifica con una sola cifra prima della virgola (in km).

{% include sci.html coeff="4.0,4" exp="4" s="4,0 × 10⁴ km" %}

Ricordando che la superficie di una sfera si calcola come $S = 4\pi R^2$, trova la superficie terrestre (in km²).

{% include sci.html coeff="5.1" exp="8" tol=2 s="5,1 × 10⁸ km²" %}

Sapendo che il 70% della superficie terrestre è acqua, calcola la superficie totale delle acque terrestri (in km²).
{% include sci.html coeff="3.6" exp="8" tol=2 s="3,6 × 10⁸ km²" %}

{% include ex-end.html %}

{% include ex.html diff=2 %}
L'universo osservabile contiene circa $2 \times 10^{12}$ galassie. Supponi che ogni galassia abbia esattamente un pianeta abitato con una popolazione pari a quella terrestre (circa $8 \times 10^9$ esseri). Stima il numero totale di esseri viventi nell'universo.

{% include sci.html coeff="1.6" exp="22" s="1.6 × 10²²" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Il volume di Giove è $1.4 \times 10^{15}$ km³, quello della Terra è $1.1 \times 10^{12}$ km³. Quante volte la Terra è contenuta in Giove?

{% include sci.html coeff="1.3,1.27,1.4" exp="3" s="≈ 1.3 × 10³" %}

Sapendo che Giove è contenuto circa $10^3$ volte nel Sole, quante volte sarebbe contenuta la Terra nel Sole?

{% include sci.html coeff="1.3,1.27,1.4" exp="6" s="≈ 1.3 × 10⁶" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Investi 34,5 euro in un'azione il cui valore aumenta di 100 volte ogni anno. *(Esercizio ipotetico: nella realtà i rendimenti sono ben diversi.)* Dopo 6 anni, quale sarà il valore dell'azione in euro?

{% include sci.html coeff="3.45,3.4,3.5" exp="13" s="3.45 × 10¹³ euro" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Una persona ha in media $8.6 \times 10^{10}$ neuroni. La popolazione mondiale è circa $8 \times 10^9$ persone. Quanti neuroni umani ci sono nel mondo?

{% include sci.html coeff="6.9,6.88,6.8,7" exp="20" s="≈ 6.9 × 10²⁰" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Il patrimonio totale di tutte le persone del mondo è circa $5.5\times 10^{14}$ dollari. Gli abitanti della Terra sono circa 8.2 miliardi. Se fosse distribuito equamente, quanti dollari spetterebbero a ciascuno?

*Indizio: converti prima entrambi i dati in notazione scientifica.*

{% include sci.html coeff="6.7" exp="4" s="6.7 × 10⁴ dollari, ovvero 67 mila euro per ciascuno." %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Converti le seguenti lunghezze in metri, usando la notazione scientifica.

{% include sci.html prima="$10^6$ km =" coeff="1" exp="9" s="1 × 10⁹ m" %}
{% include sci.html prima="$10^{-12}$ Gm =" coeff="1" exp="-3" s="1 × 10⁻³ m" %}
{% include sci.html prima="$10^4$ nm =" coeff="1" exp="-5" s="1 × 10⁻⁵ m" %}
{% include sci.html prima="$5 \times 10^3$ cm =" coeff="5" exp="1" s="5 × 10¹ m" %}
{% include sci.html prima="$2 \times 10^{-4}$ Tm =" coeff="2" exp="8" s="2 × 10⁸ m" %}
{% include sci.html prima="$3 \times 10^6$ µm =" coeff="3" exp="0" s="3 × 10⁰ m = 3 m" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Converti le seguenti masse in kilogrammi, usando la notazione scientifica.

{% include sci.html prima="$4 \times 10^6$ g =" coeff="4" exp="3" s="4 × 10³ kg" %}
{% include sci.html prima="$6 \times 10^{-2}$ t =" coeff="6" exp="1" s="6 × 10¹ kg" %}
{% include sci.html prima="$3 \times 10^{10}$ mg =" coeff="3" exp="4" s="3 × 10⁴ kg" %}
{% include sci.html prima="$9 \times 10^{14}$ µg =" coeff="9" exp="5" s="9 × 10⁵ kg" %}
{% include sci.html prima="$5 \times 10^{-3}$ t =" coeff="5" exp="0" s="5 × 10⁰ kg = 5 kg" %}
{% include sci.html prima="$2 \times 10^{-4}$ t =" coeff="2" exp="-1" s="2 × 10⁻¹ kg" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Converti i seguenti intervalli di tempo in secondi, usando la notazione scientifica.

{% include sci.html prima="$4 \times 10^6$ ms =" coeff="4" exp="3" s="4 × 10³ s" %}
{% include sci.html prima="$6 \times 10^4$ µs =" coeff="6" exp="-2" s="6 × 10⁻² s" %}
{% include sci.html prima="$2 \times 10^8$ ns =" coeff="2" exp="-1" s="2 × 10⁻¹ s" %}
{% include sci.html prima="$5 \times 10^2$ min =" coeff="3" exp="4" s="3 × 10⁴ s" %}
{% include sci.html prima="$7 \times 10^{-2}$ ks =" coeff="7" exp="1" s="7 × 10¹ s" %}
{% include sci.html prima="$1.5 \times 10^4$ min =" coeff="9" exp="5" s="9 × 10⁵ s" %}
{% include ex-end.html %}

{% capture _d %}[
  {"t":"$10^2$ pm",     "pos":0},
  {"t":"1 nm",          "pos":1},
  {"t":"$10^{-2}$ cm",  "pos":2},
  {"t":"$10^5$ µm",     "pos":3},
  {"t":"10 dam",        "pos":4},
  {"t":"100 km",        "pos":5},
  {"t":"10 000 hm",     "pos":6},
  {"t":"$10^{-2}$ Gm",  "pos":7},
  {"t":"$10^{-3}$ Tm",  "pos":8}
]{% endcapture %}
{% include ex.html diff=2 %}
Riordina le seguenti lunghezze dal più piccolo al più grande.

*Indizio: converti tutto in metri.*

{% include order.html id="ord-pref2" dati=_d direz="dal più piccolo al più grande" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
I neutrini solari sono particelle quasi prive di massa prodotte dalle reazioni nel Sole. Ogni secondo, attraverso ogni cm² del tuo corpo, passano circa $6.5 \times 10^{10}$ neutrini. La sezione trasversale di una persona è circa $10^4$ cm². Quanti neutrini ti attraversano al secondo?

{% include sci.html coeff="6.5" exp="14" s="6.5 × 10¹⁴ neutrini/s" %}

E quanti in una vita di 80 anni? (Usa $1\,\text{anno} \approx 3.15 \times 10^7$ s.)

{% include sci.html coeff="1.6,1.64" exp="24" s="≈ 1.6 × 10²⁴ neutrini" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un computer portatile esegue circa $3 \times 10^7$ somme al secondo. Quante somme riesce a eseguire in un'ora?

{% include sci.html coeff="1.08,1.1" exp="11" s="1.08 × 10¹¹" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
La Terra si è formata circa $4.57 \times 10^9$ anni fa. Quanti secoli sono passati? Quanti minuti?

{% include sci.html prima="Secoli =" coeff="4.57,4.6" exp="7" s="4.57 × 10⁷ secoli" %}
{% include sci.html prima="Minuti =" coeff="2.4,2.40,2.40" exp="15" s="2.4 × 10¹⁵ minuti" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un anno-luce è la distanza percorsa dalla luce in un anno. Sapendo che la luce percorre $3 \times 10^8$ m al secondo, e approssimando un anno con 365 giorni, calcola quanti metri corrisponde un anno-luce.

{% include sci.html coeff="9.5,9.46,9.461,9.47" exp="15" tol=2 s="≈ 9.5 × 10¹⁵ m" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un treno parte da Torino alle 13:30 e arriva a Milano alle 15:25. Quanti minuti sono trascorsi? E quanti secondi? Esprimi entrambi in notazione scientifica.

{% include sci.html prima="Minuti =" coeff="1.15,1.2" exp="2" s="1.15 × 10² min" %}
{% include sci.html prima="Secondi =" coeff="6.9" exp="3" s="6.9 × 10³ s" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Quanti giorni hai vissuto? Calcola il risultato e scrivilo in notazione scientifica. Poi inserisci la tua data di nascita per verificare.

{% include lab-virtuali/quanti-giorni-vissuti-lab.html %}
{% include ex-end.html %}

### Grandezze derivate: area e volume

{% include ex.html diff=1 %}
Indica se ciascuna delle seguenti grandezze si misura in **m**, **m²** o **m³**.

{% include fill.html prima="La distanza da casa a scuola" tipo="drop" opts="m|m²|m³" ok="m" dopo="." %}
{% include fill.html prima="La superficie terrestre" tipo="drop" opts="m|m²|m³" ok="m²" dopo="." %}
{% include fill.html prima="La quantità d'acqua per riempire una piscina" tipo="drop" opts="m|m²|m³" ok="m³" dopo="." %}
{% include fill.html prima="L'altezza di una persona" tipo="drop" opts="m|m²|m³" ok="m" dopo="." %}
{% include fill.html prima="La superficie di un campo da calcio" tipo="drop" opts="m|m²|m³" ok="m²" dopo="." %}
{% include fill.html prima="Il volume di un pallone da basket" tipo="drop" opts="m|m²|m³" ok="m³" dopo="." %}
{% include fill.html prima="La larghezza di un fiume" tipo="drop" opts="m|m²|m³" ok="m" dopo="." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un campo da tennis (doppio) misura 24 m di lunghezza e 11 m di larghezza. Calcola la sua area.

{% include fill.html prima="Area =" ok="264" dopo=" m²" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
La vasca della Fontana di Trevi può essere approssimata con un cilindro di raggio $r = 10$ m e altezza $h = 1$ m. Calcola il volume d'acqua che può contenere.

{% include spoiler.html testo="Formula e valore di π" %}
$V_{\text{cil}} = \pi r^2 h$, con $\pi \approx 3{,}14$.
{% include spoiler-end.html %}

{% include fill.html prima="Volume ≈" ok="314,314.0" dopo=" m³" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un litro corrisponde a $1\,\text{dm}^3$. Convertilo in m³ e in cm³, esprimendo il risultato in notazione scientifica.

{% include sci.html prima="$1\,\text{dm}^3$ in m³ =" coeff="1" exp="-3" s="1 × 10⁻³ m³" %}
{% include sci.html prima="$1\,\text{dm}^3$ in cm³ =" coeff="1" exp="3" s="1 × 10³ cm³" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un adulto medio ispira circa 500 L di aria all'ora. Converti in m³.

{% include sci.html prima="500 L =" coeff="5" exp="-1" s="5 × 10⁻¹ m³ (cioè 0,5 m³)" %}

In una vita di 80 anni, quanti m³ di aria ispira una persona?

{% include sci.html coeff="3.5,3.504,3.51" exp="5" tol=3 s="≈ 3.5 × 10⁵ m³" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Calcola il rapporto tra $1\,\text{m}^2$ e $4\,\text{mm}^2$.

{% include sci.html prima="$\dfrac{1\,\text{m}^2}{4\,\text{mm}^2} =$" coeff="2.5" exp="5" s="2.5 × 10⁵" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un **ettaro** corrisponde a $1\,\text{hm}^2$. Convertilo in m² usando la notazione scientifica.

{% include sci.html prima="$1\,\text{hm}^2 =$" coeff="1" exp="4" s="1 × 10⁴ m²" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Una piscina olimpionica ha un'area di $1{,}25 \times 10^7\,\text{cm}^2$ e una profondità di $2 \times 10^3\,\text{mm}$. Calcola il volume in m³.

{% include sci.html coeff="2.5" exp="3" s="2.5 × 10³ m³" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Converti le seguenti aree in m², usando la notazione scientifica.

{% include sci.html prima="$100\,µ\text{m}^2 =$" coeff="1" exp="-10" s="1 × 10⁻¹⁰ m²" %}
{% include sci.html prima="$10^5\,\text{nm}^2 =$" coeff="1" exp="-13" s="1 × 10⁻¹³ m²" %}
{% include sci.html prima="$10^{-20}\,\text{Gm}^2 =$" coeff="1" exp="-2" s="1 × 10⁻² m²" %}
{% include sci.html prima="$5 \times 10^4\,\text{km}^2 =$" coeff="5" exp="10" s="5 × 10¹⁰ m²" %}
{% include sci.html prima="$3 \times 10^{-2}\,\text{cm}^2 =$" coeff="3" exp="-6" s="3 × 10⁻⁶ m²" %}
{% include sci.html prima="$7 \times 10^3\,\text{mm}^2 =$" coeff="7" exp="-3" s="7 × 10⁻³ m²" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Converti i seguenti volumi in m³, usando la notazione scientifica.

{% include sci.html prima="$4 \times 10^6\,µ\text{m}^3 =$" coeff="4" exp="-12" s="4 × 10⁻¹² m³" %}
{% include sci.html prima="$2 \times 10^{12}\,\text{nm}^3 =$" coeff="2" exp="-15" s="2 × 10⁻¹⁵ m³" %}
{% include sci.html prima="$5 \times 10^3\,\text{dm}^3 =$" coeff="5" exp="0" s="5 × 10⁰ m³ = 5 m³" %}
{% include sci.html prima="$8 \times 10^7\,\text{cm}^3 =$" coeff="8" exp="1" s="8 × 10¹ m³" %}
{% include sci.html prima="$3 \times 10^{-2}\,\text{km}^3 =$" coeff="3" exp="7" s="3 × 10⁷ m³" %}
{% include sci.html prima="$9 \times 10^4\,\text{mm}^3 =$" coeff="9" exp="-5" s="9 × 10⁻⁵ m³" %}
{% include ex-end.html %}

{% capture _d %}[
  {"t":"10 nm³","pos":0},
  {"t":"10³ µm³","pos":1},
  {"t":"0,1 dm³","pos":2},
  {"t":"5×10⁴ cm³","pos":3},
  {"t":"1 m³","pos":4}
]{% endcapture %}
{% include ex.html diff=2 %}
Riordina i seguenti volumi dal più piccolo al più grande.

{% include order.html id="ord-vol" dati=_d direz="dal più piccolo al più grande" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un capello lungo 20 cm è assimilabile a un cilindro di raggio $r = 40\,µ\text{m}$. Calcola il suo volume in m³.

{% include spoiler.html testo="Formula e valore di π" %}
$V_{\text{cil}} = \pi r^2 h$, con $\pi \approx 3{,}14$.
{% include spoiler-end.html %}

{% include sci.html coeff="1,1.0" exp="-9" tol=5 s="1.0 × 10⁻⁹ m³" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un foglio di carta A4 ha i lati di 21 cm e 30 cm e uno spessore di 0,1 mm.

Calcola la superficie del foglio:

{% include fill.html prima="Superficie =" ok="630,630.0" dopo=" cm²" %}

Calcola il volume del foglio in cm³:

{% include sci.html prima="Volume =" coeff="6.3" exp="0" s="6.3 × 10⁰ cm³ = 6.3 cm³" %}

Quanti fogli servono per formare un libro alto 5 cm?

{% include sci.html prima="Fogli =" coeff="5" exp="2" s="5 × 10² = 500 fogli" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Un atomo di idrogeno è approssimabile con una sfera di raggio $r = 0{,}05\,\text{nm}$. Calcola il suo volume in m³.

{% include spoiler.html testo="Formula e valore di π" %}
$V_{\text{sfera}} = \dfrac{4}{3}\pi r^3$, con $\pi \approx 3{,}14$.
{% include spoiler-end.html %}

{% include sci.html coeff="5.2,5.24" exp="-31" tol=5 s="≈ 5.2 × 10⁻³¹ m³" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
L'universo osservabile è approssimabile con una sfera di raggio $r = 4{,}4 \times 10^{14}\,\text{Tm}$. Calcola il suo volume in m³.

{% include spoiler.html testo="Formula e valore di π" %}
$V_{\text{sfera}} = \dfrac{4}{3}\pi r^3$, con $\pi \approx 3{,}14$.
{% include spoiler-end.html %}

{% include sci.html coeff="3.6,3.57" exp="80" tol=5 s="≈ 3.6 × 10⁸⁰ m³" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Il raggio della Luna è $r = 1{,}74 \times 10^6$ m. Calcola il volume della Luna in m³.

{% include spoiler.html testo="Formula e valore di π" %}
$V_{\text{sfera}} = \dfrac{4}{3}\pi r^3$, con $\pi \approx 3{,}14$.
{% include spoiler-end.html %}

{% include sci.html coeff="2.2,2.21" exp="19" tol=3 s="≈ 2.2 × 10¹⁹ m³" %}
{% include ex-end.html %}

{% include ex.html diff=2 %}
Il raggio del Sole è $r = 7{,}0 \times 10^8$ m. Calcola la superficie totale del Sole in m².

{% include spoiler.html testo="Formula e valore di π" %}
$S_{\text{sfera}} = 4\pi r^2$, con $\pi \approx 3{,}14$.
{% include spoiler-end.html %}

{% include sci.html coeff="6.2,6.15" exp="18" tol=3 s="≈ 6.2 × 10¹⁸ m²" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
La Piramide di Cheope ha una base quadrata di lato 230 m e un'altezza originaria di 146 m. Calcola il suo volume.

{% include spoiler.html testo="Formula del volume di una piramide a base quadrata" %}
$V = \dfrac{1}{3}b^2 h$, dove $b$ è il lato della base e $h$ è l'altezza.
{% include spoiler-end.html %}

{% include sci.html coeff="2.6,2.57" exp="6" tol=3 s="≈ 2.6 × 10⁶ m³" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un grande iceberg può essere approssimato come un cubo di lato 500 m. Calcola il suo volume.

{% include sci.html coeff="1.25,1.3" exp="8" s="1.25 × 10⁸ m³" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
La città più grande del mondo per superficie è Chongqing, in Cina, con i suoi 82 400 km². Esprimila in m².

{% include sci.html prima="Chongqing =" coeff="8.24,8.2" exp="10" s="8.24 × 10¹⁰ m²" %}

Quante volte la superficie di Torino (pari a $1{,}30 \times 10^8$ m²) è compresa in quella di Chongqing?

{% include sci.html prima="Rapporto =" coeff="6.3,6.34" exp="2" tol=3 s="≈ 6.3 × 10² (circa 634 volte)" %}
{% include ex-end.html %}





  