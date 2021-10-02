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
  const operatorArr = ['+', '-', '*'];
  const firstNum = getRandomInt(MIN_NUM, MAX_NUM);
  const secondNum = getRandomInt(MIN_NUM, MAX_NUM);
  const operator = operatorArr[Math.floor(Math.random() * operatorArr.length)];
  return `${firstNum}${operator}${secondNum}`;
}

function findCorrectAnswer(expressionString) {
  /* eslint-disable no-eval */
  return eval(expressionString);
  /* eslint-enable no-eval */
}

function playCalcGame() {
  const task = setTask();
  const instruction = 'What is the result of the expression?';
  askQuestion(instruction, task);
  const userAnswer = parseInt(receiveAnswer(), 10);
  const correctAnswer = findCorrectAnswer(task);
  return checkAnswer(userAnswer, correctAnswer);
}

const initCalcGame = () => {
  init(playCalcGame);
};

export default initCalcGame;
