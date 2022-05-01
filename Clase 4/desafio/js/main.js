const Menu = "<br>-- Menu Sistema de calculo de prestamos -- <br> 1.- Prestamo simple. <br> 2.- Prestamo Compuesto.- <br> 3.- Salir .-";
let selectMenu, out, montoPrestado, interes, tiempo, cuotaMensual, totalPagar, interesAcumulado; //Variables Int o Float
let salida, selectSubMenu; //Variables string


menu();

function menu(){  
  document.write(Menu);
  selectMenu = Number(prompt("-- Menu Sistema de calculo de prestamos -- \n 1.- Prestamo simple. \n 2.- Prestamo Compuesto.- \n 3.- Salir .-\n\n Seleccione el numero del menu que desea ingresar"));
}

switch(selectMenu){
  case 1:
    document.write("<br>Interes Simple <br>");
    montoPrestado = Number(prompt("Por favor ingresar monto del Prestamo"));
    interes = parseFloat(prompt("Agregue el Interes"));
    tiempo = Number(prompt("Coloque los años que desea pagar"));
    totalPagar = prestamoInteresSimple(montoPrestado, interes, tiempo);
    cuotaMensual= mensualPago(totalPagar, tiempo)
    salidaIntSimp();
    subMenu();
    break;

  case 2:
    document.write("<br>Interes Compuesto <br>");
    montoPrestado = Number(prompt("Por favor ingresar monto del Prestamo"));
    interes = parseFloat(prompt("Agregue el Interes"));
    tiempo = Number(prompt("Coloque los años que desea pagar"));
    totalPagar = prestamoInteresCompuesto(montoPrestado, interes, tiempo);
    interesAcumulado = totalPagar - montoPrestado;
    salidaIntComp();
    subMenu2();
    break;

  case 3:
    Salir();
    break;
}

function Salir(){
  out = Number(prompt("Salir (1), si quiere continuar (2)?"));
  if(out == 1){
    confirm("Estas seguro de salir ?");
    alert("Hasta Pronto!!!");
    document.write("<br> <b>Fin del Programa, Gracias por ocuparlo</b>")
  }
  else
  {
    menu();
  }
}

function prestamoInteresSimple(monto, interes, tiempo){
  let num = monto * interes * tiempo; 
  Math.round(num);
  return num;
}

function prestamoInteresCompuesto(monto, interes, tiempo){
  let meses = tiempo * 12;
  let int = 1+parseFloat(interes/100);
  let porc = Math.pow(int, meses);
  let num = Math.round(monto * porc);
  return num;
}

function mensualPago(pago, tiempo){
  let mens= tiempo*12;
  let monto = Math.round(pago/mens);
  return monto; 
}

function salidaIntSimp(){
  salida= "<br><br> -- Credito con interes simple: -- <br> Capital : "+ montoPrestado + ".- <br> Intereses: "+ parseFloat(interes) +".- <br> Años: "+ tiempo +",- <br> Cuota mensual "+ cuotaMensual + ",- <br> Total credito: "+ totalPagar +".-<br> <br>";
  document.write(salida);
}

function salidaIntComp(){
  salida= "<br><br> -- Credito con interes compuesto: -- <br> Capital : "+ montoPrestado + ".- <br> Intereses: "+ parseFloat(interes) +".- <br> Años: "+ tiempo +",- <br> Total credito: "+ totalPagar +".-<br> Intereses acumulado: "+ +"-<br> <br>";
  document.write(salida);
}

function subMenu(){
  selectSubMenu= Number(prompt("\n\n -- Credito con interes simple: -- \n Capital : "+ montoPrestado + ".- \n Intereses: "+ parseFloat(interes) +".- \n Años: "+ tiempo +".-\n Cuota mensual "+ cuotaMensual + ".-\n Total credito: "+ totalPagar +".\n\n Quieres irte al menu (1) o desea salir (2)"));
  if(selectSubMenu == 1){
    menu();
  }
  else{
    Salir();
  }
}

function subMenu2(){
  selectSubMenu= Number(prompt("\n\n -- Credito con interes compuesto: -- \n Capital : "+ montoPrestado + ".- \n Intereses: "+ parseFloat(interes) +".- \n Años: "+ tiempo +".-\n  Total credito: "+ totalPagar +".--\n Intereses acumulado: "+ interesAcumulado +" \n\n Quieres irte al menu (1) o desea salir (2)"));
  if(selectSubMenu == 1){
    menu();
  }
  else{
    Salir();
  }
}