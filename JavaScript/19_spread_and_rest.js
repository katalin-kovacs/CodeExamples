// Spread and Rest Operators
// The spread (...) operator allows an iterable (such as an array)
// to be expanded into individual elements. The rest operator collects
// multiple elements into a single array. Both use the same syntax (...),
// but their functionality depends on the context.

//--------------------------------------------------------
// Spread Operator in Arrays
// The spread operator can be used to combine or clone arrays.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine two arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Clone an array
const clonedArr = [...arr1];
console.log(clonedArr); // [1, 2, 3]

//--------------------------------------------------------
// Spread Operator in Objects
// You can also use the spread operator to combine or clone objects.
const obj1 = { name: "John", age: 30 };
const obj2 = { job: "Developer", country: "USA" };

// Combine objects
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);
// { name: "John", age: 30, job: "Developer", country: "USA" }

// Clone an object
const clonedObj = { ...obj1 };
console.log(clonedObj); // { name: "John", age: 30 }

//--------------------------------------------------------
// Rest Operator
// The rest operator collects the remaining elements into an array.
// It is often used in function parameters to handle a variable number of arguments.

// Rest Operator in Function Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5)); // 9
