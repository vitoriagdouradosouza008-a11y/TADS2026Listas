function jogoVelha() {
    let matriz = [
        ["O", "", ""],
        ["X", "X", "X"],
        ["", "", "O"]
    ];

    let tabuleiro = "";

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tabuleiro += "<div class='casa'>" + matriz[i][j] + "</div>";
        }
    }

    document.getElementById("tabuleiro").innerHTML = tabuleiro;

    let vencedor = "";

    for (let i = 0; i < 3; i++) {
        if (matriz[i][0] !== "" &&
            matriz[i][0] === matriz[i][1] &&
            matriz[i][1] === matriz[i][2]
        ) {
            vencedor = matriz[i][0];
        }
    }

    if (vencedor !== "") {
       document.getElementById("resultado").innerHTML = "O jogador " + vencedor + " venceu!";
    } else {
        document.getElementById("resultado").innerHTML = "Nenhum jogador venceu.";
    }
}