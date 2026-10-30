function add(a,b,c){
    return a+b+c
}

let num=[10,20,30,50];
    console.log(add(...num));

function hasError(...codes){
    return codes.some(c=>c=>400);
}

let responseCodes=[200,201,404]
let responseCodes1=[400,410,411]

console.log(hasError(responseCodes));
console.log(hasError(responseCodes1));