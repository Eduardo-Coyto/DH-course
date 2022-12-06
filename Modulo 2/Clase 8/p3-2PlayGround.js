function reporteDePasajeros(estacion) {
  let arrayRetorno = [];
  let cantidadPasajeros = 0;
  for (let index = 0; index <= estacion; index++) {
    switch (index) {
      case 0:
        cantidadPasajeros += 200;
        arrayRetorno.push(
          `En la estacion ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
        );
        break;
      case 1:
        cantidadPasajeros += 20;
        arrayRetorno.push(
          `En la estacion ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
        );
        break;
      case 2:
        cantidadPasajeros += 20;
        arrayRetorno.push(
          `En la estacion ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
        );
        break;
      case 3:
        cantidadPasajeros += 20;
        arrayRetorno.push(
          `En la estacion ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
        );
        break;
      case 4:
        cantidadPasajeros += 20;
        arrayRetorno.push(
          `En la estacion ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
        );
        break;
      case 5:
        cantidadPasajeros += 40;
        arrayRetorno.push(
          `En la estacion ${index} hay ${cantidadPasajeros} pasajeros arriba del tren`
        );
        break;
    }
  }
  return console.log(arrayRetorno);
}

reporteDePasajeros(5);


