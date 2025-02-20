import readlineSync from 'readline-sync'

 console.log('Welcome to the Brain Games!');
  const user = () =>
     {  const name = readlineSync.question('May I haver your name?');
    return `Hello, ${name}!`
}
export default user;
