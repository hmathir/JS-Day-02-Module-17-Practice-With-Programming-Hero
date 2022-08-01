Problem:
/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else. */

Solution:

var yourMark = 102;

if (yourMark > 100 || yourMark < 0) {
    console.log("Invalid Input. Please Put 1 - 100");
}
else if (yourMark >= 80 && yourMark <= 100) {
    console.log("You Got A+");
}
else if (yourMark >= 70 && yourMark <= 79) {
    console.log("You Got A");
}
else if (yourMark >= 60 && yourMark <= 69) {
    console.log("You Got A-");
}
else if (yourMark >= 50 && yourMark <= 59) {
    console.log("You Got B");
}
else if (yourMark >= 40 && yourMark <= 49) {
    console.log("You Got C");
}
else if (yourMark >= 33 && yourMark <= 39) {
    console.log("You Got D");
}
else {
    console.log("You Failed, Try Again");
}