// upon input (in console) playerSelection (not case sensitive)

//let playerSelection = playerinput.toLowerCase();

let playerSelection = "rock";

function computerPlay(array){
    let rand = Math.random()*array.length | 0;
    var computerSelection = array[rand];
    return computerSelection;
}
var computerChoices = ["rock", "paper", "scissors"];
var computerSelection = computerPlay(computerChoices);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        roundOutcome = rockTie;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        roundOutcome = rockLoss;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundOutcome = rockWin;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        roundOutcome = paperWin;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        roundOutcome = paperTie;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundOutcome = paperLoss;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundOutcome = scissorsLoss;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundOutcome = scissorsWin;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundOutcome = scissorsTie;
    }
    else {
        roundOutcome = "Please choose rock, paper, or scissors."
    }
    return roundOutcome;
}

let playerScore = 0;
let computerScore = 0;
function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        if (roundOutcome.playerScore = 1) {
            console.log("That's a point for you!")
        }
        else if (roundOutcome.computerScore = 1) {
            console.log("One point to the computer.")
        }
        playerScore += roundOutcome.playerScore;
        computerScore += roundOutcome.computerScore;
        console.log(roundOutcome.text);
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore > computerScore) {
        gameOutcome = "Game over. User wins."
        return gameOutcome;
    }
    else if (computerScore > playerScore) {
        gameOutcome = "Game over. Computer wins."
        return gameOutcome;
    }
    else {
        gameOutcome = "It appears to be a tie! Play again?"
        return gameOutcome;
    }
}

let rockWin = {
    playerScore: 1,
    computerScore: 0,
    text: "You win! Rock smashes scissors."
};

let paperWin = {
    playerScore: 1,
    computerScore: 0,
    text: "You win somehow! Paper covers rock."
};

let scissorsWin = {
    playerScore: 1,
    computerScore: 0,
    text: "You win! Scissors cut paper."
};

let rockTie = {
    playerScore: 0,
    computerScore: 0,
    text: "It's a tie! Did you think rock was weak to rock?"
};

let paperTie = {
    playerScore: 0,
    computerScore: 0,
    text: "It's a tie! The papers harmlessly lie on a desk."
};

let scissorsTie = {
    playerScore: 0,
    computerScore: 0,
    text: "It's a tie! These scissors are evenly matched in skill."
};

let rockLoss = {
    playerScore: 0,
    computerScore: 1,
    text: "You lose somehow! Paper covers rock."
};

let paperLoss = {
    playerScore: 0,
    computerScore: 1,
    text: "You lose! Scissors cut paper."
};

let scissorsLoss = {
    playerScore: 0,
    computerScore: 1,
    text: "You lose! Rock smashes scissors."
};