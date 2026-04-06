import { BrainGame } from '../src/cli.js';
import readlineSync from 'readline-sync'; 
const name = BrainGame();
export function BrainEven() {
    console.log('Question: 15')
    const answer = readlineSync.question('Your answer is: ') .toLowerCase();
    if (answer === "no") {
        console.log("Correct!");
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`),
        console.log(`Let's try again, ${name}`);
        return false;
    }
}
export function BrainEvenRaundTwo() {
    console.log('Question: 6')
    const answer = readlineSync.question('Your answer is: ') .toLowerCase();
    if (answer === "yes"){ 
        console.log("Correct!");
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`),
        console.log(`Let's try again, ${name}`);
        return false;
    }
}
export function BrainEvenRaundThree() {
    console.log('Question: 7')
    const answer = readlineSync.question('Your answer is: ') .toLowerCase();
    if (answer === "no") {
        console.log("Correct!");
        console.log(`Congratulations, ${name}`)
        return false;
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`),
        console.log(`Let's try again, ${name}`);
        return false;
    }
}   