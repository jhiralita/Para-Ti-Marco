function respuesta(id, texto) {
    let elemento = document.getElementById(id);
    elemento.innerText = texto;

    // efecto bonito
    elemento.style.color = "#00c1f1";
    elemento.style.fontWeight = "bold";
}
