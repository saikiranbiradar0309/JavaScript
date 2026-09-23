// for...in


// for...in is primarily used to iterate over the keys/properties of an object.

// Example

let employee = {
    empName: "Saikiran",
    empAge: 28,
    salary: 120000
};

for (let key in employee) {
    console.log(key);
}