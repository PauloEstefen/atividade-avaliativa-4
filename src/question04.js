function calcularPontuacao(gols, passesCertos, passesErrados) {

    var pontuacao = (gols * 50) + (passesCertos * 10) - (passesErrados * 5);
    return pontuacao;
}

// Função para determinar o desempenho do jogador com base na pontuação
function determinarDesempenho(pontuacao) {
    if (pontuacao < 50) {
        return "Péssima partida";
    } else if (pontuacao < 100) {
        return "Partida ruim";
    } else if (pontuacao < 150) {
        return "Fez o básico";
    } else if (pontuacao < 200) {
        return "Foi bem na partida";
    } else {
        return "Jogou demais";
    }
}
// (pC = passesCertos)
// (pE = passesErrados)

function calcularDadosJogador() {
    var nome = prompt(" Nome do jogador:");
    var gols = parseInt(prompt(`Quantos gols ${nome} fez?`));
    var pC = parseInt(prompt(`Quantos passes certos ${nome} fez?`));
    var pE = parseInt(prompt(`Quantos passes errados ${nome} teve?`));
    var pontuacao = calcularPontuacao(gols, pC, pE);
    var desempenho = determinarDesempenho(pontuacao);

    console.log(`${nome}: Pontuação ${pontuacao}. ${desempenho}`);
}
