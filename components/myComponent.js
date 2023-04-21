const getData=async (apiURL) => {
    let API = 'https://rickandmortyapi.com/api/character/?page='+apiURL;
    const api = await fetch(API);
    const data = await api.json();
    console.log(data);

    divRes = document.querySelector("#resultado");
    divRes.innerHTML=''
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
    })
}
getData(1);