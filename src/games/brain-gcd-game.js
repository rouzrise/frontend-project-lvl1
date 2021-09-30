import {
  askQuestion,
  checkAnswer,
  getRandomInt,
  init,
  receiveAnswer,
} from '../brain-actions.js';

function setTask() {
  const MIN_NUM = 1;
  const MAX_NUM = 100;
  const firstNum = getRandomInt(MIN_NUM, MAX_NUM);
  const secondNum = getRandomInt(MIN_NUM, MAX_NUM);
  return `${firstNum} ${secondNum}`;
}

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

function playGcdGame() {
  const task = setTask();
  const instruction = 'Find the greatest common divisor of given numbers.';
  askQuestion(instruction, task);
  const userAnswer = receiveAnswer();
  const numsArr = task.split(' ');
  const firstNum = numsArr[0];
  const secondNum = numsArr[1];
  const correctAnswer = gcd(firstNum, secondNum).toString();
  return checkAnswer(userAnswer, correctAnswer);
}

const initGcdGame = () => {
  init(playGcdGame);
};

export default initGcdGame;
