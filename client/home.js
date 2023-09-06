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
      a.href = "".url;                                    // Crea el hipervínculo. VER "" si está bien, ya que aún no tengo el hipervínculo.
      
      const img = document.createElement('img');          // Crea img
      img.src = "imagenes/india.jpg".imagen;              // Agrega src al img
      img.title = "India launches mission to Sun".titulo; // Agrega el title a img
      a.appendChild(img);                                 // Agrega la imagen al hipervínculo
      elementsDiv.appendChild(a);                         // Agrega el enlace al div "itemsCategoriasHome"

      const iconoDiv = document.createElement('div');     // Crea un div con la clase "iconoFavoritar"
      iconoDiv.classList.add('iconoFavoritar');

      const favoritosA = document.createElement('a');     // Crea hipervinculo en div (favoritos)
      favoritosA.href = "".url;                                

      const favoritosImg = document.createElement("img");
      favoritosImg.src = "imagenes/favoritar.png";
      favoritosImg.classList.add("iconos");
 
      favoritosA.appendChild(favoritosImg);               // Agrega imagen (corazoncito) 
      favoritosA.href = "";                               // Crea hipervinculo en div (favoritos)
      
      const favoritosImg = document.createElement('img');
      favoritosImg.src = 'imagenes/favoritar.png'; 
      favoritosImg.classList.add('iconos');
      favoritosA.appendChild(favoritosImg);               // Agrega la imagen de favoritos al enlace
      iconoDiv.appendChild(favoritosA);                   // Agrega el enlace al div "iconoFavoritar"

      li.appendChild(itemsDiv);                           // Agrega los divs creados al elemento li
      li.appendChild(iconoDiv);

      actualidadUL.appendChild(li);                       // Agrega el elemento li al elemento ul
    });
  })
  .catch(error => console.log(error));