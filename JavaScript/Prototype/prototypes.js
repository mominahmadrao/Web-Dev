let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

// console.log(`computer`, computer.__proto__); // 'dunder' prototype
// Every object in JavaScript has a built-in property, which is called its prototype.
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes

// console.log('lenovo' , lenovo.__proto__);
const genericCar = {
    tyres: 4
}

const tesla = {
    driver : "AI"
}

Object.setPrototypeOf(tesla , genericCar)

console.log(`tesla`, Object.getPrototypeOf(tesla));
 


