---
layout: capitolo
title: "La Misurazione"
corso: fisica-3b
corso_titolo: "Fisica 3ª B"
materia: fisica
classe: "3B"
numero: 1
---

<cit autore="Max Planck">La meraviglia per i miracoli della Natura è all'origine di ogni pensiero scientifico.</cit> 

Una delle cose più meravigliose dell'Universo è la sua immensità. L'infinita grandezza della galassia che ci contiene e l'infinita piccolezza degli atomi di cui siamo composti. Noi uomini siamo sospesi a metà tra questi due infiniti, e questo è un fatto che non cesserà mai di meravigliarci.



{% capture _system %}Sei il Prof. Bergadano, un professore di Fisica appassionato che insegna in un Liceo Linguistico a Torino. Stai parlando con uno studente di 15-16 anni.

Lo studente ti scrive cosa lo fa sentire infinitamente piccolo, o cosa trova meravigliosamente enorme. Il tuo compito è guidarlo a scoprire il vero ordine di grandezza di quella cosa attraverso una conversazione socratica:

1. Accogli la sua risposta con calore.
2. Fai UNA domanda concreta sulla dimensione o quantità — invitalo a fare una stima numerica specifica. Non "quant'è grande?" ma per esempio "quanti chilometri pensi che misuri?" oppure "quanti granelli pensi che ci siano in un cucchiaio di sabbia?". Un elemento di quella cosa grande che sia il più possibile facile da stimare.
3. Quando lo studente risponde, correggi o conferma la sua stima con il vero valore numerico, poi poni UN'altra domanda che avvicina alla scoperta del numero finale.
4. Continua per 2–4 scambi, guidando lo studente verso l'ordine di grandezza reale.
5. Concludi con una frase di meraviglia che collega quel numero a qualcosa di concreto e sorprendente.

Scrivi sempre in italiano. Tono caldo, curioso, incoraggiante. Risposte brevi (2–4 frasi per turno). Prosa naturale — niente elenchi puntati. Se lo studente scrive qualcosa di non misurabile, aiutalo gentilmente a trovarne un aspetto misurabile.{% endcapture %}
{% include gemini-chat.html
   system=_system
   domanda="<em>Cerca di ricordare una volta in cui hai avvertito la sensazione di essere piccolissimo in confronto a ciò che avevi di fronte. Cos'era</em>?"
   hint="Se non ti ricordi di aver provato questa sensazione, prova a immaginarla."
%}

# Che cosa significa _misurare_?

«Misurare» significa studiare una *caratteristica* di un oggetto ed associare ad essa *un numero*. Descrivere il mondo con i numeri, significa scegliere <u>di utilizzare il linguaggio della Matematica</u>. Ecco perché la Fisica è fatta di equazioni. Naturalmente, non tutto si può esprimere con i numeri. La Fisica si limita dunque a descrivere solo le caratteristiche misurabili di un oggetto, che si chiamano <definizione>grandezze fisiche</definizione>.

{% include box-ex.html titolo="Verifica Subito!" %}

Per ogni caratteristica, decidi: è una **grandezza fisica** (le si può associare un numero) oppure no?

{% capture _q %}[
{"t":"L'altezza di un tavolo","ok":true,"s":"Si misura in metri — è una grandezza fisica."},
{"t":"La massa di un tavolo","ok":true,"s":"Si misura in chilogrammi — è una grandezza fisica."},
{"t":"La comodità del tavolo","ok":false,"s":"È soggettiva: non le si può associare un numero universale."},
{"t":"La difficoltà della Fisica","ok":false,"s":"Cambia da persona a persona — non è misurabile."},
{"t":"Il numero di formule della Fisica","ok":true,"s":"Si può contare: un numero è già una misura."},
{"t":"L'intensità luminosa di una lampadina","ok":true,"s":"Si misura in candele (cd) — è una delle 7 grandezze fondamentali!"},
{"t":"L'importanza storica di un avvenimento","ok":false,"s":"Non sarebbe possibile esprimerla tramite un numero, quindi non è una grandezza fisica."},
{"t":"L'intensità di un rumore o di un suono","ok":true,"s":"Si misura in decibel (dB) — è una grandezza fisica."}
]{% endcapture %}
{% include quiz.html domande=_q label_si="Una grandezza fisica" label_no="Non una grandezza fisica" %}

{% include box-end.html %}
{% include fill-def.html prompt='Prova a formulare una definizione di grandezza fisica, completando la frase: "Una grandezza fisica è…"' id="fill-gf" %}
## Come si misura?
La misurazione è un'operazione che consiste nel confrontare l'oggetto che si desidera misurare con un oggetto di riferimento, il quale è chiamato <definizione>campione</definizione>. Ad esempio, qui di seguito puoi misurare il lato lungo della lavagna con una biro o con un cancellino
<div style="margin:1.5rem 0;background:#f0e8dc;border-radius:8px;padding:1rem 1rem 0.8rem;border:1px solid #c8b898;">
<p style="margin:0 0 0.6rem;font-size:14px;font-family:Georgia,serif;"><strong>Misura il lato lungo della lavagna</strong></p>
<div style="margin-bottom:0.6rem;display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
  <span style="font-size:13px;color:#6b4e30;font-family:Georgia,serif;">Strumento:</span>
  <button onclick="simLav.setTool('c')" style="padding:0.3rem 0.9rem;background:#1a3d8a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;font-family:Georgia,serif;">Cancellino</button>
  <button onclick="simLav.setTool('b')" style="padding:0.3rem 0.9rem;background:#1a2d6a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;font-family:Georgia,serif;">Biro</button>
  <button onclick="simLav.reset()" style="padding:0.3rem 0.9rem;background:#d6c9b4;border:1px solid #b0a080;border-radius:4px;cursor:pointer;font-size:13px;font-family:Georgia,serif;">&#8635; Ricomincia</button>
</div>
<canvas id="cv-lav" width="530" height="270" style="display:block;max-width:100%;border-radius:5px;cursor:grab;touch-action:none;"></canvas>
<div style="margin-top:0.7rem;display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
  <label style="font-size:14px;font-family:Georgia,serif;">Quante volte sta nel lato lungo?</label>
  <input id="inp-lav" type="number" min="0" max="30" style="width:60px;padding:0.2rem 0.4rem;border:1px solid #aaa;border-radius:4px;font-size:14px;">
  <button onclick="simLav.verifica()" style="padding:0.3rem 0.9rem;background:#1a4d6a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;font-family:Georgia,serif;">Verifica</button>
</div>
<p id="fb-lav" style="margin:0.5rem 0 0;font-size:14px;font-family:Georgia,serif;min-height:1.2em;"></p>
</div>
<script>
var simLav=(function(){
var cv=document.getElementById('cv-lav'),ctx=cv.getContext('2d');
var W=530,H=270,BX=45,BY=45,BW=410,BH=128;
var TOOLS={
  c:{name:'cancellino',tw:44,th:22,realStr:'9.3',accept:[9,10]},
  b:{name:'biro',tw:56,th:9,realStr:'7.3',accept:[7,8]}
};
var tool='c',markPos=[],drag=false,dx=0,dy=0,HX=265,HY=232;
function T(){return TOOLS[tool];}
function drawBg(){
  var g=ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,'#f8f2e8');g.addColorStop(1,'#ede5d8');
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
}
function drawBoard(){
  ctx.fillStyle='rgba(0,0,0,0.1)';ctx.fillRect(BX-6,BY-3,BW+20,BH+20);
  var fg=ctx.createLinearGradient(BX-10,BY-10,BX-10,BY+BH+10);
  fg.addColorStop(0,'#a06828');fg.addColorStop(0.5,'#8b4513');fg.addColorStop(1,'#6b3010');
  ctx.fillStyle=fg;ctx.beginPath();ctx.roundRect(BX-10,BY-10,BW+20,BH+20,3);ctx.fill();
  ctx.strokeStyle='rgba(200,140,70,0.35)';ctx.lineWidth=1;
  ctx.beginPath();ctx.roundRect(BX-10,BY-10,BW+20,BH+20,3);ctx.stroke();
  var sg=ctx.createLinearGradient(0,BY,0,BY+BH);
  sg.addColorStop(0,'#1e4428');sg.addColorStop(1,'#122a18');
  ctx.fillStyle=sg;ctx.fillRect(BX,BY,BW,BH);
  ctx.fillStyle='rgba(255,255,255,0.035)';ctx.fillRect(BX,BY,BW,BH*0.18);
  ctx.strokeStyle='rgba(255,255,200,0.3)';ctx.lineWidth=1.5;ctx.setLineDash([]);
  ctx.beginPath();ctx.moveTo(BX,BY+5);ctx.lineTo(BX,BY+BH-5);ctx.stroke();
}
function drawMarks(){
  ctx.save();ctx.beginPath();ctx.rect(BX,BY,BW,BH);ctx.clip();
  for(var i=0;i<markPos.length;i++){
    ctx.strokeStyle='rgba(245,242,170,0.6)';ctx.lineWidth=1.2;ctx.setLineDash([2,4]);
    ctx.beginPath();ctx.moveTo(markPos[i],BY+8);ctx.lineTo(markPos[i],BY+BH-8);ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.restore();
}
function drawEraser(cx,cy){
  var w=44,h=22,d=6;
  ctx.save();ctx.translate(cx,cy);
  ctx.fillStyle='rgba(0,0,0,0.14)';ctx.fillRect(-w/2+3,h/2,w,5);
  var tg=ctx.createLinearGradient(0,-h/2-d,0,-h/2);
  tg.addColorStop(0,'#d8ecf8');tg.addColorStop(1,'#bcd4ea');
  ctx.fillStyle=tg;ctx.strokeStyle='#88aabb';ctx.lineWidth=0.7;
  ctx.beginPath();ctx.moveTo(-w/2,-h/2);ctx.lineTo(w/2,-h/2);ctx.lineTo(w/2-d,-h/2-d);ctx.lineTo(-w/2+d,-h/2-d);ctx.closePath();ctx.fill();ctx.stroke();
  var sg=ctx.createLinearGradient(w/2,0,w/2-d,0);
  sg.addColorStop(0,'#a8bccc');sg.addColorStop(1,'#90a8be');
  ctx.fillStyle=sg;ctx.beginPath();ctx.moveTo(w/2,-h/2);ctx.lineTo(w/2-d,-h/2-d);ctx.lineTo(w/2-d,h/2-d);ctx.lineTo(w/2,h/2);ctx.closePath();ctx.fill();ctx.stroke();
  var fg=ctx.createLinearGradient(0,-h/2,0,h/2);
  fg.addColorStop(0,'#e8f4fa');fg.addColorStop(1,'#cce0ee');
  ctx.fillStyle=fg;ctx.strokeStyle='#88aabb';ctx.lineWidth=1;
  ctx.fillRect(-w/2,-h/2,w,h);ctx.strokeRect(-w/2,-h/2,w,h);
  ctx.fillStyle='#1a3d8a';ctx.fillRect(-w/2,-4,w,8);
  ctx.fillStyle='rgba(20,55,140,0.7)';
  ctx.beginPath();ctx.moveTo(-w/2,-4);ctx.lineTo(w/2,-4);ctx.lineTo(w/2-d,-4-d);ctx.lineTo(-w/2+d,-4-d);ctx.closePath();ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.88)';ctx.font='bold 5px sans-serif';ctx.textAlign='center';
  ctx.fillText('CANCELLINO',0,1.5);ctx.textAlign='left';
  ctx.strokeStyle='rgba(160,185,210,0.35)';ctx.lineWidth=0.5;
  ctx.beginPath();ctx.moveTo(w/2-7,-h/2);ctx.lineTo(w/2-7,h/2);ctx.stroke();
  ctx.beginPath();ctx.moveTo(w/2-4,-h/2);ctx.lineTo(w/2-4,h/2);ctx.stroke();
  ctx.restore();
}
function drawBiro(cx,cy){
  var L=56,r=5;
  ctx.save();ctx.translate(cx,cy);
  ctx.fillStyle='rgba(0,0,0,0.13)';ctx.fillRect(-L/2+4,-r+4,L-4,r*2);
  var cg=ctx.createLinearGradient(-L/2,-r,-L/2+8,r);
  cg.addColorStop(0,'#0a1530');cg.addColorStop(1,'#1c2a58');
  ctx.fillStyle=cg;ctx.beginPath();ctx.arc(-L/2+r,0,r,0,Math.PI*2);ctx.fill();
  var bg=ctx.createLinearGradient(0,-r,0,r);
  bg.addColorStop(0,'#3d5a9e');bg.addColorStop(0.45,'#1e2e7a');bg.addColorStop(1,'#0c1850');
  ctx.fillStyle=bg;ctx.beginPath();ctx.roundRect(-L/2+r,-r,L-r*2-14,r*2,r*0.8);ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.12)';
  ctx.beginPath();ctx.roundRect(-L/2+r,-r,L-r*2-14,r*0.52,r*0.4);ctx.fill();
  ctx.fillStyle='#8898c0';ctx.strokeStyle='#6070a0';ctx.lineWidth=0.7;
  ctx.beginPath();ctx.roundRect(-L/2+6,-r-3,3,r+2,1);ctx.fill();ctx.stroke();
  ctx.fillStyle='#9aaccc';ctx.beginPath();ctx.arc(-L/2+7.5,-r-2.5,2.5,0,Math.PI*2);ctx.fill();
  var gg=ctx.createLinearGradient(0,-r,0,r);
  gg.addColorStop(0,'#3a3a3a');gg.addColorStop(0.5,'#181818');gg.addColorStop(1,'#080808');
  ctx.fillStyle=gg;ctx.fillRect(L/2-r-16,-r,10,r*2);
  ctx.strokeStyle='rgba(255,255,255,0.06)';ctx.lineWidth=0.8;
  for(var i=0;i<4;i++){ctx.beginPath();ctx.moveTo(L/2-r-15+i*2.5,-r);ctx.lineTo(L/2-r-15+i*2.5,r);ctx.stroke();}
  var cog=ctx.createLinearGradient(0,-r,0,r);
  cog.addColorStop(0,'#ccc');cog.addColorStop(0.5,'#888');cog.addColorStop(1,'#555');
  ctx.fillStyle=cog;ctx.fillRect(L/2-r-8,-r+1,5,r*2-2);
  var tpg=ctx.createLinearGradient(L/2-6,0,L/2,0);
  tpg.addColorStop(0,'#aaa');tpg.addColorStop(1,'#e0e0e0');
  ctx.fillStyle=tpg;ctx.beginPath();ctx.moveTo(L/2-r-3,-r*0.6);ctx.lineTo(L/2,0);ctx.lineTo(L/2-r-3,r*0.6);ctx.closePath();ctx.fill();
  ctx.fillStyle='#282828';ctx.beginPath();ctx.arc(L/2-1,0,1.5,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='rgba(160,185,255,0.5)';ctx.font='bold 5px sans-serif';ctx.textAlign='center';
  ctx.fillText('BIRO',-L/4+6,1.8);ctx.textAlign='left';
  ctx.restore();
}
function drawTool(){
  var tx=drag?dx:HX,ty=drag?dy:HY;
  if(tool==='c')drawEraser(tx,ty);else drawBiro(tx,ty);
  if(!drag){
    ctx.fillStyle='rgba(90,65,40,0.6)';ctx.font='11px Georgia,serif';ctx.textAlign='center';
    ctx.fillText(T().name,HX,HY+T().th/2+15);ctx.textAlign='left';
  }
}
function drawCounter(){
  var ov=markPos.length>0&&markPos[markPos.length-1]>BX+BW-T().tw*0.3;
  var bx=W-178,by=H-56,bw=165,bh=44;
  var boxG=ctx.createLinearGradient(bx,by,bx,by+bh);
  boxG.addColorStop(0,ov?'rgba(100,12,0,0.87)':'rgba(16,30,72,0.87)');
  boxG.addColorStop(1,ov?'rgba(78,8,0,0.87)':'rgba(8,20,58,0.87)');
  ctx.fillStyle=boxG;ctx.beginPath();ctx.roundRect(bx,by,bw,bh,5);ctx.fill();
  ctx.strokeStyle=ov?'rgba(220,70,50,0.35)':'rgba(70,120,220,0.3)';ctx.lineWidth=1;
  ctx.beginPath();ctx.roundRect(bx,by,bw,bh,5);ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='bold 13px Georgia,serif';
  ctx.fillText('Misure: '+markPos.length,bx+10,by+20);
  ctx.fillStyle=ov?'#ffaaaa':'#aaccff';ctx.font='11px Georgia,serif';
  ctx.fillText(ov?'Attenzione: non entra tutto!':'← trascina per misurare',bx+10,by+36);
}
function draw(){
  ctx.clearRect(0,0,W,H);drawBg();drawBoard();drawMarks();
  ctx.fillStyle='rgba(90,62,38,0.7)';ctx.font='13px Georgia,serif';
  ctx.fillText('Trascina lo strumento sulla lavagna per misurare il lato lungo.',10,24);
  drawTool();drawCounter();
}
function xy(e,t){var r=cv.getBoundingClientRect(),s=t?e.touches[0]:e;return{x:(s.clientX-r.left)*(W/r.width),y:(s.clientY-r.top)*(H/r.height)};}
function hit(p){var t=T(),tx=drag?dx:HX,ty=drag?dy:HY;return Math.abs(p.x-tx)<t.tw/2+10&&Math.abs(p.y-ty)<t.th/2+12;}
function onDown(p){if(hit(p)){drag=true;dx=p.x;dy=p.y;cv.style.cursor='grabbing';}}
function onMove(p){if(!drag)return;dx=p.x;dy=p.y;draw();}
function onUp(){if(!drag)return;drag=false;cv.style.cursor='grab';if(dx>BX-20&&dx<BX+BW+20&&dy>BY-20&&dy<BY+BH+30)markPos.push(Math.min(dx+T().tw/2,BX+BW));draw();}
cv.addEventListener('mousedown',function(e){onDown(xy(e));});
cv.addEventListener('mousemove',function(e){onMove(xy(e));});
cv.addEventListener('mouseup',onUp);
cv.addEventListener('mouseleave',function(){if(drag){drag=false;cv.style.cursor='grab';draw();}});
cv.addEventListener('touchstart',function(e){e.preventDefault();onDown(xy(e,1));},{passive:false});
cv.addEventListener('touchmove',function(e){e.preventDefault();onMove(xy(e,1));},{passive:false});
cv.addEventListener('touchend',function(e){e.preventDefault();onUp();},{passive:false});
function setTool(t){tool=t;markPos=[];drag=false;draw();}
function reset(){markPos=[];drag=false;draw();}
function verifica(){
  var v=parseFloat(document.getElementById('inp-lav').value),fb=document.getElementById('fb-lav'),t=T(),ac=t.accept,marks=markPos.length;
  if(isNaN(v)){fb.style.color='#b91c1c';fb.textContent='Inserisci un numero.';return;}
  if(v>=ac[0]&&v<=ac[1]){fb.style.color='#15803d';fb.textContent='Corretto! Il lato misura circa '+t.realStr+' '+t.name+'i. Sia '+ac[0]+' che '+ac[1]+' sono accettabili — ed è qui che entra in gioco l\'incertezza!';}
  else{fb.style.color='#b91c1c';fb.textContent='Riprova: conta le strisce sulla lavagna, inclusa anche l\'ultima se parziale.';}
}
draw();
return{setTool:setTool,reset:reset,verifica:verifica};
})();
</script>
oppure in quest'altro esempio puoi misurare la massa di un vaso di fiori con dei sacchetti di farina da $1 \ \text{kg}.$
<div style="margin:1.5rem 0;background:#f0e8dc;border-radius:8px;padding:1rem 1rem 0.8rem;border:1px solid #c8b898;">
<p style="margin:0 0 0.6rem;font-size:14px;font-family:Georgia,serif;"><strong>Misura la massa del vaso di fiori</strong></p>
<canvas id="cv-bil" width="520" height="340" style="display:block;max-width:100%;border-radius:5px;"></canvas>
<div style="margin-top:0.7rem;display:flex;gap:0.6rem;align-items:center;flex-wrap:wrap;">
  <button onclick="simBil.addBag()" style="padding:0.3rem 0.9rem;background:#8b5e30;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;font-family:Georgia,serif;">+ Sacchetto intero (1 kg)</button>
  <button onclick="simBil.remBag()" style="padding:0.3rem 0.9rem;background:#5a5248;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;font-family:Georgia,serif;">&#8722; Rimuovi sacchetto</button>
</div>
<div style="margin-top:0.5rem;display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
  <label style="font-size:13px;font-family:Georgia,serif;color:#5a3c18;">Sacchetto parziale:</label>
  <input type="range" id="sld-bil" min="0" max="100" value="0" oninput="simBil.setPartial(this.value)" style="width:140px;">
  <span id="lbl-bil-p" style="font-size:13px;color:#6b4e30;font-family:Georgia,serif;">0.00 kg</span>
</div>
<div style="margin-top:0.7rem;display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
  <label style="font-size:14px;font-family:Georgia,serif;">Massa del vaso (kg):</label>
  <input id="inp-bil" type="number" min="0" max="10" step="0.1" style="width:70px;padding:0.2rem 0.4rem;border:1px solid #aaa;border-radius:4px;font-size:14px;">
  <button onclick="simBil.verifica()" style="padding:0.3rem 0.9rem;background:#1a4d6a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;font-family:Georgia,serif;">Verifica</button>
</div>
<p id="fb-bil" style="margin:0.5rem 0 0;font-size:14px;font-family:Georgia,serif;min-height:1.2em;"></p>
</div>
<script>
var simBil=(function(){
var cv=document.getElementById('cv-bil'),ctx=cv.getContext('2d');
var W=520,H=340,POT=2.3,bags=0,partial=0;
function leftM(){return bags+partial;}
function angle(){return Math.max(-28,Math.min(28,(leftM()-POT)*14))*Math.PI/180;}
var PX=260,PY=65,BL=152,CL=82;
function draw(){
  ctx.clearRect(0,0,W,H);
  var bg=ctx.createLinearGradient(0,0,0,H);
  bg.addColorStop(0,'#faf4ec');bg.addColorStop(1,'#f0e8dc');
  ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
  var a=angle(),ca=Math.cos(a),sa=Math.sin(a);
  var lbx=PX-BL*ca,lby=PY+BL*sa,rbx=PX+BL*ca,rby=PY-BL*sa;
  var lpx=lbx,lpy=lby+CL,rpx=rbx,rpy=rby+CL;
  drawStand();drawBeam(lbx,lby,rbx,rby);
  drawChain(lbx,lby,lpx,lpy);drawChain(rbx,rby,rpx,rpy);
  drawPan(lpx,lpy);drawPan(rpx,rpy);
  for(var i=0;i<bags;i++)drawBag(lpx,lpy-14-i*36,1,false);
  if(partial>0.005)drawBag(lpx,lpy-14-bags*36,partial,true);
  drawPot(rpx,rpy-12);
  var diff=Math.abs(leftM()-POT);
  ctx.textAlign='center';ctx.font='bold 12px Georgia,serif';
  if(diff<0.15){ctx.fillStyle='#15803d';ctx.fillText('In equilibrio! Qual è la massa del vaso?',PX,H-9);}
  else{ctx.fillStyle='rgba(80,55,30,0.65)';ctx.fillText(leftM()<POT?'Piatto sinistro troppo leggero':'Piatto sinistro troppo pesante',PX,H-9);}
  ctx.textAlign='left';
}
function drawStand(){
  ctx.fillStyle='rgba(0,0,0,0.09)';ctx.beginPath();ctx.ellipse(PX+4,H-19,68,9,0,0,Math.PI*2);ctx.fill();
  var cg=ctx.createLinearGradient(PX-5,0,PX+5,0);
  cg.addColorStop(0,'#6b7280');cg.addColorStop(0.35,'#9ca3af');cg.addColorStop(1,'#6b7280');
  ctx.fillStyle=cg;ctx.fillRect(PX-5,PY,10,H-PY-24);
  var bg=ctx.createLinearGradient(0,H-26,0,H-10);
  bg.addColorStop(0,'#4b5563');bg.addColorStop(1,'#374151');
  ctx.fillStyle=bg;ctx.beginPath();ctx.roundRect(PX-62,H-26,124,16,3);ctx.fill();
  ctx.strokeStyle='rgba(100,110,130,0.3)';ctx.lineWidth=1;
  ctx.beginPath();ctx.roundRect(PX-62,H-26,124,16,3);ctx.stroke();
  var pg=ctx.createRadialGradient(PX-3,PY-3,1,PX,PY,12);
  pg.addColorStop(0,'#e2e8f0');pg.addColorStop(0.55,'#94a3b8');pg.addColorStop(1,'#475569');
  ctx.fillStyle=pg;ctx.beginPath();ctx.arc(PX,PY,12,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#334155';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(PX,PY,12,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle='#1e293b';ctx.beginPath();ctx.arc(PX,PY,3.5,0,Math.PI*2);ctx.fill();
}
function drawBeam(lbx,lby,rbx,rby){
  var g=ctx.createLinearGradient(0,Math.min(lby,rby)-4,0,Math.max(lby,rby)+4);
  g.addColorStop(0,'#94a3b8');g.addColorStop(0.4,'#cbd5e1');g.addColorStop(1,'#64748b');
  ctx.strokeStyle=g;ctx.lineWidth=7;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(lbx,lby);ctx.lineTo(rbx,rby);ctx.stroke();
  ctx.strokeStyle='rgba(255,255,255,0.28)';ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(lbx+2,lby-1);ctx.lineTo(rbx-2,rby+1);ctx.stroke();
}
function drawChain(x1,y1,x2,y2){
  var n=4;
  for(var i=0;i<n;i++){
    var ta=i/n,tb=(i+1)/n;
    ctx.strokeStyle=i%2?'#6b7280':'#9ca3af';ctx.lineWidth=i%2?1:1.8;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(x1+(x2-x1)*ta,y1+(y2-y1)*ta);ctx.lineTo(x1+(x2-x1)*tb,y1+(y2-y1)*tb);ctx.stroke();
  }
}
function drawPan(cx,cy){
  ctx.fillStyle='rgba(0,0,0,0.07)';ctx.beginPath();ctx.ellipse(cx+4,cy+8,54,7,0,0,Math.PI*2);ctx.fill();
  var g=ctx.createLinearGradient(0,cy-9,0,cy+9);
  g.addColorStop(0,'#e2e8f0');g.addColorStop(0.45,'#cbd5e1');g.addColorStop(1,'#94a3b8');
  ctx.fillStyle=g;ctx.strokeStyle='#64748b';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.ellipse(cx,cy,52,10,0,0,Math.PI*2);ctx.fill();ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.32)';ctx.beginPath();ctx.ellipse(cx-10,cy-3,30,4,0,0,Math.PI*2);ctx.fill();
}
function drawBag(cx,cy,fill,isPart){
  ctx.save();ctx.translate(cx,cy);
  var bw=42,bh=32,tw=28;
  ctx.fillStyle='rgba(0,0,0,0.09)';ctx.beginPath();ctx.ellipse(0,bh/2+3,bw/2*0.75,4,0,0,Math.PI*2);ctx.fill();
  var bg;
  if(isPart&&fill<0.98){
    bg=ctx.createLinearGradient(0,-bh/2,0,bh/2);
    bg.addColorStop(0,'#f0ebe0');bg.addColorStop(Math.max(0,1-fill),'#e6e0ce');bg.addColorStop(1,'#d4ccb8');
  } else {
    bg=ctx.createLinearGradient(-bw/2,0,bw/2,0);
    bg.addColorStop(0,'#d8d2be');bg.addColorStop(0.28,'#eee8d4');bg.addColorStop(0.72,'#eee8d4');bg.addColorStop(1,'#c4bcaa');
  }
  ctx.fillStyle=bg;
  ctx.beginPath();ctx.moveTo(-tw/2,-bh/2);ctx.lineTo(tw/2,-bh/2);ctx.lineTo(bw/2,bh/2);ctx.lineTo(-bw/2,bh/2);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#a8a090';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(-tw/2,-bh/2);ctx.lineTo(tw/2,-bh/2);ctx.lineTo(bw/2,bh/2);ctx.lineTo(-bw/2,bh/2);ctx.closePath();ctx.stroke();
  ctx.strokeStyle='rgba(155,145,125,0.28)';ctx.lineWidth=0.7;
  ctx.beginPath();ctx.moveTo(-bw/2+5,bh/4);ctx.lineTo(-tw/2+2,-bh/4);ctx.stroke();
  ctx.beginPath();ctx.moveTo(bw/2-5,bh/4);ctx.lineTo(tw/2-2,-bh/4);ctx.stroke();
  var lh=12,lw=28,ly=bh/2-lh-2;
  ctx.fillStyle='rgba(218,208,186,0.92)';ctx.strokeStyle='#b8a880';ctx.lineWidth=0.8;
  ctx.fillRect(-lw/2,ly,lw,lh);ctx.strokeRect(-lw/2,ly,lw,lh);
  ctx.fillStyle='#503a14';ctx.font='bold 6.5px sans-serif';ctx.textAlign='center';
  ctx.fillText('FARINA',0,ly+8.5);ctx.textAlign='left';
  if(!isPart||fill>=0.98){
    ctx.strokeStyle='#b0a080';ctx.lineWidth=0.7;
    for(var i=-2;i<=2;i++){ctx.beginPath();ctx.moveTo(i*5.5,-bh/2);ctx.quadraticCurveTo(i*5+Math.sign(i||1),-bh/2-5,0,-bh/2-10);ctx.stroke();}
    ctx.strokeStyle='#7a5c2e';ctx.lineWidth=2;
    ctx.beginPath();ctx.arc(0,-bh/2-8,5,0,Math.PI*2);ctx.stroke();
    ctx.beginPath();ctx.moveTo(-7,-bh/2-6);ctx.lineTo(-4,-bh/2-4);ctx.stroke();
    ctx.beginPath();ctx.moveTo(7,-bh/2-6);ctx.lineTo(4,-bh/2-4);ctx.stroke();
  } else {
    ctx.strokeStyle='#b0a080';ctx.lineWidth=0.9;ctx.setLineDash([2,2]);
    ctx.beginPath();ctx.moveTo(-tw/2,-bh/2);ctx.lineTo(tw/2,-bh/2);ctx.stroke();ctx.setLineDash([]);
    for(var j=-2;j<=2;j++){ctx.strokeStyle='#a09070';ctx.lineWidth=0.7;ctx.beginPath();ctx.moveTo(j*5.5,-bh/2);ctx.lineTo(j*5.5-2,-bh/2-3);ctx.stroke();}
  }
  ctx.restore();
}
function drawPot(cx,cy){
  ctx.save();ctx.translate(cx,cy);
  ctx.fillStyle='rgba(0,0,0,0.1)';ctx.beginPath();ctx.ellipse(0,38,16,5,0,0,Math.PI*2);ctx.fill();
  var pg=ctx.createLinearGradient(-18,0,18,0);
  pg.addColorStop(0,'#8b3808');pg.addColorStop(0.3,'#b45309');pg.addColorStop(0.7,'#b45309');pg.addColorStop(1,'#7c3008');
  ctx.fillStyle=pg;
  ctx.beginPath();ctx.moveTo(-17,0);ctx.lineTo(17,0);ctx.lineTo(13,36);ctx.lineTo(-13,36);ctx.closePath();ctx.fill();
  ctx.fillStyle='rgba(255,190,80,0.14)';
  ctx.beginPath();ctx.moveTo(-15,2);ctx.lineTo(15,2);ctx.lineTo(14,16);ctx.lineTo(-14,16);ctx.closePath();ctx.fill();
  var rg=ctx.createLinearGradient(0,-6,0,5);
  rg.addColorStop(0,'#d97706');rg.addColorStop(0.55,'#b45309');rg.addColorStop(1,'#8b3808');
  ctx.fillStyle=rg;ctx.beginPath();ctx.roundRect(-22,-6,44,9,2);ctx.fill();
  ctx.strokeStyle='rgba(100,45,5,0.4)';ctx.lineWidth=0.8;ctx.beginPath();ctx.roundRect(-22,-6,44,9,2);ctx.stroke();
  var sg=ctx.createRadialGradient(-2,-1,0,0,0,14);
  sg.addColorStop(0,'#7c4a22');sg.addColorStop(1,'#4a2a0e');
  ctx.fillStyle=sg;ctx.beginPath();ctx.ellipse(0,0,13,4,0,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#166534';ctx.lineWidth=2.5;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(0,-1);ctx.bezierCurveTo(3,-10,-4,-20,1,-34);ctx.stroke();
  ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(1,-17);ctx.bezierCurveTo(5,-17,14,-14,16,-20);ctx.stroke();
  ctx.beginPath();ctx.moveTo(0,-24);ctx.bezierCurveTo(-5,-23,-13,-21,-14,-28);ctx.stroke();
  function leaf(ox,oy,rx,ry,rot){
    ctx.save();ctx.translate(ox,oy);ctx.rotate(rot);
    var lg=ctx.createRadialGradient(0,-2,0,0,0,rx);
    lg.addColorStop(0,'#22c55e');lg.addColorStop(1,'#15803d');
    ctx.fillStyle=lg;ctx.beginPath();ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='rgba(10,85,30,0.35)';ctx.lineWidth=0.6;
    ctx.beginPath();ctx.moveTo(-rx,0);ctx.lineTo(rx,0);ctx.stroke();
    ctx.restore();
  }
  leaf(14,-21,13,5.5,-0.4);leaf(-12,-27,12,5,-0.55+Math.PI);leaf(3,-35,10,4.5,-0.15);leaf(-5,-30,9,4,0.7);
  var fy=-37;
  for(var p=0;p<5;p++){var pa=p/5*Math.PI*2;
    ctx.fillStyle='#f472b6';ctx.save();ctx.translate(Math.cos(pa)*5,fy+Math.sin(pa)*4);ctx.rotate(pa);
    ctx.beginPath();ctx.ellipse(0,0,5,3,0,0,Math.PI*2);ctx.fill();ctx.restore();
  }
  var fcg=ctx.createRadialGradient(-0.5,fy-0.5,0,0,fy,4);
  fcg.addColorStop(0,'#fde68a');fcg.addColorStop(1,'#f59e0b');
  ctx.fillStyle=fcg;ctx.beginPath();ctx.arc(0,fy,3.5,0,Math.PI*2);ctx.fill();
  ctx.restore();
}
function addBag(){if(bags<5){bags++;draw();}}
function remBag(){if(bags>0){bags--;draw();}}
function setPartial(v){partial=v/100;document.getElementById('lbl-bil-p').textContent=partial.toFixed(2)+' kg';draw();}
function verifica(){
  var v=parseFloat(document.getElementById('inp-bil').value),fb=document.getElementById('fb-bil');
  if(isNaN(v)){fb.style.color='#b91c1c';fb.textContent='Inserisci un numero.';return;}
  var d=Math.abs(v-POT);
  if(d<=0.25){fb.style.color='#15803d';fb.textContent='Ottimo! La massa del vaso è '+POT.toFixed(1)+' kg. Con i sacchetti interi è difficile fare di meglio — l\'incertezza è inevitabile!';}
  else if(d<=0.5){fb.style.color='#ca8a04';fb.textContent='Quasi! Prova a regolare il sacchetto parziale per avvicinarti all\'equilibrio.';}
  else{fb.style.color='#b91c1c';fb.textContent='Lontano. Osserva la bilancia e aggiungi o rimuovi farina.';}
}
draw();
return{addBag:addBag,remBag:remBag,setPartial:setPartial,verifica:verifica};
})();
</script>

Notiamo alcune cose.
1. Il numero associato all'altezza della lavagna varia a seconda che utilizziamo un cancellino o una biro, e in effetti ha senso solo se è rapportato <u>a quel campione specifico</u>. Cambiando il campione cambia anche il numero.
2. Una misurazione non è mai perfetta, si commettono sempre alcuni errori, ed è difficile sapere *di quanto* ci si sia sbagliati.

<div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1.5rem 0;">
<div class="fill-def" style="flex:1;min-width:220px;">
  <p class="fill-def-label">✏️ Problema 1</p>
  <p class="fill-def-prompt">Come si potrebbe risolvere il problema del campione? Proponi una soluzione.</p>
  <textarea id="fill-prob1" placeholder="Scrivi qui la tua risposta…" aria-label="Soluzione al problema del campione"></textarea>
</div>
<div class="fill-def" style="flex:1;min-width:220px;">
  <p class="fill-def-label">✏️ Problema 2</p>
  <p class="fill-def-prompt">Come si potrebbe risolvere il problema degli errori di misura? Proponi una soluzione.</p>
  <textarea id="fill-prob2" placeholder="Scrivi qui la tua risposta…" aria-label="Soluzione al problema degli errori"></textarea>
</div>
</div>

Vediamo le risposte che hanno dato i fisici a questo problema.

# Le unità di misura e il Sistema Internazionale

Nel 1875, alcuni dei più importanti scienziati di tutto il mondo si sono riuniti a Parigi, in una conferenza chiamata *«Conférence générale des poids et mesures»*, per stabilire delle unità di misura da adottare <u>in tutto il mondo</u>, <u>sempre</u>.  
Essi trovarono che tutte le grandezze fisiche potevano essere espresse in termini di **sette** <definizione>grandezze fondamentali</definizione>, a cui sono associate le rispettive <definizione>unità di misura</definizione>. Costruirono cioè la seguente tabella. 

<table style="border-collapse:collapse;margin:1rem 0;font-size:15px;">
  <thead>
    <tr>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Grandezza</th>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Unità di misura</th>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Simbolo</th>
      <th colspan="2" style="border-bottom:2px solid #555;"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Lunghezza</td>
      <td style="padding:6px 20px 6px 8px;">metro</td>
      <td style="padding:6px 20px 6px 8px;">m</td>
      <td style="width:10px;border-top:1.5px solid #555;border-right:1.5px solid #555;"></td>
      <td rowspan="3" style="vertical-align:middle;padding:0 0 0 10px;font-style:italic;color:#1a5276;font-size:13px;white-space:nowrap;">Queste tre<br>sono da<br>sapere</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Tempo</td>
      <td style="padding:6px 20px 6px 8px;">secondo</td>
      <td style="padding:6px 20px 6px 8px;">s</td>
      <td style="width:10px;border-right:1.5px solid #555;"></td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Massa</td>
      <td style="padding:6px 20px 6px 8px;">chilogrammo</td>
      <td style="padding:6px 20px 6px 8px;">kg</td>
      <td style="width:10px;border-bottom:1.5px solid #555;border-right:1.5px solid #555;"></td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;color:#777;">Temperatura</td>
      <td style="padding:6px 20px 6px 8px;color:#777;">kelvin</td>
      <td style="padding:6px 20px 6px 8px;color:#777;">K</td>
      <td></td><td></td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;color:#777;">Intensità di corrente</td>
      <td style="padding:6px 20px 6px 8px;color:#777;">ampere</td>
      <td style="padding:6px 20px 6px 8px;color:#777;">A</td>
      <td></td><td></td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;color:#777;">Quantità di materia</td>
      <td style="padding:6px 20px 6px 8px;color:#777;">mole</td>
      <td style="padding:6px 20px 6px 8px;color:#777;">mol</td>
      <td></td><td></td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;color:#777;border-bottom:1px solid #ccc;">Intensità luminosa</td>
      <td style="padding:6px 20px 6px 8px;color:#777;border-bottom:1px solid #ccc;">candela</td>
      <td style="padding:6px 20px 6px 8px;color:#777;border-bottom:1px solid #ccc;">cd</td>
      <td style="border-bottom:1px solid #ccc;"></td>
      <td style="border-bottom:1px solid #ccc;"></td>
    </tr>
  </tbody>
</table>

Queste 7 grandezze definiscono il <definizione>Sistema Internazionale</definizione>.

### La differenza tra grandezze fondamentali e grandezze derivate
Tutte le altre grandezze fisiche possono essere derivate a partire dalle grandezze nella tabella, tramite le leggi della fisica. Sono perciò dette <definizione>grandezze derivate</definizione>.  
Immaginatevi le 7 grandezze fisiche nella tabella come delle note musicali: esse si combinano in opportuni accordi (le formule della Fisica) e producono un nuovo suono, che è quello delle altre grandezze (come velocità, accelerazione, forza, etc.). Ad esempio, la velocità esprime semplicemente *quanto spazio percorro in un certo tempo*, quindi per misurare la velocità mi basta misurare lo spazio e il tempo.
{% include box-imp.html titolo="Il Sistema Internazionale di Unità di Misura"%}

Il Sistema Internazionale di Unità di Misura è un sistema di *convenzioni* che ha scelto 7 grandezze fondamentali, a ciascuna delle quali ha associato un'unità di misura. Tutte le altre grandezze possono essere ottenute a partire da queste.

{% include box-end.html %}



# La notazione scientifica

Una delle caratteristiche più belle della Fisica è che cerca di descrivere *tutto* l'Universo: dalle minuscole particelle subatomiche alle immani, gigantesche galassie. Ma come facciamo a orientarci nel passaggio da una scala gigante a una scala minuscola? L'unità di misura del Sistema Internazionale è scelta «a nostra immagine e somiglianza», cioè su scala umana, ma ci sono moltissime cose per cui le grandezze del Sistema Internazionale diventano molto scomode. Ad esempio, la massa di un elettrone — che indichiamo con $m_\text{e}$ — corrisponde, in chili, a

$$m_\text{e} = 0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,000\,910\,938\,370\,153\ \text{kg};$$

la massa del Sole — che indichiamo con $m_\text{S}$ — è circa

$$m_\text{S} = 1\,989\,100\,000\,000\,000\,000\,000\,000\,000\,000\ \text{kg}.$$

Numeri del genere sono un po' scomodi da maneggiare. Prova a pensare a come risolveresti questo problema tu, prima di leggere la soluzione trovata dalla comunità scientifica.

{% include fill-def.html id='fill-notaz' prompt='Come rappresenteresti numeri molto grandi o molto piccoli in modo più comodo? Fai un esempio con i numeri 99999999 e 0,00000000000123. Verifica poi che funzioni per tutti i numeri!' %}

La soluzione adottata dagli scienziati consiste nell'indicare questi numeri tramite un tipo di notazione che è detto <definizione>notazione scientifica</definizione>. Vediamo in cosa consiste.

Considera il numero 
$$1\,000\,000\,000\,000\,000\,000\,000\,000\,000\,000.$$
Esso corrisponde al numero uno seguito da 30 zeri. Matematicamente, sappiamo che aggiungere uno zero significa moltiplicare per $10$ e quindi quel numero può essere scritto come

$$1\times \underbrace{10\times 10 \times 10 \times \cdots\times 10}_{30 \text{ volte}} = 1 \times 10^{30}.$$


Sfruttando questo ragionamento, possiamo scrivere $500$ come $5\times 10^2$, e $567$ come $5{,}67\times 10^2$. Basta insomma contare il numero di salti verso sinistra che fa la virgola e metterla ad esponente di 10. Ad esempio la massa del Sole diventa

<div style="margin:1.5rem 0;background:#fafaf8;border-radius:8px;padding:0.85rem 1rem 0.7rem;border:1px solid #e5e7eb;">
<p style="margin:0 0 0.5rem;font-size:13px;color:#374151;">Guarda la virgola saltare verso sinistra: ad ogni passo l'esponente cresce di 1.</p>
<canvas id="cv-sun-anim" width="540" height="82" style="display:block;max-width:100%;"></canvas>
<div style="display:flex;gap:0.4rem;margin-top:0.5rem;flex-wrap:wrap;align-items:center;">
<button onclick="sunAnim.prev()" style="padding:0.2rem 0.65rem;background:#fff;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-size:13px;">&#8592;</button>
<button onclick="sunAnim.next()" style="padding:0.2rem 0.65rem;background:#0891b2;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">Successivo &#8594;</button>
<button onclick="sunAnim.auto()" style="padding:0.2rem 0.65rem;background:#0f766e;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">&#9654; Auto</button>
<button onclick="sunAnim.reset()" style="padding:0.2rem 0.65rem;background:#fff;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-size:13px;">&#8635;</button>
</div>
</div>
<script>
var sunAnim=(function(){
var cv=document.getElementById('cv-sun-anim');
if(!cv)return{};
var ctx=cv.getContext('2d');
var W=540,H=82;
var str='1989100000000000000000000000000',N=str.length;
var MAXSTEP=N-1,step=0,timer=null;
var CY='#0891b2',DW=14,PAD=8,NY=30,AY=41,AD=14;
var SF='Georgia,"Times New Roman",serif';
function cxL(k){return PAD+(N-k)*DW;}
function draw(k){
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#fafaf8';ctx.fillRect(0,0,W,H);
  ctx.textBaseline='alphabetic';ctx.textAlign='left';
  ctx.font='14px '+SF;
  for(var i=0;i<N-k;i++){
    ctx.fillStyle=i<5?'#0f766e':'#666';
    ctx.fillText(str[i],PAD+i*DW,NY);
  }
  ctx.font='bold 14px '+SF;
  ctx.fillStyle=k===0?'#d1d5db':CY;
  ctx.fillText(',',cxL(k),NY);
  var rTrim=str.slice(N-k,N).replace(/0+$/,'');
  ctx.font='14px '+SF;ctx.fillStyle='#111';
  for(var i=0;i<rTrim.length;i++){
    ctx.fillText(rTrim[i],PAD+(N-k+1+i)*DW,NY);
  }
  var ex=PAD+(N+1)*DW+5,t='×10';
  ctx.font='12px sans-serif';
  ctx.fillStyle=k===0?'#d1d5db':'#222';
  ctx.fillText(t,ex,NY);
  ctx.font='bold 10px sans-serif';
  ctx.fillStyle=k===0?'#d1d5db':CY;
  ctx.fillText(''+k,ex+ctx.measureText(t).width+1,NY-8);
  for(var i=1;i<=k;i++){
    var x1=cxL(i-1)+DW/2,x2=cxL(i)+DW/2;
    var mx=(x1+x2)/2,cy2=AY+AD,last=(i===k);
    ctx.strokeStyle=CY;ctx.lineWidth=last?2:1.2;
    ctx.beginPath();ctx.moveTo(x1,AY);ctx.quadraticCurveTo(mx,cy2,x2,AY);ctx.stroke();
    var ang=Math.atan2(AY-cy2,x2-mx),sz=last?7:4;
    ctx.save();ctx.translate(x2,AY);ctx.rotate(ang);
    ctx.fillStyle=CY;ctx.beginPath();
    ctx.moveTo(0,0);ctx.lineTo(-sz,-sz/2.5);ctx.lineTo(-sz,sz/2.5);ctx.closePath();ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle='#9ca3af';ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText(k===0?'Numero di partenza — premi Successivo':'Salto '+k+' di '+MAXSTEP,W/2,H-5);
  ctx.textAlign='left';
}
function getDelay(s){return s<2?1000:s<4?500:300;}
function autoStep(){
  if(step>=MAXSTEP){timer=null;return;}
  timer=setTimeout(function(){step++;draw(step);autoStep();},getDelay(step));
}
function next(){if(step<MAXSTEP){step++;draw(step);}}
function prev(){if(step>0){step--;draw(step);}}
function reset(){if(timer){clearTimeout(timer);timer=null;}step=0;draw(0);}
function auto(){
  if(timer){clearTimeout(timer);timer=null;return;}
  if(step>=MAXSTEP)step=0;
  autoStep();
}
draw(0);
return{next:next,prev:prev,reset:reset,auto:auto};
})();
</script>

$$
\begin{aligned}
m_\text{S} &= 1\,989\,100\,000\,000\,000\,000\,000\,000\,000\,000\ \text{kg}\\ &=1{,}9891 \times 10^{30}\ \text{kg}.
\end{aligned}
$$

E se invece il numero è molto piccolo, come nel caso della massa dell'elettrone? Facciamo lo stesso ragionamento! Cominciamo notando che $0{,}01$ corrisponde a $\dfrac{1}{100} = 10^{-2}$. Allo stesso modo, $0{,}001 = 10^{-3}$. In generale, il numero di zeri che compare prima dell'uno, incluso quello prima della virgola, è pari all'esponente con un meno di fronte:

$$\underbrace{0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,00}_{30\ \text{zeri}}1 = 10^{-30}.$$

In questo modo, $0{,}05 = 5\times 10^{-2}$ e $0{,}0567 = 5{,}67 \times 10^{-2}$. Anche in questo caso, il numero di salti verso destra che fa la virgola diventa l'esponente, ma con un segno meno. Ad esempio, la massa dell'elettrone può essere scritta come

<div style="margin:1.5rem 0;background:#fafaf8;border-radius:8px;padding:0.85rem 1rem 0.7rem;border:1px solid #e5e7eb;">
<p style="margin:0 0 0.5rem;font-size:13px;color:#374151;">Qui la virgola salta verso destra: l'esponente diventa negativo e cresce in valore assoluto.</p>
<canvas id="cv-ele-anim" width="540" height="82" style="display:block;max-width:100%;"></canvas>
<div style="display:flex;gap:0.4rem;margin-top:0.5rem;flex-wrap:wrap;align-items:center;">
<button onclick="eleAnim.prev()" style="padding:0.2rem 0.65rem;background:#fff;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-size:13px;">&#8592;</button>
<button onclick="eleAnim.next()" style="padding:0.2rem 0.65rem;background:#0891b2;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">Successivo &#8594;</button>
<button onclick="eleAnim.auto()" style="padding:0.2rem 0.65rem;background:#0f766e;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;">&#9654; Auto</button>
<button onclick="eleAnim.reset()" style="padding:0.2rem 0.65rem;background:#fff;border:1px solid #d1d5db;border-radius:4px;cursor:pointer;font-size:13px;">&#8635;</button>
</div>
</div>
<script>
var eleAnim=(function(){
var cv=document.getElementById('cv-ele-anim');
if(!cv)return{};
var ctx=cv.getContext('2d');
var W=540,H=82;
var str='0000000000000000000000000000000910938',N=str.length;
var MAXSTEP=31,step=0,timer=null;
var CY='#0891b2',DW=11,PAD=8,NY=29,AY=39,AD=12;
var SF='Georgia,"Times New Roman",serif';
function cxL(k){return PAD+(k+1)*DW;}
function draw(k){
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#fafaf8';ctx.fillRect(0,0,W,H);
  ctx.textBaseline='alphabetic';ctx.textAlign='left';
  ctx.font='12px '+SF;
  for(var i=0;i<=k;i++){
    ctx.fillStyle=(i===k)?'#0f766e':'#c8c8c8';
    ctx.fillText(str[i],PAD+i*DW,NY);
  }
  ctx.font='bold 12px '+SF;
  ctx.fillStyle=CY;
  ctx.fillText(',',cxL(k),NY);
  ctx.font='12px '+SF;ctx.fillStyle='#111';
  for(var i=k+1;i<N;i++){
    ctx.fillText(str[i],PAD+(i+1)*DW,NY);
  }
  var ex=PAD+(N+1)*DW+4,t='×10';
  ctx.font='12px sans-serif';ctx.fillStyle='#222';
  ctx.fillText(t,ex,NY);
  ctx.font='bold 10px sans-serif';ctx.fillStyle=CY;
  ctx.fillText(k===0?'0':('−'+k),ex+ctx.measureText(t).width+1,NY-6);
  for(var i=1;i<=k;i++){
    var x1=PAD+i*DW+DW/2,x2=PAD+(i+1)*DW+DW/2;
    var mx=(x1+x2)/2,cy2=AY+AD,last=(i===k);
    ctx.strokeStyle=CY;ctx.lineWidth=last?2:1.2;
    ctx.beginPath();ctx.moveTo(x1,AY);ctx.quadraticCurveTo(mx,cy2,x2,AY);ctx.stroke();
    var ang=Math.atan2(AY-cy2,x2-mx),sz=last?7:4;
    ctx.save();ctx.translate(x2,AY);ctx.rotate(ang);
    ctx.fillStyle=CY;ctx.beginPath();
    ctx.moveTo(0,0);ctx.lineTo(-sz,-sz/2.5);ctx.lineTo(-sz,sz/2.5);ctx.closePath();ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle='#9ca3af';ctx.font='10px sans-serif';ctx.textAlign='center';
  ctx.fillText(k===0?'Numero di partenza — premi Successivo':'Salto '+k+' di '+MAXSTEP,W/2,H-5);
  ctx.textAlign='left';
}
function getDelay(s){return s<2?1000:s<4?500:300;}
function autoStep(){
  if(step>=MAXSTEP){timer=null;return;}
  timer=setTimeout(function(){step++;draw(step);autoStep();},getDelay(step));
}
function next(){if(step<MAXSTEP){step++;draw(step);}}
function prev(){if(step>0){step--;draw(step);}}
function reset(){if(timer){clearTimeout(timer);timer=null;}step=0;draw(0);}
function auto(){
  if(timer){clearTimeout(timer);timer=null;return;}
  if(step>=MAXSTEP)step=0;
  autoStep();
}
draw(0);
return{next:next,prev:prev,reset:reset,auto:auto};
})();
</script>

$$\begin{aligned}
m_\text{e} &= 0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,000\,910\,938\,370\,153\ \text{kg}\\
&=9{,}
1093837015 \times 10^{-31}\ \text{kg}.
\end{aligned}$$

Vedete che in entrambi i casi ho lasciato solo una cifra prima della virgola. Questo modo di scrivere i numeri è proprio la **notazione scientifica**. Chiamiamo <definizione>coefficiente</definizione> il numero di fronte al $10$ e chiamiamo come al solito <definizione>esponente</definizione> la potenza di $10$.

<div style="text-align:center;margin:1.2rem 0 1.5rem;">
<svg width="225" height="125" viewBox="0 0 450 250">
  <text x="130" y="148" font-size="54" font-style="italic" font-family="Georgia,serif" fill="#111">a</text>
  <text x="170" y="148" font-size="48" font-family="Georgia,serif" fill="#111"> × 10</text>
  <text x="268" y="108" font-size="32" font-style="italic" font-family="Georgia,serif" fill="#111">n</text>
  <path d="M 80 185 Q 155 185 155 162" fill="none" stroke="#0891b2" stroke-width="3" marker-end="url(#arr-coeff)"/>
  <text x="80" y="215" font-size="22" fill="#0891b2" text-anchor="middle" font-weight="bold" font-family="sans-serif">coefficiente</text>
  <path d="M 348 52 Q 288 52 282 88" fill="none" stroke="#374151" stroke-width="3" marker-end="url(#arr-exp)"/>
  <text x="366" y="44" font-size="22" fill="#374151" text-anchor="middle" font-weight="bold" font-family="sans-serif">esponente</text>
</svg>
</div>


<style>
.iex-widget{background:#faf5ff;border-left:4px solid #7c3aed;border-radius:0 8px 8px 0;padding:1.2rem 1.5rem;margin:1.5rem 0;}
.iex-lbl{font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#7c3aed;margin:0 0 .8rem;}
.iex-topnav{display:flex;align-items:center;gap:.6rem;margin-bottom:1.1rem;flex-wrap:wrap;}
.iex-navbtn{background:#f3e8ff;color:#7c3aed;border:1px solid #c4b5fd;border-radius:5px;padding:.22rem .7rem;cursor:pointer;font-size:.85rem;}
.iex-navbtn:hover:not(:disabled){background:#ede9fe;}
.iex-navbtn:disabled{opacity:.35;cursor:default;}
.iex-dots{display:flex;gap:.3rem;align-items:center;}
.iex-dot{width:11px;height:11px;border-radius:50%;background:#e9d5ff;cursor:pointer;transition:background .18s;}
.iex-dot.cur{background:#7c3aed;}
.iex-dot.ok{background:#0f766e;}
.iex-qt{margin:0 0 .6rem;font-size:.95rem;line-height:1.55;}
.iex-note{color:#6b7280;font-style:italic;font-size:.87em;display:block;margin-top:.15rem;}
.iex-ir{display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;margin:.5rem 0;}
.iex-m{border:1.5px solid #c4b5fd;border-radius:5px;padding:.22rem .45rem;font-size:1rem;font-family:Georgia,serif;width:84px;background:#fff;}
.iex-m:focus{outline:none;border-color:#7c3aed;box-shadow:0 0 0 2px #ede9fe;}
.iex-e{border:1px solid #c4b5fd;border-radius:3px;padding:.03rem .22rem;font-size:1em;font-family:Georgia,serif;width:34px;background:#fff;}
.iex-e:focus{outline:none;border-color:#7c3aed;}
.iex-full{border:1.5px solid #c4b5fd;border-radius:5px;padding:.22rem .45rem;font-size:1rem;font-family:Georgia,serif;min-width:185px;max-width:100%;background:#fff;}
.iex-full:focus{outline:none;border-color:#7c3aed;box-shadow:0 0 0 2px #ede9fe;}
.iex-vbtn{background:#7c3aed;color:#fff;border:none;border-radius:5px;padding:.25rem .9rem;cursor:pointer;font-size:.9rem;}
.iex-vbtn:hover{background:#6d28d9;}
.iex-fb{font-size:.88rem;margin-top:.4rem;min-height:1.1em;}
.iex-fb.ok{color:#0f766e;font-weight:600;}
.iex-fb.err{color:#dc2626;}
.iex-lbtn{background:none;border:none;color:#7c3aed;cursor:pointer;font-size:.85rem;text-decoration:underline;padding:0;margin:0 .25rem;}
.iex-nextbtn{background:#0f766e;color:#fff;border:none;border-radius:5px;padding:.18rem .7rem;cursor:pointer;font-size:.85rem;margin-left:.5rem;}
.iex-nextbtn:hover{background:#0d6660;}
.iex-sol{display:none;margin-top:.45rem;background:#fef9c3;border-left:3px solid #ca8a04;padding:.35rem .75rem;border-radius:4px;font-size:.88rem;color:#713f12;}
</style>

<div class="iex-widget" id="iex1">
<p class="iex-lbl">Esercizio 1 — Notazione scientifica</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="ex1prev" onclick="ex1nav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="ex1dots"></div>
<button class="iex-navbtn" id="ex1next" onclick="ex1nav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="ex1row0">
<p class="iex-qt"><strong>i)</strong> Il numero di galassie nell'Universo: $n_\text{galassie} = 2\,000\,000\,000\,000\ \text{galassie}$<span class="iex-note">(e immaginatevi quanto grande è una singola galassia!)</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex1m0" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex1check(0)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex1e0" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex1check(0)"></sup></span>
<button class="iex-vbtn" onclick="ex1check(0)">Verifica</button>
</div>
<div class="iex-fb" id="ex1fb0"></div>
<div class="iex-sol" id="ex1sol0">Soluzione: <strong>2 &times; 10<sup>12</sup></strong></div>
</div>

<div class="iex-q" id="ex1row1" style="display:none">
<p class="iex-qt"><strong>ii)</strong> Il numero di stelle in una galassia è in media pari a circa $400\,000\,000\,000\ \text{stelle}$. Esprimilo in notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="ex1m1" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex1check(1)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex1e1" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex1check(1)"></sup></span>
<button class="iex-vbtn" onclick="ex1check(1)">Verifica</button>
</div>
<div class="iex-fb" id="ex1fb1"></div>
<div class="iex-sol" id="ex1sol1">Soluzione: <strong>4 &times; 10<sup>11</sup></strong></div>
</div>

<div class="iex-q" id="ex1row2" style="display:none">
<p class="iex-qt"><strong>iii)</strong> Il raggio di una molecola d'acqua: $r_{\text{H}_2\text{O}} = 0{,}0000000001375\ \text{m}$<span class="iex-note">(immaginatevi quanto è piccola!)</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex1m2" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex1check(2)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex1e2" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex1check(2)"></sup></span>
<button class="iex-vbtn" onclick="ex1check(2)">Verifica</button>
</div>
<div class="iex-fb" id="ex1fb2"></div>
<div class="iex-sol" id="ex1sol2">Soluzione: <strong>1,375 &times; 10<sup>&minus;10</sup></strong> m</div>
</div>

<div class="iex-q" id="ex1row3" style="display:none">
<p class="iex-qt"><strong>iv)</strong> Il numero (approssimativo) di molecole d'acqua in un bicchiere: $n_{\text{molecole}} = 8\,360\,576\,000\,000\,000\,000\,000\,000\ \text{molecole}$<span class="iex-note">(la prossima volta che bevete un bicchiere d'acqua, pensateci!)</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex1m3" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex1check(3)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex1e3" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex1check(3)"></sup></span>
<button class="iex-vbtn" onclick="ex1check(3)">Verifica</button>
</div>
<div class="iex-fb" id="ex1fb3"></div>
<div class="iex-sol" id="ex1sol3">Soluzione: <strong>8,360576 &times; 10<sup>24</sup></strong> (oppure arrotondato: 8,36 &times; 10<sup>24</sup>)</div>
</div>

<div class="iex-q" id="ex1row4" style="display:none">
<p class="iex-qt"><strong>v)</strong> L'intensità luminosa del Sole: $i_\text{S} = 83\,200\,000\,000\,000\,000\,000\,000\,000\ \text{cd}$<span class="iex-note">(la «candela» è veramente la luce emessa da una singola candela...)</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex1m4" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex1check(4)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex1e4" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex1check(4)"></sup></span>
<button class="iex-vbtn" onclick="ex1check(4)">Verifica</button>
</div>
<div class="iex-fb" id="ex1fb4"></div>
<div class="iex-sol" id="ex1sol4">Soluzione: <strong>8,32 &times; 10<sup>25</sup></strong> cd</div>
</div>

<div class="iex-q" id="ex1row5" style="display:none">
<p class="iex-qt"><strong>vi)</strong> Il raggio di un atomo di idrogeno: $R_\text{H} = 0{,}000\,000\,0000529\ \text{m}$<span class="iex-note">(molto più piccolo del raggio di una molecola d'acqua, anche se l'acqua è fatta da atomi di idrogeno!)</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex1m5" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex1check(5)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex1e5" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex1check(5)"></sup></span>
<button class="iex-vbtn" onclick="ex1check(5)">Verifica</button>
</div>
<div class="iex-fb" id="ex1fb5"></div>
<div class="iex-sol" id="ex1sol5">Soluzione: <strong>5,29 &times; 10<sup>&minus;11</sup></strong> m</div>
</div>

<div class="iex-q" id="ex1row6" style="display:none">
<p class="iex-qt"><strong>vii)</strong> L'Universo è una sfera di raggio $r_\text{Universo} = 435\,000\,000\,000\,000\,000\,000\,000\,000\ \text{m}$. Esprimi questo numero in notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="ex1m6" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex1check(6)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex1e6" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex1check(6)"></sup></span>
<button class="iex-vbtn" onclick="ex1check(6)">Verifica</button>
</div>
<div class="iex-fb" id="ex1fb6"></div>
<div class="iex-sol" id="ex1sol6">Soluzione: <strong>4,35 &times; 10<sup>26</sup></strong> m</div>
</div>

</div>

<div class="iex-widget" id="iex2" style="margin-top:2rem;">
<p class="iex-lbl">Esercizio 2 — Da notazione scientifica a numero normale</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="ex2prev" onclick="ex2nav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="ex2dots"></div>
<button class="iex-navbtn" id="ex2next" onclick="ex2nav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="ex2row0">
<p class="iex-qt"><strong>i)</strong> La velocità della luce nel vuoto: $c = 2{,}997\,924\,58 \times 10^8\ \dfrac{\text{m}}{\text{s}}$<span class="iex-note">(la luce che arriva al tuo occhio in questo momento viaggia a questa velocità!)</span></p>
<div class="iex-ir">
<input class="iex-full" id="ex2inp0" type="text" placeholder="es: 123 456 789" onkeydown="if(event.key==='Enter')ex2check(0)">
<button class="iex-vbtn" onclick="ex2check(0)">Verifica</button>
</div>
<div class="iex-fb" id="ex2fb0"></div>
<div class="iex-sol" id="ex2sol0">Soluzione: <strong>299 792 458 m/s</strong></div>
</div>

<div class="iex-q" id="ex2row1" style="display:none">
<p class="iex-qt"><strong>ii)</strong> Il diametro di un globulo rosso: $d_\text{globulo rosso} = 8{,}6 \times 10^{-6}\ \text{m}$<span class="iex-note">(pensa a quanto sono minuscole queste cellule!)</span></p>
<div class="iex-ir">
<input class="iex-full" id="ex2inp1" type="text" placeholder="es: 0,0000086" onkeydown="if(event.key==='Enter')ex2check(1)">
<button class="iex-vbtn" onclick="ex2check(1)">Verifica</button>
</div>
<div class="iex-fb" id="ex2fb1"></div>
<div class="iex-sol" id="ex2sol1">Soluzione: <strong>0,0000086 m</strong></div>
</div>

<div class="iex-q" id="ex2row2" style="display:none">
<p class="iex-qt"><strong>iii)</strong> Il numero di globuli rossi in un uomo medio: $n_\text{globuli rossi} = 2{,}5\times 10^{13}\ \text{globuli rossi}$<span class="iex-note">(è più grande del numero di stelle nella Via Lattea, la nostra galassia)</span></p>
<div class="iex-ir">
<input class="iex-full" id="ex2inp2" type="text" placeholder="es: 25 000 000 000 000" onkeydown="if(event.key==='Enter')ex2check(2)">
<button class="iex-vbtn" onclick="ex2check(2)">Verifica</button>
</div>
<div class="iex-fb" id="ex2fb2"></div>
<div class="iex-sol" id="ex2sol2">Soluzione: <strong>25 000 000 000 000</strong> globuli rossi</div>
</div>

</div>

<script>
(function(){
var Q1=[
  {m:2,e:12,mt:0.001},
  {m:4,e:11,mt:0.001},
  {m:1.375,e:-10,mt:0.006},
  {m:8.360576,e:24,mt:0.01},
  {m:8.32,e:25,mt:0.005},
  {m:5.29,e:-11,mt:0.005},
  {m:4.35,e:26,mt:0.005}
];
var Q2=[{v:299792458,tol:0.0001},{v:8.6e-6,tol:0.001},{v:2.5e13,tol:0.001}];
var ex1ok=[false,false,false,false,false,false,false];
var ex2ok=[false,false,false];
var ex1cur=0,ex2cur=0,N1=7,N2=3;

function parseMant(s){var c=s.trim();if(c.indexOf(',')!==-1)c=c.replace(',','.');return parseFloat(c);}
function parseExp(s){return parseInt(s.trim().replace('−','-'),10);}
function parseNum(s){var c=s.trim().replace(/\s/g,'');if(c.indexOf(',')!==-1){c=c.replace(/\./g,'').replace(',','.');}else if((c.match(/\./g)||[]).length>1){c=c.replace(/\./g,'');}return parseFloat(c);}
function shootConf(el){
  var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
  for(var i=0;i<55;i++){
    var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=4+Math.random()*8;
    p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
    document.body.appendChild(p);
    (function(p,vx,vy,x,y){var op=1;function step(){vy+=.28;x+=vx;y+=vy;op-=.016;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(step);else p.remove();}requestAnimationFrame(step);})(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
  }
}
function shootFW(){for(var b=0;b<7;b++)(function(b){setTimeout(function(){shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});},b*270);})(b);}
function showSol(id){document.getElementById(id).style.display='block';}
function updateDots(pfx,cur,ok,N){var dots=document.querySelectorAll('#'+pfx+'dots .iex-dot');for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');}
function ex1show(i){document.querySelectorAll('#iex1 .iex-q').forEach(function(q){q.style.display='none';});document.getElementById('ex1row'+i).style.display='block';ex1cur=i;document.getElementById('ex1prev').disabled=(i===0);document.getElementById('ex1next').disabled=(i===N1-1);updateDots('ex1',i,ex1ok,N1);setTimeout(function(){var inp=document.querySelector('#ex1row'+i+' .iex-m');if(inp&&!ex1ok[i])inp.focus();},60);}
function ex2show(i){document.querySelectorAll('#iex2 .iex-q').forEach(function(q){q.style.display='none';});document.getElementById('ex2row'+i).style.display='block';ex2cur=i;document.getElementById('ex2prev').disabled=(i===0);document.getElementById('ex2next').disabled=(i===N2-1);updateDots('ex2',i,ex2ok,N2);setTimeout(function(){var inp=document.querySelector('#ex2row'+i+' .iex-full');if(inp&&!ex2ok[i])inp.focus();},60);}
function buildDots(pfx,N,showFn){var c=document.getElementById(pfx+'dots');for(var j=0;j<N;j++){var d=document.createElement('span');d.className='iex-dot'+(j===0?' cur':'');d.title='Domanda '+(j+1);(function(j){d.onclick=function(){showFn(j);};})(j);c.appendChild(d);}}
buildDots('ex1',N1,ex1show);
buildDots('ex2',N2,ex2show);
window.showSol=showSol;
window.ex1show=ex1show;
window.ex2show=ex2show;
window.ex1nav=function(d){if(ex1cur+d>=0&&ex1cur+d<N1)ex1show(ex1cur+d);};
window.ex2nav=function(d){if(ex2cur+d>=0&&ex2cur+d<N2)ex2show(ex2cur+d);};
window.ex1check=function(i){
  var mv=parseMant(document.getElementById('ex1m'+i).value);
  var ev=parseExp(document.getElementById('ex1e'+i).value);
  var fb=document.getElementById('ex1fb'+i);
  var vb=document.querySelector('#ex1row'+i+' .iex-vbtn');
  var q=Q1[i];
  var mOk=!isNaN(mv)&&(q.m===0?mv===0:Math.abs(mv-q.m)/Math.abs(q.m)<=q.mt);
  var eOk=!isNaN(ev)&&ev===q.e;
  if(mOk&&eOk){
    ex1ok[i]=true;fb.className='iex-fb ok';
    fb.innerHTML='&#10003; Esatto!'+(i<N1-1?' <button class="iex-nextbtn" onclick="ex1show('+(i+1)+')">Domanda successiva &rarr;</button>':'&ensp;Hai completato l\'esercizio!');
    shootConf(vb);updateDots('ex1',ex1cur,ex1ok,N1);
    if(ex1ok.every(function(x){return x;}))setTimeout(shootFW,600);
  } else {
    fb.className='iex-fb err';
    fb.innerHTML='Non &egrave; esatto. Riprova, oppure <button class="iex-lbtn" onclick="showSol(\'ex1sol'+i+'\')">vedi la soluzione</button>.';
  }
};
window.ex2check=function(i){
  var v=parseNum(document.getElementById('ex2inp'+i).value);
  var fb=document.getElementById('ex2fb'+i);
  var vb=document.querySelector('#ex2row'+i+' .iex-vbtn');
  var q=Q2[i];
  if(!isNaN(v)&&Math.abs(v-q.v)/Math.abs(q.v)<=q.tol){
    ex2ok[i]=true;fb.className='iex-fb ok';
    fb.innerHTML='&#10003; Esatto!'+(i<N2-1?' <button class="iex-nextbtn" onclick="ex2show('+(i+1)+')">Domanda successiva &rarr;</button>':'&ensp;Hai completato l\'esercizio!');
    shootConf(vb);updateDots('ex2',ex2cur,ex2ok,N2);
    if(ex2ok.every(function(x){return x;}))setTimeout(shootFW,600);
  } else {
    fb.className='iex-fb err';
    fb.innerHTML='Non &egrave; esatto. Riprova, oppure <button class="iex-lbtn" onclick="showSol(\'ex2sol'+i+'\')">vedi la soluzione</button>.';
  }
};
})();
</script>


## Le operazioni in Notazione Scientifica

Ci capiterà spesso di sommare, moltiplicare o dividere numeri scritti in notazione scientifica. Per fortuna, le regole sono molto semplici.

<style>
.op-block{background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:1rem 1.5rem;margin:.8rem 0 1.4rem;}
.op-instr{font-size:.84rem;color:#6b7280;margin-bottom:.7rem;font-style:italic;}
.op-steps{display:flex;flex-direction:column;}
.op-step{display:none;align-items:flex-start;gap:1.1rem;padding:.5rem 0;border-top:1px solid #f3f4f6;}
.op-step.vis{display:flex;}
.op-step:first-child{border-top:none;}
.op-math{font-size:1.05rem;min-width:15rem;flex-shrink:0;}
.op-desc{font-size:.85rem;color:#555;flex:1;padding-top:.18rem;}
.op-ctrl{display:flex;gap:.45rem;margin-top:.85rem;}
.op-btn{background:#0f766e;color:#fff;border:none;border-radius:6px;padding:.38rem .85rem;cursor:pointer;font-size:1rem;line-height:1;}
.op-btn:disabled{opacity:.35;cursor:default;}
.op-frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 .12em;}
.op-frac span:first-child{border-bottom:1.5px solid currentColor;padding:0 .2em;}
.op-frac span:last-child{padding:.08em .2em 0;}
</style>

### Somma e sottrazione

{% include box-imp.html titolo="Regola per somma e sottrazione" %}
Per **sommare o sottrarre** numeri in notazione scientifica, essi devono avere lo **stesso esponente**. Se gli esponenti sono diversi, si modifica il più piccolo per eguagliarlo al più grande, spostando opportunamente la virgola del coefficiente.

$$a\times 10^n \pm b\times 10^n = (a\pm b)\times 10^n$$
{% include box-end.html %}

<div class="op-block">
<p class="op-instr">Esempio — somma (clicca &rarr; per il passo successivo).</p>
<div class="op-steps">
<div class="op-step vis">
  <div class="op-math">1,23 &times; 10<sup>3</sup> + 4,56 &times; 10<sup>2</sup></div>
  <div class="op-desc">Equazione di partenza.</div>
</div>
<div class="op-step">
  <div class="op-math">= 1,23 &times; 10<sup>3</sup> + 0,456 &times; 10<sup>3</sup></div>
  <div class="op-desc">Sposto la virgola a sinistra nel secondo addendo per portare l'esponente da 2 a 3.</div>
</div>
<div class="op-step">
  <div class="op-math">= (1,23 + 0,456) &times; 10<sup>3</sup></div>
  <div class="op-desc">Raccolgo il fattore comune 10<sup>3</sup>.</div>
</div>
<div class="op-step">
  <div class="op-math">= 1,686 &times; 10<sup>3</sup></div>
  <div class="op-desc">Eseguo la somma dei coefficienti.</div>
</div>
</div>
<div class="op-ctrl">
  <button class="op-btn op-btn-p" disabled>&larr;</button>
  <button class="op-btn op-btn-n">&rarr;</button>
  <button class="op-btn op-btn-r">&#8635;</button>
</div>
</div>

<div class="op-block">
<p class="op-instr">Esempio — sottrazione (clicca &rarr; per il passo successivo).</p>
<div class="op-steps">
<div class="op-step vis">
  <div class="op-math">7,5 &times; 10<sup>&minus;2</sup> &minus; 2,3 &times; 10<sup>&minus;3</sup></div>
  <div class="op-desc">Equazione di partenza.</div>
</div>
<div class="op-step">
  <div class="op-math">= 7,5 &times; 10<sup>&minus;2</sup> &minus; 0,23 &times; 10<sup>&minus;2</sup></div>
  <div class="op-desc">Porto l'esponente del secondo numero da &minus;3 a &minus;2 spostando la virgola a sinistra.</div>
</div>
<div class="op-step">
  <div class="op-math">= (7,5 &minus; 0,23) &times; 10<sup>&minus;2</sup></div>
  <div class="op-desc">Raccolgo il fattore comune 10<sup>&minus;2</sup>.</div>
</div>
<div class="op-step">
  <div class="op-math">= 7,27 &times; 10<sup>&minus;2</sup></div>
  <div class="op-desc">Eseguo la sottrazione dei coefficienti.</div>
</div>
</div>
<div class="op-ctrl">
  <button class="op-btn op-btn-p" disabled>&larr;</button>
  <button class="op-btn op-btn-n">&rarr;</button>
  <button class="op-btn op-btn-r">&#8635;</button>
</div>
</div>

<div class="iex-widget" id="iex3" style="margin-top:2rem;">
<p class="iex-lbl">Esercizio 3 — Somma e sottrazione in notazione scientifica</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="ex3prev" onclick="ex3nav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="ex3dots"></div>
<button class="iex-navbtn" id="ex3next" onclick="ex3nav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="ex3row0">
<p class="iex-qt"><strong>i)</strong> La popolazione dell'India è $1{,}428 \times 10^9$ persone, quella della Cina è $1{,}409 \times 10^9$ persone. Qual è la loro popolazione complessiva?</p>
<div class="iex-ir">
<input class="iex-m" id="ex3m0" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex3check(0)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex3e0" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex3check(0)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">persone</span>
<button class="iex-vbtn" onclick="ex3check(0)">Verifica</button>
</div>
<div class="iex-fb" id="ex3fb0"></div>
<div class="iex-sol" id="ex3sol0">Soluzione: $(1{,}428 + 1{,}409)\times 10^9 =$ <strong>2,837 &times; 10<sup>9</sup></strong> persone</div>
</div>

<div class="iex-q" id="ex3row1" style="display:none">
<p class="iex-qt"><strong>ii)</strong> La Via Lattea ha circa $3{,}0 \times 10^{11}$ stelle, la galassia di Andromeda ne ha circa $1{,}0 \times 10^{12}$. Quante stelle hanno in totale le due galassie?<span class="iex-note">Attenzione: gli esponenti sono diversi!</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex3m1" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex3check(1)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex3e1" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex3check(1)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">stelle</span>
<button class="iex-vbtn" onclick="ex3check(1)">Verifica</button>
</div>
<div class="iex-fb" id="ex3fb1"></div>
<div class="iex-sol" id="ex3sol1">Soluzione: $3{,}0\times 10^{11} + 10{,}0\times 10^{11} = 13{,}0\times 10^{11} =$ <strong>1,3 &times; 10<sup>12</sup></strong> stelle</div>
</div>

<div class="iex-q" id="ex3row2" style="display:none">
<p class="iex-qt"><strong>iii)</strong> Il raggio di una molecola d'acqua è $1{,}375 \times 10^{-10}$ m, quello di un atomo di idrogeno è $5{,}29 \times 10^{-11}$ m. <em>Di quanto</em> è più grande il raggio della molecola rispetto a quello dell'atomo?<span class="iex-note">Sottrazione! Gli esponenti sono diversi.</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex3m2" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex3check(2)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex3e2" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex3check(2)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex3check(2)">Verifica</button>
</div>
<div class="iex-fb" id="ex3fb2"></div>
<div class="iex-sol" id="ex3sol2">Soluzione: $1{,}375\times 10^{-10} - 0{,}529\times 10^{-10} = 0{,}846\times 10^{-10} =$ <strong>8,46 &times; 10<sup>&minus;11</sup></strong> m</div>
</div>

<div class="iex-q" id="ex3row3" style="display:none">
<p class="iex-qt"><strong>iv)</strong> La massa di un protone è $1{,}673 \times 10^{-27}$ kg, quella di un elettrone è $9{,}11 \times 10^{-31}$ kg. Qual è la massa totale di un atomo di idrogeno (formato da un protone e un elettrone)?<span class="iex-note">Esponenti diversi: converti prima allo stesso esponente.</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex3m3" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex3check(3)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex3e3" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex3check(3)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">kg</span>
<button class="iex-vbtn" onclick="ex3check(3)">Verifica</button>
</div>
<div class="iex-fb" id="ex3fb3"></div>
<div class="iex-sol" id="ex3sol3">Soluzione: $1{,}673\times 10^{-27} + 0{,}000911\times 10^{-27} = 1{,}673911\times 10^{-27} \approx$ <strong>1,674 &times; 10<sup>&minus;27</sup></strong> kg</div>
</div>

<div class="iex-q" id="ex3row4" style="display:none">
<p class="iex-qt"><strong>v)</strong> La lunghezza d'onda della luce infrarossa è $7{,}5 \times 10^{-7}$ m, quella della luce ultravioletta è $3{,}5 \times 10^{-8}$ m. <em>Di quanto</em> è più lunga la lunghezza d'onda dell'infrarosso rispetto all'ultravioletto?<span class="iex-note">Sottrazione! Esponenti diversi.</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex3m4" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex3check(4)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex3e4" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex3check(4)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex3check(4)">Verifica</button>
</div>
<div class="iex-fb" id="ex3fb4"></div>
<div class="iex-sol" id="ex3sol4">Soluzione: $7{,}5\times 10^{-7} - 0{,}35\times 10^{-7} = 7{,}15\times 10^{-7} =$ <strong>7,15 &times; 10<sup>&minus;7</sup></strong> m</div>
</div>

</div>

### Moltiplicazione

{% include box-imp.html titolo="Regola per la moltiplicazione" %}
Per **moltiplicare** due numeri in notazione scientifica, si moltiplicano tra loro i coefficienti e si **sommano** gli esponenti.

$$(a\times10^n)\cdot(b\times10^m) = (a\cdot b)\times 10^{n+m}$$
{% include box-end.html %}

<div class="op-block">
<p class="op-instr">Esempio 1 (clicca &rarr; per il passo successivo).</p>
<div class="op-steps">
<div class="op-step vis">
  <div class="op-math">(2 &times; 10<sup>3</sup>) &middot; (5 &times; 10<sup>&minus;2</sup>)</div>
  <div class="op-desc">Equazione di partenza.</div>
</div>
<div class="op-step">
  <div class="op-math">= (2 &middot; 5) &middot; (10<sup>3</sup> &middot; 10<sup>&minus;2</sup>)</div>
  <div class="op-desc">Raggruppo i coefficienti e le potenze separatamente.</div>
</div>
<div class="op-step">
  <div class="op-math">= 10 &middot; 10<sup>1</sup></div>
  <div class="op-desc">Moltiplico i coefficienti (2&middot;5=10) e sommo gli esponenti (3+(−2)=1).</div>
</div>
<div class="op-step">
  <div class="op-math">= 1 &times; 10<sup>2</sup></div>
  <div class="op-desc">Riscrivo in notazione scientifica: 10=1&times;10<sup>1</sup>, quindi 10&middot;10<sup>1</sup>=1&times;10<sup>2</sup>.</div>
</div>
</div>
<div class="op-ctrl">
  <button class="op-btn op-btn-p" disabled>&larr;</button>
  <button class="op-btn op-btn-n">&rarr;</button>
  <button class="op-btn op-btn-r">&#8635;</button>
</div>
</div>

<div class="op-block">
<p class="op-instr">Esempio 2 (clicca &rarr; per il passo successivo).</p>
<div class="op-steps">
<div class="op-step vis">
  <div class="op-math">(4 &times; 10<sup>&minus;5</sup>) &middot; (3 &times; 10<sup>&minus;2</sup>)</div>
  <div class="op-desc">Equazione di partenza.</div>
</div>
<div class="op-step">
  <div class="op-math">= (4 &middot; 3) &middot; (10<sup>&minus;5</sup> &middot; 10<sup>&minus;2</sup>)</div>
  <div class="op-desc">Raggruppo i coefficienti e le potenze separatamente.</div>
</div>
<div class="op-step">
  <div class="op-math">= 12 &times; 10<sup>&minus;7</sup></div>
  <div class="op-desc">Moltiplico (4&middot;3=12) e sommo gli esponenti (−5+(−2)=−7).</div>
</div>
<div class="op-step">
  <div class="op-math">= 1,2 &times; 10<sup>&minus;6</sup></div>
  <div class="op-desc">Riscrivo in notazione scientifica: 12=1,2&times;10<sup>1</sup>, aumento l'esponente di 1.</div>
</div>
</div>
<div class="op-ctrl">
  <button class="op-btn op-btn-p" disabled>&larr;</button>
  <button class="op-btn op-btn-n">&rarr;</button>
  <button class="op-btn op-btn-r">&#8635;</button>
</div>
</div>

<div class="iex-widget" id="iex4" style="margin-top:2rem;">
<p class="iex-lbl">Esercizio 4 — Moltiplicazione in notazione scientifica</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="ex4prev" onclick="ex4nav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="ex4dots"></div>
<button class="iex-navbtn" id="ex4next" onclick="ex4nav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="ex4row0">
<p class="iex-qt"><strong>i)</strong> Nell'Universo ci sono circa $2\times 10^{12}$ galassie, ognuna con in media $4\times 10^{11}$ stelle. Quante stelle ci sono nell'intero Universo?</p>
<div class="iex-ir">
<input class="iex-m" id="ex4m0" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex4check(0)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex4e0" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex4check(0)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">stelle</span>
<button class="iex-vbtn" onclick="ex4check(0)">Verifica</button>
</div>
<div class="iex-fb" id="ex4fb0"></div>
<div class="iex-sol" id="ex4sol0">Soluzione: $2\times 4\times 10^{12+11} =$ <strong>8 &times; 10<sup>23</sup></strong> stelle</div>
</div>

<div class="iex-q" id="ex4row1" style="display:none">
<p class="iex-qt"><strong>ii)</strong> Un bicchiere d'acqua ha $8{,}36 \times 10^{24}$ molecole. Ogni molecola ha diametro $2{,}75 \times 10^{-10}$ m. Se le metti tutte in fila, quanto è lunga la fila?</p>
<div class="iex-ir">
<input class="iex-m" id="ex4m1" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex4check(1)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex4e1" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex4check(1)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex4check(1)">Verifica</button>
</div>
<div class="iex-fb" id="ex4fb1"></div>
<div class="iex-sol" id="ex4sol1">Soluzione: $8{,}36\times 2{,}75\times 10^{24-10} = 22{,}99\times 10^{14} \approx$ <strong>2,30 &times; 10<sup>15</sup></strong> m — 2 milioni di miliardi di metri!</div>
</div>

<div class="iex-q" id="ex4row2" style="display:none">
<p class="iex-qt"><strong>iii)</strong> La massa di un singolo atomo di idrogeno è $1{,}673 \times 10^{-27}$ kg. Una <em>mole</em> di idrogeno corrisponde a $6{,}022 \times 10^{23}$ atomi di idrogeno. Qual è la massa di una mole di atomi di idrogeno?</p>
<div class="iex-ir">
<input class="iex-m" id="ex4m2" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex4check(2)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex4e2" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex4check(2)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">kg</span>
<button class="iex-vbtn" onclick="ex4check(2)">Verifica</button>
</div>
<div class="iex-fb" id="ex4fb2"></div>
<div class="iex-sol" id="ex4sol2">Soluzione: $1{,}673\times 6{,}022\times 10^{-27+23} = 10{,}07\times 10^{-4} =$ <strong>1,007 &times; 10<sup>&minus;3</sup></strong> kg = 1,007 g (la massa atomica dell'idrogeno!)</div>
</div>

<div class="iex-q" id="ex4row3" style="display:none">
<p class="iex-qt"><strong>iv)</strong> Un cuore batte $7{,}0 \times 10^1$ volte al minuto. In una vita di 80 anni ci sono circa $4{,}2 \times 10^7$ minuti. Quanti battiti compie il cuore in una vita?</p>
<div class="iex-ir">
<input class="iex-m" id="ex4m3" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex4check(3)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex4e3" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex4check(3)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">battiti</span>
<button class="iex-vbtn" onclick="ex4check(3)">Verifica</button>
</div>
<div class="iex-fb" id="ex4fb3"></div>
<div class="iex-sol" id="ex4sol3">Soluzione: $7{,}0\times 4{,}2\times 10^{1+7} = 29{,}4\times 10^8 =$ <strong>2,94 &times; 10<sup>9</sup></strong> battiti in una vita!</div>
</div>

<div class="iex-q" id="ex4row4" style="display:none">
<p class="iex-qt"><strong>v)</strong> In ogni secondo la luce percorre $3{,}0 \times 10^8$ m. Dal Big Bang ad oggi sono trascorsi circa $4{,}35 \times 10^{17}$ secondi. Quanti metri ha percorso la luce emessa nel Big Bang?</p>
<div class="iex-ir">
<input class="iex-m" id="ex4m4" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex4check(4)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex4e4" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex4check(4)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex4check(4)">Verifica</button>
</div>
<div class="iex-fb" id="ex4fb4"></div>
<div class="iex-sol" id="ex4sol4">Soluzione: $3{,}0\times 4{,}35\times 10^{8+17} = 13{,}05\times 10^{25} =$ <strong>1,305 &times; 10<sup>26</sup></strong> m — il raggio dell'Universo osservabile!</div>
</div>

</div>

### Divisione

{% include box-imp.html titolo="Regola per la divisione" %}
Per **dividere** due numeri in notazione scientifica, si dividono tra loro i coefficienti e si **sottraggono** gli esponenti (esponente del numeratore meno esponente del denominatore).

$$\frac{a\times10^n}{b\times10^m} = \frac{a}{b}\times 10^{n-m}$$
{% include box-end.html %}

<div class="op-block">
<p class="op-instr">Esempio 1 — entrambi gli esponenti negativi (clicca &rarr; per il passo successivo).</p>
<div class="op-steps">
<div class="op-step vis">
  <div class="op-math"><div class="op-frac"><span>6 &times; 10<sup>&minus;3</sup></span><span>2 &times; 10<sup>&minus;5</sup></span></div></div>
  <div class="op-desc">Equazione di partenza.</div>
</div>
<div class="op-step">
  <div class="op-math">= <div class="op-frac"><span>6</span><span>2</span></div>&middot;<div class="op-frac"><span>10<sup>&minus;3</sup></span><span>10<sup>&minus;5</sup></span></div></div>
  <div class="op-desc">Separo la divisione dei coefficienti da quella delle potenze di 10.</div>
</div>
<div class="op-step">
  <div class="op-math">= 3 &middot; 10<sup>&minus;3&minus;(&minus;5)</sup></div>
  <div class="op-desc">Divido i coefficienti (6/2=3) e sottraggo gli esponenti.</div>
</div>
<div class="op-step">
  <div class="op-math">= 3 &times; 10<sup>2</sup></div>
  <div class="op-desc">Risultato: &minus;3&minus;(&minus;5) = &minus;3+5 = 2. Sottrarre un numero negativo equivale a sommare!</div>
</div>
</div>
<div class="op-ctrl">
  <button class="op-btn op-btn-p" disabled>&larr;</button>
  <button class="op-btn op-btn-n">&rarr;</button>
  <button class="op-btn op-btn-r">&#8635;</button>
</div>
</div>

<div class="op-block">
<p class="op-instr">Esempio 2 — un esponente positivo e uno negativo (clicca &rarr; per il passo successivo).</p>
<div class="op-steps">
<div class="op-step vis">
  <div class="op-math"><div class="op-frac"><span>4 &times; 10<sup>5</sup></span><span>2 &times; 10<sup>&minus;3</sup></span></div></div>
  <div class="op-desc">Equazione di partenza.</div>
</div>
<div class="op-step">
  <div class="op-math">= <div class="op-frac"><span>4</span><span>2</span></div>&middot;<div class="op-frac"><span>10<sup>5</sup></span><span>10<sup>&minus;3</sup></span></div></div>
  <div class="op-desc">Separo la divisione dei coefficienti da quella delle potenze di 10.</div>
</div>
<div class="op-step">
  <div class="op-math">= 2 &middot; 10<sup>5&minus;(&minus;3)</sup></div>
  <div class="op-desc">Divido (4/2=2) e sottraggo gli esponenti: 5&minus;(&minus;3) = 5+3 = 8.</div>
</div>
<div class="op-step">
  <div class="op-math">= 2 &times; 10<sup>8</sup></div>
  <div class="op-desc">Risultato. Sottrarre un esponente negativo fa <em>aumentare</em> l'esponente totale!</div>
</div>
</div>
<div class="op-ctrl">
  <button class="op-btn op-btn-p" disabled>&larr;</button>
  <button class="op-btn op-btn-n">&rarr;</button>
  <button class="op-btn op-btn-r">&#8635;</button>
</div>
</div>

<div class="iex-widget" id="iex5" style="margin-top:2rem;">
<p class="iex-lbl">Esercizio 5 — Divisione in notazione scientifica</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="ex5prev" onclick="ex5nav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="ex5dots"></div>
<button class="iex-navbtn" id="ex5next" onclick="ex5nav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="ex5row0">
<p class="iex-qt"><strong>i)</strong> La distanza Terra-Sole è $1{,}496 \times 10^{11}$ m. La luce viaggia a $3{,}0 \times 10^8$ m/s. In quanti secondi arriva la luce dal Sole alla Terra?<span class="iex-note">Usa $t = d/v$, con la distanza $d$ al numeratore e la velocità $v$ al denominatore.</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex5m0" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex5check(0)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex5e0" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex5check(0)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">s</span>
<button class="iex-vbtn" onclick="ex5check(0)">Verifica</button>
</div>
<div class="iex-fb" id="ex5fb0"></div>
<div class="iex-sol" id="ex5sol0">Soluzione: $1{,}496/3{,}0\times 10^{11-8} = 0{,}499\times 10^3 =$ <strong>4,99 &times; 10<sup>2</sup></strong> s &asymp; 8 minuti e 19 secondi!</div>
</div>

<div class="iex-q" id="ex5row1" style="display:none">
<p class="iex-qt"><strong>ii)</strong> La massa del Sole è $1{,}989 \times 10^{30}$ kg, quella della Terra è $5{,}972 \times 10^{24}$ kg. Quante volte è più massiccio il Sole rispetto alla Terra?<span class="iex-note">Calcola il rapporto $M_\odot / M_\oplus$, con la massa del Sole $M_\odot$ al numeratore e quella della Terra $M_\oplus$ al denominatore.</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex5m1" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex5check(1)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex5e1" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex5check(1)"></sup></span>
<button class="iex-vbtn" onclick="ex5check(1)">Verifica</button>
</div>
<div class="iex-fb" id="ex5fb1"></div>
<div class="iex-sol" id="ex5sol1">Soluzione: $1{,}989/5{,}972\times 10^{30-24} = 0{,}333\times 10^6 =$ <strong>3,33 &times; 10<sup>5</sup></strong> — il Sole è 333 000 volte più massiccio della Terra!</div>
</div>

<div class="iex-q" id="ex5row2" style="display:none">
<p class="iex-qt"><strong>iii)</strong> La luce gialla ha lunghezza d'onda $\lambda = 5{,}7 \times 10^{-7}$ m. In ogni secondo percorre $c = 3{,}0 \times 10^8$ m. Calcola la sua frequenza con $f = c/\lambda$.<span class="iex-note">Usa $f = c/\lambda$, con $c$ al numeratore e $\lambda$ al denominatore. Attenzione: $\lambda$ ha esponente negativo!</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex5m2" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex5check(2)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex5e2" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex5check(2)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">Hz</span>
<button class="iex-vbtn" onclick="ex5check(2)">Verifica</button>
</div>
<div class="iex-fb" id="ex5fb2"></div>
<div class="iex-sol" id="ex5sol2">Soluzione: $3{,}0/5{,}7\times 10^{8-(-7)} = 0{,}526\times 10^{15} =$ <strong>5,26 &times; 10<sup>14</sup></strong> Hz</div>
</div>

<div class="iex-q" id="ex5row3" style="display:none">
<p class="iex-qt"><strong>iv)</strong> Un bicchiere d'acqua contiene $8{,}36 \times 10^{24}$ molecole. Una <em>mole</em> corrisponde a $6{,}022 \times 10^{23}$ molecole. Quante moli d'acqua ci sono nel bicchiere?<span class="iex-note">Usa $n = N/N_A$, con il numero di molecole $N$ al numeratore e il numero di Avogadro $N_A$ al denominatore.</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex5m3" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex5check(3)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex5e3" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex5check(3)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">mol</span>
<button class="iex-vbtn" onclick="ex5check(3)">Verifica</button>
</div>
<div class="iex-fb" id="ex5fb3"></div>
<div class="iex-sol" id="ex5sol3">Soluzione: $8{,}36/6{,}022\times 10^{24-23} = 1{,}388\times 10^1 \approx$ <strong>13,9 mol</strong> d'acqua (circa 250 mL)</div>
</div>

<div class="iex-q" id="ex5row4" style="display:none">
<p class="iex-qt"><strong>v)</strong> Il DNA umano contiene circa $3{,}0 \times 10^9$ paia di basi, distribuite su $4{,}6 \times 10^1$ cromosomi. Quante paia di basi ha in media ogni cromosoma?<span class="iex-note">Usa: basi per cromosoma $=$ basi totali $\div$ numero di cromosomi, con le basi totali al numeratore e il numero di cromosomi al denominatore.</span></p>
<div class="iex-ir">
<input class="iex-m" id="ex5m4" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex5check(4)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex5e4" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex5check(4)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">paia di basi</span>
<button class="iex-vbtn" onclick="ex5check(4)">Verifica</button>
</div>
<div class="iex-fb" id="ex5fb4"></div>
<div class="iex-sol" id="ex5sol4">Soluzione: $3{,}0/4{,}6\times 10^{9-1} = 0{,}652\times 10^8 =$ <strong>6,52 &times; 10<sup>7</sup></strong> paia di basi per cromosoma (65 milioni!)</div>
</div>

</div>

<script>
(function(){
/* ── op-block step-by-step examples ── */
document.querySelectorAll('.op-block').forEach(function(block){
  var steps=block.querySelectorAll('.op-step');
  var btnN=block.querySelector('.op-btn-n');
  var btnP=block.querySelector('.op-btn-p');
  var btnR=block.querySelector('.op-btn-r');
  var cur=0;
  function upd(){
    steps.forEach(function(s,k){s.classList.toggle('vis',k<=cur);});
    btnP.disabled=(cur===0);
    btnN.disabled=(cur===steps.length-1);
  }
  upd();
  btnN.addEventListener('click',function(){if(cur<steps.length-1){cur++;upd();}});
  btnP.addEventListener('click',function(){if(cur>0){cur--;upd();}});
  btnR.addEventListener('click',function(){cur=0;upd();});
});

/* ── exercise data ── */
var Q3=[
  {v:2.837e9,   tol:0.001},
  {v:1.3e12,    tol:0.001},
  {v:8.46e-11,  tol:0.01},
  {v:1.674e-27, tol:0.002},
  {v:7.15e-7,   tol:0.005}
];
var Q4=[
  {v:8e23,     tol:0.001},
  {v:2.299e15, tol:0.05},
  {v:1.007e-3, tol:0.005},
  {v:2.94e9,   tol:0.05},
  {v:1.305e26, tol:0.02}
];
var Q5=[
  {v:4.987e2,  tol:0.02},
  {v:3.33e5,   tol:0.005},
  {v:5.26e14,  tol:0.01},
  {v:13.88,    tol:0.01},
  {v:6.52e7,   tol:0.02}
];
var ex3ok=[false,false,false,false,false];
var ex4ok=[false,false,false,false,false];
var ex5ok=[false,false,false,false,false];
var ex3c=[0],ex4c=[0],ex5c=[0],N3=5,N4=5,N5=5;

function parseMant(s){var c=s.trim();if(c.indexOf(',')!==-1)c=c.replace(',','.');return parseFloat(c);}
function parseExp(s){return parseInt(s.trim().replace('−','-'),10);}
function shootConf(el){
  var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
  for(var i=0;i<55;i++){
    var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=4+Math.random()*8;
    p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
    document.body.appendChild(p);
    (function(p,vx,vy,x,y){var op=1;function step(){vy+=.28;x+=vx;y+=vy;op-=.016;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(step);else p.remove();}requestAnimationFrame(step);})(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
  }
}
function shootFW(){for(var b=0;b<7;b++)(function(b){setTimeout(function(){shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});},b*270);})(b);}
function updateDots(pfx,cur,ok,N){var dots=document.querySelectorAll('#'+pfx+'dots .iex-dot');for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');}
function buildDots(pfx,N,showFn){var c=document.getElementById(pfx+'dots');for(var j=0;j<N;j++){var d=document.createElement('span');d.className='iex-dot'+(j===0?' cur':'');d.title='Domanda '+(j+1);(function(j){d.onclick=function(){showFn(j);};})(j);c.appendChild(d);}}
function opCheck(pfx,Q,ok,cur,N,i){
  var mv=parseMant(document.getElementById(pfx+'m'+i).value);
  var ev=parseExp(document.getElementById(pfx+'e'+i).value);
  var fb=document.getElementById(pfx+'fb'+i);
  var vb=document.querySelector('#'+pfx+'row'+i+' .iex-vbtn');
  var q=Q[i];
  var computed=mv*Math.pow(10,ev);
  var isOk=!isNaN(computed)&&Math.abs(computed-q.v)/Math.abs(q.v)<=q.tol;
  if(isOk){
    ok[i]=true;fb.className='iex-fb ok';
    fb.innerHTML='&#10003; Esatto!'+(i<N-1?' <button class="iex-nextbtn" onclick="'+pfx+'show('+(i+1)+')">Domanda successiva &rarr;</button>':'&ensp;Hai completato l\'esercizio!');
    if(vb)shootConf(vb);updateDots(pfx,cur[0],ok,N);
    if(ok.every(function(x){return x;}))setTimeout(shootFW,600);
  } else {
    fb.className='iex-fb err';
    fb.innerHTML='Non &egrave; esatto. Riprova, oppure <button class="iex-lbtn" onclick="showSol(\''+pfx+'sol'+i+'\')">vedi la soluzione</button>.';
  }
}
function makeShow(pfx,ok,cur,N){
  return function(i){
    document.querySelectorAll('#iex'+pfx.slice(-1)+' .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById(pfx+'row'+i).style.display='block';
    cur[0]=i;
    document.getElementById(pfx+'prev').disabled=(i===0);
    document.getElementById(pfx+'next').disabled=(i===N-1);
    updateDots(pfx,i,ok,N);
    setTimeout(function(){var inp=document.querySelector('#'+pfx+'row'+i+' .iex-m');if(inp&&!ok[i])inp.focus();},60);
  };
}
var ex3show=makeShow('ex3',ex3ok,ex3c,N3);
var ex4show=makeShow('ex4',ex4ok,ex4c,N4);
var ex5show=makeShow('ex5',ex5ok,ex5c,N5);
buildDots('ex3',N3,ex3show);
buildDots('ex4',N4,ex4show);
buildDots('ex5',N5,ex5show);
window.ex3show=ex3show; window.ex4show=ex4show; window.ex5show=ex5show;
window.ex3nav=function(d){if(ex3c[0]+d>=0&&ex3c[0]+d<N3)ex3show(ex3c[0]+d);};
window.ex4nav=function(d){if(ex4c[0]+d>=0&&ex4c[0]+d<N4)ex4show(ex4c[0]+d);};
window.ex5nav=function(d){if(ex5c[0]+d>=0&&ex5c[0]+d<N5)ex5show(ex5c[0]+d);};
window.ex3check=function(i){opCheck('ex3',Q3,ex3ok,ex3c,N3,i);};
window.ex4check=function(i){opCheck('ex4',Q4,ex4ok,ex4c,N4,i);};
window.ex5check=function(i){opCheck('ex5',Q5,ex5ok,ex5c,N5,i);};
})();
</script>
## Dalle unità ai loro multipli e sottomultipli

Finora abbiamo parlato del metro, del chilo, del secondo, etc. Eppure sappiamo che esistono tante altre scale, come i chilometri, i centimetri, i millimetri, i grammi, le ore, etc. Queste *non* sono unità di misura differenti, bensì *multipli differenti* delle stesse unità di misura. Passare da metri a centimetri è molto semplice; passare da metri a miglia, no.

Un centimetro (che si indica con «cm») è definito come $0{,}01$ metri. Se non te lo ricordi, pensa alla parola: «centimetro» comincia con «cent» e ti suggerisce che è *un centesimo* del metro. Quindi, in notazione scientifica:

$$1\ \text{cm} = 10^{-2}\ \text{m} \qquad \text{oppure} \qquad 1\ \text{m} = 10^2\ \text{cm}.$$

Attenzione a non confonderti! $1\ \text{m} = 10^2\ \text{cm}$ e **non** $1\ \text{m} = 10^{-2}\ \text{cm}$. Se hai dei dubbi, pensa al fatto che il metro è più grande del centimetro, quindi un metro sono *molti* centimetri.

Perciò, se abbiamo $0{,}000\,000\,1234\ \text{m}$, possiamo scriverlo come $1{,}234 \times 10^{-7}\ \text{m}$ e poi riportarlo in centimetri come

$$1{,}234 \times 10^{-7} \times 10^{2}\ \text{cm} = 1{,}234 \times 10^{-5}\ \text{cm}.$$

Per i millimetri: la parola ci dice che sono un *millesimo* di metro, quindi

$$1\ \text{mm} = 10^{-3}\ \text{m}, \qquad \qquad 1\ \text{km} = 10^3\ \text{m}.$$

In generale, i multipli e sottomultipli del metro sono i seguenti:

| Nome | Simbolo | Valore |
|------|---------|--------|
| picometro | pm | $10^{-12}\ \text{m}$ |
| nanometro | nm | $10^{-9}\ \text{m}$ |
| micrometro | μm | $10^{-6}\ \text{m}$ |
| millimetro | mm | $10^{-3}\ \text{m}$ |
| centimetro | cm | $10^{-2}\ \text{m}$ |
| decimetro | dm | $10^{-1}\ \text{m}$ |
| **metro** | **m** | $10^{0}\ \text{m}$ |
| decametro | dam | $10^{1}\ \text{m}$ |
| ettometro | hm | $10^{2}\ \text{m}$ |
| chilometro | km | $10^{3}\ \text{m}$ |
| megametro | Mm | $10^{6}\ \text{m}$ |
| gigametro | Gm | $10^{9}\ \text{m}$ |
| terametro | Tm | $10^{12}\ \text{m}$ |

Qui abbiamo fatto l'esempio con il metro, ma in realtà vale anche per tutto il resto. In generale, queste lettere che si mettono prima dell'unità di misura si chiamano «prefissi» e possono essere messe di fronte a ciascuna unità di misura. Ad esempio, si può parlare di «millikelvin» (mK), etc. Fate attenzione: per il kg, non c'è il «millichilogrammo», bensì semplicemente il grammo!

| Nome | Simbolo | Valore | | Nome | Simbolo | Valore |
|------|---------|--------|-|------|---------|--------|
| pico | p | $10^{-12}$ | | deca | da | $10^{1}$ |
| nano | n | $10^{-9}$ | | hecto | h | $10^{2}$ |
| micro | μ | $10^{-6}$ | | kilo | k | $10^{3}$ |
| milli | m | $10^{-3}$ | | mega | M | $10^{6}$ |
| centi | c | $10^{-2}$ | | giga | G | $10^{9}$ |
| deci | d | $10^{-1}$ | | tera | T | $10^{12}$ |

Non voglio che le memorizziate tutte, però vorrei che sapeste queste, perché sono le più utilizzate: **nano** (n, $10^{-9}$), **micro** (μ, $10^{-6}$), **milli** (m, $10^{-3}$), **centi** (c, $10^{-2}$), **kilo** (k, $10^{3}$), **mega** (M, $10^{6}$), **giga** (G, $10^{9}$).

Quindi come facciamo a passare da nanokelvin a kelvin?

$$1\ \text{nK} = 10^{-9}\ \text{K}$$

e allo stesso modo, da microsecondi a secondi:

$$0{,}0567\ \mu\text{s} = 5{,}67 \times 10^{-2}\ \mu\text{s} = 5{,}67 \times 10^{-2} \times 10^{-6}\ \text{s} = 5{,}67\times 10^{-8}\ \text{s}.$$

E se volessimo passare da secondi a minuti? Qui la situazione è leggermente diversa: non possiamo farlo con le potenze di $10$. Per passare da secondi a minuti, dobbiamo notare che un minuto è composto da esattamente $60$ secondi:

$$1\ \text{min} = 60\ \text{s}, \qquad \qquad 1\ \text{s} = \frac{1}{60}\ \text{min}.$$

Per passare da secondi a ore, dobbiamo dividere per $60 \times 60 = 3\,600$. Invece, per passare da ore a secondi, dobbiamo moltiplicare per $3\,600$.

Non ti confondere! In un'ora ci sono molti secondi, quindi nel passaggio da ore a secondi si *moltiplica* per un numero grande, e nel passaggio inverso si *divide*:

$$1\ \text{s} = \frac{1}{3\,600}\ \text{h}, \qquad \qquad 1\ \text{h} = 3\,600\ \text{s}.$$

Ad esempio: $3{,}45\ \text{h} = 3{,}45\times 3\,600\ \text{s} = 12\,420\ \text{s} = 1{,}242 \times 10^4\ \text{s}$.

Ora, in generale vale la seguente regola, *per qualsiasi unità di misura*:

{% include box-def.html %}

Ogni volta che devo convertire un numero da un'unità di misura $x$ a un'altra unità di misura $y$, faccio le seguenti cose.

1. Calcolo la relazione tra le due unità: trovo $a$ tale che $1\ x = a\ y$ (ad esempio, $1\ \text{km} = 10^3\ \text{m}$, oppure $1\ \text{h} = 3\,600\ \text{s}$).
2. Nel numero di partenza, al posto di $x$ scrivo $\cdot\, a\, y$: se $1\,x = a\, y$, allora $b\, x = b\cdot a \cdot y$.

{% include box-end.html %}

{% include box-note.html titolo="Esempio" %}

Sappiamo che $1\ \text{s} = \dfrac{1}{3\,600}\ \text{h}$.

Per convertire $5\ \text{s}$ in ore, ci basta fare

$$5\ \text{s} = 5 \cdot \frac{1}{3\,600}\ \text{h} = \frac{5}{3\,600}\ \text{h} \approx 1{,}389 \times 10^{-3}\ \text{h}.$$

{% include box-end.html %}

{% include box-ex.html titolo="Esercizio 3 — Conversioni" %}

Converti, utilizzando la notazione scientifica, i seguenti numeri nelle unità di misura indicate.

i) $1{,}234\ \text{nK}$ in $\text{MK}$

ii) $0{,}004\ \text{km}$ in $\mu\text{m}$

iii) $6\,579{,}88\ \text{Mg}$ in $\text{mg}$

iv) $3{,}5\times 10^{10}\ \text{cm}$ in $\text{km}$

v) $278\ \text{ms}$ in $\text{ns}$

vi) $45\ \text{min}$ in $\text{s}$

vii) $7{,}2\times 10^{-4}\ \text{s}$ in $\text{min}$

viii) $1{,}8\ \text{h}$ in $\text{s}$

{% include box-end.html %}

## Le grandezze derivate (cenni)

{% include box-note.html titolo="Bonus — non richiesto in verifica" %}

*Questa parte non è richiesta in verifica. Però, se la volete studiare, chiedetemelo: sarebbe valutata molto positivamente.*

{% include box-end.html %}

### Area

Immaginate di dover misurare l'area di un rettangolo. Non la potete misurare in metri, perché i metri sono l'unità di misura della lunghezza, e un'area non è una lunghezza! Però sapete che l'area di un rettangolo si calcola come $A = b \cdot h$. Se misuriamo la base e l'altezza in metri, l'area è il prodotto di qualcosa in metri per qualcosa in metri, quindi la sua unità di misura è **metro quadrato** ($\text{m}^2$). Ad esempio, con $b = 2\ \text{m}$ e $h = 1\ \text{m}$:

$$A = (2\ \text{m}) \times (1\ \text{m}) = 2\ \text{m}^2.$$

Non ho bisogno di inventare una nuova unità di misura: mi basta elevare il metro al quadrato. Ecco perché l'area è una grandezza *derivata*.

Ora proviamo a passare da metri quadri a centimetri quadri. Ricordiamo che $a^m\cdot a^n = a^{m+n}$:

$$1\ \text{m}^2 = (10^2\ \text{cm}) \times (10^2\ \text{cm}) = 10^4\ \text{cm}^2.$$

{% include box-warn.html titolo="Attenzione" %}

**Non è vero** che $1\ \text{m}^2 = 10^2\ \text{cm}^2$. La risposta corretta è $1\ \text{m}^2 = 10^4\ \text{cm}^2$.

{% include box-end.html %}

Allo stesso modo: $1\ \text{m}^2 = 10^6\ \text{mm}^2$, e $1\ \mu\text{m}^2 = 10^{-12}\ \text{km}^2$.

{% include box-def.html %}

Per passare da un multiplo/sottomultiplo del **metro quadro** a un altro, si prende l'esponente di $10$ che permette di passare da un multiplo del metro all'altro e lo si moltiplica per **2**.

{% include box-end.html %}

### Volume

Il volume del cubo si calcola come $V = \ell^3$, dove $\ell$ è il lato. Con $\ell = 1\ \text{m}$:

$$V = 1\ \text{m} \times 1\ \text{m} \times 1\ \text{m} = 1\ \text{m}^3.$$

L'unità di misura del volume è quindi **metro cubo** ($\text{m}^3$). Proviamo a esprimere un metro cubo in centimetri cubi:

$$1\ \text{m}^3 = (10^2\ \text{cm}) \times (10^2\ \text{cm}) \times (10^2\ \text{cm}) = 10^{6}\ \text{cm}^3.$$

{% include box-warn.html titolo="Attenzione" %}

**Non è vero** che $1\ \text{m}^3 = 10^2\ \text{cm}^3$. La risposta corretta è $1\ \text{m}^3 = 10^6\ \text{cm}^3$.

{% include box-end.html %}

Allo stesso modo: $1\ \text{mm}^3 = 10^{-18}\ \text{km}^3$.

{% include box-def.html %}

Per passare da un multiplo/sottomultiplo del **metro cubo** a un altro, si prende l'esponente di $10$ che permette di passare da un multiplo del metro all'altro e lo si moltiplica per **3**.

{% include box-end.html %}

{% include box-ex.html titolo="Esercizio 4 — Aree e volumi" %}

Converti i seguenti numeri:

i) $1\ \mu\text{m}^3$ in megametri cubi &nbsp; [risposta: $10^{-36}\ \text{Mm}^3$]

ii) $67{,}12\ \text{nm}^2$ in metri quadri

iii) $5\,123\,456\ \text{m}^2$ in nanometri quadri

iv) $3{,}45\ \text{mm}^3$ in centimetri cubi

v) $0{,}0025\ \text{km}^2$ in metri quadri

vi) $7{,}1\ \text{cm}^2$ in metri quadri

vii) $12{,}6\ \text{Gm}^3$ in metri cubi

{% include box-end.html %}

# L'incertezza

Vi ricordate quello che abbiamo fatto durante la nostra prima lezione di Fisica? Abbiamo misurato il lato della lavagna e abbiamo osservato

- che è necessario specificare l'unità di misura;

*— il contenuto di questa sezione sarà completato prossimamente.*
