let browsers=["chrome","firefox","Opera","Safari","edge"];
console.log(browsers);

browsers.pop()
console.log(browsers);

browsers.shift()
console.log(browsers);

for (let i=0;i<browsers.length;i++){
    console.log(browsers[i])
    if (browsers[i]=="Opera"){
        console.log("Opera is removed from Automation");
    }

}