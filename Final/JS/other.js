
const date = document.querySelector("#fecha"); //fecha.
const dividendo = document.querySelector("#dividendo");


// fecha
const today =  luxon.DateTime;
date.innerHTML = `<b> ${today.now().toLocaleString()} </b>`;

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
.then(result => {
  valor = JSON.parse(result);
  dividendo.innerHTML =` <h2>Dolar</h2> <br>
  <p> Un dolar en peso chileno es  ${Math.round(1/valor.rates.USD)}</p><br>
  <h2>Euro</h2><br>
  <p>Un Euro en peso Chileno es ${Math.round(1/valor.rates.EUR)}</p><br>
  <h2>Peso Argentino</h2><br>
  <p>Un Peso Argentino es ${Math.round(1/valor.rates.ARS)}</p><br>
  <h2>Peso Mexicano</h2><br>
  <p>Un Peso Mexicano es ${Math.round(1/valor.rates.MXN)}</p>
  `;
})
  .catch(error => console.log('error', error));
}
changeMoney();