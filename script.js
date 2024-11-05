
// Getting Computer Choice

function getComputerChoice() {
  computerChoice = Math.random();
    
  if (computerChoice <= 1/3) {
    computerChoice = 'rock';
  } else if (computerChoice > 1/3 && computerChoice <= 2/3) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }

  return computerChoice;
}

// Getting Human Choice

function getHumanChoice() {
  humanChoice = prompt('Pick Rocket, Paper or Scissor', 'Write here...').toLowerCase();

  return humanChoice;
}

// Scoreboard

let humanScore = 0;
let computerScore = 0;



// Play Game

function playGame() {
  
  humanScore = 0;
  computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It\'s a tie! You picked; ${humanChoice} Computer picked: ${computerChoice}!`);
      return;

    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      console.log(`You lose! You picked; ${humanChoice} Computer picked: ${computerChoice}!`);
      return computerScore++;

    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      console.log(`You lose! You picked; ${humanChoice} Computer picked: ${computerChoice}!`);
      return computerScore++;

    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      console.log(`You lose! You picked; ${humanChoice} Computer picked: ${computerChoice}!`);
      return computerScore++;

    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log(`You win! You picked; ${humanChoice} Computer picked: ${computerChoice}!`);
      return humanScore++;

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      console.log(`You win! You picked; ${humanChoice} Computer picked: ${computerChoice}!`);
      return humanScore++;

    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log(`You win! You picked; ${humanChoice} Computer picked: ${computerChoice}!`);
      return humanScore++;
      
    } else {
      console.log(`This input is not valid please write: Rock, Paper, or Scissors`);
      
    }
    return humanScore && computerScore;
    
    }


  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Round 1: You: ${humanScore} | Computer ${computerScore}`);

  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Round 2: You: ${humanScore} | Computer ${computerScore}`);

  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Round 3: You: ${humanScore} | Computer ${computerScore}`);

  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Round 4: You: ${humanScore} | Computer ${computerScore}`);

  playRound(getHumanChoice(), getComputerChoice());
  console.log(`Round 5: You: ${humanScore} | Computer ${computerScore}`);

}
