// let user input between rock, paper, scissors
// let computer decide between rock, paper, scissors
// compare two choices to know who wins and who loses
// keep track of scores

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:");
  if (humanChoice.toLowerCase() === "rock") {
    return "rock";
  } else if (humanChoice.toLowerCase() === "paper") {
    return "paper";
  } else if (humanChoice.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    alert("invalid choice bruh");
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("it's a draw");
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! paper beats rock!");
        computerScore++;
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock");
        playerScore++;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! rock beats scissors");
        computerScore++;
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! rock beats scissors");
        playerScore++;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! scissors beats paper");
        computerScore++;
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beats papers");
        playerScore++;
      }
    }

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  }
  console.log(`Human: ${playerScore} Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("Human wins!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("it's a draw");
  }
}

playGame();
