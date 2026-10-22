# Consegna dei compiti e dubbi: come attivarla

## Come funziona

- Lo studente apre il pulsante **👤** in alto (o la pagina `/consegna/`) e
  entra con classe, **codice** e **PIN**. Il codice lo decidi tu: tre lettere
  del nome e una del cognome (GIUR); per gli omonimi, la seconda lettera del
  cognome (GIURO), e così via. Il PIN di 4 cifre lo sceglie lo studente al
  primo accesso: tu non lo conosci e non ti serve.
- Da quel momento ogni risposta che dà agli esercizi del sito (vero/falso,
  crocette, completamenti, quiz, abbinamenti…) arriva da sola al server, con
  l'ora in cui l'ha data. Anche quelle date prima di entrare, o senza rete:
  partono appena possibile.
- Sempre dalla finestrella 👤 può mandarti un **dubbio**: viene allegata in
  automatico la pagina e la sezione che sta leggendo. La tua risposta la
  ritrova nella stessa finestrella (con un pallino rosso sul pulsante).
- Tu apri **`/consegna/docente/`** con la tua password: per ogni classe una
  tabella studenti × lezioni (esercizi fatti, giusti, tempo fra la prima e
  l'ultima risposta, ritardi), il dettaglio risposta per risposta, i
  risultati domanda per domanda, i dubbi da leggere e a cui rispondere.
- Nessuna mail.

### Privacy

- Sul server ci sono **solo codici** (GIUR), mai nomi: l'elenco dei nomi
  non esiste da nessuna parte se non nella tua testa (e nel registro).
- I PIN sono salvati solo come impronta cifrata: nessuno, nemmeno chi
  gestisce il server, può leggerli.
- Dopo 8 PIN sbagliati il codice si blocca per un quarto d'ora; dopo 10
  password sbagliate si blocca per un quarto d'ora la pagina del docente.
- La Worker non registra indirizzi IP. Lascia **disattivati** i log
  (Observability) della Worker su Cloudflare.
- A fine quadrimestre, scheda **Dati** della tua pagina: cancella tutto ciò
  che è vecchio.

## Stato attuale (ottobre 2026)

Già fatto: database D1 `consegne`, Worker pubblicata su
`https://consegne-vittoria.consegne.workers.dev` (log disattivati),
password del docente impostata, `consegne_url` scritto in `_config.yml`.
I punti 1–3 qui sotto servono solo per rifare tutto da capo.

## Metodo più semplice: dal terminale

Da questa cartella (`strumenti/consegne`), dove `wrangler.toml` contiene già
tutte le impostazioni:

```bash
npx wrangler@4 login                          # una volta: conferma nel browser
npx wrangler@4 deploy                         # pubblica (o aggiorna) la Worker
npx wrangler@4 secret put DOCENTE_PASSWORD    # imposta/cambia la password del docente
```

Per **cambiare la password** del docente basta rilanciare l'ultimo comando.
Per **aggiornare la Worker** dopo una modifica a `worker.js`: `npx wrangler@4 deploy`.
(Gli «Schemi per l'interrogazione» richiedono la Worker aggiornata a ottobre 2026:
finché non è pubblicata, il sito risponde agli studenti che il server non è pronto.)

## Metodo dal pannello di Cloudflare

## 1. Crea il database (una volta sola)

1. Account gratuito su <https://dash.cloudflare.com> (lo stesso che userai
   eventualmente per la chat).
2. Menu a sinistra: *Storage & Databases* → *D1 SQL Database* →
   *Create database*. Nome: `consegne`. *Create*.

Non serve scrivere tabelle: le crea la Worker da sola al primo avvio.

## 2. Pubblica la Worker

1. *Workers & Pages* → *Create* → *Create Worker*. Nome, ad esempio,
   `consegne-vittoria` → *Deploy*.
2. *Edit code*: cancella il codice di esempio, incolla **tutto** il
   contenuto di `worker.js` (in questa cartella) → *Deploy*.
3. Nella pagina della Worker → *Settings* → *Bindings* → *Add* →
   *D1 database*: **Variable name** `DB`, database `consegne` → *Deploy*.
4. *Settings* → *Variables and Secrets* → *Add*:
   - tipo **Secret**, nome `DOCENTE_PASSWORD`, valore: una password lunga
     che userai per la tua pagina (non quella della mail!);
   - tipo **Text**, nome `ORIGINE`, valore `https://fbergadano.github.io`
     (senza barra finale).
5. *Settings* → *Observability*: lascia i log disattivati.
6. Copia l'indirizzo della Worker (qualcosa come
   `https://consegne-vittoria.TUONOME.workers.dev`). Aprendolo nel browser
   deve comparire `{"ok":true,"servizio":"consegne"}`.

## 3. Collega il sito

In `_config.yml`:

```yaml
consegne_url: "https://consegne-vittoria.TUONOME.workers.dev"
```

poi pubblica come al solito. Finché `consegne_url` è vuoto il sito è
identico a prima: nessun pulsante 👤.

## 4. Prepara le classi

1. Apri `https://fbergadano.github.io/didattica-vittoria/consegna/docente/`
   ed entra con la password.
2. Dal menu delle classi scegli **+ nuova classe…** (es. `5ACD`), poi nella
   scheda **Studenti** scrivi i codici, uno per riga, e *Salva l'elenco*.
3. In `_data/compiti.yml` scrivi i compiti delle prossime lezioni
   (istruzioni dentro il file). Ogni volta che lo modifichi, pubblica.

## 5. Agli studenti

Dai a ciascuno il suo codice (a voce o su un bigliettino) e il link
`…/didattica-vittoria/consegna/` da aggiungere alla schermata Home del
telefono. La prima volta scelgono classe, scrivono il codice e inventano un
PIN; poi non dovranno più farlo su quel telefono/computer. Se cambiano
dispositivo rientrano con codice e PIN; se dimenticano il PIN, lo azzeri tu
dalla scheda **Studenti**.

## Aggiornare la Worker

Se `worker.js` cambia, ripeti solo il punto 2.2 (*Edit code*, incolla,
*Deploy*): database, impostazioni e dati restano.

## Notifiche sul telefono (Telegram)

Quando arriva un dubbio, delle foto, uno schema o le prime risposte del giorno
di uno studente su una pagina, la Worker ti scrive su Telegram (solo codici,
mai nomi; il testo dei dubbi passa da Telegram). Si attiva una volta sola:

1. Su Telegram cerca **@BotFather**, scrivigli `/newbot` e segui le domande
   (un nome, per esempio «Consegne Vittoria», e un nome utente che finisce
   in `bot`). Alla fine ti dà un **token**, una stringa come
   `123456789:AAH...`: copialo.
2. Da questa cartella:
   ```bash
   npx wrangler@4 secret put TELEGRAM_TOKEN   # incolla il token
   npx wrangler@4 deploy
   ```
3. Su Telegram apri il tuo nuovo bot e premi **Avvia** (`/start`).
4. Nella pagina del docente, scheda **Dati** → **Collega Telegram**.
   Ti arriva subito un messaggio di conferma; con «Manda una prova» puoi
   ricontrollare quando vuoi.

Per spegnerle: **Scollega**, nella stessa scheda.

Nella scheda Dati c'è anche «Mostrami gli avvisi del browser»: mentre la pagina
del docente è aperta, ogni minuto controlla le novità e le mostra con un avviso
del computer (funziona anche senza Telegram).
