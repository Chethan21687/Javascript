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