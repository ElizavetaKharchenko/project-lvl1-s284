import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const questionsForUser = (gamePair, name, roundCount = 0) => {
  if (roundCount >= 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const newQuastion = gamePair();
  console.log(`Question: ${car(newQuastion)}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === cdr(newQuastion)) {
    console.log('Correct!');
    return questionsForUser(gamePair, name, roundCount + 1);
  }
  console.log(`Sorry, '${userAnswer}' is wrong answer`);
  return questionsForUser(gamePair, name, roundCount + 1);
};

export const gameFlow = (description, gamePair) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  questionsForUser(gamePair, name);
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
};
export default askName;
