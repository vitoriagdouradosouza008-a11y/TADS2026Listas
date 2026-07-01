let poltrona = [];

for (let i = 0; i < 5; i++) {
        poltrona[i] = [];

    for (let j = 0; j < 5; j++) {
        poltrona[i][j] = "Livre";
    }
}

function reservaCinema() {
    console.log("Mapa das poltronas:");
    console.table(poltrona);

    let linha = Number(prompt("Digite a linha da poltrona:"));
    let coluna = Number(prompt("Digite a coluna da poltrona:"));

    if (linha < 0 || coluna < 0) {
        console.log("Reserva cancelada.");
        return;
    }

    if (linha >= 5 || coluna >= 5) {
        console.log("Posição inválida! Digite valores entre 0 e 4.");
    } else if (poltrona[linha][coluna] === "Livre") {
        poltrona[linha][coluna] = "Ocupada";
        console.log("Poltrona reservada com sucesso!");
    } else {
        console.log("Esse assento já está reservado!");
    }

    console.log("Mapa atualizado:");
    console.log(poltrona);
}