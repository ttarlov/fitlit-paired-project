class Sleep {
  constructor(sleepData, id) {
    this.data = sleepData;
    this.id = id;
    this.user = this.findUserSleepData();
  };

  findUserSleepData() {
    return this.data.filter(user => user.userID === this.id);
  }

  calculateAvgSleepQuality() {
    let totalSleep = this.user.reduce((total, day) => {
        total += day.sleepQuality
        return total
      },0);
    return (totalSleep/this.user.length).toFixed(2);
  }

  calculateHoursSleptByDay(date) {
    let selectedDay = this.user.find(day => day.date === date)
    return selectedDay.hoursSlept;
  }

  calculateQualityOfSleepByDay(date) {
    let selectedDay = this.user.find(day => day.date === date)
    return selectedDay.sleepQuality;
  }

  calculateWeeklySleep(date) {
    let indexOfCurrentDay = this.user.findIndex(day => day.date === date);
      return this.user.slice(indexOfCurrentDay -6, indexOfCurrentDay + 1)
  };

  calculateAvgSleepQualityForAllUsers() {
      let totalSleepQuality = this.data.reduce((acc, user) => {
          acc+= user.sleepQuality
          return acc;
        },0);
      return  (totalSleepQuality / this.data.length).toFixed(2);
  };

  // findAllUsersWhoSleepGood() {
  ////Find a week's worth of data for every user
  //Calculate average sleep quality for each user for the week
  //return only the users with an average sleep quality > 3
  // }

  findMostRestedUserByDate(date) {
    let selectedDay = this.data.filter(day => day.date === date)
    return selectedDay.sort((a, b) => b.hoursSlept - a.hoursSlept)[0]
    //iterate through array of objects and find user with most sleep
  }

  calculatePercentageOfRecommendedSleep(date) {
    let indexOfCurrentDay = this.user.findIndex(day => day.date === date);
    let weeklySleep = this.user.slice(indexOfCurrentDay -6, indexOfCurrentDay + 1)
    let totalHours = weeklySleep.reduce((acc, hours) => {
      acc+= hours.hoursSlept;
      return acc
    },0)
    return `${((totalHours / 56) * 100).toFixed(2)}%`
    //divide totalHours by 56 and return % of total recommended sleep.
  }

  calculateTotalAvgHoursSlept() {
    let totalSleep = this.user.reduce((total, day) => {
        total += day.hoursSlept
        return total
      },0);
    return (totalSleep/this.user.length).toFixed(2);
  }

}




if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
