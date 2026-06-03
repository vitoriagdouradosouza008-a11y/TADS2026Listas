function calcularTabuada() {
    let numeroInput = document.getElementById("numero");
    let numero = Number(numeroInput.value);
    let resultado = document.getElementById("resultado");

    if (numeroInput.value === "") {
        resultado.innerHTML = "Digite um número";
        return;
    }

    resultado.innerHTML = "";

    for (i = 1; i <= 10; i++) {
        resultado.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
    }
}
