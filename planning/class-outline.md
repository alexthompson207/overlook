# Class Structure/Layout


bookings:   {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 9,
    "date": "2020/04/22",
    "roomNumber": 15,
    "roomServiceCharges": []
  };

customers:  {
    "id": 1,
    "name": "Leatha Ullrich"
  };

rooms: {
    "number": 1,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 358.4
  };

User Class
properties: taken from customer data ()
id: number
name: string 
username: 
password: 

methods:


Hotel Class (roomdata, bookingdata)
properties: 
roomdata: all room data from API
bookingdata: all booking data from API
avaiableRooms: []
methods:
findRoomsAvaiable()
findRoomByType()

Guest Class: for a single customer/user --> extends User Class?
properties:
id: 
name:
previousBookings: []
futureBookings: []
currentBooking ?
totalAmountSpent: 0
methods:

findBookingHistory() : returns all bookings matched with user by id

calculateAmountSpent() : returns total cost of booking histroy for user by costPerNight

sortBookingHistory() : filter booking history, past, present, future booking, set respective property to result, ex. past bookings array = this.previousBookings;







Customer/User
- Any room bookings I have made (past or present/upcoming)
- The total amount I have spent on rooms


- I should be able to select a date for which I’d like to book a room for myself
- Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
- I should be able to filter the list of available rooms by their roomType property
- I should be able to select a room for booking
- In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search
