import readlineSync from 'readline-sync'

const user = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I haver your name?');
console.log(`Hello, ${name}!`); 
}

export default user;
