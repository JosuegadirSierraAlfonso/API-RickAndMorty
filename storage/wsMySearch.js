
    const buscarP=async(url)=>{
        console.log(url);
        const resp=await fetch(url)
        const result=await resp.json();
        console.log(result);
    }

self.addEventListener("message", async(e) => {
    const response=await buscarP(e.data)
    console.log(response);
})