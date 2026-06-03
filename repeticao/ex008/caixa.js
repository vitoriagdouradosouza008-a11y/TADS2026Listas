function caixaInfinita() {
    let total = 0;

    let preco = Number(prompt("Digite o preço do produto:"));

    while (preco !== 0) {
        total += preco;

        preco = Number(prompt("Digite o preço de outro produto ou digite 0 (Zero) para finalizar:"));
    }

    document.getElementById("resultado").innerHTML = `Valor total da compra: R$ ${total.toFixed(2)}`;
}