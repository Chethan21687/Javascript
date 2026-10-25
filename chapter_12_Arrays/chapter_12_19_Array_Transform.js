//every function is used if the every element is greater than provided number in the condition then it will True
//every function is used if atleast one element is not greater than provided number in the condition then it will false

console.log([80,90,95].every(s=>s>70));
console.log([80,60,75].every(s=>s>70));

//some function is used if atleast one value is greater than provider condition
console.log([56,90,78].some(s=>s<70));
console.log([80,85,90].some(s=>s<70));