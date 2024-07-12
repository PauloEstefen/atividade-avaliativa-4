function converterTemperatura() {

//(tC = temperaturaConvertida)

    var origem = prompt("Digite a unidade de temperatura (Celsius, Fahrenheit ou Kelvin):").toLowerCase();
    var temperatura = parseFloat(prompt("Digite a temperatura a ser convertida:"));
    var destino = prompt("Digite a unidade de temperatura paraconverter (Celsius, Fahrenheit ou Kelvin):").toLowerCase();
    var tC;

    if (origem === "celsius") {
        if (destino === "fahrenheit") {
            tC = (temperatura * 1.8) + 32;
        } else if (destino === "kelvin") {
            tC = temperatura + 273.15;
        } else if (destino === "celsius") {
            tC = temperatura;
        } else {
            console.log("Unidade de destino inválida. Tente Celsius, Fahrenheit ou Kelvin.");
            return;
        }
    } else if (origem === "fahrenheit") {
        if (destino === "celsius") {
            tC = (temperatura - 32) * (5 / 9);
        } else if (destino === "kelvin") {
            tC = (temperatura - 32) * (5 / 9) + 273.15;
        } else if (destino === "fahrenheit") {
            tC = temperatura;
        } else {
            console.log("Unidade de destino inválida. Tente Celsius, Fahrenheit ou Kelvin.");
            return;
        }
    } else if (origem === "kelvin") {
        if (destino === "celsius") {
            tC = temperatura - 273.15;
        } else if (destino === "fahrenheit") {
            tC = (temperatura - 273.15) * 1.8 + 32;
        } else if (destino === "kelvin") {
            tC = temperatura;
        } else {
            console.log("Unidade de destino inválida. Tente Celsius, Fahrenheit ou Kelvin.");
            return;
        }
    } else {
        console.log("Unidade de origem inválida. Tente Celsius, Fahrenheit ou Kelvin.");
        return;
    }

    console.log(`A temperatura de ${temperatura} graus ${origem} é igual a ${tC.toFixed(2)} graus ${destino}.`);
}
