
/*
// Obtener el nodo (el botón de incio)
const boton = document.querySelector("#inicio");

//crear la funcion para darle vida al nodo. 
//quiero que cuando le de click me abra otra pagina para jugar pokemon

const abrirPagina = () =>{
    window.open("pagina1.html","_blank");
}

//llamar la funcion
boton.addEventListener('click', abrirPagina)

*/
 
//////////////////////////////////////////////////////////////////
//////////////PAGINA1///////////////////////////////

//se crean los nodos del contenedor 1
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










/*

// Obtén el botón
const boton = document.getElementById("miBoton");

// Agrega el evento de click al botón
boton.addEventListener("click", function() {
  // Abre la nueva página en una ventana emergente
  window.open("nueva-pagina.html", "_blank");
});












// Agregar evento de click al botón incio para abrir la pagina1
boton.addEventListener("click", function() {
    window.location.href = "pagina1.html";
});


//crear los botones para cargar las imagenes

let cargarImagen1 = document.querySelector("imagen1");
let cargarImagen2 = document.querySelector("imagen2");

//agregar eventos a los botones de las imagenes

cargarImagen1.addEventListener('click', function(){
    let imagen1 = document.createElement("imagen1");
    imagen1.src = "pagina1.html";
    let imagenContainer1 = document.querySelector("#imagen-container-1")
    imagenContainer1.appendChild(imagen1);
});

cargarImagen2.addEventListener('click', function(){
    let imagen2 = document.createElement("imagen2");
    imagen2.src = "pagina1.html";
    let imagenContainer1 = document.querySelector("#imagen-container-2")
    imagenContainer2.appendChild(imagen2);
});
*/