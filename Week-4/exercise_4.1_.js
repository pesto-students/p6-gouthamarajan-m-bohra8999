function MyPromise(executorFunc) {
  let onResolve;
  let onReject;
  let isCalled = false; // to prevent further resolve or reject calls
  let isFullfilled = false; // handles async senario when then handler is registered later but resolve calls first
  let isRejected = false; // handles async senario when catch handler is registered later but reject calls first
  let value; // for later execution of then handler
  let error; // for later execution of catch handler

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFullfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === 'function' && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === 'function' && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }

  executorFunc(resolve, reject);
}

function getNumber(delay) {
  return (resolve, reject) => {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum % 5 === 0) {
      setTimeout(() => reject(randomNum), delay);
    } else {
      setTimeout(() => resolve(randomNum), delay);
    }
  };
}

let delay = 1000; // in ms
let jsPromise = new Promise(getNumber(delay)); // using JS Promise
let polyfillPromise = new MyPromise(getNumber(delay)); // using Polyfill

jsPromise
  .then((x) => console.log('inside JS promise: Resolved', x))
  .catch((err) => console.log('inside JS promise: Rejected', err));

polyfillPromise
  .then((x) => console.log('inside polyfill Promise: Resolved', x))
  .catch((err) => console.log('inside polyfill Promise: Rejected', err));
