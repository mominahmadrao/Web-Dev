/**
 * @param {number[]} arr
 */
const squareNumbers = (arr) => arr.map((num) => num * num);
/**
 * @param {number[]} arr
 */
const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

/**
 * @param {number[]} arr
 */
const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0); // '0' is intitial value of accumulator

/* Syntax of .reduce()
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
); */

/**
 * @param {{ name : string }[]} arr - array of objects with a 'name'
 */
const getNames = (arr) => arr.map((obj) => obj.name);

/**
 * @param {string[]} arr
 */

const findLongestWord = (arr) => arr.reduce((longest , current) => (current.length > longest.length) ? current : longest , "") ;
