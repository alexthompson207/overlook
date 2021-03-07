export const apiRequest = {

  getBookingData() {
    return fetch('http://localhost:3001/api/v1/bookings')
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(error => console.log(error.message));
  },

  getCustomerData() {
    return fetch('http://localhost:3001/api/v1/customers')
      .then(response => response.json())
      .then(data => data.customers)
      .catch(error => console.log(error.message));
  },

  getRoomData() {
    return fetch('http://localhost:3001/api/v1/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => console.log(error.message));
  },
}