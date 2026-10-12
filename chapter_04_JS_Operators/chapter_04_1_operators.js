let x=10+3
console.log(x); // 13

//Data types in JavaScript are divided into two categories: primitive and non-primitive. Primitive data types include string, number, boolean, null, undefined, symbol, and bigint. Non-primitive data types include objects, arrays, and functions.
//primitives are immutable, meaning their values cannot be changed once they are created. Non-primitives are mutable, meaning their values can be changed after they are created.
//non primitive data types are reference types, meaning they are stored in memory as references to the actual data. When you assign a non-primitive value to a variable, you are actually assigning a reference to that value, not the value itself. This means that if you change the value of a non-primitive variable, it will affect all other variables that reference that same value.

//example of primitive datatype:
let name = "John"; // string
let age = 30; // number
let isStudent = true;
let address = null; // null
let phone; // undefined
let id = Symbol("id"); // symbol
let bigNumber = 1234567890123456789012345678901234567890n; // bigint

//example of non-primitive datatype:
let person = { name: "John", age: 30 }; // object
let numbers = [1, 2, 3]; // array
let greet = function() { console.log("Hello!"); };