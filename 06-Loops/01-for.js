// Loops is used when you wwant to execute a block of code multiple times.

// 1. for loop
// for loop is used when you know how many times you want to execute a block of code.

/* 

Syntax:

for (initialization; condition; increment/decrement) {
    // code to be executed
}

*/

for (let i=1; i<=5; i++)
{
    console.log(i); // This will print 1, 2, 3, 4, 5
}



// 2. How does it work
/*

- Look at this

for (let i=1; i<=5; i++)
{
    console.log(i);
}


- There are 3 important parts
a. let i=1
    - Initialization: This is where we initialize the loop variable. In this case, we are initializing i to 1.

b. i<=5
    - Condition: This is where we check if the loop should continue or not. In this case, we are checking if i is less than or equal to 5.
    
c. i++
    - Increment/Decrement: This is where we increment or decrement the loop variable. In this case, we are incrementing i by 1.




- Execution Flow:

i = 1
 ↓
Is 1 <= 5? → Yes → print 1
 ↓
i++
 ↓
i = 2
 ↓
Is 2 <= 5? → Yes → print 2
 ↓
...
 ↓
i = 6
 ↓
Is 6 <= 5? → No
 ↓
Stop
*/



// 3. for loop example with an array

let employees = ["Saikiran", "Niranjan", "Datta"];

for (let i=0; i<employees.length; i++)
{
    console.log(employees[i]);
}



// 4. When to use for loop

/*

Use a traditional for loop when:
a. You need an index
b. You need to control the counter
c. You know or can define the looping condition

*/