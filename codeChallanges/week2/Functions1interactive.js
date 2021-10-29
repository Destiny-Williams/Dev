let jonSnowHealth = 100

//jonSnowHeath = jonSnowHealth.toString()

//console.log( typeof jonSnowHealth)

//console.log('Jon\'s health is ' + jonSnowHealth)

let theWinnerIs = 'Jamie is the winner.'

let newWinner = theWinnerIs.replace('Jame', 'Jon')

console.log(newWinner) 

let newWinnerLower = newWinner.toLowerCase()

let newWinnerSplit = newWinnerLower.split('')
//"jon is the winner."
//["jon", "is", "the", "winner"]
//"jon-is-the=winner"
let newWinnerKebob = newWinnerSplit.join('')

//console.log(newWinnerKebob)

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive!')
    } else {
        console.log('RIP Jon Snow')
    }
}

//isJonAlive()

function supriseAttack(attack) {
    jonSnowHealth -= attack
    console.log(`Jon's health is now ${jonSnowHealth}`)
    isJonAlive()
}

supriseAttack(12)
supriseAttack(6)
supriseAttack(20)


// two person greeting

function greeting(person1, person2){
    console.log(`${person1} and ${person2} say hello to each other.`)
}
greeting('Jon Sonw', 'Ned Stark')

function rollDice() {
    let possibleRoles = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possibleRoles.lenght)
    return possibleRoles[randomNumber]
}

let firstRoll = rollDice()
let secondRoll = rollDice()

console.log(firstRoll)
console.log(secondRoll)

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    return firstRoll * secondRoll
}

let multipliedNumber = diceMultiplier()

console.log(multipliedNumber)