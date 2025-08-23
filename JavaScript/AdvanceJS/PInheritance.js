// prototypal Inheritance

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let momin = new Person("momin");
momin.greet();


