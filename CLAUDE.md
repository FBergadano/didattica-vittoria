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

Esempio:
```
{% include box-def.html titolo="Derivata" %}
La derivata di $f$ in $x_0$ è $f'(x_0) = \lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}$.
{% include box-end.html %}
```

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
