function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function memoize(func) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
    } else {
      let result = func(...args);
      cache.set(key, result);
    }
    return cache.get(key);
  };
}

let memoizedFib = memoize(fibonacci);

function timeTaken(fn) {
  console.time();
  fn();
  console.timeEnd();
}

timeTaken(() => memoizedFib(25));
timeTaken(() => memoizedFib(25));
timeTaken(() => memoizedFib(30));
timeTaken(() => memoizedFib(25));
