function getComputerChoice() {
    const choices = [ 'Rock', 'Paper', 'Scissors'];
    const randomeChoice = Math.floor(Math.random() * choices.length);
    return choices[randomeChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }   else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function game() {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors:");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(result);
}

game();