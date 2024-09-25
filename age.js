const prompt = require("prompt-sync")();

var age = prompt("Enter the age : ");

if (age < 10) {
  console.log("You are underage.");
} else {
  if (age > 10 && age < 20) {
    console.log("You are eligible");
  } else {
    console.log("You are overage");
  }
}
