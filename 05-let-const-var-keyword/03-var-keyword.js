// var

// var is another keyword used to declare variables in JavaScript.

var age = 25;
console.log(age);

// However, var is the older way of declaring variables. In modern JavaScript, 
// we generally prefer let and const.


// 1. var allows reassignment

let name = "Sai";
name = "Saikiran";
console.log(name); // This is allowed because we can reassign a var variable


// 2. var allows redeclaration in the same scope

var myage = 28;
var myage = 30; // This is allowed because we can redeclare a var variable in the same scope
console.log(myage);


// 3. var is function scoped (IMPORTANT)
// This is very important interview concept.

// A function scope means that a variable declared inside a function is only accessible inside that function.

// For example:
function myFunction() {
    var saiAge = 28;
    console.log(saiAge); // This is allowed because saiAge is declared inside the function
}

myFunction();

console.log(saiAge); // This will throw a ReferenceError because saiAge is not defined outside the function
// Here saiAge exists only inside the function.



// 4. var inside a loop is not block scoped (IMPORTANT)
// This is very important interview concept.

// A block is generally code inside {}.

// For example:
for (var i = 0; i < 5; i++) {
    console.log(i); // This is allowed because i is declared inside the block
}

console.log(i); // This is allowed because var is not block scoped
// Here i exists outside the block as well.




// 5. var can be declared without initialization

var myVar;
console.log(myVar); // This will print undefined because myVar is declared but not initialized

myVar = 10;
console.log(myVar); // This will print 10 because myVar is now initialized



// 6. var inside a function
function employeeDetails() {
    var employeeName = "Sai";
    console.log(employeeName); // This is allowed because employeeName is declared inside the function
}

employeeDetails();

console.log(employeeName); // This will throw a ReferenceError because employeeName is not defined outside the function
// Here employeeName exists only inside the function.