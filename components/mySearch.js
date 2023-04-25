export default{
    showSectionSearch(){
        const container = document.querySelector("#search")
        const inputt=document.querySelector("#inputt")
        let name;
        let api;
        const ws2 = new Worker("storage/wsMySearch.js", {type:"module"});
        inputt.addEventListener("input", (e)=>{
            console.log("eventooo");
            name=e.target.value;
            api=`https://rickandmortyapi.com/api/character/?name=${name}`
            ws2.postMessage(api);
        })

        //console.log(name);

        

        

      


        ws2.addEventListener("message", (e)=>{
          


        })
    }


}