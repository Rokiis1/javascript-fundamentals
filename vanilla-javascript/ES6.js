// Arrow functions are a more concise way of writing functions in JavaScript. 
// They provide a shorter syntax and lexical scoping of the 'this' keyword. 
// Here's an example of an arrow function:

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(1, 2)); // Output: 3

// let and const
let x = 10;
if (x === 10) {
  let x = 5;
  console.log(x); // Output: 5
}
console.log(x); // Output: 10

const PI = 3.14159;
console.log(PI); // Output: 3.14159
// PI = 5; Throws an error

// Template Literals
const name = 'John';
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is John and I am 30 years old.
