function sumatoriaBajoImporte(periodo) {
  let ganancia = 0;
  for (let i = 0; i < periodo.length; i++) {
    if (periodo[i] <= 1000 && periodo[i] > 0 ) {
      ganancia += periodo[i];
      
    }
  } 
  return ganancia;
}
console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000] ));
