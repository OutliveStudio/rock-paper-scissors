let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

const playerScoreDOM = document.getElementById("player-score");
const computerScoreDOM = document.getElementById("computer-score");


function getComputerChoice() {
    let numberChosen = Math.floor(Math.random() * 3);
    let choice;

    switch (numberChosen) {
        case 0:
            choice = "rock";
            break;

        case 1:
            choice = "paper";
            break

        case 2:
            choice = "scissors";
            break
    }

    return choice;
}

function updateScoresDOM() {
    playerScoreDOM.innerHTML = `Your Score <br>${playerScore}`;
    computerScoreDOM.innerHTML = `Your Score <br>${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    roundNumber++;

    console.log(`Player picked ${humanChoice}, Computer picked ${computerChoice}.`)
    let winner;

    if (humanChoice != computerChoice) {
        if ( (humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper") ) {
            winner = "Human";
            playerScore++;
        }   else {
            winner = "Computer";
            computerScore++;
        }
    } else {
        winner = "draw";
    }

    updateScoresDOM();

    if (winner != "draw"){
        let winnerMessage = `Player picked ${humanChoice}, Computer picked ${computerChoice}. ${winner} gets 1 point!`;
        console.log(winnerMessage);
    } else {
        let winnerMessage = `Player picked ${humanChoice}, Computer picked ${computerChoice}. It's a draw!`;
        console.log(winnerMessage);
    }
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
    });
});