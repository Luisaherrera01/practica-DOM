const cargarPokemon1 = document.querySelector("#cargarPokemon1");

const imagenContenedor1 = document.querySelector("#image-container-1");

//se crea la funcion para llamar las imagenes del contenedor 1


const mostrarImagen1 = () =>{
    const imagen1 = document.createElement("img");
    imagen1.src="pokemon.jpg"
    imagenContenedor1.appendChild(imagen1);
}

cargarPokemon1.addEventListener('click',mostrarImagen1)

//se crean los nodos del contenedor 2
const cargarPokemon2 = document.querySelector("#cargarPokemon2");

const imagenContenedor2 = document.querySelector("#image-container-2");

//se crea la funcion para llamar las imagenes del contenedor 2


const mostrarImagen2 = () =>{
    const imagen2 = document.createElement("img");
    imagen2.src="pokemon.jpg"
    imagenContenedor2.appendChild(imagen2);
}

cargarPokemon2.addEventListener('click',mostrarImagen2)