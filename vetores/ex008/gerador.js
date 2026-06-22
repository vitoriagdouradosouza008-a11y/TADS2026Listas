function gerarMultiplos() {
    let base = Number(prompt("Digite o número base:"));
    let qtd = Number(prompt("Quantos múltiplos deseja ver?"));

    let = multiplos = [];

    for (let i = 1; i <= qtd; i++) {
        multiplos.push(base * i);
    }

    document.getElementById("resultado").innerHTML = "Vetor: [" + multiplos.join(", ") + "]";
}