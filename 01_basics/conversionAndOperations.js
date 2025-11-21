let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // shows NaN => Not a Number because string contains characters


// 33 converts into number but 'abc' cannot be converted into number so the whole thing results in NaN

//true give 1 and false gives 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // it shows true because 1 is converted to true

// 1 = true 0 = false 

//"" = false
//"aditya" = true 



//****************OPERATIONS********************************

console.log("opertaion start")
let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) // 2^3 = 8 // power 
console.log(2/3)
console.log(5%3)


let str1 = "Aditya"
let str2 = " soni"

let str3 = str1+str2
console.log(str3)

let str4 = str3-str2
console.log(str4)// it will give NaN because - operation is not defined for strings

console.log("1" + 2) // output is 12 because Because the first value is a string, JavaScript converts 2 → "2" and joins them.
console.log(1 + "2") // output is 12 because Here also, "2" is a string, so 1 becomes "1" → "12".
console.log("1" + 2 + 2) // output is 122 because Because it starts with a string, everything becomes a string from that point:
console.log(1 + 2 + "2")// output is 32 because Here, the first two values are numbers, so they get added first, and then "2" is concatenated: 3 + "2" → "32". 







