// CommonJS - Every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const secret = "SUPER SECRET";
const john = "John";
const peter = "Peter";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("Rajan");
sayHi(john);
sayHi(peter);
