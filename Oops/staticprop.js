// Static Properties and Methods 
// static keyword is used to define methods or properties
// that belong to the CLASS itself, not to objects (instances)

class User {

    constructor(username){
        // instance property (belongs to object)
        this.username = username;
    }

    // instance method (available on objects)
    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    // static method (belongs to User class ONLY)
    static createId(){
        return `123`
    }
}

// creating an object (instance) of User
const aditya = new User('aditya');

// ❌ ERROR:
// createId is static, so it does NOT exist on 'aditya'
console.log(aditya.createId()); 
// Error: aditya.createId is not a function



/*
Why this error happens 
👉 static methods are NOT copied to objects
👉 They are stored on the class itself
👉 Static methods ARE inherited by the child CLASS
but
👉 NOT inherited by instances


Real-life example 🧠
Think like this:

Class = Company rules
Static method = Company ID generator
Object = Employee
Employees:
❌ cannot generate company ID
Company:
✅ can generate ID



When should you use static?

Use static when:
method does NOT depend on object data
utility/helper functions
constants
factory methods
validation logic



One-line interview answers 💡
static:
👉 “Static methods belong to the class, not to its instances.”
Why not accessible on object?
👉 “Because static methods are not part of the prototype chain.”
Are static methods inherited?
👉 “Yes, by child classes, but not by objects.”
*/
