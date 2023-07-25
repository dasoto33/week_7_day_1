// Testing connection

console.log('Hello Matrix')

// Declare a variable let, const, var

var firstName

console.log(firstName)

firstName = 'sean'

console.log(firstName)

firstName = 'dylan'

console.log(firstName)

// bad practice redeclaring variable with var
var firstName = 1
console.log(firstName)

// let -> when updating value

let counter = 0
counter++

console.log(counter)

// count -> when value remains the same

const fullName = 'Dylan Smith'

/*
error cant update const variable
fullName = 'Sean Currie'
err cannot reassign let or const variables
let counter
*/

// terminating statements with semicolons
console.log(firstName); console.log(cunter); console.log(fullName);

// Strings
const string1 = 'This is a string'
let string2
string2 = "This is another string"
const string3 = "This is Sean's String"
const string4 = 'This is Sean\'s String'

const joinedString = string1 + ' added at end'
console.log(joinedString)

const concatString = string3 + ' ' + string4
console.log(concatString)
const fullName2 = 'Sean' + ' ' + 'Currie'
console.log(fullName2)

// indexing into string
console.log(fullName2[0])
console.log(fullName2[-1])
console.log(fullName2[100])
console.log('test')

console.log(fullName.charAt(0))

console.log(fullName.toUpperCase)
console.log("I'M NOT YELLING".toLowerCase())

console.log(fullName2.slice[0,4])
console.log(fullName2.substring[0,5])

// strings are immutable, all methods are out of place
console.log(fullName, fullName2)

console.log(fullName2.slice(-6))

const marriedName = fullName.replace('Smith', 'Cervantes')
console.log(fullName)

// Template Literals aka formatted string
const congratsMsgIncorrect = 'Congrats on the Marriage ${marriedName}'
const congratsMsg = 
`Congrats on the Marriage ${marriedName}
You two are the best
`
console.log(congratsMsg)

console.log(`Your Matrix instructors are ${fullName} ${fullName2}`)

// length string
console.log(fullName.length)
console.log(fullName[fullName.length - 1])

// check type
console.log(typeof fullName)

// Numeric Types

let number1 = 1

console.log(typeof number1)

let aFloat = 3.14

console.log(typeof aFloat)

console.log(5+5)
console.log(10*10)
console.log(10/2)
console.log(5**2)
console.log(10-5)
console.log(11/2)
console.log(Math,floor(11/2))
console.log(Math.ceil(11/2))

number1++
console.log(number1++)
console.log(number1)
console.log(++number1)

console.log(11 % 5)
console.log(number1 % 2 === 0 ? 'Even' : 'Odd')
console.log(10 % 2 === 0 ? 'Even' : 'Odd')

// Type Conversions

stringNum = number1.toString()
console.log(typeof stringNum)

console.log(parseInt(stringNum))
console.log(parseFloat(stringNum))

console.log(parseInt('12.9'))
console.log(parseFloat('12.9'))

console.log('10' + 10)
console.log(10 + '10')

//boolean
const bool1 = true
console.log(typeof bool1)

const bool2 = false
console.log(typeof bool2)

console.log(5 > 6)
console.log(5 >= 5)
console.log(10 == 10)
console.log(10 == '10')
console.log(10 === 10)

console.log(!(10 > 11))
console.log(10 !== 11)
console.log(!false)
console.log(!true)

console.log(Boolean(0), 0)
console.log(Boolean(1), 1)
console.log(Boolean(-1), -1)
console.log(Boolean(false), false)
console.log(Boolean(true), true)
console.log(Boolean('false'), 'false')
console.log(Boolean(''), '')
console.log(Boolean([]),[])
console.log(Boolean())

let array1 = []
if (array1)(console.log('list not empty'))

console.log(true && true)
console.log(true && false)
console.log(false && true)

console.log(true || false)
console.log(false || true || false)

function t1(){
    console.log('t1 ran')
    return true
}

function t2(){
    console.log('t2 ran')
    return false
}

console.log(t2() && t1())
console.log(t1() && t2())
console.log(t1() || t2())
console.log(t2() || t2() || t1())

let newString

console.log(typeof newString)

newString = null
console.log(typeof newString)
console.log(newString)

if (true){
    var varVariable = 'var'
    console.log(varVariable, 'in control')
}

if (true){
    let letVariable = 'let'
    console.log(letVariable, 'in control')
}

if (true){
    const constVariable = 'const'
    console.log(constVariable, 'in control')
}

console.log(varVariable, 'global')
// let & const only exists in if statements
// console.log(letVariable, 'global')
// console.log(constVariable, 'global')

// Arrays

let studentArray = ['ben', 'sima', 'michael', 'christian']

console.log(typeof studentArray)

console.log(Array.isArray(studentArray))
console.log(Array.isArray('string'))

console.log(studentArray[0])
console.log(studentArray[studentArray.length - 1])

console.log(studentArray.length)

const musicians = []

musicians.push('bob dyan')
musicians.push('neil young')

console.log(musicians)

musicians.push('j.cole', 'lil wayne')

console.log(musicians)

let removedArtist = musicians.pop()

console.log(removedArtist)

console.log(musicians)

let [bd, ny, jc] = musicians
let [bd2, ,jc2] = musicians

console.log(bd)
console.log(ny, jc)
console.log(bd2, jc2)

console.log(studentArray)

let [ben, ...restOfStudents] = studentArray

console.log(ben, restOfStudents)

studentArray.unshift('david')

console.log(studentArray)

studentArray.shift()
console.log(studentArray)

console.log(studentArray.indexOf('michael'))
console.log(studentArray.indexOf('mich'))

studentArray.push('david', 'tajay')


// Arrow function
// (param) => {}

const myArrow = (num1,num2) => {
    return num1 + num2
}

console.log(myArrow(1,2))

console.log(studentArray.map((student) => student.toUpperCase()))

console.log(studentArray.map((student) => {
    return student.toUpperCase()
}))

console.log(studentArray)

console.log(studentArray.filter((student) => student[student.length - 1] !== 'n'))

let matrixstring = studentArray.reduce((acc, student) => acc + `${student}`) + "welcome to JS"
console.log(matrixstring)

console.log(studentArray.toString())

const joinedStudentString = studentArray.join(',')
console.log(joinedStudentString)

console.log(studentArray.slice[0,2])
console.log(studentArray.slice[4])

console.log(musicians)

let removedArtists = musicians.splice(1,2,'the beatles', 'queen', 'lil wayne' )
console.log(musicians, 'musicians')
console.log(removedArtists)

musicians.splice(3)
console.log(musicians)

/*
In the code below make an array of your favorite foods.
Then, using the methods we have learned, add *"Fried Tarantulas" to the end of the array, then add
*"Mokh Mchermel" to the front. Then, using slice of the now modified array, print your origin.
*/

let favFood = ['Lasagna', 'Gyro', 'Ribeye', 'Carrot Cake']
favFood.push('Fried Tarantulas')
favFood.unshift('Mokh Mchermel')

// hoisting
console.log(addNums(100,1909))
/*
cannot hoist arrows
console.log(addNumsArrow(1,1))
*/

// Functions

function addNums(num1,num2){
    return num1 + num2
}

console.log(addNums(10,5))

const addNumsArrow = (num1,num2) => {
    return num1 + num2
}
//implicit return
console.log(addNumsArrow(10,22))
console.log(addNumsArrow2(11,22))

// store as variable
const addNums3 = function(num1,num2) {
    return num1, num2
}

console.log(addNums3(10,10))

const greeting = name => `Hello ${name}`

console.log(greeting('sean'))

function addManyNumbers(...numbers){
    console.log(numbers)
    return numbers.reduce((acc,number) => acc+number)
}

console.log(addManyNumbers(19,2,100,4))

// flow control

if (10>11) {
    console.log
}



