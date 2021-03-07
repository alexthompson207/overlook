class Hotel {
  constructor(roomData, bookingData, date) {
    this.rooms = roomData;
    this.bookings = bookingData;
    this.date = date;
    this.avaiableRooms = [];
  }

  findRoomsAvaiable(date) {
    const bookedRoomNumbers = this.bookings.reduce((roomNumbers, booking) => {
      if (booking.date === date) {
        roomNumbers.push(booking.roomNumber);
      }
      return roomNumbers;
    }, []);
    const openRooms = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number));
    this.avaiableRooms = openRooms;
    return openRooms;
  }

  filterRoomsByType(roomtype) {
    if (roomtype === 'All Rooms') {
      return this.avaiableRooms;
    }
    return this.avaiableRooms.filter(room => room.roomType === roomtype)
  }
}

export default Hotel;