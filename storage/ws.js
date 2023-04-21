const getData=async (apiURL) => {
    
    const api = await fetch(apiURL);
    const data = await api.json();
     
    let plantilla=""
    data.results.map((item)=>{
       
        plantilla+= `
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
        
        
    });
    return plantilla;    
}

self.addEventListener("message", async(e)=>{
    const result= await getData(e.data);
    
    postMessage(result)
})