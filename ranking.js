var ranking = JSON.parse(localStorage.getItem('bdRank')) || []
for (var i in ranking){
    document.getElementById("ranking").innerHTML += `
    <tr>
        <td>${Number(i)+1}º</td>
        <td>${ranking[i].nome}</td>
        <td>${ranking[i].ponto}</td>
    </tr>
    
    `
}