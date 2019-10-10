const Jetpack = require('./Jetpack');
const JetpackRepository = require('../../src/Repository/JetpackRepository');

describe('Jetpack toJson', function () {

    test('Test toJson', () => {
        let jetpack = new Jetpack();
        jetpack.id = "1";
        jetpack.name = "X1982BD";
        jetpack.image = "base64...";
        expect(jetpack.toJson()).toMatchObject({
            id: "1",
            name: "X1982BD",
            image: "base64..."
        })
    });
});

describe('get JetPack', function () {

    test('Test get All', () => {
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
        expect(repository.getAll()[0]).toMatchObject({
            id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
            name: "Jet Pack à fusion X98371",
            image: "Base 64 ..."
        })
    });

    test('Test get One', () => {
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
        expect(repository.getOne('8aa1f794-6fae-443b-9e01-75f9b0bdc4d7')).toMatchObject([{
            id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
            name: "Jet Pack à fusion X98371",
            image: "Base 64 ..."
        }])
    });
});