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

};



if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
