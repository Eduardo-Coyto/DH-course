// modulo para acceder a mis archivos

const fs = require("fs");

function importar(marca) {
  let nombreArchivo = "";
  switch (marca) {
    case "Hot Toys":
      nombreArchivo = "figuras1.json";
      break;
    case "Bandai":
      nombreArchivo = "figuras2.json";
      break;
    case "Star Wars":
      nombreArchivo = "figuras3.json";
      break;
  }

  let figuras = JSON.parse(fs.readFileSync('./Datos/' + nombreArchivo, 'utf-8'))

  return figuras;
}
module.exports = importar;

console.log(importar('Bandai'));