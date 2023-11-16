import Country from "./countryClass.js";

export default class firstCountry extends Country
{
    constructor(_parent,_item){
        super(_parent,_item);
      }
      render2(doOnlyApiByCode,doOnlyApi) {
        let div = document.createElement("div");
        div.className = "col-3 border m-2 cards ";
        document.querySelector(this.parent).append(div);
        div.innerHTML = `
    <img src="${ this.flag}" alt="${this.name}" class="m-1 img">
    <p class="display-6 font">name:${ this.name}</p>`
    div.addEventListener("click", () => super.render(doOnlyApiByCode,doOnlyApi));
   }
}