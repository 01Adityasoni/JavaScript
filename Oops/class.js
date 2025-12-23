// ES6
// ES6 Class syntax

class User {
     // constructor runs automatically when we use 'new'
    constructor(username , email, password){
        
        // 'this' refers to the new object being created
        this.username = username;
        this.email = email;
        this.password = password;
    }


    // This method is added to User.prototype automatically
encryptPassword(){
      // 'this.password' comes from the object
        // returns password + 'abc'
    return `${this.password}abc`
}

    // Another prototype method
changeUsername(){
      // converts username to uppercase
    return `${this.username.toUpperCase()}`
}
}

// 'new' keyword:
// 1. creates a new empty object
// 2. sets 'this' to that object
// 3. calls constructor
// 4. returns the object
const user1 = new User('johnDoe', 'john@fb.com', '123')


// method call → 'this' points to user1
console.log(user1.encryptPassword())
console.log(user1.changeUsername())



//Behind the scenes
/*


function User(username , email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}   

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const user1 = new User('johnDoe', 'john@fb.com', '123')
console.log(user1.encryptPassword())
console.log(user1.changeUsername())



🔍 Important thing to understand

👉 Methods written inside a class are NOT copied to every object.
They live in User.prototype.
That means:
Memory efficient
Same method shared by all objects


🔥 Interview points (very important)

JavaScript is prototype-based, not class-based
ES6 classes are just a wrapper over constructor + prototype
Methods in class go to ClassName.prototype
new keyword:
creates object
binds this
links prototype
returns object
Methods are shared, not duplicated

One-line interview answer
👉 “ES6 classes in JavaScript are syntactic sugar over constructor functions and prototypes.”

*/