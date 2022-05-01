let usuario = [];

class Usuario{
  constructor(nombre, apeP, apeM, tpInt, montIni, interes, periodo, monFin){
    this.nombre = nombre,
    this.apeP = apeP,
    this.apeM = apeM,
    this.tpInt = tpInt,
    this.montIni = montIni,
    this.interes = interes,
    this.periodo = periodo,
    this.monFin = monFin
  }

  
  intSimple(){
    this.montoFInal = Math.round(this.montoInicial * this.interes * this.periodo);
  }
  
  intComp(){
    let meses = this.periodo * 12;
    let int = 1+parseFloat(this.interes/100);
    let porc = Math.pow(int, meses);
    this.montoFInal = Math.round(this.montoInicial * porc);
  }

}
 function tp(num){
  if(num == 2 ){
    return ("Interes Compuesto");
  }
  else{
    return ("Interes Simple");
  }
}
function periodoTP(num){
  if(num == 2){
     return (this.periodo * 12 + " Meses ");
    }
  else{
    return (this.periodos + "Meses");
  }
}

function ingresoUsuario(){
  nom = prompt("Agregue Nombre: ");
  aPat = prompt("Agregue Apellido Paterno");
  aMat = prompt("Agregue Apellido Materno");
  mInic= Number(prompt("Agregue el valor inicial del Prestamo"));
  inte = parseFloat(prompt("Agregue el interes que le cobran "));
  per = Number(prompt("Agregue a cuanto años quiere el prestamo"));
}

function imprimir(){
  for(const us in Usuario)
    console.log(us);
}

function imprimirUlt(){
  fin = Number(Usuario.length);
  for(let i = 0; i< Usuario.length; i +=1){

  }
}

let select; // entero o float
let cerrar= false;
let persons;

let nom, aPat, aMat; // Datos Usuario
let mInic, inte, per; // Datos Interes

let User =[];
const Users = new Usuario();
//Funciones:

select = Number(prompt("Bienvenido al simulador de Creditos (interes Simple - Interes Compuesto \n \n 1.- Interes Simple.- \n 2.- Interes Compuesto.- \n 3.- Cerrar "));

do{
  switch(select){
    default:      
    break

    case 1:
      ingresoUsuario();
      Users.intSimple();
      User.push(new Usuario(nom, aPat, aMat, 1, mInic, inte, per, 0));
      alert(Usuario);
      console.log(Usuario);
      break;
  }

}while(!cerrar);