require("dotenv").config();
const express = require('express');
const app = express();
const navigationController = require("./server/controllers/navigationController");
const temaController = require("./server/controllers/temaController");

const path =require("path");

app.use(express.static(path.join(__dirname, "./client")));
app.get("/", navigationController.getIndex);
app.get("/favoritos", navigationController.getFavoritos);
app.get("/concluidos", navigationController.getConcluidos);
app.get("/encurso", navigationController.getEncurso);
app.get("/perfil", navigationController.getPerfil);

// API
app.get("/api/temas", temaController.getAll)

app.listen(8000,()=> {
    console.log("Servidor corriendo en el puerto 8000");

})
