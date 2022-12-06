let peliculas =
  "Turno de día, 30 noches con mi ex, Bestia, El monte, Top gun maverick, Elvis, Thor: amor y trueno";

function ponerEnMayuscula(peliculaIndicada) {
  return peliculaIndicada.toUpperCase();
}

// convertir string en array
let arrayPelicula = peliculas.split(", ");

// buscar la pelicula que quiero
let indexPeli = arrayPelicula.indexOf("Thor: amor y trueno");

// obtener la pelicual
let peliQuieroVer = arrayPelicula.splice(indexPeli, 1); //devuelve el elemento que se quitó

// Paso a mayúscula la peli
let peliMayuscula = ponerEnMayuscula(peliQuieroVer[0]); // para poder pasarlo a Mayuscula debo pasar el elemento y no el array entero

// agregar el array de peliMayuscula en 1er lugar
arrayPelicula.unshift(peliMayuscula);

// agregar nuevo listado de peli
let nuevoListadoDePeli = "Couter-Strike, NOP, Vértigo, Nick, Avatar";
let newArrayPeli = nuevoListadoDePeli.split(", ");

// no es una peli es un juego, hay que sacarlo
let juegoARemover = newArrayPeli.splice("Couter-Strike");

function concatenacion(array1, array2) {
  return array1.concat(array2);
}

console.log("concatenar", concatenacion(arrayPelicula, newArrayPeli));