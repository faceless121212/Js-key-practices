'use strict';
//Elements selection
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--new');

//Game initial condition
score0Element.textContent = 0;
score1Element.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;

//Roll and Dice
btnRoll.addEventListener('click', function () {
  //generate random num
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  //dispaly number the dice
  dice.classList.remove('hidden');
  dice.src = `dice${diceNumber}.png`;
  //if the nun is 1 --switch it
  if (diceNumber !== 1) {
    currentScore += diceNumber;
    current0Element.textContent = currentScore;
  } else {
  }
});
