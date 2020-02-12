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
      "date": "2019/06/22",
      "numOunces": 30
    },
    {
      "userID": 2,
      "date": "2019/06/23",
      "numOunces": 45
    },
    {
      "userID": 2,
      "date": "2019/06/24",
      "numOunces": 48
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 22
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 55
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "numOunces": 31
    },
    {
      "userID": 1,
      "date": "2019/06/23",
      "numOunces": 28
    },
    {
      "userID": 1,
      "date": "2019/06/24",
      "numOunces": 40
    },
    {
      "userID": 1,
      "date": "2019/06/25",
      "numOunces": 33
    },
    {
      "userID": 1,
      "date": "2019/06/26",
      "numOunces": 29
    },
    {
      "userID": 1,
      "date": "2019/06/27",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/06/28",
      "numOunces": 44
    },
    {
      "userID": 1,
      "date": "2019/06/29",
      "numOunces": 51
    },
  ];

  hydro = new Hydration(data, 2);
  hydro2 = new Hydration(data, 1)
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
      expect(hydro.findUserHydroData()).to.deep.equal(hydro.user);
    });
    it('should get all hydration data for another user', () => {
      expect(hydro2.findUserHydroData()).to.deep.equal(hydro2.user);
    })
  })
  describe('calculateAvgOzsPerDay Method', () => {

    it('should calculate average ozs consumed per day', () => {
      expect(hydro.calculateAvgOzsPerDay()).to.equal(57);
    });
  })

  describe('calculateDailyOz Method', () => {
    it('should show how many fl oz they consumed for a specific day', () => {
      expect(hydro.calculateDailyOz("2019/06/20")).to.deep.equal(29);
    });
  });

  describe('calculateWeeklyOz Method', () => {

    it('should calculate how many fl oz consumed each day over the course of a week', () => {
      expect(hydro.calculateWeeklyOz('2019/06/24')).to.deep.equal([
  { userID: 2, date: '2019/06/17', numOunces: 73 },
  { userID: 2, date: '2019/06/18', numOunces: 85 },
  { userID: 2, date: '2019/06/19', numOunces: 93 },
  { userID: 2, date: '2019/06/20', numOunces: 29 },
  { userID: 2, date: '2019/06/22', numOunces: 30 },
  { userID: 2, date: '2019/06/23', numOunces: 45 },
  { userID: 2, date: '2019/06/24', numOunces: 48 }
]);
    });
    it('should calculate how many fl oz consumed each day over the course of a week for another user', () => {
      expect(hydro2.calculateWeeklyOz('2019/06/29')).to.deep.equal([
  { userID: 1, date: '2019/06/23', numOunces: 28 },
  { userID: 1, date: '2019/06/24', numOunces: 40 },
  { userID: 1, date: '2019/06/25', numOunces: 33 },
  { userID: 1, date: '2019/06/26', numOunces: 29 },
  { userID: 1, date: '2019/06/27', numOunces: 37 },
  { userID: 1, date: '2019/06/28', numOunces: 44 },
  { userID: 1, date: '2019/06/29', numOunces: 51 }
]);
    });
  });

});
