# Guida per scrivere un nuovo capitolo

Scaletta e convenzioni comuni a tutti i capitoli del sito. Questo file non
viene pubblicato (è escluso in `_config.yml`). Per la sintassi dei singoli
strumenti (box, esercizi, widget) vedi `CLAUDE.md`.

---

## 1. La scaletta di un capitolo

1. **Apertura.** Una citazione (`<cit autore="…">`) e un aggancio di
   meraviglia: un fenomeno, una domanda, una storia. Subito dopo, 3–5
   **obiettivi** ("Alla fine di questo capitolo saprai…").

2. **Per ogni concetto, sempre nello stesso ordine:**
   1. *Fenomeno o esperimento* (meglio se interattivo). Prima di mostrarlo,
      una **previsione** dello studente (`risposta-aperta.html tipo="prevedi"`).
   2. *Dal fenomeno al concetto*: il ragionamento, nelle note a margine.
   3. *La definizione* nel box giusto (`box-imp`, `box-def`, `box-thm`).
   4. *Verifica Subito!* immediata (quiz, vero/falso, completamento), con
      **almeno una domanda di produzione** (`risposta-aperta.html tipo="spiega"`).
   5. Se c'è una formula: **animazione dei passaggi**, **unità di misura**
      (`unita-anim.html`) e **formula invertita** (`invert.html`). Il risultato
      di ogni animazione va scritto anche nel testo, sotto ("Quindi: $$…$$").
   6. Il **misconcetto tipico** in un `box-warn`.
   7. Un **esempio svolto** passo passo; poi un esercizio guidato ("Prova tu!").

3. **Una mini-attività di misura o con dati reali** per capitolo (stima,
   analisi di un video, simulazione con domande guida e un grafico da costruire).

4. **Chiusura.**
   - **In sintesi**: le formule e le idee chiave in una pagina.
   - **Sai fare?**: una lista di abilità da spuntare.
   - **Esercizi di riepilogo**, raggruppati per argomento con titoletti `###`,
     nello stesso ordine del capitolo; dentro ogni gruppo dal più facile (★) al
     più difficile (★★★). Ogni gruppo si chiude con esercizi non banali.
   - Almeno un **"Trova l'errore"** (`risposta-aperta.html tipo="errore"`) per
     gli argomenti in cui gli studenti sbagliano più spesso.
   - Qualche **esercizio di ripasso dai capitoli precedenti**.

5. **Prima di pubblicare:** vedi la lista di controllo in fondo.

---

## 2. Produrre, non solo riconoscere

Quiz, vero/falso, abbinamenti e tendine verificano se lo studente
*riconosce* la risposta giusta. Vanno bene, ma da soli non bastano: in ogni
sezione ci vuole anche qualcosa in cui lo studente **produce** una risposta.

- **Prevedi** prima di un'animazione o di un esperimento: cosa succederà, e perché.
- **Spiega con parole tue** un concetto, magari rispondendo a un compagno che
  sbaglia ("Un compagno ti dice che… Come gli spieghi che si sbaglia?").
- **Trova l'errore** in una soluzione sbagliata (meglio se è l'errore tipico).
- **Disegna** sul quaderno (vettori, linee di campo, grafici) e poi confronta.
- **Inventa un esempio** numerico.

Strumento: `risposta-aperta.html`, con la risposta possibile che si apre solo
dopo che lo studente ha scritto qualcosa.

---

## 3. Convenzioni

**Tono.** Si dà del **tu** allo studente (non del voi), in tutto il testo.

**`<definizione>`** (in rosso) solo la **prima volta** che un termine viene
introdotto. Non nelle tabelle, nei riepiloghi o nelle ripetizioni.

**Notazione.**
- Vettori con la freccia ($\vec F$), moduli senza ($F$).
- Variazioni con $\Delta$ ($\Delta x = x_f - x_i$); pedici $i$ e $f$ per
  iniziale e finale.
- La distanza $r$ nelle leggi di gravitazione e di Coulomb è sempre fra i
  **centri**.
- Energia potenziale gravitazionale vicino alla superficie: $U_g = mgh$
  (rispetto a un livello di riferimento scelto). In generale:
  $U = -G\dfrac{Mm}{r}$ (zero all'infinito). Quando le due compaiono vicine,
  spiegare il legame.
- Unità in tondo con spazio: `$5\ \text{kg}$`; virgola decimale `{,}`.

**Box.** `box-imp` per ciò che va ricordato; `box-def` per le definizioni;
`box-warn` per gli errori comuni; `box-ricorda` per richiamare cose già viste;
`box-ex` per gli esempi e le "Verifica Subito!".

**Quiz.** Sempre con `senza_esempi="true"` (niente "Ora tocca a te…"), salvo
richiesta esplicita.

**Tabelle.** Riga vuota prima e dopo, anche dentro un box.

**Animazioni.** In `_includes/lab-virtuali/`, una per file, con un commento
in cima che spiega cosa fanno. Per i passaggi algebrici: il motore
`formula-anim-engine.html` (velocità regolabile, pausa, ricomincia). Senza
didascalia; il risultato si scrive nel testo.

**Niente codice nel testo.** Nei file `.md` dei capitoli non vanno `<script>`
né `<style>`: tutto ciò che è interattivo sta in un include
(`_includes/esercizi/…` o `_includes/lab-virtuali/…`). Domande a scelta
multipla: sempre `mcq.html`.

**Accessibilità.** Ogni immagine ha un testo alternativo che la descrive
(`alt`); le informazioni non sono affidate solo al colore; un widget che in
stampa sparisce deve avere il suo contenuto essenziale anche nel testo.

**Sicurezza.** Nessuna chiave API o password nelle pagine: tutto ciò che sta
nel sito è leggibile da chiunque. Per la chat vedi
`strumenti/chat-proxy/LEGGIMI.md`.

---

## 4. Lista di controllo prima di pubblicare

- [ ] Obiettivi in apertura, "In sintesi" e "Sai fare?" in chiusura.
- [ ] Ogni concetto ha almeno una domanda di produzione.
- [ ] Ogni formula nuova ha unità di misura e formula invertita.
- [ ] Esercizi di riepilogo raggruppati per argomento e ordinati per difficoltà.
- [ ] Ogni esercizio numerico ha la soluzione; i risultati sono ricontrollati.
- [ ] Correttezza fisica: nessuna semplificazione che diventi un'affermazione falsa.
- [ ] Refusi riletti; `<definizione>` solo alla prima occorrenza; "tu" ovunque.
- [ ] Nessun `<script>` / `<style>` nel `.md`; id dei widget tutti diversi.
- [ ] `bundle exec jekyll serve`: la pagina si apre senza errori e i widget funzionano.
