// Understanding “This” in JavaScript

// Global Context
// In the global context (outside any function or object),
// this refers to the global object. In a browser, it is the window object.

console.log(this); // In a browser, this will log the Window object

// In strict mode, `this` is `undefined` in the global context
("use strict");
console.log(this); // Output: undefined

// Object Method
// Within a method of an object, this refers to the object itself.
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name); // `this` refers to the `person` object
  },
};

person.greet(); // Output: Alice

// Constructor Function
// In a constructor function, this refers to the newly created instance of the object.
function Person(name) {
  this.name = name;
}

const person1 = new Person("Bob");
console.log(person1.name); // Output: Bob

// Arrow Function
// Arrow functions do not have their own this context.
// Instead, they inherit this from the surrounding lexical context.
const person2 = {
  name: "Charlie",
  greet: function () {
    // Arrow function
    setTimeout(() => {
      console.log(this.name); // `this` refers to the `person` object
    }, 1000);
  },
};

person2.greet(); // Output: Charlie

// -------------------------------------------
// Common pitfalls and how to avoid them

// Arrow Functions and this
// Since arrow functions do not have their own this,
// they can be useful to avoid common pitfalls with this binding,
// particularly in callbacks.// Example:
function Counter() {
  this.count = 0;

  // Traditional function
  setInterval(function () {
    this.count++;
    console.log(this.count); // `this` is not bound to the Counter instance
  }, 1000);
}

new Counter(); // Output: NaN (due to `this` not being bound to the Counter instance)

// Using Arrow Function:
function Counter() {
  this.count = 0;

  // Arrow function
  setInterval(() => {
    this.count++;
    console.log(this.count); // `this` is correctly bound to the Counter instance
  }, 1000);
}

new Counter(); // Output: 1, 2, 3, ...

// bind, call, apply
// You can explicitly set this using bind, call, or apply.

// bind method:
function greet() {
  console.log(this.name);
}

const person3 = { name: "Dave" };
const boundGreet = greet.bind(person3);
boundGreet(); // Output: Dave

// call and apply methods:
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person4 = { name: "Eve" };
greet.call(person4, "Hello"); // Output: Hello, Eve
greet.apply(person4, ["Hi"]); // Output: Hi, Eve

// -------------------------------------------
// This in Traditional Functions vs Arrow functions within objects

const obj = {
  value: 10,
  traditionalFunction: function () {
    setTimeout(function () {
      console.log(this.value); // `this` refers to the global object or `undefined` in strict mode
    }, 1000);
  },
  arrowFunction: function () {
    setTimeout(() => {
      console.log(this.value); // `this` refers to the `obj` object
    }, 1000);
  },
};

obj.traditionalFunction(); // Output: undefined (or throws error in strict mode)
obj.arrowFunction(); // Output: 10
