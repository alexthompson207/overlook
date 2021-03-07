class User {
  constructor(userName, customerData) {
    this.userName = userName;
    this.password = 'overlook2021';
    this.id;
    this.customerData = customerData;
    this.name;
    this.date = new Date().toISOString().slice(0, 10).replace(/-/g, '/');
    this.guest = false;
    this.manager = false;
  }

  getValidUserID() {
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
      return this.getValidUserID();
    } else {
      return 'Error, not a valid username and password';
    }
  }

  getGuestName() {
    const currentGuest = this.customerData.find(user => user.id === this.id);
    if (currentGuest) {
      this.name = currentGuest.name;
      return currentGuest.name;
    } else {
      return `Error, guest not on file`
    }
  }
}

export default User;