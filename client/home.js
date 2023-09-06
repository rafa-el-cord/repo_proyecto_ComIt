const actualidadUL = document.getElementById("actualidadJs"); // linkea js y html

fetch("/api/temas")                                       // Solicitud Fetch al API para obtener los datos:
  .then(response => response.json())
  .then(data => {
    const { actualidad, musica, meme } = data;

    actualidad.forEach(element => {                       // Recorre los datos de "actualidad" y crea elementos li para cada uno
      const li = document.createElement('li');            // Crea li

      const elementsDiv = document.createElement('div');  // Crea div
      elementsDiv.classList.add('itemsCategoriasHome');   // Agrega la clase "itemsCategoriasHome" al div

      const a = document.createElement('a');              // Crea enlace con imagen, dentro de div
      a.href = "#";                                       // Crea el hipervínculo. VER "" si está bien, ya que aún no tengo el hipervínculo.

      const img = document.createElement('img');          // Crea img
      img.src = element.url_imagen;                       // Agrega src al img
      img.title = element.titulo;                         // Agrega el title a img
      a.appendChild(img);                                 // Agrega la imagen al hipervínculo
      elementsDiv.appendChild(a);                         // Agrega el enlace al div "itemsCategoriasHome"

      const iconoDiv = document.createElement('div');     // Crea un div con la clase "iconoFavoritar"
      iconoDiv.classList.add('iconoFavoritar');

      const favoritosA = document.createElement('a');     // Crea hipervinculo en div (favoritos)
      favoritosA.href = "#";

      const favoritosImg = document.createElement("img");
      favoritosImg.src = "imagenes/favoritar.png";
      favoritosImg.classList.add("iconos");

      favoritosA.appendChild(favoritosImg);               // Agrega imagen (corazoncito) 
      iconoDiv.appendChild(favoritosA);                   // Agrega el enlace al div "iconoFavoritar"

      li.appendChild(elementsDiv);                        // Agrega los divs creados al elemento li
      li.appendChild(iconoDiv);

      actualidadUL.appendChild(li);                       // Agrega el elemento li al elemento ul
    });
  })
  .catch(error => console.log(error));