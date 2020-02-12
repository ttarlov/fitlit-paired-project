const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/activity.js');
const UserRepository = require('../src/userrepository.js');

let data;

beforeEach(() => {
  data = [{
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numSteps": 14810,
      "minutesActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numSteps": 2634,
      "minutesActive": 107,
      "flightsOfStairs": 5
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "numSteps": 10333,
      "minutesActive": 114,
      "flightsOfStairs": 31
    },
    {
      "userID": 1,
      "date": "2019/06/23",
      "numSteps": 6389,
      "minutesActive": 41,
      "flightsOfStairs": 33
    },
    {
      "userID": 1,
      "date": "2019/06/24",
      "numSteps": 8015,
      "minutesActive": 106,
      "flightsOfStairs": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 11652,
      "minutesActive": 20,
      "flightsOfStairs": 24
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numSteps": 9256,
      "minutesActive": 108,
      "flightsOfStairs": 2
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numSteps": 9303,
      "minutesActive": 27,
      "flightsOfStairs": 14
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "numSteps": 8024,
      "minutesActive": 216,
      "flightsOfStairs": 32
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "numSteps": 14113,
      "minutesActive": 80,
      "flightsOfStairs": 10
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "numSteps": 6188,
      "minutesActive": 292,
      "flightsOfStairs": 32
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "numSteps": 12982,
      "minutesActive": 231,
      "flightsOfStairs": 55
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "numSteps": 13881,
      "minutesActive": 137,
      "flightsOfStairs": 46
    },
    {
      "userID": 2,
      "date": "2019/06/23",
      "numSteps": 5683,
      "minutesActive": 210,
      "flightsOfStairs": 41
    },
    {
      "userID": 2,
      "date": "2019/06/24",
      "numSteps": 9052,
      "minutesActive": 168,
      "flightsOfStairs": 14
    }
  ];

  sampleUserData= [{
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    },
    {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    },
  ];
  activity = new Activity(data, 1)
  activity2 = new Activity(data, 2)
});

describe('Activity', function() {

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  describe('findUserActivityData Method', () => {
    it('should get all activity data for a user by id', () => {
      expect(activity.findUserActivityData()).to.deep.equal(activity.user);
    });
    it('should get all hydration data for another user', () => {
      expect(activity2.findUserActivityData()).to.deep.equal(activity2.user);
    })
  });

  describe('calculateMilesWalked method', () => {
    it('should return total miles walked for a given date for a given user', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.calculateMilesWalked('2019/06/19', users.getUserDataById(1))).to.equal('9.26')
    })

    it('should return total miles walked for another given date for a given user', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.calculateMilesWalked('2019/06/22', users.getUserDataById(1))).to.equal('8.42')
    })

    it('should return total miles walked for a given date for another user', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.calculateMilesWalked('2019/06/19', users.getUserDataById(2))).to.equal('9.69')
    })
  })

  describe('calculateActiveMinutes method', () => {
    it('should return total minutes active for a given date for a given user', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.calculateActiveMinutes('2019/06/19', users.getUserDataById())).to.equal(213)
    });
  });

  describe('calculateWeeklyAverageActivity method', () => {
    it('should return average minutes active for a week for a given user', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.calculateWeeklyAverageActivity('2019/06/22', users.getUserDataById(1))).to.equal('155.57')
    });
  });

  describe('findIfStepGoalWasAchieved method', () => {
    it('should tell whether a user reached their daily step goal', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.findIfStepGoalWasAchieved('2019/06/22', users.getUserDataById(1))).to.equal('Good Job! You Reached your Step Goal')
    });

    it('should tell whether a user reached their daily step goal', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.findIfStepGoalWasAchieved('2019/06/23', users.getUserDataById(1))).to.equal('Pick up the pace, lazy bones!')
    });
  });

  describe('findDaysStepGoalWasExceeded method', () => {
    it('should tell whether a user reached their daily step goal', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.findDaysStepGoalWasExceeded(users.getUserDataById(1))).to.deep.equal(['2019/06/19', '2019/06/20', '2019/06/22'])
    });

    it('should tell whether another user reached their daily step goal', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.findDaysStepGoalWasExceeded(users.getUserDataById(2))).to.deep.equal(['2019/06/17', '2019/06/19', '2019/06/20', '2019/06/22', '2019/06/23', '2019/06/24'])
    });
  });

  describe('findStairClimbingRecord method', () => {
    it('Find all time stair climbing record', () => {
      expect(activity.findStairClimbingRecord()).to.equal('2019/06/24')
    });

    it('Find all time stair climbing record for another user', () => {
      expect(activity2.findStairClimbingRecord()).to.equal('2019/06/21')
    });
  });

  describe('getAvgStairsClimbedForAll method', () => {
    it('Find average stairs climed for all users on a specific day', () => {
      expect(activity.getAvgStairsClimbedForAll('2019/06/15')).to.equal(20)
    });
  });

  describe('getAvgStepsForAll method', () => {
    it('Find average steps taken for all users on a specific day', () => {
      expect(activity.getAvgStepsForAll('2019/06/15')).to.equal(7615)
    });
  });

  describe('getMinutesActiveForAll method', () => {
    it('Find average steps taken for all users on a specific day', () => {
      expect(activity.getMinutesActiveForAll('2019/06/15')).to.equal(80)
    });
  });

  describe('findMostActiveUserByDate method', () => {
    it('Find user\'s ID with most steps on a given day', () => {
      let users = new UserRepository(sampleUserData, 1)
      expect(activity.findMostActiveUserByDate('2019/06/15', users)).to.equal('Jarvis')
    });
  });

  describe('findStepsForDay method', () => {
    it('Find user\'s ID with most steps on a given day', () => {
      expect(activity.findStepsForDay('2019/06/16', 1)).to.equal(4294)
    });
  });

  describe('findStairsForDay method', () => {
    it('Find users flights of stairs for a given date based on ID', () => {
      expect(activity.findStairsForDay('2019/06/16', 1)).to.equal(10)
    });
  });

  describe('findWeeklyActivity method', function() {
    it('Find users all weekly activity data', function() {
      expect(activity.findWeeklyActivity('2019/06/24')).to.deep.equal([{
          userID: 1,
          date: '2019/06/18',
          numSteps: 3486,
          minutesActive: 114,
          flightsOfStairs: 32
        },
        {
          userID: 1,
          date: '2019/06/19',
          numSteps: 11374,
          minutesActive: 213,
          flightsOfStairs: 13
        },
        {
          userID: 1,
          date: '2019/06/20',
          numSteps: 14810,
          minutesActive: 287,
          flightsOfStairs: 18
        },
        {
          userID: 1,
          date: '2019/06/21',
          numSteps: 2634,
          minutesActive: 107,
          flightsOfStairs: 5
        },
        {
          userID: 1,
          date: '2019/06/22',
          numSteps: 10333,
          minutesActive: 114,
          flightsOfStairs: 31
        },
        {
          userID: 1,
          date: '2019/06/23',
          numSteps: 6389,
          minutesActive: 41,
          flightsOfStairs: 33
        },
        {
          userID: 1,
          date: '2019/06/24',
          numSteps: 8015,
          minutesActive: 106,
          flightsOfStairs: 37
        }
      ])
    });

    it('Find another users all weekly activity data', function() {
      expect(activity2.findWeeklyActivity('2019/06/24')).to.deep.equal([{
          userID: 2,
          date: '2019/06/18',
          numSteps: 8024,
          minutesActive: 216,
          flightsOfStairs: 32
        },
        {
          userID: 2,
          date: '2019/06/19',
          numSteps: 14113,
          minutesActive: 80,
          flightsOfStairs: 10
        },
        {
          userID: 2,
          date: '2019/06/20',
          numSteps: 6188,
          minutesActive: 292,
          flightsOfStairs: 32
        },
        {
          userID: 2,
          date: '2019/06/21',
          numSteps: 12982,
          minutesActive: 231,
          flightsOfStairs: 55
        },
        {
          userID: 2,
          date: '2019/06/22',
          numSteps: 13881,
          minutesActive: 137,
          flightsOfStairs: 46
        },
        {
          userID: 2,
          date: '2019/06/23',
          numSteps: 5683,
          minutesActive: 210,
          flightsOfStairs: 41
        },
        {
          userID: 2,
          date: '2019/06/24',
          numSteps: 9052,
          minutesActive: 168,
          flightsOfStairs: 14
        }
      ])
    });
  });

  describe('findTotalWeeklySteps method', function() {
    it('Find users total weekly steps', function() {
      expect(activity.findTotalWeeklySteps('2019/06/24', 2)).to.equal(57041)
    });
  });
});
