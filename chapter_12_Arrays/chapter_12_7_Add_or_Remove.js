let a1=[1,2,3]

a1.push(4)//new element will be added at the last
console.log(a1);

a1.pop();//element will be removed from the last
console.log(a1);

a1.push(5,6);//Add multiple elements to the array
console.log(a1);

a1.unshift(0);//Adds the element to the 1st index
console.log(a1);

a1.shift();//Removes the 1st element in the array
console.log(a1);

a1.splice(2,1);//Deletes the element in the array
console.log(a1);

a1.splice(2,0,99);//Deletes the current values and inserts the new value
//in the 2nd position it adds the 99
console.log(a1);

a1.splice(2,2,101);
console.log(a1);

a1.push(7)
console.log(a1);

a1.splice(1,2,10,20)//Replcases 1st and 2nd position element with 10 and 20
console.log(a1);