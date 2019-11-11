const Jetpack = require("../../src/Entity/Jetpack");
const db = require('../../src/Db');
const JetpackRepository = require('../../src/Repository/JetpackRepository');

module.exports = (req, res) => {
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;

    const repository = new JetpackRepository(db);

    let jetpacks = repository.getAvailable(startDate, endDate);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(jetpacks)
};