const listaFavoritos = document.getElementById("listaFavoritos");

fetch("/api/favorito")                                       // Solicitud Fetch al API para obtener los datos:
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(elem => {                                  
        console.log(elem);
        const li = document.createElement('li');
        const a = document.createElement('a');              
        const img = document.createElement('img');          
        img.src = elem.url_imagen;                          
        img.title = elem.titulo;                            
        a.appendChild(img);    
        li.appendChild(a);                           
        listaFavoritos.appendChild(li);
  })
});