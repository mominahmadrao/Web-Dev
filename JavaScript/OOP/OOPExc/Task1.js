function Animal() {}
Animal.prototype.speak = function () {
  return `Animal speaking`;
};

function Dog(name) {
  this.name = name;
}
// dog ---> Dog.prototype ---> Animal.prototype ---> Object.prototype--->null ( Chaining)

Dog.prototype = Object.create(Animal.prototype);
// ensure prototype correctly points to DOG
Dog.prototype.constructor == Dog;

Dog.prototype.bark = function () {
  return `Woof!`
}
// let dog = new Dog("Bull Dog")

// console.log(dog.name);
