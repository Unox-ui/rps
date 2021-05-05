
let computerScore = 0;
let playerScore = 0;
let roundNb = 1;
const maxPoints = 5;

//player Button declaration
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

//Computer Button declaration (for animation)
const computerRockBtn = document.querySelector('#rockComputer');
const computerPaperBtn = document.querySelector('#paperComputer');
const computerScissorsBtn = document.querySelector('#scissorsComputer');

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
    removeAnyAnimation()
    var computerPick = computerPlay();
    roundPlay(this.id, computerPick);
    onclick(this.id);

    if (computerPick === 'rock'){
        computerRockBtn.classList.add('computerPick');
    }
    else if (computerPick === 'paper'){
        computerPaperBtn.classList.add('computerPick');
    }
    else computerScissorsBtn.classList.add('computerPick');
    

    if ((computerScore >= maxPoints) || (playerScore >= maxPoints)) {
        rockBtn.removeEventListener('click', playGame);
        paperBtn.removeEventListener('click', playGame);
        scissorsBtn.removeEventListener('click', playGame);
        
        if (playerScore > computerScore){
            finalLog('You Win !!');
        }
        else finalLog('You Lose !!');

        addPlayAgainButton();
        removeHover();
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

// play player's animation
function onclick(id){
    var item = document.getElementById(id);
    item.classList.add('playerPick');
    item.classList.remove('player-item');
}

// remove player's animation
function removeclick(){
    this.classList.remove('playerPick');
    // replace the hover css pour player button except
    // for the last round 
    if ((computerScore < 5) && (playerScore < 5)) this.classList.add('player-item');
}

// remove computer's animation
function removeComputerClick(){
    this.classList.remove('computerPick');
}

function removeAnyAnimation() {
    rockBtn.classList.remove('playerPick');
    paperBtn.classList.remove('playerPick');
    scissorsBtn.classList.remove('playerPick');
    computerRockBtn.classList.remove('computerPick');
    computerPaperBtn.classList.remove('computerPick');
    computerScissorsBtn.classList.remove('computerPick');
}

function removeHover(){
    var items = document.getElementsByClassName('icone');
    for (let item of items){
        item.classList.add('computer-item');
        item.classList.remove('player-item');
    }
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

// check if animation is ended so we can restaure state
rockBtn.addEventListener('transitionend', removeclick);
paperBtn.addEventListener('transitionend', removeclick);
scissorsBtn.addEventListener('transitionend', removeclick);

computerRockBtn.addEventListener('transitionend', removeComputerClick);
computerPaperBtn.addEventListener('transitionend', removeComputerClick);
computerScissorsBtn.addEventListener('transitionend', removeComputerClick);