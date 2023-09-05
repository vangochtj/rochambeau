container = document.createElement('div');
rockBtn = document.createElement('button');
paperBtn = document.createElement('button');
scissorsBtn = document.createElement('button');
result = document.createElement('div');
runningScore = document.createElement('div');

rockBtn.textContent = 'ROCK';
paperBtn.textContent = 'PAPER';
scissorsBtn.textContent = 'SCISSORS';
rockBtn.setAttribute('class', 'rock');
paperBtn.setAttribute('class', 'paper');
scissorsBtn.setAttribute('class', 'scissors');

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

document.body.appendChild(container);
document.body.appendChild(runningScore);
document.body.appendChild(result);

function getComputerChoice() {
    let rdnInt = Math.floor(Math.random() * 3);

    if (rdnInt === 0) {
        rdnInt = 'rock';
    } else if (rdnInt === 1) {
        rdnInt = 'paper';
    } else {
        rdnInt = 'scissors';
    }
    return rdnInt;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (computerScore === 5 || playerScore === 5) {
        return;
    }

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        result.textContent = "You lose! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        result.textContent =  "You win! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        result.textContent = "You win! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        result.textContent = "You lose! Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        result.textContent = "You lose! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        result.textContent = "You win! Scissors beat paper.";
    } else {
        result.textContent = "It's a tie!";
    }

    displayScore(computerScore, playerScore);
    checkForWinner(computerScore, playerScore);
}

function displayScore(computerScore, playerScore) {
    runningScore.textContent = `You: ${playerScore} Computer: ${computerScore}`
}

function checkForWinner(computerScore, playerScore) {
    if (computerScore == 5) {
        result.style = 'font-size: 32px; font-weight: bold;';
        result.textContent = `You lost ${computerScore} to ${playerScore}!`
    } else if (playerScore == 5) {
        result.style = 'font-size: 32px; font-weight: bold;';
        result.textContent = `You won ${playerScore} to ${computerScore}!`
    }
}

container.addEventListener('click', (e) => {
        const computerSelection = getComputerChoice();
        const playerSelection = e.target.getAttribute('class');
        playRound(playerSelection, computerSelection);
    });