import readlineSync from 'readline-sync';

const roundsToWin = 3;
const runGame = (text, qustionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(text);
  for (let i = 0; i < roundsToWin; i +=1) {
    const { question, correctAnswer } = qustionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer:');
    if (userAnswer.trim() == correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer; (.Correct answer was ${correctAnswer}\n Let's try again, ${userName}!`
      );
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
