//Object literal 
//An object literal is just a simple way to create an object.
  // here user is a object
  // username is a state  of user object
const user = {
    username: "Aditya",
    email: "aditya@example.com",
    password: "securepassword123",

    getUserDetails: function(){
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}
console.log(user.username); // Output: Aditya
console.log(user.getUserDetails());    // Output:


// CONSTRUCTOR FUNCTION
//A constructor function is a special type of function that is used to create and initialize objects.

//A constructor function is a special function used to create objects.
//👉 It acts like a blueprint.
//Simple example

function Users(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
//Now create objects using new:

const user1 = new Users("Aditya", "aditya@example.com", "123");
const user2 = new Users("Rahul", "rahul@example.com", "456");
console.log(user1);

/*What is happening internally? 🧠

When you use new Users():
A new empty object is created
this points to that object
Properties are assigned
The object is returned automatically

Why not define methods inside constructor?
Because it wastes memory 😄

Using prototype:
One method shared by all objects*/


/* NEW KEYWORD
The new keyword is used to create an instance of an object that has a constructor function.
What happens when you use new? (Step by step)
When you write:
new User("Aditya");
JavaScript does 4 things internally:
1️⃣ Creates a new empty object
{}
2️⃣ Sets this to that new object
Inside the constructor:
this === newObject
3️⃣ Links the object to the prototype
newObject.__proto__ = User.prototype
This allows the object to use shared methods.
4️⃣ Returns the new object automatically
You don’t need to write return.*/