class Activity {
  constructor(activityData, id) {
    this.data = activityData;
    this.id = id;
    this.user = this.findUserActivityData();
  }

  findUserActivityData() {
    return this.data.filter(user => user.userID === this.id);
  }

  calculateMilesWalked(date, user) {
    let selectedDay = this.user.find(day => day.date === date)
    let dailySteps = selectedDay.numSteps
    let stride = user.strideLength
    let miles = ((stride * dailySteps) / 5280)
    return miles.toFixed(2)
  }

  calculateActiveMinutes(date, user) {
    let selectedDay = this.user.find(day => day.date === date)
    return selectedDay.minutesActive
  }

  calculateWeeklyAverageActivity(date, user) {
    let indexOfCurrentDay = this.user.findIndex(day => day.date === date);
    let weeklyData = this.user.slice(indexOfCurrentDay -6, indexOfCurrentDay + 1)
    let weeklyTotal = weeklyData.reduce((acc, day) => {
      acc += day.minutesActive
      return acc
    },0)
    return (weeklyTotal / 7).toFixed(2)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
