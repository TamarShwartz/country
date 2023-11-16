export const renderSelect = (_item) => {
    _item.forEach(element => {
        let select = document.querySelector("#id_select");
        select.innerHTML += `  <option>${element.name.common}</option>`
    });
}
export const creatHeader = () => {
    let head = document.getElementById("header");
    // console.log(head);
    let nav = document.createElement("nav");
    head.append(nav);
    nav.className = "col-md-6 align-items-center";
    let ul = document.createElement("ul");
    nav.append(ul);
    ul.className = "nav nav_ul px-2 font";
    head.innerHTML+=` <label class="col-auto m-2">search:</label>
    <input type="search" class="col-md-2" id="search_input">
    <select id="id_select" class="col-md-2 mx-2">
    <option>choose country</option>
    </select>`
}
export const creatLi = (element,doOnlyApi,doApi) => {
    let ul = document.querySelector(".nav_ul");
    let li = document.createElement("li");
    ul.append(li);
    li.className = "p-2";
    li.innerHTML = `<p>${element}</p>`;
    li.addEventListener("click", function () {
        element=="Home"? doApi() : doOnlyApi(element);
    }.bind(element))
}
