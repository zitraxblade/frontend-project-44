import runGame from "../index.js";
import randomNum from "../randomNum.js";

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

// Функция проверка чётности.
const isEven = (number) => number % 2 === 0;

// Логика игры.
const game = () => {
  const question = randomNum(1, 100);
  const correctAnswer = isEven(question) ? "yes" : "no";
  return { question, correctAnswer };
};

// Запуск игры.
const runEven = () => {
  runGame(text, game);
};

export default runEven;
