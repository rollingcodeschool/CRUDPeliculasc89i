import Pelicula from "./classPelicula.js";
import { cantidadCaracteres } from "./helpers/validaciones.js";

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
  limpiarFormularioPelicula();
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
    editarPelicula();
  }
}

function creandoPelicula() {
  console.log("aqui tengo que crear la peli");
  //todo: validar los datos
  //crear un objeto Pelicula
  if(cantidadCaracteres(titulo, 2, 60) && cantidadCaracteres(descripcion, 2,200)){
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
    //dibujar la nueva peli en la tabla
    dibujarFila(peliculaNueva);
    //mostrar el mensaje al usuario
    Swal.fire({
      title: "Pelicula creada",
      text: `La pelicula '${peliculaNueva.titulo}' fue creada correctamente`,
      icon: "success",
    });
  }else{
    alert('hay datos incorrectos')
  }
  
  // modalPelicula.hide()
}

function guardarLocalStorage() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(peliculas));
}

function limpiarFormularioPelicula() {
  formularioPelicula.reset();
}

function cargaInicial() {
  //verificar si tengo pelis
  if (peliculas.length > 0) {
    peliculas.map((peli) => dibujarFila(peli));
  }
}

function dibujarFila(pelicula) {
  console.log(pelicula);
  const tbody = document.querySelector("#tablaPelicula");
  tbody.innerHTML += `<tr>
  <th scope="row">${pelicula.id}</th>
  <td>${pelicula.titulo}</td>
  <td class="col-descripcion">
   ${pelicula.descripcion}
  </td>
  <td>
    <img
      class="img-thumbnail rounded img-fluid thumbnail"
      src=${pelicula.imagen}
      alt=${pelicula.titulo}
    />
  </td>
  <td>${pelicula.genero}</td>
  <td>
    <button
      class="btn btn-warning"
      onclick="prepararEditarPelicula('${pelicula.id}')"
    >
      <i class="bi bi-pencil-square fs-4"></i>
    </button>
    <button
      class="btn btn-danger"
      onclick="borrarPelicula('${pelicula.id}')"
    >
      <i class="bi bi-x-square fs-4"></i>
    </button>
  </td>
</tr>`;
}

window.borrarPelicula = (idPelicula) => {
  Swal.fire({
    title: "¿Estas seguro de borrar la pelicula?",
    text: "No puedes revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      //aqui agrego todo el codigo para borrar
      //buscar la posicion de la peli dentro del array que quiero borrar findIndex()
      const posicionPeli = peliculas.findIndex(
        (itemPelicula) => itemPelicula.id === idPelicula
      );
      console.log(posicionPeli);
      //usar splice para borrar una peli del array
      peliculas.splice(posicionPeli, 1);
      //actualizar el localstorage
      guardarLocalStorage();
      //actualizar la tabla
      const tbody = document.querySelector("#tablaPelicula");
      tbody.removeChild(tbody.children[posicionPeli]);
      Swal.fire({
        title: "Pelicula eliminada",
        text: `La pelicula fue eliminada correctamente`,
        icon: "success",
      });
    }
  });
};

window.prepararEditarPelicula = (idPelicula) => {
  mostrarModalPelicula();
  crearPelicula = false;
  const peliBuscada = peliculas.find((pelicula) => pelicula.id === idPelicula);
  //cargo los datos en el formulario
  codigo.value = peliBuscada.id;
  titulo.value = peliBuscada.titulo;
  descripcion.value = peliBuscada.descripcion;
  genero.value = peliBuscada.genero;
  imagen.value = peliBuscada.imagen;
  pais.value = peliBuscada.pais;
  anio.value = peliBuscada.anio;
  reparto.value = peliBuscada.reparto;
  duracion.value = peliBuscada.duracion;
  director.value = peliBuscada.director;
};

function editarPelicula() {
  //1- buscaria la posicion de la pelicula en el array
  let posicionPelicula = peliculas.findIndex(
    (pelicula) => pelicula.id === codigo.value
  );
  console.log(posicionPelicula);
  //2- editar los valores de la pelicula dentroe del array
  peliculas[posicionPelicula].titulo = titulo.value;
  peliculas[posicionPelicula].imagen = imagen.value;
  peliculas[posicionPelicula].descripcion = descripcion.value;
  peliculas[posicionPelicula].imagen = imagen.value;
  peliculas[posicionPelicula].genero = genero.value;
  peliculas[posicionPelicula].pais = pais.value;
  peliculas[posicionPelicula].duracion = duracion.value;
  peliculas[posicionPelicula].reparto = reparto.value;
  peliculas[posicionPelicula].director = director.value;
  //3- actualizar el localstorage
  guardarLocalStorage();
  //4-actualizar la fila
  const tbody = document.querySelector("#tablaPelicula");
  tbody.children[posicionPelicula].children[1].innerHTML = titulo.value;
  tbody.children[posicionPelicula].children[2].innerHTML = descripcion.value;
  tbody.children[posicionPelicula].children[3].children[0].src = imagen.value;
  tbody.children[posicionPelicula].children[4].innerHTML = genero.value;
  //5-mostrar un cartel al usuario
  Swal.fire(
    "Pelicula modificada",
    "La pelicula fue modificada exitosamente",
    "success"
  );
  //6- limpiar el formulario y cerrar el modal
  limpiarFormularioPelicula();
  modalPelicula.hide();
}
//logica
btnAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
cargaInicial();
