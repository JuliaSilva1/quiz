document.getElementById("resultado").innerHTML = localStorage.getItem('pontuacao')

function colocacoes(){
    var nome = localStorage.getItem('colocacao')
    var ponto = localStorage.getItem('pontuacao')
    var ranking = JSON.parse(localStorage.getItem('bdRank')) || []

    var pontoFinal = {
        nome : nome,
        ponto: ponto
    }
    ranking.push(pontoFinal)

    localStorage.setItem('bdRank', JSON.stringify(ranking))
    location.href="ranking.html"
}