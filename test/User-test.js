import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js'


describe('User', () => {
  let user1, user2, user3, user4, user5, customerData;

  beforeEach(() => {
    customerData = [{
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

    user1 = new User('customer1', customerData);
    user2 = new User('customer40', customerData);
    user3 = new User('alex', customerData);
    user4 = new User('manager', customerData);
    user5 = new User('customer55', customerData);
  });

  describe('User Properties', () => {

    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should be an instance of User', () => {
      expect(user1).to.be.an.instanceof(User);
    });

    it('should have the same password for all users', () => {
      expect(user1.password).to.deep.equal('overlook2021');
      expect(user4.password).to.deep.equal('overlook2021');
    });

    it('should be able to hold a user name', () => {
      expect(user1.userName).to.deep.equal('customer1');
      expect(user4.userName).to.deep.equal('manager');
    });

    it('should not be a guest or manager by default', () => {
      expect(user1.guest).to.deep.equal(false);
      expect(user4.manager).to.deep.equal(false);
    });

    it('should hold customerData', () => {
      expect(user1.customerData).to.deep.equal(customerData);
      expect(user4.customerData).to.deep.equal(customerData);
    });

    it('should not have an id or name by default', () => {
      expect(user1.name).to.deep.equal(undefined);
      expect(user4.id).to.deep.equal(undefined);
    });
  });

  describe('User Methods', () => {
    it('should be able to validate if a user is a guest', () => {
      const validUser = user1.getValidUserID();

      expect(validUser).to.deep.equal('guest');
      expect(user1.guest).to.deep.equal(true);
    });

    it('should be able to validate if a user is not a guest', () => {
      const invalidUser = user3.getValidUserID();

      expect(invalidUser).to.equal('Error, not a valid username');
      expect(user1.guest).to.deep.equal(false);
    });

    it('should be able to determine if it\'s user type is a guest', () => {
      const guest = user1.determineUserType('overlook2021');

      expect(guest).to.deep.equal('guest');
      expect(user1.guest).to.deep.equal(true);
      expect(user1.manager).to.deep.equal(false);
    });

    it('should be able to determine if it\'s user type is a manager', () => {
      const manager = user4.determineUserType('overlook2021');

      expect(manager).to.deep.equal('manager');
      expect(user4.manager).to.deep.equal(true);
      expect(user4.guest).to.deep.equal(false);
    });

    it('should be able to get a valid guests\'s id', () => {
      user2.getValidUserID('overlook2021');

      expect(user2.id).to.deep.equal(40);
    });

    it('should be able to get a valid managers\'s id', () => {
      user4.determineUserType('overlook2021');

      expect(user4.id).to.deep.equal(0);
    });

    it('should be able to validate the user\'s username and password', () => {
      const badUserName = user5.determineUserType('overlook2021');
      const badUserPassword = user1.determineUserType('password')

      expect(badUserName).to.deep.equal('Error, not a valid username');
      expect(badUserPassword).to.deep.equal('Error, not a valid username and password');
    });

    it('should invalidate the user if it\'s username does not contain "customer" or "manager"', () => {
      const random = user3.determineUserType('overlook2021');

      expect(random).to.deep.equal('Error, not a valid username and password');
    });

    it('should return a valid guest\'s name', () => {
      user1.determineUserType('overlook2021');

      expect(user1.getGuestName()).to.deep.equal('Tony Hawk');
    });

    it('should return an error if guest\'s name isn\'t in records', () => {
      user5.determineUserType('overlook2021');

      expect(user5.getGuestName()).to.deep.equal('Error, guest not on file');
    });
  });
})