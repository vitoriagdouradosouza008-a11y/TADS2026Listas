function juntarPecas() {
    let vetor1 = [3, 12, 16];
    let vetor2 = [10, 7, 81]; 

    let vetor3 = vetor1.concat(vetor2);

    document.getElementById("resultado").textContent = vetor3;
}