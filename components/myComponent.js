
const API = 'https://rickandmortyapi.com/api/character/';

const getData = (apiURL) => {
    return fetch(apiURL)
        .then(response => response.json())
        .then(json => {
            console.log(json),
            printData(json),
            printPagination(json)
        })
        .catch(error => {console.error('Error: ',error)})
        

}

const printData = (data) =>{
    let html = '';
    data.results.forEach(item => {
        html += '<div class="col">'
        html += '<div class="card" style="width: 18rem;">'
        html += `<img src="${item.image}" class="card-img-top" alt="...">`
        html += '<div class="card-body">'
        html += `<h4 class="card-title">${item.name}</h4>`
        html += `<p class="card-text"><b>Status: </b>${item.status}</p>`
        html += `<p class="card-text"><b>Specie: </b>${item.species}</p>`
        html += `<p class="card-text"><b>Gender: </b>${item.gender}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'       
    });
    document.getElementById('resultado').innerHTML = html
}

const printPagination = (info) => {

    let preDisable = info.prev == null ? 'disabled' : '';
    let nextDisable = info.next == null ? 'disabled' : '';

    let html = `<li class="page-item ${preDisable}"><a class="page-link" onclick="getData('${info.prev}')">Previous</a></li>`
    html += `<li class="page-item" ${nextDisable}><a class="page-link" onclick="getData('${info.prev}')">Next</a></li>`


    document.getElementById('pagination').innerHTML = html;
}

getData(API);


