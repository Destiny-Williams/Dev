// var best = [1, 2, 3, 4, 5]

// //var sum = Math.min.apply(Math, best) 

// for (let i = 1; i <= 101; i++)
// let sum = arr[i]

// console.log(sum)

// let arr = [15, 10, 20, 22, 1, 9]
// let max = arr[1]
// let min = arr[0]
// let best = arr => {
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] > max){
//       max = arr[i]
//     }
//     if (arr[i] < min && arr.indexOf(arr[i]) < arr.indexOf(max)){
//       min = arr[i]
//     }
//   }
//   return Buy  (${min} and sell at ${max})
// }

// console.log(best(arr));
let best = arr => {
  let profit = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
    } else if ((arr[i]- min) > profit){
        profit =  arr[i] - min;
      }
  }
  return profit;
};

console.log(best([15, 10, 20, 22, 1, 9]));