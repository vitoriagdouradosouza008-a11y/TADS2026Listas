function adivinharNumero() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;
    let tentativas = 0;

    do {
        tentativa = Number(prompt("Adivinhe o número entre 1 e 10:"));
        tentativas++;

        if (tentativa !== numeroSecreto) {
            alert("Errou! Tente novamente.");
        }

    }while (tentativa !== numeroSecreto);

    document.getElementById("resultado").innerHTML = `Parabéns, você acertou em ${tentativas} tentativas!<br>O número secreto era o ${numeroSecreto}`;
}