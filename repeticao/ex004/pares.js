function numerosPares() {

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    for (let i = 2; i < 50; i += 2) {
        resultado.innerHTML += i;

        if (i < 50) {
            resultado.innerHTML += ", ";
        }
        
    }
}