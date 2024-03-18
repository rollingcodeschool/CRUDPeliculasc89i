import { Pelicula, prueba } from "./classPelicula.js";

console.log(prueba)
//variables globales
const btnAgregarPelicula = document.getElementById("btnCrearPelicula");
const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
let crearPelicula = true;
const formularioPelicula = document.getElementById("formPelicula");

//funciones
function mostrarModalPelicula() {
  crearPelicula = true;
  modalPelicula.show();
}

function administrarFormularioPelicula(e) {
  //aqui decidimos si estamos creando o editando una pelicula
  e.preventDefault();
  if (crearPelicula) {
    //estoy creando la peli
    creandoPelicula()
  } else {
    //estoy editando la peli
  }
}

function creandoPelicula(){
    console.log('aqui tengo que crear la peli')
    //todo: validar los datos
    //crear un objeto Pelicula
    //almacenar el objeto en el array de peliculas
    //guardar el array en localstorage
}

//logica
btnAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
