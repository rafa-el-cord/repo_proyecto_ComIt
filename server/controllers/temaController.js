const Tema = require("../db/schemas/temaSchema");
const { conectarDB, desconectarDB } = require("../db/connection");

const getAll = async (req, res) => {
    try {
        await conectarDB();
        const actualidad = await Tema.find({tema: "Actualidad"});
        const musica = await Tema.find({tema: "Musica"});
        const meme = await Tema.find({tema: "Meme"});

        res.json({ actualidad, musica, meme });
    } catch (error) {
        console.log(error);
    } finally {
        await desconectarDB();
    }
}

module.exports = {
    getAll
}