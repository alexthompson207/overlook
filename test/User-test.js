import chai from 'chai';
const expect = chai.expect;
import User from '../src/User.js'


describe('User', () => {
  let user1, user2, user3, user4, customerData;

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
  });

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
})