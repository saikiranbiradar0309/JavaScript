// while loop

// A while loop executes the code as long as the condition is true

/*

Syntax

while (condition) {
    // code
}

*/


let i = 1;

while (i<=5) {
    console.log(i);
    i++;
}


// 1. How it works

/* 

i = 1
 ↓
Is i <= 5?
 ↓
Yes → print
 ↓
i++
 ↓
Check again
 ↓
...
 ↓
i = 6
 ↓
Condition false
 ↓
Stop


*/


// IMPORTANT

// You need to make sure the condition eventually becomes false

// for example

let j = 1;

while (j <= 5) {
    console.log(j);
}

// ❌ This creates an infinite loop because j never changes.

// you should do j++ inside the loop