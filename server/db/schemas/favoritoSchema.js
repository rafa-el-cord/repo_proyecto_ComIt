const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const favoritoSchema = new Schema({
    tema: String,
    url_imagen: String,
    titulo: String,
    id: String,
});

const Favorito = model("favorito", favoritoSchema);

module.exports = Favorito;