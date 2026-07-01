function somaLinhas() {
    let matriz = [
        [11, 22, 33, 44],
        [55, 66, 77, 88],
        [99, 15, 81, 45]
    ];

    let resultado = "<h3>Matriz:</h3>";

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            resultado += matriz[i][j] + " ";
        }

        resultado += "<br>";
    }

    resultado += "<br><h3>Soma da linhas:</h3>"

    for (let i = 0; i < matriz.length; i++) {
        
        let soma = 0;

        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }

        resultado += `A soma da linha ${i} é ${soma}<br>`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}