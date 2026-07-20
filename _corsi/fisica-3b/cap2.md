---
layout: capitolo
title: "Le Grandezze Unitarie e la Variazione"
corso: fisica-3b
corso_titolo: "Fisica 3ª B"
materia: fisica
classe: "3B"
numero: 2
---

<cit autore="Eraclito">Non è possibile che un uomo si immerga due volte nello stesso fiume, perché non sarà più lo stesso fiume, né sarà più lo stesso uomo.</cit> 

In questo capitolo impariamo a osservare un fenomeno fino a essere in grado di descriverlo **con una formula matematica**. Impariamo cioè a *creare*, *interpretare* e *gestire* le formule della Fisica. Infine,
impareremo anche a **descrivere** il cambiamento di tutto ciò che ci circonda, e ad esprimerlo a livello delle equazioni.

# Le Grandezze Unitarie

Cosa intendiamo quando diciamo che *l'oro costa più della carta*? A pensarci bene, la frase nasconde un piccolo paradosso: un blocco di fogli A4 per la stampante costa circa $4$ euro, mentre un milligrammo d'oro ne costa solo circa $0{,}11$. Un intero blocco di fogli costa dunque **più** di un milligrammo d'oro. Eppure tutti sappiamo, senza esitare, che è l'oro la sostanza più preziosa. Come si concilia questo con i numeri che abbiamo appena scritto?


Il problema è che stiamo confrontando **quantità diverse** di due sostanze diverse: un intero blocco di carta, che pesa centinaia di grammi, contro un singolo, minuscolo milligrammo d'oro. Per confrontare correttamente i due prezzi dobbiamo considerare *la stessa quantità* delle due sostanze — ad esempio, quanto costa **un grammo** di ciascuna.

{% include box-blue.html titolo="Rendere onesto il confronto" %}

Un milligrammo d'oro costa circa $0{,}11$ €, quindi un grammo (mille volte tanto) costa circa

$$0{,}11 \times 1000 = 110 \ \text{€/g}.$$

Un blocco di fogli A4 pesa circa $2{,}5$ kg $=2500$ g e costa $4$ €, quindi un grammo di carta costa circa

$$\frac{4}{2500} \approx 0{,}0016 \ \text{€/g}.$$

Un grammo d'oro costa dunque circa $70\,000$ volte più di un grammo di carta: ecco perché diciamo che l'oro "costa di più".

{% include box-end.html %}

In entrambi i casi abbiamo fatto la stessa operazione: abbiamo diviso **il costo totale** per **la quantità di materia** a cui si riferisce, ottenendo *il costo di un'unità* di quella sostanza (un grammo). Una grandezza del genere, cioè che esprime il rapporto tra una grandezza e una unità di un'altra grandezza, si chiama <definizione>grandezza unitaria</definizione>.

{% include box-imp.html titolo="Grandezza unitaria" %}

Le grandezze unitarie, in generale, si esprimono attraverso **il rapporto** tra due grandezze (ad esempio €/g, kg/m³, km/h, etc.):

$$
\text{grandezza unitaria} = \frac{\text{grandezza 1}}{\text{grandezza 2}}$$

{% include box-end.html %}

{% include box-ex.html titolo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: è una **grandezza unitaria** oppure no?

{% capture _q %}[
{"t":"La densità di popolazione (abitanti/km²)","ok":true,"s":"È il numero di abitanti per ogni chilometro quadrato: una grandezza unitaria."},
{"t":"Lo stipendio orario (€/h)","ok":true,"s":"È il guadagno per ogni ora lavorata: una grandezza unitaria."},
{"t":"Il costo totale della spesa","ok":false,"s":"È una grandezza totale, non un rapporto: non dice nulla su 'per ogni unità di cosa'."},
{"t":"Il prezzo al chilo delle mele (€/kg)","ok":true,"s":"È un rapporto tra costo totale e massa: è una grandezza unitaria."},
{"t":"La popolazione di una città","ok":false,"s":"È un numero totale di persone, non un rapporto tra due grandezze."},
{"t":"Il numero totale di pagine di un libro","ok":false,"s":"Non è un rapporto tra due grandezze, è solo un conteggio totale."},
{"t":"Il consumo di carburante di un'automobile (km/L)","ok":true,"s":"È lo spazio percorso per ogni litro di carburante: una grandezza unitaria."}
]{% endcapture %}
{% include quiz.html domande=_q label_si="Una grandezza unitaria" label_no="Non una grandezza unitaria" id="q-gu" %}

{% include box-end.html %}






{% include box-ex.html titolo="Esercizio — Il riso più conveniente" %}

In un negozio trovi due confezioni di riso. Clicca sulla confezione che conviene di più.

<div style="margin:0.75rem 0 0;background:#f0e8dc;border-radius:8px;padding:0.75rem 0.85rem 0.6rem;border:1px solid #c8b898;">
<canvas id="cv-riso" width="440" height="190" style="display:block;max-width:100%;border-radius:5px;cursor:pointer;touch-action:manipulation;"></canvas>
<p id="fb-riso" style="margin:0.5rem 0 0;font-size:13px;font-family:Georgia,serif;min-height:1.3em;"></p>
</div>
<script>
var simRiso=(function(){
var cv=document.getElementById('cv-riso'),ctx=cv.getContext('2d');
var W=440,H=190;
var bags=[
  {cx:130,cy:100,kg:3,eur:6},
  {cx:310,cy:100,kg:5,eur:8}
];
var correct=1, answered=false, lastPick=-1, tries=0;

function drawBag(b,i){
  var cx=b.cx,cy=b.cy,bw=76,bh=84,tw=46;
  var hi=answered?(i===correct?'ok':(i===lastPick?'err':null)):null;
  ctx.save();ctx.translate(cx,cy);
  ctx.fillStyle='rgba(0,0,0,0.1)';ctx.beginPath();ctx.ellipse(4,bh/2+7,bw/2*0.8,7,0,0,Math.PI*2);ctx.fill();
  var bg=ctx.createLinearGradient(-bw/2,0,bw/2,0);
  bg.addColorStop(0,'#e8dcc0');bg.addColorStop(0.3,'#f5ecd8');bg.addColorStop(0.7,'#f5ecd8');bg.addColorStop(1,'#d8c8a0');
  ctx.fillStyle=bg;
  ctx.beginPath();ctx.moveTo(-tw/2,-bh/2);ctx.lineTo(tw/2,-bh/2);ctx.lineTo(bw/2,bh/2);ctx.lineTo(-bw/2,bh/2);ctx.closePath();ctx.fill();
  ctx.strokeStyle=hi==='ok'?'#15803d':hi==='err'?'#b91c1c':'#a89060';
  ctx.lineWidth=hi?3:1;ctx.stroke();
  ctx.strokeStyle='#8a7040';ctx.lineWidth=2.2;
  ctx.beginPath();ctx.arc(0,-bh/2-7,5,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.85)';ctx.strokeStyle='#b8a880';ctx.lineWidth=0.8;
  ctx.fillRect(-28,-7,56,14);ctx.strokeRect(-28,-7,56,14);
  ctx.fillStyle='#5a4520';ctx.font='bold 10px Georgia,serif';ctx.textAlign='center';
  ctx.fillText('RISO '+b.kg+' kg',0,3);
  ctx.restore();
  ctx.fillStyle='#3a2c10';ctx.font='bold 14px Georgia,serif';ctx.textAlign='center';
  ctx.fillText(b.eur+' €',cx,cy+bh/2+24);
  ctx.textAlign='left';
}
function draw(){
  ctx.clearRect(0,0,W,H);
  var g=ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'#faf6ec');g.addColorStop(1,'#f0e8d8');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#6b5530';ctx.font='12px Georgia,serif';ctx.textAlign='center';
  ctx.fillText('Confezione A',bags[0].cx,22);
  ctx.fillText('Confezione B',bags[1].cx,22);
  ctx.textAlign='left';
  bags.forEach(drawBag);
}
function xy(e,t){var r=cv.getBoundingClientRect(),s=t?e.touches[0]:e;return{x:(s.clientX-r.left)*(W/r.width),y:(s.clientY-r.top)*(H/r.height)};}
function hit(x,y){
  for(var i=0;i<bags.length;i++){var b=bags[i];if(Math.abs(x-b.cx)<42&&Math.abs(y-b.cy)<48)return i;}
  return -1;
}
function pick(i){
  lastPick=i;
  var fb=document.getElementById('fb-riso');
  if(i===correct){
    answered=true;fb.style.color='#15803d';
    fb.textContent='✓ Esatto! La confezione B costa 1,6 €/kg contro i 2 €/kg della A: conviene di più.';
    confettiRiso();
  } else {
    tries++;
    fb.style.color='#b91c1c';
    fb.textContent='✗ Non è la scelta più conveniente. Calcola il prezzo al chilo di entrambe e riprova.'+(tries>=2?' Puoi anche guardare la soluzione qui sotto.':'');
  }
  draw();
}
cv.addEventListener('click',function(e){if(answered)return;var p=xy(e);var i=hit(p.x,p.y);if(i>=0)pick(i);});
cv.addEventListener('touchstart',function(e){if(answered)return;e.preventDefault();var p=xy(e,1);var i=hit(p.x,p.y);if(i>=0)pick(i);},{passive:false});
function confettiRiso(){
  var canvas=document.createElement('canvas');
  canvas.style.position='fixed';canvas.style.top=0;canvas.style.left=0;canvas.style.pointerEvents='none';canvas.style.zIndex=9999;
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  document.body.appendChild(canvas);
  var cctx=canvas.getContext('2d');
  var r=cv.getBoundingClientRect(),ccx=r.left+r.width/2,ccy=r.top+r.height*0.4;
  var cols=['#0891b2','#22d3ee','#059669','#d97706','#ec4899','#a78bfa','#fbbf24'];
  var ps=[];
  for(var k=0;k<55;k++){
    ps.push({x:ccx+(Math.random()-.5)*100,y:ccy,vx:(Math.random()-.5)*11,vy:-(Math.random()*13+5),
      w:Math.random()*11+5,h:Math.random()*6+3,col:cols[k%cols.length],
      rot:Math.random()*Math.PI*2,rv:(Math.random()-.5)*.32,a:1});
  }
  (function frame(){
    cctx.clearRect(0,0,canvas.width,canvas.height);var alive=false;
    ps.forEach(function(p){
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.38;p.rot+=p.rv;p.a-=0.017;
      if(p.a<=0)return;alive=true;
      cctx.save();cctx.globalAlpha=p.a;cctx.translate(p.x,p.y);cctx.rotate(p.rot);
      cctx.fillStyle=p.col;cctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cctx.restore();
    });
    if(alive)requestAnimationFrame(frame);else document.body.removeChild(canvas);
  })();
}
draw();
return{};
})();
</script>

{% include spoiler.html testo="Mostra la soluzione" %}
La grandezza unitaria adatta è il **costo al chilo**:

$$c = \frac{\text{costo}}{\text{massa}}.$$

Per la confezione A: $c_A = \dfrac{6}{3} = 2\ \text{€/kg}$. Per la confezione B: $c_B = \dfrac{8}{5} = 1{,}6\ \text{€/kg}$.

Poiché $c_B < c_A$, la confezione B conviene di più: a parità di quantità, costa meno.
{% include spoiler-end.html %}

{% include box-end.html %}

{% include box-ex.html titolo="Esercizio — Chi guadagna di più?" %}

Un altro caso in cui bisogna fare attenzione a confrontare le grandezze nella stessa unità: gli stipendi. Anna lavora con uno stipendio di $1400$ €/mese, e a dicembre riceve anche la <definizione>tredicesima</definizione> — una mensilità extra (se non sai cosa sia, [leggi qui](https://it.wikipedia.org/wiki/Tredicesima_mensilit%C3%A0)). Bruno guadagna invece $18\,000$ € all'anno, tutto compreso. Chi dei due, alla fine dell'anno, ha guadagnato di più? Clicca sulla persona che pensi guadagni di più.

<div style="margin:0.75rem 0 0;background:#f0e8dc;border-radius:8px;padding:0.75rem 0.85rem 0.6rem;border:1px solid #c8b898;">
<div style="display:flex;gap:0.6rem;flex-wrap:wrap;">
<button id="btn-anna" style="flex:1;min-width:160px;padding:0.65rem 0.75rem;background:#fff;border:2px solid #c8b898;border-radius:8px;cursor:pointer;font-family:Georgia,serif;text-align:left;">
<span style="display:block;font-size:14px;font-weight:bold;color:#3a2c10;">Anna</span>
<span style="display:block;font-size:12px;color:#6b5530;margin-top:0.2rem;">1400 €/mese + tredicesima</span>
</button>
<button id="btn-bruno" style="flex:1;min-width:160px;padding:0.65rem 0.75rem;background:#fff;border:2px solid #c8b898;border-radius:8px;cursor:pointer;font-family:Georgia,serif;text-align:left;">
<span style="display:block;font-size:14px;font-weight:bold;color:#3a2c10;">Bruno</span>
<span style="display:block;font-size:12px;color:#6b5530;margin-top:0.2rem;">18 000 €/anno</span>
</button>
</div>
<p id="fb-salary" style="margin:0.5rem 0 0;font-size:13px;font-family:Georgia,serif;min-height:1.3em;"></p>
</div>
<script>
(function(){
var answered=false;
var btnA=document.getElementById('btn-anna'),btnB=document.getElementById('btn-bruno'),fb=document.getElementById('fb-salary');
function pick(name,el){
  if(answered)return;
  if(name==='anna'){
    answered=true;
    el.style.borderColor='#15803d';el.style.background='#f0fdf4';
    fb.style.color='#15803d';
    fb.textContent='✓ Esatto! Con la tredicesima Anna incassa 13 mensilità in un anno: 1400 × 13 = 18 200 €, contro i 18 000 € di Bruno.';
    confettiSalary();
  } else {
    el.style.borderColor='#b91c1c';el.style.background='#fef2f2';
    fb.style.color='#b91c1c';
    fb.textContent='✗ Non proprio: prova a calcolare quante mensilità riceve davvero Anna in un anno, tredicesima compresa.';
  }
}
btnA.addEventListener('click',function(){pick('anna',btnA);});
btnB.addEventListener('click',function(){pick('bruno',btnB);});
function confettiSalary(){
  var canvas=document.createElement('canvas');
  canvas.style.position='fixed';canvas.style.top=0;canvas.style.left=0;canvas.style.pointerEvents='none';canvas.style.zIndex=9999;
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  document.body.appendChild(canvas);
  var ctx=canvas.getContext('2d');
  var r=btnA.getBoundingClientRect(),cx=(r.left+r.right)/2,cy=r.top;
  var cols=['#0891b2','#22d3ee','#059669','#d97706','#ec4899','#a78bfa','#fbbf24'];
  var ps=[];
  for(var k=0;k<55;k++){
    ps.push({x:cx+(Math.random()-.5)*140,y:cy,vx:(Math.random()-.5)*11,vy:-(Math.random()*13+5),
      w:Math.random()*11+5,h:Math.random()*6+3,col:cols[k%cols.length],
      rot:Math.random()*Math.PI*2,rv:(Math.random()-.5)*.32,a:1});
  }
  (function frame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);var alive=false;
    ps.forEach(function(p){
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.38;p.rot+=p.rv;p.a-=0.017;
      if(p.a<=0)return;alive=true;
      ctx.save();ctx.globalAlpha=p.a;ctx.translate(p.x,p.y);ctx.rotate(p.rot);
      ctx.fillStyle=p.col;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
    });
    if(alive)requestAnimationFrame(frame);else document.body.removeChild(canvas);
  })();
}
})();
</script>

{% include spoiler.html testo="Mostra la soluzione" %}
Bisogna confrontare le due grandezze nella stessa unità: il totale guadagnato in un anno.

Bruno guadagna semplicemente $18\,000$ €/anno.

Anna guadagna $1\,400$ €/mese, ma con la tredicesima riceve in realtà **13** mensilità in un anno (non 12):

$$1\,400 \times 13 = 18\,200 \ \text{€/anno}.$$

Poiché $18\,200 > 18\,000$, è Anna a guadagnare di più — anche se di poco: circa **200 €** l'anno, poco più dell'1%.
{% include spoiler-end.html %}

{% include box-end.html %}

Prima di proseguire, fissiamo le idee su cosa sia una grandezza unitaria.

{% include frayer.html id="frayer-gu" termine="Grandezza unitaria" %}
 

## Proporzionalità diretta e proporzionalità inversa

C'è una caratteristica, che è comune a tutte le grandezze unitarie e che è fondamentale. Ci accompagnerà fino alla fine della quinta. 

Considera l'esempio del prezzo al chilo del riso, che è dato dalla formula

$$
\text{prezzo al chilo} = \frac{\text{prezzo totale}}{\text{numero di chili}}.
$$

Notiamo che *se aumentiamo il numeratore* (cioè il prezzo totale) *senza cambiare il denominatore* (ovvero il numero di chili), allora il prezzo al chilo aumenta.

Al contrario, *se aumentiamo il denominatore* (cioè il numero di chili) *senza cambiare il numeratore* (ovvero il prezzo totale), allora il prezzo al chilo diminuisce.

Questa cosa vale in generale, per ogni formula della fisica.

<div style="margin:0.75rem 0 1rem;background:#f0e8dc;border-radius:8px;padding:0.75rem 0.85rem 0.6rem;border:1px solid #c8b898;text-align:center;">
<canvas id="cv-propdiag" width="420" height="180" style="display:block;max-width:100%;margin:0 auto;"></canvas>
</div>
<script>
(function(){
var cv=document.getElementById('cv-propdiag'),ctx=cv.getContext('2d');
var W=420,H=180;
function arrow(x0,y0,cx,cy,x1,y1,color){
  ctx.strokeStyle=color;ctx.lineWidth=2.2;
  ctx.beginPath();ctx.moveTo(x0,y0);ctx.quadraticCurveTo(cx,cy,x1,y1);ctx.stroke();
  var ang=Math.atan2(y1-cy,x1-cx);
  ctx.fillStyle=color;
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x1-9*Math.cos(ang-0.4),y1-9*Math.sin(ang-0.4));
  ctx.lineTo(x1-9*Math.cos(ang+0.4),y1-9*Math.sin(ang+0.4));
  ctx.closePath();ctx.fill();
}
ctx.clearRect(0,0,W,H);
ctx.fillStyle='#faf8f4';ctx.fillRect(0,0,W,H);

var green='#15803d',orange='#c2410c',dark='#1a202c';

arrow(70,72,130,18,178,52,green);
ctx.fillStyle=green;ctx.font='bold 12px Georgia,serif';ctx.textAlign='center';
ctx.fillText('direttamente proporzionale',125,16);

arrow(70,118,130,172,178,138,orange);
ctx.fillStyle=orange;ctx.font='bold 12px Georgia,serif';
ctx.fillText('inversamente proporzionale',125,178);

ctx.textAlign='left';ctx.fillStyle=dark;
ctx.font='italic bold 36px Georgia,serif';
ctx.fillText('x',52,102);
ctx.font='bold 30px Georgia,serif';
ctx.fillText('=',98,102);
ctx.font='italic bold 30px Georgia,serif';
ctx.fillText('y',187,80);
ctx.fillText('z',187,134);
ctx.strokeStyle=dark;ctx.lineWidth=2.2;
ctx.beginPath();ctx.moveTo(160,92);ctx.lineTo(212,92);ctx.stroke();
})();
</script>

{% include box-imp.html titolo="Proporzionalità diretta e Proporzionalità inversa" %}
In una formula del tipo 

$$
x = \frac y z,
$$

con $y$ e $z$ positivi, la due grandezze $x$ e $y$ si dicono <definizione>direttamente proporzionali</definizione>, in quanto se $y$ aumenta e $z$ rimane costante allora $x$ aumenta. Al contrario, le due grandezze $x$ e $z$ si dicono <definizione>inversamente proporzionali</definizione>, in quanto se $z$ aumenta e $y$ rimane fissato allora $x$ diminuisce.

{% include box-end.html %}
 
{% include box-blue.html titolo="Un esempio da ricordare" %}
La definizione di grandezze direttamente proporzionali e inversamente proporzionali può essere ricordata con un esempio che conosci benissimo: dividere una pizza tra amici. Chiaramente, dato un certo numero di fette di pizza e un certo numero di amici, se si divide equamente risulte che il numero di fette a testa è dato da

$$
\text{fette a testa} = \frac{\text{fette totali}}{\text{numero di amici}}.
$$

Adesso pensa ad aumentare le fette totali e il numero di amici, **uno alla volta**.
- Se la pizza ha più fette, **a parità di amici**, ognuno ne mangia di più: **fette totali e fette a testa sono direttamente proporzionali**.
- Se invitate più amici, **a parità di fette**, ognuno ne mangia di meno: **numero di amici e fette a testa sono inversamente proporzionali**.

Ogni volta che incontri una formula del tipo $x = \frac yz$, pensa alla pizza: il **numeratore si comporta come le fette totali** — cresce e $x$ cresce con lui — mentre il **denominatore si comporta come gli amici a tavola** — cresce e $x$ diminuisce.
{% include box-end.html %}

<div style="margin:0.75rem 0 0;background:#f0e8dc;border-radius:8px;padding:0.85rem 0.9rem 0.75rem;border:1px solid #c8b898;">
<p style="margin:0 0 0.5rem;font-size:13px;font-family:Georgia,serif;"><strong>Prova tu: aggiungi fette e amici</strong></p>
<canvas id="cv-pizza" width="440" height="230" style="display:block;max-width:100%;border-radius:5px;"></canvas>
<div style="display:flex;gap:1.2rem;flex-wrap:wrap;margin-top:0.65rem;align-items:center;">
<div style="display:flex;align-items:center;gap:0.4rem;">
<span style="font-size:13px;font-family:Georgia,serif;color:#5a3c18;">Fette totali:</span>
<button onclick="simPizza.chFette(-1)" style="width:26px;height:26px;background:#8b5e30;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:15px;line-height:1;">−</button>
<span id="val-fette" style="font-weight:bold;min-width:1.6em;text-align:center;display:inline-block;font-family:Georgia,serif;">8</span>
<button onclick="simPizza.chFette(1)" style="width:26px;height:26px;background:#8b5e30;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:15px;line-height:1;">+</button>
</div>
<div style="display:flex;align-items:center;gap:0.4rem;">
<span style="font-size:13px;font-family:Georgia,serif;color:#5a3c18;">Amici:</span>
<button onclick="simPizza.chAmici(-1)" style="width:26px;height:26px;background:#1a4d6a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:15px;line-height:1;">−</button>
<span id="val-amici" style="font-weight:bold;min-width:1.6em;text-align:center;display:inline-block;font-family:Georgia,serif;">4</span>
<button onclick="simPizza.chAmici(1)" style="width:26px;height:26px;background:#1a4d6a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:15px;line-height:1;">+</button>
</div>
</div>
<p id="fb-pizza" style="margin:0.6rem 0 0;font-size:14px;font-family:Georgia,serif;font-weight:bold;color:#3a2c10;"></p>
</div>
<script>
var simPizza=(function(){
var cv=document.getElementById('cv-pizza'),ctx=cv.getContext('2d');
var W=440,H=230;
var SLICES=8;
var fette=8,amici=4;
var FMIN=1,FMAX=24,AMIN=1,AMAX=12;
var TWOPI=Math.PI*2;
var pepperoni=[],basil=[];
for(var p=0;p<8;p++){pepperoni.push({a:(p*0.9+0.35)%TWOPI,r:0.3+0.4*((p*37)%10)/10});}
for(var b=0;b<4;b++){basil.push({a:(b*1.45+0.9)%TWOPI,r:0.2+0.5*((b*53)%10)/10});}

function fmt(v){
  if(Math.abs(v-Math.round(v))<1e-9)return String(Math.round(v));
  return v.toFixed(2).replace('.',',');
}
function composeLabel(f){
  var whole=Math.floor(f/SLICES),rem=f%SLICES,parts=[];
  if(whole>0)parts.push(whole+(whole===1?' pizza':' pizze'));
  if(rem>0)parts.push(rem+(rem===1?' fetta':' fette'));
  return parts.join(' e ');
}
function drawPizza(cx,cy,R,present){
  if(present<=0)return;
  var frac=present/SLICES;
  var startA=-Math.PI/2, endA=startA+frac*TWOPI;

  ctx.save();
  ctx.beginPath();ctx.ellipse(cx+3,cy+7,R*0.98,R*0.34,0,0,Math.PI*2);
  ctx.fillStyle='rgba(0,0,0,0.13)';ctx.fill();
  ctx.restore();

  function wedge(rad){
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,rad,startA,endA);ctx.closePath();
  }

  var crust=ctx.createRadialGradient(cx,cy,R*0.78,cx,cy,R);
  crust.addColorStop(0,'#e9ba6c');crust.addColorStop(0.6,'#dda354');crust.addColorStop(1,'#b97a2e');
  wedge(R);ctx.fillStyle=crust;ctx.fill();

  ctx.fillStyle='rgba(120,70,20,0.35)';
  for(var s=0;s<14;s++){
    var saf=(s/14)*TWOPI;
    if(saf>frac*TWOPI-0.04)continue;
    var sa=startA+saf,sr=R*0.9;
    ctx.beginPath();ctx.arc(cx+Math.cos(sa)*sr,cy+Math.sin(sa)*sr,1.2,0,Math.PI*2);ctx.fill();
  }

  var innerR=R*0.84;
  var cheese=ctx.createRadialGradient(cx-innerR*0.2,cy-innerR*0.25,innerR*0.1,cx,cy,innerR);
  cheese.addColorStop(0,'#ffd873');cheese.addColorStop(0.7,'#ffc94d');cheese.addColorStop(1,'#f0a92e');
  wedge(innerR);ctx.fillStyle=cheese;ctx.fill();

  ctx.fillStyle='rgba(255,255,255,0.16)';
  for(var m=0;m<8;m++){
    var maf=m*0.785+0.3,maff=maf%TWOPI;
    if(maff>frac*TWOPI-0.04)continue;
    var ma=startA+maf,mr=innerR*(0.25+0.55*((m*53)%10)/10);
    ctx.save();ctx.translate(cx+Math.cos(ma)*mr,cy+Math.sin(ma)*mr);ctx.rotate(ma);
    ctx.beginPath();ctx.ellipse(0,0,4.5,2.6,0,0,Math.PI*2);ctx.fill();ctx.restore();
  }

  pepperoni.forEach(function(pp){
    if(pp.a>frac*TWOPI-0.04)return;
    var a=startA+pp.a;
    var px=cx+Math.cos(a)*innerR*pp.r,py=cy+Math.sin(a)*innerR*pp.r;
    var pg=ctx.createRadialGradient(px-1.2,py-1.2,0.4,px,py,4.6);
    pg.addColorStop(0,'#d0502e');pg.addColorStop(1,'#8a2c14');
    ctx.beginPath();ctx.arc(px,py,4.3,0,Math.PI*2);ctx.fillStyle=pg;ctx.fill();
    ctx.strokeStyle='#6e2410';ctx.lineWidth=0.5;ctx.stroke();
    ctx.fillStyle='rgba(0,0,0,0.18)';
    ctx.beginPath();ctx.arc(px+1.2,py+0.9,0.6,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.arc(px-0.8,py+1.3,0.5,0,Math.PI*2);ctx.fill();
  });

  basil.forEach(function(bp){
    if(bp.a>frac*TWOPI-0.04)return;
    var a=startA+bp.a;
    var bx=cx+Math.cos(a)*innerR*bp.r,by=cy+Math.sin(a)*innerR*bp.r;
    ctx.save();ctx.translate(bx,by);ctx.rotate(a*1.7);
    ctx.fillStyle='#3f7d34';ctx.beginPath();ctx.ellipse(0,0,3.2,1.5,0,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#2c5a24';ctx.lineWidth=0.4;ctx.beginPath();ctx.moveTo(-2.6,0);ctx.lineTo(2.6,0);ctx.stroke();
    ctx.restore();
  });

  ctx.strokeStyle='rgba(110,55,15,0.55)';ctx.lineWidth=1.3;
  for(var i=0;i<=present;i++){
    var a2=startA+i*(TWOPI/SLICES);
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a2)*R,cy+Math.sin(a2)*R);ctx.stroke();
  }

  ctx.beginPath();ctx.arc(cx,cy,R,startA,endA);
  ctx.strokeStyle='rgba(255,255,255,0.3)';ctx.lineWidth=1;ctx.stroke();
}
function drawFriend(cx,cy,r){
  ctx.beginPath();ctx.arc(cx+1.5,cy+2,r,0,Math.PI*2);ctx.fillStyle='rgba(0,0,0,0.08)';ctx.fill();
  var fg=ctx.createRadialGradient(cx-r*0.3,cy-r*0.3,r*0.1,cx,cy,r);
  fg.addColorStop(0,'#ffedc4');fg.addColorStop(1,'#ffd68a');
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fillStyle=fg;ctx.fill();
  ctx.strokeStyle='#c89050';ctx.lineWidth=1.1;ctx.stroke();
  ctx.fillStyle='#5a3c18';
  ctx.beginPath();ctx.arc(cx-r*0.35,cy-r*0.08,r*0.11,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(cx+r*0.35,cy-r*0.08,r*0.11,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#5a3c18';ctx.lineWidth=1.4;
  ctx.beginPath();ctx.arc(cx,cy+r*0.1,r*0.42,0.15*Math.PI,0.85*Math.PI);ctx.stroke();
}
function draw(){
  ctx.clearRect(0,0,W,H);
  var g=ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'#faf6ec');g.addColorStop(1,'#f0e8d8');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);

  var numPizze=Math.ceil(fette/SLICES);
  var R=48,gap=20;
  var totalW=numPizze*(2*R)+(numPizze-1)*gap;
  var startX=(W-totalW)/2+R;
  for(var i=0;i<numPizze;i++){
    var present=Math.min(SLICES,fette-i*SLICES);
    drawPizza(startX+i*(2*R+gap),80,R,present);
  }

  ctx.fillStyle='#6b5530';ctx.font='12px Georgia,serif';ctx.textAlign='center';
  ctx.fillText('Amici',W/2,150);
  ctx.textAlign='left';
  var per=6,r=13,sp=44;
  var rowW=Math.min(amici,per)*sp;
  var startFX=(W-rowW)/2+r;
  for(var k=0;k<amici;k++){
    var col=k%per,row=Math.floor(k/per);
    drawFriend(startFX+col*sp,170+row*34,r);
  }
}
function update(){
  document.getElementById('val-fette').textContent=fette;
  document.getElementById('val-amici').textContent=amici;
  document.getElementById('fb-pizza').textContent=composeLabel(fette)+' = '+fette+' fette,  '+fette+' ÷ '+amici+' = '+fmt(fette/amici)+' fette a testa';
  draw();
}
function chFette(d){fette=Math.max(FMIN,Math.min(FMAX,fette+d));update();}
function chAmici(d){amici=Math.max(AMIN,Math.min(AMAX,amici+d));update();}
update();
return{chFette:chFette,chAmici:chAmici};
})();
</script>

{% include box-ex.html titolo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q2 %}[
{"t":"Se $x = y/z$, allora $x$ e $z$ sono direttamente proporzionali.","ok":false,"s":"No: se $z$ cresce (a $y$ fisso) $x$ diminuisce — sono inversamente proporzionali."},
{"t":"Le fette di pizza a testa sono direttamente proporzionali al numero di fette totali, a parità di amici.","ok":true,"s":"Più fette ci sono, a parità di amici, più ne tocca a ciascuno."},
{"t":"Se $x = y/z$, allora $x$ e $y$ sono direttamente proporzionali.","ok":true,"s":"Sì: se $y$ cresce (a $z$ fisso) anche $x$ cresce."},
{"t":"Le fette di pizza a testa sono direttamente proporzionali al numero di amici, a parità di fette totali.","ok":false,"s":"Al contrario: più amici ci sono, meno fette toccano a testa — sono inversamente proporzionali."},
{"t":"In una divisione, se il denominatore aumenta e il numeratore resta fisso, il risultato aumenta. ","ok":false,"s":"Il risultato diminuisce: il denominatore è inversamente proporzionale al risultato.","h":"<em>Indizio:</em> prova a scrivere una qualsiasi frazione con numeratore e denominatore entrambi positivi e calcolane il risultato in forma decimale, poi aumenta il denominatore e calcola il risultato di nuovo."},
{"t":"Il prezzo al chilo è direttamente proporzionale al prezzo totale, a parità di chili acquistati.","ok":true,"s":"Prezzo al chilo = prezzo totale ÷ chili: a chili fissi, più spendi più costa al chilo."}
]{% endcapture %}
{% include quiz.html domande=_q2 label_si="Un esempio di grandezze direttamente proporzionali" label_no="Un esempio di grandezze inversamente proporzionali" id="q-prop" %}

{% include box-end.html %}

## Trovare le unità di misura a partire dalla formula

L'unità di misura di una grandezza unitaria può essere trovata facilmente a partire dalle unità di misura del numeratore e del denominatore.

{% include box-imp.html titolo="Trovare l'unità di misura" %}

Per trovare l'unità di misura di una grandezza $x$ di cui conosciamo la formula, basta rimpiazzare ciascuna grandezza con la rispettiva unità di misura. Indichiamo l'unità di misura di $x$ con $[x]$ (si legge "unità di $x$"). Allora,
- se $x=\frac y z$ allora 

$$[x] = \frac{[y]}{[z]};$$

- se $x = y\cdot z$ allora 

$$[x] = [y] \times [z].$$

{% include box-end.html %}

{% include box-blue.html titolo="La densità" %}
Nel laboratorio hai calcolato la densità di un oggetto con la formula

$$d = \frac{m}{V}.$$

La massa $m$ si misura in chilogrammi (kg), il volume $V$ in metri cubi (m³). Sostituendo le unità al posto dei simboli, esattamente come nella formula,

$$[d] = \frac{\text{kg}}{\text{m}^3},$$

cioè la densità si misura in kg/m³ (o, in unità pratiche, g/cm³ o g/L).
{% include box-end.html %}

{% include box-blue.html titolo="L'area e il volume" %}
Il caso del prodotto funziona allo stesso modo. L'area $A$ di un rettangolo è definita come il prodotto di due lunghezze,

$$A = b \cdot h,$$

dove $b$ e $h$ (base e altezza) si misurano entrambe in metri (m). Sostituendo le unità al posto dei simboli,

$$[A] = \text{m}\cdot\text{m} = \text{m}^2,$$

cioè l'area si misura in metri quadrati — esattamente come già sai.

Il volume $V$ di un parallelepipedo è invece il prodotto di **tre** lunghezze, $V = b\cdot h\cdot p$, quindi

$$[V] = \text{m}\cdot\text{m}\cdot\text{m} = \text{m}^3,$$

cioè il volume si misura in metri cubi.
{% include box-end.html %}

{% include box-ex.html titolo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso (oppure completa, dove richiesto).

{% capture _q3 %}[
{"t":"Se $x = y \\times z$, con $y$ misurato in metri e $z$ in secondi, allora $x$ si misura in m/s.","ok":false,"s":"In un prodotto le unità si moltiplicano, non si dividono: $x$ si misura in m·s (metri per secondo), non m/s."},
{"t":"Se lo stipendio si misura in € e il tempo in ore, qual è l'unità di misura dello stipendio orario?","tipo":"fill","opts":["€/h","h/€","€·h"],"ok":"€/h","s":"Stipendio orario = stipendio ÷ tempo, quindi l'unità è €, l'unità del tempo, cioè €/h."},
{"t":"Se il prezzo della benzina è in € e il volume in litri, il prezzo al litro si misura in €/L.","ok":true,"s":"Prezzo al litro = prezzo ÷ volume, quindi l'unità è €/L."},
{"t":"La densità, definita come massa diviso volume, si misura in m³/kg.","ok":false,"s":"Al contrario: densità = massa ÷ volume, quindi si misura in kg/m³, non m³/kg."},
{"t":"Se il prezzo è in € e la massa in kg, il prezzo al chilo si misura in €/kg.","ok":true,"s":"Prezzo al chilo = prezzo ÷ massa, quindi l'unità è €/kg."},
{"t":"Se $x = y/z$ e sia $y$ che $z$ si misurano in kg, allora $x$ è un numero puro, cioè un numero senza unità.","ok":true,"s":"kg/kg = 1: le unità uguali al numeratore e al denominatore si semplificano, come nei numeri."}
]{% endcapture %}
{% include quiz.html domande=_q3 label_si="Un'unità di misura corretta" label_no="Un'unità di misura sbagliata" id="q-unita" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html titolo="Costruisci l'unità di misura" %}

Ora tocca a te: costruisci l'unità di misura cliccando sui tasti, uno alla volta.

{% capture _ub1 %}[
{"p":"Secondo te, che unità di misura avrebbe una quantità x definita come il prodotto di due lunghezze (come l'area)?","c":"m·m"},
{"p":"Secondo te, che unità di misura avrebbe una quantità x definita come il rapporto tra una lunghezza e una massa?","c":"m/kg"},
{"p":"Secondo te, che unità di misura avrebbe una quantità x definita come il prodotto di tre lunghezze (come il volume)?","c":"m·m·m"},
{"p":"Secondo te, che unità di misura avrebbe una quantità x definita come il rapporto tra una lunghezza e il prodotto di massa e tempo?","c":"m/(kg·s)"}
]{% endcapture %}
{% include unitbuild.html id="ub-lunghezza-massa" domande=_ub1 palette="m|kg|s|·|/|(|)" %}

{% include box-end.html %}

### Ipotizzare la formula a partire dall'unità di misura

Nella sezione precedente hai imparato a trovare l'unità di misura conoscendo la formula. Una cosa molto utile è anche fare il contrario: conoscendo solo l'unità di misura, proviamo adesso a **ipotizzare** come potrebbe essere fatta la formula.

{% include box-imp.html titolo="Ipotizzare la formula" %}
Se una grandezza si misura con un'unità del tipo $A/B$ (come nel caso di €/kg o fette/amico), è ragionevole ipotizzare che la sua formula sia data dal rapporto tra una grandezza misurata in $A$ e una misurata in $B$ (cioè il rapporto tra un prezzo e una massa o il rapporto tra un numero di fette e un numero di amici).
{% include box-end.html %}

{% include box-blue.html titolo="Esempio: La velocità" %}
Sappiamo che la velocità (simbolo $v$) si può misurare in km/h (chilometri orari). Dall'unità di misura vediamo quindi che a numeratore c'è una lunghezza (poiché si misura in km) e a denominatore un tempo (poiché si misura in ore). Possiamo quindi ipotizzare che la formula sia

$$v = \frac{\text{spazio}}{\text{tempo}}.$$


In effetti, la velocità ha proprio questa formula, come vedremo nel prossimo capitolo, quindi la nostra ipotesi è corretta.


{% include box-end.html %}
**Attenzione!** Il metodo appena descritto è un metodo molto utile, che però consente solo di fare ipotesi e non di determinare le formule con assoluta certezza. Infatti, formule diverse danno la stessa unità di misura. Ecco un esempio in cui ci si potrebbe sbagliare.

{% include box-blue.html titolo="Controesempio: L'accelerazione" %}
Consideriamo l'unità di misura dell'accelerazione (simbolo $a$), che corrisponde a m/s². Potremmo quindi pensare che a numeratore ci sia una lunghezza e a denominatore un tempo elevato alla seconda, cioè una cosa tipo

$$a = \frac{\text{spazio}}{\text{tempo}^2}.$$


In realtà, l'accelerazione non ha affatto questa formula, come vedremo nel prossimo capitolo. Mi interessa insomma che sappiate che questo metodo non può garantire che la risposta sia esatta, anche se è una tecnica molto utile.


{% include box-end.html %}



{% include box-ex.html titolo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: è un'ipotesi plausibile oppure no?

{% capture _q4 %}[
{"t":"L'unità abitanti/km² suggerisce che la grandezza sia definita come un'area divisa per un numero di abitanti.","ok":false,"s":"Al contrario: è un numero di abitanti diviso un'area (densità di popolazione)."},
{"t":"L'unità kg/m³ suggerisce che la grandezza sia definita come una massa divisa per un volume.","ok":true,"s":"Sì: è esattamente il caso della densità."},
{"t":"Data un'unità del tipo $A/B$, quella che abbiamo ipotizzato è l'unica formula possibile: non ci sono altre possibilità.","ok":false,"s":"No: dall'unità possiamo solo formulare un'ipotesi plausibile, non una certezza. Formule diverse potrebbero produrre la stessa unità."},
{"t":"L'unità pagine/giorno suggerisce che la grandezza sia definita come un numero di pagine lette diviso un numero di giorni.","ok":true,"s":"Sì: è un possibile ritmo di lettura."},
{"t":"L'unità km/L suggerisce che la grandezza sia definita come uno spazio percorso diviso un volume di carburante.","ok":true,"s":"Sì: è il consumo di un'automobile."}
]{% endcapture %}
{% include quiz.html domande=_q4 label_si="Un'ipotesi plausibile" label_no="Un'ipotesi non plausibile" id="q-ipotizza" senza_esempi=true %}

{% include box-end.html %}

# Invertire la formula
Torniamo a considerare il caso discusso precedentemente in cui alcuni amici devono dividere un certo numero di fette di pizza. Sai che ci sono 3 pizze, quindi $3\cdot 8=24$ fette di pizza. Sai che, dividendo in parti eque, a ciascuno spetteranno due fette di pizza. Come puoi calcolare il numero di persone presenti? Prima pensaci tu, poi guarda la soluzione qui sotto.

{% include spoiler.html %}
Sappiamo che il numero di fette a testa si può calcolare come

$$
\text{fette a testa} = \frac{\text{numero di fette totali}}{\text{numero di amici}}.
$$

Sappiamo anche che ci sono due fette a testa e 24 fette totali, quindi sostituendo questi valori nell'equazione, otteniamo

$$
2 = \frac{24}{\text{numero di amici}}.
$$

Ora questa è un'equazione con una sola incognita, cioè il numero di amici. Possiamo chiamarla, per brevità, $n$. In questo caso i numeri sono semplici e può essere intuito che la soluzione è $n=12$. Nel caso di numeri più difficili, si può comunque risolvere isolando il numero di amici all'interno dell'equazione. Per farlo, dobbiamo **moltiplicare** da entrambe le parti per il numero di amici, di modo che esso si semplifichi a destra e finisca al numeratore di sinistra:

$$
n \cdot 2 = \frac{24}{\cancel{n}}\cancel{n} \implies n \cdot 2 = 24
$$

A questo punto, per isolare il numero di amici a sinistra dobbiamo dividere da entrambe le parti per $2$:

$$
n\cdot \frac{\cancel 2 }{\cancel 2}= \frac{24}{2} \implies n = \frac {24} 2 \implies n = 12.
$$

{% include spoiler-end.html %}

Questo era un caso molto semplice di un problema che sarà molto importante per tutto il corso di Fisica, che chiamiamo <definizione>invertire le formule</definizione>. Siamo partiti dalla formula iniziale

$$\text{fette a testa} = \frac{\text{numero di fette totali}}{\text{numero di amici}}$$

in cui il "soggetto" era il numero di fette a testa, per arrivare a un'equazione in cui il soggetto è invece il numero di amici. Vediamo come si fa in generale, per una formula del tipo

$$x = \frac y z.$$

Prova tu: hai a disposizione alcune mosse (scambiare i membri, moltiplicare o dividere entrambi i membri per una delle tre variabili). Isola prima $y$, poi $z$, cercando di usare il minor numero di mosse possibile. Quando trovi la combinazione di mosse migliore, appuntalo sul tuo quaderno, scrivendolo in un luogo che tu possa consultare sempre!

{% include invert.html id="inv-y" variabili="x|y|z" sinistra="x" destra="y/z" obiettivo="y" %}

{% include invert.html id="inv-z" variabili="x|y|z" sinistra="x" destra="y/z" obiettivo="z" %}

{% include box-ex.html titolo="Verifica Subito! (lettere e simboli)" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q5 %}[
{"t":"Se $x = y/z$, allora $y = x/z$.","ok":false,"s":"Attenzione: si moltiplica per $z$, non si divide. La formula corretta è $y = x\\cdot z$."},
{"t":"Se $x = y/z$, allora $y = x\\cdot z$.","ok":true,"s":"Corretto: si scambiano i membri e poi si moltiplica per $z$."},
{"t":"Se $x = y/z$, allora $z = x/y$.","ok":false,"s":"Attenzione: la formula corretta è $z = y/x$, non $x/y$."},
{"t":"Se $x = y/z$, allora $z = x\\cdot y$.","ok":false,"s":"Non è un prodotto: isolando $z$ si ottiene $z = y/x$."},
{"t":"Se $x = y/z$, allora $z = y/x$.","ok":true,"s":"Corretto: si moltiplica per $z$ e poi si divide per $x$."}
]{% endcapture %}
{% include quiz.html domande=_q5 label_si="Un passaggio corretto" label_no="Un passaggio sbagliato" id="q-inv-simboli" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html titolo="Verifica Subito! (con i numeri)" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q6 %}[
{"t":"Se $x = 6$ e $z = 2$, allora $y = x/z = 3$.","ok":false,"s":"Errore comune: si divide invece di moltiplicare. In realtà $y = x\\cdot z = 6\\cdot 2 = 12$."},
{"t":"Se $x = 4$ e $z = 3$, allora $y = x\\cdot z = 12$.","ok":true,"s":"Corretto: $y = x\\cdot z = 4\\cdot 3 = 12$."},
{"t":"Se $x = 10$ e $y = 50$, allora $z = x/y = 0{,}2$.","ok":false,"s":"Errore comune: i due numeri sono invertiti. In realtà $z = y/x = 50/10 = 5$."},
{"t":"Se $x = 5$ e $y = 20$, allora $z = y/x = 4$.","ok":true,"s":"Corretto: $z = y/x = 20/5 = 4$."}
]{% endcapture %}
{% include quiz.html domande=_q6 label_si="Un calcolo corretto" label_no="Un calcolo sbagliato" id="q-inv-numeri" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html titolo="Un chilo di piume e un chilo di piombo" %}

Un indovinello: pesa più un chilo di piume o un chilo di piombo?

Naturalmente pesano **uguale**, perché sono entrambi un chilo! Tuttavia, un chilo di piombo avrà un volume molto piccolo, mentre un chilo di piume formerà un mucchio gigantesco. Calcoliamo esattamente i volumi!

Sappiamo che la densità è definita come $d = \dfrac{m}{V}$. Per calcolare un volume a partire dalla massa e dalla densità dobbiamo isolare $V$: prova tu, cercando di usare il minor numero di mosse possibile, e poi copia i passaggi sul quaderno, in un posto che tu possa consultare sempre.

{% include invert.html id="inv-densita" variabili="d|m|V" sinistra="d" destra="m/V" obiettivo="V" %}

Ora che hai la formula, usiamo questi dati:
- densità del piombo: $d_{\text{piombo}} \approx 11\,340\ \text{kg/m}^3$;
- densità delle piume (stimata): $d_{\text{piume}} \approx 50\ \text{kg/m}^3$.

Calcola il volume di $1$ kg di piombo e di $1$ kg di piume, usando la notazione scientifica dove utile.

{% include spoiler.html testo="Mostra la soluzione" %}
Dalla formula $d = m/V$, isolando $V$ (scambio i membri e poi moltiplico per $V$, poi divido per $d$):

$$V = \frac{m}{d}.$$

Per il piombo:

$$V_{\text{piombo}} = \frac{1}{11\,340} \approx 8{,}82\times 10^{-5}\ \text{m}^3,$$

cioè circa $88$ cm³ — un cubetto di lato poco più di $4$ cm.

Per le piume:

$$V_{\text{piume}} = \frac{1}{50} = 2\times 10^{-2}\ \text{m}^3 = 20\ \text{L},$$

cioè un volume più di $200$ volte più grande di quello del piombo, a parità di massa: ecco perché un chilo di piume sembra un mucchio enorme, mentre un chilo di piombo sta in una mano.
{% include spoiler-end.html %}

{% include box-end.html %}

# La variazione

Stamattina alle 7 il termometro segnava $8$ °C. Adesso, a mezzogiorno, segna $15$ °C. Di quanto è cambiata la temperatura?

Per rispondere basta sottrarre il valore di partenza da quello di arrivo: $15-8=7$, cioè $7$ °C. La temperatura è aumentata di $7$ °C. Questa operazione — sottrarre il valore *iniziale* da quello *finale* — è così comune in Fisica che ha un nome e un simbolo tutti suoi.

{% include box-imp.html titolo="Variazione di una grandezza" %}
La <definizione>variazione</definizione> di una grandezza $x$, indicata con $\Delta x$ (si legge "delta x", dove $\Delta$ è una lettera dell'alfabeto greco), è la differenza tra il suo valore finale e il suo valore iniziale:

$$\Delta x = x_f - x_i.$$

Se $x$ aumenta, $\Delta x$ è positivo. Se $x$ diminuisce, $\Delta x$ è negativo.
{% include box-end.html %}

{% include box-blue.html titolo="La temperatura durante la giornata" %}
Alle 7 il termometro segna $T_i = 8$ °C; a mezzogiorno segna $T_f=15$ °C. La variazione è

$$\Delta T = T_f - T_i = 15 - 8 = +7,$$

cioè $\Delta T = +7$ °C, positiva, perché la temperatura è **aumentata**.

Alla sera, però, il termometro scende di nuovo a $8$ °C. Prendendo ora come iniziale il valore di mezzogiorno ($T_i=15$ °C) e come finale quello della sera ($T_f=8$ °C),

$$\Delta T = T_f - T_i = 8 - 15 = -7,$$

cioè $\Delta T = -7$ °C, negativa, perché la temperatura è **diminuita**. Lo stesso simbolo $\Delta T$ descrive sia un aumento sia una diminuzione: è il segno a dircelo.
{% include box-end.html %}

{% include box-ex.html titolo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q7 %}[
{"t":"Se una grandezza diminuisce, la sua variazione $\\Delta x$ è positiva.","ok":false,"s":"No: se il valore finale è minore di quello iniziale, la differenza è negativa."},
{"t":"Se un serbatoio contiene 30 L d'acqua e viene svuotato fino a 10 L, la sua variazione è $\\Delta x = 10 - 30 = -20$ L.","ok":true,"s":"Corretto: valore finale (10) meno valore iniziale (30), negativa perché l'acqua è diminuita."},
{"t":"Se una grandezza aumenta, la sua variazione $\\Delta x$ è positiva.","ok":true,"s":"Sì: $\\Delta x$ = valore finale − valore iniziale, e se il valore finale è maggiore, la differenza è positiva."},
{"t":"$\\Delta x$ si calcola sempre come valore iniziale meno valore finale.","ok":false,"s":"Al contrario: si calcola come valore finale meno valore iniziale."},
{"t":"Se un conto in banca passa da 100 € a 80 €, la variazione è $\\Delta x = +20$ €.","ok":false,"s":"Errore di segno: $\\Delta x = 80 - 100 = -20$ €, negativa perché il saldo è diminuito."}
]{% endcapture %}
{% include quiz.html domande=_q7 label_si="Un calcolo corretto di Δx" label_no="Un calcolo sbagliato di Δx" id="q-variazione" senza_esempi=true %}

{% include box-end.html %}


## La variazione nel tempo

Un caso particolare di variazione, che useremo continuamente da qui in avanti, è la variazione del tempo, indicata con $\Delta t$. Rappresenta quanto tempo è trascorso tra un istante iniziale $t_i$ e un istante finale $t_f$, cioè la **durata** di un intervallo:

$$\Delta t = t_f - t_i.$$

{% include box-blue.html titolo="Quanti secondi dura il viaggio?" %}
Un treno parte dalla stazione alle 13:30 e arriva a destinazione alle 15:45. Quanti secondi sono trascorsi?

Contiamo prima le ore e i minuti: dalle 13:30 alle 15:45 passano $2$ ore e $15$ minuti, cioè

$$2\times (60 + 15 )= 135\ \text{min}.$$

Convertendo in secondi,

$$\Delta t = 135\times 60 = 8100\ \text{s} = 8{,}1\times 10^3\ \text{s}.$$
{% include box-end.html %}

A differenza di una variazione qualsiasi, $\Delta t$ nelle situazioni di tutti i giorni è sempre **positivo**: il tempo scorre sempre in avanti, quindi l'istante finale che scegliamo è sempre successivo a quello iniziale.

Quando diciamo che una grandezza $x$ **varia nel tempo**, però, intendiamo qualcosa di più preciso: non ci interessa solo di quanto è cambiata ($\Delta x$), né solo quanto tempo è passato ($\Delta t$), ma quanto è cambiata **per ogni unità di tempo trascorsa**, cioè il rapporto

$$\frac{\Delta x}{\Delta t}.$$

Hai già visto questo tipo di rapporto: è proprio una **grandezza unitaria**, come quelle incontrate all'inizio del capitolo — solo che qui il numeratore è **una variazione nel tempo**.

{% include box-imp.html titolo="Variazione nel tempo" %}
La <definizione>variazione nel tempo</definizione> di una grandezza $x$ si esprime con il simbolo $\text{var}_{x,t}$ che corrisponde alla grandezza unitaria

$$
\text{var}_{x,t} = \frac{\Delta x}{\Delta t}.
$$

L'unità di misura di $\text{var}_{x,t}$ corrisponde all'unità di misura di $x$ divisa per l'unità di misura di $t$ (secondi, minuti, ore, anni, millisecondi, etc.).
{% include box-end.html %}

{% include box-blue.html titolo="Quanto aumenta la temperatura ogni ora?" %}
Nell'esempio di prima, tra le 7 e mezzogiorno la temperatura è variata di $\Delta T = +7$ °C. Tra le due letture sono trascorse $\Delta t = 5\,\text{h}$. La variazione della temperatura nel tempo è quindi

$$\text{var}_{T,t}=\frac{\Delta T}{\Delta t} = \frac{7}{5} = 1{,}4\ \text{°C/h},$$

cioè la temperatura è aumentata, in media, di $1{,}4$ °C ogni ora.
{% include box-end.html %}

{% include box-ex.html titolo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q9 %}[
{"t":"$\\text{var}_{x,t}$ si misura sempre in secondi.","ok":false,"s":"No: si misura nell'unità di $x$ divisa per l'unità di tempo scelta (°C/h, L/min, cm/settimana, ecc.), non necessariamente in secondi."},
{"t":"Se l'altezza $h$ di una pianta cresce da $20$ cm a $35$ cm in $3$ settimane, la sua variazione nel tempo è $\\text{var}_{h,t}=(35-20)/3=5$ cm/settimana.","ok":true,"s":"Corretto: $\\Delta h = 15$ cm, $\\Delta t = 3$ settimane, quindi $\\text{var}_{h,t}=5$ cm/settimana."},
{"t":"Se $x$ diminuisce nel tempo, $\\text{var}_{x,t}$ è negativa.","ok":true,"s":"Esatto: $\\Delta x$ è negativo mentre $\\Delta t$ è positivo, quindi il rapporto è negativo."},
{"t":"$\\text{var}_{x,t}$ è semplicemente un altro nome per $\\Delta t$.","ok":false,"s":"No: $\\text{var}_{x,t}$ è il rapporto $\\Delta x/\\Delta t$, non $\\Delta t$ da solo."}
]{% endcapture %}
{% include quiz.html domande=_q9 label_si="Un calcolo corretto" label_no="Un calcolo sbagliato" id="q-var-tempo" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html titolo="Un serbatoio che si svuota" %}
Un serbatoio contiene $V=80$ L d'acqua. Dopo $4$ minuti ne contiene $52$ L. Calcola $\text{var}_{V,t}$ per il livello dell'acqua.

{% include spoiler.html testo="Mostra la soluzione" %}
$$\Delta V = 52 - 80 = -28\ \text{L}, \qquad \Delta t = 4\ \text{min}.$$

$$\text{var}_{V,t} = \frac{\Delta V}{\Delta t} = \frac{-28}{4} = -7\ \text{L/min},$$

cioè il serbatoio perde in media $7$ litri ogni minuto.
{% include spoiler-end.html %}
{% include box-end.html %}

{% include box-ex.html titolo="Invertire la formula della variazione nel tempo" %}

Sai già come si fa: la formula $\text{var}_{x,t}=\dfrac{\Delta x}{\Delta t}$ ha esattamente la stessa forma di $x=y/z$. Prova a isolare prima $\Delta x$, poi $\Delta t$, usando il minor numero di mosse possibile.

{% include invert.html id="inv-var-dx" variabili="v|Dx|Dt" etichette="\text{var}_{x,t}|\Delta x|\Delta t" sinistra="v" destra="Dx/Dt" obiettivo="Dx" %}

{% include invert.html id="inv-var-dt" variabili="v|Dx|Dt" etichette="\text{var}_{x,t}|\Delta x|\Delta t" sinistra="v" destra="Dx/Dt" obiettivo="Dt" %}

{% include box-end.html %}

## La variazione nello spazio

Un altro caso particolare, altrettanto importante, è la variazione della posizione di un oggetto lungo una retta. La indichiamo con $\Delta s$:

$$\Delta s = s_f - s_i.$$

{% include box-ex.html titolo="Esercizio — L'ape sul righello" %}

Un'ape cammina su un righello, dal centimetro 3 al centimetro 7. Guarda l'animazione, poi calcola $\Delta s$.

<div style="margin:0.75rem 0 0;background:#f0e8dc;border-radius:8px;padding:0.75rem 0.85rem 0.6rem;border:1px solid #c8b898;">
<canvas id="cv-bee" width="520" height="170" style="display:block;max-width:100%;border-radius:5px;"></canvas>
<p id="bee-status" style="margin:0.6rem 0 0;font-size:14px;font-family:Georgia,serif;color:#3a2c10;min-height:1.3em;"></p>
<div id="bee-controls" style="margin-top:0.5rem;"></div>
</div>
<script>
(function(){
var cv=document.getElementById('cv-bee'),ctx=cv.getContext('2d');
var W=520,H=170;
var CM0=40,PXCM=44,RY=70,RH=40;
var POS=3,animating=false;

function drawBg(){
  ctx.clearRect(0,0,W,H);
  var g=ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'#faf6ec');g.addColorStop(1,'#f0e8d8');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
}
function drawRuler(){
  var g=ctx.createLinearGradient(0,RY,0,RY+RH);
  g.addColorStop(0,'#fdfaf3');g.addColorStop(1,'#efe8d6');
  ctx.fillStyle=g;
  ctx.beginPath();ctx.roundRect(CM0-10,RY,10*PXCM+20,RH,6);ctx.fill();
  ctx.strokeStyle='#c9bfa0';ctx.lineWidth=1;ctx.stroke();
  for(var cm=0;cm<=10;cm++){
    var x=CM0+cm*PXCM;
    ctx.strokeStyle='#3a3226';ctx.lineWidth=1.2;
    ctx.beginPath();ctx.moveTo(x,RY);ctx.lineTo(x,RY+(cm%5===0?20:13));ctx.stroke();
    ctx.fillStyle='#3a3226';ctx.font='11px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(cm,x,RY+RH-3);
  }
  ctx.textAlign='left';
}
function drawBee(xcm){
  var x=CM0+xcm*PXCM,y=RY-4;
  ctx.save();ctx.translate(x,y);
  ctx.fillStyle='rgba(0,0,0,0.15)';
  ctx.beginPath();ctx.ellipse(0,16,15,4,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(228,235,240,0.6)';ctx.strokeStyle='rgba(140,150,162,0.5)';ctx.lineWidth=0.6;
  ctx.beginPath();ctx.ellipse(-2,-13,10,6,-0.35,0,Math.PI*2);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(6,-13,10,6,0.35,0,Math.PI*2);ctx.fill();ctx.stroke();
  var bg=ctx.createLinearGradient(-13,0,13,0);
  bg.addColorStop(0,'#3a2810');bg.addColorStop(0.3,'#96692f');bg.addColorStop(0.55,'#2c1e0f');
  bg.addColorStop(0.8,'#96692f');bg.addColorStop(1,'#2c1e0f');
  ctx.beginPath();ctx.ellipse(-1,3,13,11,0,0,Math.PI*2);ctx.fillStyle=bg;ctx.fill();
  ctx.strokeStyle='rgba(55,38,18,0.35)';ctx.lineWidth=1.4;
  for(var a=0.2;a<Math.PI*2;a+=0.55){
    var ex=Math.cos(a)*13,ey=Math.sin(a)*11+3;
    ctx.beginPath();ctx.moveTo(ex*0.88-1,ey*0.88);ctx.lineTo(ex*1.05-1,ey*1.05);ctx.stroke();
  }
  var hg=ctx.createRadialGradient(9,-9,1,10,-8,8);
  hg.addColorStop(0,'#6b4420');hg.addColorStop(1,'#2c1c0c');
  ctx.beginPath();ctx.arc(10,-8,7.5,0,Math.PI*2);ctx.fillStyle=hg;ctx.fill();
  ctx.strokeStyle='#1c1208';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(9,-14);ctx.quadraticCurveTo(11,-21,14,-23);ctx.stroke();
  ctx.beginPath();ctx.moveTo(12,-13);ctx.quadraticCurveTo(16,-19,19,-19);ctx.stroke();
  ctx.fillStyle='#1c1208';ctx.beginPath();ctx.arc(14,-23,1.1,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(19,-19,1.1,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#fff';
  ctx.beginPath();ctx.arc(8.5,-9,2.6,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(13,-9,2.6,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#241608';
  ctx.beginPath();ctx.arc(9,-8.6,1.4,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(13.5,-8.6,1.4,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.9)';
  ctx.beginPath();ctx.arc(9.4,-9.2,0.5,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(13.9,-9.2,0.5,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#1c1208';ctx.lineWidth=1;
  for(var lx=-6;lx<=4;lx+=5){
    ctx.beginPath();ctx.moveTo(lx,11);ctx.lineTo(lx-1,17);ctx.stroke();
  }
  ctx.restore();
}
function render(){
  drawBg();drawRuler();drawBee(POS);
}
function animateTo(target,cb){
  animating=true;
  var start=POS,t0=null,dur=900;
  function step(now){
    if(!t0)t0=now;
    var p=Math.min(1,(now-t0)/dur);
    var ease=p<0.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
    POS=start+(target-start)*ease;
    render();
    if(p<1)requestAnimationFrame(step);else{POS=target;animating=false;render();if(cb)cb();}
  }
  requestAnimationFrame(step);
}
function fmt(v){return (Math.abs(v-Math.round(v))<1e-9)?String(Math.round(v)):v.toFixed(1).replace('.',',');}
function normNum(s){return parseFloat((s||'').replace(',','.').replace('+',''));}

var status=document.getElementById('bee-status'),ctrl=document.getElementById('bee-controls');
function phase0(){
  status.textContent="L'ape si trova al centimetro "+fmt(POS)+".";
  ctrl.innerHTML='<button id="bee-go1" style="padding:0.4rem 1rem;background:#8b5e30;color:#fff;border:none;border-radius:6px;cursor:pointer;font-family:Georgia,serif;font-size:14px;">Fai camminare l\'ape dal cm 3 al cm 7 →</button>';
  document.getElementById('bee-go1').addEventListener('click',function(){
    status.textContent="L'ape sta camminando...";
    animateTo(7,function(){status.textContent="L'ape ora si trova al centimetro 7.";askQ(3,7,'q1');});
  });
}
function askQ(si,sf,qid){
  ctrl.innerHTML='<span style="font-family:Georgia,serif;font-size:14px;">Quanto vale $\\Delta s$ (in cm)?</span> '+
    '<input id="bee-inp-'+qid+'" type="text" style="width:70px;padding:0.25rem 0.4rem;border:1px solid #aaa;border-radius:4px;font-size:14px;margin-left:0.4rem;">'+
    '<button id="bee-chk-'+qid+'" style="padding:0.3rem 0.9rem;background:#1a4d6a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;margin-left:0.4rem;">Verifica</button>'+
    '<span id="bee-fb-'+qid+'" style="display:block;margin-top:0.4rem;font-size:13px;font-family:Georgia,serif;"></span>';
  if(window.MathJax)MathJax.typesetPromise([ctrl]);
  var correct=sf-si;
  document.getElementById('bee-chk-'+qid).addEventListener('click',function(){
    var v=normNum(document.getElementById('bee-inp-'+qid).value);
    var fb=document.getElementById('bee-fb-'+qid);
    if(isNaN(v)){fb.style.color='#b91c1c';fb.textContent='Inserisci un numero.';return;}
    if(Math.abs(v-correct)<0.05){
      fb.style.color='#15803d';fb.textContent='✓ Esatto! Δs = '+fmt(sf)+' − '+fmt(si)+' = '+(correct>0?'+':'')+fmt(correct)+' cm.';
      confettiBee();
      setTimeout(function(){qid==='q1'?phase1(sf):phaseEnd();},900);
    } else {
      fb.style.color='#b91c1c';fb.textContent='Non è corretto: Δs = posizione finale − posizione iniziale. Riprova.';
    }
  });
}
function phase1(currentPos){
  ctrl.innerHTML='<button id="bee-go2" style="padding:0.4rem 1rem;background:#8b5e30;color:#fff;border:none;border-radius:6px;cursor:pointer;font-family:Georgia,serif;font-size:14px;">Fai camminare l\'ape all\'indietro ←</button>';
  document.getElementById('bee-go2').addEventListener('click',function(){
    status.textContent="L'ape sta camminando all'indietro...";
    var target=currentPos-1.5;
    animateTo(target,function(){status.textContent="L'ape ora si trova al centimetro "+fmt(target)+".";askQ(currentPos,target,'q2');});
  });
}
function phaseEnd(){
  ctrl.innerHTML='<span style="font-family:Georgia,serif;font-size:14px;color:#15803d;">🎉 Esercizio completato!</span>';
}
function confettiBee(){
  var canvas=document.createElement('canvas');
  canvas.style.position='fixed';canvas.style.top=0;canvas.style.left=0;canvas.style.pointerEvents='none';canvas.style.zIndex=9999;
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  document.body.appendChild(canvas);
  var cctx=canvas.getContext('2d');
  var r=cv.getBoundingClientRect(),ccx=r.left+r.width/2,ccy=r.top+r.height*0.4;
  var cols=['#0891b2','#22d3ee','#059669','#d97706','#ec4899','#a78bfa','#fbbf24'];
  var ps=[];
  for(var k=0;k<55;k++){
    ps.push({x:ccx+(Math.random()-.5)*100,y:ccy,vx:(Math.random()-.5)*11,vy:-(Math.random()*13+5),
      w:Math.random()*11+5,h:Math.random()*6+3,col:cols[k%cols.length],
      rot:Math.random()*Math.PI*2,rv:(Math.random()-.5)*.32,a:1});
  }
  (function frame(){
    cctx.clearRect(0,0,canvas.width,canvas.height);var alive=false;
    ps.forEach(function(p){
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.38;p.rot+=p.rv;p.a-=0.017;
      if(p.a<=0)return;alive=true;
      cctx.save();cctx.globalAlpha=p.a;cctx.translate(p.x,p.y);cctx.rotate(p.rot);
      cctx.fillStyle=p.col;cctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);cctx.restore();
    });
    if(alive)requestAnimationFrame(frame);else document.body.removeChild(canvas);
  })();
}
render();
phase0();
})();
</script>

A differenza di $\Delta t$, la variazione nello spazio **può essere negativa**: il segno ci dice in quale delle due direzioni ci si è mossi.

{% include box-end.html %}

Allo stesso modo di prima, quando diciamo che una grandezza $x$ **varia nello spazio**, intendiamo il rapporto tra quanto $x$ è cambiata e lo spazio percorso nel farlo:

$$\frac{\Delta x}{\Delta s}.$$

{% include box-imp.html titolo="Variazione nello spazio" %}
La <definizione>variazione nello spazio</definizione> di una grandezza $x$ si esprime con il simbolo $\text{var}_{x,s}$ che corrisponde alla grandezza unitaria

$$
\text{var}_{x,s} = \frac{\Delta x}{\Delta s}.
$$

L'unità di misura di $\text{var}_{x,s}$ corrisponde all'unità di misura di $x$ divisa per l'unità di misura di $s$ (metri, chilometri, centimetri, ecc.).
{% include box-end.html %}

{% include box-blue.html titolo="Quanto cambia la temperatura salendo in montagna?" %}
Un alpinista parte da un rifugio alla quota $s_i = 1500\,\text{m}$, dove la temperatura è $T_i=12$ °C, e sale fino a un rifugio a quota $s_f = 3500\,\text{m}$, dove la temperatura è $T_f=-1$ °C. Il dislivello percorso è

$$\Delta s = s_f - s_i = 3500 - 1500 = 2000\,\text{m},$$

mentre la variazione di temperatura è

$$\Delta T = T_f - T_i = -1 - 12 = -13,$$

cioè $\Delta T=-13$ °C. La variazione della temperatura nello spazio è quindi

$$\text{var}_{T,s}=\frac{\Delta T}{\Delta s} = \frac{-13}{2000} = -0{,}0065\ \text{°C/m},$$

cioè, ogni $1000$ m di dislivello, la temperatura scende in media di circa $6{,}5$ °C: ecco perché in cima alle montagne fa più freddo!
{% include box-end.html %}

{% include box-ex.html titolo="Verifica Subito!" %}

Per ciascuna delle seguenti, decidi: vero o falso?

{% capture _q8 %}[
{"t":"Se un ascensore parte dal piano $s=12$ m e si ferma al piano $s=4$ m, allora $\\Delta s = +8$ m.","ok":false,"s":"$\\Delta s = 4 - 12 = -8$ m: negativo, perché l'ascensore è sceso."},
{"t":"$\\text{var}_{x,s}$ è semplicemente un altro nome per $\\Delta s$.","ok":false,"s":"No: $\\text{var}_{x,s}$ è il rapporto $\\Delta x/\\Delta s$, non $\\Delta s$ da solo."},
{"t":"Un valore negativo di $\\Delta s$ significa che l'oggetto si è mosso nella direzione opposta a quella scelta come positiva.","ok":true,"s":"Esatto: il segno di $\\Delta s$ indica la direzione del movimento."},
{"t":"Se la densità dell'aria diminuisce salendo di quota, allora $\\text{var}_{d,s}$ per la densità è negativa.","ok":true,"s":"Esatto: $\\Delta d$ (la densità) è negativo mentre $\\Delta s$ (la quota) è positivo, quindi il rapporto è negativo."}
]{% endcapture %}
{% include quiz.html domande=_q8 label_si="Un calcolo corretto" label_no="Un calcolo sbagliato" id="q-var-spazio" senza_esempi=true %}

{% include box-end.html %}

{% include box-ex.html titolo="La densità dell'aria in quota" %}
La densità $d$ dell'aria diminuisce con l'altitudine. Al livello del mare vale circa $1{,}225\ \text{kg/m}^3$; a $5000$ m di quota vale circa $0{,}74\ \text{kg/m}^3$. Calcola $\text{var}_{d,s}$ per la densità dell'aria.

{% include spoiler.html testo="Mostra la soluzione" %}
$$\Delta d = 0{,}74 - 1{,}225 = -0{,}485\ \text{kg/m}^3, \qquad \Delta s = 5000\ \text{m}.$$

$$\text{var}_{d,s} = \frac{\Delta d}{\Delta s} = \frac{-0{,}485}{5000} \approx -9{,}7\times 10^{-5}\ \text{kg/m}^3\text{ per metro},$$

cioè la densità dell'aria scende, in media, di circa $9{,}7\times 10^{-5}\ \text{kg/m}^3$ per ogni metro di quota guadagnato.
{% include spoiler-end.html %}
{% include box-end.html %}

{% include box-ex.html titolo="Invertire la formula della variazione nello spazio" %}

Anche qui, $\text{var}_{x,s}=\dfrac{\Delta x}{\Delta s}$ ha la stessa forma di $x=y/z$. Isola prima $\Delta x$, poi $\Delta s$, con il minor numero di mosse possibile. Quando hai trovato la combinazione di mosse migliore possibile, scrivila su un quaderno, in un posto dove tu possa tornare a vederlo quando ti serve.

{% include invert.html id="inv-vars-dx" variabili="v|Dx|Ds" etichette="\text{var}_{x,s}|\Delta x|\Delta s" sinistra="v" destra="Dx/Ds" obiettivo="Dx" %}

{% include invert.html id="inv-vars-ds" variabili="v|Dx|Ds" etichette="\text{var}_{x,s}|\Delta x|\Delta s" sinistra="v" destra="Dx/Ds" obiettivo="Ds" %}

{% include box-end.html %}

{% include box-ex.html titolo="La pendenza di una strada" %}

<div style="margin:0.5rem 0 1rem;background:#eaf4fb;border-radius:8px;padding:0.75rem 0.85rem 0.6rem;border:1px solid #bcd8ea;text-align:center;">
<canvas id="cv-slope" width="440" height="220" style="display:block;max-width:100%;margin:0 auto;border-radius:5px;"></canvas>
</div>
<script>
(function(){
var cv=document.getElementById('cv-slope'),ctx=cv.getContext('2d');
var W=440,H=220;
var BX=55,BY=175,TX=340,TY=55;

ctx.clearRect(0,0,W,H);
var sky=ctx.createLinearGradient(0,0,0,H);
sky.addColorStop(0,'#dff0fb');sky.addColorStop(1,'#f3fbf0');
ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);

ctx.fillStyle='#cdeccb';
ctx.beginPath();ctx.moveTo(0,BY);ctx.lineTo(BX,BY);ctx.lineTo(TX,TY);ctx.lineTo(W,TY-20);ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();ctx.fill();

ctx.strokeStyle='rgba(90,110,90,0.55)';ctx.setLineDash([5,4]);ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(BX,BY);ctx.lineTo(TX,BY);ctx.stroke();
ctx.beginPath();ctx.moveTo(TX,BY);ctx.lineTo(TX,TY);ctx.stroke();
ctx.setLineDash([]);

var rg=ctx.createLinearGradient(BX,BY,TX,TY);
rg.addColorStop(0,'#8a8f95');rg.addColorStop(1,'#5c6166');
ctx.strokeStyle=rg;ctx.lineWidth=14;ctx.lineCap='round';
ctx.beginPath();ctx.moveTo(BX,BY);ctx.lineTo(TX,TY);ctx.stroke();
ctx.strokeStyle='#f4d35e';ctx.lineWidth=2;ctx.setLineDash([10,8]);
ctx.beginPath();ctx.moveTo(BX,BY);ctx.lineTo(TX,TY);ctx.stroke();
ctx.setLineDash([]);

ctx.fillStyle='#3a4a3a';ctx.font='bold 13px Georgia,serif';ctx.textAlign='center';
ctx.fillText('Δs',(BX+TX)/2,BY+20);
ctx.save();ctx.translate(TX+22,(BY+TY)/2);ctx.rotate(-Math.PI/2);
ctx.fillText('Δh',0,0);
ctx.restore();

function angleMark(){
  ctx.strokeStyle='#5c6166';ctx.lineWidth=1.3;
  ctx.beginPath();ctx.arc(BX,BY,26,-Math.atan2(BY-TY,TX-BX),0);ctx.stroke();
}
angleMark();

ctx.fillStyle='#6b5530';ctx.textAlign='left';
ctx.font='13px Georgia,serif';
ctx.fillText('pendenza = ',60,25);
var w1=ctx.measureText('pendenza = ').width;
ctx.font='italic 13px Georgia,serif';
ctx.fillText('var',60+w1,25);
var w2=ctx.measureText('var').width;
ctx.font='italic 9px Georgia,serif';
ctx.fillText('h,s',60+w1+w2,29);
var w3=ctx.measureText('h,s').width;
ctx.font='13px Georgia,serif';
ctx.fillText(' = Δh / Δs',60+w1+w2+w3,25);
 })();
</script>

Una strada in salita ha pendenza $\text{var}_{h,s} = 0{,}08$, dove $h$ è la quota: significa che l'altezza cresce di $0{,}08$ m per ogni metro percorso lungo la strada. Se percorri $\Delta s = 250$ m lungo la strada, di quanto sale la quota $\Delta h$?

{% include spoiler.html testo="Mostra la soluzione" %}
Dalla formula $\text{var}_{h,s}=\dfrac{\Delta h}{\Delta s}$, isolando $\Delta h$ (moltiplico entrambi i membri per $\Delta s$):

$$\Delta h = \text{var}_{h,s}\times \Delta s = 0{,}08\times 250 = 20\ \text{m}.$$
{% include spoiler-end.html %}

Un'altra strada scende con pendenza $\text{var}_{h,s} = -0{,}15$. Se la quota scende di $\Delta h = -30$ m, quanto tratto $\Delta s$ hai percorso?

{% include spoiler.html testo="Mostra la soluzione" %}
Dalla formula $\text{var}_{h,s}=\dfrac{\Delta h}{\Delta s}$, isolando $\Delta s$ (divido entrambi i membri per $\text{var}_{h,s}$):

$$\Delta s = \frac{\Delta h}{\text{var}_{h,s}} = \frac{-30}{-0{,}15} = 200\ \text{m}.$$
{% include spoiler-end.html %}

{% include box-end.html %}

# Esercizi di riepilogo


Includi un esercizio con due stelline in cui dici che a Tokyo c'è x abitanti per m², mentre a Pechino ci sono y abitanti per km². In quale delle due città ci sono più abitanti per km²?

 