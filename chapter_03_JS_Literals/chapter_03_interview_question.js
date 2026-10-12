//which one is not a literal here?
//true
//"undefined"
//null
//undefined

//Answer : undefined is not a literal - because if a variable is not declared javascript automatically 
// considers the value as undefined automatically.

//What does console.log([1,,3,].length) print?
//Answer : 3 - because the array has 3 elements, 
// but the second element is empty (sparse array).

//what does console.log(0b1010 + 0o10 + 0xA) print?
//28
//Nan
//0b10100o0100xA
//30

//Different types of datatypes in javascript are:
//1. Primitive Datatypes
//2. Non-Primitive Datatypes

//primitives are immutable and non-primitives are mutable.
//Primitive datatypes are: string, number, boolean, null, undefined, symbol, bigint
//Non-Primitive datatypes are: object, array, function

//example of primitive datatype:
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let address = null; // null
let phone; // undefined
let id = Symbol("id"); // symbol
let bigNumber = 1234567890123456789012345678901234567890n; // bigint
let bigNumber2 = 1234567890123456789012345678901234567890n; // bigint
//example of non-primitive datatype:
let person = { name: "John", age: 30 }; // object
let numbers = [1, 2, 3]; // array
let greet = function() { console.log("Hello!"); }; // function

