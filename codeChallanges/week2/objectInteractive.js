let person = {
    firstName: "Chanandler",
    lastName: "Bong",
    age: 34
}

//console.log(person.firstName)

//console.log(person['firstName'])

let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'maragrita'
}
//destructing 
const {dessert} = meal

// console.log(dessert)

const {appetizer, entree} = meal

// console.log(appetizer)
// console.log(entree)

const {drink: bestDrinkEver} = meal
//or
//const bestDrinkEver =meal.drink

console.log(bestDrinkEver)

// 
// or 

const{appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(bestDrinkEver)
// console.log(myDrink)

// looping over (key's)

// for (let key in person){
//     console.log(key)
// }

// for (let key in person) {
//     console.log(person[key])
// }

person.job = "Statistical Analysis and Data Recondgiuration"

person ['pets'] = ['Chicken', 'Duck']

// for (let key in person){
//     console.log(key)
// }

let teams = {
    teamOne: ['ryan', 'alex'],
    teamTwo: ['henry', 'cole', 'charlie'],
    teamThree: ['porter', 'blake'],
    teamFour: ['monique', 'mariko'],
    teamFive: ['shania', 'deepta']
}

delete teams.teamTwo

// for (let team in teams){
//     console.log(team)
// }

class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting() {
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}.`)
    }
}

// eample: lassie could also be dog1 and bethoven could also be dog2

let lassie = new Dog('Lassie', 'Collie', 18)

//console.log(lassie.name)

let beethoven = new Dog('Beethoven', 'St.Bernard', 12)

//console.log(beethoven.breed)

lassie.greeting()

beethoven.greeting()

for (key in lassie){
    console.log(lassie[key])
}

