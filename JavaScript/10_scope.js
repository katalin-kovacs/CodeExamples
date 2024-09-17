// Global Scope
// A variable declared outside any function or block
// is in the global scope and can be accessed anywhere in the code.

// Global scope
let globalVar = "I am a global variable";

function displayGlobalVar() {
  console.log(globalVar); // Accessible here
}

displayGlobalVar(); // Output: I am a global variable

console.log(globalVar); // Accessible here as well

// ---------------------------------------
// Local (Function) Scope
// Variables declared inside a function are in local scope.
// They are only accessible within that function.

function localScopeExample() {
  // Local scope
  let localVar = "I am a local variable";
  console.log(localVar); // Accessible here
}

localScopeExample(); // Output: I am a local variable

// Trying to access localVar outside the function will throw an error
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// ---------------------------------------
//  Block Scope
//  Variables declared with let or const inside a block
//  (such as inside an if, for, or while block) are in block scope,
//  meaning they can only be accessed within that specific block.

// Block Scope Using let
if (true) {
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar); // Accessible here
}

// Trying to access blockVar outside the block will throw an error
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

// Block Scope with const
for (let i = 0; i < 3; i++) {
  console.log(i); // Accessible here inside the loop
}

// Trying to access 'i' outside the loop block will throw an error
// console.log(i); // Uncaught ReferenceError: i is not defined

// ---------------------------------------
// Differences Between var, let, and const Scopes

// var: Variables declared with var are function-scoped,
// meaning they are accessible throughout the entire function
// in which they are declared, even before they are initialized
// due to hoisting.
function varExample() {
  console.log(x); // undefined (due to hoisting)
  var x = 10;
  console.log(x); // 10
}

varExample();

//   let and const: Variables declared with let and const are block-scoped
//   and are not hoisted to the top of their scope. This means they are
//   only accessible after their declaration.
function letExample() {
  // console.log(y); // Uncaught ReferenceError: y is not defined
  let y = 20;
  console.log(y); // 20
}

letExample();

// Combining Global, Local, and Block Scope
let globalVar = "I am a global variable";

function scopeExample() {
  let localVar = "I am a local variable";

  if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(globalVar); // Accessing global variable
    console.log(localVar); // Accessing local variable
    console.log(blockVar); // Accessing block-scoped variable
  }

  // blockVar is not accessible here
  // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
}

scopeExample();
