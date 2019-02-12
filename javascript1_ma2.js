//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Shoe() {
  this.brand = "Nike";
  this.type = "Sneakers";
}

Shoe.prototype.getBrand = function() {
  console.log("The brand is " + this.brand);
};

Shoe.prototype.setBrand = function(brand) {
  this.brand = brand;
};

var shoe = new Shoe();

shoe.getBrand();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArray.slice(5));

//3. Delete the last number in the array that you created above.

myArray.pop();

console.log(myArray);

//4. Given the following paragraph, create a JavaScript function
//that changes all mentions of strawberry to banana and strawberries to bananas:

function replaceWords() {
  var string =
    "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
  var newString = string
    .replace(/strawberries/gi, "bananas")
    .replace(/strawberry/gi, "banana");

  return newString;
}

console.log(replaceWords());

//5. Create an array and a button. The array should contain 4 football clubs names.
// When the button is clicked, remove all elements out of the array that we just created.
// There after add in 4 names of cars inside that array. Log it to the console.

var footballClubs = [
  "Juventus",
  "Barcelona",
  "Manchester United",
  "Paris Saint Germain"
];
console.log(footballClubs);

myButton.addEventListener("click", function() {
  console.log((footballClubs = []));

  footballClubs = ["BMW", "Audi", "Mercedes", "Porche"];
  console.log(footballClubs);
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var soccerPlayers = [
  { name: "Christiano Ronaldo", club: "Juventus F.C." },
  { name: "Lionel Messi", club: "FC Barcelona" },
  { name: "Paul Pogba", club: "Manchester United" }
];

var manuPlayers = soccerPlayers.filter(function(player) {
  return player.club === "Manchester United";
});

console.log(manuPlayers);

//7. Create a simple function that logs the date.

function logDate() {
  var date = new Date();

  console.log(
    "Today is the " +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear()
  );
}

logDate();
