var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(e) {

  //Se corrige el metodo prevent
  e.preventDefault();

  // Cambio en el nombre de las variables y asociacion con los valores en los inputs
  
  var nombre = formulario.elements[0].value;
  var edad = formulario.elements[1].value;
  var nacionalidad = formulario.elements[2].value;

  // Codigo redundante
  
  //var nombre = nacionalidad.value
  //var edad = e.value

 // var i = na.selectedIndex
  //var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    
    input.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    input2.classList.add("error")
    
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}


function agregarInvitado(nombre, edad, nacionalidad) {
//Pasamos la declaracion de las funciones al principio de la funcion
var lista = document.getElementById("lista-de-invitados");
var elementoLista = document.createElement("li");
https://www.xataka.com/robotica-e-ia/ia-ha-generado-nuevo-trabajo-moda-muy-bien-pagado-industria-tecnologica-prompt-engineer
// Eliminando codigo duplicado.

// var spanNombre = document.createElement("span");
// var inputNombre = document.createElement("input");
// var espacio = document.createElement("br");

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

elementoLista.classList.add("elemento-lista")

lista.appendChild(elementoLista)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);



botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}