// Difficulty Easier. Concepts General. 

//Imagine a list of numbers from 1 to maxNum, inclusive – except that one of these numbers will be missing from the list.

// You should write a function that takes this list of numbers, as well as the maxNum, and it should return the missing number.

// For example, given a list of numbers, in random order, of 1..10, 8 was removed. Your function would be given the list and the maxNum (10), and it should find 8

// missingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10], 10)
// // returns 8
// This needs to work even if the list isn’t in increasing order

// missingNumber([2, 1, 4, 3, 6, 5, 7, 10, 9], 10)
// // still returns 8
// You can code in missingNumber.js

let a = [1, 2, 3, 4, 5, 6, 7, 9, 10]
count = 10
let missingNumber = new Array();

for(let i =1; i <= count; i++) {
    if (a.indexOf(i) == -1) {
        missingNumber.push(i);
    }
}
console.log(missingNumber)

let 