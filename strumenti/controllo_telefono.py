#!/usr/bin/env python3
"""Controllo «su telefono»: costruisce il sito, apre ogni capitolo in un Chromium
senza finestra largo come uno smartphone (360, 390 e 412 px) e segnala
  - le slide degli esercizi più larghe del riquadro (contenuto tagliato);
  - ciò che esce dallo schermo;
  - tabelle e widget che vanno scorsi di lato (valori nascosti).
Uso, dalla cartella del sito:   python3 strumenti/controllo_telefono.py
(serve il pacchetto python «websocket-client» e chromium-browser).
Se non stampa niente sotto i titoli «larghezza N px», va tutto bene.
"""
import json,os,subprocess,sys,tempfile,time,urllib.request
import websocket
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T=tempfile.mkdtemp()
print('costruisco il sito…'); subprocess.run(['bundle','exec','jekyll','build','-q','-d',T+'/didattica-vittoria'],cwd=R,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
srv=subprocess.Popen([sys.executable,'-m','http.server','8765'],cwd=T,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
chr_=subprocess.Popen(['chromium-browser','--headless=new','--no-sandbox','--disable-gpu','--remote-debugging-port=9333','--user-data-dir='+T+'/chr','about:blank'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
time.sleep(4)
try:
  tabs=json.load(urllib.request.urlopen('http://localhost:9333/json'))
  ws=websocket.create_connection([t for t in tabs if t['type']=='page'][0]['webSocketDebuggerUrl'],timeout=90,suppress_origin=True)
  i=0
  def cmd(m,**p):
    global i; i+=1; ws.send(json.dumps({'id':i,'method':m,'params':p}))
    while True:
      r=json.loads(ws.recv())
      if r.get('id')==i: return r.get('result',r)
  def ev(js):
    r=cmd('Runtime.evaluate',expression=js,returnByValue=True,awaitPromise=True)
    return r.get('result',{}).get('value',r)
  JS="""(()=>{const vw=document.documentElement.clientWidth,res=[];
  const vis=x=>{const s=getComputedStyle(x);return s.display!='none'&&s.visibility!='hidden'};
  // 1) dentro ogni slide: qualcosa più largo della slide (verrebbe tagliato)
  document.querySelectorAll('.scorri-slide').forEach(sl=>{const r=sl.getBoundingClientRect();if(!r.width)return;
   const tr=sl.closest('.scorri-track').getBoundingClientRect();
   if(r.width>tr.width+2)res.push('slide più larga del riquadro: '+Math.round(r.width)+'>'+Math.round(tr.width)+' in es '+(sl.closest('[data-es]')||{dataset:{}}).dataset.es);
   sl.querySelectorAll('*').forEach(x=>{if(!vis(x)||x.closest('mjx-assistive-mml'))return;const q=x.getBoundingClientRect();if(!q.width)return;
    // salta ciò che sta dentro un contenitore che scorre di suo (tabelle con scroll)
    let a=x.parentElement,scroll=false;while(a&&a!==sl){const o=getComputedStyle(a).overflowX;if(o=='auto'||o=='scroll'){scroll=true;break}a=a.parentElement}
    if(!scroll&&q.right>r.right+2&&q.left<r.right)res.push('taglio in slide (es '+((sl.closest('[data-es]')||{dataset:{}}).dataset.es)+'): '+x.tagName+'.'+(x.className.baseVal??x.className)+' sporge '+Math.round(q.right-r.right)+'px');});});
  // 2) pagina più larga dello schermo
  if(document.documentElement.scrollWidth>vw+1){document.querySelectorAll('.chapter-prose *').forEach(x=>{const q=x.getBoundingClientRect();if(q.right>vw+1&&vis(x)){let a=x.parentElement,cl=false;while(a){const o=getComputedStyle(a).overflowX;if(o!='visible'){cl=true;break}a=a.parentElement}if(!cl)res.push('esce dallo schermo: '+x.tagName+'.'+(x.className.baseVal??x.className)+' r='+Math.round(q.right))}})}
  // 3) tabelle o widget che scorrono di lato: parte del contenuto è nascosta
  document.querySelectorAll('.chapter-prose table, .mclic-widget').forEach(t=>{if(!vis(t)||!t.getBoundingClientRect().width)return;const sl=t.closest('.scorri-slide');if(sl&&!sl.getBoundingClientRect().width)return;
   if(t.scrollWidth>t.clientWidth+2)res.push('da scorrere di lato ('+(t.scrollWidth-t.clientWidth)+'px nascosti): '+t.tagName+'.'+t.className+' in es '+((t.closest('[data-es]')||{dataset:{}}).dataset.es)+' «'+t.textContent.trim().slice(0,40)+'»')});
  return [...new Set(res)].slice(0,12)})()"""
  pagine=[]
  for d,_,f in os.walk(T+'/didattica-vittoria/corsi'):
    if 'index.html' in f: pagine.append('http://localhost:8765'+d[len(T):]+'/')
  cmd('Page.enable')
  for W in (360,390,412):
    print('== larghezza',W,'px')
    cmd('Emulation.setDeviceMetricsOverride',width=W,height=800,deviceScaleFactor=1,mobile=True)
    for u in sorted(pagine):
      cmd('Page.navigate',url=u); time.sleep(5)
      r=[x for x in (ev(JS) or []) if 'in es undefined' not in x]
      if r:
        print('##',u.split('/corsi/')[1]); [print('   ',x) for x in r]
finally:
  chr_.kill(); srv.kill()
