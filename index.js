const express = require('express');
const app = express();
const navigationController = require("./server/controllers/navigationController");
const path =require("path");

app.use(express.static(path.join(__dirname, "./client")));
app.get("/", navigationController.getIndex);

app.listen(8000,()=> {
    console.log("Servidor corriendo en el puerto 8000");

})
