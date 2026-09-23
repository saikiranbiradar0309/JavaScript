// This is used when we have multiple conditions

/*

Syntax:

if (condition1)
{
    // if condition1 is true, this code block will be executed
}

else if (condition2)
{
    // if condition2 is true, this code block will be executed
}

else if (condition3)
{
    // if condition3 is true, this code block will be executed
}
    
else
{
    // if all the above conditions are false, this code block will be executed
}
*/


// ORDER MATTERS

// Look at this
let marks = 95;

if (marks >= 35) 
{
    console.log("Student has passed the exam.");
}

else if(marks >= 55)
{
    console.log("Student has scored grade B.");
}

else (marks >= 85)
{
    console.log("Student has scored grade A");
}