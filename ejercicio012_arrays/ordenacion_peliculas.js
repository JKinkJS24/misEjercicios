class Pelicula{
    constructor(titulo, duracion, genero, clasificacion){
        this.titulo = titulo;
        this.duracion = duracion;
        this.genero = genero;
        this.clasificacion = clasificacion;
    }
}

let theEvilDead = new Pelicula("The Evil Dead", 85, "Terror", 3)
let theRoom = new Pelicula("The Room", 102, "Comedia involuntaria", 5)
let alien = new Pelicula("Alien", 92, "Terror", 4)

let peliculas = [theEvilDead, theRoom, alien];

let pelisterror = peliculas
    .filter((pelicula)=>pelicula.genero==="Terror")
    .sort((p1,p2)=>p1.clasificacion-p2.clasificacion);
console.log(pelisterror);