let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

let compareGuesses = (humanGuess, computerGuess, target) =>{
  if(humanGuess === computerGuess === target) return true;
  else if(Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) return true;
  return false;
}

let updateScore = winner =>{
  if(winner === 'human') humanScore++;
  else if(winner === 'computer') computerScore++;
}

let advanceRound = () => {
  currentRoundNumber++;
}