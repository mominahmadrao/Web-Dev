/* 
1. Write a 'for' loop that loops through the array 
["green tea" , "black tea" , "chai" , "oolong tea"] and
stops the loop when it finds "chai"
   Store all teas before "chai" in a new array named
   'selectedTeas'.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] == "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}

console.log(selectedTeas)

/* 
2. Write a 'for' loop that loops through the array 
["London" , "New York" , "Paris" , "Berlin"] and skips 'Paris'.
  Store the other cities in anew array named 'visitedCities'
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }

  visitedCities.push(cities[i]);
}

console.log(visitedCities)

/* 
3. User a 'for-of' loop to iterate through the array `[1,2,3,4,5,6]' and stop when 
the number '4' is found
Store the number before '4' in an array named 'smallNumbers'
 */

let number = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of number) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

console.log(smallNumbers);

/*
4. Use  a 'for-of' loop to iterate through the array 
["chai" , "green tea" , "herbal tea" , "black tea"] 
and skip 'Herbal tea'.
  Store the other teas in an array named 'perferences'. 
 */

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];

let perferredTeas = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  perferredTeas.push(tea);
}

console.log(perferredTeas)

/*
5. Use a 'for-in' loop to loop through an object containing city 
populations.
Stop the loop when the population of 'Berlin is found and store 
all the previous populations in a new object named 'cityPopulations'


let citiesPopulation = {
   London: 8900000,
   "New York" : 8400000,
   Paris : 2200000,
   Berlin : 3500000
}

*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

// call ,bind apply learn homework
let cityNewPopulation = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityNewPopulation[city] = citiesPopulation[city];
}

console.log(cityNewPopulation)

/* 
6. Use a 'for-in' loop to loop through 
an object containing city populations. 
Skip any city wit a population below 3 million and store the rest 
in a new object named 'largeCities'.

let worldCities = {
   "Sydeny" : 500000,
   "Tokyo" : 9000000,
   "Berlin" : 3500000,
   "Paris" : 2200000
}
*/

let worldCities = {
  Sydeny: 500000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities)

/* 
7. Write a 'ForEach' loop that iterates through the array
'["earl grey" ,"green tea" , "chai" , "oolong tea"]'.
  Stop the loop when "chai" is found, and store all previous tea types
  in an array named 'availableTeas'
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

console.log(availableTeas);

/* 
8. Write a 'forEach' loop that iterates through the array
'["Berlin" , "Tokyo" , "Sydney" , "Paris"]'.
  Skip "Sydney" and store the other cities in a new array named
  'traveledCities'
*/

let myworldCities = ["Berlin" , "Tokyo" , "Sydney" , "Paris"]
let traveledCities = [ ]

myworldCities.forEach( city =>  {
   if (city === "Sydney") {
      return
   }
   traveledCities.push(city)
})

console.log(traveledCities)

/* 
9. Write a 'for' loop iterates through the array '[2,5,7,9]'.
   Skip the value  '7' and multiply the rest by 2. Store the resultsin
   a new array named 'doubleNumbers'.
*/

let num = [2,5,7,9]
let doubleNumbers = []

for (let i = 0; i < num.length; i++) {
   if ( num[i] == 7 ){
      continue
   }
   doubleNumbers.push(num[i] * 2)
}

console.log(doubleNumbers)

/* 
10 . Use a 'for-loop' to iterate through the array
'["chai" , "green tea" , "black tea" , "jasmine tea"]' , 
 "herbal tea"]
  and stop when the length of the current tea name is greater than 10.
  Store the teas iterated over in an array named 'shortTeas'
*/

let myTea =  ["chai" , "green tea" , "black tea" , "jasmine tea"]
let shortTeas = []

for (const tea of myTea) {
   if ( tea.length > 10 ) {
       break
   }
   shortTeas.push(tea)
}

console.log(shortTeas)
