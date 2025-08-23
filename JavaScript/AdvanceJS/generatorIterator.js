// https://www.freecodecamp.org/news/yield-yield-how-generators-work-in-javascript-3086742684fc/

function* numberGenerator(params) {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();

console.log(gen.next().value);

