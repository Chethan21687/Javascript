let decimal=42; // decimal
console.log(decimal); // 42

let binary=0b101010; // binary
console.log(binary); // 42

let hexadecimal=0x2A; // hexadecimal
console.log(hexadecimal); // 42

let octal=0o52; // octal
console.log(octal); // 42

let float1=3.14; // floating point
let float2=.5; // floating point with exponent
let float3=5.; // floating point with exponent
let float4=-5.0; // floating point with exponent

let exponential1=1e3; // exponential notation
let exponential2=1e-3; // exponential notation
let exponential3=2E10; // exponential notation

console.log(exponential1); // 1000
console.log(exponential2); // 0.001
console.log(exponential3); // 20000000000


let big=1234567890123456789012345678901234567890n; // BigInt literal
let big2=BigInt(1234567890123456789012345678901234567890); // BigInt constructor
let bigFromNum= BigInt(42);

console.log('BigInt Literal:',big);
console.log('BigInt from Literal:',big2);
console.log("BigInt from Number:",bigFromNum);
comsole.log("type of BigInt:",typeof big);