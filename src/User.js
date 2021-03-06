class User {
  constructor(userName, customerData) {
    this.userName = userName;
    this.password = 'overlook2021';
    this.id;
    this.customerData = customerData;
    this.name;
    this.guest = false;
    this.manager = false;
  }

  getUserID() {
    this.id = parseInt(this.userName.slice(8));
    if (this.id > 0 && this.id < 51) {
      this.guest = true;
      return 'guest';
    } else {
      return 'Error, not a valid username'
    }
  }

  determineUserType(password) {
    if (this.userName === 'manager' && password === this.password) {
      this.id = 0;
      this.manager = true;
      return 'manager';
    } else if (this.userName.includes('customer') && password === this.password) {
      return this.getUserID();
    } else {
      return 'Error, not a valid username and password';
    }
  }
}


export default User;

// Login:  username: customer50 (where 50 is the ID of the user)
//         password: overlook2021

// User Class (userName, customers)
// properties: UserName taken from login (userName, customers), determines type of user Guest or Manager

// id: is number 1-50 take from userName, use slice, check that it's a number, set id = 0 if manager
// username: userName  -- ex. customer50 where 50 is user ID
// password: password -- overlook2021 -- same for both manager and user // do i need this?
// customers: holds all customerData from API
// name; - to be determined from findUserName method

// methods: 
// determineUser(userName) : determines if user is a Guest or Manager 
//   return  'guest' if id is between 1- 50;
//   return manger if id === 0
//   return error message if password or id doesn't match guest or user;

// findUserName() : iterate over customer data, find where userId matches customer id
//   return name; set name to property.