import './css/index.scss';
import User from './User';
import Guest from './Guest';
import Hotel from './Hotel';
import { apiRequest } from './fetchAPIData';

let customerData;
let bookingData;
let roomData;
let currentGuest;
let currentUser;
let hotel;
let today;

const guestSearchBar = document.getElementById('roomForm');
const filterOption = document.getElementById('roomTypes');
const searchByDateSection = document.getElementById('searchSection');
const avaiableRoomCard = document.getElementById('roomCards');
const loginForm = document.getElementById('loginForm');

window.addEventListener('load', getAllAPIData);
loginForm.addEventListener('click', handleUserLogin);
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

function getCurrentDate() {
  const unformattedDate = new Date;
  const dateString = unformattedDate.toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  today = dateString.split('-').join('/');
}

function assignAPIData(customers, bookings, rooms) {
  getCurrentDate();
  customerData = customers;
  bookingData = bookings;
  roomData = rooms;
  hotel = new Hotel(roomData, bookingData, today);
}

function handleUserLogin(event) {
  event.preventDefault();
  const userNameInput = document.getElementById('loginUsername');
  const userPasswordInput = document.getElementById('loginPassword');
  if (event.target.className === 'login-button') {
    determineUserType(userNameInput.value, userPasswordInput.value);
    clearLoginForm(userNameInput, userPasswordInput);
  }
}

function determineUserType(userNameInput, userPasswordInput) {
  currentUser = new User(userNameInput, customerData);
  currentUser.date = today;
  const userType = currentUser.determineUserType(userPasswordInput);
  removeDateInputError();
  if (userType === 'guest') {
    createGuest(currentUser, userPasswordInput);
  } else {
    displayLoginFormError();
  }
}

function displayLoginFormError() {
  loginForm.insertAdjacentHTML('afterend', `<h3 class="login-error error" id="loginError">This Username and Password is not recognized!</h3>`)
}

function clearLoginForm(userName, userPassword) {
  userName.value = '';
  userPassword.value = '';
}

function createGuest(currentUser, password) {
  currentUser.determineUserType(password);
  currentGuest = new Guest(currentUser.userName, customerData);
  currentGuest.date = today;
  updateGuestRecords();
  displayGuestDashboard();
}

function updateGuestRecords() {
  currentGuest.calculateAmountSpent(bookingData, roomData);
  currentGuest.sortBookingHistory(bookingData);
  currentGuest.sortBookingsByDate('past');
  currentGuest.sortBookingsByDate('future');
}

function displayGuestDashboard() {
  displayGuestDashboardView();
  displayPastGuestBookings();
  displayGuestBookingsToday();
  displayGuestFutureBookings();
  displayGuestName();
  displayGuestCost();
  displayTodaysDate();
}

function displayGuestDashboardView() {
  const guestView = document.getElementById('guestView');
  const loginView = document.getElementById('loginView');
  addClass(loginView);
  removeClass(guestView);
}

function displayPastGuestBookings() {
  const pastBookingSection = document.querySelector('.display-past-list');
  pastBookingSection.innerHTML = '';
  if (!currentGuest.pastBookings.length) {
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
  if (!currentGuest.currentBookings.length) {
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
  if (!currentGuest.futureBookings.length) {
    futureBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You don't have any stays planned in the future.</li>`);
  } else {
    currentGuest.futureBookings.forEach(booking => {
      futureBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You'll be staying in room ${booking.roomNumber} on ${new Date(booking.date).toLocaleDateString()}</li>`);
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
  const openRoomCard = document.querySelector('.room-cards-view');
  const guestSearch = document.getElementById('roomCards');
  openRoomCard.innerHTML = ''
  guestSearch.insertAdjacentHTML('afterbegin', `<h2 class="room-types-empty">We are so sorry, we don't have any open rooms on ${new Date(hotel.date).toLocaleDateString()}. Please adjust your search</h2>`);
}

function handleSearchByDate(event) {
  if (event.target.classList.contains('data-button')) {
    checkDateInputs(event);
  }
}

function checkDateInputs(event) {
  const dateInput = event.target.previousElementSibling.value.replaceAll("-", "/");
  if (today <= dateInput) {
    hotel.date = dateInput;
    filterOption.selectedIndex = 0;
    displayGuestSearchView(dateInput);
  } else {
    displayDateInputError();
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
  } else if (filteredRooms.length) {
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

function createBookingObject(roomNumberCard, event) {
  const bookingObj = {
    "userID": currentGuest.id,
    "date": hotel.date,
    "roomNumber": roomNumberCard
  }
  bookNewRoom(bookingObj, event);
}

function bookNewRoom(body, event) {
  apiRequest.postNewRoomBooking(body)
    .then(response => checkResponse(response, event))
    .then((booking) => updateBookingHistory(booking))
    .catch(error => displayServerError(error))
}

function displayServerError(error) {
  if (error.message === 'Failed to fetch') {
    const errorText = document.querySelectorAll('.room-card');
    errorText.forEach(button => {
      button.innerText = 'Please reload and try again';
    })
  }
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

function updateBookingHistory(booking) {
  bookingData.push(booking.newBooking);
  updateGuestRecords();
  displayGuestCost();
  displayGuestBookingsToday(currentGuest);
  displayGuestFutureBookings(currentGuest);
}