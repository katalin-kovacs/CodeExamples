// for Loop
// Use-case: Iterating over a known range or collection.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while Loop
// The while loop is used when the number of iterations is not known beforehand and depends on a condition.
// Use-case: Iterating while a condition is true, such as waiting for a condition to change.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do...while Loop
// Use-case: When you need to ensure the loop body executes at least once, like reading user input at least once.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
