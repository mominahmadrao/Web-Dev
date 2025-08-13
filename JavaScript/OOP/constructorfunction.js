function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
let cat = new Animal("Cat");

// console.log(cat.sound());

// console.log(dog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be calld with new keyword.");
  }
  this.name = name;
}

let tea = new Drink("tea");
// let coffee = Drink("coffee"); // error without new 

