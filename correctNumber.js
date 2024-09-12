const prompt = require("prompt-sync")();

let cn = 45;
let i;
while (i != cn) {
  i = prompt("Enter The Number : ");
  if (i == cn) {
    console.log("Correct Number");
  } else {
    console.log("try again");
  }
}
// console.log("Correct Number");
