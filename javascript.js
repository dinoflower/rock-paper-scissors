// upon input (in console) playerSelection (not case sensitive)

//let playerSelection = playerinput.toLowerCase();

let playerSelection = "rock";

let playerScore = 0;
let computerScore = 0;

function computerPlay(array){
    let rand = Math.random()*array.length | 0;
    var computerSelection = array[rand];
    return computerSelection;
}
var computerChoices = ["rock", "paper", "scissors"];
//var computerSelection = computerPlay(computerChoices);

function playRound(playerSelection, computerSelection) {
    let computerSelection = computerPlay(computerChoices);
    if (playerSelection == computerSelection) {
        if (playerSelection == "rock") {
            return "It's a tie! Did you think rock was weak to rock?";
        }
        else if (playerSelection == "paper") {
            return "It's a tie! The papers harmlessly lie on a desk.";
        }
        else {
            return "It's a tie! These scissors are evenly matched in skill.";
        }
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lose somehow! Paper covers rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win! Rock smashes scissors. What a waste of office equipment!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You win somehow! Paper covers rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lose! Scissors cut paper. What were you thinking?"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lose! Rock smashes scissors. What a waste of office equipment!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You lose! Scissors cut paper. What was the computer thinking?";
    }
    else {
        return "Please choose rock, paper, or scissors.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore > computerScore) {
        let gameOutcome = "Player score: " + playerScore + ". Computer score : " + computerScore + ". Game over. User wins."
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
