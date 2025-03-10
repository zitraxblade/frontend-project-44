#!/usr/bin/env node
import readlineSync from 'readline-sync';
// Функция привествования.
function helloUsser () {
    console.log('Welcome to the Brain Games!');
    const names = readlineSync.question('May I have your name?');
    console.log(`Hello, ${names}!`)
    return names;
}
const names = helloUsser();
// Функция рандомное число.
function randomNum () {
    return Math.floor(Math.random() * 100);
}
// Функция проверка чётности числа.
function isEven(number) {
    const two = number % 2 === 0;
    return two;
}
// Функция движка игры.
function gameStart () {
    console.log("Answer 'yes' if number even otherwise answer 'no'");
    for (let i = 0; i < 3; i++) {
    const random = randomNum()
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your Answer:')
    const correctAnswer = isEven(random) ? 'yes' : 'no';
    if (correctAnswer === userAnswer.trim()) {
        console.log('Correct!');
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was "no".\n Let's try again ${names}`);
    return false;
    }
    console.log(`Congratulations, ${names}`)
    }
    }
gameStart();
export default gameStart;