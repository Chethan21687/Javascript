let tests=["peter","andrew","adam","leone"]

for (let i=0;i<tests.length;i++){
    console.log(i,tests[i]);
}

console.log("-----------------------------------------");


for (let test in tests){
    console.log(test)
}
console.log("-----------------------------------------");


console.log("-----------------for each----------------------");
//for-each
tests.forEach((test,index)=>{
    console.log('${index}:${test}');
});

//index,test

for(let [i,test] of tests.entries()){
    console.log(i,test)
}

let bikes=["Bajaj","Honda","Hyundai","RE","TVS"]
for (let bike in bikes){
    console.log(bike,"==>",bikes[bike]);
}