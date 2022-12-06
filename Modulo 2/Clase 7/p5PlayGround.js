function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
    if (unPeriodo[i] > 0) {
      cantidad++;
    }
  }
  return cantidad;
}

console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]));
console.log(cantidadDeMesesConGanancia([]));
console.log(cantidadDeMesesConGanancia([10, -10, 2, 100]));
