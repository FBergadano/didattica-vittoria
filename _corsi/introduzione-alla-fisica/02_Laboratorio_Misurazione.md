---
layout: capitolo
title: "Laboratorio di Misurazione"
subtitle: "Un laboratorio sulla densità"
corso: "introduzione-alla-fisica"
corso_titolo: "Introduzione alla Fisica"
materia: fisica
numero: 2
---

<section id="cap1" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Parte I</span>
  <h2 class="chapter-title">La teoria dell'incertezza</h2>
</header>
<div class="prose" markdown="1">

### Errore e incertezza: una distinzione importante

Abbiamo detto che misurare significa associare un numero a una caratteristica di un oggetto. Eppure sorgono subito alcuni problemi.
- **Problema 1: l'instabilità di una misurazione.** Quasi sempre gli oggetti *cambiano* continuamente, anche se non ce ne accorgiamo. E quindi in realtà quello che abbiamo misurato in un certo momento potrebbe essere molto diverso da ciò che misureremmo in un momento successivo.
- **Problema 2: le imprecisioni.** Se anche un oggetto possedesse una caratteristica che non cambia mai, come faremmo a misurarla perfettamente? Ogni strumento che abbiamo è imperfetto: non si può mai misurare con precisione infinita.

Considera l'esempio di questo cactus. La bilancia segna che la massa del cactus corrisponde a 3 421 g. Tuttavia, il vero valore della massa del cactus è leggermente diverso e corrisponde, inizialmente, a 3 421,2 g. Quella leggera differenza è così piccola che la bilancia non è in grado di rilevarla.  
Inoltre, quando arriva il Sole, l'acqua contenuta all'interno del cactus evapora parzialmente. Quindi la massa del cactus diminuisce, ma di così poco che la bilancia non è in grado di farlo vedere.  
È insomma evidente che non si possa misurare perfettamente la massa di un cactus.

{% include lab-virtuali/bilancia-cactus-lab.html %}

Oppure considerate il seguente esempio, in cui un'ape vola sopra un righello. Provate a indovinare la lunghezza dell'ape, e realizzerete quanto è difficile farlo. Qui la colpa non è né dello strumento né dell'ape: siamo noi che facciamo fatica a leggere il valore della misurazione perché le condizioni sono difficili.

{% include lab-virtuali/ape-righello-lab.html %}

Tutte queste considerazioni ci portano a realizzare che in Fisica nessuna misurazione può essere perfetta: esiste sempre una **incertezza** intrinseca nel processo di misura. Si preferisce parlare di *incertezza*, e non di “errore”, perché --- non potendo mai conoscere il valore esatto di una grandezza fisica --- <u>non possiamo nemmeno sapere di quanto ci siamo sbagliati</u>.  
È perciò importante, quando si fornisce il valore di una misurazione, dichiarare anche quanto pensiamo che il valore sia vicino a quello reale, anche se non ne saremo mai sicuri. In questa attività scopriremo come fare a fornire questo tipo di informazione.

{% include box-imp.html testo="Incertezza di misura" %}
L'**incertezza di misura** quantifica l'imprecisione della misurazione di una grandezza fisica. Una misura senza incertezza dichiarata è una misura incompleta.
{% include box-end.html %}

### Le fonti di incertezza

Ogni misurazione è affetta da più sorgenti di incertezza. Le principali sono:

1. **Risoluzione dello strumento** — nessuno strumento è infinitamente preciso: un righello normalmente ha le tacche spaziate di un millimetro, e quindi non è in grado di rilevare differenze dell'ordine, ad esempio, del micrometro. Allo stesso modo, una bilancia digitale da cucina normalmente ha le cifre fino al grammo, quindi non è in grado di rilevare una differenza di un decimo di grammo.
2. **Variabilità del misurando** — se la grandezza fluttua (ad esempio l'acqua oscilla leggermente), misurazioni ripetute danno valori diversi.
3. **Condizioni ambientali** — temperatura, vibrazioni, correnti d'aria possono influenzare il risultato.

### Stima dell'incertezza strumentale

La **sensibilità** di uno strumento è la più piccola variazione della grandezza misurata che esso riesce a rilevare.

{% include box-imp.html testo="Incertezza strumentale" %}
L'incertezza strumentale, che indichiamo nelle nostre formule con i.s., dipende solo dallo strumento e si stima nel seguente modo. 
- **Strumenti analogici** (righello, bilancia a lancetta): l'incertezza strumentale è pari a **metà della divisione più piccola**. Ad esempio, per un righello con la distanza tra una tacca e l'altra pari a un millimetro l'incertezza è pari a 0,5 mm.
- **Strumenti digitali** (bilancia elettronica, termometro digitale): l'incertezza strumentale è pari all'**ultima cifra del display**. Ad esempio, per una bilancia che arriva fino al grammo l'incertezza è pari a 0,5 g.
{% include box-end.html %}

{% include figure/esempio-righello-figura.html %}

{% include lab-virtuali/esempio-calibro-lab.html %}

### Semidispersione e la notazione $\bar x \pm e_x$

Quando si eseguono più misurazioni della stessa grandezza si ottengono in genere valori leggermente diversi: $x_1, x_2, \ldots, x_N$. Non sappiamo quale di quei valori sia quello corretto: per stimarlo, quindi, facciamo una media (proprio come con i voti!) e la indichiamo con $\bar x$, che corrisponde quindi a

$$
\bar x = \frac{x_1 + x_2 + \cdots + x_N} N.
$$

Dopodiché misuriamo anche l'incertezza della misurazione tramite la <definizione>semidispersione</definizione>, che corrisponde alla metà della differenza tra il valore massimo e quello minimo, e si indica con $s_x$:

$$
s_x = \frac{x_\max - x_\min} 2.
$$

Alla fine si considera come incertezza globale $\Delta_x$ su la somma tra l'incertezza strumentale e la semidispersione:

$$
\Delta_x = \text{i.s.} + s_x
$$

{% include box-def.html testo="Valore medio e incertezza" %}
**Valore medio:**
$$\bar{x} = \frac{x_1 + x_2 + \cdots + x_N}{N}$$

**Incertezza:**
$$\Delta_x = \text{i.s.} + \frac{x_\text{max} - x_\text{min}}{2}.$$

Il risultato della misura si riporta nella forma:
$$x = \bar{x} \pm \Delta_x$$
{% include box-end.html %}

*Esempio.* Misuro tre volte la lunghezza di un oggetto, con un righello avente tacche distanziate di un millimetro. L'incertezza strumentale è quindi $0.5$ mm. Inoltre, i valori della misurazione sono: 12.3 cm, 12.5 cm, 12.4 cm.
- Calcolo il valor medio: $\bar{\ell} = (12{.}3 + 12{.}5 + 12{.}4)/3 = 12{.}4$ cm
- Calcolo la semidispersione: $s_\ell = (12{.}5 - 12{.}3)/2 = 0{.}1$ cm
- Calcolo l'incertezza totale (semidispersione + incertezza strumentale) $\Delta_\ell = \text{i.s.} + s_\ell = 0.15 cm$.
- Risultato: $\ell = (12{.}4 \pm 0{.}15)$ cm

### Errore relativo percentuale

Un'incertezza di un centimetro nella misurazione dell'altezza della Tour Eiffel significa che la misurazione è molto precisa. Al contrario, la stessa incertezza di un centimetro nella misurazione della dimensione di una cellula biologica è un errore gigantesco.   
Per questo è necessario, oltreché stimare l'incertezza riferirla anche all'oggetto stesso che si è misurato. Il modo migliore di farlo è il seguente.

{% include box-imp.html testo="Errore relativo percentuale" %}
L'<definizione>errore relativo percentuale</definizione> esprime l'incertezza della misurazione come percentuale del valore medio:
$$e_x = \frac{\Delta_x}{\bar{x}} \times 100\%$$


{% include box-end.html %}

*Esempio.* Con $\ell = (12{,}4 \pm 0{,}15)$ cm:
$$e_\ell = \frac{0{,}15}{12{,}4} \times 100\% \approx 1{,}2\%$$

<u>Un errore relativo percentuale piccolo indica una misura precisa; uno grande indica che l'incertezza è rilevante rispetto al valore misurato.</u>

### Propagazione degli errori

Spesso la grandezza che ci interessa non si misura direttamente, ma si *calcola* a partire da grandezze misurate. La quantità calcolata avrà un'incertezza che è data dal seguente teorema.

{% include box-thm.html testo="Teorema di propagazione degli errori" %}
Siano $x$ e $y$ due grandezze misurate con incertezze assolute $e_x$, $e_y$ e incertezze relative percentuali $e_x = (\Delta_x/\bar{x})\times 100\%$, $e_y = (\Delta_y/\bar{y})\times 100\%$.

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
In $z = x - y$, le incertezze *assolute* si sommano (non si sottraggono). Se $x$ e $y$ sono vicini, $\Delta z = x - y$ è piccolo ma $\Delta_z = \Delta_x + \Delta_y$ rimane grande: l'errore relativo percentuale su $z$ può diventare molto elevato.
{% include box-end.html %}

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
