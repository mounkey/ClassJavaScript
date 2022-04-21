let juego = "Juego Papel - Piedra y Tijera  <br> Papel (1).- <br> Piedra (2).- <br> Tijera (3)";
let selectmaquina =  Number(Math.floor(Math.random()*(2-0))+0);
let selectplayer =  Number(prompt("Juego Papel - Piedra y Tijera \n Papel (1).- \n Piedra (2).- \n Tijera (3)")-1);
let ganador = false;
do{
  if(selectmaquina > selectplayer){
    ganador = false;
    juego += "\n maquina" + selectmaquina + " y player "+selectplayer+"\n no ganaste, sigue porfavor";
  }else if(selectmaquina < selectplayer){
    ganador = true;
    juego += "\n maquina" + selectmaquina + " y player "+selectplayer+"\n ganaste, te feicitamos";
  }
  else{
     ganador =false;
     juego += "\n maquina" + selectmaquina + " y player "+selectplayer+"\n no ganaste, sigue porfavor";
  }
  alert(juego);
  selectmaquina   = Number(Math.floor(Math.random()*(2-0))+0);
  selectplayer =  Number(prompt("Juego Papel - Piedra y Tijera \n Papel (1).- \n Piedra (2).- \n Tijera (3)")-1);
}while(ganador == true)

