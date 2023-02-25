//'use strict';

// Get number
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let guess = document.querySelector('.guess');
let hightScore = document.querySelector('.highscore');
let again = document.querySelector('.again');

let numAlea = Math.floor(Math.random() * 20) + 1;

let bagColor = document.querySelector('body');

let scoreNum = 20;
//let hightScoreResult = 0;

check.addEventListener('click', function () {
  console.log(guess.value);
  console.log(numAlea);
  console.log(scoreNum);
  console.log(typeof guess.value);
  console.log(typeof numAlea);
  guess1 = Number(guess.value);
  //scoreNum = Number(score);

  if (!guess1) {
    message.textContent = 'No number';
  } else if (guess1 < numAlea) {
    if (scoreNum > 0) {
      message.textContent = 'low';
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      message.textContent = 'You lost the game';
      number.textContent = `The correct number was ${numAlea}`;
      number.style.width = 'auto';
    }
  } else if (guess1 > numAlea) {
    if (scoreNum > 0) {
      message.textContent = 'high';
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      message.textContent = 'You lost the game';
      number.textContent = `The correct number was ${numAlea}`;
      number.style.width = 'auto';
    }
  } else if (guess1 === numAlea) {
    message.textContent = 'Bravo';
    bagColor.classList.add('win1');
    hightScore.textContent = scoreNum;
  } else {
    message.textContent = 'Erreur_code';
  }
});

again.addEventListener('click', () => {
  bagColor.classList.add('win2');
  scoreNum = 20;
  hightScore.textContent = scoreNum;
});
