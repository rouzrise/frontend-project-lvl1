import readlineSync from 'readline-sync';

function onWrongAnswer(wrong, right) {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${right}'.`);
  return false;
}

function onRightAnswer() {
  console.log('Correct');
  return true;
}

export function askQuestion(phrase, task) {
  console.log(phrase);
  console.log('Question', task);
}

export function receiveAnswer() {
  return readlineSync.question('Your answer: ');
}

export function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    return onRightAnswer();
  } return onWrongAnswer(userAnswer, correctAnswer);
}

export function init(name, brainFunction) {
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
