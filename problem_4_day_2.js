Problem:
/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */

Solution:
var a = 9;
var b = 8;
var c = 9;

if (a == b || b == c || c == a) {
    console.log("triangle is Isosceles");
}
else {
    console.log("triangle is NOT Isosceles");
}

