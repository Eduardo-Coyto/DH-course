// array con op bancarias (positivo y negativo)
// callback
// function (nombre, apellido, saldo)

const operacionesBancarias = [1000, 2500, 3000, -1500];

function calcularSaldo(operaciones) {
    let depositos = 0;
    let retiros = 0;

    for (let index = 0; index < operaciones.length; index++) {
        if (operaciones[index] > 0) {
            depositos += operaciones[index];            
        } else {
            retiros += operaciones[index];
        }
        
    }
    return depositos + retiros;
}

function estadoDeCuenta(nombre, apellido, operaciones, callback) {
  let saldo = callback(operaciones); // acá callback es la función calcularSaldo
  return `Resumen ${nombre} ${apellido} su saldo es de ${saldo}`;
}

console.log(estadoDeCuenta("Rocko", "Rocio", operacionesBancarias, calcularSaldo));