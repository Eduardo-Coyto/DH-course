//MICRO DESAFIO 1

function Peliculas (name, id, rating, awards, price, length, genre){
    this.name = name;
    this.id = id;
    this.rating = rating;
    this.awards = awards;
    this.price = price;
    this.length = length;
    this.genre= genre; 
    this.movieInfo = function(){
        return `
        - NOMBRE: ${this.name}
        - ID: ${this.id}
        - RATING: ${this.rating}
        - AWARDS: ${this.awards}
        - PRICE: ${this.price}
        - LENGTH: ${this.length}
        - GENRE: ${this.genre}`
    }
    
}

module.exports = Peliculas;