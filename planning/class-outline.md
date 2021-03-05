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

Login:  username: customer50 (where 50 is the ID of the user)
        password: overlook2021

User Class (userName, customers)
properties: UserName taken from login (userName, customers), determines type of user Guest or Manager

id: is number 1-50 take from userName, use slice, check that it's a number, set id = 0 if manager
username: userName  -- ex. customer50 where 50 is user ID
password: password -- overlook2021 -- same for both manager and user // do i need this?
customers: holds all customerData from API
name; - to be determined from findUserName method

methods: 
determineUser(userName) : determines if user is a Guest or Manager 
  return  'guest' if id is between 1- 50;
  return manger if id === 0
  return error message if password or id doesn't match guest or user;

findUserName() : iterate over customer data, find where userId matches customer id
  return name; set name to property.



Hotel Class (roomdata, bookingdata)
properties: 
roomdata: all room data from API
bookingdata: all booking data from API
avaiableRooms: []
methods:
findRoomsAvaiable() - iterate over bookingsData to find open rooms
findRoomByType() - filter roomdata by room type


Guest Class: for a single customer/user --> extends User Class? child of User?
if it is Child of User inherits id, username, customers, and name properties

constructor(userName, customers)
properties:
from User Class:
id: 
userName:
customers:
name: this.findUserName();

Guest Properties
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
