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
      a.href = "".url                                     // Crea el hipervínculo. VER "" si está bien, ya que aún no tengo el hipervínculo.
      
      const img = document.createElement('img');          // Crea img
      img.src = "imagenes/india.jpg".imagen;              // Agrega src al img
      img.title = "India launches mission to Sun".titulo; // Agrega el title a img
      a.appendChild(img);                                 // Agrega la imagen al hipervínculo
      itemsDiv.appendChild(a);                            // Agrega el enlace al div "itemsCategoriasHome"


      li.innerText = ;
      ulElement.appendChild(li);
    });


  })
  .catch(error => console.log(error));


/* código 
          

      // Crea un div con la clase "iconoFavoritar"
      const iconoDiv = document.createElement('div');
      iconoDiv.classList.add('iconoFavoritar');

      // Crea un enlace dentro del div con la imagen de favoritos
      const favoritosA = document.createElement('a');
      favoritosA.href = ''; // Reemplaza con la URL correcta
      const favoritosImg = document.createElement('img');
      favoritosImg.src = 'imagenes/favoritar.png'; // Reemplaza con la URL correcta
      favoritosImg.classList.add('iconos');

      // Agrega la imagen de favoritos al enlace
      favoritosA.appendChild(favoritosImg);

      // Agrega el enlace al div "iconoFavoritar"
      iconoDiv.appendChild(favoritosA);

      // Agrega los divs creados al elemento li
      li.appendChild(itemsDiv);
      li.appendChild(iconoDiv);

      // Agrega el elemento li al elemento ul
      actualidadUL.appendChild(li);
    });
  })
  .catch(error => console.log(error));


  Asegúrate de reemplazar las URL y otros valores necesarios dentro del código con los 
  datos reales que obtienes de tu API. Este código crea dinámicamente los elementos 
  li, div, y a para cada elemento en la lista "actualidad" y los agrega al elemento ul 
  con el id "actualidadJs" en tu HTML

*/
