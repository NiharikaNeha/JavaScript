//FOR LOOP
// Syntax: for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

// Ques:1 Write a program to print numbers from 1 to 10 using a loop.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// };

//Ques:2 Write a program to print numbers from 10 to 1.
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// };

//Ques:3 Write a program to Print all even numbers from 1 to 20.
// console.log("Even Number Between 1 to 20:");
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i); 
//     }
// };

//Ques:4 Write a program to Print all odd numbers from 1 to 20.
// console.log("Odd Number Between 1 to 15:");
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     };
// };

//Ques:5 Write a program to print the table of 5
// for ( let i = 1; i <= 10; i++){
//     console.log("5 * " + i + " = " + i * 5);
// };

//Ques:6 Write a program to find the sum of numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     sum += i;
// }
// console.log("The sum of numbes from 1 to 100 is: " + sum);

//Ques:7 Write a program to find the factorial of a number. 
// let num = 5;
// for (let i = num - 1; i > 0; i--){
//     num *= i;
// }
// console.log("The factorial of 5 is: " + num);

//Ques:8 Given a number (e.g., 12345), count how many digits it has using a loop.
// let num = 12345;
// let count = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//     count++;
// }
// console.log(count);  

//Ques:9 Write a number to reverse a number
// let num = 7075;
// let reverse = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
// }
// console.log(reverse); 