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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper."
    } else {
        return "It's a tie!"
    }
}