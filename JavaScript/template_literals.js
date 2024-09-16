// Template Literals
// Template literals provide an easy way to create strings
// and embed expressions using ${}. They allow multiline
// strings and interpolation, which makes string concatenation simpler.

//--------------------------------------------------------
// String Interpolation

const name = "John";
const age = 30;

// Using template literals
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
// Output: Hello, my name is John and I am 30 years old.

//--------------------------------------------------------
// Multiline Strings

const multiLine = `
This is a string
that spans multiple
lines using template literals.
`;

console.log(multiLine);

// Multiline String before ES6
const multiLineString =
  "This is a string\n" + "that spans multiple\n" + "lines using string concatenation.";
console.log(multiLineString);

const multiLineString2 =
  "This is a string \
that spans multiple \
lines using a backslash.";

console.log(multiLineString2);
