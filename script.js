// DOM elements
var startBtn = document.getElementById("startQuiz");
var questionEl = document.getElementById("question");
var answerBtnOne = document.getElementById("answer-1");
var answerBtnTwo = document.getElementById("answer-2");
var answerBtnThree = document.getElementById("answer-3");
var answerBtnFour = document.getElementById("answer-4");

// declared variables for start time of 60 sec and score of zero
var timeLeft = 60;
var score = 0;

// Question List object
// contains 5 questions from provided gif w/ possible & correct answers
var questionList = [
  {
    question: "Commonly used data types DO NOT include:",
    answer: "alerts",
    options: ["strings", "booleans", "alerts", "numbers"],
  },
  {
    question: "The condition in an if/else statement is enclosed within:",
    answer: "parentheses",
    options: [
      "parentheses",
      "quotation marks",
      "curly brackets",
      "square brackets",
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answer: "all of the above",
    options: [
      "booleans",
      "numbers & strings",
      "other arrays",
      "all of the above",
    ],
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    answer: "quotation marks",
    options: ["commas", "quotation marks", "curly brackets", "parentheses"],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: "console.log",
    options: ["terminal/bash", "for loops", "console.log", "JavaScript"],
  },
];

// startTimer function simultaneously starts timer, starts quiz via question1 function, also ends of quiz if time runs out
function startTimer() {
  question1();
  timerInterval = setInterval(function () {
    timeLeft--;
    countdownTimer.textContent =
      timeLeft + " seconds remaining! Score: " + score + " out of 5";
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
  // endQuiz alerts when time is up, presents score, clears timer interval, reloads window to start quiz
  function endQuiz() {
    alert("You're out of time! Score: " + score + " out of 5");
    clearInterval(timerInterval);
    window.location.reload(false);
  }
  // removes capability of clicking start button once quiz begins
  startBtn.removeEventListener("click", startTimer);
}

// Next 5 questionFunctions (lines 80-224) are for each of the 5 questions
// Couldn't figure out how to refactor this into something more consolidated
// Each button calls on the next question after .onlick after alerting correct or incorrect
// Correct answer adds to score variable while incorrect subtracts 5 sec from 60 sec timer
function question1() {
  questionEl.textContent = questionList[0].question;
  answerBtnOne.textContent = questionList[0].options[0];
  answerBtnTwo.textContent = questionList[0].options[1];
  answerBtnThree.textContent = questionList[0].options[2];
  answerBtnFour.textContent = questionList[0].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question2();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question2();
  };
  answerBtnThree.onclick = function () {
    alert("Correct!");
    score++;
    question2();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question2();
  };
}

function question2() {
  questionEl.textContent = questionList[1].question;
  answerBtnOne.textContent = questionList[1].options[0];
  answerBtnTwo.textContent = questionList[1].options[1];
  answerBtnThree.textContent = questionList[1].options[2];
  answerBtnFour.textContent = questionList[1].options[3];

  answerBtnOne.onclick = function () {
    alert("Correct!");
    score++;
    question3();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question3();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question3();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question3();
  };
}

function question3() {
  questionEl.textContent = questionList[2].question;
  answerBtnOne.textContent = questionList[2].options[0];
  answerBtnTwo.textContent = questionList[2].options[1];
  answerBtnThree.textContent = questionList[2].options[2];
  answerBtnFour.textContent = questionList[2].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question4();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question4();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question4();
  };
  answerBtnFour.onclick = function () {
    alert("Correct!");
    score++;
    question4();
  };
}

function question4() {
  questionEl.textContent = questionList[3].question;
  answerBtnOne.textContent = questionList[3].options[0];
  answerBtnTwo.textContent = questionList[3].options[1];
  answerBtnThree.textContent = questionList[3].options[2];
  answerBtnFour.textContent = questionList[3].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question5();
  };
  answerBtnTwo.onclick = function () {
    alert("Correct!");
    score++;
    question5();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question5();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    question5();
  };
}
function question5() {
  questionEl.textContent = questionList[4].question;
  answerBtnOne.textContent = questionList[4].options[0];
  answerBtnTwo.textContent = questionList[4].options[1];
  answerBtnThree.textContent = questionList[4].options[2];
  answerBtnFour.textContent = questionList[4].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    finalScore();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    finalScore();
  };
  answerBtnThree.onclick = function () {
    alert("Correct!");
    score++;
    timeLeft -= 10;
    finalScore();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 10;
    finalScore();
  };
}
//Shows final score via alert, only called after final question is answered.
//Reloads window after showing your score.
function finalScore() {
  alert("You're all done! Score: " + score + " out of 5");
  window.location.reload(false);
}
//Event listener that starts quiz by calling tartTimer
startBtn.addEventListener("click", startTimer);
