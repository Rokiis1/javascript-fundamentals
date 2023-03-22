// Error handling is an important aspect of programming to ensure that errors and exceptions are handled gracefully and the application does not crash unexpectedly. 
// JavaScript provides several ways to handle errors, including try-catch blocks, throwing and catching errors, and using the Error object.

// Try-catch block

// Try-catch blocks are used to handle errors and exceptions that might occur in a block of code. 
// The try block contains the code that might generate an error or exception, and the catch block contains the code that handles the error or exception.

function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  
  console.log(divide(10, 0)); // Output: Division by zero, null
  console.log(divide(10, 2)); // Output: 5

// Throwing and Catching Errors

// In addition to try-catch blocks, you can also throw and catch errors explicitly using the throw and catch statements.

function checkAge(age) {
    if (age < 18) {
      throw new Error('You must be 18 or older');
    }
    console.log('You are old enough');
  }
  
  try {
    checkAge(16);
  } catch (error) {
    console.error(error.message);
  }

// Using the Error Object

// JavaScript provides the Error object to represent an error that occurs during the execution of code. 
// The Error object has a message property that contains a string describing the error.

function checkName(name) {
    if (!name) {
      throw new Error('Name is required');
    }
    console.log(`Hello, ${name}`);
  }
  
  try {
    checkName();
  } catch (error) {
    console.error(error.message);
  }
  


