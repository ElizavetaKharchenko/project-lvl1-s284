import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandom from '../utils';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const questAndAnswer = () => {
  const firstNum = getRandom(1, 99);
  const secondNum = getRandom(1, 99);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcd(firstNum, secondNum));

  return cons(question, correctAnswer);
};

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  gameFlow(description, questAndAnswer);
};
export default game;
