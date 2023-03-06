

// Obtener el nodo (el botón de incio)
const boton = document.querySelector("#inicio");

//crear la funcion para darle vida al nodo. 
//quiero que cuando le de click me abra otra pagina para jugar pokemon

const abrirPagina = () =>{
    window.open("pagina1.html","_blank");
}

//llamar la funcion
boton.addEventListener('click', abrirPagina)


 /*
//modificar el nodo src.img en el html <img src="">
const imagen= document.querySelector('img')
imagen.src = 'pokemon.jpg'

//html <a href="">
//<button id="iniciarBatalla"></button> </a>
const boton = document.querySelector("#iniciarBatalla")
boton.textContent="Iniciar Batalla"

const link = document.querySelector("a")
link.href="pagina1.html"
*/