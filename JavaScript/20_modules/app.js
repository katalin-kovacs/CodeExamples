// Import specific functions from the module
import { add, subtract } from "./mathUtils.js";

// Import the entire module as an object
import * as mathUtils from "./mathUtils.js";

// Use the imported functions
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

// Use the imported object
console.log(mathUtils.mathOperations.add(10, 5)); // Output: 15
console.log(mathUtils.mathOperations.subtract(10, 5)); // Output: 5
