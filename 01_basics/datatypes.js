"use strict"; // So what does strict mode do? , Stops using undeclared variables, Stops duplicate parameter names, Makes this behave properly, Makes code run faster in some engines, Avoids using old features that cause bugs

//alert(3+3) // we are using node js , not browser so it doesnt work it has another syntax in node 


let name ="Aditya" // string data type  it is in double quotes 

let age = 18 // number data type 

let isLoggedIn = false // boolean data type true or false 

// numbers data type has a specific range from ✔ Maximum safe integer = 2⁵³ − 1 Which is: 9007199254740991 to Minimum safe integer = −(2⁵³ − 1)Which is:-9007199254740991 Why? Because JavaScript uses 53 bits to store integer precision inside the Number type.
 // if we want to use numbers beyond this range we can use BigInt data type

let bigNumber = 1234567890123456789012345678901234567890n // BigInt data type we use n at the end of the number to tell js that it is a bigint 

// null data type .. it is a standalone value that represents "no value" or "empty value"

let nullVar = null

// undefined data type .. it is a variable that has been declared but not assigned a value yet

let undefinedVar; // it is undefined by default

// symbol data type .. it is a unique and immutable primitive value that can be used as the key of an object property used to show uniqie ness 

let sym1 = Symbol("id")
let sym2 = Symbol("id")

//object 

console.log(typeof null); // it shows object because of a bug in js it should be null  but it shows object

console.log(typeof undefined); // it shows undefined 