//ajuste tarifario de energía eléctrica
// pago mes
// mas de 300 kWh por mes se incrementa un 20%
// mostrar “Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $14400”

let pagoMes = 12000;

let consumokWh = 450;

let porcentajeAumento = 1.2;

let limiteDeConsumo = 300;

let resultado =
  consumokWh > limiteDeConsumo
    ? "Debido a que su hogar tuvo un consumo" +
      consumokWh +
      "kWh, por mes tendas un aumento del 20%, se ajusto el total a pagar es de $ " +
      pagoMes * porcentajeAumento
    : "con subsidio";

console.log(resultado);
