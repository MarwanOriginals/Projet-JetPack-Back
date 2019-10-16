const BookingRepository = require('./BookingRepository');

describe('Booking repository GetAll', function () {

    test('Get all bookings', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([
		        {
				    id: "1",
				    jetpackId: "1",
				    startDate: "2019-09-06T10:12:00.000Z",
				    endDate: "2019-09-09T10:23:00.000Z"
		    	},
		    	{
					id: "2",
				    jetpackId: "1",
				    startDate: "2019-11-06T10:12:00.000Z",
				    endDate: "2019-11-10T10:23:00.000Z"
		    	}
        	])
        };
        const repository = new BookingRepository(dbMock);

        expect(repository.getAll()).toStrictEqual([
        		{id: "1", jetpackId: "1", startDate: "2019-09-06T10:12:00.000Z", endDate: "2019-09-09T10:23:00.000Z"},
		    	{id: "2", jetpackId: "1", startDate: "2019-11-06T10:12:00.000Z", endDate: "2019-11-10T10:23:00.000Z"}]);
    });
});
