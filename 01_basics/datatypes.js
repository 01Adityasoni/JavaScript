"use strict"; // So what does strict mode do? , Stops using undeclared variables, Stops duplicate parameter names, Makes this behave properly, Makes code run faster in some engines, Avoids using old features that cause bugs

//alert(3+3) // we are using node js , not browser so it doesnt work it has another syntax in node 


let name ="Aditya" // string data type  it is in double quotes 

let age = 18 // number data type 

let isLoggedIn = false // boolean data type true or false 

// numbers data type has a specific range from ✔ Maximum safe integer = 2⁵³ − 1 Which is: 9007199254740991 to Minimum safe integer = −(2⁵³ − 1)Which is:-9007199254740991 Why? Because JavaScript uses 53 bits to store integer precision inside the Number type.
 // if we want to use numbers beyond this range we can use BigInt data type

let bigNumber = 1234567890123456789012345678901234567890n // BigInt data type we use n at the end of the number to tell js that it is a bigint 

// null data type .. it is a standalone value that represents "no value" or "empty value" it does not means 0 it is also a type of object 

let nullVar = null

// undefined data type .. it is a variable that has been declared but not assigned a value yet

let undefinedVar; // it is undefined by default

// symbol data type .. it is a unique and immutable primitive value that can be used as the key of an object property used to show uniqie ness 

let sym1 = Symbol("id")
let sym2 = Symbol("id")

//object 

console.log(typeof null); // it shows object because of a bug in js it should be null  but it shows object

console.log(typeof undefined); // it shows undefined 



//*******PRIMITIVE DATA TYPES (call by value copy creation)********************************

// 7 types 
// 1. string
// 2. number
// 3. boolean
// 4. bigint
// 5. null
// 6. undefined
// 7. symbol


//******NON PRIMITIVE DATA TYPES (call by reference adddress pass )********************************

// 1. object
// 2. array
// 3. function


// array
const heros = ["Aditya" , "Rohit" , "Harsh"];
console.log("i am printing array")
console .log(typeof heros);// it gives object because array is also a type of object in javascript
// object

// always use key value pairs and curly braces to create object
let myObj = {
    name: "Aditya",
    age: 23,
}
console.log(typeof myObj);

// function 
// functions are also objects in javascript because they have properties and methods 

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof myFunction);//it is a object function 




// javaScript is a dynamically typed language means we dont have to specify data type of variable it automatically detects it .