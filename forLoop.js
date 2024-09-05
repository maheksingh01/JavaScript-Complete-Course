// sum of n natural numbers

const prompt = require("prompt-sync")();

n = prompt("Enter the value of n : ");
sum = 0;
for (let i = 0; i < n; i++) {
  sum = sum + i;
}
console.log(sum);
