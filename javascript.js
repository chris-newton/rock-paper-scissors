function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    let choice;

    if (x === 0) {
        choice = "rock";
    } else if (x === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");

    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors.")
        } else if (computerChoice === "paper"){
            computerScore++;
            console.log("You lose! Paper beats rock.")
        }

    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats rock.")
        } else if (computerChoice === "scissors"){
            computerScore++;
            console.log("You lose! Scissors beats paper.")
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper.")
        } else if (computerChoice === "rock"){
            computerScore++;
            console.log("You lose! Rock beats scissors.")
        }
    }
}

let humanScore = 0;
let computerScore = 0;