// Classes in JavaScript
// Classes provide a blueprint for creating objects
// with shared methods and properties,
// supporting object-oriented programming (OOP) principles.

// Define a class named Person
class Person {
  // Constructor method initializes the object's properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create an instance of the Person class
const person1 = new Person("Alice", 30);

console.log(person1.introduce()); // Output: Hello, my name is Alice and I am 30 years old.
