---
layout: questionario
title: "Matematica e Fisica: com'è andata finora"
classe: 4ACD
sottotitolo: "Questionario anonimo · circa 10 minuti"
questionario: 4acd
scadenza: 2026-11-23    # si chiude alla mezzanotte alla fine di questo giorno (senza: quella del giorno in cui lo apri)
permalink: /questionari/4acd/
sitemap: false
---
{% comment %}
QUESTIONARIO ANONIMO DELLA 4ACD
Indirizzo per gli studenti: /questionari/4acd/
Pagina del docente:         /questionari/4acd/?docente  (apri, QR da proiettare, contatore)

Tre tipi di domanda (tutte facoltative per lo studente):
  {% include questionario/scala.html  id="..." domanda="..." sinistra="..." destra="..." %}
  {% include questionario/scelta.html id="..." domanda="..." opzioni="A|B|C" multipla=true max=2 altro=true %}
  {% include questionario/aperta.html id="..." domanda="..." suggerimento="..." %}
Ogni domanda ha un id diverso (minuscole e trattini). I titoli ## diventano le
sezioni anche nell'email. Le domande non vanno cambiate mentre il questionario
è aperto: il server usa quelle che c'erano al momento dell'apertura.

Le domande qui sotto sono solo segnaposto: riscrivile, toglile, aggiungine.
{% endcomment %}

[QUI LA TUA INTRODUZIONE]

## Le lezioni

{% include questionario/scala.html id="lezioni-capisco" domanda="Durante le spiegazioni riesco a seguire il ragionamento." %}

{% include questionario/aperta.html id="lezioni-cambia" domanda="Che cosa cambieresti nel modo in cui faccio lezione?" %}

## Lo studio a casa

{% include questionario/scelta.html id="studio-ore" domanda="Quanto tempo dedichi in media, ogni settimana, a Matematica e Fisica fuori dalla scuola?" opzioni="Quasi niente|Meno di un'ora|Da una a due ore|Più di due ore" %}

## Le verifiche

{% include questionario/scala.html id="verifiche-coerenti" domanda="Le verifiche chiedono cose simili a quelle fatte in classe e negli esercizi." %}

## Fisica: il prossimo capitolo

{% include questionario/scelta.html id="fisica-proposta" domanda="Che cosa ti interesserebbe di più?" opzioni="Il laboratorio|L'attività di cittadinanza|La teoria con più esercizi" multipla=true altro=true %}

## Matematica: il sito

{% include questionario/scala.html id="mate-sito" domanda="Un capitolo sul sito, come quelli di Fisica, mi aiuterebbe a studiare Matematica." %}

## Per finire

{% include questionario/aperta.html id="finale" domanda="C'è qualcosa che vorresti dirmi e che non ti ho chiesto?" %}
