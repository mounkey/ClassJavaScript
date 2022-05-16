const date = document.querySelector("#fecha"); //fecha.
const simple = document.querySelector("#intSimple"); // Radiobutton interese simple.
const compuesto = document.querySelector("#intComp"); // Radiobutton interese compueto.
const contInt = document.querySelector("#contInt"); //| Contenedor principal de intereses.
const contIntU = document.createElement("div");

let form

//const cuotas = [{tiempo: 3, interes: 5}]

const today =  new Date().toLocaleDateString();
date.innerHTML = `<b> ${today} </b>`;
simple.checked = false
console.log(simple.checked)

simple.addEventListener('change', () => elegir("simple"))
compuesto.addEventListener('change', () => elegir("compuesto"))

const elegir = (check) => {
  console.log("Se ejecuta")
  if(check === "simple"){
    compuesto.checked = false
    contIntU.innerHTML = `
    <div>
    <h2>
      efefefef
    </h2>
    <form id="formularioSimple">
      <input type="text" id="nombre">
      <input type="text" id="apellido">
      <input type="text" id="meses">
      <select id="moneda">
        <option value="usd"></option>
      </select>
      <input type="text" id="precio" value ="122255">122255
      <input type="text" id="">
    </form>
  </div>
    `

    contInt.appendChild(contIntU)
    form = document.querySelector("#formularioSimple")
    console.log(form.precio.value)


  }else if (check === "compuesto"){
    simple.checked = false
    contIntU.innerHTML = `
    <div>
    <h2>
      efefefef
    </h2>
    <form id="formularioCompuesto">
      <input type="text" id="nombre">
      <input type="text" id="apellido">
      <input type="text" id="meses">
      <select id="moneda">
        <option value="usd"></option>
      </select>
      <input type="text" id="precio">
      <input type="text" id="">
    </form>
  </div>
    `
    contInt.appendChild(contIntU)
    form = document.querySelector("#formularioCompuesto")
    console.log(form)

  }
  // if(simple.checked){
  //   simple.checked = false
  // }else if (compuesto.checked){
  //   compuesto.checked = false
  // }
}