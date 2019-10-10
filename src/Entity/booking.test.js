const Booking = require('./Booking');
describe('Booking toJson', function () {

    test('Test toJson', () => {
        let booking = new Booking();
        booking.id = "1";
	    booking.jetpackId = "1";
	    booking.startDate = new Date(2019, 8, 6, 10, 12).toJSON();
	    booking.endDate = new Date(2019, 8, 9, 10, 23).toJSON();

        expect(booking.toJson()).toMatchObject({
            id: "1",
            jetpackId: "1",
            startDate: "2019-09-06T08:12:00.000Z",
            endDate: "2019-09-09T08:23:00.000Z"
        })
    });
    
    test('Test set wrong startDate', () => {
        let booking = new Booking();
        booking.id = "1";
	    booking.jetpackId = "1";

        expect( () => {booking.startDate = 'ChocoBanane'} ).toThrow('date is not valid');
    });
    
    test('Test set wrong startDate (new Date with wrong entry)', () => {
        let booking = new Booking();
        booking.id = "1";
	    booking.jetpackId = "1";

        expect( () => {booking.startDate = new Date('ChocoBanane')} ).toThrow('date is not valid');
    });
    
    test('Test set wrong endDate', () => {
        let booking = new Booking();
        booking.id = "1";
	    booking.jetpackId = "1";
	    booking.startDate = new Date(2019, 8, 6, 10, 12).toJSON();
	    
        expect( () => {booking.endDate = 'ChocoBanane'} ).toThrow('date is not valid');
    });
    
    test('Test set wrong endDate (new Date with wrong entry)', () => {
        let booking = new Booking();
        booking.id = "1";
	    booking.jetpackId = "1";
	    booking.startDate = new Date(2019, 8, 6, 10, 12).toJSON();
	    
        expect( () => {booking.endDate = new Date('ChocoBanane')} ).toThrow('date is not valid');
    });
    
    test('Test set wrong endDate, startDate > endDate', () => {
        let booking = new Booking();
        booking.id = "1";
	    booking.jetpackId = "1";
	    booking.startDate = new Date(2019, 8, 9, 10, 12).toJSON();
	    
        expect( () => {booking.endDate = new Date(2019, 8, 6, 10, 23).toJSON()} ).toThrow('end date should be greater than start date');
    });
});
