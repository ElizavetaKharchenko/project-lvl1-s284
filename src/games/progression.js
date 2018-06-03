import { cons } from 'hexlet-pairs';
import gameFlow from '..';
import getRandom from '../utils';

const description = 'What number is missing in this progression?';

const getProgression = (firstNum, length, step) => {
  const progressionArray = [];
  let currentNum = firstNum;
  progressionArray.push(currentNum);
  while (progressionArray.length < length) {
    currentNum += step;
    progressionArray.push(currentNum);
  }
  return progressionArray;
};

const progressionLength = 10;

const questionAndAnswer = () => {
  const firstNum = getRandom(1, 4);
  const step = getRandom(1, 8);
  const progression = getProgression(firstNum, progressionLength, step);
  const hiddenPosition = getRandom(1, 9);
  const correctAnswer = `${progression[hiddenPosition]}`;
  progression[hiddenPosition] = '..';
  const question = `${progression}`;

  return cons(question, correctAnswer);
};

const game = () => {
  gameFlow(description, questionAndAnswer);
};
export default game;
