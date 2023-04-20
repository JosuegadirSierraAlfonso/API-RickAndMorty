const apiRick = async (page) =>{
    let url = "https://rickandmortyapi.com/api/character/?page="+page;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);



    divRes = document.querySelector("#resultado");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement('div')
        divItem.innerHTML=`
        


        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${item.name}</h4>
                    <p class="card-text"><b>Status: </b>${item.status}</p>
                    <p class="card-text"><b>Specie: </b>${item.species}</p>
                    <p class="card-text"><b>Gender: </b>${item.gender}</p>
                </div>
            </div>
        </div>
        `
        divRes.appendChild(divItem);
    });



    /* divInf = document.querySelector("#info");
    data.results.map(item=>{
        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div>
            <ul class="pagination">
                <li class="page-item disabled">
                    <span class="page-link" onclick="apiRick('${item.prev}')">Previous</span>
                </li>
                <li class="page-item">
                    <a class="page-link" onclick="apiRick('${item.prev}')">Next</a>
                </li>
            </ul>
        </div>
        `
        divInf.appendChild(divItem);
    }); */



}
apiRick()




















/* const API = 'https://rickandmortyapi.com/api/character/?page=';

const getData = (apiURL) =>{
    return fetch(apiURL)
        .then(response => response.json())
        .then(json => { printData(json)})

}


/* mostrar en pantalla */

/* const printData = (data) =>{
    let html = '';
    data.results.forEach(c => {
        return`
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    });
    document.getElementById("#resultado").innerHTML = html
}



getData(API); */