let marks = {
  mahek: 97,
  shivaay: 99,
  ankur: 98,
  lokesh: 54,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}
