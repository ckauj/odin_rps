function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let gameCounter = 0;

    while (gameCounter < 5) {
        const roundResult = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult == "win") {
            humanScore++;
        } else if (roundResult == "lose") {
            computerScore++;
        } else if(roundResult != "tie") {
            console.log(`Invalid round. Choose carefully next time. ${5 - gameCounter} round remain.`)
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

    function getHumanChoice() {
        let flag = false;
        let humanChoice;

        while (!flag) {
            humanChoice = prompt("Choose Paper, Scissors, or Rock!");
            humanChoice = humanChoice.toLowerCase();

            if (humanChoice == "rock" | humanChoice == "paper" | humanChoice == "scissors") {
                flag = true;
            }
        }
        return humanChoice;
    }

    function playRound (humanChoice, computerChoice) {
        let roundValue = "";

        if (humanChoice == "rock" & computerChoice == "scissors"
            | humanChoice == "paper" & computerChoice == "rock"
            | humanChoice == "scissors" & computerChoice == "paper") {
                roundValue = "win";
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            } else if (humanChoice == "rock" & computerChoice == "paper"
            | humanChoice == "paper" & computerChoice == "scissors"
            | humanChoice == "scissors" & computerChoice == "rock") {
                roundValue = "lose";
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            } else {
                roundValue = "tie";
                console.log(`You tied!`);
            }

        return roundValue;
    }
}

