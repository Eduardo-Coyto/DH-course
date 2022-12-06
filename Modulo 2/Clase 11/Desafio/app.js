const importar = require('./collectibles');

let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figuras: unifiedCollectibles, // aca en figuras tengo todos mis datos
    listFigures: function () {
        this.figuras.forEach(figura => {
            console.log(figura.nombre);
        })        
    }, 
    figuresByBrand: function (marca) {
        let figurasElegidas = this.figuras.filter(figura => {
            return figura.marca == marca
        });        
        return figurasElegidas;
    }    
}

//collectibles.listFigures();