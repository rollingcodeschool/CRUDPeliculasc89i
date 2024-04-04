const listaPeliculas =
  JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];

//dibujar columnas
listaPeliculas.map((pelicula) => {
  crearColumna(pelicula);
});

function crearColumna(pelicula) {
  let grilla = document.querySelector("#grilla");
  grilla.innerHTML += `
  <div class="col-md-4 col-lg-3 mb-3">
  <div class="card h-100" >
    <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
    <div class="card-body">
      <h5 class="card-title">${pelicula.titulo}</h5>
    </div>
    <div class='card-footer text-end '>
    <button class="btn btn-primary" onclick='verDetallePelicula("${pelicula.id}")'>ver detalle</button>
    </div>
  </div>
</div>
    `;
}

function verDetallePelicula(id){
 console.log(id)
 console.log(window.location.origin +'/pages/detalle.html')
 window.location.href = window.location.origin +'/pages/detalle.html?codigo='+id;
}
