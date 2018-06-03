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

const getBalanceNum = (num) => {
  let balanceNum = '';
  let sumOfDigits = getSumOfDigits(num);
  let digitsCount = getDigitsCount(num);
  for (; digitsCount > 0; digitsCount -= 1) {
    const newDigit = Math.floor(sumOfDigits / digitsCount);
    sumOfDigits -= newDigit;
    balanceNum += `${newDigit}`;
  }
  return balanceNum;
};

const questionAndAnswer = () => {
  const number = getRandom(100, 9999);
  const question = `${number}`;
  const correctAnswer = getBalanceNum(number);

  return cons(question, correctAnswer);
};

const game = () => {
  gameFlow(description, questionAndAnswer);
};
export default game;
