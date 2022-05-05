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
let roundText;
let scoreText;
let gameText;
let resetSection = document.querySelector("#reset_container");
let resetButton;

function getResults() {
    gameText = document.createElement('p');
    if (playerScore > computerScore) {
        gameText.textContent = "Game over. The User wins.";
        gameText.setAttribute("class", "final");
        results.appendChild(gameText);
        endGame();
    }
    else if (computerScore > playerScore) {
        gameText.textContent = "Game over.";
        gameText.setAttribute("class", "final");
        results.appendChild(gameText);
        endGame();
    }
    else {
        gameText.textContent = "Are you a good User or a bad User?";
        gameText.setAttribute("class", "final");
        results.appendChild(gameText);
        endGame();
    }
};

function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    rockButton.setAttribute("class","disabled");
    paperButton.setAttribute("class","disabled");
    scissorsButton.setAttribute("class","disabled");
    createReset();
};

function createReset() {
    resetButton = document.createElement("button");
    resetButton.innerHTML = "Play Again?";
    resetButton.addEventListener("click", () => { resetPage() });
    resetSection.appendChild(resetButton);
};

function resetPage() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    rockButton.removeAttribute("class","disabled");
    paperButton.removeAttribute("class","disabled");
    scissorsButton.removeAttribute("class","disabled");
    results.replaceChildren();
    playerScore = 0;
    computerScore = 0;
    resetSection.replaceChildren();
};

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay(computerChoices);
    if (playerSelection === computerSelection) {
        if (playerSelection === "rock") {
            results.replaceChildren();
            roundText = document.createElement('p');
            scoreText = document.createElement('p');
            roundText.textContent = "It's a tie! Did you think rock was weak to rock?";
            scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
            results.appendChild(roundText);
            results.appendChild(scoreText);
            if (playerScore === 5 || computerScore === 5) {
                getResults();
            }
        }
        else if (playerSelection === "paper") {
            results.replaceChildren();
            roundText = document.createElement('p');
            scoreText = document.createElement('p');
            roundText.textContent = "It's a tie! The papers harmlessly lie on a desk.";
            scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
            results.appendChild(roundText);
            results.appendChild(scoreText);
            if (playerScore === 5 || computerScore === 5) {
                getResults();
            }
        }
        else if (playerSelection === "scissors") {
            results.replaceChildren();
            roundText = document.createElement('p');
            scoreText = document.createElement('p');
            roundText.textContent = "It's a tie! These scissors are evenly matched in skill.";
            scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
            results.appendChild(roundText);
            results.appendChild(scoreText);
            if (playerScore === 5 || computerScore === 5) {
                getResults();
            }
        }
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        results.replaceChildren();
        roundText = document.createElement('p');
        scoreText = document.createElement('p');
        roundText.textContent = "You lose somehow! Paper covers rock, and the rock thinks it's nighttime.";
        scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
        results.appendChild(roundText);
        results.appendChild(scoreText);
        if (playerScore === 5 || computerScore === 5) {
            getResults();
        }
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        results.replaceChildren();
        roundText = document.createElement('p');
        scoreText = document.createElement('p');
        roundText.textContent = "You win! Rock smashes scissors. What a waste of office equipment!";
        scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
        results.appendChild(roundText);
        results.appendChild(scoreText);
        if (playerScore === 5 || computerScore === 5) {
            getResults();
        }
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        results.replaceChildren();
        roundText = document.createElement('p');
        scoreText = document.createElement('p');
        roundText.textContent = "You win somehow! Paper covers rock, and the rock thinks it's nighttime.";
        scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
        results.appendChild(roundText);
        results.appendChild(scoreText);
        if (playerScore === 5 || computerScore === 5) {
            getResults();
        }
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        results.replaceChildren();
        roundText = document.createElement('p');
        scoreText = document.createElement('p');
        roundText.textContent = "You lose! Scissors cut paper. What were you thinking, bringing paper to a scissors fight?";
        scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
        results.appendChild(roundText);
        results.appendChild(scoreText);
        if (playerScore === 5 || computerScore === 5) {
            getResults();
        }
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        results.replaceChildren();
        roundText = document.createElement('p');
        scoreText = document.createElement('p');
        roundText.textContent = "You lose! Rock smashes scissors. What a waste of office equipment!";
        scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
        results.appendChild(roundText);
        results.appendChild(scoreText);
        if (playerScore === 5 || computerScore === 5) {
            getResults();
        }
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        results.replaceChildren();
        roundText = document.createElement('p');
        scoreText = document.createElement('p');
        roundText.textContent = "You win! Scissors cut paper. What was the computer thinking, bringing paper to a scissors fight?";
        scoreText.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
        results.appendChild(roundText);
        results.appendChild(scoreText);
        if (playerScore === 5 || computerScore === 5) {
            getResults();
        }
    }
}