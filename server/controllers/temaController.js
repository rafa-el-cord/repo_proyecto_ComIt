const Tema = require("../db/schemas/temaSchema");
const { conectarDB, desconectarDB } = require("../db/connection");

const getAll = async (req, res) => {
    try {
        await conectarDB();
        const temas = await Tema.find({});
        res.json(temas);
    } catch (error) {
        console.log(error);
    } finally {
        await desconectarDB();
    }
}

module.exports = {
    getAll
}