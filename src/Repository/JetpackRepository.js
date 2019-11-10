module.exports = class {
    constructor(db) {
        this.db = db;
    }

    create(jetpack) {
        if (!jetpack) {
            throw new Error('Jetpack object is undefined');
        }

        if (!jetpack.id || !jetpack.name) {
            throw new Error('Jetpack object is missing information');
        }

        this.db
            .get('jetpacks')
            .push(jetpack.toJson())
            .write()
        return "Created"
    }


    getAll() {
        return this.db.get('jetpacks').value();
    }


    getOne(Id) {
        if (this.db.get('jetpacks').filter({id: Id}).size().value() < 1)
            throw new Error('Jetpack with ID :' + Id + ' was not founded');

        return this.db.get('jetpacks').filter({id: Id}).value();
    }

    delete(Id) {
        if (this.db.get('jetpacks').filter({id: Id}).size().value() < 1)
            throw new Error('Jetpack with ID :' + Id + ' was not founded');

        this.db.get('jetpacks').remove({ id: Id }).write();
        return "Deleted";
    }

    updateName(id, name)
    {
        if (this.db.get('jetpacks').filter({id: id}).size().value() < 1)
            throw new Error('Jetpack with ID :' + id + ' was not founded');

        this.db.get('jetpacks')
            .find({ id: id })
            .assign({ name: name})
            .write();
        return name;
    }

    updateImage(id, image)
    {
        if (this.db.get('jetpacks').filter({id: id}).size().value() < 1)
            throw new Error('Jetpack with ID :' + id + ' was not founded');

        this.db.get('jetpacks')
            .find({ id: id })
            .assign({ image: image})
            .write();
        return image;
    }
};
