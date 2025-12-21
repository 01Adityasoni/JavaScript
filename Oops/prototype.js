// A string is created and stored in a variable
// Note: extra spaces are added intentionally

let myName = "Aditya      ";


// length counts ALL characters, including spaces
// Output: length of string including trailing spaces
console.log(myName.length);

// truelength does NOT exist yet on String prototype
// So JavaScript returns undefined
console.log(myName.truelength); // undefined



// An array is created
// Arrays are also objects in JavaScript
let myHeros = [ "SpiderMan", "Hulk"];

// An object is created
let heroPower = {
    spiderman: "Web-shooting",// property
    hulk: "Smash",// property

 // method (function inside object)
    getSpiderPower: function(){
             // 'this' refers to the current object (heroPower)
        console.log(`spider power is ${this.spiderman}`);
    }
}

// Adding a method to Object.prototype
// This means EVERY object in JS can access this method
//✅ Because arrays and functions are also objects, they can use this method.
Object.prototype.aditya = function(){
    console.log(`Aditya is present in all objects`);
}


// Adding method only to arrays
//✅ Only arrays can access this method
//❌ Normal objects cannot

Array.prototype.heyAditya = function(){
    console.log(`Aditya says hello from array`);
}


// heroPower is an object
// Object.prototype.aditya is available
heroPower.aditya()

// myHeros is an array
// Array → Object → Object.prototype
myHeros.aditya()

// myHeros is an array
// Array.prototype.heyAditya exists
myHeros.heyAditya()


// heroPower is NOT an array
// So this will throw error if uncommented
// heroPower.heyAditya()   





// inheritance using __proto__


// Base object
const user = {
    name: 'Harsh',
    email: 'harsh@example.com'
}


// Teacher object
const Teacher = {
    makeVideos: true
}


// TeacherSupport object
const TeacherSupport = {
    isAvailable: false
}

// TASupport object
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

       // Setting prototype manually
    // TASupport → TeacherSupport
    __proto__: TeacherSupport
}
// Setting prototype of Teacher to user
// Teacher → user
Teacher.__proto__ = user;


// modern way to set prototype
// TeacherSupport will inherit from Teacher
// TeacherSupport → Teacher → user
//✔️ This is the clean and modern way
Object.setPrototypeOf(TeacherSupport, Teacher);



//🧵 Custom String method (real prototype power)
// A new string variable
let anotherUser = "Rohan      ";


// Adding custom method to String prototype
// Now ALL strings can use truelength()
String.prototype.truelength = function(){
      // 'this' refers to the string object calling truelength
    console.log(`${this}`);
   // console.log(`${this.name}`);

     // trim() removes spaces from start and end
    // length gives real length without extra spaces
    console.log(`true length is ${this.trim().length}`);
}

// Calling truelength on variable
anotherUser.truelength();

// Calling truelength directly on string literal
"aditya      ".truelength();

// Works with any string
"   hello world     ".truelength();



//✔️ JavaScript searches properties like this:
//object → prototype → parent prototype → ... → null
//✔️ This is called Prototype Chain
//✔️ If JS doesn’t find a property, it keeps searching until null


// means creating our own methods for built-in objects
//✔️ This is a powerful feature of JavaScript
//✔️ Use it wisely to avoid conflicts with future JS versions
//✔️ Avoid modifying built-in prototypes in production code
//This method did not exist in JavaScript before