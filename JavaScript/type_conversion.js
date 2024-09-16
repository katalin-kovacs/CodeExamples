// Number to String options

// String Constructor
// The String() constructor can convert a number to a string.
let num = 42;
let str = String(num); // Using String constructor
console.log(str); // "42"
console.log(typeof str); // "string"

// toString() Method
// The toString() method can be used to convert a number to a string.
let num = 42;
let str = num.toString(); // Using toString() method
console.log(str); // "42"
console.log(typeof str); // "string"

// String Concatenation
// When you concatenate a number with a string, JavaScript automatically converts the number to a string.
let num = 42;
let str = num + ""; // String concatenation
console.log(str); // "42"
console.log(typeof str); // "string"

// Template Literals
// Template literals use backticks and automatically convert numbers to strings when they are embedded inside the ${}.
let num = 42;
let str = `${num}`; // Using template literal
console.log(str); // "42"
console.log(typeof str); // "string"

// JSON.stringify()
// The JSON.stringify() method converts a number (or any data type) to a JSON string.
let num = 42;
let str = JSON.stringify(num); // Using JSON.stringify()
console.log(str); // "42"
console.log(typeof str); // "string"

// String Object Constructor
// This creates a string object (which is not a primitive string) using the new String() constructor. It is not recommended for general use because it creates an object, not a primitive string.
let num = 42;
let strObj = new String(num); // Using String object constructor
console.log(strObj); // [String: '42']
console.log(typeof strObj); // "object" (not "string")
// If you want to extract the primitive string value from the object, you can do this:
let strPrimitive = strObj.valueOf();
console.log(strPrimitive); // "42"
console.log(typeof strPrimitive); // "string"

//---------------------------------------
// String to Number

// Using Number() Constructor:
let str = "123";
let num = Number(str);
console.log(num); // 123
console.log(typeof num); // "number"

// Using parseInt():
let str = "123";
let num = parseInt(str, 10); // Second argument is radix (base)
console.log(num); // 123
console.log(typeof num); // "number"

// Using parseFloat():
let str = "123.45";
let num = parseFloat(str);
console.log(num); // 123.45
console.log(typeof num); // "number"

//---------------------------------------
// Boolean Conversion

// Using Boolean() Constructor:
let value = 1; // or "" (empty string), 0, null, undefined, etc.
let bool = Boolean(value);
console.log(bool); // true for non-zero, non-null values
console.log(typeof bool); // "boolean"

// Using Double NOT Operator (!!):
let value = 1; // or "" (empty string), 0, null, undefined, etc.
let bool = !!value;
console.log(bool); // true for non-zero, non-null values
console.log(typeof bool); // "boolean"

//---------------------------------------
// Object to Primitive

// Using String():
let obj = { toString: () => "Hello" };
let str = String(obj);
console.log(str); // "Hello"
console.log(typeof str); // "string"

// Using Number():
let obj = { valueOf: () => 42 };
let num = Number(obj);
console.log(num); // 42
console.log(typeof num); // "number"

//---------------------------------------
// Explicit Conversion with JSON.stringify()

// Object to JSON String:
let obj = { name: "Alice", age: 25 };
let jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Alice","age":25}'
console.log(typeof jsonStr); // "string"
