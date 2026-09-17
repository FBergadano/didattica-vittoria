---
layout: capitolo
title: "L'Energia"
corso: "meccanica"
corso_titolo: "Meccanica"
materia: fisica
numero: 6
---

<cit autore="François Villon, Ballata delle dame di un tempo che fu">
Mais où sont les neiges d'antan?
(Dove sono le nevi di un tempo?)
</cit>

{% include margin-note.html testo="L'energia si conserva"%}
Tutto cambia continuamente: osserviamo in ogni momento forme, colori e sostanze che scompaiono. Eppure ci deve essere una realtà sottostante che non cambia, che rimane immutata, insomma qualcosa che “non si crea e non si distrugge”.  
Questa “cosa” che non cambia, noi la chiameremo <definizione>energia</definizione>: anche se non abbiamo la più pallida idea di cosa sia veramente. Come diceva uno dei più grandi Fisici del Novecento,
<cit autore="Richard Feynman, Feynman Lectures on Physics">
È importante rendersi conto che, nella fisica di oggi, non abbiamo alcuna conoscenza di cosa sia l'energia.
</cit>
{% include margin-note-end.html %}

{% include box-imp.html testo="Principio di conservazione dell'energia" %}
L'energia è ciò che non si crea e non si distrugge in nessuna trasformazione. Vale a dire, in **qualsiasi** processo fisico, l'energia **dell'intero sistema** si conserva. Sempre.
{% include box-end.html %}

L'energia ha molte forme. Anche se non sappiamo esattamente cosa sia l'energia, possiamo avere una buona intuizione di ciò a cui corrispondono le varie forme di energia.

# Il Lavoro
{% include margin-note.html testo="Il lavoro è una forma di energia" %}
La prima forma di energia che incontriamo si chiama ***lavoro***. 
Possiamo intuire il concetto di lavoro pensando alla sensazione di *fatica* che proviamo quando spostiamo qualcosa. Partiremo da un esempio concreto per comprendere come scrivere la formula del lavoro.
{% include margin-note-end.html %}

{% include margin-note.html testo="Dall'esempio del banco alla formula del lavoro" %}
Immagina di spostare un banco spingendolo orizzontalmente. Lo spostamento ti costa fatica, cioè *lavoro*. Proviamo a comprendere da cosa dipende questa fatica con la seguente animazione.

<div class="lavlab" id="lavoro-lab">
<div class="lavlab-stage">
<canvas id="cvLavoroLab" width="480" height="250" style="width:100%;max-width:380px;height:auto;display:block" role="img" aria-label="Laboratorio interattivo: un omino spinge un banco. Puoi scegliere se il banco ha le rotelle, quanto è pesante e quanto lungo è lo spostamento, poi premere Spingi per vedere quanta fatica costa."></canvas>
<div class="lavlab-vbar" aria-hidden="true">
<span class="lavlab-vcap">🥵</span>
<div class="lavlab-vtrack"><div class="lavlab-vmask" id="lavlabBarMask"></div></div>
<span class="lavlab-vcap">😊</span>
</div>
</div>

<div class="lavlab-controls" role="group" aria-label="Parametri della spinta">
<span class="lavlab-mini-label">Rotelle</span>
<button type="button" class="lavlab-pill is-on" data-wheels="0" aria-pressed="true">No</button>
<button type="button" class="lavlab-pill" data-wheels="1" aria-pressed="false">Sì</button>
<label class="lavlab-mini"><span>Peso</span><input type="range" id="lavlabWeight" min="0" max="100" value="50" step="1" aria-label="Peso del banco, da leggero a pesante"></label>
<label class="lavlab-mini"><span>&Delta;s</span><input type="range" id="lavlabDs" min="0" max="100" value="50" step="1" aria-label="Spostamento, da breve a lungo"></label>
<button type="button" id="lavlabGo" class="lavlab-go">Spingi! &rarr;</button>
</div>
<p class="lavlab-caption" id="lavlabCaption">Imposta i parametri e premi &laquo;Spingi!&raquo;</p>
</div>

<style>
#lavoro-lab{max-width:460px;margin:1rem auto}
#lavoro-lab .lavlab-stage{display:flex;align-items:stretch;justify-content:center;gap:10px}
#lavoro-lab .lavlab-vbar{display:flex;flex-direction:column;align-items:center;gap:3px;width:22px;flex:none}
#lavoro-lab .lavlab-vcap{font-size:.8rem;line-height:1}
#lavoro-lab .lavlab-vtrack{position:relative;flex:1;width:12px;min-height:120px;border-radius:999px;overflow:hidden;background:linear-gradient(to top,#22c55e,#eab308 55%,#dc2626)}
#lavoro-lab .lavlab-vmask{position:absolute;left:0;right:0;top:0;height:97%;background:#e2e8f0;border-radius:999px 999px 0 0;transition:height .15s linear}
#lavoro-lab .lavlab-controls{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.4rem .5rem;margin-top:.6rem}
#lavoro-lab .lavlab-mini-label{font-size:.78rem;color:#475569}
#lavoro-lab .lavlab-pill{font:inherit;font-size:.78rem;padding:.28rem .6rem;border-radius:999px;border:1.5px solid #64748b;background:#fff;color:#64748b;cursor:pointer}
#lavoro-lab .lavlab-pill.is-on{background:#64748b;color:#fff}
#lavoro-lab .lavlab-pill:disabled{opacity:.5;cursor:default}
#lavoro-lab .lavlab-mini{display:flex;align-items:center;gap:.3rem;font-size:.78rem;color:#475569}
#lavoro-lab .lavlab-mini input[type=range]{width:64px}
#lavoro-lab .lavlab-mini input:disabled{opacity:.5}
#lavoro-lab .lavlab-go{font:inherit;font-weight:700;font-size:.82rem;padding:.3rem .8rem;border-radius:999px;border:none;background:#0f766e;color:#fff;cursor:pointer}
#lavoro-lab .lavlab-go:disabled{opacity:.55;cursor:default}
#lavoro-lab .lavlab-caption{text-align:center;font-size:.8rem;color:#475569;margin:.4rem 0 0;min-height:1.3em}
@media print{#lavoro-lab{display:none}}
</style>

<script>
(function(){
  var cv=document.getElementById('cvLavoroLab');
  if(!cv||!cv.getContext) return;
  var wrap=document.getElementById('lavoro-lab');
  var ctx=cv.getContext('2d');
  var W=480, H=250, GROUND=215;
  var dpr=Math.min(window.devicePixelRatio||1,2);
  cv.width=W*dpr; cv.height=H*dpr; ctx.scale(dpr,dpr);
  var reduce=!!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var SUIT='#93c5fd';
  var OFF_START=-170;

  var wheelBtns=wrap.querySelectorAll('.lavlab-pill');
  var weightInput=document.getElementById('lavlabWeight');
  var dsInput=document.getElementById('lavlabDs');
  var goBtn=document.getElementById('lavlabGo');
  var barMask=document.getElementById('lavlabBarMask');
  var caption=document.getElementById('lavlabCaption');

  var wheels=false, weightVal=0.5, dsVal=0.5;
  var off=OFF_START, pushing=false, everPushed=false, t=0, raf=null;
  var fatigue=0, targetFatigue=0, mood=0;
  var pushStartOff=OFF_START, pushDs=0, stepPerFrame=0;
  var drops=[], spawnT=180;

  function dsPx(v){ return 40+v*190; }
  function lerp(a,b,m){ return a+(b-a)*m; }

  function computeTargetFatigue(){
    var wf=0.5+weightVal*1.5;
    var mu=wheels?0.12:1;
    var L=wf*mu*dsPx(dsVal);
    var Lmin=0.5*0.12*dsPx(0);
    var Lmax=2.0*1*dsPx(1);
    var pct=(L-Lmin)/(Lmax-Lmin)*100;
    return Math.max(3, Math.min(100, pct));
  }

  var CAPTIONS=[
    [0,  'Nessuna fatica: il banco si muove quasi da solo.'],
    [22, 'Poca fatica: uno sforzo leggero.'],
    [48, 'Fatica moderata: si comincia a sentire.'],
    [72, 'Molta fatica: l\'omino suda parecchio.'],
    [90, 'Sfinito! Che lavoraccio.']
  ];
  function captionFor(pct){
    var c=CAPTIONS[0][1];
    for(var i=0;i<CAPTIONS.length;i++){ if(pct>=CAPTIONS[i][0]) c=CAPTIONS[i][1]; }
    return c;
  }

  function rr(x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
  }
  function shade(hex,p){
    var n=parseInt(hex.slice(1),16), a=Math.round(2.55*p);
    var R=Math.max(0,Math.min(255,(n>>16)+a));
    var G=Math.max(0,Math.min(255,(n>>8&255)+a));
    var B=Math.max(0,Math.min(255,(n&255)+a));
    return '#'+(0x1000000+R*65536+G*256+B).toString(16).slice(1);
  }
  function bone(x1,y1,cx,cy,x2,y2,w,col){
    ctx.strokeStyle=col; ctx.lineWidth=w; ctx.lineCap='round'; ctx.lineJoin='round';
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.quadraticCurveTo(cx,cy,x2,y2); ctx.stroke();
  }
  function arrow(x1,y1,x2,y2,col,lw,hs){
    var a=Math.atan2(y2-y1,x2-x1);
    ctx.save();
    ctx.strokeStyle=col; ctx.fillStyle=col; ctx.lineWidth=lw; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(x1,y1);
    ctx.lineTo(x2-Math.cos(a)*hs*0.5, y2-Math.sin(a)*hs*0.5); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2,y2);
    ctx.lineTo(x2-hs*Math.cos(a-0.4), y2-hs*Math.sin(a-0.4));
    ctx.lineTo(x2-hs*Math.cos(a+0.4), y2-hs*Math.sin(a+0.4));
    ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function tag(txt,x,y,col,size){
    ctx.save();
    ctx.fillStyle=col;
    ctx.font='700 '+size+'px ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';
    ctx.textAlign='center'; ctx.textBaseline='alphabetic';
    ctx.fillText(txt,x,y);
    ctx.restore();
  }

  var hipx=236, hipy=150, shx=266, shy=126, hnx=298, hny=171, hdx=280, hdy=109;

  function drawBench(wheelsOn, wv){
    ctx.fillStyle='rgba(15,23,42,.10)';
    ctx.beginPath(); ctx.ellipse(350,216,52,4,0,0,7); ctx.fill();
    var legBottom=wheelsOn?206:215;
    ctx.strokeStyle='#b45309'; ctx.lineWidth=6; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(312,164); ctx.lineTo(312,legBottom); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(388,164); ctx.lineTo(388,legBottom); ctx.stroke();
    if(wheelsOn){
      [312,388].forEach(function(lx){
        ctx.fillStyle='#334155'; ctx.beginPath(); ctx.arc(lx,210,5.5,0,7); ctx.fill();
        ctx.fillStyle='#94a3b8'; ctx.beginPath(); ctx.arc(lx-1.3,208.7,1.6,0,7); ctx.fill();
      });
    }
    var g=ctx.createLinearGradient(300,150,400,164);
    g.addColorStop(0,'#fff7ed'); g.addColorStop(.55,'#fdba74'); g.addColorStop(1,'#ea9a4d');
    ctx.fillStyle=g; ctx.strokeStyle='#c2740c'; ctx.lineWidth=1;
    rr(300,150,100,14,3); ctx.fill(); ctx.stroke();

    var n=Math.round(wv*3);
    for(var i=0;i<n;i++){
      var cw=34, chh=13, cx=350+(i%2?6:-6), cy=150-8-i*12;
      var base=shade('#c8874a',-i*8);
      var cg=ctx.createLinearGradient(cx-cw/2,cy,cx+cw/2,cy+chh);
      cg.addColorStop(0,shade(base,25)); cg.addColorStop(1,base);
      ctx.fillStyle=cg; ctx.strokeStyle='#7c4a1e'; ctx.lineWidth=1;
      rr(cx-cw/2,cy,cw,chh,2); ctx.fill(); ctx.stroke();
    }
  }

  function drawLeg(ph,colA,colB){
    var fx=hipx-6-Math.cos(ph)*14;
    var lift=Math.max(0,Math.sin(ph))*7;
    var fy=GROUND-1-lift;
    var kx=(hipx+fx)/2-4, ky=(hipy+fy)/2+7-lift*0.5;
    bone(hipx,hipy,kx,ky,fx,fy,12,colA);
    bone(hipx,hipy,kx,ky,fx,fy,7,colB);
    ctx.fillStyle=colA;
    ctx.beginPath(); ctx.ellipse(fx+2,fy+1,9,4.2,0,0,7); ctx.fill();
    return fx;
  }
  function drawIdleLegs(dark,mid,light){
    bone(hipx-3,hipy, hipx-6,183, hipx-9,214, 12, dark);
    bone(hipx-3,hipy, hipx-6,183, hipx-9,214, 7, mid);
    bone(hipx+3,hipy, hipx+7,183, hipx+11,214, 12, SUIT);
    bone(hipx+3,hipy, hipx+7,183, hipx+11,214, 7, light);
    ctx.fillStyle=dark; ctx.beginPath(); ctx.ellipse(hipx-9,214,9,4.2,0,0,7); ctx.fill();
    ctx.fillStyle=SUIT; ctx.beginPath(); ctx.ellipse(hipx+11,214,9,4.2,0,0,7); ctx.fill();
  }

  function drawFace(m){
    m=Math.max(0,Math.min(1,m));
    ctx.strokeStyle='#7c2d12'; ctx.lineCap='round'; ctx.lineWidth=1.6;
    ctx.beginPath();
    ctx.moveTo(lerp(hdx+3,hdx+2,m), lerp(hdy-7,hdy-4,m));
    ctx.lineTo(lerp(hdx+10,hdx+11,m), lerp(hdy-8,hdy-1,m));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(hdx+4, hdy-1);
    ctx.quadraticCurveTo(hdx+7, lerp(hdy+1.5,hdy-1,m), hdx+10, hdy-1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(hdx+3, hdy+6);
    ctx.quadraticCurveTo(hdx+7, lerp(hdy+10,hdy+5,m), hdx+12, hdy+6);
    ctx.stroke();
    if(m>0.55){
      var g=(m-0.55)/0.45;
      ctx.save(); ctx.globalAlpha=g; ctx.lineWidth=0.9;
      ctx.beginPath(); ctx.moveTo(hdx+6,hdy+5.6); ctx.lineTo(hdx+6,hdy+8); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(hdx+9,hdy+5.6); ctx.lineTo(hdx+9,hdy+7.6); ctx.stroke();
      ctx.restore();
    }
    if(m>0.22){
      var g2=(m-0.22)/0.78;
      ctx.strokeStyle='rgba(220,38,38,'+(g2*(0.35+0.4*Math.abs(Math.sin(t*0.28)))).toFixed(3)+')';
      ctx.lineWidth=1.8;
      for(var k=0;k<3;k++){
        var aa=-1.15+k*0.42, r0=17, r1=23+(k===1?3:0);
        ctx.beginPath();
        ctx.moveTo(hdx+Math.cos(aa)*r0, hdy-5+Math.sin(aa)*r0);
        ctx.lineTo(hdx+Math.cos(aa)*r1, hdy-5+Math.sin(aa)*r1);
        ctx.stroke();
      }
    }
  }

  function drawMan(pushingNow, moodNow, ph){
    var dark=shade(SUIT,-45), mid=shade(SUIT,-15), light=shade(SUIT,40);

    ctx.fillStyle='rgba(15,23,42,.13)';
    ctx.beginPath(); ctx.ellipse(228,GROUND,40,5,0,0,7); ctx.fill();

    if(pushingNow){ drawLeg(ph,dark,mid); drawLeg(ph+Math.PI,SUIT,light); }
    else { drawIdleLegs(dark,mid,light); }

    ctx.strokeStyle=SUIT; ctx.lineCap='round'; ctx.lineWidth=16;
    ctx.beginPath(); ctx.moveTo(hipx,hipy);
    ctx.quadraticCurveTo((hipx+shx)/2-4,(hipy+shy)/2-3, shx,shy); ctx.stroke();
    ctx.strokeStyle=light; ctx.lineWidth=7;
    ctx.beginPath(); ctx.moveTo(hipx+1,hipy-1);
    ctx.quadraticCurveTo((hipx+shx)/2-3,(hipy+shy)/2-4, shx,shy-1); ctx.stroke();

    bone(shx-2,shy+2, 284,155, hnx-3,hny+2, 10, dark);
    bone(shx-2,shy+2, 284,155, hnx-3,hny+2, 6, mid);

    ctx.strokeStyle=dark; ctx.lineWidth=7; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(shx,shy); ctx.lineTo(hdx-2,hdy+10); ctx.stroke();
    var hg=ctx.createRadialGradient(hdx-5,hdy-6,3,hdx,hdy,17);
    hg.addColorStop(0,'#fff7ed'); hg.addColorStop(.55,'#fed7aa'); hg.addColorStop(1,'#ea9a4d');
    ctx.fillStyle=hg; ctx.beginPath(); ctx.arc(hdx,hdy,15,0,7); ctx.fill();

    drawFace(moodNow);

    bone(shx+3,shy, 288,155, hnx,hny, 11, SUIT);
    bone(shx+4,shy, 289,155, hnx+1,hny, 6, light);
    ctx.fillStyle=mid; ctx.strokeStyle=dark; ctx.lineWidth=1.4;
    ctx.beginPath(); ctx.arc(hnx,hny-1,5.4,0,7); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(hnx-1,hny+6,4.4,0,7); ctx.fill(); ctx.stroke();

    for(var sdi=0;sdi<drops.length;sdi++){
      var dd=drops[sdi];
      ctx.save();
      ctx.globalAlpha=dd.fall?Math.max(0,dd.life):1;
      ctx.fillStyle='#38bdf8';
      ctx.beginPath(); ctx.ellipse(hdx+dd.lx, hdy+dd.ly, 1.7,2.6,0,0,7); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.7)';
      ctx.beginPath(); ctx.ellipse(hdx+dd.lx-0.5, hdy+dd.ly-0.9, 0.5,0.8,0,0,7); ctx.fill();
      ctx.restore();
    }
  }

  function updateDrops(){
    if(!reduce && mood>0.15){
      spawnT--;
      if(spawnT<=0){
        spawnT=Math.round(280-mood*190+Math.random()*50);
        var maxDrops=mood>0.6?2:1;
        if(drops.length<maxDrops) drops.push({lx:3+Math.random()*4, ly:-10, vy:0, life:1, fall:false});
      }
    }
    for(var i=drops.length-1;i>=0;i--){
      var d=drops[i];
      if(!d.fall){
        d.ly+=0.55; d.lx+=0.06;
        if(d.ly>13){ d.fall=true; d.vy=0.5; }
      } else {
        d.vy+=0.16; d.ly+=d.vy; d.lx+=0.15; d.life-=0.03;
      }
      if(d.life<=0 || hdy+d.ly>219) drops.splice(i,1);
    }
  }

  function paint(){
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='#cbd5e1'; ctx.lineWidth=2; ctx.lineCap='butt';
    ctx.beginPath(); ctx.moveTo(20,GROUND); ctx.lineTo(460,GROUND); ctx.stroke();

    var ax=300+OFF_START, bx=ax+dsPx(dsVal);
    arrow(ax,90,bx,90,'#7c3aed',3,9);
    tag('Δs',(ax+bx)/2,78,'#7c3aed',14);

    ctx.save(); ctx.translate(off,0);
    drawBench(wheels,weightVal);
    var ph=pushing?((off-pushStartOff)*0.16):0;
    drawMan(pushing,mood,ph);
    ctx.restore();

    barMask.style.height=(100-fatigue).toFixed(1)+'%';
  }

  function frame(){
    t++;
    if(pushing){
      off+=stepPerFrame;
      var progress=Math.min(1,(off-pushStartOff)/pushDs);
      fatigue=targetFatigue*progress; mood=fatigue/100;
      caption.textContent=captionFor(fatigue);
      if(progress>=1){
        off=pushStartOff+pushDs; pushing=false;
        fatigue=targetFatigue; mood=fatigue/100;
        goBtn.disabled=false; goBtn.textContent='Spingi di nuovo →';
        setControlsDisabled(false);
        caption.textContent=captionFor(fatigue);
      }
    }
    updateDrops();
    paint();
  }
  function tick(){ frame(); raf=requestAnimationFrame(tick); }
  function start(){ if(reduce||raf) return; raf=requestAnimationFrame(tick); }
  function stop(){ if(raf){ cancelAnimationFrame(raf); raf=null; } }

  function setControlsDisabled(d){
    weightInput.disabled=d; dsInput.disabled=d;
    for(var i=0;i<wheelBtns.length;i++) wheelBtns[i].disabled=d;
  }

  for(var wi=0; wi<wheelBtns.length; wi++){
    wheelBtns[wi].addEventListener('click', function(){
      if(pushing) return;
      wheels=this.getAttribute('data-wheels')==='1';
      for(var j=0;j<wheelBtns.length;j++){
        wheelBtns[j].classList.toggle('is-on', wheelBtns[j]===this);
        wheelBtns[j].setAttribute('aria-pressed', wheelBtns[j]===this?'true':'false');
      }
      if(!pushing) paint();
    });
  }
  weightInput.addEventListener('input', function(){ weightVal=this.value/100; if(!pushing) paint(); });
  dsInput.addEventListener('input', function(){ dsVal=this.value/100; if(!pushing) paint(); });

  goBtn.addEventListener('click', function(){
    if(pushing) return;
    everPushed=true;
    off=OFF_START; pushStartOff=OFF_START; pushDs=dsPx(dsVal);
    targetFatigue=computeTargetFatigue();
    drops=[]; spawnT=180;
    if(reduce){
      off=pushStartOff+pushDs; fatigue=targetFatigue; mood=fatigue/100;
      caption.textContent=captionFor(fatigue);
      paint();
      return;
    }
    fatigue=0; mood=0;
    var framesNeeded=Math.max(70,pushDs/0.85);
    stepPerFrame=pushDs/framesNeeded;
    pushing=true;
    goBtn.disabled=true; goBtn.textContent='Spinta in corso…';
    setControlsDisabled(true);
    caption.textContent='L\'omino sta spingendo...';
  });

  frame();
  if(!reduce){
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(es){
        for(var i=0;i<es.length;i++){ es[i].isIntersecting?start():stop(); }
      },{threshold:0.05}).observe(cv);
    } else {
      start();
    }
  }
})();
</script>

La fatica che devi fare dipende
- dalla forza che devi applicare (un banco pesante richiederà più forza di uno leggero) 
- dallo spostamento che compi (uno spostamento piccolo non comporta molta fatica, mentre uno spostamento grande sì).  

Inoltre, è chiaro che la fatica non ha una direzione nello spazio, quindi <u markdown="span">il lavoro è una grandezza ***scalare***</u>.

Quindi, <u markdown="span">sia l'intensità della forza che lo spostamento sono **direttamente proporzionali** al lavoro</u>. 
Pertanto, il lavoro (che indichiamo con il simbolo $L$) si può esprimere attraverso la formula

{% include eq-annotated.html
     id="formula-lavoro-1"
     formula="L = F\cdot \Delta s"
     frammenti="L|F|\Delta s"
     etichette="lavoro|modulo della forza|distanza percorsa"
     posizioni="alto|alto|alto"
  %}
{% include margin-note-end.html %}

{% include box-warn.html %}
Ricorda che il modulo della forza corrisponde all'intensità della forza, ovvero alla lunghezza del vettore forza. Quindi, il modulo della forza <u>non può mai essere negativo</u>. Allo stesso modo, $\Delta s$ è una distanza percorsa, quindi anch'essa <u>non può mai essere negativa</u>.
{% include box-end.html %}


Anche se l'abbiamo derivata per un caso specifico (spostare un banco), questa formula vale in generale. Il lavoro è definito come il prodotto tra una forza e uno spostamento.  
Semplicemente, quando la utilizziamo in generale, dobbiamo fare attenzione ai segni!

### Il lavoro può essere positivo, negativo o nullo
Quando utilizzate la formula che abbiamo incontrato, dovete fare attenzione al segno. Infatti, in generale, <u>il lavoro può essere sia positivo, sia negativo, sia nullo</u>. 
- Se lo spostamento avviene **nello stesso verso** della forza, allora il lavoro è **positivo**.
- Se lo spostamento avviene **nel verso contrario** alla forza, allora il lavoro è **negativo**.
- Se lo spostamento è **perpendicolare** alla forza, allora il lavoro è **nullo**.

Chiaramente, il lavoro può essere nullo anche se uno dei due fattori è nullo, cioè se non viene applicata nessuna forza oppure se non c'è nessuno spostamento. Ad esempio, quando spingiamo un muro, anche se stiamo applicando una forza, non stiamo compiendo lavoro, poiché non c'è spostamento.

Perché allora, secondo te, quando spingiamo il muro facciamo fatica anche se non compiamo lavoro? Prova a immaginare la risposta (anche se non è facile!)


{% include spoiler.html testo="Perché allora quando spingiamo il muro facciamo fatica se non compiamo lavoro?"%}
Perché in realtà le cellule all'interno dei nostri muscoli si spostano continuamente, e anche in modo  piuttosto veloce! Quindi c'è una forza che spinge le nostre cellule a contrarsi e c'è uno spostamento. Pertanto, c'è un lavoro, cioè un dispendio di energia, che corrisponde proprio alla nostra sensazione di fatica.
{% include spoiler-end.html%}

| Spostamento rispetto alla forza | Lavoro | Formula da utilizzare |
|---|---|---|
| Stesso verso | Positivo $(L>0)$ | $L=F\cdot \Delta s$ |
| Verso contrario | Negativo $(L<0)$ | $L=-F\cdot \Delta s$ |
| Perpendicolare | Nullo $(L=0)$ | $L=0$ |

La seguente animazione riassume i casi appena descritti. Attiva le frecce delle quattro forze per confrontarne il verso con quello dello spostamento e leggere il segno del lavoro che ciascuna compie (ma cerca prima di indovinarle tu!).

<div class="fig-block">
<div class="worksim" id="worksim-lavoro">
<canvas id="cvLavoroSegni" width="480" height="250" style="width:100%;max-width:460px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Animazione: un uomo cammina spingendo un tavolo verso destra e lo fa avanzare; quando esce dalla scena rientra da sinistra. Pulsanti per mostrare le frecce della forza dell'omino, dell'attrito, della forza peso e della reazione vincolare del piano."></canvas>
<div class="ws-toggles" role="group" aria-label="Mostra le frecce delle forze">
<button type="button" class="ws-btn" data-force="omino" aria-pressed="false" style="--c:#0f766e">Forza dell'omino</button>
<button type="button" class="ws-btn" data-force="attrito" aria-pressed="false" style="--c:#dc2626">Attrito</button>
<button type="button" class="ws-btn" data-force="peso" aria-pressed="false" style="--c:#64748b">Forza peso</button>
<button type="button" class="ws-btn" data-force="normale" aria-pressed="false" style="--c:#2563eb">Reazione vincolare</button>
</div>
<div class="ws-notes" id="ws-lavoro-notes" aria-live="polite"></div>
</div>
<figcaption><span class="fig-num" data-fig-id="omino-lavoro-segni">Figura</span> &mdash; L'omino cammina spingendo il tavolo verso destra e lo fa avanzare di uno spostamento $\Delta s$; quando esce dalla scena rientra da sinistra. Attiva le frecce delle quattro forze per confrontarne il verso con quello dello spostamento e leggere il segno del lavoro che ciascuna compie.</figcaption>
</div>

<style>
#worksim-lavoro{max-width:460px;margin:0 auto}
#worksim-lavoro .ws-toggles{display:flex;flex-wrap:wrap;gap:.4rem;justify-content:center;margin:.75rem 0 .25rem}
#worksim-lavoro .ws-btn{--c:#64748b;font:inherit;font-size:.82rem;line-height:1;cursor:pointer;padding:.42rem .8rem;border:1.5px solid var(--c);border-radius:999px;background:#fff;color:var(--c);display:inline-flex;align-items:center;gap:.4rem;transition:background .15s,color .15s}
#worksim-lavoro .ws-btn::before{content:"";width:.6rem;height:.6rem;border-radius:50%;background:var(--c);flex:none}
#worksim-lavoro .ws-btn[aria-pressed="true"]{background:var(--c);color:#fff}
#worksim-lavoro .ws-btn[aria-pressed="true"]::before{background:#fff}
#worksim-lavoro .ws-notes{display:flex;flex-direction:column;gap:.5rem;margin-top:.55rem}
#worksim-lavoro .ws-card{--c:#64748b;border-left:4px solid var(--c);background:#f8fafc;border-radius:6px;padding:.5rem .7rem .55rem}
#worksim-lavoro .ws-card-h{font-size:.78rem;font-weight:700;letter-spacing:.02em;color:var(--c);display:flex;align-items:center;gap:.4rem}
#worksim-lavoro .ws-card-h .ws-dot{width:.55rem;height:.55rem;border-radius:50%;background:var(--c);flex:none}
#worksim-lavoro .ws-L{font-size:1.2rem;font-weight:700;color:var(--c);margin:.1rem 0 .15rem}
#worksim-lavoro .ws-txt{font-size:.85rem;color:#334155}
@media print{#worksim-lavoro .ws-toggles{display:none}}
</style>

<script>
(function(){
  var cv=document.getElementById('cvLavoroSegni');
  if(!cv||!cv.getContext) return;
  var wrap=document.getElementById('worksim-lavoro');
  var notes=document.getElementById('ws-lavoro-notes');
  var ctx=cv.getContext('2d');
  var W=480, H=250, GROUND=215, PERIOD=520;
  var dpr=Math.min(window.devicePixelRatio||1,2);
  cv.width=W*dpr; cv.height=H*dpr; ctx.scale(dpr,dpr);
  var reduce=!!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var SUIT='#93c5fd';
  var speed=reduce?0:0.9;
  var t=0, worldX=0, raf=null, drops=[], spawnT=90;
  var active={omino:false,attrito:false,peso:false,normale:false};

  var FORCES={
    omino:  {col:'#0f766e', name:'FORZA DELL’OMINO',        L:'L_{\\text{omino}}>0',
             txt:'La forza dell’omino e lo spostamento hanno lo <strong>stesso verso</strong>.'},
    attrito:{col:'#dc2626', name:'ATTRITO',                      L:'L_{\\text{att}}<0',
             txt:'La forza di attrito e lo spostamento hanno <strong>verso opposto</strong>.'},
    peso:   {col:'#64748b', name:'FORZA PESO',                   L:'L_{\\text{peso}}=0',
             txt:'La forza peso &egrave; <strong>perpendicolare</strong> allo spostamento.'},
    normale:{col:'#2563eb', name:'REAZIONE VINCOLARE DEL PIANO', L:'L_{\\text{N}}=0',
             txt:'La reazione vincolare del piano &egrave; <strong>perpendicolare</strong> allo spostamento.'}
  };

  function rr(x,y,w,h,r){
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
  }
  function shade(hex,p){
    var n=parseInt(hex.slice(1),16), a=Math.round(2.55*p);
    var R=Math.max(0,Math.min(255,(n>>16)+a));
    var G=Math.max(0,Math.min(255,(n>>8&255)+a));
    var B=Math.max(0,Math.min(255,(n&255)+a));
    return '#'+(0x1000000+R*65536+G*256+B).toString(16).slice(1);
  }
  function bone(x1,y1,cx,cy,x2,y2,w,col){
    ctx.strokeStyle=col; ctx.lineWidth=w; ctx.lineCap='round'; ctx.lineJoin='round';
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.quadraticCurveTo(cx,cy,x2,y2); ctx.stroke();
  }
  function arrow(x1,y1,x2,y2,col,lw,hs){
    var a=Math.atan2(y2-y1,x2-x1);
    ctx.save();
    ctx.strokeStyle=col; ctx.fillStyle=col; ctx.lineWidth=lw; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(x1,y1);
    ctx.lineTo(x2-Math.cos(a)*hs*0.5, y2-Math.sin(a)*hs*0.5); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2,y2);
    ctx.lineTo(x2-hs*Math.cos(a-0.4), y2-hs*Math.sin(a-0.4));
    ctx.lineTo(x2-hs*Math.cos(a+0.4), y2-hs*Math.sin(a+0.4));
    ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function tag(txt,x,y,col,size,align){
    ctx.save();
    ctx.fillStyle=col;
    ctx.font='700 '+size+'px ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';
    ctx.textAlign=align||'center'; ctx.textBaseline='alphabetic';
    ctx.fillText(txt,x,y);
    ctx.restore();
  }

  var hipx=236, hipy=150, shx=266, shy=126, hnx=298, hny=171, hdx=280, hdy=109;

  function drawBench(){
    ctx.fillStyle='rgba(15,23,42,.10)';
    ctx.beginPath(); ctx.ellipse(350,216,52,4,0,0,7); ctx.fill();
    ctx.strokeStyle='#b45309'; ctx.lineWidth=6; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(312,164); ctx.lineTo(312,215); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(388,164); ctx.lineTo(388,215); ctx.stroke();
    var g=ctx.createLinearGradient(300,150,400,164);
    g.addColorStop(0,'#fff7ed'); g.addColorStop(.55,'#fdba74'); g.addColorStop(1,'#ea9a4d');
    ctx.fillStyle=g; ctx.strokeStyle='#c2740c'; ctx.lineWidth=1;
    rr(300,150,100,14,3); ctx.fill(); ctx.stroke();
  }

  function drawLeg(ph,colA,colB){
    var fx=hipx-6-Math.cos(ph)*14;
    var lift=Math.max(0,Math.sin(ph))*7;
    var fy=GROUND-1-lift;
    var kx=(hipx+fx)/2-4, ky=(hipy+fy)/2+7-lift*0.5;
    bone(hipx,hipy,kx,ky,fx,fy,12,colA);
    bone(hipx,hipy,kx,ky,fx,fy,7,colB);
    ctx.fillStyle=colA;
    ctx.beginPath(); ctx.ellipse(fx+2,fy+1,9,4.2,0,0,7); ctx.fill();
    return fx;
  }

  function drawMan(){
    var p=reduce?1.15:worldX*0.16;
    var strain=reduce?0.85:0.55+0.4*Math.abs(Math.sin(p));
    var dark=shade(SUIT,-45), mid=shade(SUIT,-15), light=shade(SUIT,40);

    ctx.fillStyle='rgba(15,23,42,.13)';
    ctx.beginPath(); ctx.ellipse(228,215,40,5,0,0,7); ctx.fill();

    var bx=drawLeg(p,dark,mid);
    var fx2=drawLeg(p+Math.PI,SUIT,light);

    if(!reduce){
      var px=Math.min(bx,fx2);
      ctx.strokeStyle='rgba(148,163,184,'+(0.20+0.12*Math.abs(Math.sin(p*2))).toFixed(3)+')';
      ctx.lineWidth=1.4;
      for(var d0=0;d0<3;d0++){
        ctx.beginPath(); ctx.arc(px-6-d0*4, GROUND-2-d0*3, 2+d0, 2.3, 4.6); ctx.stroke();
      }
    }

    ctx.strokeStyle=SUIT; ctx.lineCap='round'; ctx.lineWidth=16;
    ctx.beginPath(); ctx.moveTo(hipx,hipy);
    ctx.quadraticCurveTo((hipx+shx)/2-4,(hipy+shy)/2-3, shx,shy); ctx.stroke();
    ctx.strokeStyle=light; ctx.lineWidth=7;
    ctx.beginPath(); ctx.moveTo(hipx+1,hipy-1);
    ctx.quadraticCurveTo((hipx+shx)/2-3,(hipy+shy)/2-4, shx,shy-1); ctx.stroke();

    bone(shx-2,shy+2, 284,155, hnx-3,hny+2, 10, dark);
    bone(shx-2,shy+2, 284,155, hnx-3,hny+2, 6, mid);

    ctx.strokeStyle=dark; ctx.lineWidth=7; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(shx,shy); ctx.lineTo(hdx-2,hdy+10); ctx.stroke();
    var hg=ctx.createRadialGradient(hdx-5,hdy-6,3,hdx,hdy,17);
    hg.addColorStop(0,'#fff7ed'); hg.addColorStop(.55,'#fed7aa'); hg.addColorStop(1,'#ea9a4d');
    ctx.fillStyle=hg; ctx.beginPath(); ctx.arc(hdx,hdy,15,0,7); ctx.fill();

    ctx.strokeStyle='#7c2d12'; ctx.lineCap='round'; ctx.lineWidth=1.6;
    ctx.beginPath(); ctx.moveTo(hdx+2,hdy-4); ctx.lineTo(hdx+11,hdy-1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hdx+4,hdy+1); ctx.lineTo(hdx+10,hdy-1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hdx+3,hdy+7); ctx.lineTo(hdx+12,hdy+6); ctx.stroke();
    ctx.lineWidth=0.9;
    ctx.beginPath(); ctx.moveTo(hdx+6,hdy+5.4); ctx.lineTo(hdx+6,hdy+8.4); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hdx+9,hdy+5.4); ctx.lineTo(hdx+9,hdy+8.0); ctx.stroke();

    var pulse=reduce?0.8:0.30+0.40*Math.abs(Math.sin(t*0.28))+0.25*strain;
    ctx.strokeStyle='rgba(220,38,38,'+Math.min(1,pulse).toFixed(3)+')';
    ctx.lineWidth=1.9;
    for(var k=0;k<3;k++){
      var aa=-1.15+k*0.42, r0=17, r1=23+(k===1?3:0);
      ctx.beginPath();
      ctx.moveTo(hdx+Math.cos(aa)*r0, hdy-5+Math.sin(aa)*r0);
      ctx.lineTo(hdx+Math.cos(aa)*r1, hdy-5+Math.sin(aa)*r1);
      ctx.stroke();
    }

    bone(shx+3,shy, 288,155, hnx,hny, 11, SUIT);
    bone(shx+4,shy, 289,155, hnx+1,hny, 6, light);
    ctx.fillStyle=mid; ctx.strokeStyle=dark; ctx.lineWidth=1.4;
    ctx.beginPath(); ctx.arc(hnx,hny-1,5.4,0,7); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(hnx-1,hny+6,4.4,0,7); ctx.fill(); ctx.stroke();

    for(var sd=0;sd<drops.length;sd++){
      var dd=drops[sd];
      ctx.save();
      ctx.globalAlpha=dd.fall?Math.max(0,dd.life):1;
      ctx.fillStyle='#38bdf8';
      ctx.beginPath(); ctx.ellipse(hdx+dd.lx, hdy+dd.ly, 1.7, 2.6, 0, 0, 7); ctx.fill();
      ctx.fillStyle='rgba(255,255,255,.7)';
      ctx.beginPath(); ctx.ellipse(hdx+dd.lx-0.5, hdy+dd.ly-0.9, 0.5, 0.8, 0, 0, 7); ctx.fill();
      ctx.restore();
    }
  }

  function drawForces(){
    if(active.omino){
      arrow(270,180,316,180,'#0f766e',3,9);
      tag('omino',287,194,'#0f766e',10);
    }
    if(active.attrito){
      arrow(420,196,378,196,'#dc2626',3,9);
      tag('attrito',401,209,'#dc2626',10);
    }
    if(active.peso){
      arrow(348,158,348,210,'#64748b',3,9);
      tag('peso',340,186,'#64748b',10,'right');
    }
    if(active.normale){
      arrow(366,213,366,162,'#2563eb',3,9);
      tag('reazione',374,190,'#2563eb',10,'left');
    }
  }

  function drawGroup(off){
    if(off<-440 || off>480) return;
    ctx.save(); ctx.translate(off,0);
    drawBench();
    drawMan();
    drawForces();
    ctx.restore();
  }

  function updateDrops(){
    if(!reduce && --spawnT<=0){
      spawnT=150+Math.floor(Math.random()*90);
      if(drops.length<2) drops.push({lx:3+Math.random()*4, ly:-10, vy:0, life:1, fall:false});
    }
    for(var i=drops.length-1;i>=0;i--){
      var d=drops[i];
      if(!d.fall){
        d.ly+=0.55; d.lx+=0.06;
        if(d.ly>13){ d.fall=true; d.vy=0.5; }
      } else {
        d.vy+=0.16; d.ly+=d.vy; d.lx+=0.15; d.life-=0.03;
      }
      if(d.life<=0 || hdy+d.ly>219) drops.splice(i,1);
    }
  }

  function paint(){
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle='#cbd5e1'; ctx.lineWidth=2; ctx.lineCap='butt';
    ctx.beginPath(); ctx.moveTo(20,GROUND); ctx.lineTo(460,GROUND); ctx.stroke();
    arrow(300,90,400,90,'#7c3aed',3,9);
    tag('Δs',350,78,'#7c3aed',15);
    drawGroup(worldX);
    drawGroup(worldX-PERIOD);
  }

  function frame(){
    t++;
    if(!reduce){ worldX+=speed; if(worldX>=PERIOD) worldX-=PERIOD; }
    updateDrops();
    paint();
  }
  function tick(){ frame(); raf=requestAnimationFrame(tick); }
  function start(){ if(reduce||raf) return; raf=requestAnimationFrame(tick); }
  function stop(){ if(raf){ cancelAnimationFrame(raf); raf=null; } }

  function renderNotes(){
    var order=['omino','attrito','peso','normale'], html='';
    for(var i=0;i<order.length;i++){
      var f=order[i]; if(!active[f]) continue;
      var dc=FORCES[f];
      html+='<div class="ws-card" style="--c:'+dc.col+'">'
          + '<div class="ws-card-h"><span class="ws-dot"></span>'+dc.name+'</div>'
          + '<div class="ws-L">$'+dc.L+'$</div>'
          + '<div class="ws-txt">'+dc.txt+'</div>'
          + '</div>';
    }
    notes.innerHTML=html;
    if(window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([notes]);
  }
  var btns=wrap.querySelectorAll('.ws-btn');
  for(var bi=0;bi<btns.length;bi++){
    btns[bi].addEventListener('click', function(){
      var f=this.getAttribute('data-force');
      active[f]=!active[f];
      this.setAttribute('aria-pressed', active[f]?'true':'false');
      renderNotes();
      if(reduce) paint();
    });
  }

  frame();
  if(!reduce){
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(es){
        for(var i=0;i<es.length;i++){ es[i].isIntersecting ? start() : stop(); }
      },{threshold:0.05}).observe(cv);
    } else {
      start();
    }
  }
})();
</script>

In particolare, poiché l'attrito ha sempre verso opposto rispetto al moto, <u markdown="span">il lavoro compiuto dall'attrito è sempre **negativo**</u>.

### L'unità di misura dell'energia: il joule
Ora che abbiamo una formula per l'energia possiamo anche trovarne l'unità di misura. L'unità di misura del lavoro può essere ricavata dalla formula $L=F\cdot \Delta s$ sostituendo a ogni grandezza la rispettiva unità di misura:

{% include eq-annotated.html
     id="formula-joule-1"
     formula="[L]=[F]\cdot[\Delta s]=\text{N}\cdot \text{m}"
     frammenti="[L]|[F]|[\Delta s]|\text{N}|\text{m}"
     etichette="unità di L|unità di F|unità di s|newton|metro"
     posizioni="alto|basso|alto|basso|alto"
  %}

Questa unità di misura si chiama <definizione>joule</definizione> (simbolo $\text{J}$). Ricordando che il newton è definito come $\text{N} = \text{kg}\cdot\text{m}/\text{s}^2$, si ottiene

$$
\text{J} = \text{N}\cdot\text{m} = \text{kg}\cdot\frac{\text{m}}{\text{s}^2}\cdot\text{m} = \text{kg}\cdot\frac{\text{m}^2}{\text{s}^2}.
$$

<div class="iex-widget" id="iexLavoro">
<p class="iex-lbl">Verifica Subito!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexLavoroprev" onclick="iexLavoronav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexLavorodots"></div>
<button class="iex-navbtn" id="iexLavoronext" onclick="iexLavoronav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexLavororow0">
<p class="iex-qt">Quale delle seguenti relazioni fra unità di misura è <strong>sbagliata</strong>?</p>
<div class="iex-choices" id="iexLavorochoices0">
<button class="iex-choice-btn" data-v="a">$\text J = \text N\cdot \text m$</button>
<button class="iex-choice-btn" data-v="b">$\text J = \text{kg}\cdot \text m^2\cdot \text s^2$</button>
<button class="iex-choice-btn" data-v="c">$\text J = \text{kg}\cdot\frac{\text m}{\text s^2}\cdot \text m$</button>
<button class="iex-choice-btn" data-v="d">$\text J = \text{kg}\cdot\frac{\text m^2}{\text s^2}$</button>
</div>
<div class="iex-fb" id="iexLavorofb0"></div>
</div>

<div class="iex-q" id="iexLavororow1" style="display:none">
<p class="iex-qt">Un bue ara un campo per un'intera giornata, esercitando sull'aratro una forza costante di $800\ \text N$. Fra andate e ritorni lungo i solchi, in tutto il giorno percorre $8\,000\ \text m$. Quanto lavoro ha compiuto il bue? Esprimi il risultato in joule, in notazione scientifica.</p>
<div class="calc-flow">
{% include calc-margin.html id="calcLavoro" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include sci.html prima="$L=$" coeff="6.4" exp="6" s="$6{,}4\times10^6\ \text J$" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexLavororow2" style="display:none">
<p class="iex-qt">In quale di queste situazioni il lavoro è <strong>negativo</strong>?</p>
<div class="iex-choices" id="iexLavorochoices2">
<button class="iex-choice-btn" data-v="a">Il lavoro svolto dai freni di un treno che frena</button>
<button class="iex-choice-btn" data-v="b">Il lavoro svolto dal motore di un treno che accelera</button>
<button class="iex-choice-btn" data-v="c">Il lavoro svolto dalla forza peso su un sasso che cade</button>
<button class="iex-choice-btn" data-v="d">Il lavoro svolto dalla forza normale su un blocco che scivola su un piano orizzontale</button>
</div>
<div class="iex-fb" id="iexLavorofb2"></div>
</div>

<div class="iex-q" id="iexLavororow3" style="display:none">
<p class="iex-qt">In quale di queste situazioni il lavoro <strong>non</strong> è nullo?</p>
<div class="iex-choices" id="iexLavorochoices3">
<button class="iex-choice-btn" data-v="a">La forza applicata è nulla</button>
<button class="iex-choice-btn" data-v="b">Lo spostamento è nullo</button>
<button class="iex-choice-btn" data-v="c">Forza e spostamento sono perpendicolari</button>
<button class="iex-choice-btn" data-v="d">Forza e spostamento sono opposti</button>
</div>
<div class="iex-fb" id="iexLavorofb3"></div>
</div>

<div class="iex-q" id="iexLavororow4" style="display:none">
<p class="iex-qt">Un bradipo si sposta pigramente di $12\ \text m$ lungo un ramo perfettamente orizzontale. Quanto lavoro compie su di lui la forza peso durante questo spostamento?</p>
<div class="iex-choices" id="iexLavorochoices4">
<button class="iex-choice-btn" data-v="a">$L = mgh$, ma servirebbe conoscere l'altezza per calcolarlo</button>
<button class="iex-choice-btn" data-v="b">$L=0$, perché lo spostamento è orizzontale e la forza peso è verticale</button>
<button class="iex-choice-btn" data-v="c">$L = mg\cdot 12\ \text m$, usando i $12\ \text m$ come spostamento nella formula</button>
<button class="iex-choice-btn" data-v="d">Non si può compiere lavoro se ci si muove così lentamente</button>
</div>
<div class="iex-fb" id="iexLavorofb4"></div>
</div>

</div>

<script>
(function(){
  var N=5, cur=0, ok=[false,false,false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexLavorodots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexLavoro .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexLavororow'+i).style.display='block';
    cur=i;
    document.getElementById('iexLavoroprev').disabled=(i===0);
    document.getElementById('iexLavoronext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexLavorodots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexLavoronav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  function wireChoices(rowIdx, choicesId, fbId, correctV, msgOk, msgErr){
    var btns = document.querySelectorAll('#'+choicesId+' .iex-choice-btn');
    var fb = document.getElementById(fbId);
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        if(btn.disabled) return;
        btns.forEach(function(b){ b.disabled = true; });
        var correct = btn.dataset.v === correctV;
        fb.style.display = 'block';
        if(correct){
          btn.className = btn.className.replace(' wrong','') + ' correct';
          ok[rowIdx] = true; fb.className = 'iex-fb ok';
          fb.innerHTML = '&#10003; Esatto! '+msgOk+(rowIdx<N-1?' <button class="iex-nextbtn" onclick="iexLavoronav(1)">Passo successivo &rarr;</button>':'');
          shootConf(btn); updateDots(); checkFinale();
        } else {
          btn.className = btn.className.replace(' correct','') + ' wrong';
          var correctBtn = document.querySelector('#'+choicesId+' .iex-choice-btn[data-v="'+correctV+'"]');
          correctBtn.className = correctBtn.className.replace(' wrong','') + ' correct';
          fb.className = 'iex-fb err';
          fb.innerHTML = msgErr;
        }
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
      });
    });
  }

  // Fuochi d'artificio finali, quando TUTTE le domande (comprese quelle
  // annidate come sci.html/invert.html, vedi sotto) sono state risolte.
  function checkFinale(){
    if(ok.every(function(x){return x;}))setTimeout(shootFW,600);
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }
  // La domanda 1 è un calcolo numerico (sci.html), non una scelta multipla:
  // ci mettiamo in ascolto del suo evento di completamento per contarla.
  var _row1=document.getElementById('iexLavororow1');
  if(_row1)_row1.addEventListener('iex:correct', function(){
    if(!ok[1]){ ok[1]=true; updateDots(); checkFinale(); }
  });

  wireChoices(0, 'iexLavorochoices0', 'iexLavorofb0', 'b',
    'Il newton si misura in $\\text{kg}\\cdot\\text m/\\text s^2$, quindi il joule dovrebbe contenere $1/\\text s^2$, non $\\text s^2$: qui la potenza di $\\text s$ ha il segno sbagliato.',
    'Non è quella giusta: ricorda che $\\text N = \\text{kg}\\cdot \\text m/\\text s^2$. Sostituendo, tutte le altre relazioni tornano corrette — una sola ha una potenza di $\\text s$ scritta al contrario.');

  wireChoices(2, 'iexLavorochoices2', 'iexLavorofb2', 'a',
    'I freni esercitano una forza di attrito diretta in verso opposto al moto: forza e spostamento sono opposti, quindi il lavoro è negativo.',
    'Non è corretto: pensa alla direzione della forza rispetto allo spostamento. Solo in un caso la forza si oppone al moto.');

  wireChoices(3, 'iexLavorochoices3', 'iexLavorofb3', 'd',
    'Quando forza e spostamento sono opposti il lavoro non è nullo: è negativo! Negli altri tre casi (forza nulla, spostamento nullo, forza e spostamento perpendicolari) il lavoro è invece sempre nullo.',
    'Non è corretto: in questo caso il lavoro è negativo, quindi diverso da zero. Negli altri tre casi il lavoro è invece nullo.');

  wireChoices(4, 'iexLavorochoices4', 'iexLavorofb4', 'b',
    'La forza peso è verticale, mentre lo spostamento del bradipo è orizzontale: sono perpendicolari, quindi il lavoro è nullo, qualunque sia la distanza percorsa lungo il ramo.',
    'Non è corretto: pensa alla direzione della forza peso (sempre verticale) rispetto allo spostamento (qui orizzontale). Quando i due sono perpendicolari il lavoro è sempre nullo, indipendentemente dai metri percorsi.');
})();
</script>

<div class="iex-widget" id="invCarLavoro">
<p class="iex-lbl">Isola le altre grandezze</p>
<p class="iex-hint">Cerca la sequenza più breve di mosse per isolare ciascuna grandezza, poi mettile alla prova con un calcolo numerico.</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="invCarLavoroprev" onclick="invCarLavoronav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="invCarLavorodots"></div>
<button class="iex-navbtn" id="invCarLavoronext" onclick="invCarLavoronav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="invCarLavororow0">
<div class="iex-nested">
{% include invert.html id="inv-lavoro-F" variabili="L|F|s" etichette="L|F|\Delta s" sinistra="L" destra="F*s" obiettivo="F" %}
</div>
</div>

<div class="iex-q" id="invCarLavororow1" style="display:none">
<p class="iex-qt">Durante una gara di traino alla fune su un campo innevato, una squadra tira una slitta per $20\ \text m$ compiendo un lavoro di $4\,000\ \text J$. Con quale forza tirano la slitta?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcInvLavoroF" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numInvLavoroF" valore="200" unit="N" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="invCarLavororow2" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-lavoro-s" variabili="L|F|s" etichette="L|F|\Delta s" sinistra="L" destra="F*s" obiettivo="s" %}
</div>
</div>

<div class="iex-q" id="invCarLavororow3" style="display:none">
<p class="iex-qt">Un facchino trascina un baule esercitando una forza costante di $150\ \text N$ e compiendo così un lavoro di $900\ \text J$. Di quanto si è spostato il baule?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcInvLavoroS" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numInvLavoroS" valore="6" unit="m" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

</div>

<script>
window.setupInvCarousel = window.setupInvCarousel || function(ID,N){
  var cur=0, ok=[];
  for(var oi=0;oi<N;oi++)ok.push(false);
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  function shootFW(){
    for(var b=0;b<5;b++)(function(b){setTimeout(function(){
      window._shoot({getBoundingClientRect:function(){return{left:window.innerWidth*(.1+Math.random()*.8),top:window.innerHeight*(.1+Math.random()*.5),width:0,height:0};}});
    },b*200);})(b);
  }
  function updateDots(){
    var dots=document.querySelectorAll('#'+ID+'dots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#'+ID+' .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById(ID+'row'+i).style.display='block';
    cur=i;
    document.getElementById(ID+'prev').disabled=(i===0);
    document.getElementById(ID+'next').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById(ID+'dots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Passo '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window[ID+'nav']=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };
  // Ogni esercizio annidato (invert.html o sci.html) segnala da sé quando
  // viene risolto correttamente: lo contiamo per i fuochi d'artificio finali.
  for(var k=0;k<N;k++){
    (function(k){
      var row=document.getElementById(ID+'row'+k);
      if(!row)return;
      row.addEventListener('iex:correct', function(){
        if(ok[k])return;
        ok[k]=true; updateDots();
        if(ok.every(function(x){return x;}))setTimeout(shootFW,600);
      });
    })(k);
  }
};
setupInvCarousel('invCarLavoro',4);
</script>

### Il lavoro si può convertire in altre forme di energia
Quando applichiamo una forza su un corpo e ne produciamo uno spostamento, abbiamo compiuto un lavoro. Ma nel momento in cui smettiamo di applicare la forza, il lavoro svanisce. Eppure, l'energia non può scomparire. Questo significa che l'energia ha cambiato forma: il lavoro è diventato qualcos'altro. 

In questo capitolo vedremo tre forme di energia in cui si può convertire il lavoro: energia cinetica, energia potenziale e calore.


# L'Energia Cinetica

## Il Teorema dell'Energia Cinetica

Per comprendere in che modo il lavoro si può trasformare in altre forme di energia, cominciamo da un esempio concreto.  
{% include margin-note.html testo="Da un esempio al teorema dell'energia cinetica" %}
Immagina di spingere una bimba su una bici. Finché la stai spingendo, stai compiendo un lavoro, ma nel momento in cui smetti di spingere, la forza diventa nulla e perciò anche il lavoro è nullo. L'energia si è trasferita alla bambina, che ora si muove.
{% include margin-note-end.html %}

{% include figura.html id="bimbo-bici"
   src="/corsi/gif/bimbo_bici.webp"
   didascalia="Spingendo la bimba sulla bici, applichi una forza lungo lo spostamento: stai compiendo lavoro su di lei. Il risultato di questo lavoro è che la bambina acquisisce un'energia di movimento."
   larghezza="360px" %}

Questa energia è un'energia di movimento, e perciò è detta <definizione>energia cinetica</definizione> (dal greco *“chinéo”*, che vuol dire “muovere”). Essa si indica con il simbolo $K$.

{% include box-thm.html testo="Teorema dell'Energia Cinetica"%}
Il **lavoro totale** compiuto su un corpo <u>dalla somma di tutte le forze</u> che agiscono su di esso è pari alla variazione della sua energia cinetica. In formule, 

$$
L = \Delta K,
$$  

ove $\Delta K=K_f-K_i$ indica la variazione di energia cinetica del corpo (energia cinetica finale meno quella iniziale).
{% include box-end.html %}

Notiamo che
- se $L$ è positivo allora $\Delta K>0$, cioè l'energia cinetica aumenta;
- se $L$ è negativo allora $\Delta K<0$, cioè l'energia cinetica diminuisce;
- se $L$ è nullo allora $\Delta K=0$, cioè l'energia cinetica rimane invariata.

Cioè, il lavoro esercitato da qualcosa che frena è negativo, e quindi fa diminuire l'energia cinetica; mentre quello esercitato da qualcosa che spinge è positivo, quindi la fa aumentare.

### La formula dell'Energia Cinetica

{% include margin-note.html testo="Dal teorema dell'energia cinetica alla formula" %}
La formula dell'energia cinetica può essere derivata direttamente dal teorema dell'energia cinetica, attraverso il seguente calcolo.

{% include spoiler.html testo="Derivazione della formula dell'energia cinetica" %}

Consideriamo un corpo di massa $m$ che si muove con velocità iniziale $v_i$. Su di esso agisce, per un tempo $\Delta t$, una forza costante $F$ diretta come il moto: questa forza compie un lavoro $L$, provoca uno spostamento $\Delta s$ e porta il corpo ad avere velocità finale $v_f$.

**Il lavoro.** Per definizione,

$$L = F\cdot \Delta s.$$

**La forza.** Per il secondo principio della dinamica,

$$F = m\, a.$$

**L'accelerazione.** Dalla definizione di accelerazione,

$$a = \frac{v_f-v_i}{\Delta t} \quad \implies \quad \Delta t = \frac{v_f-v_i}{a}.$$

**Lo spostamento.** Lo spostamento è lo stesso che si avrebbe con un moto a velocità costante pari alla velocità media $v_m$, cioè

$$\Delta s = v_m\cdot \Delta t, \qquad \text{con} \qquad v_m = \frac{v_i+v_f}{2}.$$



**Mettiamo insieme i pezzi.** Sostituendo $F=ma$ e $\Delta s=v_m\cdot \Delta t$ nella formula del lavoro,

$$L = m\,a\cdot \frac{v_i+v_f}{2}\cdot \Delta t.$$

Ora sostituiamo $\Delta t = \dfrac{v_f-v_i}{a}$: l'accelerazione $a$ si semplifica, e resta

$$L = m\cdot \frac{v_i+v_f}{2}\cdot (v_f-v_i) = \frac12 m\,(v_f+v_i)(v_f-v_i) = \frac12 mv_f^2 - \frac12 mv_i^2.$$

Ma per il teorema dell'energia cinetica sappiamo che $L = \Delta K = K_f - K_i$. Confrontando questa relazione con quella appena trovata, riconosciamo

$$K_f = \frac12 mv_f^2, \qquad\qquad K_i = \frac12 mv_i^2.$$

{% include spoiler-end.html %}
{% include margin-note-end.html %}

La formula dell'energia cinetica, dunque, risulta essere

$$
K = \frac 12 m v^2.
$$

Notiamo che:
- l'energia cinetica è <u>direttamente proporzionale alla massa</u> (quindi raddoppiando la massa raddoppia anche l'energia cinetica, a parità di $v$);
- l'energia cinetica è <u markdown="span">direttamente proporzionale al **quadrato** della velocità</u>.

{% include box-warn.html %}
Il fatto che sia direttamente proporzionale al quadrato della velocità significa che se la velocità raddoppia allora l'energia cinetica non raddoppia ma quadruplica. Se la velocità triplica, l'energia cinetica aumenta di nove volte; se la velocità quadruplica allora l'energia cinetica aumenta di 16 volte, etc.
{% include box-end.html %}

### L'unità di misura dell'Energia Cinetica

L'energia cinetica, essendo un'energia, <u>ha la stessa unità di misura del lavoro: il joule</u>. Questo si può vedere dalla formula $K=\frac 12 m v^2$:
{% include eq-annotated.html
     id="formula-joule-2"
     formula="[K]=[m]\cdot[v^2]=\text{kg}\cdot \left(\frac{\text m}{\text{s}}\right)^2 = \text J"
     frammenti="[K]|[m]|[v^2]|\text{kg}|\text m|\text{s}|\text J"
     etichette="unità di K|unità di m|unità di v²|chilo|metro|secondo|joule"
     posizioni="alto|basso|alto|basso|alto|basso|alto"
  %}

<div class="iex-widget" id="iexCinetica">
<p class="iex-lbl">Verifica Subito!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexCineticaprev" onclick="iexCineticanav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexCineticadots"></div>
<button class="iex-navbtn" id="iexCineticanext" onclick="iexCineticanav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexCineticarow0">
<p class="iex-qt">Se la velocità di un corpo <strong>triplica</strong> (a parità di massa), come cambia la sua energia cinetica?</p>
<div class="iex-choices" id="iexCineticachoices0">
<button class="iex-choice-btn" data-v="a">Triplica</button>
<button class="iex-choice-btn" data-v="b">Si moltiplica per 6</button>
<button class="iex-choice-btn" data-v="c">Si moltiplica per 9</button>
<button class="iex-choice-btn" data-v="d">Resta invariata</button>
</div>
<div class="iex-fb" id="iexCineticafb0"></div>
</div>

<div class="iex-q" id="iexCineticarow1" style="display:none">
<p class="iex-qt">Un ciclista di massa $70\ \text{kg}$ pedala a una velocità di $10\ \text{m/s}$. Quanta energia cinetica possiede? Esprimi il risultato in joule, in notazione scientifica.</p>
<div class="calc-flow">
{% include calc-margin.html id="calcCinetica" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include sci.html prima="$K=$" coeff="3.5" exp="3" s="$3{,}5\times10^3\ \text J$" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexCineticarow2" style="display:none">
<p class="iex-qt">Quale delle seguenti relazioni fra unità di misura <strong>non</strong> è corretta?</p>
<div class="iex-choices" id="iexCineticachoices2">
<button class="iex-choice-btn" data-v="a">$\text J = \text{kg}\cdot\frac{\text m^2}{\text s^2}$</button>
<button class="iex-choice-btn" data-v="b">$\text J = \text{kg}\cdot\left(\frac{\text m}{\text s}\right)^2$</button>
<button class="iex-choice-btn" data-v="c">$\text J = \text{kg}^2\cdot\frac{\text m^2}{\text s^2}$</button>
<button class="iex-choice-btn" data-v="d">$\text J = \text N\cdot \text m$</button>
</div>
<div class="iex-fb" id="iexCineticafb2"></div>
</div>

<div class="iex-q" id="iexCineticarow3" style="display:none">
<p class="iex-qt">Un'automobile e un camion, che ha una massa <strong>doppia</strong> rispetto all'automobile, viaggiano alla <strong>stessa velocità</strong>. Come si confrontano le loro energie cinetiche?</p>
<div class="iex-choices" id="iexCineticachoices3">
<button class="iex-choice-btn" data-v="a">Sono uguali</button>
<button class="iex-choice-btn" data-v="b">Quella del camion è doppia</button>
<button class="iex-choice-btn" data-v="c">Quella del camion è quadrupla</button>
<button class="iex-choice-btn" data-v="d">Quella dell'automobile è doppia</button>
</div>
<div class="iex-fb" id="iexCineticafb3"></div>
</div>

</div>

<script>
(function(){
  var N=4, cur=0, ok=[false,false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexCineticadots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexCinetica .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexCineticarow'+i).style.display='block';
    cur=i;
    document.getElementById('iexCineticaprev').disabled=(i===0);
    document.getElementById('iexCineticanext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexCineticadots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexCineticanav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  function wireChoices(rowIdx, choicesId, fbId, correctV, msgOk, msgErr){
    var btns = document.querySelectorAll('#'+choicesId+' .iex-choice-btn');
    var fb = document.getElementById(fbId);
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        if(btn.disabled) return;
        btns.forEach(function(b){ b.disabled = true; });
        var correct = btn.dataset.v === correctV;
        fb.style.display = 'block';
        if(correct){
          btn.className = btn.className.replace(' wrong','') + ' correct';
          ok[rowIdx] = true; fb.className = 'iex-fb ok';
          fb.innerHTML = '&#10003; Esatto! '+msgOk+(rowIdx<N-1?' <button class="iex-nextbtn" onclick="iexCineticanav(1)">Passo successivo &rarr;</button>':'');
          shootConf(btn); updateDots(); checkFinale();
        } else {
          btn.className = btn.className.replace(' correct','') + ' wrong';
          var correctBtn = document.querySelector('#'+choicesId+' .iex-choice-btn[data-v="'+correctV+'"]');
          correctBtn.className = correctBtn.className.replace(' wrong','') + ' correct';
          fb.className = 'iex-fb err';
          fb.innerHTML = msgErr;
        }
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
      });
    });
  }

  // Fuochi d'artificio finali, quando TUTTE le domande (compresa quella
  // numerica annidata con sci.html, vedi sotto) sono state risolte.
  function checkFinale(){
    if(ok.every(function(x){return x;}))setTimeout(shootFW,600);
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }
  var _row1=document.getElementById('iexCineticarow1');
  if(_row1)_row1.addEventListener('iex:correct', function(){
    if(!ok[1]){ ok[1]=true; updateDots(); checkFinale(); }
  });

  wireChoices(0, 'iexCineticachoices0', 'iexCineticafb0', 'c',
    'L\'energia cinetica è proporzionale al <strong>quadrato</strong> della velocità: se $v$ triplica, $K$ si moltiplica per $3^2=9$.',
    'Non è corretto: l\'energia cinetica non è direttamente proporzionale a $v$, ma al suo <strong>quadrato</strong>. Quindi se $v$ triplica, $K$ si moltiplica per $3^2$.');

  wireChoices(2, 'iexCineticachoices2', 'iexCineticafb2', 'c',
    'La massa compare una sola volta nella formula $K=\\frac12 mv^2$, quindi la sua unità di misura, il chilogrammo, compare a potenza 1 — non 2.',
    'Non è corretto: tutte le altre relazioni sono forme equivalenti dell\'unità di energia. Controlla con che potenza compare il chilogrammo.');

  wireChoices(3, 'iexCineticachoices3', 'iexCineticafb3', 'b',
    'L\'energia cinetica è direttamente proporzionale alla massa (potenza 1): a parità di velocità, raddoppiando la massa raddoppia anche $K$.',
    'Non è corretto: a parità di velocità, l\'energia cinetica è direttamente proporzionale alla massa (non al suo quadrato, a differenza della velocità).');
})();
</script>

<div class="iex-widget" id="invCarCinetica">
<p class="iex-lbl">Isola le altre grandezze</p>
<p class="iex-hint">Cerca la sequenza più breve di mosse per isolare ciascuna grandezza.</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="invCarCineticaprev" onclick="invCarCineticanav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="invCarCineticadots"></div>
<button class="iex-navbtn" id="invCarCineticanext" onclick="invCarCineticanav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="invCarCineticarow0">
<div class="iex-nested">
{% include invert.html id="inv-cinetica-m" variabili="K|m|v|due" etichette="K|m|v|2" sinistra="K" destra="m*v*v/due" obiettivo="m" %}
</div>
</div>

<div class="iex-q" id="invCarCineticarow1" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-cinetica-v" variabili="K|m|v|due" etichette="K|m|v|2" sinistra="K" destra="m*v*v/due" obiettivo="v" radice="1" %}
</div>
</div>

</div>

<script>
setupInvCarousel('invCarCinetica',2);
</script>

# L'Energia Potenziale

{% include margin-note.html testo="Dagli esempi al concetto di energia potenziale" %}
Vediamo adesso un'altra forma di energia in cui si può trasformare il lavoro. Anche qui, partiamo da un paio di esempi concreti.

Immagina di comprimere una molla spingendo con la mano. Poiché eserciti una forza lungo uno spostamento, stai compiendo un lavoro.
{% include figura.html id="compressing-string"
   src="/corsi/gif/compressing-string.gif"
   didascalia="Comprimendo la molla, applichi una forza lungo uno spostamento: stai compiendo un lavoro. Il risultato di questo lavoro è immagazzinato dentro la molla."
   larghezza="250px" %}
Tuttavia, nel momento in cui la tua mano si ferma, lo spostamento finisce e quindi il lavoro diventa nullo. D'altra parte, niente si sta muovendo, quindi non c'è energia cinetica. Deve quindi esistere una nuova energia, immagazzinata dentro la molla, che potrebbe portarla, *potenzialmente*, ad esplodere. Questa energia si chiama pertanto <definizione>energia potenziale</definizione>. Nel caso di una molla, si parla di <definizione>energia potenziale elastica</definizione>.

La stessa cosa succede quando solleviamo un peso. 
{% include figura.html id="bimbo-sollevamento-pesi"
   src="/corsi/gif/bimbo_solleva_pesi.webp"
   didascalia="Sollevando il peso, si applica una forza lungo uno spostamento: stai compiendo un lavoro. Il risultato di questo lavoro è che il peso si trova a un'altezza da cui può cadere, acquisendo velocità e quindi energia cinetica."
   larghezza="300px" %}
Per sollevare il peso compiamo un lavoro, ma quando poi lo manteniamo fisso a una certa altezza il lavoro è nullo e poiché tutto è fermo non c'è energia cinetica. Anche in questo caso, quindi, l'energia è immagazzinata dentro il corpo, che ora ha il *potenziale* di cadere. Il corpo ha dunque una certa **energia potenziale**. In questo caso, si parla di <definizione>energia potenziale gravitazionale</definizione>.


Da questi due esempi comprendiamo che, a differenza dell'energia cinetica, <u>esistono diversi tipi di energia potenziale</u>. Ciascuno, ha la propria formula. In questo capitolo, ci concentreremo in particolare sull'energia potenziale gravitazionale.
{% include margin-note-end.html %}





### L'energia potenziale gravitazionale

{% include margin-note.html testo="Dall'esempio del sollevamento alla formula dell'energia potenziale gravitazionale" %}
Dall'esempio del sollevamento di un peso, possiamo anche trovare la formula per l'energia potenziale gravitazionale. Infatti, immagina di sollevare una massa $m$ da un'altezza $h_i$ a un'altezza $h_f$. Prendiamo la nostra solita formula del lavoro $L = F\cdot \Delta s$ e applichiamola a questo caso. Nella formula,
- $F$ è il modulo della forza peso $F_{\text{peso}}=mg$, dove $g$ è l'accelerazione gravitazionale del pianeta;
- $\Delta s$ è la distanza percorsa, che in questo caso corrisponde alla differenza di altezza $\Delta h$;
- notiamo che la forza peso (diretta verso il basso) è opposta allo spostamento (diretto verso l'alto), quindi nella nostra formula dobbiamo aggiungere un meno. Pertanto, il lavoro svolto dalla forza peso è

$$
L = -mg \cdot \Delta h.
$$

Poiché, come abbiamo detto prima, sappiamo che tutto il lavoro si converte in una variazione dell'energia potenziale gravitazionale, allora possiamo scrivere che

$$
L = - \Delta U_g.
$$

Uguagliando le due formule per $L$, possiamo comprendere che la formula dell'energia potenziale è

$$
U_g = mgh.
$$

{% include margin-note-end.html %}

### L'unità di misura dell'Energia Potenziale

Anche l'energia potenziale, essendo un'energia, <u>ha la stessa unità di misura del lavoro: il joule</u>. Questo si può vedere dalla formula $U_g=mgh$:

{% include eq-annotated.html
     id="formula-joule-3"
     formula="[U_g]=[m]\cdot[g]\cdot[h]=\text{kg}\cdot\frac{\text{m}}{\text{s}^2}\cdot \text{m} = \text{J}"
     frammenti="[U_g]|[m]|[g]|[h]|\text{J}"
     etichette="unità di U_g|unità di m|unità di g|unità di h|joule"
     posizioni="alto|basso|alto|basso|alto"
  %}


{% include box-imp.html testo="Energia Potenziale Gravitazionale" %}
Il lavoro svolto dalla forza peso per variare l'altezza di un corpo è pari a

$$L_{\text{peso}}= - \Delta U_g,$$

dove $U_g$ è l'energia potenziale gravitazionale, la cui formula corrisponde a 

$$U_g = mgh,$$

ove $m$ è la massa del corpo, $g$ è l'accelerazione gravitazionale e $h$ è l'altezza. 

L'unità di misura dell'energia potenziale gravitazionale è il joule (J).


{% include box-end.html %}





<div class="iex-widget" id="iexPotenziale">
<p class="iex-lbl">Verifica Subito!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexPotenzialeprev" onclick="iexPotenzialenav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexPotenzialedots"></div>
<button class="iex-navbtn" id="iexPotenzialenext" onclick="iexPotenzialenav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexPotenzialerow0">
<p class="iex-qt">Un oggetto viene sollevato verso l'alto. Come cambia la sua energia potenziale gravitazionale?</p>
<div class="iex-choices" id="iexPotenzialechoices0">
<button class="iex-choice-btn" data-v="a">Aumenta</button>
<button class="iex-choice-btn" data-v="b">Diminuisce</button>
<button class="iex-choice-btn" data-v="c">Resta invariata</button>
<button class="iex-choice-btn" data-v="d">Diventa negativa</button>
</div>
<div class="iex-fb" id="iexPotenzialefb0"></div>
</div>

<div class="iex-q" id="iexPotenzialerow1" style="display:none">
<p class="iex-qt">Un pacco di massa $50\ \text{kg}$ viene sollevato con una gru fino a un'altezza di $30\ \text m$. Usando $g\approx 9{,}8\ \text{m/s}^2$, quanta energia potenziale gravitazionale possiede rispetto al suolo? Esprimi il risultato in joule, in notazione scientifica.</p>
<div class="calc-flow">
{% include calc-margin.html id="calcPotenziale" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include sci.html prima="$U_g=$" coeff="1.47" exp="4" s="$1{,}47\times10^4\ \text J$" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexPotenzialerow2" style="display:none">
<p class="iex-qt">Un oggetto viene sollevato a un'altezza <strong>doppia</strong> rispetto a prima (a parità di massa). Come cambia la sua energia potenziale gravitazionale?</p>
<div class="iex-choices" id="iexPotenzialechoices2">
<button class="iex-choice-btn" data-v="a">Raddoppia</button>
<button class="iex-choice-btn" data-v="b">Quadruplica</button>
<button class="iex-choice-btn" data-v="c">Resta invariata</button>
<button class="iex-choice-btn" data-v="d">Dimezza</button>
</div>
<div class="iex-fb" id="iexPotenzialefb2"></div>
</div>

<div class="iex-q" id="iexPotenzialerow3" style="display:none">
<p class="iex-qt">Quale delle seguenti relazioni è <strong>sbagliata</strong>?</p>
<div class="iex-choices" id="iexPotenzialechoices3">
<button class="iex-choice-btn" data-v="a">$U_g = mgh$</button>
<button class="iex-choice-btn" data-v="b">$\text J = \text{kg}\cdot\frac{\text m}{\text s^2}\cdot \text m$</button>
<button class="iex-choice-btn" data-v="c">$\text J = \text{kg}\cdot\frac{\text m^2}{\text s^2}$</button>
<button class="iex-choice-btn" data-v="d">$\text J = \text{kg}\cdot\frac{\text m}{\text s}$</button>
</div>
<div class="iex-fb" id="iexPotenzialefb3"></div>
</div>

</div>

<script>
(function(){
  var N=4, cur=0, ok=[false,false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexPotenzialedots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexPotenziale .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexPotenzialerow'+i).style.display='block';
    cur=i;
    document.getElementById('iexPotenzialeprev').disabled=(i===0);
    document.getElementById('iexPotenzialenext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexPotenzialedots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexPotenzialenav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  function wireChoices(rowIdx, choicesId, fbId, correctV, msgOk, msgErr){
    var btns = document.querySelectorAll('#'+choicesId+' .iex-choice-btn');
    var fb = document.getElementById(fbId);
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        if(btn.disabled) return;
        btns.forEach(function(b){ b.disabled = true; });
        var correct = btn.dataset.v === correctV;
        fb.style.display = 'block';
        if(correct){
          btn.className = btn.className.replace(' wrong','') + ' correct';
          ok[rowIdx] = true; fb.className = 'iex-fb ok';
          fb.innerHTML = '&#10003; Esatto! '+msgOk+(rowIdx<N-1?' <button class="iex-nextbtn" onclick="iexPotenzialenav(1)">Passo successivo &rarr;</button>':'');
          shootConf(btn); updateDots(); checkFinale();
        } else {
          btn.className = btn.className.replace(' correct','') + ' wrong';
          var correctBtn = document.querySelector('#'+choicesId+' .iex-choice-btn[data-v="'+correctV+'"]');
          correctBtn.className = correctBtn.className.replace(' wrong','') + ' correct';
          fb.className = 'iex-fb err';
          fb.innerHTML = msgErr;
        }
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
      });
    });
  }

  // Fuochi d'artificio finali, quando TUTTE le domande (compresa quella
  // numerica annidata con sci.html, vedi sotto) sono state risolte.
  function checkFinale(){
    if(ok.every(function(x){return x;}))setTimeout(shootFW,600);
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }
  var _row1=document.getElementById('iexPotenzialerow1');
  if(_row1)_row1.addEventListener('iex:correct', function(){
    if(!ok[1]){ ok[1]=true; updateDots(); checkFinale(); }
  });

  wireChoices(0, 'iexPotenzialechoices0', 'iexPotenzialefb0', 'a',
    'Aumentando l\'altezza $h$, e con $m$ e $g$ costanti, anche $U_g=mgh$ aumenta.',
    'Non è corretto: nella formula $U_g=mgh$, se $h$ aumenta e $m$, $g$ restano gli stessi, allora $U_g$ deve aumentare.');

  wireChoices(2, 'iexPotenzialechoices2', 'iexPotenzialefb2', 'a',
    'L\'energia potenziale gravitazionale è <strong>direttamente proporzionale</strong> all\'altezza $h$ (non al suo quadrato, a differenza di come l\'energia cinetica dipende da $v$): raddoppiando $h$ raddoppia anche $U_g$.',
    'Non è corretto: a differenza dell\'energia cinetica (che dipende dal <em>quadrato</em> della velocità), l\'energia potenziale gravitazionale dipende <em>linearmente</em> dall\'altezza.');

  wireChoices(3, 'iexPotenzialechoices3', 'iexPotenzialefb3', 'd',
    '$\\text{kg}\\cdot\\text m/\\text s$ non sono le unità di un\'energia: manca una potenza di $\\text s$ al denominatore (quelle sono, in realtà, le unità della quantità di moto).',
    'Non è corretto: le altre tre relazioni sono tutte forme equivalenti dell\'unità di energia. Controlla con che potenza compare il secondo.');
})();
</script>

<div class="iex-widget" id="invCarPotenziale">
<p class="iex-lbl">Isola le altre grandezze</p>
<p class="iex-hint">Cerca la sequenza più breve di mosse per isolare ciascuna grandezza.</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="invCarPotenzialeprev" onclick="invCarPotenzialenav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="invCarPotenzialedots"></div>
<button class="iex-navbtn" id="invCarPotenzialenext" onclick="invCarPotenzialenav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="invCarPotenzialerow0">
<div class="iex-nested">
{% include invert.html id="inv-potenziale-m" variabili="Ug|m|g|h" etichette="U_g|m|g|h" sinistra="Ug" destra="m*g*h" obiettivo="m" %}
</div>
</div>

<div class="iex-q" id="invCarPotenzialerow1" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-potenziale-g" variabili="Ug|m|g|h" etichette="U_g|m|g|h" sinistra="Ug" destra="m*g*h" obiettivo="g" %}
</div>
</div>

<div class="iex-q" id="invCarPotenzialerow2" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-potenziale-h" variabili="Ug|m|g|h" etichette="U_g|m|g|h" sinistra="Ug" destra="m*g*h" obiettivo="h" %}
</div>
</div>

</div>

<script>
setupInvCarousel('invCarPotenziale',3);
</script>

# L'Energia Meccanica e il Calore

{% include margin-note.html testo="Definizione dell'energia meccanica" %}
Abbiamo visto che un corpo in movimento possiede energia cinetica $K$, mentre un corpo sollevato possiede energia potenziale $U_g$ e un corpo elastico (come una molla) può possedere un'energia potenziale elastica $U_{\text{el}}$. In generale, un corpo può essere dotato di molti tipi di energia allo stesso tempo. In quel caso, <u>la sua energia è semplicemente la somma delle sue energie</u>. Chiamiamo <definizione>energia meccanica</definizione> $E$ questa somma.
{% include margin-note-end.html %}

{% include box-imp.html testo="L'energia meccanica" %}

L'energia meccanica è la somma dell'energia cinetica e tutte le energie potenziali che stanno agendo sul corpo:

$$E = K + U,$$

dove $U$ racchiude tutti i tipi di energia potenziale (ad esempio, elastica e gravitazionale).  
Naturalmente, essendo $E$ un'energia, <u>si misura anch'essa in joule</u>.
{% include box-end.html %}

<div class="iex-widget" id="iexEnergiaMeccanica">
<p class="iex-lbl">Prova tu!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexEnergiaMeccanicaprev" onclick="iexEnergiaMeccanicanav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexEnergiaMeccanicadots"></div>
<button class="iex-navbtn" id="iexEnergiaMeccanicanext" onclick="iexEnergiaMeccanicanav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexEnergiaMeccanicarow0">
<p class="iex-qt">Un gatto salta giù da uno scaffale: mentre è ancora a mezz'aria, possiede un'energia cinetica di $12\ \text J$ e un'energia potenziale gravitazionale di $8\ \text J$ (rispetto al pavimento). Qual è la sua energia meccanica totale in quell'istante?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcEmecc0" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numEmecc0" valore="20" unit="J" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexEnergiaMeccanicarow1" style="display:none">
<p class="iex-qt">In un flipper, la pallina è appoggiata sulla molla del lanciatore, tutta compressa e pronta a scattare: la molla possiede un'energia potenziale elastica di $3\ \text J$. La pallina si trova inoltre a un'altezza tale da avere un'energia potenziale gravitazionale di $1\ \text J$. Poiché non si è ancora mossa, la sua energia cinetica è nulla. Qual è l'energia meccanica totale del sistema?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcEmecc1" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numEmecc1" valore="4" unit="J" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexEnergiaMeccanicarow2" style="display:none">
<p class="iex-qt">Una mongolfiera in volo possiede un'energia meccanica di $500\ \text J$. In un certo istante, la sua energia cinetica è di $120\ \text J$. Quanta energia potenziale gravitazionale possiede, in quello stesso istante?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcEmecc2" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numEmecc2" valore="380" unit="J" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexEnergiaMeccanicarow3" style="display:none">
<p class="iex-qt">Un airone in volo, di massa $2\ \text{kg}$, possiede un'energia meccanica di $100\ \text J$. In un dato istante, la sua energia cinetica è di $20\ \text J$. A quale altezza dal suolo si trova, in quello stesso istante? (Usa $g\approx 10\ \text{m/s}^2$.)</p>
<div class="calc-flow">
{% include calc-margin.html id="calcEmecc3" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numEmecc3" valore="4" unit="m" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

</div>

<script>
(function(){
  var N=4, cur=0, ok=[false,false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexEnergiaMeccanicadots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexEnergiaMeccanica .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexEnergiaMeccanicarow'+i).style.display='block';
    cur=i;
    document.getElementById('iexEnergiaMeccanicaprev').disabled=(i===0);
    document.getElementById('iexEnergiaMeccanicanext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexEnergiaMeccanicadots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexEnergiaMeccanicanav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  function checkFinale(){
    if(ok.every(function(x){return x;}))setTimeout(shootFW,600);
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }

  // Tutte e quattro le domande sono calcoli numerici (num.html), non scelte
  // multiple: ci mettiamo in ascolto del loro evento di completamento.
  for(var i=0;i<N;i++)(function(i){
    var el=document.getElementById('iexEnergiaMeccanicarow'+i);
    if(el)el.addEventListener('iex:correct', function(){
      if(!ok[i]){ ok[i]=true; updateDots(); checkFinale(); }
    });
  })(i);
})();
</script>

## I Sistemi Isolati e la Conservazione dell'Energia Meccanica

{% include box-imp.html testo="I sistemi isolati" %}
Un sistema si dice <definizione>isolato</definizione> se esso non scambia energia con il resto dell'Universo.
{% include box-end.html %}

<div class="fig-block">
<svg viewBox="0 0 360 300" width="100%" style="max-width:300px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Diagramma di Venn: un sistema isolato dentro l'Universo, senza alcuna freccia di scambio di energia">
  <defs>
    <radialGradient id="univGradIso" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f5f8ff"/><stop offset="100%" stop-color="#dbeafe"/>
    </radialGradient>
    <radialGradient id="sysGradIso" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#fffbeb"/><stop offset="100%" stop-color="#fde68a"/>
    </radialGradient>
  </defs>
  <circle cx="180" cy="160" r="130" fill="url(#univGradIso)" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="180" y="50" text-anchor="middle" font-size="15" font-weight="600" fill="#1e40af">Universo</text>
  <circle cx="180" cy="180" r="62" fill="url(#sysGradIso)" stroke="#d97706" stroke-width="1.5"/>
  <text x="180" y="185" text-anchor="middle" font-size="15" font-weight="600" fill="#92400e">Sistema</text>

  <line x1="180" y1="146" x2="180" y2="98" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="5 4"/>
  <line x1="164" y1="112" x2="196" y2="132" stroke="#dc2626" stroke-width="3"/>
  <line x1="196" y1="112" x2="164" y2="132" stroke="#dc2626" stroke-width="3"/>
  <foreignObject x="196" y="108" width="60" height="26">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:15px;font-weight:600;color:#dc2626;">$L=0$</div>
  </foreignObject>
</svg>
<figcaption><span class="fig-num" data-fig-id="venn-sistema-isolato">Figura</span> — In un sistema isolato non può esserci nessuno scambio di energia (nessuna freccia attraversa il confine) con il resto dell'Universo.</figcaption>
</div>

Quindi <u markdown="span">su un sistema isolato **non** si compie lavoro</u> (in particolare, non c'è l'attrito).  
I sistemi isolati sono perciò quelli che <u markdown="span">**conservano** la propria energia: non la cedono e non ne acquistano</u>.  
In questa situazione, l'energia meccanica non fa che trasformarsi continuamente da potenziale a cinetica e viceversa, senza mai disperdersi.


{% include box-thm.html testo="Teorema di conservazione dell'energia meccanica" %}
<u markdown="span">In un sistema **isolato**, l'energia meccanica si conserva</u>, cioè <u markdown="span">resta **costante** nel tempo</u>. 

$$
E = K+U \quad \text{è costante.}
$$

Ovvero, indicando con il pedice $i$ la situazione iniziale e con $f$ quella finale, possiamo scrivere che per un sistema isolato

$$
K_i+U_i = K_f+U_f.
$$

{% include box-end.html %}

Questo fatto così semplice è capace di descrivere un'immensa quantità di fenomeni molto diversi. È importante provare a usare il linguaggio dell'energia meccanica per descrivere alcuni fenomeni semplici, perché è uno strumento molto potente che ci tornerà molto spesso utile. 

## Alcuni esempi di applicazione della conservazione dell'energia meccanica.

Proviamo quindi a mettere questo concetto in azione, con alcuni esempi concreti.

### Un bambino su un tappeto elastico

Guarda ad esempio cosa succede dal punto di vista energetico a un bambino che salta su un tappeto elastico:


{% include trampolino-lab.html %}

Prova a ricostruire tu stesso, passo per passo, come cambia l'energia del bambino lungo tutto il ciclo (nota che ora prendiamo come riferimento per l'altezza, e quindi per l'energia potenziale gravitazionale nulla, proprio il punto di massima estensione del tappeto):

<div class="tplcz-widget" id="tplCloze">
<ul class="tplcz-list">

<li>Inizialmente il bambino si trova a un'altezza $h_i$ rispetto al punto di massima estensione del tappeto, con velocità nulla: tutta la sua energia meccanica è
<select class="fill-sel tplcz-blank" data-ans="energia potenziale gravitazionale">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia potenziale elastica</option>
<option>energia cinetica e potenziale gravitazionale</option>
<option>energia cinetica e potenziale elastica</option>
<option>energia potenziale gravitazionale ed elastica</option>
<option>tutte e tre le forme di energia</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="mgh_i"><option value="">—</option><option>mgh_i</option><option>K</option><option>Ug</option><option>Uel</option><option>K+Ug</option><option>K+Uel</option><option>Ug+Uel</option><option>K+Ug+Uel</option></select>.</li>

<li>Successivamente, cadendo, converte progressivamente la sua energia potenziale in energia cinetica: $E=$ <select class="fill-sel tplcz-blank" data-ans="K+Ug"><option value="">—</option><option>mgh_i</option><option>K</option><option>Ug</option><option>Uel</option><option>K+Ug</option><option>K+Uel</option><option>Ug+Uel</option><option>K+Ug+Uel</option></select>.</li>

<li>Quando tocca il tappeto, comincia a rallentare mentre il tappeto si incurva sotto di lui, accumulando
<select class="fill-sel tplcz-blank" data-ans="energia potenziale elastica">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia potenziale elastica</option>
<option>energia cinetica e potenziale gravitazionale</option>
<option>energia cinetica e potenziale elastica</option>
<option>energia potenziale gravitazionale ed elastica</option>
<option>tutte e tre le forme di energia</option>
</select>; quando si ferma nel punto più basso (il punto di massima estensione del tappeto), tutta la sua energia è diventata
<select class="fill-sel tplcz-blank" data-ans="energia potenziale elastica">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia potenziale elastica</option>
<option>energia cinetica e potenziale gravitazionale</option>
<option>energia cinetica e potenziale elastica</option>
<option>energia potenziale gravitazionale ed elastica</option>
<option>tutte e tre le forme di energia</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="Uel"><option value="">—</option><option>mgh_i</option><option>K</option><option>Ug</option><option>Uel</option><option>K+Ug</option><option>K+Uel</option><option>Ug+Uel</option><option>K+Ug+Uel</option></select>.</li>

<li>Il tappeto comincia poi a distendersi e il bambino torna a muoversi verso l'alto, acquistando anche quota: l'energia immagazzinata nel tappeto si converte quindi in
<select class="fill-sel tplcz-blank" data-ans="energia cinetica e potenziale gravitazionale">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia potenziale elastica</option>
<option>energia cinetica e potenziale gravitazionale</option>
<option>energia cinetica e potenziale elastica</option>
<option>energia potenziale gravitazionale ed elastica</option>
<option>tutte e tre le forme di energia</option>
</select>.</li>

<li>Infine, quando il bambino è di nuovo in aria e continua a salire, perde velocità: la sua energia si trasforma gradualmente da
<select class="fill-sel tplcz-blank" data-ans="energia cinetica">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia potenziale elastica</option>
<option>energia cinetica e potenziale gravitazionale</option>
<option>energia cinetica e potenziale elastica</option>
<option>energia potenziale gravitazionale ed elastica</option>
<option>tutte e tre le forme di energia</option>
</select>
a
<select class="fill-sel tplcz-blank" data-ans="energia potenziale gravitazionale">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia potenziale elastica</option>
<option>energia cinetica e potenziale gravitazionale</option>
<option>energia cinetica e potenziale elastica</option>
<option>energia potenziale gravitazionale ed elastica</option>
<option>tutte e tre le forme di energia</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="K+Ug"><option value="">—</option><option>mgh_i</option><option>K</option><option>Ug</option><option>Uel</option><option>K+Ug</option><option>K+Uel</option><option>Ug+Uel</option><option>K+Ug+Uel</option></select>, finché non si ferma di nuovo all'altezza $h_i$ e il ciclo ricomincia.</li>

</ul>

<p>Nella realtà, il tappeto non sarebbe perfettamente elastico, per cui il bambino dovrebbe piegare le gambe e compiere un certo <select class="fill-sel tplcz-blank" data-ans="lavoro"><option value="">—</option><option>lavoro</option><option>calore</option><option>energia cinetica</option><option>energia potenziale</option></select> per tornare all'altezza iniziale (per questo fa fatica!).</p>

<div class="tplcz-actions"><button class="tplcz-vbtn" id="tplClozeCheck" type="button">Verifica tutto</button></div>
<div class="tplcz-fb" id="tplClozeFb"></div>
</div>

<style>
#tplCloze{margin:1rem 0}
#tplCloze .tplcz-list{padding-left:1.2rem;margin:.4rem 0}
#tplCloze .tplcz-list li{margin:.5rem 0}
#tplCloze .tplcz-blank.ok{border-color:#15803d!important;box-shadow:0 0 0 1px #15803d}
#tplCloze .tplcz-blank.err{border-color:#dc2626!important;box-shadow:0 0 0 1px #dc2626}
#tplCloze .tplcz-actions{margin:.7rem 0 .3rem}
#tplCloze .tplcz-vbtn{background:#7c3aed;color:#fff;border:none;border-radius:6px;padding:.35rem .9rem;cursor:pointer;font-size:.88rem}
#tplCloze .tplcz-fb{font-size:.88rem;min-height:1.2rem}
#tplCloze .tplcz-fb.ok{color:#15803d;font-weight:600}
#tplCloze .tplcz-fb.err{color:#dc2626}
</style>

<script>
(function(){
  var root=document.getElementById('tplCloze');
  if(!root) return;

  function canon(s){
    s=(s||'').toString().toLowerCase().replace(/\$/g,'').replace(/\s+/g,'').replace(/_/g,'').replace(/[{}]/g,'').replace(/\*/g,'');
    var terms=s.split('+').filter(Boolean).sort();
    return terms.join('+');
  }

  function shootConf(el){
    var r=el.getBoundingClientRect?el.getBoundingClientRect():el, cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }

  var checkBtn=document.getElementById('tplClozeCheck');
  var fb=document.getElementById('tplClozeFb');
  checkBtn.addEventListener('click', function(){
    var blanks=root.querySelectorAll('.tplcz-blank');
    var total=blanks.length, correct=0;
    blanks.forEach(function(b){
      var ok=canon(b.value)===canon(b.dataset.ans);
      b.classList.remove('ok','err');
      b.classList.add(ok?'ok':'err');
      if(ok)correct++;
    });
    fb.style.display='block';
    if(correct===total){
      fb.className='tplcz-fb ok';
      fb.innerHTML='&#10003; Tutto corretto! Hai ricostruito perfettamente il ciclo di scambio energetico.';
      shootConf(checkBtn);
      setTimeout(shootFW,500);
    } else {
      fb.className='tplcz-fb err';
      fb.innerHTML='Hai '+correct+' risposte corrette su '+total+'. Controlla i campi evidenziati in rosso e riprova.';
    }
  });
})();
</script>


### Il pendolo

Lo stesso scambio fra energia potenziale ed energia cinetica avviene in moltissime altre situazioni. Osserva ad esempio un pendolo che oscilla avanti e indietro senza mai fermarsi:

{% include pendolo-lab.html %}

Prova a descrivere anche tu, passo per passo, come cambia la sua energia lungo l'oscillazione (l'altezza $h$ è misurata rispetto al punto più basso della sua traiettoria):

<div class="tplcz-widget" id="pendCloze">
<ul class="tplcz-list">

<li>Quando il pendolo si trova al punto più alto della sua oscillazione, a un'altezza $h$ rispetto al punto più basso, la sua velocità è nulla: tutta la sua energia meccanica è
<select class="fill-sel tplcz-blank" data-ans="energia potenziale gravitazionale">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia cinetica e potenziale gravitazionale</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="mgh"><option value="">—</option><option>mgh</option><option>K</option><option>Ug</option><option>K+Ug</option></select>.</li>

<li>Scendendo verso il punto più basso, il pendolo converte progressivamente la sua energia potenziale in energia cinetica: $E=$ <select class="fill-sel tplcz-blank" data-ans="K+Ug"><option value="">—</option><option>mgh</option><option>K</option><option>Ug</option><option>K+Ug</option></select>.</li>

<li>Quando il pendolo passa per il punto più basso della sua oscillazione, la sua energia meccanica è tutta
<select class="fill-sel tplcz-blank" data-ans="energia cinetica">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia cinetica e potenziale gravitazionale</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="K"><option value="">—</option><option>mgh</option><option>K</option><option>Ug</option><option>K+Ug</option></select>.</li>

<li>Risalendo dall'altro lato, il pendolo rallenta: la sua energia si trasforma gradualmente da
<select class="fill-sel tplcz-blank" data-ans="energia cinetica">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia cinetica e potenziale gravitazionale</option>
</select>
a
<select class="fill-sel tplcz-blank" data-ans="energia potenziale gravitazionale">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia cinetica e potenziale gravitazionale</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="K+Ug"><option value="">—</option><option>mgh</option><option>K</option><option>Ug</option><option>K+Ug</option></select>, finché non si ferma di nuovo alla stessa altezza $h$ (questa volta dal lato opposto) e il ciclo ricomincia.</li>

</ul>
<div class="tplcz-actions"><button class="tplcz-vbtn" id="pendClozeCheck" type="button">Verifica tutto</button></div>
<div class="tplcz-fb" id="pendClozeFb"></div>
</div>

<script>
(function(){
  var root=document.getElementById('pendCloze');
  if(!root) return;
  function canon(s){
    s=(s||'').toString().toLowerCase().replace(/\$/g,'').replace(/\s+/g,'').replace(/_/g,'').replace(/[{}]/g,'').replace(/\*/g,'');
    var terms=s.split('+').filter(Boolean).sort();
    return terms.join('+');
  }
  function shootConf(el){
    var r=el.getBoundingClientRect?el.getBoundingClientRect():el, cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }
  var checkBtn=document.getElementById('pendClozeCheck');
  var fb=document.getElementById('pendClozeFb');
  checkBtn.addEventListener('click', function(){
    var blanks=root.querySelectorAll('.tplcz-blank');
    var total=blanks.length, correct=0;
    blanks.forEach(function(b){
      var ok=canon(b.value)===canon(b.dataset.ans);
      b.classList.remove('ok','err');
      b.classList.add(ok?'ok':'err');
      if(ok)correct++;
    });
    fb.style.display='block';
    if(correct===total){
      fb.className='tplcz-fb ok';
      fb.innerHTML='&#10003; Tutto corretto! Hai ricostruito perfettamente il ciclo di scambio energetico.';
      shootConf(checkBtn);
      setTimeout(shootFW,500);
    } else {
      fb.className='tplcz-fb err';
      fb.innerHTML='Hai '+correct+' risposte corrette su '+total+'. Controlla i campi evidenziati in rosso e riprova.';
    }
  });
})();
</script>

### Lo yo-yo

Un altro esempio dello stesso fenomeno è uno yo-yo che sale e scende lungo il suo filo, senza mai fermarsi:

{% include yoyo-lab.html %}

Anche qui, prova a descrivere come cambia la sua energia (l'altezza $h$ è misurata rispetto al punto più basso della sua corsa):

<div class="tplcz-widget" id="yoyoCloze">
<ul class="tplcz-list">

<li>Quando lo yo-yo si trova al punto più alto della sua corsa, a un'altezza $h$ rispetto al punto più basso, la sua velocità è nulla: tutta la sua energia meccanica è
<select class="fill-sel tplcz-blank" data-ans="energia potenziale gravitazionale">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia cinetica e potenziale gravitazionale</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="mgh"><option value="">—</option><option>mgh</option><option>K</option><option>Ug</option><option>K+Ug</option></select>.</li>

<li>Scendendo, lo yo-yo converte progressivamente la sua energia potenziale in energia cinetica: $E=$ <select class="fill-sel tplcz-blank" data-ans="K+Ug"><option value="">—</option><option>mgh</option><option>K</option><option>Ug</option><option>K+Ug</option></select>.</li>

<li>Quando lo yo-yo raggiunge il punto più basso della sua corsa, la sua energia meccanica è tutta
<select class="fill-sel tplcz-blank" data-ans="energia cinetica">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia cinetica e potenziale gravitazionale</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="K"><option value="">—</option><option>mgh</option><option>K</option><option>Ug</option><option>K+Ug</option></select>.</li>

<li>Risalendo di nuovo verso l'alto, lo yo-yo rallenta: la sua energia si trasforma gradualmente da
<select class="fill-sel tplcz-blank" data-ans="energia cinetica">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia cinetica e potenziale gravitazionale</option>
</select>
a
<select class="fill-sel tplcz-blank" data-ans="energia potenziale gravitazionale">
<option value="">—</option>
<option>energia cinetica</option>
<option>energia potenziale gravitazionale</option>
<option>energia cinetica e potenziale gravitazionale</option>
</select>, cioè $E=$ <select class="fill-sel tplcz-blank" data-ans="K+Ug"><option value="">—</option><option>mgh</option><option>K</option><option>Ug</option><option>K+Ug</option></select>, finché non si ferma di nuovo all'altezza $h$ e il ciclo ricomincia.</li>

</ul>
<div class="tplcz-actions"><button class="tplcz-vbtn" id="yoyoClozeCheck" type="button">Verifica tutto</button></div>
<div class="tplcz-fb" id="yoyoClozeFb"></div>
</div>

<script>
(function(){
  var root=document.getElementById('yoyoCloze');
  if(!root) return;
  function canon(s){
    s=(s||'').toString().toLowerCase().replace(/\$/g,'').replace(/\s+/g,'').replace(/_/g,'').replace(/[{}]/g,'').replace(/\*/g,'');
    var terms=s.split('+').filter(Boolean).sort();
    return terms.join('+');
  }
  function shootConf(el){
    var r=el.getBoundingClientRect?el.getBoundingClientRect():el, cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }
  var checkBtn=document.getElementById('yoyoClozeCheck');
  var fb=document.getElementById('yoyoClozeFb');
  checkBtn.addEventListener('click', function(){
    var blanks=root.querySelectorAll('.tplcz-blank');
    var total=blanks.length, correct=0;
    blanks.forEach(function(b){
      var ok=canon(b.value)===canon(b.dataset.ans);
      b.classList.remove('ok','err');
      b.classList.add(ok?'ok':'err');
      if(ok)correct++;
    });
    fb.style.display='block';
    if(correct===total){
      fb.className='tplcz-fb ok';
      fb.innerHTML='&#10003; Tutto corretto! Hai ricostruito perfettamente il ciclo di scambio energetico.';
      shootConf(checkBtn);
      setTimeout(shootFW,500);
    } else {
      fb.className='tplcz-fb err';
      fb.innerHTML='Hai '+correct+' risposte corrette su '+total+'. Controlla i campi evidenziati in rosso e riprova.';
    }
  });
})();
</script>





### La velocità di impatto

{% include margin-note.html testo="Dalla caduta di un corpo alla velocità d'impatto" %}
Vediamo ora un'applicazione di quanto abbiamo imparato: la caduta di un corpo di massa $m$ da un'altezza iniziale $h_i$, lasciato cadere da fermo.

Durante la caduta, l'energia potenziale gravitazionale si trasforma via via in energia cinetica:
- all'inizio della caduta, all'altezza $h_i$, tutta l'energia è potenziale e la velocità è ancora nulla, quindi $E=U_g=mgh_i$;
- a metà caduta, una parte dell'energia è ancora potenziale e l'altra parte si è già trasformata in energia cinetica: $E=K+U_g$;
- appena prima dell'impatto, all'altezza $0$, tutta l'energia è ormai cinetica e perciò $E = K = \frac 12 mv_f^2$.

Possiamo usare questa catena di trasformazioni per calcolare la velocità con cui il corpo arriva al suolo. Trascurando l'attrito dell'aria, tutta l'energia potenziale iniziale si trasforma in energia cinetica finale, cioè $U_g=K$:

$$mgh_i = \frac12 mv_f^2.$$

Notiamo che la massa $m$ compare su entrambi i lati e si semplifica (quindi <u markdown="span">**tutti i corpi cadono con la stessa velocità**, indipendentemente dalla loro massa</u>!):

$$gh_i = \frac12 v_f^2.$$

Scambiando i membri e moltiplicando per 2 si ottiene

$$v_f^2 = 2gh_i$$

Ora ci basta prendere la radice quadrata su entrambi i membri per ottenere

$$v_f = \sqrt{2gh_i}.$$


{% include margin-note-end.html %}


{% include box-imp.html testo="Velocità di impatto di un corpo in caduta libera"%}
In assenza di attriti, per la conservazione dell'energia meccanica, un corpo di massa $m$ che cade da un'altezza iniziale $h_i$ impatta il suolo con una velocità pari a 

$$v_f = \sqrt{2gh_i}.$$

{% include box-end.html %}

<div class="iex-widget" id="invCarImpatto">
<p class="iex-lbl">Isola le altre grandezze</p>
<p class="iex-hint">Cerca la sequenza più breve di mosse per isolare ciascuna grandezza.</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="invCarImpattoprev" onclick="invCarImpattonav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="invCarImpattodots"></div>
<button class="iex-navbtn" id="invCarImpattonext" onclick="invCarImpattonav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="invCarImpattorow0">
<div class="iex-nested">
{% include invert.html id="inv-impatto-g" variabili="vf|g|h|due" etichette="v_f|g|h_i|2" sinistra="vf*vf" destra="due*g*h" obiettivo="g" radice_iniziale="1" %}
</div>
</div>

<div class="iex-q" id="invCarImpattorow1" style="display:none">
<div class="iex-nested">
{% include invert.html id="inv-impatto-h" variabili="vf|g|h|due" etichette="v_f|g|h_i|2" sinistra="vf*vf" destra="due*g*h" obiettivo="h" radice_iniziale="1" %}
</div>
</div>

</div>

<script>
setupInvCarousel('invCarImpatto',2);
</script>

<div class="iex-widget" id="iexImpatto">
<p class="iex-lbl">Prova tu!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexImpattoprev" onclick="iexImpattonav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexImpattodots"></div>
<button class="iex-navbtn" id="iexImpattonext" onclick="iexImpattonav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexImpattorow0">
<p class="iex-qt">Su un pianeta alieno con un'accelerazione di gravità di $g\approx 20\ \text{m/s}^2$, un drone da esplorazione precipita da un'altezza di $10\ \text m$. Con quale velocità tocca il suolo?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcImpatto0" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numImpatto0" valore="20" unit="m/s" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexImpattorow1" style="display:none">
<p class="iex-qt">Su una piccola luna ghiacciata, dove $g\approx 4\ \text{m/s}^2$, una sonda rilascia un campione roccioso da un'altezza di $0{,}2\ \text{km}$. Con quale velocità il campione arriva al suolo?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcImpatto1" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numImpatto1" valore="40" unit="m/s" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexImpattorow2" style="display:none">
<p class="iex-qt">Sulla Terra (usa $g\approx 10\ \text{m/s}^2$), una noce di cocco si stacca da una palma e tocca il suolo con una velocità di $30\ \text{m/s}$. Da quale altezza è caduta?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcImpatto2" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numImpatto2" valore="45" unit="m" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

</div>

<script>
(function(){
  var N=3, cur=0, ok=[false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexImpattodots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexImpatto .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexImpattorow'+i).style.display='block';
    cur=i;
    document.getElementById('iexImpattoprev').disabled=(i===0);
    document.getElementById('iexImpattonext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexImpattodots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexImpattonav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  function checkFinale(){
    if(ok.every(function(x){return x;}))setTimeout(shootFW,600);
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }

  // Tutte e tre le domande sono calcoli numerici (num.html), non scelte
  // multiple: ci mettiamo in ascolto del loro evento di completamento.
  for(var i=0;i<N;i++)(function(i){
    var el=document.getElementById('iexImpattorow'+i);
    if(el)el.addEventListener('iex:correct', function(){
      if(!ok[i]){ ok[i]=true; updateDots(); checkFinale(); }
    });
  })(i);
})();
</script>

## I Sistemi non Isolati e la Conservazione dell'Energia Meccanica Totale

{% include box-imp.html testo="Sistemi non isolati" %}
Un sistema si dice <definizione>non isolato</definizione> se scambia energia con una parte del resto dell'Universo.
{% include box-end.html %}

In questo caso, il sistema può **perdere** energia oppure **acquistare** energia, a seconda dei casi. Ad esempio, un corpo in movimento soggetto ad attrito **perde** energia meccanica, mentre un corpo su cui viene applicata una forza fino a produrne uno spostamento **acquista** energia meccanica.   
In ogni caso, <u markdown="span">l'energia **non** può scomparire nel nulla né comparire dal nulla</u>, quindi viene fornita dall'Universo oppure finisce nel resto dell'Universo.

In generale, vale il seguente teorema.

{% include box-thm.html testo="Teorema di Conservazione dell'Energia Meccanica Totale" %}

Un sistema che scambia lavoro con il resto dell'Universo varia la sua energia meccanica secondo la legge

$$
\Delta E=L.
$$

Ci sono quindi tre situazioni:
- se $L>0$, allora $\Delta E>0$ e quindi l'energia meccanica aumenta;
- se $L=0,$ allora $\Delta E=0$ e quindi l'energia è costante;
- se $L<0,$ allora $\Delta E<0$ e quindi l'energia meccanica diminuisce.

{% include box-end.html %}

<div class="fig-block">
<svg viewBox="0 0 360 300" width="100%" style="max-width:300px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Diagramma di Venn: un sistema non isolato dentro l'Universo, con una freccia entrante di lavoro positivo e una uscente di lavoro negativo">
  <defs>
    <radialGradient id="univGradNonIso" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#f5f8ff"/><stop offset="100%" stop-color="#dbeafe"/>
    </radialGradient>
    <radialGradient id="sysGradNonIso" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#fffbeb"/><stop offset="100%" stop-color="#fde68a"/>
    </radialGradient>
    <marker id="lInArrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#15803d"/></marker>
    <marker id="lOutArrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><path d="M0,0.3 L6.6,3.5 L0,6.7 L1.7,3.5 Z" fill="#dc2626"/></marker>
  </defs>
  <circle cx="180" cy="160" r="130" fill="url(#univGradNonIso)" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="180" y="50" text-anchor="middle" font-size="15" font-weight="600" fill="#1e40af">Universo</text>
  <circle cx="180" cy="180" r="62" fill="url(#sysGradNonIso)" stroke="#d97706" stroke-width="1.5"/>
  <text x="180" y="185" text-anchor="middle" font-size="15" font-weight="600" fill="#92400e">Sistema</text>

  <line x1="90" y1="120" x2="140" y2="152" stroke="#15803d" stroke-width="3" marker-end="url(#lInArrow)"/>
  <foreignObject x="42" y="88" width="50" height="26">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:15px;font-weight:600;color:#15803d;">$L>0$</div>
  </foreignObject>

  <line x1="222" y1="212" x2="272" y2="244" stroke="#dc2626" stroke-width="3" marker-end="url(#lOutArrow)"/>
  <foreignObject x="272" y="240" width="50" height="26">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:15px;font-weight:600;color:#dc2626;">$L<0$</div>
  </foreignObject>
</svg>
<figcaption><span class="fig-num" data-fig-id="venn-sistema-non-isolato">Figura</span> — In un sistema non isolato l'energia può entrare (lavoro positivo, $L>0$) o uscire (lavoro negativo, $L<0$) attraversando il confine con il resto dell'Universo.</figcaption>
</div>

Ad esempio, l'attrito compie sempre un lavoro negativo, perciò diminuisce l'energia meccanica, mentre un motore compie sempre un lavoro positivo, perciò aumenta l'energia meccanica.

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qlavene %}[
{"t":"Se su un sistema si compie un lavoro positivo, la sua energia meccanica aumenta.","ok":true,"s":"Sì: per il teorema $\\Delta E = L$, se $L>0$ allora anche $\\Delta E>0$."},
{"t":"L'attrito può, in certi casi, aumentare l'energia meccanica di un sistema.","ok":false,"s":"No: l'attrito compie sempre un lavoro negativo, quindi diminuisce sempre l'energia meccanica, mai il contrario."},
{"t":"Un motore che compie lavoro su un sistema ne diminuisce sempre l'energia meccanica.","ok":false,"s":"No, è vero il contrario: un motore compie lavoro positivo, quindi aumenta l'energia meccanica del sistema."},
{"t":"Se il lavoro totale compiuto su un sistema è nullo, la sua energia meccanica resta costante.","ok":true,"s":"Sì: per $\\Delta E=L$, se $L=0$ allora $\\Delta E=0$, cioè l'energia non cambia."}
]{% endcapture %}
{% include quiz.html domande=_qlavene
   label_si="Un esempio di lavoro che fa aumentare l'energia meccanica"
   label_no="Un esempio di lavoro che la fa diminuire"
   id="q-lavoro-energia" %}
{% include box-end.html %}

### La palla da bowling

Consideriamo l'esempio di una palla da bowling che cade.

{% include bowling-lab.html %}

Inizialmente, come già sappiamo l'energia meccanica è solo potenziale gravitazionale. Man mano che cade, essa si trasforma in energia cinetica.   
Quando però la palla tocca il pavimento, la sua energia potenziale è nulla e dopo pochi istanti vediamo che la palla è ferma, quindi perde anche tutta la sua energia cinetica. Questo significa che la sua energia è stata dissipata.

In effetti, nel momento dell'urto, la palla comprime il pavimento, compiendo quindi un lavoro e cedendo quindi energia al pavimento. Il pavimento riprende presto la sua forma originaria, dissipando l'energia sotto forma di vibrazioni (quindi anch'esso compie un lavoro). Le vibrazioni del pavimento fanno inoltre vibrare l'aria (compiendo un ulteriore lavoro) che giunge fino al nostro timpano e lo fa vibrare (compiendo lavoro). La vibrazione del timpano viene infine convertita in suono.  
(Se attivi l'animazione, infatti, sentirai il rumore della palla che colpisce il suolo).

## La Dissipazione dell'Energia: il Calore

Sappiamo che <u>l'attrito dissipa dell'energia</u>, compiendo un lavoro **negativo** sul corpo. Ad esempio, un corpo che striscia su una superificie orizzontale soggetta ad attrito rallenta fino a fermarsi, perdendo perciò tutta l'energia cinetica che aveva. Dove va a finire questa energia?  
L'energia non è scomparsa — non potrebbe, per il principio di conservazione dell'energia visto all'inizio del capitolo: si è convertita in <definizione>calore</definizione>.

Un esperimento semplice per visualizzare questo concetto è sfregare le proprie mani l'una contro l'altra: l'attrito dissipa l'energia cinetica delle mani e sentiamo che esse si riscaldano. La stessa cosa succede con la punta di un trapano che si riscalda, o con un fiammifero che si accende: in tutti questi casi il lavoro si converte prima in energia cinetica, che a sua volta viene dissipata sotto forma di calore dall'attrito.

{% include img-row.html
   immagini="/corsi/gif/alcaraz-rubbing-hands.webp|/corsi/gif/drill-heating-up.webp|/corsi/gif/fiammifero.webp"
   alt="Sfregamento delle mani che si riscaldano per attrito|Punta di un trapano che si riscalda per attrito|Un fiammifero che si accende per attrito"
   larghezza="170px" %}


Utilizzando questo fatto, puoi spiegare anche un famoso esperimento che circola sul web: si può cuocere un pollo prendendolo a schiaffi?
{% include spoiler.html testo="Mostra la soluzione" %}
Sì. Infatti, ogni schiaffo corrisponde a una forza che provoca una compressione nel pollo, cioè uno spostamento. Se ci sono sia forza sia spostamento, allora c'è lavoro. Il lavoro non viene convertito in energia cinetica né potenziale. Cioè, viene dissipato subito (tramite delle vibrazioni nel pollo) che finiscono per riscaldare il pollo. Più sotto puoi trovare un esercizio che chiede di calcolare il numero di schiaffi necessario.
{% include spoiler-end.html %}

{% include box-imp.html testo="Il calore" %}
L'energia meccanica che viene dissipata si converte in **calore** (simbolo $Q$). Pertanto, anche il calore è una forma di energia e perciò la sua unità di misura è il joule.
{% include box-end.html %}

{% include box-ex.html testo="Verifica Subito!" %}
{% capture _qCalore %}[
{"t":"Il calore è la stessa cosa dell'energia meccanica: sono due nomi per la stessa grandezza.","ok":false,"s":"No: il calore è l'energia meccanica dissipata, cioè quella che un sistema non isolato perde a causa dell'attrito — non è l'energia meccanica del sistema stesso."},
{"t":"Il calore si misura in joule, come tutte le altre forme di energia.","ok":true,"s":"Sì: essendo una forma di energia, condivide la stessa unità di misura del lavoro, dell'energia cinetica e di quella potenziale."},
{"t":"Se un corpo rallenta fino a fermarsi a causa dell'attrito, l'energia cinetica persa si trasforma interamente in calore.","ok":true,"s":"Sì: è proprio il lavoro negativo dell'attrito, dissipato sotto forma di calore."},
{"t":"Più l'attrito è intenso, meno calore viene prodotto a parità di spostamento.","ok":false,"s":"No, è vero il contrario: un attrito più intenso significa una forza d'attrito maggiore, quindi — a parità di spostamento — più lavoro dissipato, cioè più calore."}
]{% endcapture %}
{% include quiz.html domande=_qCalore id="q-calore" senza_esempi="true" %}
{% include box-end.html %}

<div class="iex-widget" id="iexCalore">
<p class="iex-lbl">Prova tu!</p>
<div class="iex-topnav">
<button class="iex-navbtn" id="iexCaloreprev" onclick="iexCalorenav(-1)" disabled>&larr; Prec.</button>
<div class="iex-dots" id="iexCaloredots"></div>
<button class="iex-navbtn" id="iexCalorenext" onclick="iexCalorenav(1)">Succ. &rarr;</button>
</div>

<div class="iex-q" id="iexCalorerow0">
<p class="iex-qt">Un blocco di massa $2\ \text{kg}$ scivola su un pavimento con una velocità di $4\ \text{m/s}$. A causa dell'attrito rallenta fino a fermarsi. Quanto calore si è prodotto?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcCalore0" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numCalore0" valore="16" unit="J" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexCalorerow1" style="display:none">
<p class="iex-qt">Un libro viene trascinato per $3\ \text m$ su un tavolo, mentre l'attrito esercita su di esso una forza di $4\ \text N$ nel verso opposto al moto. Quanto calore viene prodotto?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcCalore1" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numCalore1" valore="12" unit="J" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

<div class="iex-q" id="iexCalorerow2" style="display:none">
<p class="iex-qt">Sfregando le mani, si compie un lavoro di $6\ \text J$ contro un attrito di $30\ \text N$. Per quale distanza si sono mosse le mani?</p>
<div class="calc-flow">
{% include calc-margin.html id="calcCalore2" %}
<div class="calc-flow-body">
<div class="iex-nested">
{% include num.html id="numCalore2" valore="0.2" unit="m" %}
</div>
</div>
<div style="clear:both"></div>
</div>
</div>

</div>

<script>
(function(){
  var N=3, cur=0, ok=[false,false,false];
  function updateDots(){
    var dots=document.querySelectorAll('#iexCaloredots .iex-dot');
    for(var i=0;i<N;i++)dots[i].className='iex-dot'+(i===cur?' cur':'')+(ok[i]?' ok':'');
  }
  function show(i){
    document.querySelectorAll('#iexCalore .iex-q').forEach(function(q){q.style.display='none';});
    document.getElementById('iexCalorerow'+i).style.display='block';
    cur=i;
    document.getElementById('iexCaloreprev').disabled=(i===0);
    document.getElementById('iexCalorenext').disabled=(i===N-1);
    updateDots();
  }
  function buildDots(){
    var c=document.getElementById('iexCaloredots');
    for(var j=0;j<N;j++){
      var d=document.createElement('span');
      d.className='iex-dot'+(j===0?' cur':'');
      d.title='Domanda '+(j+1);
      (function(j){ d.onclick=function(){ show(j); }; })(j);
      c.appendChild(d);
    }
  }
  buildDots();
  window.iexCalorenav=function(d){ if(cur+d>=0 && cur+d<N) show(cur+d); };

  function shootConf(el){
    var r=el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
    var cl=['#7c3aed','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];
    for(var i=0;i<55;i++){
      var p=document.createElement('div'), a=Math.random()*Math.PI*2, sp=4+Math.random()*8;
      p.style.cssText='position:fixed;width:7px;height:7px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';
      document.body.appendChild(p);
      (function(p,vx,vy,x,y){
        var op=1;
        function step(){
          vy+=.28; x+=vx; y+=vy; op-=.016;
          p.style.left=x+'px'; p.style.top=y+'px'; p.style.opacity=op;
          if(op>0)requestAnimationFrame(step); else p.remove();
        }
        requestAnimationFrame(step);
      })(p,Math.cos(a)*sp,Math.sin(a)*sp-5,cx,cy);
    }
  }

  function checkFinale(){
    if(ok.every(function(x){return x;}))setTimeout(shootFW,600);
  }
  function shootFW(){
    for(var b=0;b<7;b++)(function(b){setTimeout(function(){
      shootConf({getBoundingClientRect:function(){return{left:window.innerWidth*(.15+Math.random()*.7),top:window.innerHeight*(.05+Math.random()*.55),width:0,height:0};}});
    },b*270);})(b);
  }

  // Tutte e tre le domande sono calcoli numerici (num.html), non scelte
  // multiple: ci mettiamo in ascolto del loro evento di completamento.
  for(var i=0;i<N;i++)(function(i){
    var el=document.getElementById('iexCalorerow'+i);
    if(el)el.addEventListener('iex:correct', function(){
      if(!ok[i]){ ok[i]=true; updateDots(); checkFinale(); }
    });
  })(i);
})();
</script>

Prova tu stesso a esplorare la conservazione — e la dissipazione — dell'energia meccanica con questa simulazione:

{% include phet-sim.html id="energy-skate-park"
   src="https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_all.html"
   didascalia="Simulazione PhET: fai scorrere lo skater lungo la pista e osserva come l'energia potenziale si trasforma in energia cinetica (e viceversa). Prova ad attivare l'attrito, e osserva come parte dell'energia si trasforma in calore."
   altezza="550px" %}


# Esercizi di Riepilogo

### Mettiti alla prova: ripasso veloce

Prima di affrontare gli esercizi veri e propri, un ripasso rapido su tutto il capitolo.

{% include ex.html diff=1 %}
Vero o falso?

{% capture _qRipEnergia %}[
{"t":"Se una forza è perpendicolare allo spostamento del corpo su cui agisce, il lavoro che compie è nullo.","ok":true,"s":"Sì: nella formula del lavoro conta solo la componente della forza lungo lo spostamento, e una forza perpendicolare non ne ha nessuna."},
{"t":"L'energia cinetica è direttamente proporzionale alla velocità del corpo.","ok":false,"s":"No: $K=\\frac12mv^2$ è proporzionale al quadrato della velocità, non alla velocità stessa."},
{"t":"L'attrito può, in certi casi, far aumentare l'energia meccanica di un sistema.","ok":false,"s":"No: l'attrito compie sempre un lavoro negativo, quindi diminuisce sempre l'energia meccanica."},
{"t":"In un sistema isolato, l'energia meccanica totale resta costante nel tempo.","ok":true,"s":"Sì, è proprio il teorema di conservazione dell'energia meccanica: $K_i+U_i=K_f+U_f$."},
{"t":"Un corpo fermo non può avere energia meccanica.","ok":false,"s":"No: un corpo fermo può comunque possedere energia potenziale (ad esempio se è sollevato da terra), quindi un'energia meccanica non nulla."},
{"t":"Il calore è una forma di energia, e si misura anch'esso in joule.","ok":true,"s":"Sì: il calore è l'energia meccanica dissipata, quindi condivide la stessa unità di misura di tutte le energie, il joule."}
]{% endcapture %}
{% include quiz.html domande=_qRipEnergia id="q-ripasso-energia" senza_esempi="true" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Abbina ogni grandezza alla formula corrispondente.

{% capture _matchEnergia %}[
  {"l":"Lavoro","r":"$L=F\\cdot\\Delta s$"},
  {"l":"Energia cinetica","r":"$K=\\frac12mv^2$"},
  {"l":"Energia potenziale gravitazionale","r":"$U_g=mgh$"},
  {"l":"Energia meccanica","r":"$E=K+U$"},
  {"l":"Velocità di impatto al suolo (caduta libera)","r":"$v_f=\\sqrt{2gh_i}$"}
]{% endcapture %}
{% include match.html id="match-formule-energia" dati=_matchEnergia col1="Grandezza" col3="Formula" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Classifica ciascuna situazione.

{% capture _sortIsolati %}[
  {"t":"Un pendolo che oscilla nel vuoto, senza attrito","c":0},
  {"t":"Una palla che rotola su un prato, rallentando per attrito","c":1},
  {"t":"Un satellite in orbita, lontano da ogni attrito","c":0},
  {"t":"Una massa che scivola lungo un piano inclinato perfettamente liscio","c":0},
  {"t":"Un bambino spinto da un adulto su un'altalena","c":1}
]{% endcapture %}
{% include sort.html id="sort-isolato-nonisolato" dati=_sortIsolati col0="Sistema isolato" col1="Sistema non isolato" %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Completa le frasi.

{% include fill.html prima="Se il lavoro totale compiuto su un corpo è positivo, la sua energia cinetica" tipo="drop" opts="aumenta|diminuisce|resta invariata" ok="aumenta" dopo="." s="Per il teorema dell'energia cinetica, $L=\Delta K$: se $L>0$ allora anche $\Delta K>0$." %}

{% include fill.html prima="Un sistema che non scambia energia con il resto dell'Universo si dice" ok="isolato,isolata" dopo="." s="Un sistema isolato conserva la propria energia meccanica nel tempo." %}

{% include fill.html prima="L'energia meccanica dissipata da un sistema non isolato (ad esempio a causa dell'attrito) si trasforma in" ok="calore" dopo="." s="Il calore è proprio la forma in cui finisce l'energia meccanica non conservata." %}
{% include ex-end.html %}

{% include ex.html diff=1 %}
Vero o falso?

{% include tf.html q="Il lavoro compiuto da una forza dipende solo dalla componente della forza lungo lo spostamento." ok=true s="Esatto: le componenti perpendicolari allo spostamento non contribuiscono al lavoro." %}
{% include tf.html q="Raddoppiando la velocità di un corpo, a parità di massa, la sua energia cinetica raddoppia." ok=false s="No: l'energia cinetica è proporzionale al quadrato della velocità, quindi raddoppiando $v$, $K$ quadruplica." %}
{% include ex-end.html %}

### Esercizi sulla formula del lavoro


{% include ex.html diff=1 %}
Trascina ciascuna situazione nella colonna corrispondente.

<div class="sort-widget" id="sw-sortLavSeg">
<p class="sort-hint">Trascina ogni voce nella colonna appropriata.</p>
<div class="sort-pool" id="sp-sortLavSeg"></div>
<div class="sort-table sortls-table3">
<div class="sort-zone">
<div class="sort-zone-hdr">$L>0$</div>
<div class="sort-zone-body" id="szb-sortLavSeg-0" data-cat="0"></div>
</div>
<div class="sort-zone">
<div class="sort-zone-hdr">$L<0$</div>
<div class="sort-zone-body" id="szb-sortLavSeg-1" data-cat="1"></div>
</div>
<div class="sort-zone">
<div class="sort-zone-hdr">$L=0$</div>
<div class="sort-zone-body" id="szb-sortLavSeg-2" data-cat="2"></div>
</div>
</div>
<div class="sort-ctrl">
<button class="sort-vbtn" id="sv-sortLavSeg">✓ Verifica</button>
<button class="sort-rbtn" id="sr-sortLavSeg">↺ Ricomincia</button>
</div>
<div class="sort-fb" id="sf-sortLavSeg"></div>
</div>

<style>
.sortls-table3 { grid-template-columns: 1fr 1fr 1fr !important; }
@media (max-width: 640px) { .sortls-table3 { grid-template-columns: 1fr !important; } }
#sw-sortLavSeg .sort-item { display: inline-block; white-space: normal; text-align: center; }
</style>

<script>
(function(){
var D=[
  {"t":"Forza e spostamento hanno lo stesso verso","c":0},
  {"t":"Forza e spostamento hanno verso opposto","c":1},
  {"t":"Forza e spostamento sono perpendicolari","c":2}
];
var ID='sortLavSeg';
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=0|Math.random()*(i+1),t=a[i];a[i]=a[j];a[j]=t;}return a;}
var pool=document.getElementById('sp-'+ID);
var zones={0:document.getElementById('szb-'+ID+'-0'),1:document.getElementById('szb-'+ID+'-1'),2:document.getElementById('szb-'+ID+'-2')};
var fb=document.getElementById('sf-'+ID);
var dragging=null,ghost=null,overZone=null,ox=0,oy=0;

function getZone(x,y){ghost.style.display='none';var el=document.elementFromPoint(x,y);ghost.style.display='';return el?el.closest('.sort-zone-body,.sort-pool'):null;}

function onDown(e){
  e.preventDefault();
  var el=this;
  dragging=el;
  var r=el.getBoundingClientRect();
  ox=e.clientX-r.left;oy=e.clientY-r.top;
  ghost=el.cloneNode(true);
  ghost.className='sort-item sort-ghost';
  ghost.style.cssText+='width:'+r.width+'px;left:'+(e.clientX-ox)+'px;top:'+(e.clientY-oy)+'px;';
  document.body.appendChild(ghost);
  el.classList.add('sort-dragging');
  fb.className='sort-fb';fb.textContent='';
  el.querySelectorAll('.correct,.wrong').forEach(function(x){x.classList.remove('correct','wrong');});
  el.classList.remove('correct','wrong');
  document.addEventListener('pointermove',onMove,{passive:false});
  document.addEventListener('pointerup',onUp);
  document.addEventListener('pointercancel',onUp);
}

function onMove(e){
  e.preventDefault();
  if(!ghost)return;
  ghost.style.left=(e.clientX-ox)+'px';ghost.style.top=(e.clientY-oy)+'px';
  var z=getZone(e.clientX,e.clientY);
  if(overZone!==z){if(overZone)overZone.classList.remove('over');overZone=z;if(overZone)overZone.classList.add('over');}
}

function onUp(){
  document.removeEventListener('pointermove',onMove);
  document.removeEventListener('pointerup',onUp);
  document.removeEventListener('pointercancel',onUp);
  if(ghost){ghost.remove();ghost=null;}
  if(!dragging)return;
  var el=dragging;dragging=null;
  el.classList.remove('sort-dragging');
  if(overZone){overZone.classList.remove('over');overZone.appendChild(el);overZone=null;}
}

function mkItem(d){
  var el=document.createElement('span');
  el.className='sort-item';el.textContent=d.t;
  el.dataset.c=d.c;el.style.touchAction='none';
  el.addEventListener('pointerdown',onDown);
  return el;
}

function render(){
  pool.innerHTML='';zones[0].innerHTML='';zones[1].innerHTML='';zones[2].innerHTML='';
  fb.className='sort-fb';fb.textContent='';
  shuf(D).forEach(function(d){pool.appendChild(mkItem(d));});
}

window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};

document.getElementById('sv-'+ID).addEventListener('click',function(){
  if(pool.querySelector('.sort-item')){fb.className='sort-fb err';fb.textContent='Posiziona tutti gli elementi prima di verificare.';return;}
  var allOk=true;
  [0,1,2].forEach(function(ci){
    zones[ci].querySelectorAll('.sort-item').forEach(function(el){
      var ok=parseInt(el.dataset.c)===ci;
      el.classList.toggle('correct',ok);el.classList.toggle('wrong',!ok);
      if(!ok)allOk=false;
    });
  });
  var btn=document.getElementById('sv-'+ID);
  if(allOk){
    fb.className='sort-fb ok';fb.textContent='✓ Perfetto! Tutte le situazioni sono nella colonna giusta.';
    _shoot(btn);
    for(var b=0;b<5;b++)(function(b){setTimeout(function(){_shoot({getBoundingClientRect:function(){return{left:window.innerWidth*(.1+Math.random()*.8),top:window.innerHeight*(.1+Math.random()*.5),width:0,height:0};}});},b*200);})(b);
  } else {
    fb.className='sort-fb err';fb.textContent='✗ Alcune situazioni non sono nella colonna giusta. Quelle corrette sono in verde, le altre in rosso.';
  }
});

document.getElementById('sr-'+ID).addEventListener('click',render);
render();
if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([document.getElementById('sw-sortLavSeg')]);
})();
</script>
{% include ex-end.html %}

{% include ex.html diff=1 %}
Un'automobile traina un carrello che pesa $2\,500\ \text N$ con una forza pari a $20\ \text N$ per una distanza di $8\ \text{km}$ lungo una strada dritta ed orizzontale. Qual è il lavoro eseguito dall'auto per tirare il carrello?

*(Fonte: Giochi di Anacleto, 2022)*

<div class="iex-choices" id="mcqEx2choices">
<button class="iex-choice-btn" data-v="a">A. $160\ \text J$</button>
<button class="iex-choice-btn" data-v="b">B. $20\,000\ \text J$</button>
<button class="iex-choice-btn" data-v="c">C. $160\,000\ \text J$</button>
<button class="iex-choice-btn" data-v="d">D. $20\,000\,000\ \text J$</button>
</div>
<div class="iex-fb" id="mcqEx2fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx2choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx2fb');
  var correctV='c';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx2choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Il peso del carrello ($2\,500\ \text N$) non serve a calcolare il lavoro: conta solo la forza effettivamente applicata lungo lo spostamento, cioè $F=20\ \text N$. Convertendo $8\ \text{km}=8\,000\ \text m$,

$$L = F\cdot \Delta s = 20\ \text N \times 8\,000\ \text m = 160\,000\ \text J.$$

La risposta corretta è **C**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Qual è l'altezza da cui cade un corpo dal peso di $2\ \text N$ sapendo che il lavoro compiuto dalla forza di gravità è pari a $2\ \text J$?

*(Fonte: Test di ammissione a Professioni Sanitarie, 2019)*

<div class="iex-choices" id="mcqEx3choices">
<button class="iex-choice-btn" data-v="a">A. $1\ \text m$</button>
<button class="iex-choice-btn" data-v="b">B. $2\ \text m$</button>
<button class="iex-choice-btn" data-v="c">C. $10\ \text m$</button>
<button class="iex-choice-btn" data-v="d">D. $20\ \text m$</button>
<button class="iex-choice-btn" data-v="e">E. $0{,}5\ \text m$</button>
</div>
<div class="iex-fb" id="mcqEx3fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx3choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx3fb');
  var correctV='a';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx3choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Il peso è già la forza di gravità: $F_{peso}=2\ \text N$. Durante la caduta, forza e spostamento hanno lo stesso verso (entrambi verso il basso), quindi

$$L = F_{peso}\cdot h \quad \implies \quad h = \frac{L}{F_{peso}} = \frac{2\ \text J}{2\ \text N} = 1\ \text m.$$

La risposta corretta è **A**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un uomo tenta di spingere la sua auto. Spingendo al massimo, esercita una forza di $10^3\ \text N$, ma non riesce a spostarla. Qual è il lavoro compiuto?

<div class="iex-choices" id="mcqEx4choices">
<button class="iex-choice-btn" data-v="a">A. $10^3\ \text J$</button>
<button class="iex-choice-btn" data-v="b">B. $0$</button>
<button class="iex-choice-btn" data-v="c">C. $10^4\ \text J$</button>
<button class="iex-choice-btn" data-v="d">D. Non è possibile rispondere perché mancano alcuni dati.</button>
</div>
<div class="iex-fb" id="mcqEx4fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx4choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx4fb');
  var correctV='b';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx4choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Anche se l'uomo applica una forza, l'automobile non si sposta: lo spostamento è nullo, $\Delta s=0$. Quindi

$$L = F\cdot \Delta s = 10^3\ \text N \times 0 = 0.$$

La risposta corretta è **B**. (È lo stesso motivo per cui, spingendo un muro, non compi lavoro anche se ti stanchi!)
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
L'attrito esercita una forza costante di $100\ \text N$ su un corpo che scivola per $10\ \text m$. Qual è il lavoro compiuto dall'attrito?

<div class="iex-choices" id="mcqEx5choices">
<button class="iex-choice-btn" data-v="a">A. $1\,000\ \text J$</button>
<button class="iex-choice-btn" data-v="b">B. $100\ \text J$</button>
<button class="iex-choice-btn" data-v="c">C. $10\ \text J$</button>
<button class="iex-choice-btn" data-v="d">D. $-1\,000\ \text J$</button>
</div>
<div class="iex-fb" id="mcqEx5fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx5choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx5fb');
  var correctV='d';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx5choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
L'attrito si oppone sempre al moto: forza e spostamento hanno verso opposto, quindi il lavoro è negativo.

$$L = -F\cdot \Delta s = -100\ \text N \times 10\ \text m = -1\,000\ \text J.$$

La risposta corretta è **D**.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Calcola il lavoro compiuto da una forza di $4\times10^2\ \text N$ per spingere un corpo per una lunghezza di $3\ \text{km}$ lungo una direzione parallela alla forza stessa. Esprimi il risultato in joule, in notazione scientifica.

{% include sci.html prima="$L=$" coeff="1.2" exp="6" s="$1{,}2\times10^6\ \text J$" %}

{% include ex-sol.html %}
Convertendo $3\ \text{km}=3\,000\ \text m$, e poiché la forza è parallela allo spostamento,

$$L = F\cdot \Delta s = 4\times10^2\ \text N \times 3\,000\ \text m = 1{,}2\times10^6\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Chi compie più lavoro tra Alice, che spinge con una forza di $300\ \text N$ per $50\ \text m$, e Bob, che spinge con una forza di $150\ \text N$ per $99{,}9\ \text m$?

<div class="iex-choices" id="mcqEx7choices">
<button class="iex-choice-btn" data-v="alice">Alice</button>
<button class="iex-choice-btn" data-v="bob">Bob</button>
<button class="iex-choice-btn" data-v="uguali">Uguali</button>
</div>
<div class="iex-fb" id="mcqEx7fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqEx7choices .iex-choice-btn');
  var fb=document.getElementById('mcqEx7fb');
  var correctV='alice';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqEx7choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Calcoliamo entrambi i lavori:

$$L_{Alice} = 300\ \text N \times 50\ \text m = 15\,000\ \text J,$$

$$L_{Bob} = 150\ \text N \times 99{,}9\ \text m = 14\,985\ \text J.$$

Anche se Bob spinge per una distanza quasi doppia, la forza di Alice è più che doppia rispetto a quella di Bob: **Alice** compie più lavoro (anche se di poco).
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Calcola il lavoro compiuto dall'attrito radente su di un corpo di massa $20\ \text{kg}$ che scivola per dieci metri su una superficie orizzontale con coefficiente di attrito $\mu = 0{,}3$ (usa $g\approx 9{,}8\ \text{m/s}^2$). Esprimi il risultato in joule. *(Indizio: ricorda che la formula dell'attrito corrisponde a $F_{\text{att}} = \mu F_\perp$.)*

{% include num.html id="numAttritoRadente" valore="-588" unit="J" %}

{% include ex-sol.html %}
Su una superficie orizzontale, la forza perpendicolare $F_\perp$ è semplicemente il peso del corpo, $F_\perp = mg$. Quindi la forza di attrito vale

$$F_{\text{att}} = \mu F_\perp = \mu m g = 0{,}3 \times 20\ \text{kg} \times 9{,}8\ \text{m/s}^2 = 58{,}8\ \text N.$$

L'attrito si oppone sempre al moto, quindi il lavoro è negativo: **non dimenticare il meno!**

$$L = -F_{\text{att}}\cdot \Delta s = -58{,}8\ \text N \times 10\ \text m = -588\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Calcola il lavoro esercitato dalla forza peso su di un corpo di massa $1\ \text{kg}$ che scivola orizzontalmente su una superficie per $50\ \text m$.

{% include ex-sol.html %}
La forza peso è sempre verticale, diretta verso il basso; lo spostamento, invece, è orizzontale. Forza e spostamento sono quindi **perpendicolari**, perciò il lavoro della forza peso è nullo:

$$L = 0\ \text J,$$

indipendentemente dalla massa del corpo o dalla distanza percorsa (che infatti non servono per rispondere).
{% include ex-sol-end.html %}


{% include ex.html diff=2 %}
In un'officina, per spostare una cassa di attrezzi lungo $15\ \text m$ di pavimento viene compiuto un lavoro di $450\ \text J$. Supponendo che la forza sia parallela allo spostamento, quanto vale la forza applicata?

{% include num.html id="numFE1" valore="30" unit="N" %}

{% include ex-sol.html %}
$$F = \frac{L}{\Delta s} = \frac{450\ \text J}{15\ \text m} = 30\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
In un magazzino, un carrello elevatore spinge una scatola con una forza di $50\ \text N$, parallela allo spostamento, compiendo un lavoro di $750\ \text J$. Di quanti metri si è spostata la scatola?

{% include num.html id="numSE1" valore="15" unit="m" %}

{% include ex-sol.html %}
$$\Delta s = \frac{L}{F} = \frac{750\ \text J}{50\ \text N} = 15\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Andrea cala un secchio pieno di acqua nel pozzo. Sapendo che la massa del secchio pieno corrisponde a $15\ \text{kg}$ e che è stato calato per $10\ \text m$ a velocità costante, trova il lavoro svolto da Andrea. Esprimi il risultato in joule, in notazione scientifica. (Usa $g\approx 10\ \text{m/s}^2$.)

{% include sci.html prima="$L=$" coeff="-1.5" exp="3" s="$-1{,}5\times10^3\ \text J$" %}

{% include ex-sol.html %}
Poiché il secchio scende a velocità costante, la forza che Andrea esercita con la corda (verso l'alto, per trattenerlo) deve avere lo stesso modulo del peso del secchio:

$$F_{Andrea} = mg = 15\ \text{kg}\times 10\ \text{m/s}^2 = 150\ \text N.$$

Questa forza è diretta verso l'**alto**, mentre lo spostamento del secchio è verso il **basso**: sono opposti, quindi il lavoro di Andrea è negativo.

$$L = -F_{Andrea}\cdot \Delta s = -150\ \text N \times 10\ \text m = -1\,500\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un rimorchiatore traina una nave lungo un canale per $800\ \text m$, compiendo un lavoro di $2{,}4\times10^6\ \text J$. Quale forza (costante, parallela allo spostamento) ha applicato? Esprimi il risultato in newton, in notazione scientifica.

{% include sci.html prima="$F=$" coeff="3" exp="3" s="$3\times10^3\ \text N$" %}

{% include ex-sol.html %}
$$F = \frac{L}{\Delta s} = \frac{2{,}4\times10^6\ \text J}{800\ \text m} = 3\times10^3\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un trattore applica una forza costante di $800\ \text N$, parallela allo spostamento, e compie un lavoro di $4\times10^5\ \text J$ per trainare un carico lungo un campo. Per quanti metri lo ha trainato?

{% include num.html id="numTrattore" valore="500" unit="m" %}

{% include ex-sol.html %}
$$\Delta s = \frac{L}{F} = \frac{4\times10^5\ \text J}{800\ \text N} = 5\times10^2\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Quando esegue un servizio, una tennista lancia la palla (di massa $60\ \text g$) verso l'alto, facendola salire di $1\ \text m$. Trova il lavoro compiuto dalla forza peso. Esprimi il risultato in joule. (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numPallina" valore="-0.6" unit="J" %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $60\ \text g = 0{,}06\ \text{kg}$. La forza peso vale

$$F_{peso} = mg = 0{,}06\ \text{kg}\times 10\ \text{m/s}^2 = 0{,}6\ \text N.$$

La palla sale, quindi lo spostamento è verso l'**alto**, mentre la forza peso è sempre diretta verso il **basso**: sono opposti, quindi il lavoro è negativo. **Attenzione al segno meno!**

$$L = -F_{peso}\cdot \Delta s = -0{,}6\ \text N \times 1\ \text m = -0{,}6\ \text J = -6\times10^{-1}\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
L'attrito frena una slitta che scivola in linea retta per $25\ \text m$, compiendo su di essa un lavoro di $-125\ \text J$. Quanto vale il **modulo** della forza di attrito?

{% include num.html id="numFE3" valore="5" unit="N" %}

{% include ex-sol.html %}
L'attrito si oppone al moto, quindi il lavoro è negativo: $L=-F\cdot\Delta s$. Il modulo della forza, però, non può mai essere negativo:

$$F = \frac{|L|}{\Delta s} = \frac{125\ \text J}{25\ \text m} = 5\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
L'attrito, con una forza costante di $30\ \text N$, compie un lavoro di $-180\ \text J$ su un oggetto che scivola in linea retta. Per quanti metri si è spostato l'oggetto?

{% include num.html id="numSE3" valore="6" unit="m" %}

{% include ex-sol.html %}
Anche lo spostamento $\Delta s$ non può mai essere negativo, quindi usiamo il valore assoluto del lavoro:

$$\Delta s = \frac{|L|}{F} = \frac{180\ \text J}{30\ \text N} = 6\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una gatta di massa $4\ \text{kg}$ trasporta uno dei suoi cuccioli, di massa $0{,}5\ \text{kg}$, per la collottola. Nel primo tratto accelera con un'accelerazione di $0{,}5\ \text{m/s}^2$, per $4\ \text m$. Poi procede con velocità costante per $6\ \text m$. Qual è il lavoro totale? Esprimi il risultato in joule.

{% include figura.html id="mamma-gatta"
   src="/corsi/immagini/mamma-gatta.jpeg"
   didascalia="Una gatta trasporta il proprio cucciolo per la collottola."
   larghezza="320px" %}

{% include num.html id="numGattaCucciolo" valore="1" unit="J" %}

{% include ex-sol.html %}
La massa della gatta ($4\ \text{kg}$) non serve: quello che conta è la forza che la gatta esercita **sul cucciolo** per trasportarlo, che dipende solo dalla massa del cucciolo.

**Primo tratto (accelerato).** Per il secondo principio della dinamica, la forza netta sul cucciolo è

$$F_1 = m_{cucciolo}\cdot a = 0{,}5\ \text{kg}\times 0{,}5\ \text{m/s}^2 = 0{,}25\ \text N,$$

che compie un lavoro

$$L_1 = F_1\cdot \Delta s_1 = 0{,}25\ \text N \times 4\ \text m = 1\ \text J.$$

**Secondo tratto (velocità costante).** Se la velocità è costante, l'accelerazione è nulla: per il secondo principio della dinamica, anche la forza netta necessaria è nulla, quindi

$$L_2 = 0\ \text J.$$

**Totale.**

$$L = L_1+L_2 = 1\ \text J + 0\ \text J = 1\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un facchino trascina un baule per $5\ \text{km}$ lungo un lunghissimo corridoio, compiendo un lavoro di $30\,000\ \text J$. Con quale forza (costante, parallela allo spostamento) lo ha trascinato?

{% include num.html id="numFE4" valore="6" unit="N" %}

{% include ex-sol.html %}
Convertendo $5\ \text{km}=5\,000\ \text m$,

$$F = \frac{L}{\Delta s} = \frac{30\,000\ \text J}{5\,000\ \text m} = 6\ \text N.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una forza costante di $2\,000\ \text N$, parallela allo spostamento, compie un lavoro di $5\times10^6\ \text J$ spingendo un'automobile lungo un rettilineo. Per quanti metri si è spostata l'automobile? Esprimi il risultato in metri, in notazione scientifica.

{% include sci.html prima="$\Delta s=$" coeff="2.5" exp="3" s="$2{,}5\times10^3\ \text m$" %}

{% include ex-sol.html %}
$$\Delta s = \frac{L}{F} = \frac{5\times10^6\ \text J}{2\,000\ \text N} = 2{,}5\times10^3\ \text m.$$
{% include ex-sol-end.html %}

### Esercizi sul teorema dell'energia cinetica


{% include ex.html diff=1 %}
In quale di queste situazioni l'energia cinetica di un ciclista **aumenta**?

<div class="iex-choices" id="mcqKE1choices">
<button class="iex-choice-btn" data-v="a">Il ciclista frena</button>
<button class="iex-choice-btn" data-v="b">Il ciclista pedala accelerando</button>
<button class="iex-choice-btn" data-v="c">Il ciclista procede a velocità costante su un rettilineo</button>
<button class="iex-choice-btn" data-v="d">Il ciclista sale in salita mantenendo la velocità costante</button>
</div>
<div class="iex-fb" id="mcqKE1fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqKE1choices .iex-choice-btn');
  var fb=document.getElementById('mcqKE1fb');
  var correctV='b';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqKE1choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
L'energia cinetica cambia solo se cambia la velocità. Pedalando e accelerando, il ciclista aumenta la sua velocità, quindi la sua energia cinetica aumenta. Negli altri tre casi la velocità resta costante (o diminuisce, se frena): l'energia cinetica non aumenta.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Il lavoro totale compiuto su un corpo è negativo. Cosa possiamo concludere sulla sua energia cinetica?

<div class="iex-choices" id="mcqKE2choices">
<button class="iex-choice-btn" data-v="a">È aumentata</button>
<button class="iex-choice-btn" data-v="b">È diminuita</button>
<button class="iex-choice-btn" data-v="c">È rimasta invariata</button>
<button class="iex-choice-btn" data-v="d">È diventata negativa</button>
</div>
<div class="iex-fb" id="mcqKE2fb"></div>
<script>
(function(){
  var btns=document.querySelectorAll('#mcqKE2choices .iex-choice-btn');
  var fb=document.getElementById('mcqKE2fb');
  var correctV='b';
  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};
  btns.forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.disabled)return;
      btns.forEach(function(b){b.disabled=true;});
      var correct=btn.dataset.v===correctV;
      fb.style.display='block';
      if(correct){
        btn.className=btn.className.replace(' wrong','')+' correct';
        fb.className='iex-fb ok'; fb.innerHTML='&#10003; Esatto!';
        _shoot(btn);
      } else {
        btn.className=btn.className.replace(' correct','')+' wrong';
        var cb=document.querySelector('#mcqKE2choices .iex-choice-btn[data-v="'+correctV+'"]');
        cb.className=cb.className.replace(' wrong','')+' correct';
        fb.className='iex-fb err'; fb.innerHTML='Non è corretto. Riprova.';
      }
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([fb]);
    });
  });
})();
</script>

{% include ex-sol.html %}
Per il teorema dell'energia cinetica, $L=\Delta K$. Se $L<0$, allora $\Delta K<0$: l'energia cinetica **diminuisce**. Attenzione: l'energia cinetica $K=\frac12 mv^2$ non può mai diventare negativa (è sempre $\ge 0$), può solo avvicinarsi a zero.
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un pallone da calcio di massa $450\ \text g$ viaggia a una velocità di $20\ \text{m/s}$. Quanta energia cinetica possiede?

{% include num.html id="numKE3" valore="90" unit="J" %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $450\ \text g=0{,}45\ \text{kg}$.

$$K = \frac12 mv^2 = \frac12 \times 0{,}45\ \text{kg}\times (20\ \text{m/s})^2 = 90\ \text J.$$
{% include ex-sol-end.html %}


{% include ex.html diff=2 %}
Un'automobile di massa $1\,200\ \text{kg}$ viaggia a una velocità di $72\ \text{km/h}$. Quanta energia cinetica possiede? Esprimi il risultato in joule, in notazione scientifica.

{% include sci.html prima="$K=$" coeff="2.4" exp="5" s="$2{,}4\times10^5\ \text J$" %}

{% include ex-sol.html %}
Convertendo la velocità in $\text{m/s}$:

$$72\ \text{km/h} = \frac{72}{3{,}6}\ \text{m/s} = 20\ \text{m/s}.$$

Quindi

$$K = \frac12 mv^2 = \frac12 \times 1\,200\ \text{kg}\times (20\ \text{m/s})^2 = 2{,}4\times10^5\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un cane insegue una pallina correndo a $8\ \text{m/s}$ (quasi $29\ \text{km/h}$!), con un'energia cinetica di $256\ \text J$. Qual è la sua massa?

{% include num.html id="numKE5" valore="8" unit="kg" %}

{% include ex-sol.html %}
Isoliamo $m$ nella formula $K=\frac12 mv^2$:

$$m = \frac{2K}{v^2} = \frac{2\times256\ \text J}{(8\ \text{m/s})^2} = \frac{512}{64} = 8\ \text{kg}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Una palla da bowling di massa $5\ \text{kg}$ rotola lungo la corsia con un'energia cinetica di $90\ \text J$. A quale velocità si sta muovendo?

{% include num.html id="numKE6" valore="6" unit="m/s" %}

{% include ex-sol.html %}
Isoliamo $v$ nella formula $K=\frac12 mv^2$ (attenzione: qui serve una radice quadrata!):

$$v = \sqrt{\frac{2K}{m}} = \sqrt{\frac{2\times90\ \text J}{5\ \text{kg}}} = \sqrt{36} = 6\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un proiettile di massa $10\ \text g$ possiede un'energia cinetica di $1\,250\ \text J$. A quale velocità viaggia? Esprimi il risultato in km/h.

{% include num.html id="numKE7" valore="1800" unit="km/h" %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $10\ \text g=0{,}01\ \text{kg}$. Isoliamo $v$:

$$v = \sqrt{\frac{2K}{m}} = \sqrt{\frac{2\times1\,250\ \text J}{0{,}01\ \text{kg}}} = \sqrt{250\,000} = 500\ \text{m/s}.$$

Convertendo in $\text{km/h}$:

$$v = 500\ \text{m/s}\times 3{,}6 = 1\,800\ \text{km/h}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un'automobile di massa $1\,000\ \text{kg}$ accelera da $10\ \text{m/s}$ a $30\ \text{m/s}$. Quanto lavoro (totale) è stato compiuto sull'automobile? Esprimi il risultato in joule, in notazione scientifica.

{% include sci.html prima="$L=$" coeff="4" exp="5" s="$4\times10^5\ \text J$" %}

{% include ex-sol.html %}
Per il teorema dell'energia cinetica, $L=\Delta K = K_f - K_i$:

$$L = \frac12 m v_f^2 - \frac12 m v_i^2 = \frac12\times1\,000\ \text{kg}\times\left[(30\ \text{m/s})^2 - (10\ \text{m/s})^2\right] = \frac12\times1\,000\times800 = 4\times10^5\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Marco lancia una palla da fermo, di massa $200\ \text g$, facendole raggiungere una velocità di $15\ \text{m/s}$. Quanto lavoro ha compiuto Marco sulla palla?

{% include num.html id="numKE9" valore="22.5" unit="J" %}

{% include ex-sol.html %}
La palla parte da ferma, quindi $v_i=0$ e $K_i=0$. Convertendo la massa, $200\ \text g=0{,}2\ \text{kg}$. Per il teorema dell'energia cinetica,

$$L = \Delta K = K_f - K_i = \frac12 m v_f^2 - 0 = \frac12\times0{,}2\ \text{kg}\times(15\ \text{m/s})^2 = 22{,}5\ \text J.$$
{% include ex-sol-end.html %}

### Esercizi sull'energia potenziale


{% include ex.html diff=1 %}
Un libro di massa $2\ \text{kg}$ viene posto su uno scaffale a $5\ \text m$ di altezza. Quanta energia potenziale gravitazionale possiede rispetto al pavimento? (Usa $g\approx 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numB1" valore="98" unit="J" %}

{% include ex-sol.html %}
$$U_g = mgh = 2\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 5\ \text m = 98\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Una mela di massa $500\ \text g$ pende da un ramo a $4\ \text m$ di altezza dal suolo. Quanta energia potenziale gravitazionale possiede? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numB2" valore="20" unit="J" %}

{% include ex-sol.html %}
Convertendo la massa in chilogrammi, $500\ \text g=0{,}5\ \text{kg}$.

$$U_g = mgh = 0{,}5\ \text{kg}\times 10\ \text{m/s}^2\times 4\ \text m = 20\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Durante un trasloco, uno scatolone di libri di massa $10\ \text{kg}$ viene sistemato su uno scaffale a $1{,}5\ \text m$ di altezza. Quanta energia potenziale gravitazionale possiede? (Usa $g\approx 9{,}8\ \text{m/s}^2$.)

{% include num.html id="numB3" valore="147" unit="J" %}

{% include ex-sol.html %}
$$U_g = mgh = 10\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 1{,}5\ \text m = 147\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Un telefono di massa $200\ \text g$ cade da un tavolo alto $50\ \text{cm}$. Quanta energia potenziale gravitazionale possiede, rispetto al pavimento, appena prima di cadere? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numB4" valore="1" unit="J" %}

{% include ex-sol.html %}
Convertendo, $200\ \text g=0{,}2\ \text{kg}$ e $50\ \text{cm}=0{,}5\ \text m$.

$$U_g = mgh = 0{,}2\ \text{kg}\times 10\ \text{m/s}^2\times 0{,}5\ \text m = 1\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
I compagni di Ulisse devono sollevare l'albero orizzontale della vela, di massa $250\ \text{kg}$, fino a un'altezza di $4\ \text m$. (Usa $g\approx 9{,}8\ \text{m/s}^2$.)

Qual è il lavoro compiuto dalla forza gravitazionale? Ed il lavoro compiuto dai compagni di Ulisse?

{% include sci.html prima="$L_{\text{gravità}}=$" coeff="-9.8" exp="3" s="$-9{,}8\times10^3\ \text J$" %}

{% include sci.html prima="$L_{\text{compagni}}=$" coeff="9.8" exp="3" s="$9{,}8\times10^3\ \text J$" %}

{% include ex-sol.html %}
Il lavoro della forza gravitazionale è negativo, poiché la forza (verso il basso) è opposta allo spostamento (verso l'alto):

$$L_{\text{gravità}} = -mgh = -250\ \text{kg}\times 9{,}8\ \text{m/s}^2\times 4\ \text m = -9{,}8\times10^3\ \text J.$$

L'albero parte da fermo e arriva fermo (velocità nulla sia all'inizio che alla fine): per il teorema dell'energia cinetica, $\Delta K=0$, quindi il lavoro **totale** deve essere nullo. Il lavoro dei compagni deve perciò compensare esattamente quello della gravità:

$$L_{\text{compagni}} = -L_{\text{gravità}} = 9{,}8\times10^3\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Secondo la leggenda, il drammaturgo greco Eschilo morì perché era così calvo che un'aquila scambiò la sua testa per una roccia, e vi lasciò cadere sopra una tartaruga per romperne il guscio e mangiarla. Se l'aquila volava a $20\ \text m$ di altezza, a quale velocità la tartaruga ha colpito la testa di Eschilo? (Usa $g\approx 10\ \text{m/s}^2$ e trascura l'attrito dell'aria.)

{% include num.html id="numEsch" valore="20" unit="m/s" %}

{% include ex-sol.html %}
È esattamente la situazione di un corpo che cade da fermo da un'altezza $h$: tutta l'energia potenziale si trasforma in energia cinetica, quindi vale la formula $v=\sqrt{2gh}$ già vista:

$$v = \sqrt{2gh} = \sqrt{2\times 10\ \text{m/s}^2\times 20\ \text m} = \sqrt{400} = 20\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un corpo viene sparato verticalmente verso l'alto con una velocità iniziale di $30\ \text{m/s}$. Che altezza massima raggiunge, trascurando l'attrito dell'aria? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numSparo" valore="45" unit="m" %}

{% include ex-sol.html %}
È la situazione opposta di un corpo che cade: qui tutta l'energia cinetica iniziale si trasforma in energia potenziale, fino a che il corpo si ferma per un istante nel punto più alto. Vale quindi ancora $\frac12 mv^2 = mgh$, cioè $v=\sqrt{2gh}$, da cui isoliamo $h$:

$$h = \frac{v^2}{2g} = \frac{(30\ \text{m/s})^2}{2\times 10\ \text{m/s}^2} = \frac{900}{20} = 45\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Su un pianeta appena scoperto, un oggetto lasciato cadere da un'altezza di $5\ \text m$ tocca il suolo con una velocità di $6\ \text{m/s}$. Qual è l'accelerazione di gravità su quel pianeta?

{% include num.html id="numPianeta" valore="3.6" unit="m/s²" %}

{% include ex-sol.html %}
Isoliamo $g$ dalla formula $v=\sqrt{2gh}$:

$$g = \frac{v^2}{2h} = \frac{(6\ \text{m/s})^2}{2\times 5\ \text m} = \frac{36}{10} = 3{,}6\ \text{m/s}^2.$$

(Non lontano dal valore reale di Marte, $g\approx 3{,}7\ \text{m/s}^2$!)
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un drone di massa $2\ \text{kg}$ sta riprendendo un video a $3\ \text m$ di altezza. Il pilota lo fa salire ulteriormente, compiendo su di esso un lavoro di $40\ \text J$ (che si traduce in un aumento della sua energia potenziale gravitazionale). A quale altezza si trova adesso? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numHf" valore="5" unit="m" %}

{% include ex-sol.html %}
L'aumento di energia potenziale è $\Delta U_g = mg(h_f-h_i)$. Isoliamo $h_f$:

$$h_f = h_i + \frac{\Delta U_g}{mg} = 3\ \text m + \frac{40\ \text J}{2\ \text{kg}\times 10\ \text{m/s}^2} = 3\ \text m + 2\ \text m = 5\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
A Natale, Babbo Natale cala lungo un camino un sacco di regali di massa $5\ \text{kg}$, legato a una corda. Su di esso viene compiuto un lavoro di $-150\ \text J$, che diminuisce la sua energia potenziale gravitazionale: alla fine si trova a un'altezza di $2\ \text m$ dal camino. Qual era la sua altezza iniziale? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numHi" valore="5" unit="m" %}

{% include ex-sol.html %}
L'aumento di energia potenziale è $\Delta U_g = mg(h_f-h_i)$. Isoliamo $h_i$:

$$h_i = h_f - \frac{\Delta U_g}{mg} = 2\ \text m - \frac{-150\ \text J}{5\ \text{kg}\times 10\ \text{m/s}^2} = 2\ \text m + 3\ \text m = 5\ \text m.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un pescatore issa sulla banchina una cassa di pesce, sollevandola di $4\ \text m$: la sua energia potenziale gravitazionale aumenta di $800\ \text J$. Qual è il peso della cassa?

{% include num.html id="numForza" valore="200" unit="N" %}

{% include ex-sol.html %}
Il lavoro compiuto contro la gravità (che si trasforma in energia potenziale) è $L=F\cdot\Delta s$, dove qui $F$ è proprio il peso della cassa e $\Delta s$ è l'altezza $h$. Isoliamo $F$:

$$F = \frac{\Delta U_g}{h} = \frac{800\ \text J}{4\ \text m} = 200\ \text N.$$
{% include ex-sol-end.html %}

### Esercizi sull'energia meccanica e sul calore

Prima di iniziare, fissiamo le idee su cosa sia un sistema isolato.

{% include frayer.html id="frayer-sistema-isolato" termine="Sistema isolato" %}

{% include ex.html diff=1 %}
Il fratellino di Marco gioca con uno yo-yo di massa $60\ \text g$. Lo yo-yo scende, srotolandosi, da fermo per un tratto di $0{,}9\ \text m$: trascurando l'attrito, quanta energia cinetica ha acquistato? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numYoyo" valore="0.54" unit="J" %}

{% include ex-sol.html %}
Convertendo la massa, $60\ \text g = 0{,}06\ \text{kg}$. In assenza di attrito, l'energia meccanica si conserva: tutta l'energia potenziale persa si ritrova come energia cinetica guadagnata,

$$K = U_i - U_f = mgh = 0{,}06\ \text{kg}\times 10\ \text{m/s}^2\times 0{,}9\ \text m = 0{,}54\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Una bambina su un'altalena viene tirata indietro finché non si trova a $0{,}45\ \text m$ di altezza rispetto al punto più basso, poi lasciata andare da ferma. Trascurando l'attrito, con che velocità passa per il punto più basso? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numAltalena1" valore="3" unit="m/s" %}

{% include ex-sol.html %}
È la stessa situazione di un corpo lasciato cadere da un'altezza $h$: tutta l'energia potenziale iniziale si trasforma in energia cinetica, quindi $mgh=\frac12 mv^2$, da cui $v=\sqrt{2gh}$:

$$v = \sqrt{2gh} = \sqrt{2\times 10\ \text{m/s}^2\times 0{,}45\ \text m} = \sqrt 9 = 3\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un'altra bambina, su un'altra altalena (trascura sempre l'attrito, usa $g\approx 10\ \text{m/s}^2$), passa per il punto più basso con una velocità di $5\ \text{m/s}$. Con che velocità passa per un punto che si trova $1{,}05\ \text m$ più in alto rispetto al punto più basso?

{% include num.html id="numAltalena2" valore="2" unit="m/s" %}

{% include ex-sol.html %}
L'energia meccanica si conserva, quindi è la stessa nei due punti:

$$\frac12 m v_{\text{basso}}^2 = \frac12 m v^2 + mgh.$$

La massa si semplifica; isoliamo $v$:

$$v = \sqrt{v_{\text{basso}}^2 - 2gh} = \sqrt{(5\ \text{m/s})^2 - 2\times 10\ \text{m/s}^2\times 1{,}05\ \text m} = \sqrt{25-21} = \sqrt 4 = 2\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Il pendolo di un vecchio orologio a muro, di massa $0{,}5\ \text{kg}$, viene spostato lateralmente fino a un'altezza di $0{,}8\ \text m$ rispetto al punto più basso della sua oscillazione, e lì lasciato fermo (usa $g\approx 10\ \text{m/s}^2$). Prendendo come riferimento il punto più basso, qual è la sua energia meccanica in quell'istante?

{% include num.html id="numPendoloE" valore="4" unit="J" %}

{% include ex-sol.html %}
Il pendolo è fermo, quindi tutta la sua energia meccanica è potenziale ($K=0$):

$$E = K+U = 0 + mgh = 0{,}5\ \text{kg}\times 10\ \text{m/s}^2\times 0{,}8\ \text m = 4\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Uno skater in uno skatepark parte da un punto della rampa alto $3\ \text m$, già in movimento con una velocità di $3\ \text{m/s}$, e scende (trascurando l'attrito, usa $g\approx 10\ \text{m/s}^2$) fino a un punto alto $1\ \text m$. Con che velocità passa da quel punto?

{% include num.html id="numSkater" valore="7" unit="m/s" %}

{% include ex-sol.html %}
L'energia meccanica si conserva fra i due punti:

$$\frac12 m v_1^2 + mgh_1 = \frac12 m v_2^2 + mgh_2.$$

La massa si semplifica; isoliamo $v_2$:

$$v_2 = \sqrt{v_1^2 + 2g(h_1-h_2)} = \sqrt{(3\ \text{m/s})^2 + 2\times 10\ \text{m/s}^2\times(3\ \text m - 1\ \text m)} = \sqrt{9+40} = \sqrt{49} = 7\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Un pendolo di un orologio a muro, di massa $0{,}5\ \text{kg}$, ha un'energia meccanica di $4\ \text J$ (rispetto al punto più basso della sua oscillazione). Con che velocità passa per quel punto più basso?

{% include num.html id="numPendoloV" valore="4" unit="m/s" %}

{% include ex-sol.html %}
Nel punto più basso tutta l'energia meccanica è cinetica ($U=0$, prendendolo come riferimento):

$$E = K = \frac12 mv^2 \quad\Rightarrow\quad v = \sqrt{\frac{2E}{m}} = \sqrt{\frac{2\times 4\ \text J}{0{,}5\ \text{kg}}} = \sqrt{16} = 4\ \text{m/s}.$$
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
In un bowling, una palla di massa $6\ \text{kg}$ cade da uno scaffale alto $1{,}2\ \text m$ e rimbalza sul pavimento fino a raggiungere di nuovo un'altezza massima di soli $0{,}3\ \text m$. Quanta energia si è convertita in calore durante l'urto con il pavimento? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numBowlingCalore" valore="54" unit="J" %}

{% include ex-sol.html %}
Sia appena prima di cadere sia nel punto più alto del rimbalzo la palla è ferma, quindi in entrambi i casi la sua energia meccanica è tutta potenziale. Se l'energia meccanica si fosse conservata, la palla sarebbe rimbalzata fino alla stessa altezza di partenza: il fatto che risalga solo fino a $0{,}3\ \text m$ significa che l'energia mancante,

$$\Delta E = U_i - U_f = mg(h_i-h_f) = 6\ \text{kg}\times 10\ \text{m/s}^2\times(1{,}2\ \text m - 0{,}3\ \text m) = 6\ \text{kg}\times 10\ \text{m/s}^2\times 0{,}9\ \text m = 54\ \text J,$$

si è convertita in calore nell'urto con il pavimento.
{% include ex-sol-end.html %}

{% include ex.html diff=3 %}
Uno slittino di massa $4\ \text{kg}$ scivola lungo una discesa innevata, partendo da fermo da un'altezza di $5\ \text m$. A causa dell'attrito con la neve, in fondo alla discesa la sua velocità è di soli $8\ \text{m/s}$ (minore di quella che avrebbe senza attrito). Quanta energia si è convertita in calore lungo la discesa? (Usa $g\approx 10\ \text{m/s}^2$.)

{% include num.html id="numSlittinoCalore" valore="72" unit="J" %}

{% include ex-sol.html %}
Se non ci fosse stato attrito, l'energia meccanica si sarebbe conservata e tutta l'energia potenziale iniziale si sarebbe trasformata in energia cinetica finale. L'energia effettivamente dissipata sotto forma di calore è allora la differenza fra l'energia potenziale iniziale e l'energia cinetica finale realmente osservata:

$$\Delta E = U_i - K_f = mgh - \frac12 mv^2 = 4\ \text{kg}\times 10\ \text{m/s}^2\times 5\ \text m - \frac12\times 4\ \text{kg}\times(8\ \text{m/s})^2 = 200\ \text J - 128\ \text J = 72\ \text J.$$
{% include ex-sol-end.html %}

{% include ex.html diff=2 %}
Torniamo all'esperimento (immaginario!) del "pollo cotto a schiaffi". Supponi che ogni schiaffo comprima il pollo di $2{,}5\ \text{cm}$ esercitando una forza di $40\ \text N$, e che tutto il lavoro compiuto si dissipi istantaneamente in calore. Sapendo che per cuocere completamente il pollo servono circa $2\times10^5\ \text J$ di calore, quanti schiaffi sarebbero necessari?

{% include sci.html prima="Numero di schiaffi $=$" coeff="2" exp="5" s="2 × 10⁵ schiaffi" %}

{% include ex-sol.html %}
Il lavoro — e quindi il calore — prodotto da un singolo schiaffo è

$$L_{\text{schiaffo}} = F\cdot \Delta s = 40\ \text N \times 0{,}025\ \text m = 1\ \text J.$$

Per ottenere i $2\times10^5\ \text J$ necessari a cuocere il pollo servono quindi

$$n = \frac{2\times10^5\ \text J}{1\ \text J} = 2\times10^5 \text{ schiaffi},$$

cioè 200 000 schiaffi — un numero completamente assurdo, che spiega bene perché non è davvero un modo pratico per cucinare un pollo!
{% include ex-sol-end.html %}

{% include ex.html diff=1 %}
Prova a scrivere con parole tue, senza guardare indietro nel capitolo, cosa significa che l'energia meccanica di un sistema "si conserva".

{% include def-compare.html id="dc-conservazione" testo="L'energia meccanica di un sistema si conserva quando…" label="Confronta con la definizione nel testo" %}
{% include ex-end.html %}
