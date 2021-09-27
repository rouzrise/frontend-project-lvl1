#!/usr/bin/env node

import makeDialog from '../src/cli.js';
import playBrainEven from '../src/brain-even-logic.js';

const name = makeDialog();
playBrainEven(name);
