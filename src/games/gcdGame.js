import runGame from "../index.js";
import randomNum from "../randomNum.js";
const text = "Find the greatest common divisor of given numbers.";

// Функция Евклида.
const getGcd = (a, b) => {
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

// Функция игры.
const gameGcd = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return { question, correctAnswer };
};

// Запуск игры.
const runGcd = () => {
  runGame(text, gameGcd);
};
runGcd();
export default runGcd;
