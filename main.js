let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let gameRunning = true;

const playerScoreDOM = document.getElementById("player-score");
const computerScoreDOM = document.getElementById("computer-score");
const gameMessageDOM = document.getElementById("game-message")
const restartButtonDOM = document.getElementById("restart-button")


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

function restartGame() {
    console.log("RESTART GAME");
    restartButtonDOM.style.display = "none";

    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    gameRunning = true;

    updateScoresDOM();

     gameMessageDOM.innerText = "";
}

function updateScoresDOM() {
    playerScoreDOM.innerHTML = `Your Score <br>${playerScore}`;
    computerScoreDOM.innerHTML = `Computer Score <br>${computerScore}`;
}

function playRound(humanChoice, computerChoice) {
    if (!gameRunning) {return}

    console.log(`Player picked ${humanChoice}, Computer picked ${computerChoice}.`)
    let winner;

    if (humanChoice != computerChoice) {
        roundNumber++; // We only increment round if its not a draw.
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
        gameMessageDOM.innerText = `Player picked ${humanChoice}, Computer picked ${computerChoice}. ${winner} gets 1 point!`;
    } else {
        gameMessageDOM.innerText = `Player picked ${humanChoice}, Computer picked ${computerChoice}. It's a draw!`;
    }

    if (roundNumber == 5) {
        gameRunning = false;
        let gameWinner = playerScore > computerScore && "You win!" || "Computer wins!";
        gameMessageDOM.innerText = `Game over! ${gameWinner}`
        restartButtonDOM.style.display = "block";
    }
}

document.querySelectorAll("button").forEach((button) => {
    if (button.id != "restart-button") {
        button.addEventListener("click", (event) => {
            let humanChoice = button.id;
            playRound(humanChoice, getComputerChoice());
        });
    } else {
        button.addEventListener("click", (event) => {
            restartGame();
        });
    }
});