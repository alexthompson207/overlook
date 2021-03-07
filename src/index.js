
import './css/index.scss';
import User from './User';
import Guest from './Guest';
import Hotel from './Hotel';
import { apiRequest } from './fetchAPIData';

let customerData;
let bookingData;
let roomData;
let currentUser;
let currentGuest;



window.addEventListener('load', getAllAPIData);

function getAllAPIData() {
  const customers = apiRequest.getCustomerData();
  const bookings = apiRequest.getBookingData();
  const rooms = apiRequest.getRoomData();
  Promise.all([customers, bookings, rooms]).then(data => {
    assignAPIData(data[0], data[1], data[2]);
  })
}

function assignAPIData(customers, bookings, rooms) {
  customerData = customers;
  bookingData = bookings;
  roomData = rooms;
  currentUser = customerData[0];
  createGuest();

}

function createGuest() {
  currentGuest = new Guest(customer1, bookingData);
  activateGuestMethods();
  displayGuestDashBoard();

}

function activateGuestMethods() {
  currentGuest.calculateAmountSpent(bookingData, roomData);
  currentGuest.sortBookingHistory(bookingData)
  currentGuest.sortBookingsByDate('past')
  currentGuest.sortBookingsByDate('future')
}

function displayGuestDashBoard() {

}