// Task 1
const person = {
  name: "Alice",
  introduce: function () {
    return "Hi, my name is " + this.name;
  },
};

const boundIntroduce = person.introduce.bind(person);

// Task 2
function introduce() {
  return `my name is ${this.name}`;
}

// Task 3
function sum(a, b) {
  return (a + b) * this.mutliplier;
}

const context1 = {mutliplier: 2 };
const context2 = {mutliplier : 5}
