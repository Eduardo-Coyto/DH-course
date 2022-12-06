const autosImportados = require("./autos");

const concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let autoEncontrado = this.autos.find(function (auto) {
      return patente == auto.patente;
    });
    return autoEncontrado ? autoEncontrado : null;
  },
  venderAuto: function(patente){
     let autoEncontrado = this.buscarAuto(patente);
     autoEncontrado ? autoEncontrado.vendido = true : "" 
  }
};