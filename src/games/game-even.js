import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import { getRandom, isEven } from '../utils';

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
  gameFlow(description, gamePair);
};
export default game;
