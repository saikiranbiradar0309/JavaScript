// 1. await is used when JavaScript has to wait for an asynchronous operation to finish before
// moving to the next line


// 2. First understand the problem
// Consider:

let result = getData();
console.log(result);

// Suppose getData takes 3 seconds to get the data
// JavaScript doesnot necessarily wait for 3 seconds to get the data. 
// Instead, the operation may return a promise


// A Promise represents:
// "I don't have the final result right now, but I will give it to you later."



// 3. What is await?
// await basically means: Wait for this promise to settle, then continue with the next line of code. 

// Example:

let result = await getData();
console.log(result);

/*
Conceptually

Start getData()
    |
Promise
    |
await
    |
Wait for result
    |
Continue
    |
console.log(result)

*/


// 4. API Example

let response = await requestAnimationFrame.get("http://localhost:8085/api/employees/1");
let a = response.status();
let b = response.statusText();
let responsePayload = await response.json();
let allHeaders = response.headers();