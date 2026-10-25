let original=[1,2,3,4]
let copy1=[...original]

console.log(original)
console.log(copy1)

let copy2=original.slice();
//slice option creates a new array every time when the element gets added each time
copy2.push(92);
copy2.push(103);
console.log(original);
console.log(copy1);
console.log(copy2);

//you can directly change the values in the array we can deepcopy
let deepcopy=original;
deepcopy.push(91);
console.log(original);
console.log(deepcopy);