//const variable cannot be re assigned 
const accountId = 1234

//let is a global scoped variable we will use let in most of the cases 
let accountEmail = "aditya@gmail.com"

//var is a local scoped variable
var accountPassword = "12345"

//  also we can assign the variable like this without any variable but it is a bad practice
accountCity = "Delhi"

// if we initializr a variable but do not assigne any value then it gives undefined in output 
let accountState; 

// not allowed beacuse it is a constant variable 
//accountId = 345

accountEmail = "Aditya@123.com"
accountPassword = "212121"
accountCity = "Noida"

// prints only single value 
console.log(accountId);

//prints multiple values in the form of table 
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])