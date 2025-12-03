
function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

sayMyName //function reference
sayMyName() //function invocation or function call


// function to add two numbers

function addTwoNumbers(num1, num2)// function parameters
{
    console.log(num1 + num2);
    
}

addTwoNumbers(); // NaN because num1 and num2 are undefined
addTwoNumbers(4,6); // 10(4 and 6 are arguments)

addTwoNumbers(4 , "5")// 45 because of string concatenation
addTwoNumbers(3 , "a") // 3a because of string concatenation
addTwoNumbers(3 , null) // 3 because null is converted to 0

const result = addTwoNumbers(10, 15); // function returns undefined if there is no return statement
console.log("result:", result); // undefined because addTwoNumbers function does not return anything

// function with return statement


function addTwoNumbersReturn(num1, num2){
    let result = num1 + num2;
    return result; // here return statement returns the value of result to the caller so now it does not shows undefined
    return num1 + num2; // another way to write return statement shortcut
    console.log("ABCD"); // this line will never be executed because return statement exits the function
    
}
const resultValue = addTwoNumbersReturn(10, 20);
console.log("returnValue:", resultValue); // 30






function UserLoginMessage (username){
   // if(username === undefined){
     //   console.log("Please provide username");
      //  return;
    //}
    return `${username} just logged in`;
}
UserLoginMessage("Aditya");// nothig will be shown because we are not capturing the return value or printing it
console.log(UserLoginMessage("Aditya")); // Aditya just logged in
console.log(UserLoginMessage());// undefined just logged in because username is undefined


// function to add items in a cart 
function calculateCartPrice(...num1)// rest operator to take multiple arguments . rest is used to take multiple arguments as an array
{
    return num1;
}

console.log(calculateCartPrice(200,400,500));

// pass object to a function 
const user ={
    username: "Rishabh",
    price: 5000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

handleObject({ // sending object directly 
    username: "Aditya",
    price: 7000
})

const myNewArray = [2000,400,6000,8000];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([100,200,300,400])); // 200