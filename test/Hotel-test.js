import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/Hotel.js';
import { roomData, bookingData } from './test-data';

describe('Hotel', () => {
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
    it('should get all avaiable rooms from a given date', () => {
      expect(hotel.findRoomsAvaiable('2020/04/22')).to.deep.equal([roomData[1], roomData[2], roomData[3], roomData[4], roomData[5]]);
    });

    it('should return an empty array if no rooms are avaiable', () => {
      hotel.findRoomsAvaiable('2020/01/31');
      expect(hotel.avaiableRooms).to.deep.equal([]);
    });

    it('should be able to filter avaiable rooms by type', () => {
      hotel.findRoomsAvaiable('2020/04/22');
      expect(hotel.filterRoomsByType('suite')).to.deep.equal([roomData[1]]);
    });

    it('should return an empty array if there are no avaiable rooms by that type', () => {
      hotel.findRoomsAvaiable('2020/04/22');
      expect(hotel.filterRoomsByType('residential suite')).to.deep.equal([]);
    });

    it('should return all avaiable rooms if filter type is "All Rooms"', () => {
      hotel.findRoomsAvaiable('2020/04/22');
      expect(hotel.filterRoomsByType('all rooms')).to.deep.equal([roomData[1], roomData[2], roomData[3], roomData[4], roomData[5]]);
    });
  });
})