let randomNumber = (Math.ceil(Math.random() * 50));
const userRepo = new UserRepository(userData)
const user = new User(userData[`${randomNumber}`])

let welcomeName = document.querySelector('.user-first-name-js');
let userFullName = document.querySelector('.user-full-name-js');
let userId = document.querySelector('.user-id-js');
let userAddress = document.querySelector('.user-address-js');
let userEmail = document.querySelector('.user-email-js');
let userStrideLength = document.querySelector('.user-stride-length-js');
let userDailyStepGoal = document.querySelector('.user-daily-step-goal-js');
let userFriends = document.querySelector('.user-friends-js');
let stepGoalComparison = document.querySelector('.step-goal-comparison-js');

displayUserInfo(user);

function displayUserInfo(user) {
  welcomeName.innerHTML = `${user.getFirstName()}`
  userFullName.innerHTML = `${user.name}`
  userId.innerHTML = `${user.id}`
  userAddress.innerHTML = `${user.address}`
  userEmail.innerHTML = `${user.email}`
  userStrideLength.innerHTML = `${user.strideLength}`
  userDailyStepGoal.innerHTML = `${user.dailyStepGoal}`
  userFriends.innerHTML = `${user.friends}`
  stepGoalComparison.innerHTML = `${userRepo.calculateAvgStepGoal()}`
}
