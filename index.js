const express = require('express');
const app = express();
const navigationController = require("./server/controllers/navigationController");
const path =require("path");

app.use(express.static(path.join(__dirname, "./client")));
app.get("/", navigationController.getIndex);
app.get("/favoritos", navigationController.getFavoritos);
app.get("/concluidos", navigationController.getConcluidos);
app.get("/encurso", navigationController.getEncurso);
app.get("/perfil", navigationController.getPerfil);

app.listen(8000,()=> {
    console.log("Servidor corriendo en el puerto 8000");

})
