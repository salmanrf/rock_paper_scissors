function computerPlay() {
	choice = ["rock", "paper", "scissors"];
	intChoice = getRandomInt(3) /* generates random number between 0 to 2 */	

	return choice[intChoice];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function playerInput() {
	let playerChoice;

	do {
		playerChoice = prompt("Choose your fighters : \nRock, Paper, Scissors!").toLowerCase();		
	} while(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");

	return playerChoice;
}

function playRound(playerSelection, computerSelection) {
	if(playerSelection == "rock") {
		if(computerSelection == "rock") {
			
			return "Draw !";
		
		} else if(computerSelection == "paper") {

			return "You Lose! Paper beats Rock";
		
		} else if(computerSelection == "scissors") {

			return "You Win! Rock beats Scissors";
		}

	} else if(playerSelection == "paper") {
		if(computerSelection == "rock") {

			return "You Win! Paper beats Rock";

		} else if(computerSelection == "paper") {

			return "Draw !";

		} else if(computerSelection == "scissors") {

			return "You Lose! Scissors beats Paper";

		}

	} else if(playerSelection == "scissors") {
		if(computerSelection == "rock") {

			return "You Lose! Rock beats Scissors";
		
		} else if(computerSelection == "paper") {

			return "You Win! Scissors beats Paper";

		} else if(computerSelection == "scissors") {

			return "Draw !";

		}
	} else {
		return "Encountered Error!";
	}
}

function game() {
	do {
		let scores = [0,0]; /* scores[0] == player's scores , scores[1] == computer's scores*/
		let roundResult = "";
		let continuePlay = "";

		while(scores[0] < 3 && scores[1] < 3) {
			roundResult = playRound(playerInput(), computerPlay());

			if(roundResult.includes("Win")) {
				scores[0] += 1;
			} else if(roundResult.includes("Lose")) {
				scores[1] += 1;	
			}

			console.log(`Player : ${scores[0]} || Computer : ${scores[1]}`);
		}

		if(scores[0] > scores[1])
			console.log("Player Wins !");
		else if(scores[0] < scores[1])
			console.log("Computer Wins !");
		else 
			console.log("Draw !");

		continuePlay = prompt("Continue ? Y/N");

	} while(continuePlay[0].toLowerCase() != "n" );
}

console.log("Game On !");
game();