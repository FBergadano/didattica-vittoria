# La chat con l'intelligenza artificiale: come attivarla in sicurezza

## Perché serve un intermediario

Il sito è fatto di pagine statiche: tutto ciò che contengono è leggibile da
chiunque (basta "Visualizza sorgente"). Se la chiave API di Groq sta nella
pagina, chiunque può copiarla e usarla a tue spese. Per questo la chiave deve
stare su un piccolo server che fa da intermediario: la pagina parla con
l'intermediario, l'intermediario (che conosce la chiave) parla con Groq.

L'intermediario è il file `worker.js` di questa cartella, da pubblicare come
**Cloudflare Worker** (gratuito, nessun server da gestire).

## 1. Revoca la vecchia chiave (da fare subito)

La chiave usata finora è stata pubblicata nelle pagine del sito, quindi va
considerata compromessa.

1. Vai su <https://console.groq.com/keys>.
2. Elimina la chiave usata finora.
3. Creane una nuova e copiala (servirà al punto 2).
4. Su GitHub, nel repository → *Settings* → *Secrets and variables* →
   *Actions*, puoi eliminare il segreto `GROQ_KEY`: non serve più.

## 2. Pubblica l'intermediario

1. Crea un account gratuito su <https://dash.cloudflare.com>.
2. *Workers & Pages* → *Create* → *Create Worker*. Dagli un nome, ad esempio
   `chat-vittoria`, e premi *Deploy*.
3. *Edit code*: cancella il codice di esempio, incolla tutto il contenuto di
   `worker.js` e premi *Deploy*.
4. Nella pagina della Worker → *Settings* → *Variables and Secrets*:
   - aggiungi un **Secret** chiamato `GROQ_KEY` con la nuova chiave di Groq;
   - aggiungi una **Variable** (testo) chiamata `ORIGINE` con valore
     `https://fbergadano.github.io` (senza barra finale).
5. Copia l'indirizzo della Worker (qualcosa come
   `https://chat-vittoria.TUONOME.workers.dev`).

## 3. Collega il sito

In `_config.yml` scrivi l'indirizzo copiato:

```yaml
chat_proxy_url: "https://chat-vittoria.TUONOME.workers.dev"
```

poi pubblica come al solito (`git add . && git commit -m "..." && git push`).
Finché `chat_proxy_url` è vuoto, la chat mostra il messaggio
"l'esercizio interattivo non è ancora attivato".

## Limiti di sicurezza già impostati

- La Worker accetta richieste solo dal tuo sito (`ORIGINE`).
- Ogni risposta è lunga al massimo 500 token, e le conversazioni sono limitate
  a 24 messaggi: un eventuale abuso costerebbe poco.
- Il modello è fissato nella Worker, non può essere scelto dalla pagina.

Nota: un malintenzionato esperto potrebbe comunque falsificare l'origine e
usare la Worker fuori dal sito. Con i limiti sopra il danno è minimo; se
dovesse succedere, basta rigenerare la chiave su Groq e aggiornare il segreto
`GROQ_KEY` nella Worker.
