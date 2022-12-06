// 2
let electrodomesticos = ["heladera", "radio", "TV", "plancha", "micro", "tostadora"];

// 3

// Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
let random = electrodomesticos[Math.floor(Math.random() * electrodomesticos.length)];
//console.log(random);

// Extraer el primer elemento del array y agregarlo al final del mismo. 
let primero = electrodomesticos.shift();
electrodomesticos.push(primero);
//console.log(electrodomesticos);

//3-c Agregar al final del array dos (2) nuevos productos.
electrodomesticos.push("Jarra electrica", "lavaropa");
//console.log(electrodomesticos);

//Mostrar por la consola la cantidad de elementos que contiene el array.
//console.log(electrodomesticos.length);

//Buscar un elemento del array y crear una condición responsable de establecer si
//existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
//“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
//no existe”.
let elemento = electrodomesticos.indexOf("lavaropa");
let busquedaResponsable = "lavaropa" == -1 ? "Producto encontrado" : "producto no existe";
//console.log(busquedaResponsable);

// otra forma
let elemento2 = electrodomesticos.includes("lavaropa");
let busquedaResponsable2 = "lavaropa" == true ? "Producto encontrado" : "producto no existe";
//console.log(elemento2);

//Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
let unificar = electrodomesticos.join(" ");
//console.log(unificar);


//Determinar la cantidad de elementos que posee la cadena de texto obtenida.
//console.log(unificar.length);

// Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
console.log(unificar.replace("plancha", "compu"));
