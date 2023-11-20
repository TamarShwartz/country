
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
const firs_country = ["Israel", "France", "Thailand", "United States" ,"United Kingdom"];
const updateUi = () => {
    creatHeader();
    creatLi("Home", doOnlyApi, doApi);
    firs_country.forEach(element => {
        creatLi(element, doOnlyApi);
    });
}
const doApi = async () => {
    creatLoading();
    document.querySelector("main").innerHTML = "";
    firs_country.forEach(async (element) => {
        let url = `https://restcountries.com/v3.1/name/${element}?fullText=true`;
        let resp = await fetch(url);
        let data = await resp.json();
        createFirstCountry(data);
    })
}
const doOnlyApi = async (_name) => {
    creatLoading();
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
            hideLoading();
            document.querySelector("main").innerHTML = `<p class="text-center text-white display-6"  style="height: 70vh;">A non-existent country</p>`;
            console.error('Error:', error);
        });
};
const createFirstCountry = (_item) => {
    console.log(_item);
    hideLoading();
    _item.forEach(element => {
        let country = new firstCountry("main", element);
        country.render2(doOnlyApiByCode,doOnlyApi);
    });
}
const createCountry = (_item) => {
    console.log(_item);
    hideLoading();
    _item.forEach(element => {
        let country = new Country("main", element);
        country.render(doOnlyApiByCode,doOnlyApi);
    });
}
const selectApi = async () => {
    creatLoading();
    let url = `https://restcountries.com/v3.1/all`;
    let resp = await fetch(url);
    let data = await resp.json();
    hideLoading();
    renderSelect(data);
}
const doOnlyApiByCode = async (code) => {
    creatLoading();
    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    let resp = await fetch(url);
    let data = await resp.json();
    hideLoading();
    return data[0].name.common;
  }
  const creatLoading = () => {
    document.querySelector("#id_loading").style.display = "flex";
    document.querySelector("main").style.display = "none";
  }

  const hideLoading = () => {
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("main").style.display = "flex";
  }
init();