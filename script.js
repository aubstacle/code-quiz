var startBtn = document.getElementById("startQuiz");
var questionEl = document.getElementById("question");
var answerBtnOne = document.getElementById("answer-1");
var answerBtnTwo = document.getElementById("answer-2");
var answerBtnThree = document.getElementById("answer-3");
var answerBtnFour = document.getElementById("answer-4");
var timeLeft = 60;
var score = 0;

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

startBtn.addEventListener("click", startTimer);

function startTimer() {
    questionFunction();
  timerInterval = setInterval(function () {
    timeLeft--;
    countdownTimer.textContent = timeLeft + " secs remaining!!!";
    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
    alert("You're out of time!!");
    clearInterval(timerInterval);
    timeLeft = 60;
}

function questionFunction() {
  questionEl.textContent = questionList[0].question;
  answerBtnOne.textContent = questionList[0].options[0];
  answerBtnTwo.textContent = questionList[0].options[1];
  answerBtnThree.textContent = questionList[0].options[2];
  answerBtnFour.textContent = questionList[0].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction2();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction2();
  };
  answerBtnThree.onclick = function () {
    alert("Correct!");
    score++;
    questionFunction2();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction2();
  };
}

function questionFunction2() {
  questionEl.textContent = questionList[1].question;
  answerBtnOne.textContent = questionList[1].options[0];
  answerBtnTwo.textContent = questionList[1].options[1];
  answerBtnThree.textContent = questionList[1].options[2];
  answerBtnFour.textContent = questionList[1].options[3];

  answerBtnOne.onclick = function () {
    alert("Correct!");
    questionFunction3();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction3();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction3();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction3();
  };
}

function questionFunction3() {
  questionEl.textContent = questionList[2].question;
  answerBtnOne.textContent = questionList[2].options[0];
  answerBtnTwo.textContent = questionList[2].options[1];
  answerBtnThree.textContent = questionList[2].options[2];
  answerBtnFour.textContent = questionList[2].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction4();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction4();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction4();
  };
  answerBtnFour.onclick = function () {
    alert("Correct!");
    questionFunction4();
  };
}

function questionFunction4() {
  questionEl.textContent = questionList[3].question;
  answerBtnOne.textContent = questionList[3].options[0];
  answerBtnTwo.textContent = questionList[3].options[1];
  answerBtnThree.textContent = questionList[3].options[2];
  answerBtnFour.textContent = questionList[3].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction5();
  };
  answerBtnTwo.onclick = function () {
    alert("Correct!");
    questionFunction5();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction5();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    questionFunction5();
  };
}

function questionFunction5() {
  questionEl.textContent = questionList[4].question;
  answerBtnOne.textContent = questionList[4].options[0];
  answerBtnTwo.textContent = questionList[4].options[1];
  answerBtnThree.textContent = questionList[4].options[2];
  answerBtnFour.textContent = questionList[4].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    // call show score function
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    // call show score function
  };
  answerBtnThree.onclick = function () {
    alert("Correct!");
    timeLeft -= 15;
    // call show score function
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 15;
    // call show score function
  };
}
