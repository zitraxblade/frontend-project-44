import runGame from '../index.js';
import randomNum from '../randomNum.js';

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const game = () => {
  const question = randomNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runEven = () => {
  runGame(text, game);
};

export default runEven;
