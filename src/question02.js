function vfP(texto) {

    var textoSemEspacos = texto.replaceAll(" ", "");
    var textoInvertido = textoSemEspacos.split('').reverse().join('');
    
    if (textoSemEspacos === textoInvertido) {
        return true;
    } else {
        return false;
    }
}

// Exemplos
// (vfP = verificarPalindromo)
// (nP = naoPalindromo1/2)

var palavra1 = "ovo";
var palavra2 = "ana";
var frase1 = "a torre da derrota";
var frase2 = "o lobo ama o bolo";

console.log(vfP(palavra1));
console.log(vfP(palavra2));
console.log(vfP(frase1));
console.log(vfP(frase2));

var nP1 = "casa";
var nP2 = "arroz com feijão";

console.log(vfP(nP1));
console.log(vfP(nP2));
