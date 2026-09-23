// let

/*

- let is used to declare a variable in javascript.

- A variable is simply a container that stored a value.

let age = 20;

here
a. let --> declares the variable
b. age --> variable name
c. 20 --> value assigned to the variable

*/



// 1. Why do we use let?

// we use let when the value of a variable may change later 

let age = 28;
console.log(age);

age = 30;
console.log(age); // This is allowed because we can reassign a let variable


// 2. let allows reassignment
let name = "Sai"
name = "Saikiran"
console.log(name); // This is allowed because we can reassign a let variable


// 3. let cannot be redeclared in the same scope
let myage = 28;
let myage = 30; // This will throw a SyntaxError because we cannot redeclare a let variable in the same scope
console.log(myage);


// 4. REMEMBER (IMPORTANT)
// Reassignment is allowed
// REDeclaration is NOT allowed in the same scope


// 5. let is block scoped (IMPORTANT)
// This is very important interview concept.

// A block is generally code inside {}.

// For example:
{
    let saiAge = 28;
    console.log(saiAge); // This is allowed because age is declared inside the block
}

console.log(saiAge); // This will throw a ReferenceError because saiAge is not defined outside the block
// Here saiAge exists only inside the block.
// you cannot access saiAge outside the block.



// 6. let can be declared without a value
let isClassStarted;
console.log(isClassStarted); // This will print undefined because we have not assigned a value to the variable yet


// 7. let can be used inside loops


