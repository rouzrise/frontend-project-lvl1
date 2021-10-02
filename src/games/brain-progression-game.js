import {
  askQuestion,
  checkAnswer,
  getRandomInt,
  init,
  receiveAnswer,
} from '../brain-actions.js';

function makeProgression(firstNum, step, length) {
  const progressionArr = [];
  for (let i = 1; i <= length; i += 1) {
    const elem = firstNum + step * (i - 1);
    progressionArr.push(elem);
  }
  return progressionArr;
}

function setProgression() {
  const MIN_PORGRESSION_NUM = 1;
  const MAX_PROGRESSION_NUM = 100;
  const MIN_STEP_NUM = 1;
  const MAX_STEP_NUM = 10;
  const MIN_PROGRESSION_LENGTH = 5;
  const MAX_PROGRESSION_LENGTH = 10;
  const firstProgressionNum = getRandomInt(MIN_PORGRESSION_NUM, MAX_PROGRESSION_NUM);
  const progressionStep = getRandomInt(MIN_STEP_NUM, MAX_STEP_NUM);
  const progressionLength = getRandomInt(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  return makeProgression(firstProgressionNum, progressionStep, progressionLength);
}

function playProgressionGame() {
  const progression = setProgression();
  const instruction = 'What number is missing in the progression?';
  const elemIndex = getRandomInt(0, progression.length - 1);
  const hiddenProgressionElem = progression[elemIndex];
  progression[elemIndex] = '?';
  askQuestion(instruction, progression.join(', '));
  const userAnswer = parseInt(receiveAnswer(), 10);
  return checkAnswer(userAnswer, hiddenProgressionElem);
}

const initProgressionGame = () => {
  init(playProgressionGame);
};

export default initProgressionGame;
