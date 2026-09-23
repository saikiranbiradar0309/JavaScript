let age = 25;
let isWorking = true;


// 1. &&
// Logical AND operator checks if both conditions are true.
console.log(age > 18 && isWorking);      // true
console.log(age < 18 && isWorking);      // false

console.log("\n");

// 2. ||
// Logical OR operator checks if at least one condition is true.
console.log(age > 18 || isWorking);      // true
console.log(age < 18 || isWorking);      // true

console.log("\n");  

// 3. !
// Logical NOT operator negates the condition.
console.log(!isWorking);                  // false
console.log(!(age > 18));                 // false