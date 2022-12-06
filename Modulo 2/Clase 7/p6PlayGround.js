function saldosDeMesesConGanancia(periodo) {
  let periodoDeGanancia = [];
  for (let i = 0; i < periodo.length; i++) {
    if (periodo[i] > 0) {
        periodoDeGanancia.push(periodo[i]);
    }
}   return periodoDeGanancia;
}
console.log(saldosDeMesesConGanancia([100, 20, 0, -10, 10]));
