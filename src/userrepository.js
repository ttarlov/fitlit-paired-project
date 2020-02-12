class UserRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
    this.friends = this.findFriends();
  }

  getUserDataById(id = this.id) {
    return this.data.find(user => user.id === id);
  }

  calculateAvgStepGoal() {
    let totalStepGoal = this.data.reduce((acc, user) => {
        acc+= user.dailyStepGoal
        return acc;
      },0);
    return  totalStepGoal / this.data.length;
  }

  findFriends() {
    return this.getUserDataById().friends;
  }

  findFriendsInfo() {
    let friendInfo = [];
    let friendIDs = this.friends;
    friendIDs.forEach(friend => {
      let foundFriend = this.data.find(user => user.id === friend)
      friendInfo.push(foundFriend)
    });
    return friendInfo
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
