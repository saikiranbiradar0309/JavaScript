let age = 20;
console.log(typeof age); // number

let name = "Saikiran";
console.log(typeof name); // string

let isWorking = true;
console.log(typeof isWorking); // boolean

let person = { name: "Saikiran", age: 20 };
console.log(typeof person); // object

let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object

let greet = function() {
    console.log("Hello!");
};
console.log(typeof greet); // function

let unknownValue;
console.log(typeof unknownValue); // undefined

let nullValue = null;
console.log(typeof nullValue); // object (this is a known quirk in JavaScript)

let symbolValue = Symbol("unique");
console.log(typeof symbolValue); // symbol  