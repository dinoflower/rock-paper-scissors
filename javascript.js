// upon input (in console) playerSelection (not case sensitive)

const computerChoices = ["rock", "paper", "scissors"];

function computerPlay(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "rock") {
        roundOutcome = "It's a tie! Did you think rock was weak to rock?";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        roundOutcome = "You lose! Paper covers rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundOutcome = "You win! Rock smashes scissors.";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        roundOutcome = "You win! Paper covers rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        roundOutcome = "It's a tie! The papers harmlessly lie on a desk.";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundOutcome = "You lose! Scissors cut paper.";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundOutcome = "You lose! Rock smashes scissors.";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundOutcome = "You win! Scissors cut paper.";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundOutcome = "It's a tie! These scissors are evenly matched.";
    }
    else {
        roundOutcome = "Please choose rock, paper, or scissors."
    }
    return roundOutcome;
}

let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game (){
    for (let i = 0; i < 5; i++) {
        playRound();
        if (roundOutcome = "You win! Rock smashes scissors." || "You win! Paper covers rock." || "You win! Scissors cut paper.") {
            playerScore += 1;
        }
        else if (roundOutcome = "You lose! Paper covers rock." || "You lose! Scissors cut paper." || "You lose! Rock smashes scissors.") {
            computerScore += 1;
        }
    }
 }

// can test playRound by setting const playerSelection = "choice";
// and const computerSelection = computerPlay();
// and running console.log(playRound(playerSelection, computerSelection));