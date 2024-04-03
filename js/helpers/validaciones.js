export function cantidadCaracteres (input, min, max){
    if(input.value.trim().length >= min && input.value.trim().length <=max ){
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')
        // input.classList.replace('is-invalid', 'is-valid')
        return true;
    }else{
        input.classList.remove('is-valid')
        input.classList.add('is-invalid')
        return false;
    }
}

export function validarURLImagen(input){
    const patron = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
    if(patron.test(input.value)){
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')
        return true
    }else{
        input.classList.remove('is-valid')
        input.classList.add('is-invalid')
        return false
    }
}

export const validarGenero = (genero) => {
    if (
      genero === "Accion" ||
      genero === "Drama" ||
      genero === "Comedia" ||
      genero === "Aventura" ||
      genero === "Terror"
    ) {
      return true;
    } else {
      return false;
    }
  };