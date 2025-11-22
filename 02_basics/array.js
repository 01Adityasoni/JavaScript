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


