function getComputerChoice() {
	const choice = Math.random();
	if (choice <= 0.33) {
		return "rock";
	} else if (choice <= 0.66) {
		return "paper";
	} else {
		return "scissors";
	}
}

function getHumanChoice() {
	const choice = prompt("Enter your choice");
	return choice;
}

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	if (humanChoice === computerChoice) {
		console.log("Tie!");
	} else if (humanChoice === "rock" && computerChoice === "scissors") {
		console.log("Rock beats scissors. You win!");
		return "h"
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		console.log("Paper beats rock. You win!");
		return "h"
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		console.log("Scissors beats paper. You win!");
		return "h"
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		console.log("Paper beats rock. You lose!");
		return "c"
	} else if (humanChoice === "paper" && computerChoice === "scissors") {
		console.log("Scissors beats paper. You lose!");
		return "c"
	} else if (humanChoice === "scissors" && computerChoice === "rock") {
		console.log("Rock beats scissors. You lose!");
		return "c"
	}
}

function increaseScore(score) {
	return score++
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		console.log(`Round ${i + 1}`)
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();
		let winner = playRound(humanChoice, computerChoice);
		if (winner === "h") {
			humanScore++
		} else if (winner === "c") {
			computerScore++
		}
		console.log(`Human score: ${humanScore}`);
		console.log(`Computer score: ${computerScore}`);
	}
}

playGame();
