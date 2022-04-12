let num = 0, numRep = 0, numRes = 0;
let texto, result;
let selectmenu = Number(prompt("Programa matematico de multiplicacion y Potencias \n 1.- Multiplicar.- \n 2.- Potencia.-\n Eliga el menu por favor"));
switch(selectmenu){
  case 1:
    num = Number(prompt("Por favor ingrese el numero de la tabla"));
    numRep = Number(prompt("hasta cual numero quieres llegar"));
    document.write("esta es la tabla del "+ num +"<br><br>");
    for(let i = 0; i <= numRep; i +=1){
      if (i == 0)
      {
        result = num + " x " + i + " = 0 " + "<br>";       
      }
      else
      {
        result += num + " x " + i + " = " + num * i + "<br>";     
      } 
    }
    document.write(result);
    break;

    case 2:
      num = Number(prompt("Por favor ingrese la base de la potencia"));
      numRep = Number(prompt("hasta que numero quieres llegar con la potencias"));
      document.write("esta es la potencia de base "+ num +" hasta "+ numRep+ "<br> <br>")
      for(let i = 0; i <= numRep; i +=1){
        if (i == 0)
        {
          result = num + " elevado a " + i + " = 1 <br>"; 
        }
        else
        {
          result += num + " elevado a " + i + " = " + Math.pow(num, i) + "<br>"; 
        }
      }
      document.write(result);
    break;

    default:
      document.write ("No hay mas menu, Gracias");

}
document.write(" \n Gracias por ocupar el sistema si desea reiniciarlo, en Windows y Linux aprete F5 y si esta en mac comand + R");

