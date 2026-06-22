function ordemInversa() {
    let numeros = [];

    for (let i = 0; i < 5; i++) {
        numeros[i] = Number(prompt("Digite o " + (i + 1) + "º número:"));

    }

    let resultado = "Ordem inversa:<br>";

    for (let i = numeros.length - 1; i >= 0; i--) {
        resultado += numeros[i] + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}