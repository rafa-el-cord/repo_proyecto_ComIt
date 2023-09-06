const Tema = require("../db/schemas/temaSchema");
const { conectarDB, desconectarDB } = require("../db/connection");

const getAll = async (req, res) => {
    try {
        await conectarDB();
        const actualidad = await Tema.find({tema: "Actualidades"});
        const musica = await Tema.find({tema: "Música"});
        const meme = await Tema.find({tema: "Memes"});

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