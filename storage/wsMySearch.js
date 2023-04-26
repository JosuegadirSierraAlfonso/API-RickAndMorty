    const buscarP=async(url)=>{
        const resp=await fetch(url)
        const result=await resp.json();

        let plantilla=""
        result.results.map((item)=>{
       
        plantilla+= `
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.image}" class="card-img-top" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${item.name}</h4>
                        <p class="card-text"><b>Status: </b>${item.status}</p>
                        <p class="card-text"><b>Specie: </b>${item.species}</p>
                        <p class="card-text"><b>Gender: </b>${item.gender}</p>
                    </div>
                </div>
            </div>
        </div>
        `  
    });
    return plantilla;   
    }

self.addEventListener("message", async(e) => {
    const response=await buscarP(e.data)

    postMessage({message: "input", data: response})
})