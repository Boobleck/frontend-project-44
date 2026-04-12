import { BrainGame } from '../src/cli.js';
import readlineSync from 'readline-sync';

const name = BrainGame();
let levelCount = 0;

function generateNewQuestion() {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const operations = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    const operation = operations[randomIndex];
    
    let result;
    if (operation === '+') {
        result = a + b;
    } else if (operation === '-') {
        result = a - b;
    } else if (operation === '*') {
        result = a * b;
    } else if (operation === '/') {
        result = a / b;
    }
    
    return [a, b, operation, result];
}

function playRound() {
    const [a, b, operation, result] = generateNewQuestion();
    console.log(`Question: ${a} ${operation} ${b}`);
    const answer = readlineSync.question('Your answer is: ');
    
    if (Number(answer) === result) {
        console.log("Correct!");
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result}.`);
        console.log(`Let's try again, ${name}`);
        return false;
    }
}
while (levelCount < 3) {
    const success = playRound();
    if (success) {
        levelCount++;
    } else {
        process.exit(0); 
    }
}

console.log(`Congratulations, ${name}!`);