
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
  currentGuest = new Guest('customer1', bookingData);
  activateGuestMethods();
  displayGuestDashboard();

}

function activateGuestMethods() {
  currentGuest.calculateAmountSpent(bookingData, roomData);
  currentGuest.sortBookingHistory(bookingData)
  currentGuest.sortBookingsByDate('past')
  currentGuest.sortBookingsByDate('future')
}

function displayGuestDashboard() {
  displayPastGuestBookings();
  displayGuestBookingsToday();
  displayGuestFutureBookings();
}

function displayPastGuestBookings() {
  const pastBookingSection = document.querySelector('.guest-bookings-past').children[2];
  currentGuest.pastBookings.forEach(booking => {
    const pastCard = `<li class="display-history">You stayed in room ${booking.roomNumber} on ${booking.date}</li>`;
    pastBookingSection.insertAdjacentHTML('beforeend', pastCard);
  })
}

function displayGuestBookingsToday() {
  const todayBookingSection = document.querySelector('.guest-bookings-today').children[2];
  currentGuest.currentBookings.forEach(booking => {
    const currentCard = `<li class="display-history">You stayed in room ${booking.roomNumber} on ${booking.date}</li>`;
    todayBookingSection.insertAdjacentHTML('beforeend', currentCard);
  })
}

function displayGuestFutureBookings() {
  const futureBookingSection = document.querySelector('.guest-bookings-future').children[2];
  currentGuest.currentBookings.forEach(booking => {
    const futureCard = `<li class="display-history">You stayed in room ${booking.roomNumber} on ${booking.date}</li>`;
    futureBookingSection.insertAdjacentHTML('beforeend', futureCard);
  })
}