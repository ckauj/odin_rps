# odin_rps
Rock, Paper, Scissors 

3 Buttons - Rock, Paper, Scissors
    - On click: SET humanChoice to button clicked
    - RUN playRound

playRound:
    SET computerChoice equal to getComputerChoice()
    IF player won
        INCREMENT playerScore
        SHOW player round win message
    ELSE
        INCREMENT computerScore
        SHOW computer round win message
    END IF
    RUN evaluateGameWinner() to see if game is over
computerChoice:
    GET random number between 0 and 3
    IF number equals 0
        RETURN rock
    ELSE IF number equals 1 
        RETURN paper
    ELSE
        RETURN scissors
    END IF
evaluateGameWinner:
    IF playerScore is less than 5 AND computerScore is less than 5
        BREAK
    ELSE 
        SHOW results and win or loss message
        RUN endGame()
    END IF
endGame:
    SET computerScore, playerScore to 0


