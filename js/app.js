
import Country from "./countryClass.js";
import firstCountry from "./firstCountryClass.js";
import { declareEvents } from "./declareEvents.js";
import { renderSelect, creatHeader, creatLi } from "./render.js";

const init = () => {
    updateUi();
    doApi();
    declareEvents(doOnlyApi);
    selectApi();
}
const firs_country = ["Israel", "France", "Thailand", "United States"];
const updateUi = () => {
    creatHeader();
    creatLi("Home", doOnlyApi, doApi);
    firs_country.forEach(element => {
        creatLi(element, doOnlyApi);
    });
}
const doApi = async () => {
    document.querySelector("main").innerHTML = "";
    firs_country.forEach(async (element) => {
        let url = `https://restcountries.com/v3.1/name/${element}?fullText=true`;
        let resp = await fetch(url);
        let data = await resp.json();
        createFirstCountry(data);
    })
}
const doOnlyApi = async (_name) => {
    let url = `https://restcountries.com/v3.1/name/${_name}?fullText=true`;
    await fetch(url)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            return resp.json();
        })
        .then((data) => createCountry(data))
        .catch((error) => {
            document.querySelector("main").innerHTML = `<p class="text-center text-white display-6"  style="height: 70vh;">A non-existent country</p>`;
            console.error('Error:', error);
        });
};
const createFirstCountry = (_item) => {
    console.log(_item);
    _item.forEach(element => {
        let country = new firstCountry("main", element);
        country.render2(doOnlyApiByCode,doOnlyApi);
    });
}
const createCountry = (_item) => {
    console.log(_item);
    _item.forEach(element => {
        let country = new Country("main", element);
        country.render(doOnlyApiByCode,doOnlyApi);
    });
}
const selectApi = async () => {
    let url = `https://restcountries.com/v3.1/all`;
    let resp = await fetch(url);
    let data = await resp.json();
    renderSelect(data);
}
const doOnlyApiByCode = async (code) => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    let resp = await fetch(url);
    let data = await resp.json();
    return data[0].name.common;
  }
init();