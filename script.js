'use strict';

// document.querySelector('.guess-number').textContent = 13;
// document.querySelector('.score').textContent = 0;

// console.log(document.querySelector('.guess-input').value);
// document.querySelector('.guess-input').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.guess-number').textContent = secretNumber;

// Button Check
document.querySelector('.btn-check').addEventListener('click', () => {
  const guessInput = Number(document.querySelector('.guess-input').value);
  console.log(guessInput, typeof guessInput);

  if (!guessInput) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guessInput === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guessInput > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessInput < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
