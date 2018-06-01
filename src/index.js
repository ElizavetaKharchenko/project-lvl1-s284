import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const play = (gamePair, roundCount = 0) => {
  if (roundCount >= 3) {
    return true;
  }
  const newQuastion = gamePair();
  console.log(`Question: ${car(newQuastion)}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === cdr(newQuastion)) {
    console.log('Correct!');
    return play(gamePair, roundCount + 1);
  }
  console.log(`Sorry, '${userAnswer}' is wrong answer`);
  return false;
};

const gameFlow = (description, gamePair) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const gameWin = play(gamePair);
  const lastMessage = gameWin ?
    `Congratulations, ${name}!` :
    `Let's try again, ${name}!`;
  console.log(lastMessage);
};
export default gameFlow;
