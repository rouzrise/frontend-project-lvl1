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

function findCorrectAnswer(numsString) {
  const numsArr = numsString.split(' ');
  const firstNum = parseInt(numsArr[0], 10);
  const secondNum = parseInt(numsArr[1], 10);
  return gcd(firstNum, secondNum);
}

function playGcdGame() {
  const task = setTask();
  const instruction = 'Find the greatest common divisor of given numbers.';
  askQuestion(instruction, task);
  const userAnswer = parseInt(receiveAnswer(), 10);
  const correctAnswer = findCorrectAnswer(task);
  return checkAnswer(userAnswer, correctAnswer);
}

const initGcdGame = () => {
  init(playGcdGame);
};

export default initGcdGame;
