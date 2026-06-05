function listarConvidados() {
    let amigos = ["Ana", "Hugo", "Pedro", "Sofia", "João"];

    let resultado = "";
    
    for (let i = 0; i < amigos.length; i++) {
        resultado += "<p>" + amigos[i] + "</p>";
    }

    document.getElementById("resultado").innerHTML =resultado;

}