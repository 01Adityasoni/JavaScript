// stack memory (primitive types) // primitives data types are stored in stack memory we are doing changes in copy 
let num1 = 10;
let num2 = num1;

num2 = 20;

console.log(num1); // Output: 10
console.log(num2); // Output: 20

// heap memory (reference types) // reference data types are stored in heap memory we are doing changes in original object/array because of address reference

let userOne ={
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne;

userTwo.email = "user@gmail.com";

console.log(userOne.email); // Output: "user@gmail.com" because it is stored in heap memory and we are doing changes in original object with the help of address refference

console.log(userTwo.email); // Output: "user@gmail.com" because it is stored in heap memory and we are doing changes in original object with the help of address refference