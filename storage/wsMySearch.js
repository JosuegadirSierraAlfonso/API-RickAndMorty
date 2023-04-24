let wsMySearch = {
    showSearch(p1){
        return `
        <input type="text" class="search text-center col-lg-6 col-md-6 col-xl-6 col-sm-12" placeholder="Search..." name="" id="search-bar">
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMySearch[`${e.data.module}`](e.data.data));
})