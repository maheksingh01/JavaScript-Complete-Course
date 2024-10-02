const prompt = require("prompt-sync")();

num = prompt("Enter a number : ");
if (num % 2 == 0 && num % 3 == 0) {
  console.log(num + " is divisible by both 2 and 3 ");
} else if (num % 2 == 0) {
  console.log(num + " is divisible by 2");
} else if (num % 3 == 0) {
  console.log(num + " is divisible by 3");
} else {
  console.log(num + " cannot divisible by both 2 and 3");
}
