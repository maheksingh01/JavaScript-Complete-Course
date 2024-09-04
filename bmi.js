const prompt = require("prompt-sync")();

var weight = prompt("Enter your weight : (in kgs) ");
var height = prompt("Enter your height : (in meters) ");

var bmi = weight / (height * height);

console.log(bmi);
