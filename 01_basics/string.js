// first way to create string
const name = "Aditya"
const repoCount = 50

// console.log(name + repoCount + "value");
 
// {} it is called interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// second way to create string
const gameName = new String('Aditya')

console.log(gameName[0])
console.log(gameName.__proto__) // it shows all the methods available for string

// some methods
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))
const newString = gameName.substring(0,4)
console.log(newString)


const anotherString = gameName.slice(-3,4)
console.log(anotherString)

const newString1 = "   Aditya   "
console.log(newString1)
console.log(newString1.trim())

const url = "https://www.google.com/aditya%20soni"
console.log(url.replace('%20', '-'))


//convert string to array based on some saparator like space, - etc
const sentence = "aditya-soni-ram-soni"
console.log(sentence.split('-'))