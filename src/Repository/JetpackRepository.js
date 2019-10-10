module.exports = class {
    constructor(db) {
        this.db = db;
    }

    create(jetpack) {
        if (!jetpack) {
            throw 'Jetpack object is undefined';
        }

        if (!jetpack.id || !jetpack.name) {
            throw 'Jetpack object is missing information';
        }

        this.db
            .get('jetpacks')
            .push(jetpack.toJson())
            .write()
    }

    getAll() {
        return this.db.get('jetpacks').value();
    }
    getOne(Id) {
        if (this.db.get('jetpacks').filter({id: Id}).size().value() < 1)
            throw 'Jetpack with ID :' + Id + ' was not founded';

        return this.db.get('jetpacks').filter({id: Id}).value();
    }
};