import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
}

function onWrongAnswer(wrong, right) {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${right}'.`);
  return false;
}
function onRightAnswer() {
  console.log('Correct');
  return true;
}

function checkAnswer(isEven, answer) {
  if (isEven) {
    if (answer !== 'yes') {
      return onWrongAnswer(answer, 'yes');
    } return onRightAnswer();
  }
  if (answer !== 'no') {
    return onWrongAnswer(answer, 'no');
  } return onRightAnswer();
}

function playEvenBody() {
  const MIN_NUM = 1;
  const MAX_NUM = 10000;
  const randomNum = getRandomInt(MIN_NUM, MAX_NUM);
  const isEven = randomNum % 2 === 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  console.log('Question: ', randomNum);
  const answer = readlineSync.question('Your answer: ');
  return checkAnswer(isEven, answer);
}

const playBrainEven = (name) => {
  let count = 0;
  while (count < 3) {
    const res = playEvenBody();
    if (res) {
      count += 1;
    } else {
      count = 0;
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playBrainEven;
