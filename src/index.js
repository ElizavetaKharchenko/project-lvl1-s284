import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const maxNumberOfRounds = 3;
let roundCount = 0;

const play = (questionAndAnswer) => {
  if (roundCount >= maxNumberOfRounds) {
    return true;
  }
  const newQuestion = questionAndAnswer();
  const askQuestion = car(newQuestion);
  const correctAnswer = cdr(newQuestion);
  console.log(`Question: ${askQuestion}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    roundCount += 1;
    return play(questionAndAnswer);
  }
  console.log(`Sorry, '${userAnswer}' is wrong answer`);
  return false;
};

const gameFlow = (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const isWin = play(questionAndAnswer);
  if (isWin) {
    return console.log(`Congratulations, ${name}!`);
  }
  return console.log(`Let's try again, ${name}!`);
};
export default gameFlow;
