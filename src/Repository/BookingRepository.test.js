const BookingRepository = require('./BookingRepository');
const Booking = require('../Entity/Booking');

describe('Booking repository Create', function () {

    test('Create booking', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookingRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 9));
        let endDate = new Date(Date.UTC(2019, 8, 12));
        let booking = new Booking();
        booking.id = '1';
        booking.jetpackId = '2';
        booking.startDate = startDate.toJSON();
        booking.endDate = endDate.toJSON();
        
        expect(repository.create(booking)).toEqual('Created');
    });

    test('Create null booking', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookingRepository(dbMock);
        
        expect(() => repository.create(null)).toThrowError(Error('Booking object is undefined'));
    });

    test('Create booking missing id', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookingRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 9));
        let endDate = new Date(Date.UTC(2019, 8, 12));
        let booking = new Booking();
        booking.id = '';
        booking.jetpackId = '2';
        booking.startDate = startDate.toJSON();
        booking.endDate = endDate.toJSON();
        
        expect(() => repository.create(booking)).toThrowError(Error('Booking object is missing information'));
    });
    
    test('Create booking missing jetpack id', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookingRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 9));
        let endDate = new Date(Date.UTC(2019, 8, 12));
        let booking = new Booking();
        booking.id = '1';
        booking.jetpackId = '';
        booking.startDate = startDate.toJSON();
        booking.endDate = endDate.toJSON();
        
        expect(() => repository.create(booking)).toThrowError(Error('Booking object is missing information'));
    });
    
    test('Create booking missing start date', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookingRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 9));
        let endDate = new Date(Date.UTC(2019, 8, 12));
        let booking = new Booking();
        booking.id = '1';
        booking.jetpackId = '2';
        booking.endDate = endDate.toJSON();
        
        expect(() => repository.create(booking)).toThrowError(Error('Booking object is missing information'));
    });
    
    test('Create booking missing end date', () => {
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookingRepository(dbMock);
        
        let startDate = new Date(Date.UTC(2019, 8, 9));
        let endDate = new Date(Date.UTC(2019, 8, 12));
        let booking = new Booking();
        booking.id = '1';
        booking.jetpackId = '2';
        booking.startDate = startDate.toJSON();
        
        expect(() => repository.create(booking)).toThrowError(Error('Booking object is missing information'));
    });
});

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
