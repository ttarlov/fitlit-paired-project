class UserRepository {
  constructor(data) {
    this.data = data;
    this.friends = null;
  }

  getUserDataById(id) {
    // return the single user whose id mathes the argument of 'id'.
    return this.data.find(user => user.id === id);
  }

  //need to loop through all of the users. grab their dailyStepGoal
  //add them together and divide them by the number of users in the group.
  calculateAvgStepGoal() {
    let totalStepGoal = this.data.reduce((acc, user) => {
        acc+= user.dailyStepGoal
        return acc;
      },0);
    return  totalStepGoal / this.data.length;
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
