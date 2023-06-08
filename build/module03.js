"use strict";
/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations.
    The resulting JavaScript should look the same as the original example when you're done. */
let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;
firstName = "Rebecca";
lastName = "Smith";
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;
if (ukCitizen) {
    console.log("My name is " +
        fullName +
        ", I'm " +
        age +
        ", and I'm a citizen of the United Kingdom.");
}
else {
    console.log("My name is " +
        fullName +
        ", I'm " +
        age +
        ", and I'm not a citizen of the United Kingdom.");
}
/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables.
   Then, address any errors you find so that the result returned to a is 12. */
let x;
let y;
let a;
x = 5;
y = 7;
a = Number(x) + y;
console.log(a);
/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */
let randomNumbers = [];
let nextNumber;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}
console.log(randomNumbers);
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, 2, 3]));
