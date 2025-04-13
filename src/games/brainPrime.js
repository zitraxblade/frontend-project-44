import randomNum from "../randomNum.js";
import runGame from "../index.js";

const text = '"yes" if given number is prime. Otherwise answer "no".';

const numPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const question = randomNum();
  const correctAnswer = numPrime(question) ? "yes" : "no";
  return { question, correctAnswer };
};

const runPrime = () => {
  runGame(text, game);
};

export default runPrime;
