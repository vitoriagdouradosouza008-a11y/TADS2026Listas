function somaNumeros() {
    let numeroInput = document.getElementById("numero");
    let numero = Number(numeroInput.value);
    let resultado = document.getElementById("resultado");

    if (numeroInput.value === "" || numero < 1 || numero > 20) {
        resultado.textContent = "Digite um número entre 1 e 20 ";
        return;
    }

    let soma = 0;
    let conta = "";

    for (let i = 1; i <= numero; i++) {
        soma += i;

        conta += i;

        if (i != numero) {
            conta += " + ";
        }
    }

    resultado.innerHTML = `${conta} = ${soma}`;
}