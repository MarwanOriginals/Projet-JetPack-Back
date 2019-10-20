const Jetpack = require("../../src/Entity/Jetpack");
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');

module.exports = (req, res) => {
    let id = req.body.id;
    const repository = new JetpackRepository(db);
    let jetpacks = repository.delete(id);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(202).send("Jetpack removed successfully")
};