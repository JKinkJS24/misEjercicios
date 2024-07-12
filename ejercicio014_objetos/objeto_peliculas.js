let estadosUnidos = {
    nombre : "Estados Unidos",
    continente : "América"
}
let harrisonFord = {
    nombre : "Harrison Ford",
    país : estadosUnidos
}
let markHamil = {
    nombre : "Mark Hamil",
    pais : estadosUnidos
}

let starWarsEpisodioIV = {
    nombre : "Star Wars Episodio IV",
    director : "George Lucas",
    actores : [harrisonFord, markHamil]
}
let starWarsEpisodioV = {
    nombre : "Star Wars Episodio IV",
    director : "George Lucas",
    actores : [harrisonFord, markHamil]
}
let starWarsEpisodioVI = {
    nombre : "Star Wars Episodio IV",
    director : "George Lucas",
    actores : [harrisonFord, markHamil]
}

let sagaStarWars = [starWarsEpisodioIV, starWarsEpisodioV, starWarsEpisodioVI
]
console.log(sagaStarWars);