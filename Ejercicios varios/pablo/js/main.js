const btn = document.querySelectorAll("button"); //Vector con todos los botones
const selectPlayer = document.querySelector("#selectPlayer");
const selectMachine = document.querySelector("#selectMachine");
const selectorGame = document.querySelector("#selector_game");
const estado = document.querySelector("#Estado");

let opcionPersona = "";
let opcionPC = "";
let selPers, selMach;

let opciones = ["Papel", "Piedra", "Tijera"];

for (let x = 0; x < btn.length - 1; x+=1) {
  btn[x].addEventListener("click", () => {
    opcionPersona = opciones[x];
    opcionNum(opcionPersona);
  });
}

function opcionNum(opcionPersona){
    switch(opcionPersona){
   
        case "Papel":
            selPers = 0;
            selectPlayer.innerHTML = opcionPersona;
            selectPlayer.textContent = selPers; 
            selMach = Number(Math.floor(Math.random()*(3-0))+0);
            selectMachine.innerText = selMach;
            estado.textContent = "";
            break;

        case "Piedra":
            selPers = 1;
            selectPlayer.innerText = opcionPersona; 
            selectPlayer.innerText = selPers;
            selMach = Number(Math.floor(Math.random()*(3-0))+0);
            selectMachine.innerText = selMach;
            estado.textContent = "";
            break;


        case "Tijera":
            selPers = 2;
            selectPlayer.innerText = opcionPersona;
            selectPlayer.innerText = selPers;
            selMach = Number(Math.floor(Math.random()*(3-0))+0);
            selectMachine.innerText = selMach;
            estado.textContent = "";
            break;

    }
}

    selectorGame.addEventListener("click", () =>{
        if(selMach > selPers){
            ganador = false;
             estado.textContent = "Perdiste";
          }else if(selMach < selPers){
            ganador = true;
            estado.textContent = "Ganaste";
          }
          else{
             ganador =false;
             estado.textContent = "Empataste";            
          } 
    } )
  
  