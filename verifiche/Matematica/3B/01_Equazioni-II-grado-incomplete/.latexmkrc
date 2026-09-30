$out_dir = 'build';
# Permette a preambolo-verifica.tex / preambolo-verifica-dsa.tex di trovare
# preambolo-verifica-core.tex (e ai file di questa cartella di trovare i
# preamboli stessi) anche da qui, che sta un livello più in profondità
# rispetto alle altre cartelle di verifiche/ (Materia/Classe/file.tex).
$ENV{'TEXINPUTS'} = '../../../' . ($ENV{'TEXINPUTS'} ? ':'.$ENV{'TEXINPUTS'} : ':');
$ENV{'OPENTYPEFONTS'} = '../../../fonts//' . ($ENV{'OPENTYPEFONTS'} ? ':'.$ENV{'OPENTYPEFONTS'} : ':');
