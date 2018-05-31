import { cons } from 'hexlet-pairs';
import { gameFlow } from '..';

const getRandom = () => Math.floor((Math.random() * 100) + 1);
const isEven = num => (num % 2 === 0);

const rightAnswer = (num) => {
  if (isEven(num) === true) {
    return 'yes';
  }
  return 'no';
};
const gamePair = () => {
  const question = getRandom();
  const correctAnswer = rightAnswer(question);
  return cons(question, correctAnswer);
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  gamePair();
  gameFlow(description, gamePair);
};
export default game;
