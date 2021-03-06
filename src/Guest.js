import User from './User'

class Guest extends User {
  constructor(userName, customerData) {
    super(userName, customerData);
    this.pastBookings = [];
    this.currentBookings = [];
    this.futureBookings = [];
    this.totalAmountSpent = 0;
    // this.id = this.getValidUserID();
    // this.name = this.getGuestName();
  }
}

export default Guest;

// Guest Class: for a single customer/user --> extends User Class? child of User?
// if it is Child of User inherits id, username, customers, and name properties

// constructor(userName, customers)
// properties:
// from User Class:
// id: 
// userName:
// customers:
// name: this.findUserName();

// Guest Properties
// previousBookings: []
// futureBookings: []
// currentBooking ?
// totalAmountSpent: 0

// methods:

// findBookingHistory() : returns all bookings matched with user by id
// calculateAmountSpent() : returns total cost of booking histroy for user by costPerNight
// sortBookingHistory() : filter booking history, past, 
// present, future booking, 
// set respective property to result,
//  ex. past bookings array = this.previousBookings;