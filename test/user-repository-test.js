const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userrepository.js');

beforeEach(() => {
  data = [
    {
      "id": 27,
      "name": "Johnathan Schulist",
      "address": "868 Kathryn Pike, Gibsonport ME 79500-6839",
      "email": "Mayra49@yahoo.com",
      "strideLength": 3,
      "dailyStepGoal": 10000,
      "friends": [
        17,
        46,
        40,
        44
      ]
    },
    {
      "id": 28,
      "name": "Noemi Huels",
      "address": "5437 Barton Oval, Caesarview RI 88637",
      "email": "Geovany.Jaskolski@hotmail.com",
      "strideLength": 3.3,
      "dailyStepGoal": 2000,
      "friends": [
        18,
        16,
        47
      ]
    },
    {
      "id": 29,
      "name": "Colten Trantow",
      "address": "2625 Waino Skyway, Kaceybury ME 18723",
      "email": "Demetris67@hotmail.com",
      "strideLength": 4.2,
      "dailyStepGoal": 9000,
      "friends": [
        9,
        5,
        41
      ]
    }
  ];
  userRepo = new UserRepository(data, 28);
});


describe('UserRepository', function() {

  it('should be a function', () => {

    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  describe('getUserDataById Method', function() {

    it('should be able to get user data by id', function() {
      expect(userRepo.getUserDataById(28)).to.deep.equal({
        "id": 28,
        "name": "Noemi Huels",
        "address": "5437 Barton Oval, Caesarview RI 88637",
        "email": "Geovany.Jaskolski@hotmail.com",
        "strideLength": 3.3,
        "dailyStepGoal": 2000,
        "friends": [
          18,
          16,
          47
        ]
      });


    });

  });
})





//
