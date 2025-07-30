/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
  
  let teaFlavors = [ "greenTea" , "blacktea" , "oolongtea"]
  const firstTea = teaFlavors[0]

//  Another way to declare aray
// teaFl = new Array("greenTea" , "blacktea" , "oolongtea")

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

 let cities = ["London" , "Tokyo" , "Paris" , "New York"]
 const favoriteCity  =  cities[2]

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
  let teaTypes = ["herbal tea" , "white tea" , "masala chai"]
  teaTypes[1] = "jasmine tea"

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
   let citiesVisited = ["Mumbai" , "Sydney"]
   // .push append elements to end of array
   cities.push("Berlin")
   console.log(citiesVisited.length)
   citiesVisited[2] = "Berlin"   

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

  let teadOrders = ["chai" , "iced tea" , "matcha" , "earl grey"]
 // pop  removes last element from array 
  const lastorder = teadOrders.pop()
  console.log(lastorder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

  let popularTeas = ["green tea" , "oolong tea" , "chai"]
  let softCopyTeas = popularTeas

/*
A soft copy (or shallow copy) means both variables point to the same array in memory.
Any change made using one variable (like pop) will also affect the other.
No new copy of the actual data is created.
*/

  popularTeas.pop()
  console.log(softCopyTeas)
  console.log(popularTeas)
  
/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

 let topCities = ["Berlin" ,"Singapore", "New york"]
 let hardCopyCities = [...topCities]
 topCities.pop()
 console.log(hardCopyCities)

  /* Creates a shallow copy of topCities using the spread operator
  The ... (spread operator) unpacks the elements of topCities into a new array,
  so hardCopyCities is a separate array with the same elements.
  Changes to hardCopyCities won't affect topCities (at the top level). */


/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

   let europeanCities = ["Paris" , "Rome"]
   let asianCities = ["Tokyo" , "Bangkok"]
   let worldCities = europeanCities.concat(asianCities)

   console.log(worldCities)

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
 
  let teaMenu = ["Masala Chai" , "oolong Tea" , "green tea" , "earl grey"]
  let menuLength = teaMenu.length

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto" , "London" , "Cape Town" , "Vancouver"]

let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);



