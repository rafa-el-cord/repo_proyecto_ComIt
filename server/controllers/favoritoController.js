const Favorito = require("../db/schemas/favoritoSchema");
const { conectarDB, desconectarDB } = require("../db/connection");

const getAll = async (req, res) => {
    try {
        await conectarDB();
        const temas = await Favorito.find({});

        res.json(temas);
    } catch (error) {
        console.log(error);
    } finally {
        await desconectarDB();
    }
}

const create = async (req, res) => {
    const { tema, url_imagen, titulo, id } = req.body;
    await conectarDB();
    const fav = new Favorito({ tema, url_imagen, titulo, id });
    const newFav = await fav.save();
    await desconectarDB();
    res.json(newFav);
}

module.exports = {
    getAll,
    create,
}