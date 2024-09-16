const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter the number of terms : "));
let n1 = 0,
  n2 = 1,
  n3;

for (let i = 1; i <= number; i++) {
  console.log(n1);
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
