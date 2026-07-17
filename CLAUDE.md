# CLAUDE.md — Bergadano Didattica Liceo Vittoria
# Claude Code legge questo file automaticamente ad ogni sessione.

## Chi sono e cosa sto costruendo

Sono il Prof. Fulvio Bergadano, fisico teorico, docente di Matematica e Fisica
al Liceo Vittoria di Torino. Conosco bene LaTeX, Julia, Python e Git.
Non sono esperto di HTML/CSS/JS — non spiegarmi il codice a meno che non lo chieda.
Questo è un sito didattico Jekyll su GitHub Pages per i miei studenti.

## Corsi

| File in `_corsi/` | Nome | Materia | Classe |
|---|---|---|---|
| `matematica-3acd.md` | Matematica 3ª ACD | matematica | 3ACD |
| `matematica-4acd.md` | Matematica 4ª ACD | matematica | 4ACD |
| `fisica-3b.md` | Fisica 3ª B | fisica | 3B |
| `fisica-3acd.md` | Fisica 3ª ACD | fisica | 3ACD |
| `fisica-4b.md` | Fisica 4ª B | fisica | 4B |
| `fisica-4acd.md` | Fisica 4ª ACD | fisica | 4ACD |
| `fisica-5acd.md` | Fisica 5ª ACD | fisica | 5ACD |
| `cittadinanza.md` | Cittadinanza e Prospettive Globali | cittadinanza | tutte |

## Regola fondamentale sui file

Fulvio modifica SOLO:
- `_corsi/*.md` — contenuto dei corsi
- `_sass/STILE.scss` — colori e font
- `_config.yml` — configurazione generale

NON toccare mai: `_layouts/`, `_includes/`, `assets/css/main.scss`
Questi file sono gestiti da Claude e non vanno modificati manualmente.

## Struttura di un capitolo (da usare sempre)

```html
<section id="capN" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Capitolo N</span>
  <h2 class="chapter-title">Titolo</h2>
</header>
<div class="prose">

Testo in Markdown. Formule inline $f(x)$ e display $$\int_a^b f(x)\,dx$$.

</div>
</section>
```

## Box di contenuto disponibili

Tutti i box si aprono con `{% include box-XXX.html titolo="..." %}` e si chiudono con `{% include box-end.html %}`.

| Include | Colore | Uso |
|---|---|---|
| `box-def.html` | cyan | Definizioni |
| `box-thm.html` | teal | Teoremi, proposizioni |
| `box-warn.html` | giallo | Attenzione, errori comuni |
| `box-ex.html` | viola | Esempi risolti |
| `box-proof.html` | grigio | Dimostrazioni |
| `box-note.html` | arancio | Note, approfondimenti |
| `box-imp.html`  | ambra + barra cyan destra | Punti importanti da ricordare |

Esempio:
```
{% include box-def.html titolo="Derivata" %}
La derivata di $f$ in $x_0$ è $f'(x_0) = \lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}$.
{% include box-end.html %}
```

## Esercizi interattivi

### Box esercizio (numerazione automatica)

```liquid
# Senza soluzione
{% include ex.html %}
Testo dell'esercizio con $formule$ e tutto il markdown.
{% include ex-end.html %}

# Con soluzione in spoiler
{% include ex.html diff=2 %}
Testo dell'esercizio.
{% include ex-sol.html %}
La soluzione è $x = 2$.
{% include ex-sol-end.html %}

# Due colonne (responsive: una colonna su mobile)
<div class="ex-2col">
{% include ex.html %}Primo esercizio.{% include ex-end.html %}
{% include ex.html %}Secondo esercizio.{% include ex-end.html %}
</div>
```

- Numerazione automatica (CSS counter, azzera ad ogni capitolo)
- `diff=1/2/3` aggiunge ★/★★/★★★ sotto il numero
- Due colonne: avvolgere in `<div class="ex-2col">`

### Vero/Falso interattivo

```liquid
{% include tf.html q="La velocità è un vettore." ok=true s="Sì, ha direzione e verso." %}
{% include tf.html q="L'energia si misura in Newton." ok=false s="No, si misura in Joule (J)." %}
```

- `q` — testo (HTML ammesso)
- `ok` — `true` o `false`
- `s` — spiegazione opzionale mostrata dopo la risposta
- Risposta giusta → coriandoli; sbagliata → messaggio rosso

### Completa la frase

```liquid
# Menu a tendina
{% include fill.html prima="L'unità SI della forza è il"
   tipo="drop" opts="Newton|Joule|Pascal" ok="Newton"
   dopo="." s="N = kg·m/s²." %}

# Testo libero (accetta varianti separate da virgola)
{% include fill.html prima="La derivata dello spostamento è la"
   ok="velocità,velocita" dopo=" istantanea." %}
```

- `prima`/`dopo` — testo prima/dopo la lacuna
- `tipo` — `"drop"` (tendina) oppure `"text"` (default)
- `opts` — opzioni tendina, separate da `|`
- `ok` — risposta corretta; più varianti separate da `,`
- `s` — spiegazione opzionale
- Risposta giusta → coriandoli; sbagliata → messaggio rosso

### Abbinamento a tre colonne

```liquid
{% capture _dati %}[
  {"l":"Lunghezza",         "m":"metro",       "r":"m"},
  {"l":"Massa",             "m":"chilogrammo", "r":"kg"},
  {"l":"Tempo",             "m":"secondo",     "r":"s"}
]{% endcapture %}
{% include match.html id="id-univoco" dati=_dati col1="Grandezza" col2="Unità SI" col3="Simbolo" %}
```

- `dati` — array JSON con `l`/`m`/`r` (left/middle/right); stesso indice = abbinamento corretto
- `col1`/`col2`/`col3` — intestazioni delle tre colonne
- `id` — ID univoco (usare un ID diverso per ogni widget nella stessa pagina)
- Lo studente clicca i pallini per tracciare linee di collegamento
- Bottone **Verifica** → linee verdi/rosse + coriandoli se tutto corretto
- Bottone **Mescola** → nuova disposizione casuale
- Nascosto in stampa PDF

### Classificazione drag-and-drop

```liquid
{% capture _s %}[
  {"t":"Velocità","c":0},{"t":"Forza","c":0},
  {"t":"Lunghezza","c":1},{"t":"Massa","c":1}
]{% endcapture %}
{% include sort.html id="id-univoco" dati=_s col0="Grandezze derivate" col1="Grandezze fondamentali" %}
```

- `dati` — array JSON: `c=0` → colonna sinistra, `c=1` → colonna destra
- `col0`/`col1` — intestazioni delle due colonne
- Lo studente trascina le voci (funziona anche su touch/mobile)
- Verifica: chip verde/rosso + coriandoli se tutto giusto
- Nascosto in stampa PDF

### Scrivi e confronta (definizioni)

```liquid
{% include def-compare.html id="id-univoco"
   testo="Il Sistema Internazionale è..."
   link="#def-si"
   label="Confronta con la definizione nel riquadro" %}
```

- `testo` — incipit della definizione (mostrato sopra il campo)
- `link` — ancora nel testo a cui confrontarsi (es. `#def-si`)
- `label` — testo del link (default: "Confronta con la definizione nel testo")
- In stampa: il campo è visibile come area tratteggiata, il link sparisce

## Altri elementi

```
# Completamento studente
{% include fill-def.html id="id-univoco" prompt="Domanda per lo studente" %}

# Esercizio con soluzione nascosta
{% include spoiler.html testo="Mostra la soluzione" %}
Soluzione qui.
{% include spoiler-end.html %}

# Video YouTube (solo l'ID, non l'URL completo)
{% include video.html id="ID_YOUTUBE" didascalia="Descrizione" %}

# Compiti
{% include homework.html titolo="Titolo" descrizione="..." link="https://..." %}
```

## Formule

Sintassi identica a LaTeX:
- Inline: `$\vec{F} = m\vec{a}$`
- Display: `$$E = mc^2$$`
- Numerata: `\begin{equation}...\end{equation}`
- Tutti i comandi LaTeX standard funzionano: `\frac`, `\vec`, `\mathbf`, `\nabla`, `\partial`, `\int`, ecc.

## Conversione LaTeX → Jekyll

Quando Fulvio incolla del LaTeX grezzo, convertire così:
- `\begin{definition}...\end{definition}` → `{% include box-def.html %}...{% include box-end.html %}`
- `\begin{theorem}...\end{theorem}` → `{% include box-thm.html %}...{% include box-end.html %}`
- `\begin{proof}...\end{proof}` → `{% include box-proof.html %}...{% include box-end.html %}`
- `\begin{example}...\end{example}` → `{% include box-ex.html %}...{% include box-end.html %}`
- `\[...\]` → `$$...$$`
- `\section{Titolo}` → `### Titolo`
- `\subsection{Titolo}` → `#### Titolo`
- `\textbf{...}` → `**...**`
- `\emph{...}` → `*...*`
- `\begin{itemize}...\end{itemize}` → elenco Markdown con `-`
- `\begin{enumerate}...\end{enumerate}` → elenco Markdown con `1.`

## Chat con Gemini (widget interattivo AI)

Chat socratica alimentata da Gemini 2.0 Flash. La chiave API viene iniettata dal workflow GitHub Actions.

```liquid
{% capture _system %}Sei il Prof. Bergadano...{% endcapture %}
{% include gemini-chat.html
   system=_system
   domanda="Testo della domanda (HTML ammesso, es. <em>corsivo</em>)"
   hint="Suggerimento opzionale mostrato sotto la domanda"
%}
```

Parametri:
- `system` — system prompt (via capture, obbligatorio)
- `domanda` — domanda di apertura (HTML ammesso, obbligatorio)
- `hint` — testo di suggerimento (opzionale)
- `apertura` — riga introduttiva prima della domanda (default: "Prima di cominciare, una domanda.")
- `docente` — nome mostrato nelle bolle AI (default: "Prof. Bergadano")
- `id` — ID univoco (default: "gc"), usare se ci sono più widget nella stessa pagina

## Quiz "Verifica Subito!"

Quiz vero/falso interattivo con coriandoli (risposta giusta) e fuochi d'artificio (tutto corretto).

```liquid
{% capture _q %}[
{"t":"Testo della domanda","ok":true,"s":"Spiegazione mostrata dopo la risposta."},
{"t":"Altra domanda","ok":false,"s":"Spiegazione."}
]{% endcapture %}
{% include quiz.html domande=_q label_si="Etichetta campo sì" label_no="Etichetta campo no" %}
```

Parametri:
- `domande` — array JSON delle domande (obbligatorio)
- `label_si` — etichetta del primo campo finale (default: "Un esempio corretto")
- `label_no` — etichetta del secondo campo finale (default: "Un controesempio")
- `id` — ID univoco del widget (default: "qgf"), usare se ci sono più quiz nella stessa pagina

Ogni domanda: `{"t": "testo", "ok": true/false, "s": "spiegazione"}`.
Si usa sempre dentro un box: `{% include box-ex.html titolo="Verifica Subito!" %}` ... `{% include box-end.html %}`.

## Simulazioni interattive

Le simulazioni vanno scritte in JavaScript puro (no React, no framework).
Si inseriscono direttamente nel file `.md` del corso come blocco `<script>` + `<canvas>`.
Quando Fulvio chiede una simulazione, specificare:
- Cosa mostra visivamente (animazione, grafico, o entrambi)
- Quali parametri controlla lo studente (slider)
- Se serve un grafico affiancato (posizione vs tempo, ecc.)

## Pubblicazione

```bash
bundle exec jekyll serve        # anteprima locale su localhost:4000/bergadano-didattica/
git add . && git commit -m "descrizione" && git push   # pubblica su GitHub Pages
```
