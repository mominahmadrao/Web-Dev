let car = {
  make: "Toyota",
  model: "Camry",
  year: "2023",
  start: function (params) {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Animal(type) {
  this.type = type;
}

// prototypal chain
Animal.prototype.speak = function name() {
  return `${this.type} makes a sound`;
};

Array.prototype.momin = function () {
  return `Custom method ${this}`;
};

let myNewArray = [1, 2, 3];
// console.log(myNewArray.momin());

class Vehicle {
  // function go inside calss becomes "method"
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Inheritance

class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example.`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation ( restrict direct acces  to the object data)

class BankAccount {
  // '#' stops direct access
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return `$ ${this.#balance}`;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction

class CoffeeMachine {
  start() {
    //  call DB
    // filter value
    return `Starting the machine......`;
  }

  brewCoffee() {
    // complex calculation
    return `Brewing Coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgtwo = this.brewCoffee();
    return `${msgone} + ${msgtwo}`;
  }
}

let myMachine = new CoffeeMachine();

// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

// behaviour of method is different

// console.log(bird.fly());
// console.log(penguin.fly());

// static method

class Calculator {
  // method called by only class
  static add(a, b) {
    return a + b;
  }
}

let miniCalc = new Calculator();
console.log(Calculator.add(2, 3));
// console.log(miniCalc.add(2,3));

// Getters & Setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
      
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid value");
    } else {
      this.#salary = value; // pseudo-private variable '._salary' used as convention but not actually private
    }
  }
}
let emp = new Employee("Alice", -5000);
console.log(emp.salary);
emp.salary = 6000;


