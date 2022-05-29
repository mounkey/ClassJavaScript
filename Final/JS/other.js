let myHeaders = new Headers();
myHeaders.append("apikey", "VbQft7A08KrCDOjSRKxX5NuFh1buypZ3");
let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
let valor;
changeMoney();
const date = document.querySelector("#fecha"); //fecha.
const dividendo = document.querySelector("#div");


// fecha
const today =  luxon.DateTime;
date.innerHTML = `<b> ${today.now().toLocaleString()} </b>`;
 


function changeMoney(){
  fetch("https://api.apilayer.com/exchangerates_data/latest?base=CLP&symbols=USD,EUR,ARS,MXN", requestOptions)
  .then(response => response.text())
    .then(result =>{
      valor = JSON.parse(result);
      vd= valor.rates.USD;
      ve = valor.rates.EUR;
      va = valor.rates.ARS;
      vm = valor.rates.MXN;
    })
    .catch(error => console.log('error', error));
}

  dividendo.innerHTML=`<h4>Dolar</h4><br>
  <p>Un dolar en peso Chileno es:${vd}</p><br>
  <h4>Euro</h4><br>
  <p>Un Euro en peso Chileno es:${ve}</p><br> 
  <h4>Peso Argentino</h4><br><p>Un Peso Argentino en peso Chilero es:${va}</p><br><h4>Peso Mexicano</h4><br><p>Un Peso Mexicano en peso Chilero es:${vm}</p><br>`;

