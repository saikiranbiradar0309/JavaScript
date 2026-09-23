// const

/*

- const is a JavaScript keyword used to declare a variable whose bindig cannot be reassigned.

- In simple words, once a variable is declared using const, it cannot be reassigned to a different value.

- However, if the variable is an object or an array, the properties of the object or the elements of the array can be modified.

- const variables must be initialized at the time of declaration.

*/

// 1. Basic Syntax
const age = 28;
console.log(age);

age = 30;
console.log(age); // This will throw a TypeError because we cannot reassign a const variable


// 2. WHy do we use const?

/*

- Suppose you have an API URL:
  const URL = "http://localhost:8085/api/employees/1";

- You dont want to accidentally change the URL later.

- SO const communicates:
    "This variable should not be reassigned."

- For example
  const response = await request.get(URL);

- Here you dont need to replace response witj some completelu different value later.

*/



// 3. const must be Initialized

/* 

- This is not allowed:
  const age;

- You will get an error because const must be given a value when declared.

- This is allowed:
  const age = 28;

*/