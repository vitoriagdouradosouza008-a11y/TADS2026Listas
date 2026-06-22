function somaElementos() {
    let matriz = [];
    let soma = 0;

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];

        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1;
            soma += matriz[i][j];
        }
    }

    let resultado = "<h2>Matriz 3x3:</h2>";

    for (let i = 0; i < 3; i++) {
        resultado += matriz[i].join(" ") + "<br>";
    }
    
    resultado += `<p>Soma total: ${soma}</p>`;

    document.getElementById("resultado").innerHTML = resultado;
}