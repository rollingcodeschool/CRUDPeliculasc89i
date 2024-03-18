//variables globales
const btnAgregarPelicula = document.getElementById('btnCrearPelicula');
const modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'))

//funciones
function mostrarModalPelicula(){
    modalPelicula.show();
}

//logica
btnAgregarPelicula.addEventListener('click', mostrarModalPelicula)