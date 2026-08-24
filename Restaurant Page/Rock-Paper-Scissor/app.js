const buttons = document.querySelectorAll("button");
const scoreDisplay = document.getElementById("score");
const result = document.getElementById("result");
const winner = document.getElementById("winner");

let computerScore = 0;
let humanScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    if (computerScore < 5 && humanScore < 5) {
      playGame(playerChoice);
    }
  });
});

function playGame(humanChoice) {
  let computerChoice = random();
  console.log(playRound(computerChoice, humanChoice));
  scoreDisplay.textContent = `Current score -> Player: ${humanScore} | Computer: ${computerScore}`;

  function random() {
    let randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex < 1) {
      return "rock";
    } else if (randomIndex < 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function playRound(computerChoice, humanChoice) {
    if (
      (computerChoice == "rock" && humanChoice == "scissors") ||
      (computerChoice == "paper" && humanChoice == "rock") ||
      (computerChoice == "scissors" && humanChoice == "paper")
    ) {
      computerScore++;
      result.textContent = `You Lose! ${computerChoice} beat  ${humanChoice}`;
    } else if (computerChoice === humanChoice) {
      result.textContent = "Tie!";
    } else {
      humanScore++;
      result.textContent = `You Win! ${humanChoice} beat  ${computerChoice}`;
    }
  }
  if (humanScore === 5) {
    winner.textContent = "Player is the Winner";
  } else if (computerScore === 5) {
    winner.textContent = "Computer is the Winner";
  }
}
