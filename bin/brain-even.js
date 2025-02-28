#!/usr/bin/env node
import readlineSync from 'readline-sync';

const evenNumberGame = () => {
    const greetUser = () => {
        console.log('Welcome to the Brain Games!');
        const name = readlineSync.question('May I have your name? ');
        return console.log(`Hello, ${name}!`);
    };
    const names = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
 const playerWin = () =>{
 const winer = (finish) => {
    finish = 3;
    let sum = 0;
    const num = getRandom(100);
    const delenie = num % 2;
    while (sum === finish) {
        if (delenie === 0) {
            if ( userAnswer === 'yes') {
            console.log('Correct!')
            sum = sum + 1;
        } else {
            console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' no '.`);
                return false;
        }
    }
 }


 }




};
const getRandom = (max) => {
    return Math.floor(Math.random() * max);
};
 evenNumberGame();