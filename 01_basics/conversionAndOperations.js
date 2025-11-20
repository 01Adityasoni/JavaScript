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