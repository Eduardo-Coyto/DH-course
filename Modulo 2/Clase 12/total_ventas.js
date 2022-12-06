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
    autoEncontrado ? (autoEncontrado.vendido = true) : "";
  },
  autosParaLaVenta: function () {
    let autoParaLaVenta = this.autos.filter(function (auto) {
      return !auto.vendido;
    });
    return autoParaLaVenta;
  },
  autosNuevos: function () {
    let autoNuevo = this.autosParaLaVenta().filter(function (auto) {
      return auto.km < 100;
    });
    return autoNuevo;
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter(function (auto) {
      return auto.vendido;
    });
    let preciosAutosVendidos = autosVendidos.map(function (auto) {
      return auto.precio;
    });
    return preciosAutosVendidos;
  },
  //     totalDeVentas: function(){
  //       let preciosAutosVendidos = this.listaDeVentas() // ¿por qué primero debo crear una variable y a eso hacerle el reduce?
  //       let totalVentas = preciosAutosVendidos.reduce(function(suma, precio){
  //          return suma + precio;
  //       }, 0)
  //       return totalVentas;
  //    },

  totalDeVentas: function () {
    let preciosAutosVendidos = this.listaDeVentas().reduce(function (
      acumulador,
      precio
    ) {
      return acumulador + precio;
    },
    0);
    return preciosAutosVendidos;
  },
};
console.log(concesionaria.totalDeVentas());
