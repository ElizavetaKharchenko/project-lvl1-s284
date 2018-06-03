import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandom from '../utils';

const description = 'Is this number prime?';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
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
