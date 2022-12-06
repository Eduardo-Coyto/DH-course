function reporteDePasajeros(estacion) {
  let arrayRetorno = [];
  let cantidadPasajeros = 0;
  for (let index = 0; index <= estacion; index++) {
    if (index === 0) {
      cantidadPasajeros += 200;
      arrayRetorno.push(
        `En la estación ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
      );
    } else if (index >= 1 && index <= 4) {
      cantidadPasajeros += 20;
      arrayRetorno.push(
        `En la estación ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
      );
    } else if (index === 5) {
      cantidadPasajeros += 40;
      arrayRetorno.push(
        `En la estación ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
      );
    }
  }
  return console.log(arrayRetorno);
}

reporteDePasajeros(0);
reporteDePasajeros(3);
reporteDePasajeros(5);
