let paises = Array("Islandia", "Finlandia", "Suecia", "Noruega", "Groenlandia")

function organizarViaje(pais, pax, dias) {

    if (paises.includes(pais)) {
        console.log("País Ok");
    } else {
        throw new Error("Ese país no está disponible.");
    }

    if (pax >= 1 && pax <= 4) {
        console.log("Personas Ok");
    } else {
        throw new Error("Número de personas no disponible.");
    }

    if (dias >= 5 && dias <= 10) {
        console.log("Días Ok");
    } else {
        throw new Error("Número de días no disponible");
    }
    console.log(`Se ha reservado un viaje a ${pais} para ${pax} durante ${dias}.`)
}

try {
    console.log(organizarViaje("Islandia", 0, 6))
} catch (e) {
    console.error(e.message);
} finally {
    console.log("Proceso terminado.")
}
