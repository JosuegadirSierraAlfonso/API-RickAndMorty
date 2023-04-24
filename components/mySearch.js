export default{
    showSectionSearch(){
        const container = document.querySelector("#search")

        const ws2 = new Worker("storage/wsMySearch.js", {type:"module"});

        ws2.postMessage({module: "showSearch"});
        ws2.addEventListener("message", (e)=>{
            container.innerHTML="";
            container.insertAdjacentHTML("beforeend",e.data);
        })
    }


}