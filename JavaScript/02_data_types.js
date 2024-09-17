// Number
let num = 42;
console.log(typeof num); // "number"

// String
let str = "Hello, world!";
console.log(typeof str); // "string"

// Boolean
let isTrue = true;
console.log(typeof isTrue); // "boolean"

// Null
let emptyValue = null;
console.log(typeof emptyValue); // "object" (a known JavaScript quirk)

// Undefined
let notDefined;
console.log(typeof notDefined); // "undefined"

// Object
let person = { name: "Alice", age: 25 };
console.log(typeof person); // "object"

// Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"

// BigInt
let largeNumber = 9007199254740991n; // BigInt literal
console.log(typeof largeNumber); // "bigint"
