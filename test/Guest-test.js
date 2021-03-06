import chai from 'chai';
const expect = chai.expect;
import Guest from '../src/Guest.js';
import Hotel from '../src/Hotel.js';
import { roomData, bookingData, customerData } from './test-data';

describe('Hotel', () => {
  let guest1, guest2, hotel;

  beforeEach(() => {
    guest1 = new Guest('customer1', customerData);
    guest2 = new Guest('customer2', customerData);
    hotel = new Hotel(roomData, bookingData, '2020/01/10');
  });

  describe.only('Guest Properties', () => {

    it('should be a function', () => {
      expect(Guest).to.be.a('function');
    });

    it('should be an instance of User', () => {
      expect(guest1).to.be.an.instanceof(Guest);
    });

    it('should have an id', () => {
      guest1.getValidUserID();
      guest1.getGuestName();
      expect(guest1.id).to.deep.equal(1);
    });

    it('should have a name', () => {
      guest1.getValidUserID();
      guest1.getGuestName();
      expect(guest1.name).to.deep.equal('Tony Hawk');
    });

    it('should have no booking history to start', () => {
      expect(guest1.currentBookings).to.deep.equal([]);
      expect(guest1.futureBookings).to.deep.equal([]);
      expect(guest1.pastBookings).to.deep.equal([]);
    });

    it('should have not have spent any money to start', () => {
      expect(guest1.totalAmountSpent).to.deep.equal(0);

    });
  });
})