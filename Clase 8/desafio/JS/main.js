/*
let boton =document.querySelector("button");
let body = document.querySelector("body");
let cambiarFondo = function(){
  body.style.backgroundColor="#AAFFBB";
}
boton.addEventListener("click",cambiarFondo);  */

let body = document.getElementsByTagName("body")[0];
let Lector = document.getElementById("lector");
let Resp = document.getElementById("respuesta");

function changeColor(){
  body.style.background='#000000';
}

function addText(){
  Lector.innerHTML = "<p >Hola como estas??</p> <br> <button onclick= 'btnRespuesta()'>Respuesta</button> <br>";
  Lector.innerHTML += "<input type ='text'> ";
  lector.style.color= "yellow";
  Lector.style.fontSize= "2rem";
}

function btnRespuesta(){
  let Persona = document.getElementsByTagName("input")[0];
  Resp.textContent= `Hola espero que estes bien ${Persona.value}`;
  Resp.style.color = "blue";
  Resp.style.fontSize = "3rem";
}

