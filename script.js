console.log(`Time to play Rock, Paper, Scissors!`); // This line is to let the user know that the game has started
let pcCounter = 0;
let playerCounter = 0;
const playerChoice = prompt(`Choose between Rock, Paper, and Scissors: `).toLowerCase(); //This line is a prompt to allow the user to make a choice
const pcChoice = ['rock', 'paper', 'scissors']; //This line stores the choices avaiable to the computer

function game(playerChoice, pcChoice, pcCounter, playerCounter){ //This is a for loop counter which is supposed to create 5 rounds of the game.
  for (i = 0; i > 5; ++i){ //Not really sure why the code isn't looping though
    if(pcCounter >= 5){
      console.log(`You Lose!`);
    }else if (playerCounter >= 5){
      console.log(`You Win!`);
    }else playRound(playerChoice, pcChoice);
  }
}

function random(min,max) { // The function creates a random number within the array
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

function computerPlay($pcChoice){ // This function generates a random choice using the random function
    let choice = pcChoice[random(0, pcChoice.length)]; // The random choice is generated here
    return choice; // Then the choice is outputted through here
  }

/*function validate(playerChoice){//This is meant to make sure that the player's inputs are correct. It's not working though.
  if(playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors"){
    playerChoice = prompt(`Your selection is invalid, please enter either "rock", "paper", or "scissors": `);
    return playerChoice;
  }else return playerChoice;
}
*/

function playRound(playerSelection, computerSelection){
  //validate(playerChoice);
  computerSelection = computerPlay();
  playerSelection = playerChoice;
  if (playerSelection === `rock` && computerSelection === `paper`){
      console.log(`You Lose! Paper beats Rock!`);
      ++pcCounter;
  }else if (playerSelection === `rock` && computerSelection === `rock`){
      console.log(`Tie Game!`);
  }else if (playerSelection === `rock` && computerSelection === `scissors`){
    console.log(`You Win! Rock beats Scissors!`);
    ++playerCounter;
  }

  if (playerSelection === `paper` && computerSelection === `scissors`){
      console.log(`You Lose! Scissors beats Paper!`);
      ++pcCounter;
  }else if (playerSelection === `paper` && computerSelection === `paper`){
      console.log(`Tie Game!`);
  }else if (playerSelection === `paper` && computerSelection === `rock`){
      console.log(`You Win! Paper beats Rock!`);
      ++playerCounter;
  }
  
  if (playerSelection === `scissors` && computerSelection === `rock`){
      console.log(`You Lose! Rock beats Scissors!`);
      ++pcCounter;
  }else if (playerSelection === `scissors` && computerSelection === `scissors`){
      console.log(`Tie Game!`);
  }else if (playerSelection === `scissors` && computerSelection === `paper`){
      console.log(`You Win! Scissors beats Paper!`);
      ++playerCounter;
  }

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
}
game(playerChoice, pcChoice, pcCounter, playerCounter);