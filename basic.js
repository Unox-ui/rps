
let computerScore = 0;
let playerScore = 0;
let roundNb = 1;
const maxPoints = 5;

//Button declaration
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

//Score declaration
const userScore = document.querySelector('#user-score')
const machineScore = document.querySelector('#computer-score')

function computerPlay () {
    let array = ['rock', 'paper', 'scissors']
    return array[Math.floor(Math.random() * array.length)]
}

function roundPlay(user, computer){
    if (user === computer) {
        addLog('tie', roundNb, user, computer)
    }
    else if (
        (user === "rock" && computer === "scissors") ||
        (user === "scissor" && computer === "paper") ||
        (user === "paper" && computer === "rock")){
            playerScore++;
            userScore.textContent = `${playerScore}`; // Updates Score
            addLog('Player', roundNb, user, computer)
        }
    else{
        computerScore++;
        machineScore.textContent = `${computerScore}`; // Updates Score
        addLog('Computer', roundNb, computer, user)
    }
    roundNb++;
    }

function playGame() {
    roundPlay(this.id, computerPlay())
    
    if ((computerScore >= maxPoints) || (playerScore >= maxPoints)) {
        rockBtn.removeEventListener('click', playGame);
        paperBtn.removeEventListener('click', playGame);
        scissorsBtn.removeEventListener('click', playGame);
        
        if (playerScore > computerScore){
            finalLog('You Win !!');
        }
        else finalLog('You Lose !!');

        addPlayAgainButton()

    }
}

// Add a button to play again
function addPlayAgainButton(){
    var firstLi = document.getElementById('user-score');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('Play Again'));
    li.setAttribute("class", "score reset");
    li.setAttribute('id', 'resetBtn');
    firstLi.after(li);

    var resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click', refreshPage);
}

function removeHover(){
    var items = document.getElementsByClassName('player-item');
}  

// log result 
function addLog(winner, round, winSelect, loseSelect){
    var ul = document.getElementById('logList');
    var log = document.createElement('li');
    if (winner === 'Player') id = 'playerLog' ;
    else if (winner === 'Computer') id = 'computerLog';
    else {id = 'tieLog';}
    if (id === "tieLog"){
        log.textContent = `Round ${round}:  Tie game. ${winSelect} vs ${loseSelect}.`;
    }
    else  log.textContent =`Round ${round}:  ${winner} won. ${winSelect} beats ${loseSelect}. Score: ${playerScore} - ${computerScore}`;
   
    log.setAttribute('class', `log ${winner}Log`);
    ul.insertBefore(log, ul.childNodes[0])  // Insert <li> before the first child of <ul> 
}

function finalLog(string){
    var finalLog = document.createElement('div');
    var resultDiv = document.getElementsByClassName('result')[0];
    finalLog.textContent = `${string}`
    finalLog.setAttribute('class', 'finalLog')
    resultDiv.insertAdjacentElement('beforebegin', finalLog)

}


// reload the page
function refreshPage() {
    location.reload();
}

rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorsBtn.addEventListener('click', playGame);