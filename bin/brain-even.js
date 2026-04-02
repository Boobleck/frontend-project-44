import { BrainGame } from '../src/cli.js';
import readlineSync from 'readline-sync'; 
const name = BrainGame();
export function BrainEven() {
    console.log('Question: 15')
    const answer = readlineSync.question('Your answer is: ');
    if (answer == "No", "no") console.log("Correct!");
    else console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`),
        console.log(`Let's try again, ${name}`)
}