import { cons } from 'hexlet-pairs';
import { gameFlow } from '..';

const getRandom = () => Math.floor((Math.random() * 100) + 1);

const gamePair = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  const randomOperator = operators[randomIndex];
  const firstNum = getRandom();
  const secondNum = getRandom();
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  let correctAnswer;

  switch (randomOperator) {
    case '+':
      correctAnswer = firstNum + secondNum;
      correctAnswer = correctAnswer.toString();
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      correctAnswer = correctAnswer.toString();
      break;
    default:
      correctAnswer = firstNum * secondNum;
      correctAnswer = correctAnswer.toString();
  }
  return cons(question, correctAnswer);
};

const game = () => {
  const description = 'What is the result of the expression?';
  gamePair();
  gameFlow(description, gamePair);
};
export default game;
