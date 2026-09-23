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


let marks = 75;

if (marks >= 90)
{
    console.log("You got an A grade.");
}

else if (marks >= 80)
{
    console.log("You got a B grade.");
}

else if (marks >= 70)
{
    console.log("You got a C grade.");
}

else if (marks >= 60)
{
    console.log("You got a D grade.");
}

else
{
    console.log("You got an F grade.");
}


