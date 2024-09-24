function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    let gameCounter = 0;

    const roundResult = playRound(getplayerChoice(), getComputerChoice());
    if (roundResult == "win") {
        playerScore++;
    } else if (roundResult == "lose") {
        computerScore++;
    }

    if (playerScore > computerScore) {
        console.log(`You win! Your score: ${playerScore}, Computer score: ${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`You lose! Your score: ${playerScore}, Computer score: ${computerScore}`)
    } else {
        console.log(`You tied! Your score: ${playerScore}, Computer score: ${computerScore}`)
    }
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

function playRound (playerChoice, computerChoice) {
    let roundValue = "";

    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == "rock" & computerChoice == "scissors"
        | playerChoice == "paper" & computerChoice == "rock"
        | playerChoice == "scissors" & computerChoice == "paper") {
            roundValue = "win";
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        } else if (playerChoice == "rock" & computerChoice == "paper"
        | playerChoice == "paper" & computerChoice == "scissors"
        | playerChoice == "scissors" & computerChoice == "rock") {
            roundValue = "lose";
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        } else {
            roundValue = "tie";
            console.log(`You tied!`);
        }

    return roundValue;
}