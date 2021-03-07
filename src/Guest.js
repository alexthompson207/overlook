import { bookingData } from '../test/test-data';
import User from './User'

class Guest extends User {
  constructor(userName, customerData) {
    super(userName, customerData);
    this.pastBookings = [];
    this.currentBookings = [];
    this.futureBookings = [];
    this.totalAmountSpent = 0;
  }

  findGuestBookingHistory(bookingData) {
    this.getValidUserID();
    return bookingData.filter(booking => booking.userID === this.id);
  }

  calculateAmountSpent(bookingData, roomData) {
    const bookingHistory = this.findGuestBookingHistory(bookingData);
    const totalAmount = roomData.reduce((total, room) => {
      bookingHistory.forEach(booking => {
        if (booking.roomNumber === room.number) {
          total += room.costPerNight;
        }
      })
      return total;
    }, 0);
    return this.totalAmountSpent = totalAmount.toFixed(2);
  }

  sortBookingHistory(bookingData) {
    const bookingHistory = this.findGuestBookingHistory(bookingData);
    bookingHistory.forEach(booking => {
      if (booking.date === this.date) {
        this.currentBookings.push(booking);
      } else if (Date.parse(booking.date) > Date.parse(this.date)) {
        this.futureBookings.push(booking);
      } else {
        this.pastBookings.push(booking);
      }
    })
  }

  sortBookingsByDate(timePeriod) {
    if (this.futureBookings.length > 0 && timePeriod === 'future') {
      this.futureBookings.sort((a, b) => {
        let aDate = Date.parse(a.date);
        let bDate = Date.parse(b.date);
        return bDate - aDate;
      });
    } else if (this.pastBookings.length > 0 && timePeriod === 'past') {
      this.pastBookings.sort((a, b) => {
        let aDate = Date.parse(a.date);
        let bDate = Date.parse(b.date);
        return aDate - bDate;
      })
    }
  }
}

export default Guest;

