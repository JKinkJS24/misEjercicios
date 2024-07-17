const API_KEY = 'fe486a03';
const SERVER_URL = 'https://www.omdbapi.com';

document.querySelector("#bBuscar").addEventListener("click", () => {
    getMovies(1);
});

function getMovies(pageNumber) {
    const tituloBuscado = document.querySelector("#iTitulo").value;
    if (!tituloBuscado.trim()) {
        displayError('Por favor, introduce un título.');
        return;
    }
    doGetHTTPRequest(
        SERVER_URL,
        '',
        `?apikey=${API_KEY}&s=${tituloBuscado}&page=${pageNumber}`,
        processData,
        processError
    );
}

function processData(data) {
    const peliculas = JSON.parse(data);
    if (peliculas.Response === 'False') {
        displayError(peliculas.Error);
        return;
    }
    const numeroPaginas = Math.ceil(peliculas.totalResults / 10);
    const contenedorPeliculas = document.querySelector("#contenedor-peliculas");
    const paginacion = document.querySelector("#paginacion");
    contenedorPeliculas.innerHTML = "";
    paginacion.innerHTML = "";

    peliculas.Search.forEach(pelicula => {
        const peliculaElem = document.createElement('div');
        peliculaElem.classList.add('pelicula');
        peliculaElem.innerHTML = `
            <div class='titulo'>${pelicula.Title}</div>
            <div class='poster'><img src='${pelicula.Poster}' alt='${pelicula.Title}'></div>
        `;
        contenedorPeliculas.appendChild(peliculaElem);
    });

    for (let i = 1; i <= numeroPaginas; i++) {
        const paginaLink = document.createElement('a');
        paginaLink.href = '#';
        paginaLink.textContent = i;
        paginaLink.addEventListener('click', (e) => {
            e.preventDefault();
            getMovies(i);
        });
        paginacion.appendChild(paginaLink);
    }
}

function processError(error) {
    displayError(`Error al buscar películas: ${error.message}`);
}

function displayError(message) {
    const contenedorPeliculas = document.querySelector("#contenedor-peliculas");
    contenedorPeliculas.innerHTML = `<div class='error'>${message}</div>`;
}
