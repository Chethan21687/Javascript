//What is the output of the following expressions. Answer in the comments below.
1.
let a = 100;
console.log(a++ + ++a +a++ + ++a);
console.log(a);

2.
let b = 37;

console.log(--b + b--);

console.log(b);

// A=--b
// A=--37
// A=-36

// B=b--
// B=37
// b=36

3.
let x = 5; 
let y = x-- - --x; 
console.log(x, y);

let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);

