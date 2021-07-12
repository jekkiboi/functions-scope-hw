//////////QUESTION 1.1/////////////////
//PARAMETER: a kind of variable used to pass information 
//into functions. ARGUEMENTS are the values
// we give to the parameter
//example 
// const rating1 = 'good'
// const rating2 = 'bad'

// function food(quality){
//     console.log (`Pizza is so ${quality}`);
// }
// food(rating1);

//The Parameter is set to 'quality'
//The current Argument invoked is rating 1


//////////QUESTION 1.2///////////////
///console.log()VS return
//console.log() is used to print info to the console.
// a return is used to call a value back into the arguement



//////////QUESTION 1.3///////////////
//a return stores a value as the given output 
//of the function to the console.

//////////QUESTION 2///////////////
//turned palindrome function into an if/else statement
// const wordIsPalindrome = checkPalindrome("Radar");
// function checkPalindrome(isPalindrome1, isPalindrome2){


function checkPalindrome(string){
    const lowercaseString = string.toLowerCase()
    console.log(lowercaseString);
    //convert string to lowercase .toLowerCase
    //split string into array .split
    //reverse string .Reverse
    //join the string .join
const reversedString = lowercaseString.split("").reverse("").join("");

    //compare .charReverse to string
    // return lowercaseString === reversedString
   

if (lowercaseString === reversedString) {
console.log('The word IS a palindrome!')
}
else {
    console.log('The word is NOT a palindrome!')
    }
}
checkPalindrome('moo');

//////////QUESTION 3///////////////
const students = [
'Blossom', 
'Bubbles', 
'Buttercup'
];

// const checkStudent = 'Buttercup';

function checkList(name){
    //This for loop goes throught the students array and
    //looks for checkStudent
    for (let i=0; i<students.length; i++){
        if (students[i] == name) {
            return true
        } 
//dont want to put false here, bc it'll terminate the loop
        else {

        }
    }
    return false
}
console.log(checkList('Blossom'))

/////////////QUESTION 4///////////////
let sum = 0
const AR = [1, 2, 3, 4, 5, 6];
function sumArray(AR){
    for(let i=0; i<AR.length; i++){
        sum += AR[i];
//+= makes the sum variable add to its value every value of the loop
    }
    return sum
}
console.log(sumArray(AR));



