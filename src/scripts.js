let randomNumber = ((Math.ceil(Math.random() * 50)));
const userRepo = new UserRepository(userData)
const user = new User(userData[`${randomNumber -1}`])
const hydration = new Hydration(hydrationData, randomNumber)
const sleep = new Sleep(sleepData, randomNumber)
let welcomeName = document.querySelector('.user-first-name-js');
let userFullName = document.querySelector('.user-full-name-js');
let userAddress = document.querySelector('.user-address-js');
let userEmail = document.querySelector('.user-email-js');
let userStrideLength = document.querySelector('.user-stride-length-js');
let userDailyStepGoal = document.querySelector('.user-daily-step-goal-js');
let userFriends = document.querySelector('.user-friends-js');
let stepGoalComparison = document.querySelector('.step-goal-comparison-js');
let waterConsumedByDay = document.querySelector('.water-consumed-by-day-js');
let waterConsumedByWeek = document.querySelector('.water-consumed-by-week-js');
let hoursSlept = document.querySelector('.hours-slept-js');
let sleepQuality = document.querySelector('.sleep-quality-js');
let lastWeekSleep = document.querySelector('.last-week-sleep-js');
let recomendedSleep = document.querySelector('.sleep-percentage-js')
let avgSleepQuality = document.querySelector('.avg-sleep-quality-js')
let avgHoursSleptAllTime = document.querySelector('.all-time-avg-hours-slept-js')

displayUserInfo(user);
displayWaterConsumtion();
displayStepInfo();
displaySleepData();

function displayUserInfo(user) {
  welcomeName.innerHTML = `${user.getFirstName()}`;
  userFullName.innerHTML = `${user.name}`;
  userAddress.innerHTML = `${user.address}`;
  userEmail.innerHTML = `${user.email}`;
}


function displaySleepData() {
  avgHoursSleptAllTime.innerHTML = `${sleep.calculateTotalAvgHoursSlept()} hrs`
  avgSleepQuality.innerHTML = `${(((sleep.calculateAvgSleepQuality())/5)*100).toFixed(2)}%`
  recomendedSleep.innerHTML = `${sleep.calculatePercentageOfRecommendedSleep("2019/09/22")}`
  sleepQuality.innerHTML = `${(((sleep.calculateQualityOfSleepByDay("2019/09/22"))/5)*100).toFixed(2)} %`;
  hoursSlept.innerHTML = `${sleep.calculateHoursSleptByDay("2019/09/22")}`;
  lastWeekSleep.innerHTML =
  `<p><u><span>Date </span><span> : Hours Slept</span> : <span>Sleep Quality</span></u></p>
  <p><span>${sleep.calculateWeeklySleep('2019/09/22')[0].date}</span><span> : ${sleep.calculateWeeklySleep('2019/09/22')[0].hoursSlept} hrs</span> : <span>${((sleep.calculateWeeklySleep('2019/09/22')[0].sleepQuality / 5) * 100).toFixed(0)}%</span></p>
  <p><span>${sleep.calculateWeeklySleep('2019/09/22')[1].date}</span><span> : ${sleep.calculateWeeklySleep('2019/09/22')[1].hoursSlept} hrs</span> : <span>${((sleep.calculateWeeklySleep('2019/09/22')[1].sleepQuality / 5) * 100).toFixed(0)}%</span></p>
  <p><span>${sleep.calculateWeeklySleep('2019/09/22')[2].date}</span><span> : ${sleep.calculateWeeklySleep('2019/09/22')[2].hoursSlept} hrs</span> : <span>${((sleep.calculateWeeklySleep('2019/09/22')[2].sleepQuality / 5) * 100).toFixed(0)}%</span></p>
  <p><span>${sleep.calculateWeeklySleep('2019/09/22')[3].date}</span><span> : ${sleep.calculateWeeklySleep('2019/09/22')[3].hoursSlept} hrs</span> : <span>${((sleep.calculateWeeklySleep('2019/09/22')[3].sleepQuality / 5) * 100).toFixed(0)}%</span></p>
  <p><span>${sleep.calculateWeeklySleep('2019/09/22')[4].date}</span><span> : ${sleep.calculateWeeklySleep('2019/09/22')[4].hoursSlept} hrs</span> : <span>${((sleep.calculateWeeklySleep('2019/09/22')[4].sleepQuality / 5) * 100).toFixed(0)}%</span></p>
  <p><span>${sleep.calculateWeeklySleep('2019/09/22')[5].date}</span><span> : ${sleep.calculateWeeklySleep('2019/09/22')[5].hoursSlept} hrs</span> : <span>${((sleep.calculateWeeklySleep('2019/09/22')[5].sleepQuality / 5) * 100).toFixed(0)}%</span></p>
  <p><span>${sleep.calculateWeeklySleep('2019/09/22')[6].date}</span><span> : ${sleep.calculateWeeklySleep('2019/09/22')[6].hoursSlept} hrs</span> : <span>${((sleep.calculateWeeklySleep('2019/09/22')[6].sleepQuality / 5) * 100).toFixed(0)}%</span></p>
  `
}

function displayStepInfo() {
  userStrideLength.innerHTML = `${user.strideLength}`;
  userDailyStepGoal.innerHTML = `${user.dailyStepGoal}`;
  userFriends.innerHTML = `${user.friends}`;
  stepGoalComparison.innerHTML = `${userRepo.calculateAvgStepGoal()}`;
}

function displayWaterConsumtion() {
  waterConsumedByDay.innerHTML = `${hydration.calculateDailyOz("2019/06/20")}oz`;
  waterConsumedByWeek.innerHTML =
  `<p><span>${hydration.calculateWeeklyOz("2019/09/22")[0].date}</span><span> :${hydration.calculateWeeklyOz("2019/09/22")[0].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[1].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[1].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[2].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[2].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[3].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[3].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[4].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[4].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[5].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[5].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[6].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[6].numOunces} ozs</span></p>`
}
