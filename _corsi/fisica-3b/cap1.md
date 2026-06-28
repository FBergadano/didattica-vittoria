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

«Misurare» significa associare **un numero** a una *caratteristica* di un oggetto. Descrivere il mondo con i numeri, significa scegliere <u>di utilizzare il linguaggio della Matematica</u>. Ecco perché la Fisica è fatta di equazioni. Naturalmente, non tutto si può esprimere con i numeri. La Fisica si limita dunque a descrivere solo le caratteristiche misurabili di un oggetto, che si chiamano <definizione>grandezze fisiche</definizione>.

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

<table id="tab-si" style="border-collapse:collapse;margin:1rem 0;font-size:15px;">
  <thead>
    <tr>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Grandezza</th>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Unità di misura</th>
      <th style="padding:6px 20px 6px 8px;border-bottom:2px solid #555;text-align:left;">Simbolo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Lunghezza</td>
      <td style="padding:6px 20px 6px 8px;">metro</td>
      <td style="padding:6px 20px 6px 8px;">m</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Tempo</td>
      <td style="padding:6px 20px 6px 8px;">secondo</td>
      <td style="padding:6px 20px 6px 8px;">s</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Massa</td>
      <td style="padding:6px 20px 6px 8px;">chilogrammo</td>
      <td style="padding:6px 20px 6px 8px;">kg</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Temperatura</td>
      <td style="padding:6px 20px 6px 8px;">kelvin</td>
      <td style="padding:6px 20px 6px 8px;">K</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Intensità di corrente</td>
      <td style="padding:6px 20px 6px 8px;">ampere</td>
      <td style="padding:6px 20px 6px 8px;">A</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;">Quantità di materia</td>
      <td style="padding:6px 20px 6px 8px;">mole</td>
      <td style="padding:6px 20px 6px 8px;">mol</td>
    </tr>
    <tr>
      <td style="padding:6px 20px 6px 8px;border-bottom:1px solid #ccc;">Intensità luminosa</td>
      <td style="padding:6px 20px 6px 8px;border-bottom:1px solid #ccc;">candela</td>
      <td style="padding:6px 20px 6px 8px;border-bottom:1px solid #ccc;">cd</td>
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

E se invece il numero è molto piccolo, come nel caso della massa dell'elettrone? Facciamo lo stesso ragionamento, ma anziché far scivolare la virgola verso sinistra la facciamo scivolare verso destra. Questo significa che invece di moltiplicare per $10$ stiamo **dividendo** per $10$. Quindi

$$
0{,}00\, 000 \,000 \,000 \,000 \,000 \,000 \,000 \,000 \,000 1 = 1\div\underbrace{ 10 \div 10 \div \cdots \div 10}_{30 \text{ volte}} = \frac 1 {10^{30}}.
$$

Ricordiamo inoltre che $\frac 1 {10^n} = 10^{-n}$, quindi

$$
0{,}00 \,000 \,000 \,000 \,000 \,000 \,000 \,000 \,000 \,000 1 = 10^{-30}.
$$

In generale, il numero di zeri che compare prima della prima cifra, incluso quello prima della virgola, è pari all'esponente con un meno di fronte:

$$0{,}00\,1= 10^{-3}, \qquad 0{,}00\, 2 = 2\times 10^{-3}, \qquad 0{,}00\, 000\, 003\, 21 = 3{,}21\times 10^{-8}$$

Anche in questo caso, il numero di salti verso destra che fa la virgola diventa l'esponente, ma con un segno meno. Ad esempio, la massa dell'elettrone può essere scritta come

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
<input class="iex-full" id="ex2inp1" type="text" placeholder="?" onkeydown="if(event.key==='Enter')ex2check(1)">
<button class="iex-vbtn" onclick="ex2check(1)">Verifica</button>
</div>
<div class="iex-fb" id="ex2fb1"></div>
<div class="iex-sol" id="ex2sol1">Soluzione: <strong>0,0000086 m</strong></div>
</div>

<div class="iex-q" id="ex2row2" style="display:none">
<p class="iex-qt"><strong>iii)</strong> Il numero di globuli rossi in un uomo medio: $n_\text{globuli rossi} = 2{,}5\times 10^{13}\ \text{globuli rossi}$<span class="iex-note">(è più grande del numero di stelle nella Via Lattea, la nostra galassia)</span></p>
<div class="iex-ir">
<input class="iex-full" id="ex2inp2" type="text" placeholder="?" onkeydown="if(event.key==='Enter')ex2check(2)">
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


### La notazione scientifica sulla calcolatrice

Quando la calcolatrice esegue un'operazione e il risultato è molto grande o molto piccolo, sul display **non c'è spazio per mostrare tutte le cifre** nella forma decimale estesa. Allora la calcolatrice usa automaticamente la notazione scientifica, ma con una sintassi diversa da quella che usiamo su carta: al posto di «$\times 10^n$» compare semplicemente la lettera **E** (dall'inglese *exponent*) seguita dall'esponente.

<figure style="text-align:center;margin:2rem auto 1.5rem;max-width:400px;">
<svg viewBox="0 0 400 196" width="100%" style="max-width:400px;display:block;margin:0 auto;">
  <rect x="5" y="5" width="390" height="186" rx="14" fill="rgba(0,0,0,.30)"/>
  <rect x="0" y="0" width="390" height="186" rx="14" fill="#1e1e1e"/>
  <rect x="1" y="1" width="388" height="9" rx="13" fill="rgba(255,255,255,.06)"/>
  <rect x="18" y="16" width="354" height="154" rx="7" fill="#0a0a0a"/>
  <rect x="22" y="20" width="346" height="146" rx="5" fill="#b8c87a"/>
  <rect x="22" y="20" width="346" height="60" rx="5" fill="rgba(255,255,255,.09)"/>
  <text x="358" y="68" font-family="'Courier New',Courier,monospace" font-size="15" fill="#3a4a18" text-anchor="end" opacity="0.75">1 ÷ 3600 =</text>
  <text x="358" y="138" font-family="'Courier New',Courier,monospace" font-size="46" font-weight="bold" fill="#0c1804" text-anchor="end" letter-spacing="1">2.7778E-4</text>
</svg>
<figcaption style="font-size:.85rem;color:#6b7280;margin-top:.5rem;">Display di una calcolatrice scientifica dopo aver calcolato 1 ÷ 3600</figcaption>
</figure>

La lettera **E** va letta come «per dieci alla»: dunque

$$a\,\texttt{E}\,n \;=\; a \times 10^{n}.$$

Nel display qui sopra, `2.7778E-4` significa $2{,}7778 \times 10^{-4}$ — cioè $0{,}00027778$.

{% include box-note.html titolo="Altri esempi di notazione E" %}

<table style="width:100%;border-collapse:collapse;margin:.4rem 0;">
<tr>
  <th style="padding:5px 22px 5px 6px;border-bottom:2px solid #b0c4de;text-align:left;">Sul display</th>
  <th style="padding:5px 22px 5px 6px;border-bottom:2px solid #b0c4de;text-align:left;">Significato</th>
  <th style="padding:5px 6px 5px 6px;border-bottom:2px solid #b0c4de;text-align:left;">Valore decimale</th>
</tr>
<tr>
  <td style="padding:5px 22px 5px 6px;"><code>1.234E-5</code></td>
  <td style="padding:5px 22px 5px 6px;">$1{,}234 \times 10^{-5}$</td>
  <td style="padding:5px 6px 5px 6px;">$0{,}00001234$</td>
</tr>
<tr>
  <td style="padding:5px 22px 5px 6px;"><code>6.022E+23</code></td>
  <td style="padding:5px 22px 5px 6px;">$6{,}022 \times 10^{23}$</td>
  <td style="padding:5px 6px 5px 6px;">$602\,200\,000\,000\,000\,000\,000\,000$</td>
</tr>
<tr>
  <td style="padding:5px 22px 5px 6px;border-bottom:1px solid #e5e7eb;"><code>9.109E-31</code></td>
  <td style="padding:5px 22px 5px 6px;border-bottom:1px solid #e5e7eb;">$9{,}109 \times 10^{-31}$</td>
  <td style="padding:5px 6px 5px 6px;border-bottom:1px solid #e5e7eb;">massa dell'elettrone in kg</td>
</tr>
</table>

{% include box-end.html %}


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
<p class="iex-qt"><strong>iv)</strong> Un bicchiere d'acqua contiene $8{,}36 \times 10^{24}$ molecole. Una <em>mole</em> corrisponde a $N_A = 6{,}022 \times 10^{23}$ molecole. Quante moli d'acqua ci sono nel bicchiere?<span class="iex-note">Usa $n = N/N_A$, con il numero di molecole $N$ al numeratore e il numero di Avogadro $N_A$ al denominatore.</span></p>
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
<p class="iex-qt"><strong>v)</strong> Il DNA umano contiene circa $3{,}0 \times 10^9$ paia di basi, distribuite su $4{,}6 \times 10^1$ cromosomi. Quante paia di basi ha in media ogni cromosoma?<span class="iex-note">Usa: basi per cromosoma $=$ basi totali / numero di cromosomi.</span></p>
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

Se doveste misurare la lunghezza di una formica, probabilmente non vi verrebbe da utilizzare la notazione scientifica, bensì esprimereste semplicemente la lunghezza in millimetri anziché metri. Non state realmente cambiando unità di misura, state semplicemente utilizzando un **sottomultiplo** del metro. Allo stesso modo, se doveste misurare la distanza tra Torino e Milano, difficilmente direste che corrisponde a circa $200\, 000 \ \text m$: più facilmente direste che sono circa $200\, \text{km}$. In questo caso state utilizzando un **multiplo** del metro.

Questi multipli e sottomultipli sono gli stessi per tutte le unità di misura e si indicano semplicemente con una lettera davanti al simbolo dell'unità di misura. Essi si basano sulle potenze di $10$. Ad esempio, un kilometro si indica con $1\ \text{km}$ e corrisponde a 

$$1\ \text{km} = 1\,000 \text m = 10^3 \ \text m.$$

Allo stesso modo, il millimetro si indica con $1 \ \text{mm}$ e corrisponde a

$$ 1 \ \text{mm} = 0{,}00\, 1 m = 10^{-3} \ \text m.$$


Ecco la lista dei prefissi dei multipli e sottomultipli.

<div style="overflow-x:auto;margin:1.2rem 0;">
<table style="width:100%;border-collapse:collapse;font-size:.95rem;">
<thead><tr style="background:#f1f5f9;border-bottom:2px solid #cbd5e1;">
  <th style="padding:.45rem 1.2rem;text-align:left;">Prefisso</th>
  <th style="padding:.45rem 1.2rem;text-align:center;">Simbolo</th>
  <th style="padding:.45rem 1.2rem;text-align:center;">Fattore</th>
  <th style="padding:.45rem 1.2rem;text-align:left;">Esempio</th>
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">Tera</td> <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">T</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{12}$</td>  <td style="padding:.4rem 1.2rem;">1 Ts = $10^{12}$ s</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">Giga</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">G</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{9}$</td>   <td style="padding:.4rem 1.2rem;">1 Gm = $10^{9}$ m</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">Mega</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">M</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{6}$</td>   <td style="padding:.4rem 1.2rem;">1 Mg = $10^{6}$ g</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">kilo</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">k</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{3}$</td>   <td style="padding:.4rem 1.2rem;">1 kg = $10^{3}$ g</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">etto</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">h</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{2}$</td>   <td style="padding:.4rem 1.2rem;">1 hg = $10^{2}$ g</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">deca</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">da</td> <td style="padding:.4rem 1.2rem;text-align:center;">$10^{1}$</td>   <td style="padding:.4rem 1.2rem;">1 dag = $10^{1}$ g</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">deci</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">d</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-1}$</td>  <td style="padding:.4rem 1.2rem;">1 dm = $10^{-1}$ m</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">centi</td> <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">c</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-2}$</td>  <td style="padding:.4rem 1.2rem;">1 cm = $10^{-2}$ m</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">milli</td> <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">m</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-3}$</td>  <td style="padding:.4rem 1.2rem;">1 ms = $10^{-3}$ s</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">micro</td> <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">μ</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-6}$</td>  <td style="padding:.4rem 1.2rem;">1 μm = $10^{-6}$ m</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">nano</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">n</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-9}$</td>  <td style="padding:.4rem 1.2rem;">1 ns = $10^{-9}$ s</td></tr>
<tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:.4rem 1.2rem;">pico</td>  <td style="padding:.4rem 1.2rem;text-align:center;font-weight:bold;">p</td>  <td style="padding:.4rem 1.2rem;text-align:center;">$10^{-12}$</td> <td style="padding:.4rem 1.2rem;">1 pm = $10^{-12}$ m</td></tr>
</tbody></table></div>


Questi prefissi si possono ordinare su una retta dal più piccolo al più grande nel seguente modo.

<div style="overflow-x:auto;margin:1.5rem 0;">
<svg viewBox="0 0 700 115" width="700" style="max-width:100%;display:block;min-width:420px;margin:auto;">
  <line x1="20" y1="60" x2="638" y2="60" stroke="#374151" stroke-width="2"/>
  <polygon points="642,60 632,55 632,65" fill="#374151"/>
  <text x="648" y="64" font-size="10" fill="#374151" font-style="italic">grandezza</text>
<line x1="25" y1="46" x2="25" y2="74" stroke="#7c3aed" stroke-width="2.5"/>
<text x="25" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#7c3aed">p</text>
<text x="25" y="88" text-anchor="middle" fill="#7c3aed"><tspan font-size="12">10</tspan><tspan dy="-5" font-size="9">&#8722;12</tspan></text>
<text x="25" y="102" text-anchor="middle" font-size="11" fill="#7c3aed">pico</text>
<line x1="90" y1="46" x2="90" y2="74" stroke="#4f46e5" stroke-width="2.5"/>
<text x="90" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#4f46e5">n</text>
<text x="90" y="88" text-anchor="middle" fill="#4f46e5"><tspan font-size="12">10</tspan><tspan dy="-5" font-size="9">&#8722;9</tspan></text>
<text x="90" y="102" text-anchor="middle" font-size="11" fill="#4f46e5">nano</text>
<line x1="155" y1="46" x2="155" y2="74" stroke="#2563eb" stroke-width="2.5"/>
<text x="155" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">μ</text>
<text x="155" y="88" text-anchor="middle" fill="#2563eb"><tspan font-size="12">10</tspan><tspan dy="-5" font-size="9">&#8722;6</tspan></text>
<text x="155" y="102" text-anchor="middle" font-size="11" fill="#2563eb">micro</text>
<line x1="220" y1="46" x2="220" y2="74" stroke="#0891b2" stroke-width="2.5"/>
<text x="220" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#0891b2">m</text>
<text x="220" y="88" text-anchor="middle" fill="#0891b2"><tspan font-size="12">10</tspan><tspan dy="-5" font-size="9">&#8722;3</tspan></text>
<text x="220" y="102" text-anchor="middle" font-size="11" fill="#0891b2">milli</text>
<line x1="255" y1="30" x2="255" y2="65" stroke="#0d9488" stroke-width="1.8"/>
<text x="255" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#0d9488">c</text>
<text x="255" y="14" text-anchor="middle" fill="#0d9488"><tspan font-size="11">10</tspan><tspan dy="-4" font-size="8">&#8722;2</tspan></text>
<line x1="290" y1="55" x2="290" y2="90" stroke="#16a34a" stroke-width="1.8"/>
<text x="290" y="97" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">d</text>
<text x="290" y="112" text-anchor="middle" fill="#16a34a"><tspan font-size="11">10</tspan><tspan dy="-4" font-size="8">&#8722;1</tspan></text>
<line x1="325" y1="30" x2="325" y2="65" stroke="#6b7280" stroke-width="1.8"/>
<text x="325" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#6b7280">—</text>
<text x="325" y="14" text-anchor="middle" fill="#6b7280"><tspan font-size="11">10</tspan><tspan dy="-4" font-size="8">0</tspan></text>
<line x1="360" y1="55" x2="360" y2="90" stroke="#ca8a04" stroke-width="1.8"/>
<text x="360" y="97" text-anchor="middle" font-size="12" font-weight="bold" fill="#ca8a04">da</text>
<text x="360" y="112" text-anchor="middle" fill="#ca8a04"><tspan font-size="11">10</tspan><tspan dy="-4" font-size="8">1</tspan></text>
<line x1="395" y1="30" x2="395" y2="65" stroke="#d97706" stroke-width="1.8"/>
<text x="395" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706">h</text>
<text x="395" y="14" text-anchor="middle" fill="#d97706"><tspan font-size="11">10</tspan><tspan dy="-4" font-size="8">2</tspan></text>
<line x1="430" y1="46" x2="430" y2="74" stroke="#ea580c" stroke-width="2.5"/>
<text x="430" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#ea580c">k</text>
<text x="430" y="88" text-anchor="middle" fill="#ea580c"><tspan font-size="12">10</tspan><tspan dy="-5" font-size="9">3</tspan></text>
<text x="430" y="102" text-anchor="middle" font-size="11" fill="#ea580c">kilo</text>
<line x1="495" y1="46" x2="495" y2="74" stroke="#dc2626" stroke-width="2.5"/>
<text x="495" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#dc2626">M</text>
<text x="495" y="88" text-anchor="middle" fill="#dc2626"><tspan font-size="12">10</tspan><tspan dy="-5" font-size="9">6</tspan></text>
<text x="495" y="102" text-anchor="middle" font-size="11" fill="#dc2626">Mega</text>
<line x1="560" y1="46" x2="560" y2="74" stroke="#be185d" stroke-width="2.5"/>
<text x="560" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#be185d">G</text>
<text x="560" y="88" text-anchor="middle" fill="#be185d"><tspan font-size="12">10</tspan><tspan dy="-5" font-size="9">9</tspan></text>
<text x="560" y="102" text-anchor="middle" font-size="11" fill="#be185d">Giga</text>
<line x1="625" y1="46" x2="625" y2="74" stroke="#7e22ce" stroke-width="2.5"/>
<text x="625" y="38" text-anchor="middle" font-size="15" font-weight="bold" fill="#7e22ce">T</text>
<text x="625" y="88" text-anchor="middle" fill="#7e22ce"><tspan font-size="12">10</tspan><tspan dy="-5" font-size="9">12</tspan></text>
<text x="625" y="102" text-anchor="middle" font-size="11" fill="#7e22ce">Tera</text>
</svg>
</div>

{% include box-imp.html titolo="Come convertire tra prefissi" %}
Ogni prefisso ha un **esponente** (visibile in tabella e sulla retta). Per convertire un numero da un prefisso a un altro:

1. Guarda l'esponente del prefisso di **partenza** ($n$) e quello di **arrivo** ($m$).
2. Calcola la differenza: $n - m$.
3. Moltiplica il numero per $10^{n-m}$.

$$\underbrace{a \times 10^n}_{\text{prefisso partenza}} = a \times 10^{n-m} \times \underbrace{10^m}_{\text{prefisso arrivo}}$$

Se $n > m$ (vai verso un prefisso più piccolo, cioè verso sinistra), il numero cresce. Se $n < m$ (vai verso un prefisso più grande, cioè verso destra), il numero diminuisce.
{% include box-end.html %}

{% include box-blue.html titolo="Esempi" %}
**Esempio 1 — km in m:** k ha esponente 3, la base ha esponente 0. Differenza: $3-0=3$. Quindi $5\ \text{km} = 5\times 10^3\ \text{m} = 5000\ \text{m}$.

**Esempio 2 — mm in μm:** m ha esponente $-3$, μ ha esponente $-6$. Differenza: $-3-(-6)=3$. Quindi $2\ \text{mm} = 2\times 10^3\ \text{µm} = 2000\ \text{µm}$.

**Esempio 3 — Mm in km:** M ha esponente 6, k ha esponente 3. Differenza: $6-3=3$. Quindi $4\ \text{Mm} = 4\times 10^3\ \text{km} = 4000\ \text{km}$.

**Esempio 4 — cm in m:** c ha esponente $-2$, la base ha esponente 0. Differenza: $-2-0=-2$. Quindi $150\ \text{cm} = 150\times 10^{-2}\ \text{m} = 1{,}50\ \text{m}$.
{% include box-end.html %}



<div class="iex-widget" id="iex6" style="margin-top:2rem;">
<p class="iex-lbl">Esercizio 6 — Prefissi e notazione scientifica</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="ex6prev" onclick="ex6nav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="ex6dots"></div>
<button class="iex-navbtn" id="ex6next" onclick="ex6nav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="ex6row0">
<p class="iex-qt"><strong>i)</strong> Esprimi $5\ \text{mm}$ in metri usando la notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="ex6m0" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex6check(0)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex6e0" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex6check(0)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex6check(0)">Verifica</button>
</div>
<div class="iex-fb" id="ex6fb0"></div>
<div class="iex-sol" id="ex6sol0">Soluzione: $5\ \text{mm} = 5\times 10^{-3}\ \text{m}$ &mdash; 1 mm = $10^{-3}$ m, quindi si moltiplica per $10^{-3}$.</div>
</div>
<div class="iex-q" id="ex6row1" style="display:none">
<p class="iex-qt"><strong>ii)</strong> Esprimi $3\ \text{km}$ in metri usando la notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="ex6m1" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex6check(1)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex6e1" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex6check(1)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex6check(1)">Verifica</button>
</div>
<div class="iex-fb" id="ex6fb1"></div>
<div class="iex-sol" id="ex6sol1">Soluzione: $3\ \text{km} = 3\times 10^{3}\ \text{m}$ &mdash; 1 km = $10^{3}$ m.</div>
</div>
<div class="iex-q" id="ex6row2" style="display:none">
<p class="iex-qt"><strong>iii)</strong> Esprimi $250\ \text{µs}$ in secondi usando la notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="ex6m2" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex6check(2)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex6e2" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex6check(2)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">s</span>
<button class="iex-vbtn" onclick="ex6check(2)">Verifica</button>
</div>
<div class="iex-fb" id="ex6fb2"></div>
<div class="iex-sol" id="ex6sol2">Soluzione: $250\ \text{µs} = 250\times 10^{-6}\ \text{s} = 2{,}5\times 10^{-4}\ \text{s}$.</div>
</div>
<div class="iex-q" id="ex6row3" style="display:none">
<p class="iex-qt"><strong>iv)</strong> Esprimi $7{,}2\ \text{GHz}$ in Hz usando la notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="ex6m3" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex6check(3)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex6e3" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex6check(3)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">Hz</span>
<button class="iex-vbtn" onclick="ex6check(3)">Verifica</button>
</div>
<div class="iex-fb" id="ex6fb3"></div>
<div class="iex-sol" id="ex6sol3">Soluzione: $7{,}2\ \text{GHz} = 7{,}2\times 10^{9}\ \text{Hz}$ &mdash; 1 GHz = $10^{9}$ Hz.</div>
</div>
<div class="iex-q" id="ex6row4" style="display:none">
<p class="iex-qt"><strong>v)</strong> Esprimi $42\ \text{nm}$ in metri usando la notazione scientifica.</p>
<div class="iex-ir">
<input class="iex-m" id="ex6m4" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex6check(4)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex6e4" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex6check(4)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex6check(4)">Verifica</button>
</div>
<div class="iex-fb" id="ex6fb4"></div>
<div class="iex-sol" id="ex6sol4">Soluzione: $42\ \text{nm} = 42\times 10^{-9}\ \text{m} = 4{,}2\times 10^{-8}\ \text{m}$.</div>
</div>


</div>

<script>
(function(){
var Q6=[
  {v:0.005,tol:0.001},
  {v:3000.0,tol:0.001},
  {v:0.00025,tol:0.001},
  {v:7200000000.0,tol:0.001},
  {v:4.2e-08,tol:0.001}
];
var ex6ok=[false,false,false,false,false];
var ex6c=[0],N6=5;

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
function makeShow(pfx,ok,cur,N){
  return function(i){
    document.querySelectorAll('#iex6 .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById(pfx+'row'+i).style.display='block';
    cur[0]=i;
    document.getElementById(pfx+'prev').disabled=(i===0);
    document.getElementById(pfx+'next').disabled=(i===N-1);
    updateDots(pfx,i,ok,N);
    setTimeout(function(){var inp=document.querySelector('#'+pfx+'row'+i+' .iex-m');if(inp&&!ok[i])inp.focus();},60);
  };
}
var ex6show=makeShow('ex6',ex6ok,ex6c,N6);
buildDots('ex6',N6,ex6show);
window.ex6show=ex6show;
window.ex6nav=function(d){if(ex6c[0]+d>=0&&ex6c[0]+d<N6)ex6show(ex6c[0]+d);};
window.ex6check=function(i){
  var mv=parseMant(document.getElementById('ex6m'+i).value);
  var ev=parseExp(document.getElementById('ex6e'+i).value);
  var fb=document.getElementById('ex6fb'+i);
  var vb=document.querySelector('#ex6row'+i+' .iex-vbtn');
  var q=Q6[i];
  var computed=mv*Math.pow(10,ev);
  var isOk=!isNaN(computed)&&Math.abs(computed-q.v)/Math.abs(q.v)<=q.tol;
  if(isOk){
    ex6ok[i]=true;fb.className='iex-fb ok';
    fb.innerHTML='&#10003; Esatto!'+(i<N6-1?' <button class="iex-nextbtn" onclick="ex6show('+(i+1)+')">Domanda successiva &rarr;</button>':'&ensp;Hai completato l\'esercizio!');
    if(vb)shootConf(vb);updateDots('ex6',ex6c[0],ex6ok,N6);
    if(ex6ok.every(function(x){return x;}))setTimeout(shootFW,600);
  } else {
    fb.className='iex-fb err';
    fb.innerHTML='Non &egrave; esatto. Riprova, oppure <button class="iex-lbtn" onclick="showSol(\'ex6sol'+i+'\')">vedi la soluzione</button>.';
  }
};
})();
</script>

Usa la simulazione qui sotto per visualizzare come si converte da un prefisso a un altro. Scegli il prefisso di partenza e quello di arrivo, poi clicca **Mostra**.

<div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:1.1rem 1.4rem;margin:1.2rem 0 1.5rem;">
<div style="display:flex;flex-wrap:wrap;gap:1rem;align-items:center;margin-bottom:.9rem;">
<label style="font-size:.92rem;">Da:&ensp;<select id="pfx-from" style="border:1px solid #d1d5db;border-radius:5px;padding:.25rem .5rem;">
<option value="0">pico (p)</option>
<option value="1">nano (n)</option>
<option value="2">micro (μ)</option>
<option value="3">milli (m)</option>
<option value="4">centi (c)</option>
<option value="5">deci (d)</option>
<option value="6">base (—)</option>
<option value="7">deca (da)</option>
<option value="8">etto (h)</option>
<option value="9" selected>kilo (k)</option>
<option value="10">Mega (M)</option>
<option value="11">Giga (G)</option>
<option value="12">Tera (T)</option>
</select></label>
<label style="font-size:.92rem;">A:&ensp;<select id="pfx-to" style="border:1px solid #d1d5db;border-radius:5px;padding:.25rem .5rem;">
<option value="0">pico (p)</option>
<option value="1">nano (n)</option>
<option value="2">micro (μ)</option>
<option value="3">milli (m)</option>
<option value="4">centi (c)</option>
<option value="5">deci (d)</option>
<option value="6" selected>base (—)</option>
<option value="7">deca (da)</option>
<option value="8">etto (h)</option>
<option value="9">kilo (k)</option>
<option value="10">Mega (M)</option>
<option value="11">Giga (G)</option>
<option value="12">Tera (T)</option>
</select></label>
<button id="pfx-go" style="background:#0f766e;color:#fff;border:none;border-radius:6px;padding:.4rem 1rem;cursor:pointer;font-size:.92rem;">Mostra</button>
</div>
<canvas id="pfx-canvas" style="max-width:100%;display:block;"></canvas>
<div id="pfx-expl" style="margin-top:.75rem;font-size:.92rem;min-height:2.5rem;color:#374151;">
Scegli i prefissi e clicca <strong>Mostra</strong>.
</div>
</div>

<div class="iex-widget" id="iex7" style="margin-top:2rem;">
<p class="iex-lbl">Esercizio 7 — Conversione tra prefissi</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="ex7prev" onclick="ex7nav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="ex7dots"></div>
<button class="iex-navbtn" id="ex7next" onclick="ex7nav(1)">Succ. &rarr;</button>
</div>
<div class="iex-q" id="ex7row0">
<p class="iex-qt"><strong>i)</strong> Converti $5\ \text{km}$ in metri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m0" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(0)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e0" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(0)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex7check(0)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb0"></div>
<div class="iex-sol" id="ex7sol0">Soluzione: $5\ \text{km}=5\times10^3\ \text{m}$ — k ha esponente 3, base ha 0, diff 3.</div>
</div>
<div class="iex-q" id="ex7row1" style="display:none">
<p class="iex-qt"><strong>ii)</strong> Converti $3\ \text{mm}$ in metri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m1" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(1)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e1" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(1)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex7check(1)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb1"></div>
<div class="iex-sol" id="ex7sol1">Soluzione: $3\ \text{mm}=3\times10^{-3}\ \text{m}$ — m ha esponente −3.</div>
</div>
<div class="iex-q" id="ex7row2" style="display:none">
<p class="iex-qt"><strong>iii)</strong> Converti $7\ \text{Mm}$ in chilometri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m2" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(2)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e2" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(2)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">km</span>
<button class="iex-vbtn" onclick="ex7check(2)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb2"></div>
<div class="iex-sol" id="ex7sol2">Soluzione: $7\ \text{Mm}=7\times10^3\ \text{km}$ — diff M→k: 6−3=3.</div>
</div>
<div class="iex-q" id="ex7row3" style="display:none">
<p class="iex-qt"><strong>iv)</strong> Converti $500\ \text{µm}$ in millimetri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m3" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(3)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e3" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(3)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">mm</span>
<button class="iex-vbtn" onclick="ex7check(3)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb3"></div>
<div class="iex-sol" id="ex7sol3">Soluzione: $500\ \text{µm}=0{,}5\ \text{mm}$ — diff μ→m: −6−(−3)=−3, quindi ÷10³.</div>
</div>
<div class="iex-q" id="ex7row4" style="display:none">
<p class="iex-qt"><strong>v)</strong> Converti $1{,}5\ \text{km}$ in millimetri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m4" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(4)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e4" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(4)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">mm</span>
<button class="iex-vbtn" onclick="ex7check(4)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb4"></div>
<div class="iex-sol" id="ex7sol4">Soluzione: $1{,}5\ \text{km}=1{,}5\times10^6\ \text{mm}$ — diff k→m: 3−(−3)=6.</div>
</div>
<div class="iex-q" id="ex7row5" style="display:none">
<p class="iex-qt"><strong>vi)</strong> Converti $4{,}2\ \text{nm}$ in picometri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m5" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(5)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e5" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(5)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">pm</span>
<button class="iex-vbtn" onclick="ex7check(5)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb5"></div>
<div class="iex-sol" id="ex7sol5">Soluzione: $4{,}2\ \text{nm}=4200\ \text{pm}$ — diff n→p: −9−(−12)=3.</div>
</div>
<div class="iex-q" id="ex7row6" style="display:none">
<p class="iex-qt"><strong>vii)</strong> Converti $8\ \text{Mg}$ in grammi.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m6" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(6)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e6" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(6)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">g</span>
<button class="iex-vbtn" onclick="ex7check(6)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb6"></div>
<div class="iex-sol" id="ex7sol6">Soluzione: $8\ \text{Mg}=8\times10^6\ \text{g}$ — M ha esponente 6.</div>
</div>
<div class="iex-q" id="ex7row7" style="display:none">
<p class="iex-qt"><strong>viii)</strong> Converti $0{,}3\ \text{mm}$ in micrometri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m7" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(7)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e7" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(7)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">μm</span>
<button class="iex-vbtn" onclick="ex7check(7)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb7"></div>
<div class="iex-sol" id="ex7sol7">Soluzione: $0{,}3\ \text{mm}=300\ \text{µm}$ — diff m→μ: −3−(−6)=3.</div>
</div>
<div class="iex-q" id="ex7row8" style="display:none">
<p class="iex-qt"><strong>ix)</strong> Converti $6{,}4\ \text{Gm}$ in Megametri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m8" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(8)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e8" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(8)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">Mm</span>
<button class="iex-vbtn" onclick="ex7check(8)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb8"></div>
<div class="iex-sol" id="ex7sol8">Soluzione: $6{,}4\ \text{Gm}=6400\ \text{Mm}$ — diff G→M: 9−6=3.</div>
</div>
<div class="iex-q" id="ex7row9" style="display:none">
<p class="iex-qt"><strong>x)</strong> Converti $25\ \text{cm}$ in metri.</p>
<div class="iex-ir">
<input class="iex-m" id="ex7m9" type="text" placeholder="coefficiente" onkeydown="if(event.key==='Enter')ex7check(9)">
<span>&times;&thinsp;10<sup><input class="iex-e" id="ex7e9" type="text" placeholder="n" onkeydown="if(event.key==='Enter')ex7check(9)"></sup></span>
<span style="font-size:.9rem;color:#6b7280;">m</span>
<button class="iex-vbtn" onclick="ex7check(9)">Verifica</button>
</div>
<div class="iex-fb" id="ex7fb9"></div>
<div class="iex-sol" id="ex7sol9">Soluzione: $25\ \text{cm}=0{,}25\ \text{m}$ — diff c→base: −2−0=−2, quindi 25×10⁻²=0,25.</div>
</div>
</div>

<div class="iex-widget" id="pfxquiz" style="margin-top:2rem;">
<p class="iex-lbl">Esercizio 8 — Trova il prefisso</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="pfxprev" onclick="pfxnav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="pfxdots"></div>
<button class="iex-navbtn" id="pfxnext" onclick="pfxnav(1)">Succ. &rarr;</button>
</div>
<div class="iex-q" id="pfxrow0">
<p class="iex-qt">$5{,}7\times10^6$ s = 5,7&thinsp;<input class="pfx-inp" id="pfxinp0" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(0)">&thinsp;s&ensp;<button class="iex-vbtn" onclick="pfxcheck(0)">Verifica</button></p>
<div class="iex-fb" id="pfxfb0"></div>
<div class="iex-sol" id="pfxsol0">Risposta: <strong>M</strong></div>
</div>
<div class="iex-q" id="pfxrow1" style="display:none">
<p class="iex-qt">$4{,}2\times10^{-5}$ m = 42&thinsp;<input class="pfx-inp" id="pfxinp1" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(1)">&thinsp;m&ensp;<button class="iex-vbtn" onclick="pfxcheck(1)">Verifica</button> <span class="iex-note">Suggerimento: $4{,}2\times10^{-5} = 42\times10^{-6}$</span></p>
<div class="iex-fb" id="pfxfb1"></div>
<div class="iex-sol" id="pfxsol1">Risposta: <strong>μ</strong></div>
</div>
<div class="iex-q" id="pfxrow2" style="display:none">
<p class="iex-qt">$0{,}000\,000\,001$ g = 1&thinsp;<input class="pfx-inp" id="pfxinp2" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(2)">&thinsp;g&ensp;<button class="iex-vbtn" onclick="pfxcheck(2)">Verifica</button></p>
<div class="iex-fb" id="pfxfb2"></div>
<div class="iex-sol" id="pfxsol2">Risposta: <strong>n</strong></div>
</div>
<div class="iex-q" id="pfxrow3" style="display:none">
<p class="iex-qt">$3\times10^{-3}$ m = 3&thinsp;<input class="pfx-inp" id="pfxinp3" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(3)">&thinsp;m&ensp;<button class="iex-vbtn" onclick="pfxcheck(3)">Verifica</button></p>
<div class="iex-fb" id="pfxfb3"></div>
<div class="iex-sol" id="pfxsol3">Risposta: <strong>m</strong></div>
</div>
<div class="iex-q" id="pfxrow4" style="display:none">
<p class="iex-qt">$1{,}5\times10^3$ m = 1,5&thinsp;<input class="pfx-inp" id="pfxinp4" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(4)">&thinsp;m&ensp;<button class="iex-vbtn" onclick="pfxcheck(4)">Verifica</button></p>
<div class="iex-fb" id="pfxfb4"></div>
<div class="iex-sol" id="pfxsol4">Risposta: <strong>k</strong></div>
</div>
<div class="iex-q" id="pfxrow5" style="display:none">
<p class="iex-qt">$8\times10^9$ s = 8&thinsp;<input class="pfx-inp" id="pfxinp5" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(5)">&thinsp;s&ensp;<button class="iex-vbtn" onclick="pfxcheck(5)">Verifica</button></p>
<div class="iex-fb" id="pfxfb5"></div>
<div class="iex-sol" id="pfxsol5">Risposta: <strong>G</strong></div>
</div>
<div class="iex-q" id="pfxrow6" style="display:none">
<p class="iex-qt">$2{,}5\times10^{-1}$ m = 2,5&thinsp;<input class="pfx-inp" id="pfxinp6" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(6)">&thinsp;m&ensp;<button class="iex-vbtn" onclick="pfxcheck(6)">Verifica</button></p>
<div class="iex-fb" id="pfxfb6"></div>
<div class="iex-sol" id="pfxsol6">Risposta: <strong>d</strong></div>
</div>
<div class="iex-q" id="pfxrow7" style="display:none">
<p class="iex-qt">$7\times10^{12}$ m = 7&thinsp;<input class="pfx-inp" id="pfxinp7" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(7)">&thinsp;m&ensp;<button class="iex-vbtn" onclick="pfxcheck(7)">Verifica</button></p>
<div class="iex-fb" id="pfxfb7"></div>
<div class="iex-sol" id="pfxsol7">Risposta: <strong>T</strong></div>
</div>
<div class="iex-q" id="pfxrow8" style="display:none">
<p class="iex-qt">$0{,}01$ m = 1&thinsp;<input class="pfx-inp" id="pfxinp8" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(8)">&thinsp;m&ensp;<button class="iex-vbtn" onclick="pfxcheck(8)">Verifica</button> <span class="iex-note">Suggerimento: $0{,}01=1\times10^{-2}$</span></p>
<div class="iex-fb" id="pfxfb8"></div>
<div class="iex-sol" id="pfxsol8">Risposta: <strong>c</strong></div>
</div>
<div class="iex-q" id="pfxrow9" style="display:none">
<p class="iex-qt">$3\times10^{-12}$ m = 3&thinsp;<input class="pfx-inp" id="pfxinp9" type="text" placeholder="?" size="3" onkeydown="if(event.key==='Enter')pfxcheck(9)">&thinsp;m&ensp;<button class="iex-vbtn" onclick="pfxcheck(9)">Verifica</button></p>
<div class="iex-fb" id="pfxfb9"></div>
<div class="iex-sol" id="pfxsol9">Risposta: <strong>p</strong></div>
</div>
</div>

<style>
.pfx-inp{width:2.2rem;text-align:center;border:2px solid #d1d5db;border-radius:5px;
  padding:.2rem .3rem;font-size:1rem;font-weight:bold;}
.pfx-inp:focus{border-color:#0891b2;outline:none;}
</style>

<script>
(function(){
/* ── Canvas animation ── */
var PFX_DATA=[{sym:"p",name:"pico",exp:-12,col:"#7c3aed",big:true},{sym:"n",name:"nano",exp:-9,col:"#4f46e5",big:true},{sym:"μ",name:"micro",exp:-6,col:"#2563eb",big:true},{sym:"m",name:"milli",exp:-3,col:"#0891b2",big:true},{sym:"c",name:"centi",exp:-2,col:"#0d9488",big:false},{sym:"d",name:"deci",exp:-1,col:"#16a34a",big:false},{sym:"—",name:"base",exp:0,col:"#6b7280",big:false},{sym:"da",name:"deca",exp:1,col:"#ca8a04",big:false},{sym:"h",name:"etto",exp:2,col:"#d97706",big:false},{sym:"k",name:"kilo",exp:3,col:"#ea580c",big:true},{sym:"M",name:"Mega",exp:6,col:"#dc2626",big:true},{sym:"G",name:"Giga",exp:9,col:"#be185d",big:true},{sym:"T",name:"Tera",exp:12,col:"#7e22ce",big:true}];
var STEP_EXP=[3,3,3,1,1,1,1,1,1,3,3,3];
var XS=[25,90,155,220,255,290,325,360,395,430,495,560,625];
var W=660,H=135,LY=62;
var canvas=document.getElementById('pfx-canvas');
var ctx=canvas.getContext('2d');
var fromSel=document.getElementById('pfx-from');
var toSel=document.getElementById('pfx-to');
var goBtn=document.getElementById('pfx-go');
var explDiv=document.getElementById('pfx-expl');
var dpr=window.devicePixelRatio||1;
canvas.width=W*dpr; canvas.height=H*dpr;
canvas.style.width=W+'px'; canvas.style.height=H+'px';
ctx.scale(dpr,dpr);

function supStr(n){
  var m={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴',
         '5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻'};
  return n.toString().split('').map(function(c){return m[c]||c;}).join('');
}

function drawScene(hlF,hlT,dotX,dotCol,labels){
  ctx.clearRect(0,0,W,H);
  var g=ctx.createLinearGradient(20,0,625,0);
  g.addColorStop(0,'rgba(124,58,237,.1)');
  g.addColorStop(.5,'rgba(107,114,128,.03)');
  g.addColorStop(1,'rgba(126,34,206,.1)');
  ctx.fillStyle=g; ctx.fillRect(20,LY-2,605,4);
  ctx.strokeStyle='#374151'; ctx.lineWidth=2; ctx.setLineDash([]);
  ctx.beginPath(); ctx.moveTo(20,LY); ctx.lineTo(633,LY); ctx.stroke();
  ctx.fillStyle='#374151';
  ctx.beginPath(); ctx.moveTo(637,LY); ctx.lineTo(627,LY-5); ctx.lineTo(627,LY+5); ctx.fill();
  ctx.font='10px sans-serif'; ctx.textAlign='left';
  ctx.fillText('grandezza',641,LY+4);
  for(var i=0;i<PFX_DATA.length;i++){
    var p=PFX_DATA[i],x=XS[i];
    var hl=(i===hlF||i===hlT);
    if(p.big){
      ctx.strokeStyle=p.col; ctx.lineWidth=hl?3:2; ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(x,LY-14); ctx.lineTo(x,LY+14); ctx.stroke();
      if(hl){
        ctx.strokeStyle=p.col; ctx.lineWidth=1.8; ctx.setLineDash([3,2]);
        ctx.beginPath(); ctx.arc(x,LY,18,0,Math.PI*2); ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.fillStyle=p.col;
      ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
      ctx.fillText(p.sym,x,LY-22);
      ctx.font='13px sans-serif';
      ctx.fillText('10'+supStr(p.exp),x,LY+27);
      ctx.font='12px sans-serif';
      ctx.fillText(p.name,x,LY+40);
    } else {
      var li=i-4;
      var up=(li%2===0);
      ctx.strokeStyle=p.col; ctx.lineWidth=hl?2.5:1.5; ctx.setLineDash([]);
      if(up){
        ctx.beginPath(); ctx.moveTo(x,LY-26); ctx.lineTo(x,LY+5); ctx.stroke();
        if(hl){
          ctx.strokeStyle=p.col; ctx.lineWidth=1.8; ctx.setLineDash([3,2]);
          ctx.beginPath(); ctx.arc(x,LY,14,0,Math.PI*2); ctx.stroke();
          ctx.setLineDash([]);
        }
        ctx.fillStyle=p.col;
        ctx.font='bold 12px sans-serif'; ctx.textAlign='center';
        ctx.fillText(p.sym,x,LY-32);
        ctx.font='12px sans-serif';
        ctx.fillText('10'+supStr(p.exp),x,LY-46);
      } else {
        ctx.beginPath(); ctx.moveTo(x,LY-5); ctx.lineTo(x,LY+26); ctx.stroke();
        if(hl){
          ctx.strokeStyle=p.col; ctx.lineWidth=1.8; ctx.setLineDash([3,2]);
          ctx.beginPath(); ctx.arc(x,LY,14,0,Math.PI*2); ctx.stroke();
          ctx.setLineDash([]);
        }
        ctx.fillStyle=p.col;
        ctx.font='bold 12px sans-serif'; ctx.textAlign='center';
        ctx.fillText(p.sym,x,LY+33);
        ctx.font='12px sans-serif';
        ctx.fillText('10'+supStr(p.exp),x,LY+48);
      }
    }
  }
  if(dotX!==null){
    ctx.beginPath(); ctx.arc(dotX,LY,9,0,Math.PI*2);
    ctx.fillStyle=dotCol||'#f59e0b'; ctx.fill();
    ctx.strokeStyle='#fff'; ctx.lineWidth=2.5; ctx.stroke();
  }
  if(labels) labels.forEach(function(l){
    ctx.fillStyle=l.col||'#111'; ctx.font='bold 12px sans-serif'; ctx.textAlign='center';
    ctx.fillText(l.text,l.x,l.y);
  });
}

var running=false;
drawScene(-1,-1,null,null,null);

goBtn.addEventListener('click',function(){
  if(running) return;
  var fi=parseInt(fromSel.value);
  var ti=parseInt(toSel.value);
  if(fi===ti){
    explDiv.innerHTML='I due prefissi coincidono: nessuna conversione necessaria.';
    drawScene(fi,ti,XS[fi],PFX_DATA[fi].col,null);
    return;
  }
  running=true; goBtn.disabled=true;
  var dir=(ti>fi)?1:-1;
  var nSteps=Math.abs(ti-fi);
  var stepIdx=0;

  function doStep(){
    if(stepIdx>=nSteps){
      drawScene(fi,ti,XS[ti],PFX_DATA[ti].col,null);
      ctx.save();
      ctx.strokeStyle='#f59e0b'; ctx.lineWidth=2.5; ctx.setLineDash([5,3]);
      var ay=LY-36;
      ctx.beginPath(); ctx.moveTo(XS[fi],ay); ctx.lineTo(XS[ti],ay); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle='#f59e0b'; ctx.beginPath();
      if(ti>fi){ctx.moveTo(XS[ti]+2,ay);ctx.lineTo(XS[ti]-9,ay-5);ctx.lineTo(XS[ti]-9,ay+5);}
      else{ctx.moveTo(XS[ti]-2,ay);ctx.lineTo(XS[ti]+9,ay-5);ctx.lineTo(XS[ti]+9,ay+5);}
      ctx.fill(); ctx.restore();
      var expDiff=PFX_DATA[fi].exp-PFX_DATA[ti].exp;
      var fname=PFX_DATA[fi].name==='base'?'(unità base)':PFX_DATA[fi].name;
      var tname=PFX_DATA[ti].name==='base'?'(unità base)':PFX_DATA[ti].name;
      var fsym=PFX_DATA[fi].sym==='—'?'':PFX_DATA[fi].sym;
      var tsym=PFX_DATA[ti].sym==='—'?'':PFX_DATA[ti].sym;
      var rule;
      if(expDiff>0) rule='<strong>moltiplica per 10<sup>'+expDiff+'</sup></strong>';
      else if(expDiff<0) rule='<strong>dividi per 10<sup>'+(-expDiff)+'</sup></strong>';
      else rule='nessun fattore';
      explDiv.innerHTML='Da <strong>'+fname+'</strong> a <strong>'+tname+'</strong>: '
        +rule+'. Equivalenza: <strong>1&thinsp;'+fsym+'X = 10<sup>'+expDiff+'</sup>&thinsp;'+tsym+'X</strong>.';
      running=false; goBtn.disabled=false;
      return;
    }
    var curI=fi+stepIdx*dir;
    var nxtI=curI+dir;
    var seIdx=(dir>0)?curI:nxtI;
    var sExp=STEP_EXP[seIdx];
    var op=dir>0?'÷':'×';
    var lbl=op+'10'+supStr(sExp);
    var lblCol=dir>0?'#dc2626':'#0f766e';
    var x0=XS[curI],x1=XS[nxtI];
    var midX=(x0+x1)/2;
    var t0=null;
    function frame(ts){
      if(!t0)t0=ts;
      var prog=Math.min((ts-t0)/400,1);
      var cx=x0+(x1-x0)*prog;
      drawScene(fi,-1,cx,'#f59e0b',[{x:midX,y:LY-52,text:lbl,col:lblCol}]);
      if(prog<1){requestAnimationFrame(frame);}
      else{stepIdx++;setTimeout(doStep,250);}
    }
    requestAnimationFrame(frame);
  }

  explDiv.innerHTML='Animazione in corso…';
  drawScene(fi,-1,XS[fi],'#f59e0b',null);
  setTimeout(doStep,400);
});

/* ── iex7 quiz ── */
var Q7=[{v:5000.0,tol:0.002},{v:0.003,tol:0.002},{v:7000.0,tol:0.002},{v:0.5,tol:0.002},{v:1500000.0,tol:0.002},{v:4200.0,tol:0.002},{v:8000000.0,tol:0.002},{v:300.0,tol:0.002},{v:6400.0,tol:0.002},{v:0.25,tol:0.002}];
var ex7ok=[false,false,false,false,false,false,false,false,false,false];
var ex7c=[0],N7=10;

function parseMant(s){var c=s.trim();if(c.indexOf(',')!==-1)c=c.replace(',','.');return parseFloat(c);}
function parseExp2(s){return parseInt(s.trim().replace('−','-').replace('·',''),10);}
function shootConf2(el){
  var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
  for(var i=0;i<55;i++){
    var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=4+Math.random()*8;
    p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]
      +';border-radius:'+(Math.random()>.5?'50%':'2px')
      +';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
    document.body.appendChild(p);
    (function(pp,vx,vy,xx,yy){
      var op=1;
      function step(){vy+=.28;xx+=vx;yy+=vy;op-=.016;
        pp.style.left=xx+'px';pp.style.top=yy+'px';pp.style.opacity=op;
        if(op>0)requestAnimationFrame(step);else pp.remove();}
      requestAnimationFrame(step);
    })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
  }
}
function shootFW2(){
  for(var b=0;b<7;b++){
    (function(bb){
      setTimeout(function(){
        shootConf2({getBoundingClientRect:function(){
          return{left:window.innerWidth*(.15+Math.random()*.7),
                 top:window.innerHeight*(.05+Math.random()*.55),
                 width:0,height:0};
        }});
      },bb*270);
    })(b);
  }
}
function ex7show(i){
  document.querySelectorAll('#iex7 .iex-q').forEach(function(q){q.style.display='none';});
  document.getElementById('ex7row'+i).style.display='block';
  ex7c[0]=i;
  document.getElementById('ex7prev').disabled=(i===0);
  document.getElementById('ex7next').disabled=(i===N7-1);
  var dots=document.querySelectorAll('#ex7dots .iex-dot');
  for(var k=0;k<N7;k++)dots[k].className='iex-dot'+(k===i?' cur':'')+(ex7ok[k]?' ok':'');
  setTimeout(function(){var inp=document.querySelector('#ex7row'+i+' .iex-m');
    if(inp&&!ex7ok[i])inp.focus();},60);
}
(function(){
  var c=document.getElementById('ex7dots');
  for(var j=0;j<N7;j++){
    var d=document.createElement('span');
    d.className='iex-dot'+(j===0?' cur':'');
    d.title='Domanda '+(j+1);
    (function(jj){d.onclick=function(){ex7show(jj);};})(j);
    c.appendChild(d);
  }
})();
window.ex7show=ex7show;
window.ex7nav=function(d){if(ex7c[0]+d>=0&&ex7c[0]+d<N7)ex7show(ex7c[0]+d);};
window.ex7check=function(i){
  var mv=parseMant(document.getElementById('ex7m'+i).value);
  var ev=parseExp2(document.getElementById('ex7e'+i).value);
  var fb=document.getElementById('ex7fb'+i);
  var vb=document.querySelector('#ex7row'+i+' .iex-vbtn');
  var q=Q7[i];
  var computed=mv*Math.pow(10,ev);
  var isOk=!isNaN(computed)&&Math.abs(computed-q.v)/Math.abs(q.v)<=q.tol;
  if(isOk){
    ex7ok[i]=true; fb.className='iex-fb ok';
    fb.innerHTML='&#10003; Esatto!'
      +(i<N7-1?' <button class="iex-nextbtn" onclick="ex7show('+(i+1)
               +')">Domanda successiva →</button>'
             :'&ensp;Hai completato l\'esercizio!');
    if(vb)shootConf2(vb);
    var dots=document.querySelectorAll('#ex7dots .iex-dot');
    for(var k=0;k<N7;k++)dots[k].className='iex-dot'+(k===ex7c[0]?' cur':'')+(ex7ok[k]?' ok':'');
    if(ex7ok.every(function(x){return x;}))setTimeout(shootFW2,600);
  } else {
    fb.className='iex-fb err';
    fb.innerHTML='Non è esatto. Riprova, oppure '
      +'<button class="iex-lbtn" onclick="showSol(\'ex7sol'+i+'\')">vedi la soluzione</button>.';
  }
};

/* ── pfx-quiz (find the prefix) ── */
var PFX_SYMS=[["M"],["μ","µ","u"],["n"],["m"],["k"],["G"],["d"],["T"],["c"],["p"]];
var pfxok=[false,false,false,false,false,false,false,false,false,false];
var pfxc=[0],Npfx=10;
function pfxshow(i){
  document.querySelectorAll('#pfxquiz .iex-q').forEach(function(q){q.style.display='none';});
  document.getElementById('pfxrow'+i).style.display='block';
  pfxc[0]=i;
  document.getElementById('pfxprev').disabled=(i===0);
  document.getElementById('pfxnext').disabled=(i===Npfx-1);
  var dots=document.querySelectorAll('#pfxdots .iex-dot');
  for(var k=0;k<Npfx;k++)dots[k].className='iex-dot'+(k===i?' cur':'')+(pfxok[k]?' ok':'');
  setTimeout(function(){var inp=document.getElementById('pfxinp'+i);
    if(inp&&!pfxok[i])inp.focus();},60);
}
(function(){
  var c=document.getElementById('pfxdots');
  for(var j=0;j<Npfx;j++){
    var d=document.createElement('span');
    d.className='iex-dot'+(j===0?' cur':'');
    d.title='Domanda '+(j+1);
    (function(jj){d.onclick=function(){pfxshow(jj);};})(j);
    c.appendChild(d);
  }
})();
window.pfxshow=pfxshow;
window.pfxnav=function(d){if(pfxc[0]+d>=0&&pfxc[0]+d<Npfx)pfxshow(pfxc[0]+d);};
window.pfxcheck=function(i){
  var val=document.getElementById('pfxinp'+i).value.trim();
  var fb=document.getElementById('pfxfb'+i);
  var vb=document.querySelector('#pfxrow'+i+' .iex-vbtn');
  var accepted=PFX_SYMS[i];
  var ok=accepted.some(function(s){return s===val;});
  if(ok){
    pfxok[i]=true; fb.className='iex-fb ok';
    fb.innerHTML='&#10003; Esatto!'
      +(i<Npfx-1?' <button class="iex-nextbtn" onclick="pfxshow('+(i+1)
               +')">Domanda successiva →</button>'
             :'&ensp;Hai completato il quiz!');
    if(vb)shootConf2(vb);
    var dots=document.querySelectorAll('#pfxdots .iex-dot');
    for(var k=0;k<Npfx;k++)dots[k].className='iex-dot'+(k===pfxc[0]?' cur':'')+(pfxok[k]?' ok':'');
    if(pfxok.every(function(x){return x;}))setTimeout(shootFW2,600);
  } else {
    fb.className='iex-fb err';
    fb.innerHTML='Non è esatto. Riprova, oppure '
      +'<button class="iex-lbtn" onclick="showSol(\'pfxsol'+i+'\')">vedi la soluzione</button>.';
  }
};

})();
</script>

### L'unità di misura del tempo

Il tempo si misura in secondi. Però i multipli del secondo sono un po' strani, perché non sono decimali. Infatti, $1$ minuto corrisponde a $60$ secondi. Un'ora corrisponde a $60$ minuti, ciascuno dei quali è composto da $60$ secondi. Perciò un'ora è composta da

$$1\ \text h = 60 \ \text{min} = 60\times60 \ \text s = 3600 \ \text s.$$

{% capture _d8 %}[
  {"p":"Quanti secondi ci sono in 1 giorno?","a":86400,"t":0.0001},
  {"p":"Quanti secondi ci sono in 1 anno? (Considera 365,25 giorni/anno.)","a":31557600,"t":0.005}
]{% endcapture %}
{% include iex-num.html id="t8" domande=_d8 titolo="Esercizio 8 — Secondi in un giorno e in un anno" hint="Indizio: 1 giorno = 24 h, 1 h = 60 min, 1 min = 60 s. Per l'anno considera 365,25 giorni medi (anni bisestili ogni 4 anni)." %}

{% capture _d9 %}[
  {"p":"Quanti secondi ci sono in un <strong>secolo</strong>? (Scrivi in notazione scientifica, es. <code>3.16e9</code>)","a":3.15576e9,"t":0.005},
  {"p":"Quanti secondi ci sono in un <strong>millennio</strong>?","a":3.15576e10,"t":0.005}
]{% endcapture %}
{% include iex-num.html id="t9" domande=_d9 titolo="Esercizio 9 — Secondi in un secolo e in un millennio" %}

{% include calc-margin.html id="calc1" %}

**Esercizio 10 — Quante ore ci sono in un secondo?**

Sappiamo che $1\ \text{h} = 3\,600\ \text{s}$. Quindi 1 secondo corrisponde a una certa *frazione* di ora. Come faresti a trovarla? Prova tu, esprimendo il risultato in notazione scientifica. Poi controlla con la soluzione qui sotto.

{% include spoiler.html testo="Mostra la soluzione" %}
Poiché sappiamo che $3600 \ \text s  = 1 \ \text h $, allora ci basta dividere da entrambe le parti per $3600$ di modo da ottenere

$$\frac{\cancel{3600}}{\cancel{3600}} s = \frac1 {3600} \ h  \implies  1 \ \text s = \frac 1 {3600} \ \text h.$$

Mettendo sulla calcolatrice si ottiene

$$1 \ \text s = 0{,}00027777778 \ \text h$$

che in notazione scientifica diventa

$$
1 \ \text s \simeq 2{,}78 \times 10^{-4} \ \text h.
$$
{% include spoiler-end.html %}

<div style="clear:both"></div>



# Le grandezze derivate

Come abbiamo detto precedentemente, le grandezze derivate sono tutte quelle che non appartengono alle sette grandezze fondamentali del Sistema Internazionale (Tab. 1, [vedi qui](#tab-si)).

### Area

{% include box-imp.html titolo="Area" %}

L'area di una superficie è una grandezza derivata: è data dal prodotto di due lunghezze e si misura in **metri quadrati** ($\text{m}^2$).

{% include box-end.html %}

<figure style="text-align:center;margin:1.5rem auto 1rem;">
<svg viewBox="0 0 480 148" width="100%" style="max-width:480px;display:block;margin:0 auto;">
  <!-- Quadrato -->
  <rect x="22" y="24" width="72" height="72" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="22" y1="16" x2="94" y2="16" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="22" y1="12" x2="22" y2="20" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="94" y1="12" x2="94" y2="20" stroke="#1d4ed8" stroke-width="1"/>
  <text x="58" y="13" text-anchor="middle" fill="#1d4ed8" font-size="11" font-style="italic" font-family="Georgia,serif">l</text>
  <line x1="14" y1="24" x2="14" y2="96" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="10" y1="24" x2="18" y2="24" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="10" y1="96" x2="18" y2="96" stroke="#1d4ed8" stroke-width="1"/>
  <text x="58" y="65" text-anchor="middle" fill="#1d4ed8" font-size="14" font-style="italic" font-family="Georgia,serif">l</text>
  <text x="58" y="112" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold" font-family="sans-serif">Quadrato</text>
  <text x="58" y="130" text-anchor="middle" fill="#1d4ed8" font-size="13" font-family="Georgia,serif">A = l ²</text>
  <!-- Rettangolo -->
  <rect x="140" y="36" width="96" height="56" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
  <text x="188" y="68" text-anchor="middle" fill="#15803d" font-size="12" font-style="italic" font-family="Georgia,serif">b</text>
  <text x="247" y="68" text-anchor="start" fill="#15803d" font-size="12" font-style="italic" font-family="Georgia,serif">h</text>
  <text x="188" y="112" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold" font-family="sans-serif">Rettangolo</text>
  <text x="188" y="130" text-anchor="middle" fill="#15803d" font-size="13" font-family="Georgia,serif">A = b · h</text>
  <!-- Triangolo -->
  <polygon points="280,96 352,96 316,26" fill="#fefce8" stroke="#d97706" stroke-width="2"/>
  <text x="316" y="112" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold" font-family="sans-serif">Triangolo</text>
  <text x="316" y="130" text-anchor="middle" fill="#d97706" font-size="13" font-family="Georgia,serif">A = ½ b · h</text>
  <!-- Cerchio -->
  <circle cx="425" cy="60" r="36" fill="#fdf4ff" stroke="#7c3aed" stroke-width="2"/>
  <line x1="425" y1="60" x2="461" y2="60" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="443" y="55" text-anchor="middle" fill="#7c3aed" font-size="11" font-style="italic" font-family="Georgia,serif">r</text>
  <text x="425" y="112" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold" font-family="sans-serif">Cerchio</text>
  <text x="425" y="130" text-anchor="middle" fill="#7c3aed" font-size="13" font-family="Georgia,serif">A = π r ²</text>
</svg>
</figure>

Esempio: un quadrato di lato $\ell = 4\ \text{m}$ ha area $A = \ell^2 = (4\ \text{m})^2 = 16\ \text{m}^2$.

#### Equivalenze tra misure di area

<div style="text-align:center;margin:1.5rem 0;">
<canvas id="area-anim" width="320" height="290" style="max-width:100%;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;display:block;margin:0 auto .6rem;"></canvas>
<button id="area-anim-btn" class="iex-vbtn" style="font-size:.9rem;">&#9654; Riproduci animazione</button>
</div>

Partiamo dalla definizione di metro quadro:

$$1\ \text{m}^2 = 1\ \text{m} \times 1\ \text{m}.$$

Sostituiamo $1\ \text{m} = 10\ \text{dm}$:

$$1\ \text{m}^2 = (10\ \text{dm}) \times (10\ \text{dm}) = 10^2\ \text{dm}^2 = 100\ \text{dm}^2.$$

L'animazione qui sotto mostra esattamente questo: un quadrato di lato 1 m viene suddiviso con una griglia di lato 1 dm, rivelando che ci sono esattamente 100 quadratini di 1 dm².

<script>
(function(){
var cv=document.getElementById('area-anim');
if(!cv)return;
var ctx=cv.getContext('2d');
var W=cv.width,H=cv.height;
var S=200,N=10,cell=S/N;
var ox=70,oy=48;
function cl(t,a,b){return Math.max(0,Math.min(1,(t-a)/(b-a)));}
function ease(t){return t<.5?2*t*t:-1+(4-2*t)*t;}
function frame(t){
  ctx.clearRect(0,0,W,H);
  if(t>1.0){
    ctx.globalAlpha=ease(cl(t,1.0,2.4))*0.75;
    ctx.strokeStyle='#93c5fd';ctx.lineWidth=0.7;
    for(var i=1;i<N;i++){
      ctx.beginPath();ctx.moveTo(ox+i*cell,oy);ctx.lineTo(ox+i*cell,oy+S);ctx.stroke();
      ctx.beginPath();ctx.moveTo(ox,oy+i*cell);ctx.lineTo(ox+S,oy+i*cell);ctx.stroke();
    }
    ctx.globalAlpha=1;
  }
  if(t>3.0){
    var cp=cl(t,3.0,5.2);
    var tot=Math.min(100,Math.ceil(cp*100));
    ctx.fillStyle='rgba(251,191,36,.45)';
    var left=tot;
    for(var r=0;r<N&&left>0;r++)for(var c=0;c<N&&left>0;c++){ctx.fillRect(ox+c*cell+.5,oy+r*cell+.5,cell-1,cell-1);left--;}
  }
  if(t>2.4){
    var hp=ease(cl(t,2.4,3.0));
    ctx.globalAlpha=hp;
    ctx.fillStyle='#fbbf24';ctx.fillRect(ox+.5,oy+.5,cell-1,cell-1);
    ctx.strokeStyle='#f59e0b';ctx.lineWidth=1.5;ctx.strokeRect(ox+.5,oy+.5,cell-1,cell-1);
    ctx.globalAlpha=1;
    if(hp>0.6){ctx.fillStyle='#78350f';ctx.font='bold 8px sans-serif';ctx.textAlign='center';ctx.fillText('1 dm²',ox+cell/2,oy+cell/2+3);}
  }
  ctx.strokeStyle='#1d4ed8';ctx.lineWidth=2.5;ctx.strokeRect(ox,oy,S,S);
  if(t>0.6){
    var tp=cl(t,0.6,1.0);var show=Math.round(tp*N);
    ctx.strokeStyle='#374151';ctx.lineWidth=1;
    for(var j=1;j<=show&&j<N;j++){
      var xj=ox+j*cell,yj=oy+j*cell;
      ctx.beginPath();ctx.moveTo(xj,oy);ctx.lineTo(xj,oy-5);ctx.stroke();
      ctx.beginPath();ctx.moveTo(xj,oy+S);ctx.lineTo(xj,oy+S+5);ctx.stroke();
      ctx.beginPath();ctx.moveTo(ox,yj);ctx.lineTo(ox-5,yj);ctx.stroke();
      ctx.beginPath();ctx.moveTo(ox+S,yj);ctx.lineTo(ox+S+5,yj);ctx.stroke();
    }
    if(show>=1){ctx.fillStyle='#6b7280';ctx.font='8px sans-serif';ctx.textAlign='center';ctx.fillText('1 dm',ox+cell/2,oy-9);}
  }
  var lp=ease(cl(t,0,0.6));
  if(lp>0){
    ctx.globalAlpha=lp;
    ctx.fillStyle='#1d4ed8';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
    ctx.fillText('1 m',ox+S/2,oy-20);
    ctx.save();ctx.translate(ox-30,oy+S/2);ctx.rotate(-Math.PI/2);ctx.fillText('1 m',0,0);ctx.restore();
    ctx.globalAlpha=1;
  }
  if(t>3.0){
    var cp2=cl(t,3.0,5.2);
    var cnt=Math.min(100,Math.ceil(cp2*100));
    ctx.fillStyle='#1d4ed8';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
    ctx.fillText(cnt+' dm²',ox+S/2,oy+S+26);
    if(cnt>=100){
      ctx.globalAlpha=ease(cl(t,5.2,6.2));
      ctx.fillStyle='#166534';ctx.font='bold 13px sans-serif';
      ctx.fillText('= 1 m²',ox+S/2,oy+S+44);
      ctx.globalAlpha=1;
    }
  }
}
frame(0);
var _aaid=null,_ats0=null,_ATOT=7;
document.getElementById('area-anim-btn').addEventListener('click',function(){
  if(_aaid){cancelAnimationFrame(_aaid);_aaid=null;}
  _ats0=null;
  function step(ts){
    if(!_ats0)_ats0=ts;
    var t=Math.min((ts-_ats0)/1000,_ATOT);
    frame(t);
    _aaid=t<_ATOT?requestAnimationFrame(step):null;
  }
  _aaid=requestAnimationFrame(step);
});
})();
</script>

Prova ora a ripetere lo stesso ragionamento con gli altri multipli del metro.

{% capture _disc_area %}[
  {"p":"Completa: 1 m = 10<sup>?</sup> cm. Scrivi solo l'esponente.","a":2,"t":0.0001},
  {"p":"Quindi: 1 m&#178; = (10<sup>2</sup> cm) &times; (10<sup>2</sup> cm) = 10<sup>?</sup> cm&#178;. Scrivi l'esponente.","a":4,"t":0.0001},
  {"p":"Completa: 1 m = 10<sup>?</sup> mm. Scrivi solo l'esponente.","a":3,"t":0.0001},
  {"p":"Quindi: 1 m&#178; = (10<sup>3</sup> mm) &times; (10<sup>3</sup> mm) = 10<sup>?</sup> mm&#178;. Scrivi l'esponente.","a":6,"t":0.0001}
]{% endcapture %}
{% include iex-num.html id="disc-area" domande=_disc_area titolo="Scoperta guidata — riproduci il ragionamento" hint="Scrivi solo il numero dell'esponente (es. 2, 4, …)." %}

Cosa noti? Per dm era $10^1$ → area $10^2$; per cm era $10^2$ → area $10^4$; per mm era $10^3$ → area $10^6$. **L'esponente dell'area è sempre il doppio** dell'esponente lineare.

{% include box-warn.html titolo="Attenzione" %}
**Non è vero** che $1\ \text{m}^2 = 10^2\ \text{cm}^2$. L'esponente raddoppia: $1\ \text{m}^2 = 10^4\ \text{cm}^2$.
{% include box-end.html %}

{% include box-imp.html titolo="Regola per le aree" %}
Se per la lunghezza il fattore di conversione è $10^n$, per l'**area** è $10^{2n}$.
{% include box-end.html %}

{% capture _quiz_area %}[
  {"p":"Quanti cm&#178; ci sono in 1 dm&#178;? (1 dm = 10 cm)","a":100,"t":0.0001},
  {"p":"Quanti m&#178; ci sono in 1 km&#178;? (1 km = 10&#179; m)","a":1000000,"t":0.0001},
  {"p":"Quanti mm&#178; ci sono in 1 cm&#178;? (1 cm = 10 mm)","a":100,"t":0.0001},
  {"p":"Quanti dm&#178; ci sono in 3,5 m&#178;?","a":350,"t":0.0001}
]{% endcapture %}
{% include iex-num.html id="quiz-area" domande=_quiz_area titolo="Esercizio — conversioni di aree" %}

### Volume

{% include box-imp.html titolo="Volume" %}

Il volume di un solido è una grandezza derivata: è dato dal prodotto di tre lunghezze e si misura in **metri cubi** ($\text{m}^3$).

{% include box-end.html %}

<figure style="text-align:center;margin:1.5rem auto 1rem;">
<svg viewBox="0 0 480 150" width="100%" style="max-width:480px;display:block;margin:0 auto;">

  <!-- ── CUBO isometrico (col 0-120, centre x=60) ── -->
  <!-- s=30, dx=26, dy=15: A(60,10) B(34,25) C(86,25) G(60,40) D(34,55) E(86,55) F(60,70) -->
  <!-- Top face (lightest) -->
  <polygon points="60,10 34,25 60,40 86,25" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.4"/>
  <!-- Left face (medium) -->
  <polygon points="34,25 34,55 60,70 60,40" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <!-- Right face (lightest = "lit from front-right") -->
  <polygon points="86,25 60,40 60,70 86,55" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="60" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold" font-family="sans-serif">Cubo</text>
  <text x="60" y="107" text-anchor="middle" fill="#1d4ed8" font-size="13" font-family="Georgia,serif">V = l ³</text>

  <!-- ── PARALLELEPIPEDO isometrico (col 120-240, centre x=180) ── -->
  <!-- Wide & flat: dx=38,dy=10,h=26; A(180,12) B(142,22) C(218,22) G(180,32) D(142,58) E(218,58) F(180,68) -->
  <polygon points="180,12 142,22 180,32 218,22" fill="#bbf7d0" stroke="#15803d" stroke-width="1.4"/>
  <polygon points="142,22 142,58 180,68 180,32" fill="#dcfce7" stroke="#15803d" stroke-width="1.4"/>
  <polygon points="218,22 180,32 180,68 218,58" fill="#f0fdf4" stroke="#15803d" stroke-width="1.4"/>
  <text x="180" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold" font-family="sans-serif">Parallelepipedo</text>
  <text x="180" y="107" text-anchor="middle" fill="#15803d" font-size="13" font-family="Georgia,serif">V = l · w · h</text>

  <!-- ── CILINDRO (col 240-360, centre x=300) ── -->
  <!-- Draw order: bottom ellipse → body rect → side lines → top ellipse -->
  <ellipse cx="300" cy="76" rx="34" ry="11" fill="#fde68a" stroke="#d97706" stroke-width="1.4"/>
  <rect x="266" y="20" width="68" height="56" fill="#fefce8" stroke="none"/>
  <line x1="266" y1="20" x2="266" y2="76" stroke="#d97706" stroke-width="1.4"/>
  <line x1="334" y1="20" x2="334" y2="76" stroke="#d97706" stroke-width="1.4"/>
  <ellipse cx="300" cy="20" rx="34" ry="11" fill="#fef9c3" stroke="#d97706" stroke-width="1.4"/>
  <!-- r label -->
  <line x1="300" y1="20" x2="334" y2="20" stroke="#d97706" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="317" y="15" text-anchor="middle" fill="#d97706" font-size="10" font-style="italic" font-family="Georgia,serif">r</text>
  <!-- h label -->
  <line x1="342" y1="20" x2="342" y2="76" stroke="#d97706" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="350" y="52" text-anchor="start" fill="#d97706" font-size="10" font-style="italic" font-family="Georgia,serif">h</text>
  <text x="300" y="103" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold" font-family="sans-serif">Cilindro</text>
  <text x="300" y="120" text-anchor="middle" fill="#d97706" font-size="13" font-family="Georgia,serif">V = &#960; r ² h</text>

  <!-- ── SFERA (col 360-480, centre x=420) ── -->
  <circle cx="420" cy="46" r="36" fill="#fdf4ff" stroke="#7c3aed" stroke-width="2"/>
  <!-- right-half darker shading -->
  <path d="M420,10 A36,36,0,0,1,420,82" fill="rgba(124,58,237,.07)" stroke="none"/>
  <!-- equatorial ellipse -->
  <ellipse cx="420" cy="46" rx="36" ry="12" fill="none" stroke="#7c3aed" stroke-width="1.2" stroke-dasharray="5,3"/>
  <!-- radius line -->
  <line x1="420" y1="46" x2="456" y2="46" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="438" y="41" text-anchor="middle" fill="#7c3aed" font-size="10" font-style="italic" font-family="Georgia,serif">r</text>
  <text x="420" y="103" text-anchor="middle" fill="#374151" font-size="12" font-weight="bold" font-family="sans-serif">Sfera</text>
  <text x="420" y="120" text-anchor="middle" fill="#7c3aed" font-size="13" font-family="Georgia,serif">V = &#8532;&#960; r ³</text>

</svg>
</figure>

Esempio: un cubo di lato $\ell = 2\ \text{m}$ ha volume $V = \ell^3 = (2\ \text{m})^3 = 8\ \text{m}^3$.

#### Equivalenze tra misure di volume

<div style="text-align:center;margin:1.5rem 0;">
<canvas id="vol-anim" width="320" height="310" style="max-width:100%;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;display:block;margin:0 auto .6rem;"></canvas>
<button id="vol-anim-btn" class="iex-vbtn" style="font-size:.9rem;">&#9654; Riproduci animazione</button>
</div>

Partiamo dalla definizione di metro cubo:

$$1\ \text{m}^3 = 1\ \text{m} \times 1\ \text{m} \times 1\ \text{m}.$$

Sostituiamo $1\ \text{m} = 10\ \text{dm}$:

$$1\ \text{m}^3 = (10\ \text{dm}) \times (10\ \text{dm}) \times (10\ \text{dm}) = 10^3\ \text{dm}^3 = 1\,000\ \text{dm}^3.$$

L'animazione qui sotto mostra come il cubo di lato 1 m si compone di 10 strati da 100 dm² ciascuno, per un totale di 1000 dm³.

<script>
(function(){
var cv=document.getElementById('vol-anim');
if(!cv)return;
var ctx=cv.getContext('2d');
var W=cv.width,H=cv.height;
var S=155,N=10,cell=S/N;
var ox=65,oy=48;
var DX=5,DY=-3;
function cl(t,a,b){return Math.max(0,Math.min(1,(t-a)/(b-a)));}
function ease(t){return t<.5?2*t*t:-1+(4-2*t)*t;}
function drawLayer(ly,alpha){
  var offx=ly*DX,offy=ly*DY;
  ctx.globalAlpha=alpha;
  ctx.fillStyle=ly===0?'rgba(59,130,246,.06)':'rgba(147,197,253,.18)';
  ctx.fillRect(ox+offx,oy+offy,S,S);
  ctx.strokeStyle=ly===0?'#93c5fd':'#bfdbfe';ctx.lineWidth=0.6;
  for(var i=1;i<N;i++){
    ctx.beginPath();ctx.moveTo(ox+offx+i*cell,oy+offy);ctx.lineTo(ox+offx+i*cell,oy+offy+S);ctx.stroke();
    ctx.beginPath();ctx.moveTo(ox+offx,oy+offy+i*cell);ctx.lineTo(ox+offx+S,oy+offy+i*cell);ctx.stroke();
  }
  ctx.strokeStyle=ly===0?'#1d4ed8':'#60a5fa';ctx.lineWidth=ly===0?2.5:1.2;
  ctx.strokeRect(ox+offx,oy+offy,S,S);
  ctx.globalAlpha=1;
}
function frame(t){
  ctx.clearRect(0,0,W,H);
  var numLayers=t>5.0?Math.min(10,Math.ceil(cl(t,5.0,7.2)*10)):1;
  for(var ly=numLayers-1;ly>0;ly--){
    var la=ease(cl(t,5.0+(ly-1)*0.22,5.0+ly*0.22+0.5));
    drawLayer(ly,la*0.8);
  }
  if(t>1.0){
    ctx.globalAlpha=ease(cl(t,1.0,2.4))*0.75;
    ctx.strokeStyle='#93c5fd';ctx.lineWidth=0.7;
    for(var i=1;i<N;i++){
      ctx.beginPath();ctx.moveTo(ox+i*cell,oy);ctx.lineTo(ox+i*cell,oy+S);ctx.stroke();
      ctx.beginPath();ctx.moveTo(ox,oy+i*cell);ctx.lineTo(ox+S,oy+i*cell);ctx.stroke();
    }
    ctx.globalAlpha=1;
  }
  if(t>3.0){
    var cp=cl(t,3.0,5.0);
    var tot=Math.min(100,Math.ceil(cp*100));
    ctx.fillStyle='rgba(251,191,36,.45)';
    var left=tot;
    for(var r=0;r<N&&left>0;r++)for(var c=0;c<N&&left>0;c++){ctx.fillRect(ox+c*cell+.5,oy+r*cell+.5,cell-1,cell-1);left--;}
  }
  if(t>2.4){
    var hp=ease(cl(t,2.4,3.0));
    ctx.globalAlpha=hp;
    ctx.fillStyle='#fbbf24';ctx.fillRect(ox+.5,oy+.5,cell-1,cell-1);
    ctx.strokeStyle='#f59e0b';ctx.lineWidth=1.5;ctx.strokeRect(ox+.5,oy+.5,cell-1,cell-1);
    ctx.globalAlpha=1;
    if(hp>0.6){ctx.fillStyle='#78350f';ctx.font='bold 7px sans-serif';ctx.textAlign='center';ctx.fillText('1 dm²',ox+cell/2,oy+cell/2+2.5);}
  }
  ctx.strokeStyle='#1d4ed8';ctx.lineWidth=2.5;ctx.strokeRect(ox,oy,S,S);
  if(t>0.6){
    var tp=cl(t,0.6,1.0);var show=Math.round(tp*N);
    ctx.strokeStyle='#374151';ctx.lineWidth=1;
    for(var j=1;j<=show&&j<N;j++){
      var xj=ox+j*cell,yj=oy+j*cell;
      ctx.beginPath();ctx.moveTo(xj,oy);ctx.lineTo(xj,oy-4);ctx.stroke();
      ctx.beginPath();ctx.moveTo(xj,oy+S);ctx.lineTo(xj,oy+S+4);ctx.stroke();
      ctx.beginPath();ctx.moveTo(ox,yj);ctx.lineTo(ox-4,yj);ctx.stroke();
      ctx.beginPath();ctx.moveTo(ox+S,yj);ctx.lineTo(ox+S+4,yj);ctx.stroke();
    }
    if(show>=1){ctx.fillStyle='#6b7280';ctx.font='8px sans-serif';ctx.textAlign='center';ctx.fillText('1 dm',ox+cell/2,oy-9);}
  }
  var lp=ease(cl(t,0,0.6));
  if(lp>0){
    ctx.globalAlpha=lp;
    ctx.fillStyle='#1d4ed8';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
    ctx.fillText('1 m',ox+S/2,oy-17);
    ctx.save();ctx.translate(ox-26,oy+S/2);ctx.rotate(-Math.PI/2);ctx.fillText('1 m',0,0);ctx.restore();
    ctx.globalAlpha=1;
  }
  if(t>3.0){
    var nL=t>5.0?Math.min(10,Math.ceil(cl(t,5.0,7.2)*10)):1;
    var fC=t>3.0?Math.min(100,Math.ceil(cl(t,3.0,5.0)*100)):0;
    var total=(nL-1)*100+fC;
    var cy2=oy+S+28+Math.abs((nL-1)*DY);
    ctx.fillStyle='#1d4ed8';ctx.font='bold 12px sans-serif';ctx.textAlign='center';
    ctx.fillText(total+' dm³',ox+S/2+(nL-1)*DX/2,cy2);
    if(total>=1000){
      ctx.globalAlpha=ease(cl(t,7.2,8.2));
      ctx.fillStyle='#166534';ctx.font='bold 12px sans-serif';
      ctx.fillText('= 1 m³',ox+S/2+(nL-1)*DX/2,cy2+18);
      ctx.globalAlpha=1;
    }
  }
}
frame(0);
var _vaid=null,_vts0=null,_VTOT=9;
document.getElementById('vol-anim-btn').addEventListener('click',function(){
  if(_vaid){cancelAnimationFrame(_vaid);_vaid=null;}
  _vts0=null;
  function step(ts){
    if(!_vts0)_vts0=ts;
    var t=Math.min((ts-_vts0)/1000,_VTOT);
    frame(t);
    _vaid=t<_VTOT?requestAnimationFrame(step):null;
  }
  _vaid=requestAnimationFrame(step);
});
})();
</script>

Prova ora a ripetere lo stesso ragionamento con gli altri multipli del metro.

{% capture _disc_vol %}[
  {"p":"Completa: 1 m = 10<sup>?</sup> cm. Scrivi solo l'esponente.","a":2,"t":0.0001},
  {"p":"Quindi: 1 m&#179; = (10<sup>2</sup> cm)<sup>3</sup> = 10<sup>?</sup> cm&#179;. Scrivi l'esponente.","a":6,"t":0.0001},
  {"p":"Completa: 1 m = 10<sup>?</sup> mm. Scrivi solo l'esponente.","a":3,"t":0.0001},
  {"p":"Quindi: 1 m&#179; = (10<sup>3</sup> mm)<sup>3</sup> = 10<sup>?</sup> mm&#179;. Scrivi l'esponente.","a":9,"t":0.0001}
]{% endcapture %}
{% include iex-num.html id="disc-vol" domande=_disc_vol titolo="Scoperta guidata — riproduci il ragionamento" hint="Scrivi solo il numero dell'esponente (es. 3, 6, …)." %}

Cosa noti? Per dm era $10^1$ → volume $10^3$; per cm era $10^2$ → volume $10^6$; per mm era $10^3$ → volume $10^9$. **L'esponente del volume è sempre il triplo** dell'esponente lineare.

{% include box-warn.html titolo="Attenzione" %}
**Non è vero** che $1\ \text{m}^3 = 10^2\ \text{cm}^3$. L'esponente si triplica: $1\ \text{m}^3 = 10^6\ \text{cm}^3$.
{% include box-end.html %}

{% include box-imp.html titolo="Regola per i volumi" %}
Se per la lunghezza il fattore di conversione è $10^n$, per il **volume** è $10^{3n}$.
{% include box-end.html %}

{% capture _quiz_vol %}[
  {"p":"Quanti dm&#179; ci sono in 1 m&#179;? (1 m = 10 dm)","a":1000,"t":0.0001},
  {"p":"Quanti cm&#179; ci sono in 1 dm&#179;? (1 dm = 10 cm)","a":1000,"t":0.0001},
  {"p":"Quanti m&#179; ci sono in 5000 dm&#179;?","a":5,"t":0.0001},
  {"p":"Quanti cm&#179; ci sono in 1,5 m&#179;?","a":1500000,"t":0.0001}
]{% endcapture %}
{% include iex-num.html id="quiz-vol" domande=_quiz_vol titolo="Esercizio — conversioni di volumi" %}

{% include box-ex.html titolo="Esercizio 4 — Aree e volumi" %}

Converti i seguenti numeri:

i) $1\ \text{µm}^3$ in megametri cubi &nbsp; [risposta: $10^{-36}\ \text{Mm}^3$]

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
