// Inheritance with Classes
// You can create a subclass that extends another class,
// allowing you to inherit and override methods.

// Define a base class named Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Define a subclass named Dog that extends Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  // Override the speak method
  speak() {
    return `${this.name} barks.`;
  }

  // Method specific to Dog class
  getBreed() {
    return `Breed: ${this.breed}`;
  }
}

// Create an instance of the Dog class
const dog = new Dog("Buddy", "Golden Retriever");

console.log(dog.speak()); // Output: Buddy barks.
console.log(dog.getBreed()); // Output: Breed: Golden Retriever
