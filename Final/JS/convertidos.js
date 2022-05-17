const date = document.querySelector("#fecha"); //fecha.

//Determinar fecha de hoy
const today =  luxon.DateTime;
date.innerHTML = `<b> ${today.now().toLocaleString()} </b>`;

const monedas= document.querySelector("select");// elegir el select
const input_cambio =document.querySelector("#cambioMoneda");
const resultado_cambio = document.querySelector("#resultadoConversion");
const valorDia = document.querySelector("#valorDia");
const convertidorPD = document.querySelector("#conversionPD");
const convertidorDP = document.querySelector("#conversionDP");
const btn = document.querySelector("#btnConversor");


convertidorPD.addEventListener('change', () => elegir("PD"))
convertidorDP.addEventListener('change', () => elegir("DP"))

const valores = {
  dolar:865.66,
  euro: 898.52,
  peso_arg : 7.38,
  peso_mex : 42.88
};

valorDia.innerText = valores.dolar

function elegir(convertidor){
  if (convertidor === "DP"){
    convertidorPD.checked = false;
    btn.addEventListener("click", () =>{
      switch(monedas.value){
        default:
          resultado_cambio.innerText = "hola";
        break;
      
        case "Dolar":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " + input_cambio.value * valores.dolar : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Euro":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " +  input_cambio.value * valores.euro : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Argentino":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " +  input_cambio.value * valores.peso_arg : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Mexicano":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " + input_cambio.value * valores.peso_mex : "No puedes dejar el valor sin ingresar un numero ";
        break;
      }
    })    
  } else if(convertidor === "PD"){
    convertidorDP.checked = false;
    btn.addEventListener("click", () =>{
      switch(monedas.value){
        default:
          resultado_cambio.innerText = "hola";
        break;
      
        case "Dolar":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " + input_cambio.value / valores.dolar : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Euro":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " +  input_cambio.value / valores.euro : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Argentino":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " +  input_cambio.value / valores.peso_arg : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Mexicano":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " + input_cambio.value / valores.peso_mex : "No puedes dejar el valor sin ingresar un numero ";
        break;
      }
    })
    }

}




