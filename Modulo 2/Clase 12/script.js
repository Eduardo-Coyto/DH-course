// const autosImportados = require('./autos');

// const concesionaria = {
//    autos: autosImportados,
//    buscarAuto : function(patente){
//       for(let auto of this.autos){
//          if (patente == auto.patente){
//             return auto
//          }
//       } return null
//    }
// };

const autosImportados = require("./autos");

const concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let autoEncontrado = this.autos.find(function (auto) {
      return patente == auto.patente;
    });
    return autoEncontrado ? autoEncontrado : null;
  }, 
};

console.log(concesionaria.buscarAuto("APL123"));