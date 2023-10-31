// Battle Game Project 10/27/2023

// Add an event handler to the button element
document.getElementById("button").onclick = startBattle;

// Definition of the startBattle() function which starts the game itself
function startBattle() {
	// Clear any old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	// Initial prompt for the user input that gets stored in a variable
	let action = window.prompt("You're walking through the forest and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you try to BRIBE the troll?").toUpperCase();

	// Switch statement to handle the player's choice
	switch(action) {
		case "FIGHT": {
			fightBattle();
			break;
		} // end of case FIGHT

		case "RUN": {
			runBattle();
			break;
		} // end of case RUN

		case "BRIBE": {
			bribeBattle();
			break;
		} // end of case BRIBE

		default: {
			// We're here because the user has not entered a valid choice at the original prompt
			window.alert("You entered: " + action + ". That is not a valid choice! Please try again!");
			startBattle();
			break;
		} // end of default case
	} // end of switch statement
} // end of startBattle()

// Definition of the fightBattle() function
function fightBattle() {
	// start collecting some user responses with variables
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Do you think you are stronger than a troll? (YES or NO)").toUpperCase();

	// logic that analyzes the responses and creates the outcome
	if(skill === "YES" || strong === "YES") {
		// the uder said YES to at least one prompt
		document.getElementById("victory").innerHTML = "You have won with either skill or strength!<br/>You survive another day!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again?";
	} else {
		document.getElementById("defeat").innerHTML = "You are not skilled or strong?<br/>Why did you fight a troll?<br/>You have been defeated!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}
} // end of fight battle

// Definition of the runBattle() function
function runBattle() {
	// Variable to store the user response
	let fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();

	// Logic to analyze the variable and provide the outcome
	if(fast === "YES") {
		document.getElementById("victory").innerHTML = "Your speed has saved you!<br/>But can you live with your cowardice?";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Try Again?";
	} else {
		document.getElementById("defeat").innerHTML = "If you're going to run, at least be faster than a troll.<br/>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";
	}
} // end of runBattle()

// Definition of the bribeBattle() function
function bribeBattle() {
	// Variable to store the user response
	let money = window.prompt("You have to pay the troll-toll.\nDo you have any money? (YES or NO)").toUpperCase();

	if(money === "YES") {
		// They said they had money, now ask for the amount
		let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE!");
		// Check the amount against our condition
		if(amount > 50) {
			document.getElementById("victory").innerHTML = "Great job! The troll is happy!<br/>You may pass!";
			document.getElementById("win").play();
			document.getElementById("button").textContent = "Try Again?";
		} else {
			// user had money, just not enough of it
			document.getElementById("defeat").innerHTML = "The troll needs more than that!<br/>Your fate is sealed!";
			document.getElementById("lose").play();
			document.getElementById("button").textContent = "Try Again?";
		} // end of nested else
	} else {
		// User said they didn't have any money
		document.getElementById("defeat").innerHTML = "No money? Trolls don't have venmo...yet!<br/>You have lost!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Try Again?";	
	}
}