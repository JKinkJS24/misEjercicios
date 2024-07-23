function crearFila(url, name, description, temperament) {

    let divCat = document.createElement("div");
    divCat.classList.add("cat");
    document.querySelector("#cat").appendChild(divCat);

    let divImage = document.createElement("div");
    divImage.classList.add("image");
    divCat.appendChild(divImage);

    let imgGato = document.createElement("img");
    imgGato.src = url;
    divImage.appendChild(imgCat);

    let divDescription = document.createElement("div");
    divDescription.classList.add("description");
    divCat.appendChild(divDescription);

    let divName = document.createElement("div");
    divName.classList.add("name");
    divName.appendChild(document.createTextNode(name));
    divDescription.appendChild(divName);

    let divTipo = document.createElement("div");
    divTipo.classList.add("descripcion");
    divTipo.appendChild(document.createTextNode(description));
    divDescription.appendChild(divTipo);

    let divTemper = document.createElement("div");
    divTemper.classList.add("precio");
    divTemper.appendChild(document.createTextNode(temperament));
    divDescription.appendChild(divTemper);

    document.querySelector("#gatos").appendChild(document.createElement("hr"));
}