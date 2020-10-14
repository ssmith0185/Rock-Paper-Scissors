/*Todo list
* Rework the logic so that the player if offered a choice for each round. Completed
* Rework the for loop so that after 5 rounds, the winner is declared for the overall game.
* I overhauled the loop to continue looping until a winner is selected.
*/

//function made specifically for providing and storing the user input. I might create a call to the validator as well
function userPlay(){
  let choice = prompt(`Choose between Rock, Paper, and Scissors: `).toLowerCase(); //This line is a prompt to allow the user to make a choice
  return choice;
}

function computerPlay(cc){ // This function generates a random choice using the random function
    let choice = cc[Math.floor((Math.random()*3))]; // The random choice is generated here; Updated the selection process in this function
    return choice; // Then the choice is outputted through here
  }

function playRound() {
  console.log(`You are in the playRound function`);
  //cc = Computer Choice; pc = player choice
  const cc = ['rock', 'paper', 'scissors']; //This line stores the choices avaiable to the computer
  let pc = userPlay(); // ps = player selection
  cs = computerPlay(cc) // cs = computer selection
  if (pc === cs){
    console.log(pc);
    return results = `tie`;
  };
  if (pc === "rock" && cs === "scissors" ||
      pc === "paper" && cs === "rock" ||
      pc === "scissors" && cs === "paper"
  ) {
    console.log(pc);
    return results = `win`;
  } else {
    console.log(pc);
    return results = `lose`;
  }
}

function game(){ //This is a for loop counter which is supposed to create 5 rounds of the game.
  console.log(`Time to play Rock, Paper, Scissors!`); // This line is to let the user know that the game has started
  let cp = 0; //cp = Computer Points
  let pp = 0; // pp = Player Points
  let results;
  //console.log(`This is before the game function`);
  /*for (i=0; i<5; i++){
    results = playRound();
    if (results === `win`){
      pp++;
      console.log(`You Win this round! \nPlayer Score: ${pp} \nComputer Score: ${cp}`);
    }else if (results === `lose`){
      cp++;
      console.log(`You Lose this round! \nPlayer Score: ${pp} \nComputer Score: ${cp}`);
    }else if (results === `tie`){console.log(`Tie! No wins this round! \nPlayer Score: ${pp} \nComputer Score: ${cp}`);}
  }*/
  if (pp > cp){console.log(`Congratulations! You are the Rock Paper Scissors Champion!!`);}
  else if (cp > pp){console.log(`Game Over! You lose at Rock Paper Scissors!`);}
  else if (pp === cp){console.log(`Tie Game. No one wins!`);}
 } 
 game();