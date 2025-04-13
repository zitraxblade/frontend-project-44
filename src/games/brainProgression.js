import randomNum from "../randomNum.js";
import runGame from "../index.js";

const text = "What number is missing in the progression?";
// Арифмитическая прогрессия.
const gameProgerssion = (start, step) => {
  const progression = [];
  for (let i = 0; i < 10; i++) {
    progression.push(start + step * i);
  }
  return progression;
};

// Функция игры.
const progressionRound = () => {
  const start = randomNum(1, 99);
  const step = randomNum(5, 10);
  const index = randomNum(0, 9);
  const progression = gameProgerssion(start, step);
  const correctAnswer = String(progression[index]);
  progression[index] = "..";
  const question = progression.join(" ");
  return { question, correctAnswer };
};

// Запуск игры.
const runProgression = () => {
  runGame(text, progressionRound);
};

export default runProgression;
