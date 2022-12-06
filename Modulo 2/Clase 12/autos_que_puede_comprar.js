const autosImportados = require("./autos");
const personas = require("./personas");
const concesionaria = {
  autos: autosImportados,
  personas: personas,
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
  totalDeVentas: function () {
    let preciosAutosVendidos = this.listaDeVentas();
    let totalVentas = preciosAutosVendidos.reduce(function (suma, precio) {
      return suma + precio;
    }, 0);
    return totalVentas;
  },
  puedeComprar: function (auto, persona) {
    let capDePagoEnCuotas = persona.capacidadDePagoEnCuotas;
    let capDePagoTotal = persona.capacidadDePagoTotal;
    let autoPrecio = auto.precio;
    let valorCuota = autoPrecio / auto.cuotas;
    return capDePagoEnCuotas > valorCuota && capDePagoTotal > autoPrecio;
  },
  autosQuePuedeComprar: function (persona) {
    let autoParaLaVenta = this.autosParaLaVenta();
    let personaEncontrada = this.personas.find(function (cliente) {
      return persona == cliente.nombre;
    });
    let autoDisponible = [];
    for (let i = 0; i < autoParaLaVenta.length; i++) {
      let valorCuota = autoParaLaVenta[i].precio / autoParaLaVenta[i].cuotas;
      if (
        personaEncontrada.capacidadDePagoEnCuotas > valorCuota &&
        personaEncontrada.capacidadDePagoTotal > autoParaLaVenta[i].precio
      ) {
        autoDisponible.push(autoParaLaVenta[i]);
      }
    }
    let resultado = "";
    switch (autoDisponible.length) {
      case 0:
        resultado = "No tienen auto disponible para la compra";
        break;
      case 1:
        resultado = `El auto disponible es ${autoDisponible[0].marca}`;
        break;
      default:
        resultado = "Los autos disponibles son: ";
        autoDisponible.forEach((auto) => (resultado += auto.marca + " "));
        break;
    }
    console.log(resultado);
  },
};
console.log(concesionaria.autosQuePuedeComprar("Eduardo"));


