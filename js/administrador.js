import Pelicula from "./classPelicula.js";

//variables globales
const btnAgregarPelicula = document.getElementById("btnCrearPelicula");
const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
let crearPelicula = true;
const formularioPelicula = document.getElementById("formPelicula");
const codigo = document.getElementById('codigo');
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const anio = document.getElementById('anio');
const reparto = document.getElementById('reparto');
const director = document.getElementById('director');
const imagen = document.getElementById('imagen');
const genero = document.getElementById('genero');
const duracion = document.getElementById('duracion');
const pais = document.getElementById('pais');
const peliculas = [];

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
    const peliculaNueva = new Pelicula(titulo.value, descripcion.value, imagen.value, genero.value, anio.value, duracion.value, pais.value,reparto.value,director.value )
    console.log(peliculaNueva);
    //almacenar el objeto en el array de peliculas
    peliculas.push(peliculaNueva)
    //guardar el array en localstorage
    console.log(peliculas)
}

//logica
btnAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
