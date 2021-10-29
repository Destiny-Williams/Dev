
/*
1.  given a number n, return an array contaiing n.
2. unique random number between 1-10, inclusive.
( that is, do not repeat any numbers in the returned list.)
you can trust that this function will neber be called with n<0, or n > 10.
*/


// Write your code below this line.

// fuction take a number between 1-10, and returns an array of unique numbers.

function luckyNumbers(n){
    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 10) + 1);
    }
    return array;

}
 console.log(luckyNumbers(4))

// function luckyNums(n){
//     let array = [];
        
//     for (let i =1; i < (n + 1); i++){
//         randomNum = randomNum =((Math.floor(Math.random() * 10) + 1));
//     }
//     array.push(randomNum);
//     }
//     return array;
// }

// console.log(luckyNums());
