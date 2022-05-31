const date = document.querySelector("#fecha"); //fecha.
const claveApi = '25487|5K4hn7MxTCyyRvncL7fC28Q^1M0mHjh5';

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


function elegir(convertidor){
  changeMoney();
  if (convertidor === "DP"){
    convertidorPD.checked = false;
    btn.addEventListener("click", () =>{
      switch(monedas.value){
        default:
          resultado_cambio.innerText = "hola";
        break;
      
        case "Dolar":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " + input_cambio.value * valor.rates.USD : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Euro":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " +  input_cambio.value * valor.rates.EUR : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Argentino":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " +  input_cambio.value * valor.rates.ARS : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Mexicano":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " + input_cambio.value * valor.rates.MXN : "No puedes dejar el valor sin ingresar un numero ";
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
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " + Math.round(input_cambio.value / valor.rates.USD) : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Euro":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " +  input_cambio.value / valor.rates.EUR : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Argentino":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " +  input_cambio.value / valor.rates.ARS: "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Mexicano":
          resultado_cambio.innerText = input_cambio.value != "" ? "$ " + input_cambio.value / valor .rates.MXN : "No puedes dejar el valor sin ingresar un numero ";
        break;
      }
    })
    }

}


  
  let myHeaders = new Headers();
myHeaders.append("apikey", "VbQft7A08KrCDOjSRKxX5NuFh1buypZ3");

 let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
function changeMoney(){
//fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=CLP&base=EUR", requestOptions)  
fetch("https://api.apilayer.com/exchangerates_data/latest?base=CLP&symbols=USD,EUR,ARS,MXN", requestOptions)
.then(response => response.text())
  .then(result =>{
    valor = JSON.parse(result);
  })
  .catch(error => console.log('error', error));
}

function changeMoney2(){
  fetch("http://api.cambio.today/v1/full/CLP/json?key=25487|5K4hn7MxTCyyRvncL7fC28Q^1M0mHjh5")
  .then(response => response.json)
  .then.apply(result => console.log(result))
  .catch(error => console.log('error', error));
}