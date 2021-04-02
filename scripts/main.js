function random(array) {
  return array[Math.floor(Math.random() * array.length)];
} 

function playRound() {
  const choices = ["rock","paper", "scissors"]
  const playerSelection = prompt("Type rock, paper or scissors").toLowerCase();
  const computerSelection = random(choices)
  
  if (!choices.includes(playerSelection)) {
    return result = "Error: please input a valid choice";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors" || 
          playerSelection === "scissors" && computerSelection === "paper" || 
          playerSelection === "paper" && computerSelection === "rock") {
    winCounter++;
    return result = `Computer chose *${computerSelection}*. You won Round ${round}.`;
  }
  else if (playerSelection === computerSelection) {
    return result = `Computer chose *${computerSelection}*. Round ${round} is a tie.`;
  }
  else {
    loseCounter++;
    return result = `Computer chose *${computerSelection}*. You lost Round ${round}.`;
  }
}

function playGame() {
  let endGame = false;

  while (!endGame) {
    alert(playRound());
  
    if (winCounter + loseCounter === 5) {
      endGame = true;

      console.log("You " + winCounter);
      console.log("Computer: " + loseCounter);
      
      if (winCounter > loseCounter) {
        alert(`Score: \nYou = ${winCounter} \nComputer = ${loseCounter}. \nYOU WIN!`);
      }
      else {
        alert(`Score: \nYou = ${winCounter} \nComputer = ${loseCounter}. \nYOU LOSE!`);
      }

      round = 1;
      winCounter = 0;
      winCounter = 0;
      return;
    }

    console.log("You " + winCounter);
    console.log("Computer: " + loseCounter);
    round++;
  }
}

let round = 1
let winCounter = 0
let loseCounter = 0