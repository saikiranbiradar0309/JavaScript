// Nested if means An if statement inside another if statement

let a = 30;

if( a >= 20)
{
    console.log("a is greater than or equal to 20");

    if (a == 10)
    {
        console.log("a is equal to 10")
    }
}

console.log("\n");


let age = 25;
let hasLicence = true;

if (age>=18) {

    if (hasLicence) {
        console.log("You can drive");
    }
}