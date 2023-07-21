function getComputerChoice() {
    let rdnInt = Math.floor(Math.random() * 3)

    if (rdnInt === 0) {
        rdnInt = "rock"
    } else if (rdnInt === 1) {
        rdnInt = "paper"
    } else {
        rdnInt = "scissors"
    }
    return rdnInt;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lose! Paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You win! Rock beats scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lose! Scissors beat paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You win! Scissors beat paper."
    } else {
        return "It's a tie!"
    }
}

function game() {
    let playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection));
    playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection));

    if (computerScore > playerScore) {
        console.log("You've lost from the computer.");
    } else if (playerScore > computerScore) {
        console.log("You've won from the computer!");
    } else if (playerScore === computerScore) {
        console.log("You've tied with the computer.")
    }
}

game();