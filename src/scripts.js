let randomNumber = (Math.floor(Math.random() * 50));
const userRepo = new UserRepository(userData)
const user = new User(userData[`${randomNumber}`])

console.log(userRepo);
console.log(user);
