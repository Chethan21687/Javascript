let arr=[1,2,3,4,5]

let slice=arr.slice(1,3);
console.log(slice);

let slice1=arr.slice(2)
console.log(slice1);

console.log(arr.slice(-3,-5));
/***slice(start, end) uses negative indices as offsets from the end: -1 is the last element, -2 the second-last, and so on. The actual index is length + negativeValue.
arr = [1, 2, 3, 4, 5], length 5:
-3 → 5 + (-3) = index 2
-5 → 5 + (-5) = index 0
So the call becomes arr.slice(2, 0).
slice returns elements from start up to but not including end. Here start (2) is after end (0), so there's no range to take → [].
The key point: slice does not reorder or auto-swap its arguments. If start ≥ end, you always get [], regardless of whether the indices were positive or negative.**/