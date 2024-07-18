function sumar(sumando1, sumando2) {
    //1. Que recibamos 2 argumentos
    if (sumando1 === undefined || sumando2 === undefined) {
        throw new Error("Los dos sumandos son obligatorios");
    }
    //2. Que ambos sean números
    if (!(typeof sumando1 === 'number') || !(typeof sumando2 === 'number')) {
        throw new Error("Los dos sumandos deben ser números");
    }
    return sumando1 + sumando2;
}

try {
    console.log("Paso 1");
    let resultado = sumar(1, 2);
    console.log("Paso 2");
    console.log(resultado);
    console.log("Paso 3");
} catch (e) {
    console.error(e.message);

} finally {
    console.log("Hemos terminado el proceso")
}