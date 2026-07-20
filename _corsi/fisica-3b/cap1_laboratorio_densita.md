---
layout: capitolo
title: "Laboratorio di Misurazione"
subtitle: "Un laboratorio sulla densità"
corso: fisica-3b
corso_titolo: "Fisica 3ª B"
materia: fisica
classe: "3B"
numero: 1
---

<section id="cap1" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Parte I</span>
  <h2 class="chapter-title">La teoria dell'incertezza</h2>
</header>
<div class="prose" markdown="1">

### Errore e incertezza: una distinzione importante

Abbiamo detto che misurare significa associare un numero a una caratteristica di un oggetto. Eppure sorgono subito alcuni problemi.
- **Problema 1: l'instabilità di una misurazione.** Quasi sempre gli oggetti *cambiano* continuamente, anche se non ce ne accorgiamo. E quindi in realtà quello che abbiamo misurato in un certo momento potrebbe essere molto diverso da ciò che misureremmo in un momento successivo.
- **Problema 2: le imprecisioni.** Se anche un oggetto possedesse una caratteristica che non cambia mai, come faremmo a misurarla perfettamente? Ogni strumento che abbiamo è imperfetto: non si può mai misurare con precisione infinita.

Considera l'esempio di questo cactus. La bilancia segna che la massa del cactus corrisponde a 3 421 g. Tuttavia, il vero valore della massa del cactus è leggermente diverso e corrisponde, inizialmente, a 3 421,2 g. Quella leggera differenza è così piccola che la bilancia non è in grado di rilevarla.  
Inoltre, quando arriva il Sole, l'acqua contenuta all'interno del cactus evapora parzialmente. Quindi la massa del cactus diminuisce, ma di così poco che la bilancia non è in grado di farlo vedere.  
È insomma evidente che non si possa misurare perfettamente la massa di un cactus.

<div style="margin:1.5rem 0;background:#fefce8;border-radius:10px;padding:1rem;border:1px solid #e5d58a;">
<p style="margin:0 0 0.5rem;font-size:13px;color:#374151;font-family:Georgia,serif;"><strong>Bilancia digitale e vaso con il cactus</strong> — la bilancia può misurare la massa solo con una certa precisione.</p>
<canvas id="cv-bildig" width="560" height="225" style="display:block;max-width:100%;border-radius:6px;margin:0 auto;"></canvas>
<div style="text-align:center;margin-top:0.6rem;">
  <button id="btn-sole" style="padding:0.3rem 1rem;background:#d97706;color:#fff;border:none;border-radius:5px;cursor:pointer;font-family:Georgia,serif;font-size:13px;">☀️ Porta il Sole</button>
</div>
</div>
<script>
(function(){
var cv=document.getElementById('cv-bildig');
if(!cv)return;
var ctx=cv.getContext('2d');
var W=cv.width,H=cv.height;
var trueMass=3241.2;
var sunActive=false,sunX=W+60,SUN_TX=W*.87,SUN_Y=48;
var t=0,ptcls=[];
function disp(){return Math.round(trueMass);}
function fmt(m){var s=m.toFixed(1).split('.');return s[0].replace(/\B(?=(\d{3})+$)/,' ')+','+s[1];}
function evapRate(){return sunActive?Math.min(1,Math.max(0,(SUN_TX+60-sunX)/60)):0;}
function loop(){
  t++;ctx.clearRect(0,0,W,H);
  var bgg=ctx.createLinearGradient(0,0,0,H);
  bgg.addColorStop(0,sunActive?'#fffbeb':'#f0f5fa');bgg.addColorStop(1,sunActive?'#fef3c7':'#e8eef8');
  ctx.fillStyle=bgg;ctx.fillRect(0,0,W,H);
  if(sunActive&&sunX>SUN_TX)sunX-=1.3;
  var er=evapRate();
  if(sunActive){
    ctx.save();ctx.translate(sunX,SUN_Y);
    var nr=12;ctx.save();
    for(var i=0;i<nr;i++){
      ctx.rotate(Math.PI*2/nr);
      var ri=30+3*Math.sin(t*.07+i*.5),ro=46+5*Math.sin(t*.07+i*.5);
      ctx.strokeStyle='rgba(251,191,36,.85)';ctx.lineWidth=3.5;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(ri,0);ctx.lineTo(ro,0);ctx.stroke();
    }
    ctx.restore();
    var sg=ctx.createRadialGradient(0,0,3,0,0,27);
    sg.addColorStop(0,'#fef08a');sg.addColorStop(.7,'#fbbf24');sg.addColorStop(1,'#f59e0b');
    ctx.fillStyle=sg;ctx.beginPath();ctx.arc(0,0,27,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#92400e';
    ctx.beginPath();ctx.arc(-8,-4,3,0,Math.PI*2);ctx.fill();
    ctx.beginPath();ctx.arc(8,-4,3,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#92400e';ctx.lineWidth=1.8;ctx.lineCap='round';
    ctx.beginPath();ctx.arc(0,4,9,.2,Math.PI-.2);ctx.stroke();
    ctx.restore();
  }
  if(er>.05&&t%8===0&&trueMass>3240.8)
    ptcls.push({x:145+(Math.random()-.5)*14,y:57,vx:(Math.random()-.5)*.4,vy:-(0.5+Math.random()*.5),l:1,ph:Math.random()*6.28});
  ptcls=ptcls.filter(function(p){p.y+=p.vy;p.x+=p.vx+.4*Math.sin(t*.09+p.ph);p.l-=.013;return p.l>0;});
  ptcls.forEach(function(p){
    ctx.save();ctx.globalAlpha=p.l*.75;
    ctx.strokeStyle='#93c5fd';ctx.lineWidth=1.8;ctx.lineCap='round';
    ctx.beginPath();ctx.moveTo(p.x,p.y);
    var mx=p.x+5*Math.sin(p.ph+t*.09);
    ctx.bezierCurveTo(mx,p.y-6,mx-4,p.y-12,p.x,p.y-17);
    ctx.stroke();ctx.restore();
  });
  if(trueMass>3240.8)trueMass-=.0012*er;
  var cx=145,by=172;
  ctx.fillStyle='rgba(0,0,0,.1)';ctx.beginPath();ctx.ellipse(cx+3,by+52,82,9,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#9ca3af';ctx.fillRect(cx-72,by+42,16,10);ctx.fillRect(cx+56,by+42,16,10);
  var bg2=ctx.createLinearGradient(cx-78,by,cx+78,by+42);
  bg2.addColorStop(0,'#e5e7eb');bg2.addColorStop(.4,'#f9fafb');bg2.addColorStop(1,'#d1d5db');
  ctx.fillStyle=bg2;ctx.beginPath();ctx.roundRect(cx-78,by+10,156,42,[0,0,8,8]);ctx.fill();
  ctx.strokeStyle='#9ca3af';ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(cx-78,by+10,156,42,[0,0,8,8]);ctx.stroke();
  var pg2=ctx.createLinearGradient(cx-80,by-2,cx+80,by+12);
  pg2.addColorStop(0,'#ddd');pg2.addColorStop(.5,'#f5f5f5');pg2.addColorStop(1,'#ccc');
  ctx.fillStyle=pg2;ctx.beginPath();ctx.roundRect(cx-80,by,160,13,[4,4,0,0]);ctx.fill();
  ctx.strokeStyle='#aaa';ctx.lineWidth=1;ctx.beginPath();ctx.roundRect(cx-80,by,160,13,[4,4,0,0]);ctx.stroke();
  var lx=cx-52,ly=by+15;
  ctx.fillStyle='#030f03';ctx.beginPath();ctx.roundRect(lx,ly,104,28,3);ctx.fill();
  ctx.fillStyle='#0d2b0d';ctx.beginPath();ctx.roundRect(lx+2,ly+2,100,24,2);ctx.fill();
  ctx.fillStyle='#7cfc00';ctx.font='bold 19px monospace';ctx.textAlign='right';
  ctx.fillText(disp()+' g',lx+98,ly+20);ctx.textAlign='left';
  // vaso: il fondo siede esattamente sulla superficie della piattaforma (y=by)
  ctx.fillStyle='rgba(0,0,0,.07)';ctx.beginPath();ctx.ellipse(cx+2,by-1,21,5,0,0,Math.PI*2);ctx.fill();
  var ptg=ctx.createLinearGradient(cx-20,by-40,cx+20,by);
  ptg.addColorStop(0,'#c2410c');ptg.addColorStop(1,'#7c2d12');
  ctx.fillStyle=ptg;
  ctx.beginPath();ctx.moveTo(cx-20,by-40);ctx.lineTo(cx+20,by-40);ctx.lineTo(cx+15,by);ctx.lineTo(cx-15,by);ctx.closePath();ctx.fill();
  var rg2=ctx.createLinearGradient(0,by-44,0,by-36);
  rg2.addColorStop(0,'#ea580c');rg2.addColorStop(1,'#b45309');
  ctx.fillStyle=rg2;ctx.beginPath();ctx.roundRect(cx-23,by-44,46,8,2);ctx.fill();
  ctx.fillStyle='#3b2008';ctx.beginPath();ctx.ellipse(cx,by-40,18,5,0,0,Math.PI*2);ctx.fill();
  var ctg=ctx.createLinearGradient(cx-10,0,cx+10,0);
  ctg.addColorStop(0,'#166534');ctg.addColorStop(.4,'#22c55e');ctg.addColorStop(1,'#166534');
  ctx.fillStyle=ctg;ctx.beginPath();ctx.roundRect(cx-11,by-125,22,80,8);ctx.fill();
  ctx.fillStyle='#16a34a';
  ctx.beginPath();ctx.moveTo(cx-10,by-100);ctx.quadraticCurveTo(cx-36,by-98,cx-34,by-73);ctx.quadraticCurveTo(cx-26,by-67,cx-19,by-71);ctx.quadraticCurveTo(cx-13,by-82,cx-10,by-90);ctx.closePath();ctx.fill();
  ctx.beginPath();ctx.moveTo(cx+10,by-92);ctx.quadraticCurveTo(cx+34,by-90,cx+32,by-65);ctx.quadraticCurveTo(cx+24,by-59,cx+17,by-63);ctx.quadraticCurveTo(cx+11,by-75,cx+10,by-82);ctx.closePath();ctx.fill();
  ctx.strokeStyle='rgba(240,235,200,.8)';ctx.lineWidth=.8;
  for(var sy=by-118;sy<by-45;sy+=13){
    ctx.beginPath();ctx.moveTo(cx-11,sy);ctx.lineTo(cx-16,sy-3);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx+11,sy);ctx.lineTo(cx+16,sy-3);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx,sy-2);ctx.lineTo(cx,sy-7);ctx.stroke();
  }
  ctx.fillStyle='#dc2626';
  for(var f=0;f<5;f++){var fa=f/5*Math.PI*2;ctx.beginPath();ctx.ellipse(cx+Math.cos(fa)*5,by-125+Math.sin(fa)*3,4,3,fa,0,Math.PI*2);ctx.fill();}
  ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(cx,by-125,3.5,0,Math.PI*2);ctx.fill();
  var tx=W*.47;
  ctx.fillStyle='#374151';ctx.font='13px Georgia,serif';ctx.textAlign='left';
  ctx.fillText('Lettura della bilancia:',tx,72);
  ctx.font='bold 24px monospace';ctx.fillStyle='#065f46';
  ctx.fillText(disp()+' g',tx,97);
  ctx.strokeStyle='#d1d5db';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(tx,112);ctx.lineTo(W-20,112);ctx.stroke();
  ctx.font='13px Georgia,serif';ctx.fillStyle='#374151';
  ctx.fillText('Valore vero della massa del vaso:',tx,132);
  ctx.font='bold 22px monospace';
  ctx.fillStyle=sunActive&&trueMass<3241.1?'#b91c1c':'#1d4ed8';
  ctx.fillText(fmt(trueMass)+' g',tx,157);
  if(sunActive&&er>.1){
    ctx.font='italic 12px Georgia,serif';ctx.fillStyle='#6b7280';
    ctx.fillText("Il sole fa evaporare l’acqua…",tx,182);
    if(trueMass<3241.1){
      ctx.font='bold 11px Georgia,serif';ctx.fillStyle='#374151';
      ctx.fillText('La bilancia non lo rileva!',tx,198);
    }
  }
  requestAnimationFrame(loop);
}
document.getElementById('btn-sole').addEventListener('click',function(){
  if(!sunActive){sunActive=true;this.textContent='☀️ Sole in arrivo…';this.disabled=true;}
});
loop();
})();
</script>

Oppure considerate il seguente esempio, in cui un'ape vola sopra un righello. Provate a indovinare la lunghezza dell'ape, e realizzerete quanto è difficile farlo. Qui la colpa non è né dello strumento né dell'ape: siamo noi che facciamo fatica a leggere il valore della misurazione perché le condizioni sono difficili.

<div style="margin:1.5rem 0;background:#f0fdf4;border-radius:10px;padding:1rem;border:1px solid #bbf7d0;">
<p style="margin:0 0 0.5rem;font-size:13px;color:#374151;font-family:Georgia,serif;"><strong>L'ape sul righello</strong> — riesci a stimarne la lunghezza mentre cammina?</p>
<canvas id="cv-bee" width="520" height="165" style="display:block;max-width:100%;border-radius:6px;margin:0 auto;"></canvas>
<div style="margin-top:0.6rem;display:flex;gap:0.5rem;align-items:center;justify-content:center;flex-wrap:wrap;">
  <label style="font-size:13px;font-family:Georgia,serif;color:#374151;">La tua stima (mm):</label>
  <input id="inp-bee" type="text" placeholder="es. 14,5" style="width:62px;padding:0.2rem 0.4rem;border:1px solid #9ca3af;border-radius:4px;font-size:13px;font-family:monospace;">
  <button id="btn-bee-submit" style="padding:0.3rem 0.9rem;background:#166534;color:#fff;border:none;border-radius:4px;cursor:pointer;font-family:Georgia,serif;font-size:13px;">Rivela la risposta</button>
</div>
<p id="fb-bee" style="text-align:center;font-size:13px;font-family:Georgia,serif;color:#374151;margin:0.4rem 0 0;min-height:1.3em;"></p>
</div>
<script>
(function(){
var cv=document.getElementById('cv-bee');
if(!cv)return;
var ctx=cv.getContext('2d');
var W=cv.width,H=cv.height;
var RX0=28,RX1=W-28,RY=102,RH=28,MM=70;
var PXM=(RX1-RX0)/MM;
var BL=13.7,BLpx=BL*PXM;
var bx=RX0,spd=2.2,paused=false,revealed=false,t=0;
function drawRuler(){
  var rg=ctx.createLinearGradient(0,RY,0,RY+RH);
  rg.addColorStop(0,'#f7e980');rg.addColorStop(.6,'#e8d858');rg.addColorStop(1,'#c8b830');
  ctx.fillStyle=rg;ctx.beginPath();ctx.roundRect(RX0,RY,RX1-RX0,RH,2);ctx.fill();
  ctx.strokeStyle='#a09030';ctx.lineWidth=1.5;ctx.beginPath();ctx.roundRect(RX0,RY,RX1-RX0,RH,2);ctx.stroke();
  for(var mm=0;mm<=MM;mm++){
    var x=RX0+mm*PXM;
    var tl=mm%10===0?20:mm%5===0?13:6;
    ctx.strokeStyle='#3a2800';ctx.lineWidth=mm%10===0?1.5:.8;
    ctx.beginPath();ctx.moveTo(x,RY);ctx.lineTo(x,RY+tl);ctx.stroke();
    if(mm%10===0){ctx.fillStyle='#2a1800';ctx.font='10px monospace';ctx.textAlign='center';ctx.fillText(mm,x,RY+RH-2);ctx.textAlign='left';}
  }
  ctx.fillStyle='#5a4800';ctx.font='10px Georgia,serif';ctx.textAlign='right';
  ctx.fillText('mm',RX1-2,RY+RH-2);ctx.textAlign='left';
}
function drawBee(bleft){
  if(bleft+BLpx<RX0-5||bleft>RX1+5)return;
  var bcx=bleft+BLpx/2,bcy=RY-18;
  var bw=BLpx/2,bh=10,bob=Math.sin(t*.18)*2;
  ctx.save();ctx.translate(bcx,bcy+bob);
  var wf=Math.abs(Math.sin(t*.28));
  ctx.fillStyle='rgba(200,235,255,.65)';ctx.strokeStyle='rgba(100,160,220,.5)';ctx.lineWidth=.8;
  ctx.beginPath();ctx.ellipse(-7,-bh-8+wf*3,13,6,-.3,0,Math.PI*2);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(7,-bh-8+wf*3,13,6,.3,0,Math.PI*2);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(-5,-bh-3+wf*2,9,4,-.2,0,Math.PI*2);ctx.fill();ctx.stroke();
  ctx.beginPath();ctx.ellipse(5,-bh-3+wf*2,9,4,.2,0,Math.PI*2);ctx.fill();ctx.stroke();
  ctx.save();
  ctx.beginPath();ctx.ellipse(0,0,bw,bh,0,0,Math.PI*2);ctx.clip();
  ctx.fillStyle='#f5c000';ctx.fillRect(-bw,-bh,bw*2,bh*2);
  ctx.fillStyle='#1a1200';
  [-1,0,1,2].forEach(function(i){ctx.fillRect(-bw+i*bw*.5,-bh,bw*.28,bh*2);});
  ctx.restore();
  ctx.strokeStyle='#7a5000';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(0,0,bw,bh,0,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle='#2a1800';ctx.beginPath();ctx.arc(-bw-7,0,8,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-bw-9,-2,2.5,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#000';ctx.beginPath();ctx.arc(-bw-9,-2,1.2,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#1a0a00';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(-bw-5,-7);ctx.quadraticCurveTo(-bw-14,-20,-bw-12,-27);ctx.stroke();
  ctx.beginPath();ctx.moveTo(-bw-2,-7);ctx.quadraticCurveTo(-bw-5,-20,-bw+2,-25);ctx.stroke();
  ctx.fillStyle='#1a0a00';
  ctx.beginPath();ctx.arc(-bw-12,-27,2,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(-bw+2,-25,2,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#7a5000';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(bw,0);ctx.lineTo(bw+7,0);ctx.stroke();
  ctx.restore();
}
function loop(){
  t++;ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#f8fdf0';ctx.fillRect(0,0,W,H);
  if(!paused){bx+=spd;if(bx>RX1)bx=RX0-BLpx;}
  ctx.fillStyle='#374151';ctx.font='bold 13px Georgia,serif';ctx.textAlign='center';
  ctx.fillText("Quanto è lunga l’ape?",W/2,20);
  ctx.font='12px Georgia,serif';ctx.fillStyle='#6b7280';
  ctx.fillText("Osserva l’ape muoversi sul righello e stima la sua lunghezza (in mm)",W/2,38);
  ctx.textAlign='left';
  drawRuler();drawBee(bx);
  if(revealed){
    ctx.fillStyle='#1d4ed8';ctx.font='bold 14px monospace';ctx.textAlign='center';
    ctx.fillText('Lunghezza vera: '+BL.toFixed(1)+' mm',W/2,H-10);
    ctx.textAlign='left';
  }
  requestAnimationFrame(loop);
}
document.getElementById('btn-bee-submit').addEventListener('click',function(){
  var fb=document.getElementById('fb-bee');
  var v=parseFloat(document.getElementById('inp-bee').value.replace(',','.'));
  if(isNaN(v)){fb.style.color='#b91c1c';fb.textContent='Inserisci un numero (es. 14,5).';return;}
  revealed=true;
  var d=Math.abs(v-BL);
  fb.style.color=d<.3?'#15803d':d<1.5?'#ca8a04':'#b91c1c';
  fb.textContent=d<.3?'Bravissimo! Valore vero: '+BL.toFixed(1)+' mm — scarto: '+d.toFixed(1)+' mm.':d<1.5?'Buona stima! Valore vero: '+BL.toFixed(1)+' mm. Scarto: '+d.toFixed(1)+' mm.':'Lontano! Valore vero: '+BL.toFixed(1)+' mm. Scarto: '+d.toFixed(1)+' mm.';
});
loop();
})();
</script>

Tutte queste considerazioni ci portano a realizzare che in Fisica nessuna misurazione può essere perfetta: esiste sempre una **incertezza** intrinseca nel processo di misura. Si preferisce parlare di *incertezza*, e non di “errore”, perché --- non potendo mai conoscere il valore esatto di una grandezza fisica --- <u>non possiamo nemmeno sapere di quanto ci siamo sbagliati</u>.  
È perciò importante, quando si fornisce il valore di una misurazione, dichiarare anche quanto pensiamo che il valore sia vicino a quello reale, anche se non ne saremo mai sicuri. In questa attività scopriremo come fare a fornire questo tipo di informazione.

{% include box-imp.html titolo="Incertezza di misura" %}
L'**incertezza di misura** quantifica l'imprecisione della misurazione di una grandezza fisica. Una misura senza incertezza dichiarata è una misura incompleta.
{% include box-end.html %}

### Le fonti di incertezza

Ogni misurazione è affetta da più sorgenti di incertezza. Le principali sono:

1. **Risoluzione dello strumento** — nessuno strumento è infinitamente preciso: un righello normalmente ha le tacche spaziate di un millimetro, e quindi non è in grado di rilevare differenze dell'ordine, ad esempio, del micrometro. Allo stesso modo, una bilancia digiatale da cucina normalmente ha le cifre fino al grammo, quindi non è in grado di rilevare una differenza di un decimo di grammo.
2. **Variabilità del misurando** — se la grandezza fluttua (ad esempio l'acqua oscilla leggermente), misurazioni ripetute danno valori diversi.
3. **Condizioni ambientali** — temperatura, vibrazioni, correnti d'aria possono influenzare il risultato.

### Stima dell'incertezza strumentale

La **sensibilità** di uno strumento è la più piccola variazione della grandezza misurata che esso riesce a rilevare.

{% include box-imp.html titolo="Incertezza strumentale" %}
L'incertezza strumentale, che indichiamo nelle nostre formule con i.s., dipende solo dallo strumento e si stima nel seguente modo. 
- **Strumenti analogici** (righello, bilancia a lancetta): l'incertezza strumentale è pari a **metà della divisione più piccola**. Ad esempio, per un righello con la distanza tra una tacca e l'altra pari a un millimetro l'incertezza è pari a 0,5 mm.
- **Strumenti digitali** (bilancia elettronica, termometro digitale): l'incertezza strumentale è pari all'**ultima cifra del display**. Ad esempio, per una bilancia che arriva fino al grammo l'incertezza è pari a 0,5 g.
{% include box-end.html %}

<div style="margin:1rem 0 0.5rem;">
<p style="font-size:13px;color:#374151;font-family:Georgia,serif;margin:0 0 0.4rem;"><strong>Esempio 1 — Righello millimetrato</strong></p>
<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" style="max-width:380px;width:100%;display:block;margin:0.3rem auto;">
  <defs>
    <linearGradient id="rl-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f7e980"/>
      <stop offset="60%" stop-color="#e8d858"/>
      <stop offset="100%" stop-color="#c8b830"/>
    </linearGradient>
  </defs>
  <rect x="13" y="53" width="307" height="37" rx="3" fill="rgba(0,0,0,0.12)"/>
  <rect x="195" y="50" width="20" height="38" fill="rgba(59,130,246,0.2)"/>
  <rect x="195" y="50" width="10" height="38" fill="rgba(239,68,68,0.28)"/>
  <rect x="10" y="50" width="310" height="38" rx="3" fill="url(#rl-g)" stroke="#a09030" stroke-width="1.5"/>
  <line x1="15"  y1="50" x2="15"  y2="72" stroke="#3a2800" stroke-width="1.5"/>
  <line x1="35"  y1="50" x2="35"  y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="55"  y1="50" x2="55"  y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="75"  y1="50" x2="75"  y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="95"  y1="50" x2="95"  y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="115" y1="50" x2="115" y2="64" stroke="#3a2800" stroke-width="1.2"/>
  <line x1="135" y1="50" x2="135" y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="155" y1="50" x2="155" y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="175" y1="50" x2="175" y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="195" y1="50" x2="195" y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="215" y1="50" x2="215" y2="72" stroke="#3a2800" stroke-width="1.5"/>
  <line x1="235" y1="50" x2="235" y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="255" y1="50" x2="255" y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="275" y1="50" x2="275" y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="295" y1="50" x2="295" y2="58" stroke="#3a2800" stroke-width="0.8"/>
  <line x1="315" y1="50" x2="315" y2="72" stroke="#3a2800" stroke-width="1.5"/>
  <text x="15"  y="82" font-size="10" fill="#2a1800" text-anchor="middle" font-family="monospace">0</text>
  <text x="115" y="82" font-size="10" fill="#2a1800" text-anchor="middle" font-family="monospace">5</text>
  <text x="215" y="82" font-size="10" fill="#2a1800" text-anchor="middle" font-family="monospace">10</text>
  <text x="315" y="82" font-size="10" fill="#2a1800" text-anchor="middle" font-family="monospace">15</text>
  <text x="327" y="82" font-size="9"  fill="#5a4800" font-family="Georgia,serif">mm</text>
  <line x1="195" y1="44" x2="215" y2="44" stroke="#1d4ed8" stroke-width="1.5"/>
  <line x1="195" y1="40" x2="195" y2="48" stroke="#1d4ed8" stroke-width="1.5"/>
  <line x1="215" y1="40" x2="215" y2="48" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="205" y="35" font-size="11" fill="#1d4ed8" text-anchor="middle" font-family="Georgia,serif" font-weight="bold">1 mm</text>
  <text x="205" y="21" font-size="10" fill="#2563eb" text-anchor="middle" font-family="Georgia,serif">(sensibilità)</text>
  <line x1="195" y1="96" x2="205" y2="96" stroke="#b91c1c" stroke-width="1.5"/>
  <line x1="195" y1="92" x2="195" y2="100" stroke="#b91c1c" stroke-width="1.5"/>
  <line x1="205" y1="92" x2="205" y2="100" stroke="#b91c1c" stroke-width="1.5"/>
  <text x="200" y="114" font-size="11" fill="#b91c1c" text-anchor="middle" font-family="Georgia,serif" font-weight="bold">0,5 mm</text>
  <text x="200" y="129" font-size="10" fill="#dc2626" text-anchor="middle" font-family="Georgia,serif">(incertezza strumentale)</text>
</svg>
<p style="font-size:12px;color:#6b7280;font-family:Georgia,serif;text-align:center;margin:0.2rem 0 0;">La distanza tra due tacche adiacenti (sensibilità) è <strong style="color:#1d4ed8;">1 mm</strong>. L'incertezza strumentale è la metà: <strong style="color:#b91c1c;">0,5 mm</strong>.</p>
</div>

<div style="margin:0.8rem 0 0.5rem;">
<p style="font-size:13px;color:#374151;font-family:Georgia,serif;margin:0 0 0.4rem;"><strong>Esempio 2 — Calibro digitale (risoluzione: 0,1 mm)</strong></p>
<svg viewBox="0 0 460 95" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:0.3rem auto;">
  <rect x="8" y="46" width="444" height="11" rx="2" fill="#94a3b8" stroke="#64748b" stroke-width="1"/>
  <line x1="28"  y1="46" x2="28"  y2="52" stroke="#475569" stroke-width="0.8"/>
  <line x1="48"  y1="46" x2="48"  y2="52" stroke="#475569" stroke-width="0.8"/>
  <line x1="68"  y1="46" x2="68"  y2="52" stroke="#475569" stroke-width="0.8"/>
  <line x1="88"  y1="46" x2="88"  y2="52" stroke="#475569" stroke-width="0.8"/>
  <line x1="108" y1="46" x2="108" y2="57" stroke="#475569" stroke-width="1.2"/>
  <line x1="128" y1="46" x2="128" y2="52" stroke="#475569" stroke-width="0.8"/>
  <line x1="148" y1="46" x2="148" y2="52" stroke="#475569" stroke-width="0.8"/>
  <line x1="168" y1="46" x2="168" y2="52" stroke="#475569" stroke-width="0.8"/>
  <line x1="188" y1="46" x2="188" y2="52" stroke="#475569" stroke-width="0.8"/>
  <line x1="208" y1="46" x2="208" y2="57" stroke="#475569" stroke-width="1.2"/>
  <rect x="8"  y="18" width="22" height="55" rx="3" fill="#475569"/>
  <rect x="8"  y="57" width="22" height="17" rx="1" fill="#1e293b"/>
  <rect x="30" y="58" width="40" height="15" rx="1" fill="#bfdbfe" stroke="#60a5fa" stroke-width="1"/>
  <rect x="70" y="18" width="22" height="55" rx="3" fill="#475569"/>
  <rect x="70" y="57" width="22" height="17" rx="1" fill="#1e293b"/>
  <rect x="81" y="18" width="182" height="9"  rx="2" fill="#374151"/>
  <rect x="82" y="5"  width="182" height="42" rx="5" fill="#090f09" stroke="#374151" stroke-width="1.5"/>
  <rect x="84" y="7"  width="178" height="38" rx="4" fill="#07100a"/>
  <text x="170" y="37" font-size="28" fill="#7cfc00" text-anchor="end" font-family="Courier New,monospace">12,3</text>
  <text x="174" y="37" font-size="14" fill="#5ab050" font-family="Courier New,monospace">mm</text>
  <rect x="152" y="7" width="18" height="38" rx="2" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.45)" stroke-width="1"/>
  <line x1="161" y1="49" x2="161" y2="62" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="161" y="75" font-size="11" fill="#92400e" text-anchor="middle" font-family="Georgia,serif">0,1 mm</text>
  <text x="161" y="89" font-size="9"  fill="#b45309" text-anchor="middle" font-family="Georgia,serif">(ultima cifra del display)</text>
</svg>
<div style="margin-top:0.6rem;display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap;font-size:13px;font-family:Georgia,serif;color:#374151;">
<span>Qual è l'incertezza strumentale di questo calibro?</span>
<input id="inp-cal" type="text" placeholder="es. 0,05" style="width:64px;padding:0.2rem 0.4rem;border:1px solid #9ca3af;border-radius:4px;font-size:13px;font-family:monospace;">
<select id="sel-cal" style="padding:0.22rem 0.3rem;border:1px solid #9ca3af;border-radius:4px;font-size:13px;font-family:Georgia,serif;">
  <option value="mm">mm</option>
  <option value="cm">cm</option>
  <option value="m">m</option>
</select>
<button id="btn-cal" style="padding:0.25rem 0.8rem;background:#1a4d6a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:13px;font-family:Georgia,serif;">&#10003;</button>
<span id="fb-cal" style="font-size:13px;"></span>
</div>
</div>
<script>
(function(){
window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
var btn=document.getElementById('btn-cal'),fb=document.getElementById('fb-cal');
btn.addEventListener('click',function(){
  var v=parseFloat(document.getElementById('inp-cal').value.replace(',','.'));
  var u=document.getElementById('sel-cal').value;
  var f=u==='mm'?1:u==='cm'?10:1000;
  var ok=!isNaN(v)&&Math.abs(v*f-0.05)<0.001;
  if(ok){fb.style.color='#15803d';fb.textContent='Esatto!';window._shoot(btn);}
  else if(isNaN(v)){fb.style.color='#b91c1c';fb.textContent='Inserisci un numero.';}
  else{fb.style.color='#b91c1c';fb.textContent='Non è corretto.';}
});
document.getElementById('inp-cal').addEventListener('keydown',function(e){if(e.key==='Enter')btn.click();});
})();
</script>

### Semidispersione e la notazione $\bar x \pm e_x$

Quando si eseguono più misurazioni della stessa grandezza si ottengono in genere valori leggermente diversi: $x_1, x_2, \ldots, x_N$. Non sappiamo quale di quei valori sia quello corretto: per stimarlo, quindi, facciamo una media (proprio come con i voti!) e la indichiamo con $\bar x$, che corrisponde quindi a

$$
\bar x = \frac{x_1 + x_2 + \cdots + x_N} N.
$$

Dopodiché misuriamo anche l'incertezza della misurazione tramite la <definizione>semidispersione</definizione>, che corrisponde alla metà della differenza tra il valore massimo e quello minimo, e si indica con $s_x$:

$$
s_x = \frac{x_\max - x_\min} 2.
$$

Alla fine si considera come incertezza globale $\Delta_x$ su la somma tra l'incertezza strumentale e la semidispersione:

$$
\Delta_x = \text{i.s.} + s_x
$$

{% include box-def.html titolo="Valore medio e incertezza" %}
**Valore medio:**
$$\bar{x} = \frac{x_1 + x_2 + \cdots + x_N}{N}$$

**Incertezza:**
$$\Delta_x = \text{i.s.} + \frac{x_\text{max} - x_\text{min}}{2}.$$

Il risultato della misura si riporta nella forma:
$$x = \bar{x} \pm \Delta_x$$
{% include box-end.html %}

*Esempio.* Misuro tre volte la lunghezza di un oggetto, con un righello avente tacche distanziate di un millimetro. L'incertezza strumentale è quindi $0.5$ mm. Inoltre, i valori della misurazione sono: 12.3 cm, 12.5 cm, 12.4 cm.
- Calcolo il valor medio: $\bar{\ell} = (12{.}3 + 12{.}5 + 12{.}4)/3 = 12{.}4$ cm
- Calcolo la semidispersione: $s_\ell = (12{.}5 - 12{.}3)/2 = 0{.}1$ cm
- Calcolo l'incertezza totale (semidispersione + incertezza strumentale) $\Delta_\ell = \text{i.s.} + s_\ell = 0.15 cm$.
- Risultato: $\ell = (12{.}4 \pm 0{.}15)$ cm

### Errore relativo percentuale

Un'incertezza di un centimetro nella misurazione dell'altezza della Tour Eiffel significa che la misurazione è molto precisa. Al contrario, la stessa incertezza di un centimetro nella misurazione della dimensione di una cellula biologica è un errore gigantesco.   
Per questo è necessario, oltreché stimare l'incertezza riferirla anche all'oggetto stesso che si è misurato. Il modo migliore di farlo è il seguente.

{% include box-imp.html titolo="Errore relativo percentuale" %}
L'<definizione>errore relativo percentuale</definizione> esprime l'incertezza della misurazione come percentuale del valore medio:
$$e_x = \frac{\Delta_x}{\bar{x}} \times 100\%$$


{% include box-end.html %}

*Esempio.* Con $\ell = (12{,}4 \pm 0{,}15)$ cm:
$$e_\ell = \frac{0{,}15}{12{,}4} \times 100\% \approx 1{,}2\%$$

<u>Un errore relativo percentuale piccolo indica una misura precisa; uno grande indica che l'incertezza è rilevante rispetto al valore misurato.</u>

### Propagazione degli errori

Spesso la grandezza che ci interessa non si misura direttamente, ma si *calcola* a partire da grandezze misurate. La quantità calcolata avrà un'incertezza che è data dal seguente teorema.

{% include box-thm.html titolo="Teorema di propagazione degli errori" %}
Siano $x$ e $y$ due grandezze misurate con incertezze assolute $e_x$, $e_y$ e incertezze relative percentuali $e_x = (\Delta_x/\bar{x})\times 100\%$, $e_y = (\Delta_y/\bar{y})\times 100\%$.

| Operazione | Incertezza da usare | Regola |
|---|---|---|
| $z = x + y$ | **assoluta** | $\Delta_z = \Delta_x + \Delta_y$ |
| $z = x - y$ | **assoluta** | $\Delta_z = \Delta_x + \Delta_y$ |
| $z = x \cdot y$ | **relativa %** | $e_z = e_x + e_y$ |
| $z = x / y$ | **relativa %** | $e_z = e_x + e_y$ |
| $z = x^n$ | **relativa %** | $e_z = n\,e_x$ |

L'incertezza assoluta risultante si ricava sempre come $\Delta_z = \bar{z}\,\cdot\,e_z / 100$.
{% include box-end.html %}

{% include box-warn.html titolo="Attenzione: nella differenza le incertezze si sommano!" %}
In $z = x - y$, le incertezze *assolute* si sommano (non si sottraggono). Se $x$ e $y$ sono vicini, $\Delta z = x - y$ è piccolo ma $\Delta_z = \Delta_x + \Delta_y$ rimane grande: l'errore relativo percentuale su $z$ può diventare molto elevato.
{% include box-end.html %}

</div>
</section>

<section id="cap2" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Parte II</span>
  <h2 class="chapter-title">L'attività di laboratorio</h2>
</header>
<div class="prose" markdown="1">

## Regole dell'attività
- L'attività di laboratorio deve essere svolta a casa e documentata con fotografie dove richiesto. Infine, si dovrà compilare un modulo sull'attività, come specificato più avanti. Il modulo dovrà essere salvato **in formato pdf** e inviato <u>alla mail</u>
<div style="text-align:center">
<a href="mailto:fulvio.bergadano@vittoriaweb.it">fulvio.bergadano@vittoriaweb.it</a>
</div>
- Potete utilizzare l'Intelligenza Artificiale, tranne nella parte di **Discussione**, come specificato.
- Potete lavorare in gruppo (o con l'aiuto di un genitore/parente/amico), ma ciascuno di voi deve eseguire *le proprie* misurazioni. Infatti, ciascuno di voi dovrà misurare la densità di un oggetto differente. Tale oggetto deve essere unico per ciascuno studente.
- Dopo la consegna della relazione ci sarà un'interrogazione che verterà sulla relazione stessa (vedi sotto, parte 3). Anche se avete lavorato in gruppo, all'interrogazione siete tenuti a sapere <u>tutto</u> quello che avete scritto.
- L'interrogazione e la relazione concorrono insieme alla determinazione del voto. Il voto vale al 100%.
- Se la relazione non viene consegnata in tempo, il voto sarà 4. Sarà però possibile recuperare con una prova (scritta o orale).
- Se avete un qualsiasi dubbio che non siete in grado di risolvere da soli **dovete** scrivermi!
- Lavorate serenamente e onestamente.


### Obiettivo
L'obiettivo è quello di farvi toccare con mano la precisione della Fisica sperimentale.

Durante l'esperienza, dovrete determinare la densità $d$ di un corpo irregolare (un sasso o simile) usando strumenti reperibili a casa.

{% include box-def.html titolo="Densità" %}
La densità di un corpo è il rapporto tra la sua massa e il suo volume. Essa si calcola dunque con la formula
$$d = \frac{m}{V}$$
Si misura in kg/m³ (o in g/cm³ o in g/L in unità pratiche, dove “L” è il litro e corrisponde a 1 dm³).
{% include box-end.html %}

Il problema è misurare il **volume** di un corpo irregolare, di cui non possiamo calcolare il volume con formule geometriche semplici. Usiamo il **metodo della variazione di livello**: si immerge il corpo in acqua e si misura di quanto sale il livello.

<div style="display:flex;gap:2rem;flex-wrap:wrap;justify-content:center;margin:1.5rem 0;">

<figure style="text-align:center;flex:0 0 auto;">
<svg width="130" height="185" viewBox="0 0 130 185" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="90" height="155" fill="none" stroke="#6b7280" stroke-width="2.5" rx="2"/>
  <rect x="21" y="85" width="88" height="84" fill="#bfdbfe" opacity="0.75"/>
  <line x1="21" y1="85" x2="109" y2="85" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,2"/>
  <text x="115" y="89" font-size="11" fill="#374151" font-style="italic">h<tspan font-size="8" baseline-shift="sub">i</tspan></text>
  <line x1="20" y1="7" x2="110" y2="7" stroke="#374151" stroke-width="1.5"/>
  <text x="58" y="5" font-size="11" fill="#374151" font-style="italic">d</text>
  <circle cx="65" cy="60" r="16" fill="#9ca3af" opacity="0.8"/>
  <text x="33" y="135" font-size="10" fill="#374151">acqua</text>
</svg>
<figcaption style="font-size:0.85rem;color:#6b7280;">Prima dell'immersione</figcaption>
</figure>

<figure style="text-align:center;flex:0 0 auto;">
<svg width="130" height="185" viewBox="0 0 130 185" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="90" height="155" fill="none" stroke="#6b7280" stroke-width="2.5" rx="2"/>
  <rect x="21" y="65" width="88" height="104" fill="#bfdbfe" opacity="0.75"/>
  <line x1="21" y1="65" x2="109" y2="65" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,2"/>
  <line x1="21" y1="85" x2="109" y2="85" stroke="#93c5fd" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="115" y="69" font-size="11" fill="#374151" font-style="italic">h<tspan font-size="8" baseline-shift="sub">f</tspan></text>
  <text x="115" y="89" font-size="11" fill="#93c5fd" font-style="italic">h<tspan font-size="8" baseline-shift="sub">i</tspan></text>
  <line x1="109" y1="65" x2="109" y2="85" stroke="#374151" stroke-width="1.5" marker-start="none"/>
  <text x="112" y="76" font-size="10" fill="#374151">Δh</text>
  <circle cx="65" cy="130" r="16" fill="#9ca3af" opacity="0.8"/>
  <text x="33" y="105" font-size="10" fill="#374151">acqua</text>
</svg>
<figcaption style="font-size:0.85rem;color:#6b7280;">Dopo l'immersione</figcaption>
</figure>

</div>

### Strumenti necessari

- Un sasso (o altro corpo solido irregolare, non troppo piccolo)
- Un bicchiere cilindrico (idealmente con pareti verticali e base piatta)
- Acqua
- Un righello millimetrato
- Una bilancia (anche da cucina va bene)
- Un filo sottile (per calare il sasso delicatamente)
- Uno smartphone per le fotografie

### Perché serve un bicchiere cilindrico

Il calcolo funziona solo se il bicchiere ha **sezione costante**, cioè è un cilindro (pareti verticali, non a tronco di cono).

<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg" style="max-width:340px;width:100%;display:block;margin:0.5rem auto;">
  <rect x="50" y="99" width="60" height="51" fill="#bfdbfe" opacity="0.6"/>
  <rect x="50" y="58" width="60" height="92" fill="none" stroke="#475569" stroke-width="2.5"/>
  <ellipse cx="80" cy="58" rx="30" ry="6" fill="#f0f9ff" stroke="#475569" stroke-width="2"/>
  <ellipse cx="80" cy="99" rx="30" ry="5" fill="#7dd3fc" opacity="0.8"/>
  <ellipse cx="80" cy="150" rx="30" ry="5" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="55" y="64" width="6" height="68" rx="3" fill="white" opacity="0.3"/>
  <circle cx="124" cy="78" r="14" fill="#22c55e" stroke="white" stroke-width="1.5"/>
  <text x="124" y="85" font-size="18" fill="white" text-anchor="middle" font-family="Arial,sans-serif">&#10003;</text>
  <text x="80" y="173" font-size="12" fill="#15803d" text-anchor="middle" font-family="Georgia,serif" font-weight="bold">cilindrico</text>
  <path d="M218,108 L262,108 L255,150 L225,150 Z" fill="#bfdbfe" opacity="0.6"/>
  <path d="M210,58 L270,58 L255,150 L225,150 Z" fill="none" stroke="#475569" stroke-width="2.5"/>
  <ellipse cx="240" cy="58" rx="30" ry="6" fill="#f0f9ff" stroke="#475569" stroke-width="2"/>
  <ellipse cx="240" cy="108" rx="22" ry="5" fill="#7dd3fc" opacity="0.8"/>
  <ellipse cx="240" cy="150" rx="15" ry="4" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="216" y1="65" x2="221" y2="140" stroke="white" stroke-width="5" stroke-linecap="round" opacity="0.22"/>
  <circle cx="240" cy="30" r="14" fill="#ef4444" stroke="white" stroke-width="1.5"/>
  <text x="240" y="37" font-size="18" fill="white" text-anchor="middle" font-family="Arial,sans-serif">&#10005;</text>
  <text x="240" y="173" font-size="12" fill="#dc2626" text-anchor="middle" font-family="Georgia,serif" font-weight="bold">tronco di cono</text>
</svg>


## Istruzioni

Segui le fasi nell'ordine indicato. Per ciascuna misurazione: riporta i dati grezzi, calcola media e incertezza, stima l'errore relativo percentuale. Scatta una fotografia per ogni fase.

---

#### Fase 0 — Fotografia degli strumenti

Fotografa tutti gli strumenti che utilizzerai prima di iniziare. La foto deve essere nitida e tutti gli strumenti devono essere riconoscibili.

---

#### Fase 1 — Diametro del bicchiere

Misura il **diametro interno** $d$ del bicchiere con il righello. Ripeti la misurazione almeno **3 volte**, spostando il righello in posizioni leggermente diverse. Fai una foto del righello sul diametro del bicchiere.

Calcola l'incertezza strumentale i.s. del righello.

Poi calcola:

$$\bar{d} = \frac{d_1 + d_2 + d_3}{3}, \qquad s_d = \frac{d_\text{max} - d_\text{min}}{2}$$

(naturalmente, può essere che ti venga sempre lo stesso valore tutte e tre le volte).

Quindi, calcola 

$$\Delta_d = \text{i.s.} + s_d, \qquad e_d = \frac{\Delta_d}{\bar d}.$$

---

#### Fase 2 — Area di base del bicchiere

L'area di base $S$ del bicchiere si calcola come l'area di un cerchio:

$$S = \pi \!\left(\frac{\bar{d}}{2}\right)^2$$

Dopo aver calcolato $S$ sarà necessario anche stimare l'incertezza su $S$. Qui ci è utile il precedente teorema (vedi [qui](#propagazione-degli-errori)), che ci dice che se 

$$z = x^n$$

allora $e_z = n \cdot e_x$. Nel nostro caso, quindi,

$$e_S = 2\,e_d.$$

---

#### Fase 3 — Altezza iniziale dell'acqua

Versa dell'acqua nel bicchiere. Misura l'altezza iniziale $h_i$ del livello con il righello. Ripeti almeno **3 volte**. Fai una fotografia del righello mentre misura l'altezza. A questo punto calcola tutte le quantità utili.

$$\bar{h}_i = \ldots, \qquad s_{h_i} = \frac{h_{i,\text{max}} - h_{i,\text{min}}}{2}, \qquad e_{h_i} = \frac{s_{h_i} + \text{i.s.}}{\bar{h}_i} \times 100\%$$


---

#### Fase 4 — Volume iniziale dell'acqua

Conoscendo l'area di base dell'acqua e la sua altezza, possiamo calcolare il suo volume iniziale secondo la formula del volume di un cilindro

$$V_i=S\cdot h_i.$$

Secondo il teorema di propagazione degli errori (vedi [qui](#propagazione-degli-errori)) l'errore relativo percentuale sul volume è pari alla somma degli errori relativi percentuali di sezione e altezza, cioè

$$
e_{V_i} = e_S + e_{h_i}.
$$

Ci sarà utile stimare anche l'incertezza $\Delta_{V_i}$ del volume iniziale, che possiamo ricavare a partire dall'errore relativo percentuale come

$$
\Delta_{V_i} = \frac{e_{V_i} \cdot V_i}{100}.
$$

---

#### Fase 5 — Massa del sasso

Posa il sasso sulla bilancia e leggi la massa $m$. Fotografa il sasso e il valore.

Qui probabilmente ripetendo la misurazione il valore ottenuto sarebbe sempre uguale, quindi non è necessario ripetere più volte il processo e possiamo stimare semplicemente l'incertezza strumentale.

- Bilancia **digitale**: l'incertezza strumentale corrisponde a metà della cifra più piccola.
- Bilancia **analogica**: l'incertezza strumentale corrisponde a metà della distanza tra due tacche.

$$e_m = \frac{\text{i.s.}}{m} \times 100\%$$


---


#### Fase 6 — Inserimento del sasso e livello finale dell'acqua

Inserisci il sasso e misura il nuovo livello $h_f$. Ripeti almeno **3 volte**. Fotografa una volta il righello.

Calcola di nuovo tutte le quantità che hai calcolato nella Fase 3 e nella Fase 4.

---

#### Fase 7 — Calcolo della densità

**Variazione di livello** (differenza: gli errori assoluti si sommano):

$$z=\bar{h}_f - \bar{h}_i, \qquad e_{z} = \Delta_{h_f} + \Delta_{h_i}, \qquad e_{z} = \frac{e_{z}}{z} \times 100\%$$

**Volume del sasso** (prodotto: gli errori relativi si sommano):

$$V_\text{sasso} = S \cdot \Delta h$$

$$e_{V} = e_S + e_{z} = 2\,e_d + e_{z}, \qquad e_V = V_\text{sasso} \cdot \frac{e_V}{100}$$

**Densità** (quoziente: gli errori relativi si sommano):

$$d = \frac{m}{V_\text{sasso}}$$

$$e_d = e_m + e_V, \qquad e_d = d \cdot \frac{e_d}{100}$$

**Risultato finale da riportare:**

$$\boxed{d = \bar{d} \pm e_d \quad \left(e_d = \ldots\%\right)}$$

---

### Discussione

In questa sezione puoi **soltanto guadagnare punti**, non perderli. Rifletti liberamente sull'esperimento, senza l'aiuto dell'Intelligenza Artificiale. Ecco alcuni spunti (non obbligatori):

- Quali sono state le principali fonti di incertezza nel tuo esperimento?
- Quale grandezza ha contribuito di più all'errore finale su $d$? Perché?
- Come si potrebbe ridurre l'incertezza sul volume del sasso?
- Cosa succederebbe se il bicchiere non fosse perfettamente cilindrico?
- Esiste un modo alternativo per misurare il volume del sasso?
- Come potresti verificare il risultato in modo indipendente?

</div>
</section>

<section id="cap-relazione" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Relazione</span>
  <h2 class="chapter-title">Modulo e consegna</h2>
</header>
<div class="prose" markdown="1">

### Come consegnare

Compila il modulo qui sotto, poi clicca **Stampa modulo** in fondo. Nel dialogo di stampa scegli "Salva come PDF" come destinazione e invia il file a:

<div style="text-align:center;margin:0.5rem 0;">
<a href="mailto:fulvio.bergadano@vittoriaweb.it">fulvio.bergadano@vittoriaweb.it</a>
</div>

**Oggetto della mail:** `Relazione densità – [Nome Cognome] – [Classe]`

*In alternativa: compila su carta, fotografa ogni pagina e allega le foto alla mail.*

### Modulo

<style>
.rl-card{background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:.9rem 1.1rem;margin:.7rem 0;break-inside:avoid;}
.rl-card b{font-size:13px;color:#1e3a5f;font-family:Georgia,serif;display:block;margin-bottom:.5rem;}
.rl-row{display:flex;align-items:baseline;gap:.5rem;flex-wrap:wrap;margin:.35rem 0;font-size:13px;font-family:Georgia,serif;color:#374151;}
.rl-in{border:none;border-bottom:1.5px solid #9ca3af;padding:.15rem .3rem;font-family:monospace;font-size:13px;width:72px;background:transparent;outline:none;}
.rl-in.wl{width:260px;}.rl-in.wm{width:140px;}
.rl-sel{border:none;border-bottom:1.5px solid #9ca3af;font-family:monospace;font-size:12px;background:transparent;outline:none;color:#374151;padding:.1rem .1rem;}
.rl-ta{width:100%;min-height:80px;border:1.5px solid #d1d5db;border-radius:4px;padding:.4rem;font-family:Georgia,serif;font-size:13px;resize:vertical;box-sizing:border-box;margin-top:.3rem;}
.rl-phwrap{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.4rem;}
.rl-ph{width:110px;height:85px;object-fit:cover;border-radius:4px;border:1px solid #d1d5db;}
.rl-badge{display:inline-block;background:#1e3a5f;color:white;border-radius:4px;padding:.1rem .5rem;font-size:11px;font-family:Georgia,serif;margin-right:.4rem;}
.rl-res{background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:.8rem 1rem;margin:.5rem 0;break-inside:avoid;}
.rl-stars span{font-size:22px;cursor:pointer;opacity:.3;color:#f59e0b;user-select:none;}
.rl-stars span.on{opacity:1;}
@media print{
  body,body *{visibility:hidden!important;}
  #rl-form,#rl-form *{visibility:visible!important;}
  #rl-form{position:absolute;top:0;left:0;width:100%;padding:1rem 2rem;box-sizing:border-box;background:white;}
  .rl-np{display:none!important;visibility:hidden!important;}
  .rl-in{border-bottom:1px solid #aaa!important;}
  .rl-sel{border-bottom:1px solid #aaa!important;}
  .rl-ta{border:1px dashed #bbb!important;background:transparent!important;}
}
</style>
<div id="rl-form">

<div class="rl-card">
<b>Dati</b>
<div class="rl-row">Nome e Cognome: <input class="rl-in wl" id="rl-nome" type="text"></div>
<div class="rl-row">Classe: <input class="rl-in" id="rl-classe" type="text" style="width:55px"> &emsp; Data: <input class="rl-in wm" id="rl-data" type="date"></div>
</div>

<div class="rl-card">
<b><span class="rl-badge">Fase 0</span> Strumenti</b>
<div class="rl-row">Strumenti utilizzati:</div>
<textarea class="rl-ta" id="rl-strum" placeholder="Righello (sensibilità 1 mm), bilancia digitale (ultima cifra: ? g), bicchiere cilindrico, ..."></textarea>
<div class="rl-row" style="margin-top:.4rem;">i.s. righello = <input class="rl-in" id="rl-isr" type="text"> <select class="rl-sel"><option>mm</option><option>cm</option></select></div>
<div class="rl-row">i.s. bilancia = <input class="rl-in" id="rl-isb" type="text"> <select class="rl-sel"><option>g</option><option>kg</option></select></div>
<div class="rl-row rl-np" style="margin-top:.4rem;">Foto strumenti: <input type="file" accept="image/*" multiple onchange="rlPh(this,'rlph0')"></div>
<div class="rl-phwrap" id="rlph0"></div>
</div>

<div class="rl-card">
<b><span class="rl-badge">Fase 1</span> Diametro del bicchiere</b>
<div class="rl-row">$d_1$ = <input class="rl-in" id="d1" type="text"> &ensp; $d_2$ = <input class="rl-in" id="d2" type="text"> &ensp; $d_3$ = <input class="rl-in" id="d3" type="text"> <select class="rl-sel"><option>mm</option><option>cm</option></select></div>
<div class="rl-row">$\bar{d}$ = <input class="rl-in" id="d_m" type="text"> &ensp; $s_d$ = <input class="rl-in" id="d_s" type="text"> &ensp; $\Delta d$ = <input class="rl-in" id="d_e" type="text"> <select class="rl-sel"><option>mm</option><option>cm</option></select></div>
<div class="rl-row">$e_d$ = <input class="rl-in" id="d_r" type="text"> %</div>
<div class="rl-row rl-np" style="margin-top:.3rem;">Foto: <input type="file" accept="image/*" multiple onchange="rlPh(this,'rlph1')"></div>
<div class="rl-phwrap" id="rlph1"></div>
</div>

<div class="rl-card">
<b><span class="rl-badge">Fase 2</span> Area di base</b>
<div class="rl-row">$S$ = <input class="rl-in" id="S_v" type="text"> <select class="rl-sel"><option>mm²</option><option>cm²</option></select></div>
<div class="rl-row">$\Delta S$ = <input class="rl-in" id="DS_v" type="text"> <select class="rl-sel"><option>mm²</option><option>cm²</option></select> &ensp; $e_S$ = <input class="rl-in" id="eS_v" type="text"> %</div>
</div>

<div class="rl-card">
<b><span class="rl-badge">Fase 3</span> Altezza iniziale dell'acqua</b>
<div class="rl-row">$h_{i,1}$ = <input class="rl-in" id="hi1" type="text"> &ensp; $h_{i,2}$ = <input class="rl-in" id="hi2" type="text"> &ensp; $h_{i,3}$ = <input class="rl-in" id="hi3" type="text"> <select class="rl-sel"><option>mm</option><option>cm</option></select></div>
<div class="rl-row rl-np" style="margin-top:.3rem;">Foto: <input type="file" accept="image/*" multiple onchange="rlPh(this,'rlph3')"></div>
<div class="rl-phwrap" id="rlph3"></div>
<div class="rl-row">$\bar{h}_i$ = <input class="rl-in" id="hi_m" type="text"> &ensp; $s_{h_i}$ = <input class="rl-in" id="hi_s" type="text"> &ensp; $\Delta h_i$ = <input class="rl-in" id="hi_e" type="text"> <select class="rl-sel"><option>mm</option><option>cm</option></select></div>
<div class="rl-row">$e_{h_i}$ = <input class="rl-in" id="hi_r" type="text"> %</div>
</div>

<div class="rl-card">
<b><span class="rl-badge">Fase 4</span> Volume iniziale dell'acqua</b>
<div class="rl-row">$V_i$ = <input class="rl-in" id="Vi_v" type="text"> <select class="rl-sel"><option>mm³</option><option>cm³</option><option>mL</option></select></div>
<div class="rl-row">$\Delta V_i$ = <input class="rl-in" id="DVi_v" type="text"> <select class="rl-sel"><option>mm³</option><option>cm³</option><option>mL</option></select> &ensp; $e_{V_i}$ = <input class="rl-in" id="eVi_v" type="text"> %</div>
</div>

<div class="rl-card">
<b><span class="rl-badge">Fase 5</span> Altezza finale con il sasso</b>
<div class="rl-row">$h_{f,1}$ = <input class="rl-in" id="hf1" type="text"> &ensp; $h_{f,2}$ = <input class="rl-in" id="hf2" type="text"> &ensp; $h_{f,3}$ = <input class="rl-in" id="hf3" type="text"> <select class="rl-sel"><option>mm</option><option>cm</option></select></div>
<div class="rl-row rl-np" style="margin-top:.3rem;">Foto: <input type="file" accept="image/*" multiple onchange="rlPh(this,'rlph5')"></div>
<div class="rl-phwrap" id="rlph5"></div>
<div class="rl-row">$\bar{h}_f$ = <input class="rl-in" id="hf_m" type="text"> &ensp; $s_{h_f}$ = <input class="rl-in" id="hf_s" type="text"> &ensp; $\Delta h_f$ = <input class="rl-in" id="hf_e" type="text"> <select class="rl-sel"><option>mm</option><option>cm</option></select></div>
<div class="rl-row">$e_{h_f}$ = <input class="rl-in" id="hf_r" type="text"> %</div>
<div class="rl-row">$z$ = <input class="rl-in" id="z_v" type="text"> &ensp; $\Delta z$ = <input class="rl-in" id="Dz_v" type="text"> <select class="rl-sel"><option>mm</option><option>cm</option></select> &ensp; $e_z$ = <input class="rl-in" id="ez_v" type="text"> %</div>
<div class="rl-row">$V_s$ = <input class="rl-in" id="Vs_v" type="text"> <select class="rl-sel"><option>mm³</option><option>cm³</option><option>mL</option></select></div>
<div class="rl-row">$\Delta V_s$ = <input class="rl-in" id="DVs_v" type="text"> <select class="rl-sel"><option>mm³</option><option>cm³</option><option>mL</option></select> &ensp; $e_{V_s}$ = <input class="rl-in" id="eVs_v" type="text"> %</div>
</div>

<div class="rl-card">
<b><span class="rl-badge">Fase 6</span> Massa del sasso</b>
<div class="rl-row">$m_1$ = <input class="rl-in" id="m1" type="text"> &ensp; $m_2$ = <input class="rl-in" id="m2" type="text"> &ensp; $m_3$ = <input class="rl-in" id="m3" type="text"> <select class="rl-sel"><option>g</option><option>kg</option></select></div>
<div class="rl-row rl-np" style="margin-top:.3rem;">Foto bilancia: <input type="file" accept="image/*" multiple onchange="rlPh(this,'rlph6')"></div>
<div class="rl-phwrap" id="rlph6"></div>
<div class="rl-row">$\bar{m}$ = <input class="rl-in" id="m_m" type="text"> &ensp; $s_m$ = <input class="rl-in" id="m_s" type="text"> &ensp; $\Delta m$ = <input class="rl-in" id="m_e" type="text"> <select class="rl-sel"><option>g</option><option>kg</option></select></div>
<div class="rl-row">$e_m$ = <input class="rl-in" id="m_r" type="text"> %</div>
</div>

<div class="rl-res">
<b style="font-size:13px;color:#1e3a5f;font-family:Georgia,serif;display:block;margin-bottom:.4rem;">Densità del sasso</b>
<div class="rl-row">$d$ = <input class="rl-in" id="d_dens" type="text"> <select class="rl-sel"><option>g/cm³</option><option>kg/m³</option></select></div>
<div class="rl-row">$\Delta d$ = <input class="rl-in" id="Dd_dens" type="text"> <select class="rl-sel"><option>g/cm³</option><option>kg/m³</option></select> &ensp; $e$ = <input class="rl-in" id="e_dens" type="text"> %</div>
<div class="rl-row" style="font-weight:bold;font-size:13px;margin-top:.5rem;border-top:1px solid #bfdbfe;padding-top:.4rem;">Risultato: <em>d</em> = ( <input class="rl-in" id="d2_dens" type="text" style="width:55px"> ± <input class="rl-in" id="Dd2_dens" type="text" style="width:55px"> ) <select class="rl-sel"><option>g/cm³</option><option>kg/m³</option></select></div>
</div>

<div class="rl-card">
<b>Commento finale <span style="font-weight:normal;font-size:11px;color:#6b7280;">(facoltativo)</span></b>
<textarea class="rl-ta" id="rl-comm" style="min-height:110px;" placeholder="Difficoltà incontrate, osservazioni, curiosità, proposte di miglioramento..."></textarea>
</div>

<div class="rl-card rl-np">
<b>Autovalutazione <span style="font-weight:normal;font-size:11px;color:#6b7280;">(facoltativa)</span></b>
<div class="rl-row">Comprendo il metodo del volume per immersione:</div>
<div class="rl-stars" id="st1" style="margin:.1rem 0 .4rem .3rem;" onclick="rlStar(event,'st1')"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
<div class="rl-row">So calcolare e propagare l'incertezza strumentale:</div>
<div class="rl-stars" id="st2" style="margin:.1rem 0 .4rem .3rem;" onclick="rlStar(event,'st2')"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
<div class="rl-row">Capisco perché serve un bicchiere cilindrico:</div>
<div class="rl-stars" id="st3" style="margin:.1rem 0 0 .3rem;" onclick="rlStar(event,'st3')"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
</div>

<div style="text-align:center;margin:1.2rem 0;" class="rl-np">
<button onclick="window.print()" style="padding:.5rem 2rem;background:#1a4d6a;color:white;border:none;border-radius:6px;cursor:pointer;font-size:14px;font-family:Georgia,serif;">&#128424; Stampa modulo</button>
</div>

</div>
<script>
(function(){
var di=document.getElementById('rl-data');if(di&&!di.value)di.value=new Date().toISOString().slice(0,10);
window.rlPh=function(inp,wid){
  var w=document.getElementById(wid);
  Array.from(inp.files).forEach(function(f){var r=new FileReader();r.onload=function(e){var i=document.createElement('img');i.src=e.target.result;i.className='rl-ph';w.appendChild(i);};r.readAsDataURL(f);});
  inp.value='';
};
window.rlStar=function(ev,cid){
  if(ev.target.tagName!=='SPAN')return;
  var stars=document.getElementById(cid).querySelectorAll('span');
  var idx=Array.from(stars).indexOf(ev.target);
  stars.forEach(function(s,i){s.classList.toggle('on',i<=idx);});
};
})();
</script>

</div>
</section>

<section id="cap3" class="chapter-section">
<header class="chapter-header">
  <span class="chapter-number">Parte III</span>
  <h2 class="chapter-title">L'interrogazione</h2>
</header>
<div class="prose" markdown="1">

Dopo la consegna della relazione ci sarà una **breve interrogazione individuale** sull'esperimento. Non si tratta di ricordare i numeri ottenuti: si tratta di dimostrare di aver *capito* le scelte fatte.

{% include box-warn.html titolo="Cosa devi saper spiegare" %}
Ti potrà essere chiesto di rispondere a domande come queste:

- Qual è la formula della densità?
- Qual è la differenza tra *incertezza* e *errore*?
- Come stimi l'incertezza di uno strumento analogico? E di uno digitale?
- Cos'è la semidispersione?
- Potrei darvi una lista di valori di una certa misurazione e chiedervi di calcolare la semidispersione. *Esempio*: vi fornisco la lista  
12.1 cm, 12.4 cm, 11.9 cm, 12.3 cm, 12.1 cm   
e voi mi calcolate la semidispersione come  
$$ s=\frac{12.4-11.9}{2} \ \text{cm}. $$
- Cosa significa scrivere $x = \bar{x} \pm e_x$?
- Cos'è l'errore relativo percentuale? Come si calcola e a cosa serve?
- Perché nella differenza $z = x - y$ le incertezze *assolute* si sommano (e non si sottraggono)?
- Perché nel prodotto e nel quoziente si sommano le incertezze *relative*?
- Perché nella propagazione dell'errore su $S = \pi(d/2)^2$ compare un fattore 2?

**Attenzione!** Questa lista di domande sono solo esempi per aiutarvi a comprendere la tipologia. Chiaramente, potrei farvi domande non contenute in questa lista.
{% include box-end.html %}

</div>
</section>
