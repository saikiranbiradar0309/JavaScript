// switch is useful when you want to compare one value against multiple fixed values.


// Why break?
// break tells JavaScript: "Stop executing the switch now."
/* 

Syntax:

switch (value) {

    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}

*/


let day = 4;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}