class Activity {
  constructor(activityData, id) {
    this.data = activityData;
    this.user = this.findUserActivityData();
  }

  findUserActivityData() {
    return this.data.filter(user => user.userID === this.id);
  }


}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
