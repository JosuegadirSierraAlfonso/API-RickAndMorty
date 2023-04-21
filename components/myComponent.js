export default{
    mostrarData(num){
        const container = document.querySelector("#resultado")
    
        const worker = new Worker('./storage/ws.js')
        let API = 'https://rickandmortyapi.com/api/character/?page='+num      
        worker.postMessage(API)

        worker.addEventListener("message", (e)=>{
            container.innerHTML="";
            container.insertAdjacentHTML("beforeend",e.data);
        })


    }
}

