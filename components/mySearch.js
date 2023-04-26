export default{
    showSectionSearch(){
        const inputt=document.querySelector("#inputt")
        let name;
        let api;
        let contenedor = document.querySelector("#resultado")
        
        const ws2 = new Worker("storage/wsMySearch.js", {type:"module"});
        inputt.addEventListener("input", (e)=>{
            name=e.target.value;
            api=`https://rickandmortyapi.com/api/character/?name=${name}`
            ws2.postMessage(api);
        })

        ws2.addEventListener("message", (e)=>{
          let {message, data} = e.data;
            if(message === "input"){
                contenedor.innerHTML = data
            }
        })
    }
}