import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandom from '../utils';

const description = 'Is this number prime?';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (div) => {
    if (div > number / 2) {
      return true;
    } else if (number % div === 0) {
      return false;
    }
    return iter(div + 1);
  };
  return iter(2);
};

const rightAnswer = num => (isPrime(num) ? 'yes' : 'no');

const questionAndAnswer = () => {
  const question = getRandom(2, 500);
  const correctAnswer = rightAnswer(question);

  return cons(question, correctAnswer);
};


const game = () => {
  gameFlow(description, questionAndAnswer);
};
export default game;
