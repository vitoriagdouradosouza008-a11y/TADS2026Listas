function buscaLinear() {

    let frutas = ["Kiwi", "Ameixa", "Laranja", "Morango", "Abacaxi"];

    let fruta = prompt("Digite o nome da fruta que deseja procurar (exemplo: Morango):");

    let encontrada = false;
    let posicao = 0;

    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i] == fruta) {
            encontrada = true;
            posicao = i;
        }
    }

    if (encontrada) {
        document.getElementById("resultado").innerHTML = "A fruta " + fruta + " foi encontrada na posição " + posicao + "."; 
    } else {
        document.getElementById("resultado").innerHTML = "Fruta não encontrada.<br><div style='text-aling: center;'>:-(</div>";
    }
}