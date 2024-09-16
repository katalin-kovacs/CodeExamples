// Prototype based inheritance
// JavaScript uses prototype-based inheritance,
// where objects inherit properties and methods from their prototype.

// Parent object
const animal = {
  eats: true,
};

// Child object
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // Output: true (inherited from animal)
console.log(dog.barks); // Output: true (own property)

// Object.create()
// The Object.create() method creates a new object
// with the specified prototype object and properties.
const personProto = {
  greet: function () {
    return `Hello, my name is ${this.name}.`;
  },
};

// Create a new object with `personProto` as its prototype
const person = Object.create(personProto);
person.name = "George";
person.age = 45;

console.log(person.greet()); // Output: Hello, my name is George.
console.log(person.age); // Output: 45

// ES6 Class-Based Inheritance
// In ES6, the class keyword is used to define classes.
// You can also use extends to create a subclass that
// inherits properties and methods from a parent class,
// and super to call the constructor or methods of the parent class.

// Parent class (superclass)
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class (subclass) inheriting from Animal
class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent constructor with super
    super(name);
    this.breed = breed;
  }

  // Overriding the parent method
  eat() {
    console.log(`${this.name}, the ${this.breed}, is munching.`);
  }

  // New method specific to the subclass
  bark() {
    console.log(`${this.name} is barking: Woof Woof!`);
  }
}

// Creating an instance of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever");

myDog.eat(); // Output: Buddy, the Golden Retriever, is munching.
myDog.bark(); // Output: Buddy is barking: Woof Woof!
