const path = require("path");

const getIndex = (req, res) => {
    const url_path = path.join(__dirname, "../../client/home.html");
    res.sendFile(url_path);
}

const getFavoritos = (req, res) => {
    const url_path = path.join(__dirname, "../../client/favoritos.html");
    res.sendFile(url_path);
}

const getEncurso = (req, res) => {
    const url_path = path.join(__dirname, "../../client/encurso.html");
    res.sendFile(url_path);
}

const getConcluidos = (req, res) => {
    const url_path = path.join(__dirname, "../../client/concluidos.html");
    res.sendFile(url_path);
}

const getPerfil = (req, res) => {
    const url_path = path.join(__dirname, "../../client/perfil.html");
    res.sendFile(url_path);
}


module.exports = { 
    getIndex,
    getFavoritos,
    getConcluidos,
    getEncurso,
    getPerfil
};