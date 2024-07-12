function contarVogais(texto) {
    
    var contador = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    } 
    return contador;
}

var texto = prompt("Digite um texto:");
var numeroVogais = contarVogais(texto);
alert(`O texto "${texto}" possui ${numeroVogais} vogais.`);