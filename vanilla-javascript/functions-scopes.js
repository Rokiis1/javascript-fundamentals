// Functions and scope are fundamental concepts in JavaScript that are important to understand for writing efficient and organized code.
// Functions in JavaScript are blocks of code that can be called repeatedly to perform a specific task. 
// Functions can be created using the function keyword followed by a name, a list of parameters (in parentheses), and the function body (in curly braces). 
// Here's an example:

function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet('Alice'); // Output: Hello, Alice!
  greet('Bob'); // Output: Hello, Bob!

// Scope refers to the visibility of variables and functions within a JavaScript program. 
// Variables declared outside of a function have global scope, meaning they can be accessed from anywhere in the program. 
// Variables declared inside of a function have local scope and can only be accessed within that function. 
// Here's an example:

let globalVar = 'I am a global variable';

function myFunction() {
  let localVar = 'I am a local variable';
  console.log(localVar); // Output: I am a local variable
  console.log(globalVar); // Output: I am a global variable
}

console.log(globalVar); // Output: I am a global variable
console.log(localVar); // Output: ReferenceError: localVar is not defined

// It's also important to note that functions can access variables in their parent scope, even if the variable is not passed in as a parameter. 
// This is known as closure. 
// Here's an example:

function outerFunction() {
    let outerVar = 'I am in the outer function';
  
    function innerFunction() {
      console.log(outerVar);
    }
  
    return innerFunction;
  }
  
  let innerFunc = outerFunction();
  innerFunc(); // Output: I am in the outer function

  

