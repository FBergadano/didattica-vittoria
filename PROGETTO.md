# PROGETTO.md — Didattica Vittoria Liceo Vittoria
## Documento di contesto per Claude (Project knowledge)
*Carica questo file nel Project knowledge. Claude lo leggerà ad ogni sessione.*

---

## Chi sono

- **Docente:** Prof. Fulvio Bergadano
- **Scuola:** Liceo Vittoria, Torino
- **Materie:** Matematica e Fisica
- **Background:** Fisico teorico. Conosce bene LaTeX, Julia, Python, Git. Non è esperto di HTML/CSS/JS ma può imparare cose semplici. È abituato a GitHub e al terminale Linux.
- **Sistema operativo di lavoro:** Linux (principalmente) e Windows

---

## Il sito

- **Nome:** Didattica Vittoria — Liceo Vittoria
- **Tecnologia:** Jekyll 4.3 + GitHub Pages
- **Repository GitHub:** `https://github.com/[username]/bergadano-didattica` (da completare)
- **URL pubblico:** `https://[username].github.io/bergadano-didattica` (da completare)
- **Lingua:** Italiano (tutto il contenuto)

---

## Corsi (7 + cittadinanza)

| ID file | Nome corso | Materia | Classe | Note |
|---|---|---|---|---|
| `matematica-3acd` | Matematica 3ª ACD | matematica | 3ACD | Liceo ordinario |
| `matematica-4acd` | Matematica 4ª ACD | matematica | 4ACD | Liceo ordinario |
| `fisica-3b` | Fisica 3ª B | fisica | 3B | Liceo ordinario |
| `fisica-3acd` | Fisica 3ª ACD | fisica | 3ACD | Progetto sperimentale (4 anni) |
| `fisica-4b` | Fisica 4ª B | fisica | 4B | Liceo ordinario |
| `fisica-4acd` | Fisica 4ª ACD | fisica | 4ACD | Progetto sperimentale (4 anni) |
| `fisica-5acd` | Fisica 5ª ACD | fisica | 5ACD | Liceo ordinario |
| `cittadinanza` | Cittadinanza e Prospettive Globali | cittadinanza | tutte | Trasversale |

Ogni corso ha ~6 capitoli. I file corso stanno in `_corsi/[id].md`.

---

## Struttura delle cartelle

```
bergadano-didattica/
├── _config.yml              ← configurazione Jekyll (corsi, plugin)
├── Gemfile                  ← dipendenze Ruby
├── index.md                 ← homepage
├── _corsi/                  ← UN FILE PER CORSO (Fulvio li modifica)
│   ├── fisica-3b.md
│   ├── fisica-3acd.md
│   └── ...
├── _layouts/
│   ├── home.html            ← layout homepage (non toccare)
│   └── corso.html           ← layout pagina corso (non toccare)
├── _includes/               ← componenti riutilizzabili (non toccare)
│   ├── topbar.html
│   ├── footer.html
│   ├── scripts.html
│   ├── box-def.html         ← box Definizione
│   ├── box-thm.html         ← box Teorema
│   ├── box-warn.html        ← box Attenzione
│   ├── box-ex.html          ← box Esempio
│   ├── box-proof.html       ← box Dimostrazione
│   ├── box-note.html        ← box Nota
│   ├── box-end.html         ← chiude qualunque box
│   ├── spoiler.html         ← esercizio con soluzione nascosta
│   ├── spoiler-end.html
│   ├── fill-def.html        ← completamento studente
│   ├── video.html           ← embed YouTube
│   └── homework.html        ← sezione compiti
├── _sass/
│   └── STILE.scss           ← TUTTE le variabili di colore/font (Fulvio può toccare)
├── assets/
│   ├── css/main.scss        ← CSS principale (non toccare)
│   └── js/                  ← simulazioni JavaScript (generate da Claude)
└── simulazioni/             ← file JS delle simulazioni interattive
```

---

## File che Fulvio modifica

Fulvio modifica **solo** questi file:

1. **`_corsi/[nome-corso].md`** — contenuto di ogni corso (testo, formule, box, capitoli)
2. **`_sass/STILE.scss`** — colori e font (vedere STILE.md per la guida)
3. **`_config.yml`** — se si aggiunge un corso o si cambia il titolo del sito

Tutto il resto (layout, CSS, JS, include) viene generato o modificato da Claude.

---

## Sintassi dei file corso (cosa scrive Fulvio)

I file `_corsi/*.md` hanno un front matter YAML seguito da Markdown + include Jekyll.

### Front matter obbligatorio

```yaml
---
layout: corso
title: "Fisica 3ª B"
classe: "3B"
materia: fisica          # fisica | matematica | cittadinanza
capitoli_lista:
  - numero: 1
    titolo: "Grandezze fisiche e misure"
  - numero: 2
    titolo: "La cinematica"
  # ... fino a 6
---
```

### Struttura di un capitolo

```html
<section id="cap1" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Capitolo 1</span>
  <h2 class="chapter-title">Titolo del capitolo</h2>
</header>
<div class="prose">

Testo normale in Markdown. Formule inline con $...$ e display con $$...$$
(stessa sintassi di LaTeX, con doppio dollaro invece di \[...\]).

</div>
</section>
```

### Box di contenuto

```
{% include box-def.html titolo="Nome della definizione" %}
Testo della definizione con $formule$ inline o $$display$$.
{% include box-end.html %}

{% include box-thm.html titolo="Nome del teorema" %}
...
{% include box-end.html %}

{% include box-warn.html titolo="Attenzione" %}
...
{% include box-end.html %}

{% include box-ex.html titolo="Esempio 1.3" %}
...
{% include box-end.html %}

{% include box-proof.html titolo="Dimostrazione" %}
...
{% include box-end.html %}

{% include box-note.html titolo="Nota" %}
...
{% include box-end.html %}
```

### Altri elementi

```
{% include fill-def.html id="id-unico" prompt="Testo della domanda per lo studente" %}

{% include spoiler.html testo="Mostra la soluzione" %}
Soluzione qui.
{% include spoiler-end.html %}

{% include video.html id="ID_YOUTUBE" didascalia="Descrizione" %}

{% include homework.html titolo="Compito" descrizione="..." link="https://..." %}
```

### Formule

- Inline: `$f(x) = x^2$` — identico a LaTeX
- Display: `$$\int_a^b f(x)\,dx = F(b) - F(a)$$`
- Numerazione automatica con `\begin{equation}...\end{equation}` (supportato da MathJax)
- Tutti i comandi LaTeX standard funzionano: `\frac`, `\vec`, `\mathbf`, `\nabla`, `\partial`, ecc.

---

## Workflow di pubblicazione

```bash
# Anteprima locale (si aggiorna in tempo reale)
cd bergadano-didattica
bundle exec jekyll serve

# Pubblicazione su GitHub Pages
git add .
git commit -m "descrizione modifica"
git push
# Il sito si aggiorna entro ~60 secondi
```

---

## Simulazioni interattive

Le simulazioni sono scritte in JavaScript da Claude e inserite direttamente
nei file `_corsi/*.md` come blocchi `<script>` + `<canvas>`, oppure come
file separati in `assets/js/sim-[nome].js` inclusi con `<script src=...>`.

Per richiedere una simulazione a Claude, scrivere:
> "Crea una simulazione di [fenomeno fisico o matematico] per il capitolo X di [corso]"
> specificando: variabili controllabili, cosa deve mostrare, se serve un grafico affiancato.

---

## Note per Claude

- Fulvio conosce LaTeX: quando converte i suoi appunti, mantenere la notazione LaTeX e tradurre solo la struttura in Markdown + include Jekyll.
- Non spiegare HTML/CSS a meno che non venga chiesto esplicitamente.
- Quando si aggiunge contenuto a un corso, produrre direttamente il blocco Markdown da incollare nel file `.md` corretto.
- I colori e i font sono in `_sass/STILE.scss`. Se Fulvio chiede di cambiare colori, produrre le righe modificate di quel file, non del CSS.
- Le simulazioni vanno in JavaScript puro (no React, no framework): Fulvio può non capire il codice, ma deve poter incollarlo e funziona.
- Se viene caricato del LaTeX grezzo, convertirlo nel formato Markdown + Jekyll del sito (box, formule con $$, titoli con ###, ecc.)
