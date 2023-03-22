// In JavaScript, an object is a data type that stores a collection of related data and functions, which are called properties and methods, respectively. 
//Objects are defined using curly braces { }, and the properties and methods are defined as key-value pairs within the object.

let person = {
    name: "John",
    age: 30,
    occupation: "Developer",
    greet: function() {
      console.log("Hello, my name is " + this.name + " and I'm a " + this.occupation);
    }
  }
  
// In the first example, dot notation is used to access the name property of the person object. 
// In the second example, the greet method is called using dot notation.

console.log(person.name); // Output: John

person.greet(); // Output: Hello, my name is John and I'm a Developer
