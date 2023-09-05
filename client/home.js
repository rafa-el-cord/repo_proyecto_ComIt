const actualidadUL = document.getElementById("actualidadJs");

fetch("/api/temas")
.then(response => response.json())
.then(data => {
    const { actualidad, musica, meme } = data;
    actualidad.forEach(element => {
        const li = document.createElement('li');
        const elementosDiv = document.createElement('div');
        itemsDiv.classList.add('itemsCategoriasHome');

        const a = document.createElement('a');
        a.href = item
        li.innerText = ;
        ulElement.appendChild(li);
    });
})
.catch(error => console.log(error));


/* código CHAT
// Obtén una referencia al elemento ul
const actualidadUL = document.getElementById("actualidadJs");

// Realiza una solicitud Fetch a tu API para obtener los datos
fetch("/api/temas")
  .then(response => response.json())
  .then(data => {
    const { actualidad } = data;

    // Recorre los datos de "actualidad" y crea elementos li para cada uno
    actualidad.forEach(item => {
      // Crea un elemento li
      const li = document.createElement('li');

      // Crea un div con la clase "itemsCategoriasHome"
      const itemsDiv = document.createElement('div');
      itemsDiv.classList.add('itemsCategoriasHome');

      // Crea un enlace dentro del div con la imagen
      const a = document.createElement('a');
      a.href = item.url; // Reemplaza "item.url" con la URL correcta
      const img = document.createElement('img');
      img.src = item.imagen; // Reemplaza "item.imagen" con la URL correcta
      img.title = item.titulo; // Reemplaza "item.titulo" con el título correcto

      // Agrega la imagen al enlace
      a.appendChild(img);

      // Agrega el enlace al div "itemsCategoriasHome"
      itemsDiv.appendChild(a);

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
