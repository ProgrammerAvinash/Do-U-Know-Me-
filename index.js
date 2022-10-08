var readlineSync = require('readline-sync');




var score = 0;
let questions = [
  {
    question: "where do i live ? ",
    answer: "mumbai",
  },
  {
    question: "What is my age ? ",
    answer: "25",
  },
  {
    question: "my fav actor ? ",
    answer: "vijay",
  },
  {
    question: "where do i work ? ",
    answer: "home",
  }, {
    question: "what is my favourite fruit ? ",
    answer: "apple",
  }
]








function Welcome() {
  let name = readlineSync.question("what is your name ?")
  console.log(`welcome ! ${name} let's play Do you know avinash ?`);
}




function Quest(question, answer) {

  let ans = readlineSync.question(question);

  console.log(`you have Entered ${ans}`)
  if (ans == answer) {
    console.log("you are right");
    score++

  } else {
    console.log("you are wrong");
    if (score == 0) { "" } else { score-- }
  }
  console.log(`current score is ${score}`)
  console.log("___________________________________")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    Quest(currentQuestion.question, currentQuestion.answer);
  }
}

function showScore() {
  console.log(" YOU HAVE SCORED: ", score);


}

Welcome()
game()
showScore()