let fs = require('fs');

let mensaje = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8");

console.log(mensaje);
