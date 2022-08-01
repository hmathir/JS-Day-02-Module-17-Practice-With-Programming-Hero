Problem:

/* You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

Solution:

var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
TODO1: // Find The Index Of Banana.
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);

TODO2: //Replace "Banana" With "Mango".
fruits[1] = "Mango"
console.log(fruits);

TODO3: //Remove ‘Orange’ and add ‘Watermelon’.
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);