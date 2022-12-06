function asientosDisponibles(asientoD, asientoS) {
  let elemento = asientoD.indexOf(asientoS);
  let busqueda = elemento !== -1 ?  "Felicitaciones, el asiento número " + asientoS + " está disponible" : "Lo sentimos, el asiento número " + asientoS + " está ocupado, pero aún quedan " + asientoD.length + " asientos disponibles"
  return busqueda; 
}
console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
