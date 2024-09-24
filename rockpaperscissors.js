let computerScore = 0;
let playerScore = 0;

function evaluateGameWinner() {
    if (playerScore === 5) {
        console.log(`You win! Your score: ${playerScore}, Computer score: ${computerScore}`)
    } else if (computerScore === 5) {
        console.log(`You lose! Your score: ${playerScore}, Computer score: ${computerScore}`)
    } else {
        return;
    }

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

    if (playerChoice == "rock" & computerChoice == "scissors"
        | playerChoice == "paper" & computerChoice == "rock"
        | playerChoice == "scissors" & computerChoice == "paper") {
            playerScore++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        } else if (playerChoice == "rock" & computerChoice == "paper"
        | playerChoice == "paper" & computerChoice == "scissors"
        | playerChoice == "scissors" & computerChoice == "rock") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        } else {
            console.log(`You tied!`);
        }

    evaluateGameWinner();
}

function endGame() {
    playerScore = 0;
    computerScore = 0;
}