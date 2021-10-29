//Write a function to turn a phrase into Pig Latin.

//Your function will be given a phrase or Stirng
//(of one or more space-separated words).  ex: "a sentence with words in it."
//There will be no punctuation in it, 
//and all letters will be lowercased. 
//You should turn //this into the same phrase in Pig Latin.

//Rules
// if words start with 'bcdfghjklpqrstvwyz', then i will remove the first letter from the front, then add that letter to the end.
// then add "ay"

// if words starts with a vowe. a, e, i, o, u, . 
// then add 'yay' to the end of the word.
//If the word begins with a consonant (not a, e, i, o, u), move the first letter to the end and add ‘ay’

//If the word begins with a vowel, add ‘yay’ to the end


// Write your solution below:

//psuedocode
// write a function which takes in a string
// each word from my string woud need to be modifyed. 
// brake string into an array/list , removing the spaces. 
// loop throuh the list/array.
// if it starts with a consonat, = take the first letter off, and add it to the end. 
// if it stats with a vowe. =
// otherwise. do something else. 

// then turn my list/array back into a string. 

function pigLatin(string){
    let stringIntoList = string.split(" ")
    let consonants = 'bcdfghjklpqrstvwyz'
    //console.log(stringIntoList)
    for(let i = 0; i < stringIntoList.lenght; i++){
       // console.log(stringIntoList[i])
        //console.log(stringIntoList[i][0])
    if(consonants.includes(stringIntoList[i])){
        stringIntoList[i] = stringIntoList[i].slice(1) + stringIntoList[i] + 'ay'
           // console.log(fixedWord)   
        } else {
            stringIntoList[i] = stringIntoList[i] + 'yay'
           // console.log(fixedVowelWord)
        }
        console.log(stringIntoList)
    }
    let result =stringIntoList.join(' ')
    //console.log(result)
    return result
}

let newString = pigLatin("break this string into pieces")