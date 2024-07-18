const RATIO = 0.016;
const VELOCIDAD = 0.75;
var y = Math.random() * window.innerHeight;
var x = window.innerWidth;

setInterval(() => {
    //console.log("x",x,"y",y)
    x -= VELOCIDAD;
    document.querySelector("#gato1").style.top = `${y}px`;
    document.querySelector("#gato1").style.left = `${x}px`;
    if (x < -100) {
        y = Math.random() * window.innerHeight;
        x = window.innerWidth;
    }
}, RATIO);