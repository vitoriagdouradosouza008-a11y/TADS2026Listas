function soma() {
    let numeroInput = document.getElementById("numero");
    let numero = Number(numeroInput.value);
    let resultado = document.getElementById("resultado");

    if (numeroInput.value === "" || numero < 1 || numero > 50) {
        resultado.textContent = "Digite um número entre 1 e ";
        return;
    }

    let somaTotal = 0;
    let conta = "";

    for (let i = 1; i <= numero; i++) {
        somaTotal += i;

        conta += i;

        if (i != numero) {
            conta += " + ";
        }
    }

    resultado.innerHTML = `${conta} = ${somaTotal}`;
}