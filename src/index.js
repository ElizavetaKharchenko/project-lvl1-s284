import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const play = (queAndAnswer, roundCount = 0) => {
  const maxRounds = 3;
  if (roundCount >= maxRounds) {
    return true;
  }
  const newQuestion = queAndAnswer();
  const askQuestion = car(newQuestion);
  const correctAnswer = cdr(newQuestion);
  console.log(`Question: ${askQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return play(queAndAnswer, roundCount + 1);
  }
  console.log(`Sorry, '${userAnswer}' is wrong answer`);
  return false;
};

const gameFlow = (description, queAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const isGameWin = play(queAndAnswer);
  if (isGameWin === true) {
    return console.log(`Congratulations, ${name}!`);
  }
  return console.log(`Let's try again, ${name}!`);
};
export default gameFlow;
