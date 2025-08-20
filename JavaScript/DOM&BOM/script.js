// example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    //    console.log(this);
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    paragraph.textContent = "Paragraph is changed";
  });

// arrow function points to global i.e  Window ,
// it not gives context who is calling so we not use arrow function
// console.log(hold);

// example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    // console.log(hold);
    console.log(citiesList.firstElementChild.classList.add("highlight"));
    /*
    classList gives you a list of all CSS classes applied to an element.
    Using .add("classname") adds a new class to that list (it doesn’t replace others). 
     */
  });

// example 3

document
.getElementById("changeOrder")
.addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

// example 4

document
.getElementById("addNewItem")
.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// example 6
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("chaicode");
  });

// example 7

document
.getElementById("teaList")
.addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected " + event.target.textContent);
  }
});

// example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    //  alert("Submitted");
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

// example 9
document.addEventListener('DOMContentLoaded' ,function () {
  document.getElementById("domStatus").textContent="DOM fully loaded"
})

// example 10

document.getElementById("toggleHighlight").addEventListener("click" ,function () {
  let descriptionText = document.getElementById("descriptionText");
  descriptionText.classList.toggle("highlight");
})

