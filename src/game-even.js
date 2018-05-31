import readlineSync from 'readline-sync';

const getRandom = () => Math.floor((Math.random() * 100) + 1);
const isEven = num => (num % 2 === 0);

export const correctAnswer = (num) => {
  if (isEven(num) === true) {
    return 'yes';
  }
  return 'no';
};

export const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let roundCount = 1; roundCount <= 3; roundCount += 1) {
    const question = getRandom();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // userAnswer = userAnswer.toLowerCase();
    if (userAnswer.toLowerCase() === correctAnswer(question)) {
      console.log('Correct!');
    } else {
      console.log(`Sorry, '${userAnswer}' is wrong answer`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
