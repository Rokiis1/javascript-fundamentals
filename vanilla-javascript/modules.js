// In JavaScript, modules are a way of organizing and sharing code between different parts of a program or different programs altogether. 
// Modules are reusable pieces of code that can be imported and used in other parts of a program.

// Exporting a function
export function add(a, b) {
    return a + b;
  }
  
  // Exporting a variable
  export const PI = 3.14;
  
  // Exporting a class
  export class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

// Importing a function
import { add, PI, Person } from './module.js';

console.log(add(2, 3)); // Output: 5

console.log(PI); // Output: 3.14

const person = new Person('John', 30);
person.greet(); // Output: "Hello, my name is John and I am 30 years old."
