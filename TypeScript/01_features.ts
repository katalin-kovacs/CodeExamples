// Static Typing in TypeScript
// TypeScript allows you to define the types of variables,
// functions, and objects explicitly. This is helpful
// in catching type-related errors during development.

// Explicit static types
let message: string = "Hello, TypeScript!";
let age: number = 25;
let isLoggedIn: boolean = true;

// Static typing in functions
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Alice")); // Output: Hello, Alice

// Trying to pass a number will cause a TypeScript error
// console.log(greet(123)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

//--------------------------------------------------------
// Interfaces in TypeScript
// An interface defines the structure of an object and ensures
// type consistency across your code. Interfaces are commonly used
// in Angular to define data models or the shape of objects.

// Define an interface for a User object
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

// Create a function that accepts a User object
function printUserDetails(user: User): void {
  console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
}

// Create a user object that adheres to the User interface
const user1: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isAdmin: true,
};

printUserDetails(user1); // Output: ID: 1, Name: John Doe, Email: john@example.com

//--------------------------------------------------------
// Classes
// Classes in TypeScript provide object-oriented programming features,
// such as inheritance and encapsulation.
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Bob", 40);
console.log(person.greet()); // Output: Hello, my name is Bob

//--------------------------------------------------------
// Modules
// Modules allow you to organize and reuse code across different files.
// You can export and import functions, classes, and objects.

// math.ts
export function add2(a: number, b: number): number {
  return a + b;
}
// main.ts
import { add } from "./math";
console.log(add2(5, 3)); // Output: 8

//--------------------------------------------------------
// Decorators
// Decorators are special annotations that can modify the behavior of
// classes, methods, and properties. They are used extensively in Angular.
function Log(target: Function) {
  console.log(`Class ${target.name} is created.`);
}

@Log
class Car {
  constructor(public model: string) {}
}

//--------------------------------------------------------
// Generics
// Generics provide a way to create reusable components
// that can work with various types.
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(100)); // Output: 100

//--------------------------------------------------------
// Type Inference
// TypeScript can automatically infer types based on the values
// assigned to variables.
let message2 = "Hello, TypeScript!"; // TypeScript infers the type as string
let count = 42; // TypeScript infers the type as number

function add(x: number, y: number) {
  return x + y; // TypeScript infers the return type as number
}

//--------------------------------------------------------
// Union and Intersection Types
// Union types allow a variable to hold values of multiple types,
// while intersection types combine multiple types into one.

// Union Types
let result: number | string;
result = 42; // valid
result = "Hello"; // valid

function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

// Intersection Types
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type Worker = Person & Employee;

const worker: Worker = { name: "John", employeeId: 123 };

//--------------------------------------------------------
// Async/Await
// Async/await provides a cleaner syntax for handling asynchronous code,
// making promises easier to read and write.
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data); // Output: Data fetched
}

getData();

//--------------------------------------------------------
// Type Definition Files
// Type definition files (with a .d.ts extension) provide
// type information for JavaScript libraries. This allows
// TypeScript to understand the types of JavaScript libraries
// that don’t have built-in TypeScript support.

// This would normally reside in a `.d.ts` file
declare module "myLibrary" {
  export function doSomething(arg: string): void;
}

// You can now use it in your TypeScript code
import { doSomething } from "myLibrary";
doSomething("Test");

//--------------------------------------------------------
// Type Annotations
// Type annotations are a way to explicitly define types
// for variables, function parameters, and return values.
// They are crucial in TypeScript for defining the expected
// behavior and type of data.

// Type annotations for function parameters and return type
function calculateArea(width: number, height: number): number {
  return width * height;
}

console.log(calculateArea(5, 10)); // Output: 50

// Type annotations for variables
let employeeName: string = "Alice";
let employeeAge: number = 30;
let isActive: boolean = true;
