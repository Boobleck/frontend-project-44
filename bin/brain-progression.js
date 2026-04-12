#!/usr/bin/env node
import readlineSync from 'readline-sync';
function generateProgression() {
    const length = Math.floor(Math.random() * 6) + 5; 
    const start = Math.floor(Math.random() * 20) + 1; 
    const step = Math.floor(Math.random() * 9) + 1; 

    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }

    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];

    const questionArray = [...progression];
    questionArray[hiddenIndex] = '..';
    const question = questionArray.join(' ');
    
    return { question, correctAnswer };
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let correctAnswers = 0;
while (correctAnswers < 3) {
    const { question, correctAnswer } = generateProgression();
    
    console.log(`Question: ${question}`);
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