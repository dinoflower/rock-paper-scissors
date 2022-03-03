// upon input (in console) playerSelection (not case sensitive)

// return "rock" for 1, "paper" for 2, "scissors" for 3

function computerPlay(){
    if (randomNumber() == 1) {
    computerSelection = "rock";
    } else if (randomNumber() == 2) {
    computerSelection = "paper";
    } else {
    computerSelection = "scissors";
    }
    return computerSelection;
}
function randomNumber(){
    return Math.floor(Math.random()*3) + 1;
}

// compare via playRound(playerSelection, computerSelection) return string announcing winner

// can test playRound by setting const playerSelection = "choice";
// and const computerSelection = computerPlay();
// and running console.log(playRound(playerSelection, computerSelection));