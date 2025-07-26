// Number

let balance = 102
let anotherBalance = new Number(120)

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

let isActive = true
let isReallyActive = new Boolean(true) // not recommended

// null and undefined

// let firstName
let firstName = null
// console.log(firstName)
let lastName = undefined
// console.log(lastName);

// string

let myString = "hello"
let myString1 = "Hola"
let username = "momin"

let oldGreet = myString + " " + "momin"
let greetMessage = `Hello ${username} !`
let demoOne = `Value is ${2 * 2}`

let sm1 = Symbol("momin")
let sm2 = Symbol("momin")

console.log(sm1 == sm2)

// ;console.log(oldGreet)
// console.log(demoOne)

// console.log(greetMessage)
