const bicicletas = require("./datosBici");

//console.log(bicicletas);

const dhBici = {
  bicicletas,

  buscarBici: function (idBicicleta) {
    let bicicletaDevolver = this.bicicletas.filter(function (bicicleta) {
      return bicicleta.id == idBicicleta;
    });
    if (bicicletaDevolver.length > 0) {
      return bicicletaDevolver[0];
    }
    return null;
  },

  venderBici: function (idBicicleta) {
    let miBici = this.buscarBici(idBicicleta);
    if (miBici && miBici.vendida == "no") {
      miBici.vendida = "si";
      return miBici;
    }
    return "Bici no encontrada";
  },

  biciParaLaVenta: function () {
    let biciSinVender = this.bicicletas.filter(function (bicicleta) {
      return bicicleta.vendida == "no";
    });
    return biciSinVender;
  },

  totalDeVentas: function () {
    let bicisVendidas = this.bicicletas.filter(function (bici) {
      return bici.vendida == 'si';      
    });
    let totalVentas = bicisVendidas.reduce(function (total, bicicleta) {
      return bicicleta.precio + total;      
    })
    return totalVentas;
  }
};

console.log(dhBici.totalDeVentas());
