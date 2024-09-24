# odin_rps
Rock, Paper, Scissors<br> 

3 Buttons - Rock, Paper, Scissors <br>
    - On click: SET humanChoice to button clicked <br>
    - RUN playRound <br>

playRound:<br>
    SET computerChoice equal to getComputerChoice()<br>
    IF player won<br>
        INCREMENT playerScore<br>
        SHOW player round win message<br>
    ELSE<br>
        INCREMENT computerScore<br>
        SHOW computer round win message<br>
    END IF<br>
    RUN evaluateGameWinner() to see if game is over<br>
computerChoice:<br>
    GET random number between 0 and 3<br>
    IF number equals 0<br>
        RETURN rock<br>
    ELSE IF number equals 1 <br>
        RETURN paper<br>
    ELSE
        RETURN scissors<br>
    END IF<br>
evaluateGameWinner:<br>
    IF playerScore is less than 5 AND computerScore is less than 5<br>
        BREAK<br>
    ELSE<br> 
        SHOW results and win or loss message<br>
        RUN endGame()<br>
    END IF<br>
endGame:<br>
    SET computerScore, playerScore to 0<br>


