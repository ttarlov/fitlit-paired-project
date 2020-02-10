const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/activity.js');
const User = require('../src/user.js');

let data, sampleUserData

beforeEach(() => {
  data = [
{
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
  "flightsOfStairs": 46
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

sampleUserData1 = {
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
};

sampleUserData2 = {
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
};

activity = new Activity(data, 1);
activity2 = new Activity(data, 2);
user = new User(sampleUserData)
user2 = new User(sampleUserData2)
});

describe('Activity', function() {

  it('should be a function', function(){
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function(){
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



});


//
