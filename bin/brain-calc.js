import readlineSync from 'readline-sync';
// Функция приветсвования.
function helloGame() {
    console.log('Welcome to the Brain Games!');
    const nameGame = readlineSync.question('May i have your name?');
    console.log(`Hello, ${nameGame}!`)
}
const namess = helloGame();

// Операции
const operations = ['+' , '-'];
    
// Функция рандомного числа.
const max  = 100;
const randomNum = (maxes = max, min = 0) => {
    return Math.round(Math.random() * (maxes - min) );
};

// Игра.
const gameCalc = () => {
const leftRandom = randomNum(100);
const rightRandom = randomNum(90);
const operators = operations[randomNum(1)]; 
console.log('What is the result of the expression?')
for (let i = 0; i < 3; i++) {
console.log(`Question: ${leftRandom} ${operators} ${rightRandom} `)
const userAnswer = readlineSync.question('Your Answer:');
const correctAnswer = 

}
}
gameCalc()
export default gameCalc();