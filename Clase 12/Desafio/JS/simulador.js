const date = document.querySelector("#fecha"); //fecha.
const simple = document.querySelector("#intSimple"); // Radiobutton interese simple.
const compuesto = document.querySelector("#intComp"); // Radiobutton interese compueto.
const contInt = document.querySelector("#contInt"); //| Contenedor principal de intereses.
const contIntU = document.createElement("div");


let form // formulario universal
let resp_Int = document.querySelector("#resp_int"); // Div universal respuesta.
let montoFinal  // Monto final
let meses, inter, por;

//Determinar fecha de hoy
const today =  new Date().toLocaleDateString();
date.innerHTML = `<b> ${today} </b>`;


simple.addEventListener('change', () => elegir("simple"))
compuesto.addEventListener('change', () => elegir("compuesto"))

const elegir = (check) => {
  console.log("Se ejecuta")
  if(check === "simple"){
    compuesto.checked = false
    contIntU.innerHTML = `
    <div class="row">
    <!-- formulario simple o compuesto -->
    <div class="col-12">
      <h2>Interes Simple</h2>
        <form action="" method="post" id="formularioSimple">
          <label>Nombre</label>
          <input type="text" class="form__input" id="nombre"><br>
          <label>Mail</label>
          <input type="text" class="form__input" id="mail">
          <label>Monto Inicial</label>-
          <input type="text" class="form__input" id="montoInic">
          <label>Interes</label>
          <input type="text" class="form__input" id="interes">
          <label>Periodos</label>
          <input type="text" class="form__input" id= "periodo">
          <input type="submit" id="submitForm" class="form__submit" id= value="Enviar Consulta">
        </form>
    </div>
  </div>
    `;

    contInt.appendChild(contIntU);
    form = document.querySelector("#formularioSimple");
    form.submitForm.addEventListener("click", (e) => {
      e.preventDefault();
      intereses("simple");
    });

  }else if (check === "compuesto"){
    simple.checked = false
    contIntU.innerHTML = `
    <div class="row">
      <!-- formulario simple o compuesto -->
      <div class="col-12">
        <h2>Interes Compuesto</h2>
        <form action="" method="post" id="formularioCompuesto">
        <label>Nombre</label>
        <input type="text" class="form__input" id="nombre"><br>
        <label>Mail</label>
        <input type="text" class="form__input" id="mail">
        <label>Monto Inicial</label>-
        <input type="text" class="form__input" id="montoInic">
        <label>Interes</label>
        <input type="text" class="form__input" id="interes">
        <label>Periodos</label>
        <input type="text" class="form__input" id= "periodo">
        <input type="submit" id="submitForm" class="form__submit" id= value="Enviar Consulta">
        </form>
      </div>
    </div>
    `
    contInt.appendChild(contIntU);
    form = document.querySelector("#formularioCompuesto");
    console.log(form);
    form.submitForm.addEventListener("click", (e) =>{
      e.preventDefault();
      
      intereses("compuesto");
    });

  }

  //intereses(e, "compuesto")
  // if(simple.checked){
  //   simple.checked = false
  // }else if (compuesto.checked){
  //   compuesto.checked = false
  // }
}

const intereses = (opcion) => {
  resp_Int= document.querySelector("#resp_Int");
  switch(opcion){
    case "simple":
      montoFinal = Math.round(form.montoInic.value * (form.interes.value/100) * form.periodo.value);
      //resp_Int.textContent = "HOLA";
      resp_Int.innerHTML= `
      <div class = "row">
        <div class = "col-sm-12 col-md-6 col-lg-8">
          <img src= "../imagen/money4.jpeg" class= "img-fluid">
        </div>
        <div class = "col-sm-12 col-md-6 col-lg-4 container"><br><br>
          Nombre: <b>${form.nombre.value}</b><br>
          Mail: <b>${form.mail.value}</b><br><br>
          <h4>Prestamo con Interes Compuesta</h4>
          Monto Inicial o Capital(k) <b> $ ${form.montoInic.value}</b><br>
          Interes (%) :<b>${form.interes.value}%</b><br>
          Interes($) : <b> $ ${montoFinal - form.montoInic.value}</b><br>
          Periodo:<b>${form.periodo.value}</b><br>
          <div class="text-end">
            <b>Monto Final: ${montoFinal}</b><br>
          </div>    
        </div>
      </div>`;
      break;

    case "compuesto":
      meses = form.periodo.value * 12;
      inter = 1+parseFloat((form.interes.value/100)/12);
      porcentaje = Math.pow(inter, meses);
      montoFinal = Math.round(form.montoInic.value * porcentaje);
      resp_Int.innerHTML= `
      <div class = "row">
        <div class = "col-sm-12 col-md-6 col-lg-8">
          <img src= "../imagen/money4.jpeg" class= "img-fluid">
        </div>
        <div class = "col-sm-12 col-md-6 col-lg-4 container"><br><br>
          Nombre: <b>${form.nombre.value}</b><br>
          Mail: <b>${form.mail.value}</b><br><br>
          <h4>Prestamo con Interes Simple</h4>
          Monto Inicial o Capital: (K) <b>$ ${form.montoInic.value}</b><br>
          Interes(%) :<b>${form.interes.value}%</b><br>
          Interes($) : <b>$ ${montoFinal - form.montoInic.value}</b><br>
          Periodo: <b>${form.periodo.value * 12 } meses </b><br>
          <div class="text-end">
            <b>Monto Final:  ${montoFinal}</b><br>
          </div>    
        </div>
      </div>`;
      
      //console.log(`${montoFinal} ${meses} ${inter} ${porcentaje} ${form.montoInic.value}`);
      break;

    
    default:
      break;

  }
}