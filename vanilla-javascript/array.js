// An array is a data structure that allows you to store a collection of values under a single variable name. 
// In JavaScript, an array is represented by square brackets []. 
// Each value in the array is called an element, and each element has an index, which is a numeric value that indicates its position in the array.

// Here's an example of an array with some elements:

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie"];

// In this example, fruits is an array that contains four elements: "apple", "banana", "orange", and "kiwi". 
// The first element "apple" has an index of 0, the second element "banana" has an index of 1, and so on.

// forEach(): executes a function for each element in an array.

names.forEach(name => console.log(`Hello, ${name}!`));
// Output: "Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"

// In this example, forEach() executes a function that logs a greeting for each name in the names array.

// map(): creates a new array with the results of calling a function for each element in an array.

const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// In this example, map() creates a new array squaredNumbers that contains the square of each number in the original numbers array.

// sort(): sorts the elements in an array.

fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "kiwi", "orange"]

// filter(): creates a new array with all elements that pass a certain test.

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


// push(): adds one or more elements to the end of an array.

fruits.push("kiwi");
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi"]

// pop(): removes the last element from an array and returns it.

const lastFruit = fruits.pop();
console.log(lastFruit); // Output: "orange"
console.log(fruits); // Output: ["apple", "banana"]

// shift(): removes the first element from an array and returns it.

const firstFruit = fruits.shift();
console.log(firstFruit); // Output: "apple"
console.log(fruits); // Output: ["banana", "orange"]

// unshift(): adds one or more elements to the beginning of an array.

fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "apple", "banana", "orange"]

// slice(): returns a new array containing a portion of the original array.

const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["banana", "orange"]
console.log(fruits); // Output: ["apple", "banana", "orange", "kiwi"]

// splice(): removes or replaces elements from an array.

fruits.splice(1, 2, "pear", "grape");
console.log(fruits); // Output: ["apple", "pear", "grape", "kiwi"]