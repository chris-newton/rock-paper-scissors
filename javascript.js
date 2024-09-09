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
    let round = 1;

    const roundOutcome = document.querySelector(".round-outcome");
    const roundDiv = document.querySelector(".round");
    const humanScoreDiv = document.querySelector(".human-score");
    const computerScoreDiv = document.querySelector(".computer-score");
        
    function playRound(e) {
        humanChoice = e.target.id.toLowerCase();
        computerChoice = getComputerChoice();
        
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
                roundOutcome.textContent = "Round won. Rock beats scissors.";
            } else if (computerChoice === "paper"){
                computerScore++;
                roundOutcome.textContent = "Round lost. Paper beats rock.";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                roundOutcome.textContent = "Round won. Paper beats rock.";
            } else if (computerChoice === "scissors"){
                computerScore++;
                roundOutcome.textContent = "Round lost. Scissors beats paper.";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore++;
                roundOutcome.textContent = "Round won. Scissors beats paper.";
            } else if (computerChoice === "rock"){
                computerScore++;
                roundOutcome.textContent = "Round lost. Rock beats scissors.";
            }
        } 

        if (humanChoice === computerChoice) {
            roundOutcome.textContent = `${humanChoice} and ${computerChoice} tie.`; 
        }

        humanScoreDiv.textContent = "player: " + humanScore;
        computerScoreDiv.textContent = "computer: " + computerScore;
        roundDiv.textContent = "round: " + round;
        round++;

        // end conditions
        if (humanScore == 5) {
            const topPanel = document.querySelector(".top-panel");
            topPanel.remove();
            const bottomPanel = document.querySelector(".bottom-panel");
            bottomPanel.remove();

            const container = document.querySelector(".container");
            const endDiv = document.createElement("div");
            container.appendChild(endDiv);

            endDiv.classList.add("end-div")
            endDiv.textContent = "You won!";

        } else if (computerScore == 5) {
            const topPanel = document.querySelector(".top-panel");
            topPanel.remove();
            const bottomPanel = document.querySelector(".bottom-panel");
            bottomPanel.remove();
            
            const container = document.querySelector(".container");
            const endDiv = document.createElement("div");
            container.appendChild(endDiv);

            endDiv.classList.add("end-div");
            endDiv.textContent = "You lost!";
        }
    }

    // Initialize Event Listeners
    const rockButton = document.querySelector("#rock")
    rockButton.addEventListener("click", (e) =>
        playRound(e)
    );

    const paperButton = document.querySelector("#paper")
    paperButton.addEventListener("click", function(e) {
        playRound(e);
    });

    const scissorsButton = document.querySelector("#scissors")
    scissorsButton.addEventListener("click", function(e) {
        playRound(e);
    });

/*
    


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