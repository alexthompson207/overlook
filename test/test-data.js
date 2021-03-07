const customerData = [{
  "id": 1,
  "name": "Tony Hawk"
},
{
  "id": 2,
  "name": "Tom Brady"
},
{
  "id": 40,
  "name": "Oprah Winfrey"
}];

const roomData = [
  {
    "number": 1,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 358.4
  },
  {
    "number": 2,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 477.38
  },
  {
    "number": 3,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 491.14
  },
  {
    "number": 4,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 429.44
  },
  {
    "number": 5,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 340.17
  },
  {
    "number": 12,
    "roomType": "single room",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 2,
    "costPerNight": 340.17
  }];

const bookingData = [
  {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 9,
    "date": "2020/04/22",
    "roomNumber": 1,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 43,
    "date": "2020/01/24",
    "roomNumber": 24,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t6",
    "userID": 13,
    "date": "2020/01/10",
    "roomNumber": 12,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t7",
    "userID": 40,
    "date": "2020/02/16",
    "roomNumber": 2,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t8",
    "userID": 1,
    "date": "2020/02/05",
    "roomNumber": 12,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6t9",
    "userID": 40,
    "date": "2021/03/07",
    "roomNumber": 14,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6ta",
    "userID": 40,
    "date": "2020/01/31",
    "roomNumber": 1,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6tb",
    "userID": 40,
    "date": "2021/04/31",
    "roomNumber": 2,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6tc",
    "userID": 22,
    "date": "2020/01/31",
    "roomNumber": 3,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6td",
    "userID": 27,
    "date": "2020/01/31",
    "roomNumber": 4,
    "roomServiceCharges": []
  },
  {
    "id": "5fwrgu4i7k55hl6te",
    "userID": 44,
    "date": "2020/01/31",
    "roomNumber": 5,
    "roomServiceCharges": []
  }];

export { roomData, bookingData, customerData };