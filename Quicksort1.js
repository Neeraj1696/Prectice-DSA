// let arr = [];

// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.pop();

// arr.shift(1);
// arr.unshift(11);

// console.log(arr);
const arr = ["a", "b", "d"];

let start = 2;
let deleteCount = 0;

arr.splice(start, deleteCount, "c");

console.log(arr);
