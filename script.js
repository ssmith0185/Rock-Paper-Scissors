/*Todo list
* Rework the logic so that the player if offered a choice for each round. Completed
* Rework the for loop so that after 5 rounds, the winner is declared for the overall game.
* I overhauled the loop to continue looping until a winner is selected.
* Rework the validator function so that correct entries are submitted.
*/

//function made for updating the player's points
/*function ppcounter(ppoints){
  ppoints = ppoints + 1;
  return ppoints;
}

//function made for updating the computer's points
function cpcounter(cpoints){
  cpoints = cpoints + 1;
  return cpoints;
}*/

//function made specifically for providing and storing the user input. I might create a call to the validator as well
function userPlay(pChoice){
  let choice = prompt(`Choose between Rock, Paper, and Scissors: `).toLowerCase(); //This line is a prompt to allow the user to make a choice
  return choice;
}

/*function random(min,max) { // The function creates a random number within the array
    console.log(`You are in the random function`);
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }// Found a cleaner method that combines both random and computerPlay
*/
function computerPlay(cChoice){ // This function generates a random choice using the random function
    console.log(`You are in the computer play function`);
    let choice = cChoice[Math.floor((Math.random()*3))]; // The random choice is generated here; Updated the selection process in this function
    return choice; // Then the choice is outputted through here
  }

/*function validate(playerChoice){//This is meant to make sure that the player's inputs are correct. It's not working though.
  if(playerChoice !== "rock" || playerChoice !== "paper" || playerChoice !== "scissors"){
    playerChoice = prompt(`Your selection is invalid, please enter either "rock", "paper", or "scissors": `);
    return playerChoice;
  }else return playerChoice;
}
*/
/* The lord blesseth and he taketh away
function declareRoundWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 0;
  if (playerChoice === "r" && computerChoice === "s" ||
      playerChoice === "p" && computerChoice === "r" ||
      playerChoice === "s" && computerChoice === "p"
  ) {
      return 1;
  } else {
      return -1;
  }
}*/
function playRound(pChoice, cChoice, ppoints, cpoints){
  console.log(`You are in the playRound function`);
  //validate(playerChoice);
  playerSelection = userPlay(pChoice);
  computerSelection = computerPlay(cChoice);
  if (playerSelection === `rock` && computerSelection === `paper`){
      console.log(`You Lose! Paper beats Rock!`);
      //cpcounter(cpoints);
      console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
      cpoints = cpoints + 1;
      return cpoints;
  }else if (playerSelection === `rock` && computerSelection === `rock`){
      console.log(`Tie Game! Rock can't beat Rock.`);
      console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
  }else if (playerSelection === `rock` && computerSelection === `scissors`){
    console.log(`You Win! Rock beats Scissors!`);
    //ppcounter(ppoints);
    console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
    ppoints = ppoints + 1;
    return ppoints;
  }

  if (playerSelection === `paper` && computerSelection === `scissors`){
      console.log(`You Lose! Scissors beats Paper!`);
      //cpcounter(cpoints);
      console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
      cpoints = cpoints + 1;
      return cpoints;
    }else if (playerSelection === `paper` && computerSelection === `paper`){
      console.log(`Tie Game! Paper can't beat Paper.`);
      console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
  }else if (playerSelection === `paper` && computerSelection === `rock`){
      console.log(`You Win! Paper beats Rock!`);
      //ppcounter(ppoints);
      console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
      ppoints = ppoints + 1;
      return ppoints;
  }
  
  if (playerSelection === `scissors` && computerSelection === `rock`){
      console.log(`You Lose! Rock beats Scissors!`);
      //cpcounter(cpoints);
      console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
      cpoints = cpoints + 1;
      return cpoints;
  }else if (playerSelection === `scissors` && computerSelection === `scissors`){
      console.log(`Tie Game! Scissors can't beat Scissors.`);
      console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
  }else if (playerSelection === `scissors` && computerSelection === `paper`){
      console.log(`You Win! Scissors beats Paper!`);
      //ppcounter(ppoints);
      console.log(`Player's Points: ` + ppoints + ` Computer's Points: ` + cpoints);
      ppoints = ppoints + 1;
      return ++ppoints;
  }
}

function game(){ //This is a for loop counter which is supposed to create 5 rounds of the game.
  console.log(`Time to play Rock, Paper, Scissors!`); // This line is to let the user know that the game has started
  let cpoints = 0;
  let ppoints = 0;
  let pChoice;
  const cChoice = ['rock', 'paper', 'scissors']; //This line stores the choices avaiable to the computer
  console.log(`This is before the game function`);
  //game(pChoice,cChoice, cpoints, ppoints);
  console.log(`You are now in: game()`);
  while (ppoints !== 5 || cpoints !== 5){
    console.log(`You are now in: game() - while loop`);
    if (cpoints == 5){
      console.log(`Game Over! You lose at Rock Paper Scissors!`);
    } else if (ppoints == 5){
      console.log(`Congratulations! You are the Rock Paper Scissors Champion!!`);
    } else playRound(pChoice, cChoice, ppoints, cpoints);
  }
 } game();

  /*validate(playerSelection); // Old switch statement meant for decision making
  console.log("This is the playRound function!")
  console.log(playerChoice);
  playerSelection = playerChoice;
  console.log("This is the playRound function - 002!")
  computerSelection = computerPlay();
  switch(playerSelection === `rock`){
    case 0:
      console.log("This is the playRound function! 003!")
      computerSelection === `rock`;
      console.log(`Tie`);
      break;
    case 1:
      computerSelection === `paper`;
      console.log(`You Lose! Paper beats Rock!`);
      break;
    case 2:
      computerSelection === `scissors`;
      console.log(`You Win! Rock beats Scissors!`);
      break;  
  }
  console.log("This is the playRound function! 004!")
  switch(playerSelection === `paper`){
    case 0:
      computerSelection === `rock`;
      console.log(`You Win! Paper beats Rock!`);
      break;
    case 1:
      computerSelection === `paper`;
      console.log(`Tie`);
      break;
    case 2:
      computerSelection === `scissors`;
      console.log(`You Lose! Scissor beats Paper!`);
      break;  
  }
  console.log("This is the playRound function! 005!")
  switch(playerSelection === `scissors`){
    case 0:
      computerSelection === `rock`;
      console.log(`You Lose! Rock beats Scissors!`);
      break;
    case 1:
      computerSelection === `paper`;
      console.log(`You Win! Scissor beats Paper!`);
      break;
    case 2:
      computerSelection === `scissors`;
      console.log(`Tie`);
      break;  
  }*/