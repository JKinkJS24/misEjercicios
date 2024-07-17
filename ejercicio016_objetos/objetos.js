// Creación de objeto suelto
let enemigo1 = {
    sprite : "imagen.jpg",
    x : 0,
    y : 0,
    estado : "formacion",
}

console.log(typeof enemigo1); //object

// Creación de una clase con function
function Enemigo(sprite, x, y, estado){
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.estado = estado;
}

let enemigo2 = new Enemigo("imagen.jpg", 1, 0, estado)


// Creación de una clase... con class, como debe hacerse, vaya...
class Superenemigo {
    constructor(sprite, x, y, estado){
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.estado = "enformacion";

    }
}

let enemigo3 = new Superenemigo("imagen.jpg", 2, 0, estado)
console.log(enemigo3)