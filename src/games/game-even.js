import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandom from '../utils';

const isEven = num => (num % 2 === 0);

const rightAnswer = num => (isEven(num) ? 'yes' : 'no');

const queAndAnswer = () => {
  const question = getRandom(1, 99);
  const correctAnswer = rightAnswer(question);
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  gameFlow(description, queAndAnswer);
};
export default game;
