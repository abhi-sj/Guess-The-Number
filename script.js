'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess || guess > 20 || guess<1) {
    // document.querySelector('.message').textContent = 'π΄ No number entered...';
    displayMessage('π΄ Please enter a valid number...');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'π Correct Number';
    displayMessage('π Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //style changer
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? 'πToo high' : 'πToo low';
      displayMessage(guess > secretNumber ? 'πToo high' : 'πToo low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'π You lost the game';
      displayMessage('π You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing..';
  displayMessage('Start guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //since input is the string type give empty string
  document.querySelector('body').style.backgroundColor = '#222'; //style changer
  document.querySelector('.number').style.width = '15rem';
});
