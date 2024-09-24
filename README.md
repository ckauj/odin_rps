# odin_rps
Rock, Paper, Scissors<br> 

3 Buttons - Rock, Paper, Scissors <br>
    - On click: SET humanChoice to button clicked <br>
    - RUN playRound <br>

playRound:<br>
&nbsp;SET computerChoice equal to getComputerChoice()<br>
&nbsp;IF player won<br>
&nbsp;&nbsp;INCREMENT playerScore<br>
&nbsp;&nbsp;SHOW player round win message<br>
&nbsp;ELSE<br>
&nbsp;&nbsp;INCREMENT computerScore<br>
&nbsp;&nbsp;SHOW computer round win message<br>
&nbsp;END IF<br>
&nbsp;RUN evaluateGameWinner() to see if game is over<br>
computerChoice:<br>
&nbsp;GET random number between 0 and 3<br>
&nbsp;IF number equals 0<br>
&nbsp;&nbsp;RETURN rock<br>
&nbsp;ELSE IF number equals 1 <br>
&nbsp;&nbsp;RETURN paper<br>
&nbsp;ELSE
&nbsp;&nbsp;RETURN scissors<br>
&nbsp;END IF<br>
evaluateGameWinner:<br>
&nbsp;IF playerScore is less than 5 AND computerScore is less than 5<br>
&nbsp;&nbsp;RETURN<br>
&nbsp;ELSE<br> 
&nbsp;&nbsp;SHOW results and win or loss message<br>
&nbsp;&nbsp;RUN endGame()<br>
&nbsp;END IF<br>
endGame:<br>
&nbsp;SET computerScore, playerScore to 0<br>


