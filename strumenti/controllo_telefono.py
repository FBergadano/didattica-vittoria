#!/usr/bin/env python3
"""Controllo «su telefono»: costruisce il sito, apre i capitoli in un Chromium
senza finestra largo come uno smartphone (360, 390 e 412 px) e segnala
  - le slide degli esercizi più larghe del riquadro (contenuto tagliato);
  - ciò che esce dallo schermo;
  - tabelle e widget che vanno scorsi di lato (valori nascosti).

Uso, dalla cartella del sito:
  python3 strumenti/controllo_telefono.py            solo le pagine toccate dalle modifiche non ancora
                                                     committate (anche quelle che usano un _include modificato)
  python3 strumenti/controllo_telefono.py --tutto    tutte le pagine
  python3 strumenti/controllo_telefono.py Elettro    solo le pagine il cui indirizzo contiene «Elettro»
(serve il pacchetto python «websocket-client» e chromium-browser).
Se non stampa niente sotto i nomi delle pagine, va tutto bene.

Per risparmiare tempo ogni pagina si apre una volta sola (le tre larghezze si
provano ridimensionandola) e si aspetta solo finché pagina e formule sono pronte.
"""
import json,os,re,shutil,subprocess,sys,tempfile,time,urllib.request
import websocket
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LARGHEZZE=(360,390,412)
PORTA=9349

# ---------------------------------------------------------------- quali pagine
def file_modificati():
  out=subprocess.run(['git','status','--porcelain','--untracked-files=all'],cwd=R,capture_output=True,text=True).stdout
  return [l[3:].split(' -> ')[-1].strip('"') for l in out.splitlines() if l.strip()]

def pagine_toccate(mod):
  """Restituisce (tutte?, insieme di file .md da controllare)."""
  if any(f.startswith(('_layouts/','assets/','_sass/','_data/')) or f=='_config.yml' or f=='_includes/scripts.html' for f in mod):
    return True,set()
  md=set(f for f in mod if f.startswith('_corsi/') and f.endswith('.md'))
  inc=[f[len('_includes/'):] for f in mod if f.startswith('_includes/')]
  if inc:
    # chi usa un _include modificato (anche passando per altri _include)
    tutti_inc=[os.path.relpath(os.path.join(d,x),R+'/_includes') for d,_,fs in os.walk(R+'/_includes') for x in fs]
    testo={x:open(R+'/_includes/'+x,errors='ignore').read() for x in tutti_inc}
    cerca=set(inc); nuovi=set(inc)
    while nuovi:
      pat=re.compile(r'include\s+('+'|'.join(re.escape(x) for x in nuovi)+r')\b')
      nuovi=set(x for x,t in testo.items() if x not in cerca and pat.search(t)); cerca|=nuovi
    pat=re.compile(r'include\s+('+'|'.join(re.escape(x) for x in cerca)+r')\b')
    for d,_,fs in os.walk(R+'/_corsi'):
      for x in fs:
        if x.endswith('.md') and pat.search(open(os.path.join(d,x),errors='ignore').read()):
          md.add(os.path.relpath(os.path.join(d,x),R))
  return False,md

args=sys.argv[1:]
tutto='--tutto' in args; filtri=[a for a in args if not a.startswith('--')]
scelti=None
if not tutto and not filtri:
  tutto,md=pagine_toccate(file_modificati())
  if not tutto:
    if not md: print('nessuna pagina modificata: niente da controllare (usa --tutto per controllarle tutte)'); sys.exit(0)
    scelti=set('/'+os.path.splitext(f)[0][1:]+'/' for f in md)   # _corsi/x/y.md → /corsi/x/y/

# ---------------------------------------------------------------- build e browser
T=tempfile.mkdtemp()
t0=time.time()
print('costruisco il sito…',flush=True)
subprocess.run(['bundle','exec','jekyll','build','-q','-d',T+'/didattica-vittoria'],cwd=R,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
pagine=[]
for d,_,f in os.walk(T+'/didattica-vittoria/corsi'):
  if 'index.html' in f:
    p=d[len(T):]+'/'
    if scelti is not None and not any(p.endswith(s) for s in scelti): continue
    if filtri and not any(x.lower() in p.lower() for x in filtri): continue
    pagine.append('http://localhost:8765'+p)
pagine.sort()
if not pagine: print('nessuna pagina corrisponde'); sys.exit(0)
print(len(pagine),'pagine da controllare',flush=True)

# lo Chromium "snap" può scrivere solo nella sua cartella: il profilo va lì
snap=os.path.expanduser('~/snap/chromium/common')
prof=(snap if os.path.isdir(snap) else T)+'/controllo-telefono'
shutil.rmtree(prof,ignore_errors=True)
srv=subprocess.Popen([sys.executable,'-m','http.server','8765'],cwd=T,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
chr_=subprocess.Popen(['chromium-browser','--headless=new','--no-sandbox','--disable-gpu','--remote-debugging-port=%d'%PORTA,'--user-data-dir='+prof,'about:blank'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
try:
  for k in range(60):                      # Chromium può metterci parecchi secondi a partire
    try: tabs=json.load(urllib.request.urlopen('http://localhost:%d/json'%PORTA)); break
    except Exception: time.sleep(.5)
  else: sys.exit('Chromium non è partito')
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
  # aspetta il caricamento e le formule (al massimo 15 s), poi un attimo per gli script che misurano
  PRONTA="""(async()=>{const z=ms=>new Promise(r=>setTimeout(r,ms)),t=Date.now();
   while(document.readyState!='complete'&&Date.now()-t<15000)await z(100);
   while(!(window.MathJax&&MathJax.startup&&MathJax.startup.promise)&&document.querySelector('script[src*=mathjax]')&&Date.now()-t<15000)await z(100);
   if(window.MathJax&&MathJax.startup&&MathJax.startup.promise)await Promise.race([MathJax.startup.promise,z(15000)]);
   await z(300);return true})()"""
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
  cmd('Page.enable')
  for u in pagine:
    print('##',u.split('/corsi/')[1],flush=True)
    cmd('Emulation.setDeviceMetricsOverride',width=LARGHEZZE[0],height=800,deviceScaleFactor=1,mobile=True)
    cmd('Page.navigate',url=u); ev(PRONTA)
    for W in LARGHEZZE:
      if W!=LARGHEZZE[0]:
        cmd('Emulation.setDeviceMetricsOverride',width=W,height=800,deviceScaleFactor=1,mobile=True); time.sleep(.4)
      r=[x for x in (ev(JS) or []) if 'in es undefined' not in x]
      for x in r: print('   [%d px]'%W,x)
  print('fatto in %d s'%(time.time()-t0))
finally:
  chr_.kill(); srv.kill(); shutil.rmtree(prof,ignore_errors=True)
