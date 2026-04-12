#!/usr/bin/env node
import readlineSync from 'readline-sync';
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // числа от 1 до 100
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

let correctAnswers = 0;

while (correctAnswers < 3) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const correctAnswer = gcd(num1, num2);
    
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (Number(userAnswer) === correctAnswer) {
        console.log('Correct!');
        correctAnswers++;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        process.exit(0);
    }
}

console.log(`Congratulations, ${name}!`);