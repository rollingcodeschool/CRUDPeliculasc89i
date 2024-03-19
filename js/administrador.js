import Pelicula from "./classPelicula.js";

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
    const peliculaNueva = new Pelicula('Al filo de la mañana', 'tipo que vive en un bucle de tiempo','https://pics.filmaffinity.com/no_way_up-335653411-large.jpg','acción',2014, 73,'EEUU','Tom Cruise','Doug Liman' )
    console.log(peliculaNueva);
    //almacenar el objeto en el array de peliculas
    //guardar el array en localstorage
}

//logica
btnAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
