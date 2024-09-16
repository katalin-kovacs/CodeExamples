// export is used to make functions and
// objects available for import in other files.

// Function to add two numbers
export function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
export function subtract(a, b) {
  return a - b;
}

// Exporting an object with utility functions
export const mathOperations = {
  add,
  subtract,
};
