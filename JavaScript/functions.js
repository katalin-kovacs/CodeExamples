// Function Declarations
// Function declarations are the traditional way of defining functions.
// Use-case: Function declarations are hoisted, meaning they are available
// throughout the entire scope in which they are defined.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expressions
// Function expressions involve assigning a function to a variable.
// This method is not hoisted.
// Use-case: Function expressions are useful when you need to pass functions
// as arguments, return them from other functions, or define them conditionally.
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob")); // Output: Hello, Bob!

// Arrow Function
// Arrow functions provide a more concise syntax and
// do not have their own this, arguments, or super bindings.
// Use-case: Arrow functions are often used for shorter functions
// or when you need to preserve the this context from the surrounding code.
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Charlie")); // Output: Hello, Charlie!

// ---------------------------------------
// Arrow Function vs. Traditional Functions in different scopes

// Use-case: Arrow functions are particularly useful in scenarios
// where you need to maintain the this context, such as
// within methods of classes or when dealing with asynchronous code.

// Comparing this behavior:
// Traditional Function
function TraditionalFunction() {
  this.value = 1;
  setTimeout(function () {
    this.value++;
    console.log(this.value); // Output: NaN (because `this` is not bound to the instance)
  }, 1000);
}

new TraditionalFunction();

// Arrow Function
function ArrowFunction() {
  this.value = 1;
  setTimeout(() => {
    this.value++;
    console.log(this.value); // Output: 2 (because `this` is lexically bound to the instance)
  }, 1000);
}

new ArrowFunction();
