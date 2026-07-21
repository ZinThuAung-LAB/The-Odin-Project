function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex < 1) {
    return "rock";
  } else if (randomIndex < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice").toLowerCase();
  return humanChoice;
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  function playRound(computerChoice, humanChoice) {
    if (
      humanChoice !== "rock" &&
      humanChoice !== "paper" &&
      humanChoice !== "scissors"
    )
      return "Please check the typo";
    if (
      (computerChoice == "rock" && humanChoice == "scissors") ||
      (computerChoice == "paper" && humanChoice == "rock") ||
      (computerChoice == "scissors" && humanChoice == "paper")
    ) {
      computerScore++;
      return `You Lose! ${computerChoice} beat  ${humanChoice}`;
    } else if (computerChoice === humanChoice) {
      return "Tie!";
    } else {
      humanScore++;
      return "You Wins!";
    }
  }

  while (computerScore < 5 && humanScore < 5) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(playRound(computerChoice, humanChoice));
    console.log(
      `Current score -> Player: ${humanScore} | Computer: ${computerScore}`,
    );
  }

  if (humanScore === 5) {
    console.log("PLayer is the Winner");
  } else if (computerScore === 5) {
    console.log("Computer is the winner");
  }
  console.log(
    `Current Score -> Player: ${humanScore} | Computer: ${computerScore}`,
  );
}

playGame();
