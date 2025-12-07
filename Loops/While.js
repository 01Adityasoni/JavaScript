// WHILE 

let i = 0;
while (i<=10){
    console.log(`value of i is ${i}`);
    i = i+2;  
}


// while loop in array

let fruits = ['apple', 'banana', 'mango', 'grapes'];
let j = 0;
while (j<fruits.length){
    console.log(`fruit at index ${j} is ${fruits[j]}`);
    j++;
}



// DO WHILE Loop it is used in rare cases

// IN THIS LOOP THE BODY WILL BE EXECUTED ATLEAST ONCE EVEN IF THE CONDITION IS FALSE . because the condition is checked after executing the body.

let score = 11;

do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);

