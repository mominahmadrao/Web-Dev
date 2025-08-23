const person = {
  name: "Momin",

  greet() {
    console.log(`Hi, i am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Jhon" });
boundGreet();

//  bind, call and apply
// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/

// call

// func.call(thisObj, args1, args2, ...)

function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function setBrand(brand) {
  Car.call(this, "convertible", "petrol");
  this.brand = brand;
  console.log("Car details = ", this);
}

function definePrice(price) {
  Car.call(this, "convertible", "diesel");
  this.price = price;
  console.log("Car details = ", this);
}

const newBrand = new setBrand("Brand1");
const newCarPrice = new definePrice(100000000);

// Apply
// func.apply(thisObj, argumentsArray);