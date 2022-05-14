let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let mail = document.querySelector("#mail");
let boton = document.querySelector("#btn")//boton entrar
let botonEnviar = document.createElement("button")//boton enviar
let inputBox = document.createElement("input");//donde se ingresa el texto para chatear
let chat = document.querySelector("#chat")//div
let chatbox = document.querySelector("#chatbox");//textarea

boton.addEventListener("click",()=>{//boton entrar
  if((!nombre.value) && (!apellido.value) && (!!mail.value)){
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
chatbox.style.transition="500ms"

let RanBorderColor = (ele, speed, interval, op) => {// efecto Pablo 
  ele.style.transition = speed;
  function exe() {
    let colorRandom = Math.random() * 360;
    ele.style.border = `5px solid hsl(${colorRandom}, 90%, 50%, ${op})`;
  }
  setInterval(exe, interval);
};
RanBorderColor(chatbox, 1000,1000,0.2)
RanBorderColor(inputBox, 1000,1000,0.2)