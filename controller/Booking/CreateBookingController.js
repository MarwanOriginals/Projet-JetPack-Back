const Booking = require("../../src/Entity/Booking");
const uuidv4 = require('uuid/v4');
const db = require('../../src/Db');
const BookingRepository = require('../../src/Repository/BookingRepository');

module.exports = (req, res) => {
    let booking = new Booking();
    booking.id = uuidv4();
    booking.jetpackId = req.body.jetpackId;
    booking.startDate = req.body.startDate;
    booking.endDate = req.body.endDate;

    const repository = new BookingRepository(db);
    repository.create(booking);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).send(booking.toJson())
};
