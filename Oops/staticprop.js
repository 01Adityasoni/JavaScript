// Static Properties and Methods 
// static keyword is used to define static methods and properties for a class. Static methods and properties are called on the class itself, not on instances of the class.
// used to restrict access to certain properties or methods that should not be available on instances of the class.



class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const aditya = new User('aditya');
console.log((aditya.createId())); // Error: aditya.createId is not a function

class Tracher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}



const iphone = new Tracher('iPhone','iphone@example.com');
console.log(iphone.logMe()); // works fine
console.log(iphone.createId()); // Error: iphone.createId is not a function

