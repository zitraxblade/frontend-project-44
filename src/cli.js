import readlineSync from 'readline-sync'

  const user = () => {
    console.log('Brain-Games')
console.log('Welcome to the Brain Games!');
      const name = readlineSync.question('May I haver your name?');
    return console.log(`Hello, ${name}!`); 
}

export default user;
