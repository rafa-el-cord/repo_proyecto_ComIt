const path = require("path");

const getIndex = (req, res) => {
    const url_path = path.join(__dirname, "../../client/home.html");
    res.sendFile(url_path);
}

module.exports = { getIndex };