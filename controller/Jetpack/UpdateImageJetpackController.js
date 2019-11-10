const Jetpack = require("../../src/Entity/Jetpack");
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');

module.exports = (req, res) => {
    let id = req.body.id;
    let newImage = req.body.image;
    const repository = new JetpackRepository(db);

    let jetpack = repository.updateImage(id, newImage);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(repository.getOne(id))
};