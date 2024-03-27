export function cantidadCaracteres (texto, min, max){
    if(texto.trim().length >= min && texto.trim().length <=max ){
        return true;
    }else{
        return false;
    }
}

