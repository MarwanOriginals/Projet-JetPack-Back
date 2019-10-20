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
});

describe('Jetpack repository delete', function () {

    test('delete Jetpacks', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            remove : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnThis()
        };
        const repository = new JetpackRepository(dbMock);
        expect(repository.delete('1')).toEqual(1); // TODO
    });
});

