// user clicks a button to choose between rock paper and scissors
// computer randomly generates numbers that converts to rock paper scissors
// make a function that compares the two to see who wins and loses
// provide a score and keep going until 5 rounds

// get the buttons from the index.html
const btn1 = document.querySelector("#rock");
const btn2 = document.querySelector("#paper");
const btn3 = document.querySelector("#scissors");

// function to get the computer choice
let computerChoice = () => {
  let choice = Math.floor(Math.random() * 3 + 1);

  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else if (choice === 3) {
    return "scissors";
  }
};

btn1.addEventListener("click", () => {
  playRound("rock", computerChoice());
});

btn2.addEventListener("click", () => {
  playRound("paper", computerChoice());
});

btn3.addEventListener("click", () => {
  playRound("scissors", computerChoice());
});

let playerScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("results");
const p = document.createElement("p");
body.appendChild(div);
div.appendChild(p);
const scores = document.createElement("p");

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    p.textContent = `It's a draw!`;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    p.textContent = `You lose! paper beats rock!`;
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    p.textContent = `You win! paper beats rock!`;
    playerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    p.textContent = `You lose! rock beats scissors`;
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    p.textContent = `You win! rock beats scissors`;
    playerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    p.textContent = `You lose! scissors beats paper`;
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    p.textContent = `You win! scissors beats paper`;
    playerScore++;
  }
  scores.textContent = `player: ${playerScore}   computer: ${computerScore}`;
  div.appendChild(scores);

  if (playerScore === 5 || computerChoice === 5) {
    scores.textContent = `Game over!`;
  }
}
