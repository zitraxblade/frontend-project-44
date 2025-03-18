import readlineSync from 'readline-sync';
// Функция приветсвования.
function helloGame() {
    console.log('Welcome to the Brain Games!');
    const nameGame = readlineSync.question('May i have your name?');
    console.log(`Hello, ${nameGame}!`)
    return nameGame;
}
const nameGame = helloGame();

// Операции
const operations = ['+' , '*' , '-'];
    
// Функция рандомного числа.
const max  = 100;
const randomNum = (maxes = max, min = 0) => {
    return Math.round(Math.random() * (maxes - min) );
};

// Функция калькулятора.
const calculator = (num1 , num2 , operator) =>{
    switch ( operator ) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
    }
}
// Игра.
const gameCalc = () => {
;
console.log('What is the result of the expression?')

for (let i = 0; i < 3; i++) {
const leftRandom = randomNum(100);
const rightRandom = randomNum(90);
const operators = operations[randomNum(2)];
console.log(`Question: ${leftRandom} ${operators} ${rightRandom} `)
const userAnswer = readlineSync.question('Your Answer:');
const corectAnswer = calculator(leftRandom , rightRandom , operators);
if (corectAnswer == userAnswer.trim()) {
    console.log('Correct!');
    
} else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${corectAnswer}.\n Let's try again ${nameGame}`)
    return false;
}

}
console.log(`Congratulations, ${nameGame}`);
};
 gameCalc();