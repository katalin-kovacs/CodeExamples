// if Statement
// The if statement executes a block of code if a specified condition is true.
// Use-case: Making decisions based on a condition.
let number = 10;
if (number > 0) {
  console.log("The number is positive.");
}

// else if Statement
// The else if statement allows you to check multiple conditions. It follows an if statement and runs if the previous if condition(s) were false.
// Use-case: Handling multiple mutually exclusive conditions.
let number = 0;
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// switch Statement
// The switch statement is used to perform different actions based on different conditions. It is often used as an alternative to multiple if...else if statements.
// Use-case: Handling multiple potential values for a variable, especially when there are many discrete values to check.
let day = 3; // Sunday = 0, Monday = 1, ..., Saturday = 6
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
