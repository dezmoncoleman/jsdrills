const questions = [
  {
    question:
      "What is the keyword to declare a variable. Choose all that apply.",
    answers: [
      { text: "var", correct: true },
      { text: "let", correct: true },
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
  // For now, just log which button was clicked
  console.log("Answer selected:", e.target.innerText);
}



// nextButton.addEventListener("click", handleNextButton);

showQuestion(questions[currentQuestionIndex]);
nextButton.style.display = "none";