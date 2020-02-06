const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/hydration.js');
const User = require('../src/user.js');


beforeEach(() => {
  data = [
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 55
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 63
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 73
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "numOunces": 85
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "numOunces": 93
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "numOunces": 29
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "numOunces": 33
    },

  ];

  hydro = new Hydration(data, 2);
});

describe('Hydration', function() {

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydro).to.be.an.instanceof(Hydration);
  });

  describe('findUserHydroData Method', () => {
    it('should get all hydration data for a user by id', () => {
      expect(hydro.findUserHydroData()).to.deep.equal(hydro.data);
    });
  })
  describe('calculateAvgOzsPerDay Method', () => {

    it('should calculate average ozs consumed per day', () => {
      expect(hydro.calculateAvgOzsPerDay()).to.equal(61);
    });
  })
});
