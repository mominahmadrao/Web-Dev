function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

function rateLimiter(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    // n JavaScript, ...args is called the rest parameter syntax.
    const now = Date.now();
    if (now - lastCall < limit) {
      return "Rate limit exceeded";
    }

    lastCall = now;
    return fn(...args);
  };
}

function memoize(fn) {
  const cache = {}; 

  return function (...args) {   
    const key = args.join(","); 
    //  join method combine all elements into single string wit a seperator you choose
    if (cache[key] !== undefined) {
      console.log("Returning from cache:", cache[key]);
      return cache[key];
    }
    const result = fn(...args); 
    cache[key] = result;        
    return result;
  };
}
