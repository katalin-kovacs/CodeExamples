// Type Coercion with + Operator
// The + operator is both an arithmetic operator and
// a string concatenation operator. It can lead to
// surprising results when used with different types:
console.log(5 + "5"); // "55" (string concatenation)
console.log("5" + 5); // "55" (string concatenation)
console.log(5 + 5); // 10  (addition)

console.log(true + 1); // 2 (true is coerced to 1)
console.log(false + 1); // 1 (false is coerced to 0)
console.log("5" - 1); // 4  (string is coerced to number for subtraction)
console.log("5" * 2); // 10 (string is coerced to number for multiplication)

// Equality Comparison with ==
// The == operator performs type coercion when comparing
// values of different types, which can lead to unexpected results:
console.log(0 == false); // true (0 is coerced to false)
console.log("" == false); // true (empty string is coerced to false)
console.log(null == undefined); // true (special case for equality)
console.log("5" == 5); // true (string is coerced to number)
console.log([] == false); // true (empty array is coerced to false)
console.log([] == 0); // true (empty array is coerced to 0)

// Implicit Type Conversion in Boolean Context
// Values are coerced to boolean when used in contexts
// that require a boolean value (like conditions in if statements):
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false (empty string is falsy)
console.log(Boolean("non-empty")); // true (non-empty string is truthy)
console.log(Boolean([])); // false (empty array is falsy)
console.log(Boolean([1])); // true (non-empty array is truthy)

// Conversion of Objects to Primitives
// When objects are involved in operations that require primitives,
// JavaScript tries to convert them using toString() or valueOf() methods:
let obj1 = {
  toString: () => "Object1",
};
console.log(obj1 + ""); // "Object1"

let obj2 = {
  valueOf: () => 42,
};
console.log(obj2 + 1); // 43 (valueOf() is used for numeric operations)

// NaN and Type Coercion
// NaN (Not-a-Number) is a special value for invalid numbers,
// and JavaScript's type coercion can lead to some quirks:
console.log(1 / "hello"); // NaN (division by non-numeric string)
console.log(NaN === NaN); // false (NaN is not equal to itself)
console.log(NaN == NaN); // false (same reason as above)
console.log(Number.isNaN(NaN)); // true (proper way to check NaN)

// Coercion in Arithmetic Operations
// When performing arithmetic operations, non-numeric types are coerced to numbers:
console.log("5" * 2); // 10 (string "5" is coerced to number 5)
console.log("5" - 2); // 3  (string "5" is coerced to number 5)
console.log("5" / "2"); // 2.5 (both strings are coerced to numbers)

// Unusual Behaviors with parseInt()
// parseInt() can behave unexpectedly when
// the string starts with non-numeric characters:
console.log(parseInt("123abc")); // 123 (stops parsing at non-numeric character)
console.log(parseInt("abc123")); // NaN (no numeric part to parse)
console.log(parseInt("0x1F")); // 31 (hexadecimal notation, base 16)
