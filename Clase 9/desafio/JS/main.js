let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let mail = document.querySelector("#mail");
let boton = document.querySelector("#btn")//boton entrar
let botonEnviar = document.createElement("button")//boton enviar
let inputBox = document.createElement("input");//donde se ingresa el texto para chatear

let chat = document.querySelector("#chat")//div
let chatbox = document.querySelector("#chatbox");//textarea

boton.addEventListener("click",()=>{//boton entrar
  if(!nombre.value){
    nombre.value ="Ingrese nombre";
} else{
    chat.appendChild(inputBox)
    chat.appendChild(botonEnviar)
    botonEnviar.textContent="Enviar";
    chatbox.value += `Bienvenido ${nombre.value}`;
  }
});
botonEnviar.addEventListener("click",()=>{
  if(inputBox.value)
    chatbox.value += "\n"+inputBox.value;
    inputBox.value = "";
});