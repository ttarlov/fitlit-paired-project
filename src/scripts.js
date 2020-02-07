let randomNumber = ((Math.ceil(Math.random() * 50)));
const userRepo = new UserRepository(userData)
const user = new User(userData[`${randomNumber -1}`])
const hydration = new Hydration(hydrationData, randomNumber)
let welcomeName = document.querySelector('.user-first-name-js');
let userFullName = document.querySelector('.user-full-name-js');
let userAddress = document.querySelector('.user-address-js');
let userEmail = document.querySelector('.user-email-js');
let userStrideLength = document.querySelector('.user-stride-length-js');
let userDailyStepGoal = document.querySelector('.user-daily-step-goal-js');
let userFriends = document.querySelector('.user-friends-js');
let stepGoalComparison = document.querySelector('.step-goal-comparison-js');
let waterConsumedByDay = document.querySelector('.water-consumed-by-day-js');
let waterConsumedByWeek = document.querySelector('.water-consumed-by-week-js')

displayUserInfo(user);

function displayUserInfo(user) {
  welcomeName.innerHTML = `${user.getFirstName()}`;
  userFullName.innerHTML = `${user.name}`;
  userAddress.innerHTML = `${user.address}`;
  userEmail.innerHTML = `${user.email}`;
  userStrideLength.innerHTML = `${user.strideLength}`;
  userDailyStepGoal.innerHTML = `${user.dailyStepGoal}`;
  userFriends.innerHTML = `${user.friends}`;
  stepGoalComparison.innerHTML = `${userRepo.calculateAvgStepGoal()}`;
  waterConsumedByDay.innerHTML = `${hydration.calculateDailyOz("2019/06/20")}oz`;
  waterConsumedByWeek.innerHTML =
  `<p><span>${hydration.calculateWeeklyOz("2019/09/22")[0].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[0].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[1].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[1].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[2].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[2].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[3].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[3].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[4].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[4].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[5].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[5].numOunces} ozs</span></p>
  <p><span>${hydration.calculateWeeklyOz("2019/09/22")[6].date}</span><span> : ${hydration.calculateWeeklyOz("2019/09/22")[6].numOunces} ozs</span></p>`
}
