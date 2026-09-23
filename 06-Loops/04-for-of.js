// for...of

// for...of is used to loop through the values of an iterable, such as an array or string

// This is very useful in automation

// Example with array

let employees = ["Saikiran","Niranjan","Datta"];

for (let employee of employees) {
    console.log(employee);
}

// OUTPUT
// Saikiran
// Niranjan
// Datta

// Here employee directly receives the value

// Execution
/*

employee = "John"
employee = "Mike"
employee = "David"

*/

// you dont need employees[i]





// for...of with numbers

let numbers = [10,20,30,40];

for (let number of numbers) {
    console.log(number);
}



// for...of with strings

let name = "Saikiran";

for (let character of name) {
    console.log(character);
}