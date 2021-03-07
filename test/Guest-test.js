import chai from 'chai';
const expect = chai.expect;
import Guest from '../src/Guest.js';
import Hotel from '../src/Hotel.js';
import { roomData, bookingData, customerData } from './test-data';

describe('Guest', () => {
  let guest1, guest2, guest3, hotel;

  beforeEach(() => {
    guest1 = new Guest('customer1', customerData);
    guest2 = new Guest('customer2', customerData);
    guest3 = new Guest('customer40', customerData);
    hotel = new Hotel(roomData, bookingData, '2020/01/10');
  });

  describe('Guest Properties', () => {

    it('should be a function', () => {
      expect(Guest).to.be.a('function');
    });

    it('should be an instance of User', () => {
      expect(guest1).to.be.an.instanceof(Guest);
    });

    it('should have an id', () => {
      guest1.getValidUserID();
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

  describe('Guest Methods', () => {
    it('should be able to find a guest\'s booking history', () => {
      expect(guest1.findGuestBookingHistory(bookingData)).to.deep.equal([{
        "id": "5fwrgu4i7k55hl6t8",
        "userID": 1,
        "date": "2020/02/05",
        "roomNumber": 12,
        "roomServiceCharges": []
      }]);
    });

    it('should return an empty array if guest has no booking history', () => {
      expect(guest2.findGuestBookingHistory(bookingData)).to.deep.equal([]);
    });

    it('should return an empty array if guest has no booking history', () => {
      expect(guest2.findGuestBookingHistory(bookingData)).to.deep.equal([]);
    });

    it('should be able to caculate the total amount spent on rooms for a guest', () => {
      expect(guest1.calculateAmountSpent(bookingData, roomData)).to.deep.equal('340.17');
    });

    it('should be able to organize a guests booking history', () => {
      guest3.sortBookingHistory(bookingData);

      expect(guest3.currentBookings).to.deep.equal([{
        "id": "5fwrgu4i7k55hl6t9",
        "userID": 40,
        "date": "2021/03/07",
        "roomNumber": 14,
        "roomServiceCharges": []
      }]);
      expect(guest3.futureBookings).to.deep.equal([{
        "id": "5fwrgu4i7k55hl6tb",
        "userID": 40,
        "date": "2021/04/31",
        "roomNumber": 2,
        "roomServiceCharges": []
      }]);
      expect(guest3.pastBookings).to.deep.equal([{
        "id": "5fwrgu4i7k55hl6t7",
        "userID": 40,
        "date": "2020/02/16",
        "roomNumber": 2,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6ta",
        "userID": 40,
        "date": "2020/01/31",
        "roomNumber": 1,
        "roomServiceCharges": []
      }]);
    });

    it('should return empty arrays if a guest has no booking history to organize', () => {
      guest2.sortBookingHistory(bookingData);

      expect(guest2.futureBookings).to.deep.equal([]);
      expect(guest2.pastBookings).to.deep.equal([]);
      expect(guest2.currentBookings).to.deep.equal([]);
    });

    it('should be able to sort its booking history', () => {
      guest3.sortBookingHistory(bookingData);
      guest3.sortBookingsByDate('past')

      expect(guest3.pastBookings).to.deep.equal([{
        "id": "5fwrgu4i7k55hl6ta",
        "userID": 40,
        "date": "2020/01/31",
        "roomNumber": 1,
        "roomServiceCharges": []
      }, {
        "id": "5fwrgu4i7k55hl6t7",
        "userID": 40,
        "date": "2020/02/16",
        "roomNumber": 2,
        "roomServiceCharges": []
      }
      ]);
    });
  });
})