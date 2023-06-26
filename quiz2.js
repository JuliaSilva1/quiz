var listaQuiz = []
listaQuiz = JSON.parse(localStorage.getItem('bdquiz'))
if (listaQuiz == null) {
    listaQuiz = []
}
var resCerta = ''
var listaSorteio = []
function sortear(){
    if(listaQuiz.length == listaSorteio.length){
        alert('Todas as perguntas foram respondidas')
        location.href="final.html"
        return
    }

    do {
        var sorteio = parseInt(Math.random()*listaQuiz.length)
        var posVetor = listaSorteio.indexOf(sorteio)
    } while (posVetor != -1)
    listaSorteio.push(sorteio)
    




    document.getElementById("pergunta").innerHTML = `${listaQuiz[sorteio].pergunta}`
    document.getElementById("img").src = `${listaQuiz[sorteio].imagem}`
    document.getElementById("resposta").innerHTML = `${listaQuiz[sorteio].resposta}`
    document.getElementById("resposta1").innerHTML = `${listaQuiz[sorteio].resposta1}`
    document.getElementById("resposta2").innerHTML = `${listaQuiz[sorteio].resposta2}`
    document.getElementById("resposta3").innerHTML = `${listaQuiz[sorteio].resposta3}`
    resCerta = listaQuiz[sorteio].respCerta
}

sortear()

function certa(correta){
    if(resCerta == correta ){
        alert ("Resposta CORRETA")
        adicionar()
    }
    else{
        alert("Sua reposta está ERRADA")
    }
    sortear()

}

function adicionar() {
    var valor1 = document.getElementById("numero1").innerHTML
    valor1 = Number (valor1) + 10
    document.getElementById("numero1").innerHTML = `${valor1}`
    localStorage.setItem('pontuacao', valor1)
}