class Hotel {
  constructor(roomData, bookingData, data) {
    this.roomData = roomData;
    this.bookingData = bookingData;
    this.date = date;
    this.avaiableRooms = [];
  }
}

export default User;

// bookings:   {
//   "id": "5fwrgu4i7k55hl6sz",
//   "userID": 9,
//   "date": "2020/04/22",
//   "roomNumber": 15,
//   "roomServiceCharges": []
// };

// rooms: {
//   "number": 1,
//   "roomType": "residential suite",
//   "bidet": true,
//   "bedSize": "queen",
//   "numBeds": 1,
//   "costPerNight": 358.4
// };


// methods:
// findRoomsAvaiable() - iterate over bookingsData to find open rooms
// findRoomByType() - filter roomdata by room type