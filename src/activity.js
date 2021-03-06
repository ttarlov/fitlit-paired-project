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

  calculateActiveMinutes(date) {
    let selectedDay = this.user.find(day => day.date === date)
    return selectedDay.minutesActive
  }

  calculateWeeklyAverageActivity(date) {
    let indexOfCurrentDay = this.user.findIndex(day => day.date === date);
    let weeklyData = this.user.slice(indexOfCurrentDay - 6, indexOfCurrentDay + 1)
    let weeklyTotal = weeklyData.reduce((acc, day) => {
      acc += day.minutesActive
      return acc
    }, 0)
    return (weeklyTotal / 7).toFixed(2);
  }

  findIfStepGoalWasAchieved(date, user) {
    let dailyStepGoal = user.dailyStepGoal;
    let singleDayActivity = this.user.find(day => day.date === date)
    let numStepsToday = singleDayActivity.numSteps
    if (numStepsToday > dailyStepGoal) {
      return 'Good Job! You Reached your Step Goal'
    } else {
      return 'Pick up the pace, lazy bones!'
    }
  }

  findDaysStepGoalWasExceeded(user) {
    let greatDays = [];
    let stepGoal = user.dailyStepGoal;
    this.user.forEach(day => {
      if (day.numSteps >= stepGoal) {
        greatDays.push(day.date)
      }
    })
    return greatDays;
  }

  findStairClimbingRecord() {
    let sortedDays = this.user.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    let stairRecordDay = sortedDays.shift();
    let recordDate = stairRecordDay.date
    return recordDate
  }

  getAvgStairsClimbedForAll(date) {
    let dailyData = this.data.filter(day => day.date === date);
    let totalStairs = dailyData.reduce((acc, day) => {
      acc += day.flightsOfStairs
      return acc
    }, 0)
    return Math.floor(totalStairs / dailyData.length)
  }

  getAvgStepsForAll(date) {
    let dailyData = this.data.filter(day => day.date === date);
    let totalSteps = dailyData.reduce((acc, day) => {
      acc += day.numSteps
      return acc
    }, 0)
    return Number((totalSteps / dailyData.length).toFixed(0))
  }

  getMinutesActiveForAll(date) {
    let dailyData = this.data.filter(day => day.date === date);
    let totalMinutes = dailyData.reduce((acc, day) => {
      acc += day.minutesActive
      return acc
    }, 0)
    return Number((totalMinutes / dailyData.length).toFixed(0))
  }

  //custom metric
  findMostActiveUserByDate(date, user) {
    let selectedDay = this.data.filter(day => day.date === date)
    let winnerID = selectedDay.sort((a, b) => b.numSteps - a.numSteps)[0].userID
    let victor = user.getUserDataById(winnerID);
    return victor.name.split(' ')[0];
  }

  findStepsForDay(date, id) {
    let activityData = this.data;
    let user = activityData.find(element => element.userID === id && element.date === date);
    return user.numSteps
  }

  findStairsForDay(date, id) {
    let activityData = this.data;
    let user = activityData.find(element => element.userID === id && element.date === date);
    return user.flightsOfStairs
  }

  findWeeklyActivity(date) {
    let indexOfCurrentDay = this.user.findIndex(day => day.date === date);
    return this.user.slice(indexOfCurrentDay - 6, indexOfCurrentDay + 1)
  }

  findTotalWeeklySteps(date, id) {
    let user = this.data.find(element => element.userID === id && element.date === date)
    console.log(user);
    let indexOfCurrentDay = this.user.findIndex(day => day.date === date);
    console.log(indexOfCurrentDay);
    let totalWeeklyActivity = this.user.slice(indexOfCurrentDay - 6, indexOfCurrentDay + 1);
    console.log(totalWeeklyActivity)
    let totalWeeklySteps = totalWeeklyActivity.reduce((acc, day) => {
      acc += day.numSteps
      return acc
    }, 0)
    return totalWeeklySteps
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
