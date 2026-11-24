# Diapositive: i .tex e i file ausiliari stanno qui in build/, i PDF finiscono
# nella cartella sopra (Diapositive/). LaTeX Workshop passa -outdir=build/build:
# "build/build" è un collegamento a "..", quindi il PDF arriva comunque lì.
$aux_dir = '.';
$out_dir = '..';
