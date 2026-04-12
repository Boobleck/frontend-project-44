#!/usr/bin/env node
import readlineSync from 'readline-sync';
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // числа от 1 до 100
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let correctAnswers = 0;
while (correctAnswers < 3) {
    const number = getRandomNumber();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctAnswers++;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        process.exit(0);
    }
}

console.log(`Congratulations, ${name}!`);