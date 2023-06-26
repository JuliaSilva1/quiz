function iniciar(){
    var nome = document.getElementById("nome").value

    var colocacao = {
        nome: nome
    }

    localStorage.setItem('colocacao',nome)
}