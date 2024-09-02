var output = [];
var count = 1;

function fizzbuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzbuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(count);
  }
  count++;
}

for (let i = 1; i <= 100; i++) {
  fizzbuzz(i);
}
console.log(output);
