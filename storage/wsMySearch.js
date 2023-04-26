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

        postMessage({message: "input", data: plantilla});
    });
    return plantilla;   
    }

    const searchId=async(url)=>{
        const resp=await fetch(url)
        const result=await resp.json();

        let plantilla=""
        let item = await fetch(result.url);
        let itemR = await item.json();
       
        plantilla+= `
        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${itemR.image}" class="card-img-top" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">${itemR.name}</h4>
                        <p class="card-text"><b>Status: </b>${itemR.status}</p>
                        <p class="card-text"><b>Specie: </b>${itemR.species}</p>
                        <p class="card-text"><b>Gender: </b>${itemR.gender}</p>
                    </div>
                </div>
            </div>
        </div>
        `  
        postMessage({message: "id", data: plantilla});
    return plantilla;   
    }

    onmessage = (e) =>{
        let {message, data} = e.data;

        if (message === "api"){
            buscarP(data);
        }else if (message === "api2"){
            searchId(data)
        }
    }
