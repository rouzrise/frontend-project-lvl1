import {
  askQuestion,
  checkAnswer,
  getRandomInt,
  init,
  receiveAnswer,
} from '../brain-actions.js';

function setTask() {
  const MIN_NUM = 1;
  const MAX_NUM = 10000;
  return getRandomInt(MIN_NUM, MAX_NUM);
}

function findCorrectAnswer(task) {
  return task % 2 === 0 ? 'yes' : 'no';
}

function playEvenGame() {
  const task = setTask();
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no"';
  askQuestion(instruction, task);
  const userAnswer = receiveAnswer();
  const correctAnswer = findCorrectAnswer(task);
  return checkAnswer(userAnswer, correctAnswer);
}

const initEvenGame = () => {
  init(playEvenGame);
};

export default initEvenGame;
