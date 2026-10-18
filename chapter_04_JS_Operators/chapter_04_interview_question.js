//rule of thumb
//loose equality (does type coercion,surprising) 
// strict equality (no coercion,what you usually want)===

// 1.Empty string vs 0 vs "0" (transitive broken)

console.log("" == 0); //true
console.log(0 == "0"); //true
console.log("" == "0"); //false

//fixes it
console.log("" === 0); //false
console.log(0 === "0");
console.log("" === "0"); //false

console.log(5!="5");
console.log(5!=="5");

//Interview Question on Ternary Operators
let actualstatuscode=200;
let expectedstatuscode=200;
let isMatch=(actualstatuscode===expectedstatuscode)?"Pass":"Fail";
console.log(isMatch);

let environment="Staging";
let baseurl=(environment==="Staging")
?"https://staging.example.com"
:"https://production.example.com";
console.log(baseurl);

let ci=true;
let browsermode=ci? "Headless":"UI";
console.log(browsermode);

let responsetime=850;
let sla=1000;
let isSlaMet=(responsetime<=sla)?"Pass":"Fail";
console.log(`Response: ${responsetime}ms - SLA: ${sla}ms, Result: ${isSlaMet}`);

//Template Literals
console.log(`What is the SLA time? ${sla}ms`);

let condition=true;
let isSKMale=(condition)?"true":"false";
console.log(isSKMale);

console.log(`Is SK Male? ${isSKMale}`);