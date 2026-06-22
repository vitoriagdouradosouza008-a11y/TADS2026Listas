function limparRepetidos() {
    let vetor = [1, 3, 3, 7, 7, 7, 11, 16];
    let novoVetor = [];

    for (let i = 0; i < vetor.length; i++) {
        if (!novoVetor.includes(vetor[i])) {
            novoVetor.push(vetor[i]);
        }
    }

    document.getElementById("resultado").textContent = "Vetor sem repetições: " + novoVetor;
}