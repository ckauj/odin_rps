let computerScore = 0;
let playerScore = 0;

function evaluateGameWinner() {
    const winnerMessage = document.createElement("p");

    if (playerScore === 5) {
        winnerMessage.textContent = `You win! Your score: ${playerScore}, Computer score: ${computerScore}`;
    } else if (computerScore === 5) {
        winnerMessage.textContent = `You lose! Your score: ${playerScore}, Computer score: ${computerScore}`;
    } else {
        return;
    }

    const gameDisplay = document.querySelector("#score-container");
    gameDisplay.appendChild(winnerMessage);
    
    endGame();
}

function getComputerChoice() {
    let computerChoice = "";
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        computerChoice = "rock";
    } else if (randomNumber == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound (playerChoice) {

    playerChoice = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice();
    const gameDisplay = document.querySelector("#score-container");
    const computerScoreDisplay = document.querySelector("#computer-score");
    const playerScoreDisplay = document.querySelector("#player-score");
    const roundDisplay = document.createElement("p");

    if (playerChoice == "rock" & computerChoice == "scissors"
        | playerChoice == "paper" & computerChoice == "rock"
        | playerChoice == "scissors" & computerChoice == "paper") {
            playerScoreDisplay.textContent = ++playerScore;
            roundDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        } else if (playerChoice == "rock" & computerChoice == "paper"
        | playerChoice == "paper" & computerChoice == "scissors"
        | playerChoice == "scissors" & computerChoice == "rock") {
            computerScoreDisplay.textContent = ++computerScore;
            roundDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        } else {
            roundDisplay.textContent = `You tied!`;
        }

        gameDisplay.appendChild(roundDisplay);

    evaluateGameWinner();
}

function endGame() {
    playerScore = 0;
    computerScore = 0;

    const optionButtons = document.querySelectorAll("#option-container > button");
    for (option of optionButtons) {
        option.disabled = true;
    }
    const gameDisplay = document.querySelector("#score-container");
    const resetGameButton = document.createElement("button");
    const computerScoreDisplay = document.querySelector("#computer-score");
    const playerScoreDisplay = document.querySelector("#player-score");

    resetGameButton.textContent = "Reset";
    gameDisplay.appendChild(resetGameButton);
    resetGameButton.addEventListener("click", function() {
        gameDisplay.textContent = '';
        computerScoreDisplay.textContent = 0;
        playerScoreDisplay.textContent = 0;

        for (option of optionButtons) {
            option.disabled = false;
        }
    });
}