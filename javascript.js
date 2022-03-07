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



// compare via playRound(playerSelection, computerSelection) return string announcing winner

// can test playRound by setting const playerSelection = "choice";
// and const computerSelection = computerPlay();
// and running console.log(playRound(playerSelection, computerSelection));