function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

function reverseArray(arr) {
  return arr.slice().reverse(); // .reverse() method changes the orignal array .slice() creates shallow copy of arr
}

function findMax(arr) {
  return Math.max(...arr); // ... spread operator break array into individual value
}

function removeDuplicates(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    if (!results.includes(arr[i])) {
      results.push(arr[i]);
    }
  }
  return results;
//    shortcut way 
//   return [... new Set(arr); // Set is an object that stores unique values only
}

// Takes a nested array and returns a single flattened array
function flattenArray(arr) {
  return arr.flat(Infinity);
}
