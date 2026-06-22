function diagonalPrincipal() {
    let matriz = [
        [1, 11, 12, 13],
        [14, 2, 15, 16],
        [17, 18, 3, 19],
        [20, 21, 22, 4]
    ];

    let textoMatriz = " ";
    let textoDiagonal = " ";

    for (let i = 0; i < 4; i++) {
        textoMatriz += matriz[i].join(" ") + "<br>"
    }

    for(let i = 0; i < 4; i++) {
        textoDiagonal += matriz[i][i] + " ";
    }

    document.getElementById("matriz").innerHTML = textoMatriz;
    document.getElementById("diagonal").innerHTML = textoDiagonal;
}