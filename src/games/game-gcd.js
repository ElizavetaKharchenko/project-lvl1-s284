import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import { getRandom } from '../utils';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const gamePair = () => {
  const firstNum = getRandom();
  const secondNum = getRandom();
  const question = `${firstNum} ${secondNum}`;
  let correctAnswer = gcd(firstNum, secondNum);
  correctAnswer = correctAnswer.toString();

  return cons(question, correctAnswer);
};

const game = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  gamePair();
  gameFlow(description, gamePair);
};
export default game;
