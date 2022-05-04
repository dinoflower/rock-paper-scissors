let playerSelection

let playerScore = 0;
let computerScore = 0;

var computerChoices = ["rock", "paper", "scissors"];

function computerPlay(array){
    let rand = Math.random()*array.length | 0;
    var comp = array[rand];
    return comp;
}
var computerSelection = computerPlay(computerChoices);

let rockButton = document.querySelector("#rock_Button");
let paperButton = document.querySelector("#paper_Button");
let scissorsButton = document.querySelector("#scissors_Button");

rockButton.addEventListener("click", () => { playRound("rock", computerSelection) });
paperButton.addEventListener("click", () => { playRound("paper", computerSelection) });
scissorsButton.addEventListener("click", () => { playRound("scissors", computerSelection) });

let results = document.querySelector("#results_container");
let text;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay(computerChoices);
    if (playerSelection === computerSelection) {
        if (playerSelection === "rock") {
            results.replaceChildren();
            text = document.createElement('p');
            text.textContent = "It's a tie! Did you think rock was weak to rock?";
            results.appendChild(text);
            console.log("It's a tie! Did you think rock was weak to rock?");
            return "It's a tie! Did you think rock was weak to rock?";
        }
        else if (playerSelection === "paper") {
            results.replaceChildren();
            text = document.createElement('p');
            text.textContent = "It's a tie! The papers harmlessly lie on a desk.";
            results.appendChild(text);
            console.log("It's a tie! The papers harmlessly lie on a desk.");
            return "It's a tie! The papers harmlessly lie on a desk.";
        }
        else if (playerSelection === "scissors") {
            results.replaceChildren();
            text = document.createElement('p');
            text.textContent = "It's a tie! These scissors are evenly matched in skill.";
            results.appendChild(text);
            console.log("It's a tie! These scissors are evenly matched in skill.");
            return "It's a tie! These scissors are evenly matched in skill.";
        }
        else {
            return "Is everything okay over there?"
        }
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        results.replaceChildren();
        text = document.createElement('p');
        text.textContent = "You lose somehow! Paper covers rock.";
        results.appendChild(text);
        console.log("You lose somehow! Paper covers rock.");
        return "You lose somehow! Paper covers rock.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        results.replaceChildren();
        text = document.createElement('p');
        text.textContent = "You win! Rock smashes scissors. What a waste of office equipment!";
        results.appendChild(text);
        console.log("You win! Rock smashes scissors. What a waste of office equipment!");
        return "You win! Rock smashes scissors. What a waste of office equipment!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        results.replaceChildren();
        text = document.createElement('p');
        text.textContent = "You win somehow! Paper covers rock.";
        results.appendChild(text);
        console.log("You win somehow! Paper covers rock.");
        return "You win somehow! Paper covers rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        results.replaceChildren();
        text = document.createElement('p');
        text.textContent = "You lose! Scissors cut paper. What were you thinking?";
        results.appendChild(text);
        console.log("You lose! Scissors cut paper. What were you thinking?");
        return "You lose! Scissors cut paper. What were you thinking?";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        results.replaceChildren();
        text = document.createElement('p');
        text.textContent = "You lose! Rock smashes scissors. What a waste of office equipment!";
        results.appendChild(text);
        console.log("You lose! Rock smashes scissors. What a waste of office equipment!");
        return "You lose! Rock smashes scissors. What a waste of office equipment!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        results.replaceChildren();
        text = document.createElement('p');
        text.textContent = "You win! Scissors cut paper. What was the computer thinking?";
        results.appendChild(text);
        console.log("You win! Scissors cut paper. What was the computer thinking?");
        return "You win! Scissors cut paper. What was the computer thinking?";
    }
    else {
        console.log("Cheeky. Please choose rock, paper, or scissors.");
        return "Cheeky. Please choose rock, paper, or scissors.";
    }
}

let gameOutcome;

//function game() {
//    for (let i = 0; i < 5; i++) {
//        playRound(playerSelection, computerSelection);
//    }
//    if (playerScore > computerScore) {
//        gameOutcome = "Player score: " + playerScore + ". Computer score : " + computerScore + ". Game over. User wins."
//        return gameOutcome;
//    }
//    else if (computerScore > playerScore) {
//        gameOutcome = "Player score: " + playerScore + ". Computer score : " + computerScore + ". Game over. Computer wins."
//        return gameOutcome;
//    }
//    else {
//        gameOutcome = "Player score: " + playerScore + ". Computer score : " + computerScore + ". It appears to be a tie! Play again?"
//        return gameOutcome;
//    }
//}