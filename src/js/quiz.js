const questions = [
  {
    question: "First Question",
    answers: [
      { text: "Answer A", correct: false },
      { text: "Asnswer B", correct: true },
      { text: "Answer C", correct: false },
      { text: "Answer D", correct: false },
    ]
  },
  {
    question: "Second Question",
    answers: [
      { text: "Asnswer A", correct: true },
      { text: "Answer B", correct: false },
      { text: "Answer C", correct: false },
      { text: "Answer D", correct: false },
    ]
  },
  {
    question: "Third Question",
    answers: [
      { text: "Answer A", correct: false },
      { text: "Answer B", correct: false },
      { text: "Answer C", correct: false },
      { text: "Asnswer D", correct: true },
    ]
  },
  {
    question: "Fourth Question",
    answers: [
      { text: "Answer A", correct: false },
      { text: "Answer B", correct: false },
      { text: "Asnswer C", correct: true },
      { text: "Answer D", correct: false },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  // resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = documment.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    // if (answer.correct){
    //   button.dataset.correct = answer.correct;
    // }
    // button.addEventListener("click", selectAnswer);
  });
}

// function resetState(){
//   nextButton.style.display = "none";
//   while(answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function selectAnswer() {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach(button => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

// function showScore() {
//   resetState();
//   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//   nextButton.innerHTML = "Play Again";
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", ()=>{
//   if (currentQuestionIndex < questions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });

startQuiz();