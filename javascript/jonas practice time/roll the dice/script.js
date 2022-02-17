'use strict';

//  SELECTING ELEMENT.....
const score0El        =       document.querySelector('#score--0');
const score1El        =       document.querySelector('#score--1');
const current0El      =       document.getElementById('current--0');
const current1El      =       document.getElementById('current--1');
const player0El       =       document.querySelector('.player--0');
const player1El       =       document.querySelector('.player--1');
const diceEl          =       document.querySelector('.dice');
const btnNew          =       document.querySelector('.btn--new');
const btnRoll         =       document.querySelector('.btn--roll');
const btnHold         =       document.querySelector('.btn--hold');

//  INITIAL/STARTING  CONDITION......
score0El.textContent = '0';
score1El.textContent = '0';
// ADD THE CLASS HIDE TO HIDE INITIAL DICE......
diceEl.classList.add('hidden');

// SWITCH THE CURRENT PLAYER AND MAKE THE CURRENT VALUE IS EQUAL TO 0......
const switchPlayer = function () {
  currentValue = 0;
  document.getElementById(`current--${activePlayer}`).innerHTML = '0';

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

let currentValue = 0;
let activePlayer = 0;
let playing = true;

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generating a random dice roll....
    const dice = Math.ceil(Math.random() * 6);

    // 2. display dice.....
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', `dice-${dice}.png`);

    // 3. check for rolled 1
    if (dice !== 1) {
      // ADD TO CURRENT VALUE....
      currentValue += dice;
      document.getElementById(`current--${activePlayer}`).innerHTML =
        currentValue;
    } else {
      // switch to opp. player....
      switchPlayer();
    }
  }
});

// IMPLIMENTATION OF HOLD BUTTON....

let totalScore = [0, 0];
btnHold.addEventListener('click', function () {
  if (playing) {
    totalScore[activePlayer] += currentValue;
    document.querySelector(`#score--${activePlayer}`).innerHTML =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 50) {
      //IF ACTIVE PLAYER WIN.......
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
        diceEl.classList.add('hidden');

    } else {
      // SWITCH......
      switchPlayer();
    }
  }
});


btnNew.addEventListener("click", function(){
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentValue = 0;
    diceEl.classList.add('hidden'); 
    totalScore = [0, 0];  

    if(playing){
        if(activePlayer === 1){
            switchPlayer();
        }else{
            document.getElementById(`current--${activePlayer}`).innerHTML = "0";
        }
        
    }else{
        document.getElementById(`current--${activePlayer}`).innerHTML = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
        player0El.classList.add('player--active');
    }

    activePlayer = 0;
    playing = true;
    

})
