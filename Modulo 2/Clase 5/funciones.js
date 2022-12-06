// funciones declaradas
function suma(a, b) {
  return a + b;
}
console.log(suma(2, 3));

// funciones expresadas

let resta = function (a, b) {
  return a - b;
};
console.log(resta(2, 1));

// funciones flecha
let multiplicacion = (a, b) => a * b;
console.log(multiplicacion(2, 2));

let division = (a, b) => {
  if (b === 0) {
    return "No se puede dividir por cero";
  } else {
    return a / b;
  }
};

// funciones callbacks

function calculadora(a, b, operacion) {
  return operacion(a, b);
}
console.log(calculadora (2, 2, division));
