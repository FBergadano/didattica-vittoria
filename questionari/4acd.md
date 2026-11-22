---
layout: questionario
title: "Matematica e Fisica: Questionario anonimo"
classe: 4ACD
sottotitolo: "circa 10 minuti"
questionario: 4acd
scadenza: 2026-11-23    # si chiude alla mezzanotte alla fine di questo giorno (senza: quella del giorno in cui lo apri)
permalink: /questionari/4acd/
sitemap: false
---
{% comment %}
QUESTIONARIO ANONIMO DELLA 4ACD
Indirizzo per gli studenti: /questionari/4acd/
Pagina del docente:         /questionari/4acd/?docente  (apri, QR da proiettare, contatore)

Quattro tipi di domanda (tutte facoltative per lo studente):
  {% include questionario/scala.html   id="..." domanda="..." sinistra="..." destra="..." %}
  {% include questionario/griglia.html id="..." domanda="..." righe="Matematica|Fisica" sinistra="..." destra="..." %}
  {% include questionario/scelta.html  id="..." domanda="..." opzioni="A|B|C" multipla=true max=2 altro=true %}
  {% include questionario/aperta.html  id="..." domanda="..." suggerimento="..." %}
Domanda che compare solo dopo una certa risposta: aggiungi se="id-domanda:Opzione"
(id di una domanda a scelta più in alto e testo esatto di una sua opzione;
più opzioni separate da |, es. se="verifiche-preparato:Sì|In parte").
Per vederlo e provarlo senza inviare niente: /questionari/4acd/?prova
Ogni domanda ha un id diverso (minuscole e trattini). I titoli ## diventano le
sezioni anche nell'email. Le domande non vanno cambiate mentre il questionario
è aperto: il server usa quelle che c'erano al momento dell'apertura.
{% endcomment %}

Questo questionario, del tutto anonimo, mi serve per sapere come migliorare. Ti invito quindi a esprimerti in modo libero, per cercare di cambiare veramente quello che vorresti che cambiasse. Io cercherò di tenere conto di ogni opinione il più possibile.  
Per favore, però, anche se non saprò mai chi sei, ti prego di essere responsabile di ciò che scrivi, e di farlo in modo rispettoso.  
P.S. Per salvaguardare l'anonimato, non fare riferimenti personali che mi farebbero comprendere la tua identità.  

## Le lezioni

{% include questionario/griglia.html id="lezioni-capisco" domanda="Quando faccio attenzione, trovo che la lezione sia chiara." righe="Matematica|Fisica" %}

{% include questionario/griglia.html id="lezioni-fascino" domanda="Quando faccio attenzione, trovo che la lezione stimoli la mia curiosità, che sia interessante." righe="Matematica|Fisica" %}

{% include questionario/griglia.html id="lezioni-ritmo" domanda="Il ritmo delle lezioni è…" nota="3 = il ritmo giusto" righe="Matematica|Fisica" sinistra="Troppo lento" destra="Troppo veloce" %}

## Il clima in classe

{% include questionario/scala.html id="lezioni-domande" domanda="Mi sento a mio agio nel fare domande in classe." %}

{% include questionario/scala.html id="clima-concentrazione" domanda="In classe c'è un clima che mi permette di concentrarmi." %}

{% include questionario/scala.html id="clima-sbagliare" domanda="Ho paura di sbagliare davanti ai compagni." %}

## Lo studio a casa

{% include questionario/scelta.html id="studio-ore-mate" domanda="Quanto tempo dedichi in media, ogni settimana, a Matematica fuori dalla scuola?" opzioni="Quasi niente|Meno di un'ora|Da una a due ore|Più di due ore" %}

{% include questionario/scelta.html id="studio-ore-fisica" domanda="Quanto tempo dedichi in media, ogni settimana, a Fisica fuori dalla scuola?" opzioni="Quasi niente|Meno di un'ora|Da una a due ore|Più di due ore" %}

{% include questionario/scelta.html id="studio-poco-perche" domanda="Quando studio poco Matematica e Fisica, è soprattutto perché…" opzioni="Ho troppi compiti nelle altre materie|Non so da dove cominciare|Il libro non mi aiuta|Non mi interessa|Tanto non serve per il voto|Di solito studio abbastanza" multipla=true altro=true %}

{% include questionario/scelta.html id="studio-quando-non-viene-un-esercizio" domanda="Quando non capisco un esercizio a casa, di solito…" opzioni="Lascio perdere|Guardo il libro o il sito|Chiedo a un compagno|Cerco su internet o chiedo all'Intelligenza Artificiale|Chiedo al prof" multipla=true altro=true %}

## Le verifiche

{% include questionario/scelta.html id="verifiche-preparato" domanda="Quando arriva una verifica, di solito sento di essere preparato o preparata." opzioni="Sì|In parte|No" %}

{% include questionario/scelta.html id="verifiche-voti" se="verifiche-preparato:Sì|In parte" domanda="Rispetto alla preparazione con cui arrivo alla verifica, i voti che prendo sono…" opzioni="In linea con la mia preparazione|Più bassi di quanto mi aspettassi|Più alti di quanto mi aspettassi" %}

{% include questionario/scelta.html id="verifiche-perche" se="verifiche-preparato:In parte|No" domanda="Che cosa, secondo te, ti impedisce di sentirti del tutto preparato o preparata?" opzioni="Non capisco la teoria|Gli esercizi sono diversi da quelli fatti in classe e assegnati per compito|Vado in ansia|Non studio abbastanza" multipla=true altro=true %}

## Il sito

{% include questionario/scala.html id="sito" domanda="Come valuti, in generale, la proposta del sito?" sinistra="Molto negativa" destra="Molto positiva" %}

{% include questionario/aperta.html id="sito-apprezzo" domanda="Che cosa apprezzi del sito?" %}

{% include questionario/aperta.html id="sito-critica" domanda="Cosa consiglieresti per migliorare il sito?" %}

## Fisica e Matematica: i prossimi capitoli

{% include questionario/griglia.html id="fisica-proposta" domanda="Per il prossimo capitolo di Fisica, ho in mente di aggiungere, alla parte di teoria, anche due attività: un laboratorio da fare a scuola, durante due ore di lezione, e un'attività di cittadinanza sul Riscaldamento Globale. Valuta quanto ti interessa ciascuna delle due proposte." righe="Il laboratorio a scuola|L'attività di cittadinanza sul Riscaldamento Globale" sinistra="Per niente" destra="Moltissimo" %}


{% include questionario/scala.html id="mate-sito" domanda="Per il prossimo argomento di Matematica, ho in mente di aggiungere al sito un capitolo, come quelli di Fisica, per studiare ed allenarsi direttamente da lì. Valuta quanto ti interessa la proposta." sinistra="Per niente" destra="Moltissimo" %}

{% include questionario/scala.html id="mate-cittadinanza" domanda="Per il prossimo argomento di Matematica, ho in mente di fare delle lezioni di Cittadinanza collegate all'argomento. Il tema sarà “Come può un singolo individuo cambiare una grande comunità”. Quanto ti interessa questa proposta?" sinistra="Per niente" destra="Moltissimo" %}

{% include questionario/aperta.html id="fisica-idee" domanda="Hai dubbi o altre idee su queste proposte?" righe=2 %}

## Conclusione

{% include questionario/aperta.html id="finale-mantieni" domanda="C'è qualcosa delle mie lezioni che ti piace e vorresti mantenere?" righe=3 %}

{% include questionario/aperta.html id="finale-prof" domanda="Se fossi tu il prof, che cosa cambieresti?" %}

{% include questionario/aperta.html id="cosa-puoi-fare-tu" domanda="Cosa potresti fare tu per contribuire a migliorare la qualità delle lezioni, il nostro rapporto e il tuo apprendimento delle mie materie?" %}

{% include questionario/aperta.html id="finale" domanda="C'è qualcosa che vorresti dirmi sulle lezioni, sulle verifiche, sulle valutazioni, sul sito, sul rapporto che abbiamo o su qualsiasi altra cosa?" %}

