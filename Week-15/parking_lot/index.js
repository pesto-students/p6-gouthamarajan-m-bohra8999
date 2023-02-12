const readline = require('readline');
const parkingLotInstance = require('./parkingLot');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  rl.on('line', async (input) => {
    input = input.split(' ');
    switch (input[0]) {
      case 'create_parking_lot':
        try {
          const result = parkingLotInstance.createParkingLot(input[1]);
          console.log(result);
        } catch (e) {
          console.log(`error occured ==> ${e}`);
        }
        break;

      case 'park':
        try {
          const result = await parkingLotInstance.park(input[1].trim(), input[2].trim());
          console.log(result);
        } catch (e) {
          console.log(`error occured ==> ${e}`);
        }
        break;

      case 'leave':
        try {
          const result = await parkingLotInstance.leave(input[1]);
          console.log(result);
        } catch (e) {
          console.log(`error occured ==> ${e}`);
        }
        break;

      case 'status':
        try {
          const result = await parkingLotInstance.status();
          result && console.log(result);
        } catch (e) {
          console.log(`error occured ==> ${e}`);
        }
        break;

      default:
        console.log(
          'Seems like an issue with command that you typed , please note predeifed commands are case sensitive and matched as per the description!'
        );
    }
  });
};

rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

main();
