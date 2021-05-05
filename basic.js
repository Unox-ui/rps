
let computerScore = 0;
let playerScore = 0;
let roundNb = 1;
const maxPoints = 5;

//Creation of play again button 
const firstLi = document.getElementById('user-score');
const li = document.createElement('li');
li.appendChild(document.createTextNode('Play Again'));
li.setAttribute("class", "score reset");
li.setAttribute('id', 'resetBtn');

//Button declaration
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#resetBtn');

//Score declaration
const userScore = document.querySelector('#user-score')
const machineScore = document.querySelector('#computer-score')

function computerPlay () {
    let array = ['rock', 'paper', 'scissors']
    return array[Math.floor(Math.random() * array.length)]
}

function roundPlay(user, computer){
    console.log(`you played ${user}`)
    console.log(`computer played ${computer}`)
    if (user === computer) {
        console.log("Tie Game")
    }
    else if (
        (user === "rock" && computer === "scissors") ||
        (user === "scissor" && computer === "paper") ||
        (user === "paper" && computer === "rock")){
            playerScore++;
            console.log(`${playerScore}`)
            userScore.textContent = `${playerScore}`; // Updates Score
            console.log("You win this round.")
        }
    else{
        computerScore++;
        console.log(`${computerScore}`)
        machineScore.textContent = `${computerScore}`; // Updates Score
        console.log('You lose.')
    }
    roundNb++;
    console.log(`ComputerScore score is: ${computerScore}`)
    console.log(`Your score is: ${playerScore}`)
    }


function playGame() {
    roundPlay(this.id, computerPlay())
    
    if ((computerScore >= maxPoints) || (playerScore >= maxPoints)) {
        rockBtn.removeEventListener('click', playGame);
        paperBtn.removeEventListener('click', playGame);
        scissorsBtn.removeEventListener('click', playGame);
        addPlayAgainButton()
    }
}

// Add a button to play again
function addPlayAgainButton(){
    firstLi.after(li);
}

// reload the page
function refreshPage() {
    location.reload();
}


rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorsBtn.addEventListener('click', playGame);
resetBtn.addEventListener('click', refreshPage);