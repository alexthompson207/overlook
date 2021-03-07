
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
  currentGuest = new Guest('customer1', customerData);
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
  displayGuestName();
  displayGuestCost();
  displayTodaysDate();
}

function displayPastGuestBookings() {
  const pastBookingSection = document.querySelector('.guest-bookings-past');
  if (currentGuest.pastBookings.length === 0) {
    pastBookingSection.insertAdjacentHTML('beforeend', `<p class="display-history">You have not stayed here before! We look forward to having you.</p>`);
  } else {
    currentGuest.pastBookings.forEach(booking => {
      pastBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You stayed in room ${booking.roomNumber} on ${booking.date}</li>`);
    });
  }
}

function displayGuestBookingsToday() {
  const todayBookingSection = document.querySelector('.guest-bookings-today');
  if (currentGuest.currentBookings.length === 0) {
    todayBookingSection.insertAdjacentHTML('beforeend', `<p class="display-history">You don't have any stays booked today</p>`);
  } else {
    currentGuest.currentBookings.forEach(booking => {
      todayBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You are staying in Room ${booking.roomNumber} tonight</li>`);
    });
  }
}

function displayGuestFutureBookings() {
  const futureBookingSection = document.querySelector('.guest-bookings-future');
  if (currentGuest.futureBookings.length === 0) {
    futureBookingSection.insertAdjacentHTML('beforeend', `<p class="display-history">You don't have any stays planned in the future.</p>`);
  } else {
    currentGuest.futureBookings.forEach(booking => {
      futureBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You stayed in room ${booking.roomNumber} on ${booking.date}</li>`);
    });
  }
}

function displayGuestName() {
  currentGuest.getValidUserID();
  const guestName = document.querySelector('.guest-nav-name')
  guestName.innerText = `Welcome ${currentGuest.getGuestName()}!`;
}

function displayGuestCost() {
  const guestCost = document.querySelector('.guest-nav-cost');
  guestCost.innerText = `You have spent $${currentGuest.totalAmountSpent} on your stays so far!`;
}

function displayTodaysDate() {
  const dateToday = document.querySelector('.guest-nav-date');
  const date = new Date().toLocaleDateString('en-US');
  console.log(date);
  dateToday.innerText = `Today's Date: ${date}`;
}