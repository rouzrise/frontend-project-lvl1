#!/usr/bin/env node

import makeDialog from '../src/cli.js';
import initEvenGame from '../src/games/brain-even-game.js';

const name = makeDialog();
initEvenGame(name);
