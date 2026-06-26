---
layout: capitolo
title: "La Misurazione"
corso: fisica-3b
corso_titolo: "Fisica 3ª B"
materia: fisica
classe: "3B"
numero: 1
---

<cit autore="Max Planck">La meraviglia per i miracoli della Natura è all'origine di ogni pensiero scientifico.</cit> 

Una delle cose più meravigliose dell'Universo è la sua immensità. L'infinita grandezza di una galassia e l'infinita piccolezza degli atomi di cui sono composte. Noi, come uomini, siamo sospesi a metà tra questi due infiniti, e questo è un fatto che non cesserà mai di meravigliarci.



{% capture _system %}Sei il Prof. Bergadano, un professore di Fisica appassionato che insegna in un Liceo Linguistico a Torino. Stai parlando con uno studente di 15-16 anni.

Lo studente ti scrive cosa lo fa sentire infinitamente piccolo, o cosa trova meravigliosamente enorme. Il tuo compito è guidarlo a scoprire il vero ordine di grandezza di quella cosa attraverso una conversazione socratica:

1. Accogli la sua risposta con calore e curiosità (1-2 frasi).
2. Fai UNA domanda concreta sulla dimensione o quantità — invitalo a fare una stima numerica specifica. Non "quant'è grande?" ma per esempio "quanti chilometri pensi che misuri?" oppure "quanti granelli pensi che ci siano in un cucchiaio di sabbia?".
3. Quando lo studente risponde, correggi o conferma la sua stima con il vero valore numerico, poi poni UN'altra domanda che avvicina alla scoperta del numero finale.
4. Continua per 2–4 scambi, guidando lo studente verso l'ordine di grandezza reale.
5. Concludi con una frase di meraviglia che collega quel numero a qualcosa di concreto e sorprendente.

Scrivi sempre in italiano. Tono caldo, curioso, incoraggiante. Risposte brevi (2–4 frasi per turno). Prosa naturale — niente elenchi puntati. Se lo studente scrive qualcosa di non misurabile, aiutalo gentilmente a trovarne un aspetto misurabile.{% endcapture %}
{% include gemini-chat.html
   system=_system
   domanda="<em>Cerca di ricordare una volta in cui hai avvertito la sensazione di essere piccolissimo in confronto a ciò che avevi di fronte. Cos'era</em>?"
   hint="Se non ti ricordi di aver provato questa sensazione, prova a immaginarla."
%}

# Che cosa significa _misurare_?

«Misurare» significa studiare una *caratteristica* di un oggetto ed associare ad essa *un numero*. Stiamo cioè scegliendo di spiegare il mondo <u>con il linguaggio della Matematica</u>. Ecco perché la Fisica è fatta di equazioni. Le caratteristiche misurabili di un oggetto si chiamano <definizione>grandezze fisiche</definizione>.

{% include box-ex.html titolo="Verifica Subito!" %}

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

Ora facciamo un piccolo esperimento: misuriamo il lato verticale della seguente lavagna. Per farlo, trascinate gli oggetti che vedete sullo schermo a lato della lavagna e misurate quante volte 

Ora, ricordate l'esperimento che abbiamo fatto in classe? Abbiamo misurato più volte la lunghezza del lato della lavagna e in vari modi (con il cancellino, con il libro, con la penna, etc.). Quello che abbiamo visto è che il lato della lavagna è lungo circa 9 cancellini, ma circa 7 penne BIC. Cioè, il numero cambia a seconda che noi utilizziamo una penna o un cancellino o un altro oggetto. Da questo piccolo esempio capiamo che è essenziale specificare *con cosa* stiamo misurando, cioè qual è la nostra unità di misura.

Inoltre, abbiamo visto che — anche se consideriamo solo i risultati che abbiamo ottenuto con i cancellini — ripetendo la misurazione più volte ottenevamo risultati diversi. Il motivo è che è *impossibile* fare una misura perfetta, e c'è *sempre* un piccolo errore quando si fa una misura. Non siete voi che avete sbagliato! È proprio un limite che c'è nella teoria della misurazione. Perciò, abbiamo capito un'altra cosa assolutamente importante, e cioè che quando facciamo una misura, dobbiamo riconoscere che essa non sarà perfetta, e dobbiamo dare una stima di *quanto grande* potrebbe essere l'errore. Questa stima si chiama «incertezza».

Il risultato si può riassumere in generale dicendo la seguente cosa.

{% include box-def.html %}

Quando si misura una qualche grandezza bisogna fornire il risultato nel seguente modo:

$$\text{grandezza} = \bigl(\text{misurazione} \pm \text{incertezza}\bigr)\ \text{unità di misura}.$$

{% include box-end.html %}

Ad esempio, se misuriamo la lunghezza del lato della lavagna, allora dobbiamo esprimerla all'incirca così

$$\text{lunghezza} = (9 \pm 2)\ \text{cancellini}.$$

Come facciamo però esattamente a decidere che unità di misura utilizzare? Come possiamo stimare l'incertezza (ad esempio, qui, $2$ cancellini)? Queste ed altre cose sono quelle che impareremo in questo capitolo. Se fin qui hai dei dubbi, non ti preoccupare, andando avanti torneremo moltissimo su queste cose e forse ti saranno più chiare. Se più avanti continui ad avere dei dubbi, allora chiedimi pure (io ne sono contento)!

# Le unità di misura e il Sistema Internazionale

Qual è la misurazione «corretta» della lunghezza del lato della lavagna? Quella con i cancellini o quella con la penna BIC? Anzi, possiamo generalizzare questa domanda: sappiamo che ci sono moltissime unità di misura. Ad esempio, per la lunghezza ci sono metri, centimetri, decimetri, miglia, piedi, pollici, pertiche, etc; per la massa ci sono chili, grammi, milligrammi, libbre, etc; per il tempo ci sono secondi, minuti, ore, giorni, mesi, etc; e così via. Allora come facciamo a capire qual è l'unità di misura giusta? La verità è che sono tutte giuste e in effetti ogni scelta è, in principio, equivalente a un'altra. Tuttavia, se ognuno misurasse gli oggetti attorno a sé con la sua scelta preferita, sarebbe molto scomodo confrontare i risultati! La Fisica aspira ad essere un linguaggio *universale*, per cui non possiamo esprimere la lunghezza della lavagna in termini di un cancellino che abbiamo solo noi che siamo in quest'aula, bensì lo dobbiamo fare in termini di una grandezza conosciuta in tutto il mondo — ad esempio, il metro. In generale, è essenziale stabilire delle unità di misura da utilizzare in tutto il mondo, e in ogni occasione. Non le si stabilisce sulla base di «qual è quella giusta», poiché tutte sono giuste, bensì solo sulla base di una *convenzione*, ovvero una scelta del tutto arbitraria, che sarebbe potuta essere altrimenti eppure è così com'è.

I fisici di tutto il mondo si sono dunque riuniti (in una conferenza chiamata *«Conférence générale des poids et mesures»*, a Parigi) e hanno stabilito che ci sono solo 7 grandezze fondamentali e che le loro unità di misura sono le seguenti, con i rispettivi simboli comunemente utilizzati.

| Grandezza | Unità di misura | Simbolo |
|-----------|-----------------|---------|
| Lunghezza | metro | m |
| Tempo | secondo | s |
| Massa | chilogrammo | kg |
| Temperatura | kelvin | K |
| Intensità di corrente | ampere | A |
| Quantità di materia | mole | mol |
| Intensità luminosa | candela | cd |

(Non mi interessa che le sappiate tutte a memoria, però è importante che vi ricordiate le unità di misura di lunghezza, tempo, massa e temperatura. Se alcune di queste grandezze vi sono sconosciute, non preoccupatevi, impareremo a conoscere quelle di cui abbiamo bisogno.)

Queste 7 grandezze definiscono il **Sistema Internazionale**.

E tutte le altre grandezze fisiche? Ad esempio, la velocità, la forza, l'accelerazione? *Tutte le altre grandezze fisiche possono essere derivate a partire dalle grandezze nella tabella, tramite le leggi della fisica.* Immaginatevi le 7 grandezze fisiche nella tabella come delle note musicali: esse si combinano in opportuni accordi (le formule della Fisica) e producono un nuovo suono, che è quello delle altre grandezze (come velocità, accelerazione, forza, etc.). Ad esempio, la velocità esprime semplicemente *quanto spazio percorro in un certo tempo*, quindi per misurare la velocità mi basta misurare lo spazio e il tempo. È per questo che siamo abituati a misurare la velocità in chilometri orari: stiamo mischiando una misura dello spazio (chilometro) e una misura del tempo (ora). Perciò, le grandezze nella tabella si chiamano «grandezze fondamentali», tutte le altre grandezze fisiche si chiamano «grandezze derivate», perché possono esser ricondotte a combinazioni di quelle fondamentali.

{% include box-def.html %}

Il Sistema Internazionale di Unità di Misura è un sistema di *convenzioni* che ha scelto 7 grandezze fondamentali, a ciascuna delle quali ha associato un'unità di misura. Tutte le altre grandezze possono essere ottenute a partire da queste.

{% include box-end.html %}

{% include box-note.html titolo="Bonus" %}

*(Non vi chiederò questa cosa in verifica.)*

Anche se forse non è ancora facile capire questa affermazione (ma lo sarà nel futuro!) vi voglio far notare questa cosa, perché è piuttosto interessante: la scelta delle 7 grandezze fondamentali è del tutto arbitraria — cioè convenzionale, non necessaria — potevano essere altre grandezze. Ad esempio, potevamo sostituire lunghezza e tempo con lunghezza e velocità: sarebbe stato equivalente. Anziché misurare il tempo avrei misurato la velocità e poi, attraverso le *stesse* leggi della Fisica, avrei potuto derivare il tempo. Quello che è importante è che *le leggi della Fisica non dipendono da quali grandezze scelgo come fondamentali*.

Inoltre, è interessante osservare che non è possibile scegliere un numero inferiore a 7 grandezze fondamentali per derivare *tutte* le altre grandezze.

Può darsi che al momento tutto questo sia ancora un po' oscuro, ma impareremo a capirlo strada facendo, man mano che ci immergiamo nella Fisica.

{% include box-end.html %}

## La definizione delle unità di misura

A questo punto potreste chiedervi: «Abbiamo deciso tutti di misurare ogni lunghezza solo con il metro... ma che cos'è il metro?». Può sembrare una domanda banale, invece è molto importante. Il cancellino con cui abbiamo misurato la lavagna, anche se non universale, aveva il pregio di essere qualcosa che avevamo sotto gli occhi, sapevamo cos'era: era un cancellino. E il metro? Deve essere *un unico* oggetto a cui tutti si riferiscono. Infatti, lo strumento che comunemente noi chiamiamo «metro», come il metro a nastro ad esempio, è semplicemente una scala graduata distanziata *secondo la definizione di metro*... ma dov'è il vero, primo metro che definisce questa lunghezza per tutti, universalmente?

Originariamente, il metro era una barretta di metallo, conservata in una teca di vetro vicino a Parigi come campione che *definisce* l'unità di misura «metro». Tutte le volte che si misurava qualcosa in metri, ci si riferiva a quella sbarretta lì. Naturalmente, si voleva evitare che per sbalzi di temperatura si allungasse o accorciasse, o peggio ancora che in qualche modo si danneggiasse — la definizione stessa di metro sarebbe andata perduta. Però capite che era un po' rischioso far dipendere la definizione di un concetto tanto importante dal destino di una sbarretta di metallo. Si è perciò passati a una nuova definizione, che non fa uso di alcun oggetto, bensì solo di proprietà naturali:

{% include box-def.html %}

Un **metro** è definito come la distanza percorsa dalla luce nel vuoto in $\dfrac{1}{299\,792\,458}$ secondi.

{% include box-end.html %}

Infatti, la velocità della luce nel vuoto è una *costante*, cioè qualcosa di fisso, immutabile, universale e che conosciamo con estrema precisione.

Allo stesso modo che per il metro, anche il chilogrammo è inizialmente stato definito *con un oggetto*: dapprima come la massa di un litro di acqua distillata a circa $4\ °\text{C}$, poi per mezzo di un cilindrotto di metallo conservato negli Stati Uniti. Recentemente, nel 2019, anche questa definizione è stata soppiantata da un'altra (che fa uso della Fisica Quantistica — noi non la vedremo, perché è un po' complicata).

In generale, tutte le unità di misura sono definite rispetto a un riferimento, che anticamente era un campione materiale artificiale e ora sono costanti universali della natura. In pratica si misura la natura con la natura stessa!

{% include box-def.html %}

Le unità di misura delle 7 grandezze fondamentali sono definite secondo **costanti della natura**, universali e immutabili.

Le unità di misura di tutte le grandezze derivate possono essere ottenute a partire dalle unità di misura delle grandezze fondamentali.

{% include box-end.html %}

{% include box-note.html titolo="Nota del prof" %}

Non mi interessa molto che vi ricordiate la originaria definizione di metro o di chilo, quanto il fatto che oggi sono definite attraverso costanti della natura immutabili, eterne ed universali.

{% include box-end.html %}

# La notazione scientifica

Una delle caratteristiche più belle della Fisica è che cerca di descrivere *tutto* l'Universo: dalle minuscole particelle subatomiche alle immani, gigantesche galassie. Ma come facciamo a orientarci nel passaggio da una scala gigante a una scala minuscola? L'unità di misura del Sistema Internazionale è scelta «a nostra immagine e somiglianza», cioè su scala umana, ma ci sono moltissime cose per cui le grandezze del SI diventano molto scomode. Ad esempio, la massa di un elettrone — che indichiamo con $m_\text{e}$ — corrisponde, in chili, a

$$m_\text{e} = 0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,000\,910\,938\,370\,153\ \text{kg};$$

la massa del Sole — che indichiamo con $m_\text{S}$ — è circa

$$m_\text{S} = 1\,989\,100\,000\,000\,000\,000\,000\,000\,000\,000\ \text{kg}.$$

Capite che numeri così sono un po' scomodi da maneggiare. Il modo in cui realmente si esprimono i numeri di questo genere in Fisica è abbastanza intuitivo.

Prendi il caso della massa dell'elettrone: se tu dovessi leggere quel numero, come lo faresti? Scommetto che non diresti «zero, zero zero…» bensì diresti subito quanti zeri ci sono dopo la virgola, e poi diresti le cifre diverse da zero. Stessa cosa per un numero molto grande. Ad esempio, se ti chiedessi di leggere questo numero

$$1\,000\,000\,000\,000\,000\,000\,000\,000\,000\,000$$

immagino che mi diresti che è «un uno seguito da 30 zeri». Ecco, la stessa cosa si fa in Fisica. Cominciamo notando che $100$ è un «uno seguito da due zeri», che possiamo scrivere come $10^2$. Se prendete $1\,000$, questo è «un uno seguito da tre zeri», ovvero $10^3$. Il numero di zeri che appare dopo l'uno corrisponde all'esponente di $10$. Quindi «un uno seguito da 30 zeri» corrisponde a $10^{30}$:

$$1\,\underbrace{000\,000\,000\,000\,000\,000\,000\,000\,000\,000}_{30\ \text{zeri}} = 10^{30}.$$

Sfruttando questo ragionamento, possiamo scrivere $500$ come $5\times 10^2$, e $567$ come $5{,}67\times 10^2$. Quindi la massa del Sole diventa

$$m_\text{S} = 1{,}9891 \times 10^{30}\ \text{kg}.$$

E se invece il numero è molto piccolo, come nel caso della massa dell'elettrone? Facciamo lo stesso ragionamento! Cominciamo notando che $0{,}01$ corrisponde a $\dfrac{1}{100} = 10^{-2}$. Allo stesso modo, $0{,}001 = 10^{-3}$. In generale, il numero di zeri che compare prima dell'uno (incluso quello prima della virgola) è pari all'esponente a parte il segno:

$$\underbrace{0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,00}_{30\ \text{zeri}}1 = 10^{-30}.$$

In questo modo, $0{,}05 = 5\times 10^{-2}$ e $0{,}0567 = 5{,}67 \times 10^{-2}$. Perciò, la massa dell'elettrone può essere scritta come

$$9{,}1093837015 \times 10^{-31}\ \text{kg}.$$

Vedete che in entrambi i casi ho lasciato solo un numero prima della virgola. Questo modo di scrivere i numeri si chiama «notazione scientifica».

{% include box-def.html %}

In Fisica, un numero con molte cifre si scrive in **notazione scientifica**. Per farlo, guarda al tuo numero e trova:

- il numero da mettere prima della virgola;
- tutte le cifre dopo la virgola (quando arrivi al punto in cui hai solo più zeri, non aggiungerne più);
- l'esponente di $10$.

{% include box-end.html %}

{% include box-note.html titolo="Un trucco" %}

Basta contare di quante posizioni si sposta la virgola! Se avete un numero tipo $0{,}001234$ e spostate la virgola verso destra di $3$ posizioni, ottenete $1{,}234$. Questo corrisponde a moltiplicare per $10^{-3}$, quindi

$$0{,}001234 = 1{,}234 \times 10^{-3}.$$

D'altra parte, se spostate la virgola verso sinistra elevate $10$ a un esponente positivo. Quindi il numero $1234{,}0$, spostando la virgola di tre posizioni verso sinistra, diventa

$$1234 = 1{,}234\times 10^3.$$

{% include box-end.html %}

{% include box-note.html titolo="Nota del prof" %}

All'interrogazione valuto semplicemente se il risultato è corretto o meno. Però sono più contento se mi fate capire che avete capito, non se vi imparate il trucchetto a memoria e basta! Voglio che sappiate che $10^8$ è un numero grande, mentre $10^{-8}$ è un numero piccolo. Quindi, se ho $123456789$ (un numero grande, con 9 cifre), sicuramente non può corrispondere a $1{,}23456789 \times 10^{-8}$, bensì a $1{,}23456789 \times 10^{8}$.

Se vi confondete e ci mettete un meno per sbaglio, non è un problema, però voglio che vi rendiate conto che non può essere così.

{% include box-end.html %}

{% include box-ex.html titolo="Esercizio 1 — Notazione scientifica" %}

Scrivi questi numeri in notazione scientifica.

i) Il numero di galassie nell'Universo: $n_\text{galassie} = 2\,000\,000\,000\,000\ \text{galassie}$ (e immaginatevi quanto grande è una singola galassia!).

ii) Il numero di stelle in una galassia è in media pari a circa $400\,000\,000\,000\ \text{stelle}$. Esprimilo in notazione scientifica.

iii) Calcola il numero di stelle nell'Universo ed esprimilo in notazione scientifica.

iv) Il raggio di una molecola di acqua: $r_{\text{H}_2\text{O}} = 0{,}0000000001375\ \text{m}$ (immaginatevi quanto è piccola!).

v) Il numero (approssimativo) di molecole di acqua in un bicchiere: $n_{\text{molecole}} = 8\,360\,576\,000\,000\,000\,000\,000\,000\ \text{molecole}$ (la prossima volta che bevete un bicchiere d'acqua, pensateci!).

vi) Se metti tutte le molecole d'acqua di un bicchiere in fila distese per terra, quanto è lunga la fila? Calcola la lunghezza.

vii) L'intensità luminosa del Sole: $i_\text{S} = 83\,200\,000\,000\,000\,000\,000\,000\,000\ \text{cd}$ (la «candela» è veramente la luce emessa da una singola candela...).

viii) Il raggio di un atomo di idrogeno: $R_\text{H} = 0{,}000\,000\,0000529\ \text{m}$ (molto più piccolo del raggio di una molecola d'acqua, anche se l'acqua è fatta da atomi di idrogeno!).

ix) L'Universo è una palla di raggio $r_\text{Universo} = 435\,000\,000\,000\,000\,000\,000\,000\,000\ \text{m}$. Esprimi questo numero in notazione scientifica.

{% include box-end.html %}

{% include box-ex.html titolo="Esercizio 2 — Da notazione scientifica a numero normale" %}

Traduci questi numeri da notazione scientifica a numeri «normali»:

i) La velocità della luce nel vuoto: $c = 2{,}997\,924\,58 \times 10^8\ \dfrac{\text{m}}{\text{s}}$ (la luce che arriva al tuo occhio in questo momento viaggia a questa velocità!).

ii) Il diametro di un globulo rosso: $d_\text{globulo rosso} = 8{,}6 \times 10^{-6}\ \text{m}$ (pensa a quanto sono minuscole queste cellule!).

iii) Il numero di globuli rossi in un uomo medio: $n_\text{globuli rossi} = 2{,}5\times 10^{13}\ \text{globuli rossi}$ (è più grande del numero di stelle nella Via Lattea, la nostra galassia).

{% include box-end.html %}

{% include box-note.html titolo="Bonus — Archimede e i granelli di sabbia" %}

Grazie alla notazione scientifica possiamo scrivere il numero di particelle dell'Universo senza disboscare foreste: corrisponde all'incirca a $10^{89}$ particelle. Pensavi che fosse infinito? Sei in buona compagnia. In realtà l'Universo, per quanto sia incredibilmente grande, è per la stragrande maggioranza *vuoto*.

Ai tempi di [Archimede](https://it.wikipedia.org/wiki/Archimede) — una delle persone più intelligenti che siano mai esistite — quasi tutti erano convinti che il numero di granelli di sabbia necessari a riempire tutto l'Universo fosse infinito. Archimede era convinto del contrario, quindi cercò di *calcolare* quel numero. Stimò la grandezza dell'Universo e quella di un granello di sabbia, poi si *inventò* (non c'era!) un sistema basato sulle potenze di $10^8$, che lui chiama «miriadi». Il risultato del calcolo è che per riempire l'Universo servirebbero $10^{63}$ granelli di sabbia.

La cosa meravigliosa non è tanto il calcolo in sé, bensì il fatto che Archimede intuì — a differenza dei suoi contemporanei — che la Matematica era in grado di *esprimere* anche numeri che noi non siamo minimamente in grado di immaginare. Questo calcolo ci è giunto come una lettera che lui ha inviato al re Gerone. Era anche il re per cui ha scoperto la famosa legge fisica che tuttora porta il suo nome riguardante i fluidi — quella che scoprì nella vasca da bagno, dalla contentezza uscendo nudo per le strade di Siracusa gridando εὕρηκα (*héureka*), cioè «ho trovato».

{% include box-end.html %}

## Dalle unità ai loro multipli e sottomultipli

Finora abbiamo parlato del metro, del chilo, del secondo, etc. Eppure sappiamo che esistono tante altre scale, come i chilometri, i centimetri, i millimetri, i grammi, le ore, etc. Queste *non* sono unità di misura differenti, bensì *multipli differenti* delle stesse unità di misura. Passare da metri a centimetri è molto semplice; passare da metri a miglia, no.

Un centimetro (che si indica con «cm») è definito come $0{,}01$ metri. Se non te lo ricordi, pensa alla parola: «centimetro» comincia con «cent» e ti suggerisce che è *un centesimo* del metro. Quindi, in notazione scientifica:

$$1\ \text{cm} = 10^{-2}\ \text{m} \qquad \text{oppure} \qquad 1\ \text{m} = 10^2\ \text{cm}.$$

Attenzione a non confonderti! $1\ \text{m} = 10^2\ \text{cm}$ e **non** $1\ \text{m} = 10^{-2}\ \text{cm}$. Se hai dei dubbi, pensa al fatto che il metro è più grande del centimetro, quindi un metro sono *molti* centimetri.

Perciò, se abbiamo $0{,}000\,000\,1234\ \text{m}$, possiamo scriverlo come $1{,}234 \times 10^{-7}\ \text{m}$ e poi riportarlo in centimetri come

$$1{,}234 \times 10^{-7} \times 10^{2}\ \text{cm} = 1{,}234 \times 10^{-5}\ \text{cm}.$$

Per i millimetri: la parola ci dice che sono un *millesimo* di metro, quindi

$$1\ \text{mm} = 10^{-3}\ \text{m}, \qquad \qquad 1\ \text{km} = 10^3\ \text{m}.$$

In generale, i multipli e sottomultipli del metro sono i seguenti:

| Nome | Simbolo | Valore |
|------|---------|--------|
| picometro | pm | $10^{-12}\ \text{m}$ |
| nanometro | nm | $10^{-9}\ \text{m}$ |
| micrometro | μm | $10^{-6}\ \text{m}$ |
| millimetro | mm | $10^{-3}\ \text{m}$ |
| centimetro | cm | $10^{-2}\ \text{m}$ |
| decimetro | dm | $10^{-1}\ \text{m}$ |
| **metro** | **m** | $10^{0}\ \text{m}$ |
| decametro | dam | $10^{1}\ \text{m}$ |
| ettometro | hm | $10^{2}\ \text{m}$ |
| chilometro | km | $10^{3}\ \text{m}$ |
| megametro | Mm | $10^{6}\ \text{m}$ |
| gigametro | Gm | $10^{9}\ \text{m}$ |
| terametro | Tm | $10^{12}\ \text{m}$ |

Qui abbiamo fatto l'esempio con il metro, ma in realtà vale anche per tutto il resto. In generale, queste lettere che si mettono prima dell'unità di misura si chiamano «prefissi» e possono essere messe di fronte a ciascuna unità di misura. Ad esempio, si può parlare di «millikelvin» (mK), etc. Fate attenzione: per il kg, non c'è il «millichilogrammo», bensì semplicemente il grammo!

| Nome | Simbolo | Valore | | Nome | Simbolo | Valore |
|------|---------|--------|-|------|---------|--------|
| pico | p | $10^{-12}$ | | deca | da | $10^{1}$ |
| nano | n | $10^{-9}$ | | hecto | h | $10^{2}$ |
| micro | μ | $10^{-6}$ | | kilo | k | $10^{3}$ |
| milli | m | $10^{-3}$ | | mega | M | $10^{6}$ |
| centi | c | $10^{-2}$ | | giga | G | $10^{9}$ |
| deci | d | $10^{-1}$ | | tera | T | $10^{12}$ |

Non voglio che le memorizziate tutte, però vorrei che sapeste queste, perché sono le più utilizzate: **nano** (n, $10^{-9}$), **micro** (μ, $10^{-6}$), **milli** (m, $10^{-3}$), **centi** (c, $10^{-2}$), **kilo** (k, $10^{3}$), **mega** (M, $10^{6}$), **giga** (G, $10^{9}$).

Quindi come facciamo a passare da nanokelvin a kelvin?

$$1\ \text{nK} = 10^{-9}\ \text{K}$$

e allo stesso modo, da microsecondi a secondi:

$$0{,}0567\ \mu\text{s} = 5{,}67 \times 10^{-2}\ \mu\text{s} = 5{,}67 \times 10^{-2} \times 10^{-6}\ \text{s} = 5{,}67\times 10^{-8}\ \text{s}.$$

E se volessimo passare da secondi a minuti? Qui la situazione è leggermente diversa: non possiamo farlo con le potenze di $10$. Per passare da secondi a minuti, dobbiamo notare che un minuto è composto da esattamente $60$ secondi:

$$1\ \text{min} = 60\ \text{s}, \qquad \qquad 1\ \text{s} = \frac{1}{60}\ \text{min}.$$

Per passare da secondi a ore, dobbiamo dividere per $60 \times 60 = 3\,600$. Invece, per passare da ore a secondi, dobbiamo moltiplicare per $3\,600$.

Non ti confondere! In un'ora ci sono molti secondi, quindi nel passaggio da ore a secondi si *moltiplica* per un numero grande, e nel passaggio inverso si *divide*:

$$1\ \text{s} = \frac{1}{3\,600}\ \text{h}, \qquad \qquad 1\ \text{h} = 3\,600\ \text{s}.$$

Ad esempio: $3{,}45\ \text{h} = 3{,}45\times 3\,600\ \text{s} = 12\,420\ \text{s} = 1{,}242 \times 10^4\ \text{s}$.

Ora, in generale vale la seguente regola, *per qualsiasi unità di misura*:

{% include box-def.html %}

Ogni volta che devo convertire un numero da un'unità di misura $x$ a un'altra unità di misura $y$, faccio le seguenti cose.

1. Calcolo la relazione tra le due unità: trovo $a$ tale che $1\ x = a\ y$ (ad esempio, $1\ \text{km} = 10^3\ \text{m}$, oppure $1\ \text{h} = 3\,600\ \text{s}$).
2. Nel numero di partenza, al posto di $x$ scrivo $\cdot\, a\, y$: se $1\,x = a\, y$, allora $b\, x = b\cdot a \cdot y$.

{% include box-end.html %}

{% include box-note.html titolo="Esempio" %}

Sappiamo che $1\ \text{s} = \dfrac{1}{3\,600}\ \text{h}$.

Per convertire $5\ \text{s}$ in ore, ci basta fare

$$5\ \text{s} = 5 \cdot \frac{1}{3\,600}\ \text{h} = \frac{5}{3\,600}\ \text{h} \approx 1{,}389 \times 10^{-3}\ \text{h}.$$

{% include box-end.html %}

{% include box-ex.html titolo="Esercizio 3 — Conversioni" %}

Converti, utilizzando la notazione scientifica, i seguenti numeri nelle unità di misura indicate.

i) $1{,}234\ \text{nK}$ in $\text{MK}$

ii) $0{,}004\ \text{km}$ in $\mu\text{m}$

iii) $6\,579{,}88\ \text{Mg}$ in $\text{mg}$

iv) $3{,}5\times 10^{10}\ \text{cm}$ in $\text{km}$

v) $278\ \text{ms}$ in $\text{ns}$

vi) $45\ \text{min}$ in $\text{s}$

vii) $7{,}2\times 10^{-4}\ \text{s}$ in $\text{min}$

viii) $1{,}8\ \text{h}$ in $\text{s}$

{% include box-end.html %}

## Le grandezze derivate (cenni)

{% include box-note.html titolo="Bonus — non richiesto in verifica" %}

*Questa parte non è richiesta in verifica. Però, se la volete studiare, chiedetemelo: sarebbe valutata molto positivamente.*

{% include box-end.html %}

### Area

Immaginate di dover misurare l'area di un rettangolo. Non la potete misurare in metri, perché i metri sono l'unità di misura della lunghezza, e un'area non è una lunghezza! Però sapete che l'area di un rettangolo si calcola come $A = b \cdot h$. Se misuriamo la base e l'altezza in metri, l'area è il prodotto di qualcosa in metri per qualcosa in metri, quindi la sua unità di misura è **metro quadrato** ($\text{m}^2$). Ad esempio, con $b = 2\ \text{m}$ e $h = 1\ \text{m}$:

$$A = (2\ \text{m}) \times (1\ \text{m}) = 2\ \text{m}^2.$$

Non ho bisogno di inventare una nuova unità di misura: mi basta elevare il metro al quadrato. Ecco perché l'area è una grandezza *derivata*.

Ora proviamo a passare da metri quadri a centimetri quadri. Ricordiamo che $a^m\cdot a^n = a^{m+n}$:

$$1\ \text{m}^2 = (10^2\ \text{cm}) \times (10^2\ \text{cm}) = 10^4\ \text{cm}^2.$$

{% include box-warn.html titolo="Attenzione" %}

**Non è vero** che $1\ \text{m}^2 = 10^2\ \text{cm}^2$. La risposta corretta è $1\ \text{m}^2 = 10^4\ \text{cm}^2$.

{% include box-end.html %}

Allo stesso modo: $1\ \text{m}^2 = 10^6\ \text{mm}^2$, e $1\ \mu\text{m}^2 = 10^{-12}\ \text{km}^2$.

{% include box-def.html %}

Per passare da un multiplo/sottomultiplo del **metro quadro** a un altro, si prende l'esponente di $10$ che permette di passare da un multiplo del metro all'altro e lo si moltiplica per **2**.

{% include box-end.html %}

### Volume

Il volume del cubo si calcola come $V = \ell^3$, dove $\ell$ è il lato. Con $\ell = 1\ \text{m}$:

$$V = 1\ \text{m} \times 1\ \text{m} \times 1\ \text{m} = 1\ \text{m}^3.$$

L'unità di misura del volume è quindi **metro cubo** ($\text{m}^3$). Proviamo a esprimere un metro cubo in centimetri cubi:

$$1\ \text{m}^3 = (10^2\ \text{cm}) \times (10^2\ \text{cm}) \times (10^2\ \text{cm}) = 10^{6}\ \text{cm}^3.$$

{% include box-warn.html titolo="Attenzione" %}

**Non è vero** che $1\ \text{m}^3 = 10^2\ \text{cm}^3$. La risposta corretta è $1\ \text{m}^3 = 10^6\ \text{cm}^3$.

{% include box-end.html %}

Allo stesso modo: $1\ \text{mm}^3 = 10^{-18}\ \text{km}^3$.

{% include box-def.html %}

Per passare da un multiplo/sottomultiplo del **metro cubo** a un altro, si prende l'esponente di $10$ che permette di passare da un multiplo del metro all'altro e lo si moltiplica per **3**.

{% include box-end.html %}

{% include box-ex.html titolo="Esercizio 4 — Aree e volumi" %}

Converti i seguenti numeri:

i) $1\ \mu\text{m}^3$ in megametri cubi &nbsp; [risposta: $10^{-36}\ \text{Mm}^3$]

ii) $67{,}12\ \text{nm}^2$ in metri quadri

iii) $5\,123\,456\ \text{m}^2$ in nanometri quadri

iv) $3{,}45\ \text{mm}^3$ in centimetri cubi

v) $0{,}0025\ \text{km}^2$ in metri quadri

vi) $7{,}1\ \text{cm}^2$ in metri quadri

vii) $12{,}6\ \text{Gm}^3$ in metri cubi

{% include box-end.html %}

# L'incertezza

Vi ricordate quello che abbiamo fatto durante la nostra prima lezione di Fisica? Abbiamo misurato il lato della lavagna e abbiamo osservato

- che è necessario specificare l'unità di misura;

*— il contenuto di questa sezione sarà completato prossimamente.*
