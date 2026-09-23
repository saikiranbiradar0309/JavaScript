let a = 20;
let b = 10;
let c = 20;

// 1. ==
// Equality operator checks if the values are equal, but does not check the data type.
console.log(a == b);      // false
console.log(a == c);      // true

console.log("\n");


// 2. ===
// Strict equality operator checks if the values and data types are equal.
console.log(a === b);     // false
console.log(a === c);     // true


console.log("\n");

// 3. !=
// Inequality operator checks if the values are not equal, but does not check the data type.
console.log(a != b);      // true
console.log(a != c);      // false


console.log("\n");

// 4. !==
// Strict inequality operator checks if the values and data types are not equal.
console.log(a !== b);     // true
console.log(a !== c);     // false


console.log("\n");


// 5. >
// Greater than operator checks if the left value is greater than the right value.
console.log(a > b);       // true
console.log(a > c);       // false

console.log("\n");


// 6. <
// Less than operator checks if the left value is less than the right value.
console.log(a < b);       // false
console.log(a < c);       // false

console.log("\n");


// 7. >=
// Greater than or equal to operator checks if the left value is greater than or equal to the right value.
console.log(a >= b);      // true
console.log(a >= c);      // true

console.log("\n");

// 8. <=
// Less than or equal to operator checks if the left value is less than or equal to the right value.
console.log(a <= b);      // false
console.log(a <= c);      // true


