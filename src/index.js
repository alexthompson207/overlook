
import './css/index.scss';
import User from './User';
import Guest from './Guest';
import Hotel from './Hotel';
import { apiRequest } from './fetchAPIData';

let customerData;
let bookingData;
let roomData;
let currentGuest;
let hotel;


const guestSearchBar = document.getElementById('roomForm');
const filterOption = document.getElementById('roomTypes');
const searchByDateSection = document.getElementById('searchSection');
const avaiableRoomCard = document.getElementById('roomCards');

window.addEventListener('load', getAllAPIData);
guestSearchBar.addEventListener('click', handleGuestSearchClick);
searchByDateSection.addEventListener('click', handleSearchByDate);
avaiableRoomCard.addEventListener('click', handleBookRoom)


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
  hotel = new Hotel(roomData, bookingData, '2021/03/07');
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
  const pastBookingSection = document.querySelector('.display-past-list');
  pastBookingSection.innerHTML = '';
  if (currentGuest.pastBookings.length === 0) {
    pastBookingSection.insertAdjacentHTML('beforeend', `<p class="display-history">You have not stayed here before! We look forward to having you.</p>`);
  } else {
    currentGuest.pastBookings.forEach(booking => {
      pastBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You stayed in room ${booking.roomNumber} on ${new Date(booking.date).toLocaleDateString()}</li>`);
    });
  }
}

function displayGuestBookingsToday() {
  const todayBookingSection = document.querySelector('.display-today-list');
  todayBookingSection.innerHTML = '';
  if (currentGuest.currentBookings.length === 0) {
    todayBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You don't have any stays booked today</li>`);
  } else {
    currentGuest.currentBookings.forEach(booking => {
      todayBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You are staying in Room ${booking.roomNumber} tonight</li>`);
    });
  }
}

function displayGuestFutureBookings() {
  const futureBookingSection = document.querySelector('.display-future-list');
  futureBookingSection.innerHTML = '';
  if (currentGuest.futureBookings.length === 0) {
    futureBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You don't have any stays planned in the future.</li>`);
  } else {
    currentGuest.futureBookings.forEach(booking => {
      futureBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You stayed in room ${booking.roomNumber} on ${new Date(booking.date).toLocaleDateString()}</li>`);
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

function displayGuestSearchView(date) {
  removeDateInputError();
  hideGuestDashboard();
  showGuestSearchView();
  determineOpenRooms(date);
}

function hideGuestDashboard() {
  const bookingCards = document.querySelector('.guest-bookings-view');
  const bookingDate = document.querySelector('.book-room-view')
  addClass(bookingCards);
  addClass(bookingDate);
}

function showGuestSearchView() {
  const guestSearch = document.querySelector('.guest-search-view');
  const roomCards = document.querySelector('.room-cards-view');
  const searchDate = document.querySelector('.room-types-open');
  searchDate.innerText = `Available Rooms for ${new Date(hotel.date).toLocaleDateString()}`;
  console.log(typeof searchDate.innerText);
  removeClass(guestSearch);
  removeClass(roomCards);
}

function addClass(element, className) {
  element.classList.add(className || 'hidden');
}

function removeClass(element, className) {
  element.classList.remove(className || 'hidden');
}

function determineOpenRooms(date) {
  const openRooms = hotel.findRoomsAvaiable(date);
  if (openRooms.length > 0) {
    displayOpenRooms(openRooms);
  } else {
    displayNoOpenRoomsMessage();
  }
}

function displayOpenRooms(openRooms) {
  const openRoomCard = document.querySelector('.room-cards-view');
  openRoomCard.innerHTML = '';
  openRooms.forEach(room => {
    openRoomCard.insertAdjacentHTML('beforeend', `
      <article class="room-card box" id=${room.number}>
      <h2 class="room-card-title">Room ${room.number}: ${room.roomType}</h2>
      <ul class="room-list">
        <li class="room-list-item">Number of Beds: ${room.numBeds}</li>
        <li class="room-list-item">Bed Size: ${room.bedSize}</li>
        <li class="room-list-item">Bidet: ${room.bidet}</li>
        <li class="room-list-item">Cost Per Night: $${room.costPerNight}</li>
      </ul>
      <button class="book-room-button">BOOK ROOM</button>
    </article>`);
  })
}

function displayNoOpenRoomsMessage() {
  const guestSearch = document.querySelector('.guest-search-view');
  guestSearch.innerHTML = `<h2 class="room-types-empty">We are so sorry, we don't have any open rooms on ${hotel.date}. Please adjust your search</h2>`
}

function handleSearchByDate(event) {
  if (event.target.classList.contains('data-button')) {
    checkDateInputs(event);
  }
}

function checkDateInputs(event) {
  const dateInput = event.target.previousElementSibling.value.replaceAll("-", "/");
  if (currentGuest.date <= dateInput) {
    hotel.date = dateInput;
    displayGuestSearchView(dateInput);
  } else {
    displayDateInputError()
  }
}

function displayDateInputError() {
  removeDateInputError();
  searchByDateSection.insertAdjacentHTML('afterend', `<h3 class="error date-view-title">Please enter a valid date</h3>`);
}

function removeDateInputError() {
  const errorMessage = document.querySelector('.error');
  if (errorMessage) {
    errorMessage.remove();
  }
}

function handleGuestSearchClick(event) {
  if (event.target.classList.contains('return-home-button')) {
    hideGuestSearchView();
    showGuestDashboard();
  } else if (event.target.classList.contains('room-type-inputs')) {
    filterOption.addEventListener('input', handleFilterRooms)
  }
}

function handleFilterRooms(event) {
  const filteredRooms = hotel.filterRoomsByType(event.target.value);
  if (event.target.id !== 'roomTypes') {
    return;
  } else if (filteredRooms.length > 0) {
    displayOpenRooms(filteredRooms);
  } else {
    displayNoOpenRoomsMessage();
  }
}

function showGuestDashboard() {
  const bookingCards = document.querySelector('.guest-bookings-view');
  const bookingDate = document.querySelector('.book-room-view')
  removeClass(bookingCards);
  removeClass(bookingDate);
}

function hideGuestSearchView() {
  const guestSearch = document.querySelector('.guest-search-view ');
  const roomCards = document.querySelector('.room-cards-view')
  addClass(guestSearch);
  addClass(roomCards);
}

function handleBookRoom(event) {
  if (event.target.classList.contains('book-room-button')) {
    const roomNumber = Number(event.target.parentNode.id);
    createBookingObject(roomNumber, event);
  }
}

function createBookingObject(roomNumber, event) {
  const bookingObj = {
    "userID": currentGuest.id,
    "date": hotel.date,
    "roomNumber": roomNumber
  }
  bookNewRoom(bookingObj, event);
}

function bookNewRoom(body, event) {
  const newBookingPost = apiRequest.postNewRoomBooking(body);
  newBookingPost
    .then(response => checkResponse(response, event))
    .then(() => updateBookingHistory());
}

function checkResponse(response, event) {
  if (response.ok) {
    displayConfirmation(event);
    return response.json();
  } else {
    displayBookingError(event);
  }
}

function displayConfirmation(event) {
  const bookBtn = event.target;
  bookBtn.insertAdjacentHTML('afterend', `<h3>Booking Successful</h3>`);
  bookBtn.remove();
}

function displayBookingError(event) {
  removeDateInputError();
  const bookBtn = event.target;
  bookBtn.insertAdjacentHTML('afterend', `<h3 class="error">Please Try Again</h3>`);
}

function updateBookingHistory() {
  getAllAPIData();
}