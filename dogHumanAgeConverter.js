const prompt = require("prompt-sync")();

var dog_age = prompt("Enter the dog age : ");
console.log(dog_age);
var human_age = (dog_age - 2) * 4 + 21;
console.log(human_age);
