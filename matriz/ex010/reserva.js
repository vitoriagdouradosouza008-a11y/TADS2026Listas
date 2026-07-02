let reservaCinema = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

function mapaCinema() {
    const container = document.getElementById('mapa-cinema');

    container.innerHTML = '';

    if (poltrona.length === 0) {
        let reserva = document(prompt("Digite a linha da poltrona que deseja reservar:"))
        
    }
}

function reservarPoltrona(linha, coluna) {
    let poltrona = prompt("Digite 1 para reservar a poltrona ou 0 para liberar:");
    if (poltrona === "0") {
        reservaCinema[linha][coluna] = 0;
    } else if (poltrona === "1") {
    }
}