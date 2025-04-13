import randomNum from "../randomNum.js";
import runGame from "../index.js";

const operations = ["+", "*", "-"];

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

const max = 100;
const randomNums = (maxes = max, min = 0) => {
  return Math.round(Math.random() * (maxes - min));
};

const text = "What is the result of the expression?";

const gameCalc = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const operator = operations[randomNums(2)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculator(number1, number2, operator);
  return { question, correctAnswer };
};

const runCalc = () => {
  runGame(text, brainCalc);
};

export default runCalc;
