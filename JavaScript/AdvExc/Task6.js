//  Task 1
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

//  Task 2

function rangeIterator(start, end) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return {
          value: current++,
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}

//  Task 3

function* fibonacciGenerator() {
  let a = 0,
    b = 1;
  while (true) {
    yield b;
    [a, b] = [b, a + b];
  }
}
