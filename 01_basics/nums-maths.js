const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))


const otherNumber = 123.456
console.log(otherNumber.toPrecision(4)) //It shows a number with a fixed total number of significant digits.It formats the number so that it has 4 significant digits (not decimal places).Because it keeps 4 important digits → 1, 2, 3, 5 (rounded).

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// *******************MATHS**********


console.log("maths")


console.log(Math)

console.log(Math.abs(-4)) // changes to positive

console.log(Math.round(4.3))// rounds to nearest integer

console.log(Math.ceil(4.3))// rounds up
console.log(Math.floor(4.7))// rounds down
console.log(Math.min(4, 1, 8, -3, 0))// gives minimum value
console.log(Math.max(4, 1, 8, -3, 0))// gives maximum value


console.log(Math.random())// gives random number between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1))// gives random number between 0 and 9


const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // gives random number between min and max (both inclusive)
//1️⃣ Math.random()
/*This gives a random number between 0 and 1 (like 0.1234, 0.9876 etc.)

But this is too small, so we stretch it.

//2️⃣ (max - min + 1)
max - min → gives the size of the range
Example: 20 - 10 = 10

+1 → to include the max number also.

So our range size becomes 11 → numbers from 0 to 10.

3️⃣ Math.random() * (max - min + 1)

This makes a random number between 0 and 10.999…

4️⃣ Math.floor(...)

This removes the decimal part.

So 6.38 → becomes 6

Now range is 0 to 10.

5️⃣ + min

This shifts the range up from:

0 to 10 → becomes

10 to 20

Example:
6 + 10 = 16

Final Output

Always a random number between 10 and 20 (both included).*/