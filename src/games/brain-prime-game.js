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

function findCorrectAnswer(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
}

function playPrimeGame() {
  const task = setTask();
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  askQuestion(instruction, task);
  const userAnswer = receiveAnswer();
  const correctAnswer = findCorrectAnswer(task);
  return checkAnswer(userAnswer, correctAnswer);
}

const initPrimeGame = () => {
  init(playPrimeGame);
};

export default initPrimeGame;
