import runGame from "../index.js";
import randomNum from "../randomNum.js";
const text = "Find the greatest common divisor of given numbers.";

// Функция Евклида.
const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

// Функция игры.
const gameGcd = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return { question, correctAnswer };
};
const runGcd = () => {
  runGame(text, gameGcd);
};
runGcd();
export default runGcd;
