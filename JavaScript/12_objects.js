// In JavaScript, objects and prototypes are fundamental concepts
// for creating and managing objects, as well as implementing inheritance.

// Creating Objects

// Object Literal Syntax
// Creating an object using object literal syntax
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name}.`;
  },
};

console.log(person.name); // Output: Alice
console.log(person.greet()); // Output: Hello, my name is Alice.

// Constructor Function
// Creating an object using a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}.`;
};

const person1 = new Person("Bob", 25);
console.log(person1.name); // Output: Bob
console.log(person1.greet()); // Output: Hello, my name is Bob.

// Class Syntax
// Creating an object using class syntax (ES6)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

const person2 = new Person("Charlie", 35);
console.log(person2.name); // Output: Charlie
console.log(person2.greet()); // Output: Hello, my name is Charlie.

// ------------------------------------
// Manipulating Objects

// Adding Properties
const person = {};
person.name = "David";
person.age = 40;

console.log(person.name); // Output: David
console.log(person.age); // Output: 40

// Modifying Properties
const person = {
  name: "Emma",
  age: 28,
};

person.age = 29; // Modify the age property

console.log(person.age); // Output: 29

// Deleting Properties
const person = {
  name: "Fiona",
  age: 33,
};

delete person.age; // Delete the age property

console.log(person.age); // Output: undefined
