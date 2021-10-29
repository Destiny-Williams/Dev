// Write your code below

const palindrome = word => {
    const wordArray = word.split("")
    let j = (wordArray.length -1 )
    for (let i = 0; i < Math.round(wordArray.length / 2); i++) {
    let j = (j-i)

    console.log(wordArray.length)
    console.log(math.round(wordArray.lenght /2 ))
    
    
    if (wordArray[i] == wordArray[j]) {
        return true
    } else {
        return false
    }
    }
}

//console.log(palindrome('noon'))
console.log(wordArray)