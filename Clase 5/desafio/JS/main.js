class Producto{
  constructor(marca, precio, disponibilidad, unidad, obs){
      this.marca = marca,
      this.precio = precio,
      this.disponibilidad = disponibilidad,
      this.unidad = unidad, 
      this.obs = obs
  }

  ver = () =>{
    document.write("la marca es"+ this.marca+ "el precio es: "+ precio + "disponible: "+ disponibles+ "unidades: "+unidad + "observacion: "+ obs)
  }
}

p1 = new Producto ("Cocacola", 1200, true, 200, "buen sabor");
//console.dir(p1);//
let mostrar = p1.ver;
document.write(mostrar);