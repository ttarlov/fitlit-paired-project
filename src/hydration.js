class Hydration {
  constructor(hydrationData, id) {
    this.data = hydrationData;
    this.id = id;
    this.user = this.findUserHydroData();
  }

  findUserHydroData() {
    return this.data.filter(user => user.userID === this.id);

  }

  calculateAvgOzsPerDay() {
    let totalOz = this.user.reduce((total, day) => {
        total += day.numOunces
        return total
      },0);
    return Math.floor(totalOz/this.user.length)

  }

  calculateDailyOz(date) {
    let selectedDay = this.user.find(day => day.date === date)
    return selectedDay.numOunces;
  }

  calculateWeeklyOz(date) {
    let indexOfCurrentDay = this.user.findIndex(day => day.date === date);
    return this.user.slice(indexOfCurrentDay -6, indexOfCurrentDay + 1)
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
