// If Else/ Else If

//Ques:1 Check whether a number is even or odd.
// let num = 11;
// if (num % 2 === 0) {
//     console.log("The Number is Even.");
// } else {
//     console.log("The Number is Odd.");
// };

//Ques:2 Determine if a number is positive, negative, or zero.
// let num = 0;
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("The Num Is Zero.")
// }

//Ques:3 Check if a person is eligible to vote
// let age = 18;
// if (age > 18) {
//     console.log("Person Can Vote");
// } else {
//     console.log("Person Can't Vote");
// }

//Ques:4 Find the largest among three numbers.
// let a = 75;
// let b = 77;
// let c = 100;

// if (a >= b && a >= c) {
//     console.log("A is greater");
// } else if (b >= c && b >= a) {
//     console.log("B is greater")
// } else {
//     console.log("C is greater");
// }

//Ques:5 Assign grade based on marks: (90+ → A, 75–89 → B, 50–74 → C, Below 50 → Fail)
// let mark = 22;
// if (mark >= 89) {
//   console.log("A Grade");
// } else if (mark >= 75) {
//   console.log("Grade B");
// } else if (mark >= 50) {
//   console.log("Grade C");
// } else {
//   console.log("Failed");
// }

//Ques:6 Check if a number is: (divisible by both 3 and 5, only by 3, only by 5, neither)
// let num = 15;
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Divisible by both 3 and 5");
// } else if (num % 3 === 0) {
//     console.log("Divisible by 3");
// } else if (num % 5 === 0) {
//     console.log("Divisible by 5");
// } else {
//     console.log("Neither");
// }

//Ques:7 Check if a year is a leap year.
let year = 2007;
if (year % 400 === 0) {
  console.log("Leap Year");
} else if (year % 100 === 0) {
  console.log("Not a Leap Year");
} else if (year % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap year");
}
