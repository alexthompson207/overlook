import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import { roomData, bookingData } from './test-data';

describe.only('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(roomData, bookingData, '2020/01/10');
  })

  describe('Hotel Properties', () => {

    it('should be a function', () => {
      expect(Hotel).to.be.a('function');
    });

    it('should be an instance of Hotel', () => {
      expect(hotel).to.be.an.instanceof(Hotel);
    });

    it('should hold a current Date', () => {
      expect(hotel.date).to.deep.equal('2020/01/10');
    });

    it('should hold a list of bookings and rooms', () => {
      expect(hotel.rooms).to.deep.equal(roomData);
      expect(hotel.bookings).to.deep.equal(bookingData);
    });

    it('should hold a list of bookings and rooms', () => {
      expect(hotel.rooms).to.deep.equal(roomData);
      expect(hotel.bookings).to.deep.equal(bookingData);
    });

    it('should start out with an empty array of avaiable rooms', () => {
      expect(hotel.avaiableRooms).to.deep.equal([]);
    });
  });

  describe('Hotel Methods', () => {
    // it('should start out with an empty array of avaiable rooms', () => {
    //   expect(hotel.avaiableRooms).to.deep.equal([]);
    // });
  })
})