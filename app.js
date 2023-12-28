const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

const allChoices = document.querySelectorAll("button");
let userChoice, computerChoice;
allChoices.forEach((choice) =>
  choice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * allChoices.length);
  computerChoice = allChoices[randomNumber].id;
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result.innerHTML = "Draww!";
  } else if (
    (computerChoice === "Scissor" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Rock" && userChoice === "Scissor")
  ) {
    result.innerHTML = "Computer Wins!";
  } else if (
    (userChoice === "Scissor" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Rock" && computerChoice === "Scissor")
  ) {
    result.innerHTML = "User Wins!";
  }
}
