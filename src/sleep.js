class Sleep {
  constructor(sleepData, id) {
    this.data = sleepData;
    this.id = id;
    this.user = this.findUserSleepData();
  };

  findUserSleepData() {
    return this.data.filter(user => user.userID === this.id)

  }

}


if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
