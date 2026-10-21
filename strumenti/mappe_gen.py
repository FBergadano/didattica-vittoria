# Genera gli schemi riassuntivi del prof (_data/mappe/*.json), mostrati da _includes/mappa.html.
# Uso: python3 strumenti/mappe_gen.py   (riscrive tutti i file in _data/mappe)
# Foglio di 1000 × 707; testo dei riquadri: **grassetto**, $formula$, \n per andare a capo.
import json, math, os, sys
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '_data', 'mappe')  # scrive i file _data/mappe/*.json

def fr(x1, y1, x2, y2, c='#475569', w=1.8, h=6):
    a = math.atan2(y2 - y1, x2 - x1)
    p1 = (x2 - h * math.cos(a) + h * .55 * math.sin(a), y2 - h * math.sin(a) - h * .55 * math.cos(a))
    p2 = (x2 - h * math.cos(a) - h * .55 * math.sin(a), y2 - h * math.sin(a) + h * .55 * math.cos(a))
    return (f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2 - h*.8*math.cos(a):.1f}" y2="{y2 - h*.8*math.sin(a):.1f}" stroke="{c}" stroke-width="{w}"/>'
            f'<polygon points="{x2:.1f},{y2:.1f} {p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}" fill="{c}"/>')
def svg(vb, body): return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">{body}</svg>'
def txt(x, y, t, size=12, c='#1f2937', it=True, anchor='middle'):
    return f'<text x="{x}" y="{y}" font-size="{size}" fill="{c}" text-anchor="{anchor}" font-family="serif"{" font-style=\"italic\"" if it else ""}>{t}</text>'
def sfera(cx, cy, r, fill='#cbd5e1', st='#475569', lab=None, size=13):
    s = f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" stroke="{st}" stroke-width="1.5"/>'
    if lab: s += txt(cx, cy + size * .35, lab, size)
    return s
def radiali(cx, cy, r1, r2, n, verso_dentro=True, c='#0284c7', off=0):
    s = ''
    for k in range(n):
        a = 2 * math.pi * k / n + off
        xa, ya = cx + r1 * math.cos(a), cy + r1 * math.sin(a)
        xb, yb = cx + r2 * math.cos(a), cy + r2 * math.sin(a)
        s += fr(xa, ya, xb, yb, c, 1.4, 5) if verso_dentro else fr(xb, yb, xa, ya, c, 1.4, 5)
    return s

class M:
    def __init__(s, titolo, simboli, unita):
        s.d = {'titolo': titolo, 'simboli': simboli, 'unita': unita, 'nodi': [], 'frecce': [], 'tratti': []}
        s.k = 0
    def box(s, x, y, w, h, testo, colore='bianco', stile=None):
        s.k += 1; i = f'n{s.k}'
        n = {'id': i, 'x': x, 'y': y, 'w': w, 'h': h, 'testo': testo, 'colore': colore}
        if stile: n['stile'] = stile
        s.d['nodi'].append(n); return i
    def dis(s, x, y, w, h, body):
        s.k += 1; i = f'd{s.k}'
        s.d['nodi'].append({'id': i, 'x': x, 'y': y, 'w': w, 'h': h, 'svg': body}); return i
    def fr(s, a, b, testo='', tipo='freccia', colore='grigio'):
        f = {'id': f'f{len(s.d["frecce"])+1}', 'da': a, 'a': b, 'tipo': tipo, 'colore': colore}
        if testo: f['testo'] = testo
        s.d['frecce'].append(f)
    def salva(s, nome):
        with open(os.path.join(OUT, nome + '.json'), 'w') as f: json.dump(s.d, f, ensure_ascii=False, indent=1)

# ═════════ GRAVITAZIONE ═════════
# Tabella 2 × 2: due fasce colorate (righe: vettoriali / scalari) che contengono il proprio nome e
# le proprie caselle, e due cornici tratteggiate (colonne: due masse / una massa) che partono
# dall'intestazione e scendono fino in fondo.
def tabella(mm, y0, hh, righe, cA, cB):
    """righe: lista di (altezza, colore, etichetta). Fasce colorate (righe) che contengono il proprio
    nome e le proprie caselle; cornici tratteggiate (colonne) che partono dall'intestazione.
    Restituisce A, B, CW e la lista delle (y, h) utili per le caselle di ogni riga."""
    A, B, CW = 175, 600, 390
    y = y0 + hh + 14; caselle = []
    for (h, colore, etich) in righe:
        mm.box(6, y, 988, h, '', colore, 'gruppo'); caselle.append((y, h, colore, etich)); y += h + 10
    yfine = y - 10
    mm.box(A - 8, y0, CW + 16, yfine - y0 + 8, '', 'grigio', 'cornice')
    mm.box(B - 8, y0, CW + 16, yfine - y0 + 8, '', 'grigio', 'cornice')
    mm.box(A, y0 + 6, CW, hh, cA, 'grigio', 'testata')
    mm.box(B, y0 + 6, CW, hh, cB, 'grigio', 'testata')
    out = []
    for (yy, h, colore, etich) in caselle:
        mm.box(14, yy + 8, 148, h - 16, etich, colore, 'etichetta'); out.append((yy + 8, h - 16))
    return A, B, CW, out, yfine

g = M('La gravitazione',
      ['G', 'M', 'm', 'r', '\\vec F', '\\vec g', 'U', 'V', 'K', 'E', 'M_\\oplus', '\\vec F_{tot}', '\\vec g_{tot}'],
      ['N', 'J', 'kg', 'm', 's', '\\text{N/kg}', '\\text{J/kg}', '\\text{N}\\cdot\\text{m}^2/\\text{kg}^2'])
g.box(300, 4, 400, 34, 'La gravitazione', 'azzurro', 'titolo')
A, B, CW, rr, yfine = tabella(g, 40, 40, [(178, 'viola', 'Grandezze vettoriali\n(frecce)'), (152, 'arancio', 'Grandezze scalari\n(numeri con segno)')],
  '**Due masse** $M$ e $m$ a distanza $r$', '**Una massa sola** $M$: il campo che genera')
(yv, hv), (ys, hs) = rr
F = g.box(A, yv, CW, hv,
  '**Forza gravitazionale** $\\vec F$\n'
  '$F = G\\,\\dfrac{M\\,m}{r^2}$\n'
  'sempre attrattiva, lungo la retta che unisce le masse; uguale e opposta sulle due masse\n'
  '$[F] = \\text{N}$\n$G = 6{,}67\\times10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$', 'bianco')
g.dis(A + 245, yv + hv - 60, 140, 56, svg('0 0 140 56',
  sfera(26, 30, 17, lab='M') + sfera(116, 30, 9, lab='m', size=11) + fr(45, 30, 70, 30, '#7c3aed') + fr(105, 30, 80, 30, '#7c3aed')
  + txt(58, 20, 'F', 11, '#7c3aed') + txt(93, 20, 'F', 11, '#7c3aed')))
gg = g.box(B, yv, CW, hv,
  '**Campo gravitazionale** $\\vec g$\n'
  '$g = G\\,\\dfrac{M}{r^2}$    $\\vec g = \\dfrac{\\vec F}{m}$\n'
  'punta verso $M$; non dipende dalla massa esploratrice $m$\n'
  '$[g] = \\text{N/kg}$', 'bianco')
g.dis(B + 280, yv + hv - 88, 104, 84, svg('0 0 120 84', sfera(60, 42, 13, lab='M', size=11) + radiali(60, 42, 38, 18, 6, True, '#7c3aed')))
U = g.box(A, ys, CW, hs,
  '**Energia potenziale gravitazionale** $U$\n'
  '$U = -G\\,\\dfrac{M\\,m}{r}$\n'
  'sempre negativa; vale 0 a distanza infinita\n'
  '$[U] = \\text{J}$', 'bianco')
V = g.box(B, ys, CW, hs,
  '**Potenziale gravitazionale** $V$\n'
  '$V = \\dfrac{U}{m} = -G\\,\\dfrac{M}{r}$\n'
  'non dipende da $m$\n'
  '$[V] = \\text{J/kg}$', 'bianco')
g.fr(F, gg, '$\\div\\, m$', 'freccia', 'viola')
g.fr(U, V, '$\\div\\, m$', 'freccia', 'arancio')
Y = ys + hs + 22
HB = 700 - Y
so = g.box(10, Y, 300, HB,
  '**Sovrapposizione degli effetti**\n'
  'con più masse, ognuna agisce come se le altre non ci fossero\n'
  '$\\vec F_{tot} = \\vec F_1 + \\vec F_2 + \\cdots$\n$\\vec g_{tot} = \\vec g_1 + \\vec g_2 + \\cdots$\n'
  'somma **vettoriale** (regola del parallelogramma)\n'
  '$U_{tot} = U_1 + U_2 + \\cdots$\n$V_{tot} = V_1 + V_2 + \\cdots$\n'
  'somma **algebrica** (con i segni)', 'verde')
mo = g.box(320, Y, 260, HB,
  '**Moto in un campo**\n'
  'forza peso: $\\vec F = m\\,\\vec g$\n'
  'accelerazione: $\\vec a = \\vec g$ (non dipende da $m$)', 'giallo')
li = g.box(590, Y, 195, HB,
  '**Linee di campo**\n'
  'in ogni punto tangenti a $\\vec g$\n'
  'più fitte dove il campo è più intenso\n'
  'entrano nella massa', 'azzurro')
g.dis(645, Y + HB - 92, 86, 86, svg('0 0 90 90', sfera(45, 45, 9) + radiali(45, 45, 44, 13, 8, True, '#0284c7')))
eq = g.box(795, Y, 195, HB,
  '**Superfici equipotenziali**\n'
  'punti con lo stesso $V$\n'
  'per una massa: sfere concentriche\n'
  'sempre $\\perp$ alle linee di campo', 'azzurro')
g.dis(850, Y + HB - 92, 86, 86, svg('0 0 90 90', sfera(45, 45, 7)
  + ''.join(f'<circle cx="45" cy="45" r="{r}" fill="none" stroke="#0284c7" stroke-width="1.3" stroke-dasharray="4 3"/>' for r in (18, 30, 42))
  + ''.join(f'<line x1="{45+9*math.cos(a):.1f}" y1="{45+9*math.sin(a):.1f}" x2="{45+44*math.cos(a):.1f}" y2="{45+44*math.sin(a):.1f}" stroke="#94a3b8" stroke-width="1"/>' for a in [k*math.pi/4 for k in range(8)])))
g.fr(li, eq, '$\\perp$', 'linea', 'azzurro')
g.salva('gravitazione')

def carica(cx, cy, r, segno, size=12):
    f, st = ('#fecdd3', '#be123c') if segno == '+' else ('#bfdbfe', '#1d4ed8')
    return sfera(cx, cy, r, f, st) + f'<text x="{cx}" y="{cy + size*.36:.1f}" font-size="{size}" text-anchor="middle" fill="{st}" font-weight="700">{segno}</text>'

# ═════════ ELETTROSTATICA, PARTE 1 ═════════
SIMB_E = ['Q', 'q', 'q_1', 'q_2', 'e', 'k', 'r', '\\vec F', '\\vec E', 'U', 'V', '\\Delta V', 'n_p', 'n_e', '\\vec F_{tot}', '\\vec E_{tot}']
UNI_E = ['C', 'N', 'J', 'V', 'm', 'kg', '\\text{N/C}', '\\text{J/C}', '\\text{N}\\cdot\\text{m}^2/\\text{C}^2']
e = M("L'elettrostatica (parte 1)", SIMB_E, UNI_E)
e.box(250, 2, 500, 32, "Carica, forza e campo elettrico", 'azzurro', 'titolo')
e.box(10, 38, 300, 118, '**Carica elettrica** $Q$, $[Q] = \\text C$\n'
  'quantizzata: $Q = n\\,e$, con $n = n_p - n_e$\n$e = 1{,}6\\times10^{-19}\\ \\text C$\n'
  'si **conserva**: non si crea e non si distrugge', 'azzurro')
e.box(320, 38, 260, 118, '**Conduttori e isolanti**\n'
  'conduttori: hanno cariche libere di muoversi\n'
  'isolanti: non hanno cariche libere', 'grigio')
e.box(590, 38, 400, 118, '**Elettrizzazione**\n'
  'strofinio: i due corpi si caricano con segni **opposti**\n'
  'contatto (conduttori): segno **uguale** a quello del corpo carico\n'
  'polarizzazione: le cariche si separano, il totale resta zero\n'
  'induzione: polarizzazione + collegamento a terra → segno **opposto**', 'rosa')
A, B, CW, rr, yfine = tabella(e, 166, 36, [(176, 'viola', 'Grandezze vettoriali\n(frecce)')],
  '**Due cariche** $Q$ e $q$ a distanza $r$', '**Una carica sola** $Q$: il campo che genera')
(yv, hv), = rr
F = e.box(A, yv, CW, hv, '**Forza elettrica** (legge di Coulomb)\n'
  '$F = k\\,\\dfrac{\\lvert q_1\\, q_2\\rvert}{r^2}$\n'
  'lungo la retta che unisce le cariche\nrepulsiva fra cariche dello stesso segno, attrattiva fra segni opposti\n'
  '$[F] = \\text N$\n$k = 8{,}99\\times10^{9}\\ \\text N\\cdot\\text m^2/\\text C^2$', 'bianco')
e.dis(A + 250, yv + hv - 52, 135, 48, svg('0 0 135 50', carica(45, 25, 12, '+') + carica(90, 25, 12, '+') + fr(30, 25, 6, 25, '#7c3aed') + fr(105, 25, 129, 25, '#7c3aed')))
E = e.box(B, yv, CW, hv, '**Campo elettrico** $\\vec E$\n'
  '$E = k\\,\\dfrac{\\lvert Q\\rvert}{r^2}$    $\\vec E = \\dfrac{\\vec F}{q}$\n'
  'non dipende dalla carica di prova $q$\n'
  'esce dalle cariche positive, entra in quelle negative\n'
  '$[E] = \\text{N/C}$', 'bianco')
e.dis(B + 300, yv + hv - 80, 76, 76, svg('0 0 82 82', carica(41, 41, 11, '+') + radiali(41, 41, 15, 38, 8, True, '#7c3aed')))
e.fr(F, E, '$\\div\\, q$', 'freccia', 'viola')
Y = yfine + 24
HB = 700 - Y
e.box(10, Y, 235, HB, '**Sovrapposizione degli effetti**\n'
  'ogni carica agisce come se le altre non ci fossero\n'
  '$\\vec F_{tot} = \\vec F_1 + \\vec F_2 + \\cdots$\n$\\vec E_{tot} = \\vec E_1 + \\vec E_2 + \\cdots$\n'
  'somma **vettoriale** (regola del parallelogramma)', 'verde')
e.box(255, Y, 235, HB, '**Forza elettrica e gravità**\n'
  'stessa forma: dipendono da $1/r^2$\n'
  'la gravità attrae sempre; la forza elettrica può anche respingere\n'
  'fra particelle cariche la forza elettrica è enormemente più intensa', 'giallo')
li = e.box(500, Y, 245, HB, '**Linee di campo**\n'
  'tangenti a $\\vec E$ in ogni punto\nescono da +, entrano in −\nnon si incrociano mai\npiù fitte dove $E$ è più intenso', 'azzurro')
un = e.box(755, Y, 235, HB, '**Campo uniforme**\n'
  'stesso modulo, direzione e verso in ogni punto\n'
  'fra due lastre piane cariche con segni opposti: dalla lastra + alla lastra −', 'azzurro')
e.dis(860, Y + HB - 52, 80, 46, svg('0 0 80 46', '<line x1="8" y1="3" x2="8" y2="43" stroke="#be123c" stroke-width="3"/><line x1="72" y1="3" x2="72" y2="43" stroke="#1d4ed8" stroke-width="3"/>'
  + ''.join(fr(13, y, 66, y, '#0284c7', 1.3, 5) for y in (10, 23, 36))))
e.salva('elettrostatica-1')

# ═════════ ELETTROSTATICA, PARTE 2 ═════════
e = M("L'elettrostatica (parte 2)", SIMB_E + ['K', 'm_e', 'm_p', '\\vec a'], UNI_E)
e.box(300, 2, 400, 32, "L'energia elettrica", 'azzurro', 'titolo')
A, B, CW, rr, yfine = tabella(e, 38, 36, [(160, 'arancio', 'Grandezze scalari\n(numeri con segno)')],
  '**Due cariche** $Q$ e $q$ a distanza $r$', '**Una carica sola** $Q$: il potenziale che genera')
(ys, hs), = rr
U = e.box(A, ys, CW, hs, '**Energia potenziale elettrica** $U$\n'
  '$U = k\\,\\dfrac{Q\\,q}{r}$ (cariche con il loro segno)\n'
  'negativa se si attraggono, positiva se si respingono; zero a distanza infinita\n$[U] = \\text J$', 'bianco')
V = e.box(B, ys, CW, hs, '**Potenziale elettrico** $V$\n'
  '$V = \\dfrac{U}{q} = k\\,\\dfrac{Q}{r}$ ($Q$ con il suo segno)\n'
  'non dipende dalla carica di prova\n'
  '$U = q\\,V$\n$[V] = \\text V = \\text{J/C}$ (volt)', 'bianco')
e.fr(U, V, '$\\div\\, q$', 'freccia', 'arancio')
Y = yfine + 24
so = e.box(10, Y, 300, 135, '**Sovrapposizione degli effetti**\n'
  'ogni carica contribuisce come se le altre non ci fossero\n'
  '$U_{tot} = U_1 + U_2 + \\cdots$\n$V_{tot} = V_1 + V_2 + \\cdots$\n'
  'somma **algebrica** (con i segni)', 'verde')
eq = e.box(320, Y, 300, 135, '**Superfici equipotenziali**\n'
  'punti con lo stesso $V$\nsempre $\\perp$ alle linee di campo\n'
  'per una carica: sfere concentriche\nfra due lastre: piani paralleli alle lastre', 'azzurro')
dv = e.box(630, Y, 360, 135, '**Differenza di potenziale** (tensione)\n'
  '$\\Delta V = V_{arrivo} - V_{partenza}$, in volt\n'
  '$\\Delta U = q\\,\\Delta V$\n'
  'senza differenza di potenziale una carica lasciata libera non si muove', 'viola')
Y2 = Y + 135 + 22
HB = 703 - Y2
fo = e.box(10, Y2, 300, HB, '**Una carica in un campo**\n'
  '$\\vec F = q\\,\\vec E$ (verso opposto a $\\vec E$ se $q<0$)\n'
  '$\\vec a = \\dfrac{q}{m}\\,\\vec E$: dipende dalla particella\n'
  'il peso di elettroni e protoni si trascura', 'giallo')
en = e.box(320, Y2, 300, HB, '**Il moto con l\'energia**\n'
  '$K + U$ resta costante\n'
  'ogni carica va verso $U$ più bassa: le positive verso $V$ più basso, le negative verso $V$ più alto\n'
  'partendo da ferma: $K = \\lvert q\\rvert\\,\\lvert\\Delta V\\rvert$', 'giallo')
mi = e.box(630, Y2, 360, HB, '**Esperimento di Millikan**\n'
  'goccioline d\'olio cariche ferme fra due lastre: $\\lvert q\\rvert\\,E = m\\,g$\n'
  'le cariche misurate sono sempre multipli interi di $e$: la carica è quantizzata', 'rosa')
e.fr(V, dv, '', 'tratteggiata', 'viola')
e.salva('elettrostatica-2')

# ═════════ MISURAZIONE ═════════
m = M('La misura',
      ['\\times10^{n}', '10^{-3}', '10^{3}', '\\ell', '\\mu', '\\text{k}', '\\text{M}', '\\text{G}', '\\text{c}', '\\text{m}', '\\text{n}'],
      ['m', 'kg', 's', 'K', 'A', 'mol', 'cd', '\\text{m}^2', '\\text{m}^3', '\\text{dm}^3', '\\text{cm}^3', '\\ell'])
m.box(300, 6, 400, 36, 'La misura', 'azzurro', 'titolo')
si = m.box(10, 52, 300, 215, '**Sistema Internazionale (SI)**\n7 grandezze fondamentali:\n'
  'lunghezza — metro (m)\nmassa — chilogrammo (kg)\ntempo — secondo (s)\ntemperatura — kelvin (K)\n'
  'corrente elettrica — ampere (A)\nquantità di sostanza — mole (mol)\nintensità luminosa — candela (cd)', 'azzurro')
de = m.box(10, 305, 300, 95, '**Grandezze derivate**\nsi ottengono dalle fondamentali con le formule\n'
  'area: $\\text m^2$, volume: $\\text m^3$\n$1\\ \\ell = 1\\ \\text{dm}^3$', 'verde')
ns = m.box(355, 52, 300, 110, '**Notazione scientifica**\n$a\\times10^{n}$ con $1 \\le a < 10$\n'
  '$n > 0$: numero grande; $n < 0$: numero piccolo\n'
  'sulla calcolatrice: E al posto di $\\times10$', 'viola')
op = m.box(355, 205, 300, 150, '**Operazioni**\n'
  '$(a\\times10^{n})\\cdot(b\\times10^{m}) = a b\\times10^{n+m}$\n'
  '$\\dfrac{a\\times10^{n}}{b\\times10^{m}} = \\dfrac{a}{b}\\times10^{n-m}$\n'
  'somma: prima lo stesso esponente, poi $(a \\pm b)\\times10^{n}$', 'viola')
te = m.box(700, 52, 290, 90, '**Il tempo** (non decimale)\n$1\\ \\text{min} = 60\\ \\text s$\n$1\\ \\text h = 3600\\ \\text s$', 'grigio')
co = m.box(700, 185, 290, 195, '**Convertire fra prefissi**\nconta i salti sulla retta dei prefissi: il numero di salti è l\'esponente\n'
  'salti verso destra: esponente **negativo**\nsalti verso sinistra: esponente **positivo**\n'
  'aree: ogni salto vale il **doppio**\nvolumi: ogni salto vale il **triplo**', 'arancio')
pr = m.box(10, 425, 980, 270, '**Prefissi** e retta dei prefissi\nsono gli stessi per tutte le unità di misura', 'giallo')
P = [('p', 'pico', '10⁻¹²', 40), ('n', 'nano', '10⁻⁹', 125), ('μ', 'micro', '10⁻⁶', 210), ('m', 'milli', '10⁻³', 295),
     ('c', 'centi', '10⁻²', 350), ('d', 'deci', '10⁻¹', 405), ('—', 'unità', '10⁰', 460), ('da', 'deca', '10¹', 515),
     ('h', 'etto', '10²', 570), ('k', 'kilo', '10³', 625), ('M', 'Mega', '10⁶', 710), ('G', 'Giga', '10⁹', 795), ('T', 'Tera', '10¹²', 880)]
corpo = fr(15, 60, 935, 60, '#374151', 2, 9)
for (sim, nome, pot, x) in P:
    grande = sim in ('p', 'n', 'μ', 'm', '—', 'k', 'M', 'G', 'T')
    corpo += f'<line x1="{x}" y1="{48 if grande else 52}" x2="{x}" y2="{72 if grande else 68}" stroke="#7c3aed" stroke-width="{2.5 if grande else 1.6}"/>'
    corpo += txt(x, 36, sim, 20 if grande else 16, '#1f2937', False)
    corpo += txt(x, 92, pot, 14, '#7c3aed', False)
    corpo += txt(x, 112, nome, 12, '#64748b', False)
m.dis(20, 490, 960, 125, svg('0 0 960 125', corpo))
m.fr(si, de); m.fr(ns, op); m.fr(pr, co)
m.salva('misurazione')

# ═════════ GRANDEZZE E VARIAZIONE ═════════
v = M('Grandezze unitarie e variazione',
      ['x', 'y', 'z', '[x]', '\\Delta x', 'x_f', 'x_i', '\\Delta t', '\\Delta s', '\\text{var}_{x,t}', '\\text{var}_{x,s}'],
      ['m', 'kg', 's', 'h', '€', '\\text{km/h}', '\\text{kg/m}^3', '€/\\text{kg}'])
v.box(250, 6, 500, 36, 'Grandezze unitarie e variazione', 'azzurro', 'titolo')
gu = v.box(10, 52, 290, 130, '**Grandezza unitaria**\nrapporto tra due grandezze\n'
  '$\\text{gr. unitaria} = \\dfrac{\\text{grandezza 1}}{\\text{grandezza 2}}$\nsi misura in (unità della grandezza 1)/(unità della grandezza 2)', 'azzurro')
pp = v.box(10, 235, 290, 140, '**Proporzionalità** in $x = \\dfrac{y}{z}$\n'
  '$x$ e $y$ **direttamente** proporzionali: se $y$ cresce, $x$ cresce\n'
  '$x$ e $z$ **inversamente** proporzionali: se $z$ cresce, $x$ cala', 'verde')
uf = v.box(355, 52, 290, 105, '**Dalla formula all\'unità**\n'
  '$x = \\dfrac{y}{z} \;\\Rightarrow\; [x] = \\dfrac{[y]}{[z]}$\n'
  '$x = y\\cdot z \;\\Rightarrow\; [x] = [y]\\times[z]$', 'viola')
fu = v.box(355, 215, 290, 105, '**Dall\'unità alla formula**\n'
  'se $[x] = A/B$, probabilmente $x$ è il rapporto tra una grandezza misurata in $A$ e una misurata in $B$', 'viola')
inv = v.box(700, 52, 290, 250, '**Invertire una formula**\n'
  'si fa la **stessa operazione** su entrambi i membri, finché la grandezza cercata resta da sola\n'
  'mosse: moltiplicare o dividere entrambi i membri per una grandezza\n'
  'scambiare i membri è sempre permesso\n'
  'cerca la strada con meno mosse', 'arancio')
va = v.box(355, 405, 290, 105, '**Variazione**\n$\\Delta x = x_f - x_i$\n'
  '$\\Delta x > 0$: $x$ aumenta; $\\Delta x < 0$: diminuisce', 'giallo')
vt = v.box(10, 560, 290, 110, '**Variazione nel tempo**\n$\\text{var}_{x,t} = \\dfrac{\\Delta x}{\\Delta t}$\n'
  'unità: quella di $x$ divisa per un tempo', 'giallo')
vs = v.box(700, 560, 290, 110, '**Variazione nello spazio**\n$\\text{var}_{x,s} = \\dfrac{\\Delta x}{\\Delta s}$\n'
  'unità: quella di $x$ divisa per una lunghezza', 'giallo')
v.fr(gu, pp); v.fr(uf, fu, '', 'doppia'); v.fr(va, vt); v.fr(va, vs)
v.fr(gu, uf, 'unità', 'tratteggiata')
v.salva('grandezze-variazione')

# ═════════ ENERGIA ═════════
en = M("L'energia",
       ['L', 'F', '\\Delta s', 'P', '\\Delta t', 'K', 'U', 'E', 'm', 'v', 'g', 'h', 'h_i', 'v_f', 'Q', '\\Delta E', '\\Delta K', 'L_{U\\to S}', 'L_{S\\to U}'],
       ['J', 'W', 'N', 'm', 's', 'kg', '\\text{m/s}', '\\text{m/s}^2', '\\text{J/s}'])
en.box(300, 6, 400, 36, "L'energia", 'azzurro', 'titolo')
E0 = en.box(330, 50, 340, 62, '**Energia** — si misura in joule (J)\nnon si crea e non si distrugge: si trasforma', 'azzurro', 'testata')
La = en.box(10, 140, 290, 135, '**Lavoro** $L$\n$L = F\\cdot\\Delta s$ (forza parallela allo spostamento)\n'
  '$L>0$ se concordi, $L<0$ se opposti, $L=0$ se perpendicolari\n$[L] = \\text J = \\text N\\cdot\\text m$', 'viola')
Po = en.box(10, 335, 290, 95, '**Potenza** $P$\n$P = \\dfrac{L}{\\Delta t}$\n$[P] = \\text W = \\text{J/s}$', 'viola')
Ki = en.box(355, 140, 290, 100, '**Energia cinetica** $K$\n$K = \\dfrac12\\, m\\, v^2$\n'
  'teorema: $L_{tot} = \\Delta K$', 'verde')
Up = en.box(355, 300, 290, 110, '**Energia potenziale gravitazionale** $U$\n$U = m\\,g\\,h$\n'
  'quando il corpo sale di $h$ il peso compie $L = -m g h$', 'verde')
Ca = en.box(355, 600, 290, 95, '**Calore** $Q$\nl\'energia meccanica dissipata (attriti) diventa calore\n$[Q] = \\text J$', 'rosa')
Me = en.box(700, 140, 290, 70, '**Energia meccanica**\n$E = K + U$', 'giallo')
Is = en.box(700, 265, 290, 110, '**Sistema isolato**\n$E$ costante: $K_i + U_i = K_f + U_f$\n'
  'caduta da $h_i$: $v_f = \\sqrt{2\\,g\\,h_i}$', 'giallo')
NI = en.box(700, 430, 290, 120, '**Sistema non isolato**\nscambia lavoro con l\'Universo:\n$\\Delta E = L$\n'
  '$L = L_{U\\to S} - L_{S\\to U}$', 'arancio')
en.fr(La, Po, '$\\div\\,\\Delta t$'); en.fr(La, Ki, '$L = \\Delta K$'); en.fr(Ki, Me); en.fr(Up, Me)
en.fr(Me, Is); en.fr(Is, NI, '', 'tratteggiata'); en.fr(NI, Ca, 'dissipazione', 'tratteggiata')
en.salva('energia')

# ═════════ CALORE ═════════
c = M('Calore e temperatura',
      ['Q', 'T', 'T_i', 'T_f', '\\Delta T', 'c', 'm', '\\alpha', 'L_i', '\\Delta L', 'P', '\\Delta t', 'k', 'A', '\\Delta x', '^\\circ\\text{C}'],
      ['J', 'K', 'W', 'kg', 'm', '\\text{m}^2', '\\text{J/(kg K)}', '\\text{K}^{-1}'])
c.box(300, 6, 400, 36, 'Calore e temperatura', 'azzurro', 'titolo')
Q = c.box(10, 52, 290, 120, '**Calore** $Q$, $[Q] = \\text J$\nenergia che passa da un corpo a un altro\n'
  'va dal corpo più caldo al più freddo, fino all\'**equilibrio termico**', 'rosa')
sQ = c.box(10, 225, 290, 100, '**Segno del calore**\n$Q > 0$: entra nel sistema\n$Q < 0$: esce dal sistema\n$Q = 0$: nessuno scambio', 'rosa')
T = c.box(355, 52, 290, 120, '**Temperatura** $T$, $[T] = \\text K$\n'
  '$T^{\\text K} = T^{^\\circ\\text C} + 273{,}15$\nmisura l\'**agitazione termica** delle particelle', 'arancio')
Di = c.box(355, 225, 290, 85, '**Dilatazione termica**\n$\\Delta L = \\alpha\\,L_i\\,\\Delta T$\n$[\\alpha] = 1/\\text K$', 'arancio')
Cm = c.box(700, 52, 290, 160, '**Calorimetria**\n$Q = c\\,m\\,\\Delta T$\n'
  '$c$ = calore specifico: il calore che serve per scaldare di 1 K un kg di materiale\n$[c] = \\text J/(\\text{kg}\\cdot\\text K)$', 'viola')
Pt = c.box(355, 385, 290, 75, '**Potenza termica**\n$P = \\dfrac{Q}{\\Delta t}$, $[P] = \\text W$', 'viola')
Co = c.box(10, 540, 290, 110, '**Conduzione** (nei solidi)\nlegge di Fourier:\n$P = k\\,A\\,\\dfrac{\\Delta T}{\\Delta x}$', 'azzurro')
Cv = c.box(355, 540, 290, 110, '**Convezione** (liquidi e gas)\nspostamento di materia dovuto a una differenza di temperatura', 'azzurro')
Ir = c.box(700, 540, 290, 110, '**Irraggiamento**\nemissione di radiazione elettromagnetica: funziona anche nel vuoto', 'azzurro')
c.fr(Q, sQ); c.fr(T, Di, '$\\Delta T$'); c.fr(T, Cm, '$\\Delta T$')
c.fr(Pt, Co); c.fr(Pt, Cv); c.fr(Pt, Ir); c.fr(sQ, Pt, 'come si trasmette', 'tratteggiata')
c.salva('calore')
print('ok')
