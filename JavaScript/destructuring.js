// Destructuring
// Destructuring is a syntax that allows you to unpack values
// from arrays or properties from objects into distinct variables.
// It's a concise way to extract data.

//--------------------------------------------------------
// Object Destructuring
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

// Destructure properties from the object
const { name, age, job } = person;

console.log(name); // John
console.log(age); // 30
console.log(job); // Developer

//--------------------------------------------------------
// Array Destructuring
const numbers = [1, 2, 3];

// Destructure values from the array
const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3

//--------------------------------------------------------
// Use Case: Default Values in Destructuring
// You can provide default values when destructuring,
// in case a property or value doesn't exist.

const person = { name: "John" };

// 'age' is missing, so a default value is assigned
const { name, age = 25 } = person;

console.log(age); // 25 (default value)
