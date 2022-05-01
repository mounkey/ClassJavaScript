function jugadoringresado (nombre, ciudad, edad, pais) { 
  this.nombre = nombre,
  this.ciudad = ciudad,
  this.edad  = edad,
  this.pais  = pais,
  this.hablar = function() { console.log (" hola Soy " + this.nombre, + this.edad, )}
  }

 const jugadoringresado1 = new jugadoringresado ( "pablo", "camcum", 47, "mexico" );
 const jugadoringresado2 = new jugadoringresado ( "Silvo", "merlo", 49, "argentina");

  jugadoringresado1.hablar(); 
  jugadoringresado2.hablar();
  console.log( "nombre" in jugadoringresado);


let juego = "Juego Papel - Piedra y Tijera  <br> Papel (1).- <br> Piedra (2).- <br> Tijera (3)";
let selectmaquina =  Number(Math.floor(Math.random()*(2-0))+0);
let selectplayer =  Number(prompt("Juego Papel - Piedra y Tijera \n Papel (1).- \n Piedra (2).- \n Tijera (3)")-1);
let ganador = false;
do{
if(selectmaquina > selectplayer){
  ganador = false;
  juego += "\n maquina" + selectmaquina + " y "+ jugadoringresado1.hablar()+selectplayer+"\n no ganaste, sigue porfavor";
}else if(selectmaquina < selectplayer){
  ganador = true;
  juego +=jugadoringresado1.hablar()+ "\n maquina" + selectmaquina + " y "+ jugadoringresado1.hablar()+selectplayer+"\n ganaste, te feicitamos";
}
else{
   ganador =false;
   juego +=  jugadoringresado1.hablar() +"\n maquina" + selectmaquina + " y  "+ jugadoringresado1.hablar()+selectplayer+"\n no ganaste, sigue porfavor";
}
alert(juego);
selectmaquina   = Number(Math.floor(Math.random()*(2-0))+0);
selectplayer =  Number(prompt("Juego Papel - Piedra y Tijera \n Papel (1).- \n Piedra (2).- \n Tijera (3)")-1);
} while(ganador == true)