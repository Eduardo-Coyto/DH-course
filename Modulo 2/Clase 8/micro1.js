//['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'NODEJS']
// [['html5', 4000], ['css3', 5000], ['javascript', 10000], ['react', 7000], ['nodejs', 15000]]

// array multidimensional cursos
let cursosPrecios = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000],
];

// cursos disponibles en DH
let cursosElegidos = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NODEJS"];

function calcularPrecio(catalogo, cursoQueEligio) {
  let precio = 0;
  for (let index = 0; index < catalogo.length; index++) {
    if (cursoQueEligio.includes(catalogo[index][0].toUpperCase())) {
      //[index] "aca entras en el array principal y acá [0] en el array que está dentro del array principal
      precio += catalogo[index][1]; // lo mismo que el anterior pero en [1] esta el precio
    }
  } return precio;
}

function factura(nombre, apellido, catalogoCursos, cursosElegidos, callback) {
    let total = callback(catalogoCursos, cursosElegidos);
    return `Estimado ${nombre} ${apellido} esto es lo que tenes que pagar ${total}`

}
console.log(factura('Eduardo', 'Coyto', cursosPrecios, cursosElegidos, calcularPrecio));