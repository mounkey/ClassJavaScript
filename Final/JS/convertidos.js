const date = document.querySelector("#fecha"); //fecha.
let valor;

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
    let init = input_cambio.value;
    btn.addEventListener("click", () =>{
      switch(monedas.value){
        default:
          resultado_cambio.innerText = "hola";
        break;
      
        case "Dolar":
          resultado_cambio.innerText = input_cambio.value != "" ? `${init} Dolares  son $ ` + Math.round(input_cambio.value / valor.rates.USD) + "Pesos Chilenos": "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Euro":
          resultado_cambio.innerText = input_cambio.value != "" ? `${init} Euros son $ ` + Math.round(input_cambio.value / valor.rates.EUR) + "Pesos Chilenos": "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Argentino":
          resultado_cambio.innerText = input_cambio.value != "" ? `${init} Pesos Argentino son $ ` + Math.round(input_cambio.value / valor.rates.ARS) + "Pesos Chilenos" : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Mexicano":
          resultado_cambio.innerText = input_cambio.value != "" ? `${init} Pesos Mexicano son $ ` + Math.round(input_cambio.value / valor .rates.MXN) + "Pesos Chilenos" : "No puedes dejar el valor sin ingresar un numero ";
        break;
      }
    })    
  } else if(convertidor === "PD"){
    convertidorDP.checked = false;
    let init = input_cambio.value;
    btn.addEventListener("click", () =>{
      switch(monedas.value){
        default:
          resultado_cambio.innerText = "Elige unas de las monedas disponibles";
        break;
      
        case "Dolar":
          resultado_cambio.innerText = input_cambio.value != "" ? `${init} Pesos Chilenos son  $ ` + input_cambio.value * valor.rates.USD + " Dolares" : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Euro":
          resultado_cambio.innerText = input_cambio.value != "" ? `${init} Pesos Chilenos son  $ ` + input_cambio.value * valor.rates.EUR + "Euros": "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Argentino":
          resultado_cambio.innerText = input_cambio.value != "" ? `${init} Pesos Chilenos a $`+  input_cambio.value * valor.rates.ARS + "Pesos Argentinos" : "No puedes dejar el valor sin ingresar un numero ";
        break;

        case "Peso Mexicano":
          resultado_cambio.innerText = input_cambio.value != "" ? `${init} Pesos Chilenos a $` + input_cambio.value * valor.rates.MXN + "Pesos Mexicanos": "No puedes dejar el valor sin ingresar un numero ";

        break;
      }
    })
    }
}

let myHeaders = new Headers();
myHeaders.append("apikey", "OGOUemZbKb6V0elUzwsROVFEFAfndqJZ");

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
