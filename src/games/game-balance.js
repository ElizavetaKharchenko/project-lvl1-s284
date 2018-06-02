import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandom from '../utils';

const description = 'Balance the given number.';

const getSumOfDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < String(numAsStr).length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit;
  }
  return sum;
};

const getDigitsCount = num => String(num).length;

const iterBalance = (sum, count, resultStr) => {
  if (count === 0) {
    return Number(resultStr);
  }
  const newDigit = Math.floor(sum / count);
  const newResultStr = resultStr + String(newDigit);
  return iterBalance(sum - newDigit, count - 1, newResultStr);
};

const queAndAnswer = () => {
  const number = getRandom(100, 9999);
  const question = `${number}`;
  const sumOfDigits = getSumOfDigits(number);
  const digitsCount = getDigitsCount(number);
  const correctAnswer = String(iterBalance(sumOfDigits, digitsCount, ''));

  return cons(question, correctAnswer);
};

const game = () => {
  gameFlow(description, queAndAnswer);
};
export default game;
