function stringToNumber(input) {
  const num = Number(input);
  return isNaN(num) ? "Not a number" : num;
}
function flipBoolean(input) {
  if (typeof input == "string" || isNaN(input)) {
    return "Not possible";
  }
  return !Boolean(input);
}

function whatAmI(input) {
  return `I'm a ${typeof input}!`
}

function isItTruthy(input) {
  if (input) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}

// console.log(whatAmI('123'));
// console.log(whatAmI(undefined));
// console.log(whatAmI(57));
// console.log(whatAmI(true));

// console.log(flipBoolean("abc"));
// console.log(flipBoolean(123));
// console.log(flipBoolean("abc"));
// console.log(flipBoolean(123));
// console.log(stringToNumber("1abc"));
// console.log(stringToNumber("123"));
