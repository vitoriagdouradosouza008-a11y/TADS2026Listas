function maiorTabela() {
    let matriz = [
        [7, 10, 11, 12],
        [3, 81, 16, 91],
        [44, 14, 5, 21],
        [9, 22, 19, 25]
    ];

    let maior = matriz[0][0];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }

    let resultado = "<h2>Matriz 4x4:</h2>";

    for (let i = 0; i < 4; i++) {
        resultado += matriz[i].join(" ") + "<br>";
    }

    resultado += `<p>Maior valor: ${maior}</p>`;

    document.getElementById("resultado").innerHTML = resultado;
}