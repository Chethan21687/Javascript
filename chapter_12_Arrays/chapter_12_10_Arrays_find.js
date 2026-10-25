let nums=[10,25,30,45];
let result=nums.find(temp=>temp>20);
console.log(result)

let result1=nums.findIndex(n=>n>20);
console.log(result1)

let lastindex=nums.findLast(n=>n<20);
console.log(lastindex)

let lastindexof=nums.findLastIndex(n=>n>20);
console.log(lastindexof);