const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const temaSchema = new Schema({
    tema: String,
    url_imagen: String,
    titulo: String,
});

const Tema = model("tema", temaSchema);

module.exports = Tema;