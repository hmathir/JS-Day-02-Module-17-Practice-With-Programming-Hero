var numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log(numbers.indexOf(55));
numbers[4] = 111;
console.log(numbers[4]);
console.log(numbers.length);
console.log(numbers);

var popElement = numbers.pop();
console.log(numbers);
console.log("Poped Element is: " + popElement);

numbers.shift();
console.log(numbers); //Remove First Item from Array.

numbers.unshift(13232);
console.log(numbers); //Added First Item to Array.

numbers.splice(3, 0, 3333,) //Ading New Item On 3rd index and removing 0 and added eliments is 3333/
console.log(numbers);