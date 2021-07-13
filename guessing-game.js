function guessingGame() {
  let guesses = 0;
  const ANSWER = Math.floor(Math.random() * 100)
  let isOver = false;

  return function guess(guess) {
    if (isOver) return "The game is over, you already won!";
    guesses++;
    if (guess === ANSWER) {
      isOver = true;
      return `You win! You found ${ANSWER} in ${guesses} guesses.`;
    } 
    if (guess < ANSWER) return `${guess} is too low!`;
    if (guess > ANSWER) return `${guess} is too high!`;
  }
}


module.exports = { guessingGame };
