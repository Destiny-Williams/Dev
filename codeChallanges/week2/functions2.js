// //arrow functions
// //                what i want to return num1 and num2
// const add = (num1, num2) => num1 + num2;

// const subtract = (num1, num2) => num1 - num2;

// const multiply = (num1, num2) => num1 * num2;

// const divide = (num1, num2) => num1 / num2;

// // creating a calculator.
// //                           function we want to run is call back.
// const calculator = (num1, num2, callback) =>  {   // higher order function.
//     if (+num1 && +num2){    /// this will check
//         num1 = +num1;     // checking: can num1 be turned into a number
//         num2 = +num2;
//         return callback(num1, num2);
//     } else {
//         console.log("you need to send in numbers as the parameters")  // if they do not turn in numbers.
//     }
// }
// const result = calculator(1,2, add)   // add is our call back function. // we can cane the call from add to divide ect...

// console.log(result);


// // we did not ask it to return. but they typicaly and do one or the other... or both. 

// looping and chaning the values inside.  ex: discounts from our arry. like you would see in a store. 
// we want to appy discounts by Categorys ect... 
// array would be cat or dog products. dogProducts catProducts

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]


// set up for discounts. 

const applyPercentDiscout = (product, discount) => {
product.displayPrice = product.basePrice * (1 - discount) // i want to chand the dispaly price base of discount and pice. 
                                                         //( discount could be .25 ect..)
};
const applyFlatRateDiscount =  (product, discount) => {
    product.displayPrice = product.basePrice - discount 
};

// higher order function that will use ^^ these as function

// const applyDiscoutns = (arr, callback, discount) => {
//     arr.forEach((product) => {                        // before we called produt/element
//         callback(product, discount);                   // this is an example of a function inside of a function. 
//     });                          
// };

// //const results = applyDiscoutns(dogProducts, applyPercentDiscount, 0.25)  // would not run.
//  applyDiscoutns(dogProducts, applyPercentDiscout, 0.25);

//console.log(dogProducts);
// defining higher order function.
const applyDiscoutnsByCategory = (arr, category, callback, discount) => {
    arr.forEach((product) => {
        if(product.category === category) {
            callback(product, discount);
        } else {
            console.log("this product is not in the discounted category");
        }
    });
};

applyPercentDiscout(catProducts, 1, applyFlatRateDiscount, 1.00) 

console.log(catProducts)

// New eample of a Sandwich

function makeSandwich(bread) {
return function(ingredients) {
    let order = `You ordered a ${bread} bread sandwich with `;

    for (let i = 0; i < ingredients.lenght; i++) {
        if (i === ingredients.lenght -1 && i !== 0) {
            order += `and ${ingredients[i]}.`;
        } else if (ingredients.lenght === 1) {
            order += `${ingredients[i]}.`;
        } else {
            order += `${ingredients[i]},`;
        }
    }
    return order;
};
}

const makeWheatSandwich = makeSandwich('wheat');

//const results + makeWheatSandwich

makeWhheatSandwich(['pickles', 'cheese', 'ham', 'lettuce']);

console.log(results);