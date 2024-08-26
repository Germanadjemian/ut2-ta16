
function ocultar() {
    const parrafo = document.getElementById("Parrafo");
    // Comprueba el estado actual del párrafo
    if (parrafo.style.display === "none") {
        // Si el párrafo está oculto, lo muestra
        parrafo.style.display = "block";
    } else {
        // Si el párrafo está visible, lo oculta
        parrafo.style.display = "none";
    }
}

document.getElementById("boton").addEventListener("click",ocultar)

