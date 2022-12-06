function noParesDeContarImparesHasta(numero) {
  let conteo = 0;
  for (let i = 0; i <= numero; i++) {
    if (i % 2 !== 0) {
      conteo = conteo + 1;
    }
  }
  return conteo;
}
console.log(noParesDeContarImparesHasta(4));
