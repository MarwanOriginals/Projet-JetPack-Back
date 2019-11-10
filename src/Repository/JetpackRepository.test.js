const JetpackRepository = require('./JetpackRepository');
const Jetpack = require('../Entity/Jetpack');
describe('Jetpack repository get available', function () {

    test('Get available Jetpacks, jetpack 1 filtered', () => {
    	
    	const dbMock = {
            get : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValueOnce([
            	{
				    id: "1",
				    jetpackId: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
				    startDate: "2019-09-06T00:00:00.000Z",
				    endDate: "2019-09-09T00:00:00.000Z"
		    	},
		    	{
					id: "2",
				    jetpackId: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
				    startDate: "2019-09-12T00:00:00.000Z",
				    endDate: "2019-09-16T00:00:00.000Z"
		    	}
		    ])
    		.mockReturnValueOnce([
		        {
				  id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
				  name: "Jet Pack à fusion X98371",
				  image: "Base 64 ..."
				},
				{
					id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d8",
					name: "Jet Pack à fusion X98371",
					image: "Base 64 ..."
				}
        	])
        };
		const repository = new JetpackRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 7));
		let endDate = new Date(Date.UTC(2019, 8, 15));

        expect(repository.getAvailable(startDate.toJSON(), endDate.toJSON())).toStrictEqual([{
			id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d8",
			name: "Jet Pack à fusion X98371",
			image: "Base 64 ..."
		}])
    });

    test('Get available Jetpacks, none filtered', () => {
    	
    	const dbMock = {
            get : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValueOnce([
            	{
				    id: "1",
				    jetpackId: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
				    startDate: "2019-09-06T00:00:00.000Z",
				    endDate: "2019-09-09T00:00:00.000Z"
		    	},
		    	{
					id: "2",
				    jetpackId: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
				    startDate: "2019-09-12T00:00:00.000Z",
				    endDate: "2019-09-16T00:00:00.000Z"
		    	}
		    ])
    		.mockReturnValueOnce([
		        {
				  id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
				  name: "Jet Pack à fusion X98371",
				  image: "Base 64 ..."
				},
				{
					id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d8",
					name: "Jet Pack à fusion X98371",
					image: "Base 64 ..."
				}
        	])
        };
		const repository = new JetpackRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 10));
		let endDate = new Date(Date.UTC(2019, 8, 10));

        expect(repository.getAvailable(startDate.toJSON(), endDate.toJSON())).toStrictEqual([
        {
		    id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d7",
		    name: "Jet Pack à fusion X98371",
		    image: "Base 64 ..."
		},
        {
			id: "8aa1f794-6fae-443b-9e01-75f9b0bdc4d8",
			name: "Jet Pack à fusion X98371",
		    image: "Base 64 ..."
		}])
    });

    test('Test startDate > endDate', () => {
    	
    	const dbMock = {};
		const repository = new JetpackRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 12));
		let endDate = new Date(Date.UTC(2019, 8, 10));

        expect( () => { repository.getAvailable(startDate.toJSON(), endDate.toJSON()) })
        .toThrow('end date should be greater than start date');
    });

    test('Test wrong startDate', () => {
    	
    	const dbMock = {};
		const repository = new JetpackRepository(dbMock);
        
        let startDate = 'wrong date';
		let endDate = new Date(Date.UTC(2019, 8, 12));

        expect( () => { repository.getAvailable(startDate, endDate.toJSON()) })
        .toThrow('startDate is not valid');
    });

    test('Test wrong endDate', () => {
    	
    	const dbMock = {};
		const repository = new JetpackRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 9));
		let endDate = 'wrong date';

        expect( () => { repository.getAvailable(startDate.toJSON(), endDate) })
        .toThrow('endDate is not valid');
    });

});

