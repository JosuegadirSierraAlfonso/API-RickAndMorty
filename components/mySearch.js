export default{
    showSectionSearch(){
        const inputt=document.querySelector("#inputt")
        let name;
        let api;
        let api2;
        let contenedor = document.querySelector("#resultado")
        
        const ws2 = new Worker("storage/wsMySearch.js", {type:"module"});
        inputt.addEventListener("input", (e)=>{
            name=e.target.value;
            api=`https://rickandmortyapi.com/api/character/?name=${name}`
            api2=`https://rickandmortyapi.com/api/character/${name}`

            if (!isNaN(+name)){
                ws2.postMessage({message: "api2", data: api2})
            }else{
                ws2.postMessage({message: "api", data: api})
            }
        })

        ws2.addEventListener("message", (e)=>{
          let {message, data} = e.data;
            if(message === "input"){
                contenedor.innerHTML = data
            }else if (message === "id"){
                contenedor.innerHTML = data
            }
        })
    }
}