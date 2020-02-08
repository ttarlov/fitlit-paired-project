const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/sleep.js');
const User = require('../src/user.js');

beforeEach(() => {
  data = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 4.1,
      "sleepQuality": 3.6
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.6,
      "sleepQuality": 2.9
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 5.1,
      "sleepQuality": 2.6
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 8.1,
      "sleepQuality": 3.5
    },
    {
      "userID": 1,
      "date": "2019/06/23",
      "hoursSlept": 8.9,
      "sleepQuality": 2.2
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 4.4,
      "sleepQuality": 1.6
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 4.9,
      "sleepQuality": 3.9
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 8,
      "sleepQuality": 3.4
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.1,
      "sleepQuality": 1.8
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 6.9,
      "sleepQuality": 1.2
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 4.6,
      "sleepQuality": 2.8
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 6.1,
      "sleepQuality": 3.5
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 4.7,
      "sleepQuality": 4
    },
    {
      "userID": 2,
      "date": "2019/06/23",
      "hoursSlept": 10.1,
      "sleepQuality": 1.3
    },
    {
      "userID": 2,
      "date": "2019/06/24",
      "hoursSlept": 7.9,
      "sleepQuality": 1.6
    },
    {
      "userID": 2,
      "date": "2019/06/25",
      "hoursSlept": 5.9,
      "sleepQuality": 1.6
    },
  ];
  sleep = new Sleep(data, 1);
  sleep2 = new Sleep(data,2);
});

describe('Sleep', function() {

  it('should be a function', function(){
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function(){
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  describe('findUserSleepData Method', () => {
    it('should get all sleep data for a user by id', () => {
      expect(sleep.findUserSleepData()).to.deep.equal(sleep.user);
    });
    it('should get all hydration data for another user', () => {
      expect(sleep2.findUserSleepData()).to.deep.equal(sleep2.user);
    })
  });

  describe('calculateAvgSleepQuality Method', function(){
    it('Should calculate average sleep quality per day over all time', function(){
      expect(sleep.calculateAvgSleepQuality()).to.equal('3.27')
    });

    it('Should calculate average sleep quality per day over all time for another user', function(){
        expect(sleep2.calculateAvgSleepQuality()).to.equal('2.43')
      });
    });

  describe('calculateHoursSleptByDay Method', function(){
    it('should calculate daily sleep based on date', function(){
      expect(sleep.calculateHoursSleptByDay("2019/06/20")).to.equal(9.6)
    });

    it('should calculate daily sleep based on date for another user', function(){
      expect(sleep2.calculateHoursSleptByDay("2019/06/20")).to.equal(4.6)
    });
  });

  describe('calculateQualityOfSleepByDay Method', function(){
    it('should calculate daily sleep quality based on date', function(){
      expect(sleep.calculateQualityOfSleepByDay("2019/06/20")).to.equal(2.9)
    });

    it('should calculate daily sleep quality based on date for another user', function(){
      expect(sleep2.calculateQualityOfSleepByDay("2019/06/20")).to.equal(2.8)
    });
  });


});
