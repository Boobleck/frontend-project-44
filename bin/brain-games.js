#!/usr/bin/env node
import {BrainGame} from '../src/cli.js';
// BrainGame();
// console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
import {BrainEven} from './brain-even.js';
import {BrainEvenRaundTwo} from './brain-even.js';
import {BrainEvenRaundThree} from './brain-even.js';
function play() {
if (BrainEven()=== false) return;
if (BrainEvenRaundTwo()=== false) return;
if (BrainEvenRaundThree()=== false) return;
}
play();