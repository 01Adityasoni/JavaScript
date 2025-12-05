const user = {
    username: "Aditya",
    price: 1000,

// this keyword in javascript refers to the object it belongs to . It has different values depending on where it is used. means i tell that in the particular object give me this value of this object
//"this points to the object that is calling the function.""Inside an object method, this refers to that object.""this gives access to the object's own properties."
//“It means when we use this inside an object, we are asking for the value that belongs to that object.”


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website! Your price is ${this.price}.`);
        console.log(this); // this refers to the user object in this context


    }
}

//user.welcomeMessage();
//user.username = "John";
//user.price = 1500;
console.log(this);// this refers to the global object (window in browsers) in this context , in browser this is window object


function chai(){
    let tea = "green tea";
    console.log(this.tea); // undefined, because 'this' in a regular function refers to the global object, which does not have a 'tea' property
}
chai();



// ARROW FUNCTION

//const coffee = function(){
    //let username = " Aditya";
  //  console.log(this.username); // undefined, because 'this' in a regular function refers to the global object, which does not have a 'username' property
    
//}
//coffee();

 // if we use this in arrow function then it will refer to the surrounding context where it is defined so it shows undefined because there is no username in the surrounding context or arrow function does not have their own this . 
const coffee = () => {
    let username = " Aditya";
    console.log(this.username); // undefined, because arrow functions do not have their own 'this' and inherit it from the surrounding context
}
coffee();



const addTow = (num1 , num2) => { // if we are using curly braces then we have to use return keyword
    return num1 + num2;
}
console.log(addTow(5, 10));


// implicit return

const multiply = (a, b) => a * b; // implicit return without curly braces
console.log(multiply(4, 6));

const divide = (x,y) => (x / y); // implicit return with parentheses , if we use parentheses it is also considered as implicit return but here we does not use return keyword .. it is very important in react js 
console.log(divide(20, 4));


// return object 

const addTwo = (n1 , n2) => ({username: "Aditya"}); // returning object from arrow function , we have to use parentheses to return object implicitly
console.log(addTwo(1,2));
