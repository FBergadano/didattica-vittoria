// Intermediario per la chat con l'intelligenza artificiale del sito.
// Gira come Cloudflare Worker (gratuito): custodisce la chiave Groq, che così
// non compare mai nelle pagine pubbliche. Istruzioni in LEGGIMI.md.
//
// Variabili da impostare nella Worker:
//   GROQ_KEY  (segreto)   — la chiave API di Groq
//   ORIGINE   (testo)     — l'origine del sito, es. https://fbergadano.github.io

const MODELLO = 'llama-3.3-70b-versatile';
const MAX_TOKEN = 500;        // tetto alla lunghezza di ogni risposta
const MAX_MESSAGGI = 24;      // tetto alla lunghezza della conversazione
const MAX_CARATTERI = 6000;   // tetto alla lunghezza di ogni messaggio

function cors(origine) {
  return {
    'Access-Control-Allow-Origin': origine,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request, env) {
    const origine = request.headers.get('Origin') || '';
    if (origine !== env.ORIGINE) return new Response('Origine non ammessa', { status: 403 });
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors(origine) });
    if (request.method !== 'POST') return new Response('Metodo non ammesso', { status: 405, headers: cors(origine) });

    let dati;
    try { dati = await request.json(); } catch { return new Response('Richiesta non valida', { status: 400, headers: cors(origine) }); }
    const messaggi = Array.isArray(dati.messages) ? dati.messages : [];
    const validi = messaggi.length > 0 && messaggi.length <= MAX_MESSAGGI && messaggi.every(m =>
      m && ['system', 'user', 'assistant'].includes(m.role) && typeof m.content === 'string' && m.content.length <= MAX_CARATTERI);
    if (!validi) return new Response('Conversazione non valida', { status: 400, headers: cors(origine) });

    const risposta = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.GROQ_KEY },
      body: JSON.stringify({
        model: MODELLO,
        messages: messaggi,
        max_tokens: Math.min(Number(dati.max_tokens) || MAX_TOKEN, MAX_TOKEN),
      }),
    });
    return new Response(await risposta.text(), {
      status: risposta.status,
      headers: { ...cors(origine), 'Content-Type': 'application/json' },
    });
  },
};
