// Inheritance Example

// Parent class
class User {

    // constructor runs when a new User (or child) object is created
    constructor(username, email, password) {
        // store values on the object
        this.username = username;
        this.email = email;
        this.password = password;
    }       

    // method available to User and all child classes
    logMe(){
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}


// Teacher is a CHILD class of User
// extends means: Teacher inherits properties and methods of User
class Teacher extends User {

    constructor(username, email, password, subject) {

        // super() calls the parent (User) constructor
        // it sets username, email, password on 'this'
        // super MUST be called before using 'this'
        super(username, email, password);

        // add Teacher-specific property
        this.subject = subject;
    }

    // method only available to Teacher
    addCourse() {
        console.log(`A course was added by ${this.username} on ${this.subject}`);  
    }   
}


// creating Teacher object
const teacher1 = new Teacher(
    'john_doe',
    'john@fb.com',
    '123',
    'Mathematics'
);

// Teacher can access User methods
teacher1.logMe();

// Teacher can access its own methods
teacher1.addCourse();


// creating User object (NOT Teacher)
const internTeacher = new User("intern_rock");

// User has access to User methods
internTeacher.logMe();

// ❌ ERROR (commented):
// internTeacher.addCourse();
// because User does NOT inherit from Teacher

// comparing objects
console.log(teacher1 === internTeacher); // false (different objects)
console.log(teacher1 === Teacher);       // false (object vs class)

// instanceof checks prototype chain
console.log(teacher1 instanceof Teacher); // true
console.log(teacher1 instanceof User);    // true

/*

What inheritance means 
👉 Inheritance means: child class can use parent class properties and methods
Teacher IS A User
User IS NOT a Teacher



Why super() is mandatory
Inside a child constructor:
❌ This will fail:
this.subject = subject; // ERROR
✅ Correct way:
super(username, email, password);
👉 super():
initializes parent class
sets this
must be called first


internTeacher.addCourse();ERROR Explanation
Because:
internTeacher is created from User
addCourse() exists only in Teacher
prototype chain does NOT go upward from User → Teacher



One-line interview answers 🔥

Inheritance:
👉 “A child class can reuse properties and methods of a parent class.”

extends:
👉 “Creates a prototype link between child and parent.”

super():
👉 “Calls the parent constructor and initializes this.”

instanceof:
👉 “Checks whether an object exists in a constructor’s prototype chain.”
*/















