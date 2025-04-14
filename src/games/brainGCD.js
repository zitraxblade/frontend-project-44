import runGame from '../index.js';
import randomNum from '../randomNum.js';

const text = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const gameGcd = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return { question, correctAnswer };
};

const runGcd = () => {
  runGame(text, gameGcd);
};

export default runGcd;
