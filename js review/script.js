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
