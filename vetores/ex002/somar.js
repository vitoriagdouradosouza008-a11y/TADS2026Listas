function somarTudo() {
    let numeros = [10, 15, 20, 25, 30];

    let soma = 0;
    let conta = "";

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];

        if (i == numeros.length - 1) {
            conta += numeros[i];
        } else {
            conta += numeros[i] + " + ";
        }
    }

    document.getElementById("resultado").innerHTML = conta + " = " + soma; 
}