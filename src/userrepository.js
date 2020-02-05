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
    let total = 0;
    this.data.forEach(user => {
      return total+= user.dailyStepGoal;
    });
    let avg = total / this.data.length;
    return avg;
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
