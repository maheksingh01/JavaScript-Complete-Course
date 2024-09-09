// const prompt = require("prompt-sync")();

// // average function

// const average = (array1, n) => {
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     sum = sum + array1[i];
//     let avg = 1;
//     avg = sum / n;
//   }
//   return avg;
//   //   let avg = 1;
//   //   avg = sum / n;
//   //   return avg;
// };

// var array1 = [];
// n = prompt("Enter the number of values you want to find average of : ");
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++) {
//   array1[i] = prompt("Enter the value : ");
//   array1[i] = Number.parseInt(array1[i]);
// }
// console.log(array1);
// average(array1, n);

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(mean(45, 18, 333, 7));
