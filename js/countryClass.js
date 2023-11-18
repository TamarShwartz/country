export default class Country {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.population = _item.population;
        this.capital = _item.capital[0];
        this.flag = _item.flags.png;
        this.languages = _item.languages[Object.keys(_item.languages)[0]];
        this.lat = _item.latlng[0];
        this.lon = _item.latlng[1];
        this.borders = _item.borders;
    }
    render(doOnlyApiByCode,doOnlyApi) {
        document.querySelector(this.parent).innerHTML = "";
        let div = document.createElement("div");
        div.className = "col-10 border p-2 m-auto card font ";
        document.querySelector(this.parent).append(div);
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-duration', '1000');
        div.setAttribute('data-aos-delay', '200');
        // data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
        div.innerHTML = `<div class="row justify-content-between mb-1"><div class="col-5">
    <img src="${this.flag}" alt="${this.name}" class=" imgs"></div>
   <div class="col-5"> <p>name:${this.name}</p>
    <p>population:${this.population}</p>
    <p>capital:${this.capital}</p>
    <p>languages:${this.languages}</p>
    <p id="borders">borders:</p>
    </div></div>
<div class="Mymap" style="height: 50vh;">
          <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
          src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=iw&z=10&amp;output=embed">
          </iframe>
         </div>
    `
    if (this.borders) {
        this.borders.forEach(async (item , i) => {
            let fullNmae = await doOnlyApiByCode(item);
            let span = document.createElement("span");
            span.className = "lank"
            span.innerHTML=(i== this.borders.length-1)?`${fullNmae}.`:`${fullNmae},`;
            document.querySelector("#borders").append(span);
            span.addEventListener("click", async() => {
              let name=await doOnlyApiByCode(item);
              console.log(name);
              doOnlyApi(name);
            });
          }
       );
      } else { document.querySelector("#borders").innerHTML += "none" }
  
    }
}


