// Task 1
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  return "Animal sound";
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return "Woof!";
};

//  Task 2
function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function() {
  return this.color;
};

function Rectangle(width, height, color) {
  Shape.call(this, color); 
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
