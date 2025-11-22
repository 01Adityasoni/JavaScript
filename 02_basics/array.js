// declare

const myArr = [0,1,2,3,4,5, true , "hello"] // in js arrays can hold multiple types of data
console.log(myArr)
console.log(myArr[3]) // access element at index 3


const myArr2 = new Array(1,2,3,4,5) // another way to declare an array
console.log(myArr2)

// methods in array

myArr.push(6) // adds element at the end
console.log(myArr)
myArr.pop(6) // removes element from the end
console.log(myArr)

myArr.unshift(9) // adds element at the start
console.log(myArr)
myArr.shift() // removes element from the start
console.log(myArr)

console.log(myArr.length) // length of array

console.log(myArr.includes(3)) // check if element is present in array
console.log(myArr.indexOf(3)) // get index of element in array

const newArr = myArr.join()
console.log(myArr)
console.log(newArr) // convert array to string

// slice and splice

console.log("A " , myArr);

const myn1 = myArr.slice(1,3) // creates a new array from index 1 to 3 (3 not included)
console.log(myn1);

console.log("B " , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2); // removes elements from index 1 to 3 (3 not included) and returns removed elements
console.log("C " , myArr); // original array is modified

// slice does not modify original array, splice modifies original array


const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["batman" , "superman" , "flash"  ]

//marvel_heros.push(dc_heros) // adds dc_heros array as a single element at the end of marvel_heros
//console.log(marvel_heros);
//console.log("hello")

console.log("printing concat")
const allHeros = marvel_heros.concat(dc_heros) // merges dc_heros array with marvel_heros and returns a new array
console.log(allHeros);


const newHeros = [...marvel_heros , ...dc_heros ] // spread operator to merge two arrays
console.log(newHeros);


console.log(Array.isArray("Aditya"))// checks if the given variable is an array or not
console.log(Array.from("Aditya")) // converts string to array of characters
console.log(Array.from({name:"Aditya"}))// converts object to array (only keys are taken)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)) // creates an array from the given arguments

