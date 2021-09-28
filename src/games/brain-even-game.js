import {
  askQuestion,
  receiveAnswer,
  checkAnswer,
  init,
} from '../brain-actions.js';

function getRandomInt(min, max) {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function setTask() {
  const MIN_NUM = 1;
  const MAX_NUM = 10000;
  return getRandomInt(MIN_NUM, MAX_NUM);
}

function playEvenGame() {
  const task = setTask();
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no"';
  askQuestion(instruction, task);
  const userAnswer = receiveAnswer();
  const correctAnswer = task % 2 === 0 ? 'yes' : 'no';
  return checkAnswer(userAnswer, correctAnswer);
}

const initEvenGame = () => {
  init(playEvenGame);
};

export default initEvenGame;
