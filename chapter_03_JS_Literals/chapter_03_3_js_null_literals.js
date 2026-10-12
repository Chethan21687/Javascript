//undefined -if the variable is declared but not initialized, it will have the value undefined. It is a primitive value automatically assigned to variables that have just been declared,
//  or to formal arguments for which there are no actual arguments.

let animal;
    console.log(animal); // undefined
    console.log(typeof animal); // "undefined"


function myFunction() 
{
    //no return statement, so the function returns undefined by default
}
console.log(myFunction()); // undefined


let x;
x=10;
console.log(x); // 10

let bike=null;
console.log(bike); // null
console.log(typeof bike); // "object" - this is a bug in JavaScript, but it has been kept for compatibility reasons.