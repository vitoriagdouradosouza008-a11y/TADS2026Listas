function mostrarSequencia() {

    let anterior = 0;
    let atual = 1;
    let proximo;

   let fibonacci = `${anterior}, ${atual}`;

    for (let i = 2; i < 10; i++) {
        proximo = anterior + atual;
        fibonacci += `, ${proximo}`;

        anterior = atual;
        atual = proximo;
    }

    resultado.innerHTML = `Sequência Fibonacci: ${fibonacci}`;

}