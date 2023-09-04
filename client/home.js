



/* código para hacer una lista de favoritos: */

agregarAfavoritosJs

document.addEventListener("DOMContentLoaded", function () {
    const addToFavoritesButton = document.getElementById("agregarAfavoritosJs");
    const listaFavoritos = document.getElementById("listaFavoritos");   /* crear id listaFavoritos en ul dentro del html Favoritos)  */

    agregarAfavoritosJsButton.addEventListener("click", function () {
        const listItem = document.createElement("li");
        listItem.textContent = "Elemento favorito"; // Puedes personalizar el contenido aquí
        listaFavoritos.appendChild(listItem);
    });
});
