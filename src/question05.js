function verificarRoletaViciada(iteracoes) {

    var verde = 0;
    var vermelho = 0;
    var preto = 0;

    function determinarCor(numero) {
        if (numero === 0) {
            return "verde";
        } else if (numero % 2 === 0) {
            return "preto";
        } else {
            return "vermelho";
        }
    }
    
    for (var i = 0; i < iteracoes; i++) {
        var numero = Math.floor(Math.random() * 37);
        var cor = determinarCor(numero);
        switch (cor) {
            case "verde":
                verde++;
                break;
            case "vermelho":
                vermelho++;
                break;
            case "preto":
                preto++;
                break;
        }
    }

    //(pV = percentualVerde)
    //(pVo = percentualVermelho)
    //(pP = percentualPreto)
    var total = verde + vermelho + preto;
    var pV = (verde / total) * 100;
    var pVo = (vermelho / total) * 100;
    var pP = (preto / total) * 100;

    if (pV > 40 || pVo > 40 || pP > 40) {
        return `Roleta viciada.\nVerde: ${pV.toFixed(2)}%\nVermelho: ${pVo.toFixed(2)}%\nPreto: ${pP.toFixed(2)}%`;
    } else {
        return `A roleta parece normal.\nVerde: ${pV.toFixed(2)}%\nVermelho: ${pP.toFixed(2)}%\nPreto: ${pP.toFixed(2)}%`;
    }
}
