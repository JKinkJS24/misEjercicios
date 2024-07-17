class PlayerPrincipal {
    constructor(sprite, x, y, speed)
    {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.imagen = new Image();
        imagen.onload = function () {
            let c = document.querySelector("#myCanvas");
            let ctx = c.getContext("2d");
            ctx.drawImage(image, x, y, 100, 100);
        };
        image.src = 'images/${sprite}';
        setTimeout(dibujar, 0.1);
    }
    moverse(desplazamiento){

    }
    disparar(){
        console.log("Disparando...");
    }
    explotar(){
        console.log("Explotando...");
    }
    dibujar(){
        console.log("Dibujando...")
        
    }
}