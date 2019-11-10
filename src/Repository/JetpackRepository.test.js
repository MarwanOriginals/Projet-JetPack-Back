const JetpackRepository = require('./JetpackRepository');
const Jetpack = require('../Entity/Jetpack');

describe('Jetpack repository GetAll and Get one', function () {

    test('Get all Jetpacks', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([{
                id: '8aa1f794-6fae-443b-9e01-75f9b0bdc4d7',
                name: 'Jet Pack à fusion X98371',
                image: 'Base 64 ...'
            },
                {
                    id: '8aa1f794-6fae-443b-9e01-75f9b0bdc4d8',
                    name: 'Jet Pack à fusion X98371',
                    image: 'Base 64 ...'
                },
            ])
        };
        const repository = new JetpackRepository(dbMock);
        expect(repository.getAll()[0]).toStrictEqual({
            id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
            name: "Jet Pack à fusion X98371",
            image: "Base 64 ..."
        })
    });

    test('Get one Jetpacks', () => {
        const dbMock2 = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([{
                    id: '8aa1f794-6fae-443b-9e01-75f9b0bdc4d7',
                    name: 'Jet Pack à fusion X98371',
                    image: 'Base 64 ...'
                }]
            )
        };
        const repository = new JetpackRepository(dbMock2);
        expect(repository.getOne('8aa1f794-6fae-443b-9e01-75f9b0bdc4d7')).toStrictEqual([{
            id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
            name: "Jet Pack à fusion X98371",
            image: "Base 64 ..."
        }])
    });

    test('Get one Jetpacks with error', () => {
        const dbMock2 = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(0)
        };
        const repository = new JetpackRepository(dbMock2);
        expect(() => repository.getOne('8aa1f794-6fae-443b-9e01-75f9b0bdc4d7')).toThrowError(Error('Jetpack with ID :8aa1f794-6fae-443b-9e01-75f9b0bdc4d7 was not founded'));
    });
});

describe('Jetpack repository delete', function () {

    test('delete Jetpacks', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            remove : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(3),
            size : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        expect(repository.delete('1')).toEqual('Deleted');
    });

    test('delete Jetpacks with error', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            remove : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(0),
            size : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        expect(() => repository.delete('1')).toThrowError(Error('Jetpack with ID :1 was not founded'));
    });
});

describe('Jetpack repository update', function () {

    test('Update Name Jetpacks', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            create : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(2),
            find : jest.fn().mockReturnThis(),
            assign : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        expect(repository.updateName('8aa1f794-6fae-443b-9e01-75f9b0bdc4d7', 'toto')).toStrictEqual('toto');
    });

    test('Update Name Jetpacks with error', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            create : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(0),
            find : jest.fn().mockReturnThis(),
            assign : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        expect(() => repository.updateName('8aa1f794-6fae-443b-9e01-75f9b0bdc4d7', 'toto')).toThrowError(Error('Jetpack with ID :8aa1f794-6fae-443b-9e01-75f9b0bdc4d7 was not founded'));
    });

    test('Update Image Jetpacks', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            create : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(2),
            find : jest.fn().mockReturnThis(),
            assign : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        expect(repository.updateImage('8aa1f794-6fae-443b-9e01-75f9b0bdc4d7', 'toto.jpg')).toStrictEqual('toto.jpg');
    });

    test('Update Image Jetpacks with error', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            create : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(0),
            find : jest.fn().mockReturnThis(),
            assign : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        expect(() => repository.updateImage('8aa1f794-6fae-443b-9e01-75f9b0bdc4d7', 'toto.jpg')).toThrowError(Error('Jetpack with ID :8aa1f794-6fae-443b-9e01-75f9b0bdc4d7 was not founded'));
    });
});


describe('Jetpack repository create', function () {

    test('Create Jetpacks', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        let jp = new Jetpack();
        jp.id = '1';
        jp.name = 'toto';
        expect(repository.create(jp)).toEqual('Created');
    });


    test('Create Jetpacks with error no Jetpack', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        expect(() => repository.create(null)).toThrowError(Error('Jetpack object is undefined'));
    });

    test('Create Jetpacks with error no ID', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        let jp = new Jetpack();
        jp.id = null;
        jp.name = 'toto';
        expect(() => repository.create(jp)).toThrowError(Error('Jetpack object is missing information'));
    });

    test('Create Jetpacks with error no Name', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        let jp = new Jetpack();
        jp.id = '1';
        jp.name = null;
        expect(() => repository.create(jp)).toThrowError(Error('Jetpack object is missing information'));
    });
});



