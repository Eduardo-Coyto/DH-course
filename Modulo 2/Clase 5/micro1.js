// monto a pagar de alquier de un vehiculo
// parametro tipoVehiculo, diasAlquiler, sillaBebe

// compacto 14000, mediano 17000, camioneta 28000
// sillaBebe 1200 x dia

const valorCompacto = 14000;
const valorMediano = 17000;
const valorCamioneta = 28000;
const sillaBebe = 1200;

function montoAPagar(tipoVehiculo, diasAlquiler, sillaBebe) {
  let total = 0;
  switch (tipoVehiculo) {
    case "compacto":
      total = valorCompacto * diasAlquiler;
      break;
    case "mediano":
      total = valorMediano * diasAlquiler;
      break;
    case "camioneta":
      total = valorCamioneta * diasAlquiler;
      break;
    default:
      return "vehiculo no valido";
      break;
  }
  if (sillaBebe) {
    total = total + sillaBebe * diasAlquiler;
    return (
      "Estimado cliente: en base al tipo de vehículo " +
      tipoVehiculo +
      " alquilado, considerando los " +
      diasAlquiler +
      "días utilizados y la silla para bebé, el monto total a pagar es de " +
      total
    );
  }
  return (
    "Estimado cliente: en base al tipo de vehículo " +
    tipoVehiculo +
    " alquilado, considerando los " +
    diasAlquiler +
    "días utilizados, el monto total a pagar es de " +
    total
  );
}

console.log("El alguiler se nos fue a las nubes", montoAPagar("compacto", 5, true))
console.log("El alguiler se nos fue a las nubes", montoAPagar("camioneta", 2, false))

