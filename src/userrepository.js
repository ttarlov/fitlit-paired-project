class UserRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
    this.friends = null;
  }

  getUserDataById(id) {
    // return the single user whose id mathes the argument of 'id'.
    return this.data.find(user => user.id === id);
  }

  calculateAvgStepGoal() {

  }

}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
