module.exports = class {
    constructor(db) {
        this.db = db;
    }

    getAll() {
        return this.db.get('bookings').value();
    }

    create(booking) {
        if (!booking)
            throw new Error('Booking object is undefined');

        if (!booking.id || !booking.jetpackId || !booking.startDate || !booking.endDate)
            throw new Error('Booking object is missing information');
		
        this.db
            .get('bookings')
            .push(booking.toJson())
            .write()
        return "Created"
    }
};
