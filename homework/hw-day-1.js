//Question #1

// Write a function that takes a string and an array of strings ( in this example dog_names) and checks if 
// one of the list members (dog names) is in the string . Return an array of the dog names found in the array

function checkMembers(string, array) {
    return array.filter(i => string.includes(i))
}

var dogNames = ["Max","Fido","Gizmo","Nala"]
var testString1 = "Hello, my dog is Max, and they have purple eyes!"
var testString2 = "My Dog is fast, her name is Tippi"
var testString3 = "Come here Fido and Gizmo come here"

console.log(checkMembers(testString1, dogNames))
console.log(checkMembers(testString2, dogNames))
console.log(checkMembers(testString3, dogNames))



// Question #2

// Write a function using map to convert an array of numbers from inches to feet.

function footConvert(inches) {
    return inches.map(inches => inches / 12)
}

var heightsInInches = [66, 64, 60, 52, 72, 80, 51]

console.log(footConvert(heightsInInches))


// Question #3

// Using the Ternary Operator and Map, create an array that adds ‘is eating pizza’ to every name from 
// the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
const pizzaArray = tmnt.map(name => name[name.length - 1] === 'o' ? `${name} is eating pizza` : `${name} is being rude`)

console.log(pizzaArray)

// Also found a slightly shorter way to do it using ".endsWith()" 
// ".endsWith() checks whether a string ends with a given suffix or not"

const tmnt2 = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
const pizzaArray2 = tmnt.map(name => name.endsWith('o') ? `${name} is eating pizza` : `${name} is being rude`)

console.log(pizzaArray)

// JavaScript Ternary Operator
// function determine_Age(age){
//     return ( age < 18 ) ? 'Minor' : (age >= 18 && age <= 65) ?
//     'Adult Not Retired Yet' : 'Elderly Person Retired'
// }



// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max function. 
// The list will be all positive numbers.



// Question #5

// At the end of the third iteration ( the third time the loop has ran ) of this ‘For Loop’ define the 
// state of all the variables used in this code block


// Question #6:

// Complete 3 codewars problems using JavaScript, start with ones you have already solved in python. 
// Paste a link in your .js file to the codewar problem and your solution.

