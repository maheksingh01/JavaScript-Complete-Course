const prompt = require("prompt-sync")();

var num = prompt("Enter the number : ");
if (num % 2 === 0) {
  console.log(num + " is an even number");
} else {
  console.log(num + " is an odd number");
}
