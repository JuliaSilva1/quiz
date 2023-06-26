var ranking = JSON.parse(localStorage.getItem('bdRank')) || []

ranking.sort((a , b) => {
    return b.ponto - a.ponto
})


for (var i in ranking){
    document.getElementById("ranking").innerHTML += `
    <tr>
        <td>${Number(i)+1}º</td>
        <td>${ranking[i].nome}</td>
        <td>${ranking[i].ponto}</td>
    </tr>
    
    `
}