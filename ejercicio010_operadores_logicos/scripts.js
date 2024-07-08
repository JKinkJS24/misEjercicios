function comprobarSensores() {
    if (comprobarSensor1() & comprobarSensor2())
        {
        alert("Todo OK");
    } else 
    {
        alert("Hay error");
    }
}

function comprobarSensor1() {
    let valorSensor1 = document.getElementById("sensor1").value;
    let sensorOK;
    if (valorSensor1<10) {
        sensorOK = false;
        document.querySelector('#marcador1').classList.remove("verde");
        document.querySelector('#marcador1').classList.add("rojo");
    } else {
        sensorOK = true;
        document.querySelector('#marcador1').classList.remove("rojo");
        document.querySelector("#marcador1").classList.add("verde")
    }
    return sensorOK;

}

function comprobarSensor2() {
    let valorSensor2 = document.getElementById("sensor2").value;
    let sensorOK;
    if (valorSensor2<10) {
        sensorOK = false;
        document.querySelector('#marcador2').classList.remove("verde");
        document.querySelector('#marcador2').classList.add("rojo");
    } else {
        sensorOK = true;
        document.querySelector('#marcador2').classList.remove("rojo");
        document.querySelector("#marcador2").classList.add("verde")
    }
    return sensorOK;

}