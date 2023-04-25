import myComponent from "./components/myComponent.js";
import mySearch from "./components/mySearch.js";


mySearch.showSectionSearch();
const select=document.querySelector("#pagina")

for (let i = 1; i <=42; i++) {
    select.insertAdjacentHTML("beforeend", `<option value="${i}">${i}</option>`);
}

let number=1;
myComponent.mostrarData(number);
select.addEventListener("change", (e)=>{
    number= e.target.value;
    myComponent.mostrarData(number);
})



