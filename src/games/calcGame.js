import randomNum from "../randomNum.js";
import runGame from "../index.js";
// Операторы.
const operations = ["+", "*", "-"];

// Функция калькулятора.
const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
  }
};
// Функция рандомного числа для оператора.
const max = 100;
const randomNums = (maxes = max, min = 0) => {
  return Math.round(Math.random() * (maxes - min));
};

const text = "What is the result of the expression?";
// Логика игры.
const gameCalc = () => {
  const leftnum = randomNum();
  const rightnum = randomNum();
  const operator = operations[randomNums(2)];
  const question = `${leftnum} ${operator} ${rightnum}`;
  const correctAnswer = calculator(leftnum, rightnum, operator);
  return { question, correctAnswer };
};

// Запуск игры.
const runCalc = () => {
  runGame(text, gameCalc);
};

export default runCalc;
