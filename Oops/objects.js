//functions are objects in JavaScript
//we can add properties to functions
function multipleBy5(num){

     // This function takes a number
    // and returns number * 5
    return num * 5;
}

// Adding a custom property to the function object
// This works because functions are objects
multipleBy5.power = 2


// Calling the function normally
console.log(multipleBy5(4)); // 20


// Accessing the custom property added to the function object
console.log(multipleBy5.power); // 2


// Every function has a prototype object by default
// This prototype is used when the function is used with 'new'
console.log(multipleBy5.prototype); // {}

//🧠 Important concept here
//multipleBy5 is:
//✅ a function (callable)
//✅ an object (can store properties)
//But its prototype is only useful when using new



// This function is meant to be used with 'new'
// It acts like a constructor
function createUser (username, score){
    // 'this' refers to the NEW object created by 'new'
    this.username = username;   
    this.score = score;
}

// This method is shared by ALL objects created from createUser
createUser.prototype.increment = function(){

    // 'this' refers to the object calling the method
    this.score++;
}

// Another method added to prototype
createUser.prototype.printMe = function(){
     // Accessing properties from the object using 'this'
    console.log(`username: ${this.username}, score: ${this.score}`);
}
//✔️ These methods are not copied for every user
//✔️ They are shared through the prototype → memory efficient



// 'new' does 4 things:
// 1. Creates a new empty object {}
// 2. Sets prototype: user1.__proto__ = createUser.prototype
// 3. Binds 'this' to the new object
// 4. Returns the new object automatically


const user1 = new createUser('alice', 5);
const user2 = new createUser('bob', 10);



// Calling method from prototype
// JS looks for printMe on user1
// If not found, it looks in createUser.prototype
user1.printMe();

