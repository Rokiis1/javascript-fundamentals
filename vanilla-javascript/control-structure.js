// If/else statements
// The if/else statement allows you to execute certain code blocks based on a certain condition.

let num = 5;
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// switch statements:
// The switch statement allows you to execute different code blocks based on the value of a variable.

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("Today is not Monday, Tuesday, or Wednesday.");
}

// Loops:
// Loops allow you to execute the same block of code multiple times. In JavaScript, there are three types of loops: for, while, and do/while.

// Example using for loop:

for (let i = 0; i < 5; i++) {
    console.log(i);
  }

// Example using while loop:

let c = 0;
while (c < 5) {
  console.log(c);
  c++;
}

// Example using do/while loop:

let v = 0;
do {
  console.log(v);
  v++;
} while (v < 5);

  