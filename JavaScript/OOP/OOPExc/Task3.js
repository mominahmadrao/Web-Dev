class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
    return `The vehicle is moving`;
  }

  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }
  /**@override */
  move() {
    return `The car is driving`;
  }
}
