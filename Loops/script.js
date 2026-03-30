//FOR LOOP
// Syntax: for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

// Ques:1 Write a program to print numbers from 1 to 10 using a loop.
for (let i = 1; i < 11; i++) {
  console.log(i);
};

//Ques:2 Write a program to print numbers from 10 to 1.
for (let i = 10; i > 0; i--) {
    console.log(i);
};

//Ques:3 Write a program to Print all even numbers from 1 to 20.
console.log("Even Number Between 1 to 20:");
for (let i = 2; i <= 20; i++) {
    if (i % 2 ===0) {
        console.log(i); 
    }
};

//FOR IN LOOP
// Syntax: for (variable in object) {
//   // code to be executed