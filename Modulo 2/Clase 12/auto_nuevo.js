const autosImportados = require("./autos");
const concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
       let autoEncontrado = this.autos.find(function (auto) {
          return patente == auto.patente;
       });
       return autoEncontrado ? autoEncontrado : null;
    },
    venderAuto: function (patente) {
       let autoEncontrado = this.buscarAuto(patente);
       autoEncontrado ? autoEncontrado.vendido = true : ""
    },
    autosParaLaVenta: function () {
       let autoParaLaVenta = this.autos.filter(function (auto) {
          return !(auto.vendido)
       })
       return autoParaLaVenta;
    },
    autosNuevos: function () {
       let autoNuevo = this.autosParaLaVenta().filter(function(auto){
          return auto.km < 100;
       })
       return autoNuevo;
    }
 };