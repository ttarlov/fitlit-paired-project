class Hydration {
  constructor(hydrationData, id) {
    this.data = hydrationData;
    this.id = id;
  // this.date = hydrationData.date;
  // this.numOunces = hydrationData.numOunces;
    this.user = this.findUserHydroData();
  };

  findUserHydroData() {
    return this.data.filter(user => user.userID === this.id)

  }

  calculateAvgOzsPerDay() {
    let totalOz = this.user.reduce((total, day) => {
        total += day.numOunces
        // total[day.date] = day.numOunces

        return total
      },0);

    return Math.floor(totalOz/this.user.length)

  };

  calculateDailyOz(date) {
    let selectedDay = this.user.find(day => day.date === date)
    return selectedDay.numOunces;
  };

  calculateWeeklyOz() {
    let totalWeeklyOz = this.user.reduce((total, day) => {
       total.push({date:day.date, amount:day.numOunces})
       return total
     },[])
     return totalWeeklyOz
  }

}
// calculateAvgFluidOzConsumed() {
//   let total = 0;
//   this.data.forEach(user => {
//     return total+= user.dailyStepGoal;
//   });
//   let avg = total / this.data.length;
//   return avg;
// }

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
