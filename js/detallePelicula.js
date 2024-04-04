const parametrosURL = new URLSearchParams(window.location.search);
const idPelicula = parametrosURL.get('codigo')

const listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || [];

const peliBuscada = listaPeliculas.find((itemPelicula)=> itemPelicula.id === idPelicula)

//dibujar la card horizontal
const seccionDetalle = document.querySelector('#seccionDetalle')
seccionDetalle.innerHTML = `<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img
      src="${peliBuscada.imagen}"
      class="img-fluid rounded-start"
      alt="${peliBuscada.titulo}"
    />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${peliBuscada.titulo}</h5>
      <p class="card-text">
      ${peliBuscada.descripcion}
      </p>
      <p class="card-text">
        Genero:
        <span class="badge rounded-pill bg-info"> ${peliBuscada.genero}</span>
      </p>
      <p class="card-text">Año: ${peliBuscada.anio}</p>
      <p class="card-text">Duración: ${peliBuscada.duracion} min</p>
      <p class="card-text">Pais: ${peliBuscada.pais}</p>
      <p class="card-text">
        Reparto: ${peliBuscada.reparto}
      </p>
      <p class="card-text">Director: ${peliBuscada.director}</p>
    </div>
  </div>
</div>
</div>`