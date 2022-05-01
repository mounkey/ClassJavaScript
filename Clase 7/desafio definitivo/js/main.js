class Producto{
  constructor(nombre, precioneto, unidad, fecha, obs){
    this.nombre = nombre,
    this.precioneto = precioneto,
    this.preciofinal,
    this.unidad = unidad,
    this.fecha = fecha,
    this.obs = obs
    this.iva();
  }

 iva(){
    this.iva = Number(Math.round(this.precioneto *0.19));
    this.preciofinal = Number(this.precioneto) + this.iva;
  }
}
let select// entero o flaot
let cerrar = false;// bolean
let nom, prec, un, fec, obs;
//Main
const fecha = new Date();
const productos= [];

function veriva(){
  for(prod of productos){
    return(`${prod.nombre} | ${prod.precioneto} | ${prod.iva} | ${prod.preciofinal} | ${prod.unidad} | ${prod.fecha} | ${prod.obs} `);
  }    
}

function ver(){
  for(prod of productos){
    return(`${prod.nombre} | ${prod.precioneto} | ${prod.unidad} | ${prod.fecha} | ${prod.obs} `);
  }    
}



do{
  select = Number(prompt("Por favor elija del siguiente menus \n 1.- Ingresar Productos\n 2.- Ver IVA y Precio Final \n 3,- Ver Productos \n 4,- Ver todo los productos \n 5.- Total \n 6.- Salir"))
  switch(select){
    default:
      break;

      case 1: 
        document.write("<br>Ingreso de Productos<br>");
        nom = prompt("Por favor ingrese nombre productos");
        prec = prompt("Por favor ingresar precio del producto");
        un = prompt("Por favor ingresar unidades del producto");
        fec = fecha.toLocaleDateString();
        obs= prompt("Por favor colocar alguna observacion que si tiene");
        productos.push(new Producto(nom, prec, un, fec, obs));
        console.log(ver());
        document.write(ver());      
      break;

      case 2:
        document.write("<br>Ver iva <br>");
        console.log(veriva());
        document.write(veriva());
      break;

      case 3:
        document.write("<br>Ver todo los productos<br>");
        console.log(ver());
        document.write(ver());
        break;

      case 4:
        productos.forEach((element) =>{
          console.log(element);
          document.write(element);
        })
        break;

      case 5:
        const total = productos.reduce((acc, prod) => acc + prod.precioneto , 0);
        console.log(total);
        document.write(total);
        break;


      case 6:
        cerrar = true;
        document.write("Gracias por operar el sistema ");
        break;
    }
}while(!cerrar);
