// var - function scoped, can be redeclared and updated
var x = 10;
var x = 20; // allowed
x = 30; // updating is allowed
console.log(x); // 30

// let - block scoped, cannot be redeclared but can be updated
let y = 10;
y = 20; // allowed
console.log(y); // 20

// const - block scoped, cannot be redeclared or updated
const z = 10;
// z = 20; // error - reassignment not allowed
console.log(z); // 10
