export const apiRequest = {

  getBookingData() {
    return fetch('http://localhost:3001/api/v1/bookings')
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(error => displayError(error))
  },

  getCustomerData() {
    return fetch('http://localhost:3001/api/v1/customers')
      .then(response => response.json())
      .then(data => data.customers)
      .catch(error => displayError(error))
  },

  getRoomData() {
    return fetch('http://localhost:3001/api/v1/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => displayError(error))
  },

  postNewRoomBooking(body) {
    return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(response => response)
    // .catch(error => displayError(error))
  }
}

const displayError = (error) => {
  if (error.message = 'Failed to fetch') {
    const mainPage = document.getElementById('loginView');
    mainPage.innerText = 'Oops, looks like something went wrong please refresh and try again';
  }
}