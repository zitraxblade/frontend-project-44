#!/usr/bin/env node
import readlineSync from 'readline-sync';
const evenNumberGame = () => {
const user = () =>{
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
return console.log(`Hello, ${name}!`);
    }
const name = user()
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
const playerWin =(max) => {
const isEven = (num) => {
        const abs = num % 2 === 0
        return abs;
      }
const randoms = getRandom(100);
console.log(`Question: ${randoms}`);
const userAnswer = readlineSync.question('Your answer: ');
let sum = 0;
while (sum <= max) {
    if (isEven(randoms) && userAnswer === 'yes' || isEven(randoms) && userAnswer === 'no') {
        sum = sum + 1;
       console.log('Correct!')
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}`);
        return false;
    }
}
    };
    playerWin(3);
};

const getRandom = (max) => {
    return Math.floor(Math.random() * max);
};
 evenNumberGame();
 