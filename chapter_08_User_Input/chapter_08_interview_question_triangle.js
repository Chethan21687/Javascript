const prompt = require('prompt-sync')();
const a=Number(prompt('Side a: '));
const b=Number(prompt('Side b: '));
const c=Number(prompt('Side c: '));
if (a === b && b === c) {
    console.log('Equilateral');
} else if (a === b || b === c || a === c) {
    console.log('Isosceles');
} else {
    console.log('Scalene');
}
