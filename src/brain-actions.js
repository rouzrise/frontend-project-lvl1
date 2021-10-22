import readlineSync from 'readline-sync';
import makeDialog from './cli.js';

function onWrongAnswer(wrong, right) {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${right}'.`);
  return false;
}

function onRightAnswer() {
  console.log('Correct');
  return true;
}

export function getRandomInt(min, max) {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

export function askQuestion(phrase, task) {
  console.log(phrase);
  console.log('Question:', task);
}

export function receiveAnswer() {
  return readlineSync.question('Your answer: ');
}

export function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    return onRightAnswer();
  } return onWrongAnswer(userAnswer, correctAnswer);
}

export function init(brainFunction) {
  const name = makeDialog();
  let count = 0;
  while (count < 3) {
    const res = brainFunction();
    if (res) {
      count += 1;
    } else {
      count = 0;
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
}
