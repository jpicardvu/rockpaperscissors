const buttons = document.querySelectorAll('.btn');

buttons.forEach((x) => {
  x.addEventListener('click', playGame);
});

const results = document.querySelector('.results');

let round = 1
let winCounter = 0
let loseCounter = 0
let gameStart = false

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
} 

function playRound(playerSelection) {
  const choices = ["rock","paper", "scissors"]
  const computerSelection = random(choices)
  const content = document.createElement('div');   
  
  if (playerSelection === "rock" && computerSelection === "scissors" || 
          playerSelection === "scissors" && computerSelection === "paper" || 
          playerSelection === "paper" && computerSelection === "rock") {
    winCounter++;
    content.textContent = `Computer chose *${computerSelection}*. You won Round ${round}.`;
    return results.appendChild(content);
  }
  else if (playerSelection === computerSelection) {
    content.textContent = `Computer chose *${computerSelection}*. Round ${round} is a tie.`;
    return results.appendChild(content);
  }
  else {
    loseCounter++;
    content.textContent = `Computer chose *${computerSelection}*. You lost Round ${round}.`;
    return results.appendChild(content);
  }
}
        
function playGame() {
  const content = document.createElement('div'); 

  if (gameStart === false) {
    results.textContent = ""
    content.textContent = "NEW GAME! BEST OUT OF 5!";
    results.appendChild(content);
  }
  
  const playerSelection = this.id;
  playRound(playerSelection);
  gameStart = true;
  
  if (winCounter + loseCounter === 5) {

    if (winCounter > loseCounter) {
      content.textContent = `Score: \nYou = ${winCounter} |\nComputer = ${loseCounter}. \nYOU WIN!`;
      results.appendChild(content);
    }
    else {
      content.textContent = `Score: \nYou = ${winCounter} |\nComputer = ${loseCounter}. \nYOU LOSE!`;
      results.appendChild(content);
    }
    round = 0;
    winCounter = 0;
    loseCounter = 0;
    gameStart = false;
    return;
  }

  round++;

}