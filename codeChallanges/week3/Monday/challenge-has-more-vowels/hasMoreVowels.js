const moreVowels = string => {
    vowels = ['a', 'e', 'i', 'o', 'u',];
    stringArr =string.split('');
    stringVowelArray = stringArr.filter(element => vowels.includes(element));
    stringConsArray = stringArr.filter(element => vowels.includes(element) === false);
    if (stringVowelArray.length > stringConsArray.length ){
    return true;
}
return false;
};

console.log((moreVowels("mose")));