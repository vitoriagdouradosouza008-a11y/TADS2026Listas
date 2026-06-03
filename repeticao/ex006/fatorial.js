function numeroFatorial() {

    let numero = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (numero < 0) {
        resultado.innerHTML = "Digite um número entre 1 e 20:";
        return;

    }

    let fatorial = 1;
    let cont = "";

    for (let i = numero; i >= 1; i--) {
        fatorial *= i;

        cont += i;

        if (i > 1) {
            cont += " * ";
        }
    }

    resultado.innerHTML = `Fatorial ${numero} = ${cont} = ${fatorial}`;
}