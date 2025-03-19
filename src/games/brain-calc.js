import readlineSync from 'readline-sync';
// Операторы.
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
