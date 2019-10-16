const Booking = require("../../src/Entity/Booking");
const db = require('../../src/Db');
const BookingRepository = require('../../src/Repository/BookingRepository');

module.exports = (req, res) => {
    const repository = new BookingRepository(db);
    let bookings = repository.getAll();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(bookings)
};
