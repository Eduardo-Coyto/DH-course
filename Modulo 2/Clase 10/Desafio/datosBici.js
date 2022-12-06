const fs = require('fs');

let datos = fs.readFileSync(__dirname + '/bicicletas.json', 'utf-8'); //__dirname me da el path completo de mi maquina

let bicicletasArray = JSON.parse(datos); // JSON.parse recibe una cadena de texto en formato JSON y retorna el mismo dato en formato Js

module.exports = bicicletasArray; // exportamos la variable bicicletasArray

