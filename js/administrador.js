import Pelicula from "./classPelicula.js";

//variables globales
const btnAgregarPelicula = document.getElementById("btnCrearPelicula");
const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
let crearPelicula = true;
const formularioPelicula = document.getElementById("formPelicula");
const codigo = document.getElementById("codigo");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");
const anio = document.getElementById("anio");
const reparto = document.getElementById("reparto");
const director = document.getElementById("director");
const imagen = document.getElementById("imagen");
const genero = document.getElementById("genero");
const duracion = document.getElementById("duracion");
const pais = document.getElementById("pais");
const peliculas = JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];

console.log(localStorage.getItem("listaPeliculasKey"));
console.log(peliculas);
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
    creandoPelicula();
  } else {
    //estoy editando la peli
  }
}

function creandoPelicula() {
  console.log("aqui tengo que crear la peli");
  //todo: validar los datos
  //crear un objeto Pelicula
  const peliculaNueva = new Pelicula(
    titulo.value,
    descripcion.value,
    imagen.value,
    genero.value,
    anio.value,
    duracion.value,
    pais.value,
    reparto.value,
    director.value
  );
  //almacenar el objeto en el array de peliculas
  peliculas.push(peliculaNueva);
  //guardar el array en localstorage
  console.log(peliculas);
  guardarLocalStorage();
  limpiarFormularioPelicula();
}

function guardarLocalStorage() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(peliculas));
}

function limpiarFormularioPelicula() {
  formularioPelicula.reset();
}

function cargaInicial(){
  //verificar si tengo pelis
  if(peliculas.length > 0){
    peliculas.map((peli)=> dibujarFila())
  }
}

function dibujarFila(){
  const tbody = document.querySelector('#tablaPelicula')
  tbody.innerHTML += `<tr>
  <th scope="row">1</th>
  <td>Kung Fu Panda 4</td>
  <td class="col-descripcion">
    Po, quien se convertirá en el Maestro Espiritual del Valle de
    la Paz, busca a su sucesor como el nuevo Guerrero Dragón
    mientras lucha contra una nueva enemiga llamada "La Camaleona"
  </td>
  <td>
    <img
      class="img-thumbnail rounded img-fluid thumbnail"
      src="https://pics.filmaffinity.com/kung_fu_panda_4-159494298-large.jpg"
    />
  </td>
  <td>Animación</td>
  <td>
    <button
      class="btn btn-warning"
      onclick=""
    >
      <i class="bi bi-pencil-square fs-4"></i>
    </button>
    <button
      class="btn btn-danger"
      onclick=""
    >
      <i class="bi bi-x-square fs-4"></i>
    </button>
  </td>
</tr>`
}

//logica
btnAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
cargaInicial();