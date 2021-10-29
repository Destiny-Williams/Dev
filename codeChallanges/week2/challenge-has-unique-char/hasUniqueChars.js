// Write your code below

let testWord = "Monday"

function isUnique(str) {
    return new Set (str).size == str.length;

}
// console.log(isUnique(testWord))  = True
//0r for false we would put in a incorect test word. 
console.log(isUnique ("Moonday"))
 
// "Moonday" was our example b/c double oo goes out side of the lenght we are testing for. 
// set can not have repeat or size that is not the same. we alos need to look at the lenght of the string. 
// take a way, that our testWord is seting the standard, and using Set (str).size and str.length sets our standards for what the code looking for.  

