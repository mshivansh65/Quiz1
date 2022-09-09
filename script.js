var readlineSync = require("readline-sync");
let score = 0;
const conductQuiz = function (qus, ans = "yes", comment = "") {
  console.log("");
  const userAns = readlineSync.question(qus + " : ");
  if (userAns === ans) {
    score++;
    console.log("Right ans");
  } else {
    score--;
    console.log("No right ans is ");
    console.log(comment);
  }
  console.log(``);
};
var userName = readlineSync.question("May I have your name? ");
// let welcomeMessage = 'Welcome ' + userName;
console.log(" ");
console.log(
  `Hi ${userName} Let's play some game plese enter your ans in yes or no`
);
console.log(" ");

// *************************************************
// For Mark one
// *************************************************

const questions1 = [
  "Am I older than 21 years",
  "Is your hometown salempur",
  "Do you like music?",
  "Do you like to Programming?",
  "Do you want to be web devloper?",
];
score = 0;
questions1.forEach((ques) => conductQuiz(ques));
console.log(`Your final score is ${score}`);
