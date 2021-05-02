const nb_round = 5;

function computerPlay () {
    let array = ['rock', 'paper', 'scissors']
    return array[Math.floor(Math.random() * array.length)]
}
function playerPlay (){
    return prompt('Rock, Paper, Scissors?').toLowerCase()
}
function roundPlay(user, computer){
    console.log(`you played ${user}`)
    console.log(`computer played ${computer}`)
    if (user === computer) {
        console.log("Tie Game")
    }
    else if (
        (user === "rock" && computer === "scissor") ||
        (user === "scissor" && computer === "paper") ||
        (user === "paper" && computer === "rock")){
            console.log("You win this round.")
        }
    else{
        console.log(`Computer play ${computer}.`)
        console.log('You lose.')
    }
    }

function playGame(){
    for (i = 0; i < nb_round; i++){
        roundPlay(playerPlay(),computerPlay())
    }
}

playGame()