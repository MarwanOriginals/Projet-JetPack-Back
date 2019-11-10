const Jetpack = require("../../src/Entity/Jetpack");
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');

module.exports = (req, res) => {
    let id = req.body.id;
    let newName = req.body.name;
    const repository = new JetpackRepository(db);

    let jetpack = repository.updateName(id, newName);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(repository.getOne(id))
};