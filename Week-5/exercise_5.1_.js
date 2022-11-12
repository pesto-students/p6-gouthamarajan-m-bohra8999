async function doTask1(task) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Executing task 1...${task}`);
      resolve(console.log(`Task 1 Finished...${task}`));
    }, 4000);
  });
}

async function doTask2(task) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Executing task 2...${task}`);
      resolve(console.log(`Task 2 Finished...${task}`));
    }, 2000);
  });
}

async function doTask3(task) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Executing task 3...${task}`);
      resolve(console.log(`Task 3 Finished...${task}`));
    }, 1000);
  });
}

async function func1() {
  const res1 = await doTask1('call friend');
  const res2 = await doTask2('write email');
  const res3 = await doTask3('complete assignments');
}

func1();

function* func2() {
  yield doTask1('gen func -- call friend');
  yield doTask2('gen func -- write email');
  yield doTask3('gen func -- complete assignments');
}

const itr = func2();

itr.next();
itr.next();
itr.next();
// console.log(itr.return());
