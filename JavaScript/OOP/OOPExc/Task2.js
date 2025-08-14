function Person(name, age) {
  this.name = name;
  if (typeof age !== "number" || age <= 0 ) {
     throw new Error("Age must be a positive number");
     
  } else {
  this.age = age;    
  }
  this.greet = function (params) {
    return `Hello, my name is ${this.name}`;
  };
}


