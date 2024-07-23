function crearFila(url, name, summary, temperament) {

    //tarjeta del gato
    let divCat = document.createElement("div");
    divCat.classList.add("cat");
    document.querySelector("#cat").appendChild(divCat);

    //contenedor de imagen
    let divImage = document.createElement("div");
    divImage.classList.add("image");
    divCat.appendChild(divImage);

    //imagen
    let imgCat = document.createElement("img");
    imgCat.src = url;
    divImage.appendChild(imgCat);

    //descripcion
    let divDescription = document.createElement("div");
    divDescription.classList.add("description");
    divCat.appendChild(divDescription);

    //nombre de la raza
    let divName = document.createElement("div");
    divName.classList.add("name");
    divName.appendChild(document.createTextNode(name));
    divDescription.appendChild(divName);

    //sumario breve
    let divSummary = document.createElement("div");
    divSummary.classList.add("description");
    divSummary.appendChild(document.createTextNode(summary));
    divDescription.appendChild(divSummary);

    //temperamento del gato
    let divTemperament = document.createElement("div");
    divTemperament.classList.add("temperament");
    divTemperament.appendChild(document.createTextNode(temperament));
    divDescription.appendChild(divTemperament);

    //barra separadora
    document.querySelector("#cat").appendChild(document.createElement("hr"));
}