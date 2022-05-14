const date = document.querySelector("#fecha"); //fecha.

//Determinar fecha de hoy
const today =  new Date().toLocaleDateString();
date.innerHTML = `<b> ${today} </b>`;

const monedas= document.querySelector("#moneda");
const input_cambio =document.querySelector("#cambioMoneda");
const resultado_cambio = document.querySelector("#resultadoConversion");
const valorDia = document.querySelector("#valorDia");

const valores = {
  dolar:865.66,
  euro: 898.52,
  peso_arg : 7.38,
  peso_mex : 42.88
};

valorDia.innerText = valores.dolar

monedas[1].addEventListener('click',()=>{
  resultado_cambio.textContent = "$ " + input_cambio.value * valores.dolar
})
monedas[2].addEventListener('click',()=>{
  resultado_cambio.textContent ="$ " +  input_cambio.value * valores.euro
})
monedas[3].addEventListener('click',()=>{
  resultado_cambio.textContent ="$ " +  input_cambio.value * valores.peso_arg
})
monedas[4].addEventListener('click',()=>{
  resultado_cambio.textContent = "$ s" + input_cambio.value * valores.peso_mex
})



