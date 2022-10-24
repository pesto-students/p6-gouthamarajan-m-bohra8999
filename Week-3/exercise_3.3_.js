function createIncrement() {
  let count = 0; // Declaring count
  function increment() {
    count++;
  }
  let message = `Count is ${count}`; // message string =>'Count is 0'
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); // Incrementing count
increment(); // Incrementing count
increment(); // Incrementing count
log(); // It will log 'Count is 0'
