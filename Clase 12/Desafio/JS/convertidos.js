const date = document.querySelector("#fecha"); //fecha.

//Determinar fecha de hoy
const today =  new Date().toLocaleDateString();
date.innerHTML = `<b> ${today} </b>`;

const monedas= document.querySelector("select");// elegir el select
const input_cambio =document.querySelector("#cambioMoneda");
const resultado_cambio = document.querySelector("#resultadoConversion");
const valorDia = document.querySelector("#valorDia");
const convertidorPD = document.querySelector("#conversionPD");
const convertidorDP = document.querySelector("#conversionDP");


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
    monedas[1].addEventListener('click',()=>{
      resultado_cambio.textContent = input_cambio.value != "" ? "$ " + input_cambio.value * valores.dolar : "No puedes dejar el valor sin ingresar un numero ";
    })
    monedas[2].addEventListener('click',()=>{
      resultado_cambio.textContent = input_cambio.value != "" ? "$ " +  input_cambio.value * valores.euro : "No puedes dejar el valor sin ingresar un numero ";
    })
    monedas[3].addEventListener('click',()=>{
      resultado_cambio.textContent = input_cambio.value != "" ? "$ " +  input_cambio.value * valores.peso_arg : "No puedes dejar el valor sin ingresar un numero ";
    })
    monedas[4].addEventListener('click',()=>{
      resultado_cambio.textContent = input_cambio.value != "" ? "$ " + input_cambio.value * valores.peso_mex : "No puedes dejar el valor sin ingresar un numero ";
    })
  }
  else if(convertidor === "PD"){
    convertidorDP.checked = false;
    monedas[1].addEventListener('click',()=>{
      resultado_cambio.textContent = input_cambio.value != "" ? "$ " + Math.round(input_cambio.value / valores.dolar) : "No puedes dejar el valor sin ingresar un numero ";
    })
    monedas[2].addEventListener('click',()=>{
      resultado_cambio.textContent = input_cambio.value != "" ? "$ " + Math.round(input_cambio.value / valores.euro) : "No puedes dejar el valor sin ingresar un numero ";
    })
    monedas[3].addEventListener('click',()=>{
      resultado_cambio.textContent = input_cambio.value != "" ? "$ " + Math.round(input_cambio.value / valores.peso_arg) : "No puedes dejar el valor sin ingresar un numero ";
    })
    monedas[4].addEventListener('click',()=>{
      resultado_cambio.textContent = input_cambio.value != "" ? "$ " + Math.round(input_cambio.value / valores.peso_mex) : "No puedes dejar el valor sin ingresar un numero ";
    })
  }
}




