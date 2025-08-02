/* 
1. Write a function named 'makeTea' that takes one parameter,
'typeofTea' , and returns a string like "Making green tea" 
when called with "green tea". 
Store the result in a variable named 'teaOrder'
*/

function makeTea(typeofTea) {
  return `Making ${typeofTea}`;
}

let teaOrder = makeTea("lemon tea");
console.log(teaOrder);

/* 
2. Create a function named 'orderTea' that takes one parameter,
'teaType'. Inside this function, create another function named 'confirmOrder
that returns a message like "Order confirmed for chai".
Call 'confirmOrder'from within 'orderTea' and return the result.
 */

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);
// JS Execution Context

/* 
3. Write an arrow function named 'calculatedTotal' that
takes two parameters 'price' and 'quantity'. The function should return the 
total cost by multiplying the 'price' and 'quantity'.
Store the result in a variable named 'totalCost'
*/

// const calculatedTotal = (price, quantity) => {
//   return price * quantity;
// };
// Another way
const calculatedTotal = (price, quantity) => price * quantity;

let totalCost = calculatedTotal(499, 100);
console.log(totalCost);

/* 

4. Write a function named 'processTeaOrder' that takes
another function , 'makeTea' , as a parameter and calls it 
with argument 'earl grey'.
Return the result of calling 'makeTea'.
*/


function makeTea(typeofTea) {
  return `maketea: ${typeofTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
console.log(order);


// higher order functions or first class functions
/* 
A higher order function is a function that takes one or more functions
as arguments, or returns a function as its result.
*/
/*
 */

/* 

5. Write a function named 'createTeaMaker' that returns
another function. The returned function should take 
one parameter,'teaType, and return a message like "Making green tea".
Store the returned function in a variable named 'teaMaker' and call it
with  "green tea"
*/


function createTeaMaker(name) {
  return function (teaType) {
    return `${name} making ${teaType}`;
  };
}

let teaMaker = createTeaMaker("momin");
let result = teaMaker("green tea")
console.log(result);


// Closure in Javascript
// https://www.geeksforgeeks.org/javascript/closure-in-javascript/
// functions are First Class Citizen
// https://www.geeksforgeeks.org/javascript/what-is-first-class-citizen-in-javascript/
