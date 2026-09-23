// do while

// do while is similar to while, but there is one major difference.
// do...while executes the code at least once


/*

Syntax

do {
    // code
} while (condition);

*/


// Example
let i = 1;

do {
    console.log(i);

    i++;
} while (i<=5);



// 1. Difference between while and do...while loop

/*

Consider

let i = 10;
while (i<=5) {
    console.log(i);
}

Output: Nothing 
Because the condition is already false



Now:

let i = 10;

do {
    console.log(i);
} while (i<=5);

Output: 10
Why? Because do...while executes the code first and checks the condition afterwards
*/



// 2. Easy to remember

/*

while
 ↓
Check condition
 ↓
Execute code


do...while
 ↓
Execute code
 ↓
Check condition

*/