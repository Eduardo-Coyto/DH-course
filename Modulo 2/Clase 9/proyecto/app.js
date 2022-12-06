const peliculas = require("./peliculas");

console.log(peliculas)

for (let i = 0; i < peliculas.length; i++) {
    console.log(
        peliculas[i].nombre,
        peliculas[i].awards,
        peliculas[i].duracion,
        peliculas[i].genero,
        peliculas[i].precio,
        peliculas[i].raiting        
        );
}
