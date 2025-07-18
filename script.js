const questions = [
  {
    text: "Quel est la déese grecque de la nuit et du chaos ?",
    answers: ["Nyx", "Athena", "Gaia"],
    correctIndex: 0
  },
  {
    text: "Qui est le dieu egyptien de la puissance universelle ?",
    answers: ["Osiris", "Seth", "Isis"],
    correctIndex: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const buttons = document.querySelectorAll(".answer-button");
const feedbackText = document.getElementById("feedback-text");
const nextButton = document.getElementById("next-button");
const reset = document.getElementById('full-Reset');

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionText.textContent = current.text;
  buttons.forEach((button, index) => {
    button.textContent = current.answers[index];
    button.disabled = false;
    button.className = "answer-button"; // reset class
  });
  feedbackText.textContent = "";
  nextButton.style.display = "none";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedIndex = parseInt(button.dataset.index);
    const correctIndex = questions[currentQuestionIndex].correctIndex;
    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
      feedbackText.textContent = "Bonne réponse !";
      feedbackText.className = "correct";
      score++;
    } else {
      feedbackText.textContent = "Mauvaise réponse…";
      feedbackText.className = "incorrect";
    }

    buttons.forEach(btn => btn.disabled = true);
    nextButton.style.display = "inline-block";
  });
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionText.textContent = `Quiz terminé ! Score : ${score}/${questions.length}`;
    document.querySelector(".answers").style.display = "none";
    nextButton.style.display = "none";
    fullReset.style.display =""
    fullReset.addEventListener('click', function(e) {
      location.reload();
    }, false);
  }
});
showQuestion();
