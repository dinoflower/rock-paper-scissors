// upon input (in console) playerSelection (not case sensitive)

const computerChoices = ["rock", "paper", "scissors"];

function game(){
    for (let i = 0; i < 5; i++) {
        round = round += 1;
        playRound(playerSelection, computerSelection);
        console.log(roundOutcome);
        console.log(round);
    }
}

function computerPlay(){
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// arrgghhh computerPlay() isn't called in playRound() so it chooses once and is done

let playerScore = 0;
let computerScore = 0;

function playRound(){
    if (playerSelection == "rock" && computerSelection == "rock") {
        roundOutcome = "It's a tie! Did you think rock was weak to rock?";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        roundOutcome = "You lose! Paper covers rock.";
        computerScore += 1;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundOutcome = "You win! Rock smashes scissors.";
        playerScore += 1;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        roundOutcome = "You win! Paper covers rock.";
        playerScore += 1;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        roundOutcome = "It's a tie! The papers harmlessly lie on a desk.";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundOutcome = "You lose! Scissors cut paper.";
        computerScore += 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundOutcome = "You lose! Rock smashes scissors.";
        computerScore += 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundOutcome = "You win! Scissors cut paper.";
        playerScore += 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundOutcome = "It's a tie! These scissors are evenly matched.";
    }
    else {
        roundOutcome = "Please choose rock, paper, or scissors."
    }
    return roundOutcome;
}

// change these to just messages within function and create variables outside of function that keep track of points per round
// no it's fine - we're calling playRound() within game()
// what is playRound() supposed to do, anyway?

let playerSelection = "rock";
let computerSelection = computerPlay();
let round = 0;

// can test playRound by setting const playerSelection = "choice";
// and const computerSelection = computerPlay();
// and running console.log(playRound(playerSelection, computerSelection));