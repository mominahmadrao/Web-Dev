// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a + b;
}

// Subtract small value from larger one
function subtract() {
    return Math.abs(a - b);
}

function multiply() {
    return a * b;
}

// Divide larger value by small
function divide() {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return max / min;
}

// Increase value of a by 1
function increment() {
    return a + 1;
}

// Decrease value of b by 1
function decrement() {
    return b - 1;
}

// Divide larger value by small to find the reminder
function reminder() {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return max % min;
}



