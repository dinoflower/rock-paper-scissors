// upon input (in console) playerSelection (not case sensitive)

//let playerSelection = playerinput.toLowerCase();

const playerSelection = "rock";

let playerScore = 0;
let computerScore = 0;

var computerChoices = ["rock", "paper", "scissors"];

function computerPlay(array){
    let rand = Math.random()*array.length | 0;
    var comp = array[rand];
    return comp;
}
var computerSelection = computerPlay(computerChoices);

//original version of the function was var computerSelection = array[rand] and returned computerSelection - may need to roll back to that?

function playRound(playerSelection, computerSelection) {
//    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        if (playerSelection === "rock") {
            console.log(playerScore);
            return "It's a tie! Did you think rock was weak to rock?";
        }
        else if (playerSelection === "paper") {
            console.log(playerScore);
            return "It's a tie! The papers harmlessly lie on a desk.";
        }
        else if (playerSelection === "scissors") {
            console.log(playerScore);
            return "It's a tie! These scissors are evenly matched in skill.";
        }
        else {
            return "Is everything okay over there?"
        }
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        console.log(playerScore);
        return "You lose somehow! Paper covers rock.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        console.log(playerScore);
        return "You win! Rock smashes scissors. What a waste of office equipment!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        console.log(playerScore);
        return "You win somehow! Paper covers rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        console.log(playerScore);
        return "You lose! Scissors cut paper. What were you thinking?"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        console.log(playerScore);
        return "You lose! Rock smashes scissors. What a waste of office equipment!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        console.log(playerScore);
        return "You lose! Scissors cut paper. What was the computer thinking?";
    }
    else {
        return "Please choose rock, paper, or scissors.";
    }
}

let gameOutcome;

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore > computerScore) {
        gameOutcome = "Player score: " + playerScore + ". Computer score : " + computerScore + ". Game over. User wins."
        return gameOutcome;
    }
    else if (computerScore > playerScore) {
        gameOutcome = "Player score: " + playerScore + ". Computer score : " + computerScore + ". Game over. Computer wins."
        return gameOutcome;
    }
    else {
        gameOutcome = "Player score: " + playerScore + ". Computer score : " + computerScore + ". It appears to be a tie! Play again?"
        return gameOutcome;
    }
}

// playerSelection and computerSelection both currently undefined, resulting in tied games with no score