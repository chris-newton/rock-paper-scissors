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

// not used in UI since human choices are made by button clicks
function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    const gameState = document.querySelector(".game-state");
    const scoreBoard = document.querySelector(".scoreboard");
    const roundOutcome = document.querySelector(".round-outcome");
    
    function playRound(e) {
        humanChoice = e.target.id.toLowerCase();
        computerChoice = getComputerChoice();
    
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
                roundOutcome.textContent = "You win! Rock beats scissors.";
            } else if (computerChoice === "paper"){
                computerScore++;
                roundOutcome.textContent = "You lose! Paper beats rock.";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                roundOutcome.textContent = "You win! Paper beats rock.";
            } else if (computerChoice === "scissors"){
                computerScore++;
                roundOutcome.textContent = "You lose! Scissors beats paper.";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore++;
                roundOutcome.textContent = "You win! Scissors beats paper.";
            } else if (computerChoice === "rock"){
                computerScore++;
                roundOutcome.textContent = "You lose! Rock beats scissors.";
            }
        } 

        if (humanChoice === computerChoice) {
            roundOutcome.textContent = `${humanChoice} and ${computerChoice} tie.`; 
        }

        round++;
    }

    // Initialize Event Listeners
    const rockButton = document.querySelector("#rock")
    rockButton.addEventListener("click", function(e) {
        playRound(e);
    });

    const paperButton = document.querySelector("#paper")
    paperButton.addEventListener("click", function(e) {
        playRound(e);
    });

    const scissorsButton = document.querySelector("#scissors")
    scissorsButton.addEventListener("click", function(e) {
        playRound(e);
    });

/* 
    // play until a player gets to 5 wins
    while (humanScore < 5 && computerScore < 5) {
        // round
    }

    


    if (humanScore > computerScore) {
        console.log("You won!")
    } else if (humanScore < computerScore){
        console.log("You lost!")
    } else {
        console.log("Draw!")
    }

*/
    console.log(`Your score: ${humanScore} Computer score: ${computerScore}`)
}

playGame()