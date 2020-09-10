// DOM VARIABLES
var startBtn = document.getElementById("startQuiz");
var questionEl = document.getElementById("question");
var answerBtnOne = document.getElementById("answer-1");
var answerBtnTwo = document.getElementById("answer-2");
var answerBtnThree = document.getElementById("answer-3");
var answerBtnFour = document.getElementById("answer-4");
var timeLeft = 60;
var score = 0;

//Question Object containing all 5 questions with a correct answer and 4 possible options each
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

//Event listener for starting the quiz, calling the startTimer function
startBtn.addEventListener("click", startTimer);

//Start timer function that simultaneously starts the timer, calls the first question function and also calls the end of quiz if time runs out
function startTimer() {
  questionFunction();
  timerInterval = setInterval(function () {
    timeLeft--;
    countdownTimer.textContent =
      timeLeft + " secs remaining!!! Your score is " + score;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// End quiz function lets you know that you're out of time, gives you your score, clears the timer interval and reloads the window to start the quiz over
function endQuiz() {
  alert("You're out of time!! Score: " + score);
  clearInterval(timerInterval);
  window.location.reload(false);
}

// Next 5 questionFunctions (lines 77-221) are for each of the 5 questions - I couldn't figure out how to refactor this into something more consolidated but it works!!
// Each one calls on the next questionFunction with a click on any of the answers
function questionFunction() {
  questionEl.textContent = questionList[0].question;
  answerBtnOne.textContent = questionList[0].options[0];
  answerBtnTwo.textContent = questionList[0].options[1];
  answerBtnThree.textContent = questionList[0].options[2];
  answerBtnFour.textContent = questionList[0].options[3];

  answerBtnOne.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    questionFunction2();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    questionFunction2();
  };
  answerBtnThree.onclick = function () {
    alert("Correct!");
    score++;
    questionFunction2();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
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
    score++;
    questionFunction3();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    questionFunction3();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    questionFunction3();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
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
    timeLeft -= 5;
    questionFunction4();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    questionFunction4();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    questionFunction4();
  };
  answerBtnFour.onclick = function () {
    alert("Correct!");
    score++;
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
    timeLeft -= 5;
    questionFunction5();
  };
  answerBtnTwo.onclick = function () {
    alert("Correct!");
    score++;
    questionFunction5();
  };
  answerBtnThree.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    questionFunction5();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
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
    timeLeft -= 5;
    showScore();
  };
  answerBtnTwo.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    showScore();
  };
  answerBtnThree.onclick = function () {
    alert("Correct!");
    score++;
    timeLeft -= 5;
    showScore();
  };
  answerBtnFour.onclick = function () {
    alert("Incorrect :(");
    timeLeft -= 5;
    showScore();
  };
}

//Last but not least the show score function - which is only called after the final question as been answered. This also reloads the window after showing your score.
function showScore() {
  alert("You're all done!! Score: " + score);
  window.location.reload(false);
}
