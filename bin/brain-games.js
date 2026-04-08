#!/usr/bin/env node
import {BrainGame} from '../src/cli.js';
BrainGame();

import {BrainEven, BrainEvenRaundTwo, BrainEvenRaundThree} from './brain-even.js';
function play() {
if (BrainEven()=== false) return;
if (BrainEvenRaundTwo()=== false) return;
if (BrainEvenRaundThree()=== false) return;
}
play();