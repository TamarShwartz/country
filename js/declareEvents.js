export const declareEvents=(doOnlyApi)=>{
    let search_input = document.querySelector("#search_input");
    search_input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let name=search_input.value;
            doOnlyApi(name);
        }
      });

    let select=document.querySelector("#id_select");
    select.addEventListener("change", function () {
        doOnlyApi(select.value);
    });
  }