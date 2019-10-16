module.exports = class {
    constructor(db) {
        this.db = db;
    }

    getAll() {
        return this.db.get('bookings').value();
    }
};
