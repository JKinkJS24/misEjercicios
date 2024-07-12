let cola = [];
let contador = 0;
const DELAY_CREACION = 2500;
const DELAY_CONSUMO = 5000;
setInterval(crearTarea, DELAY_CREACION);
setInterval(consumirTarea, DELAY_CONSUMO)


function crearTarea() {
    console.log("Creando tarea...");
    contador++;
    cola.push("Tarea"+cola.length);
    //cola.unshift("Tarea"+cola.length);
    mostrarCola();
}

function consumirTarea() {
    cola.shift();
    mostrarCola();
}


function mostrarCola() {
    let textoHTML = "";
    cola.map(tarea=> {
        textoHTML+=`<div class='tarea'>${tarea}</div>`;
    })
    document.querySelector("body").innerHTML=textoHTML;
}