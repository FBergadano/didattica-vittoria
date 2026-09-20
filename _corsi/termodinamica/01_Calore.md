---
layout: capitolo
title: "Il Calore"
corso: "termodinamica"
corso_titolo: "La Termodinamica"
materia: fisica
numero: 1
---

<cit autore="William Blake, Auguries of Innocence">
To see the world in a grain of sand
And a heaven in a wild flower
To hold infinity in the palm of your hand
And eternity in an hour.
</cit>
In questo capitolo studieremo nel dettaglio una delle forme di energia che abbiamo incontrato: il <definizione>calore</definizione>.  
Infatti, ricordiamo che nello scorso capitolo abbiamo scoperto ciò che riassumiamo qui di seguito.

{% include box-imp.html testo="Il calore" %}
<u>Il calore</u> (simbolo $Q$) <u>è una forma di energia</u>. Pertanto, <u>essa si misura in joule</u> (simbolo J).  
Inoltre, l'energia meccanica può convertirsi in calore tramite l'attrito.  
{% include box-end.html %}


In questo capitolo vedremo ***quando*** e ***come*** il calore si può **trasmettere**.  
Cominciamo descrivendo ***quando*** il calore si può trasmettere, e per farlo abbiamo bisogno del concetto di <definizione>temperatura</definizione>.




<!-- Quello che io trovo bello di questo capitolo della Fisica è che esso svela quanto sia complesso e ricco il mondo che ci circonda: quello a cui siamo più abituati. Ci sorprende senza aver bisogno di osservare niente di più che ciò che abbiamo attorno. Impareremo che l'aria che respiriamo, il nostro corpo, i corpi che ci circondano --- dai granelli di sabbia alle stelle --- sono l'incontro di un numero inimmaginabile di minuscole particelle, che interagiscono tra loro dando luogo a un gomitolo così ingarbugliato che noi non saremo mai in grado di esaurirlo.  
Per me è stato bello scoprire questa parte della Fisica e mi ha donato mille stupori: spero possa essere un piccolo stupore anche per voi! -->

# La Temperatura

{% include box-imp.html testo="L'equilibrio termico"%}

Il calore si trasferisce tra due sistemi <u markdown="span">solo se tra di essi c'è una **differenza di temperatura**</u>. In particolare, il calore <u markdown="span">fluisce sempre dal corpo a temperatura **maggiore** a quello a temperatura **minore**</u>, finché i due sistemi non raggiungono la stessa temperatura.  
Quando i due sistemi si trovano alla stessa temperatura, tra di essi non c'è scambio di calore e si parla di <definizione>equilibrio termico</definizione>.

{% include box-end.html %}

Per comprendere quindi **se** il calore si trasmette tra due sistemi $A$ e $B$ e **in che verso** si trasmetta (da $A$ a $B$ o da $B$ ad $A$), dobbiamo conoscere la temperatura dei due sistemi $T_A$ e $T_B$. 

Prova tu stesso: trascina la spada nella fornace per scaldarla, nel cesto di ghiaccio per raffreddarla, oppure immergila nella bacinella d'acqua e osserva il flusso di calore, finché spada e acqua non raggiungono l'equilibrio termico.

{% include lab-virtuali/spada-lab.html %}



## La Definizione operativa della Temperatura e la scala Kelvin

Diamo la seguente definizione **operativa** di temperatura.

{% include box-imp.html testo="Temperatura" %}
La temperatura (simbolo $T$) è la grandezza fisica misurata da un termometro. La sua unità di misura nel Sistema Internazionale è il <definizione>kelvin</definizione> (simbolo K).
{% include box-end.html %}

Come scopriremo nei prossimi capitoli, ci sono ottime ragioni per cui nel Sistema Internazionale si è scelto di utilizzare la scala dei kelvin per misurare la temperatura, invece che quella più abituale dei gradi centigradi (anche chiamati **gradi celsius**, in onore del suo inventore Anders Celsius). Eppure, comunemente continuiamo ad utilizzare la scala dei gradi centigradi. È quindi importante abituarsi a passare dall'una all'altra, anche se in questo corso vi sarà richiesto di adottare quasi sempre il kelvin quando fornite un risultato.

Compara le due scale con questa animazione.

{% include lab-virtuali/termometro-fuoco-ghiaccio-lab.html %}

{% include box-imp.html testo="Da gradi centigradi a kelvin" %}
Per passare da una scala all'altra basta sommare o sottrarre il numero $273{,}15$:

{% include eq-annotated.html
     id="conv-c-k"
     formula="T^{\text{K}} = T^{\text{°C}} + 273{,}15"
     frammenti="T^{\text{K}}|T^{\text{°C}}|273{,}15"
     etichette="temperatura in kelvin|temperatura in gradi centigradi|scarto fisso tra le due scale"
     posizioni="alto|basso|alto"
  %}

{% include eq-annotated.html
     id="conv-k-c"
     formula="T^{\text{°C}} = T^{\text{K}} - 273{,}15"
     frammenti="T^{\text{°C}}|T^{\text{K}}|273{,}15"
     etichette="temperatura in gradi centigradi|temperatura in kelvin|scarto fisso tra le due scale"
     posizioni="alto|basso|alto"
  %}

{% include box-end.html %}

Pertanto, <u markdown="span">una **variazione** di temperatura $\Delta T$ </u> (cioè di quanto sale o scende la temperatura) <u markdown="span">è **la stessa in entrambe le scale**</u>. Cioè, se la temperatura sale di $5\,°C$, sale anche di $5\,K$. 
Dimostralo tu, con il seguente esercizio.


<style>
#ctExWidget .ct-scale-row { text-align:center; margin-bottom:.8rem; }
#ctExWidget .ct-scale-row button { font-size:.85rem; padding:.35rem .8rem; border-radius:6px; border:1px solid #67e8f9; background:#ecfeff; color:#0e7490; cursor:pointer; font-weight:600; }
#ctExWidget .ct-scale-row button:hover { background:#cffafe; }
#ctExWidget .ct-therm-row { text-align:center; margin-bottom:.4rem; }
#ctExWidget .ct-lbl { text-align:center; font-weight:700; margin:.3rem 0; }
#ctExWidget .ct-rise-note { text-align:center; font-style:italic; color:#0e7490; margin:.5rem 0; }
#ctExWidget .ct-final { text-align:center; font-weight:700; color:#0f766e; margin-top:.8rem; }
#ctExWidget input.iex-m.ct-inline { width:70px; }
@media print { #ctExWidget { display:none !important; } }
</style>

<div class="iex-widget" id="ctExWidget">
<p class="iex-lbl">Dimostralo tu</p>

<div class="ct-scale-row"><button id="ctEx-scaleBtn">Scala di partenza: Celsius &nbsp;(cambia)</button></div>

<div class="ct-therm-row">
<svg id="ctEx-svg" viewBox="0 0 200 310" width="120" style="height:auto;">
  <rect x="103" y="45" width="14" height="210" rx="7" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="110" cy="278" r="15" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="110" cy="278" r="11" fill="#dc2626"/>
  <rect id="ctEx-mercury" x="106" y="250" width="8" height="30" fill="#dc2626"/>
  <g font-size="10.5" fill="#475569">
    <line x1="97" y1="250" x2="123" y2="250" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="93" y="253" text-anchor="end">0 &#176;C</text>
    <text x="127" y="253" text-anchor="start">273 K</text>
    <line x1="100" y1="211" x2="120" y2="211" stroke="#94a3b8" stroke-width="1"/>
    <text x="93" y="214" text-anchor="end">20</text>
    <text x="127" y="214" text-anchor="start">293</text>
    <line x1="100" y1="172" x2="120" y2="172" stroke="#94a3b8" stroke-width="1"/>
    <text x="93" y="175" text-anchor="end">40</text>
    <text x="127" y="175" text-anchor="start">313</text>
    <line x1="100" y1="133" x2="120" y2="133" stroke="#94a3b8" stroke-width="1"/>
    <text x="93" y="136" text-anchor="end">60</text>
    <text x="127" y="136" text-anchor="start">333</text>
    <line x1="100" y1="94" x2="120" y2="94" stroke="#94a3b8" stroke-width="1"/>
    <text x="93" y="97" text-anchor="end">80</text>
    <text x="127" y="97" text-anchor="start">353</text>
    <line x1="97" y1="55" x2="123" y2="55" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="93" y="58" text-anchor="end">100 &#176;C</text>
    <text x="127" y="58" text-anchor="start">373 K</text>
  </g>
</svg>
</div>

<p class="ct-lbl" id="ctEx-label0"></p>
<div class="iex-q" id="ctEx-step0">
<p>Converti questo valore nell'altra scala.</p>
<div class="iex-ir">
<input class="iex-m" id="ctEx-in0" type="text" placeholder="valore" autocomplete="off" spellcheck="false">
<span class="iex-unit" id="ctEx-unit0"></span>
<button class="iex-vbtn" id="ctEx-btn0">Verifica</button>
</div>
<div class="iex-fb" id="ctEx-fb0"></div>
</div>

<div class="iex-q" id="ctEx-step1" style="display:none">
<p class="ct-rise-note" id="ctEx-risenote"></p>
<p class="ct-lbl" id="ctEx-label1"></p>
<p>Converti anche questo valore nell'altra scala.</p>
<div class="iex-ir">
<input class="iex-m" id="ctEx-in1" type="text" placeholder="valore" autocomplete="off" spellcheck="false">
<span class="iex-unit" id="ctEx-unit1"></span>
<button class="iex-vbtn" id="ctEx-btn1">Verifica</button>
</div>
<div class="iex-fb" id="ctEx-fb1"></div>
</div>

<div class="iex-q" id="ctEx-step2" style="display:none">
<p>Adesso calcola la variazione di temperatura, nelle due scale:</p>
<p>$\Delta T^{\text{°C}} = T_f^{\text{°C}} - T_i^{\text{°C}} = $ <input class="iex-m ct-inline" id="ctEx-inDC" type="text" placeholder="valore" autocomplete="off" spellcheck="false"> <span class="iex-unit">°C</span> <button class="iex-vbtn" id="ctEx-btnDC">Verifica</button></p>
<div class="iex-fb" id="ctEx-fbDC"></div>
<p>$\Delta T^{\text{K}} = T_f^{\text{K}} - T_i^{\text{K}} = $ <input class="iex-m ct-inline" id="ctEx-inDK" type="text" placeholder="valore" autocomplete="off" spellcheck="false"> <span class="iex-unit">K</span> <button class="iex-vbtn" id="ctEx-btnDK">Verifica</button></p>
<div class="iex-fb" id="ctEx-fbDK"></div>
<p class="ct-final" id="ctEx-final" style="display:none"></p>
</div>

</div>

<script>
(function(){
  var root=document.getElementById('ctExWidget');
  function $$(s){return root.querySelector(s);}
  var mercury=$$('#ctEx-mercury');
  var scaleBtn=$$('#ctEx-scaleBtn');
  var label0=$$('#ctEx-label0'), label1=$$('#ctEx-label1'), riseNote=$$('#ctEx-risenote');
  var step1=$$('#ctEx-step1'), step2=$$('#ctEx-step2');
  var in0=$$('#ctEx-in0'), unit0=$$('#ctEx-unit0'), btn0=$$('#ctEx-btn0'), fb0=$$('#ctEx-fb0');
  var in1=$$('#ctEx-in1'), unit1=$$('#ctEx-unit1'), btn1=$$('#ctEx-btn1'), fb1=$$('#ctEx-fb1');
  var inDC=$$('#ctEx-inDC'), btnDC=$$('#ctEx-btnDC'), fbDC=$$('#ctEx-fbDC');
  var inDK=$$('#ctEx-inDK'), btnDK=$$('#ctEx-btnDK'), fbDK=$$('#ctEx-fbDK');
  var finalMsg=$$('#ctEx-final');

  var scale='C', TiC=20, TfC=20, dcOk=false, dkOk=false, raf=null;

  window._shoot=window._shoot||function(el){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cl=['#c026d3','#0891b2','#0f766e','#f59e0b','#dc2626','#65a30d','#ec4899'];for(var i=0;i<45;i++){var p=document.createElement('div'),a=Math.random()*Math.PI*2,sp=3+Math.random()*6;p.style.cssText='position:fixed;width:6px;height:6px;background:'+cl[i%cl.length]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';left:'+cx+'px;top:'+cy+'px;pointer-events:none;z-index:9999;';document.body.appendChild(p);(function(p,vx,vy,x,y){var op=1;function s(){vy+=.25;x+=vx;y+=vy;op-=.02;p.style.left=x+'px';p.style.top=y+'px';p.style.opacity=op;if(op>0)requestAnimationFrame(s);else p.remove();}requestAnimationFrame(s);})(p,Math.cos(a)*sp,Math.sin(a)*sp-4,cx,cy);}};

  function yFromT(t){ return 250 - t*1.95; }
  function setMercury(t){
    var y=yFromT(Math.max(0,Math.min(100,t)));
    mercury.setAttribute('y',y);
    mercury.setAttribute('height',280-y);
  }
  function randInt(a,b){ return Math.floor(a+Math.random()*(b-a+1)); }

  function labelFor(tC,sc){
    return sc==='C' ? (Math.round(tC)+' °C') : (Math.round(tC+273)+' K');
  }

  function generate(){
    TiC=randInt(10,80);
    var mag=randInt(8,32), sign=Math.random()<0.5?1:-1;
    var tf=TiC+sign*mag;
    if(tf<2||tf>98){ sign=-sign; tf=TiC+sign*mag; }
    tf=Math.max(2,Math.min(98,tf));
    TfC=tf;

    scaleBtn.textContent='Scala di partenza: '+(scale==='C'?'Celsius':'Kelvin')+'  (cambia)';
    setMercury(TiC);
    label0.textContent='Temperatura iniziale: '+labelFor(TiC,scale);
    unit0.textContent=scale==='C'?'K':'°C';
    in0.value=''; in0.disabled=false; btn0.disabled=false;
    fb0.style.display='none'; fb0.className='iex-fb';

    step1.style.display='none';
    in1.value=''; in1.disabled=false; btn1.disabled=false;
    fb1.style.display='none'; fb1.className='iex-fb';

    step2.style.display='none';
    inDC.value=''; inDC.disabled=false; btnDC.disabled=false;
    inDK.value=''; inDK.disabled=false; btnDK.disabled=false;
    fbDC.style.display='none'; fbDC.className='iex-fb';
    fbDK.style.display='none'; fbDK.className='iex-fb';
    finalMsg.style.display='none';
    dcOk=false; dkOk=false;
  }

  function checkNum(val,target,tol){
    var v=parseFloat(String(val).trim().replace(',','.'));
    return !isNaN(v) && Math.abs(v-target)<=tol;
  }

  btn0.addEventListener('click',function(){
    var target = scale==='C' ? TiC+273 : TiC;
    var ok=checkNum(in0.value,target,0.5);
    fb0.style.display='block';
    if(ok){
      fb0.className='iex-fb ok'; fb0.textContent='✓ Esatto!';
      in0.disabled=true; btn0.disabled=true; _shoot(in0);
      step1.style.display='block';
      var salgo = TfC>=TiC;
      riseNote.textContent = 'La temperatura ora '+(salgo?'sale':'scende')+'…';
      label1.textContent='…';
      animateTo(TfC,1400,function(){
        label1.textContent='Temperatura finale: '+labelFor(TfC,scale);
      });
    } else {
      fb0.className='iex-fb err'; fb0.textContent='Non è corretto. Riprova.';
    }
  });

  btn1.addEventListener('click',function(){
    var target = scale==='C' ? TfC+273 : TfC;
    var ok=checkNum(in1.value,target,0.5);
    fb1.style.display='block';
    if(ok){
      fb1.className='iex-fb ok'; fb1.textContent='✓ Esatto!';
      in1.disabled=true; btn1.disabled=true; _shoot(in1);
      step2.style.display='block';
    } else {
      fb1.className='iex-fb err'; fb1.textContent='Non è corretto. Riprova.';
    }
  });

  function checkDelta(input,btn,fb,otherOk,setOk){
    var target=TfC-TiC;
    var ok=checkNum(input.value,target,0.5);
    fb.style.display='block';
    if(ok){
      fb.className='iex-fb ok'; fb.textContent='✓ Esatto!';
      input.disabled=true; btn.disabled=true; _shoot(input);
      setOk(true);
      if(otherOk()){
        finalMsg.style.display='block';
        finalMsg.textContent='Hai dimostrato che ΔT è lo stesso numero in entrambe le scale!';
        _shoot(finalMsg);
      }
    } else {
      fb.className='iex-fb err'; fb.textContent='Non è corretto. Riprova.';
    }
  }
  btnDC.addEventListener('click',function(){ checkDelta(inDC,btnDC,fbDC,function(){return dkOk;},function(v){dcOk=v;}); });
  btnDK.addEventListener('click',function(){ checkDelta(inDK,btnDK,fbDK,function(){return dcOk;},function(v){dkOk=v;}); });

  function animateTo(target,duration,done){
    var start=parseFloat(mercury.getAttribute('y'));
    var startT = (250-start)/1.95;
    var t0=null;
    if(raf) cancelAnimationFrame(raf);
    function step(ts){
      if(t0===null) t0=ts;
      var p=Math.min(1,(ts-t0)/duration);
      var eased=p<0.5 ? 2*p*p : 1-Math.pow(-2*p+2,2)/2;
      setMercury(startT+(target-startT)*eased);
      if(p<1){ raf=requestAnimationFrame(step); }
      else { raf=null; if(done)done(); }
    }
    raf=requestAnimationFrame(step);
  }

  scaleBtn.addEventListener('click',function(){
    scale = scale==='C' ? 'K' : 'C';
    generate();
  });

  generate();
})();
</script>

Esiste, come vedremo meglio più avanti, una temperatura minima possibile in assoluto, chiamata <definizione>zero assoluto</definizione>, che vale esattamente $0\,\text{K}$ (cioè $-273{,}15\,°\text{C}$). Scopriremo che **non è possibile raggiungere questa temperatura**. Per il momento, osserviamo che, poiché lo zero della scala kelvin coincide con questa temperatura minima invalicabile, <u markdown="span">sulla scala kelvin **non esistono temperature negative**</u>.

## Interpretazione Microscopica della Temperatura 

Uno degli aspetti della temperatura e del calore che ha affascinato di più gli scienziati è che esse sono qualità **invisibili**. Sappiamo che possiamo renderle visibili grazie a un termometro, ma non sappiamo veramente ***che cosa*** faccia alzare o abbassare il termometro. Nella storia, si sono quindi sviluppate teorie molto originali e interessanti su cosa sia fisicamente e concretamente la temperatura. Noi analizzeremo solo quella in cui crediamo oggi, ma se sei curioso clicca qui di seguito.  

{% include spoiler.html testo="Le teorie più originali sul calore, nella storia" %}
Fin dall'antichità si è cercato di capire cosa fosse davvero il calore. Un filosofo greco di nome Empedocle, ad esempio, lo associava al fuoco, e credeva che tutti i corpi fossero costituiti da fuoco: alcuni in quantità maggiore (quelli caldi), altri in quantità minore (quelli freddi). Ma è nel Settecento che nasce e si sviluppa la teoria più affascinante e duratura: quella del <definizione>calorico</definizione>.

Secondo questa teoria, il calore non era energia, ma una vera e propria **sostanza**: un fluido invisibile e privo di peso, contenuto in quantità maggiore nei corpi caldi e minore in quelli freddi, capace di "scorrere" da un corpo all'altro un po' come un liquido. L'idea del calorico spiegava molto bene ciò che osservava: il calore fluisce sempre dal corpo più caldo a quello più freddo perché il calorico "scende" da dove è più concentrato a dove lo è meno, e due corpi raggiungono l'equilibrio termico perché il calorico semplicemente si ridistribuisce tra loro.

Tra i più autorevoli sostenitori di questa teoria c'erano il chimico Antoine Lavoisier e il matematico e fisico Pierre-Simon Laplace, che costruirono insieme uno dei primi <definizione>calorimetri</definizione> della storia — un contenitore pieno di ghiaccio, con cui misuravano la quantità di calorico ceduta da un corpo osservando quanto ghiaccio riuscivano a fondere.

{% include figura.html id="laplace-calorico"
   src="/corsi/immagini/pierre-simon-laplace.jpg"
   didascalia="Pierre-Simon Laplace (1749-1827), tra i più autorevoli sostenitori della teoria del calorico." larghezza="220px" %}

A far vacillare la teoria del calorico fu un esperimento sorprendente. Nel 1798 il fisico Benjamin Thompson, conte di Rumford, stava supervisionando la foratura di cannoni di bronzo in un arsenale, e si accorse che l'attrito tra il trapano e il metallo produceva una quantità di calore enorme e, apparentemente, inesauribile — tanto da riuscire a far bollire dell'acqua. Se il calorico fosse stato un fluido presente in quantità limitata dentro il metallo, prima o poi si sarebbe dovuto esaurire; invece continuava a essere prodotto finché si continuava a far girare il trapano. Rumford ne concluse che il calore non potesse essere una sostanza contenuta nei corpi, ma dovesse avere a che fare con il **movimento**.

Ci vollero comunque ancora diversi decenni, e gli esperimenti di scienziati come James Prescott Joule, prima che l'idea del calorico venisse definitivamente abbandonata a favore della teoria che studieremo noi: quella per cui il calore è energia legata al movimento disordinato delle particelle che compongono la materia.
{% include spoiler-end.html %}

Oggi crediamo che la materia sia composta da un numero gigantesco di **molecole**, a loro volta composti da **atomi**. Ci riferiremo in genere agli atomi e alle molecole che compongono la materia con il nome di <definizione>particelle</definizione>. Le particelle che compongono un corpo sono in continuo movimento, anche se il corpo è fermo, per un'agitazione che si chiama <definizione>agitazione termica</definizione>, come puoi vedere nell'animazione qui sotto.

{% include figura.html id="alpha-elix"
   src="/corsi/gif/Thermally_Agitated_alpha-elix.gif"
   didascalia="Un segmento di proteina di alfa-elica che vibra per agitazione termica."
   larghezza="190px" %}

{% include box-imp.html testo="Interpretazione microscopica della temperatura" %}
<u markdown="span">La temperatura misura **l'agitazione termica**</u> di un corpo, cioè la velocità con cui si muovono le particelle che lo compongono.
{% include box-end.html %}

{% include lab-virtuali/agitazione-termica-lab.html %}

## Il Termometro e la Dilatazione Termica



# La Trasmissione del Calore

La descrizione della trasmissione del calore è molto affascinante, perché non è possibile descrivere ***come*** esso avvenga se non in termini di ciò che succede **a livello microscopico**, cioè a livello delle molecole e degli atomi di cui sono composti i corpi, e questo rivela quanto sia complesso e ricco il mondo che abbiamo attorno, proprio quello a cui siamo più abituati.



