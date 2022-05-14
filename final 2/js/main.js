function jugadoringresados() {
  let jugadoringresados = prompt("Ingresar nombre del jugador") 
console.log (" el jugador ingresado es " + jugadoringresados);

}
jugadoringresados();



function jugadoringresado (nombre, ciudad, edad, pais) { 
  this.nombre = nombre
  this.ciudad = ciudad
  this.edad  = edad
  this.pais  = pais
  this.hablar = function() { console.log (" hola Soy " + this.nombre, + this.edad, )}
    
  }

 const jugadoringresado1 = new jugadoringresado ( "pablo", "camcum", 47, "mexico" );
 const jugadoringresado2 = new jugadoringresado ( "Silvo", "merlo", 49, "argentina");

  jugadoringresado1.hablar(); 
  jugadoringresado2.hablar();
  console.log( "nombre" in jugadoringresado);

  suma = "pablo += silvio"
  let pablo = 47;
  let silvio = 49;

  let resultadoSuma = pablo + silvio;
  console.log ( "El resultado de pablo +silvio es: " +resultadoSuma);

  class Personas {
constructor ( nombre, edad, ciudad,) {

this.nombre = nombre;
this.edad = edad;
this.ciudad = ciudad;


}

hablar() {
console.log ( " Hola soy " + this.nombre , "me gusta el juego y ganar");

}


}
const Persona = new Personas (" Martin", 47, " San telmo " );
Persona.hablar();




let membresiaIngresada = prompt("Dime una membresia, mensual, semanal, diaria");
if (membresiaIngresada === "" ) {
alert (" ingrese una menbresia ");
}

else if (membresiaIngresada == "mensual" ){
alert ("membresia es mensual" );
}

else if (membresiaIngresada == "semanal" ){
alert ("membresia es semanal" );
}
else if (membresiaIngresada ==  "diaria"){
alert("membresia diaria");
}
else{
alert(" No Se encontro") ;

}

const membresia = [

  {nombre: " semanal ", precio: 300},
  {nombre: " diaria ", precio: 500},
  {nombre: " mensual ", precio: 100},
]
const total = membresia.reduce((acc,el) => acc + el.precio,0)
console.log(total)


let juego = "Juego Papel - Piedra y Tijera  <br> Papel (1).- <br> Piedra (2).- <br> Tijera (3)";
let selectmaquina =  Number(Math.floor(Math.random()*(2-0))+0);
let selectplayer =  Number(prompt("Juego Papel - Piedra y Tijera \n Papel (1).- \n Piedra (2).- \n Tijera (3)")-1);
let ganador = false;
do{

if(selectmaquina > selectplayer){
  ganador = false;
  juego += "\n maquina" + selectmaquina + " y player "+selectplayer+"\n no ganaste, sigue por favor";
}else if(selectmaquina < selectplayer){
  ganador = true;
  juego += "\n maquina" + selectmaquina + " y player "+selectplayer+"\n ganaste, te feicitamos";
}
else{
   ganador =false;
   juego += "\n maquina" + selectmaquina + " y player "+selectplayer+"\n no ganaste, sigue por favor";
}
alert(juego);
selectmaquina   = Number(Math.floor(Math.random()*(2-0))+0);
selectplayer =  Number(prompt("Juego Papel - Piedra y Tijera \n Papel (1).- \n Piedra (2).- \n Tijera (3)")-1);
} while(ganador == true);