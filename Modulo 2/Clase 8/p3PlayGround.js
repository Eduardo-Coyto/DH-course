function reporteDePasajeros(estacion) {
  switch (estacion) {
    case 0:
      console.log(`En la ${estacion} hay 200 pasajeros arriba del tren`);
      break;
    case 1:
      console.log(`En la ${estacion} hay 220 pasajeros arriba del tren`);
      break;
    case 2:
      console.log(`En la ${estacion} hay 240 pasajeros arriba del tren`);
      break;
    case 3:
      console.log(`En la ${estacion} hay 260 pasajeros arriba del tren`);
      break;
    case 4:
      console.log(`En la ${estacion} hay 280 pasajeros arriba del tren`);
      break;
    case 5:
      console.log(`En la ${estacion} hay 320 pasajeros arriba del tren`);
      break;
    default:
      break;
  }
  return
}

reporteDePasajeros(0);
reporteDePasajeros(1);
reporteDePasajeros(2);
reporteDePasajeros(3);
reporteDePasajeros(4);
reporteDePasajeros(5);