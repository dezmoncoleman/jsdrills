const questions = [
  {
    question:
      "What is the keyword to declare a permanent variable?",
    answers: [
      { text: "var", correct: false},
      { text: "let", correct: false },
      { text: "int", correct: false },
      { text: "const", correct: true },
    ]
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Output Mode", correct: false },
      { text: "Digital Ordinance Method", correct: false },
      { text: "Display Object Mapping", correct: false }
    ]
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/*", correct: false },
      { text: "<!--", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which method is used to output data to the console?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "echo()", correct: false },
      { text: "write()", correct: false }
    ]
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    answers: [
      { text: "string", correct: false },
      { text: "number", correct: false },
      { text: "boolean", correct: false },
      { text: "character", correct: true }
    ]
  },
  {
    question: "How do you declare a function in JavaScript?",
    answers: [
      { text: "function myFunc() {}", correct: true },
      { text: "def myFunc() {}", correct: false },
      { text: "func myFunc() {}", correct: false },
      { text: "function:myFunc() {}", correct: false }
    ]
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    answers: [
      { text: "'22'", correct: true },
      { text: "4", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false }
    ]
  },
  {
    question: "Which operator is used to compare both value and type?",
    answers: [
      { text: "===", correct: true },
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "!=", correct: false }
    ]
  },
  {
    question: "How do you write an array in JavaScript?",
    answers: [
      { text: "let arr = [1, 2, 3];", correct: true },
      { text: "let arr = (1, 2, 3);", correct: false },
      { text: "let arr = {1, 2, 3};", correct: false },
      { text: "let arr = <1, 2, 3>;", correct: false }
    ]
  },
  {
    question: "Which method adds an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "What will 'typeof null' return?",
    answers: [
      { text: "'object'", correct: true },
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'number'", correct: false }
    ]
  },
  {
    question: "Which keyword is used to skip the rest of a loop iteration?",
    answers: [
      { text: "continue", correct: true },
      { text: "break", correct: false },
      { text: "skip", correct: false },
      { text: "pass", correct: false }
    ]
  },
  {
    question: "How do you write a strict equality comparison?",
    answers: [
      { text: "a === b", correct: true },
      { text: "a == b", correct: false },
      { text: "a = b", correct: false },
      { text: "a !== b", correct: false }
    ]
  },
  {
    question: "Which of these is a falsy value?",
    answers: [
      { text: "0", correct: true },
      { text: "'0'", correct: false },
      { text: "[]", correct: false },
      { text: "{}", correct: false }
    ]
  },
  {
    question: "How do you access the first element of an array named 'arr'?",
    answers: [
      { text: "arr[0]", correct: true },
      { text: "arr(0)", correct: false },
      { text: "arr{0}", correct: false },
      { text: "arr.0", correct: false }
    ]
  },
  {
    question: "What does NaN stand for?",
    answers: [
      { text: "Not a Number", correct: true },
      { text: "No assigned Number", correct: false },
      { text: "Negative and Null", correct: false },
      { text: "Number and Null", correct: false }
    ]
  },
  {
    question: "Which method removes the last element from an array?",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "How do you write a single-line comment?",
    answers: [
      { text: "// comment", correct: true },
      { text: "<!-- comment -->", correct: false },
      { text: "# comment", correct: false },
      { text: "' comment", correct: false }
    ]
  },
  {
    question: "Which function parses a string to an integer?",
    answers: [
      { text: "parseInt()", correct: true },
      { text: "parseFloat()", correct: false },
      { text: "Number()", correct: false },
      { text: "int()", correct: false }
    ]
  },
  {
    question: "What is the default value of an uninitialized variable?",
    answers: [
      { text: "undefined", correct: true },
      { text: "null", correct: false },
      { text: "0", correct: false },
      { text: "false", correct: false }
    ]
  },
  {
    question: "Which of these is a correct way to declare a variable?",
    answers: [
      { text: "let x = 5;", correct: true },
      { text: "var: x = 5;", correct: false },
      { text: "x := 5;", correct: false },
      { text: "int x = 5;", correct: false }
    ]
  },
  {
    question: "How do you call a function named 'myFunc'?",
    answers: [
      { text: "myFunc();", correct: true },
      { text: "call myFunc();", correct: false },
      { text: "myFunc[];", correct: false },
      { text: "myFunc;", correct: false }
    ]
  },
  {
    question: "Which event occurs when a user clicks an HTML element?",
    answers: [
      { text: "onclick", correct: true },
      { text: "onchange", correct: false },
      { text: "onmouseover", correct: false },
      { text: "onmouseclick", correct: false }
    ]
  },
  {
    question: "How do you round the number 7.25 to the nearest integer?",
    answers: [
      { text: "Math.round(7.25)", correct: true },
      { text: "round(7.25)", correct: false },
      { text: "Math.rnd(7.25)", correct: false },
      { text: "Math.integer(7.25)", correct: false }
    ]
  },
  {
    question: "Which method joins array elements into a string?",
    answers: [
      { text: "join()", correct: true },
      { text: "concat()", correct: false },
      { text: "combine()", correct: false },
      { text: "attach()", correct: false }
    ]
  },
  {
    question: "What is the correct way to write a for loop?",
    answers: [
      { text: "for(let i = 0; i < 5; i++) {}", correct: true },
      { text: "for i = 1 to 5 {}", correct: false },
      { text: "for(i <= 5; i++) {}", correct: false },
      { text: "for(i = 0; i < 5)", correct: false }
    ]
  }
];

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
  questionContainer.innerHTML = question.question;
  answerButtons.innerHTML = "";
  question.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("btn");
    if (answer.correct) {
      btn.dataset.correct = answer.correct;
    }
    btn.addEventListener("click", selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";
  setStatusClass(selectedBtn, correct);

  // Disable all buttons and show next
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    setStatusClass(button, button.dataset.correct === "true");
  });
  window.nextButton.style.display = "block";

  // Only increment score the first time an answer is selected for this question
  if (correct && !selectedBtn.dataset.answered) {
    score++;
  }
  // Mark this question as answered to prevent double scoring
  Array.from(answerButtons.children).forEach(button => {
    button.dataset.answered = "true";
  });
}

function setStatusClass(element, correct) {
  element.classList.add(correct ? "correct" : "wrong");
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    window.nextButton.style.display = "none";
  } else {
    showScore();
  }
}

function showScore() {
  const percent = Math.round((score / questions.length) * 100);
  const passed = percent >= 70;
  questionContainer.innerText = `Quiz Completed!\nYour Score: ${percent}%\nYou ${passed ? "Pass" : "should try again"}!`;
  answerButtons.innerHTML = "";
  window.nextButton.innerText = "Restart";
  window.nextButton.style.display = "block";

  // Set up restart logic
  window.nextButton.onclick = function () {
    currentQuestionIndex = 0;
    score = 0;
    window.nextButton.innerText = "Next";
    window.nextButton.style.display = "none";
    showQuestion(questions[currentQuestionIndex]);
    // Restore normal next handler
    window.nextButton.onclick = handleNextButton;
  };
}

// Initial setup
window.nextButton = nextButton;
window.nextButton.onclick = handleNextButton;

showQuestion(questions[currentQuestionIndex]);
window.nextButton.style.display = "none";
