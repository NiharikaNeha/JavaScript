//

let users = [
  { name: "Roshan", acNum: 7075, bal: 800, lastDepo: 200, lastExp: 30 },
  { name: "Manish", acNum: 7078, bal: 8000, lastDepo: 22000, lastExp: 530 },
  { name: "Kavita", acNum: 7079, bal: 80000, lastDepo: 2100, lastExp: 830 },
  { name: "Ayush", acNum: 7011, bal: 87000, lastDepo: 2000, lastExp: 130 },
  { name: "Neha", acNum: 7022, bal: 800000, lastDepo: 20000, lastExp: 430 },
];

let userName = prompt("Enter UserName");
let accNumber = prompt("Enter Your Acc Number");

let user = users.find((u) => u.name === userName && u.acNum === accNumber);

if (user) {
  alert(`Welcome ${user.name}`);
} else {
  alert("User not found");
}

// console.log(users[0]);
