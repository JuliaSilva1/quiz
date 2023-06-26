var listaQuiz = []
listaQuiz = JSON.parse(localStorage.getItem('bdquiz'))
if (listaQuiz == null) {
    listaQuiz = []
}
function cadastrar(){
    var pergunta = document.getElementById("pergunta").value
    var imagem = document.getElementById("img").value
    var resposta = document.getElementById("resposta").value
    var resposta1 = document.getElementById ('resposta1').value
    var resposta2 = document.getElementById ('resposta2').value
    var resposta3 = document.getElementById ('resposta3').value
    var resCerta = document.getElementById("correta").value

    var quiz = {
        pergunta: pergunta,
        imagem: imagem,
        resposta: resposta,
        resposta1: resposta1,
        resposta2: resposta2,
        resposta3: resposta3,
        respCerta: resCerta
    }
    listaQuiz.push(quiz)
    localStorage.setItem('bdquiz', JSON.stringify(listaQuiz))
    alert ('Obrigado')
}
function carregarImg(){
    document.getElementById("img").src = document.getElementById('imagem').value
}
function limpar(){
    listaQuiz = []
    localStorage.setItem('bdquiz', JSON.stringify)
}
exibir()
function exibir(){
    document.getElementById("resultado").innerHTML = ''

    listaQuiz.forEach ((item, pos) => {
        document.getElementById('resultado').innerHTML +=
        `
        <div> 
            ${item.pergunta} 
            <br>
            <img src="${item.imagem}">
            <img class="excluidos" src='excluir.svg' onclick='exibirPergunta(${pos})'>
        </div>`
    })
}

function exibirPergunta(pos){
    if(confirm('Deseja realmente excluir essa pergunta?')){
        listaQuiz.splice(pos,1)
        localStorage.setItem('bdquiz', JSON.stringify(listaQuiz))
        exibirUsuario()
    }
}