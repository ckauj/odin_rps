function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let gameCounter = 0;

    while (gameCounter < 5) {
        let roundResult = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult == 1) {
            humanScore++;
        } else if (roundResult == -1) {
            computerScore++;
        }
        gameCounter++;
    }

    if (humanScore > computerScore) {
        console.log(`You win! Your score: ${humanScore}, Computer score: ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lose! Your score: ${humanScore}, Computer score: ${computerScore}`)
    } else {
        console.log(`You tied! Your score: ${humanScore}, Computer score: ${computerScore}`)
    }

    function getComputerChoice() {
        let computerChoice = "";
        let randomNumber = Math.random() * 100;

        if (randomNumber >= 0 & randomNumber < 33) {
            computerChoice = "ROCK";
        } else if (randomNumber >= 33 & randomNumber <= 66) {
            computerChoice = "PAPER";
        } else {
            computerChoice = "SCISSORS";
        }

        computerChoice = computerChoice.toLowerCase();
        return computerChoice;
    }

    function getHumanChoice() {
        let humanChoice = prompt("Choose Paper, Scissors, or Rock!");
        humanChoice = humanChoice.toLowerCase();
        return humanChoice;
    }

    function playRound (humanChoice, computerChoice) {
        let roundValue = 0;

        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("You tied!");
                roundValue = 0;
            } else if (computerChoice == "paper") {
                console.log("Paper beats rock! You lose!");
                roundValue = -1;
            } else if (computerChoice == "scissors") {
                console.log("Rock beats scissors! You win!");
                roundValue = 1;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                console.log("You tied!");
                roundValue = 0;
            } else if (computerChoice == "scissors") {
                console.log("Scissors beats paper! You lose!");
                roundValue = -1;
            } else if (computerChoice == "rock") {
                console.log("Paper beats rock! You win!");
                roundValue = 1;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "scissors") {
                console.log("You tied!");
                roundValue = 0;
            } else if (computerChoice == "rock") {
                console.log("Rock beats scissors! You lose!");
                roundValue = -1;
            } else if (computerChoice == "paper") {
                console.log("Scissors beats paper! You win!");
                roundValue = 1;
            }
        }

        return roundValue;
    }
}

