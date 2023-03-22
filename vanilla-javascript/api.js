// Asynchronous programming allows us to execute code without blocking the main thread of execution. 
// This is important in JavaScript because JavaScript runs in a single thread and blocking the main thread can lead to unresponsive user interfaces. 
// Promises and Async/Await are two popular ways of implementing asynchronous programming in JavaScript.

// Promises

// Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value. A Promise can be in one of three states:

// 1. Pending: The initial state, the promise is neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully and the promise has a resulting value.
// 3. Rejected: The operation failed and the promise has a reason for the failure.

// Promises are created using the Promise constructor function. 
// The constructor function takes a single argument, a function that defines the asynchronous operation. 
// The function takes two parameters, a resolve function and a reject function. 
// The resolve function is called when the operation completes successfully and the reject function is called when the operation fails.

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await

// Async/Await is a syntax for working with Promises that was introduced in ECMAScript 2017. 
// Async/Await provides a more synchronous style of programming for asynchronous operations.

async function getUsers() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getUsers();