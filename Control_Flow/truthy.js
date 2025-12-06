// truthy and falsy values in JavaScript


// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
//const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];   


//truthy values: "0" , false , " " , [] , {} , function(){}, 

// how to check array is empty or not 
const userEmail = [];
if (userEmail.length === 0) {
    console.log("array is empty");
}

// check object is empty or not
const user = {};
if (Object.keys(user).length === 0) {
    console.log("object is empty");
}

// if we compare false with 0 it gives true because both are falsy values
// if we compare false with "" it gives true because both are falsy values
// if we compare 0 with "" it gives true because both are falsy values

// Nullish Coalescing Operator (??): null and undefined

let val1;
//val1 = 5 ?? 10; // val1 will be 5 because it's not null or undefined
val1 = null ?? 10; // val1 will be 10 because the left side is null
console.log(val1);



//Nullish Coalescing Operator (??)

//This operator checks only two things:
//✔️ null
//✔️ undefined

//If the left side value is null or undefined, then it takes the right side value.

//If the left side is any valid value, it keeps it — even if 0, false, or empty string.

//Example you wrote:
//let val1;
//val1 = 5 ?? 10;
//console.log(val1);


//👉 Here, 5 is not null or undefined
//So val1 becomes 5

//More examples:
//Example 1:
//let x = null ?? 20;
//console.log(x);  // Output: 20


//Because null triggers ?? to choose the second value.

//Example 2:
//let y = undefined ?? 30;
//console.log(y);  // Output: 30

//Example 3:
//let z = 0 ?? 50;
//console.log(z);  // Output: 0


//Even though 0 is falsy, it is not null or undefined, so 0 is used.

//When do we use this?

//💬 When we want a default value, but only if the original value is null or undefined
//(Not for 0 or false — those are valid values)


//✔️ Case 1:
//val1 = 15 ?? null;
//console.log(val1);


//👉 Here, the left value is 15
//15 is not null and not undefined
//So the result will be:

//✔ 15

//✔️ Case 2:
//val1 = 15 ?? undefined;
//console.log(val1);


//Again, left value is 15
//So the result is:

//✔ 15

//🔥 Final answer:

//Both expressions give:

//➡️ 15

//Because 15 is a valid value, so ?? does not replace it.



//Ternary Operator

//condition ? true : false 

const icecreamPrice = 50;
icecreamPrice >= 80 ? console.log("I will buy icecream") : console.log("I will not buy icecream");

//💡 Ternary Operator ( ? : )

//It is a short way to write if...else.



//condition ? expression_if_true : expression_if_false


//const icecreamPrice = 50;

//icecreamPrice >= 80
  //? console.log("I will buy icecream")
  //: console.log("I will not buy icecream");

//🔍 Explanation:

//Condition checked: icecreamPrice >= 80

//icecreamPrice is 50

//50 is not greater than or equal to 80
//So the condition is false

//➡️ Output:

//I will not buy icecream