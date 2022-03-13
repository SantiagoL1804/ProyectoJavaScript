function capturar() {
  function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  var nombreCapturar = document.getElementById("nombre").value;

  var edadCapturar = document.getElementById("edad").value;

  nuevoSujeto = new Persona(nombreCapturar, edadCapturar);
  console.log(nuevoSujeto);
  agregar();
}
var baseDatos = [];
function agregar() {
  baseDatos.push(nuevoSujeto);
  console.log(baseDatos);
  document.getElementById("tabla").innerHTML +=
    "<tbody><td>" +
    nuevoSujeto.nombre +
    "</td><td>" +
    nuevoSujeto.edad +
    "</td></tbody>";
}
