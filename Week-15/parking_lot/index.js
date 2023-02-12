const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  rl.on('line', async (input) => {
    input = input.split(' ');
    console.log(input);
  });
};

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

main();
